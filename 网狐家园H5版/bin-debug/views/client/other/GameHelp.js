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
 * 游戏规则
 */
var client;
(function (client) {
    var GameHelp = /** @class */ (function (_super) {
        __extends(GameHelp, _super);
        function GameHelp(scene, kindID) {
            if (kindID === void 0) { kindID = 0; }
            var _this = _super.call(this) || this;
            _this._scene = scene;
            _this._kindID = kindID;
            return _this;
        }
        GameHelp.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.once(egret.Event.ADDED_TO_STAGE, this.onInitLayer, this);
            this.once(egret.Event.REMOVED_FROM_STAGE, this.onExit, this);
        };
        /**
         * 初始化
         */
        GameHelp.prototype.onInitLayer = function () {
            //加载皮肤 
            var componet = new eui.Component();
            this.addChild(componet);
            componet.skinName = skins.GameHelpLayer;
            //返回按钮
            var bt = componet.getChildByName("bt_close");
            bt.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClickEvent, this);
        };
        /**
       * 按钮事件
       */
        GameHelp.prototype.onButtonClickEvent = function (e) {
            var target = e.target;
            if (target.name = "bt_close") {
                this._scene.removeChild(this);
            }
        };
        /**
         * 移除舞台
         */
        GameHelp.prototype.onExit = function () {
        };
        return GameHelp;
    }(eui.UILayer));
    client.GameHelp = GameHelp;
})(client || (client = {}));
