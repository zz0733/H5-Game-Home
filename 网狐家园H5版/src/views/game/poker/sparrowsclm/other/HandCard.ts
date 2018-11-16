/**
 * 用户手牌
 */
namespace game {
    export namespace sparrowsclm {
        const RIGHT_USER = 2;
        const LEFT_USER = 1;
        //手牌位置
        const HAND_POS: egret.Point[] = [new egret.Point(40, 500), new egret.Point(114, 372), new egret.Point(0, 0)]; 
        //手牌间隔
        const HAND_SPACE: number[] = [20, 10, 10];
        export class HandCard {
            private _cbCardsData: any[] = [];
            private _handCardsObject: any[] = [];
            private _handCardsPanel: eui.Panel[] = [];
            private _gameLogic: GameLogic;
            private _isAllowOut: boolean = false;
            private _scene: any;
            constructor(scene: any, viewId?: number, cardsData?: number[]) {
                this._scene = scene;
                this.onInitCardsData();

                this._handCardsPanel[cmd.sparrowsclm.MY_VIEW].addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegan, this);
                this._handCardsPanel[cmd.sparrowsclm.MY_VIEW].addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
                this._handCardsPanel[cmd.sparrowsclm.MY_VIEW].addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);

                this._gameLogic = new GameLogic();
            }

            //数据初始化
            public onInitCardsData() {
                for (let i = 0; i < cmd.sparrowsclm.PLAYER_COUNT; i++) {
                    if (null == this._cbCardsData[i]) {
                        this._cbCardsData[i] = [];
                    }

                    if (null == this._handCardsObject[i]) {
                        this._handCardsObject[i] = [];
                    }

                    this._handCardsPanel[i] = this._scene._companet.getChildByName("handcardArea" + i);//视图
                    this._handCardsPanel[i].removeChildren();//清除视图中所有的child
                }
            }

            /**数据重置 */
            public onRestCardsData() {
                for (let i = 0; i < cmd.sparrowsclm.PLAYER_COUNT; i++) {
                    if (null != this._cbCardsData[i]) {
                        this._cbCardsData[i] = [];
                    }

                    if (null != this._handCardsObject[i]) {
                        this._handCardsObject[i] = [];
                    }

                    this._handCardsPanel[i] = this._scene._companet.getChildByName("handcardArea" + i);
                    this._handCardsPanel[i].removeChildren();
                }
            }

            //创建手牌
            public createHandCard(viewId: number, cardsData: number[], isLast: boolean = false, cardParam?: any) {

                if (viewId < 0 || viewId >= cmd.sparrowsclm.PLAYER_COUNT)
                    return;
                
                let params: any = {};
                if (null == cardParam) {
                    if (viewId != cmd.sparrowsclm.MY_VIEW) {
                        params.bSheet = false;//反面
                        params.texture = "game_handcard_" + viewId + "_png";
                        params.width = 24;
                        params.height = 63;
                    } else {
                        params.bSheet = true;
                        params.texture = "game_handcard_png";
                        params.key = "card";
                        params.pos = 0;
                        params.width = 88;
                        params.height = 128;
                    }
                } else {
                    params = cardParam;
                }

                //手牌数据
                for (let i = 0; i < cardsData.length; i++) {
                    if (viewId == cmd.sparrowsclm.MY_VIEW) {
                        //合法校验,如果是当前玩家的手牌，需要进行合法检测
                        if (this._gameLogic.IsValidCard(cardsData[i])) {
                            this._cbCardsData[viewId].push(cardsData[i]);
                        }
                    } else {
                        this._cbCardsData[viewId].push(cardsData[i]);
                    }
                }

                egret.assert(this._cbCardsData[viewId].length <= cmd.sparrowsclm.MAX_COUNT);

                //纹理
                let texture: string = "";
                if (viewId == cmd.sparrowsclm.MY_VIEW) {
                    texture = params ? params.texture : "game_handcard_png";
                } else if (viewId == LEFT_USER) {
                    texture = params ? params.texture : "game_handcard_1_png";
                } else if (viewId == RIGHT_USER) {
                    texture = params ? params.texture : "game_handcard_2_png";
                }

                //创建手牌
                let nIndex: number = 0;
                for (let i = 0; i < cardsData.length; i++) {
                    let cbData = cardsData[i];
                    if (0 == cbData) continue;
                    let card = new CardSprite(texture, cbData, params);
                    if (viewId == cmd.sparrowsclm.MY_VIEW || viewId == RIGHT_USER) {
                        this._handCardsPanel[viewId].addChild(card);
                    } else if (viewId == LEFT_USER){
                         this._handCardsPanel[viewId].addChildAt(card,0);
                    }

                    //保存引用
                    this._handCardsObject[viewId].push(card);

                    egret.assert(this._handCardsPanel[viewId].numChildren <= MAX_COUNT);
                    egret.assert(this._handCardsObject[viewId].length <= MAX_COUNT);

                    //调整位置
                    nIndex = this._handCardsObject[viewId].length - 1;
                    let isSpace: boolean = (isLast && ((cardsData.length == 1) || (i == this._cbCardsData[viewId].length-1))) ? true : false;
                    this.sortCardsPos(viewId, nIndex,isSpace);
                }
            }

