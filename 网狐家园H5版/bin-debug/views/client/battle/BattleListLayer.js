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
    var BattleListLayer = (function (_super) {
        __extends(BattleListLayer, _super);
        function BattleListLayer(scene) {
            var _this = _super.call(this) || this;
            _this._curRoomIndex = 0;
            _this._bMoved = false;
            _this._scene = scene;
            return _this;
        }
        BattleListLayer.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.once(egret.Event.ADDED_TO_STAGE, this.onInitLayer, this);
            this.once(egret.Event.REMOVED_FROM_STAGE, this.onExit, this);
            //注册事件
            this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegan, this);
            this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
            this.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
            this.addEventListener(customEvent.CustomEvent.EVENT_BATTLE_INFO_REFRESH, this.onUIRefresh, this);
        };
        BattleListLayer.prototype.onInitLayer = function () {
            //加载皮肤 
            var componet = new eui.Component();
            this.addChild(componet);
            componet.skinName = skins.BattleListLayer;
            //无约战列表
            this._noRoomIcon = componet.getChildByName("battle_no_room");
            //滑动组件
            this._listSroller = componet.getChildByName("scroller");
            //按钮
            var bt = componet.getChildByName("bt_close");
            bt.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClick, this);
            //创建约战
            bt = componet.getChildByName("createBattle");
            bt.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClick, this);
            //约战记录
            bt = componet.getChildByName("battleRecord");
            bt.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClick, this);
            //商城
            bt = componet.getChildByName("diamond");
            bt.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClick, this);
            bt = componet.getChildByName("shop");
            bt.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClick, this);
            this.onUpdateUserInfo();
        };
        /**切入完成 */
        BattleListLayer.prototype.transFinish = function () {
            //发送约战列表查询
            this.onQueryTable(df.QUERY_KIND_USERID, managers.FrameManager.getInstance().m_GlobalUserItem.dwUserID);
        };
        BattleListLayer.prototype.onQueryTable = function (querykind, queryid, gameid) {
            if (null == this._battleFrame) {
                this._battleFrame = new frame.BattleFrame(this);
            }
            this._battleFrame.onQueryTable(querykind, queryid, gameid);
            //设置约战代理
            if (null != managers.TcpServiceCtrl.getInstance().getGateWayService()) {
                managers.TcpServiceCtrl.getInstance().getGateWayService().setDelegate(this._battleFrame);
            }
        };
        /**查询约战用户 */
        BattleListLayer.prototype.onQueryTableUserList = function (wKindID, dwMappedNum) {
            if (null == this._battleFrame) {
                this._battleFrame = new frame.BattleFrame(this);
            }
            this._battleFrame.onQueryTableUserList(wKindID, dwMappedNum);
            //设置约战代理
            if (null != managers.TcpServiceCtrl.getInstance().getGateWayService()) {
                managers.TcpServiceCtrl.getInstance().getGateWayService().setDelegate(this._battleFrame);
            }
        };
        /**解散房间 */
        BattleListLayer.prototype.onDismissTable = function (wKindID, dwMappedNum) {
            if (null == this._battleFrame) {
                this._battleFrame = new frame.BattleFrame(this);
            }
            this._battleFrame.onDismissTable(wKindID, dwMappedNum);
            //设置约战代理
            if (null != managers.TcpServiceCtrl.getInstance().getGateWayService()) {
                managers.TcpServiceCtrl.getInstance().getGateWayService().setDelegate(this._battleFrame);
            }
        };
        /**解散结果 */
        BattleListLayer.prototype.onDismissResult = function (struct) {
            if (null != struct.szDescribeString) {
                managers.FrameManager.getInstance().showToast(struct.szDescribeString);
            }
            //关闭服务
            this.onCloseBattleService();
            if (struct.cbResultCode == 1) {
                var detailLayer = this.getChildByName("detailLayer");
                if (null != detailLayer) {
                    this.removeChild(detailLayer);
                    detailLayer = null;
                }
                //更新财富信息
                if (null == this._battleFrame) {
                    this._battleFrame = new frame.BattleFrame(this);
                }
                this._battleFrame.onFlushWealth();
                //设置代理
                if (null != managers.TcpServiceCtrl.getInstance().getTcpService()) {
                    managers.TcpServiceCtrl.getInstance().setDelegate(this._battleFrame);
                }
                //更新列表
                managers.TcpServiceCtrl.getInstance().getServerInfo().m_BattleList.splice(this._curRoomIndex, 1);
                managers.TcpServiceCtrl.getInstance().getServerInfo().m_BattleParamList.splice(this._curRoomIndex, 1);
                this._curRoomIndex = 0;
                this.onUpdateList();
            }
        };
        /**约战服务关闭 */
        BattleListLayer.prototype.onCloseBattleService = function () {
            if (null != managers.TcpServiceCtrl.getInstance().getGateWayService()) {
                managers.TcpServiceCtrl.getInstance().getGateWayService().closeService();
                managers.TcpServiceCtrl.getInstance().m_pGateWayCtrl = null;
            }
            this._battleFrame = null;
        };
        /**按钮事件 */
        BattleListLayer.prototype.onButtonClick = function (e) {
            var button = e.target;
            var name = button.name;
            egret.Tween.get(button)
                .to({ scaleX: 1.1, scaleY: 1.1 }, 100)
                .to({ scaleX: 1.0, scaleY: 1.0 }, 100);
            switch (name) {
                case "bt_close":
                    {
                        this._scene.onChangeView();
                    }
                    break;
                case "createBattle":
                    {
                        this._scene.onChangeView(df.MODE_BATTLE_CREATE);
                    }
                    break;
                case "battleRecord":
                    {
                        this._scene.onChangeView(df.MODE_BATTLE_RECORD);
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
        BattleListLayer.prototype.onUpdateUserInfo = function () {
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
            this._diamond.x = 112;
            this._diamond.y = 623;
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
            this._score.x = 112;
            this._score.y = 657;
        };
        /**UI刷新 */
        BattleListLayer.prototype.onUIRefresh = function (e) {
            this.onUpdateUserInfo();
        };
        /**列表刷新 */
        BattleListLayer.prototype.onUpdateList = function () {
            this._noRoomIcon.visible = (managers.TcpServiceCtrl.getInstance().getServerInfo().m_BattleList.length == 0) ? true : false;
            //列表内容
            var Group = this._listSroller.getChildByName("group");
            //清空内容
            Group.removeChildren();
            var list = managers.TcpServiceCtrl.getInstance().getServerInfo().m_BattleList;
            var paramList = managers.TcpServiceCtrl.getInstance().getServerInfo().m_BattleParamList;
            for (var i = 0; i < list.length; i++) {
                var kindID = list[i].wKindID;
                var room = new eui.Image("room_frame_" + kindID + "_png");
                room.name = "" + i;
                Group.addChild(room);
                room.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEvent, this);
                room.x = 0 + i * 350;
                room.y = 0;
                var iteminfo = list[i];
                var detailinfo = paramList[i];
                if (null == detailinfo) {
                    return;
                }
                if (iteminfo.cbSettleKind == df.SETTLE_KIND_TIME) {
                    //剩余时间
                    var icon = new eui.Image("battle_text_leave_time_png");
                    Group.addChild(icon);
                    icon.x = 50 + i * 350;
                    icon.y = 280;
                    var min = Math.floor((iteminfo.dwPlayTime - detailinfo.dwElapsedTime) / 60);
                    var leaveTime = new eui.Label("" + min + "分钟");
                    leaveTime.size = 24;
                    leaveTime.multiline = false;
                    leaveTime.textColor = 0xB2DE17;
                    Group.addChild(leaveTime);
                    leaveTime.x = 160 + i * 350;
                    leaveTime.y = 285;
                    //底分
                    var cell = new eui.Label("" + iteminfo.lBaseScore + "底");
                    cell.size = 24;
                    cell.width = 200;
                    cell.height = 24;
                    cell.textAlign = egret.HorizontalAlign.CENTER;
                    cell.multiline = false;
                    cell.textColor = 0xFFFF00;
                    Group.addChild(cell);
                    utils.setAnchorCenter(cell);
                    cell.x = 143 + i * 350;
                    cell.y = 370;
                }
                else if (iteminfo.cbSettleKind == df.SETTLE_KIND_COUNT) {
                    //剩余局数
                    var icon = new eui.Image("battle_text_leave_count_png");
                    Group.addChild(icon);
                    icon.x = 50 + i * 350;
                    icon.y = 280;
                    var leaveCount = new eui.Label("" + detailinfo.wFinishCount + "/" + ("" + iteminfo.wPlayCount));
                    leaveCount.size = 24;
                    leaveCount.multiline = false;
                    leaveCount.textColor = 0xB2DE17;
                    Group.addChild(leaveCount);
                    leaveCount.x = 160 + i * 350;
                    leaveCount.y = 285;
                    //底分
                    var cell = new eui.Label("" + iteminfo.lBaseScore + "底");
                    cell.size = 24;
                    cell.width = 200;
                    cell.height = 24;
                    cell.textAlign = egret.HorizontalAlign.CENTER;
                    cell.multiline = false;
                    cell.textColor = 0xFFFF00;
                    Group.addChild(cell);
                    utils.setAnchorCenter(cell);
                    cell.x = 143 + i * 350;
                    cell.y = 370;
                }
                //房间号
                var roomID = new eui.Label("" + iteminfo.dwMappedNum + " 号房");
                roomID.size = 24;
                roomID.multiline = false;
                roomID.textColor = 0x000000;
                Group.addChild(roomID);
                roomID.x = 70 + i * 350;
                roomID.y = 322;
            }
        };
        BattleListLayer.prototype.onUpdateRoomDetail = function () {
            var listInfo = managers.TcpServiceCtrl.getInstance().getServerInfo().m_BattleList;
            var paramList = managers.TcpServiceCtrl.getInstance().getServerInfo().m_BattleParamList;
            if (null == listInfo || listInfo.length == 0)
                return;
            if (null == paramList || paramList.length == 0)
                return;
            if (this._curRoomIndex < 0 || this._curRoomIndex >= listInfo.length)
                return;
            if (this._curRoomIndex < 0 || this._curRoomIndex >= paramList.length)
                return;
            var iteminfo = listInfo[this._curRoomIndex];
            var paramInfo = paramList[this._curRoomIndex];
            if (null == iteminfo || null == paramInfo)
                return;
            var detailLayer = new client.BattleDetailLayer(this, { info: iteminfo, param: paramInfo });
            this.addChild(detailLayer);
            detailLayer.name = "detailLayer";
            detailLayer.x = 0;
            detailLayer.y = -this.height;
            detailLayer.transIn();
        };
        BattleListLayer.prototype.onTouchEvent = function (e) {
            var target = e.target;
            this._curRoomIndex = Number(target.name);
            if (this._bMoved)
                return;
            this.onUpdateRoomDetail();
        };
        /** 触摸事件
       * onTouchBegan
       * onTouchMove
       * onTouchEnd
      */
        BattleListLayer.prototype.onTouchBegan = function (event) {
            //console.log("onTouch Began");
            this._bMoved = false;
        };
        BattleListLayer.prototype.onTouchMove = function (event) {
            //console.log("onTouch move");
            this._bMoved = true;
        };
        BattleListLayer.prototype.onTouchEnd = function (event) {
            //console.log("onTouch end");
        };
        /**移除舞台 */
        BattleListLayer.prototype.onExit = function () {
            //移除事件
            this.removeEventListener(customEvent.CustomEvent.EVENT_BATTLE_INFO_REFRESH, this.onUIRefresh, this);
            this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegan, this);
            this.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
            this.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
            //关闭服务
            this.onCloseBattleService();
        };
        return BattleListLayer;
    }(eui.UILayer));
    client.BattleListLayer = BattleListLayer;
})(client || (client = {}));
