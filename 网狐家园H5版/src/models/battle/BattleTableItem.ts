namespace battle {
    export class BattleTableItem {
        public wTableID: number;   									//桌子标识2
        public wServerID: number;    								//房间标识4
        public dwOwnerID: number;     								//用户标识8
        public dwMappedNum: number; 								//映射编号12
        public szPassword: string;  				                //桌子密码78

        //群组信息
        public dwGroupID: number;         							//群组标识82
        public dwGroupCreaterID: number;  							//群主标识86

        //房间信息
        public wKindID: number;         							//类型标识88
        public wServerPort: number;    								//房间端口90
        public dwServerAddrDX: number;  							//电信地址94
        public szServerDomain: string  				                //房间域名220

        //创建信息
        public dwCreateTime: number     							//创建时间224

        //配置信息
        public wKindID1: number;         							//类型标识226
        public wPlayerCount: number    							    //游戏人数228
        public cbSettleKind: number;    							//结算方式229
        public cbVideoMode: number;     							//视频模式230
        public cbForbidSameIP: number;  							//禁止同IP231
        public wPlayCount: number;      							//游戏局数233
        public dwPlayTime: number;       							//游戏时长237
        public lBaseScore: number;       							//游戏底分245
        public lConsumeCount: number;    							//消耗数量253

        //结算信息
        public wPayType: number;        							//支付类型255
        public cbCurrencyKind: number;  							//货币类型256

        constructor(buffer: utils.ByteArray) {
            this.onInit(buffer);
        }

        public onInit(buffer: utils.ByteArray) {
            this.wTableID = buffer.Pop_WORD();                      //桌子标识2
            this.wServerID = buffer.Pop_WORD();                     //房间标识4
            this.dwOwnerID = buffer.Pop_DWORD();                    //用户标识8
            this.dwMappedNum = buffer.Pop_DWORD();                  //映射编号12
            this.szPassword = buffer.Pop_UTF16(df.LEN_PASSWORD);    //桌子密码78

            //群组信息
            this.dwGroupID = buffer.Pop_DWORD();                    //群组标识82
            this.dwGroupCreaterID = buffer.Pop_DWORD();             //群主标识86

            //房间信息
            this.wKindID = buffer.Pop_WORD();                       //类型标识88
            this.wServerPort = buffer.Pop_WORD();                   //房间端口90
            this.dwServerAddrDX = buffer.Pop_DWORD();               //电信地址94
            this.szServerDomain = buffer.Pop_UTF16(df.LEN_DOMAIN);  //房间域名220

            //创建信息
            this.dwCreateTime = buffer.Pop_DWORD();                 //创建时间224

            //配置信息
            this.wKindID1 = buffer.Pop_WORD();                       //类型标识226
            this.wPlayerCount = buffer.Pop_WORD();                  //游戏人数228
            this.cbSettleKind = buffer.Pop_Byte();                  //结算方式229
            this.cbVideoMode = buffer.Pop_Byte();                   //视频模式230
            this.cbForbidSameIP = buffer.Pop_Byte();                //禁止同IP231
            this.wPlayCount = buffer.Pop_WORD();                    //游戏局数233
            this.dwPlayTime = buffer.Pop_DWORD();                   //游戏时长237
            this.lBaseScore = buffer.Pop_SCORE();                   //游戏底分245
            this.lConsumeCount = buffer.Pop_SCORE();                //消耗数量253

            //结算信息
            this.wPayType = buffer.Pop_WORD();                      //支付类型255
            this.cbCurrencyKind = buffer.Pop_Byte();                //货币类型256
        }
    }
}