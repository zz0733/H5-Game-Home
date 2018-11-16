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
 * 约战创建
 */
var client;
(function (client) {
    var BattleCreateLayer = (function (_super) {
        __extends(BattleCreateLayer, _super);
        function BattleCreateLayer(scene, param) {
            var _this = _super.call(this) || this;
            _this._gameList = [];
            _this._curIndex = 0;
            _this._listBtn = [];
            _this._bMoved = false;
            _this._lBaseScore = 0;
            _this._lCard = 0;
            _this._lDiamond = 0;
            _this._bRoomCard = false;
            _this._scene = scene;
            _this._param = param;
            return _this;
        }
        BattleCreateLayer.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.once(egret.Event.ADDED_TO_STAGE, this.onInitLayer, this);
            this.once(egret.Event.REMOVED_FROM_STAGE, this.onExit, this);
            //注册触摸
            this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegan, this);
            this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
            this.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
            //注册通知
            this.addEventListener(customEvent.CustomEvent.EVENT_BATTLE_REFRESH, this.onRreshBattleUI, this);
        };
        BattleCreateLayer.prototype.onInitLayer = function () {
            //加载皮肤 
            var componet = new eui.Component();
            this.addChild(componet);
            componet.skinName = skins.BattleCreateLayer;
            //按钮
            var bt = componet.getChildByName("bt_close");
            bt.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClick, this);
            //初始列表
            this.getGameListByConfig(this._param.mode);
            //翻页
            this._pageUp = componet.getChildByName("PageUp");
            this._pageDown = componet.getChildByName("PageDown");
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
            this._listView = componet.getChildByName("GameListScorll");
            this._listView.addEventListener(egret.Event.CHANGE, this.onScrollerChange, this);
            var Group = this._listView.getChildByName("Group");
            for (var i = 0; i < this._gameList.length; i++) {
                var listInfo = this._gameList[i];
                var list = new eui.Button();
                list.name = this._gameList[i].id;
                list.skinName = "resource/eui_skins/list/battle_list_" + listInfo.id + ".exml";
                Group.addChild(list);
                list.addEventListener(egret.TouchEvent.TOUCH_END, this.onButtonClick, this);
                utils.setAnchorCenter(list);
                list.scaleX = (i == 0) ? 0.75 : 0.65;
                list.scaleY = (i == 0) ? 0.75 : 0.65;
                list.x = Group.width / 2;
                list.y = list.height / 2 - 15 + i * 120;
                this._listBtn.push(list);
            }
            //约战配置滑动组件
            this._scrollBattleConfig = componet.getChildByName("battleConfig");
            //默认第一个配置显示
            this.onGameChangeEvent(Number(this._gameList[0].id));
            this._curImage = new eui.Image("battle_frame_1_png");
            Group.addChild(this._curImage);
            utils.setAnchorCenter(this._curImage);
            this._curImage.x = this._listBtn[0].x;
            this._curImage.y = this._listBtn[0].y;
            this._curImage.scaleX = 0.75;
            this._curImage.scaleY = 0.75;
        };
        BattleCreateLayer.prototype.viewWillDisappear = function () {
            this.onCloseBattleService();
        };
        /**切入完成 */
        BattleCreateLayer.prototype.transFinish = function () {
            //刷新财富
            this.onRreshBattleUI();
        };
        BattleCreateLayer.prototype.updataCurGameIndex = function () {
            var btn = this._listBtn[this._curIndex];
            for (var _i = 0, _a = this._listBtn; _i < _a.length; _i++) {
                var list = _a[_i];
                if (btn == list) {
                    list.scaleX = 0.75;
                    list.scaleY = 0.75;
                    this._curImage.x = this._listBtn[this._curIndex].x;
                    this._curImage.y = this._listBtn[this._curIndex].y;
                }
                else {
                    list.scaleX = 0.65;
                    list.scaleY = 0.65;
                }
            }
        };
        //获取列表
        BattleCreateLayer.prototype.getGameListByConfig = function (mode) {
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
        };
        //初始化显示列表
        BattleCreateLayer.prototype.onInitGameList = function () {
            //游戏列表
            var infolist = managers.TcpServiceCtrl.getInstance().getGameListInfo()._Info;
            for (var i = 0; i < infolist.length; i++) {
                var gameID = infolist[i].id;
                //游戏支持判断
                if (infolist[i].show && (!infolist[i].disableBattle)) {
                    //约战配置
                    var optionList = managers.TcpServiceCtrl.getInstance().getServerInfo().getOptionList();
                    //附加配置
                    var optionSpecial = managers.TcpServiceCtrl.getInstance().getServerInfo().getOptionSpecialList();
                    if (null != (optionList && optionList[Number(gameID)])) {
                        var map = { id: gameID, specialInfo: optionSpecial[Number(gameID)], optionInfo: optionList[Number(gameID)] };
                        this._gameList.push(map);
                    }
                }
            }
        };
        BattleCreateLayer.prototype.onGameChangeEvent = function (kindID) {
            var _this = this;
            this._gameList.forEach(function (list) {
                if (Number(list.id) == kindID) {
                    var Group = _this._scrollBattleConfig.getChildByName("Group");
                    if (null != Group.getChildByName("configView")) {
                        Group.removeChild(Group.getChildByName("configView"));
                        _this._configView = null;
                    }
                    _this._configView = new client.CreateConfigView(_this, list, {});
                    _this._configView.name = "configView";
                    _this._configView.touchEnabled = false;
                    Group.addChild(_this._configView);
                    return;
                }
            });
        };
        BattleCreateLayer.prototype.onButtonClick = function (e) {
            var _this = this;
            var button = e.target;
            var name = button.name;
            if (!isNaN(Number(name))) {
                if (!this._bMoved) {
                    this._listBtn.forEach(function (list, index) {
                        if (list == button) {
                            _this._curIndex = index;
                            _this.updataCurGameIndex();
                            _this.onGameChangeEvent(Number(name));
                            return;
                        }
                    });
                }
                return;
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
                        var controller_1 = managers.FrameManager.getInstance().getRunningController();
                        var helpLayer = new client.GameHelp(controller_1.getRootLayer());
                        controller_1.addWindow(helpLayer);
                    }
                    break;
                default:
                    {
                    }
                    break;
            }
        };
        /**
        * 滑动监听
        */
        BattleCreateLayer.prototype.onScrollerChange = function (e) {
            var scrollV = this._listView.viewport.scrollV;
            console.log("scrollV : " + scrollV);
            var topOffset = 0;
            var bottomOffset = 120 * (this._gameList.length - 1) - this._listView.viewport.height;
            //边界
            if (scrollV <= topOffset) {
                this._pageUp.visible = false;
                this._pageDown.visible = true;
            }
            else if (scrollV > topOffset && scrollV < bottomOffset) {
                this._pageUp.visible = true;
                this._pageDown.visible = true;
            }
            else {
                this._pageUp.visible = true;
                this._pageDown.visible = false;
            }
        };
        /**约战服务关闭 */
        BattleCreateLayer.prototype.onCloseBattleService = function () {
            if (null != managers.TcpServiceCtrl.getInstance().getGateWayService()) {
                managers.TcpServiceCtrl.getInstance().getGateWayService().closeService();
                managers.TcpServiceCtrl.getInstance().m_pGateWayCtrl = null;
            }
            this._battleFrame = null;
        };
        BattleCreateLayer.prototype.onExit = function () {
            this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegan, this);
            this.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
            this.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
            this.removeEventListener(customEvent.CustomEvent.EVENT_BATTLE_REFRESH, this.onRreshBattleUI, this);
            //约战服务关闭
            this.onCloseBattleService();
        };
        /** 触摸事件
       * onTouchBegan
       * onTouchMove
       * onTouchEnd
      */
        BattleCreateLayer.prototype.onTouchBegan = function (event) {
            //console.log("onTouch Began");
            this._bMoved = false;
        };
        BattleCreateLayer.prototype.onTouchMove = function (event) {
            //console.log("onTouch move");
            this._bMoved = true;
        };
        BattleCreateLayer.prototype.onTouchEnd = function (event) {
            //console.log("onTouch end");
        };
        BattleCreateLayer.prototype.onRreshBattleUI = function (e) {
            var data = e ? e.data : null;
            this._lBaseScore = data ? data.baseScore : this._lBaseScore;
            this._lCard = data ? data.card : this._lCard;
            this._lDiamond = data ? data.diamond : this._lDiamond;
            this._bRoomCard = data ? data.bRoomCard : this._bRoomCard;
            this._richText.clear();
            if (this._lBaseScore != 0) {
                var lable = new eui.Label();
                lable.text = "当前游戏为 ";
                lable.textColor = 0xFDDB97;
                lable.size = 24;
                this._richText.pushBackElement(lable);
                lable = new eui.Label();
                lable.text = "" + this._lBaseScore;
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
                var lable = new eui.Label();
                lable.text = "对局记录需 ";
                lable.textColor = 0xFDDB97;
                lable.size = 24;
                this._richText.pushBackElement(lable);
                lable = new eui.Label();
                lable.text = "" + this._lCard;
                lable.textColor = 0x65C718;
                lable.size = 24;
                this._richText.pushBackElement(lable);
                lable = new eui.Label();
                lable.text = " 房卡，您当前尚有 ";
                lable.textColor = 0xFDDB97;
                lable.size = 24;
                this._richText.pushBackElement(lable);
                lable = new eui.Label();
                lable.text = "" + managers.FrameManager.getInstance().m_GlobalUserItem.lUserRoomCard;
                lable.textColor = 0x65C718;
                lable.size = 24;
                this._richText.pushBackElement(lable);
                lable = new eui.Label();
                lable.text = " 房卡";
                lable.textColor = 0xFDDB97;
                lable.size = 24;
                this._richText.pushBackElement(lable);
            }
            else {
                var lable = new eui.Label();
                lable.text = "对局需 ";
                lable.textColor = 0xFDDB97;
                lable.size = 24;
                this._richText.pushBackElement(lable);
                lable = new eui.Label();
                lable.text = "" + this._lDiamond;
                lable.textColor = 0x65C718;
                lable.size = 24;
                this._richText.pushBackElement(lable);
                lable = new eui.Label();
                lable.text = " 钻石，您当前尚有 ";
                lable.textColor = 0xFDDB97;
                lable.size = 24;
                this._richText.pushBackElement(lable);
                lable = new eui.Label();
                lable.text = "" + managers.FrameManager.getInstance().m_GlobalUserItem.lUserIngot;
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
            var notify = {
                key: "wealth",
                data: {}
            };
            this._scene.dispatchEvent(new customEvent.CustomEvent(customEvent.CustomEvent.EVENT_PLAZA_REFRESH, false, false, notify));
        };
        /**约战 OR 茶馆创建 */
        BattleCreateLayer.prototype.onCreateRoom = function (config) {
            this._battleFrame = new frame.BattleFrame(this);
            this._battleFrame.onNCreateTable(Number(config.wKindID), config.cbCurrencyKind, config.lBaseScore, config, config.wPayType);
            //设置约战代理
            if (null != managers.TcpServiceCtrl.getInstance().getGateWayService()) {
                managers.TcpServiceCtrl.getInstance().getGateWayService().setDelegate(this._battleFrame);
            }
        };
        BattleCreateLayer.prototype.onStartBattleGame = function () {
            managers.FrameManager.getInstance().showToast("游戏接口未实现");
        };
        return BattleCreateLayer;
    }(eui.UILayer));
    client.BattleCreateLayer = BattleCreateLayer;
})(client || (client = {}));
