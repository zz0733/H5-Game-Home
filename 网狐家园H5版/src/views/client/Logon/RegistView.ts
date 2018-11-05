namespace client {
    /**
     * 注册服务
     */
    export class Regist extends eui.UILayer {
        private _scene: any;
        constructor(scene: any) {
            super();
            this._scene = scene;
        }

        protected createChildren(): void {
            super.createChildren();
            this.name = "RegistView"

            this.once(egret.Event.ADDED_TO_STAGE, this.onInitLayer, this);
            this.once(egret.Event.REMOVED_FROM_STAGE, this.onExit, this);

            //注册触摸
            this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegan, this);
            this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
            this.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
        }

        //初始化
        private _nameInput: eui.TextInput;  //账号文本
        private _passInput: eui.TextInput;  //密码文本
        private m_bAgree: boolean = false;   //用户协议

        private onInitLayer(): void {

            this.touchEnabled = false;
            this.name = "RegistView"

            //加载皮肤 
            let componet = new eui.Component();
            this.addChild(componet);
            componet.skinName = skins.RegistView;

            //返回按钮
            var btn = componet.getChildByName("bt_return");
            btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClickEvent, this);

            //注册
            btn = componet.getChildByName("bt_confirm");
            btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClickEvent, this);

            //Checkbox
            var agreeCheckBox = componet.getChildByName("agree_checkbox");
            agreeCheckBox.addEventListener(eui.UIEvent.CHANGE, this.onEventChange, this);

            //用户协议 
            var agreedeal = componet.getChildByName("bt_service");
            agreedeal.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClickEvent, this);

            //输入文本
            this._nameInput = <eui.TextInput>componet.getChildByName("input_account");
            this._nameInput.prompt = "请输入账号";
            this._nameInput.maxChars = 31;

            //密码文本
            this._passInput = <eui.TextInput>componet.getChildByName("input_password");
            this._passInput.prompt = "请输入密码";
            this._passInput.maxChars = 31;
        }

        private onEventChange(e: eui.UIEvent) {
            this.m_bAgree = !this.m_bAgree;
        }

        private onButtonClickEvent(e: egret.TouchEvent) {
            var target = e.target;
            if (target instanceof eui.Button) {
                let tw = egret.Tween.get(target)
                    .to({ scaleX: 1.1, scaleY: 1.1 }, 50)
                    .to({ scaleX: 1.0, scaleY: 1.0 }, 50);
            }


            if (target.name == "bt_return") {
                this._scene.onChangeView();

            } else if (target.name == "bt_service") {
                var controller: models.Controller = managers.FrameManager.getInstance().getRunningController() as models.Controller;
                controller.addWindow(new NoticeLayer(controller.getRootLayer(), df.MODE_AGREE))
            }
            else if (target.name == "bt_confirm") {
                if (!this.m_bAgree) {
                    managers.FrameManager.getInstance().showToast("请先阅读并接受用户服务协议");
                    return;
                }
                if (this._nameInput.text.length == 0) {
                    managers.FrameManager.getInstance().showToast("请输入账号");
                    return;
                }

                if (this._passInput.text.length == 0) {
                    managers.FrameManager.getInstance().showToast("请输入密码");
                    return;
                }

                if (this._nameInput.text.length < 6 || this._nameInput.text.length > 31) {
                    managers.FrameManager.getInstance().showToast("游戏账号必须为6~31个字符,请重新输入!");
                    return;
                }

                if (this._passInput.text.length < 6 || this._nameInput.text.length > 31) {
                    managers.FrameManager.getInstance().showToast("游戏密码必须为6~31个字符,请重新输入!");
                    return;
                }

                //发送注册
                this._scene._account = this._nameInput.text;
                this._scene._password = this._passInput.text;
                this._scene.onRegist();
            }
        }

        //登录层退出
        private onExit(): void {
            this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegan, this);
            this.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
            this.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
        }

        /** 触摸事件
        * onTouchBegan
        * onTouchMove
        * onTouchEnd
       */
        private onTouchBegan(event: egret.TouchEvent) {
            console.log("onTouch Began");
        }

        private onTouchMove(event: egret.TouchEvent) {
            console.log("onTouch move");

        }

        private onTouchEnd(event: egret.TouchEvent) {
            console.log("onTouch end");

        }
    }
}