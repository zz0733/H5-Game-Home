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
 * 头像类
 * 系统头像
 * 微信头像
 */
var models;
(function (models) {
    var HeadSprite = /** @class */ (function (_super) {
        __extends(HeadSprite, _super);
        /**
         * 构造
         */
        function HeadSprite() {
            var _this = _super.call(this) || this;
            _this.once(egret.Event.REMOVED_FROM_STAGE, _this.onExit, _this);
            return _this;
        }
        /**
         * 移除视图
         */
        HeadSprite.prototype.onExit = function () {
            this.removeEventListener(egret.TouchEvent.TOUCH_END, this._touchHandler, this);
            this._touchHandler = null;
        };
        /**
         * 创建头像
         */
        HeadSprite.createHead = function (useritem, width, height, ellipseWidth, ellipseHeight, pop, handler) {
            if (useritem.dwCustomID == 0) {
                return HeadSprite.createSysHeadWithCorner(useritem, width, height, ellipseWidth, ellipseHeight, pop, handler);
            }
            else {
                return HeadSprite.createThirdHeadWithCorner(useritem, width, height, ellipseWidth, ellipseHeight, pop, handler);
            }
        };
        /**圆角系统头像
         * @param useritem 目标用户
         * @param width    头像宽度
         * @param height   头像高度
         * @param pop      支持触摸
         * @param handler  触摸处理
         * @param ellipseWidth 用于绘制圆角的椭圆的宽度（以像素为单位）。
         * @param ellipseHeight 用于绘制圆角的椭圆的高度（以像素为单位）。
         */
        HeadSprite.createSysHeadWithCorner = function (useritem, width, height, ellipseWidth, ellipseHeight, pop, handler) {
            var instance = new HeadSprite();
            utils.setAnchorLeftTop(instance);
            instance.width = width;
            instance.touchEnabled = true;
            instance.height = height;
            instance.x = 0;
            instance.y = 0;
            //遮罩
            var maskShap;
            if (ellipseWidth != 0 && ellipseHeight != 0) {
                maskShap = new egret.Shape();
                maskShap.graphics.beginFill(0x000000, 1.0);
                maskShap.graphics.drawRoundRect(0, 0, instance.width - (ellipseWidth / 2), instance.height - (ellipseHeight / 2), ellipseWidth, ellipseHeight);
                maskShap.graphics.endFill();
                utils.setAnchorCenter(maskShap);
                instance.addChild(maskShap);
                maskShap.x = width / 2;
                maskShap.y = height / 2;
            }
            //用户头像
            var cbGender = useritem.cbGender;
            var idx = 0;
            if (cbGender == df.GENDER_MANKIND) {
                idx = useritem.wFaceID % 10;
            }
            else if (cbGender == df.GENDER_FEMALE) {
                idx = 10 + useritem.wFaceID % 10;
            }
            var file = idx < 10 ? "face_x_0" + idx + "_png" : "face_x_" + idx + "_png";
            var head = utils.createBitmapByName(file);
            instance.addChild(head);
            head.width = width;
            head.height = height;
            utils.setAnchorCenter(head);
            head.x = width / 2;
            head.y = height / 2;
            //设置遮罩
            if (ellipseWidth != 0 && ellipseHeight != 0) {
                head.mask = maskShap;
            }
            //设置触摸
            if (pop && handler) {
                instance._touchHandler = handler;
                instance.addEventListener(egret.TouchEvent.TOUCH_END, handler, instance);
            }
            return instance;
        };
        /**
         * 矩形系统头像
         */
        HeadSprite.createSysHeadWithNormal = function (target, useritem, width, height, pop, handler) {
            var instance = new HeadSprite();
            utils.setAnchorLeftTop(instance);
            instance.width = width;
            instance.height = height;
            instance.x = 0;
            instance.y = 0;
            //用户头像
            var head = utils.createBitmapByName("face_x_00_png");
            instance.addChild(head);
            head.touchEnabled = true;
            head.width = width;
            head.height = height;
            utils.setAnchorCenter(head);
            head.x = width / 2;
            head.y = height / 2;
            if (pop && handler) {
                head.addEventListener(egret.TouchEvent.ENDED, handler, target);
            }
            return instance;
        };
        /**
         * 第三方头像
         */
        HeadSprite.createThirdHeadWithCorner = function (useritem, width, height, ellipseWidth, ellipseHeight, pop, handler) {
            return new HeadSprite();
        };
        return HeadSprite;
    }(egret.Sprite));
    models.HeadSprite = HeadSprite;
})(models || (models = {}));
