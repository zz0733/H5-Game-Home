/**
 * 网关服务
 */
namespace managers {
    export class GateWayCtrl implements df.IConnectSocket, df.ISocketService {

        /***
         * 重连次数
         */
        m_ReConnectCount: number;

        /**
         * 最大连接
         */
        m_ReConnectMax: number;

        /**
         * 连接超时
         */
        m_ReConnectTimeOut: number;

        /**
         * 当前Tcp服务
         */
        private m_pTcpService: service.TcpSocketService;

        /**
         * 业务代理
         */
        private _delegate: any;

        /**
         * 消息队列
         */
        _MsgQueue: network.Message[] = [];

        /**
         * 当前服务列表
         */
        private _curServerList: any;

        /**
         * 当前服务索引
         */
        private _curServerIdx: number = 0;

        /**
         * 构造
         */
        constructor() {
            this.onInit();
            this.setCurServerList(managers.TcpServiceCtrl.getInstance().getServerInfo().getAccessServer());
        }   

        public connectGateWay() {
            if (null == this._curServerList || this._curServerList.length == 0) {
                console.log("网关服务器列表为空");
                return;
            }

            this.m_pTcpService = new service.TcpSocketService(this,df.eServerKind.GATEWAY);
            this.m_pTcpService.createConnect(this._curServerList[this._curServerIdx].szServiceAddr, this._curServerList[this._curServerIdx].wServicePort);
        }

        /**
         * 服务索引
         */
        public setServerIdx(idx: number) {
            this._curServerIdx = idx;
        }

        /**
         * 当前服务列表
         */
        public setCurServerList(list: any) {
            this._curServerList = list;
        }


        onUpdate(){
            //服务刷新
            if (this.m_pTcpService && this.m_pTcpService.onUpdate) {
                this.m_pTcpService.onUpdate();
            }

            if (this._MsgQueue.length == 0) return;

            if (null == this._delegate) {
                console.log("delegate is null");
                return;
            }

            //处理队列
            if (null != this._delegate.onMessage) {
                //变量定义
                var dispatch: network.Message[] = [];
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
        }

        onInit() {
            this.m_ReConnectCount = 0;
            this.m_ReConnectMax = 5;
            this.m_ReConnectTimeOut = 10*1000 ; //10秒
            this._curServerList = null;
        }

         /**
         * 绑定成功
         */
        socketConnectSuccess(){
            //重置变量
            this.m_ReConnectCount = 0;
        }

        /**
        * 关闭服务
        */
        closeService(){
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
        }

        /**
         * 重连机制
         */
        onReconnect(){
            this._curServerIdx ++;
        }

        /**
         * 重连超时
         */
        onReconnectTimeOut(){

        }

        /**
         * 重连失败
         */
        onReconnectFailure(){

        }

        /**
         * 消息代理
         */
        public setDelegate(delegate: any) {
            this._delegate = null;

            if (null == delegate)
                return;

            this._delegate = delegate;
        }

        public getDelegate() {
            return this._delegate ? this._delegate : null;
        }

        /**
         * 获取TCP服务
         */
        public getTcpService() {
            return this.m_pTcpService;
        }

    }
}