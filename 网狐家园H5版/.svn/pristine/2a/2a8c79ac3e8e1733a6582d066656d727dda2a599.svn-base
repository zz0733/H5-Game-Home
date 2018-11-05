/**
 * 商城
 */
namespace client {
    const PaymentMode = {
        Wechat: 0,
        AliPay: 1
    }
    export class ShopLayer extends eui.UILayer {
        private _scene: any;
        private _showIndex: number = 0;
        private _paymentMode = PaymentMode.Wechat;
        constructor(scene: any, showIndex?: number) {
            super();
            this._scene = scene;
            this._showIndex = showIndex ? showIndex : 0;
        }
        createChildren() {
            super.createChildren();
            this.once(egret.Event.ADDED_TO_STAGE, this.onInitLayer, this);
            this.once(egret.Event.REMOVED_FROM_STAGE, this.onExit, this);

            this.addEventListener(customEvent.CustomEvent.EVENT_SHOP_REFRESH, this.onRefreshInfo, this);
        }

        /**
         * 初始化
         */
        private _panel_purchase_type: eui.Panel;    //支付方式
        private _panel_info: eui.Panel;             //财富信息
        private _panel_medal: eui.Panel;            //奖牌信息
        private _panel_purchase_ingot: eui.Panel;   //充值钻石
        private _panel_purchase_gold: eui.Panel;    //购买金币
        private _panel_bank: eui.Panel;             //金币钱包
        private _panel_exchange: eui.Panel;         //兑换商城
        private _panel_purchase_roomCard: eui.Panel;//购买房卡
        private _check_wechat: eui.CheckBox;        //微信支付
        private _check_zfb: eui.CheckBox;           //支付宝支付
        private _checkItems: eui.CheckBox[] = [];   //菜单栏
        private _tips: eui.Label;                   //温馨提示
        private _tips_content: eui.Label;           //提示内容
        private _panel_medals: eui.Panel;           //奖牌
        private _panels: eui.Panel[] = [];          //面板

        //个人信息
        private _Label_Ingot: eui.Label; //钻石数目
        private _Label_Gold: eui.Label;  //金币数据
        private _Label_Medal: eui.Label; //奖牌数据

        private _bankView: shop.Bank;
        private _rechargeView: shop.Recharge;
        private _exchangeView: shop.Exchange;
        private _realItemView: shop.RealItem;
        public onInitLayer() {
            //加载皮肤 
            let componet = new eui.Component();
            this.addChild(componet);
            componet.skinName = skins.ShopLayer;

            //面板
            this._panel_purchase_type = componet.getChildByName("panel_purchaseType") as eui.Panel;
            this._panel_info = componet.getChildByName("panel_info") as eui.Panel;
            this._panel_medal = componet.getChildByName("panel_medal") as eui.Panel;
            this._panel_purchase_ingot = componet.getChildByName("PurchaseIngot") as eui.Panel;
            this._panel_purchase_gold = componet.getChildByName("PurchaseGold") as eui.Panel;
            this._panel_bank = componet.getChildByName("Bank") as eui.Panel;
            this._panel_exchange = componet.getChildByName("Exchange") as eui.Panel;
            this._panel_purchase_roomCard = componet.getChildByName("RoomCard") as eui.Panel;

            this._panels = [this._panel_purchase_ingot, this._panel_purchase_gold, this._panel_bank, this._panel_exchange, this._panel_purchase_roomCard];

            //CheckBox
            this._check_wechat = this._panel_purchase_type.getChildByName("Wechat") as eui.CheckBox;
            this._check_wechat.addEventListener(egret.Event.CHANGE, this.onEventChange, this);
            this._check_zfb = this._panel_purchase_type.getChildByName("ZFB") as eui.CheckBox;
            this._check_zfb.addEventListener(egret.Event.CHANGE, this.onEventChange, this);
            for (let i = 0; i < 5; i++) {
                let checkbox = componet.getChildByName(`check_${i}`) as eui.CheckBox;
                this._checkItems.push(checkbox);
                checkbox.addEventListener(egret.Event.CHANGE, this.onEventChange, this);
            }

            //个人数据
            this._Label_Ingot = this._panel_info.getChildByName("label_ingot") as eui.Label;
            this._Label_Gold = this._panel_info.getChildByName("label_gold") as eui.Label;
            this._Label_Medal = this._panel_medal.getChildByName("label_madal") as eui.Label;

            this.updateData();

            //返回按钮
            let btn = componet.getChildByName("bt_close");
            btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClickEvent, this);

