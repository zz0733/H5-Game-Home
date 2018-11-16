/**
 * 服务器管理
 */
var models;
(function (models) {
    /**
     * 代理
     */
    var Agent = (function () {
        function Agent(wAgentLevel, dwServiceAddr, szServiceDomain) {
            this.wAgentLevel = 0;
            this.dwServiceAddr = 0;
            this.szServiceDomain = "";
            this.wAgentLevel = wAgentLevel;
            this.dwServiceAddr = dwServiceAddr;
            this.szServiceDomain = szServiceDomain;
        }
        return Agent;
    }());
    models.Agent = Agent;
    var AgentServer = (function () {
        function AgentServer(wAgentID, wServicePort) {
            this.wAgentID = 0;
            this.wServicePort = 0;
            this.wAgentID = wAgentID;
            this.wServicePort = wServicePort;
        }
        return AgentServer;
    }());
    models.AgentServer = AgentServer;
    /** 约战相关
     * 附加配置
     */
    var ItemsSpcial = (function () {
        function ItemsSpcial(data) {
            this.type = 0;
            this.describe = "";
            this.price = 0;
            this.min = 0;
            this.max = 0;
            this.card = 0;
            this.value = 0;
            if (null != data.type) {
                this.type = data.type;
            }
            if (null != data.describe) {
                this.describe = data.describe;
            }
            if (null != data.price) {
                this.price = data.price;
            }
            if (null != data.min) {
                this.min = data.min;
            }
            if (null != data.max) {
                this.max = data.max;
            }
            if (null != data.roomCard) {
                this.card = data.roomCard;
            }
            if (null != data.value) {
                this.value = data.value;
            }
        }
        ;
        return ItemsSpcial;
    }());
    /**
     * 约战配置
     */
    var Option = (function () {
        function Option() {
            this.wPlayerCount = 0;
            this.wOptionMask = 0;
            //AA约战
            this.wSuportPayType = 0;
            this.cbOptionCount = 0;
            //视频费用 (新增)
            this.lVideoIngot_User = 0;
            this.lVideoRoomCard_User = 0;
            this.lVideoIngot_Owner = 0;
            this.lVideoRoomCard_Owner = 0;
            this.lMinBaseScore = 0;
            this.lMaxBaseScore = 0;
            this.wPlayCount = [];
            this.dwPlayTime = [];
            this.lConsumeIngot = [];
            this.lRoomCard = [];
            this.lConsumeIngot_Owner = [];
            this.lRoomCard_Owner = [];
        }
        return Option;
    }());
    models.Option = Option;
    /**
     * 附加配置
     */
    var OptionSpecial = (function () {
        function OptionSpecial() {
            this.wCount = 0;
            this.name = "";
            this.count = 0;
            this.type = 0;
            this.min = 0;
            this.max = 0;
            this.items = [];
        }
        OptionSpecial.prototype.setItem = function (data) {
            var item = new ItemsSpcial(data);
            this.items.push(item);
        };
        return OptionSpecial;
    }());
    models.OptionSpecial = OptionSpecial;
    var ServerInfo = (function () {
        /**
         * 构造
         */
        function ServerInfo() {
            /**
            * 登录列表
            */
            this.m_LogonList = [];
            /**
             * 代理列表
             */
            this.m_AgentList = {};
            /**
             * 代理列表
             */
            this.m_ServerAgentList = {};
            /**
             * 游戏列表
             */
            this.m_RoomList = {};
            /**
             * 网关列表
             */
            this.m_AccessList = [];
            /**
             * 比赛列表
             */
            this.m_MatchList = {};
            /**约战
             * 约战配置
             */
            this.m_Optionlist = {};
            /**约战
             * 游戏选项
             * 附加配置
             */
            this.m_OptionSpecialList = {};
            this.m_BattleList = [];
            this.m_BattleParamList = [];
            /**
             * 更新时间
             */
            this._lUpdateTime = 0;
            /**
             * 当前游戏ID
             */
            this.m_CurKindID = df.INVALID_WORD;
            /**被锁服务ID */
            this.m_LockedServerID = df.INVALID_WORD;
            /**
             * 当前游戏服务ID
             */
            this.m_CurServerID = df.INVALID_WORD;
            this.m_CurBattle = null;
        }
        /**
         * 更新列表
         */
        ServerInfo.prototype.UpdataRoomInfo = function (info) {
            this.m_RoomList = info;
        };
        /**
         * 更新比赛列表
         */
        ServerInfo.prototype.UpdataMatchInfo = function (info) {
            this.m_MatchList = info;
        };
        /**
         * 获取房间个数
         */
        ServerInfo.prototype.GetGameRoomCount = function (kindID) {
            if (kindID == df.INVALID_WORD)
                return;
            var kind = kindID ? kindID : this.m_CurKindID;
            if (kind != df.INVALID_WORD)
                return this.m_RoomList[kindID].length;
            return 0;
        };
        /**
         * 获取房间列表
         */
        ServerInfo.prototype.GetRoomList = function (kindID) {
            if (kindID == df.INVALID_WORD)
                return;
            var kind = kindID ? kindID : this.m_CurKindID;
            if (null != this.m_RoomList[kindID])
                return this.m_RoomList[kindID];
            return null;
        };
        /**获取房间 */
        ServerInfo.prototype.GetRoomInfo = function (serverID, kindID) {
            var roomID = 0;
            if (serverID == 0 || null == serverID) {
                roomID = this.m_CurServerID;
            }
            else {
                roomID = serverID;
            }
            var kind = 0;
            if (kindID == 0 || null == kindID) {
                kind = this.m_CurKindID;
            }
            else {
                kind = kindID;
            }
            //查找
            if (0 != roomID && 0 != kind) {
                if (null != this.GetRoomList(kind)) {
                    var list = this.GetRoomList(kind);
                    for (var i = 0; i < list.length; i++) {
                        if (list[i].wServerID == roomID) {
                            return list[i];
                        }
                    }
                }
            }
            return null;
        };
        /**刷新代理 */
        ServerInfo.prototype.onFlushAgent = function (callback) {
            var url = "";
            if (df.TEST_SERVER) {
                url = "http://testservice.foxuc.com/GetAppService.ashx?action=GetLogonAgent";
            }
            else {
                url = "http://service.foxuc.com/GetAppService.ashx?action=GetLogonAgent";
            }
            var params = "&StationID=" + df.STATION_ID;
            var result = [];
            var onCompleteHandler = function (e) {
                console.log("请求成功");
                //保存信息
                var jsonData = JSON.parse(e.target.response);
                if (null == jsonData || !jsonData.Result)
                    return null;
                jsonData = jsonData.Data;
                if (jsonData && jsonData.list) {
                    if (jsonData.list.length > 0) {
                        for (var i = 0; i < jsonData.list.length; i++) {
                            var agentInfo = { id: "", addr: "", domain: "", port: 0 };
                            var agent = jsonData.list[i];
                            agentInfo.id = agent.AgentID;
                            agentInfo.addr = agent.ServiceAddr;
                            agentInfo.domain = agent.ServiceDomain.trim();
                            agentInfo.port = Number(agent.ServicePort);
                            result.push(agentInfo);
                        }
                    }
                }
                if (null != callback) {
                    callback(result);
                }
            };
            var onErrorHandler = function (e) {
                console.log("代理列表请求失败");
                return null;
            };
            utils.HttpRequest.createHttpRequest(this, url, params, egret.HttpMethod.POST, onCompleteHandler, onErrorHandler);
        };
        /**
         * 更新代理列表
         */
        ServerInfo.prototype.upDateAgentInfo = function (wAgentID, agentInfo) {
            this.m_AgentList[wAgentID] = agentInfo;
        };
        ServerInfo.prototype.upDateRoomAgentInfo = function (wServerID, agentInfo) {
            this.m_ServerAgentList[wServerID] = agentInfo;
        };
        /**
         * 获取代理
         */
        ServerInfo.prototype.getAgent = function (wAgentID) {
            return this.m_AgentList[wAgentID];
        };
        ServerInfo.prototype.getServerAgent = function (wServerID) {
            var agentList = [];
            if (this.m_ServerAgentList[wServerID].length > 0) {
                for (var i = 0; i < this.m_ServerAgentList[wServerID].length; i++) {
                    var item = this.getAgent(this.m_ServerAgentList[wServerID][i].wAgentID);
                    if (item) {
                        var agentInfo = {
                            dwServiceAddr: item.dwServiceAddr,
                            szServiceDomain: item.szServiceDomain,
                            wServicePort: this.m_ServerAgentList[wServerID][i].wServicePort
                        };
                        agentList.push(agentInfo);
                    }
                }
            }
            return agentList;
        };
        /**
         * 设置网关服务
         */
        ServerInfo.prototype.setAccessServerInfo = function (info) {
            this.m_AccessList = info;
        };
        ServerInfo.prototype.getAccessServer = function () {
            return this.m_AccessList;
        };
        /**
         * 约战配置
         */
        ServerInfo.prototype.setOptionList = function (wKind, option) {
            if (null == this.m_Optionlist[wKind])
                this.m_Optionlist[wKind] = [];
            this.m_Optionlist[wKind].push(option);
        };
        ServerInfo.prototype.getOptionList = function () {
            return this.m_Optionlist;
        };
        /**
         * 附加配置
         */
        ServerInfo.prototype.setOptionSpecialList = function (wKind, option) {
            if (null == this.m_OptionSpecialList[wKind])
                this.m_OptionSpecialList[wKind] = [];
            this.m_OptionSpecialList[wKind].push(option);
        };
        ServerInfo.prototype.getOptionSpecialList = function () {
            return this.m_OptionSpecialList;
        };
        /**
         * 重置
         */
        ServerInfo.prototype.resetServer = function () {
            this.m_LogonList = [];
            this.m_AgentList = {};
            this.m_RoomList = {};
            this.m_AccessList = [];
        };
        return ServerInfo;
    }());
    models.ServerInfo = ServerInfo;
})(models || (models = {}));
