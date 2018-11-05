/**
 * 分享界面
 */
namespace client {
    export class ShareLayer extends models.MaskExLayer {

        constructor(scene: any, maskAlpha: number, removeHandler?: any) {
            super(scene, maskAlpha, removeHandler);
        }

        protected createChildren() {
            super.createChildren();
            this.once(egret.Event.ADDED_TO_STAGE, this.onInitLayer, this);
            this.once(egret.Event.REMOVED_FROM_STAGE, this.onExit, this);
        }

        protected onInitLayer() {
            super.onInitLayer();

            //加载皮肤 
            let componet = new eui.Component();
            this.addChild(componet);
            componet.width = 998;
            componet.height = 565;
            utils.setAnchorCenter(componet);
            componet.x = this.width / 2;
            componet.y = this.height / 2;
            componet.skinName = skins.ShareLayer;

            //微信分享
            var bt = componet.getChildByName("bt_wechat");
            bt.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClickEvent, this);

            //朋友圈
            bt = componet.getChildByName("bt_circle");
            bt.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClickEvent, this);

            //关闭
            bt = componet.getChildByName("bt_close");
            bt.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClickEvent, this);

        }

        private onButtonClickEvent(e: egret.Event) {
            var target = e.target;

            let tw = egret.Tween.get(target)
                .to({ scaleX: 1.1, scaleY: 1.1 }, 50)
                .to({ scaleX: 1.0, scaleY: 1.0 }, 50);

            switch (target.name) {
                case "bt_wechat":
                    {
                        break;
                    }
                case "bt_circle":
                    {
                        
                    }
                    break;
                case "bt_close":
                    {
                        this._scene.removeChild(this);
                        break;
                    }
            }

        }

        protected onExit() {

            super.onExit();
        }
    }
}