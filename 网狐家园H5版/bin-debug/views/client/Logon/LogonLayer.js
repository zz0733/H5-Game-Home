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
var client;
(function (client) {
    /**
     * 登录层
     */
    var LogonLayer = /** @class */ (function (_super) {
        __extends(LogonLayer, _super);
        function LogonLayer() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /**
             * 操作类型
             */
            _this.OperateRigest = 0; //注册
            _this.OperateLogin = 1; //账号登录 
            _this.OperateWechat = 2; //微信登录
            /**
             * 默认账号登录
             */
            _this._operateCode = _this.OperateLogin;
            /**
             * 账号
             */
            _this._account = "";
            /**
             * 密码
             */
            _this._password = "";
            /**
             * 提示语
             */
            _this._tipsInfo = [];
            /**
             * 自动登录
             */
            _this._isAutoLogon = false;
            /**
             * 手动输入
             */
            _this._isHandInput = false;
            return _this;
        }
        /**
         * 构造
         */
        LogonLayer.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.name = "LogonLayer";
            var stationid = df.STATION_ID;
            if (stationid == 2008) {
                this._tipsInfo = ["你好，我是贝拉，登录遇到困难？点我可以获得帮助哦！", "注册帐号，您可以使用游戏中的更多功能！"];
            }
            else {
                this._tipsInfo = ["你好，我是劳拉，登录遇到困难？点我可以获得帮助哦！", "注册帐号，您可以使用游戏中的更多功能！"];
            }
            this.onInitLayer();
            //注册监听
            this.once(egret.Event.REMOVED_FROM_STAGE, this.onExit, this);
        };
        LogonLayer.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        /**
         * 初始化
         */
        LogonLayer.prototype.onInitLayer = function () {
            var _this = this;
            //加载皮肤 
            this._component = new eui.Component();
            this.addChild(this._component);
            this._component.skinName = skins.LogonLayer;
            //设置根VIEW
            managers.FrameManager.getInstance().getRunningController().setRoot(this);
            //显示登录
            this.onChangeView(df.MODE_CHOOSE);
            //提示语
            this._tipsLabel = this._component.getChildByName("tips_label");
            this._tipsLabel.text = this._tipsInfo[0];
            var width = this._tipsLabel.width;
            var height = this._tipsLabel.height;
            //气泡
            var bubble = this._component.getChildByName("tips_bg");
            bubble.width = width + 40;
            bubble.height = height + 60;
            utils.setAnchorLeftBottom(bubble);
            bubble.x = 188;
            bubble.y = 248;
            this._bubble = bubble;
            //lora
            this._lora = this._component.getChildByName("bt_lora");
            this._lora.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClickEvent, this);
            //系统公告
            var msg = ["清凉一夏,昏地主来袭", "平台严禁赌博"];
            this._rollNotice = models.RollNotice.createNotice("general_notice_bg_png", 700, 44, msg, true, 1 /* VERTICAL */, "general_notice_icon_png");
            utils.setAnchorMidTop(this._rollNotice);
            this.addChild(this._rollNotice);
            this._rollNotice.x = 667;
            this._rollNotice.y = 10;
            this._rollNotice.setTouchHandler(function (e) {
                console.log("系统公告");
                var controller = managers.FrameManager.getInstance().getRunningController();
                controller.addWindow(new client.NoticeLayer(_this, df.MODE_NOTICE));
            });
            //客服
            var btn = this._component.getChildByName("btn_service");
            btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClickEvent, this);
            this._serviceBtn = btn;
            //设置
            btn = this._component.getChildByName("btn_set");
            btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClickEvent, this);
            this._optionBtn = btn;
            //注册触摸
            this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegan, this);
            this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
            this.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
            //获取本地缓存
            this._localStorage = JSON.parse(localStorage.getItem('Logon'));
            if (null == this._localStorage) {
                return;
            }
            var record = this._localStorage ? this._localStorage.isAuto : 0;
            this._isAutoLogon = (Number(record) == 1) ? true : false;
            setTimeout(function () {
                //无切换账号且勾选自动登录
                if (_this._isAutoLogon && managers.FrameManager.getInstance().m_IsAuto) {
                    //自动登录
                    _this._account = _this._localStorage.account;
                    _this._password = _this._localStorage.password;
                    _this.onLogon();
                }
            }, 600);
        };
        /**
         *切换view
         */
        LogonLayer.prototype.onChangeView = function (viewMode) {
            var controller = managers.FrameManager.getInstance().getRunningController();
            if (viewMode == null) {
                controller.popView();
                this._lora.visible = true;
                this._bubble.visible = true;
                this._tipsLabel.visible = true;
                this._optionBtn.visible = true;
                this._rollNotice.visible = true;
                this._serviceBtn.visible = true;
            }
            else {
                if (viewMode == df.MODE_SERVICE || viewMode == df.MODE_OPTION) {
                    this._lora.visible = false;
                    this._bubble.visible = false;
                    this._tipsLabel.visible = false;
                    this._optionBtn.visible = false;
                    this._rollNotice.visible = false;
                    this._serviceBtn.visible = false;
                }
                switch (viewMode) {
                    case df.MODE_CHOOSE:
                        {
                            //启动登录
                            var logonMode = new client.LogonModeView(this);
                            logonMode.x = -this.width;
                            logonMode.y = 0;
                            controller.showView(logonMode, 0 /* LOGON */, true);
                            break;
                        }
                    case df.MODE_ACCOUNT:
                        {
                            //登录输入
                            var logonView = new client.LogonView(this);
                            logonView.x = -this.width;
                            logonView.y = 0;
                            controller.showView(logonView, 0 /* LOGON */, true);
                            break;
                        }
                    case df.MODE_REGISTER:
                        {
                            //注册账号
                            var regist = new client.Regist(this);
                            regist.x = -this.width;
                            regist.y = 0;
                            controller.showView(regist, 0 /* LOGON */, true);
                            break;
                        }
                    case df.MODE_SERVICE:
                        {
                            //客服
                            var service = new client.ServiceLayer(this);
                            service.x = -this.width;
                            service.y = 0;
                            controller.showView(service, 0 /* LOGON */, true);
                            break;
                        }
                    case df.MODE_OPTION:
                        {
                            //设置
                            var option = new client.OptionLayer(this);
                            option.x = -this.width;
                            option.y = 0;
                            controller.showView(option, 0 /* LOGON */, true);
                            break;
                        }
                }
            }
        };
        /**
        * 按钮事件
        */
        LogonLayer.prototype.onButtonClickEvent = function (e) {
            var button = e.target;
            var tw = egret.Tween.get(button)
                .to({ scaleX: 1.1, scaleY: 1.1 }, 50)
                .to({ scaleX: 1.0, scaleY: 1.0 }, 50);
            switch (button.name) {
                case "btn_service":
                case "bt_lora":
                    {
                        this.onChangeView(df.MODE_SERVICE);
                        break;
                    }
                case "btn_set":
                    {
                        this.onChangeView(df.MODE_OPTION);
                        break;
                    }
                default:
                    {
                        break;
                    }
            }
        };
        //注册
        LogonLayer.prototype.onRegist = function () {
            this._operateCode = this.OperateRigest;
            this._LogonFrame = new frame.LogonFrame(this);
            managers.TcpServiceCtrl.getInstance().onConnectPlaza();
            managers.TcpServiceCtrl.getInstance().setDelegate(this._LogonFrame);
            managers.FrameManager.getInstance().showPopWait("正在加载中");
        };
        //登录
        LogonLayer.prototype.onLogon = function () {
            this._operateCode = this.OperateLogin;
            this._LogonFrame = new frame.LogonFrame(this);
            managers.TcpServiceCtrl.getInstance().onConnectPlaza();
            managers.TcpServiceCtrl.getInstance().setDelegate(this._LogonFrame);
            managers.FrameManager.getInstance().showPopWait("正在加载中");
        };
        //连接成功
        LogonLayer.prototype.connectComplete = function () {
            var instance = managers.TcpServiceCtrl.getInstance();
            var tcpService = instance.getTcpService();
            if (this._operateCode == this.OperateRigest) {
                this._isHandInput = true;
                //发送注册
                var regist = df.CMD_MB_RegisterAccounts_WEB();
                regist.wModuleID = df.INVALID_WORD; //模块标识
                regist.wMarketID = df.MARKET_ID; //渠道标识
                regist.cbDeviceType = df.DEVICE_TYPE; //设备类型
                regist.dwAppVersion = utils.PROCESS_VERSION(1, 1, 0, 1); //应用版本
                regist.dwPlazaVersion = utils.PROCESS_VERSION(1, 1, 0, 0); //广场版本
                regist.dwStationID = df.STATION_ID; //站点标识
                regist.szLogonPass = utils.MD5.MD5_HEX(this._password); //登录密码
                //注册信息
                regist.wFaceID = Math.floor(Math.random() * 19); //头像标识
                regist.cbGender = Math.floor(Math.random() * 2); //用户性别
                regist.szAccounts = this._account; //登录帐号
                regist.szNickName = this._account; //用户昵称
                //连接信息
                regist.szMachineID = utils.StringUtils.getGUID(); //机器标识
                regist.szMobilePhone = ""; //电话号码
                this._LogonFrame.sendRegister(tcpService, regist);
            }
            else {
                //发送登录
                var logonAccounts = df.CMD_MB_LogonAccounts_WEB();
                logonAccounts.wModuleID = df.INVALID_WORD;
                logonAccounts.wMarketID = df.MARKET_ID;
                logonAccounts.cbDeviceType = df.DEVICE_TYPE;
                logonAccounts.dwAppVersion = utils.PROCESS_VERSION(1, 1, 0, 1);
                logonAccounts.dwPlazaVersion = utils.PROCESS_VERSION(1, 1, 0, 1);
                logonAccounts.dwStationID = df.STATION_ID;
                logonAccounts.dwMappedNum = 0;
                logonAccounts.szPassword = utils.MD5.MD5_HEX(this.getPassWord());
                logonAccounts.szAccounts = this._account;
                logonAccounts.szMachineID = "";
                logonAccounts.szMobilePhone = "";
                this._LogonFrame.sendLogon(tcpService, logonAccounts);
            }
        };
        /**
         * 登录平台
         */
        LogonLayer.prototype.getPloatForm = function () {
            return (this._operateCode == this.OperateWechat) ? df.ACCOUNT_TYPE_SELF : df.ACCOUNT_TYPE_WECHAT;
        };
        /**
         * 获取密码
         */
        LogonLayer.prototype.getPassWord = function () {
            return this._isHandInput ? this._password : utils.StringUtils.array2string(egret.Base64Util.decode(this._password));
        };
        /**
         * 获取自动登录
         */
        LogonLayer.prototype.getAutoLogon = function () {
            return this._isAutoLogon ? 1 : 0;
        };
        /** 触摸事件
         * onTouchBegan
         * onTouchMove
         * onTouchEnd
        */
        LogonLayer.prototype.onTouchBegan = function (event) {
            console.log("onTouch Began");
        };
        LogonLayer.prototype.onTouchMove = function (event) {
            console.log("onTouch move");
        };
        LogonLayer.prototype.onTouchEnd = function (event) {
            console.log("onTouch end");
        };
        //登录层退出
        LogonLayer.prototype.onExit = function () {
            this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegan, this);
            this.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
            this.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
            this._LogonFrame.removeEventListener();
            managers.TcpServiceCtrl.getInstance().setDelegate(null);
            managers.FrameManager.getInstance().getRunningController()._viewFrame = null;
            this._LogonFrame = null;
            managers.FrameManager.getInstance().m_IsAuto = this._isAutoLogon;
        };
        return LogonLayer;
    }(eui.UILayer));
    client.LogonLayer = LogonLayer;
})(client || (client = {}));
