/**
 * 钻石兑换金币
 */
namespace shop {
    const  INGOT_LIST_URL = "http://"+ managers.TcpServiceCtrl.getInstance().m_DefaultServerInfo.webAddr + "/Ashx/ProService.ashx?action=GetIngotList"
    const  EXCHANGE_URL = "http://"+ managers.TcpServiceCtrl.getInstance().m_DefaultServerInfo.webAddr +"/Ashx/ProService.ashx?action=ConvertScore"
    export class Exchange {
        private _viewFrame: any;
        private _view: eui.Component;
        constructor(viewFrame, panel) {
            this._viewFrame = viewFrame;
            this._view = panel;
            this.onGetIngotList();
        }

        private _listScroller: eui.Scroller;
        private updateShow() {
            this._listScroller = this._view.getChildByName("scroller") as eui.Scroller;
            let Group = this._listScroller.getChildByName("Group") as eui.Group;

            for (let i = 0; i < this._jsonRet.length; i++) {
                let panel = new eui.Panel();
                panel.skinName = skins.Gold;
                panel.name = `${i}`;
                Group.addChild(panel);
                panel.x = 20 + (i%3)*(panel.width+15);
                panel.y = 10 +  Math.floor(i/3) * (panel.height + 20);

                //Icon
                let idx = (i+1 <= 6) ? i+1 : 6
                let icon = panel.getChildByName("icon") as eui.Image;
                icon.source = `shop_icon_gold_${idx}_png`

                //金币数目
                let goldNum = utils.StringUtils.formatNumberThousands(Number(this._jsonRet[i].PresentScore));
                let labelAtlas = utils.LabelAtlas.createLabel(goldNum,"shop_buy_exchange_present_png",",0123456789",24,41);
                panel.addChild(labelAtlas);
                utils.setAnchorMidBottom(labelAtlas);
                labelAtlas.x = 130;
                labelAtlas.y = 127;

                //钻石数目
                let dimondNum = utils.StringUtils.formatNumberThousands(Number(this._jsonRet[i].Price));
                labelAtlas = utils.LabelAtlas.createLabel(dimondNum,"shop_num_exchange_png",",0123456789",25,33);
                panel.addChild(labelAtlas);
                labelAtlas.touchEnabled = false;
                utils.setAnchorMidBottom(labelAtlas);
                labelAtlas.x = 120;
                labelAtlas.y = 171;

                //购买按钮
                let bt = panel.getChildByName("purchase") as eui.Button;
                bt.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onButtonClick,this);
            }
        }

        private _isHaveData: boolean = false;
        private _jsonRet: any;
        //获取列表
        public onGetIngotList() {
            return new Promise((resolve, reject) => {

                if (this._isHaveData || (managers.FrameManager.getInstance().m_Localization.getCacheByKey("ingotList"))){
                    this._jsonRet = managers.FrameManager.getInstance().m_Localization.getCacheByKey("ingotList");
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
                    managers.FrameManager.getInstance().m_Localization.saveCache("ingotList",this._jsonRet);

                    resolve();
                };

                let onErrorHandler = (e: egret.Event) => {
                    console.log("请求失败");
                    reject("获取商品列表失败！");
                }
                utils.HttpRequest.createHttpRequest(this, INGOT_LIST_URL, params, egret.HttpMethod.POST, onCompleteHandler, onErrorHandler);
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