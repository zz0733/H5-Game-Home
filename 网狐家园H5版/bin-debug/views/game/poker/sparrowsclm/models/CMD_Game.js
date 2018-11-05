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
 * 游戏定义
 */
var cmd;
(function (cmd) {
    var sparrowsclm;
    (function (sparrowsclm) {
        sparrowsclm.GAME_PLAYER = 4; //玩家人数
        sparrowsclm.PLAYER_COUNT = 3; //游戏人数
        sparrowsclm.MY_VIEW = 0; //自己视图
        sparrowsclm.LEFT_VIEW = 1;
        sparrowsclm.RIGHT_VIEW = 2;
        sparrowsclm.MAX_WEAVE = 3; //最大组合
        sparrowsclm.MAX_RIGHT_COUNT = 2;
        sparrowsclm.MAX_INDEX = 27; //最大索引
        sparrowsclm.MAX_COUNT = 11; //最大数目
        sparrowsclm.MAX_REPERTORY = 72; //最大库存
        sparrowsclm.GAME_SCENE_FREE = 0; //空闲状态
        sparrowsclm.GS_PLAYING = 102; //游戏状态
        sparrowsclm.GAME_ACTION_NULL = 0x00; //无定义
        sparrowsclm.GAME_ACTION_WIND = 0x01; //刮风
        sparrowsclm.GAME_ACTION_RAIN = 0x02; //下雨
        sparrowsclm.GAME_ACTION_CHI_HU = 0x04; //胡牌
        sparrowsclm.OUT_CARD_JIA_GANG = 1; //加杠标识
        sparrowsclm.OUT_CARD_QING_HU = 2; //请胡标识
        sparrowsclm.SUB_S_GAME_START = 100; //游戏开始
        sparrowsclm.SUB_S_OUT_CARD = 101; //用户出牌
        sparrowsclm.SUB_S_SEND_CARD = 102; //发送扑克
        sparrowsclm.SUB_S_NOGANG_INFO = 103; //禁杠扑克
        sparrowsclm.SUB_S_OPERATE_NOTIFY = 104; //操作提示
        sparrowsclm.SUB_S_OPERATE_RESULT = 105; //操作结果
        sparrowsclm.SUB_S_CHIHU_RESULT = 107; //吃胡命令 
        sparrowsclm.SUB_S_GAME_END = 108; //游戏结束
        sparrowsclm.SUB_S_TRUSTEE = 109; //用户托管
        sparrowsclm.SUB_S_VOICEPHRASE = 110; //语言短语
        sparrowsclm.SUB_S_GAME_ACTION_NOTIFY = 112; //动作提醒
        sparrowsclm.SUB_S_GAME_RULE_SETTING = 113; //规则设置
        sparrowsclm.SUB_S_GAME_RULE_NOTIFY = 114; //规则提醒
        sparrowsclm.SUB_S_BAO_HU_NOTIFY = 115; //报胡提醒
        sparrowsclm.SUB_S_TRANSFER_NOTIFY = 116; //呼叫转移 
        sparrowsclm.SUB_C_OUT_CARD = 1; //出牌命令
        sparrowsclm.SUB_C_OPERATE_CARD = 2; //操作扑克
        sparrowsclm.SUB_C_TRUSTEE = 3; //用户托管
        sparrowsclm.SUB_C_SEND_CARD = 4; //发送扑克  
        sparrowsclm.SUB_C_VOICEPHRASE = 5; //语音短语
        sparrowsclm.SUB_C_GAME_RULE_SETTING = 7; //规则设置
        sparrowsclm.SUB_C_USER_BAO_HU = 8; //报胡命令
        sparrowsclm.WIK_NULL = 0x00; //没有类型
        sparrowsclm.WIK_LEFT = 0x01; //左吃类型
        sparrowsclm.WIK_PENG = 0x02; //碰牌类型
        sparrowsclm.WIK_GANG = 0x04; //杠牌类型100
        sparrowsclm.WIK_JIA_GANG = 0x08; //杠牌类型
        sparrowsclm.WIK_BAO_HU = 0x10; //报胡类型
        sparrowsclm.WIK_QING_HU = 0x20; //请胡类型100000
        sparrowsclm.WIK_CHI_HU = 0x40; //吃胡类型1000000
        sparrowsclm.WIK_DIAN_PAO = 0x80; //点炮
        //扩展动作
        sparrowsclm.WIK_EX_TIAN_HU = 0x0100; //天胡类型  
        sparrowsclm.WIK_EX_DI_HU = 0x0200; //地胡类型
        sparrowsclm.WIK_EX_FANG_PAO = 0x0400; //放炮动作
        sparrowsclm.WIK_EX_CHI_HU = 0x0800; //吃胡动作                
        sparrowsclm.WIK_EX_ZIMO = 0x1000; //自摸动作
        sparrowsclm.WIK_EX_GANG_PAO = 0x2000; //杠上炮
        sparrowsclm.WIK_EX_GANG_KAI = 0x4000; //杠上花
        sparrowsclm.WIK_EX_QING_HU = 0x8000; //请胡类型
        sparrowsclm.WIK_EX_LIU_JU = 0x0110; //流局
        sparrowsclm.WIK_EX_CHI_BAO_HU = 0x0001; //抓胡类型  
        sparrowsclm.WIK_EX_CHI_QING_HU = 0x0002; //抓胡类型  
        //胡牌牌型
        sparrowsclm.CHR_PING_HU = 0x00000001; //平胡1	
        sparrowsclm.CHR_DUI_DUI_HU = 0x00000002; //对对胡2
        sparrowsclm.CHR_QING_DUI = 0x00000004; //清对对3
        sparrowsclm.CHR_JIANG_DUI = 0x00000008; //将对对4
        sparrowsclm.CHR_QING_YI_SE = 0x00000010; //清一色5
        sparrowsclm.CHR_WU_DUI = 0x00000020; //五小对6
        sparrowsclm.CHR_QING_WU_DUI = 0x00000040; //清五对7
        sparrowsclm.CHR_JIANG_WU_DUI = 0x00000080; //将五对8
        sparrowsclm.CHR_LONG_WU_DUI = 0x00000100; //龙五对9
        sparrowsclm.CHR_QLONG_WU_DUI = 0x00000200; //清龙五对10
        sparrowsclm.CHR_JLONG_WU_DUI = 0x00000400; //将龙五对11
        sparrowsclm.CHR_QJLONG_WU_DUI = 0x00000800; //清将龙五对12
        sparrowsclm.CHR_TAKE_YI_JIU = 0x00001000; //带幺九13
        sparrowsclm.CHR_QING_TAKE_YI_JIU = 0x00008000; //清幺九 16
        sparrowsclm.CHR_DUI_TAKE_YI_JIU = 0x00002000; //对对胡带幺九 14
        sparrowsclm.CHR_LDUI_TAKE_YI_JIU = 0x00004000; //龙五对带幺九 15
        sparrowsclm.CHR_TIAN_HU = 0x00010000; //天胡17
        sparrowsclm.CHR_DI_HU = 0x00020000; //地胡 18
        //加倍项
        sparrowsclm.CHR_BREAK_YI_JIU = 0x00100000; //断幺九 21
        sparrowsclm.CHR_GANG_KAI = 0x00200000; //杠上花 22
        sparrowsclm.CHR_GANG_PAO = 0x00400000; //杠上炮 23
        sparrowsclm.CHR_QIANG_GANG = 0x00800000; //抢杠 24
        sparrowsclm.CHR_HAI_DI_LAO = 0x01000000; //海底捞25
        sparrowsclm.CHR_HAI_DI_PAO = 0x02000000; //海底炮26
        sparrowsclm.CHR_BAO_JIAO = 0x04000000; //报叫27
        sparrowsclm.MASK_CHI_HU_RIGHT = 0x0fffffff;
        sparrowsclm.MASK_COLOR = 0XF0; //花色掩码
        sparrowsclm.MASK_VALUE = 0X0F; //牌值掩码
        sparrowsclm.IDI_GAME_START = 1;
        sparrowsclm.IDI_OPERATE_CARD = 2;
        sparrowsclm.IDI_BAO_JIAO = 3;
        sparrowsclm.IDI_DLEAY_MATCH = 4;
        sparrowsclm.TIME_GAME_START = 20;
        sparrowsclm.TIME_OPERATE_CARD = 15;
        sparrowsclm.TIME_BAO_JIAO = 10;
        sparrowsclm.MS_NAME = {
            1: "[出牌命令]",
            2: "[操作扑克]",
            3: "[用户托管]",
            4: "[发送扑克]",
            5: "[语音短语]",
            7: "[规则设置]",
            8: "[报胡命令]",
            100: "[游戏开始]",
            101: "[用户出牌]",
            102: "[发送扑克]",
            104: "[操作提示]",
            105: "[操作结果]",
            107: "[吃胡命令]",
            108: "[游戏结束]",
            109: "[用户托管]",
            110: "[语言短语]",
            112: "[动作提醒]",
            113: "[规则设置]",
            114: "[规则提醒]",
            115: "[报胡提醒]",
            116: "[呼叫转移]"
        };
        //结构定义
        var tagCustomOption = /** @class */ (function () {
            function tagCustomOption() {
            }
            return tagCustomOption;
        }());
        sparrowsclm.tagCustomOption = tagCustomOption;
        ;
        //组合子项
        var tagWeaveItem = /** @class */ (function () {
            function tagWeaveItem() {
                this.cbCardData = utils.allocArray(4, Number); //扑克值
                this.cbCardCount = [0, 0, 0, 0]; //扑克数,用于特殊杠牌，其它未定义
                this.cbWeaveKind = 0; //组合类型
                this.cbCenterCard = 0; //中心扑克
                this.cbPublicCard = -1; //***公开标志
                this.wProvideUser = 0; //***供应用户
                this.cbCardData = [0, 0, 0, 0]; //扑克值
                this.cbCardCount = [0, 0, 0, 0]; //扑克数,用于特殊
            }
            tagWeaveItem.prototype.onInit = function (buffer) {
                this.cbWeaveKind = buffer.Pop_Byte();
                this.cbCenterCard = buffer.Pop_Byte();
                this.cbPublicCard = buffer.Pop_Byte();
                this.wProvideUser = buffer.Pop_WORD();
                for (var i = 0; i < 4; i++) {
                    this.cbCardData[i] = buffer.Pop_Byte();
                }
                for (var i = 0; i < 4; i++) {
                    this.cbCardCount[i] = buffer.Pop_Byte();
                }
            };
            return tagWeaveItem;
        }());
        sparrowsclm.tagWeaveItem = tagWeaveItem;
        ;
        //游戏动作
        var tagGameAction = /** @class */ (function () {
            function tagGameAction() {
                this.cbActionType = 0;
                this.cbActionCode = 0;
                this.wOperaterUser = 0;
                this.wProvideUser = 0;
            }
            tagGameAction.prototype.onInit = function (buffer) {
                this.cbActionType = buffer.Pop_Byte();
                this.cbActionCode = buffer.Pop_Byte();
                this.wOperaterUser = buffer.Pop_WORD();
                this.wProvideUser = buffer.Pop_WORD();
            };
            return tagGameAction;
        }());
        sparrowsclm.tagGameAction = tagGameAction;
        //游戏规则
        var tagGameRuleParams = /** @class */ (function () {
            function tagGameRuleParams() {
                this.cbGamePlayer = 0;
                this.cbAllowJoin = 0;
                this.lBaseScore = 0;
            }
            tagGameRuleParams.prototype.onInit = function (buffer) {
                this.cbGamePlayer = buffer.Pop_Byte();
                this.cbAllowJoin = buffer.Pop_Byte();
                this.lBaseScore = buffer.Pop_SCORE();
            };
            return tagGameRuleParams;
        }());
        sparrowsclm.tagGameRuleParams = tagGameRuleParams;
        //动作信息
        var tagActionInfo = /** @class */ (function () {
            function tagActionInfo() {
                this.cbOperateCode = 0;
                this.wRecodeParam = 0;
            }
            tagActionInfo.prototype.onInit = function (buffer) {
                this.cbOperateCode = buffer.Pop_Byte();
                this.wRecodeParam = buffer.Pop_WORD();
            };
            return tagActionInfo;
        }());
        sparrowsclm.tagActionInfo = tagActionInfo;
        ;
        //结算信息
        var tagSettlementInfo = /** @class */ (function () {
            function tagSettlementInfo() {
                this.nWindFanShu = [0, 0]; //刮风番数
                this.nRainFanShu = [0, 0]; //下雨番数
                this.nChiHuFanShu = [0, 0, 0, 0]; //吃胡番数
                this.lTransferScore = 0;
            }
            tagSettlementInfo.prototype.onInit = function (buffer) {
                for (var i = 0; i < 2; i++) {
                    this.nWindFanShu[i] = buffer.Pop_INT();
                }
                for (var i = 0; i < 2; i++) {
                    this.nRainFanShu[i] = buffer.Pop_INT();
                }
                for (var i = 0; i < 4; i++) {
                    this.nChiHuFanShu[i] = buffer.Pop_INT();
                }
                this.lTransferScore = buffer.Pop_SCORE();
            };
            return tagSettlementInfo;
        }());
        sparrowsclm.tagSettlementInfo = tagSettlementInfo;
        ;
        //呼叫转移
        var tagTransferInfo = /** @class */ (function () {
            function tagTransferInfo() {
                this.lTransferScore = [0, 0, 0, 0]; //转移分数 
                this.cbTransferValid = 0;
                this.cbGameActionIndex = 0;
                this.cbTransferCount = 0;
            }
            tagTransferInfo.prototype.onInit = function (buffer) {
            };
            return tagTransferInfo;
        }());
        sparrowsclm.tagTransferInfo = tagTransferInfo;
        ;
        //转移子项
        var tagTransferItem = /** @class */ (function (_super) {
            __extends(tagTransferItem, _super);
            function tagTransferItem() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.bUserTransfer = [0, 0, 0, 0]; //转移标识
                return _this;
            }
            return tagTransferItem;
        }(tagTransferInfo));
        sparrowsclm.tagTransferItem = tagTransferItem;
        ;
        //空闲状态
        var CMD_S_StatusFree = /** @class */ (function () {
            function CMD_S_StatusFree(buffer) {
                this.bTrustee = [false, false, false, false]; //是否托管
                //历史积分
                this.lTurnScore = [0, 0, 0, 0]; //积分信息
                this.lCollectScore = [0, 0, 0, 0]; //积分信息
                this.wBankerUser = buffer.Pop_WORD();
                for (var i = 0; i < sparrowsclm.GAME_PLAYER; i++) {
                    this.bTrustee[i] = buffer.Pop_BOOL();
                }
                this.lCellScore = buffer.Pop_SCORE();
                this.bAllowJoin = buffer.Pop_BOOL();
                this.bIsRuleSetting = buffer.Pop_BOOL();
                for (var i = 0; i < sparrowsclm.GAME_PLAYER; i++) {
                    this.lTurnScore[i] = buffer.Pop_SCORE();
                }
                for (var i = 0; i < sparrowsclm.GAME_PLAYER; i++) {
                    this.lTurnScore[i] = buffer.Pop_SCORE();
                }
            }
            return CMD_S_StatusFree;
        }());
        sparrowsclm.CMD_S_StatusFree = CMD_S_StatusFree;
        //游戏状态
        var CMD_S_StatusPlay = /** @class */ (function () {
            function CMD_S_StatusPlay() {
                //禁止信息
                this.cbNoGangCard = [0, 0, 0]; //禁杠数据 
                //状态变量
                this.cbUserStatusnumber = [0, 0, 0, 0]; //用户状态
                this.cbDiscardCount = [0, 0, 0, 0]; //丢弃数目
                this.cbDiscardCard = utils.alloc2Array(sparrowsclm.GAME_PLAYER, 60, Number); //丢弃记录                          
                //扑克数据
                this.cbCardCount = [0, 0, 0, 0]; //扑克数目
                this.cbCardData = utils.alloc2Array(sparrowsclm.GAME_PLAYER, sparrowsclm.MAX_COUNT, Number); //扑克列表
                this.cbChiHuCardData = [0, 0, 0, 0]; //胡牌扑克 
                //组合扑克
                this.cbWeaveCount = [0, 0, 0, 0]; //组合数目
                this.WeaveItemArray = utils.alloc2Array(sparrowsclm.GAME_PLAYER, sparrowsclm.MAX_WEAVE, tagWeaveItem); //组合扑克
                this.cbHeapCardInfo = utils.alloc2Array(sparrowsclm.GAME_PLAYER, 2, Number); //堆牌信息
                //历史积分
                this.lTurnScore = [0, 0, 0, 0]; //积分信息
                this.lCollectScore = [0, 0, 0, 0]; //积分信息
                //标志变量
                this.bUserBaoFlag = [0, 0, 0, 0]; //报叫标志
                this.wUserHuKind = [0, 0, 0, 0]; //胡牌类型 
                this.nGameActionFanShu = utils.alloc2Array(sparrowsclm.GAME_PLAYER * 5, sparrowsclm.GAME_PLAYER, Number); //番数信息
                this.GameActionArray = utils.allocArray(sparrowsclm.GAME_PLAYER * 5, tagGameAction); //动作数组 
                this.TransferInfoArray = utils.allocArray(sparrowsclm.GAME_PLAYER - 1, tagTransferInfo); //转移数组
            }
            CMD_S_StatusPlay.prototype.onInit = function (buffer) {
                this.wBankerUser = buffer.Pop_WORD();
                this.wCurrentUser = buffer.Pop_WORD();
                this.wCurrBaoUser = buffer.Pop_WORD();
                this.lCellScore = buffer.Pop_SCORE();
                this.lSiceCount = buffer.Pop_LONG();
                for (var i = 0; i < 3; i++) {
                    this.cbNoGangCard[i] = buffer.Pop_Byte();
                }
                for (var i = 0; i < sparrowsclm.GAME_PLAYER; i++) {
                    this.cbUserStatusnumber[i] = buffer.Pop_Byte();
                }
                this.cbActionCard = buffer.Pop_Byte();
                this.cbActionMask = buffer.Pop_Byte();
                this.cbLeftCardCount = buffer.Pop_Byte();
                this.bSelfTrustee = buffer.Pop_BOOL();
                this.bAllowJoin = buffer.Pop_BOOL();
                this.wOutCardUser = buffer.Pop_WORD();
                this.cbOutCardData = buffer.Pop_Byte();
                for (var i = 0; i < sparrowsclm.GAME_PLAYER; i++) {
                    this.cbDiscardCount[i] = buffer.Pop_Byte();
                }
                for (var i = 0; i < sparrowsclm.GAME_PLAYER; i++) {
                    for (var j = 0; j < 60; j++) {
                        this.cbDiscardCard[i][j] = buffer.Pop_Byte();
                    }
                }
                for (var i = 0; i < sparrowsclm.GAME_PLAYER; i++) {
                    this.cbCardCount[i] = buffer.Pop_Byte();
                }
                for (var i = 0; i < sparrowsclm.GAME_PLAYER; i++) {
                    for (var j = 0; j < sparrowsclm.MAX_COUNT; j++) {
                        this.cbCardData[i][j] = buffer.Pop_Byte();
                    }
                }
                this.cbSendCardData = buffer.Pop_Byte();
                for (var i = 0; i < sparrowsclm.GAME_PLAYER; i++) {
                    this.cbChiHuCardData[i] = buffer.Pop_Byte();
                }
                for (var i = 0; i < sparrowsclm.GAME_PLAYER; i++) {
                    this.cbWeaveCount[i] = buffer.Pop_Byte();
                }
                for (var i = 0; i < sparrowsclm.GAME_PLAYER; i++) {
                    for (var j = 0; j < sparrowsclm.MAX_WEAVE; j++) {
                        var weaveItem = this.WeaveItemArray[i][j];
                        weaveItem.onInit(buffer);
                    }
                }
                this.wHeapHand = buffer.Pop_WORD();
                this.wHeapTail = buffer.Pop_WORD();
                for (var i = 0; i < sparrowsclm.GAME_PLAYER; i++) {
                    for (var j = 0; j < 2; j++) {
                        this.cbHeapCardInfo[i][j] = buffer.Pop_Byte();
                    }
                }
                for (var i = 0; i < sparrowsclm.GAME_PLAYER; i++) {
                    this.lTurnScore[i] = buffer.Pop_Byte();
                }
                for (var i = 0; i < sparrowsclm.GAME_PLAYER; i++) {
                    this.lCollectScore[i] = buffer.Pop_Byte();
                }
                for (var i = 0; i < sparrowsclm.GAME_PLAYER; i++) {
                    this.bUserBaoFlag[i] = buffer.Pop_Byte();
                }
                for (var i = 0; i < sparrowsclm.GAME_PLAYER; i++) {
                    this.wUserHuKind[i] = buffer.Pop_WORD();
                }
                this.cbGameActionCount = buffer.Pop_Byte();
                for (var i = 0; i < sparrowsclm.GAME_PLAYER * 5; i++) {
                    for (var j = 0; j < sparrowsclm.GAME_PLAYER; j++) {
                        this.nGameActionFanShu[i][j] = buffer.Pop_INT();
                    }
                }
                for (var i = 0; i < sparrowsclm.GAME_PLAYER * 5; i++) {
                    var action = this.GameActionArray[i];
                    action.onInit(buffer);
                }
                for (var i = 0; i < sparrowsclm.GAME_PLAYER - 1; i++) {
                    var transinfo = this.TransferInfoArray[i];
                    transinfo.onInit(buffer);
                }
            };
            return CMD_S_StatusPlay;
        }());
        sparrowsclm.CMD_S_StatusPlay = CMD_S_StatusPlay;
        ;
        //游戏开始
        var CMD_S_GameStart = /** @class */ (function () {
            function CMD_S_GameStart() {
                this.cbCardData = utils.allocArray(sparrowsclm.MAX_COUNT, Number); //扑克列表
                this.cbHeapCardInfo = utils.alloc2Array(sparrowsclm.GAME_PLAYER, 2, Number); //堆立信息
            }
            //构造buff
            CMD_S_GameStart.prototype.onInit = function (buffer) {
                this.lSiceCount = buffer.Pop_LONG();
                this.wBankerUser = buffer.Pop_WORD();
                this.wCurrentUser = buffer.Pop_WORD();
                this.wCurrBaoUser = buffer.Pop_WORD();
                this.cbUserAction = buffer.Pop_Byte();
                for (var i = 0; i < sparrowsclm.MAX_COUNT; i++) {
                    this.cbCardData[i] = buffer.Pop_Byte();
                }
                this.wHeapHead = buffer.Pop_WORD();
                this.wHeapTail = buffer.Pop_WORD();
                for (var i = 0; i < sparrowsclm.GAME_PLAYER; i++) {
                    for (var j = 0; j < 2; j++) {
                        this.cbHeapCardInfo[i][j] = buffer.Pop_Byte();
                    }
                }
            };
            return CMD_S_GameStart;
        }());
        sparrowsclm.CMD_S_GameStart = CMD_S_GameStart;
        ;
        //动作提醒
        var CMD_S_GAME_ACTION_NOTIFY = /** @class */ (function () {
            function CMD_S_GAME_ACTION_NOTIFY() {
                this.nPerUserFanCount = utils.allocArray(sparrowsclm.GAME_PLAYER, Number); //玩家番数
                this.GameAction = new tagGameAction();
            }
            CMD_S_GAME_ACTION_NOTIFY.prototype.onInit = function (buffer) {
                this.GameAction.onInit(buffer);
                for (var i = 0; i < sparrowsclm.GAME_PLAYER; i++) {
                    this.nPerUserFanCount[i] = buffer.Pop_INT();
                }
            };
            return CMD_S_GAME_ACTION_NOTIFY;
        }());
        sparrowsclm.CMD_S_GAME_ACTION_NOTIFY = CMD_S_GAME_ACTION_NOTIFY;
        ;
        //呼叫转移
        var CMD_S_TRANSFER_NOTIFY = /** @class */ (function () {
            function CMD_S_TRANSFER_NOTIFY() {
                this.lTransferScore = utils.allocArray(sparrowsclm.GAME_PLAYER, Number); //转移分数 
                this.cbGameActionIndex = 0;
                this.cbTransferCount = 0;
            }
            CMD_S_TRANSFER_NOTIFY.prototype.onInit = function (buffer) {
                this.cbGameActionIndex = buffer.Pop_Byte();
                this.cbTransferCount = buffer.Pop_Byte();
                for (var i = 0; i < sparrowsclm.GAME_PLAYER; i++) {
                    this.lTransferScore[i] = buffer.Pop_SCORE();
                }
            };
            return CMD_S_TRANSFER_NOTIFY;
        }());
        sparrowsclm.CMD_S_TRANSFER_NOTIFY = CMD_S_TRANSFER_NOTIFY;
        ;
        //出牌命令
        var CMD_S_OutCard = /** @class */ (function () {
            function CMD_S_OutCard() {
                this.bTrusteeOut = false;
                this.wOutCardUser = df.INVALID_ITEM;
                this.cbOutCardData = df.INVALID_BYTE;
            }
            CMD_S_OutCard.prototype.onInit = function (buffer) {
                this.bTrusteeOut = buffer.Pop_BOOL();
                this.wOutCardUser = buffer.Pop_WORD();
                this.cbOutCardData = buffer.Pop_Byte();
            };
            return CMD_S_OutCard;
        }());
        sparrowsclm.CMD_S_OutCard = CMD_S_OutCard;
        ;
        //发送禁杠
        var CMD_S_NOGANG = /** @class */ (function () {
            function CMD_S_NOGANG() {
                this.cbNoGangCard = [0, 0, 0]; //禁杠数据
            }
            CMD_S_NOGANG.prototype.onInit = function (buffer) {
                for (var i = 0; i < 3; i++) {
                    this.cbNoGangCard[i] = buffer.Pop_Byte();
                }
            };
            return CMD_S_NOGANG;
        }());
        sparrowsclm.CMD_S_NOGANG = CMD_S_NOGANG;
        ;
        //发送扑克
        var CMD_S_SendCard = /** @class */ (function () {
            function CMD_S_SendCard() {
                this.cbCardData = 0;
                this.cbActionMask = 0;
                this.wCurrentUser = df.INVALID_CHAIR;
                this.bTail = false;
            }
            CMD_S_SendCard.prototype.onInit = function (buffer) {
                this.cbCardData = buffer.Pop_Byte();
                this.cbActionMask = buffer.Pop_Byte();
                this.wCurrentUser = buffer.Pop_WORD();
                this.bTail = buffer.Pop_BOOL();
            };
            return CMD_S_SendCard;
        }());
        sparrowsclm.CMD_S_SendCard = CMD_S_SendCard;
        ;
        //操作提示
        var CMD_S_OperateNotify = /** @class */ (function () {
            function CMD_S_OperateNotify() {
                this.wResumeUser = df.INVALID_CHAIR;
                this.cbActionMask = 0;
                this.cbActionCard = 0;
            }
            CMD_S_OperateNotify.prototype.onInit = function (buffer) {
                this.wResumeUser = buffer.Pop_WORD();
                this.cbActionMask = buffer.Pop_Byte();
                this.cbActionCard = buffer.Pop_Byte();
            };
            return CMD_S_OperateNotify;
        }());
        sparrowsclm.CMD_S_OperateNotify = CMD_S_OperateNotify;
        ;
        //操作命令
        var CMD_S_OperateResult = /** @class */ (function () {
            function CMD_S_OperateResult() {
                this.cbOperateCard = [0, 0, 0]; //操作扑克
                this.wOperateUser = df.INVALID_CHAIR;
                this.wProvideUser = df.INVALID_CHAIR;
                this.cbOperateCode = 0;
                this.cbUserAction = 0;
                this.cbExcludeCard = 0;
            }
            CMD_S_OperateResult.prototype.onInit = function (buffer) {
                this.wOperateUser = buffer.Pop_WORD();
                this.wProvideUser = buffer.Pop_WORD();
                this.cbOperateCode = buffer.Pop_Byte();
                for (var i = 0; i < 3; i++) {
                    this.cbOperateCard[i] = buffer.Pop_Byte();
                }
                this.cbUserAction = buffer.Pop_Byte();
                this.cbExcludeCard = buffer.Pop_Byte();
            };
            return CMD_S_OperateResult;
        }());
        sparrowsclm.CMD_S_OperateResult = CMD_S_OperateResult;
        ;
        //胡牌命令
        var CMD_S_ChiHuResult = /** @class */ (function () {
            function CMD_S_ChiHuResult() {
                this.cbCardData = utils.allocArray(sparrowsclm.MAX_COUNT, Number); //玩家扑克
                this.wOperateUser = df.INVALID_CHAIR;
                this.wProvideUser = df.INVALID_CHAIR;
                this.wUserHuKind = 0;
                this.cbOperateCard = 0;
                this.bMultplePao = false;
                this.bQingHuFlag = false;
                this.cbCardCount = 0;
            }
            CMD_S_ChiHuResult.prototype.onInit = function (buffer) {
                this.wOperateUser = buffer.Pop_WORD();
                this.wProvideUser = buffer.Pop_WORD();
                this.wUserHuKind = buffer.Pop_WORD();
                this.cbOperateCard = buffer.Pop_Byte();
                this.bMultplePao = buffer.Pop_BOOL();
                this.bQingHuFlag = buffer.Pop_BOOL();
                ;
                this.cbCardCount = buffer.Pop_Byte();
                for (var i = 0; i < sparrowsclm.MAX_COUNT; i++) {
                    this.cbCardData[i] = buffer.Pop_Byte();
                }
            };
            return CMD_S_ChiHuResult;
        }());
        sparrowsclm.CMD_S_ChiHuResult = CMD_S_ChiHuResult;
        ;
        //游戏结束(181)
        var CMD_S_GameEnd = /** @class */ (function () {
            function CMD_S_GameEnd() {
                //结束信息
                this.wProvideUser = utils.allocArray(sparrowsclm.GAME_PLAYER, Number); //供应用户
                this.cbGengCount = utils.allocArray(sparrowsclm.GAME_PLAYER, Number); //根牌数目	
                this.dwChiHuKind = utils.allocArray(sparrowsclm.GAME_PLAYER, Number); //胡牌类型
                this.dwChiHuRight = utils.alloc2Array(sparrowsclm.GAME_PLAYER, sparrowsclm.MAX_RIGHT_COUNT, Number); //胡牌类型	
                //积分信息
                this.lGameScore = utils.allocArray(sparrowsclm.GAME_PLAYER, Number); //游戏积分
                this.lZiMoAddScore = utils.alloc2Array(sparrowsclm.GAME_PLAYER, sparrowsclm.GAME_PLAYER, Number); //自摸加分	
                //扑克信息
                this.cbCardCount = utils.allocArray(sparrowsclm.GAME_PLAYER, Number); //扑克数目
                this.cbCardData = utils.alloc2Array(sparrowsclm.GAME_PLAYER, sparrowsclm.MAX_COUNT, Number); //扑克数据
                //牌型信息
                this.cbUserCardType = utils.allocArray(sparrowsclm.GAME_PLAYER, Number); //用户牌型(0 为花猪 1为未下叫 2为下叫 3为胡牌) 
                this.cbUserGengCount = utils.allocArray(sparrowsclm.GAME_PLAYER, Number); //玩家根数目
                this.cbUserQiaCount = utils.allocArray(sparrowsclm.GAME_PLAYER, Number); //玩家掐数目
                this.cbCheckJiaoBeiShu = utils.allocArray(sparrowsclm.GAME_PLAYER, Number); //查叫倍数  
                //游戏详情
                this.UserSettlementInfo = utils.allocArray(sparrowsclm.GAME_PLAYER, tagSettlementInfo); //结算信息   
            }
            CMD_S_GameEnd.prototype.onInit = function (buffer) {
                this.lCellScore = buffer.Pop_SCORE();
                for (var i = 0; i < sparrowsclm.GAME_PLAYER; i++) {
                    this.wProvideUser[i] = buffer.Pop_WORD();
                }
                this.wEscapeUser = buffer.Pop_WORD();
                this.cbEscapeFanShu = buffer.Pop_Byte();
                for (var i = 0; i < sparrowsclm.GAME_PLAYER; i++) {
                    this.cbGengCount[i] = buffer.Pop_Byte();
                }
                for (var i = 0; i < sparrowsclm.GAME_PLAYER; i++) {
                    this.dwChiHuKind[i] = buffer.Pop_DWORD();
                }
                for (var i = 0; i < sparrowsclm.GAME_PLAYER; i++) {
                    for (var j = 0; j < sparrowsclm.MAX_RIGHT_COUNT; i++) {
                        this.dwChiHuRight[i][j] = buffer.Pop_DWORD();
                    }
                }
                for (var i = 0; i < sparrowsclm.GAME_PLAYER; i++) {
                    this.lGameScore[i] = buffer.Pop_SCORE();
                }
                for (var i = 0; i < sparrowsclm.GAME_PLAYER; i++) {
                    for (var j = 0; j < sparrowsclm.GAME_PLAYER; i++) {
                        this.lZiMoAddScore[i][j] = buffer.Pop_SCORE();
                    }
                }
                for (var i = 0; i < sparrowsclm.GAME_PLAYER; i++) {
                    this.cbCardCount[i] = buffer.Pop_Byte();
                }
                for (var i = 0; i < sparrowsclm.GAME_PLAYER; i++) {
                    for (var j = 0; j < sparrowsclm.MAX_COUNT; i++) {
                        this.cbCardData[i][j] = buffer.Pop_Byte();
                    }
                }
                for (var i = 0; i < sparrowsclm.GAME_PLAYER; i++) {
                    this.cbUserCardType[i] = buffer.Pop_Byte();
                }
                for (var i = 0; i < sparrowsclm.GAME_PLAYER; i++) {
                    this.cbUserGengCount[i] = buffer.Pop_Byte();
                }
                for (var i = 0; i < sparrowsclm.GAME_PLAYER; i++) {
                    this.cbUserQiaCount[i] = buffer.Pop_Byte();
                }
                for (var i = 0; i < sparrowsclm.GAME_PLAYER; i++) {
                    this.cbCheckJiaoBeiShu[i] = buffer.Pop_Byte();
                }
                for (var i = 0; i < sparrowsclm.GAME_PLAYER; i++) {
                    var info = this.UserSettlementInfo[i];
                    info.onInit(buffer);
                }
            };
            return CMD_S_GameEnd;
        }());
        sparrowsclm.CMD_S_GameEnd = CMD_S_GameEnd;
        ;
        //用户托管
        var CMD_S_Trustee = /** @class */ (function () {
            function CMD_S_Trustee() {
            }
            CMD_S_Trustee.prototype.onInit = function (buffer) {
                this.bTrustee = buffer.Pop_BOOL();
                this.wChairID = buffer.Pop_WORD();
            };
            return CMD_S_Trustee;
        }());
        sparrowsclm.CMD_S_Trustee = CMD_S_Trustee;
        ;
        //用户听牌
        var CMD_S_Listen = /** @class */ (function () {
            function CMD_S_Listen() {
                this.cbTingCard = utils.allocArray(sparrowsclm.MAX_COUNT, Number); //听牌
            }
            CMD_S_Listen.prototype.onInit = function (buffer) {
                this.wChairId = buffer.Pop_WORD();
                this.cbTingCardCount = buffer.Pop_Byte();
                for (var i = 0; i < sparrowsclm.MAX_COUNT; i++) {
                    this.cbTingCard[i] = buffer.Pop_Byte();
                }
            };
            return CMD_S_Listen;
        }());
        sparrowsclm.CMD_S_Listen = CMD_S_Listen;
        ;
        //定张结束
        var CMD_S_DING_ZHANG_END = /** @class */ (function () {
            function CMD_S_DING_ZHANG_END() {
                this.bUserDingCardColor = utils.allocArray(sparrowsclm.GAME_PLAYER, Number); //定张花色
            }
            CMD_S_DING_ZHANG_END.prototype.onInit = function (buffer) {
                this.wBankerUser = buffer.Pop_WORD();
                for (var i = 0; i < sparrowsclm.GAME_PLAYER; i++) {
                    this.bUserDingCardColor[i] = buffer.Pop_Byte();
                }
            };
            return CMD_S_DING_ZHANG_END;
        }());
        sparrowsclm.CMD_S_DING_ZHANG_END = CMD_S_DING_ZHANG_END;
        ;
        //规则选择
        var CMD_S_GAME_RULE_NOTIFY = /** @class */ (function () {
            function CMD_S_GAME_RULE_NOTIFY() {
            }
            CMD_S_GAME_RULE_NOTIFY.prototype.onInit = function (buffer) {
                this.bForceExit = buffer.Pop_BOOL();
                this.bPromptNotice = buffer.Pop_BOOL();
                this.cbGamePlayer = buffer.Pop_Byte();
                this.lBaseScore = buffer.Pop_SCORE();
            };
            return CMD_S_GAME_RULE_NOTIFY;
        }());
        sparrowsclm.CMD_S_GAME_RULE_NOTIFY = CMD_S_GAME_RULE_NOTIFY;
        ;
        //规则设置
        var CMD_S_GAME_RULE_SETTING = /** @class */ (function () {
            function CMD_S_GAME_RULE_SETTING() {
            }
            CMD_S_GAME_RULE_SETTING.prototype.onInit = function (buffer) {
                this.lCellScore = buffer.Pop_SCORE();
            };
            return CMD_S_GAME_RULE_SETTING;
        }());
        sparrowsclm.CMD_S_GAME_RULE_SETTING = CMD_S_GAME_RULE_SETTING;
        ;
        //报胡提醒
        var CMD_S_BAO_HU_NOTIFY = /** @class */ (function () {
            function CMD_S_BAO_HU_NOTIFY() {
            }
            CMD_S_BAO_HU_NOTIFY.prototype.onInit = function (buffer) {
                this.wCurrentUser = buffer.Pop_WORD();
                this.wLastUser = buffer.Pop_WORD();
                this.bBaoHuFlag = buffer.Pop_BOOL();
                this.cbCardData = buffer.Pop_Byte();
            };
            return CMD_S_BAO_HU_NOTIFY;
        }());
        sparrowsclm.CMD_S_BAO_HU_NOTIFY = CMD_S_BAO_HU_NOTIFY;
        ;
    })(sparrowsclm = cmd.sparrowsclm || (cmd.sparrowsclm = {}));
})(cmd || (cmd = {}));
