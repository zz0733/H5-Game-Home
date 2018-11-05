/**
 * 服务器管理
 */
namespace models {

    /**
     * 代理
     */
    export class Agent {
        public wAgentLevel: number = 0;
        public dwServiceAddr: number = 0;
        public szServiceDomain: string = "";

        constructor(wAgentLevel, dwServiceAddr, szServiceDomain) {
            this.wAgentLevel = wAgentLevel;
            this.dwServiceAddr = dwServiceAddr;
            this.szServiceDomain = szServiceDomain;
        }
    }
    export class AgentServer {
        public wAgentID: number = 0;
        public wServicePort: number = 0;
        constructor(wAgentID, wServicePort) {
            this.wAgentID = wAgentID;
            this.wServicePort = wServicePort;
        }
    }

    /** 约战相关
     * 附加配置
     */
    class ItemsSpcial {
        public type: number = 0;
        public describe: string = "";
        public price: number = 0;
        public min: number = 0;
        public max: number = 0;
        public card: number = 0;
        public value: number = 0;

        constructor(data: any) {
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
        };
    }

    /**
     * 约战配置
     */
    export class Option {
        public wPlayerCount: number = 0;
        public wOptionMask: number = 0;

        //AA约战
        public wSuportPayType: number = 0;
        public cbOptionCount: number = 0;
        //视频费用 (新增)
        public lVideoIngot_User: number = 0;
        public lVideoRoomCard_User: number = 0;
        public lVideoIngot_Owner: number = 0;
        public lVideoRoomCard_Owner: number = 0;
        public lMinBaseScore: number = 0;
        public lMaxBaseScore: number = 0;
        public wPlayCount: number[] = [];
        public dwPlayTime: number[] = [];
        public lConsumeIngot: number[] = [];
        public lRoomCard: number[] = [];
        public lConsumeIngot_Owner: number[] = [];
        public lRoomCard_Owner: number[] = [];

        constructor() {

        }
    }
    /**
     * 附加配置
     */
    export class OptionSpecial {
        public wCount: number = 0;
        public name: string = "";
        public count: number = 0;
        public type: number = 0;
        public min: number = 0;
        public max: number = 0;
        public items: ItemsSpcial[] = [];

        public setItem(data: any): void {
            let item = new ItemsSpcial(data);
            this.items.push(item);
        }
    }

    export class ServerInfo {
        /**
        * 登录列表
        */
        private m_LogonList = [];

        /**
         * 代理列表
         */
        private m_AgentList: { [key: number]: Agent } = {}

        /**
         * 代理列表
         */
        private m_ServerAgentList: { [key: number]: AgentServer[] } = {};

        /**
         * 游戏列表
         */
        private m_RoomList: { [key: number]: models.GameServerItem[] } = {};

        /**
         * 网关列表 
         */
        private m_AccessList = [];

        /**
         * 比赛列表
         */
        private m_MatchList: { [key: number]: models.GameServerItem[] } = {};

        /**约战
         * 约战配置
         */
        private m_Optionlist: { [key: number]: Option[] } = {};

        /**约战
         * 游戏选项
         * 附加配置
         */
        private m_OptionSpecialList: { [key: number]: OptionSpecial[] } = {};

        /**
         * 约战列表
         */
        public m_CurBattle: battle.BattleTableItem;
        public m_BattleList: battle.BattleTableItem[] = [];
        public m_BattleParamList: battle.BattleParam[] = [];

        /**
         * 更新时间
         */
        public _lUpdateTime: number = 0;

        /**
         * 当前游戏ID
         */
        public m_CurKindID: number = df.INVALID_WORD;

        /**被锁服务ID */
        public m_LockedServerID: number = df.INVALID_WORD;

        /**
         * 当前游戏服务ID
         */
        public m_CurServerID: number = df.INVALID_WORD;

        /**
         * 构造
         */
        constructor() {
            this.m_CurBattle = null;
        }

        /**
         * 更新列表
         */
        public UpdataRoomInfo(info: any) {

            this.m_RoomList = info;
        }

        /**
         * 更新比赛列表
         */
        public UpdataMatchInfo(info: any) {
            this.m_MatchList = info;
        }

        /**
         * 获取房间个数
         */
        public GetGameRoomCount(kindID) {

            if (kindID == df.INVALID_WORD) return;
            const kind = kindID ? kindID : this.m_CurKindID;

            if (kind != df.INVALID_WORD) return this.m_RoomList[kindID].length;

            return 0;
        }

