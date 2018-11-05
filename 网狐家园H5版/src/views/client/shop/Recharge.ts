/**
 * 充值钻石
 */
namespace shop {
    const APP_LIST_URL = "http://" + managers.TcpServiceCtrl.getInstance().m_DefaultServerInfo.webAddr + "/Ashx/ProService.ashx?action=GetLuaAppList"
    const APP_PAY_URL = "http://" + managers.TcpServiceCtrl.getInstance().m_DefaultServerInfo.webAddr + "/AppPay/CheckReceipt.aspx"
    const PAY_CONFIG = "http://" + managers.TcpServiceCtrl.getInstance().m_DefaultServerInfo.webAddr + "/Ashx/ProService.ashx?action=PayWxConfig"

    const ORDER_URL = [
        "http://" + managers.TcpServiceCtrl.getInstance().m_DefaultServerInfo.webAddr + "/Ashx/ProService.ashx",
        "http://" + managers.TcpServiceCtrl.getInstance().m_DefaultServerInfo.webAddr + "/Ashx/ProService.ashx"
    ]
    export class Recharge {
        private _viewFrame: any;
        private _view: eui.Component;
        constructor(viewFrame, panel) {
            this._viewFrame = viewFrame;
            this._view = panel;
            this.onGetAppList();
        }

        private _listScroller: eui.Scroller;
        private updateShow() {
            this._listScroller = this._view.getChildByName("scroller") as eui.Scroller;
            let Group = this._listScroller.getChildByName("Group") as eui.Group;

            for (let i = 0; i < this._jsonRet.length; i++) {
                let panel = new eui.Panel();
                panel.skinName = skins.Diamond;
                panel.name = `${i}`;
                Group.addChild(panel);
                panel.x = 20 + (i%3)*(panel.width+15);
                panel.y = 10 +  Math.floor(i/3) * (panel.height + 20);

                //Icon
                let idx = (i+1 <= 6) ? i+1 : 6
                let icon = panel.getChildByName("Icon") as eui.Image;
                icon.source = `shop_icon_ingot_${idx}_png`

                //corner
                idx = (i+1) <= 3 ? (i+1) : 4
                let corner = panel.getChildByName("corner") as eui.Image;
                corner.source = `icon_recharge_${idx}_png`

                //赠钻
                let presentNum = utils.StringUtils.formatNumberThousands(Number(this._jsonRet[i].PresentIngot));
                let labelAtlas = utils.LabelAtlas.createLabel(presentNum,"shop_num_buy_present_png",",0123456789",24,41);
                panel.addChild(labelAtlas);
                labelAtlas.x = 47;
                labelAtlas.y = 58;

                //人民币
                let RMB = utils.StringUtils.formatNumberThousands(Number(this._jsonRet[i].Price));
                labelAtlas = utils.LabelAtlas.createLabel(RMB,"shop_num_buy_png",",0123456789",25,33);
                panel.addChild(labelAtlas);
                labelAtlas.touchEnabled = false;
                utils.setAnchorLeftMid(labelAtlas);
                labelAtlas.x = 100;
                labelAtlas.y = 164;

                //购买按钮
                let bt = panel.getChildByName("purchase") as eui.Button;
                bt.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onButtonClick,this);
            }
        }

        private _isHaveData: boolean = false;
        private _jsonRet: any;
        //获取列表
        public onGetAppList() {
            return new Promise((resolve, reject) => {

                if (this._isHaveData || (managers.FrameManager.getInstance().m_Localization.getCacheByKey("shopList"))){
                    this._jsonRet = managers.FrameManager.getInstance().m_Localization.getCacheByKey("shopList");
                    this.updateShow();
                    resolve();
                    return;
                }

                const servertime = Math.floor(new Date().getTime()/1000);
                const userid = managers.FrameManager.getInstance().m_GlobalUserItem.dwUserID
                const stationid = df.STATION_ID;
                const deviceid = df.DEVICE_TYPE;
                const version = df.LUA_VERSION;

                const params = "&servertime=" + `${servertime}` + "&userid=" + `${userid}` + "&stationid=" + `${stationid}` + "&deviceid=" + `${deviceid}` + "&version=" + `${version}`;

                let onCompleteHandler = (e: egret.Event) => {
                    console.log("请求成功");
                    //保存信息
                    let jsonData = JSON.parse(e.target.response);
                    if (null == jsonData) {
                        console.log("json Error");
                    } 
                    
                    this._isHaveData = true;
                    this._jsonRet = jsonData.Data;
                    if (null != this._jsonRet.list) {
                        this._jsonRet = this._jsonRet.list;
                    }

                    this.updateShow();

                    //全局缓存
                    managers.FrameManager.getInstance().m_Localization.saveCache("shopList",this._jsonRet);

                    resolve();
                };

                let onErrorHandler = (e: egret.Event) => {
                    console.log("请求失败");
                    reject("获取商品列表失败！");
                }
                utils.HttpRequest.createHttpRequest(this, APP_LIST_URL, params, egret.HttpMethod.POST, onCompleteHandler, onErrorHandler);
            });
        }

        private onButtonClick(e: egret.Event) {
            var target = e.target as eui.Button;

            let tw = egret.Tween.get(target)
                .to({ scaleX: 1.1, scaleY: 1.1 }, 50)
                .to({ scaleX: 1.0, scaleY: 1.0 }, 50);

            
        }
    }
}