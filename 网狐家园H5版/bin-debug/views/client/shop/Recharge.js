/**
 * 充值钻石
 */
var shop;
(function (shop) {
    var APP_LIST_URL = "http://" + managers.TcpServiceCtrl.getInstance().m_DefaultServerInfo.webAddr + "/Ashx/ProService.ashx?action=GetLuaAppList";
    var APP_PAY_URL = "http://" + managers.TcpServiceCtrl.getInstance().m_DefaultServerInfo.webAddr + "/AppPay/CheckReceipt.aspx";
    var PAY_CONFIG = "http://" + managers.TcpServiceCtrl.getInstance().m_DefaultServerInfo.webAddr + "/Ashx/ProService.ashx?action=PayWxConfig";
    var ORDER_URL = [
        "http://" + managers.TcpServiceCtrl.getInstance().m_DefaultServerInfo.webAddr + "/Ashx/ProService.ashx",
        "http://" + managers.TcpServiceCtrl.getInstance().m_DefaultServerInfo.webAddr + "/Ashx/ProService.ashx"
    ];
    var Recharge = /** @class */ (function () {
        function Recharge(viewFrame, panel) {
            this._isHaveData = false;
            this._viewFrame = viewFrame;
            this._view = panel;
            this.onGetAppList();
        }
        Recharge.prototype.updateShow = function () {
            this._listScroller = this._view.getChildByName("scroller");
            var Group = this._listScroller.getChildByName("Group");
            for (var i = 0; i < this._jsonRet.length; i++) {
                var panel = new eui.Panel();
                panel.skinName = skins.Diamond;
                panel.name = "" + i;
                Group.addChild(panel);
                panel.x = 20 + (i % 3) * (panel.width + 15);
                panel.y = 10 + Math.floor(i / 3) * (panel.height + 20);
                //Icon
                var idx = (i + 1 <= 6) ? i + 1 : 6;
                var icon = panel.getChildByName("Icon");
                icon.source = "shop_icon_ingot_" + idx + "_png";
                //corner
                idx = (i + 1) <= 3 ? (i + 1) : 4;
                var corner = panel.getChildByName("corner");
                corner.source = "icon_recharge_" + idx + "_png";
                //赠钻
                var presentNum = utils.StringUtils.formatNumberThousands(Number(this._jsonRet[i].PresentIngot));
                var labelAtlas = utils.LabelAtlas.createLabel(presentNum, "shop_num_buy_present_png", ",0123456789", 24, 41);
                panel.addChild(labelAtlas);
                labelAtlas.x = 47;
                labelAtlas.y = 58;
                //人民币
                var RMB = utils.StringUtils.formatNumberThousands(Number(this._jsonRet[i].Price));
                labelAtlas = utils.LabelAtlas.createLabel(RMB, "shop_num_buy_png", ",0123456789", 25, 33);
                panel.addChild(labelAtlas);
                labelAtlas.touchEnabled = false;
                utils.setAnchorLeftMid(labelAtlas);
                labelAtlas.x = 100;
                labelAtlas.y = 164;
                //购买按钮
                var bt = panel.getChildByName("purchase");
                bt.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClick, this);
            }
        };
        //获取列表
        Recharge.prototype.onGetAppList = function () {
            var _this = this;
            return new Promise(function (resolve, reject) {
                if (_this._isHaveData || (managers.FrameManager.getInstance().m_Localization.getCacheByKey("shopList"))) {
                    _this._jsonRet = managers.FrameManager.getInstance().m_Localization.getCacheByKey("shopList");
                    _this.updateShow();
                    resolve();
                    return;
                }
                var servertime = Math.floor(new Date().getTime() / 1000);
                var userid = managers.FrameManager.getInstance().m_GlobalUserItem.dwUserID;
                var stationid = df.STATION_ID;
                var deviceid = df.DEVICE_TYPE;
                var version = df.LUA_VERSION;
                var params = "&servertime=" + ("" + servertime) + "&userid=" + ("" + userid) + "&stationid=" + ("" + stationid) + "&deviceid=" + ("" + deviceid) + "&version=" + ("" + version);
                var onCompleteHandler = function (e) {
                    console.log("请求成功");
                    //保存信息
                    var jsonData = JSON.parse(e.target.response);
                    if (null == jsonData) {
                        console.log("json Error");
                    }
                    _this._isHaveData = true;
                    _this._jsonRet = jsonData.Data;
                    if (null != _this._jsonRet.list) {
                        _this._jsonRet = _this._jsonRet.list;
                    }
                    _this.updateShow();
                    //全局缓存
                    managers.FrameManager.getInstance().m_Localization.saveCache("shopList", _this._jsonRet);
                    resolve();
                };
                var onErrorHandler = function (e) {
                    console.log("请求失败");
                    reject("获取商品列表失败！");
                };
                utils.HttpRequest.createHttpRequest(_this, APP_LIST_URL, params, egret.HttpMethod.POST, onCompleteHandler, onErrorHandler);
            });
        };
        Recharge.prototype.onButtonClick = function (e) {
            var target = e.target;
            var tw = egret.Tween.get(target)
                .to({ scaleX: 1.1, scaleY: 1.1 }, 50)
                .to({ scaleX: 1.0, scaleY: 1.0 }, 50);
        };
        return Recharge;
    }());
    shop.Recharge = Recharge;
})(shop || (shop = {}));