            //调整位置
            private sortCardsPos(viewId: number, index: number,isLast: boolean) {
        
                switch (viewId) {
                    case cmd.sparrowsclm.MY_VIEW:
                        {
                            let card: CardSprite = this._handCardsObject[viewId][index];
                            let offset: number = HAND_POS[viewId].x;
                            if (this._scene._weaveCardControl.getWeaveItemCount(viewId) > 0) {
                                offset =  this._scene._weaveCardControl.getOffsetPos(viewId);
                            }
        
                            card.x = offset + index * card.width + (isLast ? HAND_SPACE[viewId] : 0);
                            card.y = HAND_POS[viewId].y;
                            card.setOrignalPosY(HAND_POS[viewId].y);

                        }
                        break;
                    case LEFT_USER:
                        {
                            let card: CardSprite = this._handCardsObject[viewId][index];
                            let offset: number = HAND_POS[viewId].y;
                            if (this._scene._weaveCardControl.getWeaveItemCount(viewId) > 0) {
                                offset =  this._scene._weaveCardControl.getOffsetPos(viewId);
                            }
        
                            card.x = HAND_POS[viewId].x;
                            card.y = offset -  index* 38 + (isLast ? -HAND_SPACE[viewId] : 0);
                        }
                        break;
                    case RIGHT_USER:
                        {
                            let card: CardSprite = this._handCardsObject[viewId][index];
                            let offset: number = HAND_POS[viewId].y;
                            if (this._scene._weaveCardControl.getWeaveItemCount(viewId) > 0) {
                                offset = this._scene._weaveCardControl.getOffsetPos(viewId);
                            }   

                            card.x = HAND_POS[viewId].x;;
                            card.y = offset + index * 40 + (isLast ? HAND_SPACE[viewId] : 0);
                        }
                        break;
                }
            }

            //移除手牌
            public removeHandCard(viewId: number, deleteCount: number,isShowLast: boolean = false) {
                //其他玩家 
                if (viewId == cmd.sparrowsclm.MY_VIEW) {
                    return;
                }  

                let count = this._cbCardsData[viewId].length;
                if (count == 0) return;
                this._cbCardsData[viewId].splice(count-deleteCount,deleteCount);

                count = this._handCardsObject[viewId].length;
                if (count == 0) return
                for (let i = 0; i < deleteCount; i++) {
                    let card = this._handCardsObject[viewId][count-deleteCount+i];
                    this._handCardsPanel[viewId].removeChild(card);
                }

                this._handCardsObject[viewId].splice(count-deleteCount,deleteCount);

                //调整位置
                for (let i = 0; i< this._handCardsObject[viewId].length; i++) {
                    let card = this._handCardsObject[viewId][i];
                    let isSpace: boolean = (isShowLast && (i == this._handCardsObject[viewId].length - 1)) ? true : false;
                    this.sortCardsPos(viewId,i,isSpace);
                }
            }

            //更新手牌
            public updateCardsData(viewId: number, cardsData: number[],isLast?: boolean) {
                if (viewId != cmd.sparrowsclm.MY_VIEW) return;

                //数据清空
                if (null != this._cbCardsData[viewId]) {
                    this._cbCardsData[viewId] = [];
                }
                this._handCardsPanel[viewId].removeChildren();
                this._handCardsObject[viewId] = [];

                this.createHandCard(viewId, cardsData, isLast);
            }

            //获取手牌数据
            public getHandCardData() {
                return this._cbCardsData[cmd.sparrowsclm.MY_VIEW];
            }

            //排序
            public sortHandCards() {
                //数据排序
                this._gameLogic.SortCardList(this._cbCardsData[cmd.sparrowsclm.MY_VIEW], this._cbCardsData[cmd.sparrowsclm.MY_VIEW].length);

                //视图位置调整
                this.updateCardsData(cmd.sparrowsclm.MY_VIEW, this._cbCardsData[cmd.sparrowsclm.MY_VIEW]);
            }

            //设置可出牌状态
            public setAllowOutCardStatus(isAllow: boolean) {
                this._isAllowOut = isAllow;
            }

            //设置听牌
            public setTingCardFlag(tingInfo?: any[]) {
                if (null != tingInfo) {

                } else {

                }
            }

            /** 触摸事件
           * onTouchBegan
           * onTouchMove
           * onTouchEnd
           */
            private onTouchBegan(event: egret.TouchEvent) {
               // console.log("onTouch Began");
                this._bMoved = false;

                let touchPos: egret.Point = new egret.Point(event.localX, event.localY);

                if (!this._isAllowOut) return;

                //遍历
                for (let i = 0; i < this._handCardsObject[cmd.sparrowsclm.MY_VIEW].length; i++) {
                    let card: CardSprite = this._handCardsObject[cmd.sparrowsclm.MY_VIEW][i];
                    let rect: egret.Rectangle = card.getBounds();
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
                        if (card._isShoot && card.getStatus() == CARD_STATUS.TING) {
                            //番数提示
                            this._scene._gameEngine.onShowFanTips(i,card._cbCardData);
                        }
                    } else {
                        card.setShoot(false);
                    }
                }

            }

            private _bMoved = false;
            private onTouchMove(event: egret.TouchEvent) {
               // console.log("HandCards onTouch move [x:][y:]", event.localX, event.localY);
                
                this._bMoved = true;
            }

            private onTouchEnd(event: egret.TouchEvent) {
               // console.log("onTouch end");

            }

            /**内存回收 */
            public dealloc() {

                this._handCardsPanel[cmd.sparrowsclm.MY_VIEW].removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegan, this);
                this._handCardsPanel[cmd.sparrowsclm.MY_VIEW].removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
                this._handCardsPanel[cmd.sparrowsclm.MY_VIEW].removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);

                for (let i = 0; i < cmd.sparrowsclm.PLAYER_COUNT; i++) {
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
            }
        }
    }
}