        /**
         * 获取房间列表
         */
        public GetRoomList(kindID: number) {
            if (kindID == df.INVALID_WORD) return;
            const kind = kindID ? kindID : this.m_CurKindID;

            if (null != this.m_RoomList[kindID])
                return this.m_RoomList[kindID];

            return null;
        }

        /**获取房间 */
        public GetRoomInfo(serverID?: number, kindID?: number) {
            let roomID = 0;
            if (serverID == 0 || null == serverID) {
                roomID = this.m_CurServerID;
            } else {
                roomID = serverID;
            }

            let kind = 0;
            if (kindID == 0 || null == kindID) {
                kind = this.m_CurKindID;
            } else {
                kind = kindID;
            }

            //查找
            if (0 != roomID && 0 != kind) {
                if (null != this.GetRoomList(kind)) {
                    let list = this.GetRoomList(kind)
                    for (let i = 0; i < list.length; i++) {
                        if (list[i].wServerID == roomID) {
                            return list[i];
                        }
                    }
                }
            }

            return null;
        }


        /**刷新代理 */
        public onFlushAgent(callback?: any) {
            let url: string = "";

            if (df.TEST_SERVER) {
                url = "http://testservice.foxuc.com/GetAppService.ashx?action=GetLogonAgent";
            } else {
                url = "http://service.foxuc.com/GetAppService.ashx?action=GetLogonAgent";
            }

            const params = "&StationID=" + df.STATION_ID;

            let result:any[] = [];

            let onCompleteHandler = (e: egret.Event) => {
                console.log("请求成功");
                //保存信息
                let jsonData = JSON.parse(e.target.response);
                if (null == jsonData || !jsonData.Result)  return null;

                jsonData = jsonData.Data;
                if (jsonData && jsonData.list) {
                    if (jsonData.list.length > 0) {
                        for (let i = 0; i < jsonData.list.length; i++) {
                            let agentInfo = {id:"",addr:"",domain:"",port:0};
                            let agent = jsonData.list[i];
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

            let onErrorHandler = (e: egret.Event) => {
                console.log("代理列表请求失败");  
                return null;
            }

            utils.HttpRequest.createHttpRequest(this, url, params, egret.HttpMethod.POST, onCompleteHandler, onErrorHandler);
        }

        /**
         * 更新代理列表
         */
        public upDateAgentInfo(wAgentID: number, agentInfo: Agent) {
            this.m_AgentList[wAgentID] = agentInfo;
        }
        public upDateRoomAgentInfo(wServerID: number, agentInfo: AgentServer[]) {
            this.m_ServerAgentList[wServerID] = agentInfo;
        }

        /**
         * 获取代理
         */
        public getAgent(wAgentID): Agent {
            return this.m_AgentList[wAgentID];
        }
        public getServerAgent(wServerID) {
            let agentList: any[] = [];
            if (this.m_ServerAgentList[wServerID].length > 0) {

                for (var i = 0; i < this.m_ServerAgentList[wServerID].length; i++) {
                    let item = this.getAgent(this.m_ServerAgentList[wServerID][i].wAgentID);
                    if (item) {
                        let agentInfo = {
                            dwServiceAddr: item.dwServiceAddr,
                            szServiceDomain: item.szServiceDomain,
                            wServicePort: this.m_ServerAgentList[wServerID][i].wServicePort
                        };
                        agentList.push(agentInfo);
                    }
                }
            }
            return agentList;
        }

        /**
         * 设置网关服务
         */
        public setAccessServerInfo(info: any) {
            this.m_AccessList = info;
        }
        public getAccessServer() {
            return this.m_AccessList;
        }

        /**
         * 约战配置
         */
        public setOptionList(wKind: number, option: any) {
            if (null == this.m_Optionlist[wKind])
                this.m_Optionlist[wKind] = [];

            this.m_Optionlist[wKind].push(option);
        }
        public getOptionList() {
            return this.m_Optionlist;
        }

        /**
         * 附加配置
         */
        public setOptionSpecialList(wKind: number, option: any) {
            if (null == this.m_OptionSpecialList[wKind])
                this.m_OptionSpecialList[wKind] = [];

            this.m_OptionSpecialList[wKind].push(option);
        }
        public getOptionSpecialList() {
            return this.m_OptionSpecialList;
        }

        /**
         * 重置
         */
        public resetServer() {
            this.m_LogonList = [];
            this.m_AgentList = {};
            this.m_RoomList = {};
            this.m_AccessList = [];
        }
    }
}