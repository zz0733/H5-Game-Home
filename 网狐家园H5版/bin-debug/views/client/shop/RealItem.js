/**
 * 实物兑换
 */
var shop;
(function (shop) {
    var ITEM_LIST_URL = "http://" + managers.TcpServiceCtrl.getInstance().m_DefaultServerInfo.webAddr + "/Ashx/ProService.ashx?action=GetAwardList";
    var EXCHANGE_URL = "http://" + managers.TcpServiceCtrl.getInstance().m_DefaultServerInfo.webAddr + "/Ashx/ProService.ashx?action=ConvertScore";
    var RealItem = /** @class */ (function () {
        function RealItem(viewFrame, panel) {
            this._isHaveData = false;
            this._viewFrame = viewFrame;
            this._view = panel;
            this.onGetRealList();
        }
        RealItem.prototype.updateShow = function () {
            this._listScroller = this._view.getChildByName("scroller");
            var Group = this._listScroller.getChildByName("Group");
            var len = this._jsonRet.length;
            if (0 == len) {
                var tips = this._view.getChildByName("tips");
                tips.visible = true;
                return;
            }
            for (var i = 0; i < len; i++) {
                var panel = new eui.Panel();
                panel.skinName = skins.RealItem;
                panel.name = "" + i;
                Group.addChild(panel);
                panel.x = 20 + (i % 3) * (panel.width + 15);
                panel.y = 10 + Math.floor(i / 3) * (panel.height + 20);
                //Icon
                var idx = this._jsonRet[i].AwardID;
                var icon = panel.getChildByName("icon");
                icon.source = "item_" + Number(idx) + "_png";
                //实物名称
                var name_1 = panel.getChildByName("name");
                name_1.text = this._jsonRet[i].AwardName;
                //钻石数目
                var dimondNum = utils.StringUtils.formatNumberThousands(Number(this._jsonRet[i].Price));
                var labelAtlas = utils.LabelAtlas.createLabel(dimondNum, "shop_num_exchange_png", ",0123456789", 25, 33);
                panel.addChild(labelAtlas);
                labelAtlas.touchEnabled = false;
                utils.setAnchorMidBottom(labelAtlas);
                labelAtlas.x = 120;
                labelAtlas.y = 171;
                //购买按钮
                var bt = panel.getChildByName("exchange");
                bt.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClick, this);
            }
        };
        //获取列表
        RealItem.prototype.onGetRealList = function () {
            var _this = this;
            return new Promise(function (resolve, reject) {
                if (_this._isHaveData || (managers.FrameManager.getInstance().m_Localization.getCacheByKey("realItem"))) {
                    _this._jsonRet = managers.FrameManager.getInstance().m_Localization.getCacheByKey("realItem");
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
                    managers.FrameManager.getInstance().m_Localization.saveCache("realItem", _this._jsonRet);
                    resolve();
                };
                var onErrorHandler = function (e) {
                    console.log("请求失败");
                    reject("获取实物列表失败！");
                };
                utils.HttpRequest.createHttpRequest(_this, ITEM_LIST_URL, params, egret.HttpMethod.POST, onCompleteHandler, onErrorHandler);
            });
        };
        RealItem.prototype.onButtonClick = function (e) {
            var target = e.target;
            var tw = egret.Tween.get(target)
                .to({ scaleX: 1.1, scaleY: 1.1 }, 50)
                .to({ scaleX: 1.0, scaleY: 1.0 }, 50);
        };
        return RealItem;
    }());
    shop.RealItem = RealItem;
})(shop || (shop = {}));
