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
 * 设置
 */
var client;
(function (client) {
    var OptionLayer = /** @class */ (function (_super) {
        __extends(OptionLayer, _super);
        function OptionLayer(scene, mode) {
            if (mode === void 0) { mode = 0; }
            var _this = _super.call(this) || this;
            _this._scene = scene;
            _this._mode = mode;
            return _this;
        }
        OptionLayer.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.once(egret.Event.ADDED_TO_STAGE, this.onInitLayer, this);
            this.once(egret.Event.REMOVED_FROM_STAGE, this.onExit, this);
        };
        OptionLayer.prototype.onInitLayer = function () {
            //加载皮肤 
            var componet = new eui.Component();
            this.addChild(componet);
            componet.skinName = skins.OptionLayer;
            this.touchEnabled = true;
            this._bg_normal = componet.getChildByName("bg_normal");
            this._bg_extern = componet.getChildByName("bg_extern");
            var title_switch0 = componet.getChildByName("panel_switch0");
            var title_switch1 = componet.getChildByName("panel_switch1");
            this._check_option = title_switch1.getChildByName("check_option");
            this._check_confirm = title_switch1.getChildByName("check_confirm");
            this._check_change = title_switch1.getChildByName("check_change");
            this._panel_option = componet.getChildByName("panel_option");
            this._panel_confirm = componet.getChildByName("panel_confirm");
            this._panel_change = componet.getChildByName("panel_change");
            //添加监听
            this._check_option.addEventListener(eui.UIEvent.CHANGE, this.onEventChange, this);
            this._check_confirm.addEventListener(eui.UIEvent.CHANGE, this.onEventChange, this);
            this._check_change.addEventListener(eui.UIEvent.CHANGE, this.onEventChange, this);
            if (this._mode == 0) {
                title_switch0.visible = true;
                title_switch1.visible = false;
                this._bg_normal.visible = true;
                this._bg_extern.visible = false;
            }
            else if (this._mode == 1) {
                title_switch0.visible = false;
                title_switch1.visible = true;
                this._bg_normal.visible = false;
                this._bg_extern.visible = true;
            }
            //设置页面
            this.initOption();
            //实名验证
            this.initCertification();
            //切换账号
            this.initChangeAccount();
            //返回按钮
            var btn = componet.getChildByName("bt_return");
            btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClickEvent, this);
            // var colorMatrix = 
            // [
            //     0.3,0.6,0,0,0,
            //     0.3,0.6,0,0,0,
            //     0.3,0.6,0,0,0,
            //     0,0,0,1,0
            // ];
            // var flilter = new egret.ColorMatrixFilter(colorMatrix);
            // btn.filters = [flilter];
            // btn.filters = null;
            // //语言
            // var radioLan = componet.getChildByName("radio_language_0");
            // radioLan.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onButtonClickEvent,this);
            // //slider
            // var slider_music = <eui.HSlider>componet.getChildByName("slider_music");
            // slider_music.enabled = false;
            // slider_music.trackHighlight.filters = [flilter];
            // slider_music.thumb.filters = [flilter];
        };
        OptionLayer.prototype.initOption = function () {
        };
        OptionLayer.prototype.initCertification = function () {
        };
        OptionLayer.prototype.initChangeAccount = function () {
            var bt = this._panel_change.getChildByName("bt_change");
            bt.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClickEvent, this);
        };
        OptionLayer.prototype.onExit = function () {
        };
        OptionLayer.prototype.onEventChange = function (e) {
            var target = e.target;
            if (target == this._check_option) {
                this._check_confirm.selected = false;
                this._check_change.selected = false;
                this._panel_option.visible = true;
                this._panel_confirm.visible = false;
                this._panel_change.visible = false;
            }
            else if (target == this._check_confirm) {
                this._check_option.selected = false;
                this._check_change.selected = false;
                this._panel_option.visible = false;
                this._panel_confirm.visible = true;
                this._panel_change.visible = false;
            }
            else if (target == this._check_change) {
                this._check_option.selected = false;
                this._check_confirm.selected = false;
                this._panel_option.visible = false;
                this._panel_confirm.visible = false;
                this._panel_change.visible = true;
            }
        };
        OptionLayer.prototype.onButtonClickEvent = function (e) {
            var target = e.target;
            var tw = egret.Tween.get(target)
                .to({ scaleX: 1.1, scaleY: 1.1 }, 50)
                .to({ scaleX: 1.0, scaleY: 1.0 }, 50);
            switch (target.name) {
                case "bt_return":
                    {
                        this._scene.onChangeView();
                    }
                    break;
                case "bt_change":
                    {
                        managers.FrameManager.getInstance().m_IsAuto = false;
                        var loginController = new controller.LoginController();
                        managers.FrameManager.getInstance().replaceScene(loginController, true);
                    }
                    break;
            }
        };
        return OptionLayer;
    }(eui.UILayer));
    client.OptionLayer = OptionLayer;
})(client || (client = {}));
