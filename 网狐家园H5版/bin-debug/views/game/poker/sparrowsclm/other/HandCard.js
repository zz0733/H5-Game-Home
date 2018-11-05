/**
 * 用户手牌
 */
var game;
(function (game) {
    var sparrowsclm;
    (function (sparrowsclm) {
        var RIGHT_USER = 2;
        var LEFT_USER = 1;
        //手牌位置
        var HAND_POS = [new egret.Point(40, 500), new egret.Point(114, 372), new egret.Point(0, 0)];
        //手牌间隔
        var HAND_SPACE = [20, 10, 10];
        var HandCard = /** @class */ (function () {
            function HandCard(scene, viewId, cardsData) {
                this._cbCardsData = [];
                this._handCardsObject = [];
                this._handCardsPanel = [];
                this._isAllowOut = false;
                this._bMoved = false;
                this._scene = scene;
                this.onInitCardsData();
                this._handCardsPanel[cmd.sparrowsclm.MY_VIEW].addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegan, this);
                this._handCardsPanel[cmd.sparrowsclm.MY_VIEW].addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
                this._handCardsPanel[cmd.sparrowsclm.MY_VIEW].addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
                this._gameLogic = new sparrowsclm.GameLogic();
            }
            //数据初始化
            HandCard.prototype.onInitCardsData = function () {
                for (var i = 0; i < cmd.sparrowsclm.PLAYER_COUNT; i++) {
                    if (null == this._cbCardsData[i]) {
                        this._cbCardsData[i] = [];
                    }
                    if (null == this._handCardsObject[i]) {
                        this._handCardsObject[i] = [];
                    }
                    this._handCardsPanel[i] = this._scene._companet.getChildByName("handcardArea" + i); //视图
                    this._handCardsPanel[i].removeChildren(); //清除视图中所有的child
                }
            };
            /**数据重置 */
            HandCard.prototype.onRestCardsData = function () {
                for (var i = 0; i < cmd.sparrowsclm.PLAYER_COUNT; i++) {
                    if (null != this._cbCardsData[i]) {
                        this._cbCardsData[i] = [];
                    }
                    if (null != this._handCardsObject[i]) {
                        this._handCardsObject[i] = [];
                    }
                    this._handCardsPanel[i] = this._scene._companet.getChildByName("handcardArea" + i);
                    this._handCardsPanel[i].removeChildren();
                }
            };
            //创建手牌
            HandCard.prototype.createHandCard = function (viewId, cardsData, isLast, cardParam) {
                if (isLast === void 0) { isLast = false; }
                if (viewId < 0 || viewId >= cmd.sparrowsclm.PLAYER_COUNT)
                    return;
                var params = {};
                if (null == cardParam) {
                    if (viewId != cmd.sparrowsclm.MY_VIEW) {
                        params.bSheet = false;
                        params.texture = "game_handcard_" + viewId + "_png";
                        params.width = 24;
                        params.height = 63;
                    }
                    else {
                        params.bSheet = true;
                        params.texture = "game_handcard_png";
                        params.key = "card";
                        params.pos = 0;
                        params.width = 88;
                        params.height = 128;
                    }
                }
                else {
                    params = cardParam;
                }
                //手牌数据
                for (var i = 0; i < cardsData.length; i++) {
                    if (viewId == cmd.sparrowsclm.MY_VIEW) {
                        //合法校验,如果是当前玩家的手牌，需要进行合法检测
                        if (this._gameLogic.IsValidCard(cardsData[i])) {
                            this._cbCardsData[viewId].push(cardsData[i]);
                        }
                    }
                    else {
                        this._cbCardsData[viewId].push(cardsData[i]);
                    }
                }
                egret.assert(this._cbCardsData[viewId].length <= cmd.sparrowsclm.MAX_COUNT);
                //纹理
                var texture = "";
                if (viewId == cmd.sparrowsclm.MY_VIEW) {
                    texture = params ? params.texture : "game_handcard_png";
                }
                else if (viewId == LEFT_USER) {
                    texture = params ? params.texture : "game_handcard_1_png";
                }
                else if (viewId == RIGHT_USER) {
                    texture = params ? params.texture : "game_handcard_2_png";
                }
                //创建手牌
                var nIndex = 0;
                for (var i = 0; i < cardsData.length; i++) {
                    var cbData = cardsData[i];
                    if (0 == cbData)
                        continue;
                    var card = new sparrowsclm.CardSprite(texture, cbData, params);
                    if (viewId == cmd.sparrowsclm.MY_VIEW || viewId == RIGHT_USER) {
                        this._handCardsPanel[viewId].addChild(card);
                    }
                    else if (viewId == LEFT_USER) {
                        this._handCardsPanel[viewId].addChildAt(card, 0);
                    }
                    //保存引用
                    this._handCardsObject[viewId].push(card);
                    egret.assert(this._handCardsPanel[viewId].numChildren <= sparrowsclm.MAX_COUNT);
                    egret.assert(this._handCardsObject[viewId].length <= sparrowsclm.MAX_COUNT);
                    //调整位置
                    nIndex = this._handCardsObject[viewId].length - 1;
                    var isSpace = (isLast && ((cardsData.length == 1) || (i == this._cbCardsData[viewId].length - 1))) ? true : false;
                    this.sortCardsPos(viewId, nIndex, isSpace);
                }
            };
            //调整位置
            HandCard.prototype.sortCardsPos = function (viewId, index, isLast) {
                switch (viewId) {
                    case cmd.sparrowsclm.MY_VIEW:
                        {
                            var card = this._handCardsObject[viewId][index];
                            var offset = HAND_POS[viewId].x;
                            if (this._scene._weaveCardControl.getWeaveItemCount(viewId) > 0) {
                                offset = this._scene._weaveCardControl.getOffsetPos(viewId);
                            }
                            card.x = offset + index * card.width + (isLast ? HAND_SPACE[viewId] : 0);
                            card.y = HAND_POS[viewId].y;
                            card.setOrignalPosY(HAND_POS[viewId].y);
                        }
                        break;
                    case LEFT_USER:
                        {
                            var card = this._handCardsObject[viewId][index];
                            var offset = HAND_POS[viewId].y;
                            if (this._scene._weaveCardControl.getWeaveItemCount(viewId) > 0) {
                                offset = this._scene._weaveCardControl.getOffsetPos(viewId);
                            }
                            card.x = HAND_POS[viewId].x;
                            card.y = offset - index * 38 + (isLast ? -HAND_SPACE[viewId] : 0);
                        }
                        break;
                    case RIGHT_USER:
                        {
                            var card = this._handCardsObject[viewId][index];
                            var offset = HAND_POS[viewId].y;
                            if (this._scene._weaveCardControl.getWeaveItemCount(viewId) > 0) {
                                offset = this._scene._weaveCardControl.getOffsetPos(viewId);
                            }
                            card.x = HAND_POS[viewId].x;
                            ;
                            card.y = offset + index * 40 + (isLast ? HAND_SPACE[viewId] : 0);
                        }
                        break;
                }
            };
            //移除手牌
            HandCard.prototype.removeHandCard = function (viewId, deleteCount, isShowLast) {
                if (isShowLast === void 0) { isShowLast = false; }
                //其他玩家 
                if (viewId == cmd.sparrowsclm.MY_VIEW) {
                    return;
                }
                var count = this._cbCardsData[viewId].length;
                if (count == 0)
                    return;
                this._cbCardsData[viewId].splice(count - deleteCount, deleteCount);
                count = this._handCardsObject[viewId].length;
                if (count == 0)
                    return;
                for (var i = 0; i < deleteCount; i++) {
                    var card = this._handCardsObject[viewId][count - deleteCount + i];
                    this._handCardsPanel[viewId].removeChild(card);
                }
                this._handCardsObject[viewId].splice(count - deleteCount, deleteCount);
                //调整位置
                for (var i = 0; i < this._handCardsObject[viewId].length; i++) {
                    var card = this._handCardsObject[viewId][i];
                    var isSpace = (isShowLast && (i == this._handCardsObject[viewId].length - 1)) ? true : false;
                    this.sortCardsPos(viewId, i, isSpace);
                }
            };
            //更新手牌
            HandCard.prototype.updateCardsData = function (viewId, cardsData, isLast) {
                if (viewId != cmd.sparrowsclm.MY_VIEW)
                    return;
                //数据清空
                if (null != this._cbCardsData[viewId]) {
                    this._cbCardsData[viewId] = [];
                }
                this._handCardsPanel[viewId].removeChildren();
                this._handCardsObject[viewId] = [];
                this.createHandCard(viewId, cardsData, isLast);
            };
            //获取手牌数据
            HandCard.prototype.getHandCardData = function () {
                return this._cbCardsData[cmd.sparrowsclm.MY_VIEW];
            };
            //排序
            HandCard.prototype.sortHandCards = function () {
                //数据排序
                this._gameLogic.SortCardList(this._cbCardsData[cmd.sparrowsclm.MY_VIEW], this._cbCardsData[cmd.sparrowsclm.MY_VIEW].length);
                //视图位置调整
                this.updateCardsData(cmd.sparrowsclm.MY_VIEW, this._cbCardsData[cmd.sparrowsclm.MY_VIEW]);
            };
            //设置可出牌状态
            HandCard.prototype.setAllowOutCardStatus = function (isAllow) {
                this._isAllowOut = isAllow;
            };
            //设置听牌
            HandCard.prototype.setTingCardFlag = function (tingInfo) {
                if (null != tingInfo) {
                }
                else {
                }
            };
            /** 触摸事件
           * onTouchBegan
           * onTouchMove
           * onTouchEnd
           */
            HandCard.prototype.onTouchBegan = function (event) {
                // console.log("onTouch Began");
                this._bMoved = false;
                var touchPos = new egret.Point(event.localX, event.localY);
                if (!this._isAllowOut)
                    return;
                //遍历
                for (var i = 0; i < this._handCardsObject[cmd.sparrowsclm.MY_VIEW].length; i++) {
                    var card = this._handCardsObject[cmd.sparrowsclm.MY_VIEW][i];
                    var rect = card.getBounds();
                    rect.x = card.x;
                    rect.y = card.y;
                    if (rect.containsPoint(touchPos)) {
                        if (card._isShoot && this._isAllowOut) {
                            if (this._scene && this._scene._gameEngine) {
                                if (null != this._scene._gameEngine.onOutCard) {
                                    this._scene._gameEngine.onOutCard(card._cbCardData);
                                }
                            }
                            return;
                        }
                        card.setShoot(!card._isShoot);
                        if (card._isShoot && card.getStatus() == sparrowsclm.CARD_STATUS.TING) {
                            //番数提示
                            this._scene._gameEngine.onShowFanTips(i, card._cbCardData);
                        }
                    }
                    else {
                        card.setShoot(false);
                    }
                }
            };
            HandCard.prototype.onTouchMove = function (event) {
                // console.log("HandCards onTouch move [x:][y:]", event.localX, event.localY);
                this._bMoved = true;
            };
            HandCard.prototype.onTouchEnd = function (event) {
                // console.log("onTouch end");
            };
            /**内存回收 */
            HandCard.prototype.dealloc = function () {
                this._handCardsPanel[cmd.sparrowsclm.MY_VIEW].removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegan, this);
                this._handCardsPanel[cmd.sparrowsclm.MY_VIEW].removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
                this._handCardsPanel[cmd.sparrowsclm.MY_VIEW].removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
                for (var i = 0; i < cmd.sparrowsclm.PLAYER_COUNT; i++) {
                    if (null == this._cbCardsData[i]) {
                        this._cbCardsData[i] = null;
                    }
                    if (null == this._handCardsObject[i]) {
                        this._handCardsObject[i] = null;
                    }
                    this._handCardsPanel[i] = this._scene._companet.getChildByName("handcardArea" + i);
                    this._handCardsPanel[i].removeChildren();
                    this._handCardsPanel[i] = null;
                }
                this._gameLogic = null;
                this._cbCardsData = null;
                this._handCardsPanel = null;
            };
            return HandCard;
        }());
        sparrowsclm.HandCard = HandCard;
    })(sparrowsclm = game.sparrowsclm || (game.sparrowsclm = {}));
})(game || (game = {}));
