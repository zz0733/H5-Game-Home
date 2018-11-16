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
 * 商城
 */
var client;
(function (client) {
    var PaymentMode = {
        Wechat: 0,
        AliPay: 1
    };
    var ShopLayer = (function (_super) {
        __extends(ShopLayer, _super);
        function ShopLayer(scene, showIndex) {
            var _this = _super.call(this) || this;
            _this._showIndex = 0;
            _this._paymentMode = PaymentMode.Wechat;
            _this._checkItems = []; //菜单栏
            _this._panels = []; //面板
            _this._scene = scene;
            _this._showIndex = showIndex ? showIndex : 0;
            return _this;
        }
        ShopLayer.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.once(egret.Event.ADDED_TO_STAGE, this.onInitLayer, this);
            this.once(egret.Event.REMOVED_FROM_STAGE, this.onExit, this);
            this.addEventListener(customEvent.CustomEvent.EVENT_SHOP_REFRESH, this.onRefreshInfo, this);
        };
        ShopLayer.prototype.onInitLayer = function () {
            //加载皮肤 
            var componet = new eui.Component();
            this.addChild(componet);
            componet.skinName = skins.ShopLayer;
            //面板
            this._panel_purchase_type = componet.getChildByName("panel_purchaseType");
            this._panel_info = componet.getChildByName("panel_info");
            this._panel_medal = componet.getChildByName("panel_medal");
            this._panel_purchase_ingot = componet.getChildByName("PurchaseIngot");
            this._panel_purchase_gold = componet.getChildByName("PurchaseGold");
            this._panel_bank = componet.getChildByName("Bank");
            this._panel_exchange = componet.getChildByName("Exchange");
            this._panel_purchase_roomCard = componet.getChildByName("RoomCard");
            this._panels = [this._panel_purchase_ingot, this._panel_purchase_gold, this._panel_bank, this._panel_exchange, this._panel_purchase_roomCard];
            //CheckBox
            this._check_wechat = this._panel_purchase_type.getChildByName("Wechat");
            this._check_wechat.addEventListener(egret.Event.CHANGE, this.onEventChange, this);
            this._check_zfb = this._panel_purchase_type.getChildByName("ZFB");
            this._check_zfb.addEventListener(egret.Event.CHANGE, this.onEventChange, this);
            for (var i = 0; i < 5; i++) {
                var checkbox = componet.getChildByName("check_" + i);
                this._checkItems.push(checkbox);
                checkbox.addEventListener(egret.Event.CHANGE, this.onEventChange, this);
            }
            //个人数据
            this._Label_Ingot = this._panel_info.getChildByName("label_ingot");
            this._Label_Gold = this._panel_info.getChildByName("label_gold");
            this._Label_Medal = this._panel_medal.getChildByName("label_madal");
            this.updateData();
            //返回按钮
            var btn = componet.getChildByName("bt_close");
            btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClickEvent, this);
            //个人信息
            btn = this._panel_info.getChildByName("info_refresh");
            btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClickEvent, this);
            //个人奖牌
            btn = this._panel_medal.getChildByName("medal_refresh");
            btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClickEvent, this);
            //提示语
            this._tips = componet.getChildByName("tips");
            this._tips_content = componet.getChildByName("content");
            //初始界面
            this.initShowIndex(this._showIndex);
        };
        ShopLayer.prototype.onExit = function () {
            this.removeEventListener(customEvent.CustomEvent.EVENT_SHOP_REFRESH, this.onRefreshInfo, this);
        };
        ShopLayer.prototype.updateTips = function (str) {
            this._tips_content.text = str;
        };
        ShopLayer.prototype.updateData = function () {
            var userItem = managers.FrameManager.getInstance().m_GlobalUserItem;
            this._Label_Ingot.text = utils.StringUtils.formatNumberThousands(userItem.lUserIngot);
            this._Label_Gold.text = utils.StringUtils.formatNumberThousands(userItem.lUserScore);
            this._Label_Medal.text = utils.StringUtils.formatNumberThousands(userItem.lUserMedal);
        };
        ShopLayer.prototype.showSelected = function (index) {
            for (var i = 0; i < this._checkItems.length; i++) {
                if (index == i) {
                    this._checkItems[i].selected = true;
                }
                else {
                    this._checkItems[i].selected = false;
                }
            }
        };
        ShopLayer.prototype.initShowIndex = function (index) {
            switch (index) {
                case 0 /* Ingot */:
                    {
                        this.showSelected(0);
                        this._panel_purchase_type.visible = true;
                        this._panel_info.visible = true;
                        this._panel_medal.visible = false;
                        this._panel_purchase_ingot.visible = true;
                        this._panel_purchase_gold.visible = false;
                        this._panel_bank.visible = false;
                        this._panel_exchange.visible = false;
                        this._panel_purchase_roomCard.visible = false;
                        this._tips.x = 820;
                        this._tips.y = 160;
                        this.updateTips("钻石用于约战开房记录战绩");
                        this._tips_content.x = 942;
                        this._tips_content.y = 160;
                        if (null == this._rechargeView) {
                            this._rechargeView = new shop.Recharge(this, this._panel_purchase_ingot);
                        }
                    }
                    break;
                case 1 /* Gold */:
                    {
                        this.showSelected(1);
                        this._panel_purchase_type.visible = false;
                        this._panel_info.visible = false;
                        this._panel_medal.visible = false;
                        this._panel_purchase_ingot.visible = false;
                        this._panel_purchase_gold.visible = true;
                        this._panel_bank.visible = false;
                        this._panel_exchange.visible = false;
                        this._panel_purchase_roomCard.visible = false;
                        this._tips.x = 820;
                        this._tips.y = 160;
                        this.updateTips("金币用于金币房间进行游戏");
                        this._tips_content.x = 942;
                        this._tips_content.y = 160;
                        if (null == this._exchangeView) {
                            this._exchangeView = new shop.Exchange(this, this._panel_purchase_gold);
                        }
                    }
                    break;
                case 2 /* Bank */:
                    {
                        this.showSelected(2);
                        this._panel_purchase_type.visible = false;
                        this._panel_info.visible = false;
                        this._panel_medal.visible = false;
                        this._panel_purchase_ingot.visible = false;
                        this._panel_purchase_gold.visible = false;
                        this._panel_bank.visible = true;
                        this._panel_exchange.visible = false;
                        this._panel_purchase_roomCard.visible = false;
                        this._tips.x = 390;
                        this._tips.y = 160;
                        this.updateTips("存款会预留身上携带1888金币,取款将收取1‰的手续费");
                        this._tips_content.x = 507;
                        this._tips_content.y = 160;
                        if (null == this._bankView) {
                            this._bankView = new shop.Bank(this, this._panel_bank);
                        }
                    }
                    break;
                case 3 /* Exchange */:
                    {
                        this.showSelected(3);
                        this._panel_purchase_type.visible = false;
                        this._panel_info.visible = false;
                        this._panel_medal.visible = true;
                        this._panel_purchase_ingot.visible = false;
                        this._panel_purchase_gold.visible = false;
                        this._panel_bank.visible = false;
                        this._panel_exchange.visible = true;
                        this._panel_purchase_roomCard.visible = false;
                        this._tips.x = 390;
                        this._tips.y = 160;
                        this.updateTips("奖牌可在约战场获得,兑换将在72小时内发货,周末节假日顺延");
                        this._tips_content.x = 507;
                        this._tips_content.y = 160;
                        if (null == this._realItemView) {
                            this._realItemView = new shop.RealItem(this, this._panel_exchange);
                        }
                    }
                    break;
                case 4 /* RoomCard */:
                    {
                        this.showSelected(4);
                        this._panel_purchase_type.visible = true;
                        this._panel_info.visible = true;
                        this._panel_medal.visible = false;
                        this._panel_purchase_ingot.visible = false;
                        this._panel_purchase_gold.visible = false;
                        this._panel_bank.visible = false;
                        this._panel_exchange.visible = false;
                        this._panel_purchase_roomCard.visible = true;
                        this._tips.x = 820;
                        this._tips.y = 160;
                        this.updateTips("钻石用于约战开房记录战绩");
                        this._tips_content.x = 942;
                        this._tips_content.y = 160;
                    }
                    break;
            }
        };
        /**刷新UI */
        ShopLayer.prototype.onRefreshInfo = function () {
            this.updateData();
            //银行页面刷新
            if (null != this._bankView) {
                this._bankView.onUserWealth();
            }
            //大厅财富刷新
            var notify = {
                key: "wealth",
                data: {}
            };
            this._scene.dispatchEvent(new customEvent.CustomEvent(customEvent.CustomEvent.EVENT_PLAZA_REFRESH, false, false, notify));
        };
        /**
         * checkbox
         */
        ShopLayer.prototype.onEventChange = function (e) {
            var _this = this;
            var target = e.target;
            switch (target.name) {
                case "Wechat":
                    {
                        this._check_wechat.selected = true;
                        this._check_zfb.selected = false;
                    }
                    break;
                case "ZFB":
                    {
                        this._check_wechat.selected = false;
                        this._check_zfb.selected = true;
                    }
                    break;
                default:
                    {
                        this._checkItems.forEach(function (element, index) {
                            if (element == target) {
                                _this.initShowIndex(index);
                            }
                            else {
                                element.selected = false;
                            }
                        });
                        for (var _i = 0, _a = this._checkItems; _i < _a.length; _i++) {
                            var checkbox = _a[_i];
                            if (checkbox == target) {
                                checkbox.selected = true;
                            }
                            else {
                                checkbox.selected = false;
                            }
                        }
                    }
                    break;
            }
        };
        ShopLayer.prototype.onButtonClickEvent = function (e) {
            var target = e.target;
            var tw = egret.Tween.get(target)
                .to({ scaleX: 1.1, scaleY: 1.1 }, 50)
                .to({ scaleX: 1.0, scaleY: 1.0 }, 50);
            switch (target.name) {
                case "bt_close":
                    {
                        this._scene.onChangeView();
                    }
                    break;
            }
        };
        return ShopLayer;
    }(eui.UILayer));
    client.ShopLayer = ShopLayer;
})(client || (client = {}));
