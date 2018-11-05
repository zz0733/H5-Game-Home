/**
 * 约战列表
 */
namespace client {
    export class RoomListLayer extends eui.UILayer {
        private _scene: any;
        private _kindID: number = df.INVALID_WORD;

        constructor(scene: any, kindID: number) {
            super();
            this._scene = scene;
            this._kindID = kindID;
        }
        createChildren() {
            super.createChildren();
            this.once(egret.Event.ADDED_TO_STAGE, this.onInitLayer, this);
            this.once(egret.Event.REMOVED_FROM_STAGE, this.onExit, this);
        }
        private _listScroller: eui.Scroller;
        public onInitLayer() {
            //加载皮肤 
            let componet = new eui.Component();
            this.addChild(componet);
            componet.skinName = skins.RoomListLayer;

            //游戏ICON
            let icon = componet.getChildByName("ListIcon") as eui.Image;
            icon.source = `gamelogo_${this._kindID}_png`;

            //按钮
            let bt = componet.getChildByName("bt_close");
            bt.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClick, this);

            //游戏规则
            bt = componet.getChildByName("gameRule");
            bt.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClick, this);

            //快速开始
            bt = componet.getChildByName("QuickStart");
            bt.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClick, this);

            //商城
            bt = componet.getChildByName("diamond");
            bt.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClick, this);

            bt = componet.getChildByName("shop");
            bt.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClick, this);

            //滑动组件
            this._listScroller = componet.getChildByName("RoomScroller") as eui.Scroller;

            this.onUpdateRoomView();
            this.onUpdateUserInfo();

            this.addEventListener(customEvent.CustomEvent.EVENT_ROOM_REFRESH, this.onUIRefresh, this);

            //注册触摸
            this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegan, this);
            this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
            this.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
        }

        private onButtonClick(e: egret.Event) {
            let button = <eui.Button>e.target;
            let name = button.name;

            egret.Tween.get(button)
                .to({ scaleX: 1.1, scaleY: 1.1 }, 100)
                .to({ scaleX: 1.0, scaleY: 1.0 }, 100);

            switch (name) {
                case "bt_close":
                    {   
                        let gameFrame = managers.TcpServiceCtrl.getInstance().getDelegate();
                        if (null != gameFrame && gameFrame.onExitRoom) {
                            gameFrame.onExitRoom();
                        }
                        this._scene.onChangeView();
                    }
                    break;
                case "gameRule":
                    {

                    }
                    break;
                case "QuickStart":
                    {

                    }
                    break;
                case "diamond":
                case "shop":
                    {
                        this._scene._shopIndex = (button.name == "shop") ? df.eShopType.Gold : df.eShopType.Ingot;
                        this._scene.onChangeView(df.MODE_SHOP);
                    }
                    break;
            }
        }

        private onUpdateRoomView() {
            let Group = this._listScroller.getChildByName("Group") as eui.Group;
            const curlist = managers.TcpServiceCtrl.getInstance().getServerInfo().GetRoomList(this._kindID);
            if (null == curlist)
                return;

            let normalList: models.GameServerItem[] = [];
            let showIndex = 0;
            for (let i = 0; i < curlist.length; i++) {
                const YueZhan = curlist[i].isYueZhan();
                const bMatch = (curlist[i].wServerType & df.GAME_GENRE_MATCH) != 0;
                if (!YueZhan && !bMatch) {
                    normalList.push(curlist[i])
                } else {
                    continue;
                }
                let room = new eui.Image(`room_frame_${this._kindID}_png`);
                room.name = `${curlist[i].wServerID}`;
                Group.addChild(room);
                room.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEvent, this);
                room.x = 0 + showIndex * 290;
                room.y = 0;

                showIndex++;
            }

        }

        private onTouchEvent(e: egret.Event) {
            let target = e.target as eui.Image;
            if (this._bMoved)
                return;

            //全局信息
            managers.TcpServiceCtrl.getInstance().getServerInfo().m_CurKindID = this._kindID;
            managers.TcpServiceCtrl.getInstance().getServerInfo().m_CurServerID = Number(target.name);
            console.log("当前游戏ID:"+ this._kindID + ",ServerID: " + Number(target.name));

            this._scene.onStartGame(this._kindID,Number(target.name));
            
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

        private _diamond: utils.LabelAtlas;
        private _score: utils.LabelAtlas;
        private onUpdateUserInfo() {

            //个人钻石
            var lIngot = managers.FrameManager.getInstance().m_GlobalUserItem.lUserIngot;
            if (null == this._diamond) {
                this._diamond = utils.LabelAtlas.createLabel(utils.StringUtils.formatNumberThousands(lIngot), "general_num_list_ingot_png", ",0123456789", 15, 26);
                this.addChild(this._diamond);
            } else {
                this._diamond.setText(utils.StringUtils.formatNumberThousands(lIngot));
            }

            utils.setAnchorLeftMid(this._diamond);
            this._diamond.x = 110;
            this._diamond.y = 657;

            //个人金币
            var lScore = managers.FrameManager.getInstance().m_GlobalUserItem.lUserScore;
            if (null == this._score) {
                this._score = utils.LabelAtlas.createLabel(utils.StringUtils.formatNumberThousands(lScore), "general_num_list_gold_png", ",0123456789", 15, 26);
                this.addChild(this._score);
            } else {
                this._score.setText(utils.StringUtils.formatNumberThousands(lScore));
            }

            utils.setAnchorLeftMid(this._score);
            this._score.x = 110;
            this._score.y = 696;
        }

        private onUIRefresh(e: egret.Event) {
            this.onUpdateUserInfo();
        }
        public onExit() {
            this.removeEventListener(customEvent.CustomEvent.EVENT_ROOM_REFRESH, this.onUIRefresh, this);
            this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegan, this);
            this.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
            this.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
        }
    }
}