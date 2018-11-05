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
     * 注册服务
     */
    var Regist = /** @class */ (function (_super) {
        __extends(Regist, _super);
        function Regist(scene) {
            var _this = _super.call(this) || this;
            _this.m_bAgree = false; //用户协议
            _this._scene = scene;
            return _this;
        }
        Regist.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.name = "RegistView";
            this.once(egret.Event.ADDED_TO_STAGE, this.onInitLayer, this);
            this.once(egret.Event.REMOVED_FROM_STAGE, this.onExit, this);
            //注册触摸
            this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegan, this);
            this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
            this.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
        };
        Regist.prototype.onInitLayer = function () {
            this.touchEnabled = false;
            this.name = "RegistView";
            //加载皮肤 
            var componet = new eui.Component();
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
            this._nameInput = componet.getChildByName("input_account");
            this._nameInput.prompt = "请输入账号";
            this._nameInput.maxChars = 31;
            //密码文本
            this._passInput = componet.getChildByName("input_password");
            this._passInput.prompt = "请输入密码";
            this._passInput.maxChars = 31;
        };
        Regist.prototype.onEventChange = function (e) {
            this.m_bAgree = !this.m_bAgree;
        };
        Regist.prototype.onButtonClickEvent = function (e) {
            var target = e.target;
            if (target instanceof eui.Button) {
                var tw = egret.Tween.get(target)
                    .to({ scaleX: 1.1, scaleY: 1.1 }, 50)
                    .to({ scaleX: 1.0, scaleY: 1.0 }, 50);
            }
            if (target.name == "bt_return") {
                this._scene.onChangeView();
            }
            else if (target.name == "bt_service") {
                var controller = managers.FrameManager.getInstance().getRunningController();
                controller.addWindow(new client.NoticeLayer(controller.getRootLayer(), df.MODE_AGREE));
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
        };
        //登录层退出
        Regist.prototype.onExit = function () {
            this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegan, this);
            this.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
            this.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
        };
        /** 触摸事件
        * onTouchBegan
        * onTouchMove
        * onTouchEnd
       */
        Regist.prototype.onTouchBegan = function (event) {
            console.log("onTouch Began");
        };
        Regist.prototype.onTouchMove = function (event) {
            console.log("onTouch move");
        };
        Regist.prototype.onTouchEnd = function (event) {
            console.log("onTouch end");
        };
        return Regist;
    }(eui.UILayer));
    client.Regist = Regist;
})(client || (client = {}));
