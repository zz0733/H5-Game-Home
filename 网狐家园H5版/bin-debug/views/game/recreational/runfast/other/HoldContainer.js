var game;
(function (game) {
    var runfast;
    (function (runfast) {
        var off = [{
                x: 399,
                y: 34,
                offX: 30,
                scale: 0.8
            }];
        var HoldContainer = (function () {
            function HoldContainer(res) {
                this._hold = [];
                this._poker = [];
                this.res = res;
            }
            Object.defineProperty(HoldContainer.prototype, "hold", {
                set: function (value) {
                    this._hold = value;
                    this._startPoint = new egret.Point(off[0].x + off[0].offX * this.getIndex(0), off[0].y);
                    this._endPoint = new egret.Point(off[0].x + off[0].offX * this.getIndex(this._hold.length - 1), off[0].y);
                },
                enumerable: true,
                configurable: true
            });
            /*
            * 设置并且显示手牌
            * */
            HoldContainer.prototype.setHold = function (hold) {
                var _this = this;
                this._hold = hold;
                this.sortHold();
                this._hold.forEach(function (value, index) {
                    var poker = new runfast.Poker(value);
                    poker.x = off[0].x + off[0].offX * _this.getIndex(index);
                    poker.y = off[0].y;
                    poker.scaleX = poker.scaleY = off[0].scale;
                    _this._poker.push(poker);
                    _this.res.addChild(poker);
                    if (index == 0) {
                        _this._startPoint = new egret.Point(poker.x, poker.y);
                    }
                    else if (index == _this._hold.length - 1) {
                        _this._endPoint = new egret.Point(poker.x, poker.y);
                    }
                });
            };
            HoldContainer.prototype.getIndex = function (value) {
                var _a = [0, this._hold.length], back = _a[0], length = _a[1];
                back = length % 2 ? value - Math.floor(length / 2) : value - length / 2;
                return back;
            };
            /**
             * 设置手牌张数
             * */
            HoldContainer.prototype.setHoldNumber = function (count) {
                this.count = count;
            };
            Object.defineProperty(HoldContainer.prototype, "count", {
                set: function (value) {
                    this._count = value;
                },
                enumerable: true,
                configurable: true
            });
            HoldContainer.prototype.sortHold = function () {
                for (var n = 0; n < this._hold.length - 1; n++) {
                    for (var m = n + 1; m < this._hold.length; m++) {
                        if (!this.compareValue(this._hold[n], this._hold[m])) {
                            var poker = this._hold[n];
                            this._hold[n] = this._hold[m];
                            this._hold[m] = poker;
                        }
                    }
                }
            };
            HoldContainer.prototype.compareValue = function (value1, value2) {
                // console.log(0x0F & value1);
                var _a = [this.getLogicValue(0x0F & value1), this.getLogicValue(0x0F & value2)], val1 = _a[0], val2 = _a[1];
                var _b = [value1 >> 4, value2 >> 4], color1 = _b[0], color2 = _b[1];
                if (val1 > val2) {
                    return true;
                }
                else if (val1 == val2) {
                    if (color1 > color2) {
                        return true;
                    }
                }
                return false;
            };
            HoldContainer.prototype.getLogicValue = function (value) {
                var back = value;
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
            };
            /**
             * 选牌事件
             * */
            HoldContainer.prototype.chooseCards = function () {
                this.res.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.pokerParentTouch, this);
                this.res.addEventListener(egret.TouchEvent.TOUCH_CANCEL, this.pokerParentTouch, this);
                this.res.addEventListener(egret.TouchEvent.TOUCH_END, this.pokerParentTouch, this);
                this.res.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.pokerParentTouch, this);
            };
            HoldContainer.prototype.pokerParentTouch = function (event) {
                switch (event.type) {
                    case egret.TouchEvent.TOUCH_BEGIN:
                    case egret.TouchEvent.TOUCH_MOVE: {
                        //获得开始的节点
                        var point = new egret.Point(event.localX, event.localY);
                        if (event.type == egret.TouchEvent.TOUCH_BEGIN)
                            this.mTouchStart = point;
                        var tp = this.mTouchStart.x < point.x ? this.mTouchStart : point; //保存小的节点
                        //计算出this.mTouchStart 以及 tp 之间的牌，并且改变他们之间的表现
                        //通过this._hold 所牌的范围 第一张牌 this._startPoint.x
                        var startIndex = void 0, endIndex = void 0;
                        for (var n = 0; n < 10; n++) {
                            if (this._poker[n].x + off[0].offX >= tp.x) {
                                startIndex = n;
                            }
                        }
                        for (var n = 9; n >= 0; n--) {
                            if (this._poker[n].x + off[0].offX <= this.mTouchStart.x) {
                                endIndex = n;
                            }
                        }
                        //得到所选中牌的index数值，切换被选中的牌选中状态
                        // for(let n = startIndex; n <= endIndex; n++){
                        //     this._poker[n].toggleSelected();
                        // }
                        //记录牌最开始时候的状态
                        break;
                    }
                    case egret.TouchEvent.TOUCH_END:
                    case egret.TouchEvent.TOUCH_CANCEL: {
                        break;
                    }
                }
            };
            return HoldContainer;
        }());
        runfast.HoldContainer = HoldContainer;
    })(runfast = game