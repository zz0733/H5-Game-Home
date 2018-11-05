/**
 * 银行
 */
var shop;
(function (shop) {
    var BankOperateCode = {
        Flush: 0,
        Save: 1,
        Take: 2
    };
    var Bank = /** @class */ (function () {
        function Bank(viewFrame, companet) {
            this._bankOperateCode = BankOperateCode.Save;
            this._viewFrame = viewFrame;
            this._view = companet;
            this.onInit();
        }
        Bank.prototype.onInit = function () {
            if (null == this._bankTextInput) {
                this._bankTextInput = this._view.getChildByName("textInput");
                this._bankTextInput.inputType = egret.TextFieldInputType.TEL;
                this._bankTextInput.addEventListener(egret.Event.CHANGE, function (e) {
                }, this);
            }
            //取款
            var bt = this._view.getChildByName("take");
            bt.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClickEvent, this);
            //存款
            bt = this._view.getChildByName("save");
            bt.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClickEvent, this);
            this.onUserWealth();
        };
        Bank.prototype.onUserWealth = function () {
            if (null == this._userScore) {
                var str = utils.StringUtils.formatNumberThousands(managers.FrameManager.getInstance().m_GlobalUserItem.lUserScore);
                this._userScore = utils.LabelAtlas.createLabel(str, "bank_num_png", ",0123456789", 34, 57);
                utils.setAnchorLeftMid(this._userScore);
                this._view.addChild(this._userScore);
                this._userScore.x = 274;
                this._userScore.y = 65;
            }
            else {
                var str = utils.StringUtils.formatNumberThousands(managers.FrameManager.getInstance().m_GlobalUserItem.lUserScore);
                this._userScore.setText(str);
            }
            if (null == this._userInsure) {
                var str = utils.StringUtils.formatNumberThousands(managers.FrameManager.getInstance().m_GlobalUserItem.lUserInsure);
                this._userInsure = utils.LabelAtlas.createLabel(str, "bank_num_png", ",0123456789", 34, 57);
                utils.setAnchorLeftMid(this._userInsure);
                this._view.addChild(this._userInsure);
                this._userInsure.x = 274;
                this._userInsure.y = 145;
            }
            else {
                var str = utils.StringUtils.formatNumberThousands(managers.FrameManager.getInstance().m_GlobalUserItem.lUserInsure);
                this._userInsure.setText(str);
            }
        };
        Bank.prototype.onButtonClickEvent = function (e) {
            var target = e.target;
            var tw = egret.Tween.get(target)
                .to({ scaleX: 1.1, scaleY: 1.1 }, 50)
                .to({ scaleX: 1.0, scaleY: 1.0 }, 50);
            switch (target.name) {
                case "take":
                    {
                        if (this._bankTextInput.text.length == 0) {
                            managers.FrameManager.getInstance().showToast("请输入操作金额!");
                            return;
                        }
                        if (isNaN(Number(this._bankTextInput.text))) {
                            managers.FrameManager.getInstance().showToast("请输入合法金额!");
                            return;
                        }
                        if (Number(this._bankTextInput.text) > managers.FrameManager.getInstance().m_GlobalUserItem.lUserInsure) {
                            managers.FrameManager.getInstance().showToast("输入金额超过存款金额,请重新输入!");
                            return;
                        }
                        this._bankFrame = new frame.BankFrame(this);
                        this._bankOperateCode = BankOperateCode.Take;
                        managers.TcpServiceCtrl.getInstance().onConnectPlaza();
                        managers.TcpServiceCtrl.getInstance().setDelegate(this._bankFrame);
                    }
                    break;
                case "save":
                    {
                        if (this._bankTextInput.text.length == 0) {
                            managers.FrameManager.getInstance().showToast("请输入操作金额!");
                            return;
                        }
                        if (isNaN(Number(this._bankTextInput.text))) {
                            managers.FrameManager.getInstance().showToast("请输入合法金额!");
                            return;
                        }
                        if (Number(this._bankTextInput.text) > managers.FrameManager.getInstance().m_GlobalUserItem.lUserScore) {
                            managers.FrameManager.getInstance().showToast("输入金额超过携带金额,请重新输入!");
                            return;
                        }
                        this._bankOperateCode = BankOperateCode.Save;
                        this._bankFrame = new frame.BankFrame(this);
                        managers.TcpServiceCtrl.getInstance().onConnectPlaza();
                        managers.TcpServiceCtrl.getInstance().setDelegate(this._bankFrame);
                    }
                    break;
            }
        };
        Bank.prototype.connectComplete = function () {
            switch (this._bankOperateCode) {
                case BankOperateCode.Take:
                    {
                        this._bankFrame.sendTakeScore(managers.TcpServiceCtrl.getInstance().getTcpService(), Number(this._bankTextInput.text));
                    }
                    break;
                case BankOperateCode.Save:
                    {
                        this._bankFrame.sendSaveScore(managers.TcpServiceCtrl.getInstance().getTcpService(), Number(this._bankTextInput.text));
                    }
                    break;
            }
        };
        return Bank;
    }());
    shop.Bank = Bank;
})(shop || (shop = {}));
