/**
 * 网络消息包
 */
var network;
(function (network) {
    var Message = (function () {
        /**构造
         * constructor
         */
        function Message(wMain, wSub, wLen, cbBuffer) {
            this.wMainCmd = wMain;
            this.wSubCmd = wSub;
            this.wLength = wLen;
            this.cbBuffer = new utils.ByteArray();
            utils.Memory.CopyMemory(this.cbBuffer, cbBuffer, wLen, 0, df.Len_Tcp_Head);
        }
        return Message;
    }());
    network.Message = Message;
})(network || (network = {}));
