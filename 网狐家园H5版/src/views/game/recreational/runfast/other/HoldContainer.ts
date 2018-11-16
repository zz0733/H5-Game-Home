namespace game {
    export namespace runfast {


        interface IHoldContainerRes extends egret.DisplayObjectContainer {

        }

        interface IPlayButtons extends eui.Group {
            btn_tip: eui.Button;
            btn_out_card: eui.Button;
        }

        export const off = [{
            x: 399,
            y: 34,
            offX: 40,
            scale: 1
        }];

        export class HoldContainer {

            res: IHoldContainerRes;

            private _gameLogic: GameLogic;
            private _main: GameViewLayer;

            private _btnTip: eui.Button;
            private _btnOutCar: eui.Button;

            constructor(res: IHoldContainerRes, main: GameViewLayer, btn: eui.Button) {
                this.res = res;
                this._gameLogic = new GameLogic();
                this._main = main;
                this._btnTip = btn;
                // this._btnOutCar = btn;
            }


            private _hold: number[] = [];
            private _poker: Poker[];

            set hold(value: number[]) {
                this._hold = value;
            }

            private _startPoint: egret.Point;
            private _endPoint: egret.Point;

            /*
            * 设置并且显示手牌
            * */
            setHold(hold: number[]): void {
                this.res.removeChildren();
                this.res.visible = true;
                this.hold = hold;
                this._poker = [];
                this.sortHold();
                this._hold.forEach((value, index) => {
                    let poker = new Poker(value);
                    poker.x = off[0].x + off[0].offX * this.getIndex(index);
                    poker.y = off[0].y;
                    poker.scaleX = poker.scaleY = off[0].scale;
                    this._poker.push(poker);
                    this.res.addChild(poker);
                    if (index == 0) {
                        this._startPoint = new egret.Point(poker.x, poker.y);
                    } else if (index == this._hold.length - 1) {
                        this._endPoint = new egret.Point(poker.x, poker.y);
                    }
                })
            }

            /**
             * 减少手牌
             * */
            spliceHold(splice: number[]) { //托管情况以及出牌情况
                let newHold = this._hold.concat();
                splice.forEach(value => {
                    newHold.forEach((hold, index) => {
                        if (hold == value) {
                            newHold.splice(index, 1);
                        }
                    })
                });
                this.setHold(newHold);
            }

            private getIndex(value: number): number {
                let [back, length] = [0, this._hold.length];
                back = length % 2 ? value - Math.floor(length / 2) : value - length / 2;
                return back;
            }

            /**
             * 设置手牌张数
             * */
            setHoldNumber(count: number) {
                this.count = count;
                this.res.visible = true;

                let pokerNum = this.res.getChildByName("poker_num") as eui.Component;
                // let numberLabel = pokerNum.getChildByName("number_label") as utils.LabelAtlas;
                if (null != pokerNum.getChildByName("number_label")) {
                    pokerNum.removeChildren();
                    // utils.setAnchorCenter(numberLabel);
                    // numberLabel.setText(count + "");
                }
                let numberLabel = utils.LabelAtlas.createLabel(count + "", "runfast_number_cardback_png", "0123456789", 26, 38);
                numberLabel.name = "number_label";
                utils.setAnchorCenter(numberLabel);
                pokerNum.addChild(numberLabel);
            }

            reduceHoldNum(num: number) {
                if (this._count - num >= 0) {
                    this.setHoldNumber(this._count - num);
                } else {
                    console.log("设置牌数错误");
                }
            }

            private _count: number;

            set count(value: number) {
                this._count = value;
            }

            get count(): number {
                return this._count;
            }

            sortHold(): void {
                for (let n = 0; n < this._hold.length - 1; n++) {
                    for (let m = n + 1; m < this._hold.length; m++) {
                        if (!this.compareValue(this._hold[n], this._hold[m])) {
                            let poker = this._hold[n];
                            this._hold[n] = this._hold[m];
                            this._hold[m] = poker;
                        }
                    }
                }
            }

            private compareValue(value1: number, value2: number): boolean {
                // console.log(0x0F & value1);
                let [val1, val2] = [this.getLogicValue(0x0F & value1), this.getLogicValue(0x0F & value2)];
                let [color1, color2] = [value1 >> 4, value2 >> 4];
                if (val1 > val2) {
                    return true;
                } else if (val1 == val2) {
                    if (color1 > color2) {
                        return true
                    }
                }
                return false;
            }

            private getLogicValue(value: number): number {
                let back = value;
                if (value > 13) {
                    back = value + 4;
                }
                if (value == 1) {
                    back = 14;
                }
                if (value == 2) {
                    back = 16;
                }
                return back;
            }

            /**
             * 选牌事件
             * */
            chooseCards(turnOver?: boolean) {
                this.res.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.pokerParentTouch, this);
                this.res.addEventListener(egret.TouchEvent.TOUCH_CANCEL, this.pokerParentTouch, this);
                this.res.addEventListener(egret.TouchEvent.TOUCH_END, this.pokerParentTouch, this);
                this.res.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.pokerParentTouch, this);

                if (turnOver) { //一轮结束清空上次出牌
                    this.lastPresent = [];
                }
                //提示事件
                this._btnTip.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTipOut, this);
                this._tipAry = [];
            }

            removeChooseCards() {
                this.res.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.pokerParentTouch, this);
                this.res.removeEventListener(egret.TouchEvent.TOUCH_CANCEL, this.pokerParentTouch, this);
                this.res.removeEventListener(egret.TouchEvent.TOUCH_END, this.pokerParentTouch, this);
                this.res.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.pokerParentTouch, this);
                this._btnTip.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTipOut, this);

            }

            private _tipAry: IPresentData[] = [];
            private _tipIndex: number = 0;
            private _reportSingleFlag: boolean = false;

            reportSingle() {
                // this._reportSingleFlag = true;
            }

            private onTipOut(evt: egret.Event) {
                for (let n = 0; n < this._poker.length; n++) {
                    this._poker[n].initStatus();
                }
                if (this._tipAry.length == 0 || !this._tipAry) {
                    this.searchTips();
                }
                //上家报单情况下必须选择最大的牌
                this.showTip(this._tipAry[(this._tipIndex++) % this._tipAry.length].cards);
                this.check();

            }

            private searchTips() {
                let last: IPresentData = {
                    cards:this.lastPresent
                };
                let hold = this._hold.concat();
                if (this.m_firstOut || this.lastPresent.length == 0) {
                    if (this.m_firstOut) {
                        this._tipAry = this._gameLogic.searchFivePresent(hold);
                    } else {
                        this._tipAry = this._gameLogic.searchForPresent(hold);
                    }
                } else {
                    this._tipAry = this._gameLogic.searchForPresent(hold, last);
                }
                this._tipIndex = 0;
            }

            private showTip(cards: number[]) {
                cards.forEach(value => {
                    for(let n = 0; n < this._poker.length; n++) {
                        if(value == this._poker[n].value) {
                            this._poker[n].toggleSelected();
                            break;
                        }
                    }
                })
            }

            private mTouchStart: egret.Point;

            private _lock: boolean = false;

            private pokerParentTouch(event: egret.TouchEvent) {
                switch (event.type) {
                    case egret.TouchEvent.TOUCH_BEGIN:
                    case egret.TouchEvent.TOUCH_MOVE: {
                        //获得开始的节点
                        let point = new egret.Point(event.localX, event.localY);
                        if (event.type == egret.TouchEvent.TOUCH_BEGIN) {
                            this.mTouchStart = point;
                            this._lock = true;
                        }
                        let tp = this.mTouchStart.x < point.x ? this.mTouchStart : point;//保存小的节点
                        let tp2 = this.mTouchStart.x < point.x ? point : this.mTouchStart;//较大节点

                        //计算出this.mTouchStart 以及 tp 之间的牌，并且改变他们之间的表现
                        //通过this._hold 所牌的范围 第一张牌 this._startPoint.x
                        if (this._lock) {
                            this._lock = false;
                            this._poker.forEach( poker => {
                                poker.m_lock = true;

                            })
                        }

                        let startIndex,endIndex;
                        for (let n = 0; n < this._poker.length; n++) {
                            if(this._poker[n].x + off[0].offX >= tp.x) {
                                startIndex = n;
                                break;
                            }
                        }
                        for (let n = this._poker.length - 1; n >= 0; n--) {
                            if(this._poker[n].x <= tp2.x) {
                                endIndex = n;
                                break
                            }
                        }
                        //得到所选中牌的index数值，切换被选中的牌选中状态
                        for (let n = 0; n < this._poker.length; n++) {
                            this._poker[n].removeMask();
                        }
                        for (let n = startIndex; n <= endIndex; n++){
                            this._poker[n].addMask();
                            // this._poker[n].toggleSelected();
                        }
                        //记录牌最开始时候的状态，将他们设置成相反的状态
                        break;
                    }
                    case egret.TouchEvent.TOUCH_END:
                    case egret.TouchEvent.TOUCH_CANCEL: {
                        let point = new egret.Point(event.localX, event.localY);
                        let tp = this.mTouchStart.x < point.x ? this.mTouchStart : point;//保存小的节点
                        let tp2 = this.mTouchStart.x < point.x ? point : this.mTouchStart;//较大节点

                        let startIndex,endIndex;
                        for (let n = 0; n < this._poker.length; n++) {
                            if(this._poker[n].x + off[0].offX >= tp.x) {
                                startIndex = n;
                                break;
                            }
                        }
                        for (let n = this._poker.length - 1; n >= 0; n--) {
                            if(this._poker[n].x <= tp2.x) {
                                endIndex = n;
                                break;
                            }
                        }
                        //去除遮罩以及更换选择状态
                        for (let n = startIndex; n <= endIndex; n++){
                            this._poker[n].removeMask();
                            this._poker[n].toggleSelected();
                        }
                        this.check();
                        break;
                    }

                }
            }

            //每轮出牌以后及时清除
            lastPresent:number[] = [];



            m_firstOut:boolean = true;

            private check(): void {
                //将选中的牌保存起来
                let outCards = [];
                this._poker.forEach(poker => {
                    if (poker.out == true) {
                        outCards.push(poker.value);
                    }
                });
                this._main.activeOutButton(this.checkOut(outCards), outCards);
                //检测所选牌是否符合出牌规则
            }

            /**
             * 检测出牌是否符合规范
             * */
            private checkOut(cards: number[]): boolean {

                // 上家报单情况下必须出最大的牌
                if(this._reportSingleFlag) {
                    this.searchTips();
                    let maxCards = this.searchMax(this._tipAry);
                    return cards == maxCards;
                    // if (cards == maxCards) {
                    //     return true;
                    // } else {
                    //     //下家报单，必须出最大类型的牌
                    //     return false;
                    // }
                }

                let out: IPresentData = {
                    cards:cards
                };
                if(this.m_firstOut) {
                    return this._gameLogic.firstAssertPresent(out);
                } else {
                    if (this.lastPresent.length != 0 && this.lastPresent) {
                        let last: IPresentData = {
                            cards: this.lastPresent
                        };
                        return this._gameLogic.assertPresent(out,last);
                    }
                    return this._gameLogic.assertPresent(out);
                }


            }

            private searchMax(tips: IPresentData[]): IPresentData {
                let back: IPresentData;
                //根据上家牌选出当前牌型中最大的牌，或者炸弹
                // let cardType = this.lastPresent;
                //遍历是否有炸弹
                let bombVec:IPresentData[] = [];
                for (let n = 0;n < tips.length; n++) {
                    if (tips[n].cardType == ECardType.CT_BOMB_CARD) {
                        bombVec.push(tips[n]);
                    }
                }
                if (tips.length == 1) {
                    back = tips[0];
                } else {
                    if (bombVec.length != 0) {
                        back = bombVec[0];
                        for(let n = 1; n < bombVec.length; n++) {
                            if (bombVec[n].cards[0] > back.cards[0]) {
                                back = bombVec[n];
                            }
                        }
                    } else {
                        back = tips[0];
                        for(let n = 1; n < tips.length; n++) {
                            if (tips[n].cards[0] > back.cards[0]) {
                                back = tips[n];
                            }
                        }
                    }
                }

                return back;
            }

        }
    }
}