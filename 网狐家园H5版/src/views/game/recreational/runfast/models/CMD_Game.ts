/**
 * 游戏定义
 */
namespace cmd {
    export namespace runfast {
        //游戏属性
        export const KIND_ID = 76;
        export const GAME_NAME = "跑得快";

        export const GAME_PLAYER = 4;
        export const MY_VIEW = 0;                    //自己视图
        export const LEFT_VIEW = 1;
        export const RIGHT_VIEW = 2;
        export const TOP_VIEW = 3;

        //手牌参数
        export const FULL_COUNT = 40;
        export const HAND_COUNT = 10;
        export const MAX_CARD_VALUE = 14;//手牌最大权重？

        //首出牌
        export const FIRST_OUT_CARD = 0x35;

        //关于游戏状态的定义？
        export const GAME_SCENE_FREE = 0;     //空闲状态
        export const GAME_SCENE_PLAY = 103;   //游戏状态

        //玩家状态
        export const USEX_NULL = 0;
        export const USEX_PLAYING = 1;
        export const USEX_DYNAMIC_JOIN = 2;

        //操作定义
        export const OPERATE_NULL = 0xFF;

        //服务端命令定义
        export const SUB_S_GAME_START = 100;   //游戏开始
        export const SUB_S_OUT_CARD = 101;     //出牌
        export const SUB_S_PASS_CARD = 102;    //过牌
        export const SUB_S_SHUT_CARD = 103;    //关牌
        export const SUB_S_START_CARD = 104;   //开始出牌？
        export const SUB_S_GAME_END = 105;     //游戏结束
        export const SUB_S_PHRASE = 106;       //玩家发言
        export const SUB_S_TRUSTEE = 107;      //托管消息
        export const SUB_S_TOTAL_SCORE = 108;  //游戏结算

        //客户端命令定义
        export const SUB_C_OUT_CARD = 1;//出牌
        export const SUB_C_SHUT_CARD = 2;//关牌
        export const SUB_C_TRUSTEE = 3;//托管
        export const SUB_C_PHRASE = 4;//发言
        export const SUB_C_ALLOT_CARD_DATA = 5;//配牌数据


        export class tagCustomConfig {
            public wPlayerCount;
            public wMaxBombCount;
            public bRandDisCard;

            constructor() {
                this.bRandDisCard = false;
                this.wPlayerCount = 4;
                this.wMaxBombCount = 0;
            }

            onInit(buffer: utils.ByteArray) {
                this.wPlayerCount = buffer.Pop_WORD();
                this.wMaxBombCount = buffer.Pop_WORD();
                this.bRandDisCard = buffer.Pop_BOOL();
            }
        }

        //空闲状态
        export class CMD_S_StatusFree {
            public lCellScore;//底分
            public lTurnScore: number[] = [0, 0, 0, 0];
            public lCollectScore: number[] = [0, 0, 0, 0];
            public CustomConfig: tagCustomConfig;//配置信息

            constructor(buffer: utils.ByteArray) {
                this.lCellScore = buffer.Pop_LONG();
                for (let i = 0; i < GAME_PLAYER; i++) {
                    this.lTurnScore[i] = buffer.Pop_SCORE();
                }
                for (let i = 0; i < GAME_PLAYER; i++) {
                    this.lCollectScore[i] = buffer.Pop_SCORE();
                }
                this.CustomConfig = new tagCustomConfig();
                this.CustomConfig.onInit(buffer);
            }
        }

        //游戏状态
        export class CMD_S_StatusPlay {
            //游戏变量
            public lCellScore;//单元计分
            wCurrentUser;
            wShutCardUser;
            CustomConfig: tagCustomConfig;
            bTrustee = utils.allocArray<Boolean>(4, Boolean);//托管信息

            //状态信息
            bShutCardStatus: boolean;
            bReportSingle = utils.allocArray<Boolean>(4, Boolean);//报单信息

            //出牌信息
            wTurnWiner;//胜利玩家
            cbTurnCardCount;//出牌数目
            cbTurnCardData = utils.allocArray<Number>(HAND_COUNT, Number);

