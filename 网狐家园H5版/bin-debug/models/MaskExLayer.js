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
 * 公用MASK层
 * 触摸移除
 */
var models;
(function (models) {
    var MaskExLayer = (function (_super) {
        __extends(MaskExLayer, _super);
        function MaskExLayer(scene, maskAlpha, removeHandler) {
            var _this = _super.call(this) || this;
            _this._removeHandler = null;
            _this._removeHandler = removeHandler;
            _this._scene = scene;
            _this._alpha = maskAlpha;
            return _this;
        }
        MaskExLayer.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.once(egret.Event.ADDED_TO_STAGE, this.onInitLayer, this);
            this.once(egret.Event.REMOVED_FROM_STAGE, this.onExit, this);
        };
        MaskExLayer.prototype.onInitLayer = function () {
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
            mask.touchEnabled = true;
            mask.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (e) {
                if (null != _this._removeHandler) {
                    _this._removeHandler();
                }
                _this._scene.removeChild(_this);
            }, this);
        };
        MaskExLayer.prototype.onExit = function () {
            this._removeHandler = null;
        };
        return MaskExLayer;
    }(eui.UILayer));
    models.MaskExLayer = MaskExLayer;
})(models || (models = {}));
