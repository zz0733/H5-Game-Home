/**
 * 游戏逻辑
 */
var game;
(function (game) {
    var sparrowsclm;
    (function (sparrowsclm) {
        var CardsData = [
            0x11, 0x12, 0x13, 0x14, 0x15, 0x16, 0x17, 0x18, 0x19,
            0x11, 0x12, 0x13, 0x14, 0x15, 0x16, 0x17, 0x18, 0x19,
            0x11, 0x12, 0x13, 0x14, 0x15, 0x16, 0x17, 0x18, 0x19,
            0x11, 0x12, 0x13, 0x14, 0x15, 0x16, 0x17, 0x18, 0x19,
            0x21, 0x22, 0x23, 0x24, 0x25, 0x26, 0x27, 0x28, 0x29,
            0x21, 0x22, 0x23, 0x24, 0x25, 0x26, 0x27, 0x28, 0x29,
            0x21, 0x22, 0x23, 0x24, 0x25, 0x26, 0x27, 0x28, 0x29,
            0x21, 0x22, 0x23, 0x24, 0x25, 0x26, 0x27, 0x28, 0x29,
        ];
        /////////////////////////////////////////////////////////////////////////
        //逻辑掩码
        sparrowsclm.MASK_COLOR = 0xF0; //花色掩码
        sparrowsclm.MASK_VALUE = 0x0F; //数值掩码
        sparrowsclm.MAX_INDEX = 27; //最大索引
        sparrowsclm.MIN_INDEX = 9;
        sparrowsclm.MAX_COUNT = 11;
        sparrowsclm.MAX_WEAVE = 3;
        sparrowsclm.MAX_HUA_CARD = 0;
        //////////////////////////////////////////////////////////////////////////
        //动作定义
        //动作标志
        sparrowsclm.WIK_NULL = 0x00; //没有类型
        sparrowsclm.WIK_LEFT = 0x01; //左吃类型
        sparrowsclm.WIK_PENG = 0x02; //碰牌类型
        sparrowsclm.WIK_GANG = 0x04; //杠牌类型
        sparrowsclm.WIK_JIA_GANG = 0x08; //杠牌类型
        sparrowsclm.WIK_BAO_HU = 0x10; //报胡类型
        sparrowsclm.WIK_QING_HU = 0x20; //请胡类型 
        sparrowsclm.WIK_CHI_HU = 0x40; //吃胡类型
        //扩展动作
        sparrowsclm.WIK_EX_CHI_BAO_HU = 0x0001; //抓胡类型  
        sparrowsclm.WIK_EX_CHI_QING_HU = 0x0002; //抓胡类型  
        sparrowsclm.WIK_EX_TIAN_HU = 0x0100; //天胡类型  
        sparrowsclm.WIK_EX_DI_HU = 0x0200; //地胡类型
        sparrowsclm.WIK_EX_FANG_PAO = 0x0400; //放炮动作
        sparrowsclm.WIK_EX_CHI_HU = 0x0800; //吃胡动作                
        sparrowsclm.WIK_EX_ZIMO = 0x1000; //自摸动作
        sparrowsclm.WIK_EX_GANG_PAO = 0x2000; //杠上炮
        sparrowsclm.WIK_EX_GANG_KAI = 0x4000; //杠上花
        sparrowsclm.WIK_EX_QING_HU = 0x8000; //请胡类型 
        //听牌类型
        sparrowsclm.TING_KIND_NONE = 0x00; //听牌类型
        sparrowsclm.TING_KIND_NORMAL = 0x01; //听牌类型
        sparrowsclm.TING_KIND_WUDUI = 0x02; //听牌类型
        //////////////////////////////////////////////////////////////////////////
        //胡牌定义
        //胡牌牌型
        sparrowsclm.CHR_PING_HU = 0x00000001; //平胡
        sparrowsclm.CHR_DUI_DUI_HU = 0x00000002; //对对胡
        sparrowsclm.CHR_QING_DUI = 0x00000004; //清对对
        sparrowsclm.CHR_JIANG_DUI = 0x00000008; //将对对
        sparrowsclm.CHR_QING_YI_SE = 0x00000010; //清一色
        sparrowsclm.CHR_WU_DUI = 0x00000020; //五小对
        sparrowsclm.CHR_QING_WU_DUI = 0x00000040; //清五对
        sparrowsclm.CHR_LONG_WU_DUI = 0x00000100; //龙五对
        sparrowsclm.CHR_QLONG_WU_DUI = 0x00000200; //清龙五对
        sparrowsclm.CHR_TAKE_YI_JIU = 0x00001000; //带幺九
        sparrowsclm.CHR_DUI_TAKE_YI_JIU = 0x00002000; //对对胡带幺九
        sparrowsclm.CHR_QING_TAKE_YI_JIU = 0x00008000; //清幺九
        sparrowsclm.CHR_TIAN_HU = 0x00010000; //天胡
        sparrowsclm.CHR_DI_HU = 0x00020000; //地胡 
        //加倍项
        sparrowsclm.CHR_BREAK_YI_JIU = 0x00100000; //断幺九 
        sparrowsclm.CHR_GANG_KAI = 0x00200000; //杠上花
        sparrowsclm.CHR_GANG_PAO = 0x00400000; //杠上炮
        sparrowsclm.CHR_QIANG_GANG = 0x00800000; //抢杠 
        sparrowsclm.CHR_HAI_DI_LAO = 0x01000000; //海底捞
        sparrowsclm.CHR_HAI_DI_PAO = 0x02000000; //海底炮
        sparrowsclm.CHR_BAO_JIAO = 0x04000000; //报叫
        //////////////////////////////////////////////////////////////////////////
        var tagKindItem = (function () {
            function tagKindItem() {
                this.cbWeaveKind = 0; //组合类型
                this.cbCenterCard = 0; //中心扑克
                this.cbValidIndex = []; //实际扑克索引
            }
            return tagKindItem;
        }());
        var tagAnalyseItem = (function () {
            function tagAnalyseItem() {
                this.cbCardEye = 0; //牌眼扑克
                this.cbWeaveKind = [0, 0, 0]; //组合类型
                this.cbCenterCard = [0, 0, 0]; //中心扑克
                this.cbCardData = utils.alloc2Array(sparrowsclm.MAX_WEAVE, 4, Number); //实际扑克
            }
            return tagAnalyseItem;
        }());
        var TingCardInfo = (function () {
            function TingCardInfo() {
                this.cbTingCount = 0; //听牌数目
                this.cbChiHuFan = []; //吃胡番数
                this.cbChiHuCard = []; //吃胡数据
                this.cbRemindCount = []; //剩余张数
                this.cbOutCardData = 0xff;
            }
            return TingCardInfo;
        }());
        sparrowsclm.TingCardInfo = TingCardInfo;
        var GameLogic = (function () {
            function GameLogic() {
            }
            GameLogic.prototype.GetCardValue = function (cbCardData) {
                var cbValue = 0;
                return cbValue = (cbCardData & sparrowsclm.MASK_VALUE);
            };
            GameLogic.prototype.GetCardColor = function (cbCardData) {
                var cbColor = 0;
                return cbColor = (cbCardData & sparrowsclm.MASK_COLOR) >> 4;
            };
            //校验数据
            GameLogic.prototype.IsValidCard = function (cbCardData) {
                var cbValue = (cbCardData & sparrowsclm.MASK_VALUE);
                var cbColor = (cbCardData & sparrowsclm.MASK_COLOR) >> 4;
                return (((cbValue >= 1) && (cbValue <= 9) && (cbColor <= 2)) || ((cbValue >= 1) && (cbValue <= 0x0f) && (cbColor == 3)));
            };
            //删除扑克
            GameLogic.prototype.RemoveCard = function (cbCardIndex, cbRemoveCard) {
                //删除扑克
                for (var i = 0; i < cbRemoveCard.length; i++) {
                    //效验扑克
                    egret.assert(this.IsValidCard(cbRemoveCard[i]));
                    egret.assert(cbCardIndex[this.SwitchToCardIndex(cbRemoveCard[i])] > 0);
                    //删除扑克
                    var cbRemoveIndex = this.SwitchToCardIndex(cbRemoveCard[i]);
                    if (cbCardIndex[cbRemoveIndex] == 0) {
                        //错误断言
                        egret.assert(false);
                        //还原删除
                        for (var j = 0; j < i; j++) {
                            egret.assert(this.IsValidCard(cbRemoveCard[j]));
                            cbCardIndex[this.SwitchToCardIndex(cbRemoveCard[j])]++;
                        }
                        return false;
                    }
                    else {
                        //删除扑克
                        --cbCardIndex[cbRemoveIndex];
                    }
                }
                return true;
            };
            //扑克转换
            GameLogic.prototype.SwitchToCardData = function (cbCardIndex) {
                egret.assert(cbCardIndex < sparrowsclm.MAX_INDEX);
                if (cbCardIndex < 27)
                    return ((cbCardIndex / 9) << 4) | (cbCardIndex % 9 + 1);
                else
                    return (0x30 | (cbCardIndex - 27 + 1));
            };
            //扑克转换
            GameLogic.prototype.SwitchToCardDatas = function (cbCardIndex, cbCardData) {
                //转换扑克
                var cbPosition = 0;
                for (var i = sparrowsclm.MIN_INDEX; i < sparrowsclm.MAX_INDEX; i++) {
                    if (cbCardIndex[i] != 0) {
                        for (var j = 0; j < cbCardIndex[i]; j++) {
                            egret.assert(cbPosition < sparrowsclm.MAX_COUNT);
                            cbCardData[cbPosition++] = this.SwitchToCardData(i);
                        }
                    }
                }
                return cbPosition;
            };
            //扑克转换
            GameLogic.prototype.SwitchToCardIndex = function (cbCardData) {
                var cbCardIndex = 0;
                return cbCardIndex = ((cbCardData & sparrowsclm.MASK_COLOR) >> 4) * 9 + (cbCardData & sparrowsclm.MASK_VALUE) - 1;
            };
            GameLogic.prototype.SwitchToCardIndexs = function (cbCardData, cbCardCount, cbCardIndex) {
                //转换扑克
                var cbPos = 0;
                for (var i = 0; i < cbCardCount; i++) {
                    egret.assert(this.IsValidCard(cbCardData[i]));
                    cbCardIndex[this.SwitchToCardIndex(cbCardData[i])]++;
                    cbPos++;
                }
                egret.assert(cbPos <= sparrowsclm.MAX_COUNT);
                return cbCardCount;
            };
            //排序,根据牌值排序
            GameLogic.prototype.SortCardList = function (cbCardData, cbCardCount) {
                //数目过虑
                if (cbCardCount == 0 || cbCardCount > cmd.sparrowsclm.MAX_COUNT)
                    return false;
                //排序操作
                var bSorted = true;
                var cbSwitchData = 0, cbLast = cbCardCount - 1;
                do {
                    bSorted = true;
                    for (var i = 0; i < cbLast; i++) {
                        if (cbCardData[i] > cbCardData[i + 1]) {
                            //设置标志
                            bSorted = false;
                            //扑克数据
                            cbSwitchData = cbCardData[i];
                            cbCardData[i] = cbCardData[i + 1];
                            cbCardData[i + 1] = cbSwitchData;
                        }
                    }
                    cbLast--;
                } while (bSorted == false);
                return true;
            };
            //扑克数目
            GameLogic.prototype.GetCardCount = function (cbCardIndex) {
                //数目统计
                var cbCardCount = 0;
                for (var i = sparrowsclm.MIN_INDEX; i < sparrowsclm.MAX_INDEX; i++)
                    cbCardCount += cbCardIndex[i];
                return cbCardCount;
            };
            //权位过滤
            GameLogic.prototype.FiltrateRight = function (chr) {
                /*	组合权位  */
                //清对对
                if (chr.LogicAnd(sparrowsclm.CHR_QING_YI_SE) && chr.LogicAnd(sparrowsclm.CHR_DUI_DUI_HU)) {
                    chr.OrAssignment(sparrowsclm.CHR_QING_DUI);
                    chr.AndAssignment(~sparrowsclm.CHR_QING_YI_SE);
                    chr.AndAssignment(~sparrowsclm.CHR_DUI_DUI_HU);
                }
                //清幺九
                if (chr.LogicAnd(sparrowsclm.CHR_QING_YI_SE) && chr.LogicAnd(sparrowsclm.CHR_TAKE_YI_JIU)) {
                    chr.OrAssignment(sparrowsclm.CHR_QING_TAKE_YI_JIU);
                    chr.AndAssignment(~sparrowsclm.CHR_QING_YI_SE);
                    chr.AndAssignment(~sparrowsclm.CHR_TAKE_YI_JIU);
                }
            };
            //胡牌等级
            GameLogic.prototype.GetChiHuActionRank = function (ChiHuRight) {
                var wFanShu = 0;
                //平胡
                if (ChiHuRight.LogicAnd(sparrowsclm.CHR_PING_HU))
                    wFanShu = 1;
                //对对胡
                if (ChiHuRight.LogicAnd(sparrowsclm.CHR_DUI_DUI_HU))
                    wFanShu = 2;
                //清一色
                if (ChiHuRight.LogicAnd(sparrowsclm.CHR_QING_YI_SE))
                    wFanShu = 3;
                //五对
                if (ChiHuRight.LogicAnd(sparrowsclm.CHR_WU_DUI))
                    wFanShu = 3;
                //清对对
                if (ChiHuRight.LogicAnd(sparrowsclm.CHR_QING_DUI))
                    wFanShu = 4;
                //龙五对
                if (ChiHuRight.LogicAnd(sparrowsclm.CHR_LONG_WU_DUI))
                    wFanShu = 4;
                //带幺九
                if (ChiHuRight.LogicAnd(sparrowsclm.CHR_TAKE_YI_JIU))
                    wFanShu = 5;
                //清五对
                if (ChiHuRight.LogicAnd(sparrowsclm.CHR_QING_WU_DUI))
                    wFanShu = 5;
                //将对对
                if (ChiHuRight.LogicAnd(sparrowsclm.CHR_JIANG_DUI))
                    wFanShu = 6;
                //清龙五对
                if (ChiHuRight.LogicAnd(sparrowsclm.CHR_QLONG_WU_DUI))
                    wFanShu = 6;
                //对对胡带幺九
                if (ChiHuRight.LogicAnd(sparrowsclm.CHR_DUI_TAKE_YI_JIU))
                    wFanShu = 6;
                //清幺九
                if (ChiHuRight.LogicAnd(sparrowsclm.CHR_QING_TAKE_YI_JIU))
                    wFanShu = 6;
                //天胡
                if (ChiHuRight.LogicAnd(sparrowsclm.CHR_TIAN_HU))
                    wFanShu = 6;
                //地胡
                if (ChiHuRight.LogicAnd(sparrowsclm.CHR_DI_HU))
                    wFanShu = 6;
                //加番-抢杠
                if (ChiHuRight.LogicAnd(sparrowsclm.CHR_QIANG_GANG))
                    ++wFanShu;
                //加番-杠上花
                if (ChiHuRight.LogicAnd(sparrowsclm.CHR_GANG_KAI))
                    ++wFanShu;
                //加番-杠上炮
                if (ChiHuRight.LogicAnd(sparrowsclm.CHR_GANG_PAO))
                    ++wFanShu;
                //加番-海底捞
                if (ChiHuRight.LogicAnd(sparrowsclm.CHR_HAI_DI_LAO))
                    ++wFanShu;
                //加番-海底炮
                if (ChiHuRight.LogicAnd(sparrowsclm.CHR_HAI_DI_PAO))
                    ++wFanShu;
                //加番-断幺九
                if (ChiHuRight.LogicAnd(sparrowsclm.CHR_BREAK_YI_JIU))
                    ++wFanShu;
                //加番-报叫
                if (ChiHuRight.LogicAnd(sparrowsclm.CHR_BAO_JIAO))
                    wFanShu += 2;
                //加番-根数目
                wFanShu += ChiHuRight.m_cbGengCount;
                //加番-456夹
                wFanShu += ChiHuRight.m_cbQiaCount;
                return wFanShu;
            };
            //听牌分析
            GameLogic.prototype.AnalyseTingCard = function (cbCardIndex, WeaveItem, cbWeaveCount, cbDisCardIndex) {
                //分析队列
                var TingCardArray = [];
                var ChiHuRight = new sparrowsclm.CChiHuRight();
                if (this.GetCardCount(cbCardIndex) + cbWeaveCount * 3 == sparrowsclm.MAX_COUNT - 1) {
                    //扑克轮询
                    var tingInfo = new TingCardInfo();
                    for (var i = sparrowsclm.MIN_INDEX; i < sparrowsclm.MAX_INDEX; i++) {
                        var cbCurrentCard = this.SwitchToCardData(i);
                        var analyse = this.AnalyseChiHuCard(cbCardIndex, WeaveItem, cbWeaveCount, cbCurrentCard, ChiHuRight, false, false);
                        if (analyse.kind == sparrowsclm.WIK_CHI_HU) {
                            tingInfo.cbChiHuCard[tingInfo.cbTingCount] = cbCurrentCard;
                            tingInfo.cbChiHuFan[tingInfo.cbTingCount] = 6 > analyse.fan ? analyse.fan : 6;
                            var temp = 4 - cbCardIndex[i] - cbDisCardIndex[i];
                            tingInfo.cbRemindCount[tingInfo.cbTingCount] = 0 < temp ? temp : 0;
                            tingInfo.cbTingCount++;
                        }
                    }
                    if (tingInfo.cbTingCount > 0) {
                        TingCardArray.push(tingInfo);
                    }
                }
                else {
                    //变量定义
                    var cbTempCardIndex = utils.allocArray(sparrowsclm.MAX_INDEX, Number);
                    for (var i = sparrowsclm.MIN_INDEX; i < sparrowsclm.MAX_INDEX; i++) {
                        cbTempCardIndex[i] = cbCardIndex[i];
                    }
                    for (var i = sparrowsclm.MIN_INDEX; i < sparrowsclm.MAX_INDEX; i++) {
                        if (cbTempCardIndex[i] == 0)
                            continue;
                        cbTempCardIndex[i] = Number(cbTempCardIndex[i]) - 1;
                        var tingInfo = new TingCardInfo();
                        for (var j = sparrowsclm.MIN_INDEX; j < sparrowsclm.MAX_INDEX; j++) {
                            if (i != j) {
                                var cbCurrentCard = this.SwitchToCardData(j);
                                var analyse = this.AnalyseChiHuCard(cbTempCardIndex, WeaveItem, cbWeaveCount, cbCurrentCard, ChiHuRight, false, false);
                                if (analyse.kind == sparrowsclm.WIK_CHI_HU) {
                                    tingInfo.cbChiHuCard[tingInfo.cbTingCount] = cbCurrentCard;
                                    tingInfo.cbChiHuFan[tingInfo.cbTingCount] = 6 > analyse.fan ? analyse.fan : 6;
                                    var temp = 4 - cbCardIndex[j] - cbDisCardIndex[i];
                                    tingInfo.cbRemindCount[tingInfo.cbTingCount] = 0 < temp ? temp : 0;
                                    tingInfo.cbTingCount++;
                                }
                            }
                        }
                        if (tingInfo.cbTingCount > 0) {
                            tingInfo.cbOutCardData = this.SwitchToCardData(i);
                            TingCardArray.push(tingInfo);
                        }
                        cbTempCardIndex[i] = Number(cbTempCardIndex[i]) + 1;
                    }
                }
                return TingCardArray;
            };
            //请胡分析
            GameLogic.prototype.AnalyseQingCard = function (cbCardIndex, cbCurrentCard) {
                //变量定义
                var cbCardIndexTemp = utils.allocArray(sparrowsclm.MAX_INDEX, Number);
                for (var i = sparrowsclm.MIN_INDEX; i < sparrowsclm.MAX_INDEX; i++) {
                    cbCardIndexTemp[i] = cbCardIndex[i];
                }
                cbCardIndexTemp[this.SwitchToCardIndex(cbCurrentCard)] = Number(cbCardIndexTemp[this.SwitchToCardIndex(cbCurrentCard)]) + 1;
                //五对分析
                var bQingWuDui;
                var cbGengCount = 0, cbYiJiuCount = 0;
                if (this.IsWuDui(cbCardIndexTemp, cbCurrentCard, bQingWuDui, cbGengCount, cbYiJiuCount) == true) {
                    return sparrowsclm.WIK_QING_HU;
                }
                return sparrowsclm.WIK_NULL;
            };
            //报牌分析
            GameLogic.prototype.AnalyseBaoOutCard = function (cbCardIndex, WeaveItem, cbWeaveCount) {
                //设置变量
                var CanOutCardArray = [];
                //定义变量
                var cbCardIndexTemp = utils.allocArray(sparrowsclm.MAX_INDEX, Number);
                for (var i = sparrowsclm.MIN_INDEX; i < sparrowsclm.MAX_INDEX; i++) {
                    cbCardIndexTemp[i] = cbCardIndex[i];
                }
                //轮询手中的牌
                for (var i = sparrowsclm.MIN_INDEX; i < sparrowsclm.MAX_INDEX; i++) {
                    if (cbCardIndexTemp[i] == 0)
                        continue;
                    //删除扑克
                    cbCardIndexTemp[i] = Number(cbCardIndexTemp[i]) - 1;
                    var cbChiHuCardDataCount = 0;
                    for (var j = sparrowsclm.MIN_INDEX; j < sparrowsclm.MAX_INDEX; j++) {
                        var cbCurrentCard = this.SwitchToCardData(j);
                        //分析扑克
                        cbCardIndexTemp[j] = Number(cbCardIndexTemp[j]) + 1;
                        var AnalyseItemArray = [];
                        this.AnalyseCard(cbCardIndexTemp, WeaveItem, cbWeaveCount, AnalyseItemArray);
                        cbCardIndexTemp[j] = Number(cbCardIndexTemp[j]) - 1;
                        //胡牌分析
                        var len = AnalyseItemArray.length;
                        cbChiHuCardDataCount += len;
                    }
                    if (cbChiHuCardDataCount > 0)
                        CanOutCardArray.push(this.SwitchToCardData(utils.MathUtils.getUnsignedByte(i)));
                    //添加扑克
                    cbCardIndexTemp[i] = Number(cbCardIndexTemp[i]) + 1;
                }
                //统计对子数
                var cbDuiCount = 0;
                for (var i = sparrowsclm.MIN_INDEX; i < sparrowsclm.MAX_INDEX; i++)
                    cbDuiCount += Math.floor(cbCardIndex[i] / 2);
                //四对即可报请
                if (cbDuiCount >= 4) {
                    for (var cbIndex = sparrowsclm.MIN_INDEX; cbIndex < sparrowsclm.MAX_INDEX; ++cbIndex) {
                        if (cbCardIndex[cbIndex] % 2 == 1) {
                            //变量定义
                            var cbCardData = this.SwitchToCardData(cbIndex);
                            var bCardExits = false;
                            for (var nOutCount = 0; nOutCount < CanOutCardArray.length; ++nOutCount) {
                                if (cbCardData == CanOutCardArray[nOutCount]) {
                                    bCardExits = true;
                                    break;
                                }
                            }
                            //添加出牌
                            if (bCardExits == false)
                                CanOutCardArray.push(cbCardData);
                        }
                    }
                }
                return CanOutCardArray;
            };
            //获取组合
            GameLogic.prototype.GetWeaveCard = function (cbWeaveKind, cbCenterCard, cbCardBuffer, bOrder) {
                if (bOrder === void 0) { bOrder = true; }
                //组合扑克
                switch (cbWeaveKind) {
                    case sparrowsclm.WIK_LEFT://上牌操作
                        {
                            //设置变量
                            cbCardBuffer[0] = cbCenterCard;
                            cbCardBuffer[1] = cbCenterCard + 1;
                            cbCardBuffer[2] = cbCenterCard + 2;
                            return 3;
                        }
                    case sparrowsclm.WIK_PENG://碰牌操作
                        {
                            //设置变量
                            cbCardBuffer[0] = cbCenterCard;
                            cbCardBuffer[1] = cbCenterCard;
                            cbCardBuffer[2] = cbCenterCard;
                            return 3;
                        }
                    case sparrowsclm.WIK_GANG: //杠牌操作
                    case sparrowsclm.WIK_JIA_GANG://杠牌操作
                        {
                            //设置变量
                            cbCardBuffer[0] = cbCenterCard;
                            cbCardBuffer[1] = cbCenterCard;
                            cbCardBuffer[2] = cbCenterCard;
                            cbCardBuffer[3] = cbCenterCard;
                            return 4;
                        }
                    default:
                        {
                            egret.assert(false);
                        }
                }
                return 0;
            };
            //五对
            GameLogic.prototype.IsWuDui = function (cbCardIndex, cbCurrentCard, bQingWuDui, cbGengCount, cbYiJiuCount) {
                //参数校验
                if (this.GetCardCount(cbCardIndex) < sparrowsclm.MAX_COUNT - 1)
                    return false;
                //设置变量	
                bQingWuDui = true;
                cbGengCount = 0;
                cbYiJiuCount = 0;
                //变量定义
                var cbCardColor = 0xff;
                var cbDuiCount = 0;
                for (var i = sparrowsclm.MIN_INDEX; i < sparrowsclm.MAX_INDEX; i++) {
                    if (cbCardIndex[i] <= 1)
                        continue;
                    //暗杠
                    if (cbCardIndex[i] == 4)
                        ++cbGengCount;
                    //幺九
                    if (cbCardIndex[i] >= 2 && (i % 9 == 0 || i % 9 == 8))
                        cbYiJiuCount += cbCardIndex[i] / 2;
                    //记录花色
                    if (cbCardColor == 0xff)
                        cbCardColor = i / 9;
                    else if (cbCardColor != i / 9)
                        bQingWuDui = false;
                    //计算对子
                    cbDuiCount += cbCardIndex[i] / 2;
                }
                return cbDuiCount == 5;
            };
            //根数目
            GameLogic.prototype.GetGengCount = function (cbCardIndex, WeaveItem, cbItemCount) {
                //变量定义
                var cbTempCardIndex = utils.allocArray(sparrowsclm.MAX_INDEX, Number);
                //组合转换
                for (var i = 0; i < cbItemCount; i++) {
                    var cbCardCount = WeaveItem[i].cbWeaveKind == sparrowsclm.WIK_GANG ? 4 : 3;
                    for (var j = 0; j < cbCardCount; j++) {
                        var cbIndex = this.SwitchToCardIndex(WeaveItem[i].cbCardData[j]);
                        if (cbIndex < sparrowsclm.MAX_INDEX) {
                            cbTempCardIndex[cbIndex] = Number(cbTempCardIndex[cbIndex]) + 1;
                        }
                    }
                }
                //统计根数目
                var cbGengCount = 0;
                for (var i = sparrowsclm.MIN_INDEX; i < sparrowsclm.MAX_INDEX; i++) {
                    if (cbCardIndex[i] + cbTempCardIndex[i] == 4)
                        ++cbGengCount;
                }
                return cbGengCount;
            };
            //幺九数目
            GameLogic.prototype.GetYiJiuCount = function (pAnalyseItem) {
                //变量定义
                var cbYiJiuCount = 0;
                //组合牌
                for (var i = 0; i < sparrowsclm.MAX_WEAVE; i++) {
                    //幺九判断
                    if ((pAnalyseItem.cbWeaveKind[i] & sparrowsclm.WIK_LEFT) != 0) {
                        if ((pAnalyseItem.cbCenterCard[i] & sparrowsclm.MASK_VALUE) == 1 || (pAnalyseItem.cbCenterCard[i] & sparrowsclm.MASK_VALUE) == 7)
                            ++cbYiJiuCount;
                    }
                    else {
                        if ((pAnalyseItem.cbCenterCard[i] & sparrowsclm.MASK_VALUE) == 1 || (pAnalyseItem.cbCenterCard[i] & sparrowsclm.MASK_VALUE) == 9)
                            ++cbYiJiuCount;
                    }
                }
                //将头
                if ((pAnalyseItem.cbCardEye & sparrowsclm.MASK_VALUE) == 1 || (pAnalyseItem.cbCardEye & sparrowsclm.MASK_VALUE) == 9)
                    ++cbYiJiuCount;
                return cbYiJiuCount;
            };
            //掐数目
            GameLogic.prototype.GetQiaCount = function (pAnalyseItem, cbCurrentCard, bZiMo) {
                if (!bZiMo && (cbCurrentCard & sparrowsclm.MASK_VALUE) != 5)
                    return 0;
                //变量定义
                var cbQiaCount = 0;
                for (var i = 0; i < sparrowsclm.MAX_WEAVE; i++) {
                    if ((pAnalyseItem.cbWeaveKind[i] & sparrowsclm.WIK_LEFT) == 0)
                        continue;
                    if (bZiMo == true) {
                        if (((pAnalyseItem.cbCenterCard[i] + 1) & sparrowsclm.MASK_VALUE) == 5)
                            ++cbQiaCount;
                    }
                    else {
                        if (pAnalyseItem.cbCenterCard[i] + 1 == cbCurrentCard)
                            return 1;
                    }
                }
                return cbQiaCount;
            };
            //清一色
            GameLogic.prototype.IsQingYiSe = function (pAnalyseItem) {
                //参数校验
                if (pAnalyseItem == null)
                    return false;
                //变量定义
                var cbCardColor = pAnalyseItem.cbCardEye & sparrowsclm.MASK_COLOR;
                for (var i = 0; i < sparrowsclm.MAX_WEAVE; i++) {
                    if ((pAnalyseItem.cbCenterCard[i] & sparrowsclm.MASK_COLOR) != cbCardColor)
                        return false;
                }
                return true;
            };
            //大对胡
            GameLogic.prototype.IsDaDuiHu = function (pAnalyseItem, bJiangDui) {
                //参数校验
                if (pAnalyseItem == null)
                    return false;
                //变量设置
                bJiangDui = true;
                //检查牌眼
                if ((pAnalyseItem.cbCardEye & sparrowsclm.MASK_VALUE) % 3 != 2)
                    bJiangDui = false;
                //变量定义
                for (var i = 0; i < sparrowsclm.MAX_WEAVE; i++) {
                    //类型判断
                    if ((pAnalyseItem.cbWeaveKind[i] & (sparrowsclm.WIK_PENG | sparrowsclm.WIK_GANG)) == 0)
                        return false;
                    //将对判断
                    if (bJiangDui) {
                        if ((pAnalyseItem.cbCenterCard[i] & sparrowsclm.MASK_VALUE) % 3 != 2)
                            bJiangDui = false;
                    }
                }
                return true;
            };
            //吃胡分析
            GameLogic.prototype.AnalyseChiHuCard = function (cbCardIndex, WeaveItem, cbWeaveCount, cbCurrentCard, ChiHuRight, bZiMo, bQingHu) {
                if (bQingHu === void 0) { bQingHu = false; }
                //变量定义
                var wChiHuKind = sparrowsclm.WIK_NULL;
                var AnalyseItemArray = [];
                //设置变量
                ChiHuRight.SetEmpty();
                //构造扑克
                var cbCardIndexTemp = utils.allocArray(sparrowsclm.MAX_INDEX, Number);
                //拷贝
                for (var i = sparrowsclm.MIN_INDEX; i < sparrowsclm.MAX_INDEX; i++) {
                    cbCardIndexTemp[i] = cbCardIndex[i];
                }
                //cbCurrentCard一定不为0			!!!!!!!!!
                egret.assert(cbCurrentCard != 0);
                if (cbCurrentCard == 0)
                    return { kind: sparrowsclm.WIK_NULL, fan: 0 };
                //插入扑克
                if (cbCurrentCard != 0)
                    cbCardIndexTemp[this.SwitchToCardIndex(cbCurrentCard)] = Number(cbCardIndexTemp[this.SwitchToCardIndex(cbCurrentCard)]) + 1;
                //五对分析
                var bQingWuDui = false;
                var cbGengCount = 0, cbYiJiuCount = 0;
                if (bQingHu && this.IsWuDui(cbCardIndexTemp, cbCurrentCard, bQingWuDui, cbGengCount, cbYiJiuCount)) {
                    //清五对
                    if (bQingWuDui) {
                        ChiHuRight.OrAssignment(sparrowsclm.CHR_QING_WU_DUI);
                    }
                    //龙五对
                    if (cbGengCount > 0) {
                        ChiHuRight.OrAssignment(sparrowsclm.CHR_LONG_WU_DUI);
                        ChiHuRight.m_cbGengCount = cbGengCount - 1;
                    }
                    //五对
                    if (ChiHuRight.IsEmpty() == true)
                        ChiHuRight.OrAssignment(sparrowsclm.CHR_WU_DUI);
                    //断幺九
                    if (cbYiJiuCount == 0)
                        ChiHuRight.OrAssignment(sparrowsclm.CHR_BREAK_YI_JIU);
                }
                //分析扑克
                if (ChiHuRight.IsEmpty()) {
                    this.AnalyseCard(cbCardIndexTemp, WeaveItem, cbWeaveCount, AnalyseItemArray);
                }
                //胡牌分析
                var wMaxFanShu = 0, wCurrFanShu = 0;
                if (AnalyseItemArray.length > 0) {
                    //变量定义
                    var cbGengCount_1 = this.GetGengCount(cbCardIndexTemp, WeaveItem, cbWeaveCount);
                    //牌型分析
                    for (var i = 0; i < AnalyseItemArray.length; i++) {
                        //变量定义
                        var pAnalyseItem = AnalyseItemArray[i];
                        var TempChr = new sparrowsclm.CChiHuRight();
                        TempChr.SetEmpty();
                        var cbYiJiuCount_1 = this.GetYiJiuCount(pAnalyseItem);
                        //--基本牌型--//
                        //清一色
                        if (this.IsQingYiSe(pAnalyseItem) == true)
                            TempChr.OrAssignment(sparrowsclm.CHR_QING_YI_SE);
                        //大对胡
                        var bJiangDui = false;
                        if (this.IsDaDuiHu(pAnalyseItem, bJiangDui) == true) {
                            //将对对
                            if (bJiangDui)
                                TempChr.OrAssignment(sparrowsclm.CHR_JIANG_DUI);
                            else
                                TempChr.OrAssignment(sparrowsclm.CHR_DUI_DUI_HU);
                        }
                        //平胡
                        if (TempChr.IsEmpty())
                            TempChr.OrAssignment(sparrowsclm.CHR_PING_HU);
                        //--基本牌型--//
                        //带幺九
                        if (cbYiJiuCount_1 == 4)
                            TempChr.OrAssignment(sparrowsclm.CHR_TAKE_YI_JIU);
                        //断幺九
                        if (cbYiJiuCount_1 == 0)
                            TempChr.OrAssignment(sparrowsclm.CHR_BREAK_YI_JIU);
                        //根数目
                        TempChr.m_cbGengCount = cbGengCount_1;
                        //掐数目
                        TempChr.m_cbQiaCount = this.GetQiaCount(pAnalyseItem, cbCurrentCard, bZiMo);
                        //调整权限
                        this.FiltrateRight(TempChr);
                        wCurrFanShu = this.GetChiHuActionRank(TempChr);
                        if (wCurrFanShu > wMaxFanShu) {
                            wMaxFanShu = wCurrFanShu;
                            ChiHuRight.Assignment(TempChr);
                        }
                    }
                }
                if (!ChiHuRight.IsEmpty())
                    wChiHuKind = sparrowsclm.WIK_CHI_HU;
                return { kind: wChiHuKind, fan: wCurrFanShu };
            };
            //分析扑克
            GameLogic.prototype.AnalyseCard = function (cbCardIndex, WeaveItem, cbWeaveCount, AnalyseItemArray) {
                //计算数目
                var cbCardCount = this.GetCardCount(cbCardIndex);
                //效验数目+*
                egret.assert((cbCardCount >= 2) && (cbCardCount <= sparrowsclm.MAX_COUNT) && ((cbCardCount - 2) % 3 == 0));
                if ((cbCardCount < 2) || (cbCardCount > sparrowsclm.MAX_COUNT) || ((cbCardCount - 2) % 3 != 0))
                    return false;
                //变量定义
                var cbKindItemCount = 0;
                var KindItem = utils.allocArray(27 * 2 + 28, tagKindItem);
                //需求判断
                var cbLessKindItem = Math.floor((cbCardCount - 2) / 3);
                egret.assert((cbLessKindItem + cbWeaveCount) == sparrowsclm.MAX_WEAVE);
                //单吊判断
                if (cbLessKindItem == 0) {
                    //效验参数
                    egret.assert((cbCardCount == 2) && (cbWeaveCount == sparrowsclm.MAX_WEAVE));
                    //牌眼判断
                    for (var i = sparrowsclm.MIN_INDEX; i < sparrowsclm.MAX_INDEX - sparrowsclm.MAX_HUA_CARD; i++) {
                        if (cbCardIndex[i] == 2) {
                            //变量定义
                            var AnalyseItem = new tagAnalyseItem();
                            //设置结果
                            for (var j = 0; j < cbWeaveCount; j++) {
                                AnalyseItem.cbWeaveKind[j] = WeaveItem[j].cbWeaveKind;
                                AnalyseItem.cbCenterCard[j] = WeaveItem[j].cbCenterCard;
                                for (var k = 0; k < 4; k++) {
                                    AnalyseItem.cbCardData[j][k] = WeaveItem[j].cbCardData[k];
                                }
                            }
                            AnalyseItem.cbCardEye = this.SwitchToCardData(i);
                            //插入结果
                            AnalyseItemArray.push(AnalyseItem);
                            return true;
                        }
                    }
                    return false;
                }
                //拆分分析
                var cbMagicCardIndex = utils.allocArray(sparrowsclm.MAX_INDEX, Number);
                for (var i = sparrowsclm.MIN_INDEX; i < sparrowsclm.MAX_INDEX; i++) {
                    cbMagicCardIndex[i] = cbCardIndex[i];
                }
                if (cbCardCount >= 3) {
                    for (var i = sparrowsclm.MIN_INDEX; i < sparrowsclm.MAX_INDEX - sparrowsclm.MAX_HUA_CARD; i++) {
                        //同牌判断
                        //如果是财神,并且财神数小于3,则不进行组合
                        if (cbMagicCardIndex[i] >= 3) {
                            var nTempIndex = Math.min(3, Number(cbMagicCardIndex[i]));
                            do {
                                egret.assert(cbKindItemCount < 27 * 2 + 28);
                                var cbIndex = i;
                                var cbCenterCard = this.SwitchToCardData(i);
                                //设置变量
                                KindItem[cbKindItemCount].cbWeaveKind = sparrowsclm.WIK_PENG;
                                KindItem[cbKindItemCount].cbCenterCard = cbCenterCard;
                                KindItem[cbKindItemCount].cbValidIndex[0] = cbIndex;
                                KindItem[cbKindItemCount].cbValidIndex[1] = cbIndex;
                                KindItem[cbKindItemCount].cbValidIndex[2] = cbIndex;
                                cbKindItemCount++;
                            } while (--nTempIndex > 0 && nTempIndex >= 3);
                        }
                        //连牌判断
                        if ((i < (sparrowsclm.MAX_INDEX - sparrowsclm.MAX_HUA_CARD - 2)) && ((i % 9) < 7)) {
                            //只要财神牌数加上3个顺序索引的牌数大于等于3,则进行组合
                            if (Number(cbMagicCardIndex[i]) + Number(cbMagicCardIndex[i + 1]) + Number(cbMagicCardIndex[i + 2]) >= 3) {
                                var cbIndex = [Number(cbMagicCardIndex[i]), Number(cbMagicCardIndex[i + 1]), Number(cbMagicCardIndex[i + 2])];
                                //定义变量
                                var bSuccess = false;
                                var cbValidIndex = [0, 0, 0];
                                while (cbIndex[0] + cbIndex[1] + cbIndex[2] >= 3) {
                                    bSuccess = true;
                                    for (var j = 0; j < 3; j++) {
                                        if (cbIndex[j] > 0) {
                                            cbIndex[j]--;
                                            cbValidIndex[j] = i + j;
                                        }
                                        else {
                                            bSuccess = false;
                                            break;
                                        }
                                    }
                                    if (bSuccess) {
                                        egret.assert(cbKindItemCount < 27 * 2 + 28);
                                        KindItem[cbKindItemCount].cbWeaveKind = sparrowsclm.WIK_LEFT;
                                        KindItem[cbKindItemCount].cbCenterCard = this.SwitchToCardData(i);
                                        KindItem[cbKindItemCount].cbValidIndex[0] = cbValidIndex[0];
                                        KindItem[cbKindItemCount].cbValidIndex[1] = cbValidIndex[1];
                                        KindItem[cbKindItemCount].cbValidIndex[2] = cbValidIndex[2];
                                        cbKindItemCount++;
                                    }
                                    else
                                        break;
                                }
                            }
                        }
                    }
                }
                //组合分析
                if (cbKindItemCount >= cbLessKindItem) {
                    //变量定义
                    var cbCardIndexTemp = utils.allocArray(sparrowsclm.MAX_INDEX, Number);
                    //变量定义
                    var cbIndex = [0, 0, 0];
                    for (var i = 0; i < 3; i++)
                        cbIndex[i] = i;
                    var pKindItem = utils.allocArray(sparrowsclm.MAX_WEAVE, tagKindItem);
                    var KindItemTemp = utils.allocArray(27 * 2 + 28, tagKindItem);
                    for (var i = 0; i < 27 * 2 + 28; i++) {
                        var item = KindItemTemp[i];
                        item.cbCenterCard = KindItem[i].cbCenterCard;
                        item.cbWeaveKind = KindItem[i].cbWeaveKind;
                        for (var j = 0; j < KindItem[i].cbValidIndex.length; j++) {
                            item.cbValidIndex[j] = KindItem[i].cbValidIndex[j];
                        }
                    }
                    //开始组合
                    do {
                        //设置变量
                        for (var i = sparrowsclm.MIN_INDEX; i < sparrowsclm.MAX_INDEX; i++) {
                            cbCardIndexTemp[i] = cbCardIndex[i];
                        }
                        for (var i = 0; i < 27 * 2 + 28; i++) {
                            var item = KindItem[i];
                            item.cbCenterCard = KindItemTemp[i].cbCenterCard;
                            item.cbWeaveKind = KindItemTemp[i].cbWeaveKind;
                            for (var j = 0; j < KindItemTemp[i].cbValidIndex.length; j++) {
                                item.cbValidIndex[j] = KindItemTemp[i].cbValidIndex[j];
                            }
                        }
                        for (var i = 0; i < cbLessKindItem; i++) {
                            pKindItem[i].cbCenterCard = KindItem[cbIndex[i]].cbCenterCard;
                            pKindItem[i].cbWeaveKind = KindItem[cbIndex[i]].cbWeaveKind;
                            for (var j = 0; j < KindItem[cbIndex[i]].cbValidIndex.length; j++) {
                                pKindItem[i].cbValidIndex[j] = KindItem[cbIndex[i]].cbValidIndex[j];
                            }
                        }
                        //数量判断
                        var bEnoughCard = true;
                        for (var i = 0; i < cbLessKindItem * 3; i++) {
                            //存在判断
                            var index = pKindItem[Math.floor(i / 3)].cbValidIndex[i % 3];
                            if (cbCardIndexTemp[index] == 0) {
                                bEnoughCard = false;
                                break;
                            }
                            else {
                                cbCardIndexTemp[index] = Number(cbCardIndexTemp[index]) - 1;
                            }
                        }
                        //胡牌判断
                        if (bEnoughCard == true) {
                            //牌眼判断
                            var cbCardEye = 0;
                            if (this.GetCardCount(cbCardIndexTemp) == 2) {
                                for (var i = sparrowsclm.MIN_INDEX; i < sparrowsclm.MAX_INDEX - sparrowsclm.MAX_HUA_CARD; i++) {
                                    if (cbCardIndexTemp[i] == 2) {
                                        cbCardEye = this.SwitchToCardData(i);
                                        break;
                                    }
                                }
                            }
                            //组合类型
                            if (cbCardEye != 0) {
                                //变量定义
                                var AnalyseItem = new tagAnalyseItem();
                                //设置组合
                                for (var i = 0; i < cbWeaveCount; i++) {
                                    AnalyseItem.cbWeaveKind[i] = WeaveItem[i].cbWeaveKind;
                                    AnalyseItem.cbCenterCard[i] = WeaveItem[i].cbCenterCard;
                                    this.GetWeaveCard(WeaveItem[i].cbWeaveKind, WeaveItem[i].cbCenterCard, AnalyseItem.cbCardData[i]);
                                }
                                //设置牌型
                                for (var i = 0; i < cbLessKindItem; i++) {
                                    AnalyseItem.cbWeaveKind[i + cbWeaveCount] = pKindItem[i].cbWeaveKind;
                                    AnalyseItem.cbCenterCard[i + cbWeaveCount] = pKindItem[i].cbCenterCard;
                                    AnalyseItem.cbCardData[cbWeaveCount + i][0] = this.SwitchToCardData(pKindItem[i].cbValidIndex[0]);
                                    AnalyseItem.cbCardData[cbWeaveCount + i][1] = this.SwitchToCardData(pKindItem[i].cbValidIndex[1]);
                                    AnalyseItem.cbCardData[cbWeaveCount + i][2] = this.SwitchToCardData(pKindItem[i].cbValidIndex[2]);
                                }
                                //设置牌眼
                                AnalyseItem.cbCardEye = cbCardEye;
                                //插入结果
                                AnalyseItemArray.push(AnalyseItem);
                            }
                        }
                        //设置索引
                        if (cbIndex[cbLessKindItem - 1] == (cbKindItemCount - 1)) {
                            var i = void 0;
                            for (i = cbLessKindItem - 1; i > 0; i--) {
                                if ((cbIndex[i - 1] + 1) != cbIndex[i]) {
                                    var cbNewIndex = cbIndex[i - 1];
                                    for (var j = (i - 1); j < cbLessKindItem; j++)
                                        cbIndex[j] = cbNewIndex + j - i + 2;
                                    break;
                                }
                            }
                            if (i == 0)
                                break;
                        }
                        else
                            cbIndex[cbLessKindItem - 1]++;
                    } while (true);
                }
                return (AnalyseItemArray.length > 0);
            };
            return GameLogic;
        }());
        sparrowsclm.GameLogic = GameLogic;
    })(sparrowsclm = game.sparrowsclm || (game.sparrowsclm = {}));
})(game || (game = {}));
