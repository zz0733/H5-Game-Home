var game;
(function (game) {
    var runfast;
    (function (runfast) {
        runfast.off = [{
                x: 399,
                y: 34,
                offX: 40,
                scale: 1
            }];
        var HoldContainer = (function () {
            function HoldContainer(res, main, btn) {
                this._hold = [];
                this._tipAry = [];
                this._tipIndex = 0;
                this._reportSingleFlag = false;
                this._lock = false;
                //每轮出牌以后及时清除
                this.lastPresent = [];
                this.m_firstOut = true;
                this.res = res;
                this._gameLogic = new runfast.GameLogic();
                this._main = main;
                this._btnTip = btn;
                // this._btnOutCar = btn;
            }
            Object.defineProperty(HoldContainer.prototype, "hold", {
                set: function (value) {
                    this._hold = value;
                },
                enumerable: true,
                configurable: true
            });
            /*
            * 设置并且显示手牌
            * */
            HoldContainer.prototype.setHold = function (hold) {
                var _this = this;
                this.res.removeChildren();
                this.res.visible = true;
                this.hold = hold;
                this._poker = [];
                this.sortHold();
                this._hold.forEach(function (value, index) {
                    var poker = new runfast.Poker(value);
                    poker.x = runfast.off[0].x + runfast.off[0].offX * _this.getIndex(index);
                    poker.y = runfast.off[0].y;
                    poker.scaleX = poker.scaleY = runfast.off[0].scale;
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
            /**
             * 减少手牌
             * */
            HoldContainer.prototype.spliceHold = function (splice) {
                var newHold = this._hold.concat();
                splice.forEach(function (value) {
                    newHold.forEach(function (hold, index) {
                        if (hold == value) {
                            newHold.splice(index, 1);
                        }
                    });
                });
                this.setHold(newHold);
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
                this.res.visible = true;
                var pokerNum = this.res.getChildByName("poker_num");
                // let numberLabel = pokerNum.getChildByName("number_label") as utils.LabelAtlas;
                if (null != pokerNum.getChildByName("number_label")) {
                    pokerNum.removeChildren();
                    // utils.setAnchorCenter(numberLabel);
                    // numberLabel.setText(count + "");
                }
                var numberLabel = utils.LabelAtlas.createLabel(count + "", "runfast_number_cardback_png", "0123456789", 26, 38);
                numberLabel.name = "number_label";
                utils.setAnchorCenter(numberLabel);
                pokerNum.addChild(numberLabel);
            };
            HoldContainer.prototype.reduceHoldNum = function (num) {
                if (this._count - num >= 0) {
                    this.setHoldNumber(this._count - num);
                }
                else {
                    console.log("设置牌数错误");
                }
            };
            Object.defineProperty(HoldContainer.prototype, "count", {
                get: function () {
                    return this._count;
                },
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
            HoldContainer.prototype.chooseCards = function (turnOver) {
                this.res.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.pokerParentTouch, this);
                this.res.addEventListener(egret.TouchEvent.TOUCH_CANCEL, this.pokerParentTouch, this);
                this.res.addEventListener(egret.TouchEvent.TOUCH_END, this.pokerParentTouch, this);
                this.res.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.pokerParentTouch, this);
                if (turnOver) {
                    this.lastPresent = [];
                }
                //提示事件
                this._btnTip.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTipOut, this);
                this._tipAry = [];
            };
            HoldContainer.prototype.removeChooseCards = function () {
                this.res.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.pokerParentTouch, this);
                this.res.removeEventListener(egret.TouchEvent.TOUCH_CANCEL, this.pokerParentTouch, this);
                this.res.removeEventListener(egret.TouchEvent.TOUCH_END, this.pokerParentTouch, this);
                this.res.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.pokerParentTouch, this);
                this._btnTip.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTipOut, this);
            };
            HoldContainer.prototype.reportSingle = function () {
                // this._reportSingleFlag = true;
            };
            HoldContainer.prototype.onTipOut = function (evt) {
                for (var n = 0; n < this._poker.length; n++) {
                    this._poker[n].initStatus();
                }
                if (this._tipAry.length == 0 || !this._tipAry) {
                    this.searchTips();
                }
                //上家报单情况下必须选择最大的牌
                this.showTip(this._tipAry[(this._tipIndex++) % this._tipAry.length].cards);
                this.check();
            };
            HoldContainer.prototype.searchTips = function () {
                var last = {
                    cards: this.lastPresent
                };
                var hold = this._hold.concat();
                if (this.m_firstOut || this.lastPresent.length == 0) {
                    if (this.m_firstOut) {
                        this._tipAry = this._gameLogic.searchFivePresent(hold);
                    }
                    else {
                        this._tipAry = this._gameLogic.searchForPresent(hold);
                    }
                }
                else {
                    this._tipAry = this._gameLogic.searchForPresent(hold, last);
                }
                this._tipIndex = 0;
            };
            HoldContainer.prototype.showTip = function (cards) {
                var _this = this;
                cards.forEach(function (value) {
                    for (var n = 0; n < _this._poker.length; n++) {
                        if (value == _this._poker[n].value) {
                            _this._poker[n].toggleSelected();
                            break;
                        }
                    }
                });
            };
            HoldContainer.prototype.pokerParentTouch = function (event) {
                switch (event.type) {
                    case egret.TouchEvent.TOUCH_BEGIN:
                    case egret.TouchEvent.TOUCH_MOVE: {
                        //获得开始的节点
                        var point = new egret.Point(event.localX, event.localY);
                        if (event.type == egret.TouchEvent.TOUCH_BEGIN) {
                            this.mTouchStart = point;
                            this._lock = true;
                        }
                        var tp = this.mTouchStart.x < point.x ? this.mTouchStart : point; //保存小的节点
                        var tp2 = this.mTouchStart.x < point.x ? point : this.mTouchStart; //较大节点
                        //计算出this.mTouchStart 以及 tp 之间的牌，并且改变他们之间的表现
                        //通过this._hold 所牌的范围 第一张牌 this._startPoint.x
                        if (this._lock) {
                            this._lock = false;
                            this._poker.forEach(function (poker) {
                                poker.m_lock = true;
                            });
                        }
                        var startIndex = void 0, endIndex = void 0;
                        for (var n = 0; n < this._poker.length; n++) {
                            if (this._poker[n].x + runfast.off[0].offX >= tp.x) {
                                startIndex = n;
                                break;
                            }
                        }
                        for (var n = this._poker.length - 1; n >= 0; n--) {
                            if (this._poker[n].x <= tp2.x) {
                                endIndex = n;
                                break;
                            }
                        }
                        //得到所选中牌的index数值，切换被选中的牌选中状态
                        for (var n = 0; n < this._poker.length; n++) {
                            this._poker[n].removeMask();
                        }
                        for (var n = startIndex; n <= endIndex; n++) {
                            this._poker[n].addMask();
                            // this._poker[n].toggleSelected();
                        }
                        //记录牌最开始时候的状态，将他们设置成相反的状态
                        break;
                    }
                    case egret.TouchEvent.TOUCH_END:
                    case egret.TouchEvent.TOUCH_CANCEL: {
                        var point = new egret.Point(event.localX, event.localY);
                        var tp = this.mTouchStart.x < point.x ? this.mTouchStart : point; //保存小的节点
                        var tp2 = this.mTouchStart.x < point.x ? point : this.mTouchStart; //较大节点
                        var startIndex = void 0, endIndex = void 0;
                        for (var n = 0; n < this._poker.length; n++) {
                            if (this._poker[n].x + runfast.off[0].offX >= tp.x) {
                                startIndex = n;
                                break;
                            }
                        }
                        for (var n = this._poker.length - 1; n >= 0; n--) {
                            if (this._poker[n].x <= tp2.x) {
                                endIndex = n;
                                break;
                            }
                        }
                        //去除遮罩以及更换选择状态
                        for (var n = startIndex; n <= endIndex; n++) {
                            this._poker[n].removeMask();
                            this._poker[n].toggleSelected();
                        }
                        this.check();
                        break;
                    }
                }
            };
            HoldContainer.prototype.check = function () {
                //将选中的牌保存起来
                var outCards = [];
                this._poker.forEach(function (poker) {
                    if (poker.out == true) {
                        outCards.push(poker.value);
                    }
                });
                this._main.activeOutButton(this.checkOut(outCards), outCards);
                //检测所选牌是否符合出牌规则
            };
            /**
             * 检测出牌是否符合规范
             * */
            HoldContainer.prototype.checkOut = function (cards) {
                // 上家报单情况下必须出最大的牌
                if (this._reportSingleFlag) {
                    this.searchTips();
                    var maxCards = this.searchMax(this._tipAry);
                    return cards == maxCards;
                    // if (cards == maxCards) {
                    //     return true;
                    // } else {
                    //     //下家报单，必须出最大类型的牌
                    //     return false;
                    // }
                }
                var out = {
                    cards: cards
                };
                if (this.m_firstOut) {
                    return this._gameLogic.firstAssertPresent(out);
                }
                else {
                    if (this.lastPresent.length != 0 && this.lastPresent) {
                        var last = {
                            cards: this.lastPresent
                        };
                        return this._gameLogic.assertPresent(out, last);
                    }
                    return this._gameLogic.assertPresent(out);
                }
            };
            HoldContainer.prototype.searchMax = function (tips) {
                var back;
                //根据上家牌选出当前牌型中最大的牌，或者炸弹
                // let cardType = this.lastPresent;
                //遍历是否有炸弹
                var bombVec = [];
                for (var n = 0; n < tips.length; n++) {
                    if (tips[n].cardType == runfast.ECardType.CT_BOMB_CARD) {
                        bombVec.push(tips[n]);
                    }
                }
                if (tips.length == 1) {
                    back = tips[0];
                }
                else {
                    if (bombVec.length != 0) {
                        back = bombVec[0];
                        for (var n = 1; n < bombVec.length; n++) {
                            if (bombVec[n].cards[0] > back.cards[0]) {
                                back = bombVec[n];
                            }
                        }
                    }
                    else {
                        back = tips[0];
                        for (var n = 1; n < tips.length; n++) {
                            if (tips[n].cards[0] > back.cards[0]) {
                                back = tips[n];
                            }
                        }
                    }
                }
                return back;
            };
            return HoldContainer;
        }());
        runfast.HoldContainer = HoldContainer;
    })(runfast = game.runfast || (game.runfast = {}));
})(game || (game = {}));
