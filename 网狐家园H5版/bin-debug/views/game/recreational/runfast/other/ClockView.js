var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var game;
(function (game) {
    var runfast;
    (function (runfast) {
        runfast.EVT_TIME_OUT = "time_out";
        var OFF = [{
                scale: 1
            }, {
                scale: 0.5
            }, {
                scale: 0.5
            }, {
                scale: 0.5
            }];
        var ClockView = (function (_super) {
            __extends(ClockView, _super);
            function ClockView(viewId, res) {
                var _this = _super.call(this) || this;
                _this._onTicking = false;
                _this._chairId = viewId;
                _this.clock = res;
                return _this;
            }
            /**
             * @param maxSec 总时间
             * @param timerSec 已过时间
             * */
            ClockView.prototype.showClock = function (maxSec, timeSec) {
                if (timeSec === void 0) { timeSec = 0; }
                this._startTime = Date.now();
                this._spent = timeSec;
                this._total = maxSec;
                if (!this._onTicking) {
                    this._onTicking = true;
                    this.clock.visible = true;
                    var self_1 = this;
                    this.setTime(maxSec - timeSec);
                    this._tickHandle = setInterval(function () {
                        self_1.onTick();
                    }, 1000);
                }
                else {
                    //重置
                    this.stop();
                    this.showClock(maxSec, timeSec);
                }
            };
            ClockView.prototype.onTick = function () {
                this._spent++;
                this._remainTime = this._total - this._spent;
                this.setTime(this._remainTime);
                if (this._spent >= this._total) {
                    if (this._chairId == cmd.runfast.MY_VIEW) {
                        this.dispatchEvent(new egret.TimerEvent(runfast.EVT_TIME_OUT));
                    }
                    this.stop();
                }
            };
            /**
             * 停止计时
             * */
            ClockView.prototype.stop = function () {
                clearInterval(this._tickHandle);
                this._onTicking = false;
                this.clock.visible = false;
            };
            ClockView.prototype.setTime = function (value) {
                var timeLabel = this.clock.label.getChildByName("");
                var str = value >= 10 ? value + "" : "0" + value;
                if (null != timeLabel) {
                    //改变文字
                    timeLabel.setText(str);
                }
                else {
                    //构造新文字，并且赋值
                    var timeLabel_1 = utils.LabelAtlas.createLabel(str, "runfast_number_clock_png", "0123456789", 30, 42);
                    utils.setAnchorCenter(timeLabel_1);
                    timeLabel_1.scaleX = timeLabel_1.scaleY = OFF[this._chairId].scale;
                    this.clock.label.addChild(timeLabel_1);
                }
            };
            return ClockView;
        }(egret.EventDispatcher));
        runfast.ClockView = ClockView;
    })(runfast = game.runfast || (game.runfast = {}));
})(game || (game = {}));
