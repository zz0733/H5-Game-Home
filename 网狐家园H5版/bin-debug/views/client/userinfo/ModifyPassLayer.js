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
var client;
(function (client) {
    var PasswordModifyLayer = /** @class */ (function (_super) {
        __extends(PasswordModifyLayer, _super);
        function PasswordModifyLayer(scene) {
            var _this = _super.call(this) || this;
            _this._scene = scene;
            return _this;
        }
        PasswordModifyLayer.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.once(egret.Event.ADDED_TO_STAGE, this.onInitLayer, this);
            this.once(egret.Event.REMOVED_FROM_STAGE, this.onExit, this);
        };
        PasswordModifyLayer.prototype.onInitLayer = function () {
            //加载皮肤 
            var componet = new eui.Component();
            this.addChild(componet);
            componet.skinName = skins.PasswordModify;
            //返回按钮
            var btn = componet.getChildByName("bt_close");
            btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClickEvent, this);
            //修改按钮
            btn = componet.getChildByName("bt_modify");
            btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClickEvent, this);
        };
        PasswordModifyLayer.prototype.transIn = function () {
            var tw = egret.Tween.get(this)
                .to({ x: 0, y: 0 }, 200);
        };
        PasswordModifyLayer.prototype.transOut = function () {
            var parent = this.parent;
            parent.removeChild(parent.getChildByName("mask"));
            var tw = egret.Tween.get(this)
                .to({ x: 0, y: -this.height }, 200);
        };
        PasswordModifyLayer.prototype.onExit = function () {
        };
        PasswordModifyLayer.prototype.onButtonClickEvent = function (e) {
            var target = e.target;
            var tw = egret.Tween.get(target)
                .to({ scaleX: 1.1, scaleY: 1.1 }, 50)
                .to({ scaleX: 1.0, scaleY: 1.0 }, 50);
            if (target.name == "bt_close") {
                this.transOut();
            }
        };
        return PasswordModifyLayer;
    }(eui.UILayer));
    client.PasswordModifyLayer = PasswordModifyLayer;
})(client || (client = {}));
