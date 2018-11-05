/**
 * 网络服务
**/
var managers;
(function (managers) {
    var TcpServiceCtrl = /** @class */ (function () {
        function TcpServiceCtrl() {
            /**
             * 消息队列
             */
            this._MsgQueue = [];
            /**
             * 派发标识
             */
            this._isAllowDispatch = true;
            /**
             * 当前服务索引
             */
            this._curServerIdx = 0;
            /**
             * 最大连接次数
             */
            this.m_ReConnectMax = 5;
            /**
             * 连接超时
             */
            this.m_ReConnectTimeOut = 10;
            /**
             * 重连标识
             */
            this.m_bReConnect = false;
            /**广场服务标识 */
            this.m_bPlaza = true;
            /**
             * 默认服务信息
             */
            this.m_DefaultServerInfo = {
                domain: "s88.foxuc.com",
                port: 8100,
                webAddr: "testwww.foxuc.com"
            };
            /**实卡地址*/
            this.URL_RECHARGE_CARD = "";
            /**支付宝回调 */
            this.ZFB_CALLBACK_URL = "";
            //创建服务
            this._host = "";
            this._port = 0;
        }
        /**
        *获取当前实例
        */
        TcpServiceCtrl.getInstance = function () {
            if (this.m_sInstance == null) {
                this.m_sInstance = new TcpServiceCtrl();
                this.m_sInstance.init();
            }
            return this.m_sInstance;
        };
        TcpServiceCtrl.prototype.init = function () {
            //服务器信息
            this.m_ServerInfo = new models.ServerInfo();
            //列表信息
            this.m_GamelistInfo = new client.GameListInfo();
        };
        /**
         * 服务索引
         */
        TcpServiceCtrl.prototype.setServerIdx = function (idx) {
            this._curServerIdx = idx;
        };
        /**
         * 当前服务列表
         */
        TcpServiceCtrl.prototype.setCurServerList = function (list) {
            this._curServerList = list;
        };
        /**
         * 服务器信息
         */
        TcpServiceCtrl.prototype.getServerInfo = function () {
            return this.m_ServerInfo;
        };
        /**
         * 列表信息
         */
        TcpServiceCtrl.prototype.getGameListInfo = function () {
            return this.m_GamelistInfo;
        };
        //连接大厅
        TcpServiceCtrl.prototype.onConnectPlaza = function () {
            var lastdata = this.loadAgentPlazaRecord();
            var szAddr = lastdata ? lastdata.host : this.m_DefaultServerInfo.domain;
            var nPort = lastdata ? lastdata.port : this.m_DefaultServerInfo.port;
            this.createSocketService(szAddr, nPort);
        };
        //连接房间
        TcpServiceCtrl.prototype.onConnectRoom = function () {
            var gameFrame = new frame.GameFrame();
            this.setDelegate(gameFrame);
            gameFrame.onLogonRoom();
        };
        //加载上次成功地址
        TcpServiceCtrl.prototype.loadAgentPlazaRecord = function () {
            var localStoraget = JSON.parse(localStorage.getItem('lastLogin'));
            return localStoraget;
        };
        //保存地址
        TcpServiceCtrl.prototype.saveAgentPlazaRecord = function () {
            //本地缓存
            var session = {
                'host': "",
                'port': 0,
            };
            session.host = this._host;
            session.port = this._port;
            localStorage.setItem('lastLogin', JSON.stringify(session));
        };
        //连接成功
        TcpServiceCtrl.prototype.socketConnectSuccess = function () {
            //重置变量
            this.m_ReConnectCount = 0;
            //广场登录
            if (this.m_bPlaza) {
                //保存服务
                this.saveAgentPlazaRecord();
                //重置信息
                this.m_DefaultServerInfo.domain = this._host;
                this.m_DefaultServerInfo.port = this._port;
            }
        };
        /**
        * 重连机制
        */
        TcpServiceCtrl.prototype.onReconnect = function () {
            managers.FrameManager.getInstance().showPopWait("网络重连中");
        };
        /**
         * 重连超时
         */
        TcpServiceCtrl.prototype.onReconnectTimeOut = function () {
        };
        /**
         * 重连失败
         */
        TcpServiceCtrl.prototype.onReconnectFailure = function () {
            if (null == this._delegate)
                return;
            this._delegate.getDispatcher().dispatchEvent(new customEvent.CustomEvent(customEvent.CustomEvent.EVENT_CONNECT_FAIlURE));
        };
        /**
         * 消息代理
         */
        TcpServiceCtrl.prototype.setDelegate = function (delegate) {
            this._delegate = null;
            if (null == delegate)
                return;
            this._delegate = delegate;
        };
        TcpServiceCtrl.prototype.getDelegate = function () {
            return this._delegate ? this._delegate : null;
        };
        /**
         * 获取TCP服务
         */
        TcpServiceCtrl.prototype.getTcpService = function () {
            return this.m_pTcpService;
        };
        TcpServiceCtrl.prototype.createSocketService = function (host, port, serviceKind) {
            if (serviceKind === void 0) { serviceKind = 1 /* PLAZA */; }
            var tcpService = new service.TcpSocketService(this, serviceKind);
            tcpService.createConnect(host, port);
            this.m_pTcpService = null;
            this.m_pTcpService = tcpService;
            this.m_bPlaza = (serviceKind == 1 /* PLAZA */) ? true : false;
            if (true == this.m_bPlaza) {
                this._host = host;
                this._port = port;
            }
        };
        //创建网关服务
        TcpServiceCtrl.prototype.createGateWayService = function () {
            this.m_pGateWayCtrl = null;
            return this.m_pGateWayCtrl = new managers.GateWayCtrl();
        };
        TcpServiceCtrl.prototype.getGateWayService = function () {
            return this.m_pGateWayCtrl;
        };
        /**
         * 关闭服务
         */
        TcpServiceCtrl.prototype.closeService = function () {
            if (this.m_pTcpService) {
                //关闭SOCKET
                this.m_pTcpService.closeService();
                this.m_pTcpService = null;
                //重置变量
                this._curServerIdx = 0;
                this.m_ReConnectCount = 0;
                this._curServerList = null;
                this._delegate = null;
            }
        };
        /**
         * 刷新服务
         */
        TcpServiceCtrl.prototype.onUpdate = function () {
            //服务刷新
            if (this.m_pTcpService && this.m_pTcpService.onUpdate) {
                this.m_pTcpService.onUpdate();
            }
            //服务刷新
            if (this.m_pGateWayCtrl && this.m_pGateWayCtrl.onUpdate) {
                this.m_pGateWayCtrl.onUpdate();
            }
            if (this._MsgQueue.length == 0)
                return;
            if (null == this._delegate) {
                console.log("delegate is null");
                return;
            }
            if (false == this._isAllowDispatch) {
                //console.log("the curren dispatch is paused");
                return;
            }
            //处理队列
            if (null != this._delegate.onMessage) {
                //变量定义
                var dispatch = [];
                var length = this._MsgQueue.length;
                length = (length < df.MAX_UNIT) ? length : df.MAX_UNIT;
                //分帧处理
                dispatch = this._MsgQueue.slice(0, length);
                this._MsgQueue.splice(0, length);
                //消息分发
                while (dispatch.length) {
                    var msg = dispatch[0];
                    this._delegate.getDispatcher().dispatchEvent(new customEvent.CustomEvent(customEvent.CustomEvent.EVENT_MESSAGE_DISPATCH, false, false, msg));
                    dispatch.shift();
                }
            }
        };
        return TcpServiceCtrl;
    }());
    managers.TcpServiceCtrl = TcpServiceCtrl;
})(managers || (managers = {}));
