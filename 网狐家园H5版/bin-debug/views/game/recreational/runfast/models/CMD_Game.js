/**
 * 游戏定义
 */
var cmd;
(function (cmd) {
    var runfast;
    (function (runfast) {
        //游戏属性
        runfast.KIND_ID = 76;
        runfast.GAME_NAME = "跑得快";
        runfast.GAME_PLAYER = 4;
        runfast.MY_VIEW = 0; //自己视图
        runfast.LEFT_VIEW = 1;
        runfast.RIGHT_VIEW = 2;
        runfast.TOP_VIEW = 3;
        //手牌参数
        runfast.FULL_COUNT = 40;
        runfast.HAND_COUNT = 10;
        runfast.MAX_CARD_VALUE = 14; //手牌最大权重？
        //首出牌
        runfast.FIRST_OUT_CARD = 0x35;
        //关于游戏状态的定义？
        runfast.GAME_SCENE_FREE = 0; //空闲状态
        runfast.GAME_SCENE_PLAY = 103; //游戏状态
        //玩家状态
        runfast.USEX_NULL = 0;
        runfast.USEX_PLAYING = 1;
        runfast.USEX_DYNAMIC_JOIN = 2;
        //操作定义
        runfast.OPERATE_NULL = 0xFF;
        //服务端命令定义
        runfast.SUB_S_GAME_START = 100; //游戏开始
        runfast.SUB_S_OUT_CARD = 101; //出牌
        runfast.SUB_S_PASS_CARD = 102; //过牌
        runfast.SUB_S_SHUT_CARD = 103; //关牌
        runfast.SUB_S_START_CARD = 104; //开始出牌？
        runfast.SUB_S_GAME_END = 105; //游戏结束
        runfast.SUB_S_PHRASE = 106; //玩家发言
        runfast.SUB_S_TRUSTEE = 107; //托管消息
        runfast.SUB_S_TOTAL_SCORE = 108; //游戏结算
        //客户端命令定义
        runfast.SUB_C_OUT_CARD = 1; //出牌
        runfast.SUB_C_SHUT_CARD = 2; //关牌
        runfast.SUB_C_TRUSTEE = 3; //托管
        runfast.SUB_C_PHRASE = 4; //发言
        runfast.SUB_C_ALLOT_CARD_DATA = 5; //配牌数据
        var tagCustomConfig = (function () {
            function tagCustomConfig() {
                this.bRandDisCard = false;
                this.wPlayerCount = 4;
                this.wMaxBombCount = 0;
            }
            tagCustomConfig.prototype.onInit = function (buffer) {
                this.wPlayerCount = buffer.Pop_WORD();
                this.wMaxBombCount = buffer.Pop_WORD();
                this.bRandDisCard = buffer.Pop_BOOL();
            };
            return tagCustomConfig;
        }());
        runfast.tagCustomConfig = tagCustomConfig;
        //空闲状态
        var CMD_S_StatusFree = (function () {
            function CMD_S_StatusFree(buffer) {
                this.lTurnScore = [0, 0, 0, 0];
                this.lCollectScore = [0, 0, 0, 0];
                this.lCellScore = buffer.Pop_LONG();
                for (var i = 0; i < runfast.GAME_PLAYER; i++) {
                    this.lTurnScore[i] = buffer.Pop_SCORE();
                }
                for (var i = 0; i < runfast.GAME_PLAYER; i++) {
                    this.lCollectScore[i] = buffer.Pop_SCORE();
                }
                this.CustomConfig = new tagCustomConfig();
                this.CustomConfig.onInit(buffer);
            }
            return CMD_S_StatusFree;
        }());
        runfast.CMD_S_StatusFree = CMD_S_StatusFree;
        //游戏状态
        var CMD_S_StatusPlay = (function () {
            function CMD_S_StatusPlay() {
                this.bTrustee = utils.allocArray(4, Boolean); //托管信息
                this.bReportSingle = utils.allocArray(4, Boolean); //报单信息
                this.cbTurnCardData = utils.allocArray(runfast.HAND_COUNT, Number);
                //扑克信息
                this.cbHandCardData = utils.allocArray(runfast.HAND_COUNT, Number); //手牌
                this.cbHandCardCount = utils.allocArray(runfast.GAME_PLAYER, Number); //玩家手牌数量
                //历史积分
                this.lTurnScore = utils.allocArray(runfast.GAME_PLAYER, Number);
                this.lCollectScore = utils.allocArray(runfast.GAME_PLAYER, Number);
            }
            return CMD_S_StatusPlay;
        }());
        runfast.CMD_S_StatusPlay = CMD_S_StatusPlay;
        //发送扑克
        var CMD_S_GameStart = (function () {
            function CMD_S_GameStart() {
                this.cbCardCount = utils.allocArray(runfast.GAME_PLAYER, Number); //牌的总数量
                this.cbCardData = utils.allocArray(runfast.HAND_COUNT, Number); //当前玩家扑克列表
            }
            CMD_S_GameStart.prototype.onInit = function (buffer) {
                this.wCurrentUser = buffer.Pop_WORD();
                this.wShutCardUser = buffer.Pop_WORD();
                this.wStartChairId = buffer.Pop_WORD();
                for (var n = 0; n < runfast.GAME_PLAYER; n++) {
                    this.cbCardCount[n] = buffer.Pop_Byte();
                }
                for (var n = 0; n < runfast.HAND_COUNT; n++) {
                    this.cbCardData[n] = buffer.Pop_Byte();
                }
            };
            return CMD_S_GameStart;
        }());
        runfast.CMD_S_GameStart = CMD_S_GameStart;
        //用户出牌
        var CMD_S_OutCar = (function () {
            function CMD_S_OutCar() {
                this.cbCardData = utils.allocArray(runfast.HAND_COUNT, Number);
            }
            return CMD_S_OutCar;
        }());
        runfast.CMD_S_OutCar = CMD_S_OutCar;
        //放弃出牌玩家
        var CMD_S_PassCard = (function () {
            function CMD_S_PassCard() {
            }
            return CMD_S_PassCard;
        }());
        runfast.CMD_S_PassCard = CMD_S_PassCard;
        //关牌玩家
        var CMD_S_ShutCard = (function () {
            function CMD_S_ShutCard() {
            }
            return CMD_S_ShutCard;
        }());
        runfast.CMD_S_ShutCard = CMD_S_ShutCard;
        //开始出牌
        var CMD_S_StartCard = (function () {
            function CMD_S_StartCard() {
            }
            return CMD_S_StartCard;
        }());
        runfast.CMD_S_StartCard = CMD_S_StartCard;
        //玩家发言
        var CMD_S_Phrase = (function () {
            function CMD_S_Phrase() {
            }
            return CMD_S_Phrase;
        }());
        runfast.CMD_S_Phrase = CMD_S_Phrase;
        //游戏结束
        var CMD_S_GameEnd = (function () {
            function CMD_S_GameEnd() {
                this.cbHandCardCount = utils.allocArray(runfast.GAME_PLAYER, Number); //所有玩家剩余扑克数量
                this.cbHandCardData = utils.alloc2Array(runfast.GAME_PLAYER, runfast.HAND_COUNT, Number); //剩余扑克
                this.cbLastOutCard = utils.allocArray(runfast.HAND_COUNT, Number); //最后出牌列表
                this.cbBombCount = utils.allocArray(runfast.GAME_PLAYER, Number); //炸弹数目->每个玩家的炸弹数量
                this.lGameScore = utils.allocArray(runfast.GAME_PLAYER, Number);
            }
            return CMD_S_GameEnd;
        }());
        runfast.CMD_S_GameEnd = CMD_S_GameEnd;
        //托管消息
        var CMD_S_TRUSTEE = (function () {
            function CMD_S_TRUSTEE() {
            }
            return CMD_S_TRUSTEE;
        }());
        runfast.CMD_S_TRUSTEE = CMD_S_TRUSTEE;
        //用户出牌
        var CMD_C_OutCard = (function () {
            function CMD_C_OutCard() {
                this.cbCardData = utils.allocArray(runfast.HAND_COUNT, Number); //扑克数据
            }
            return CMD_C_OutCard;
        }());
        runfast.CMD_C_OutCard = CMD_C_OutCard;
        //用户关牌
        var CMD_C_ShutCard = (function () {
            function CMD_C_ShutCard() {
            }
            return CMD_C_ShutCard;
        }());
        runfast.CMD_C_ShutCard = CMD_C_ShutCard;
        //发送语音
        var CMD_C_Phrase = (function () {
            function CMD_C_Phrase() {
            }
            return CMD_C_Phrase;
        }());
        runfast.CMD_C_Phrase = CMD_C_Phrase;
        //托管消息
        var CMD_C_TRUSTEE = (function () {
            function CMD_C_TRUSTEE() {
            }
            return CMD_C_TRUSTEE;
        }());
        runfast.CMD_C_TRUSTEE = CMD_C_TRUSTEE;
        //配置扑克
        var CMD_C_AllotCard = (function () {
            function CMD_C_AllotCard() {
                this.cbCardData = utils.alloc2Array(runfast.GAME_PLAYER, 10, Number); //扑克列表
            }
            return CMD_C_AllotCard;
        }());
        runfast.CMD_C_AllotCard = CMD_C_AllotCard;
    })(runfast = cmd.runfast || (cmd.runfast = {}));
})(cmd || (cmd = {}));
