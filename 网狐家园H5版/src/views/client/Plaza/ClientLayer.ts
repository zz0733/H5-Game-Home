/**
 * 大厅主入口
 */
namespace client {
    export class ClientLayer extends eui.UILayer implements RES.PromiseTaskReporter {
        protected createChildren(): void {
            super.createChildren();
            this.name = "ClientLayer";

            this.once(egret.Event.ADDED_TO_STAGE, this.onInitLayer, this);
            this.once(egret.Event.REMOVED_FROM_STAGE, this.onExit, this);

            //注册触摸
            this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegan, this);
            this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
            this.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);

            //注册通知
            this.addEventListener(customEvent.CustomEvent.EVENT_PLAZA_REFRESH, this.onPlazaRefresh, this);
        }

        //初始化
        private _rollNotice: models.RollNotice;
        private _listView: eui.Scroller;
        private _gameList: any[] = [];
        private _pageUp: eui.Image;
        private _pageDown: eui.Image;
        private _listBtns: eui.Button[] = [];
        private _nCurAniIndex: number = 0;
        private _kindID: number = df.INVALID_WORD;
        private _dimondLabel: utils.LabelAtlas;
        private _userScoreLabel: utils.LabelAtlas;
        private onInitLayer(): void {
            let componet = new eui.Component();
            this.addChild(componet);

            componet.skinName = skins.Plaza;

            //排行
            let rank = componet.getChildByName("bt_rank");
            rank.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClick, this);

            //分享
            let share = componet.getChildByName("bt_share");
            share.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClick, this);

            //客服
            let service = componet.getChildByName("bt_service");
            service.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClick, this);

            //设置
            let set = componet.getChildByName("bt_option");
            set.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClick, this);

            //充值
            let purchase = componet.getChildByName("bt_shop");
            purchase.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClick, this);

            //商城
            let shop = componet.getChildByName("bt_Ingot_shop");
            shop.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClick, this);

            shop = componet.getChildByName("bt_gold_shop");
            shop.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClick, this);

            //兑换
            let exchange = componet.getChildByName("bt_exchange");
            exchange.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClick, this);

            //活动
            let activity = componet.getChildByName("bt_activity");
            activity.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClick, this);

            //约战查找
            let findbattle = componet.getChildByName("findBattle");
            findbattle.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClick, this);

            //约战创建
            let battleCreate = componet.getChildByName("battleCreate");
            battleCreate.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClick, this);

            //约战列表
            let battleList = componet.getChildByName("battleList");
            battleList.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClick, this);

            //约战记录
            let battleRecord = componet.getChildByName("battleRecord");
            battleRecord.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClick, this);

            //茶馆
            let teaHouse = componet.getChildByName("bt_teaHouse");
            teaHouse.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClick, this);

            //比赛
            let match = componet.getChildByName("bt_match");
            match.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClick, this);

            //邀请Image
            let inviteImage = componet.getChildByName("Invite_image");
            egret.assert(null != inviteImage);
            inviteImage.$setTouchEnabled(false);

            egret.Tween.get(inviteImage, { loop: true })
                .to({ scaleX: 0.8, scaleY: 0.8 }, 800)
                .to({ scaleX: 1.0, scaleY: 1.0 }, 800)

            //活动红包
            let redPacket = componet.getChildByName("active_icon");
            egret.assert(null != redPacket);
            egret.Tween.get(redPacket, { loop: true })
                .to({ scaleX: 0.2, scaleY: 0.2 }, 300)
                .to({ scaleX: 1.0, scaleY: 1.0 }, 300)
                .to({ scaleX: 1.2, scaleY: 1.2 }, 300)
                .wait(500)
                .to({ scaleX: 0.2, scaleY: 0.2 }, 300)
                .to({ scaleX: 1.0, scaleY: 1.0 }, 300)
                .to({ scaleX: 1.2, scaleY: 1.2 }, 300);

            //比赛动画
            let scorll = <eui.Scroller>componet.getChildByName("lightScroll");
            let group = <eui.Group>scorll.getChildByName("lightGroup");
            let light = <eui.Image>group.getChildByName("light");

            egret.Tween.get(light, { loop: true })
                .to({ x: -15, y: 100 }, 1200)
                .wait(2000);

            for (let i = 0; i < 5; i++) {
                let str = "star" + `${i + 1}`;
                let delay = Math.random() * (2000 - 1000);
                let star = <eui.Image>componet.getChildByName(str);
                egret.Tween.get(star, { loop: true })
                    .to({ "alpha": 1.0, "rotation": 90, "scaleX": 1.0 }, 1000)
                    .to({ "alpha": 0.0, "rotation": 180, "scaleX": 0.1 }, 1000)
                    .wait(delay);
            }

            //头像框
            let headframe = <eui.Image>componet.getChildByName("head_frame");

            var handler = (e: egret.Event) => {
                console.log("头像触摸");
                this.onChangeView(df.MODE_USER_INFO);
            }

            //用户头像
            var useritem = managers.FrameManager.getInstance().m_GlobalUserItem;
            var head = models.HeadSprite.createHead(useritem, 120, 120, 40, 40, true, handler);
            utils.setAnchorLeftTop(head);
            this.addChild(head);
            head.x = 0;
            head.y = 0;

            //用户昵称
            var nick: eui.Label = <eui.Label>componet.getChildByName("nick");
            nick.text = managers.FrameManager.getInstance().m_GlobalUserItem.szNickName;

            //用户ID
            var gameid: eui.Label = <eui.Label>componet.getChildByName("gameid");
            gameid.text = `${managers.FrameManager.getInstance().m_GlobalUserItem.dwGameID}`

            //钻石
            var lIngot = managers.FrameManager.getInstance().m_GlobalUserItem.lUserIngot;
            this._dimondLabel = utils.LabelAtlas.createLabel(utils.StringUtils.formatNumberThousands(lIngot), "general_num_list_ingot_png", ",0123456789", 15, 26);
            this.addChild(this._dimondLabel);
            utils.setAnchorLeftTop(this._dimondLabel);
            this._dimondLabel.x = 425;
            this._dimondLabel.y = 21;

            //金币
            var score = managers.FrameManager.getInstance().m_GlobalUserItem.lUserScore;
            this._userScoreLabel = utils.LabelAtlas.createLabel(utils.StringUtils.formatNumberThousands(score), "general_num_list_gold_png", ",0123456789", 15, 26);
            this.addChild(this._userScoreLabel);
            utils.setAnchorLeftTop(this._userScoreLabel);
            this._userScoreLabel.x = 752;
            this._userScoreLabel.y = 21;

            //系统公告
            var msg = ["清凉一夏,昏地主来袭", "平台严禁赌博"];
            this._rollNotice = models.RollNotice.createNotice("general_notice_bg_png", 700, 44, msg, true, df.eRollMode.HORIZONTAL, "general_notice_icon_png");
            utils.setAnchorMidTop(this._rollNotice);
            this.addChild(this._rollNotice);
            this._rollNotice.x = 720;
            this._rollNotice.y = 60;
            this._rollNotice.setTouchHandler((e: egret.Event) => {
                console.log("系统公告");
                if (!this._isTransEnd) {
                    return;
                }
                let controller = managers.FrameManager.getInstance().getRunningController() as models.Controller;
                controller.addWindow(new client.NoticeLayer(controller.getRootLayer(), df.MODE_NOTICE));
            });

            //游戏列表
            let gameinfo = managers.TcpServiceCtrl.getInstance().getGameListInfo()._Info;
            for (let i = 0; i < gameinfo.length; i++) {
                if (gameinfo[i] && gameinfo[i].show) {
                    this._gameList.push(gameinfo[i]);
                }
            }

            //滑动组件
            this._listView = componet.getChildByName("GameListScorll") as eui.Scroller;
            this._listView.addEventListener(egret.Event.CHANGE, this.onScrollerChange, this);
            let Group = this._listView.getChildByName("Group") as eui.Group;
            for (let i = 0; i < this._gameList.length; i++) {
                let btn = new eui.Button;
                btn.name = this._gameList[i].id;
                btn.skinName = "resource/eui_skins/list/battle_list_" + this._gameList[i].id + ".exml";
                Group.addChild(btn);
                btn.addEventListener(egret.TouchEvent.TOUCH_END, this.onButtonClick, this);
                utils.setAnchorCenter(btn);
                btn.x = btn.width / 2;
                btn.y = btn.height / 2 + i * 160;

                this._listBtns.push(btn);

                //加遮罩
                let mask = new eui.Image("general_mask_bg_png");
                mask.name = "mask"
                btn.addChild(mask);
                utils.setAnchorCenter(mask);
                mask.x = btn.width / 2;
                mask.y = btn.height / 2;
                mask.visible = false;

                //光
                let light = new eui.Image("general_mask_png");
                light.name = "light"
                btn.addChild(light);
                utils.setAnchorLeftTop(light);
                light.x = 0;
                light.y = 0;
                light.visible = false;

                //设置遮罩
                light.mask = mask;
            }

            this.listLightAni();


            //翻页标识
            this._pageUp = componet.getChildByName("PageUp") as eui.Image;
            this._pageDown = componet.getChildByName("PageDown") as eui.Image;

            //默认下拉
            this._pageUp.visible = false;

            //呼吸动画
            egret.Tween.get(this._pageUp, { loop: true })
                .to({ scaleX: 1.5, scaleY: 1.5 }, 500)
                .to({ scaleX: 1.0, scaleY: 1.0 }, 500)
                .wait(500)
                .to({ scaleX: 1.5, scaleY: 1.5 }, 500)
                .to({ scaleX: 1.0, scaleY: 1.0 }, 500);

            egret.Tween.get(this._pageDown, { loop: true })
                .to({ scaleX: 1.5, scaleY: 1.5 }, 500)
                .to({ scaleX: 1.0, scaleY: 1.0 }, 500)
                .wait(500)
                .to({ scaleX: 1.5, scaleY: 1.5 }, 500)
                .to({ scaleX: 1.0, scaleY: 1.0 }, 500);
        }


        /**
         * 界面隐藏
         */
        viewWillDisappear(): void {
            console.log("ClientLayer viewWillDisappear");
        }

        /**
         * 界面切入
         */
        private _isTransEnd: boolean = true;
        transAnibegin(): void {
            this._isTransEnd = false;
            console.log("ClientLayer transAnibegin");
        }

        /**
        * 界面切入完成
        */
        transFinish(): void {
            console.log("ClientLayer transAniFinish");

            this._isTransEnd = true;

            //判断被锁
            if (managers.FrameManager.getInstance().m_GlobalUserItem.wLockServerID != 0 &&
                managers.FrameManager.getInstance().m_GlobalUserItem.wLockServerID != df.INVALID_WORD) {
            }
        }

        /**
         * 连接成功
         */
        public connectComplete() {

        }

        private onUpdateUserWealth() {
            //钻石
            var lIngot = managers.FrameManager.getInstance().m_GlobalUserItem.lUserIngot;
            this._dimondLabel.setText(utils.StringUtils.formatNumberThousands(lIngot));

            //携带金币
            var score = managers.FrameManager.getInstance().m_GlobalUserItem.lUserScore;
            this._userScoreLabel.setText(utils.StringUtils.formatNumberThousands(score));
        }

        /**
         * 移除舞台
         */
        private onExit(): void {
            this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegan, this);
            this.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
            this.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
            this.removeEventListener(customEvent.CustomEvent.EVENT_PLAZA_REFRESH, this.onPlazaRefresh, this);
        }

        /**
        *切换view 
        */
        public onChangeView(viewMode?: number) {
            //当前控制器
            const controller: models.Controller = managers.FrameManager.getInstance().getRunningController() as models.Controller;

            //默认返回
            if (viewMode == null) {
                controller.popView();
            } else {
                //设置
                if (viewMode == df.MODE_PLAZA_OPTION) {
                    let option = new OptionLayer(this, 1);
                    option.name = "OPTION"
                    option.x = this.width;
                    option.y = 0;

                    controller.showView(option, df.eControllerKind.PLAZA, true);
                } else if (viewMode == df.MODE_SERVICE) {
                    //客服
                    let service = new ServiceLayer(this);
                    service.x = this.width;
                    service.y = 0;
                    service.name = "SERVICE"
                    controller.showView(service, df.eControllerKind.PLAZA, true);
                } else if (viewMode == df.MODE_USER_INFO) {
                    //个人信息
                    let userinfo = new UserInfoLayer(this);
                    userinfo.x = this.width;
                    userinfo.y = 0;
                    userinfo.name = "USERINFO";
                    controller.showView(userinfo, df.eControllerKind.PLAZA, true);
                } else if (viewMode == df.MODE_SHOP) {
                    //商城
                    let shop = new ShopLayer(this, this._shopIndex);
                    shop.x = this.width;
                    shop.y = 0;
                    shop.name = "SHOP";
                    controller.showView(shop, df.eControllerKind.PLAZA, true);
                } else if (viewMode == df.MODE_RANK) {
                    //排行榜
                    let rank = new RankLayer(this);
                    rank.x = this.width;
                    rank.y = 0;
                    rank.name = "RANK";
                    controller.showView(rank, df.eControllerKind.PLAZA, true);
                } else if (viewMode == df.MODE_BATTLE_FIND) {
                    let findbattle = new BattleFindLayer(this);
                    findbattle.x = this.width;
                    findbattle.y = 0;
                    findbattle.name = "FINDBATTLE";
                    controller.showView(findbattle, df.eControllerKind.PLAZA, true);
                } else if (viewMode == df.MODE_BATTLE_LIST) {
                    let battleList = new BattleListLayer(this);
                    battleList.x = this.width;
                    battleList.y = 0;
                    battleList.name = "BATTLELIST";
                    controller.showView(battleList, df.eControllerKind.PLAZA, true);
                } else if (viewMode == df.MODE_BATTLE_RECORD) {

                    let battleRecord = new BattleRecordLayer(this);
                    battleRecord.x = this.width;
                    battleRecord.y = 0;
                    battleRecord.name = "BATTLERECORD";
                    controller.showView(battleRecord, df.eControllerKind.PLAZA, true);
                } else if (viewMode == df.MODE_BENEFIT) {
                    let benefit = new BenefitLayer(this);
                    benefit.x = this.width;
                    benefit.y = 0;
                    benefit.name = "BENEFIT";
                    controller.showView(benefit, df.eControllerKind.PLAZA, true);
                } else if (viewMode == df.MODE_BATTLE_CREATE) {
                    if (null != controller.getViewByName("BATTLECREATE")) {
                        controller.popView();
                        return;
                    }
                    let battleCreate = new BattleCreateLayer(this, { mode: df.MODE_TH_SET });
                    battleCreate.x = this.width;
                    battleCreate.y = 0;
                    battleCreate.name = "BATTLECREATE";
                    controller.showView(battleCreate, df.eControllerKind.PLAZA, true);
                } else if (viewMode == df.MODE_ROOM_LIST) {
                    let roomlist = new RoomListLayer(this, this._kindID);
                    roomlist.x = this.width;
                    roomlist.y = 0;
                    roomlist.name = "ROOMLIST";
                    controller.showView(roomlist, df.eControllerKind.PLAZA, true);
                }
            }
        }

        /** 触摸事件
        * onTouchBegan
        * onTouchMove
        * onTouchEnd
       */
        private onTouchBegan(event: egret.TouchEvent) {
            //console.log("onTouch Began");
            this._bMoved = false;
        }

        private _bMoved = false;
        private onTouchMove(event: egret.TouchEvent) {
            //console.log("onTouch move");
            this._bMoved = true;
        }

        private onTouchEnd(event: egret.TouchEvent) {
            //console.log("onTouch end");

        }

        /**
         * 大厅刷新通知
         */
        private onPlazaRefresh(e: egret.Event) {
            let data = e.data;
            if (null == data.key) return;
            switch (data.key) {
                case "wealth":
                    {
                        this.onUpdateUserWealth();
                    }
                    break;
            }
        }

        /**
         * 滑动监听
         */
        private onScrollerChange(e: egret.Event) {
            let scrollV = this._listView.viewport.scrollV;
            //console.log(`scrollV : ${scrollV}`);
            const topOffset = 0;
            const bottomOffset = 150 * this._gameList.length - this._listView.viewport.height;
            //边界
            if (scrollV <= topOffset) {
                this._pageUp.visible = false;
                this._pageDown.visible = true;
            } else if (scrollV > topOffset && scrollV < bottomOffset) {
                this._pageUp.visible = true;
                this._pageDown.visible = true;
            } else {
                this._pageUp.visible = true;
                this._pageDown.visible = false;
            }
        }

        /**
         * 按钮事件
         */
        public _shopIndex: number = 0;
        private onButtonClick(e: egret.Event) {
            let button = <eui.Button>e.target;
            let name = button.name;

            egret.Tween.get(button)
                .to({ scaleX: 1.1, scaleY: 1.1 }, 100)
                .to({ scaleX: 1.0, scaleY: 1.0 }, 100);

            switch (button.name) {
                case "bt_option":
                    {
                        this.onChangeView(df.MODE_PLAZA_OPTION);
                    }
                    break;
                case "bt_service":
                    {
                        this.onChangeView(df.MODE_SERVICE);
                    }
                    break;
                case "bt_activity":
                    {
                        this.onChangeView(df.MODE_BENEFIT);
                    }
                    break;
                case "bt_share":
                    {
                        let controller: models.Controller = managers.FrameManager.getInstance().getRunningController() as models.Controller;
                        let sharelayer = new ShareLayer(controller.getRootLayer(), 0.4)
                        controller.addWindow(sharelayer);
                    }
                    break;
                case "bt_rank":
                    {
                        this.onChangeView(df.MODE_RANK);
                    }
                    break;
                case "bt_shop":
                case "bt_Ingot_shop":
                case "bt_gold_shop":
                    {
                        this._shopIndex = (button.name == "bt_gold_shop") ? df.eShopType.Gold : df.eShopType.Ingot;
                        this.onChangeView(df.MODE_SHOP);
                    }
                    break;
                case "bt_exchange":
                    {
                        this._shopIndex = df.eShopType.Exchange;
                        this.onChangeView(df.MODE_SHOP);
                    }
                    break;
                case "findBattle":
                    {
                        this.onChangeView(df.MODE_BATTLE_FIND);
                    }
                    break;
                case "battleList":
                    {
                        this.onChangeView(df.MODE_BATTLE_LIST);
                    }
                    break;
                case "battleRecord":
                    {
                        this.onChangeView(df.MODE_BATTLE_RECORD);
                    }
                    break;
                case "battleCreate":
                    {
                        this.onChangeView(df.MODE_BATTLE_CREATE);
                    }
                    break;
                case "bt_teaHouse":
                    {
                        this.onChangeView(df.MODE_BATTLE_CREATE);
                        managers.TcpServiceCtrl.getInstance().getServerInfo().onFlushAgent();
                    }
                    break;
                default:
                    {
                        if (!this._bMoved) {
                            const kindID = Number(button.name);
                            this._kindID = kindID;
                            this.onChangeView(df.MODE_ROOM_LIST);
                        }
                    }
                    break;
            }
        }

        //列表动画
        public listLightAni() {
            const btn = this._listBtns[this._nCurAniIndex];
            const mask = btn.getChildByName("mask");
            const light = btn.getChildByName("light");

            mask.visible = true;
            light.visible = true;

            egret.Tween.get(light)
                .to({ x: btn.width, y: 0 }, 1000)
                .wait(1000 / 60)
                .call(() => {
                    mask.visible = false;
                    light.visible = false;
                    light.x = 0;
                    light.y = 0;
                    this._nCurAniIndex = (this._nCurAniIndex + 1) % this._gameList.length;
                    this.listLightAni();
                });
        }
        /**启动游戏 */
        public async onStartGame(kindID: number, wServerID: number) {
            let item = managers.TcpServiceCtrl.getInstance().getGameListInfo().isGameSupport(kindID);
            if (null == item)
                return;

            //判断资源是否已加载
            let group = item.group;
            if (false == RES.isGroupLoaded(group)) {
                managers.FrameManager.getInstance().showPopWait("资源加载中,请稍后");
                await this.loadGameResource(group);
                managers.FrameManager.getInstance().dismissPopWait();
                managers.TcpServiceCtrl.getInstance().onConnectRoom();
            } else {
                //资源已加载
                managers.TcpServiceCtrl.getInstance().onConnectRoom();
            }
        }

        /**
         * 预加载资源
         */
        private async loadGameResource(group: string) {
            try {
                await RES.loadGroup(group,0,this);
            } catch (e) {
                console.error(e);
            }
        }

         /**
         * 进度回调
         */
        onProgress(current: number, total: number): void {
            console.log(`current is ${current},total is ${total}`);
        }
    }
}