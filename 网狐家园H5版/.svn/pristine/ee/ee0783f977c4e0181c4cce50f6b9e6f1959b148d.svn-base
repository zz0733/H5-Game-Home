/**
 * 游戏规则
 */
namespace client {
    export class GameHelp extends eui.UILayer {
        /**
        * 构造
        */
        private _scene: any;
        private _kindID: number;
        constructor(scene: any, kindID: number = 0) {
            super();
            this._scene = scene;
            this._kindID = kindID;
        }
        createChildren() {
            super.createChildren();
            this.once(egret.Event.ADDED_TO_STAGE, this.onInitLayer, this);
            this.once(egret.Event.REMOVED_FROM_STAGE, this.onExit, this);
        }

        /**
         * 初始化
         */
        public onInitLayer() {
            //加载皮肤 
            let componet = new eui.Component();
            this.addChild(componet);
            componet.skinName = skins.GameHelpLayer;

            //返回按钮
            let bt = componet.getChildByName("bt_close");
            bt.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClickEvent, this);
        }

          /**
         * 按钮事件
         */
        public onButtonClickEvent(e: egret.Event) {
            var target = <eui.Button>e.target;
            if (target.name = "bt_close") {
                this._scene.removeChild(this);
            }
        }
        /**
         * 移除舞台
         */
        public onExit() {
        }
    }
}