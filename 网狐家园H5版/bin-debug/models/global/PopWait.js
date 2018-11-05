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
 * 触摸阻断
 */
var models;
(function (models) {
    var PopWait = /** @class */ (function (_super) {
        __extends(PopWait, _super);
        /**
         * 构造
         * @param content        提示内容
         * @param timeout        超时时间
         * @param isClose        关闭按钮
         * @param timeoutHandler 超时处理
         * @param closeHandler   关闭处理
         */
        function PopWait(content, timeout, isClose, timeoutHandler, closeHandler) {
            if (isClose === void 0) { isClose = false; }
            var _this = _super.call(this) || this;
            /**
             *  超时回调
             */
            _this._timeOutHandler = null;
            /**
             * 关闭处理
             */
            _this._closeHandler = null;
            /**
             * 延时句柄
             */
            _this._delayHandler = 0;
            /**
             * 关闭标识
             */
            _this._isClose = false;
            //初始化
            _this._dot = [".", "..", "..."];
            _this._dotIdx = 0;
            _this._curTime = egret.getTimer();
            _this._content = content;
            _this._timeOut = timeout;
            _this._isClose = isClose;
            _this._timeOutHandler = timeoutHandler;
            _this._closeHandler = closeHandler;
            return _this;
        }
        PopWait.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.name = "PopWait";
            this.once(egret.Event.ADDED_TO_STAGE, this.onInitLayer, this);
            this.once(egret.Event.REMOVED_FROM_STAGE, this.onExit, this);
        };
        PopWait.prototype.onInitLayer = function () {
            var _this = this;
            //遮罩
            var mask = new egret.Shape();
            mask.graphics.beginFill(0x000000, 1.0);
            mask.graphics.drawRect(0, 0, this.width, this.height);
            mask.graphics.endFill();
            mask.alpha = 0.5;
            utils.setAnchorCenter(mask);
            this.addChild(mask);
            mask.x = this.width / 2;
            mask.y = this.height / 2;
            //狐狸
            var fox = utils.createBitmapByName("wait_ani_frame_png");
            utils.setAnchorCenter(fox);
            this.addChild(fox);
            fox.x = this.width / 2;
            fox.y = this.height / 2;
            //圈圈
            var circle = utils.createBitmapByName("wait_ani_round_png");
            utils.setAnchorCenter(circle);
            circle.name = "circle";
            this.addChild(circle);
            circle.x = this.width / 2;
            circle.y = this.height / 2;
            //内容
            var label = new eui.Label();
            label.text = this._content;
            label.textColor = 0XFFFFFF;
            label.size = 24;
            label.lineSpacing = 10;
            label.textAlign = egret.HorizontalAlign.JUSTIFY;
            this.addChild(label);
            utils.setAnchorCenter(label);
            label.x = 667;
            label.y = 500;
            //动画label
            this._aniLabel = new eui.Label();
            this._aniLabel.text = this._dot[this._dotIdx];
            this._aniLabel.textColor = 0XFFFFFF;
            this._aniLabel.size = 24;
            this._aniLabel.multiline = false;
            this._aniLabel.textAlign = egret.HorizontalAlign.JUSTIFY;
            this.addChild(this._aniLabel);
            utils.setAnchorLeftMid(this._aniLabel);
            this._aniLabel.x = label.x + label.width / 2;
            this._aniLabel.y = label.y;
            //关闭按钮
            if (this._isClose) {
                var bt = new eui.Button();
                this.addChild(bt);
                bt.x = 750;
                bt.y = 270;
                bt.skinName = skins.GeneralButton;
                bt.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function () { _this.onClose(); }, this);
            }
            //定时器
            managers.TimerCtrl.getInstance().killTimer(this, "PopWait");
            managers.TimerCtrl.getInstance().createTimer(this, 1000 / 60, 0, this.popWaitAnimation, "PopWait");
            //延时回调
            this._delayHandler = setTimeout(function () {
                _this.onTimeOut();
            }, this._timeOut);
        };
        //移除舞台
        PopWait.prototype.onExit = function () {
            //取消延时
            if (this._delayHandler != 0) {
                clearTimeout(this._delayHandler);
                //句柄置空
                this._delayHandler = 0;
            }
            //移除定时
            managers.TimerCtrl.getInstance().killTimer(this, "PopWait");
            //引用置空
            this._timeOutHandler = null;
            this._closeHandler = null;
        };
        //超时处理
        PopWait.prototype.onTimeOut = function () {
            //句柄置空
            this._delayHandler = 0;
            //超时操作
            if (null != this._timeOutHandler) {
                this._timeOutHandler();
            }
            //移除定时
            managers.FrameManager.getInstance().dismissPopWait();
            managers.TimerCtrl.getInstance().killTimer(this, "PopWait");
        };
        //关闭处理
        PopWait.prototype.onClose = function () {
            //移除定时
            managers.FrameManager.getInstance().dismissPopWait();
            managers.TimerCtrl.getInstance().killTimer(this, "PopWait");
            //取消延时
            if (this._delayHandler != 0) {
                clearTimeout(this._delayHandler);
            }
            //句柄置空
            this._delayHandler = 0;
            //关闭操作
            if (null != this._closeHandler) {
                this._closeHandler();
            }
        };
        PopWait.prototype.popWaitAnimation = function (e) {
            var delay = egret.getTimer();
            if (delay - this._curTime >= 500) {
                this._dotIdx = (this._dotIdx + 1) % 3;
                this._aniLabel.text = this._dot[this._dotIdx];
                this._curTime = egret.getTimer();
            }
            //圈圈
            var circle = this.getChildByName("circle");
            circle.rotation += 6;
            if (circle.rotation > 360) {
                circle.rotation -= 360;
            }
        };
        return PopWait;
    }(eui.UILayer));
    models.PopWait = PopWait;
})(models || (models = {}));
