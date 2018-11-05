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
 * 头像修改
 */
var client;
(function (client) {
    var ModifyFaceLayer = /** @class */ (function (_super) {
        __extends(ModifyFaceLayer, _super);
        function ModifyFaceLayer(scene) {
            var _this = _super.call(this) || this;
            _this.RES_BOY = ["face_x_00_png", "face_x_01_png", "face_x_02_png", "face_x_03_png", "face_x_04_png", "face_x_05_png", "face_x_06_png", "face_x_07_png", "face_x_08_png", "face_x_09_png"];
            _this.RES_GIRL = ["face_x_10_png", "face_x_11_png", "face_x_12_png", "face_x_13_png", "face_x_14_png", "face_x_15_png", "face_x_16_png", "face_x_17_png", "face_x_18_png", "face_x_19_png"];
            _this._scene = scene;
            return _this;
        }
        ModifyFaceLayer.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.once(egret.Event.ADDED_TO_STAGE, this.onInitLayer, this);
            this.once(egret.Event.REMOVED_FROM_STAGE, this.onExit, this);
        };
        ModifyFaceLayer.prototype.onInitLayer = function () {
            //加载皮肤 
            var componet = new eui.Component();
            this.addChild(componet);
            componet.skinName = skins.HeadModify;
            //头像选择
            var gender = managers.FrameManager.getInstance().m_GlobalUserItem.cbGender;
            for (var i = 0; i < 10; i++) {
                var panel = componet.getChildByName("panel_head");
                var maskShap = new egret.Shape();
                maskShap.graphics.beginFill(0x000000, 1.0);
                maskShap.graphics.drawRoundRect(0, 0, 95 - (30 / 2), 95 - (30 / 2), 30, 30);
                maskShap.graphics.endFill();
                panel.addChild(maskShap);
                maskShap.x = 20 + (i % 6) * 120;
                maskShap.y = 25 + Math.floor(i / 6) * 130;
                var head = new eui.Image(gender == df.GENDER_MANKIND ? this.RES_BOY[i] : this.RES_GIRL[i]);
                head.scaleX = 0.4;
                head.scaleY = 0.4;
                panel.addChild(head);
                head.touchEnabled = false;
                head.x = 12 + (i % 6) * 120;
                head.y = 16 + Math.floor(i / 6) * 130;
                head.mask = maskShap;
            }
            //返回按钮
            var btn = componet.getChildByName("bt_close");
            btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClickEvent, this);
            //修改按钮
            btn = componet.getChildByName("bt_modify");
            btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClickEvent, this);
        };
        ModifyFaceLayer.prototype.onExit = function () {
        };
        ModifyFaceLayer.prototype.transIn = function () {
            var tw = egret.Tween.get(this)
                .to({ x: 0, y: 0 }, 200);
        };
        ModifyFaceLayer.prototype.transOut = function () {
            var parent = this.parent;
            parent.removeChild(parent.getChildByName("mask"));
            var tw = egret.Tween.get(this)
                .to({ x: 0, y: -this.height }, 200);
        };
        ModifyFaceLayer.prototype.onButtonClickEvent = function (e) {
            var target = e.target;
            var tw = egret.Tween.get(target)
                .to({ scaleX: 1.1, scaleY: 1.1 }, 50)
                .to({ scaleX: 1.0, scaleY: 1.0 }, 50);
            if (target.name == "bt_close") {
                this.transOut();
            }
        };
        return ModifyFaceLayer;
    }(eui.UILayer));
    client.ModifyFaceLayer = ModifyFaceLayer;
})(client || (client = {}));
