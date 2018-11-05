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
        var GameViewLayer = /** @class */ (function (_super) {
            __extends(GameViewLayer, _super);
            /**
             * 构造
             */
            function GameViewLayer(engine) {
                var _this = _super.call(this) || this;
                _this._lCellScore = 0;
                _this._userList = [];
                //手牌组件
                _this._holdContainer = [];
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
                var componet = new eui.Component();
                this.addChild(componet);
                this._companet = componet;
                componet.skinName = "resource/eui_skins/game/recreational/runfast/GameLayer.exml";
                this.showMyselfInfo();
                this.initDesk();
                this.initButton();
                this.initHoldContainer();
            };
            GameViewLayer.prototype.initHoldContainer = function () {
                for (var i = 0; i < cmd.runfast.GAME_PLAYER; i++) {
                    this._holdContainer[i] = new runfast.HoldContainer(this._companet["holder_container_" + i]);
                }
            };
            GameViewLayer.prototype.initDesk = function () {
                //桌号
                var num = this._gameEngine._gameFrame.getTableID();
                if (num == df.INVALID_TABLE)
                    return;
                var table_info = this._companet.getChildByName("table_info");
                console.log("_____________", table_info);
                var table_num = table_info["group_0"].getChildByName("table_num");
                var label_num = table_num.getChildByName("deskNum");
                if (null != label_num) {
                    var deskNum = table_num.getChildByName("deskNum");
                    deskNum.setText(num + "");
                }
                else {
                    var deskNum = utils.LabelAtlas.createLabel(num + "", "runfast_game_num_table_png", "0123456789", 20, 30);
                    deskNum.name = "deskNum";
                    utils.setAnchorLeftMid(deskNum);
                    table_num.addChild(deskNum);
                }
                //底分
                var formatStr = utils.StringUtils.formatNumberThousands(this._lCellScore);
                var table_score = table_info["group_1"].getChildByName("cell_number");
                var deskCell = table_score.getChildByName("deskCell");
                if (null != deskCell) {
                    deskCell.setText(formatStr);
                }
                else {
                    var newDeskCell = utils.LabelAtlas.createLabel(formatStr, "runfast_game_num_cellscore_png", "0123456789", 20, 26);
                    newDeskCell.name = "deskCell";
                    utils.setAnchorLeftMid(newDeskCell);
                    table_score.addChild(newDeskCell);
                }
            };
            GameViewLayer.prototype.showMyselfInfo = function () {
                var myself = this._gameEngine.getMeUserItem();
                if (null == myself)
                    return;
                if (myself.cbUserStatus == df.US_READY) {
                    //准备
                    this.showUserReady(myself);
                }
                var headPanel = this._companet.getChildByName("user_info_0");
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
                    scoreLabel.setText(myself.lScore + "");
                }
                else {
                    var labelAtlas = utils.LabelAtlas.createLabel(myself.lScore + "", "runfast_game_num_cellscore_png", "0123456789", 20, 26);
                    labelAtlas.name = "scoreLabel";
                    utils.setAnchorMidTop(labelAtlas);
                    bitMapScore.addChild(labelAtlas);
                }
            };
            GameViewLayer.prototype.initButton = function () {
                var back = this._companet["btn_menu_back"];
                back.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);
                //换桌
                var change = this._companet["btn_desk"];
                change.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);
                //准备
                var ready = this._companet["btn_ready"];
                ready.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);
            };
            GameViewLayer.prototype.onButtonClick = function (e) {
                var target = e.target;
                switch (target.name) {
                    case "btn_menu_back":
                        this._gameEngine.onQueryExitGame();
                        break;
                    case "btn_change_desk":
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
                        target.visible = false;
                        break;
                    case "btn_ready":
                        var userItem = this._gameEngine.getMeUserItem();
                        if (userItem.cbUserStatus >= df.US_READY)
                            return;
                        //发送准备
                        this._gameEngine._gameFrame.onUserReady();
                        target.visible = false;
                        break;
                    case "":
                        break;
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
                var userIndex = this.removeUserCache(user);
                if (userIndex == df.INVALID_ITEM)
                    return;
                var target = this._companet.getChildByName("user_info_" + userIndex);
                target.visible = false;
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
                // let userPanel = this._companet.getChildByName("userinfo" + userIndex) as eui.Panel;
                if (userIndex == INVALID_CHAIR)
                    return;
                var readyIcon = this._companet.getChildByName("runfast_ready_label_" + userIndex);
                readyIcon.visible = isshow;
                if (!isshow || userIndex != cmd.sparrowsclm.MY_VIEW)
                    return;
                //隐藏开始按钮
                var startBt = this._companet["button_start"].getChildByName("btn_ready");
                startBt.visible = false;
                //调整换桌按钮位置
                var changeDesk = this._companet["button_start"].getChildByName("btn_change_desk");
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
                console.log(userIndex);
                //用户信息
                var userPanel = this._companet.getChildByName("user_info_" + userIndex);
                userPanel.visible = true;
                //校验重复
                if (null != userPanel.getChildByName("userHead"))
                    userPanel.removeChild(userPanel.getChildByName("userHead"));
                if (userIndex != cmd.sparrowsclm.MY_VIEW) {
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
                    bitMapScore.removeChild(bitMapScore.getChildByName("scoreLabel"));
                }
                else {
                    var labelAtlas = utils.LabelAtlas.createLabel(user.lScore + "", "runfast_game_num_cellscore_png", "0123456789", 20, 26);
                    labelAtlas.name = "scoreLabel";
                    utils.setAnchorMidTop(labelAtlas);
                    bitMapScore.addChild(labelAtlas);
                }
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
                var bt = this._companet["button_start"].getChildByName("btn_ready");
                bt.visible = true;
                //换桌
                var change = this._companet["button_start"].getChildByName("btn_change_desk");
                change.x = -183;
                change.visible = true;
                //隐藏
                for (var i = 0; i < cmd.runfast.GAME_PLAYER; i++) {
                    //将所有准备去掉
                    var userPanel = this._companet.getChildByName("user_info_" + i);
                    var readyIcon = this._companet.getChildByName("runfast_ready_label_" + i);
                    readyIcon.visible = false;
                    // const readyIcon = userPanel.getChildByName("ready");
                    // readyIcon.visible = false;
                    //去掉多余的用户信息
                    if (i != cmd.sparrowsclm.MY_VIEW) {
                        // this.onInitUser(i);
                        userPanel.visible = false;
                    }
                    else {
                    }
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
                //数据解析
                var dataBuffer = data;
                var sceneFree = new cmd.runfast.CMD_S_StatusFree(dataBuffer.cbBuffer);
                console.log(sceneFree);
                this._lCellScore = sceneFree.lCellScore;
                this._customConfig = sceneFree.CustomConfig;
                //还有两个历史积分，不知道有何作用
                //更新底分
                this.initDesk();
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
                var startBt = this._companet["button_start"].getChildByName("btn_ready");
                startBt.visible = false;
                //隐藏换桌按钮
                var changeDesk = this._companet["button_start"].getChildByName("btn_change_desk");
                changeDesk.visible = false;
                //隐藏等待提示
                // this.showWaitTips(0, false);
                //隐藏准备标识
                for (var i = 0; i < cmd.runfast.GAME_PLAYER; i++) {
                    var readyIcon = this._companet.getChildByName("runfast_ready_label_" + i);
                    readyIcon.visible = false;
                }
                // this._customConfig = start.CustomConfig
                //给各个玩家分发手牌
                this._holdContainer[0].setHold(start.cbCardData);
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
