/**
 * 对话框
 */
namespace models {
    export class Dialog extends eui.UILayer implements df.IDialog {
        public m_eMode: number = df.eDialogMode.OK_ONLY;
        public m_OkFunc: any = null;
        public m_CancellFunc: any = null;
        public m_Content: string = "";

        protected createChildren(): void {
            super.createChildren();
            this.name = "Dialog";
            this.once(egret.Event.ADDED_TO_STAGE, this.onInitLayer, this);
            this.once(egret.Event.REMOVED_FROM_STAGE, this.onExit, this);
        }
        constructor(style: number, content: string, okFunc: any, canCellFunc?: any) {
            super();
            this.initDialog(style, content, okFunc, canCellFunc);
        }

        public onInitLayer(): void {
            let componet = new eui.Component();
            this.addChild(componet);
            componet.skinName = skins.Dialog;

            //内容
            let content = componet.getChildByName("text") as eui.Label;
            content.text = this.m_Content;

            //按钮
            let agree = componet.getChildByName("agree");
            agree.addEventListener(egret.TouchEvent.TOUCH_END, this.onButtonClick, this);

            let cancell = componet.getChildByName("cancell");
            cancell.addEventListener(egret.TouchEvent.TOUCH_END, this.onButtonClick, this);

            if (this.m_eMode == df.eDialogMode.OK_ONLY) {
                utils.setAnchorCenter(agree);
                agree.x = this.width / 2;
                cancell.visible = false;
            }
        }

        public initDialog(style: number, content: string, okFunc: any, canCellFunc?: any) {
            this.m_eMode = style;
            this.m_OkFunc = okFunc;
            this.m_CancellFunc = canCellFunc ? canCellFunc : null;
            this.m_Content = content;
        }

        private onButtonClick(e: egret.Event) {
            let target = e.target as eui.Button;
            switch (target.name) {
                case "agree":
                    {
                        this.onSure();
                    }
                    break;
                case "cancell":
                    {
                        this.onCancell();
                    }
                    break;
            }
        }

        /**
        *IDialog
        */
        onSure(): void {
            if (null != this.m_OkFunc) {
                this.m_OkFunc();
            }

            this.parent.removeChild(this);
        }

        /**
        *IDialog
        */
        onCancell(): void {
            if (null != this.m_CancellFunc) {
                this.m_CancellFunc();
            }

            this.parent.removeChild(this);
        }


        private onExit(e: egret.Event): void {

        }

    }
}