            //个人信息
            btn = this._panel_info.getChildByName("info_refresh");
            btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClickEvent, this);

            //个人奖牌
            btn = this._panel_medal.getChildByName("medal_refresh");
            btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClickEvent, this);

            //提示语
            this._tips = componet.getChildByName("tips") as eui.Label;
            this._tips_content = componet.getChildByName("content") as eui.Label;

            //初始界面
            this.initShowIndex(this._showIndex);

        }
        public onExit() {
            this.removeEventListener(customEvent.CustomEvent.EVENT_SHOP_REFRESH, this.onRefreshInfo, this);
        }

        public updateTips(str: string) {
            this._tips_content.text = str;
        }

        public updateData() {
            const userItem = managers.FrameManager.getInstance().m_GlobalUserItem;
            this._Label_Ingot.text = utils.StringUtils.formatNumberThousands(userItem.lUserIngot);
            this._Label_Gold.text = utils.StringUtils.formatNumberThousands(userItem.lUserScore);
            this._Label_Medal.text = utils.StringUtils.formatNumberThousands(userItem.lUserMedal);
        }

        private showSelected(index: number) {
            for (let i = 0; i < this._checkItems.length; i++) {
                if (index == i) {
                    this._checkItems[i].selected = true;
                } else {
                    this._checkItems[i].selected = false;
                }
            }
        }
        private initShowIndex(index: number) {

            switch (index) {
                case df.eShopType.Ingot:
                    {
                        this.showSelected(0);

                        this._panel_purchase_type.visible = true;
                        this._panel_info.visible = true;
                        this._panel_medal.visible = false;
                        this._panel_purchase_ingot.visible = true
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
                            this._rechargeView = new shop.Recharge(this,this._panel_purchase_ingot);
                        }
                    }
                    break;
                case df.eShopType.Gold:
                    {
                        this.showSelected(1);

                        this._panel_purchase_type.visible = false;
                        this._panel_info.visible = false;
                        this._panel_medal.visible = false;
                        this._panel_purchase_ingot.visible = false
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
                            this._exchangeView = new shop.Exchange(this,this._panel_purchase_gold);
                        }
                    }
                    break;
                case df.eShopType.Bank:
                    {
                        this.showSelected(2);

                        this._panel_purchase_type.visible = false;
                        this._panel_info.visible = false;
                        this._panel_medal.visible = false;
                        this._panel_purchase_ingot.visible = false
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
                            this._bankView = new shop.Bank(this,this._panel_bank);
                        }

                    }
                    break;
                case df.eShopType.Exchange:
                    {
                        this.showSelected(3);

                        this._panel_purchase_type.visible = false;
                        this._panel_info.visible = false;
                        this._panel_medal.visible = true;
                        this._panel_purchase_ingot.visible = false
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
                            this._realItemView = new shop.RealItem(this,this._panel_exchange);
                        }
                    }
                    break;
                case df.eShopType.RoomCard:
                    {
                        this.showSelected(4);

                        this._panel_purchase_type.visible = true;
                        this._panel_info.visible = true;
                        this._panel_medal.visible = false;
                        this._panel_purchase_ingot.visible = false
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
        }

        /**刷新UI */
        private onRefreshInfo() {
            this.updateData();

            //银行页面刷新
            if (null != this._bankView) {
                this._bankView.onUserWealth();
            } 

            //大厅财富刷新
            let notify = {
                key:"wealth",
                data: {}
            }
            this._scene.dispatchEvent(new customEvent.CustomEvent(customEvent.CustomEvent.EVENT_PLAZA_REFRESH,false,false,notify));
        }

        /**
         * checkbox
         */
        private onEventChange(e: eui.UIEvent) {
            var target = <eui.CheckBox>e.target;
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
                        this._checkItems.forEach((element, index) => {
                            if (element == target) {
                                this.initShowIndex(index);
                            } else {
                                element.selected = false;
                            }
                        });

                        for (let checkbox of this._checkItems) {
                            if (checkbox == target) {
                                checkbox.selected = true;
                            } else {
                                checkbox.selected = false;
                            }
                        }
                    }
                    break;
            }
        }

        public onButtonClickEvent(e: egret.Event) {
            var target = e.target as eui.Button;

            let tw = egret.Tween.get(target)
                .to({ scaleX: 1.1, scaleY: 1.1 }, 50)
                .to({ scaleX: 1.0, scaleY: 1.0 }, 50);

            switch (target.name) {
                case "bt_close":
                    {
                        this._scene.onChangeView();
                    }
                    break;
               
            }
        }

  

    }
}