/**
 * 公用MASK层
 * 触摸移除
 */
namespace models {
    export class MaskExLayer extends eui.UILayer {
        protected _removeHandler: any = null;
        protected _scene: any;
        protected _alpha: number;
        constructor(scene: any, maskAlpha, removeHandler?: any) {
            super();
            this._removeHandler = removeHandler;
            this._scene = scene;
            this._alpha = maskAlpha;
        }

        protected createChildren() {
            super.createChildren();
            this.once(egret.Event.ADDED_TO_STAGE, this.onInitLayer, this);
            this.once(egret.Event.REMOVED_FROM_STAGE, this.onExit, this);
        }

        protected onInitLayer() {
            //遮罩
            let mask = new egret.Shape();
            mask.graphics.beginFill(0x000000, 1.0);
            mask.graphics.drawRect(0, 0, this.width, this.height);
            mask.graphics.endFill();
            mask.alpha = 0.5;
            utils.setAnchorCenter(mask)
            this.addChild(mask);
            mask.x = this.width / 2;
            mask.y = this.height / 2;
            mask.touchEnabled = true;
            mask.addEventListener(egret.TouchEvent.TOUCH_BEGIN, (e: egret.Event) => {
                if (null != this._removeHandler) {
                    this._removeHandler();
                }
                this._scene.removeChild(this);
            }, this);

        }

        protected onExit() {
            this._removeHandler = null;
        }
    }
}