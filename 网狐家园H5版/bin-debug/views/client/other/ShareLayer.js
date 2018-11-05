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
 * 分享界面
 */
var client;
(function (client) {
    var ShareLayer = /** @class */ (function (_super) {
        __extends(ShareLayer, _super);
        function ShareLayer(scene, maskAlpha, removeHandler) {
            return _super.call(this, scene, maskAlpha, removeHandler) || this;
        }
        ShareLayer.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.once(egret.Event.ADDED_TO_STAGE, this.onInitLayer, this);
            this.once(egret.Event.REMOVED_FROM_STAGE, this.onExit, this);
        };
        ShareLayer.prototype.onInitLayer = function () {
            _super.prototype.onInitLayer.call(this);
            //加载皮肤 
            var componet = new eui.Component();
            this.addChild(componet);
            componet.width = 998;
            componet.height = 565;
            utils.setAnchorCenter(componet);
            componet.x = this.width / 2;
            componet.y = this.height / 2;
            componet.skinName = skins.ShareLayer;
            //微信分享
            var bt = componet.getChildByName("bt_wechat");
            bt.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClickEvent, this);
            //朋友圈
            bt = componet.getChildByName("bt_circle");
            bt.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClickEvent, this);
            //关闭
            bt = componet.getChildByName("bt_close");
            bt.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClickEvent, this);
        };
        ShareLayer.prototype.onButtonClickEvent = function (e) {
            var target = e.target;
            var tw = egret.Tween.get(target)
                .to({ scaleX: 1.1, scaleY: 1.1 }, 50)
                .to({ scaleX: 1.0, scaleY: 1.0 }, 50);
            switch (target.name) {
                case "bt_wechat":
                    {
                        break;
                    }
                case "bt_circle":
                    {
                    }
                    break;
                case "bt_close":
                    {
                        this._scene.removeChild(this);
                        break;
                    }
            }
        };
        ShareLayer.prototype.onExit = function () {
            _super.prototype.onExit.call(this);
        };
        return ShareLayer;
    }(models.MaskExLayer));
    client.ShareLayer = ShareLayer;
})(client || (client = {}));
