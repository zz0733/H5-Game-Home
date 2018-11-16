/**
 * 游戏交互
 */
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
var game;
(function (game) {
    var runfast;
    (function (runfast) {
        //用户头像位置
        var INVALID_CHAIR = df.INVALID_CHAIR;
        var HeadPoint = [{ x: 67, y: 110 }, { x: 7, y: 50 }, { x: 7, y: 50 }, { x: 7, y: 50 }];
        var GameViewLayer = (function (_super) {
            __extends(GameViewLayer, _super);
            /**
             * 构造
             */
            function GameViewLayer(engine) {
                var _this = _super.call(this) || this;
                _this._lCellScore = 0;
                _this._outCardHand = [];
                _this._clockHand = [];
                _this._userList = [];
                //手牌组件
                _this._holdContainer = [];
                //每次新一轮出牌的时候，先清空
                _this._cbOutCards = [];
                /**按钮事件 */
                _this._changeRecord = egret.getTimer();
                /**帧率刷新 */
                _this._lCurTime = egret.getTimer();
                _this._nDotIndex = 0;
                _this._bMoved = false;
                _this._gameEngine = engine;
                return _this;
            }
            GameViewLayer.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.name = "GameViewLayer";
                //再往下细分各类控制不同组件的类
                this.once(egret.Event.ADDED_TO_STAGE, this.onInitLayer, this);
                this.once(egret.Event.REMOVED_FROM_STAGE, this.onExit, this);
                //注册触摸
                this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegan, this);
                this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
                this.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
            };
            GameViewLayer.prototype.onInitLayer = function () {
                var gameView = new eui.Component();
                this.addChild(gameView);
                this._gameView = gameView;
                gameView.skinName = "resource/eui_skins/game/recreational/runfast/GameLayer.exml";
                this.showMyselfInfo();
                this.initDesk();
                // this.initHoldContainer();
                this.initComponent();
                this.initButton();
                this.showClock(0, cmd.runfast.TIME_GAME_START);
            };
            GameViewLayer.prototype.initComponent = function () {
                this._outCardBtn = this._gameView["btn_out_card"];
                this._outTips = this._gameView["btn_tip"];
                //手牌管理容器
                for (var i = 0; i < cmd.runfast.GAME_PLAYER; i++) {
                    // console.log("%c%s",
                    //     "color: green; background: yellow; font-size: 24px;",
                    //     "是否存在按钮组件：");
                    this._holdContainer[i] = new runfast.HoldContainer(this._gameView["holder_container_" + i], this, this._outTips);
                }
                for (var i = 0; i < cmd.runfast.GAME_PLAYER; i++) {
                    this._outCardHand.push(new runfast.OutCard(i, this));
                    this._clockHand.push(new runfast.ClockView(i, this._gameView["runfast_clock_" + i]));
                }
            };
            GameViewLayer.prototype.initDesk = function () {
                //桌号
                var num = this._gameEngine._gameFrame.getTableID();
                if (num == df.INVALID_TABLE)
                    return;
                var table_info = this._gameView.getChildByName("table_info");
                // console.log("_____________", table_info);
                var table_num = table_info["group_0"].getChildByName("table_num");
                var label_num = table_num.getChildByName("deskNum");
                if (null != label_num) {
                    table_num.removeChildren();
                }
                var deskNum = utils.LabelAtlas.createLabel(num + "", "runfast_game_num_table_png", "0123456789", 20, 30);
                deskNum.name = "deskNum";
                utils.setAnchorLeftMid(deskNum);
                table_num.addChild(deskNum);
                //底分
                var formatStr = utils.StringUtils.formatNumberThousands(this._lCellScore);
                var table_score = table_info["group_1"].getChildByName("cell_number");
                var deskCell = table_score.getChildByName("deskCell");
                if (null != deskCell) {
                    table_score.removeChildren();
                }
                var newDeskCell = utils.LabelAtlas.createLabel(formatStr, "runfast_game_num_cellscore_png", "0123456789", 20, 26);
                newDeskCell.name = "deskCell";
                utils.setAnchorLeftMid(newDeskCell);
                table_score.addChild(newDeskCell);
            };
            GameViewLayer.prototype.showMyselfInfo = function () {
                var myself = this._gameEngine.getMeUserItem();
                if (null == myself)
                    return;
                if (myself.cbUserStatus == df.US_READY) {
                    //准备
                    this.showUserReady(myself);
                }
                var headPanel = this._gameView.getChildByName("user_info_0");
                var head = headPanel.getChildByName("headImg");
                if (null != head) {
                    headPanel.removeChild(head);
                }
                var newHead = models.HeadSprite.createHead(myself, 120, 120, 35, 35);
                newHead.name = "headImg";
                utils.setAnchorCenter(newHead);
                headPanel.addChild(newHead);
                newHead.x = HeadPoint[cmd.runfast.MY_VIEW].x;
                newHead.y = HeadPoint[cmd.runfast.MY_VIEW].y;
                var userid = headPanel.getChildByName("ID");
                userid.text = "ID:" + myself.dwUserID;
                var nick = headPanel.getChildByName("Nick");
                nick.text = utils.StringUtils.clipByConfig(myself.szNickName, 150, utils.StringUtils.getSystemConfig(20));
                // nick.text = myself.szNickName;
                var score = headPanel.getChildByName("Score");
                score.text = utils.StringUtils.clipByConfig(utils.StringUtils.formatNumberThousands(myself.lScore), 150, utils.StringUtils.getSystemConfig(18));
                score.text = "" + myself.lScore;
                var bitMapScore = headPanel.getChildByName("BitScore");
                var scoreLabel = bitMapScore.getChildByName("scoreLabel");
                if (null != scoreLabel) {
                    bitMapScore.removeChildren();
                }
                var labelAtlas = utils.LabelAtlas.createLabel(myself.lScore + "", "runfast_game_num_cellscore_png", "0123456789", 20, 26);
                labelAtlas.name = "scoreLabel";
                utils.setAnchorMidTop(labelAtlas);
                bitMapScore.addChild(labelAtlas);
            };
            GameViewLayer.prototype.initButton = function () {
                var back = this._gameView["btn_menu_back"];
                back.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);
                //换桌
                var change = this._gameView["btn_desk"];
                change.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);
                //准备
                var ready = this._gameView["btn_ready"];
                ready.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);
                this._outCardBtn.name = "btn_out_card";
                this._outCardBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);
            };
            GameViewLayer.prototype.activeOutButton = function (ifOut, outCards) {
                this._outCardBtn.enabled = ifOut;
                if (ifOut) {
                    this._cbOutCards = outCards;
                }
            };
            GameViewLayer.prototype.onButtonClick = function (e) {
                var target = e.target;
                switch (target.name) {
                    case "btn_menu_back": {
                        this._gameEngine.onQueryExitGame();
                        break;
                    }
                    case "btn_change_desk": {
                        //频繁过滤
                        var curTime = egret.getTimer();
                        if (curTime - this._changeRecord < 1000) {
                            managers.FrameManager.getInstance().showToast("亲,换的太频繁了!");
                            this._changeRecord = egret.getTimer();
                            return;
                        }
                        //发送换桌
                        managers.FrameManager.getInstance().showPopWait("");
                        this._gameEngine._bChangeDesk = true;
                        this._gameEngine._gameFrame.onChangeDesk();
                        this._changeRecord = egret.getTimer();
                        this.showClock(0, cmd.runfast.TIME_GAME_START);
                        target.visible = false;
                        break;
                    }
                    case "btn_ready": {
                        var userItem = this._gameEngine.getMeUserItem();
                        if (userItem.cbUserStatus >= df.US_READY)
                            return;
                        //发送准备
                        this._gameEngine._gameFrame.onUserReady();
                        this._clockHand[0].stop();
                        target.visible = false;
                        break;
                    }
                    case "btn_out_card": {
                        this._outCardHand[0].setOutCard(0, this._cbOutCards);
                        this._gameEngine.requestOutCard(this._cbOutCards);
                        this._holdContainer[0].lastPresent = [];
                        this._holdContainer[0].m_firstOut = false;
                        this._clockHand[0].stop();
                        //桌面按钮隐藏
                        this._gameView["button_play"].visible = false;
                        //手牌减少，重新生成
                        this._holdContainer[0].removeChooseCards();
                        this._holdContainer[0].spliceHold(this._cbOutCards);
                        break;
                    }
                }
            };
            GameViewLayer.prototype.onUpdataUser = function (user, newStatus, oldStatus) {
                // console.log("玩家进入:_______________", user);
                if (null == user)
                    return;
                if (user.cbUserStatus >= df.US_SIT && user.cbUserStatus != df.US_LOOKON) {
                    if (user.dwUserID != managers.FrameManager.getInstance().m_GlobalUserItem.dwUserID) {
                        this.showUser(user, true);
                    }
                    //用户准备
                    if (user.cbUserStatus == df.US_READY) {
                        this.showUserReady(user);
                    }
                    //用户断线
                    if (user.cbUserStatus == df.US_OFFLINE) {
                        // this.showUserOffLine(user);
                    }
                }
                //用户起立或离开
                if (user.cbUserStatus <= df.US_FREE) {
                    this.removeUser(user);
                }
            };
            GameViewLayer.prototype.removeUser = function (user) {
                console.log("%c玩家离开:", "color: green;font-size: 5em");
                console.log(user);
                var userIndex = this.removeUserCache(user);
                if (userIndex == df.INVALID_ITEM)
                    return;
                var target = this._gameView.getChildByName("user_info_" + userIndex);
                target.visible = false;
                var readyIcon = this._gameView.getChildByName("runfast_ready_label_" + userIndex);
                readyIcon.visible = false;
                this._gameView["holder_container_" + userIndex].visible = false;
            };
            /**移除缓存 */
            GameViewLayer.prototype.removeUserCache = function (user) {
                if (this._userList.length == 0)
                    return df.INVALID_ITEM;
                var bSuccess = false;
                var deleteIndex = df.INVALID_ITEM;
                for (var i = 0; i < this._userList.length; i++) {
                    var target = this._userList[i];
                    if (target.dwUserID == user.dwUserID) {
                        this._userList.splice(i, 1);
                        bSuccess = true;
                        deleteIndex = this._gameEngine.switchViewChairID(target.wChairID);
                        break;
                    }
                }
                egret.assert(bSuccess);
                return deleteIndex;
            };
            GameViewLayer.prototype.showUserReady = function (user, isshow) {
                if (isshow === void 0) { isshow = true; }
                var userIndex = this._gameEngine.switchViewChairID(user.wChairID);
                // let userPanel = this._gameView.getChildByName("userinfo" + userIndex) as eui.Panel;
                if (userIndex == INVALID_CHAIR)
                    return;
                var readyIcon = this._gameView.getChildByName("runfast_ready_label_" + userIndex);
                readyIcon.visible = isshow;
                if (!isshow || userIndex != cmd.runfast.MY_VIEW)
                    return;
                //隐藏开始按钮
                var startBt = this._gameView["button_start"].getChildByName("btn_ready");
                startBt.visible = false;
                //调整换桌按钮位置
                var changeDesk = this._gameView["button_start"].getChildByName("btn_change_desk");
                changeDesk.x = 2;
                //显示等待提示
                // this.showWaitTips(0, true);
            };
            GameViewLayer.prototype.showUser = function (user, isShow) {
                //加入缓存
                if (null != user) {
                    this.cacheUser(user);
                }
                //视图索引
                var userIndex = this._gameEngine.switchViewChairID(user.wChairID);
                if (userIndex == INVALID_CHAIR)
                    return;
                // console.log(userIndex);
                //用户信息
                var userPanel = this._gameView.getChildByName("user_info_" + userIndex);
                userPanel.visible = true;
                //校验重复
                if (null != userPanel.getChildByName("userHead"))
                    userPanel.removeChild(userPanel.getChildByName("userHead"));
                if (userIndex != cmd.runfast.MY_VIEW) {
                    // let orignalBg = userPanel.getChildByName("head") as eui.Image;
                    // orignalBg.visible = false;
                    //
                    // let normalBg = userPanel.getChildByName("head_normal") as eui.Image;
                    // normalBg.visible = true;
                }
                //头像
                var head = models.HeadSprite.createHead(user, 120, 120, 35, 35);
                utils.setAnchorLeftTop(head);
                head.name = "userHead";
                userPanel.addChild(head);
                head.x = HeadPoint[userIndex].x;
                head.y = HeadPoint[userIndex].y;
                //id
                var userid = userPanel.getChildByName("ID");
                userid.text = "ID:" + user.dwUserID;
                //昵称
                var nick = userPanel.getChildByName("Nick");
                nick.text = user.szNickName;
                var bitMapScore = userPanel.getChildByName("BitScore");
                if (null != bitMapScore.getChildByName("scoreLabel")) {
                    // let label = bitMapScore.getChildByName("scoreLabel") as utils.LabelAtlas;
                    // label.setText(user.lScore + "");
                    bitMapScore.removeChildren();
                }
                var labelAtlas = utils.LabelAtlas.createLabel(user.lScore + "", "runfast_game_num_cellscore_png", "0123456789", 20, 26);
                labelAtlas.name = "scoreLabel";
                utils.setAnchorMidTop(labelAtlas);
                bitMapScore.addChild(labelAtlas);
            };
            /**加入缓存 */
            GameViewLayer.prototype.cacheUser = function (user) {
                //判断重复
                for (var i = 0; i < this._userList.length; i++) {
                    var target = this._userList[i];
                    if (target.dwUserID == user.dwUserID) {
                        this._userList.splice(i, 1);
                        break;
                    }
                }
                //拷贝对象
                var copy = new models.UserItem(user);
                this._userList.push(copy);
            };
            /**清理桌面 */
            GameViewLayer.prototype.onRestGameView = function () {
                this._lCellScore = 0;
                var bt = this._gameView["button_start"].getChildByName("btn_ready");
                bt.visible = true;
                //换桌
                var change = this._gameView["button_start"].getChildByName("btn_change_desk");
                change.x = -183;
                change.visible = true;
                //隐藏
                for (var i = 0; i < cmd.runfast.GAME_PLAYER; i++) {
                    //将所有准备去掉
                    var userPanel = this._gameView.getChildByName("user_info_" + i);
                    var readyIcon = this._gameView.getChildByName("runfast_ready_label_" + i);
                    readyIcon.visible = false;
                    // const readyIcon = userPanel.getChildByName("ready");
                    // readyIcon.visible = false;
                    //
                    this._outCardHand[i].setOutCard(df.INVALID_ITEM);
                    this._gameView["holder_container_" + i].visible = false;
                }
                //初始化桌面
                this.initDesk();
            };
            GameViewLayer.prototype.update = function () {
            };
            /**停止动画 */
            GameViewLayer.prototype.stopAllAction = function () {
            };
            /**刷新倒计时 */
            GameViewLayer.prototype.updateClockView = function () {
            };
            /**显示场景* */
            GameViewLayer.prototype.showSceneFree = function (data) {
                //显示操作倒计时
                // this.setGameClock(cmd.runfast.TIME_GAME_START, cmd.sparrowsclm.IDI_GAME_START);
                //数据解析
                var dataBuffer = data;
                var sceneFree = new cmd.runfast.CMD_S_StatusFree(dataBuffer.cbBuffer);
                console.log(sceneFree);
                this._lCellScore = sceneFree.lCellScore;
                this._customConfig = sceneFree.CustomConfig;
                //还有两个历史积分，不知道有何作用
                //更新底分
                this.initDesk();
                //重置
            };
            GameViewLayer.prototype.setGameClock = function (nTime, clockId, viewId) {
                if (clockId === void 0) { clockId = 0; }
                if (viewId === void 0) { viewId = 0; }
            };
            /**游戏开始
             * @param start:
             lCellScore;//底分
             lTurnScore: number[] = [0, 0, 0, 0];
             lCollectScore: number[] = [0, 0, 0, 0];
             CustomConfig: tagCustomConfig;//配置信息
             * */
            GameViewLayer.prototype.showGameStart = function (start) {
                //隐藏开始按钮
                var startBt = this._gameView["button_start"].getChildByName("btn_ready");
                startBt.visible = false;
                //隐藏换桌按钮
                var changeDesk = this._gameView["button_start"].getChildByName("btn_change_desk");
                changeDesk.visible = false;
                //隐藏等待提示
                // this.showWaitTips(0, false);
                //隐藏准备标识
                for (var i = 0; i < cmd.runfast.GAME_PLAYER; i++) {
                    var readyIcon = this._gameView.getChildByName("runfast_ready_label_" + i);
                    readyIcon.visible = false;
                }
                // this._customConfig = start.CustomConfig
                //给各个玩家分发手牌
                this._gameView["holder_container_0"].visible = true;
                this._holdContainer[0].setHold(start.cbCardData);
                for (var n = 1; n < cmd.runfast.GAME_PLAYER; n++) {
                    this._holdContainer[n].setHoldNumber(start.cbCardCount[n]);
                }
                //首出牌玩家
                var index = this._gameEngine.switchViewChairID(start.wCurrentUser);
                console.log(index + "号座位玩家出牌");
                //该玩家出牌
                if (index == cmd.runfast.MY_VIEW) {
                    this._holdContainer[0].chooseCards();
                    this._gameView["button_play"].visible = true;
                    this._outCardBtn.enabled = false;
                }
                //显示相应玩家的倒计时
                this.showClock(index);
            };
            GameViewLayer.prototype.showOutCards = function (outCards) {
                var viewId = this._gameEngine.switchViewChairID(outCards.wOutCardUser);
                var cbCardData = [];
                for (var n = 0; n < outCards.cbCardCount; n++) {
                    if (outCards.cbCardData[n] == 0)
                        break;
                    cbCardData.push(outCards.cbCardData[n]);
                }
                this._holdContainer[0].lastPresent = cbCardData;
                this._outCardHand[viewId].setOutCard(viewId, cbCardData);
                this._clockHand[viewId].stop();
                if (viewId == cmd.runfast.MY_VIEW) {
                    this._gameView["button_play"].visible = false;
                    this._holdContainer[0].removeChooseCards();
                    this._holdContainer[0].spliceHold(cbCardData);
                }
                else {
                    this._holdContainer[viewId].reduceHoldNum(cbCardData.length);
                }
                //报单
                if (outCards.bReportSingle) {
                    this._holdContainer[(viewId + 3) % 4].reportSingle();
                }
            };
            GameViewLayer.prototype.showPass = function (pass) {
                //
                var viewId = this._gameEngine.switchViewChairID(pass.wPassCardUser);
                console.log(viewId + "要不起");
                this._outCardHand[viewId].setLabel(0);
            };
            GameViewLayer.prototype.showStartCard = function (startCard) {
                var viewId = this._gameEngine.switchViewChairID(startCard.wCurrentUser);
                var turnOver = startCard.bTurnOver;
                if (turnOver) {
                    //一轮结束的时候，过去出去为空
                    this._cbOutCards = [];
                }
                // console.log(viewId + "开始出牌");
                this._outCardHand[viewId].setOutCard(df.INVALID_ITEM);
                this.showClock(viewId);
                if (viewId == cmd.runfast.MY_VIEW) {
                    this._cbOutCards = [];
                    this._gameView["button_play"].visible = true;
                    this._outCardBtn.enabled = false;
                    this._holdContainer[0].chooseCards(turnOver);
                    this._holdContainer[0].m_firstOut = false;
                }
                //提示按钮,如何获知上家是否报单
            };
            GameViewLayer.prototype.showGameEnd = function (gameEnd) {
                console.log("%c游戏结束：", "color: green;font-size: 5em;");
                console.log(gameEnd);
                //游戏结束以后的状态变更，返回大厅或者其他，需要继续按钮
                //如何保存背景页面进入暂停界面，点击继续游戏以后，弹窗关闭，然后页面重新激活
                //然后再清理桌面，恢复到刚进入房间的画面
                var chairID = this._gameEngine.switchViewChairID(gameEnd.wWinPlayer);
                var myself = this._gameEngine.getMeUserItem();
                this._resultUi = new runfast.ResultUi(this, this._userList, chairID, myself);
                this._resultUi.skinName = "resource/eui_skins/game/recreational/runfast/ResultSkin.exml";
                this._resultUi.setInfo(gameEnd);
                this.addChild(this._resultUi);
                //关于游戏动画的制作
                //序列帧动画的实现，MovieClip制作
            };
            // private _currentClock: number;
            /**
             * 显示相应玩家倒计时
             * */
            GameViewLayer.prototype.showClock = function (index, time) {
                if (time === void 0) { time = cmd.runfast.TIME_GAME_OPERATE; }
                // this._currentClock = index;
                this._clockHand[index].showClock(time);
                if (index == cmd.runfast.MY_VIEW) {
                    this.addEventListener(runfast.EVT_TIME_OUT, this.onTimeOut, this);
                }
            };
            GameViewLayer.prototype.onTimeOut = function (evt) {
                // this._currentClock = df.INVALID_ITEM;
                //玩家倒计时完以后发生的事件,将按钮隐藏
                this._gameView["button_play"].visible = false;
                this.removeEventListener(runfast.EVT_TIME_OUT, this.onTimeOut, this);
            };
            /** 触摸事件
             * onTouchBegan
             * onTouchMove
             * onTouchEnd
             */
            GameViewLayer.prototype.onTouchBegan = function (event) {
                //console.log("GameViewLayer onTouch Began");
                this._bMoved = false;
            };
            GameViewLayer.prototype.onTouchMove = function (event) {
                // console.log("GameViewLayer onTouch move");
                this._bMoved = true;
            };
            GameViewLayer.prototype.onTouchEnd = function (event) {
                // console.log("GameViewLayer onTouch end");
            };
            /**
             * 移除舞台
             */
            GameViewLayer.prototype.onExit = function () {
                //移除触摸
                this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegan, this);
                this.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
                this.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
            };
            return GameViewLayer;
        }(eui.UILayer));
        runfast.GameViewLayer = GameViewLayer;
    })(runfast = game.runfast || (game.runfast = {}));
})(game || (game = {}));
