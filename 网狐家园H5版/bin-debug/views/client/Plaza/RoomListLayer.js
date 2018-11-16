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
 * 约战列表
 */
var client;
(function (client) {
    var RoomListLayer = (function (_super) {
        __extends(RoomListLayer, _super);
        function RoomListLayer(scene, kindID) {
            var _this = _super.call(this) || this;
            _this._kindID = df.INVALID_WORD;
            _this._bMoved = false;
            _this._scene = scene;
            _this._kindID = kindID;
            return _this;
        }
        RoomListLayer.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.once(egret.Event.ADDED_TO_STAGE, this.onInitLayer, this);
            this.once(egret.Event.REMOVED_FROM_STAGE, this.onExit, this);
        };
        RoomListLayer.prototype.onInitLayer = function () {
            //加载皮肤 
            var componet = new eui.Component();
            this.addChild(componet);
            componet.skinName = skins.RoomListLayer;
            //游戏ICON
            var icon = componet.getChildByName("ListIcon");
            icon.source = "gamelogo_" + this._kindID + "_png";
            //按钮
            var bt = componet.getChildByName("bt_close");
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
            this._listScroller = componet.getChildByName("RoomScroller");
            this.onUpdateRoomView();
            this.onUpdateUserInfo();
            this.addEventListener(customEvent.CustomEvent.EVENT_ROOM_REFRESH, this.onUIRefresh, this);
            //注册触摸
            this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegan, this);
            this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
            this.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
        };
        RoomListLayer.prototype.onButtonClick = function (e) {
            var button = e.target;
            var name = button.name;
            egret.Tween.get(button)
                .to({ scaleX: 1.1, scaleY: 1.1 }, 100)
                .to({ scaleX: 1.0, scaleY: 1.0 }, 100);
            switch (name) {
                case "bt_close":
                    {
                        var gameFrame = managers.TcpServiceCtrl.getInstance().getDelegate();
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
                        this._scene._shopIndex = (button.name == "shop") ? 1 /* Gold */ : 0 /* Ingot */;
                        this._scene.onChangeView(df.MODE_SHOP);
                    }
                    break;
            }
        };
        RoomListLayer.prototype.onUpdateRoomView = function () {
            var Group = this._listScroller.getChildByName("Group");
            var curlist = managers.TcpServiceCtrl.getInstance().getServerInfo().GetRoomList(this._kindID);
            if (null == curlist)
                return;
            var normalList = [];
            var showIndex = 0;
            for (var i = 0; i < curlist.length; i++) {
                var YueZhan = curlist[i].isYueZhan();
                var bMatch = (curlist[i].wServerType & df.GAME_GENRE_MATCH) != 0;
                if (!YueZhan && !bMatch) {
                    normalList.push(curlist[i]);
                }
                else {
                    continue;
                }
                var room = new eui.Image("room_frame_" + this._kindID + "_png");
                room.name = "" + curlist[i].wServerID;
                Group.addChild(room);
                room.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEvent, this);
                room.x = 0 + showIndex * 290;
                room.y = 0;
                showIndex++;
            }
        };
        RoomListLayer.prototype.onTouchEvent = function (e) {
            var target = e.target;
            if (this._bMoved)
                return;
            //全局信息
            managers.TcpServiceCtrl.getInstance().getServerInfo().m_CurKindID = this._kindID;
            managers.TcpServiceCtrl.getInstance().getServerInfo().m_CurServerID = Number(target.name);
            console.log("当前游戏ID:" + this._kindID + ",ServerID: " + Number(target.name));
            this._scene.onStartGame(this._kindID, Number(target.name));
        };
        /** 触摸事件
       * onTouchBegan
       * onTouchMove
       * onTouchEnd
      */
        RoomListLayer.prototype.onTouchBegan = function (event) {
            //console.log("onTouch Began");
            this._bMoved = false;
        };
        RoomListLayer.prototype.onTouchMove = function (event) {
            //console.log("onTouch move");
            this._bMoved = true;
        };
        RoomListLayer.prototype.onTouchEnd = function (event) {
            //console.log("onTouch end");
        };
        RoomListLayer.prototype.onUpdateUserInfo = function () {
            //个人钻石
            var lIngot = managers.FrameManager.getInstance().m_GlobalUserItem.lUserIngot;
            if (null == this._diamond) {
                this._diamond = utils.LabelAtlas.createLabel(utils.StringUtils.formatNumberThousands(lIngot), "general_num_list_ingot_png", ",0123456789", 15, 26);
                this.addChild(this._diamond);
            }
            else {
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
            }
            else {
                this._score.setText(utils.StringUtils.formatNumberThousands(lScore));
            }
            utils.setAnchorLeftMid(this._score);
            this._score.x = 110;
            this._score.y = 696;
        };
        RoomListLayer.prototype.onUIRefresh = function (e) {
            this.onUpdateUserInfo();
        };
        RoomListLayer.prototype.onExit = function () {
            this.removeEventListener(customEvent.CustomEvent.EVENT_ROOM_REFRESH, this.onUIRefresh, this);
            this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegan, this);
            this.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
            this.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
        };
        return RoomListLayer;
    }(eui.UILayer));
    client.RoomListLayer = RoomListLayer;
})(client || (client = {}));
