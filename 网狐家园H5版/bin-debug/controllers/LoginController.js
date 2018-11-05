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
 * 登录控制器
 * 视图切换
 */
var controller;
(function (controller) {
    var LoginController = /** @class */ (function (_super) {
        __extends(LoginController, _super);
        /**
         * 构造
         */
        function LoginController() {
            var _this = _super.call(this) || this;
            //视图名称
            _this.name = "LoginController";
            _this.createLoginScene();
            //注册触摸
            _this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, _this.onTouchBegan, _this);
            _this.addEventListener(egret.TouchEvent.TOUCH_MOVE, _this.onTouchMove, _this);
            _this.addEventListener(egret.TouchEvent.TOUCH_END, _this.onTouchEnd, _this);
            _this.addEventListener(customEvent.CustomEvent.EVENT_ENTER_BACKGROUND, _this.applicationWillEnterForeground, _this);
            _this.addEventListener(customEvent.CustomEvent.EVENT_BECOME_ACTIVE, _this.applicationDidBecomeActive, _this);
            return _this;
        }
        /* controller生命周期
        *  viewWillAppear
        *  viewDidAppear
        *  viewWillDisappear
        *  viewDidDisappear
        *  dealloc 回收资源
        */
        LoginController.prototype.viewWillAppear = function (animated) {
            console.log("LoginController viewWillAppear");
        };
        LoginController.prototype.viewDidAppear = function (animated) {
            console.log("LoginController viewDidAppear");
        };
        LoginController.prototype.viewWillDisappear = function (animated) {
            console.log("LoginController viewWillDisappear");
        };
        LoginController.prototype.viewDidDisappear = function (animated) {
            console.log("LoginController viewDidDisappear");
        };
        LoginController.prototype.dealloc = function () {
            //移除监听
            this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegan, this);
            this.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
            this.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
            this.removeEventListener(customEvent.CustomEvent.EVENT_ENTER_BACKGROUND, this.applicationWillEnterForeground, this);
            this.removeEventListener(customEvent.CustomEvent.EVENT_BECOME_ACTIVE, this.applicationDidBecomeActive, this);
            console.log("LoginController dealloc");
        };
        /**进入前台
        * applicationDidBecomeActive
        */
        LoginController.prototype.applicationDidBecomeActive = function (event) {
            console.log("登录场景-进入前台");
        };
        /**进入后台
        * applicationDidBecomeActive
        */
        LoginController.prototype.applicationWillEnterForeground = function (event) {
            console.log("登录场景-进入后台");
        };
        LoginController.prototype.createLoginScene = function () {
            //背景
            var sky = utils.createBitmapByName("background_png");
            this.addChild(sky);
            //加载登录层
            var logonLayer = new client.LogonLayer();
            this.addChild(logonLayer);
        };
        /** 触摸事件
         * onTouchBegan
         * onTouchMove
         * onTouchEnd
        */
        LoginController.prototype.onTouchBegan = function (event) {
            console.log("onTouch Began");
        };
        LoginController.prototype.onTouchMove = function (event) {
            console.log("onTouch move");
        };
        LoginController.prototype.onTouchEnd = function (event) {
            console.log("onTouch end");
        };
        return LoginController;
    }(models.Controller));
    controller.LoginController = LoginController;
})(controller || (controller = {}));
