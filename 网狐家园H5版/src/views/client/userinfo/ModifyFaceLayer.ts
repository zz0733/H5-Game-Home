/**
 * 头像修改
 */
namespace client {
    export class ModifyFaceLayer extends eui.UILayer {
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

        readonly RES_BOY: string[] = ["face_x_00_png", "face_x_01_png", "face_x_02_png", "face_x_03_png", "face_x_04_png", "face_x_05_png", "face_x_06_png", "face_x_07_png", "face_x_08_png", "face_x_09_png"];
        readonly RES_GIRL: string[] = ["face_x_10_png", "face_x_11_png", "face_x_12_png", "face_x_13_png", "face_x_14_png", "face_x_15_png", "face_x_16_png", "face_x_17_png", "face_x_18_png", "face_x_19_png"];
        public onInitLayer() {
            //加载皮肤 
            let componet = new eui.Component();
            this.addChild(componet);
            componet.skinName = skins.HeadModify;

            //头像选择
            const gender = managers.FrameManager.getInstance().m_GlobalUserItem.cbGender;
            for (let i = 0; i < 10; i++) {
                const panel = componet.getChildByName("panel_head") as eui.Panel;
                let maskShap = new egret.Shape();
                maskShap.graphics.beginFill(0x000000, 1.0);
                maskShap.graphics.drawRoundRect(0, 0, 95 - (30 / 2), 95 - (30 / 2), 30, 30);
                maskShap.graphics.endFill();
                panel.addChild(maskShap);
                maskShap.x = 20 + (i%6)*120;
                maskShap.y = 25 + Math.floor(i/6) * 130;

                let head = new eui.Image(gender == df.GENDER_MANKIND ? this.RES_BOY[i] : this.RES_GIRL[i]);
                head.scaleX = 0.4;
                head.scaleY = 0.4;
                panel.addChild(head);
                head.touchEnabled = false;
                head.x = 12 + (i%6)*120;
                head.y = 16 + Math.floor(i/6) * 130;

                head.mask = maskShap;
            }

            //返回按钮
            var btn = componet.getChildByName("bt_close");
            btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClickEvent, this);

            //修改按钮
            btn = componet.getChildByName("bt_modify");
            btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClickEvent, this);

        }
        public onExit() {

        }

        public transIn() {
            let tw = egret.Tween.get(this)
                .to({ x: 0, y: 0 }, 200);
        }

        public transOut() {
            const parent = this.parent as eui.UILayer;
            parent.removeChild(parent.getChildByName("mask"));
            let tw = egret.Tween.get(this)
                .to({ x: 0, y: -this.height }, 200);
        }
        public onButtonClickEvent(e: egret.Event) {
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