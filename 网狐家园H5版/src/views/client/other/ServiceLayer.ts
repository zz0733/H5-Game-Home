/**
 * 客服
 */
namespace client {

    export class ServiceLayer extends eui.UILayer {

        /**
         * constructor
         */
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

        private _checkBoxes = [];
        private _panels = [];
        public onInitLayer() {
            //加载皮肤 
            let componet = new eui.Component();
            this.addChild(componet);
            componet.skinName = skins.ServiceLayer;

            //返回按钮
            var btn = componet.getChildByName("bt_return");
            btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClickEvent, this);

            //checkBox
            for (var i = 0; i < 4; i++) {
                var checkBox = componet.getChildByName(`check_${i}`);
                checkBox.addEventListener(eui.UIEvent.CHANGE, this.onEventChange, this)
                this._checkBoxes.push(checkBox);

                var panel = componet.getChildByName(`panel_${i}`);
                this._panels.push(panel);
            }
        }

        /**
         * 移除舞台
         */
        public onExit() {
            this._checkBoxes.forEach(checkbox => {
                checkbox = null;
            });

            this._panels.forEach(panel => {
                panel = null;
            });

            this._checkBoxes = null;
            this._panels = null;
        }

        /**
         * checkBox event
         */
        private onEventChange(e: eui.UIEvent) {
            var target = <eui.CheckBox>e.target;

            for (var i = 0; i < this._checkBoxes.length; i++) {
                var checkbox = this._checkBoxes[i]
                var panel = this._panels[i];
                if (target == checkbox) {
                    target.selected = true;
                    panel.visible = true;
                } else {
                    checkbox.selected = false;
                    panel.visible = false;
                }
            }
        }

        /**
         * 按钮事件
         */
        private onButtonClickEvent(e: egret.TouchEvent) {
            var target = e.target;
            if (target instanceof eui.Button) {
                let tw = egret.Tween.get(target)
                    .to({ scaleX: 1.1, scaleY: 1.1 }, 50)
                    .to({ scaleX: 1.0, scaleY: 1.0 }, 50);
            }

            if (target.name == "bt_return") {
                this._scene.onChangeView();
            }
        }
    }
}