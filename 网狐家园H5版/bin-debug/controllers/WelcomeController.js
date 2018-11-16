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
/*
*欢迎界面
*预加载大厅资源
*加载服务信息
*进入登录场景
*/
var controller;
(function (controller) {
    var WelComeController = (function (_super) {
        __extends(WelComeController, _super);
        //构造
        function WelComeController() {
            var _this = _super.call(this) || this;
            //视图名称
            _this.name = "WelComeController";
            //设置当前视图
            managers.FrameManager.getInstance().setRunningController(_this);
            //初始场景
            _this.createWelComeView();
            //注册触摸
            _this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, _this.onTouchBegan, _this);
            _this.addEventListener(egret.TouchEvent.TOUCH_MOVE, _this.onTouchMove, _this);
            _this.addEventListener(egret.TouchEvent.TOUCH_END, _this.onTouchEnd, _this);
            return _this;
        }
        /* controller生命周期
        *  viewWillAppear
        *  viewDidAppear
        *  viewWillDisappear
        *  viewDidDisappear
        *  dealloc 回收资源
        */
        WelComeController.prototype.viewWillAppear = function (animated) {
        };
        WelComeController.prototype.viewDidAppear = function (animated) {
        };
        WelComeController.prototype.viewWillDisappear = function (animated) {
        };
        WelComeController.prototype.viewDidDisappear = function (animated) {
        };
        WelComeController.prototype.dealloc = function () {
            this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegan, this);
            this.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
            this.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
        };
        /**进入前台
        * applicationDidBecomeActive
        */
        WelComeController.prototype.applicationDidBecomeActive = function (event) {
        };
        /**进入后台
        * applicationDidBecomeActive
        */
        WelComeController.prototype.applicationWillEnterForeground = function (event) {
        };
        /**
         * 初始场景
         */
        WelComeController.prototype.createWelComeView = function () {
            return __awaiter(this, void 0, void 0, function () {
                var sky, logo, copyright, tips, callback, loadingbar;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            sky = utils.createBitmapByName("background_png");
                            this.addChild(sky);
                            logo = utils.createBitmapByName("logo_name_00_png");
                            this.addChild(logo);
                            utils.setAnchorCenter(logo);
                            logo.x = 667;
                            logo.y = 330;
                            egret.Tween.get(logo, { loop: true })
                                .to({ "alpha": 0.2 }, 2000)
                                .to({ "alpha": 1.0 }, 2000);
                            copyright = utils.createBitmapByName("copyright_png");
                            this.addChild(copyright);
                            utils.setAnchorMidBottom(copyright);
                            copyright.x = 667;
                            copyright.y = 700;
                            tips = new egret.TextField();
                            tips.textColor = 0xffffff;
                            tips.name = "tips";
                            tips.textAlign = "center";
                            tips.text = "资源加载中,请稍后...";
                            tips.size = 24;
                            utils.setAnchorCenter(tips);
                            tips.x = 667;
                            tips.y = 540;
                            this.addChild(tips);
                            callback = function () {
                                //切换场景
                                managers.FrameManager.getInstance().replaceScene(new controller.LoginController(), true);
                            };
                            loadingbar = new models.Loading(callback);
                            loadingbar.direction = eui.Direction.LTR;
                            loadingbar.skinName = skins.ProgressBarSkin_1;
                            loadingbar.maximum = 1000;
                            loadingbar.minimum = 0;
                            loadingbar.name = "loading";
                            loadingbar.value = 10;
                            // loadingbar.labelDisplay.text = `${loadingbar.value}/${ loadingbar.maximum}`;
                            // loadingbar.labelDisplay.textColor = 0xffffff
                            // loadingbar.labelDisplay.size = 24;
                            loadingbar.labelDisplay.visible = false;
                            this.addChild(loadingbar);
                            utils.setAnchorCenter(loadingbar);
                            loadingbar.x = 667;
                            loadingbar.y = 580;
                            //加载大厅资源
                            return [4 /*yield*/, this.loadPlazaResource()];
                        case 1:
                            //加载大厅资源
                            _a.sent();
                            //获取登录信息
                            this.httpGetLogonInfo().then(function () {
                                loadingbar.finishLoading();
                            });
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * 预加载资源
         */
        WelComeController.prototype.loadPlazaResource = function () {
            return __awaiter(this, void 0, void 0, function () {
                var e_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 25, , 26]);
                            return [4 /*yield*/, RES.loadGroup("preload", 0)];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, RES.loadGroup("Active", 0, this)];
                        case 2:
                            _a.sent();
                            return [4 /*yield*/, RES.loadGroup("Battle", 0, this)];
                        case 3:
                            _a.sent();
                            return [4 /*yield*/, RES.loadGroup("Benefit", 0, this)];
                        case 4:
                            _a.sent();
                            return [4 /*yield*/, RES.loadGroup("Chat", 0, this)];
                        case 5:
                            _a.sent();
                            return [4 /*yield*/, RES.loadGroup("CopyRight", 0, this)];
                        case 6:
                            _a.sent();
                            return [4 /*yield*/, RES.loadGroup("Dismiss", 0, this)];
                        case 7:
                            _a.sent();
                            return [4 /*yield*/, RES.loadGroup("GameList", 0, this)];
                        case 8:
                            _a.sent();
                            return [4 /*yield*/, RES.loadGroup("General", 0, this)];
                        case 9:
                            _a.sent();
                            return [4 /*yield*/, RES.loadGroup("GPS", 0, this)];
                        case 10:
                            _a.sent();
                            return [4 /*yield*/, RES.loadGroup("Head", 0, this)];
                        case 11:
                            _a.sent();
                            return [4 /*yield*/, RES.loadGroup("Logon", 0, this)];
                        case 12:
                            _a.sent();
                            return [4 /*yield*/, RES.loadGroup("MoreSub", 0, this)];
                        case 13:
                            _a.sent();
                            return [4 /*yield*/, RES.loadGroup("NewChat", 0, this)];
                        case 14:
                            _a.sent();
                            return [4 /*yield*/, RES.loadGroup("Option", 0, this)];
                        case 15:
                            _a.sent();
                            return [4 /*yield*/, RES.loadGroup("PlazaShare", 0, this)];
                        case 16:
                            _a.sent();
                            return [4 /*yield*/, RES.loadGroup("Rank", 0, this)];
                        case 17:
                            _a.sent();
                            return [4 /*yield*/, RES.loadGroup("Regist", 0, this)];
                        case 18:
                            _a.sent();
                            return [4 /*yield*/, RES.loadGroup("Reward", 0, this)];
                        case 19:
                            _a.sent();
                            return [4 /*yield*/, RES.loadGroup("RoomList", 0, this)];
                        case 20:
                            _a.sent();
                            return [4 /*yield*/, RES.loadGroup("Shop", 0, this)];
                        case 21:
                            _a.sent();
                            return [4 /*yield*/, RES.loadGroup("UserInfo", 0, this)];
                        case 22:
                            _a.sent();
                            return [4 /*yield*/, RES.loadGroup("Video", 0, this)];
                        case 23:
                            _a.sent();
                            return [4 /*yield*/, RES.loadGroup("GameInfo", 0, this)];
                        case 24:
                            _a.sent();
                            return [3 /*break*/, 26];
                        case 25:
                            e_1 = _a.sent();
                            console.error(e_1);
                            return [3 /*break*/, 26];
                        case 26: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * 进度回调
         */
        WelComeController.prototype.onProgress = function (current, total) {
            //console.log(`current is ${current},total is ${total}`);
            var loadingbar = this.getChildByName("loading");
            if (loadingbar.value + 1 <= loadingbar.maximum) {
                loadingbar.value += 1;
            }
        };
        /** 触摸事件
        * onTouchBegan
        * onTouchMove
        * onTouchEnd
       */
        WelComeController.prototype.onTouchBegan = function (event) {
            console.log("onTouch Began");
        };
        WelComeController.prototype.onTouchMove = function (event) {
            console.log("onTouch move");
        };
        WelComeController.prototype.onTouchEnd = function (event) {
            console.log("onTouch end");
        };
        /**
         * 获取登录信息
         */
        WelComeController.prototype.httpGetLogonInfo = function () {
            var _this = this;
            var tips = this.getChildByName("tips");
            tips.text = "加载登录信息中...";
            var loadingbar = this.getChildByName("loading");
            return new Promise(function (resolve) {
                _this.ReLoadHttpInfo().then(function () {
                    //保存服务器信息
                    resolve();
                }).catch(function (err) {
                    //获取本地信息
                    var localStoraget = JSON.parse(localStorage.getItem('LogonAccess'));
                    if (localStoraget.domin && localStoraget.port && localStoraget.webAddr) {
                        //保存最近登录信息
                        managers.TcpServiceCtrl.getInstance().m_DefaultServerInfo.domain = localStoraget.domin;
                        managers.TcpServiceCtrl.getInstance().m_DefaultServerInfo.port = localStoraget.port;
                        managers.TcpServiceCtrl.getInstance().m_DefaultServerInfo.webAddr = localStoraget.webAddr;
                    }
                    else {
                        managers.FrameManager.getInstance().showToast("登录信息获取失败");
                    }
                });
            });
        };
        /**
         * 获取登录信息
         */
        WelComeController.prototype.ReLoadHttpInfo = function () {
            var _this = this;
            return new Promise(function (resolve, reject) {
                var url = "http://service.foxuc.com/GetAppService.ashx?action=GetLogonServer";
                var params = "BaseVersion=" + df.APP_VERSION + "&AppSource=" + df.APP_SOURCE;
                var onCompleteHandler = function (e) {
                    console.log("请求成功");
                    //保存信息
                    var jsonData = JSON.parse(e.target.response);
                    if (null == jsonData) {
                        console.log("json Error");
                    }
                    else {
                        jsonData = jsonData.Data;
                        if (!(jsonData.DomainGetLogon && jsonData.PortGetLogon && jsonData.WebAddress)) {
                            resolve();
                        }
                        managers.TcpServiceCtrl.getInstance().m_DefaultServerInfo.domain = jsonData.DomainGetLogon;
                        managers.TcpServiceCtrl.getInstance().m_DefaultServerInfo.port = Number(jsonData.PortGetLogon);
                        managers.TcpServiceCtrl.getInstance().m_DefaultServerInfo.webAddr = jsonData.WebAddress;
                        managers.TcpServiceCtrl.getInstance().URL_RECHARGE_CARD = jsonData.WebAddress + "/Ashx/ProService.ashx";
                        managers.TcpServiceCtrl.getInstance().ZFB_CALLBACK_URL = jsonData.WebAddress + "/ZFB/App/notify_url.aspx";
                        //本地缓存
                        var session = {
                            'domin': "",
                            'port': 0,
                            'webAddr': "" //web
                        };
                        session.domin = jsonData.DomainGetLogon;
                        session.port = Number(jsonData.PortGetLogon);
                        session.webAddr = jsonData.WebAddress;
                        localStorage.setItem('LogonAccess', JSON.stringify(session));
                    }
                    resolve();
                };
                var onErrorHandler = function (e) {
                    console.log("请求失败");
                    resolve();
                    //reject("获取接口失败！");
                };
                utils.HttpRequest.createHttpRequest(_this, url, params, egret.HttpMethod.POST, onCompleteHandler, onErrorHandler);
            });
        };
        return WelComeController;
    }(models.Controller));
    controller.WelComeController = WelComeController;
})(controller || (controller = {}));
