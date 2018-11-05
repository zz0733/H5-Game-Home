/**
 * 约战详情
 */
namespace client {
    export class BattleDetailLayer extends eui.UILayer {
        private _scene: any;
        private _params: any;
        constructor(scene: any,param: any) {
            super();
            this._scene = scene;
            this._params = param;
        }
        createChildren() {
            super.createChildren();
            this.once(egret.Event.ADDED_TO_STAGE, this.onInitLayer, this);
            this.once(egret.Event.REMOVED_FROM_STAGE, this.onExit, this);
        }


        private onInitLayer() {
            //加载皮肤 
            let componet = new eui.Component();
            this.addChild(componet);
            componet.skinName = skins.BattleDetailLayer;

            //房间信息
            this.onInitBattleInfo(componet);

            //按钮
            let bt = componet.getChildByName("bt_close");
            bt.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClick, this);

            this.touchEnabled = true;

        }

        /**约战信息 */
        private onInitBattleInfo(componet: eui.Component) {
            //房间号
            const iteminfo = this._params.info as battle.BattleTableItem;
            let roomNumber = componet.getChildByName("roomNumber") as eui.Label;
            roomNumber.text = `${iteminfo.dwMappedNum}`;

            //游戏类型
            const gamename = managers.TcpServiceCtrl.getInstance().getGameListInfo().getGameName(iteminfo.wKindID);
            let gameKind = componet.getChildByName("KindName") as eui.Label;
            gameKind.text = gamename;

            //底分
            let cellScore = componet.getChildByName("CellScore") as eui.Label;
            cellScore.text = `${iteminfo.lBaseScore}` + "分";

            //结算模式
            let settleKind = componet.getChildByName("SettleKind") as eui.Label;
            if (iteminfo.cbSettleKind != df.SETTLE_KIND_NONE) {
                if (iteminfo.cbSettleKind==df.SETTLE_KIND_TIME) {
                    settleKind.text =  "" + Math.floor(iteminfo.dwPlayTime/60) + "分钟";
                }else if (iteminfo.cbSettleKind==df.SETTLE_KIND_COUNT) {
                    settleKind.text = "" + iteminfo.wPlayCount + "局";
                }
            }

            //创建时间
            const date = new Date(iteminfo.dwCreateTime*1000);
            const dataStr = date.toLocaleDateString().replace(/\//g, "/") + " " + date.toTimeString().substr(0, 8)
            let createTime = componet.getChildByName("Time") as eui.Label;
            createTime.text = dataStr;

            //解散按钮
            let bt = componet.getChildByName("dissmiss") as eui.Button;
            bt.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onButtonClick,this);
            
            //开始游戏
            bt = componet.getChildByName("start") as eui.Button;
            bt.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onButtonClick,this);

            //分享按钮
            bt = componet.getChildByName("share") as eui.Button;
            bt.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onButtonClick,this);
        }

        /**切入 */
        public transIn() {
            egret.Tween.get(this)
            .to({x:0,y:0},200);
        }

        /**切出 */
        private transOut() {
            egret.Tween.get(this)
            .to({x:0,y:-this.height},200)
            .call(()=>{
                this._scene.removeChild(this);
            })
        }

        /**
         * 按钮事件
         */
        private onButtonClick(e: egret.Event) {
            let button = e.target as eui.Button;
            let name = button.name;

            egret.Tween.get(button)
                .to({ scaleX: 1.1, scaleY: 1.1 }, 100)
                .to({ scaleX: 1.0, scaleY: 1.0 }, 100);

            switch (name) {
                case "bt_close":
                    {
                        this.transOut();
                    }
                    break;
                case "dissmiss":
                    {
                        const iteminfo = this._params.info as battle.BattleTableItem;
                        this._scene.onDismissTable(iteminfo.wKindID,iteminfo.dwMappedNum);
                    }   
                    break; 
                case "start":
                    {
                        managers.FrameManager.getInstance().showToast("游戏接口未实现");
                    }   
                    break;  
                case "share":
                    {
                        let controller: models.Controller = managers.FrameManager.getInstance().getRunningController() as models.Controller;
                        let sharelayer = new ShareLayer(controller.getRootLayer(), 0.4)
                        controller.addWindow(sharelayer);
                    }    
                    break;
            }
        }

        

        private onExit() {

        }
    }
}