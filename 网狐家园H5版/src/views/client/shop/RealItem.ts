/**
 * 实物兑换
 */
namespace shop {
    const ITEM_LIST_URL = "http://"+ managers.TcpServiceCtrl.getInstance().m_DefaultServerInfo.webAddr +"/Ashx/ProService.ashx?action=GetAwardList";
    const EXCHANGE_URL = "http://"+ managers.TcpServiceCtrl.getInstance().m_DefaultServerInfo.webAddr +"/Ashx/ProService.ashx?action=ConvertScore";
    export class RealItem {
        private _viewFrame: any;
        private _view: eui.Component;
        constructor(viewFrame, panel) {
            this._viewFrame = viewFrame;
            this._view = panel;
            this.onGetRealList();
        }

        private _listScroller: eui.Scroller;
        private updateShow() {
            this._listScroller = this._view.getChildByName("scroller") as eui.Scroller;
            let Group = this._listScroller.getChildByName("Group") as eui.Group;

            let len = this._jsonRet.length;
            if (0 == len) {
                let tips = this._view.getChildByName("tips");
                tips.visible = true;
                return;
            }
            for (let i = 0; i < len; i++) {
                let panel = new eui.Panel();
                panel.skinName = skins.RealItem;
                panel.name = `${i}`;
                Group.addChild(panel);
                panel.x = 20 + (i%3)*(panel.width+15);
                panel.y = 10 +  Math.floor(i/3) * (panel.height + 20);

                //Icon
                let idx = this._jsonRet[i].AwardID;
                let icon = panel.getChildByName("icon") as eui.Image;
                icon.source = `item_${Number(idx)}_png`

                //实物名称
                let name = panel.getChildByName("name") as eui.Label;
                name.text = this._jsonRet[i].AwardName;

                //钻石数目
                let dimondNum = utils.StringUtils.formatNumberThousands(Number(this._jsonRet[i].Price));
                let labelAtlas = utils.LabelAtlas.createLabel(dimondNum,"shop_num_exchange_png",",0123456789",25,33);
                panel.addChild(labelAtlas);
                labelAtlas.touchEnabled = false;
                utils.setAnchorMidBottom(labelAtlas);
                labelAtlas.x = 120;
                labelAtlas.y = 171;

                //购买按钮
                let bt = panel.getChildByName("exchange") as eui.Button;
                bt.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onButtonClick,this);
            }
        }

        private _isHaveData: boolean = false;
        private _jsonRet: any;
        //获取列表
        public onGetRealList() {
            return new Promise((resolve, reject) => {

                if (this._isHaveData || (managers.FrameManager.getInstance().m_Localization.getCacheByKey("realItem"))){
                    this._jsonRet = managers.FrameManager.getInstance().m_Localization.getCacheByKey("realItem");
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
                    managers.FrameManager.getInstance().m_Localization.saveCache("realItem",this._jsonRet);

                    resolve();
                };

                let onErrorHandler = (e: egret.Event) => {
                    console.log("请求失败");
                    reject("获取实物列表失败！");
                }
                utils.HttpRequest.createHttpRequest(this, ITEM_LIST_URL, params, egret.HttpMethod.POST, onCompleteHandler, onErrorHandler);
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