/**
 * 银行协议
 */
var frame;
(function (frame) {
    var BankFrame = (function () {
        function BankFrame(delegate) {
            this.BANK_TYPE_STORAGE = 0;
            this.BANK_TYPE_DRAWOUTE = 1;
            this._delegate = delegate;
            this._dispatcher = new egret.EventDispatcher();
            this.addEventListener();
        }
        BankFrame.prototype.getDispatcher = function () {
            return this._dispatcher;
        };
        /**
         * 添加监听
         */
        BankFrame.prototype.addEventListener = function () {
            //注册通知
            this._dispatcher.addEventListener(customEvent.CustomEvent.EVENT_CONNECT_COMPLETE, this.connectComplete, this);
            this._dispatcher.addEventListener(customEvent.CustomEvent.EVENT_MESSAGE_DISPATCH, this.onMessage, this);
        };
        /**
         * 移除监听
         */
        BankFrame.prototype.removeEventListener = function () {
            this._dispatcher.removeEventListener(customEvent.CustomEvent.EVENT_CONNECT_COMPLETE, this.connectComplete, this);
            this._dispatcher.removeEventListener(customEvent.CustomEvent.EVENT_MESSAGE_DISPATCH, this.onMessage, this);
        };
        //连接成功
        BankFrame.prototype.connectComplete = function () {
            if (this._delegate && this._delegate.connectComplete) {
                this._delegate.connectComplete();
            }
        };
        /**
        * 网络消息
        */
        BankFrame.prototype.onMessage = function (e) {
            var msg = e.data;
            var wMainCmd = msg.wMainCmd;
            var wSubCmd = msg.wSubCmd;
            switch (wMainCmd) {
                case df.MDM_GP_BANK_OPERATE:
                    {
                        if (wSubCmd == df.SUB_GP_DRAWOUT || wSubCmd == df.SUB_GP_UPDATE || wSubCmd == df.SUB_GP_STORAGE) {
                            this.onUserBankAccessResult(msg);
                        }
                    }
                    break;
                case df.MDM_GP_USER_SERVICE:
                    {
                        if (wSubCmd == df.SUB_GP_USER_WEALTH) {
                            this.onUserWealth(msg);
                        }
                    }
                    break;
            }
        };
        /**银行成功 */
        BankFrame.prototype.onUserBankAccessResult = function (msg) {
            var lReturnCode = msg.cbBuffer.Pop_INT(); //返回代码
            var score = msg.cbBuffer.Pop_SCORE(); //携带积分
            var insure = msg.cbBuffer.Pop_SCORE(); //存款积分
            if (lReturnCode == 0) {
                managers.FrameManager.getInstance().m_GlobalUserItem.lUserScore = score;
                managers.FrameManager.getInstance().m_GlobalUserItem.lUserInsure = insure;
                if (this._delegate && this._delegate._viewFrame) {
                    this._delegate._viewFrame.dispatchEvent(new customEvent.CustomEvent(customEvent.CustomEvent.EVENT_SHOP_REFRESH));
                }
            }
            var message = msg.cbBuffer.Pop_UTF16(msg.cbBuffer.getByteArray().bytesAvailable / 2); //返回消息
            if (message.length == 0)
                return;
            managers.FrameManager.getInstance().showToast(message);
        };
        /**财富更新 */
        BankFrame.prototype.onUserWealth = function (msg) {
            var cbMask = msg.cbBuffer.Pop_Byte();
            var lUserIngot = msg.cbBuffer.Pop_SCORE();
            var lUserMedal = msg.cbBuffer.Pop_SCORE();
            var lUserScore = msg.cbBuffer.Pop_SCORE();
            var lUserRoomCard = msg.cbBuffer.Pop_SCORE();
            if (lUserIngot && (cbMask & df.WEALTH_MASK_INGOT) != 0) {
                managers.FrameManager.getInstance().m_GlobalUserItem.lUserIngot = lUserIngot;
            }
            if (lUserMedal && (cbMask & df.WEALTH_MASK_MEDAL) != 0) {
                managers.FrameManager.getInstance().m_GlobalUserItem.lUserMedal = lUserMedal;
            }
            if (lUserScore && (cbMask & df.WEALTH_MASK_SCORE) != 0) {
                managers.FrameManager.getInstance().m_GlobalUserItem.lUserScore = lUserScore;
            }
            if (lUserRoomCard && (cbMask & df.WEALTH_MASK_ROOMCARD) != 0) {
                managers.FrameManager.getInstance().m_GlobalUserItem.lUserRoomCard = lUserRoomCard;
            }
            //通知UI刷新
            if (this._delegate && this._delegate._viewFrame) {
                this._delegate._viewFrame.dispatchEvent(new customEvent.CustomEvent(customEvent.CustomEvent.EVENT_SHOP_REFRESH));
            }
        };
        /**
         * 存入
         */
        BankFrame.prototype.sendSaveScore = function (service, lscore) {
            //构造数据
            var CMD_GP_BankOperate = utils.Memory.newLitteEndianByteArray(df.Len_Tcp_Head);
            CMD_GP_BankOperate.Append_DWORD(managers.FrameManager.getInstance().m_GlobalUserItem.dwUserID);
            CMD_GP_BankOperate.Append_SCORE(lscore);
            CMD_GP_BankOperate.Append_Byte(this.BANK_TYPE_STORAGE);
            CMD_GP_BankOperate.Append_DWORD(df.STATION_ID);
            CMD_GP_BankOperate.Append_UTF16(managers.FrameManager.getInstance().m_GlobalUserItem.szInsurePass, df.LEN_PASSWORD);
            service.SendSocketData(df.MDM_GP_BANK_OPERATE, df.SUB_GP_STORAGE, CMD_GP_BankOperate, CMD_GP_BankOperate.getLength());
        };
        /**
         * 取出
         */
        BankFrame.prototype.sendTakeScore = function (service, lscore) {
            //构造数据
            var CMD_GP_BankOperate = utils.Memory.newLitteEndianByteArray(df.Len_Tcp_Head);
            CMD_GP_BankOperate.Append_DWORD(managers.FrameManager.getInstance().m_GlobalUserItem.dwUserID);
            CMD_GP_BankOperate.Append_SCORE(lscore);
            CMD_GP_BankOperate.Append_Byte(this.BANK_TYPE_DRAWOUTE);
            CMD_GP_BankOperate.Append_DWORD(df.STATION_ID);
            CMD_GP_BankOperate.Append_UTF16(managers.FrameManager.getInstance().m_GlobalUserItem.szInsurePass, df.LEN_PASSWORD);
            service.SendSocketData(df.MDM_GP_BANK_OPERATE, df.SUB_GP_DRAWOUT, CMD_GP_BankOperate, CMD_GP_BankOperate.getLength());
        };
        return BankFrame;
    }());
    frame.BankFrame = BankFrame;
})(frame || (frame = {}));
