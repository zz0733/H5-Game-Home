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
 * 跑马灯 公告
 */
var models;
(function (models) {
    var RollNotice = /** @class */ (function (_super) {
        __extends(RollNotice, _super);
        /**
         * 构造
         */
        function RollNotice() {
            var _this = _super.call(this) || this;
            /**
             * 内容队列
             */
            _this._noticeQueue = [];
            /**
             * 播放当前索引
             */
            _this._noticeIndex = 0;
            /**
             * 循环播放
             */
            _this._isLoop = false;
            /**
             * 每条播放时间 默认8秒
             */
            _this.m_OnePerformTime = 8000;
            _this.once(egret.Event.REMOVED_FROM_STAGE, _this.onExit, _this);
            return _this;
        }
        /**
         * 静态方法
         */
        RollNotice.createNotice = function (backGroundRes, width, height, msg, isLoop, rollMode, icon) {
            var ret = new RollNotice();
            if (ret && ret.initNotice(backGroundRes, width, height, msg, isLoop, rollMode, icon)) {
                return ret;
            }
            return null;
        };
        /**
         * 初始化
         */
        RollNotice.prototype.initNotice = function (backGroundRes, width, height, msg, isLoop, rollMode, icon) {
            if (width == 0 && height == 0)
                return false;
            this.width = width;
            this.height = height;
            this._noticeQueue = msg;
            this._isLoop = isLoop;
            //公告背景
            var backGround = utils.createBitmapByName(backGroundRes);
            utils.setAnchorCenter(backGround);
            this.addChild(backGround);
            backGround.x = this.width / 2;
            backGround.y = this.height / 2;
            backGround.touchEnabled = true;
            //显示区域
            var group = new eui.Group();
            utils.setAnchorLeftTop(group);
            this.addChild(group);
            group.width = this.width - 50;
            group.height = this.height;
            group.x = 50;
            group.y = 0;
            //滑动组件
            var scroll = new eui.Scroller;
            scroll.enabled = false;
            scroll.width = this.width - 50;
            scroll.height = this.height;
            this.addChild(scroll);
            scroll.viewport = group;
            utils.setAnchorLeftMid(scroll);
            scroll.x = 50;
            scroll.y = this.height / 2;
            //显示标签
            this._label = new eui.Label();
            this._label.text = "欢迎您进入游戏家园,祝您游戏愉快!";
            this._label.textColor = 0xFFCD6D;
            this._label.size = 18;
            this._label.lineSpacing = 24;
            this._label.textAlign = egret.HorizontalAlign.JUSTIFY;
            group.addChild(this._label);
            utils.setAnchorLeftMid(this._label);
            //设置位置
            if (rollMode == 0 /* HORIZONTAL */) {
                this._label.x = this.width;
                this._label.y = this.height / 2;
            }
            else {
                this._label.x = 0;
                this._label.y = -this.height;
            }
            //设置ICON
            if (null != icon)
                this.setNoticeIcon(icon);
            //启动播放
            this._noticeIndex = 0;
            this.performNotice(rollMode);
            return true;
        };
        /**
         * 设置ICON
         */
        RollNotice.prototype.setNoticeIcon = function (texture) {
            var icon = utils.createBitmapByName(texture);
            utils.setAnchorRightMid(icon);
            this.addChild(icon);
            icon.x = 50;
            icon.y = this.height / 2;
        };
        /**
         * 设置表演时间
         * 默认8秒
         */
        RollNotice.prototype.setPerformTime = function (time) {
            this.m_OnePerformTime = time;
        };
        //设置触摸回调
        RollNotice.prototype.setTouchHandler = function (handler) {
            this.touchEnabled = true;
            if (null != handler) {
                this.addEventListener(egret.TouchEvent.TOUCH_END, handler, this);
            }
        };
        /**
         * 播放公告
         */
        RollNotice.prototype.performNotice = function (rollMode) {
            var _this = this;
            if (null == this._label)
                return;
            var msg = this._noticeQueue[this._noticeIndex];
            this._label.text = msg;
            var beganPosX = (rollMode == 0 /* HORIZONTAL */) ? this.width : 0;
            var beganPosY = (rollMode == 0 /* HORIZONTAL */) ? this.height / 2 : -this.height;
            this._label.x = beganPosX;
            this._label.y = beganPosY;
            //移动动画
            var endPosX = (rollMode == 0 /* HORIZONTAL */) ? -this._label.width : 0;
            var endPosY = (rollMode == 0 /* HORIZONTAL */) ? this.height / 2 : this.height;
            var duration = (rollMode == 0 /* HORIZONTAL */) ? this.m_OnePerformTime : 3000;
            var tw = egret.Tween.get(this._label)
                .to({ x: endPosX, y: endPosY }, duration)
                .call(function () {
                _this._noticeIndex++;
                if (_this._noticeIndex == _this._noticeQueue.length) {
                    if (!_this._isLoop)
                        return;
                    _this._noticeIndex = 0;
                }
                //递归调用
                _this.performNotice(rollMode);
            });
        };
        /**
         * 插入公告
         */
        RollNotice.prototype.insertNotice = function (notice) {
            this._noticeQueue.push(notice);
        };
        /**
         * 设置索引
         */
        RollNotice.prototype.setNoitceIndex = function (index) {
            this._noticeIndex = (index < this._noticeQueue.length) ? index : this._noticeIndex;
        };
        /**
         * 移除视图
         */
        RollNotice.prototype.onExit = function () {
            egret.Tween.removeTweens(this._label);
            this._noticeQueue.forEach(function (element) {
                element = null;
            });
            this._noticeQueue = null;
            this._label = null;
        };
        return RollNotice;
    }(egret.Sprite));
    models.RollNotice = RollNotice;
})(models || (models = {}));
