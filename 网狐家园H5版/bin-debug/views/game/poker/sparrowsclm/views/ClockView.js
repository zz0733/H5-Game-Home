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
/**
 * 倒计时
 */
var game;
(function (game) {
    var sparrowsclm;
    (function (sparrowsclm) {
        var ClockView = /** @class */ (function (_super) {
            __extends(ClockView, _super);
            function ClockView(scene, clockId) {
                var _this = _super.call(this) || this;
                _this._clockID = 0;
                _this._viewId = 0;
                _this._clockMC = [];
                /**设置时间 */
                _this._clockTime = 0;
                _this._scene = scene;
                _this._gameEngine = _this._scene._gameEngine;
                _this._clockID = clockId;
                _this.onInitClock();
                _this.setCurClockID(clockId);
                return _this;
            }
            ClockView.prototype.onInitClock = function () {
                var data = RES.getRes("anim_json");
                var txtr = RES.getRes("anim_png");
                var companet = this._scene._companet;
                for (var i = 0; i < cmd.sparrowsclm.GAME_PLAYER; i++) {
                    var clock = companet.getChildByName("clock" + i);
                    var mcFactory = new egret.MovieClipDataFactory(data, txtr);
                    var mc = new egret.MovieClip(mcFactory.generateMovieClipData("clockanim"));
                    clock.addChild(mc);
                    mc.x = -4;
                    this._clockMC.push(mc);
                    mc.visible = false;
                }
            };
            ClockView.prototype.setClockId = function (clockId) {
                this._clockID = clockId;
            };
            ClockView.prototype.getClockId = function () {
                return this._clockID;
            };
            ClockView.prototype.setClockViewId = function (viewId) {
                this._viewId = viewId;
            };
            ClockView.prototype.getClockViewId = function () {
                return this._viewId;
            };
            /**刷新时间 */
            ClockView.prototype.onUpdateClockEvent = function () {
                if (this._clockTime - 1 >= 0) {
                    this._clockTime--;
                    if (this._clockTime == 0) {
                        if (this._scene && this._scene.logicTimeZero) {
                            this._scene.onClockEvent(this.getClockViewId(), this.getClockId());
                        }
                    }
                    this.updateShow();
                }
            };
            ClockView.prototype.setClockTime = function (nTime, clockId, viewId) {
                if (clockId === void 0) { clockId = 0; }
                if (viewId === void 0) { viewId = cmd.sparrowsclm.MY_VIEW; }
                if (nTime <= 0)
                    return;
                this._clockTime = nTime;
                this.setClockId(clockId);
                this.setClockViewId(viewId);
                this.setCurClockID(viewId);
                this.updateShow();
            };
            ClockView.prototype.updateShow = function () {
                var str = "";
                str = (this._clockTime >= 10) ? "" + this._clockTime : ("0" + this._clockTime);
                if (null != this._clockNum) {
                    this._clockNum.setText(str);
                    return;
                }
                var companet = this._scene._companet;
                var time = utils.LabelAtlas.createLabel(str, "game_num_1_png", "0123456789", 28, 52);
                utils.setAnchorCenter(time);
                companet.addChild(time);
                time.x = 667;
                time.y = 277;
                this._clockNum = time;
            };
            /**删除倒计时 */
            ClockView.prototype.deleteClock = function () {
                var companet = this._scene._companet;
                for (var i = 0; i < this._clockMC.length; i++) {
                    var mc = this._clockMC[i];
                    if (null != mc) {
                        mc.stop();
                        mc = null;
                    }
                }
                //置空引用
                this._clockMC = null;
            };
            /**设置倒计时索引 */
            ClockView.prototype.setCurClockID = function (clockId) {
                if (clockId < 0 || null == clockId)
                    return;
                this._clockID = clockId;
                if (clockId == df.INVALID_ITEM) {
                    for (var i = 0; i < cmd.sparrowsclm.GAME_PLAYER; i++) {
                        var mc = this._clockMC[i];
                        mc.visible = false;
                        mc.stop();
                    }
                    return;
                }
                //帧动画
                for (var i = 0; i < cmd.sparrowsclm.GAME_PLAYER; i++) {
                    var mc = this._clockMC[i];
                    if (i == clockId) {
                        mc.visible = true;
                        mc.gotoAndPlay(1, -1);
                    }
                    else {
                        mc.visible = false;
                        mc.stop();
                    }
                }
            };
            return ClockView;
        }(egret.Sprite));
        sparrowsclm.ClockView = ClockView;
    })(sparrowsclm = game.sparrowsclm || (game.sparrowsclm = {}));
})(game || (game = {}));
