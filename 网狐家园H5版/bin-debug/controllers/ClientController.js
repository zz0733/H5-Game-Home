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
 * 大厅视图控制器
 */
var controller;
(function (controller_1) {
    var ClientController = (function (_super) {
        __extends(ClientController, _super);
        /**
         * 构造
         */
        function ClientController() {
            var _this = _super.call(this) || this;
            //视图名称
            _this.name = "ClientController";
            _this.createClientScene();
            _this.addEventListener(customEvent.CustomEvent.EVENT_ENTER_BACKGROUND, _this.applicationWillEnterForeground, _this);
            _this.addEventListener(customEvent.CustomEvent.EVENT_BECOME_ACTIVE, _this.applicationDidBecomeActive, _this);
            return _this;
        }
        ClientController.prototype.createClientScene = function () {
        };
        /* controller生命周期
         *  viewWillAppear
         *  viewDidAppear
         *  viewWillDisappear
         *  viewDidDisappear
         *  dealloc 资源回收
         */
        ClientController.prototype.viewWillAppear = function (animated) {
            //根view
            var root = new eui.UILayer();
            this.addChild(root);
            //背景
            var sky = utils.createBitmapByName("background_png");
            root.addChild(sky);
            var controller = managers.FrameManager.getInstance().getRunningController();
            controller.setRoot(root);
            //大厅入口
            var clientLayer = new client.ClientLayer();
            clientLayer.x = -this.width;
            clientLayer.y = 0;
            controller.showView(clientLayer, 1 /* PLAZA */, true);
        };
        ClientController.prototype.viewDidAppear = function (animated) {
        };
        ClientController.prototype.viewWillDisappear = function (animated) {
        };
        ClientController.prototype.viewDidDisappear = function (animated) {
        };
        ClientController.prototype.dealloc = function () {
            this.removeEventListener(customEvent.CustomEvent.EVENT_ENTER_BACKGROUND, this.applicationWillEnterForeground, this);
            this.removeEventListener(customEvent.CustomEvent.EVENT_BECOME_ACTIVE, this.applicationDidBecomeActive, this);
        };
        /**进入前台
         * applicationDidBecomeActive
         */
        ClientController.prototype.applicationDidBecomeActive = function (event) {
        };
        /**进入后台
        * applicationDidBecomeActive
        */
        ClientController.prototype.applicationWillEnterForeground = function (event) {
        };
        /**
         * 网络消息
         */
        ClientController.prototype.onMessage = function (e) {
            var msg = e.data;
            var wMainCmd = msg.wMainCmd;
        };
        return ClientController;
    }(models.Controller));
    controller_1.ClientController = ClientController;
})(controller || (controller = {}));
