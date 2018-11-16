/**
 * 登录服消息
 */
var frame;
(function (frame) {
    /**操作标识 */
    var LOGON_MODE_ACCOUNT = 1; //账号登录
    var LOGON_MODE_REGISTER = 2; //注册登录
    var LOGON_MODE_OTHERPLATFORM = 3; //第三方登录
    var LOGON_MODE_RELOADROOM = 4; //重载房间
    var LOGON_MODE_RELOADAGENT = 5; //重载房间
    var LOGON_MODE_RELOADGAME = 6; //重载游戏
    var LogonFrame = (function () {
        function LogonFrame(viewFrame) {
            this._operateCode = 0;
            this._reLoadKind = 0;
            this._agentID = 0;
            this._viewFrame = viewFrame;
            this._dispatcher = new egret.EventDispatcher();
            this.addEventListener();
        }
        LogonFrame.prototype.getDispatcher = function () {
            return this._dispatcher;
        };
        /**
         * 添加监听
         */
        LogonFrame.prototype.addEventListener = function () {
            //注册通知
            this._dispatcher.addEventListener(customEvent.CustomEvent.EVENT_CONNECT_COMPLETE, this.connectComplete, this);
            this._dispatcher.addEventListener(customEvent.CustomEvent.EVENT_MESSAGE_DISPATCH, this.onMessage, this);
        };
        /**
         * 移除监听
         */
        LogonFrame.prototype.removeEventListener = function () {
            this._dispatcher.removeEventListener(customEvent.CustomEvent.EVENT_CONNECT_COMPLETE, this.connectComplete, this);
            this._dispatcher.removeEventListener(customEvent.CustomEvent.EVENT_MESSAGE_DISPATCH, this.onMessage, this);
        };
        LogonFrame.prototype.onReLoadRoomList = function (kindID) {
            this._reLoadKind = kindID;
            this._operateCode = LOGON_MODE_RELOADROOM;
            this.onConnectPlaza();
        };
        LogonFrame.prototype.onQueryServerAgent = function (kindID) {
            this._agentID = kindID;
            this._operateCode = LOGON_MODE_RELOADAGENT;
            this.onConnectPlaza();
        };
        /**连接广场 */
        LogonFrame.prototype.onConnectPlaza = function () {
            managers.TcpServiceCtrl.getInstance().onConnectPlaza();
        };
        /**连接成功*/
        LogonFrame.prototype.connectComplete = function () {
            if (this._viewFrame && this._viewFrame.connectComplete) {
                this._viewFrame.connectComplete();
            }
            if (this._operateCode == LOGON_MODE_RELOADAGENT) {
                this.sendReLoadAgent();
            }
        };
        /**
        * 网络消息
        */
        LogonFrame.prototype.onMessage = function (e) {
            var msg = e.data;
            var wMainCmd = msg.wMainCmd;
            switch (wMainCmd) {
                //广场登录
                case df.MDM_MB_LOGON:
                    {
                        return this.onMessageLogon(msg);
                    }
                case df.MDM_MB_SERVER_LIST:
                    {
                        return this.onMessageServerList(msg);
                    }
                default:
                    {
                        egret.assert(false, "未知消息");
                    }
            }
        };
        /**
         * 广场登录协议
         */
        LogonFrame.prototype.onMessageLogon = function (msg) {
            switch (msg.wSubCmd) {
                //登录成功
                case df.SUB_MB_LOGON_SUCCESS:
                    {
                        return this.onSubLogonSuccess(msg);
                    }
                //登录失败 
                case df.SUB_MB_LOGON_FAILURE:
                    {
                        return this.onSubLogonFailure(msg);
                    }
                default:
                    break;
            }
        };
        /**登录成功 */
        LogonFrame.prototype.onSubLogonSuccess = function (msg) {
            var CMD_MB_LogonSuccess = df.CMD_MB_LogonSuccess();
            CMD_MB_LogonSuccess.wFaceID = msg.cbBuffer.Pop_WORD();
            CMD_MB_LogonSuccess.cbGender = msg.cbBuffer.Pop_Byte();
            CMD_MB_LogonSuccess.dwCustomID = msg.cbBuffer.Pop_DWORD();
            CMD_MB_LogonSuccess.dwUserID = msg.cbBuffer.Pop_DWORD();
            CMD_MB_LogonSuccess.dwGameID = msg.cbBuffer.Pop_DWORD();
            CMD_MB_LogonSuccess.dwStationID = msg.cbBuffer.Pop_DWORD();
            CMD_MB_LogonSuccess.dwExperience = msg.cbBuffer.Pop_DWORD();
            CMD_MB_LogonSuccess.dwLoveLiness = msg.cbBuffer.Pop_DWORD();
            CMD_MB_LogonSuccess.szNickName = msg.cbBuffer.Pop_UTF16(df.LEN_ACCOUNTS);
            CMD_MB_LogonSuccess.szAccounts = msg.cbBuffer.Pop_UTF16(df.LEN_ACCOUNTS);
            CMD_MB_LogonSuccess.szLogonPass = msg.cbBuffer.Pop_UTF16(df.LEN_PASSWORD);
            CMD_MB_LogonSuccess.szInsurePass = msg.cbBuffer.Pop_UTF16(df.LEN_PASSWORD);
            CMD_MB_LogonSuccess.lUserIngot = msg.cbBuffer.Pop_LONGLONG();
            CMD_MB_LogonSuccess.lUserMedal = msg.cbBuffer.Pop_LONGLONG();
            CMD_MB_LogonSuccess.lUserScore = msg.cbBuffer.Pop_LONGLONG();
            CMD_MB_LogonSuccess.lUserInsure = msg.cbBuffer.Pop_LONGLONG();
            CMD_MB_LogonSuccess.cbMemberOrder = msg.cbBuffer.Pop_Byte();
            CMD_MB_LogonSuccess.MemberOverDate = df.SYSTEMTIME(msg.cbBuffer);
            CMD_MB_LogonSuccess.wLockServerID = msg.cbBuffer.Pop_WORD();
            //保存用户
            var userData = new models.UserData(CMD_MB_LogonSuccess);
            userData.nPlatform = this._viewFrame.getPloatForm();
            managers.FrameManager.getInstance().m_GlobalUserItem = userData;
            managers.FrameManager.getInstance().m_GlobalUserItem.szPassword = utils.MD5.MD5_HEX(this._viewFrame.getPassWord());
            //本地缓存
            var session = {
                'account': "",
                'password': "",
                'isAuto': 0 //自动登录
            };
            session.account = CMD_MB_LogonSuccess.szAccounts;
            session.password = egret.Base64Util.encode(utils.StringUtils.string2array(this._viewFrame.getPassWord()));
            session.isAuto = this._viewFrame.getAutoLogon();
            localStorage.setItem('Logon', JSON.stringify(session));
        };
        /**登录失败 */
        LogonFrame.prototype.onSubLogonFailure = function (msg) {
            var CMD_MB_LogonFailure = df.CMD_MB_LogonFailure();
            CMD_MB_LogonFailure.lResultCode = msg.cbBuffer.Pop_INT();
            CMD_MB_LogonFailure.szDescribeString = msg.cbBuffer.Pop_UTF16(msg.cbBuffer.getByteArray().readAvailable / 2);
            managers.FrameManager.getInstance().showToast(CMD_MB_LogonFailure.szDescribeString);
            managers.FrameManager.getInstance().dismissPopWait();
            //关闭socket
            managers.TcpServiceCtrl.getInstance().closeService();
        };
        /**
        * 列表消息
        */
        LogonFrame.prototype.onMessageServerList = function (msg) {
            //种类列表
            switch (msg.wSubCmd) {
                case df.SUB_MB_LIST_KIND:
                    {
                        return this.onSubMessageListKind(msg);
                    }
                //列表信息
                case df.MDM_MB_SERVER_LIST:
                    {
                        return this.onSubMessgeServerList(msg);
                    }
                //比赛列表
                case df.SUB_MB_LIST_MATCH:
                    {
                        return this.onSubMessageMatchList(msg);
                    }
                //游戏选项
                case df.SUB_MB_GAME_OPTION:
                    {
                        return this.onSubMessageGameOpion(msg);
                    }
                //开房选项
                case df.SUB_MB_CREATE_OPTION:
                    {
                        return this.onSubMessageCreateOpion(msg);
                    }
                //登录列表
                case df.SUB_MB_LIST_LOGON:
                    {
                        return this.onSubMessageLogonList(msg);
                    }
                case df.SUB_MB_LIST_AGENT:
                    {
                        return this.onMessageListAgent(msg);
                    }
                //房间代理
                case df.SUB_MB_SERVER_AGENT:
                    {
                        return this.onSubMessageServerAgent(msg);
                    }
                //网关服务
                case df.SUB_MB_LIST_ACCESS:
                    {
                        return this.onSubMessageAccess(msg);
                    }
                case df.SUB_MB_LIST_FINISH:
                    {
                        //切换场景
                        var CientController = new controller.ClientController();
                        managers.FrameManager.getInstance().replaceScene(CientController, true);
                        managers.FrameManager.getInstance().dismissPopWait();
                        //关闭socket
                        managers.TcpServiceCtrl.getInstance().closeService();
                        return;
                    }
                case df.SUB_MB_SERVER_FINISH:
                    {
                        //切换场景
                        var CientController = new controller.ClientController();
                        managers.FrameManager.getInstance().replaceScene(CientController, true);
                        managers.FrameManager.getInstance().dismissPopWait();
                        //关闭socket
                        managers.TcpServiceCtrl.getInstance().closeService();
                        return;
                    }
                default:
                    {
                        egret.assert(false, "未知消息");
                    }
            }
        };
        LogonFrame.prototype.onSubMessageListKind = function (msg) {
            var length = msg.wLength;
            if (length % df.LEN_GAME_LIST_ITEM != 0)
                return;
            //重置显示
            var listInfo = managers.TcpServiceCtrl.getInstance().getGameListInfo();
            if (null == listInfo)
                return;
            listInfo._Info.forEach(function (list) {
                list.show = false;
            });
            //游戏种类
            var itemCount = length / df.LEN_GAME_LIST_ITEM;
            //记录游戏信息
            var newGamelist = [];
            //读取游戏信息
            for (var i = 0; i < itemCount; i++) {
                //读取数据
                var kindID = msg.cbBuffer.Pop_WORD();
                console.log("wKindID is :" + kindID);
                var value = msg.cbBuffer.Pop_WORD();
                value = msg.cbBuffer.Pop_WORD();
                var sort = msg.cbBuffer.Pop_WORD();
                value = msg.cbBuffer.Pop_WORD();
                value = msg.cbBuffer.Pop_WORD();
                var str = msg.cbBuffer.Pop_UTF16(32);
                str = msg.cbBuffer.Pop_UTF16(32);
                msg.cbBuffer.Pop_WORD();
                var item = listInfo.isGameSupport(kindID, true);
                if (item && item.id != "-1") {
                    item.show = true;
                    item.sort = sort - listInfo.getGameFavourite(kindID);
                }
                //分站点排序
                if (df.StationSupport && df.STATION_GAME) {
                    var sid = df.STATION_ID;
                    if (df.STATION_GAME[df.STATION_ID]) {
                        if (df.STATION_GAME[df.STATION_ID][kindID]) {
                            item.sort = item.sort - 10000;
                        }
                    }
                }
            }
        };
        LogonFrame.prototype.onSubMessgeServerList = function (msg) {
            var length = msg.wLength;
            if (length % df.LEN_GAME_SERVER_ITEM != 0)
                return;
            //房间数目
            var itemCount = length / df.LEN_GAME_SERVER_ITEM;
            //列表容器
            var newRoomlist = {};
            //比赛容器
            var newMatchList = [];
            //解析数据
            for (var i = 0; i < itemCount; i++) {
                var serverItem = new models.GameServerItem(msg.cbBuffer);
                if (!newRoomlist[serverItem.wKindID]) {
                    newRoomlist[serverItem.wKindID] = [];
                    newRoomlist[serverItem.wKindID].push(serverItem);
                }
                else {
                    newRoomlist[serverItem.wKindID].push(serverItem);
                    //根据sortid排序
                    var compare = function compareFunction(item1, item2) {
                        return item1.wSortID > item2.wSortID ? 1 : ((item1.wSortID == item2.wSortID) ? 0 : -1);
                    };
                    newRoomlist[serverItem.wKindID].sort(compare);
                }
                //比赛场
                if ((serverItem.wServerType & df.GAME_GENRE_MATCH) != 0) {
                    newMatchList.push(serverItem);
                }
            }
            //全局保存
            managers.TcpServiceCtrl.getInstance().getServerInfo()._lUpdateTime = egret.getTimer();
            managers.TcpServiceCtrl.getInstance().getServerInfo().UpdataRoomInfo(newRoomlist);
            managers.TcpServiceCtrl.getInstance().getServerInfo().UpdataMatchInfo(newMatchList);
        };
        LogonFrame.prototype.onSubMessageMatchList = function (msg) {
        };
        LogonFrame.prototype.onSubMessageServerAgent = function (msg) {
            var length = msg.wLength;
            while (msg.cbBuffer.getPosition() < length) {
                var wServerID = msg.cbBuffer.Pop_WORD();
                var wAgentCount = msg.cbBuffer.Pop_WORD();
                if (0 == wAgentCount)
                    continue;
                var agentInfo = [];
                for (var i = 0; i < wAgentCount; i++) {
                    var wAgentID = msg.cbBuffer.Pop_WORD();
                    var wServicePort = msg.cbBuffer.Pop_WORD();
                    agentInfo.push(new models.AgentServer(wAgentID, wServicePort));
                }
                managers.TcpServiceCtrl.getInstance().getServerInfo().upDateRoomAgentInfo(wServerID, agentInfo);
            }
        };
        LogonFrame.prototype.onMessageListAgent = function (msg) {
            var len = msg.wLength;
            if (len % 134 != 0)
                return;
            var count = len / 134;
            for (var i = 0; i < count; i++) {
                var wAgentID = msg.cbBuffer.Pop_WORD();
                var wAgentLevel = msg.cbBuffer.Pop_WORD();
                var dwServiceAddr = msg.cbBuffer.Pop_DWORD();
                var szServiceDomain = msg.cbBuffer.Pop_UTF16(63);
                var serverInfo = managers.TcpServiceCtrl.getInstance().getServerInfo();
                serverInfo.upDateAgentInfo(wAgentID, new models.Agent(wAgentLevel, dwServiceAddr, szServiceDomain));
            }
        };
        LogonFrame.prototype.onSubMessageAccess = function (msg) {
            var serverInfo = managers.TcpServiceCtrl.getInstance().getServerInfo();
            serverInfo.setAccessServerInfo([]);
            var length = msg.wLength;
            if (length % df.LEN_ACCESS_ITEM != 0)
                return;
            var count = length / df.LEN_ACCESS_ITEM;
            var accessSever = [];
            for (var i = 0; i < count; i++) {
                var item = df.tagAccessItem(msg.cbBuffer);
                accessSever.push(item);
            }
            serverInfo.setAccessServerInfo(accessSever);
        };
        LogonFrame.prototype.onSubMessageGameOpion = function (msg) {
            var len = msg.wLength;
            while (msg.cbBuffer.getPosition() < len) {
                var wKindID = msg.cbBuffer.Pop_WORD();
                var wJsonLength = msg.cbBuffer.Pop_WORD();
                var jsonString = msg.cbBuffer.Pop_UTF16(wJsonLength / 2);
                if (wJsonLength < 5) {
                    return;
                }
                var jsonData = JSON.parse(jsonString);
                if (null == jsonData) {
                    console.log("Json error");
                }
                var optioninfo = [];
                var count = jsonData.Count;
                jsonData = jsonData.Data;
                for (var i = 0; i < count; i++) {
                    var key = "type" + (i + 1);
                    var typeItem = jsonData[key];
                    var typeCount = typeItem.Count ? typeItem.Count : typeItem.TypeCount;
                    var Item = typeItem.Content ? typeItem.Content : typeItem.TypeContent;
                    var option = new models.OptionSpecial();
                    for (var j = 0; j < typeCount; j++) {
                        option.wCount = count;
                        option.name = Item[j].Name ? Item[j].Name : Item[j].ItemName;
                        option.count = Item[j].Count ? Item[j].Count : Item[j].ItemCount;
                        option.type = Item[j].Type ? Item[j].Type : Item[j].ItemType;
                        option.min = Item[j].Min ? Item[j].Min : 0;
                        option.max = Item[j].Max ? Item[j].Max : 0;
                        var Items = Item[j].Items;
                        for (var k = 0; k < Items.length; k++) {
                            if (option.type >= df.OPTION_TYPE_INPUT) {
                                option.setItem({ type: Item[j].Type });
                                if (option.type == df.OPTION_TYPE_INPUT) {
                                    var map = { describe: "", price: 0, min: 0, max: 0 };
                                    map.describe = Items[k].Describe ? Items[k].Describe : Items[k].Des;
                                    map.price = Items[k].Price ? Items[k].Price : 0;
                                    map.min = Items[k].Min ? Items[k].Min : 0;
                                    map.max = Items[k].Max ? Items[k].Max : 0;
                                    option.setItem({ type: Item[j].Type });
                                }
                                else {
                                    var map = { describe: "", price: 0, roomCard: 0, value: 0 };
                                    map.describe = Items[k].Describe ? Items[k].Describe : Items[k].Des;
                                    map.price = Items[k].Price ? Items[k].Price : 0;
                                    map.roomCard = Items[k].roomCard ? Items[k].roomCard : 0;
                                    map.value = Items[k].Value;
                                    option.setItem(map);
                                }
                            }
                            else {
                                var map = { describe: "", price: 0, roomCard: 0, value: 0 };
                                map.describe = Items[k].Describe ? Items[k].Describe : Items[k].Des;
                                map.price = Items[k].Price ? Items[k].Price : 0;
                                map.roomCard = Items[k].roomCard ? Items[k].roomCard : 0;
                                map.value = Items[k].Value;
                                option.setItem(map);
                            }
                        }
                        optioninfo.push(option);
                    }
                }
                var serverInfo = managers.TcpServiceCtrl.getInstance().getServerInfo();
                serverInfo.setOptionSpecialList(wKindID, optioninfo);
            }
        };
        LogonFrame.prototype.onSubMessageCreateOpion = function (msg) {
            var length = msg.wLength;
            if (length % df.LEN_CREATE_OPTION_ITEM != 0)
                return;
            var count = length / df.LEN_CREATE_OPTION_ITEM;
            for (var i = 0; i < count; i++) {
                var option = new models.Option();
                var wKindID = msg.cbBuffer.Pop_WORD();
                option.wPlayerCount = msg.cbBuffer.Pop_WORD();
                option.wOptionMask = msg.cbBuffer.Pop_WORD();
                //AA约战
                option.wSuportPayType = msg.cbBuffer.Pop_WORD();
                option.cbOptionCount = msg.cbBuffer.Pop_Byte();
                option.lVideoIngot_User = msg.cbBuffer.Pop_DWORD(); //视频费用 (新增)
                option.lVideoRoomCard_User = msg.cbBuffer.Pop_DWORD(); //视频费用 (新增)
                option.lVideoIngot_Owner = msg.cbBuffer.Pop_DWORD(); //视频费用 (新增)
                option.lVideoRoomCard_Owner = msg.cbBuffer.Pop_DWORD(); //视频费用 (新增)
                option.lMinBaseScore = msg.cbBuffer.Pop_LONGLONG();
                option.lMaxBaseScore = msg.cbBuffer.Pop_LONGLONG();
                //变量定义
                var wPlayCount, dwPlayTime, lConsumeIngot, lRoomCard, lConsumeIngot_Owner, lRoomCard_Owner;
                for (var j = 0; j < 5; j++) {
                    wPlayCount = msg.cbBuffer.Pop_WORD();
                    dwPlayTime = msg.cbBuffer.Pop_DWORD();
                    lConsumeIngot = msg.cbBuffer.Pop_DWORD();
                    lConsumeIngot_Owner = msg.cbBuffer.Pop_DWORD();
                    lRoomCard = msg.cbBuffer.Pop_DWORD();
                    lRoomCard_Owner = msg.cbBuffer.Pop_DWORD();
                    option.wPlayCount.push(option.cbOptionCount > j ? wPlayCount : 0);
                    option.dwPlayTime.push(option.cbOptionCount > j ? dwPlayTime : 0);
                    option.lConsumeIngot.push(option.cbOptionCount > j ? lConsumeIngot : 0);
                    option.lRoomCard.push(option.cbOptionCount > j ? lRoomCard : 0);
                    option.lConsumeIngot_Owner.push(option.cbOptionCount > j ? lConsumeIngot_Owner : 0);
                    option.lRoomCard_Owner.push(option.cbOptionCount > j ? lRoomCard_Owner : 0);
                }
                var serverInfo = managers.TcpServiceCtrl.getInstance().getServerInfo();
                serverInfo.setOptionList(wKindID, option);
            }
        };
        LogonFrame.prototype.onSubMessageLogonList = function (msg) {
            var newLogonList = [];
            var len = msg.wLength;
            var count = len / 132;
            for (var i = 1; i < count; i++) {
                var port = msg.cbBuffer.Pop_WORD();
                var dwAddr = msg.cbBuffer.Pop_DWORD();
                var szDomain = msg.cbBuffer.Pop_UTF16(63);
                var map = { port: port, addr: dwAddr, domain: szDomain };
                newLogonList.push(map);
            }
        };
        /**
         * 发送注册
         */
        LogonFrame.prototype.sendRegister = function (service, args) {
            //构造数据
            var CMD_MB_RegisterAccounts = utils.Memory.newLitteEndianByteArray(df.Len_Tcp_Head);
            CMD_MB_RegisterAccounts.Append_WORD(args.wModuleID);
            CMD_MB_RegisterAccounts.Append_WORD(args.wMarketID);
            CMD_MB_RegisterAccounts.Append_Byte(args.cbDeviceType);
            CMD_MB_RegisterAccounts.Append_DWORD(args.dwAppVersion);
            CMD_MB_RegisterAccounts.Append_DWORD(args.dwPlazaVersion);
            CMD_MB_RegisterAccounts.Append_DWORD(args.dwStationID);
            CMD_MB_RegisterAccounts.Append_UTF16(args.szLogonPass, df.LEN_PASSWORD);
            CMD_MB_RegisterAccounts.Append_WORD(args.wFaceID);
            CMD_MB_RegisterAccounts.Append_Byte(args.cbGender);
            CMD_MB_RegisterAccounts.Append_UTF16(args.szAccounts, df.LEN_ACCOUNTS);
            CMD_MB_RegisterAccounts.Append_UTF16(args.szNickName, df.LEN_ACCOUNTS);
            CMD_MB_RegisterAccounts.Append_UTF16(args.szMachineID, df.LEN_MACHINE_SERIAL);
            CMD_MB_RegisterAccounts.Append_UTF16(args.szMobilePhone, df.LEN_MOBILE_PHONE);
            service.SendSocketData(df.MDM_MB_LOGON, df.SUB_MB_REGISTER_ACCOUNTS_LUA, CMD_MB_RegisterAccounts, CMD_MB_RegisterAccounts.getLength());
        };
        /**
         * 发送登录
         */
        LogonFrame.prototype.sendLogon = function (service, args) {
            //帐号登录
            var buffer = utils.Memory.newLitteEndianByteArray(df.Len_Tcp_Head);
            //缓冲内容
            buffer.Append_WORD(args.wModuleID);
            buffer.Append_WORD(args.wMarketID);
            buffer.Append_Byte(args.cbDeviceType);
            buffer.Append_DWORD(args.dwAppVersion);
            buffer.Append_DWORD(args.dwPlazaVersion);
            buffer.Append_DWORD(args.dwStationID);
            buffer.Append_DWORD(args.dwMappedNum);
            buffer.Append_UTF16(args.szPassword, df.LEN_MD5);
            buffer.Append_UTF16(args.szAccounts, df.LEN_ACCOUNTS);
            buffer.Append_UTF16(args.szMachineID, df.LEN_COMPUTER_ID);
            buffer.Append_UTF16(args.szMobilePhone, df.LEN_MOBILE_PHONE);
            service.SendSocketData(df.MDM_MB_LOGON, df.SUB_MB_LOGON_ACCOUNTS_LUA, buffer, buffer.getLength());
        };
        /**请求代理 */
        LogonFrame.prototype.sendReLoadAgent = function () {
            var buffer = utils.Memory.newLitteEndianByteArray(df.Len_Tcp_Head);
            buffer.Append_WORD(this._agentID);
            managers.TcpServiceCtrl.getInstance().getTcpService().SendSocketData(df.MDM_MB_SERVER_LIST, df.SUB_MB_GET_SERVER_AGENT, buffer, buffer.getLength());
        };
        /**
        * 发送心跳
        */
        LogonFrame.prototype.sendPing = function (service) {
            //构造数据
            var Ping = new utils.ByteArray();
            //设置偏移
            Ping.position(df.Len_Tcp_Head);
            //发送心跳
            service.SendSocketData(df.MDM_KN_COMMAND, df.SUB_KN_DETECT_SOCKET, Ping, Ping.getLength());
        };
        return LogonFrame;
    }());
    frame.LogonFrame = LogonFrame;
})(frame || (frame = {}));
