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
    /**
     * 登录
     */
    var LogonModeView = (function (_super) {
        __extends(LogonModeView, _super);
        function LogonModeView(scene) {
            var _this = _super.call(this) || this;
            _this._scene = scene;
            return _this;
        }
        LogonModeView.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.once(egret.Event.ADDED_TO_STAGE, this.onInitLayer, this);
        };
        /**
         * 初始化
         */
        LogonModeView.prototype.onInitLayer = function () {
            this.touchEnabled = false;
            this.name = "LogonMode";
            //加载皮肤 
            var componet = new eui.Component();
            this.addChild(componet);
            componet.skinName = skins.LogonModeView;
            //账号登录
            var btn = componet.getChildByName("bt_account_logon");
            btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClickEvent, this);
            //微信登录
            btn = componet.getChildByName("bt_wechat_logon");
            btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClickEvent, this);
            //注册账号
            btn = componet.getChildByName("bt_regist_account");
            btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClickEvent, this);
        };
        /**
         * 按钮事件
         */
        LogonModeView.prototype.onButtonClickEvent = function (e) {
            var button = e.target;
            var tw = egret.Tween.get(button)
                .to({ scaleX: 1.1, scaleY: 1.1 }, 50)
                .to({ scaleX: 1.0, scaleY: 1.0 }, 50);
            switch (button.name) {
                case "bt_account_logon":
                    {
                        this._scene.onChangeView(df.MODE_ACCOUNT);
                        break;
                    }
                case "bt_wechat_logon":
                    {
                        managers.FrameManager.getInstance().showDailog(0 /* OK_ONLY */, "未找到微信应用程序,请检查是否安装", null);
                        break;
                    }
                case "bt_regist_account":
                    {
                        this._scene.onChangeView(df.MODE_REGISTER);
                        break;
                    }
            }
        };
        return LogonModeView;
    }(eui.UILayer));
    client.LogonModeView = LogonModeView;
})(client || (client = {}));
