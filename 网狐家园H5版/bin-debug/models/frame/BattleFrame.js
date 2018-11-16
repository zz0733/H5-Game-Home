/**
 * 约战框架
 */
var frame;
(function (frame) {
    //操作标识 请100-199范围
    var OP_MODE_CREATETABLE = 100; //创建房间
    var OP_MODE_FLUSHWEALTH = 101; //刷新财富
    var OP_MODE_QUERYTABLE = 102; //查找桌子
    var OP_MODE_DISMISSTABLE = 105; //解散桌子
    var OP_MODE_TABLEUSER = 106; //桌子用户
    var BattleFrame = (function () {
        function BattleFrame(delegate) {
            this._delegate = delegate;
            this._dispatcher = new egret.EventDispatcher();
            this.addEventListener();
        }
        BattleFrame.prototype.getDispatcher = function () {
            return this._dispatcher;
        };
        /**
         * 添加监听
         */
        BattleFrame.prototype.addEventListener = function () {
            //注册通知
            this._dispatcher.addEventListener(customEvent.CustomEvent.EVENT_CONNECT_COMPLETE, this.connectComplete, this);
            this._dispatcher.addEventListener(customEvent.CustomEvent.EVENT_MESSAGE_DISPATCH, this.onMessage, this);
        };
        /**
         * 移除监听
         */
        BattleFrame.prototype.removeEventListener = function () {
            this._dispatcher.removeEventListener(customEvent.CustomEvent.EVENT_CONNECT_COMPLETE, this.connectComplete, this);
            this._dispatcher.removeEventListener(customEvent.CustomEvent.EVENT_MESSAGE_DISPATCH, this.onMessage, this);
        };
        //查询财富
        BattleFrame.prototype.onFlushWealth = function () {
            //操作记录
            this._opreateCode = OP_MODE_FLUSHWEALTH;
            managers.TcpServiceCtrl.getInstance().onConnectPlaza();
        };
        BattleFrame.prototype.onQueryTable = function (querykind, queryid, gameid) {
            this._gameID = gameid;
            this._queryKind = querykind;
            this._queryid = queryid;
            //操作记录
            this._opreateCode = OP_MODE_QUERYTABLE;
            this.onConnectBattle();
        };
        BattleFrame.prototype.onNCreateTable = function (gameid, cbCurrencyKind, lCellScore, config, wPayType) {
            this._opreateCode = OP_MODE_CREATETABLE;
            this._cbCurrencyKind = cbCurrencyKind;
            this._lCellScore = lCellScore;
            this._gameID = gameid;
            this._battleConfig = config;
            this._wPayType = wPayType;
            this.onConnectBattle();
        };
        BattleFrame.prototype.onDismissTable = function (gameid, dwMappedNum) {
            //操作记录
            this._opreateCode = OP_MODE_DISMISSTABLE;
            this._gameID = gameid;
            this._dwMappedNum = dwMappedNum;
            this.onConnectBattle();
        };
        //获取桌子用户
        BattleFrame.prototype.onQueryTableUserList = function (gameid, dwMappedNum) {
            this._gameID = gameid;
            this._dwMappedNum = dwMappedNum;
            this._opreateCode = OP_MODE_TABLEUSER;
            this.onConnectBattle();
        };
        //连接成功
        BattleFrame.prototype.connectComplete = function () {
            if (this._delegate && this._delegate.connectComplete) {
                this._delegate.connectComplete();
            }
            if (this._opreateCode == OP_MODE_QUERYTABLE) {
                this.sendQueryTable(); //查找桌子
            }
            else if (this._opreateCode == OP_MODE_CREATETABLE) {
                this.sendCreateTable(); //创建桌子
            }
            else if (this._opreateCode == OP_MODE_FLUSHWEALTH) {
                this.sendFlushWealth(); //刷新财富
            }
            else if (this._opreateCode == OP_MODE_DISMISSTABLE) {
                this.sendDismissTable(); //解散桌子
            }
            else if (this._opreateCode == OP_MODE_TABLEUSER) {
                this.sendQueryTableUser(); //查询用户
            }
        };
        /**查询桌子 */
        BattleFrame.prototype.sendQueryTable = function () {
            var query = df.CMD_GA_QueryTable();
            query.wKindID = this._gameID ? this._gameID : 0;
            query.dwUserID = managers.FrameManager.getInstance().m_GlobalUserItem.dwUserID;
            query.cbQueryKind = this._queryKind;
            query.dwQueryArgKey = this._queryid;
            var tcpService = managers.TcpServiceCtrl.getInstance().getGateWayService().getTcpService();
            var pBuffer = utils.Memory.newLitteEndianByteArray(df.Len_Tcp_Head);
            pBuffer.Append_WORD(query.wKindID);
            pBuffer.Append_DWORD(query.dwUserID);
            pBuffer.Append_Byte(query.cbQueryKind);
            pBuffer.Append_DWORD(query.dwQueryArgKey);
            tcpService.SendSocketData(df.MDM_GA_BATTLE_SERVICE, df.SUB_GA_QUERY_TABLE, pBuffer, pBuffer.getLength());
        };
        /**创建约战 */
        BattleFrame.prototype.sendCreateTable = function () {
            var tcpService = managers.TcpServiceCtrl.getInstance().getGateWayService().getTcpService();
            //构造数据
            var createTable = df.CMD_GA_CreateTable();
            createTable.dwUserID = managers.FrameManager.getInstance().m_GlobalUserItem.dwUserID;
            createTable.dwStationID = df.STATION_ID;
            createTable.szPassword = managers.FrameManager.getInstance().m_GlobalUserItem.szPassword;
            createTable.dwGroupID = 0;
            createTable.dwGroupCreaterID = 0;
            createTable.wKindID = this._gameID;
            createTable.wPayType = this._wPayType;
            createTable.wPlayerCount = this._battleConfig.wPlayerCount ? this._battleConfig.wPlayerCount : 0;
            createTable.cbSettleKind = this._battleConfig.cbSettleKind ? this._battleConfig.cbSettleKind : 0;
            createTable.cbVideoMode = this._battleConfig.cbVideoMode ? this._battleConfig.cbVideoMode : 0;
            createTable.cbCurrencyKind = this._cbCurrencyKind;
            createTable.cbForbidSameIP = this._battleConfig.cbForbidSameIP ? this._battleConfig.cbForbidSameIP : 0;
            createTable.wPlayCount = this._battleConfig.wPlayCount ? this._battleConfig.wPlayCount : 0;
            createTable.dwPlayTime = this._battleConfig.dwPlayTime ? this._battleConfig.dwPlayTime : 0;
            createTable.lBaseScore = this._lCellScore;
            createTable.szMachineID = managers.FrameManager.getInstance().m_GlobalUserItem.szMachine;
            var pBuffer = utils.Memory.newLitteEndianByteArray(df.Len_Tcp_Head);
            pBuffer.Append_DWORD(createTable.dwUserID);
            pBuffer.Append_DWORD(createTable.dwStationID);
            pBuffer.Append_UTF16(createTable.szPassword, df.LEN_PASSWORD);
            pBuffer.Append_DWORD(createTable.dwGroupID);
            pBuffer.Append_DWORD(createTable.dwGroupCreaterID);
            pBuffer.Append_WORD(createTable.wKindID);
            pBuffer.Append_WORD(createTable.wPayType);
            pBuffer.Append_WORD(createTable.wPlayerCount);
            pBuffer.Append_Byte(createTable.cbSettleKind);
            pBuffer.Append_Byte(createTable.cbVideoMode);
            pBuffer.Append_Byte(createTable.cbCurrencyKind);
            pBuffer.Append_Byte(createTable.cbForbidSameIP);
            pBuffer.Append_WORD(createTable.wPlayCount);
            pBuffer.Append_DWORD(createTable.dwPlayTime);
            pBuffer.Append_SCORE(createTable.lBaseScore);
            pBuffer.Append_UTF16(createTable.szMachineID, df.LEN_COMPUTER_ID);
            tcpService.SendSocketData(df.MDM_GA_BATTLE_SERVICE, df.SUB_GA_CREATE_TABLE, pBuffer, pBuffer.getLength());
        };
        /**刷新财富 */
        BattleFrame.prototype.sendFlushWealth = function () {
            var FlushData = {
                dwUserID: 0
            };
            FlushData.dwUserID = managers.FrameManager.getInstance().m_GlobalUserItem.dwUserID;
            var pBuffer = utils.Memory.newLitteEndianByteArray(df.Len_Tcp_Head);
            pBuffer.Append_DWORD(FlushData.dwUserID);
            var tcpService = managers.TcpServiceCtrl.getInstance().getTcpService();
            tcpService.SendSocketData(df.MDM_GP_USER_SERVICE, df.SUB_GP_QUERY_WEALTH_LUA, pBuffer, pBuffer.getLength());
        };
        /**约战解散 */
        BattleFrame.prototype.sendDismissTable = function () {
            var dismissTable = df.CMD_GA_DismissTable();
            dismissTable.wKindID = this._gameID;
            dismissTable.dwUserID = managers.FrameManager.getInstance().m_GlobalUserItem.dwUserID;
            dismissTable.dwMappedNum = this._dwMappedNum;
            dismissTable.szPassword = managers.FrameManager.getInstance().m_GlobalUserItem.szPassword;
            var pBuffer = utils.Memory.newLitteEndianByteArray(df.Len_Tcp_Head);
            pBuffer.Append_WORD(dismissTable.wKindID);
            pBuffer.Append_DWORD(dismissTable.dwMappedNum);
            pBuffer.Append_DWORD(dismissTable.dwUserID);
            pBuffer.Append_UTF16(dismissTable.szPassword, df.LEN_PASSWORD);
            var tcpService = managers.TcpServiceCtrl.getInstance().getGateWayService().getTcpService();
            tcpService.SendSocketData(df.MDM_GA_BATTLE_SERVICE, df.SUB_GA_DISMISS_TABLE, pBuffer, pBuffer.getLength());
        };
        /**查询用户 */
        BattleFrame.prototype.sendQueryTableUser = function () {
            var tableUserList = df.CMD_GA_GetTableUserList();
            tableUserList.wKindID = this._gameID;
            tableUserList.dwMappedNum = this._dwMappedNum;
            var pBuffer = utils.Memory.newLitteEndianByteArray(df.Len_Tcp_Head);
            pBuffer.Append_WORD(tableUserList.wKindID);
            pBuffer.Append_DWORD(tableUserList.dwMappedNum);
            var tcpService = managers.TcpServiceCtrl.getInstance().getGateWayService().getTcpService();
            tcpService.SendSocketData(df.MDM_GA_BATTLE_SERVICE, df.SUB_GA_GET_TABLE_USERLIST, pBuffer, pBuffer.getLength());
        };
        /**
        * 网络消息
        */
        BattleFrame.prototype.onMessage = function (e) {
            var msg = e.data;
            var wMainCmd = msg.wMainCmd;
            var wSubCmd = msg.wSubCmd;
            switch (wMainCmd) {
                case df.MDM_GP_USER_SERVICE:
                    {
                        if (this._opreateCode == OP_MODE_FLUSHWEALTH && wSubCmd == df.SUB_GP_USER_WEALTH) {
                            this.onUserWealth(msg);
                        }
                    }
                    break;
                case df.MDM_GA_BATTLE_SERVICE:
                    {
                        this.onSubBattleService(msg);
                    }
                    break;
                case df.MDM_GA_LOGIC_SERVICE:
                    {
                        this.onSubLogicService(msg);
                    }
                    break;
                case df.MDM_GA_GROUP_SERVICE:
                    {
                    }
                    break;
            }
        };
        /**财富更新 */
        BattleFrame.prototype.onUserWealth = function (msg) {
            var cbMask = msg.cbBuffer.Pop_Byte();
            var lUserIngot = msg.cbBuffer.Pop_SCORE();
            var lUserMedal = msg.cbBuffer.Pop_SCORE();
            var lUserScore = msg.cbBuffer.Pop_SCORE();
            var lUserRoomCard = msg.cbBuffer.Pop_SCORE();
            if (lUserIngot && (cbMask & df.WEALTH_MASK_INGOT) != 0) {
                managers.FrameManager.getInstance().m_GlobalUserItem.lUserIngot = lUserIngot;
            }
            if (lUserMedal && (cbMask & df.WEALTH_MASK_MEDAL) != 0) {
                managers.FrameManager.getInstance().m_GlobalUserItem.lUserMedal = lUserMedal;
            }
            if (lUserScore && (cbMask & df.WEALTH_MASK_SCORE) != 0) {
                managers.FrameManager.getInstance().m_GlobalUserItem.lUserScore = lUserScore;
            }
            if (lUserRoomCard && (cbMask & df.WEALTH_MASK_ROOMCARD) != 0) {
                managers.FrameManager.getInstance().m_GlobalUserItem.lUserRoomCard = lUserRoomCard;
            }
            //通知UI刷新
            if (this._delegate) {
                this._delegate.dispatchEvent(new customEvent.CustomEvent(customEvent.CustomEvent.EVENT_BATTLE_INFO_REFRESH));
            }
        };
        //约战信息
        BattleFrame.prototype.onSubBattleService = function (msg) {
            var wSubCmd = msg.wSubCmd;
            switch (wSubCmd) {
                case df.SUB_GA_TABLE_ITEM:
                    {
                        this.onSocketTableItem(msg);
                    }
                    break;
                case df.SUB_GA_TABLE_LIST:
                    {
                        this.onSocketTableList(msg);
                    }
                    break;
                case df.SUB_GA_OPERATE_FAILED:
                    {
                        this.onSocketOperateFailed(msg);
                    }
                    break;
                case df.SUB_GA_TABLE_PARAMLIST:
                    {
                        this.onSocketTableParamList(msg);
                    }
                    break;
                case df.SUB_GA_TABLE_USERLIST:
                    {
                        this.onSocketTableUserList(msg);
                    }
                    break;
                case df.SUB_GA_DISMISS_RESULT:
                    {
                        this.onSocketDissMissResult(msg);
                    }
                    break;
            }
        };
        //业务逻辑消息
        BattleFrame.prototype.onSubLogicService = function (msg) {
            var wSubCmd = msg.wSubCmd;
            switch (wSubCmd) {
                case df.SUB_GA_WEALTH_UPDATE:
                    {
                        this.onSocketWealthUpdate(msg);
                    }
                    break;
                default:
                    break;
            }
        };
        /**操作失败 */
        BattleFrame.prototype.onSocketOperateFailed = function (msg) {
            var errorCode = msg.cbBuffer.Pop_WORD();
            var str = msg.cbBuffer.Pop_UTF16((msg.wLength - 2) / 2);
            console.log(str);
            managers.FrameManager.getInstance().dismissPopWait();
            managers.FrameManager.getInstance().showToast(str);
            //关闭服务
            if (null != this._delegate && this._delegate.onCloseBattleService) {
                this._delegate.onCloseBattleService();
            }
        };
        /**约战信息 */
        BattleFrame.prototype.onSocketTableItem = function (msg) {
            var tableItem = new battle.BattleTableItem(msg.cbBuffer);
            //保存信息
            managers.TcpServiceCtrl.getInstance().getServerInfo().m_CurBattle = tableItem;
            //关闭服务
            if (null != this._delegate && this._delegate.onCloseBattleService) {
                this._delegate.onCloseBattleService();
            }
            managers.FrameManager.getInstance().dismissPopWait();
            managers.FrameManager.getInstance().showPopWait("加载游戏中,请稍等", 1000, false, this._delegate.onStartBattleGame);
        };
        /**约战参数 */
        BattleFrame.prototype.onSocketTableParamList = function (msg) {
            //置空            
            managers.TcpServiceCtrl.getInstance().getServerInfo().m_BattleParamList = [];
            while (msg.cbBuffer.getByteArray().bytesAvailable >= 12) {
                var param = new battle.BattleParam(msg.cbBuffer);
                managers.TcpServiceCtrl.getInstance().getServerInfo().m_BattleParamList.push(param);
            }
            //刷新列表
            this._delegate.onUpdateList();
            //关闭服务
            if (null != this._delegate && this._delegate.onCloseBattleService) {
                this._delegate.onCloseBattleService();
            }
        };
        /**约战列表 */
        BattleFrame.prototype.onSocketTableList = function (msg) {
            //桌子数目
            var wTableCount = msg.cbBuffer.Pop_WORD();
            //清空
            managers.TcpServiceCtrl.getInstance().getServerInfo().m_BattleList = [];
            for (var i = 0; i < wTableCount; i++) {
                var tableItem = new battle.BattleTableItem(msg.cbBuffer);
                managers.TcpServiceCtrl.getInstance().getServerInfo().m_BattleList.push(tableItem);
            }
            //关闭服务
            if (wTableCount == 0) {
                if (null != this._delegate && this._delegate.onCloseBattleService) {
                    this._delegate.onCloseBattleService();
                }
                return;
            }
            //刷新列表
            this._delegate.onUpdateList();
        };
        /**约战用户列表 */
        BattleFrame.prototype.onSocketTableUserList = function (msg) {
            var struct = df.CMD_GA_TableUserList();
            struct.dwMappedNum = msg.cbBuffer.Pop_DWORD();
            struct.wUserCount = msg.cbBuffer.Pop_WORD();
            var userList = [];
            for (var i = 0; i < struct.wUserCount; i++) {
                var tagTableUserItem = df.tagTableUserItem();
                tagTableUserItem.wFaceID = msg.cbBuffer.Pop_WORD();
                tagTableUserItem.wChairID = msg.cbBuffer.Pop_WORD();
                tagTableUserItem.dwUserID = msg.cbBuffer.Pop_DWORD();
                tagTableUserItem.dwGameID = msg.cbBuffer.Pop_DWORD();
                tagTableUserItem.dwCustomID = msg.cbBuffer.Pop_DWORD();
                tagTableUserItem.szNickName = msg.cbBuffer.Pop_UTF16(df.LEN_ACCOUNTS);
                userList.push(tagTableUserItem);
            }
            var paramList = managers.TcpServiceCtrl.getInstance().getServerInfo().m_BattleParamList;
            if (null != paramList) {
                if (paramList.length > 0) {
                    for (var i = 0; i < paramList.length; i++) {
                        var param = paramList[i];
                        if (param.dwMappedNum == struct.dwMappedNum) {
                            param.wUserCount = struct.wUserCount;
                            if (null == param.tableUserList[i])
                                param.tableUserList[i] = new battle.BattleUserItem();
                            param.tableUserList[i].onInitWithData(userList[i]);
                        }
                    }
                }
            }
            //关闭服务
            if (null != this._delegate && this._delegate.onCloseBattleService) {
                this._delegate.onCloseBattleService();
            }
        };
        /**解散结果 */
        BattleFrame.prototype.onSocketDissMissResult = function (msg) {
            var result = df.CMD_GA_DismissResult();
            result.cbResultCode = msg.cbBuffer.Pop_Byte();
            result.szDescribeString = msg.cbBuffer.Pop_UTF16(msg.cbBuffer.getByteArray().bytesAvailable / 2);
            if (this._delegate && this._delegate.onDismissResult) {
                this._delegate.onDismissResult(result);
            }
        };
        /**财富更新 */
        BattleFrame.prototype.onSocketWealthUpdate = function (msg) {
            var lUserIngot = msg.cbBuffer.Pop_SCORE(); //用户钻石
            var lUserRoomCard = msg.cbBuffer.Pop_SCORE(); //用户房卡
            managers.FrameManager.getInstance().m_GlobalUserItem.lUserIngot = lUserIngot;
            managers.FrameManager.getInstance().m_GlobalUserItem.lUserRoomCard = lUserRoomCard;
            //UI刷新
            if (this._delegate) {
                this._delegate.dispatchEvent(new customEvent.CustomEvent(customEvent.CustomEvent.EVENT_BATTLE_REFRESH));
            }
        };
        /**
         * 约战连接
         */
        BattleFrame.prototype.onConnectBattle = function () {
            managers.TcpServiceCtrl.getInstance().createGateWayService().connectGateWay();
        };
        /**
         * 约战记录
         */
        BattleFrame.prototype.onHttpGetBattleInfo = function (listener) {
        };
        /**
         * 发送心跳
         */
        BattleFrame.prototype.sendPing = function () {
            //构造数据
            var Ping = new utils.ByteArray();
            //设置偏移
            Ping.position(df.Len_Tcp_Head);
            //发送心跳
            if (null == managers.TcpServiceCtrl.getInstance().getGateWayService())
                return;
            var tcpService = managers.TcpServiceCtrl.getInstance().getGateWayService().getTcpService();
            tcpService.SendSocketData(df.MDM_KN_COMMAND, df.SUB_KN_DETECT_SOCKET, Ping, Ping.getLength());
        };
        return BattleFrame;
    }());
    frame.BattleFrame = BattleFrame;
})(frame || (frame = {}));
