/**
 * 封装websocket
 */

namespace network {
    /**
     * 套接字处理
     */
    export class TcpSocket extends egret.WebSocket {
        /**
         *套接字状态
         */
        private m_eSocketStatus: number = df.eSocketStatus.soc_unConnect;

        /**
         * 服务实例
         */
        private m_SocketServiceModule: any;

        /**
        * 构造套接字
        */
        constructor(host?: string, port?: number) {
            super();

            //设置数据格式为二进制，默认为字符串
            this.type = egret.WebSocket.TYPE_BINARY;

            //数据监听
            this.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);

            //连接监听
            this.addEventListener(egret.Event.CONNECT, this.onSocketConnect, this);

            //关闭监听
            this.addEventListener(egret.Event.CLOSE, this.onSocketClose, this);

            //异常监听
            this.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onSocketError, this);
        }

        /**
        * 将套接字连接到指定的主机和端口
        * @param host 要连接到的主机的名称或 IP 地址
        * @param port 要连接到的端口号
        */
        connect(host: string, port: number): void {

            //设置状态
            this.setConnectStatus(df.eSocketStatus.soc_connecting);

            super.connect(host, port);
        }
        /**
         * 根据提供的url连接
         * @param url 全地址。如ws://echo.websocket.org:80
         */
        connectByUrl(url: string): void {
            let ws: string = "ws://" + url;
            super.connectByUrl(ws);

        }
        /**
         * 关闭连接
         */
        close() {
            //socket关闭
            super.close();

            //释放服务模块
            this.setServiceModule(null);

        }

        /**
        * TCP服务实例
        */
        public setServiceModule(serviceModule: any): void {
            if (this.m_SocketServiceModule)
                this.m_SocketServiceModule = null;

            this.m_SocketServiceModule = serviceModule;
        }


        /**
         * 连接监听
         */
        onSocketConnect(e: egret.Event) {
            if (this.m_SocketServiceModule) {
                this.m_SocketServiceModule.socketConnectSuccess();
            }
        }

        /**
         * 数据监听
         */
        onReceiveMessage(e: egret.ProgressEvent) {
            //加入缓冲队列
            if (this.m_SocketServiceModule) {
                let socket = <egret.WebSocket>(e.target);

                //读取数据流
                let buffer: utils.ByteArray = new utils.ByteArray();
                socket.readBytes(buffer.getByteArray(), 0);

                console.log(`接收长度=======${buffer.getLength()}`);
                this.m_SocketServiceModule.pushRecvBuffer(buffer);
            }
        }

        /**
         * 关闭监听
         */
        onSocketClose(e: egret.Event) {
            //服务关闭
            if (this.m_SocketServiceModule && this.m_SocketServiceModule.getServiceModule()) {
                this.m_SocketServiceModule.getServiceModule().closeService();
            }

            //设置socket状态
            this.setConnectStatus(df.eSocketStatus.soc_unConnect);
            console.log("socket close");
        }

        /**
         * 异常监听
         */
        onSocketError(e: egret.IOErrorEvent) {
            //失败通知
            if (this.m_SocketServiceModule) {
                if (this.isConnected()) {
                    //需断线重连
                    this.m_SocketServiceModule.onReconnect();

                } else {
                    //连接异常 连接接错误 超时
                    this.m_SocketServiceModule.onReconnect();
                }
            }

            //设置socket状态
            this.setConnectStatus(df.eSocketStatus.soc_error);
            console.log("socket error");
        }

        /**
         * 连接状态
         */
        public setConnectStatus(status): void {
            this.m_eSocketStatus = status;
        }

        /**
         * 连接状态
         */
        public isConnected(): boolean {
            return this.m_eSocketStatus == df.eSocketStatus.soc_connected;
        }
    }
}