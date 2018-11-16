/**
 * 游戏框架
 */
var frame;
(function (frame) {
    var NORMAL = 0;
    var RETRY = 1;
    var BATTLE = 2;
    var DISTRIBUTE = 4;
    var MATCH = 5;
    var VIDEO = 6;
    var ACTION_TYPE_GAME = 1;
    var ACTION_TYPE_FRAME = 2;
    var GameFrame = (function () {
        function GameFrame(delegate) {
            this._dismissState = {}; //约战状态
            this._wKindID = df.INVALID_WORD; //游戏ID
            this._dwKindVersion = utils.PROCESS_VERSION(1, 1, 0, 0); //游戏版本
            this._wTableCount = 0; //桌子数目
            this._wChairCount = 0; //椅子数目
            this._wServerType = 0; //游戏类型
            this._dwServerRule = 0; //游戏规则    
            this._cbSegmentGame = 0; //游戏段位
            this._dwGameBuglePrice = 0; //喇叭价格
            this._dwRoomBuglePrice = 0; //喇叭价格
            this._UserList = {}; //用户列表
            this._TableUserList = {}; //玩家MAP
            this._TableStatus = {}; //桌子状态
            this._BattleUserInfo = {}; //约战玩家信息
            this._wTableID = df.INVALID_TABLE; //桌子ID
            this._wChairID = df.INVALID_CHAIR; //椅子ID
            this._wVideoChair = df.INVALID_CHAIR;
            this._cbTableLock = 0;
            this._cbGameStatus = 0; //游戏状态
            this._cbAllowLookon = 0; //允许旁观
            this._PlayCountEx = 0; //游戏人数
            this._LogonType = NORMAL; //连接类型
            this._delegate = delegate;
            this._dispatcher = new egret.EventDispatcher();
            this.addEventListener();
        }
        /**设置业务代理*/
        GameFrame.prototype.setDelegate = function (delegate) {
            this._delegate = delegate;
        };
        GameFrame.prototype.setKindInfo = function (kindID, version, gameModule) {
            this._wKindID = kindID;
            this._dwKindVersion = version;
            this._gameModule = gameModule;
        };
        /**通知实例 */
        GameFrame.prototype.getDispatcher = function () {
            return this._dispatcher;
        };
        //观看模式
        GameFrame.prototype.isLookonMode = function () {
        };
        /**服务类型 */
        GameFrame.prototype.getServerType = function () {
            return this._wServerType;
        };
        /**金币模式 */
        GameFrame.prototype.isGoldMode = function () {
            return this._wServerType && ((this._wServerType & df.GAME_GENRE_GOLD) != 0);
        };
        /**积分模式 */
        GameFrame.prototype.isScoreMode = function () {
            return this._wServerType && ((this._wServerType & df.GAME_GENRE_SCORE) != 0);
        };
        /**比赛模式 */
        GameFrame.prototype.isMatchMode = function () {
            return this._wServerType && ((this._wServerType & df.GAME_GENRE_MATCH) != 0);
        };
        /**约战模式 */
        GameFrame.prototype.isBattleMode = function () {
            if (this.isVedioMode()) {
                return this._wServerType && ((this._wServerType & df.TABLE_GENRE_CREATE) != 0);
            }
            return this._LogonType == BATTLE;
        };
        /**视频模式 */
        GameFrame.prototype.isVedioMode = function () {
            return this._LogonType == VIDEO;
        };
        /*获取游戏状态*/
        GameFrame.prototype.getGameStatus = function () {
            return this._cbGameStatus;
        };
        //设置游戏状态
        GameFrame.prototype.setGameStatus = function (cbGameStatus) {
            this._cbGameStatus = cbGameStatus;
        };
        //椅子张数
        GameFrame.prototype.getChairCount = function () {
            return this._wChairCount;
        };
        //桌子张数
        GameFrame.prototype.getTableCount = function () {
            return this._wTableCount;
        };
        //获取桌子ID
        GameFrame.prototype.getTableID = function () {
            return this._wTableID;
        };
        //获取椅子ID
        GameFrame.prototype.getChairID = function () {
            if (this._LogonType == VIDEO)
                return this._wVideoChair - 1;
            return this._wChairID;
        };
        /**
         * 添加监听
         */
        GameFrame.prototype.addEventListener = function () {
            //注册通知
            this._dispatcher.addEventListener(customEvent.CustomEvent.EVENT_CONNECT_COMPLETE, this.connectComplete, this);
            this._dispatcher.addEventListener(customEvent.CustomEvent.EVENT_MESSAGE_DISPATCH, this.onMessage, this);
        };
        /**
         * 移除监听
         */
        GameFrame.prototype.removeEventListener = function () {
            this._dispatcher.removeEventListener(customEvent.CustomEvent.EVENT_CONNECT_COMPLETE, this.connectComplete, this);
            this._dispatcher.removeEventListener(customEvent.CustomEvent.EVENT_MESSAGE_DISPATCH, this.onMessage, this);
        };
        /**连接成功*/
        GameFrame.prototype.connectComplete = function () {
            if (this._delegate && this._delegate.connectComplete) {
                this._delegate.connectComplete();
            }
            //过滤比赛
            if (this._LogonType == MATCH)
                return;
            //登录房间   
            var logonRoom = new df.CMD_GR_LogonByMobile();
            logonRoom.wGameID = this._wKindID;
            logonRoom.dwPlazaVersion = df.PLAZA_VERSION;
            logonRoom.dwProcessVersion = this._dwKindVersion;
            logonRoom.cbDeviceType = df.DEVICE_TYPE;
            logonRoom.wBehaviorFlags = (this._LogonType == NORMAL) ? 0x1102 : 0x0102;
            logonRoom.wPageTableCount = 1;
            logonRoom.dwUserStationID = managers.FrameManager.getInstance().m_GlobalUserItem.dwStationID;
            logonRoom.dwPlazaStationID = df.STATION_ID;
            logonRoom.dwUserID = managers.FrameManager.getInstance().m_GlobalUserItem.dwUserID;
            logonRoom.szPasspublic = managers.FrameManager.getInstance().m_GlobalUserItem.szPassword;
            logonRoom.szServerPasswdf = "";
            logonRoom.szMachineID = managers.FrameManager.getInstance().m_GlobalUserItem.szMachine;
            logonRoom.dGlobalPosLng = 0;
            logonRoom.dGlobalPosLat = 0;
            logonRoom.dwMatchID = 0;
            logonRoom.lMatchNo = 0;
            this.sendLogonRoom(logonRoom);
        };
        /**当前激活tcp */
        GameFrame.prototype.getCurActiveTcp = function () {
            return managers.TcpServiceCtrl.getInstance().getTcpService();
        };
        /**发送游戏消息包 */
        GameFrame.prototype.sendData = function (wMainCmd, wSubCmd, buffer) {
            if (null == this.getCurActiveTcp())
                return;
            managers.TcpServiceCtrl.getInstance().getTcpService().SendSocketData(wMainCmd, wSubCmd, buffer, buffer.getLength());
        };
        /** 网络消息*/
        GameFrame.prototype.onMessage = function (e) {
            var msg = e.data;
            var wMainCmd = msg.wMainCmd;
            switch (wMainCmd) {
                case df.MDM_GR_LOGON:
                    {
                        this.onSocketLogonEvent(msg);
                    }
                    break;
                case df.MDM_GR_CONFIG:
                    {
                        this.onSocketConfigEvent(msg);
                    }
                    break;
                case df.MDM_GR_USER:
                    {
                        this.onSocketUserEvent(msg);
                    }
                    break;
                case df.MDM_GR_STATUS:
                    {
                    }
                    break;
                case df.MDM_GR_MATCH:
                    {
                    }
                    break;
                case df.MDM_GF_FRAME:
                    {
                        this.onSocketFrameEvent(msg);
                    }
                    break;
                case df.MDM_GF_GAME:
                    {
                        if (null != this._delegate && this._delegate.onGameMessage) {
                            this._delegate.onGameMessage(msg);
                        }
                        else {
                            console.log("游戏协议未实现");
                        }
                    }
                    break;
                case df.MDM_CM_SYSTEM:
                    {
                        this.onSocketCMSystemMessage(msg);
                    }
                    break;
            }
        };
        /**登录协议 */
        GameFrame.prototype.onSocketLogonEvent = function (msg) {
            var wSubCmd = msg.wSubCmd;
            switch (wSubCmd) {
                case df.SUB_GR_LOGON_FINISH:
                    {
                        this.onSubLogonFinish(msg);
                    }
                    break;
                case df.SUB_GR_LOGON_SUCCESS:
                    {
                        this.onSubLogonSuccess(msg);
                    }
                    break;
                case df.SUB_GR_LOGON_FAILURE:
                    {
                        var failure = new df.CMD_GR_LogonFailure(msg);
                        managers.TcpServiceCtrl.getInstance().getServerInfo().m_LockedServerID = failure.wLockServerID;
                        managers.FrameManager.getInstance().showToast(failure.szDescribeString);
                    }
                    break;
                case df.SUB_GR_UPDATE_NOTIFY:
                    {
                        var update = new df.CMD_GR_UpdateNotify(msg);
                        managers.FrameManager.getInstance().showToast("版本不匹配");
                    }
                    break;
            }
        };
        GameFrame.prototype.onSubLogonSuccess = function (msg) {
            var success = new df.CMD_GR_LogonSuccess(msg);
        };
        GameFrame.prototype.onSubLogonFinish = function (msg) {
            managers.TcpServiceCtrl.getInstance().getServerInfo().m_LockedServerID = df.INVALID_WORD;
            //断线重连判断
            if (this._wTableID != df.INVALID_TABLE) {
                this.onEnterTable();
            }
            else {
                this.onEnterRoom();
            }
        };
        /**房间配置 */
        GameFrame.prototype.onSocketConfigEvent = function (msg) {
            var wSubCmd = msg.wSubCmd;
            switch (wSubCmd) {
                case df.SUB_GR_CONFIG_SERVER:
                    {
                        var config = new df.CMD_GR_ConfigServer(msg);
                        this._wTableCount = config.wTableCount;
                        this._wChairCount = config.wChairCount;
                        this._wServerType = config.wServerType;
                        this._dwServerRule = config.dwServerRule;
                        this._cbSegmentGame = config.cbSegmentGame;
                        this._dwGameBuglePrice = config.dwGameBuglePrice;
                        this._dwRoomBuglePrice = config.dwRoomBuglePrice;
                    }
                    break;
                case df.SUB_GR_CONFIG_FINISH:
                    {
                    }
                    break;
            }
        };
        /**用户信息 */
        GameFrame.prototype.onSocketUserEvent = function (msg) {
            var wSubCmd = msg.wSubCmd;
            switch (wSubCmd) {
                case df.SUB_GR_USER_ENTER:
                    {
                        this.onSocketUserEnter(msg);
                    }
                    break;
                case df.SUB_GR_USER_STATUS:
                    {
                        this.onSocketUserStatus(msg);
                    }
                    break;
                case df.SUB_GR_REQUEST_FAILURE:
                    {
                        this.onSocketReQuestFailure(msg);
                    }
                    break;
            }
        };
        GameFrame.prototype.onSocketUserEnter = function (msg) {
            var userItem = new models.UserItem();
            userItem.dwGameID = msg.cbBuffer.Pop_DWORD();
            userItem.dwUserID = msg.cbBuffer.Pop_DWORD();
            //自己判断
            var bMySelf = (userItem.dwUserID == managers.FrameManager.getInstance().m_GlobalUserItem.dwUserID);
            var userid = managers.FrameManager.getInstance().m_GlobalUserItem.dwUserID;
            if (null == this._UserList[userid]) {
            }
            else {
                if (true == bMySelf) {
                    //过滤自己信息
                    return;
                }
            }
            //读取信息
            userItem.wFaceID = msg.cbBuffer.Pop_WORD(); //用户头像
            userItem.dwCustomID = msg.cbBuffer.Pop_DWORD(); //自定义头像
            userItem.cbGender = msg.cbBuffer.Pop_Byte(); //用户性别
            userItem.cbMemberOrder = msg.cbBuffer.Pop_Byte(); //会员等级
            userItem.wTableID = msg.cbBuffer.Pop_WORD(); //桌子位置
            userItem.wChairID = msg.cbBuffer.Pop_WORD(); //椅子位置
            userItem.cbUserStatus = msg.cbBuffer.Pop_Byte(); //用户状态
            if (userItem.cbUserStatus == df.US_LOOKON) {
                if (bMySelf) {
                    managers.FrameManager.getInstance().showToast("该房间不支持旁观模式");
                    return;
                }
            }
            userItem.lScore = msg.cbBuffer.Pop_SCORE();
            userItem.lGrade = msg.cbBuffer.Pop_SCORE();
            userItem.dwWinCount = msg.cbBuffer.Pop_DWORD();
            userItem.dwLostCount = msg.cbBuffer.Pop_DWORD();
            userItem.dwDrawCount = msg.cbBuffer.Pop_DWORD();
            userItem.dwFleeCount = msg.cbBuffer.Pop_DWORD();
            userItem.dwExperience = msg.cbBuffer.Pop_DWORD();
            //用户经纬度
            userItem.dwGlobalPosLng = msg.cbBuffer.Pop_SCORE();
            userItem.dwGlobalPosLat = msg.cbBuffer.Pop_SCORE();
            var size = 0;
            var data = 0;
            while (msg.cbBuffer.getByteArray().bytesAvailable > 0) {
                size = msg.cbBuffer.Pop_WORD();
                data = msg.cbBuffer.Pop_WORD();
                if (data == df.DTP_GR_USER_ACCOUNTS) {
                    userItem.szNickName = msg.cbBuffer.Pop_UTF16(size / 2);
                }
            }
            //缓存
            var item = this._UserList[userItem.dwUserID];
            if (null != item) {
                item.dwGameID = userItem.dwGameID;
                item.lScore = userItem.lGrade;
                item.lGrade = userItem.lGrade;
                item.wFaceID = userItem.wFaceID;
                item.dwCustomID = userItem.dwCustomID;
                item.cbGender = userItem.cbGender;
                item.cbMemberOrder = userItem.cbMemberOrder;
                item.wTableID = userItem.wTableID;
                item.wChairID = userItem.wChairID;
                item.cbUserStatus = userItem.cbUserStatus;
                item.dwWinCount = userItem.dwWinCount;
                item.dwLostCount = userItem.dwLostCount;
                item.dwDrawCount = userItem.dwDrawCount;
                item.dwFleeCount = userItem.dwFleeCount;
                item.dwExperience = userItem.dwExperience;
                item.szNickName = userItem.szNickName;
            }
            else {
                userItem.lScore = userItem.lGrade;
                this._UserList[userItem.dwUserID] = userItem;
            }
            //记录自己桌椅号
            if (userItem.dwUserID == managers.FrameManager.getInstance().m_GlobalUserItem.dwUserID) {
                this._wTableID = userItem.wTableID;
                this._wChairID = userItem.wChairID;
            }
            if (userItem.wTableID != df.INVALID_TABLE) {
                this.onUpDataTableUser(userItem.wTableID, userItem.wChairID, userItem);
            }
            //通知业务层用户进入
            if (this._UserList[managers.FrameManager.getInstance().m_GlobalUserItem.dwUserID] &&
                this._wTableID != df.INVALID_TABLE && userItem.wTableID == this._wTableID) {
                if (null != this._delegate) {
                    var data_1 = { table: userItem.wTableID, chair: userItem.wChairID, user: userItem };
                    console.log("GameFrame------【用户进入】------", userItem.szNickName);
                    this._delegate.dispatchEvent(new customEvent.CustomEvent(customEvent.CustomEvent.EVENT_USER_ENTER, false, false, data_1));
                }
            }
        };
        /**用户状态 */
        GameFrame.prototype.onSocketUserStatus = function (msg) {
            //读取信息
            var dwUserID = msg.cbBuffer.Pop_DWORD();
            var newstatus = {};
            newstatus.wTableID = msg.cbBuffer.Pop_WORD();
            newstatus.wChairID = msg.cbBuffer.Pop_WORD();
            newstatus.cbUserStatus = msg.cbBuffer.Pop_Byte();
            //自己判断
            var bMySelf = (dwUserID == managers.FrameManager.getInstance().m_GlobalUserItem.dwUserID);
            //获取自己
            var myUserItem = this.getMeUserItem();
            //更新记录
            if (bMySelf) {
                //未找到自己
                if (null == myUserItem)
                    return;
                this._wTableID = newstatus.wTableID;
                this._wChairID = newstatus.wChairID;
            }
            //本地记录
            var localUser = this._UserList[dwUserID];
            //找不到用户
            if (null == localUser) {
                if (newstatus.cbUserStatus == df.US_LOOKON) {
                    return;
                }
                //当前桌子用户
                if (this._wTableID != df.INVALID_TABLE && newstatus.wTableID == this._wTableID) {
                    //构造玩家
                    localUser = new models.UserItem();
                    localUser.szNickName = "游戏玩家";
                    localUser.dwUserID = dwUserID;
                    localUser.cbUserStatus = newstatus.cbUserStatus;
                    localUser.wTableID = newstatus.wTableID;
                    localUser.wChairID = newstatus.wChairID;
                    this._UserList[dwUserID] = localUser;
                    //发送查询
                    this.queryUserInfo(newstatus.wTableID, newstatus.wChairID);
                }
                return;
            }
            else {
                if (localUser.cbUserStatus != df.US_LOOKON && newstatus.cbUserStatus == df.US_LOOKON) {
                    newstatus.cbUserStatus = df.US_FREE;
                    newstatus.wTableID = df.INVALID_TABLE;
                    newstatus.wChairID = df.INVALID_CHAIR;
                }
            }
            //记录旧状态
            var oldstatus = {};
            oldstatus.wTableID = localUser.wTableID;
            oldstatus.wChairID = localUser.wChairID;
            oldstatus.cbUserStatus = localUser.cbUserStatus;
            //更新信息
            localUser.cbUserStatus = newstatus.cbUserStatus;
            localUser.wTableID = newstatus.wTableID;
            localUser.wChairID = newstatus.wChairID;
            //比赛过滤起立
            if (newstatus.cbUserStatus == df.US_FREE && oldstatus.cbUserStatus > df.US_FREE && this.isMatchMode()) {
                if (bMySelf) {
                    this._wTableID = oldstatus.wTableID;
                    this._wChairID = oldstatus.wChairID;
                }
                return;
            }
            //清除旧桌子椅子记录
            if (oldstatus.wTableID != df.INVALID_TABLE) {
                //新旧桌子不同 新旧椅子不同
                if ((oldstatus.wTableID != newstatus.wTableID) || (oldstatus.wChairID != newstatus.wChairID)) {
                    this.onUpDataTableUser(oldstatus.wTableID, oldstatus.wChairID, null);
                }
            }
            //新桌子记录	
            if (newstatus.wTableID != df.INVALID_TABLE) {
                this.onUpDataTableUser(newstatus.wTableID, newstatus.wChairID, localUser);
            }
            //自己状态
            if (bMySelf == true) {
                //离开
                if (newstatus.cbUserStatus == df.US_NULL) {
                    console.log("用户状态: 离开");
                    this.onExitRoom();
                }
                else if (newstatus.cbUserStatus == df.US_FREE && oldstatus.cbUserStatus > df.US_FREE) {
                    console.log("用户状态: 起立");
                    this.onExitTable();
                }
                else if (newstatus.cbUserStatus > df.US_FREE && oldstatus.cbUserStatus < df.US_SIT) {
                    console.log("用户状态: 坐下");
                    this.onEnterTable();
                }
                else {
                    console.log("用户状态");
                    //通知用户状态
                    if (null != this._delegate) {
                        var data = { user: localUser, newstatus: newstatus, oldstatus: oldstatus };
                        console.log("GameFrame------【用户状态】------", localUser.szNickName);
                        this._delegate.dispatchEvent(new customEvent.CustomEvent(customEvent.CustomEvent.EVENT_USER_STATUS, false, false, data));
                    }
                }
            }
            else {
                //通知用户状态
                if (null != this._delegate) {
                    var data = { user: localUser, newstatus: newstatus, oldstatus: oldstatus };
                    console.log("GameFrame------【用户状态】------", localUser.szNickName);
                    this._delegate.dispatchEvent(new customEvent.CustomEvent(customEvent.CustomEvent.EVENT_USER_STATUS, false, false, data));
                }
                //删除用户
                if (localUser.cbUserStatus == df.US_NULL || localUser.cbUserStatus == df.US_LOOKON) {
                    this.onRemoveUser(dwUserID);
                }
            }
        };
        /**框架消息 */
        GameFrame.prototype.onSocketFrameEvent = function (msg) {
            var wSubCmd = msg.wSubCmd;
            switch (wSubCmd) {
                case df.SUB_GF_GAME_STATUS:
                    {
                        this._cbGameStatus = msg.cbBuffer.Pop_Byte();
                        this._cbAllowLookon = msg.cbBuffer.Pop_Byte();
                    }
                    break;
                case df.SUB_GF_GAME_SCENE:
                    {
                        if (null != this._delegate && this._delegate.onGameScene) {
                            if (managers.TcpServiceCtrl.getInstance().m_bReConnect) {
                                //清空
                                this._delegate.onResetEngine();
                            }
                            this._delegate.onGameScene(this._cbGameStatus, msg);
                        }
                        else {
                            console.log("游戏场景未实现");
                        }
                    }
                    break;
            }
        };
        /**系统消息 */
        GameFrame.prototype.onSocketCMSystemMessage = function (msg) {
            var describe = "";
            var wType = 0;
            if (msg.wSubCmd == df.SUB_CM_SYSTEM_MESSAGE) {
                wType = msg.cbBuffer.Pop_WORD();
                var wElpase = msg.cbBuffer.Pop_WORD();
                var wLength = msg.cbBuffer.Pop_WORD();
                describe = msg.cbBuffer.Pop_UTF16(msg.cbBuffer.getByteArray().bytesAvailable / 2);
            }
            else if (msg.wSubCmd == df.SUB_CM_ACTION_MESSAGE) {
                wType = msg.cbBuffer.Pop_WORD();
                var wLength = msg.cbBuffer.Pop_WORD();
                var nButtonType = msg.cbBuffer.Pop_INT();
                describe = msg.cbBuffer.Pop_UTF16(msg.cbBuffer.getByteArray().bytesAvailable / 2);
            }
            var bCloseRoom = wType & df.SMT_CLOSE_ROOM;
            var bCloseGame = wType & df.SMT_CLOSE_GAME;
            var bCloseLink = wType & df.SMT_CLOSE_LINK;
            var bClose = (bCloseRoom != 0 || bCloseGame != 0 || bCloseLink != 0);
            this.onSystemMessage(bClose, wType, describe);
        };
        GameFrame.prototype.onSystemMessage = function (bClose, wType, message) {
            var _this = this;
            if (message === void 0) { message = ""; }
            console.log("system msg bClose:", bClose);
            console.log("system msg wType:", wType);
            console.log("system msg message:", message);
            var callback = null;
            if (message.length > 0) {
                if (true == bClose) {
                    if (true == managers.FrameManager.getInstance().isGameController()) {
                        callback = function () {
                            _this.onExitRoom();
                        };
                    }
                }
                managers.FrameManager.getInstance().showDailog(bClose ? 0 /* OK_ONLY */ : 1 /* OK_CANCELL */, message, callback);
            }
            ;
        };
        /**请求失败 */
        GameFrame.prototype.onSocketReQuestFailure = function (msg) {
            var failure = new df.CMD_GR_RequestFailure(msg);
            console.log(failure.szDescribeString);
            var userItem = this.getMeUserItem();
            if (null == userItem || userItem.cbUserStatus < df.US_SIT) {
                this.onExitRoom(failure.szDescribeString);
            }
        };
        /**登录比赛 */
        GameFrame.prototype.onLogonMatch = function (MatchGroupItem) {
        };
        /**登录普通房间 */
        GameFrame.prototype.onLogonRoom = function () {
            console.log("普通房连接");
            //获取当前房间信息
            var roomItem = managers.TcpServiceCtrl.getInstance().getServerInfo().GetRoomInfo();
            if (null == roomItem) {
                console.log("未查到当前房间信息");
                return;
            }
            //设置游戏信息
            var version = 0;
            var gameModule;
            var gamelist = managers.TcpServiceCtrl.getInstance().getGameListInfo()._Info;
            for (var i = 0; i < gamelist.length; i++) {
                if (Number(gamelist[i].id) == managers.TcpServiceCtrl.getInstance().getServerInfo().m_CurKindID) {
                    version = Number(gamelist[i].version);
                    gameModule = gamelist[i].module;
                    break;
                }
            }
            if (version == 0 || null == gameModule || "" == gameModule)
                return;
            this.setKindInfo(managers.TcpServiceCtrl.getInstance().getServerInfo().m_CurKindID, version, gameModule);
            //判断类型
            if ((roomItem.wServerType & df.TABLE_GENRE_DISTRIBUTE) != 0) {
                this._LogonType = DISTRIBUTE;
            }
            else if ((roomItem.wServerType & df.TABLE_GENRE_CREATE) != 0) {
                this._LogonType = BATTLE;
            }
            else {
                this._LogonType = NORMAL;
            }
            //创建连接
            managers.TcpServiceCtrl.getInstance().createSocketService(roomItem.szServerDomain, roomItem.wServerPort, 4 /* SERVER */);
        };
        /**登录约战房 */
        GameFrame.prototype.onLogonBattleRoom = function (mode) {
        };
        /**进入游戏 */
        GameFrame.prototype.onEnterTable = function () {
            //暂时停止消息派发 等待场景过渡
            managers.TcpServiceCtrl.getInstance()._isAllowDispatch = false;
            //切入游戏场景
            managers.FrameManager.getInstance().replaceScene(new controller.GameController(this._gameModule), true);
            //请求场景
            this.sendGameOption();
            if (null != this._delegate && this._delegate.onEnterTable) {
                this._delegate.onEnterTable();
            }
        };
        /**进入房间 */
        GameFrame.prototype.onEnterRoom = function () {
            if (this._LogonType == BATTLE) {
                var battle_1 = managers.TcpServiceCtrl.getInstance().getServerInfo().m_CurBattle;
                this.sitDown(battle_1.wTableID, 0xff, battle_1.szPassword);
            }
            else if (this._LogonType == DISTRIBUTE) {
                this.queryDistributeMode();
            }
            else if (this._LogonType == MATCH) {
            }
        };
        /**刷新代理 */
        GameFrame.prototype.onFlushAgent = function () {
        };
        /**请求坐下 */
        GameFrame.prototype.sitDown = function (table, chair, password) {
            if (password === void 0) { password = ""; }
            //构造数据
            var sitdown = utils.Memory.newLitteEndianByteArray(df.Len_Tcp_Head);
            sitdown.Append_WORD(table);
            sitdown.Append_WORD(chair);
            sitdown.Append_UTF16(password, df.LEN_PASSWORD);
            this.sendData(df.MDM_GR_USER, df.SUB_GR_USER_SITDOWN, sitdown);
        };
        /**防作弊分组 */
        GameFrame.prototype.queryDistributeMode = function () {
            this.sitDown(df.INVALID_TABLE, df.INVALID_CHAIR);
        };
        /**用户查询 */
        GameFrame.prototype.queryUserInfoID = function (id, tableid) {
            //构造数据
            var query = utils.Memory.newLitteEndianByteArray(df.Len_Tcp_Head);
            query.Append_DWORD(id);
            query.Append_WORD(tableid);
            this.sendData(df.MDM_GR_USER, df.SUB_GR_USER_INFO_REQ, query);
        };
        /**查询用户 */
        GameFrame.prototype.queryUserInfo = function (tableid, chair) {
            //构造数据
            var query = utils.Memory.newLitteEndianByteArray(df.Len_Tcp_Head);
            query.Append_WORD(tableid);
            query.Append_WORD(chair);
            this.sendData(df.MDM_GR_USER, df.SUB_GR_USER_CHAIR_INFO_REQ, query);
        };
        /**请求换桌 */
        GameFrame.prototype.onChangeDesk = function () {
            //构造数据
            var changeDesk = utils.Memory.newLitteEndianByteArray(df.Len_Tcp_Head);
            this.sendData(df.MDM_GR_USER, df.SUB_GR_USER_CHAIR_REQ, changeDesk);
        };
        /**请求起立 */
        GameFrame.prototype.onStandUp = function (bForce) {
            //构造数据
            var standup = utils.Memory.newLitteEndianByteArray(df.Len_Tcp_Head);
            standup.Append_WORD(this.getTableID());
            standup.Append_WORD(this.getChairID());
            standup.Append_Byte(bForce ? 1 : 0);
            this.sendData(df.MDM_GR_USER, df.SUB_GR_USER_STANDUP, standup);
        };
        /**用户准备*/
        GameFrame.prototype.onUserReady = function () {
            //构造数据
            var ready = utils.Memory.newLitteEndianByteArray(df.Len_Tcp_Head);
            this.sendData(df.MDM_GF_FRAME, df.SUB_GF_USER_READY, ready);
        };
        /**登录房间 */
        GameFrame.prototype.sendLogonRoom = function (data) {
            //构造数据
            var logonRoom = utils.Memory.newLitteEndianByteArray(df.Len_Tcp_Head);
            logonRoom.Append_WORD(data.wGameID);
            logonRoom.Append_DWORD(data.dwPlazaVersion);
            logonRoom.Append_DWORD(data.dwProcessVersion);
            logonRoom.Append_Byte(data.cbDeviceType);
            logonRoom.Append_WORD(data.wBehaviorFlags);
            logonRoom.Append_WORD(data.wPageTableCount);
            logonRoom.Append_DWORD(data.dwUserStationID);
            logonRoom.Append_DWORD(data.dwPlazaStationID);
            logonRoom.Append_DWORD(data.dwUserID);
            logonRoom.Append_UTF16(data.szPasspublic, df.LEN_PASSWORD);
            logonRoom.Append_UTF16(data.szServerPasswdf, df.LEN_PASSWORD);
            logonRoom.Append_UTF16(data.szMachineID, df.LEN_MACHINE_SERIAL);
            logonRoom.Append_DOUBLE(data.dGlobalPosLng);
            logonRoom.Append_DOUBLE(data.dGlobalPosLat);
            logonRoom.Append_DWORD(data.dwMatchID);
            logonRoom.Append_SCORE(data.lMatchNo);
            this.sendData(df.MDM_GR_LOGON, df.SUB_GR_LOGON_MOBILE, logonRoom);
        };
        /**请求场景 */
        GameFrame.prototype.sendGameOption = function () {
            var option = utils.Memory.newLitteEndianByteArray(df.Len_Tcp_Head);
            option.Append_Byte(0);
            option.Append_DWORD(df.PLAZA_VERSION);
            option.Append_DWORD(this._dwKindVersion);
            this.sendData(df.MDM_GF_FRAME, df.SUB_GF_GAME_OPTION, option);
        };
        /**发送解散 */
        GameFrame.prototype.sendTableDismiss = function (wTableID) {
        };
        /**发起投票解散 */
        GameFrame.prototype.sendVoteDissmiss = function () {
        };
        /**投票解散 */
        GameFrame.prototype.sendBallotDismiss = function (bAgreeDismiss) {
        };
        /**游戏聊天 */
        GameFrame.prototype.sendGameChat = function (targetUserID, szChatString) {
        };
        /**
        * 发送心跳
        */
        GameFrame.prototype.sendPing = function () {
            //构造数据
            var Ping = new utils.ByteArray();
            //设置偏移
            Ping.position(df.Len_Tcp_Head);
            this.sendData(df.MDM_KN_COMMAND, df.SUB_KN_DETECT_SOCKET, Ping);
        };
        /**退出房间 */
        GameFrame.prototype.onExitRoom = function (message) {
            //界面切换
            if (this.isMatchMode()) {
            }
            else if (this.isBattleMode()) {
            }
            else if (this.isVedioMode()) {
            }
            else {
                managers.FrameManager.getInstance().dismissPopWait();
                //断开网络
                managers.TcpServiceCtrl.getInstance().closeService();
                managers.FrameManager.getInstance().replaceScene(new controller.ClientController(), true);
            }
        };
        /**
         * 当前桌子起立
         * tips:切换桌子特殊处理, 比赛特殊处理
         * */
        GameFrame.prototype.onExitTable = function () {
            if (this._delegate && this._delegate.onExitTable) {
                if (this._delegate.onExitTable() == true) {
                    return;
                }
            }
            if (this._LogonType != DISTRIBUTE) {
                this.onExitRoom();
            }
        };
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        /**用户管理*/
        //更新桌椅用户
        GameFrame.prototype.onUpDataTableUser = function (tableid, chairid, useritem) {
            if (null == this._TableUserList[tableid]) {
                this._TableUserList[tableid] = [];
            }
            //去掉重复 
            if (this._TableUserList[tableid].length > 0) {
                for (var i = 0; i < this._TableUserList[tableid].length; i++) {
                    var tmpChair = this._TableUserList[tableid][i];
                    if (tmpChair == chairid) {
                        this._TableUserList[tableid].splice(i, 1);
                        break;
                    }
                }
            }
            if (null != useritem) {
                this._TableUserList[tableid].push({ chair: chairid, userid: useritem.dwUserID });
            }
        };
        //获取自己游戏信息
        GameFrame.prototype.getMeUserItem = function () {
            if (this.isVedioMode()) {
            }
            else {
                return this._UserList[managers.FrameManager.getInstance().m_GlobalUserItem.dwUserID];
            }
        };
        //获取用户
        GameFrame.prototype.getTableUserItem = function (tableid, chairid) {
            if (this.isVedioMode()) {
            }
            else {
                var id = (tableid == df.INVALID_TABLE) ? this._wTableID : tableid;
                var userid = 0;
                if (null != this._TableUserList[id]) {
                    for (var i = 0; i < this._TableUserList[id].length; i++) {
                        var userinfo = this._TableUserList[id];
                        if (null == userinfo)
                            return null;
                        egret.assert(null != userinfo.chair);
                        if (chairid == userinfo.chair) {
                            userid = userinfo.userid;
                        }
                    }
                }
                if (0 != userid) {
                    return this._UserList[userid];
                }
            }
            return null;
        };
        //移除用户
        GameFrame.prototype.onRemoveUser = function (dwUserID) {
            this._UserList[dwUserID] = null;
        };
        return GameFrame;
    }());
    frame.GameFrame = GameFrame;
})(frame || (frame = {}));
