/**
 * 游戏逻辑
 */
namespace game {
    export namespace runfast {

        /**
         * 跑得快出牌牌型枚举
         * */
        export enum ECardType {
            //错误类型
            CT_ERROR = 0,
            //单牌类型
            CT_SINGLE = 1,
            //对牌类型
            CT_DOUBLE = 2,
            //三条类型
            CT_THREE = 3,
            //单连类型，单连至少需要三张以上
            CT_SINGLE_LINE = 4,
            //对连类型，点数相连的2张及以上的对子，可以从5连到A。如：7788，334455
            CT_DOUBLE_LINE = 5,
            //三连类型，点数相连的2个及以上的3同张，可以从5连到A。如：888999
            CT_THREE_LINE = 6,
            //炸弹
            CT_BOMB_CARD = 7
        }

        /**
         * 出牌数据
         * */
        export interface IPresentData {
            //牌列表
            cards?: number[];
            //牌型
            cardType?: ECardType;
        }

        /**
         * 牌数分析数据接口
         * */
        export interface IAnalyseResult extends IPresentData {
            /**
             * 对应cbCardData下数组的长度
             * */
            cbBlockCount?: number[];  //扑克数目 0：单牌数目、1：对牌数目、2：三条数目、3：四张数目
            /**
             * 一维对应等值数量，一维下的数组保存的是所有等值的牌值
             * */
            cbCardData?: number[][];  //扑克数据 0：单牌对应的绝对值、1：对牌对应的绝对值、2：三条对应牌的绝对值、3：四张对应的牌绝对值
            /**
             * 主起始逻辑值
             * */
            startWeight?: number;
        }

        /**
         * 顺子牌数据接口
         * */
        interface ILine {
            //起始牌值，相当于权重
            startWeight: number;
            //顺子长度
            length: number;
            //顺子元素表，每个元素是逻辑值相同的集合
            values: IPresentData[];
        }

        export class GameLogic {

            /**
             * 出牌验证
             * */
            assertPresent(toAssert: IPresentData, lastPresent?: IPresentData): boolean {
                if (toAssert == []) return false;
                if (lastPresent === undefined) {
                    //第一个出牌
                    if (!toAssert.cardType) {
                        this.analyseCardKind(toAssert);
                    }
                    return toAssert.cardType != ECardType.CT_ERROR;
                }
                //出牌比较
                return this.comparePresent(lastPresent, toAssert);
            }

            /**
             * 首次出牌验证，必须包含黑桃5
             * */
            firstAssertPresent(toAssert: IPresentData): boolean {
                if (toAssert == []) return false;
                this.analyseCardKind(toAssert);

                if(toAssert.cardType == ECardType.CT_ERROR) {
                    console.error("首次出牌必须包括黑桃五");
                    return false;
                }

                for (let n = 0; n < toAssert.cards.length; n++) {
                    if(toAssert.cards[n] == cmd.runfast.FIRST_OUT_CARD) {
                        return true;
                    }
                }

                console.error("首次出牌必须包括黑桃五");
                return false;
            }

            /**
             * 搜索
             * 搜索所有可出的牌组合
             * 根据上一个出的牌型，检测自己的手牌，返回能出的牌组
             * */
            searchForPresent(cards: number[], lastPresent?: IPresentData): IPresentData[] {
                cards.sort((a, b) => this.getWeight(b) - this.getWeight(a));//排序，
                //
                if (lastPresent === undefined) {
                    //第一个出牌
                    return this.searchFirstPresent(cards);
                }
                //以前一个出牌为参照做提示
                return this.searchFollowOut(lastPresent, cards);
            }

            /**
             * 搜索所有包含黑桃五的组合牌型
             * */
            searchFivePresent(cards: number[]): IPresentData[] {
                //遍历搜索所有黑桃五组合
                let back = [];
                let need = this.searchFirstPresent(cards);
                need.forEach(present => {
                    for (let n = present.cards.length; n < present.cards.length; n--) {
                        if (present.cards[n] == cmd.runfast.FIRST_OUT_CARD) {
                            back.push(present);
                        }
                    }
                });
                return back;
            }



