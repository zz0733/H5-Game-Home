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
 * 游戏视图控制器
 */
var controller;
(function (controller) {
    var GameController = /** @class */ (function (_super) {
        __extends(GameController, _super);
        function GameController(gameModule) {
            var _this = _super.call(this) || this;
            //视图名称
            _this.name = "GameController";
            _this._gameModule = gameModule;
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
        GameController.prototype.viewWillAppear = function (animated) {
        };
        GameController.prototype.viewDidAppear = function (animated) {
            this._gameEngine = this.createGameClient(this._gameModule);
        };
        GameController.prototype.viewWillDisappear = function (animated) {
        };
        GameController.prototype.viewDidDisappear = function (animated) {
        };
        GameController.prototype.dealloc = function () {
            this.removeEventListener(customEvent.CustomEvent.EVENT_ENTER_BACKGROUND, this.applicationWillEnterForeground, this);
            this.removeEventListener(customEvent.CustomEvent.EVENT_BECOME_ACTIVE, this.applicationDidBecomeActive, this);
        };
        GameController.prototype.createGameClient = function (module) {
            //构造游戏层
            var gameEngine = this.addChild(utils.createInstance(this._gameModule));
            managers.TcpServiceCtrl.getInstance()._isAllowDispatch = true;
            return gameEngine;
        };
        /**进入前台
         * applicationDidBecomeActive
         */
        GameController.prototype.applicationDidBecomeActive = function (event) {
            console.log("GameController 激活窗口");
            if (this._gameEngine && this._gameEngine.onInitEngine) {
                //this._gameEngine.onInitEngine();
            }
        };
        /**进入后台
        * applicationDidBecomeActive
        */
        GameController.prototype.applicationWillEnterForeground = function (event) {
            console.log("GameController 进入后台");
            if (this._gameEngine && this._gameEngine.onResetEngine) {
                // this._gameEngine.onResetEngine();
            }
        };
        return GameController;
    }(models.Controller));
    controller.GameController = GameController;
})(controller || (controller = {}));
