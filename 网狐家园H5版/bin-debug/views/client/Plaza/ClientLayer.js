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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/**
 * 大厅主入口
 */
var client;
(function (client) {
    var ClientLayer = /** @class */ (function (_super) {
        __extends(ClientLayer, _super);
        function ClientLayer() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._gameList = [];
            _this._listBtns = [];
            _this._nCurAniIndex = 0;
            _this._kindID = df.INVALID_WORD;
            /**
             * 界面切入
             */
            _this._isTransEnd = true;
            _this._bMoved = false;
            /**
             * 按钮事件
             */
            _this._shopIndex = 0;
            return _this;
        }
        ClientLayer.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.name = "ClientLayer";
            this.once(egret.Event.ADDED_TO_STAGE, this.onInitLayer, this);
            this.once(egret.Event.REMOVED_FROM_STAGE, this.onExit, this);
            //注册触摸
            this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegan, this);
            this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
            this.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
            //注册通知
            this.addEventListener(customEvent.CustomEvent.EVENT_PLAZA_REFRESH, this.onPlazaRefresh, this);
        };
        ClientLayer.prototype.onInitLayer = function () {
            var _this = this;
            var componet = new eui.Component();
            this.addChild(componet);
            componet.skinName = skins.Plaza;
            //排行
            var rank = componet.getChildByName("bt_rank");
            rank.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClick, this);
            //分享
            var share = componet.getChildByName("bt_share");
            share.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClick, this);
            //客服
            var service = componet.getChildByName("bt_service");
            service.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClick, this);
            //设置
            var set = componet.getChildByName("bt_option");
            set.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClick, this);
            //充值
            var purchase = componet.getChildByName("bt_shop");
            purchase.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClick, this);
            //商城
            var shop = componet.getChildByName("bt_Ingot_shop");
            shop.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClick, this);
            shop = componet.getChildByName("bt_gold_shop");
            shop.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClick, this);
            //兑换
            var exchange = componet.getChildByName("bt_exchange");
            exchange.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClick, this);
            //活动
            var activity = componet.getChildByName("bt_activity");
            activity.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClick, this);
            //约战查找
            var findbattle = componet.getChildByName("findBattle");
            findbattle.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClick, this);
            //约战创建
            var battleCreate = componet.getChildByName("battleCreate");
            battleCreate.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClick, this);
            //约战列表
            var battleList = componet.getChildByName("battleList");
            battleList.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClick, this);
            //约战记录
            var battleRecord = componet.getChildByName("battleRecord");
            battleRecord.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClick, this);
            //茶馆
            var teaHouse = componet.getChildByName("bt_teaHouse");
            teaHouse.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClick, this);
            //比赛
            var match = componet.getChildByName("bt_match");
            match.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClick, this);
            //邀请Image
            var inviteImage = componet.getChildByName("Invite_image");
            egret.assert(null != inviteImage);
            inviteImage.$setTouchEnabled(false);
            egret.Tween.get(inviteImage, { loop: true })
                .to({ scaleX: 0.8, scaleY: 0.8 }, 800)
                .to({ scaleX: 1.0, scaleY: 1.0 }, 800);
            //活动红包
            var redPacket = componet.getChildByName("active_icon");
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
            var scorll = componet.getChildByName("lightScroll");
            var group = scorll.getChildByName("lightGroup");
            var light = group.getChildByName("light");
            egret.Tween.get(light, { loop: true })
                .to({ x: -15, y: 100 }, 1200)
                .wait(2000);
            for (var i = 0; i < 5; i++) {
                var str = "star" + ("" + (i + 1));
                var delay = Math.random() * (2000 - 1000);
                var star = componet.getChildByName(str);
                egret.Tween.get(star, { loop: true })
                    .to({ "alpha": 1.0, "rotation": 90, "scaleX": 1.0 }, 1000)
                    .to({ "alpha": 0.0, "rotation": 180, "scaleX": 0.1 }, 1000)
                    .wait(delay);
            }
            //头像框
            var headframe = componet.getChildByName("head_frame");
            var handler = function (e) {
                console.log("头像触摸");
                _this.onChangeView(df.MODE_USER_INFO);
            };
            //用户头像
            var useritem = managers.FrameManager.getInstance().m_GlobalUserItem;
            var head = models.HeadSprite.createHead(useritem, 120, 120, 40, 40, true, handler);
            utils.setAnchorLeftTop(head);
            this.addChild(head);
            head.x = 0;
            head.y = 0;
            //用户昵称
            var nick = componet.getChildByName("nick");
            nick.text = managers.FrameManager.getInstance().m_GlobalUserItem.szNickName;
            //用户ID
            var gameid = componet.getChildByName("gameid");
            gameid.text = "" + managers.FrameManager.getInstance().m_GlobalUserItem.dwGameID;
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
            this._rollNotice = models.RollNotice.createNotice("general_notice_bg_png", 700, 44, msg, true, 0 /* HORIZONTAL */, "general_notice_icon_png");
            utils.setAnchorMidTop(this._rollNotice);
            this.addChild(this._rollNotice);
            this._rollNotice.x = 720;
            this._rollNotice.y = 60;
            this._rollNotice.setTouchHandler(function (e) {
                console.log("系统公告");
                if (!_this._isTransEnd) {
                    return;
                }
                var controller = managers.FrameManager.getInstance().getRunningController();
                controller.addWindow(new client.NoticeLayer(controller.getRootLayer(), df.MODE_NOTICE));
            });
            //游戏列表
            var gameinfo = managers.TcpServiceCtrl.getInstance().getGameListInfo()._Info;
            for (var i = 0; i < gameinfo.length; i++) {
                if (gameinfo[i] && gameinfo[i].show) {
                    this._gameList.push(gameinfo[i]);
                }
            }
            //滑动组件
            this._listView = componet.getChildByName("GameListScorll");
            this._listView.addEventListener(egret.Event.CHANGE, this.onScrollerChange, this);
            var Group = this._listView.getChildByName("Group");
            for (var i = 0; i < this._gameList.length; i++) {
                var btn = new eui.Button;
                btn.name = this._gameList[i].id;
                btn.skinName = "resource/eui_skins/list/battle_list_" + this._gameList[i].id + ".exml";
                Group.addChild(btn);
                btn.addEventListener(egret.TouchEvent.TOUCH_END, this.onButtonClick, this);
                utils.setAnchorCenter(btn);
                btn.x = btn.width / 2;
                btn.y = btn.height / 2 + i * 160;
                this._listBtns.push(btn);
                //加遮罩
                var mask = new eui.Image("general_mask_bg_png");
                mask.name = "mask";
                btn.addChild(mask);
                utils.setAnchorCenter(mask);
                mask.x = btn.width / 2;
                mask.y = btn.height / 2;
                mask.visible = false;
                //光
                var light_1 = new eui.Image("general_mask_png");
                light_1.name = "light";
                btn.addChild(light_1);
                utils.setAnchorLeftTop(light_1);
                light_1.x = 0;
                light_1.y = 0;
                light_1.visible = false;
                //设置遮罩
                light_1.mask = mask;
            }
            this.listLightAni();
            //翻页标识
            this._pageUp = componet.getChildByName("PageUp");
            this._pageDown = componet.getChildByName("PageDown");
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
        };
        /**
         * 界面隐藏
         */
        ClientLayer.prototype.viewWillDisappear = function () {
            console.log("ClientLayer viewWillDisappear");
        };
        ClientLayer.prototype.transAnibegin = function () {
            this._isTransEnd = false;
            console.log("ClientLayer transAnibegin");
        };
        /**
        * 界面切入完成
        */
        ClientLayer.prototype.transFinish = function () {
            console.log("ClientLayer transAniFinish");
            this._isTransEnd = true;
            //判断被锁
            if (managers.FrameManager.getInstance().m_GlobalUserItem.wLockServerID != 0 &&
                managers.FrameManager.getInstance().m_GlobalUserItem.wLockServerID != df.INVALID_WORD) {
            }
        };
        /**
         * 连接成功
         */
        ClientLayer.prototype.connectComplete = function () {
        };
        ClientLayer.prototype.onUpdateUserWealth = function () {
            //钻石
            var lIngot = managers.FrameManager.getInstance().m_GlobalUserItem.lUserIngot;
            this._dimondLabel.setText(utils.StringUtils.formatNumberThousands(lIngot));
            //携带金币
            var score = managers.FrameManager.getInstance().m_GlobalUserItem.lUserScore;
            this._userScoreLabel.setText(utils.StringUtils.formatNumberThousands(score));
        };
        /**
         * 移除舞台
         */
        ClientLayer.prototype.onExit = function () {
            this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegan, this);
            this.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
            this.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
            this.removeEventListener(customEvent.CustomEvent.EVENT_PLAZA_REFRESH, this.onPlazaRefresh, this);
        };
        /**
        *切换view
        */
        ClientLayer.prototype.onChangeView = function (viewMode) {
            //当前控制器
            var controller = managers.FrameManager.getInstance().getRunningController();
            //默认返回
            if (viewMode == null) {
                controller.popView();
            }
            else {
                //设置
                if (viewMode == df.MODE_PLAZA_OPTION) {
                    var option = new client.OptionLayer(this, 1);
                    option.name = "OPTION";
                    option.x = this.width;
                    option.y = 0;
                    controller.showView(option, 1 /* PLAZA */, true);
                }
                else if (viewMode == df.MODE_SERVICE) {
                    //客服
                    var service_1 = new client.ServiceLayer(this);
                    service_1.x = this.width;
                    service_1.y = 0;
                    service_1.name = "SERVICE";
                    controller.showView(service_1, 1 /* PLAZA */, true);
                }
                else if (viewMode == df.MODE_USER_INFO) {
                    //个人信息
                    var userinfo = new client.UserInfoLayer(this);
                    userinfo.x = this.width;
                    userinfo.y = 0;
                    userinfo.name = "USERINFO";
                    controller.showView(userinfo, 1 /* PLAZA */, true);
                }
                else if (viewMode == df.MODE_SHOP) {
                    //商城
                    var shop_1 = new client.ShopLayer(this, this._shopIndex);
                    shop_1.x = this.width;
                    shop_1.y = 0;
                    shop_1.name = "SHOP";
                    controller.showView(shop_1, 1 /* PLAZA */, true);
                }
                else if (viewMode == df.MODE_RANK) {
                    //排行榜
                    var rank = new client.RankLayer(this);
                    rank.x = this.width;
                    rank.y = 0;
                    rank.name = "RANK";
                    controller.showView(rank, 1 /* PLAZA */, true);
                }
                else if (viewMode == df.MODE_BATTLE_FIND) {
                    var findbattle = new client.BattleFindLayer(this);
                    findbattle.x = this.width;
                    findbattle.y = 0;
                    findbattle.name = "FINDBATTLE";
                    controller.showView(findbattle, 1 /* PLAZA */, true);
                }
                else if (viewMode == df.MODE_BATTLE_LIST) {
                    var battleList = new client.BattleListLayer(this);
                    battleList.x = this.width;
                    battleList.y = 0;
                    battleList.name = "BATTLELIST";
                    controller.showView(battleList, 1 /* PLAZA */, true);
                }
                else if (viewMode == df.MODE_BATTLE_RECORD) {
                    var battleRecord = new client.BattleRecordLayer(this);
                    battleRecord.x = this.width;
                    battleRecord.y = 0;
                    battleRecord.name = "BATTLERECORD";
                    controller.showView(battleRecord, 1 /* PLAZA */, true);
                }
                else if (viewMode == df.MODE_BENEFIT) {
                    var benefit = new client.BenefitLayer(this);
                    benefit.x = this.width;
                    benefit.y = 0;
                    benefit.name = "BENEFIT";
                    controller.showView(benefit, 1 /* PLAZA */, true);
                }
                else if (viewMode == df.MODE_BATTLE_CREATE) {
                    if (null != controller.getViewByName("BATTLECREATE")) {
                        controller.popView();
                        return;
                    }
                    var battleCreate = new client.BattleCreateLayer(this, { mode: df.MODE_TH_SET });
                    battleCreate.x = this.width;
                    battleCreate.y = 0;
                    battleCreate.name = "BATTLECREATE";
                    controller.showView(battleCreate, 1 /* PLAZA */, true);
                }
                else if (viewMode == df.MODE_ROOM_LIST) {
                    var roomlist = new client.RoomListLayer(this, this._kindID);
                    roomlist.x = this.width;
                    roomlist.y = 0;
                    roomlist.name = "ROOMLIST";
                    controller.showView(roomlist, 1 /* PLAZA */, true);
                }
            }
        };
        /** 触摸事件
        * onTouchBegan
        * onTouchMove
        * onTouchEnd
       */
        ClientLayer.prototype.onTouchBegan = function (event) {
            //console.log("onTouch Began");
            this._bMoved = false;
        };
        ClientLayer.prototype.onTouchMove = function (event) {
            //console.log("onTouch move");
            this._bMoved = true;
        };
        ClientLayer.prototype.onTouchEnd = function (event) {
            //console.log("onTouch end");
        };
        /**
         * 大厅刷新通知
         */
        ClientLayer.prototype.onPlazaRefresh = function (e) {
            var data = e.data;
            if (null == data.key)
                return;
            switch (data.key) {
                case "wealth":
                    {
                        this.onUpdateUserWealth();
                    }
                    break;
            }
        };
        /**
         * 滑动监听
         */
        ClientLayer.prototype.onScrollerChange = function (e) {
            var scrollV = this._listView.viewport.scrollV;
            //console.log(`scrollV : ${scrollV}`);
            var topOffset = 0;
            var bottomOffset = 150 * this._gameList.length - this._listView.viewport.height;
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
        ClientLayer.prototype.onButtonClick = function (e) {
            var button = e.target;
            var name = button.name;
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
                        var controller_1 = managers.FrameManager.getInstance().getRunningController();
                        var sharelayer = new client.ShareLayer(controller_1.getRootLayer(), 0.4);
                        controller_1.addWindow(sharelayer);
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
                        this._shopIndex = (button.name == "bt_gold_shop") ? 1 /* Gold */ : 0 /* Ingot */;
                        this.onChangeView(df.MODE_SHOP);
                    }
                    break;
                case "bt_exchange":
                    {
                        this._shopIndex = 3 /* Exchange */;
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
                            var kindID = Number(button.name);
                            this._kindID = kindID;
                            this.onChangeView(df.MODE_ROOM_LIST);
                        }
                    }
                    break;
            }
        };
        //列表动画
        ClientLayer.prototype.listLightAni = function () {
            var _this = this;
            var btn = this._listBtns[this._nCurAniIndex];
            var mask = btn.getChildByName("mask");
            var light = btn.getChildByName("light");
            mask.visible = true;
            light.visible = true;
            egret.Tween.get(light)
                .to({ x: btn.width, y: 0 }, 1000)
                .wait(1000 / 60)
                .call(function () {
                mask.visible = false;
                light.visible = false;
                light.x = 0;
                light.y = 0;
                _this._nCurAniIndex = (_this._nCurAniIndex + 1) % _this._gameList.length;
                _this.listLightAni();
            });
        };
        /**启动游戏 */
        ClientLayer.prototype.onStartGame = function (kindID, wServerID) {
            return __awaiter(this, void 0, void 0, function () {
                var item, group;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            item = managers.TcpServiceCtrl.getInstance().getGameListInfo().isGameSupport(kindID);
                            if (null == item)
                                return [2 /*return*/];
                            group = item.group;
                            if (!(false == RES.isGroupLoaded(group))) return [3 /*break*/, 2];
                            managers.FrameManager.getInstance().showPopWait("资源加载中,请稍后");
                            return [4 /*yield*/, this.loadGameResource(group)];
                        case 1:
                            _a.sent();
                            managers.FrameManager.getInstance().dismissPopWait();
                            managers.TcpServiceCtrl.getInstance().onConnectRoom();
                            return [3 /*break*/, 3];
                        case 2:
                            //资源已加载
                            managers.TcpServiceCtrl.getInstance().onConnectRoom();
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * 预加载资源
         */
        ClientLayer.prototype.loadGameResource = function (group) {
            return __awaiter(this, void 0, void 0, function () {
                var e_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, RES.loadGroup(group, 0, this)];
                        case 1:
                            _a.sent();
                            return [3 /*break*/, 3];
                        case 2:
                            e_1 = _a.sent();
                            console.error(e_1);
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        /**
        * 进度回调
        */
        ClientLayer.prototype.onProgress = function (current, total) {
            console.log("current is " + current + ",total is " + total);
        };
        return ClientLayer;
    }(eui.UILayer));
    client.ClientLayer = ClientLayer;
})(client || (client = {}));
