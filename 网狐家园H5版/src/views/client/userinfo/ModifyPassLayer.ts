namespace client {
    export class PasswordModifyLayer extends eui.UILayer {
        private _scene: any;
        constructor(scene: any) {
            super();
            this._scene = scene;
        }
        createChildren() {
            super.createChildren();
            this.once(egret.Event.ADDED_TO_STAGE, this.onInitLayer, this);
            this.once(egret.Event.REMOVED_FROM_STAGE, this.onExit, this);
        }

        public onInitLayer() {
            //加载皮肤 
            let componet = new eui.Component();
            this.addChild(componet);
            componet.skinName = skins.PasswordModify ;

            //返回按钮
            var btn = componet.getChildByName("bt_close");
            btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClickEvent, this);

            //修改按钮
            btn = componet.getChildByName("bt_modify");
            btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClickEvent, this);
        }

        public transIn() {
            let tw = egret.Tween.get(this)
                .to({x:0,y:0},200);
        }

        public transOut() {
            const parent = this.parent as eui.UILayer;
            parent.removeChild(parent.getChildByName("mask"));
            let tw = egret.Tween.get(this)
                .to({x:0,y:-this.height},200);
        }
        public onExit() {

        }
        public onButtonClickEvent(e:egret.Event) {
            var target = e.target as eui.Button;

            let tw = egret.Tween.get(target)
                .to({ scaleX: 1.1, scaleY: 1.1 }, 50)
                .to({ scaleX: 1.0, scaleY: 1.0 }, 50);

            if (target.name == "bt_close") {
                this.transOut();
            }
        }
    }
}