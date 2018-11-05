namespace game {
    export namespace runfast {
        interface IHoldContainerRes extends egret.DisplayObjectContainer {

        }

        const off = [{
            x: 399,
            y: 34,
            offX: 30,
            scale: 0.8
        }];

        export class HoldContainer {

            res: IHoldContainerRes;

            constructor(res: IHoldContainerRes) {
                this.res = res;
            }


            private _hold: number[] = [];
            private _poker: Poker[] = [];

            set hold(value: number[]) {
                this._hold = value;
                this._startPoint = new egret.Point(off[0].x + off[0].offX * this.getIndex(0),off[0].y);
                this._endPoint = new egret.Point(off[0].x + off[0].offX * this.getIndex(this._hold.length - 1),off[0].y);
            }

            private _startPoint: egret.Point;
            private _endPoint: egret.Point;

            /*
            * 设置并且显示手牌
            * */
            setHold(hold: number[]): void {
                this._hold = hold;
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
            }

            private _count: number;

            private set count(value: number) {
                this._count = value;
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
            chooseCards() {
                this.res.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.pokerParentTouch, this);
                this.res.addEventListener(egret.TouchEvent.TOUCH_CANCEL, this.pokerParentTouch, this);
                this.res.addEventListener(egret.TouchEvent.TOUCH_END, this.pokerParentTouch, this);
                this.res.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.pokerParentTouch, this);
            }

            private mTouchStart: egret.Point;

            private pokerParentTouch(event: egret.TouchEvent) {
                switch (event.type) {
                    case egret.TouchEvent.TOUCH_BEGIN:
                    case egret.TouchEvent.TOUCH_MOVE: {
                        //获得开始的节点
                        let point = new egret.Point(event.localX, event.localY);
                        if (event.type == egret.TouchEvent.TOUCH_BEGIN) this.mTouchStart = point;
                        let tp = this.mTouchStart.x < point.x ? this.mTouchStart : point;//保存小的节点

                        //计算出this.mTouchStart 以及 tp 之间的牌，并且改变他们之间的表现
                        //通过this._hold 所牌的范围 第一张牌 this._startPoint.x
                        let startIndex,endIndex;
                        for (let n = 0; n < 10; n++) {
                            if(this._poker[n].x + off[0].offX >= tp.x) {
                                startIndex = n;
                            }
                        }
                        for (let n = 9; n >= 0; n--) {
                            if(this._poker[n].x + off[0].offX <= this.mTouchStart.x) {
                                endIndex = n;
                            }
                        }
                        //得到所选中牌的index数值，切换被选中的牌选中状态
                        // for(let n = startIndex; n <= endIndex; n++){
                        //     this._poker[n].toggleSelected();
                        // }

                        break;
                    }
                    case egret.TouchEvent.TOUCH_END:
                    case egret.TouchEvent.TOUCH_CANCEL: {
                        break;
                    }

                }
            }
        }
    }
}