            //扑克信息
            cbHandCardData = utils.allocArray<Number>(HAND_COUNT, Number);//手牌
            cbHandCardCount = utils.allocArray<Number>(GAME_PLAYER, Number);//玩家手牌数量

            //历史积分
            lTurnScore = utils.allocArray<Number>(GAME_PLAYER, Number);
            lCollectScore = utils.allocArray<Number>(GAME_PLAYER, Number);
        }

        //发送扑克
        export class CMD_S_GameStart {
            wCurrentUser;//当前玩家
            wShutCardUser;//关牌玩家
            wStartChairId;//开始发牌玩家
            cbCardCount = utils.allocArray<Number>(GAME_PLAYER, Number);//牌的总数量
            cbCardData = utils.allocArray<Number>(HAND_COUNT, Number);//当前玩家扑克列表

            onInit(buffer: utils.ByteArray) {
                this.wCurrentUser = buffer.Pop_WORD();
                this.wShutCardUser = buffer.Pop_WORD();
                this.wStartChairId = buffer.Pop_WORD();
                for(let n = 0; n < GAME_PLAYER; n++) {
                    this.cbCardCount[n] = buffer.Pop_Byte();
                }
                for(let n = 0; n < HAND_COUNT; n++) {
                    this.cbCardData[n] = buffer.Pop_Byte();
                }
            }
        }

        //用户出牌
        export class CMD_S_OutCar {
            bTrustee: boolean;//是否托管
            bReportSingle: boolean;//是否报单
            cbCardType;//出牌类型
            cbCardCount;//出牌数目
            cbCardData = utils.allocArray<Number>(HAND_COUNT, Number);
        }

        //放弃出牌玩家
        export class CMD_S_PassCard {
            wPassCardUser;
        }

        //关牌玩家
        export class CMD_S_ShutCard {
            wShutCardUser;
        }

        //开始出牌
        export class CMD_S_StartCard {
            bTurnOver: boolean;
            wCurrentUser;//当前玩家
        }

        //玩家发言
        export class CMD_S_Phrase {
            wPhraseUser;//胜利玩家
            nPhraseIndex;//发言索引
        }

        //游戏结束
        export class CMD_S_GameEnd {
            //游戏信息
            wWinPlayer;
            wShutCardUser;//关牌用户，关牌有且只能有一个?
            cbHandCardCount = utils.allocArray<Number>(GAME_PLAYER, Number);//所有玩家剩余扑克数量
            cbHandCardData = utils.alloc2Array<Number>(GAME_PLAYER, HAND_COUNT, Number);//剩余扑克
            cbLastOutCard = utils.allocArray<Number>(HAND_COUNT, Number);//最后出牌列表
            cbLastOutCardCount;

            //积分变更
            lCellScore;//单元积分
            cbBombCount = utils.allocArray<Number>(GAME_PLAYER, Number);//炸弹数目->每个玩家的炸弹数量
            lGameScore = utils.allocArray<Number>(GAME_PLAYER, Number);
        }

        //托管消息
        export class CMD_S_TRUSTEE {
            wChairID;//托管用户
            bTrustee;//托管消息
        }

        //用户出牌
        export class CMD_C_OutCard {
            cbCardCount;						//出牌数目
            cbCardData = utils.allocArray<Number>(HAND_COUNT, Number);				//扑克数据
        }

        //用户关牌
        export class CMD_C_ShutCard {
            bShutCard: boolean;							//关牌标识
        }

        //发送语音
        export class CMD_C_Phrase {
            nPhraseIndex;						//短语标识
        }

        //托管消息
        export class CMD_C_TRUSTEE {
            bTrustee: boolean;                            //托管消息
        }

        //配置扑克
        export class CMD_C_AllotCard {
            cbAllotFlag;							//配牌标识
            cbCardData = utils.alloc2Array<Number>(GAME_PLAYER, 10, Number);			//扑克列表
        }
    }
}