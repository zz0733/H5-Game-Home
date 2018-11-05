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
 * 游戏交互
 */
var game;
(function (game) {
    var sparrowsclm;
    (function (sparrowsclm) {
        //用户头像位置
        var HeadPoint = [{ x: 667, y: 618 }, { x: 1074, y: 172 }, { x: 144, y: 172 }];
        var GameViewLayer = /** @class */ (function (_super) {
            __extends(GameViewLayer, _super);
            /**
             * 构造
             */
            function GameViewLayer(engine) {
                var _this = _super.call(this) || this;
                _this._wBankerUser = df.INVALID_CHAIR;
                _this._bTrustee = true;
                _this._lCellScore = 0;
                _this._bAllowJoin = true;
                _this._bIsRuleSetting = false;
                _this._lTurnScore = [0, 0, 0, 0];
                _this._lCollectScore = [0, 0, 0, 0];
                _this._userList = [];
                /**帧率刷新 */
                _this._lCurTime = egret.getTimer();
                _this._nDotIndex = 0;
                //递归发牌
                _this._nActionIndex = 0;
                /**等待提示 */
                _this._bWatiTips = false;
                /**按钮事件 */
                _this._changeRecord = egret.getTimer();
                _this._bMoved = false;
                _this._gameEngine = engine;
                return _this;
            }
            GameViewLayer.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.name = "GameViewLayer";
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
                //设置皮肤
                componet.skinName = skins.sparrowsclm.GameLayer;
                //控件初始化
                this._handCardControl = new sparrowsclm.HandCard(this); //手牌控制器
                this._weaveCardControl = new sparrowsclm.WeaveCard(this); //
                this._tableCardControl = new sparrowsclm.TableCard(this);
                this._outCardControl = new sparrowsclm.OutCard(this);
                //操作界面
                this._operateView = new sparrowsclm.OperateView(this, this._gameEngine.onUserAction);
                this.addChildAt(this._operateView, 30);
                this._operateView.visible = false;
                //选择界面
                this._opSelectView = new sparrowsclm.OpSelectView(this._gameEngine);
                this.addChildAt(this._opSelectView, 30);
                this._opSelectView.visible = false;
                //番数提示
                this._FanTipsView = new sparrowsclm.FanTipsView(this._gameEngine);
                this.addChildAt(this._FanTipsView, 30);
                this._FanTipsView.visible = false;
                //显示自己信息
                this.showMyselfInfo();
                //初始化桌面
                this.initDesk();
                //初始化用户
                for (var i = 0; i < cmd.sparrowsclm.PLAYER_COUNT; i++) {
                    this.onInitUser(i);
                }
                //按钮事件
                this.initButton();
            };
            /**清理桌面 */
            GameViewLayer.prototype.onRestGameView = function () {
                this._wBankerUser = df.INVALID_CHAIR;
                this._bTrustee = true;
                this._lCellScore = 0;
                this._bAllowJoin = true;
                this._bIsRuleSetting = false;
                this._bWatiTips = false;
                this._lTurnScore = [0, 0, 0, 0];
                this._lCollectScore = [0, 0, 0, 0];
                //准备
                var bt = this._companet.getChildByName("start");
                bt.visible = true;
                bt.x = 840;
                //换桌
                bt = this._companet.getChildByName("changeDesk");
                bt.visible = true;
                bt.x = 494;
                //停止动作
                this.stopAllAction();
                //隐藏
                for (var i = 0; i < cmd.sparrowsclm.PLAYER_COUNT; i++) {
                    //准备小手
                    var userPanel = this._companet.getChildByName("userinfo" + i);
                    var readyIcon = userPanel.getChildByName("ready");
                    readyIcon.visible = false;
                    //用户信息
                    if (i != cmd.sparrowsclm.MY_VIEW) {
                        this.onInitUser(i);
                    }
                }
                //清空用户缓存
                for (var i = 0; i < this._userList.length; i++) {
                    var user = this._userList[i];
                    this._userList.shift();
                    user = null;
                }
                this._userList = [];
                //初始化桌面
                this.initDesk();
                //手牌重置
                if (null != this._handCardControl) {
                    this._handCardControl.onRestCardsData();
                }
                //组合牌重置
                if (null != this._weaveCardControl) {
                    this._weaveCardControl.onRest();
                }
                //桌面扑克
                if (null != this._tableCardControl) {
                    this._tableCardControl.onRest();
                }
                //出牌显示
                if (null != this._outCardControl) {
                    this._outCardControl.setOutCard(df.INVALID_ITEM);
                }
            };
            GameViewLayer.prototype.update = function () {
                if (this._bWatiTips) {
                    var delay = egret.getTimer();
                    if (delay - this._lCurTime >= 500) {
                        for (var k = 0; k < 3; k++) {
                            var dot = this.getChildByName("dot" + k);
                            dot.visible = (this._nDotIndex == k) ? true : false;
                        }
                        this._nDotIndex = (this._nDotIndex + 1) % 3;
                        this._lCurTime = egret.getTimer();
                    }
                }
            };
            /**停止动画 */
            GameViewLayer.prototype.stopAllAction = function () {
                this.showWaitTips(0, false);
            };
            /**掷骰子 */
            GameViewLayer.prototype.drawSice = function (lsice0, lsice1, callback) {
                var sice = new sparrowsclm.SiceView(lsice0, lsice1, callback);
                this.addChild(sice);
            };
            /**更换背景 */
            GameViewLayer.prototype.changeBackGround = function (index) {
            };
            GameViewLayer.prototype.setRemaindNum = function (nCout) {
                if (null == this._remaindTip) {
                    this._remaindTip = utils.LabelAtlas.createLabel("" + nCout, "game_num_0_png", ",0123456789", 28, 35);
                    this.addChild(this._remaindTip);
                    utils.setAnchorLeftTop(this._remaindTip);
                    this._remaindTip.x = 56;
                    this._remaindTip.y = 21;
                }
                else {
                    this._remaindTip.setText("" + nCout);
                }
            };
            /**创建扑克 */
            GameViewLayer.prototype.createHandCards = function (viewId, cbCardsData) {
                this._handCardControl.createHandCard(viewId, cbCardsData, (cbCardsData.length == 1) ? true : false);
            };
            /**用户出牌 */
            GameViewLayer.prototype.userOutCard = function (viewid, cbCardData, special) {
                if (cbCardData === void 0) { cbCardData = 0; }
                if (special === void 0) { special = false; }
                //出牌显示
                if (viewid != cmd.sparrowsclm.MY_VIEW) {
                    this._outCardControl.setOutCard(viewid, cbCardData);
                }
                if (viewid == df.INVALID_CHAIR)
                    return;
                //桌面显示
                this._tableCardControl.createTableCard(viewid, [cbCardData], true);
            };
            /**用户托管 */
            GameViewLayer.prototype.userTrustee = function (viewId, bTrustee) {
            };
            /**操作提示 */
            GameViewLayer.prototype.setOperateNotify = function (cbActionMask) {
                if (null == this._operateView)
                    return;
                if (null == cbActionMask || cmd.sparrowsclm.WIK_NULL == cbActionMask) {
                    this._operateView.visible = false;
                    return;
                }
                this._operateView.visible = true;
                this._operateView.setOperateNotify(cbActionMask);
            };
            /**操作动作 */
            GameViewLayer.prototype.onEventUserAction = function (selectInfo) {
                if (null == selectInfo) {
                    this._opSelectView.onEventUserAction();
                }
                else {
                    this._opSelectView.onEventUserAction(selectInfo);
                }
            };
            /**开始发牌 */
            GameViewLayer.prototype.dispatchCard = function (dispatchInfo, callback) {
                var _this = this;
                //组合动画
                var actions = [];
                var _loop_1 = function (i) {
                    var dispatch = dispatchInfo[i];
                    var callfunc = function () {
                        _this.createHandCards(dispatch.viewId, dispatch.cardData); //
                        _this._gameEngine._cbRemindCardCount--; //剩余的牌数
                        _this.setRemaindNum(_this._gameEngine._cbRemindCardCount);
                    };
                    actions.push(callfunc);
                };
                for (var i = 0; i < dispatchInfo.length; i++) {
                    _loop_1(i);
                }
                //结束回调
                if (null != callback) {
                    actions.push(callback);
                }
                //开始动画
                this._nActionIndex = 0;
                this.startDispatch(actions);
            };
            GameViewLayer.prototype.startDispatch = function (actions) {
                var _this = this;
                if (null == actions)
                    return;
                //递归调用
                egret.Tween.get(this)
                    .wait(50)
                    .call(function () {
                    var callback = actions[_this._nActionIndex];
                    if (null != callback) {
                        _this._nActionIndex++;
                        if (_this._nActionIndex == actions.length) {
                            actions = null;
                        }
                        callback();
                        if (null == actions)
                            return;
                        if (_this._nActionIndex < actions.length) {
                            _this.startDispatch(actions);
                        }
                    }
                });
            };
            GameViewLayer.prototype.startOperateAni = function (viewId, operateCode) {
            };
            GameViewLayer.prototype.setChiHuFlag = function (viewId, isShow) {
                if (isShow === void 0) { isShow = false; }
            };
            //提示胡牌信息 小灯泡按钮
            GameViewLayer.prototype.setChiHuTips = function (isVisible) {
                if (isVisible === void 0) { isVisible = false; }
            };
            /**
             * 显示番信息
             */
            GameViewLayer.prototype.showFanTips = function (index, fanInfo) {
                if (index === void 0) { index = df.INVALID_BYTE; }
                if (index == df.INVALID_BYTE) {
                    this._FanTipsView.visible = false;
                }
                else {
                    this._FanTipsView.showFanTips(fanInfo, 400, 490);
                    this._FanTipsView.visible = true;
                }
            };
            /**
             * 显示最近一次出牌标识
             * 默认显示
             */
            GameViewLayer.prototype.showNearOutIcon = function (outViewId, isShow) {
                if (isShow === void 0) { isShow = true; }
                this._tableCardControl.showNearOutIcon(outViewId, isShow);
            };
            /**桌面基本信息 */
            GameViewLayer.prototype.initDesk = function () {
                //桌号
                var num = this._gameEngine._gameFrame.getTableID();
                if (num == df.INVALID_TABLE)
                    return;
                if (null != this.getChildByName("deskNum")) {
                    var deskNum = this.getChildByName("deskNum");
                    deskNum.setText("" + (num + 1));
                }
                else {
                    var deskNum = utils.LabelAtlas.createLabel("" + (num + 1), "yz_num_count_png", ":/0123456789", 28, 35);
                    deskNum.name = "deskNum";
                    utils.setAnchorLeftMid(deskNum);
                    deskNum.x = 565;
                    deskNum.y = 115;
                    this.addChild(deskNum);
                }
                //底分
                var formatStr = utils.StringUtils.formatNumberThousands(this._lCellScore);
                if (null != this.getChildByName("deskCell")) {
                    var deskCell = this.getChildByName("deskCell");
                    deskCell.setText(formatStr);
                }
                else {
                    var deskCell = utils.LabelAtlas.createLabel(formatStr, "yz_num_cell_png", ",0123456789", 28, 35);
                    deskCell.name = "deskCell";
                    utils.setAnchorLeftMid(deskCell);
                    deskCell.x = 815;
                    deskCell.y = 115;
                    this.addChild(deskCell);
                }
            };
            /**显示自己信息 */
            GameViewLayer.prototype.showMyselfInfo = function () {
                var myself = this._gameEngine.getMeUserItem();
                if (null == myself)
                    return;
                if (myself.cbUserStatus == df.US_READY) {
                    this.showUserReady(myself);
                }
                //头像
                var headPanel = this._companet.getChildByName("userinfo0");
                var head = models.HeadSprite.createHead(myself, 120, 120, 35, 35);
                utils.setAnchorCenter(head);
                headPanel.addChild(head);
                head.x = HeadPoint[cmd.sparrowsclm.MY_VIEW].x;
                head.y = HeadPoint[cmd.sparrowsclm.MY_VIEW].y;
                //id
                var userid = headPanel.getChildByName("userID");
                userid.text = "ID:" + myself.dwUserID;
                //昵称
                var nick = headPanel.getChildByName("userNick");
                nick.text = utils.StringUtils.clipByConfig(myself.szNickName, 150, utils.StringUtils.getSystemConfig(24));
                //分数
                var score = headPanel.getChildByName("userScore");
                score.text = utils.StringUtils.clipByConfig(utils.StringUtils.formatNumberThousands(myself.lScore), 150, utils.StringUtils.getSystemConfig(24));
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
            GameViewLayer.prototype.showWaitTips = function (nShowIndex, isShow) {
                var tips = this._companet.getChildByName("waitImg");
                if (null == tips)
                    return;
                tips.visible = isShow;
                if (isShow == false) {
                    this._bWatiTips = false;
                    for (var i = 0; i < 3; i++) {
                        if (null != this.getChildByName("dot" + i)) {
                            this.removeChild(this.getChildByName("dot" + i));
                        }
                    }
                    return;
                }
                if (nShowIndex == 0) {
                    tips.source = "game_ready_text_wait_png";
                }
                else {
                }
                var beginPosX = 884;
                for (var i = 0; i < 3; i++) {
                    if (null != this.getChildByName("dot" + i))
                        continue;
                    var dot = new eui.Image("dot_" + (i + 1) + "_png");
                    dot.name = "dot" + i;
                    utils.setAnchorLeftMid(dot);
                    this.addChild(dot);
                    dot.visible = i == 0 ? true : false;
                    dot.x = beginPosX;
                    dot.y = 490;
                }
                //等待动画
                this._nDotIndex = 0;
                this._bWatiTips = true;
                this._lCurTime = egret.getTimer();
            };
            /**显示准备 */
            GameViewLayer.prototype.showUserReady = function (user, isshow) {
                if (isshow === void 0) { isshow = true; }
                var userindex = this._gameEngine.switchViewChairID(user.wChairID);
                var userPanel = this._companet.getChildByName("userinfo" + userindex);
                var readyIcon = userPanel.getChildByName("ready");
                readyIcon.visible = isshow;
                if (!isshow || userindex != cmd.sparrowsclm.MY_VIEW)
                    return;
                //隐藏开始按钮
                var startBt = this._companet.getChildByName("start");
                startBt.visible = false;
                //调整换桌按钮位置
                var changeDesk = this._companet.getChildByName("changeDesk");
                changeDesk.x = this.width / 2;
                //显示等待提示
                this.showWaitTips(0, true);
            };
            /**用户断线 */
            GameViewLayer.prototype.showUserOffLine = function (user) {
            };
            /**显示用户 */
            GameViewLayer.prototype.showUser = function (user, isShow) {
                //加入缓存
                if (null != user) {
                    this.cacheUser(user);
                }
                //视图索引
                var userIndex = this._gameEngine.switchViewChairID(user.wChairID);
                //用户信息
                var userPanel = this._companet.getChildByName("userinfo" + userIndex);
                //校验重复
                if (null != userPanel.getChildByName("userHead"))
                    userPanel.removeChild(userPanel.getChildByName("userHead"));
                if (userIndex != cmd.sparrowsclm.MY_VIEW) {
                    var orignalBg = userPanel.getChildByName("head");
                    orignalBg.visible = false;
                    var normalBg = userPanel.getChildByName("head_normal");
                    normalBg.visible = true;
                }
                //头像
                var head = models.HeadSprite.createHead(user, 120, 120, 35, 35);
                utils.setAnchorLeftTop(head);
                head.name = "userHead";
                userPanel.addChild(head);
                head.x = HeadPoint[userIndex].x;
                head.y = HeadPoint[userIndex].y;
                //id
                var userid = userPanel.getChildByName("userID");
                userid.visible = true;
                userid.text = "ID:" + user.dwUserID;
                //昵称
                var nick = userPanel.getChildByName("userNick");
                nick.visible = true;
                nick.text = utils.StringUtils.clipByConfig(user.szNickName, 150, utils.StringUtils.getSystemConfig(24));
                // 分数
                var score = userPanel.getChildByName("userScore");
                score.visible = true;
                score.text = utils.StringUtils.clipByConfig(utils.StringUtils.formatNumberThousands(user.lScore), 150, utils.StringUtils.getSystemConfig(24));
            };
            /**删除用户 */
            GameViewLayer.prototype.removeUser = function (user) {
                //查找记录
                var userIndex = this.removeUserCache(user);
                if (userIndex == df.INVALID_ITEM)
                    return;
                this.onInitUser(userIndex, false);
            };
            /**初始用户 */
            GameViewLayer.prototype.onInitUser = function (userIndex, isShow) {
                if (isShow === void 0) { isShow = false; }
                var userPanel = this._companet.getChildByName("userinfo" + userIndex);
                userPanel.x = 0;
                var head = userPanel.getChildByName("userHead");
                if (null != head && !isShow) {
                    userPanel.removeChild(head);
                }
                //隐藏准备
                var readyIcon = userPanel.getChildByName("ready");
                readyIcon.visible = false;
                //头像框
                if (userIndex != cmd.sparrowsclm.MY_VIEW) {
                    var orignalBg = userPanel.getChildByName("head");
                    orignalBg.visible = true;
                    var normalBg = userPanel.getChildByName("head_normal");
                    normalBg.visible = false;
                    //id
                    var userid = userPanel.getChildByName("userID");
                    userid.visible = isShow;
                    //昵称
                    var nick = userPanel.getChildByName("userNick");
                    nick.visible = isShow;
                    //分数
                    var score = userPanel.getChildByName("userScore");
                    score.visible = isShow;
                }
            };
            /**游戏开始
             * 头像移动
             */
            GameViewLayer.prototype.gamePlayingHeadAnim = function (isAction) {
                if (isAction === void 0) { isAction = true; }
                var offX = [-585, 115, -115];
                for (var i = 0; i < cmd.sparrowsclm.PLAYER_COUNT; i++) {
                    var userPanel = this._companet.getChildByName("userinfo" + i);
                    var tw = egret.Tween.get(userPanel)
                        .to({ x: offX[i] }, isAction ? 200 : 0);
                }
            };
            /**
             * 用户变更
             * 状态变更
             * 分数变更
             */
            GameViewLayer.prototype.onUpdataUser = function (user, newStatus, oldStatus) {
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
                        this.showUserOffLine(user);
                    }
                }
                //用户起立或离开
                if (user.cbUserStatus <= df.US_FREE) {
                    this.removeUser(user);
                }
            };
            /**
             * 初始按钮
             */
            GameViewLayer.prototype.initButton = function () {
                //返回
                var bt = this._companet.getChildByName("back");
                bt.addEventListener(egret.TouchEvent.TOUCH_END, this.onButtonClick, this);
                //准备
                bt = this._companet.getChildByName("start");
                bt.addEventListener(egret.TouchEvent.TOUCH_END, this.onButtonClick, this);
                //换桌
                bt = this._companet.getChildByName("changeDesk");
                bt.addEventListener(egret.TouchEvent.TOUCH_END, this.onButtonClick, this);
            };
            GameViewLayer.prototype.onButtonClick = function (e) {
                var target = e.target;
                switch (target.name) {
                    case "back":
                        {
                            this._gameEngine.onQueryExitGame();
                        }
                        break;
                    case "start":
                        {
                            //判断用户状态
                            var userItem = this._gameEngine.getMeUserItem();
                            if (userItem.cbUserStatus >= df.US_READY)
                                return;
                            //发送准备
                            this._gameEngine._gameFrame.onUserReady();
                            target.visible = false;
                        }
                        break;
                    case "changeDesk":
                        {
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
                        }
                        break;
                }
            };
            /**刷新倒计时 */
            GameViewLayer.prototype.updateClockView = function () {
                if (null != this._clockView) {
                    this._clockView.onUpdateClockEvent();
                }
            };
            /**显示场景 */
            GameViewLayer.prototype.showSceneFree = function (data) {
                if (null == this._clockView) {
                    this._clockView = new sparrowsclm.ClockView(this);
                }
                this.setGameClock(cmd.sparrowsclm.TIME_GAME_START, cmd.sparrowsclm.IDI_GAME_START);
                //数据解析
                var dataBuffer = data;
                var sceneFree = new cmd.sparrowsclm.CMD_S_StatusFree(dataBuffer.cbBuffer);
                this._wBankerUser = sceneFree.wBankerUser;
                this._bTrustee = false;
                this._lCellScore = sceneFree.lCellScore;
                this._bAllowJoin = sceneFree.bAllowJoin;
                this._bIsRuleSetting = sceneFree.bIsRuleSetting;
                this._lTurnScore = sceneFree.lTurnScore;
                this._lCollectScore = sceneFree.lCollectScore;
                //更新底分
                this.initDesk();
            };
            //设置倒计时
            GameViewLayer.prototype.setGameClock = function (nTime, clockId, viewId) {
                if (clockId === void 0) { clockId = 0; }
                if (viewId === void 0) { viewId = 0; }
                if (null == this._clockView) {
                    this._clockView = new sparrowsclm.ClockView(this);
                }
                this._clockView.setClockTime(nTime, clockId, viewId);
            };
            /**游戏开始 */
            GameViewLayer.prototype.showGameStart = function (start) {
                //隐藏开始按钮
                var startBt = this._companet.getChildByName("start");
                startBt.visible = false;
                //隐藏换桌按钮
                var changeDesk = this._companet.getChildByName("changeDesk");
                changeDesk.visible = false;
                //隐藏等待提示
                this.showWaitTips(0, false);
                //隐藏准备标识
                for (var i = 0; i < cmd.sparrowsclm.PLAYER_COUNT; i++) {
                    var userPanel = this._companet.getChildByName("userinfo" + i);
                    var readyIcon = userPanel.getChildByName("ready");
                    readyIcon.visible = false;
                }
                //头像移动
                this.gamePlayingHeadAnim();
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
                if (null != this._handCardControl) {
                    this._handCardControl.dealloc();
                    this._handCardControl = null;
                }
                if (null != this._weaveCardControl) {
                    this._weaveCardControl.dealloc();
                    this._weaveCardControl = null;
                }
                if (null != this._tableCardControl) {
                    this._tableCardControl.dealloc();
                    this._tableCardControl = null;
                }
                if (null != this._outCardControl) {
                    this._outCardControl.dealloc();
                    this._outCardControl = null;
                }
                this._operateView = null;
                this._opSelectView = null;
                this._FanTipsView = null;
            };
            return GameViewLayer;
        }(eui.UILayer));
        sparrowsclm.GameViewLayer = GameViewLayer;
    })(sparrowsclm = game.sparrowsclm || (game.sparrowsclm = {}));
})(game || (game = {}));
