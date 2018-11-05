/**
 * 网关服务
 */
var managers;
(function (managers) {
    var GateWayCtrl = /** @class */ (function () {
        /**
         * 构造
         */
        function GateWayCtrl() {
            /**
             * 消息队列
             */
            this._MsgQueue = [];
            /**
             * 当前服务索引
             */
            this._curServerIdx = 0;
            this.onInit();
            this.setCurServerList(managers.TcpServiceCtrl.getInstance().getServerInfo().getAccessServer());
        }
        GateWayCtrl.prototype.connectGateWay = function () {
            if (null == this._curServerList || this._curServerList.length == 0) {
                console.log("网关服务器列表为空");
                return;
            }
            this.m_pTcpService = new service.TcpSocketService(this, 2 /* GATEWAY */);
            this.m_pTcpService.createConnect(this._curServerList[this._curServerIdx].szServiceAddr, this._curServerList[this._curServerIdx].wServicePort);
        };
        /**
         * 服务索引
         */
        GateWayCtrl.prototype.setServerIdx = function (idx) {
            this._curServerIdx = idx;
        };
        /**
         * 当前服务列表
         */
        GateWayCtrl.prototype.setCurServerList = function (list) {
            this._curServerList = list;
        };
        GateWayCtrl.prototype.onUpdate = function () {
            //服务刷新
            if (this.m_pTcpService && this.m_pTcpService.onUpdate) {
                this.m_pTcpService.onUpdate();
            }
            if (this._MsgQueue.length == 0)
                return;
            if (null == this._delegate) {
                console.log("delegate is null");
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
        GateWayCtrl.prototype.onInit = function () {
            this.m_ReConnectCount = 0;
            this.m_ReConnectMax = 5;
            this.m_ReConnectTimeOut = 10 * 1000; //10秒
            this._curServerList = null;
        };
        /**
        * 绑定成功
        */
        GateWayCtrl.prototype.socketConnectSuccess = function () {
            //重置变量
            this.m_ReConnectCount = 0;
        };
        /**
        * 关闭服务
        */
        GateWayCtrl.prototype.closeService = function () {
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
         * 重连机制
         */
        GateWayCtrl.prototype.onReconnect = function () {
            this._curServerIdx++;
        };
        /**
         * 重连超时
         */
        GateWayCtrl.prototype.onReconnectTimeOut = function () {
        };
        /**
         * 重连失败
         */
        GateWayCtrl.prototype.onReconnectFailure = function () {
        };
        /**
         * 消息代理
         */
        GateWayCtrl.prototype.setDelegate = function (delegate) {
            this._delegate = null;
            if (null == delegate)
                return;
            this._delegate = delegate;
        };
        GateWayCtrl.prototype.getDelegate = function () {
            return this._delegate ? this._delegate : null;
        };
        /**
         * 获取TCP服务
         */
        GateWayCtrl.prototype.getTcpService = function () {
            return this.m_pTcpService;
        };
        return GateWayCtrl;
    }());
    managers.GateWayCtrl = GateWayCtrl;
})(managers || (managers = {}));
