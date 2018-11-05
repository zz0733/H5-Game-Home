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
 * 跑得快
 */
var game;
(function (game) {
    var runfast;
    (function (runfast) {
        /**
         * 游戏引擎
         * 游戏协议
         * 场景消息
         * 用户服务
         */
        var GameClientEngine = (function (_super) {
            __extends(GameClientEngine, _super);
            /**
             * 构造
             */
            function GameClientEngine(engine) {
                var _this = _super.call(this) || this;
                /**游戏状态 */
                _this._cbGameStatus = 0;
                _this._bMoved = false;
                return _this;
            }
            //动作队列
            GameClientEngine.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.name = "GameClientEngine";
                this.once(egret.Event.ADDED_TO_STAGE, this.onInitLayer, this);
                this.once(egret.Event.REMOVED_FROM_STAGE, this.onExit, this);
                //设置业务代理
                this._gameFrame.setDelegate(this);
                //注册触摸
                this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegan, this);
                this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
                this.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
                //注册通知
                this.addEventListener(customEvent.CustomEvent.EVENT_USER_ENTER, this.onUserEnter, this);
                this.addEventListener(customEvent.CustomEvent.EVENT_USER_STATUS, this.onUserStatus, this);
            };
            /**初始化 */
            GameClientEngine.prototype.onInitLayer = function () {
                this._gameviewLayer = new runfast.GameViewLayer(this);
                this.addChild(this._gameviewLayer);
            };
            /**变量初始化 */
            GameClientEngine.prototype.onInitEngine = function () {
                _super.prototype.onInitEngine.call(this);
            };
            /**变量重置*/
            GameClientEngine.prototype.onResetEngine = function () {
            };
            /**
             * 游戏层刷新
             */
            GameClientEngine.prototype.onUpdate = function () {
                this._gameviewLayer.update();
            };
            /**游戏人数 */
            GameClientEngine.prototype.gamePlayerCount = function () {
                return cmd.runfast.GAME_PLAYER;
            };
            /**
             * 视图转换
             * 玩家逻辑索引
             */
            GameClientEngine.prototype.switchViewChairID = function (chairID) {
                if (chairID == this.getMeChair()) {
                    return cmd.runfast.MY_VIEW;
                }
                else if (chairID > this.getMeChair()) {
                    if (chairID == (this.getMeChair() + 1)) {
                        return cmd.runfast.RIGHT_VIEW;
                    }
                    else if (chairID == (this.getMeChair() + 2)) {
                        return cmd.runfast.TOP_VIEW;
                    }
                    else if (chairID == (this.getMeChair() + 3)) {
                        return cmd.runfast.LEFT_VIEW;
                    }
                }
                else {
                    if ((chairID + 1) == this.getMeChair()) {
                        return cmd.runfast.LEFT_VIEW;
                    }
                    else if ((chairID + 2) == this.getMeChair()) {
                        return cmd.runfast.TOP_VIEW;
                    }
                    else if ((chairID + 3) == this.getMeChair()) {
                        return cmd.runfast.RIGHT_VIEW;
                    }
                }
                return df.INVALID_CHAIR;
            };
            /**倒计时事件 */
            GameClientEngine.prototype.onClockUpdateEvent = function () {
                if (this._gameviewLayer && this._gameviewLayer.updateClockView) {
                    this._gameviewLayer.updateClockView();
                }
            };
            GameClientEngine.prototype.getGameStatus = function () {
                return this._cbGameStatus;
            };
            /**用户进入 */
            GameClientEngine.prototype.onUserEnter = function (object) {
                var data = object.data;
                var user = data.user;
                if (null != this._gameviewLayer) {
                    this._gameviewLayer.onUpdataUser(user);
                }
            };
            /**用户状态 */
            GameClientEngine.prototype.onUserStatus = function (object) {
                var data = object.data;
                var user = data.user;
                var newstatus = data.newstatus;
                var oldstatus = data.oldstatus;
                if (null != this._gameviewLayer) {
                    this._gameviewLayer.onUpdataUser(user, newstatus, oldstatus);
                }
            };
            /**用户聊天 */
            GameClientEngine.prototype.onUserChat = function (object) {
            };
            /**用户分数 */
            GameClientEngine.prototype.onUserScore = function (object) {
            };
            /**游戏场景 */
            GameClientEngine.prototype.onGameScene = function (status, object) {
                utils.LOG("GameClientEngine: 游戏场景");
                this._cbGameStatus = status;
                managers.FrameManager.getInstance().dismissPopWait(); //移除等待界面
                switch (this._cbGameStatus) {
                    case cmd.runfast.GAME_SCENE_FREE:
                        {
                            this.onSceneFree(object); //进入游戏
                        }
                        break;
                    case cmd.runfast.GAME_SCENE_PLAY:
                        {
                            this.onScenePlaying(object); //断线重连
                        }
                        break;
                }
            };
            /**游戏协议 */
            GameClientEngine.prototype.onGameMessage = function (object) {
                var msg = object;
                switch (msg.wSubCmd) {
                    case cmd.runfast.SUB_S_GAME_START:
                        this.onSubGameStart(msg.cbBuffer);
                        break;
                    case cmd.runfast.SUB_S_OUT_CARD://出牌
                        break;
                    case cmd.runfast.SUB_S_PASS_CARD://
                        break;
                    case cmd.runfast.SUB_S_SHUT_CARD://
                        break;
                    case cmd.runfast.SUB_S_START_CARD://
                        break;
                    case cmd.runfast.SUB_S_GAME_END://
                        break;
                    case cmd.runfast.SUB_S_PHRASE://
                        break;
                    case cmd.runfast.SUB_S_TRUSTEE://
                        break;
                    case cmd.runfast.SUB_S_TOTAL_SCORE://
                        break;
                }
            };
            /**
         * 系统消息
         */
            GameClientEngine.prototype.onGameSystemMessage = function (buffer) {
            };
            GameClientEngine.prototype.onSubGameStart = function (buffer) {
                var start = new cmd.runfast.CMD_S_GameStart();
                start.onInit(buffer);
                console.log("GameStart:", start);
                //服务器发送游戏开始需要的数据，开始玩家
                //开始显示
                if (this._gameviewLayer && this._gameviewLayer.showGameStart) {
                    this._gameviewLayer.showGameStart(start);
                }
                //玩家个人的数据都以及动画
            };
            /**空闲场景 */
            GameClientEngine.prototype.onSceneFree = function (data) {
                // let a = "background: rgb(248, 177, 173); color: rgb(63, 172, 203)";
                // console.log("%c%o", a ,data);
                if (this._gameviewLayer && this._gameviewLayer.showSceneFree) {
                    this._gameviewLayer.showSceneFree(data);
                    // this._gameviewLayer.setRemaindNum(this._cbRemindCardCount);
                }
            };
            /**游戏场景 */
            GameClientEngine.prototype.onScenePlaying = function (data) {
            };
            /**倒计时处理 */
            GameClientEngine.prototype.onClockEvent = function (viewId, clockId) {
            };
            /** 触摸事件
            * onTouchBegan
            * onTouchMove
            * onTouchEnd
            */
            GameClientEngine.prototype.onTouchBegan = function (event) {
                //console.log("onTouch Began");
                this._bMoved = false;
            };
            GameClientEngine.prototype.onTouchMove = function (event) {
                //console.log("onTouch move");
                this._bMoved = true;
            };
            GameClientEngine.prototype.onTouchEnd = function (event) {
                //console.log("onTouch end");
            };
            /**返回大厅 */
            GameClientEngine.prototype.onQueryExitGame = function () {
                var _this = this;
                //游戏状态判断
                var msg = this.getGameStatus() == cmd.sparrowsclm.GAME_SCENE_FREE ? "是否确定退出游戏？" : "游戏已经开始，退出将由憨憨机器人代打哦！\n 是否确定退出游戏？";
                managers.FrameManager.getInstance().showDailog(1 /* OK_CANCELL */, msg, function () {
                    managers.FrameManager.getInstance().showPopWait("", 3000);
                    _this.onExitGame();
                });
            };
            /**移除舞台 */
            GameClientEngine.prototype.onExit = function () {
                _super.prototype.onExit.call(this);
                //移除触摸
                this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegan, this);
                this.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
                this.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
                //移除通知
                this.removeEventListener(customEvent.CustomEvent.EVENT_USER_ENTER, this.onUserEnter, this);
                this.removeEventListener(customEvent.CustomEvent.EVENT_USER_STATUS, this.onUserStatus, this);
            };
            return GameClientEngine;
        }(models.GameModel));
        runfast.GameClientEngine = GameClientEngine;
    })(runfast = game.runfast || (game.runfast = {}));
})(game || (game = {}));
