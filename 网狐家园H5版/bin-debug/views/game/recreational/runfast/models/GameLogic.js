/**
 * 游戏逻辑
 */
var game;
(function (game) {
    var runfast;
    (function (runfast) {
        /**
         * 跑得快出牌牌型枚举
         * */
        var ECardType;
        (function (ECardType) {
            //错误类型
            ECardType[ECardType["CT_ERROR"] = 0] = "CT_ERROR";
            //单牌类型
            ECardType[ECardType["CT_SINGLE"] = 1] = "CT_SINGLE";
            //对牌类型
            ECardType[ECardType["CT_DOUBLE"] = 2] = "CT_DOUBLE";
            //三条类型
            ECardType[ECardType["CT_THREE"] = 3] = "CT_THREE";
            //单连类型，单连至少需要三张以上
            ECardType[ECardType["CT_SINGLE_LINE"] = 4] = "CT_SINGLE_LINE";
            //对连类型，点数相连的2张及以上的对子，可以从5连到A。如：7788，334455
            ECardType[ECardType["CT_DOUBLE_LINE"] = 5] = "CT_DOUBLE_LINE";
            //三连类型，点数相连的2个及以上的3同张，可以从5连到A。如：888999
            ECardType[ECardType["CT_THREE_LINE"] = 6] = "CT_THREE_LINE";
            //炸弹
            ECardType[ECardType["CT_BOMB_CARD"] = 7] = "CT_BOMB_CARD";
        })(ECardType = runfast.ECardType || (runfast.ECardType = {}));
        var GameLogic = (function () {
            function GameLogic() {
            }
            /**
             * 出牌验证
             * */
            GameLogic.prototype.assertPresent = function (toAssert, lastPresent) {
                if (toAssert == [])
                    return false;
                if (lastPresent === undefined) {
                    //第一个出牌
                    if (!toAssert.cardType) {
                        this.analyseCardKind(toAssert);
                    }
                    return toAssert.cardType != ECardType.CT_ERROR;
                }
                //出牌比较
                return this.comparePresent(lastPresent, toAssert);
            };
            /**
             * 首次出牌验证，必须包含黑桃5
             * */
            GameLogic.prototype.firstAssertPresent = function (toAssert) {
                if (toAssert == [])
                    return false;
                this.analyseCardKind(toAssert);
                if (toAssert.cardType == ECardType.CT_ERROR) {
                    console.error("首次出牌必须包括黑桃五");
                    return false;
                }
                for (var n = 0; n < toAssert.cards.length; n++) {
                    if (toAssert.cards[n] == cmd.runfast.FIRST_OUT_CARD) {
                        return true;
                    }
                }
                console.error("首次出牌必须包括黑桃五");
                return false;
            };
            /**
             * 搜索
             * 搜索所有可出的牌组合
             * 根据上一个出的牌型，检测自己的手牌，返回能出的牌组
             * */
            GameLogic.prototype.searchForPresent = function (cards, lastPresent) {
                var _this = this;
                cards.sort(function (a, b) { return _this.getWeight(b) - _this.getWeight(a); }); //排序，
                //
                if (lastPresent === undefined) {
                    //第一个出牌
                    return this.searchFirstPresent(cards);
                }
                //以前一个出牌为参照做提示
                return this.searchFollowOut(lastPresent, cards);
            };
            /**
             * 搜索所有包含黑桃五的组合牌型
             * */
            GameLogic.prototype.searchFivePresent = function (cards) {
                //遍历搜索所有黑桃五组合
                var back = [];
                var need = this.searchFirstPresent(cards);
                need.forEach(function (present) {
                    for (var n = present.cards.length; n < present.cards.length; n--) {
                        if (present.cards[n] == cmd.runfast.FIRST_OUT_CARD) {
                            back.push(present);
                        }
                    }
                });
                return back;
            };
            GameLogic.prototype.comparePresent = function (last, current) {
                if (!last) {
                    return false;
                }
                if (!last.cardType) {
                    this.analyseCardKind(last); //牌型
                }
                if (last.cardType == ECardType.CT_ERROR) {
                    throw new Error();
                }
                if (!current.cardType) {
                    this.analyseCardKind(current);
                }
                //类型判断
                if (current.cardType == ECardType.CT_ERROR) {
                    return false;
                }
                //炸弹判断  ！没有节省计算量，是为了方便阅读
                if ((last.cardType != ECardType.CT_BOMB_CARD) && (current.cardType == ECardType.CT_BOMB_CARD)) {
                    return true;
                }
                if ((last.cardType == ECardType.CT_BOMB_CARD) && (current.cardType != ECardType.CT_BOMB_CARD)) {
                    return false;
                }
                //类型对比+长度对比
                if ((last.cardType != current.cardType) || (last.cards.length != current.cards.length)) {
                    return false;
                }
                //开始对比
                switch (current.cardType) {
                    case ECardType.CT_SINGLE:
                    case ECardType.CT_DOUBLE:
                    case ECardType.CT_THREE:
                    case ECardType.CT_SINGLE_LINE:
                    case ECardType.CT_DOUBLE_LINE:
                    case ECardType.CT_THREE_LINE:
                    case ECardType.CT_BOMB_CARD: {
                        return current.startWeight > last.startWeight;
                    }
                }
                return false;
            };
            GameLogic.prototype.analyseCardKind = function (analyseResult) {
                //基础分析
                this.analyseBase(analyseResult);
                //牌列表
                var cards = analyseResult.cards;
                //牌长度
                var cbCardCount = cards.length;
                //简单牌型
                switch (cbCardCount) {
                    case 0: {
                        return analyseResult.cardType = ECardType.CT_ERROR;
                    }
                    case 1: {
                        analyseResult.startWeight = this.getWeight(cards[0]);
                        return analyseResult.cardType = ECardType.CT_SINGLE;
                    }
                    case 2: {
                        var firstWeight = this.getWeight(cards[0]);
                        var secondWeight = this.getWeight(cards[1]);
                        if (firstWeight == secondWeight) {
                            analyseResult.startWeight = firstWeight;
                            return analyseResult.cardType = ECardType.CT_DOUBLE;
                        }
                        return analyseResult.cardType = ECardType.CT_ERROR;
                    }
                    case 3: {
                        var firstWeight = this.getWeight(cards[0]);
                        var secondWeight = this.getWeight(cards[1]);
                        var thirdWeight = this.getWeight(cards[2]);
                        if (analyseResult.cbBlockCount[2] == 1) {
                            analyseResult.startWeight = this.getWeight(cards[0]);
                            return analyseResult.cardType = ECardType.CT_THREE;
                        }
                        if (firstWeight - secondWeight == 1 && secondWeight - thirdWeight == 1) {
                            analyseResult.startWeight = this.getWeight(cards[0]);
                            return analyseResult.cardType = ECardType.CT_SINGLE_LINE;
                        }
                        return analyseResult.cardType = ECardType.CT_ERROR;
                    }
                    case 4: {
                        if (analyseResult.cbBlockCount[3] == 1) {
                            analyseResult.startWeight = this.getWeight(cards[0]);
                            return analyseResult.cardType = ECardType.CT_BOMB_CARD;
                        }
                        if (this.adjustDoubleLine(analyseResult)) {
                            analyseResult.startWeight = this.getWeight(cards[0]);
                            return analyseResult.cardType = ECardType.CT_DOUBLE_LINE;
                        }
                        if (this.adjustLine(analyseResult, 0)) {
                            analyseResult.startWeight = this.getWeight(cards[0]);
                            return analyseResult.cardType = ECardType.CT_SINGLE_LINE;
                        }
                        return analyseResult.cardType = ECardType.CT_ERROR;
                    }
                }
                //多牌牌型，包括顺子，二连以及三连
                if (cbCardCount % 2 == 0) {
                    if (this.adjustLine(analyseResult, 1)) {
                        analyseResult.startWeight = this.getWeight(cards[0]);
                        return analyseResult.cardType = ECardType.CT_DOUBLE_LINE;
                    }
                }
                if (this.adjustLine(analyseResult, 2)) {
                    analyseResult.startWeight = this.getWeight(cards[0]);
                    return analyseResult.cardType = ECardType.CT_THREE_LINE;
                }
                if (this.adjustLine(analyseResult, 0)) {
                    analyseResult.startWeight = this.getWeight(cards[0]);
                    return analyseResult.cardType = ECardType.CT_SINGLE_LINE;
                }
                return analyseResult.cardType = ECardType.CT_ERROR;
            };
            /**
             * 判断连对
             * */
            GameLogic.prototype.adjustDoubleLine = function (result) {
                for (var n = 0; n < result.cbBlockCount.length; n++) {
                    if (result.cbBlockCount[n] != 0 && n != 1)
                        return false;
                }
                var cards = result.cards;
                var firstWeight = this.getWeight(cards[0]);
                for (var i = 1; i < result.cbBlockCount[1]; i++) {
                    var card = result.cbCardData[1][i * 2];
                    if (firstWeight != (this.getWeight(card) + i)) {
                        return false;
                    }
                }
                return true;
            };
            /**
             * 判断各种顺子的情况
             * */
            GameLogic.prototype.adjustLine = function (result, mainLength) {
                for (var n = 0; n < result.cbBlockCount.length; n++) {
                    if (result.cbBlockCount[n] != 0 && n != mainLength)
                        return false;
                }
                var cards = result.cards;
                var firstWeight = this.getWeight(cards[0]);
                for (var i = 1; i < result.cbBlockCount[1]; i++) {
                    var card = result.cbCardData[mainLength][i * 2];
                    if (firstWeight != (this.getWeight(card) + i)) {
                        return false;
                    }
                }
                return true;
            };
            /**
             * 权重
             * */
            GameLogic.prototype.getWeight = function (value) {
                var logicValue = this.getLogicValue(value);
                // Jock
                if (logicValue > 13) {
                    logicValue += 4;
                }
                else if (logicValue == 1) {
                    logicValue = 14;
                }
                else if (logicValue == 2) {
                    logicValue = 16; //【A,2分离，避免成顺子或连队】
                }
                else {
                }
                return logicValue;
            };
            /**
             * 逻辑值
             * */
            GameLogic.prototype.getLogicValue = function (value) {
                return value & 0x0F;
            };
            GameLogic.prototype.searchFollowOut = function (lastPresent, cards) {
                if (!lastPresent) {
                    console.error("\u8FD8\u6CA1\u6709\u8BBE\u7F6E\u5F85\u8DDF\u7684\u724C");
                    return null;
                }
                if (!lastPresent.cardType) {
                    this.analyseCardKind(lastPresent);
                }
                var result = [];
                var analyseResult = {
                    cards: cards,
                    cardType: null
                };
                this.analyseBase(analyseResult);
                //检测炸弹
                var boomVec = this.searchBooms(analyseResult); //所有炸弹类型的跟牌
                //待跟牌首张
                var toFollowWeight = lastPresent.startWeight;
                //类型区分
                switch (lastPresent.cardType) {
                    case ECardType.CT_ERROR: {
                        console.error("\u5F85\u8DDF\u7684\u724C\u578B\u9519\u8BEF");
                        return null;
                    }
                    case ECardType.CT_SINGLE:
                        {
                            result = boomVec.concat(this.searchLines(analyseResult, 1, 1, toFollowWeight));
                        }
                        break;
                    case ECardType.CT_DOUBLE:
                        {
                            result = boomVec.concat(this.searchLines(analyseResult, 2, 1, toFollowWeight));
                        }
                        break;
                    case ECardType.CT_THREE:
                        {
                            result = boomVec.concat(this.searchLines(analyseResult, 3, 1, toFollowWeight));
                        }
                        break;
                    case ECardType.CT_SINGLE_LINE:
                        {
                            result = boomVec.concat(this.searchLines(analyseResult, 1, lastPresent.cards.length, toFollowWeight));
                        }
                        break;
                    case ECardType.CT_DOUBLE_LINE:
                        {
                            result = boomVec.concat(this.searchLines(analyseResult, 2, lastPresent.cards.length / 2, toFollowWeight));
                        }
                        break;
                    case ECardType.CT_THREE_LINE:
                        {
                            result = boomVec.concat(this.searchLines(analyseResult, 3, lastPresent.cards.length / 3, toFollowWeight));
                        }
                        break;
                    case ECardType.CT_BOMB_CARD:
                        {
                            for (var i = 0; i < boomVec.length; i++) {
                                if (boomVec[i].startWeight > toFollowWeight) {
                                    result.push(boomVec[i]);
                                }
                            }
                        }
                        break;
                }
                return result;
            };
            /**
             * 搜索顺子
             * @param myHold 手牌
             * @param sameCount 同逻辑值张数
             * @param lineLength 顺子长度
             * @param startWeight 起始逻辑值
             * */
            GameLogic.prototype.searchLines = function (myHold, sameCount, lineLength, startWeight) {
                if (startWeight === void 0) { startWeight = 0; }
                //myHold已经经过analyseBase()
                var hands = myHold.cards;
                //按逻辑值分组,已经将sameCount处理好
                var analyseResult = this.getSameLogicVec(hands, sameCount); //张数大于sameCount的牌值的IPresentData[]，包括cards: number[]以及startWeight
                //定最小宽查找不定长顺子lines 包括起始权重以及长度values：IPresentData[]相同逻辑值的牌集合
                //处理好lineLength，所有的顺子已经处理好，就是将顺子化作单张以后的值全部找出
                var lines = this.toLines(analyseResult, lineLength);
                //遍历顺子，查找首发值大于startValue的顺子
                var back = [];
                //顺子列表长度
                var totalLines = lines.length;
                //遍历不定长顺子
                for (var lineID = 0; lineID < totalLines; lineID++) {
                    //当前顺子
                    var line = lines[lineID];
                    //需要在总长【line.length】的顺子中便利长度为【lineLength】的顺子的次数
                    //如果顺子的长度大于minLength，则进行搜索
                    var totalSearchTimes = line.length - lineLength;
                    //不定长顺子内便利查找定长顺子
                    for (var searchTime = 0; searchTime <= totalSearchTimes; searchTime++) {
                        //判断顺子头值是否符合要求
                        if (line.startWeight - searchTime > startWeight) {
                            //出牌列表
                            var outCards = [];
                            //遍历装载卡牌
                            for (var i = 0; i < lineLength; i++) {
                                var valueIndex = searchTime + i;
                                var cardsVec = line.values[valueIndex].cards;
                                for (var cardIndex = 0; cardIndex < sameCount; cardIndex++) {
                                    outCards.push(cardsVec[cardIndex]);
                                }
                            }
                            back.push({ cards: outCards, cardType: ECardType.CT_ERROR });
                        }
                    }
                }
                return back;
            };
            /**
             * 查找定最小宽不定长顺子，找出长度大于等于MinSame的所有顺子组合
             * @param analyseResult 手牌，已经做好处理，为键名为逻辑值键值为牌值的数组的数组
             * @param minSame 同逻辑值牌最小数量
             * */
            GameLogic.prototype.toLines = function (analyseResult, minSame) {
                var length = analyseResult.length;
                var lines = [];
                var index = 0;
                //遍历查找顺子
                while (index < length) {
                    var firstWeight = analyseResult[index].startWeight;
                    //2连以上需要开头在A以下
                    if (firstWeight < 15) {
                        var line = {
                            startWeight: firstWeight,
                            values: [analyseResult[index]],
                            length: 1
                        };
                        var offSet = 1;
                        index++; //
                        for (var i = index; i < length; i++) {
                            index = i; //
                            if (analyseResult[i].startWeight == (firstWeight - offSet)) {
                                line.values.push(analyseResult[i]);
                                line.length++;
                                offSet++;
                            }
                            else {
                                break;
                            }
                        }
                        if (line.length >= minSame) {
                            lines.push(line);
                        }
                    }
                    else if (minSame == 1) {
                        var line = {
                            startWeight: firstWeight,
                            values: [analyseResult[index]],
                            length: 1
                        };
                        lines.push(line);
                        index++;
                    }
                    else {
                        index++;
                    }
                }
                return lines;
            };
            GameLogic.prototype.searchBooms = function (analyseResult) {
                var hands = analyseResult.cards;
                var back = [];
                var boomVecLen = analyseResult.cbBlockCount[3];
                //炸弹
                if (boomVecLen) {
                    for (var i = 0; i < boomVecLen; i++) {
                        var boom = {
                            cards: [],
                            startWeight: 0,
                            cardType: ECardType.CT_BOMB_CARD
                        };
                        var cards = [];
                        for (var j = 0; j < 4; j++) {
                            cards.push(analyseResult.cbCardData[3][i * 4 + j]);
                        }
                        boom.cards = cards;
                        boom.startWeight = this.getWeight(cards[0]);
                        back.push(boom);
                    }
                }
                return back;
            };
            GameLogic.prototype.searchFirstPresent = function (cards) {
                return this.getSameLogicVec(cards, 1); //单牌
            };
            /**
             * 获取张数至少为minSame同逻辑卡牌数组
             * */
            GameLogic.prototype.getSameLogicVec = function (hands, minSame) {
                var back = [];
                var length = hands.length;
                //扑克分析
                for (var i = 0; i < length; i++) {
                    var sameCount = 1; //相同逻辑值的牌的数量
                    var weight = this.getWeight(hands[i]);
                    //搜索同牌
                    for (var j = i + 1; j < length; j++) {
                        //获取扑克
                        if (this.getWeight(hands[j]) == weight) {
                            sameCount++;
                        }
                        else {
                            break;
                        }
                    }
                    //错误过滤
                    if (sameCount > 4) {
                        egret.assert(false);
                        return;
                    }
                    //设置结果
                    if (sameCount >= minSame) {
                        var sameLogic = {
                            cards: [],
                            startWeight: weight
                        };
                        for (var j = 0; j < sameCount; j++) {
                            sameLogic.cards.push(hands[i + j]);
                        }
                        back.push(sameLogic);
                    }
                    //设置索引
                    i += sameCount - 1;
                }
                return back;
            };
            GameLogic.prototype.analyseBase = function (result) {
                //清空数据
                this.clearAnalyse(result);
                //扑克列表
                var cards = result.cards;
                //扑克数量
                var totalCards = cards.length;
                for (var front = 0; front < cards.length; front++) {
                    var _a = [1, this.getLogicValue(cards[front]), this.getWeight(cards[front])], sameCount = _a[0], logicValue = _a[1], weight = _a[2];
                    for (var back = front + 1; back < totalCards; back++) {
                        //获取扑克
                        if (this.getLogicValue(cards[back]) == logicValue) {
                            sameCount++;
                        }
                        else {
                            break;
                        }
                    }
                    //错误过滤，直接跳出函数
                    if (sameCount > 4) {
                        egret.assert(false);
                        return;
                    }
                    var index = result.cbBlockCount[sameCount - 1]++; //某一类型的牌+1，index是原来的数量
                    for (var j = 0; j < sameCount; j++) {
                        result.cbCardData[sameCount - 1][index * sameCount + j] = cards[front + j];
                    }
                    //设置索引
                    front += sameCount - 1;
                }
            };
            //清空分析数据
            GameLogic.prototype.clearAnalyse = function (analyse) {
                analyse.startWeight = 0;
                analyse.cbBlockCount = [];
                analyse.cbCardData = [];
                for (var i = 0; i < 4; i++) {
                    analyse.cbBlockCount.push(0);
                    analyse.cbCardData.push(this.zeroArray(cmd.runfast.HAND_COUNT));
                }
            };
            GameLogic.prototype.zeroArray = function (length) {
                var back = [];
                for (var i = 0; i < length; i++) {
                    back.push(0);
                }
                return back;
            };
            return GameLogic;
        }());
        runfast.GameLogic = GameLogic;
    })(runfast = game.runfast || (game.runfast = {}));
})(game || (game = {}));
