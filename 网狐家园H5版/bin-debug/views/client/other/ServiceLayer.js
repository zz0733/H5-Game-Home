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
 * 客服
 */
var client;
(function (client) {
    var ServiceLayer = /** @class */ (function (_super) {
        __extends(ServiceLayer, _super);
        function ServiceLayer(scene) {
            var _this = _super.call(this) || this;
            _this._checkBoxes = [];
            _this._panels = [];
            _this._scene = scene;
            return _this;
        }
        ServiceLayer.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.once(egret.Event.ADDED_TO_STAGE, this.onInitLayer, this);
            this.once(egret.Event.REMOVED_FROM_STAGE, this.onExit, this);
        };
        ServiceLayer.prototype.onInitLayer = function () {
            //加载皮肤 
            var componet = new eui.Component();
            this.addChild(componet);
            componet.skinName = skins.ServiceLayer;
            //返回按钮
            var btn = componet.getChildByName("bt_return");
            btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClickEvent, this);
            //checkBox
            for (var i = 0; i < 4; i++) {
                var checkBox = componet.getChildByName("check_" + i);
                checkBox.addEventListener(eui.UIEvent.CHANGE, this.onEventChange, this);
                this._checkBoxes.push(checkBox);
                var panel = componet.getChildByName("panel_" + i);
                this._panels.push(panel);
            }
        };
        /**
         * 移除舞台
         */
        ServiceLayer.prototype.onExit = function () {
            this._checkBoxes.forEach(function (checkbox) {
                checkbox = null;
            });
            this._panels.forEach(function (panel) {
                panel = null;
            });
            this._checkBoxes = null;
            this._panels = null;
        };
        /**
         * checkBox event
         */
        ServiceLayer.prototype.onEventChange = function (e) {
            var target = e.target;
            for (var i = 0; i < this._checkBoxes.length; i++) {
                var checkbox = this._checkBoxes[i];
                var panel = this._panels[i];
                if (target == checkbox) {
                    target.selected = true;
                    panel.visible = true;
                }
                else {
                    checkbox.selected = false;
                    panel.visible = false;
                }
            }
        };
        /**
         * 按钮事件
         */
        ServiceLayer.prototype.onButtonClickEvent = function (e) {
            var target = e.target;
            if (target instanceof eui.Button) {
                var tw = egret.Tween.get(target)
                    .to({ scaleX: 1.1, scaleY: 1.1 }, 50)
                    .to({ scaleX: 1.0, scaleY: 1.0 }, 50);
            }
            if (target.name == "bt_return") {
                this._scene.onChangeView();
            }
        };
        return ServiceLayer;
    }(eui.UILayer));
    client.ServiceLayer = ServiceLayer;
})(client || (client = {}));
