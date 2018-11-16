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
    var InfoModifyLayer = (function (_super) {
        __extends(InfoModifyLayer, _super);
        function InfoModifyLayer(scene) {
            var _this = _super.call(this) || this;
            _this._scene = scene;
            return _this;
        }
        InfoModifyLayer.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.once(egret.Event.ADDED_TO_STAGE, this.onInitLayer, this);
            this.once(egret.Event.REMOVED_FROM_STAGE, this.onExit, this);
        };
        InfoModifyLayer.prototype.onInitLayer = function () {
            //加载皮肤 
            var componet = new eui.Component();
            this.addChild(componet);
            componet.skinName = skins.InfoModify;
            //返回按钮
            var btn = componet.getChildByName("bt_close");
            btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClickEvent, this);
            //修改按钮
            btn = componet.getChildByName("bt_modify");
            btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClickEvent, this);
            //RadioButton
            var userItem = managers.FrameManager.getInstance().m_GlobalUserItem;
            var radio = componet.getChildByName("radio_man");
            radio.$setSelected(userItem.cbGender == df.GENDER_MANKIND ? true : false);
            radio.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClickEvent, this);
            radio = componet.getChildByName("radio_woman");
            radio.$setSelected(userItem.cbGender == df.GENDER_FEMALE ? true : false);
            radio.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClickEvent, this);
            radio = componet.getChildByName("radio_secret");
            radio.$setSelected(userItem.cbGender == df.GENDER_SECRET ? true : false);
            radio.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClickEvent, this);
        };
        InfoModifyLayer.prototype.transIn = function () {
            var tw = egret.Tween.get(this)
                .to({ x: 0, y: 0 }, 200);
        };
        InfoModifyLayer.prototype.transOut = function () {
            var parent = this.parent;
            parent.removeChild(parent.getChildByName("mask"));
            var tw = egret.Tween.get(this)
                .to({ x: 0, y: -this.height }, 200);
        };
        InfoModifyLayer.prototype.onExit = function () {
        };
        InfoModifyLayer.prototype.onButtonClickEvent = function (e) {
            var target = e.target;
            if (target.name != "radio_man" && target.name != "radio_woman" && target.name != "radio_secret") {
                var tw = egret.Tween.get(target)
                    .to({ scaleX: 1.1, scaleY: 1.1 }, 50)
                    .to({ scaleX: 1.0, scaleY: 1.0 }, 50);
            }
            if (target.name == "bt_close") {
                this.transOut();
            }
        };
        return InfoModifyLayer;
    }(eui.UILayer));
    client.InfoModifyLayer = InfoModifyLayer;
})(client || (client = {}));
