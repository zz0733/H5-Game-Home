/**
 * 约战创建
 */
namespace client {
    export class BattleCreateLayer extends eui.UILayer {
        private _scene: any;
        private _param: any;
        private _battleFrame: frame.BattleFrame;
        constructor(scene: any, param: any) {
            super();
            this._scene = scene;
            this._param = param;
        }
        createChildren() {
            super.createChildren();
            this.once(egret.Event.ADDED_TO_STAGE, this.onInitLayer, this);
            this.once(egret.Event.REMOVED_FROM_STAGE, this.onExit, this);

            //注册触摸
            this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegan, this);
            this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
            this.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);

            //注册通知
            this.addEventListener(customEvent.CustomEvent.EVENT_BATTLE_REFRESH, this.onRreshBattleUI, this);
        }

        private _listView: eui.Scroller;
        private _pageUp: eui.Image;
        private _pageDown: eui.Image;
        private _gameList: any[] = [];
        private _curIndex: number = 0;
        private _listBtn: eui.Button[] = [];
        private _curImage: eui.Image;
        public onInitLayer() {
            //加载皮肤 
            let componet = new eui.Component();
            this.addChild(componet);
            componet.skinName = skins.BattleCreateLayer;

            //按钮
            let bt = componet.getChildByName("bt_close");
            bt.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClick, this);

            //初始列表
            this.getGameListByConfig(this._param.mode);

            //翻页
            this._pageUp = componet.getChildByName("PageUp") as eui.Image;
            this._pageDown = componet.getChildByName("PageDown") as eui.Image;
            this._pageUp.visible = false;

            //呼吸动画
            egret.Tween.get(this._pageUp, { loop: true })
                .to({ scaleX: 1.2, scaleY: 1.2 }, 300)
                .to({ scaleX: 1.0, scaleY: 1.0 }, 300)
                .wait(500)
                .to({ scaleX: 1.2, scaleY: 1.2 }, 300)
                .to({ scaleX: 1.0, scaleY: 1.0 }, 300);

            egret.Tween.get(this._pageDown, { loop: true })
                .to({ scaleX: 1.2, scaleY: 1.2 }, 300)
                .to({ scaleX: 1.0, scaleY: 1.0 }, 300)
                .wait(500)
                .to({ scaleX: 1.2, scaleY: 1.2 }, 300)
                .to({ scaleX: 1.0, scaleY: 1.0 }, 300);

            //管理房间
            bt = componet.getChildByName("battleList");
            bt.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClick, this);

            //游戏规则
            bt = componet.getChildByName("gameRule");
            bt.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClick, this);

            //创建房间
            bt = componet.getChildByName("battleCreate");
            bt.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClick, this);

            //富文本
            this._richText = new utils.RichText(718, 718, 46);
            this.addChild(this._richText);
            utils.setAnchorLeftTop(this._richText);
            this._richText.x = 604;
            this._richText.y = 596;

            //滑动组件
            this._listView = componet.getChildByName("GameListScorll") as eui.Scroller;
            this._listView.addEventListener(egret.Event.CHANGE, this.onScrollerChange, this);
            let Group = this._listView.getChildByName("Group") as eui.Group;
            for (let i = 0; i < this._gameList.length; i++) {
                const listInfo = this._gameList[i];
                let list = new eui.Button();
                list.name = this._gameList[i].id;
                list.skinName = "resource/eui_skins/list/battle_list_" + listInfo.id + ".exml";
                Group.addChild(list);
                list.addEventListener(egret.TouchEvent.TOUCH_END, this.onButtonClick, this);
                utils.setAnchorCenter(list);
                list.scaleX = (i == 0) ? 0.75 : 0.65;
                list.scaleY = (i == 0) ? 0.75 : 0.65;
                list.x = Group.width / 2;
                list.y = list.height / 2 - 15 + i * 120;

                this._listBtn.push(list)
            }

            //约战配置滑动组件
            this._scrollBattleConfig = componet.getChildByName("battleConfig") as eui.Scroller;

            //默认第一个配置显示
            this.onGameChangeEvent(Number(this._gameList[0].id));

            this._curImage = new eui.Image("battle_frame_1_png");
            Group.addChild(this._curImage);
            utils.setAnchorCenter(this._curImage);
            this._curImage.x = this._listBtn[0].x;
            this._curImage.y = this._listBtn[0].y;
            this._curImage.scaleX = 0.75;
            this._curImage.scaleY = 0.75;
        }

        viewWillDisappear() {
            this.onCloseBattleService();
        }

        /**切入完成 */
        transFinish() {
            //刷新财富
            this.onRreshBattleUI();
        }

        private updataCurGameIndex() {
            let btn = this._listBtn[this._curIndex];
            for (let list of this._listBtn) {
                if (btn == list) {
                    list.scaleX = 0.75;
                    list.scaleY = 0.75;
                    this._curImage.x = this._listBtn[this._curIndex].x;
                    this._curImage.y = this._listBtn[this._curIndex].y;

                } else {
                    list.scaleX = 0.65;
                    list.scaleY = 0.65;
                }
            }
        }

        //获取列表
        private getGameListByConfig(mode) {
            switch (mode) {
                case df.MODE_TH_SET:
                    {
                        this.onInitGameList();
                    }
                    break;
                case df.MODE_TH_MODIFY:
                    {

                    }
                    break;
                case df.MODE_TH_CREATE:
                    {

                    }
                    break;
            }
        }

        //初始化显示列表
        private onInitGameList() {
            //游戏列表
            const infolist = managers.TcpServiceCtrl.getInstance().getGameListInfo()._Info;

            for (let i = 0; i < infolist.length; i++) {
                const gameID = infolist[i].id;
                //游戏支持判断
                if (infolist[i].show && (!infolist[i].disableBattle)) {
                    //约战配置
                    const optionList = managers.TcpServiceCtrl.getInstance().getServerInfo().getOptionList();
                    //附加配置
                    const optionSpecial = managers.TcpServiceCtrl.getInstance().getServerInfo().getOptionSpecialList();

                    if (null != (optionList && optionList[Number(gameID)])) {
                        let map = { id: gameID, specialInfo: optionSpecial[Number(gameID)], optionInfo: optionList[Number(gameID)] };
                        this._gameList.push(map);
                    }
                }
            }
        }

        private _scrollBattleConfig: eui.Scroller;
        private _configView: CreateConfigView;
        private onGameChangeEvent(kindID) {
            this._gameList.forEach(list => {
                if (Number(list.id) == kindID) {
                    let Group = this._scrollBattleConfig.getChildByName("Group") as eui.Group;
                    if (null != Group.getChildByName("configView")) {
                        Group.removeChild(Group.getChildByName("configView"));
                        this._configView = null;
                    }
                    this._configView = new CreateConfigView(this, list, {});
                    this._configView.name = "configView";
                    this._configView.touchEnabled = false;
                    Group.addChild(this._configView);
                    return;
                }
            });
        }

        private onButtonClick(e: egret.Event) {
            let button = e.target as eui.Button;
            let name: string = button.name;

            if (!isNaN(Number(name))) {
                if (!this._bMoved) {
                    this._listBtn.forEach((list, index) => {
                        if (list == button) {
                            this._curIndex = index;
                            this.updataCurGameIndex();
                            this.onGameChangeEvent(Number(name));
                            return;
                        }
                    });
                }
                return
            }

            egret.Tween.get(button)
                .to({ scaleX: 1.1, scaleY: 1.1 }, 100)
                .to({ scaleX: 1.0, scaleY: 1.0 }, 100);

            switch (name) {
                case "bt_close":
                    {
                        this._scene.onChangeView();
                    }
                    break;
                case "battleList":
                    {
                        this._scene.onChangeView(df.MODE_BATTLE_LIST);
                    }
                    break;
                case "battleCreate":
                    {
                        this.onCreateRoom(this._configView.getConfigResult());
                    }
                    break;
                case "gameRule":
                    {
                        let controller: models.Controller = managers.FrameManager.getInstance().getRunningController() as models.Controller;
                        let helpLayer = new GameHelp(controller.getRootLayer());
                        controller.addWindow(helpLayer);
                    }
                    break;
                default:
                    {

                    }
                    break;
            }
        }

        /**
        * 滑动监听
        */
        private onScrollerChange(e: egret.Event) {
            let scrollV = this._listView.viewport.scrollV;
            console.log(`scrollV : ${scrollV}`);
            const topOffset = 0;
            const bottomOffset = 120 * (this._gameList.length - 1) - this._listView.viewport.height;
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

        /**约战服务关闭 */
        public onCloseBattleService() {
            if (null != managers.TcpServiceCtrl.getInstance().getGateWayService()) {
                managers.TcpServiceCtrl.getInstance().getGateWayService().closeService();
                managers.TcpServiceCtrl.getInstance().m_pGateWayCtrl = null;
            }
            
            this._battleFrame = null;
        }

        public onExit() {
            this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegan, this);
            this.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
            this.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);

            this.removeEventListener(customEvent.CustomEvent.EVENT_BATTLE_REFRESH, this.onRreshBattleUI, this);

            //约战服务关闭
            this.onCloseBattleService();
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
         * UI刷新
         */
        private _richText: utils.RichText;
        private _lBaseScore: number = 0;
        private _lCard: number = 0;
        private _lDiamond: number = 0;
        private _bRoomCard: boolean = false;
        private onRreshBattleUI(e?: egret.Event) {
            let data = e ? e.data : null;

            this._lBaseScore = data ? data.baseScore : this._lBaseScore;
            this._lCard = data ? data.card : this._lCard;
            this._lDiamond = data ? data.diamond : this._lDiamond;
            this._bRoomCard = data ? data.bRoomCard : this._bRoomCard;

            this._richText.clear();

            if (this._lBaseScore != 0) {
                let lable = new eui.Label();
                lable.text = "当前游戏为 ";
                lable.textColor = 0xFDDB97;
                lable.size = 24;
                this._richText.pushBackElement(lable);

                lable = new eui.Label();
                lable.text = `${this._lBaseScore}`;
                lable.textColor = 0x65C718;
                lable.size = 24;
                this._richText.pushBackElement(lable);

                lable = new eui.Label();
                lable.text = " 底分,";
                lable.textColor = 0xFDDB97;
                lable.size = 24;
                this._richText.pushBackElement(lable);
            }

            if (this._bRoomCard) {
                let lable = new eui.Label();
                lable.text = "对局记录需 ";
                lable.textColor = 0xFDDB97;
                lable.size = 24;
                this._richText.pushBackElement(lable);

                lable = new eui.Label();
                lable.text = `${this._lCard}`;
                lable.textColor = 0x65C718;
                lable.size = 24;
                this._richText.pushBackElement(lable);

                lable = new eui.Label();
                lable.text = " 房卡，您当前尚有 ";
                lable.textColor = 0xFDDB97;
                lable.size = 24;
                this._richText.pushBackElement(lable);

                lable = new eui.Label();
                lable.text = `${managers.FrameManager.getInstance().m_GlobalUserItem.lUserRoomCard}`;
                lable.textColor = 0x65C718;
                lable.size = 24;
                this._richText.pushBackElement(lable);

                lable = new eui.Label();
                lable.text = " 房卡";
                lable.textColor = 0xFDDB97;
                lable.size = 24;
                this._richText.pushBackElement(lable);

            } else {

                let lable = new eui.Label();
                lable.text = "对局需 ";
                lable.textColor = 0xFDDB97;
                lable.size = 24;
                this._richText.pushBackElement(lable);

                lable = new eui.Label();
                lable.text = `${this._lDiamond}`;
                lable.textColor = 0x65C718;
                lable.size = 24;
                this._richText.pushBackElement(lable);

                lable = new eui.Label();
                lable.text = " 钻石，您当前尚有 ";
                lable.textColor = 0xFDDB97;
                lable.size = 24;
                this._richText.pushBackElement(lable);

                lable = new eui.Label();
                lable.text = `${managers.FrameManager.getInstance().m_GlobalUserItem.lUserIngot}`;
                lable.textColor = 0x65C718;
                lable.size = 24;
                this._richText.pushBackElement(lable);

                lable = new eui.Label();
                lable.text = " 钻石";
                lable.textColor = 0xFDDB97;
                lable.size = 24;
                this._richText.pushBackElement(lable);
            }

            this._richText.showRichText();

            //通知大厅UI刷新
            let notify = {
                key:"wealth",
                data: {}
            }
            this._scene.dispatchEvent(new customEvent.CustomEvent(customEvent.CustomEvent.EVENT_PLAZA_REFRESH,false,false,notify));
        }

        /**约战 OR 茶馆创建 */
        private onCreateRoom(config: any) {

            this._battleFrame = new frame.BattleFrame(this);
            this._battleFrame.onNCreateTable(Number(config.wKindID), config.cbCurrencyKind, config.lBaseScore,config, config.wPayType);

            //设置约战代理
            if (null != managers.TcpServiceCtrl.getInstance().getGateWayService()) {
                managers.TcpServiceCtrl.getInstance().getGateWayService().setDelegate(this._battleFrame);
            }
        }

        private onStartBattleGame() {
            managers.FrameManager.getInstance().showToast("游戏接口未实现");
        }
    }
}