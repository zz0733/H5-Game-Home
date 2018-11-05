/**
 * 钻石兑换金币
 */
var shop;
(function (shop) {
    var INGOT_LIST_URL = "http://" + managers.TcpServiceCtrl.getInstance().m_DefaultServerInfo.webAddr + "/Ashx/ProService.ashx?action=GetIngotList";
    var EXCHANGE_URL = "http://" + managers.TcpServiceCtrl.getInstance().m_DefaultServerInfo.webAddr + "/Ashx/ProService.ashx?action=ConvertScore";
    var Exchange = /** @class */ (function () {
        function Exchange(viewFrame, panel) {
            this._isHaveData = false;
            this._viewFrame = viewFrame;
            this._view = panel;
            this.onGetIngotList();
        }
        Exchange.prototype.updateShow = function () {
            this._listScroller = this._view.getChildByName("scroller");
            var Group = this._listScroller.getChildByName("Group");
            for (var i = 0; i < this._jsonRet.length; i++) {
                var panel = new eui.Panel();
                panel.skinName = skins.Gold;
                panel.name = "" + i;
                Group.addChild(panel);
                panel.x = 20 + (i % 3) * (panel.width + 15);
                panel.y = 10 + Math.floor(i / 3) * (panel.height + 20);
                //Icon
                var idx = (i + 1 <= 6) ? i + 1 : 6;
                var icon = panel.getChildByName("icon");
                icon.source = "shop_icon_gold_" + idx + "_png";
                //金币数目
                var goldNum = utils.StringUtils.formatNumberThousands(Number(this._jsonRet[i].PresentScore));
                var labelAtlas = utils.LabelAtlas.createLabel(goldNum, "shop_buy_exchange_present_png", ",0123456789", 24, 41);
                panel.addChild(labelAtlas);
                utils.setAnchorMidBottom(labelAtlas);
                labelAtlas.x = 130;
                labelAtlas.y = 127;
                //钻石数目
                var dimondNum = utils.StringUtils.formatNumberThousands(Number(this._jsonRet[i].Price));
                labelAtlas = utils.LabelAtlas.createLabel(dimondNum, "shop_num_exchange_png", ",0123456789", 25, 33);
                panel.addChild(labelAtlas);
                labelAtlas.touchEnabled = false;
                utils.setAnchorMidBottom(labelAtlas);
                labelAtlas.x = 120;
                labelAtlas.y = 171;
                //购买按钮
                var bt = panel.getChildByName("purchase");
                bt.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClick, this);
            }
        };
        //获取列表
        Exchange.prototype.onGetIngotList = function () {
            var _this = this;
            return new Promise(function (resolve, reject) {
                if (_this._isHaveData || (managers.FrameManager.getInstance().m_Localization.getCacheByKey("ingotList"))) {
                    _this._jsonRet = managers.FrameManager.getInstance().m_Localization.getCacheByKey("ingotList");
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
                    managers.FrameManager.getInstance().m_Localization.saveCache("ingotList", _this._jsonRet);
                    resolve();
                };
                var onErrorHandler = function (e) {
                    console.log("请求失败");
                    reject("获取商品列表失败！");
                };
                utils.HttpRequest.createHttpRequest(_this, INGOT_LIST_URL, params, egret.HttpMethod.POST, onCompleteHandler, onErrorHandler);
            });
        };
        Exchange.prototype.onButtonClick = function (e) {
            var target = e.target;
            var tw = egret.Tween.get(target)
                .to({ scaleX: 1.1, scaleY: 1.1 }, 50)
                .to({ scaleX: 1.0, scaleY: 1.0 }, 50);
        };
        return Exchange;
    }());
    shop.Exchange = Exchange;
})(shop || (shop = {}));
