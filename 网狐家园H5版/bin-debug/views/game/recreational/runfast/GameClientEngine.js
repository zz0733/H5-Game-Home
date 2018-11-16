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
                this._gameLogic = new runfast.GameLogic();
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
            // public switchViewChairID(chairID: number) {
            //     if (chairID == this.getMeChair()) {
            //         return cmd.runfast.MY_VIEW;
            //     } else if (chairID > this.getMeChair()) {
            //         if (chairID == (this.getMeChair() + 1)) {
            //             return cmd.runfast.RIGHT_VIEW;
            //         } else if (chairID == (this.getMeChair() + 2)) {
            //             return cmd.runfast.TOP_VIEW;
            //         } else if (chairID == (this.getMeChair() + 3)) {
            //             return cmd.runfast.LEFT_VIEW;
            //         }
            //     } else {
            //         if ((chairID + 1) == this.getMeChair()) {
            //             return cmd.runfast.LEFT_VIEW;
            //         } else if ((chairID + 2) == this.getMeChair()) {
            //             return cmd.runfast.TOP_VIEW;
            //         } else if ((chairID + 3) == this.getMeChair()) {
            //             return cmd.runfast.RIGHT_VIEW;
            //         }
            //     }
            //
            //     return df.INVALID_CHAIR;
            // }
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
                    case cmd.runfast.SUB_S_GAME_START: {
                        this.onSubGameStart(msg.cbBuffer);
                        break;
                    }
                    case cmd.runfast.SUB_S_OUT_CARD: {
                        this.onSubOutCard(msg.cbBuffer);
                        break;
                    }
                    case cmd.runfast.SUB_S_PASS_CARD: {
                        this.onSubPass(msg.cbBuffer);
                        break;
                    }
                    case cmd.runfast.SUB_S_SHUT_CARD://
                        break;
                    case cmd.runfast.SUB_S_START_CARD: {
                        this.onSubStartCard(msg.cbBuffer);
                        break;
                    }
                    case cmd.runfast.SUB_S_GAME_END:
                        {
                            this.onSubGameEnd(msg.cbBuffer);
                        }
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
                    this._gameviewLayer.showGameStart(start); //
                }
                // this._gameLogic
                //玩家个人的数据都以及动画
                this._cbGameStatus = cmd.runfast.GAME_SCENE_PLAY;
            };
            /**
             * 玩家出牌
             * */
            GameClientEngine.prototype.onSubOutCard = function (buffer) {
                var outCard = new cmd.runfast.CMD_S_OutCard();
                outCard.onInit(buffer);
                //出牌玩家座位号
                // let viewID = this.switchViewChairID(outCard.wOutCardUser);
                // console.log("%c服务器出牌", "color: green;font-size: 5em");
                var back = [];
                for (var n = 0; n < outCard.cbCardData.length; n++) {
                    if (outCard.cbCardData[n] != 0) {
                        back.push(outCard.cbCardData[n]);
                    }
                    else {
                        break;
                    }
                }
                // console.log(this.toShowValue(back));
                this._gameviewLayer.showOutCards(outCard);
            };
            /**
            * 玩家过牌
            * */
            GameClientEngine.prototype.onSubPass = function (buffer) {
                var pass = new cmd.runfast.CMD_S_PassCard();
                pass.onInit(buffer);
                this._gameviewLayer.showPass(pass);
            };
            /**
             * 玩家开始出牌
             * */
            GameClientEngine.prototype.onSubStartCard = function (buffer) {
                var startCard = new cmd.runfast.CMD_S_StartCard();
                startCard.onInit(buffer);
                this._gameviewLayer.showStartCard(startCard);
            };
            /**
             * 游戏结束
             * */
            GameClientEngine.prototype.onSubGameEnd = function (buffer) {
                var gameEnd = new cmd.runfast.CMD_S_GameEnd();
                gameEnd.onInit(buffer);
                this._gameviewLayer.showGameEnd(gameEnd);
            };
            GameClientEngine.prototype.getColor = function (value) {
                return value >> 4;
            };
            GameClientEngine.prototype.getValue = function (value) {
                return 0x0F & value;
            };
            GameClientEngine.prototype.toShowValue = function (cards) {
                var _this = this;
                var back = [];
                cards.forEach(function (value, index) {
                    var poker = {
                        color: _this.getColor(value),
                        value: _this.getValue(value)
                    };
                    back.push(poker);
                });
                return back;
            };
            GameClientEngine.prototype.requestOutCard = function (cbCards) {
                //发送数据
                var outBuffer = utils.Memory.newLitteEndianByteArray(df.Len_Tcp_Head);
                outBuffer.Append_Byte(cbCards.length);
                cbCards.forEach(function (value, index) {
                    outBuffer.Append_Byte(value);
                });
                this._gameFrame.sendData(df.MDM_GF_GAME, cmd.runfast.SUB_C_OUT_CARD, outBuffer);
            };
            /**空闲场景 */
            GameClientEngine.prototype.onSceneFree = function (data) {
                if (this._gameviewLayer && this._gameviewLayer.showSceneFree) {
                    this._gameviewLayer.showSceneFree(data);
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
                var msg = this.getGameStatus() == cmd.runfast.GAME_SCENE_FREE ? "是否确定退出游戏？" : "游戏已经开始，退出将由憨憨机器人代打哦！\n 是否确定退出游戏？";
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
