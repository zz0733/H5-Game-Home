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
     * 登录服务
     */
    var LogonView = (function (_super) {
        __extends(LogonView, _super);
        function LogonView(scene) {
            var _this = _super.call(this) || this;
            _this._scene = scene;
            return _this;
        }
        LogonView.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.once(egret.Event.ADDED_TO_STAGE, this.onInitLayer, this);
        };
        LogonView.prototype.onInitLayer = function () {
            this.touchEnabled = false;
            this.name = "LogonView";
            //加载皮肤 
            var componet = new eui.Component();
            this.addChild(componet);
            componet.skinName = skins.LogonView;
            //返回
            var btn = componet.getChildByName("bt_return");
            btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClickEvent, this);
            //注册
            btn = componet.getChildByName("bt_regist");
            btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClickEvent, this);
            //登录
            btn = componet.getChildByName("bt_logon");
            btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClickEvent, this);
            //账号文本
            this._accountTextInput = componet.getChildByName("input_account");
            this._accountTextInput.addEventListener(egret.Event.CHANGE, this.onChange, this);
            this._accountTextInput.prompt = "请输入账号";
            this._accountTextInput.maxChars = df.LEN_ACCOUNTS;
            if (null != this._scene._localStorage) {
                this._accountTextInput.text = this._scene._localStorage.account;
                this._scene._account = this._scene._localStorage.account;
            }
            //密码文本
            this._passwordTextInput = componet.getChildByName("input_password");
            this._passwordTextInput.addEventListener(egret.Event.CHANGE, this.onChange, this);
            this._passwordTextInput.prompt = "请输入密码";
            this._passwordTextInput.maxChars = df.LEN_PASSWORD;
            if (null != this._scene._localStorage) {
                this._passwordTextInput.text = this._scene._localStorage.password;
                this._scene._password = this._scene._localStorage.password;
            }
            //自动登录
            var checkbox = componet.getChildByName("auot_checkbox");
            checkbox.addEventListener(eui.UIEvent.CHANGE, this.onEventChange, this);
            checkbox.selected = this._scene._isAutoLogon;
        };
        /**
         * 输入框
         */
        LogonView.prototype.onChange = function (e) {
            this._scene._isHandInput = true;
            var target = e.currentTarget;
            if (target == this._accountTextInput) {
                this._passwordTextInput.text = "";
            }
        };
        /**
         * checkbox
         */
        LogonView.prototype.onEventChange = function (e) {
            var target = e.target;
            this._scene._isAutoLogon = !this._scene._isAutoLogon;
            managers.FrameManager.getInstance().m_IsAuto = this._scene._isAutoLogon;
        };
        /**
        * 按钮事件
        */
        LogonView.prototype.onButtonClickEvent = function (e) {
            var target = e.target;
            if (target instanceof eui.Button) {
                var tw = egret.Tween.get(target)
                    .to({ scaleX: 1.1, scaleY: 1.1 }, 50)
                    .to({ scaleX: 1.0, scaleY: 1.0 }, 50);
            }
            switch (target.name) {
                case "bt_return":
                    {
                        this._scene.onChangeView();
                        break;
                    }
                case "bt_regist":
                    {
                        this._scene.onChangeView(df.MODE_REGISTER);
                        break;
                    }
                case "bt_logon":
                    {
                        if (this._accountTextInput.text.length == 0) {
                            managers.FrameManager.getInstance().showToast("请输入账号");
                            return;
                        }
                        if (this._passwordTextInput.text.length == 0) {
                            managers.FrameManager.getInstance().showToast("请输入密码");
                            return;
                        }
                        if (this._accountTextInput.text.length < 6) {
                            managers.FrameManager.getInstance().showToast("您的账号不存在,请重新输入");
                            return;
                        }
                        if (this._passwordTextInput.text.length < 6) {
                            managers.FrameManager.getInstance().showToast("您的密码不存在或者输入有误,请重新输入");
                            return;
                        }
                        this._scene._account = this._accountTextInput.text;
                        this._scene._password = this._passwordTextInput.text;
                        //发送登录
                        this._scene.onLogon();
                        break;
                    }
            }
        };
        return LogonView;
    }(eui.UILayer));
    client.LogonView = LogonView;
})(client || (client = {}));
