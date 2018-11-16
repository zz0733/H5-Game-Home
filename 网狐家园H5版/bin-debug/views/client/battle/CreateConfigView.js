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
 * 约战配置
 */
var client;
(function (client) {
    /**
     * 布局顺序
     */
    var layOutID = {
        TYPE_USERCOUNT: 0, TYPE_PAY: 1, TYPE_CURRENCY: 2, TYPE_OTHER: 3,
        TYPE_COUNT: 4, TYPE_TIME: 5, TYPE_CELL: 6
    };
    /**
     * 组件模块
     */
    var module = {
        0x01: client.RadioGroup,
        0x02: client.CheckBoxGroup,
        0x04: client.NumInput //df.OPTION_TYPE_INPUT
    };
    var CreateConfigView = (function (_super) {
        __extends(CreateConfigView, _super);
        function CreateConfigView(scene, config, recordConfig) {
            var _this = _super.call(this) || this;
            _this._configNormal = [];
            _this._configSpecial = [];
            _this._kindID = 0;
            //配置标识
            _this.m_nCurIndex = 1;
            //数据保存
            _this.m_OtherOption = [];
            //控件数据
            _this.m_ControlListData = {};
            //控件组件
            _this.m_controlCompanet = {};
            //当前底注
            _this.m_lBaseScore = 0;
            //当前货币
            _this.m_cbCurrencyKind = 0;
            //结算局数/时间
            _this.m_cbSettleKind = 0;
            //局数
            _this.m_wBalanceCount = 0;
            //时间
            _this.m_dwBalanceTime = 0;
            //人数
            _this.m_wPlayerCount = 0;
            //付款人类型
            _this.m_wPayType = 0;
            //子项数目
            _this.m_wShowCount = 0;
            //是否茶馆
            _this.m_isTeaHouse = false;
            _this._scene = scene;
            _this._configNormal = config.optionInfo;
            _this._configSpecial = config.specialInfo ? config.specialInfo[0] : [];
            _this._CurConfig = _this._configNormal[0] ? _this._configNormal[0] : [];
            _this._kindID = Number(config.id);
            _this.width = 910;
            _this.height = 530;
            _this.onInitConfig();
            return _this;
        }
        /**
         * 配置项
         */
        CreateConfigView.prototype.onInitConfig = function () {
            //人数 付款人 货币类型 配置 局数 时间 底注
            this.createUserCountConfig();
            this.createPayerConfig();
            this.createCurrencyConfig();
            this.createCustomConfig();
            this.createRoundConfig();
            this.createTimeConfig();
            this.createCellConfig();
            this.onRestLayout();
            //无局数无时间选择
            if (this.m_dwBalanceTime == 0 && this.m_wBalanceCount == 0) {
                if (null != this.m_ControlListData[layOutID.TYPE_COUNT]) {
                    this.m_wBalanceCount = this._CurConfig.wPlayCount[0];
                    this.m_cbSettleKind = df.SETTLE_KIND_COUNT;
                    this.m_controlCompanet[layOutID.TYPE_COUNT].setSelectedIndex(0);
                }
                else if (null != this.m_ControlListData[layOutID.TYPE_TIME]) {
                    this.m_dwBalanceTime = this._CurConfig.dwPlayTime[1];
                    this.m_cbSettleKind = df.SETTLE_KIND_TIME;
                    this.m_controlCompanet[layOutID.TYPE_TIME].setSelectedIndex(0);
                }
                else {
                    this.m_cbSettleKind = df.SETTLE_KIND_NONE;
                }
            }
        };
        CreateConfigView.prototype.onRestLayout = function () {
            var _this = this;
            var showCompanet = function (scene, showData, changeListener) {
                var companet = new module[showData.type](scene, showData, changeListener);
                scene.addChild(companet);
                companet.x = 0;
                companet.y = height;
                height += companet.height + 15;
                return companet;
            };
            var showCount = this.m_wShowCount;
            var height = 0;
            //人数
            if (null != this.m_ControlListData[layOutID.TYPE_USERCOUNT]) {
                var showData = this.m_ControlListData[layOutID.TYPE_USERCOUNT];
                this.m_controlCompanet[layOutID.TYPE_USERCOUNT] = showCompanet(this, showData, function (index) {
                    _this.onUserCoutChange(index, _this._configNormal);
                });
            }
            //支付模式
            if (null != this.m_ControlListData[layOutID.TYPE_PAY]) {
                var showData = this.m_ControlListData[layOutID.TYPE_PAY];
                this.m_controlCompanet[layOutID.TYPE_PAY] = showCompanet(this, showData, function (index) {
                    _this.m_wPayType = (index == 0) ? df.PAY_TYPE_OWNER : df.PAY_TYPE_USER;
                    _this.onConfigChangeEvent(layOutID.TYPE_PAY, index);
                });
            }
            //货币种类
            if (null != this.m_ControlListData[layOutID.TYPE_CURRENCY]) {
                var showData = this.m_ControlListData[layOutID.TYPE_CURRENCY];
                this.m_controlCompanet[layOutID.TYPE_CURRENCY] = showCompanet(this, showData, function (index) {
                    _this.m_cbCurrencyKind = (index == 0) ? df.CURRENCY_KIND_ROOMCARD : df.CURRENCY_KIND_INGOT;
                    _this.onConfigChangeEvent(layOutID.TYPE_CURRENCY, index);
                });
            }
            //自定义规则
            if (null != this.m_ControlListData[layOutID.TYPE_OTHER] && this.m_ControlListData[layOutID.TYPE_OTHER].length >= 1) {
                this.m_controlCompanet[layOutID.TYPE_OTHER] = [];
                var _loop_1 = function (i) {
                    var showData = this_1.m_ControlListData[layOutID.TYPE_OTHER][i];
                    this_1.m_controlCompanet[layOutID.TYPE_OTHER].push(showCompanet(this_1, showData, function (index) { _this.onCustomChange(i, index, _this._configSpecial); }));
                    this_1.m_controlCompanet[layOutID.TYPE_OTHER][i].setSelectedIndex(showData.seletedIdx);
                };
                var this_1 = this;
                for (var i = 0; i < this.m_ControlListData[layOutID.TYPE_OTHER].length; i++) {
                    _loop_1(i);
                }
            }
            //局数结算
            if (null != this.m_ControlListData[layOutID.TYPE_COUNT]) {
                var showData = this.m_ControlListData[layOutID.TYPE_COUNT];
                this.m_controlCompanet[layOutID.TYPE_COUNT] = showCompanet(this, showData, function (index) { _this.onRoundChange(index, _this._configNormal); });
            }
            //时间结算
            if (null != this.m_ControlListData[layOutID.TYPE_TIME]) {
                var showData = this.m_ControlListData[layOutID.TYPE_TIME];
                this.m_controlCompanet[layOutID.TYPE_TIME] = showCompanet(this, showData, function (index) { _this.onTimeChange(index, _this._configNormal); });
            }
            //底分
            if (null != this.m_ControlListData[layOutID.TYPE_CELL]) {
                var showData = this.m_ControlListData[layOutID.TYPE_CELL];
                this.m_controlCompanet[layOutID.TYPE_CELL] = showCompanet(this, showData, function (value) { _this.onConfigChangeEvent(layOutID.TYPE_CELL, value); });
            }
        };
        //人数
        CreateConfigView.prototype.createUserCountConfig = function () {
            //是否多个配置
            var tmpIndex = -1;
            if (this._configNormal.length > 1) {
                //记录配置标识 根据玩家习惯记录
                var recordPlayerCount = this._recordConfig ? this._recordConfig.wPlayerCount : 0;
                //数据
                var showData = { type: df.OPTION_TYPE_SINGLE, title: "人数 :", itemCount: this._configNormal.length, seletedIdx: 0, option: [] };
                for (var i = 0; i < this._configNormal.length; i++) {
                    showData.option.push(this._configNormal[i].wPlayerCount + "\u4EBA");
                    if (recordPlayerCount == this._configNormal[i].wPlayerCount) {
                        showData.seletedIdx = i;
                        tmpIndex = i;
                        this.m_wPlayerCount = this._configNormal[i].wPlayerCount;
                    }
                }
                if (-1 == tmpIndex) {
                    //当前标识
                    this.m_nCurIndex = 0;
                    //当前配置
                    this._CurConfig = this._configNormal[0];
                    //当前人数
                    this.m_wPlayerCount = this._configNormal[0].wPlayerCount;
                }
                //保存控件
                this.m_ControlListData[layOutID.TYPE_USERCOUNT] = showData;
            }
            else {
                //当前标识
                this.m_nCurIndex = 0;
                //当前配置
                this._CurConfig = this._configNormal[0];
                //当前人数
                this.m_wPlayerCount = this._configNormal[0].wPlayerCount;
            }
        };
        //付款人
        CreateConfigView.prototype.createPayerConfig = function () {
            //房主支付支持
            var bPayOwner = this._CurConfig.wSuportPayType && (this._CurConfig.wSuportPayType & df.PAY_TYPE_OWNER) != 0;
            //AA支付支持
            var bPayAA = this._CurConfig.wSuportPayType && (this._CurConfig.wSuportPayType & df.PAY_TYPE_USER) != 0;
            //历史数据
            var recordPayType = this._recordConfig ? this._recordConfig.wPayType : df.PAY_TYPE_OWNER;
            //数据纠正
            if (recordPayType == df.PAY_TYPE_OWNER) {
                recordPayType = bPayOwner && recordPayType;
            }
            else if (recordPayType == df.PAY_TYPE_USER) {
                recordPayType = bPayAA && recordPayType;
            }
            else {
                recordPayType = null;
            }
            //当前类型
            this.m_wPayType = (recordPayType == null) ? (bPayOwner ? df.PAY_TYPE_OWNER : df.PAY_TYPE_USER) : recordPayType;
            if (this.m_isTeaHouse) {
                return;
            }
            if (bPayOwner && bPayAA) {
                //数据
                var showData = {
                    type: df.OPTION_TYPE_SINGLE, title: "支付房费 :", itemCount: 2,
                    seletedIdx: this.m_wPayType == df.PAY_TYPE_OWNER ? 0 : 1, option: ["房主支付", "AA支付"]
                };
                //保存控件
                this.m_ControlListData[layOutID.TYPE_PAY] = showData;
                this.m_wShowCount++;
            }
        };
        //货币类型
        CreateConfigView.prototype.createCurrencyConfig = function () {
            //房卡支持
            var bRoomCardMask = this._CurConfig.wOptionMask && (this._CurConfig.wOptionMask & df.OPTION_MASK_ROOMCARD) != 0;
            //钻石支持
            var bIngotMask = this._CurConfig.wOptionMask && (this._CurConfig.wOptionMask & df.OPTION_MASK_INGOT) != 0;
            //历史数据
            var recordCurrency = this._recordConfig ? this._recordConfig.cbCurrencyKind : df.CURRENCY_KIND_INGOT;
            //数据纠正
            if (recordCurrency == df.CURRENCY_KIND_ROOMCARD) {
                recordCurrency = bRoomCardMask ? recordCurrency : df.CURRENCY_KIND_INGOT;
            }
            else if (recordCurrency == df.CURRENCY_KIND_INGOT) {
                recordCurrency = bIngotMask ? recordCurrency : df.CURRENCY_KIND_ROOMCARD;
            }
            else {
                recordCurrency = null;
            }
            //当前类型
            this.m_cbCurrencyKind = (recordCurrency == null) ? (bIngotMask ? df.CURRENCY_KIND_INGOT : df.CURRENCY_KIND_ROOMCARD) : recordCurrency;
            if (this.m_isTeaHouse) {
                return;
            }
            var stationID = df.STATION_ID;
            if (bRoomCardMask && bIngotMask && (stationID == 2004 || this._kindID != 76)) {
                //数据
                var showData = {
                    type: df.OPTION_TYPE_SINGLE, title: "支付类型 :", itemCount: 2,
                    seletedIdx: this.m_cbCurrencyKind == df.CURRENCY_KIND_ROOMCARD ? 0 : 1, option: ["房卡", "钻石"]
                };
                //保存控件
                this.m_ControlListData[layOutID.TYPE_CURRENCY] = showData;
                this.m_wShowCount++;
            }
        };
        //玩法配置
        CreateConfigView.prototype.createCustomConfig = function () {
            if (0 == this._configSpecial.length)
                return;
            //配置个数
            var wSpecailCount = this._configSpecial.length;
            //配置列表
            var configList = this._configSpecial;
            //控件保存
            var uiIndex = 0;
            this.m_ControlListData[layOutID.TYPE_OTHER] = [];
            //数据保存
            this.m_OtherOption = [];
            //历史数据
            var recordOption = this._recordConfig ? this._recordConfig.options : null;
            for (var i = 0; i < wSpecailCount; i++) {
                this.m_OtherOption.push(0);
                //控件类型支持判断
                if (null != configList[i].type) {
                    var dataComplex = void 0;
                    var nTmpDataCount = Number(configList[i].count ? configList[i].count : 0);
                    var recordData = recordOption ? recordOption[i] : 0;
                    //输入框判断
                    if (configList[i].type == df.OPTION_TYPE_INPUT) {
                        if (configList[i].max && configList[i].min) {
                            recordData = Math.max(recordData, configList[i].min);
                            recordData = Math.min(recordData, configList[i].max);
                            this.m_OtherOption[i] = recordData;
                            dataComplex = {
                                type: df.OPTION_TYPE_INPUT, title: configList[i].name, recordData: recordData,
                                lMaxBaseScore: configList[i].max, lMinBaseScore: configList[i].min
                            };
                            //保存控件
                            this.m_ControlListData[layOutID.TYPE_OTHER].push(dataComplex);
                            this.m_wShowCount++;
                            uiIndex++;
                            return;
                        }
                    }
                    else if (nTmpDataCount) {
                        dataComplex = [];
                        var optionName = [];
                        for (var j = 0; j < nTmpDataCount; j++) {
                            var data = { name: "", value: 0, price: 0, card: 0, ownerprice: 0, ownercard: 0, lMaxBaseScore: 0, lMinBaseScore: 0 };
                            data.name = configList[i].items[j].describe;
                            data.value = configList[i].items[j].value ? configList[i].items[j].value : j;
                            data.price = configList[i].items[j].price ? configList[i].items[j].price : 0;
                            data.card = configList[i].items[j].card ? configList[i].items[j].card : 0;
                            data.ownerprice = configList[i].items[j].ownerprice ? configList[i].items[j].ownerprice : 0;
                            data.ownercard = configList[i].items[j].ownercard ? configList[i].items[j].ownercard : 0;
                            data.lMaxBaseScore = configList[i].items[j].max;
                            data.lMinBaseScore = configList[i].items[j].min;
                            dataComplex.push(data);
                            optionName.push(data.name);
                        }
                        if (null == dataComplex || dataComplex.length == 0)
                            return;
                        // 初始数据 单选 记录的选择index
                        if (configList[i].type == df.OPTION_TYPE_SINGLE) {
                            this.m_OtherOption[i] = Math.min(configList[i].count - 1, recordData); //范围过滤
                            var showData = {
                                type: df.OPTION_TYPE_SINGLE, title: configList[i].name + " :", itemCount: nTmpDataCount,
                                seletedIdx: this.m_OtherOption[i], option: optionName
                            };
                            //保存控件
                            this.m_ControlListData[layOutID.TYPE_OTHER].push(showData);
                            this.m_wShowCount++;
                            uiIndex++;
                        }
                        else if (configList[i].type == df.OPTION_TYPE_MULTIPLE) {
                            //多选 记录的所有选择选对应的value 或 | 操作后的值 
                            this.m_OtherOption[i] = recordData;
                            var selectedValue = [];
                            for (var k = 0; k < nTmpDataCount; k++) {
                                if ((this.m_OtherOption[i] & dataComplex[k].value) != 0) {
                                    //判断是否包含
                                    selectedValue.push(1);
                                }
                                else {
                                    selectedValue.push(0);
                                }
                            }
                            var showData = {
                                type: df.OPTION_TYPE_MULTIPLE, title: configList[i].name + " :", itemCount: nTmpDataCount,
                                seletedValue: selectedValue, option: optionName
                            };
                            //保存控件
                            this.m_ControlListData[layOutID.TYPE_OTHER].push(showData);
                            this.m_wShowCount++;
                            uiIndex++;
                        }
                    }
                }
            }
        };
        //局数
        CreateConfigView.prototype.createRoundConfig = function () {
            //支持判断
            var bCountMask = (this._CurConfig.wOptionMask & df.OPTION_MASK_COUNT);
            if (bCountMask && bCountMask != 0) {
                //记录
                var recordCount = this._recordConfig ? this._recordConfig.wCount : 0;
                //当前选择
                var cbTmpIndex = -1;
                //数据
                var showData = {
                    type: df.OPTION_TYPE_SINGLE, title: "局数结算 :", itemCount: 0,
                    seletedIdx: -1, option: []
                };
                for (var i = 0; i < 3; i++) {
                    if (this._CurConfig.wPlayCount[i] != 0) {
                        if (recordCount == this._CurConfig.wPlayCount[i]) {
                            cbTmpIndex = i;
                            this.m_wBalanceCount = recordCount;
                            this.m_cbSettleKind = df.SETTLE_KIND_COUNT;
                            showData.seletedIdx = i;
                        }
                        showData.itemCount++;
                        showData.option.push(this._CurConfig.wPlayCount[i] + "\u5C40");
                    }
                }
                this.m_ControlListData[layOutID.TYPE_COUNT] = showData;
                this.m_wShowCount++;
            }
        };
        //时间
        CreateConfigView.prototype.createTimeConfig = function () {
            //支持判断
            var bTimeMask = (this._CurConfig.wOptionMask & df.OPTION_MASK_TIME);
            if (bTimeMask && bTimeMask != 0) {
                //时间记录
                var recordTime = this._recordConfig ? this._recordConfig.dwTime : 0;
                //当前选择
                var cbTmpIndex = -1;
                //数据
                var showData = {
                    type: df.OPTION_TYPE_SINGLE, title: "时间结算 :", itemCount: 0,
                    seletedIdx: -1, option: []
                };
                for (var i = 0; i < 3; i++) {
                    if (this._CurConfig.dwPlayTime[i] != 0) {
                        if (recordTime == this._CurConfig.dwPlayTime[i]) {
                            cbTmpIndex = i;
                            this.m_dwBalanceTime = recordTime;
                            this.m_cbSettleKind = df.SETTLE_KIND_TIME;
                        }
                        showData.itemCount++;
                        showData.option.push(this._CurConfig.dwPlayTime[i] / 60 + "\u5206\u949F");
                    }
                }
                this.m_ControlListData[layOutID.TYPE_TIME] = showData;
                this.m_wShowCount++;
            }
        };
        //底分
        CreateConfigView.prototype.createCellConfig = function () {
            //获取记录
            var recordCell = this._recordConfig ? this._recordConfig.cellScore : 0;
            this.m_lBaseScore = (recordCell >= this._CurConfig.lMinBaseScore && recordCell <= this._CurConfig.lMaxBaseScore) ? recordCell : this._CurConfig.lMinBaseScore;
            //可调整判断
            if (this._CurConfig.lMaxBaseScore != this._CurConfig.lMinBaseScore) {
                var showData = {
                    type: df.OPTION_TYPE_INPUT, title: "游戏底分 :", recordData: this.m_lBaseScore,
                    lMaxBaseScore: this._CurConfig.lMaxBaseScore, lMinBaseScore: this._CurConfig.lMinBaseScore
                };
                this.m_ControlListData[layOutID.TYPE_CELL] = showData;
                this.m_wShowCount++;
            }
        };
        //ui刷新 约战消耗
        CreateConfigView.prototype.onFreshUiInfo = function (info) {
            this._scene.dispatchEvent(new customEvent.CustomEvent(customEvent.CustomEvent.EVENT_BATTLE_REFRESH, false, false, info));
        };
        //人数改变事件
        CreateConfigView.prototype.onUserCoutChange = function (index, data) {
            if (null == data)
                return;
            this.m_nCurIndex = index;
            this._CurConfig = data[this.m_nCurIndex];
            this.m_wPlayerCount = this._CurConfig.wPlayerCount;
            //付款人重置
            if (null != this.m_controlCompanet[layOutID.TYPE_PAY]) {
                this.m_wPayType = df.PAY_TYPE_OWNER;
                this.m_controlCompanet[layOutID.TYPE_PAY].setSelectedIndex(0);
            }
            //货币类型重置
            if (null != this.m_controlCompanet[layOutID.TYPE_CURRENCY]) {
                this.m_cbCurrencyKind = df.OPTION_MASK_ROOMCARD;
                this.m_controlCompanet[layOutID.TYPE_CURRENCY].setSelectedIndex(0);
            }
            //局数重置
            if (null != this.m_controlCompanet[layOutID.TYPE_COUNT]) {
                this.m_dwBalanceTime = 0;
                this.m_cbSettleKind = df.SETTLE_KIND_COUNT;
                this.m_wBalanceCount = this._CurConfig.wPlayCount[0];
                this.m_controlCompanet[layOutID.TYPE_COUNT].setSelectedIndex(0);
            }
            //时间重置
            if (null != this.m_controlCompanet[layOutID.TYPE_TIME]) {
                this.m_dwBalanceTime = this._CurConfig.dwPlayTime[0];
                this.m_wBalanceCount = 0;
                this.m_cbSettleKind = df.SETTLE_KIND_TIME;
                this.m_controlCompanet[layOutID.TYPE_TIME].setSelectedIndex(0);
            }
            //底注重置
            if (null != this.m_controlCompanet[layOutID.TYPE_CELL]) {
                this.m_controlCompanet[layOutID.TYPE_CELL].setOrignalCell(this._CurConfig.lMinBaseScore);
            }
            //玩法重置
            if (null != this.m_controlCompanet[layOutID.TYPE_OTHER]) {
                for (var i = 0; i < this._configSpecial.length; i++) {
                    if (null != this.m_controlCompanet[layOutID.TYPE_OTHER][i]) {
                        this.m_controlCompanet[layOutID.TYPE_OTHER][i].onResetView();
                        if (this._configSpecial[i].type == df.OPTION_TYPE_SINGLE) {
                            this.m_controlCompanet[layOutID.TYPE_OTHER][i].setSelectedIndex(0);
                            this.m_OtherOption[i] = 0;
                        }
                        else if (this._configSpecial[i].type == df.OPTION_TYPE_INPUT) {
                            this.m_OtherOption[i] = this.m_controlCompanet[layOutID.TYPE_OTHER][i].getInputValue();
                        }
                        else {
                            this.m_OtherOption[i] = 0;
                        }
                    }
                }
            }
            this.onConfigChangeEvent(layOutID.TYPE_USERCOUNT, index);
        };
        //时间结算改变事件
        CreateConfigView.prototype.onTimeChange = function (index, data) {
            this.m_dwBalanceTime = data[this.m_nCurIndex].dwPlayTime[index] ? data[this.m_nCurIndex].dwPlayTime[index] : 0;
            if (null != this.m_ControlListData[layOutID.TYPE_COUNT]) {
                this.m_wBalanceCount = 0;
                this.m_cbSettleKind = df.SETTLE_KIND_TIME;
                this.m_controlCompanet[layOutID.TYPE_COUNT].onResetView();
            }
            this.onConfigChangeEvent(layOutID.TYPE_COUNT, index);
        };
        //局数结算改变事件
        CreateConfigView.prototype.onRoundChange = function (index, data) {
            this.m_wBalanceCount = data[this.m_nCurIndex].wPlayCount[index] ? data[this.m_nCurIndex].wPlayCount[index] : 0;
            if (null != this.m_ControlListData[layOutID.TYPE_TIME]) {
                this.m_dwBalanceTime = 0;
                this.m_cbSettleKind = df.SETTLE_KIND_COUNT;
                this.m_controlCompanet[layOutID.TYPE_TIME].onResetView();
            }
            this.onConfigChangeEvent(layOutID.TYPE_TIME, index);
        };
        //玩法改变事件
        CreateConfigView.prototype.onCustomChange = function (optionIndex, index, data) {
            var config = data[optionIndex];
            if (null == config || this.m_controlCompanet[layOutID.TYPE_OTHER].length <= optionIndex)
                return;
            if (config.type == df.OPTION_TYPE_SINGLE) {
                this.m_OtherOption[optionIndex] = this.m_controlCompanet[layOutID.TYPE_OTHER][optionIndex].getSelectedIndex();
            }
            else if (config.type == df.OPTION_TYPE_MULTIPLE) {
                var selectedValue = this.m_controlCompanet[layOutID.TYPE_OTHER][optionIndex].getSelectedValue();
                this.m_OtherOption[optionIndex] = selectedValue[index];
            }
            if (config.items[index] && config.items[index].price) {
                this.onConfigChangeEvent(layOutID.TYPE_OTHER, optionIndex, index);
            }
        };
        //变更事件
        CreateConfigView.prototype.onConfigChangeEvent = function (tag, index1, index2) {
            if (null == this._CurConfig)
                return;
            //参数保存
            var lBaseScore = 0, lRoomCard = 0, lDiamond = 0;
            //固定底注显示
            if (this._CurConfig.lMinBaseScore && this._CurConfig.lMinBaseScore != 0 && this._CurConfig.lMinBaseScore == this._CurConfig.lMaxBaseScore) {
                lBaseScore = this._CurConfig.lMinBaseScore;
            }
            var bOwner = this.m_wPayType == df.PAY_TYPE_OWNER; //支付类型
            var bRoomCard = this.m_cbCurrencyKind == df.CURRENCY_KIND_ROOMCARD; //货币类型
            //计算局数/时间结算所需费用
            var companetID = (this.m_cbSettleKind == df.SETTLE_KIND_COUNT) ? layOutID.TYPE_COUNT : layOutID.TYPE_TIME;
            if (null != this.m_controlCompanet[companetID]) {
                var index = this.m_controlCompanet[companetID].getSelectedIndex();
                if (index >= 0 && this._CurConfig.wPlayCount[index]) {
                    if (bRoomCard) {
                        lRoomCard = (lRoomCard ? lRoomCard : 0) + (bOwner ? this._CurConfig.lRoomCard_Owner[index] : this._CurConfig.lRoomCard[index]);
                    }
                    else {
                        lDiamond = (lDiamond ? lDiamond : 0) + (bOwner ? this._CurConfig.lConsumeIngot_Owner[index] : this._CurConfig.lConsumeIngot[index]);
                    }
                }
            }
            //玩法配置
            var uiList = this.m_controlCompanet[layOutID.TYPE_OTHER];
            if (this._configSpecial.length > 0 && null != uiList) {
                var wSpecailCount = this._configSpecial.length;
                for (var i = 0; i < wSpecailCount; i++) {
                    if (null != uiList[i] && this._configSpecial[i].type == df.OPTION_TYPE_SINGLE && this._configSpecial[i].items) {
                        var tmpIndex = uiList[i].getSelectedIndex();
                        if (null != this._configSpecial[i].items[tmpIndex]) {
                            if (bRoomCard) {
                                var itemCard = Number(this._configSpecial[i].items[tmpIndex].card);
                                lRoomCard = lRoomCard + itemCard;
                            }
                            else {
                                var itemPrice = Number(this._configSpecial[i].items[tmpIndex].price);
                                lDiamond = lDiamond + itemPrice;
                            }
                        }
                    }
                }
            }
            //底分
            if (null != this.m_controlCompanet[layOutID.TYPE_CELL]) {
                this.m_lBaseScore = lBaseScore = Math.max(this.m_controlCompanet[layOutID.TYPE_CELL].getInputValue(), this._CurConfig.lMinBaseScore);
            }
            //通知处理
            this.onFreshUiInfo({ baseScore: lBaseScore, card: lRoomCard, diamond: lDiamond, bRoomCard: bRoomCard });
        };
        CreateConfigView.prototype.getConfigResult = function () {
            var configResult = {
                wKindID: 0,
                wPlayerCount: 0,
                cbSettleKind: 0,
                wPlayCount: 0,
                dwPlayTime: 0,
                lBaseScore: 0,
                wPayType: 0,
                cbCurrencyKind: 0,
                options: []
            };
            configResult.wKindID = Number(this._kindID);
            configResult.wPlayerCount = Number(this.m_wPlayerCount); //人数
            configResult.cbSettleKind = Number(this.m_cbSettleKind); //结算类型
            configResult.wPlayCount = Number(this.m_wBalanceCount); //结算局数
            configResult.dwPlayTime = Number(this.m_dwBalanceTime); //结算时间
            configResult.lBaseScore = Number(this.m_lBaseScore); //当前底注
            configResult.wPayType = Number(this.m_wPayType); //付款人类型
            configResult.cbCurrencyKind = Number(this.m_cbCurrencyKind); //当前货币
            for (var i = 0; i < this.m_OtherOption.length; i++) {
                configResult.options.push(this.m_OtherOption[i]);
            }
            return configResult;
        };
        return CreateConfigView;
    }(egret.Sprite));
    client.CreateConfigView = CreateConfigView;
})(client || (client = {}));
