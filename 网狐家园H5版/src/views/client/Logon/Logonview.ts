namespace client {
    /**
     * 登录服务
     */
    export class LogonView extends eui.UILayer {
        /**
         * 构造
         */
        private _scene: any;
        constructor(scene: any) {
            super();
            this._scene = scene;
        }

        protected createChildren(): void {
            super.createChildren();
            this.once(egret.Event.ADDED_TO_STAGE, this.onInitLayer, this);
        }

        /**
         * 初始化
         */
        private _accountTextInput: eui.TextInput;
        private _passwordTextInput: eui.TextInput;
        public onInitLayer(): void {

            this.touchEnabled = false;
            this.name = "LogonView";
            

            //加载皮肤 
            let componet = new eui.Component();
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
            this._accountTextInput = <eui.TextInput>componet.getChildByName("input_account");
            this._accountTextInput.addEventListener(egret.Event.CHANGE,this.onChange,this);
            this._accountTextInput.prompt = "请输入账号";
            this._accountTextInput.maxChars = df.LEN_ACCOUNTS;
            if (null != this._scene._localStorage) {
                 this._accountTextInput.text = this._scene._localStorage.account;
                 this._scene._account = this._scene._localStorage.account;
            }

            //密码文本
            this._passwordTextInput = <eui.TextInput>componet.getChildByName("input_password");
            this._passwordTextInput.addEventListener(egret.Event.CHANGE,this.onChange,this)
            this._passwordTextInput.prompt = "请输入密码";
            this._passwordTextInput.maxChars = df.LEN_PASSWORD;
            if (null != this._scene._localStorage) {
                 this._passwordTextInput.text = this._scene._localStorage.password;
                 this._scene._password = this._scene._localStorage.password;
            }

            //自动登录
            var checkbox = <eui.CheckBox>componet.getChildByName("auot_checkbox");
            checkbox.addEventListener(eui.UIEvent.CHANGE, this.onEventChange, this);
            checkbox.selected = this._scene._isAutoLogon;
        }

        /**
         * 输入框
         */
        private onChange(e: egret.Event) {
            this._scene._isHandInput = true;
            let target = e.currentTarget as eui.TextInput;
            if (target == this._accountTextInput) {
                this._passwordTextInput.text = "";
            }
        }

        /**
         * checkbox
         */
        private onEventChange(e: eui.UIEvent) {
            var target = <eui.CheckBox>e.target;
            this._scene._isAutoLogon = !this._scene._isAutoLogon;

            managers.FrameManager.getInstance().m_IsAuto = this._scene._isAutoLogon;
        }

        /**
        * 按钮事件
        */
        public onButtonClickEvent(e: egret.Event) {
            var target = e.target;
            if (target instanceof eui.Button) {
                let tw = egret.Tween.get(target)
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
                        this._scene.onLogon()
                        break;
                    }
            }
        }
    }
}