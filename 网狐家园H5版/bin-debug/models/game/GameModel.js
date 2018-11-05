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
 * 游戏公用父类
 */
var models;
(function (models) {
    var GameModel = /** @class */ (function (_super) {
        __extends(GameModel, _super);
        function GameModel() {
            var _this = _super.call(this) || this;
            _this._bChangeDesk = false;
            _this._bMatchDesk = false;
            _this.once(egret.Event.REMOVED_FROM_STAGE, _this.onExit, _this); //移除舞台时候触发事件
            _this.onInitEngine();
            //倒计时定时器
            managers.TimerCtrl.getInstance().createTimer(_this, 1000, 0, _this.onClockUpdateEvent, "clock");
            //帧率刷新
            managers.TimerCtrl.getInstance().createTimer(_this, 1000 / 60, 0, _this.onUpdate, "update");
            //查询用户
            _this._gameFrame.queryUserInfo(_this._gameFrame.getTableID(), df.INVALID_CHAIR);
            return _this;
        }
        /**
         * 初始化
         * 各游戏子类覆盖此方法
         */
        GameModel.prototype.onInitEngine = function () {
            this._gameFrame = managers.TcpServiceCtrl.getInstance().getDelegate();
            this._bChangeDesk = false;
            this._bMatchDesk = false;
        };
        /**
         * 重置游戏
         * 各游戏子类覆盖此方法
         */
        GameModel.prototype.onResetEngine = function () {
            this._bChangeDesk = false;
            this._bMatchDesk = false;
        };
        /**倒计时刷新
         * 各游戏子类覆盖此方法
         */
        GameModel.prototype.onClockUpdateEvent = function () {
        };
        /**倒计时事件
         *  各游戏子类覆盖此方法
         */
        GameModel.prototype.onClockEvent = function (viewId, clockId) {
        };
        /**帧率刷新
         * 各游戏子类覆盖此方法
         */
        GameModel.prototype.onUpdate = function () {
        };
        /**游戏人数
         * 各游戏子类覆盖此方法
         */
        GameModel.prototype.gamePlayerCount = function () {
            return 0;
        };
        /**获取玩家自己 */
        GameModel.prototype.getMeUserItem = function () {
            if (null != this._gameFrame) {
                return this._gameFrame.getMeUserItem();
            }
            return null;
        };
        /**获取座位号 */
        GameModel.prototype.getMeChair = function () {
            if (null != this.getMeUserItem()) {
                return this.getMeUserItem().wChairID;
            }
            return df.INVALID_CHAIR;
        };
        /**转换玩家视图
         * 返回索引
         * 定义自己索引0
         * 特殊视图需子类重写此方法
         *  */
        GameModel.prototype.switchViewChairID = function (chairID) {
            if (chairID < 0 || chairID >= this.gamePlayerCount())
                return;
            var myChair = this._gameFrame.getChairID();
            var userIndex = -1;
            var playerCount = this.gamePlayerCount();
            userIndex = ((playerCount - this._gameFrame.getChairID()) + chairID) % playerCount;
            return userIndex;
        };
        /**进入桌子 */
        GameModel.prototype.onEnterTable = function () {
            if (this._bChangeDesk) {
                //变量重置
                this._bChangeDesk = false;
                this._bMatchDesk = false;
                //消息派发
                managers.TcpServiceCtrl.getInstance()._isAllowDispatch = true;
                //查询用户
                this._gameFrame.queryUserInfo(this._gameFrame.getTableID(), df.INVALID_CHAIR);
                //清空界面
                if (null != this._gameviewLayer && this._gameviewLayer.onRestGameView) {
                    this._gameviewLayer.stopAllAction();
                    this._gameviewLayer.onRestGameView();
                }
            }
        };
        /**退出当前桌子 */
        GameModel.prototype.onExitTable = function () {
            if (null != this._gameFrame && this._gameFrame.isMatchMode()) {
                return true;
            }
            if (this._bChangeDesk) {
                //清理数据
                this.onResetEngine();
                if (null != this._gameviewLayer && this._gameviewLayer.onRestGameView) {
                    this._gameviewLayer.stopAllAction();
                    this._gameviewLayer.onRestGameView();
                    return true;
                }
            }
            return false;
        };
        /**离开游戏*/
        GameModel.prototype.onExitGame = function (szReason) {
            //判断用户状态
            var myself = this._gameFrame.getMeUserItem();
            this._gameFrame.onStandUp(myself.cbUserStatus >= df.US_PLAYING ? true : false);
            if (null != szReason && szReason.length > 0) {
                managers.FrameManager.getInstance().showToast(szReason);
            }
        };
        GameModel.prototype.onExit = function () {
            //业务代理置空
            if (null != this._gameFrame) {
                this._gameFrame.setDelegate(null);
                this._gameFrame = null;
            }
            //关闭定时器
            managers.TimerCtrl.getInstance().killTimer(this, "clock");
            managers.TimerCtrl.getInstance().killTimer(this, "update");
            //关闭游戏socket服务
            managers.TcpServiceCtrl.getInstance().closeService();
        };
        return GameModel;
    }(eui.UILayer));
    models.GameModel = GameModel;
})(models || (models = {}));