            private comparePresent(last: IAnalyseResult, current: IAnalyseResult): boolean {
                if (!last) {
                    return false;
                }
                if (!last.cardType) {
                    this.analyseCardKind(last);//牌型
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
                switch (current.cardType) { //长度相等、类型相同的情况下 比较startWeight;
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
            }

            private analyseCardKind(analyseResult: IAnalyseResult): ECardType {
                //基础分析
                this.analyseBase(analyseResult);
                //牌列表
                let cards = analyseResult.cards;
                //牌长度
                let cbCardCount = cards.length;
                //简单牌型
                switch (cbCardCount) {
                    case 0: { //空牌
                        return analyseResult.cardType = ECardType.CT_ERROR;
                    }
                    case 1: { //单牌
                        analyseResult.startWeight = this.getWeight(cards[0]);
                        return analyseResult.cardType = ECardType.CT_SINGLE;
                    }
                    case 2: {
                        let firstWeight = this.getWeight(cards[0]);
                        let secondWeight = this.getWeight(cards[1]);
                        if(firstWeight == secondWeight) {
                            analyseResult.startWeight = firstWeight;
                            return analyseResult.cardType = ECardType.CT_DOUBLE;
                        }
                        return analyseResult.cardType = ECardType.CT_ERROR;
                    }
                    case 3: { //三条或者顺子
                        let firstWeight = this.getWeight(cards[0]);
                        let secondWeight = this.getWeight(cards[1]);
                        let thirdWeight = this.getWeight(cards[2]);
                        if (analyseResult.cbBlockCount[2] == 1) {
                            analyseResult.startWeight = this.getWeight(cards[0]);
                            return analyseResult.cardType = ECardType.CT_THREE;
                        }
                        if (firstWeight - secondWeight ==1 && secondWeight - thirdWeight ==1) {
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
                        if (this.adjustLine(analyseResult,0)) {
                            analyseResult.startWeight = this.getWeight(cards[0]);
                            return analyseResult.cardType = ECardType.CT_SINGLE_LINE;
                        }
                        return analyseResult.cardType = ECardType.CT_ERROR;
                    }
                }
                //多牌牌型，包括顺子，二连以及三连
                if (cbCardCount % 2 == 0) { //判断二连还是三连的情况
                    if (this.adjustLine(analyseResult , 1)) {
                        analyseResult.startWeight = this.getWeight(cards[0]);
                        return analyseResult.cardType = ECardType.CT_DOUBLE_LINE;
                    }
                }
                if (this.adjustLine(analyseResult , 2)) {
                    analyseResult.startWeight = this.getWeight(cards[0]);
                    return analyseResult.cardType = ECardType.CT_THREE_LINE;
                }
                if (this.adjustLine(analyseResult , 0)) {
                    analyseResult.startWeight = this.getWeight(cards[0]);
                    return analyseResult.cardType = ECardType.CT_SINGLE_LINE;
                }


                return analyseResult.cardType = ECardType.CT_ERROR;
            }

            /**
             * 判断连对
             * */
            private adjustDoubleLine(result: IAnalyseResult): boolean {
                for (let n = 0; n < result.cbBlockCount.length; n++) {
                    if (result.cbBlockCount[n] != 0 && n != 1 ) return false;
                }
                let cards = result.cards;
                let firstWeight = this.getWeight(cards[0]);
                for (let i = 1; i < result.cbBlockCount[1]; i++) {
                    let card = result.cbCardData[1][i * 2];
                    if (firstWeight != (this.getWeight(card) + i)) {
                        return false;
                    }
                }
                return true;
            }

            /**
             * 判断各种顺子的情况
             * */
            private adjustLine(result: IAnalyseResult, mainLength: number): boolean {
                for (let n = 0; n < result.cbBlockCount.length; n++) {
                    if (result.cbBlockCount[n] != 0 && n != mainLength ) return false;
                }
                let cards = result.cards;
                let firstWeight = this.getWeight(cards[0]);
                for (let i = 1; i < result.cbBlockCount[1]; i++) {
                    let card = result.cbCardData[mainLength][i * 2];
                    if (firstWeight != (this.getWeight(card) + i)) {
                        return false;
                    }
                }
                return true;
            }

            /**
             * 权重
             * */
            private getWeight(value:number):number {
                let logicValue = this.getLogicValue(value);
                // Jock
                if (logicValue > 13) {
                    logicValue += 4;
                }
                // A
                else if(logicValue == 1) {
                    logicValue = 14;
                }
                // 2
                else if(logicValue == 2) {
                    logicValue = 16;//【A,2分离，避免成顺子或连队】
                }
                // 3-K
                else {

                }
                return logicValue;
            }

            /**
             * 逻辑值
             * */
            private getLogicValue(value:number):number {
                return value & 0x0F;
            }

            private searchFollowOut(lastPresent: IAnalyseResult, cards: number[]): IPresentData[] {
                if (!lastPresent) {
                    console.error(`还没有设置待跟的牌`);
                    return null;
                }
                if (!lastPresent.cardType) {
                    this.analyseCardKind(lastPresent);
                }
                let result: IPresentData[] = [];
                let analyseResult: IAnalyseResult = {
                    cards: cards,
                    cardType: null
                };
                this.analyseBase(analyseResult);

                //检测炸弹
                let boomVec: IAnalyseResult[] = this.searchBooms(analyseResult);//所有炸弹类型的跟牌
                //待跟牌首张
                let toFollowWeight = lastPresent.startWeight;
                //类型区分
                switch (lastPresent.cardType) {
                    case ECardType.CT_ERROR: {
                        console.error(`待跟的牌型错误`);
                        return null;
                    }
                    case ECardType.CT_SINGLE: {
                        result = boomVec.concat(this.searchLines(analyseResult, 1, 1, toFollowWeight));
                    }
                        break;
                    case ECardType.CT_DOUBLE: {
                        result = boomVec.concat(this.searchLines(analyseResult, 2, 1, toFollowWeight));
                    }
                        break;
                    case ECardType.CT_THREE: {
                        result = boomVec.concat(this.searchLines(analyseResult, 3, 1, toFollowWeight))
                    }
                        break;
                    case ECardType.CT_SINGLE_LINE: {
                        result = boomVec.concat(this.searchLines(analyseResult, 1, lastPresent.cards.length, toFollowWeight))
                    }
                        break;
                    case ECardType.CT_DOUBLE_LINE: {
                        result = boomVec.concat(this.searchLines(analyseResult, 2, lastPresent.cards.length / 2, toFollowWeight))
                    }
                        break;
                    case ECardType.CT_THREE_LINE: {
                        result = boomVec.concat(this.searchLines(analyseResult, 3, lastPresent.cards.length / 3, toFollowWeight))
                    }
                        break;
                    case ECardType.CT_BOMB_CARD: {
                        for (let i = 0; i < boomVec.length; i++) {
                            if (boomVec[i].startWeight > toFollowWeight) {
                                result.push(boomVec[i]);
                            }
                        }
                    }
                        break;
                }

                return result;
            }

            /**
             * 搜索顺子
             * @param myHold 手牌
             * @param sameCount 同逻辑值张数
             * @param lineLength 顺子长度
             * @param startWeight 起始逻辑值
             * */
            private searchLines(myHold: IAnalyseResult, sameCount: number, lineLength: number, startWeight: number = 0): IAnalyseResult[] {
                //myHold已经经过analyseBase()
                let hands = myHold.cards;
                //按逻辑值分组,已经将sameCount处理好
                let analyseResult = this.getSameLogicVec(hands, sameCount);//张数大于sameCount的牌值的IPresentData[]，包括cards: number[]以及startWeight
                //定最小宽查找不定长顺子lines 包括起始权重以及长度values：IPresentData[]相同逻辑值的牌集合
                //处理好lineLength，所有的顺子已经处理好，就是将顺子化作单张以后的值全部找出
                let lines: ILine[] = this.toLines(analyseResult, lineLength);

                //遍历顺子，查找首发值大于startValue的顺子
                let back: IPresentData[] = [];
                //顺子列表长度
                let totalLines = lines.length;
                //遍历不定长顺子
                for (let lineID = 0; lineID < totalLines; lineID++) {
                    //当前顺子
                    let line = lines[lineID];
                    //需要在总长【line.length】的顺子中便利长度为【lineLength】的顺子的次数
                    //如果顺子的长度大于minLength，则进行搜索
                    let totalSearchTimes = line.length - lineLength;
                    //不定长顺子内便利查找定长顺子
                    for (let searchTime = 0; searchTime <= totalSearchTimes; searchTime++) {
                        //判断顺子头值是否符合要求
                        if (line.startWeight - searchTime > startWeight) {
                            //出牌列表
                            let outCards: number[] = [];
                            //遍历装载卡牌
                            for (let i = 0; i < lineLength; i++) {
                                let valueIndex = searchTime + i;
                                let cardsVec = line.values[valueIndex].cards;
                                for (let cardIndex = 0; cardIndex < sameCount; cardIndex++) {
                                    outCards.push(cardsVec[cardIndex]);
                                }
                            }
                            back.push({cards: outCards, cardType: ECardType.CT_ERROR});
                        }
                    }
                }
                return back;
            }

            /**
             * 查找定最小宽不定长顺子，找出长度大于等于MinSame的所有顺子组合
             * @param analyseResult 手牌，已经做好处理，为键名为逻辑值键值为牌值的数组的数组
             * @param minSame 同逻辑值牌最小数量
             * */
            private toLines(analyseResult: IAnalyseResult[], minSame: number): ILine[] {
                let length = analyseResult.length;
                let lines: ILine[] = [];
                let index: number = 0;
                //遍历查找顺子
                while (index < length) {
                    let firstWeight = analyseResult[index].startWeight;
                    //2连以上需要开头在A以下
                    if (firstWeight < 15) {
                        let line: ILine = {
                            startWeight: firstWeight,
                            values: [analyseResult[index]],
                            length: 1
                        };
                        let offSet: number = 1;
                        index++;//
                        for (let i = index; i < length; i++) {
                            index = i;//
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
                    //单个无限制
                    else if (minSame == 1) {
                        let line: ILine = {
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
            }

            private searchBooms(analyseResult: IAnalyseResult): IAnalyseResult[] {
                let hands = analyseResult.cards;
                let back: IAnalyseResult[] = [];

                let boomVecLen: number = analyseResult.cbBlockCount[3];
                //炸弹
                if (boomVecLen) {
                    for (let i = 0; i < boomVecLen; i++) {
                        let boom: IAnalyseResult = {
                            cards: [],
                            startWeight: 0,
                            cardType: ECardType.CT_BOMB_CARD
                        };
                        let cards = [];
                        for (let j = 0; j < 4; j++) {
                            cards.push(analyseResult.cbCardData[3][i * 4 + j]);
                        }
                        boom.cards = cards;
                        boom.startWeight = this.getWeight(cards[0]);
                        back.push(boom);
                    }
                }
                return back;
            }

            private searchFirstPresent(cards: number[]): IPresentData[] {
                return this.getSameLogicVec(cards, 1);//单牌
            }

            /**
             * 获取张数至少为minSame同逻辑卡牌数组
             * */
            private getSameLogicVec(hands: number[], minSame: number): IPresentData[] {
                let back: IPresentData[] = [];
                let length = hands.length;
                //扑克分析
                for (let i = 0; i < length; i++) {
                    let sameCount: number = 1;//相同逻辑值的牌的数量
                    let weight = this.getWeight(hands[i]);
                    //搜索同牌
                    for (let j = i + 1; j < length; j++) {
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
                        let sameLogic = {
                            cards: [],
                            startWeight: weight
                        };
                        for (let j = 0; j < sameCount; j++) {
                            sameLogic.cards.push(hands[i + j]);
                        }
                        back.push(sameLogic);
                    }
                    //设置索引
                    i += sameCount - 1;
                }
                return back;
            }

            private analyseBase(result: IAnalyseResult): void {
                //清空数据
                this.clearAnalyse(result);
                //扑克列表
                let cards = result.cards;
                //扑克数量
                let totalCards = cards.length;

                for(let front = 0; front < cards.length; front++){
                    let [sameCount, logicValue, weight] = [1, this.getLogicValue(cards[front]), this.getWeight(cards[front])];

                    for (let back = front + 1; back < totalCards; back++) { //搜索往后的牌的逻辑值，如果相同，那就count++，一旦遇到不同的数值，跳出循环
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
                    let index = result.cbBlockCount[sameCount - 1]++;//某一类型的牌+1，index是原来的数量
                    for (let j = 0; j < sameCount; j++) {
                        result.cbCardData[sameCount - 1][index * sameCount + j] = cards[front + j];
                    }
                    //设置索引
                    front += sameCount - 1;
                }

            }

            //清空分析数据
            private clearAnalyse(analyse: IAnalyseResult): void {
                analyse.startWeight = 0;
                analyse.cbBlockCount = [];
                analyse.cbCardData = [];
                for (let i = 0; i < 4; i++) {
                    analyse.cbBlockCount.push(0);
                    analyse.cbCardData.push(this.zeroArray(cmd.runfast.HAND_COUNT));
                }

            }

            private zeroArray(length:number):number[] {
                let back = [];
                for(let i = 0;i < length; i++) {
                    back.push(0);
                }
                return back;
            }

        }

    }
}