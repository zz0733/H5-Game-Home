/**
 * 自定义富文本
 */
namespace utils {
    export class RichText extends egret.Sprite {
        //富文本内容
        private m_CurRichElementText: any[] = [];
        //记录边界
        private m_curWidth: number = 0;
        private m_widthMax: number = 0;
        constructor(textAreaWidth: number, width: number, height: number) {
            super();
            this.width = textAreaWidth;
            this.height = height;
            this.m_widthMax = Math.min(textAreaWidth, width);
        }

        public removeElement(element: any) {

        }

        public pushBackElement(element: any) {
            this.m_CurRichElementText.push(element)
        }

        public clear() {
            for (let child of this.m_CurRichElementText){
                this.removeChild(child);
            }

            this.m_CurRichElementText = [];
            this.m_curWidth = 0;
        }

        public showRichText() {

            //判断长度
            if (this.m_widthMax == 0)
                return;

            //判断边界
            for (let element of this.m_CurRichElementText) {
                if (this.m_curWidth + element.width > this.m_widthMax) {
                    return;
                }

                utils.setAnchorLeftMid(element);
                this.addChild(element);
                element.x = this.m_curWidth;
                element.y = this.height/2;
                this.m_curWidth += element.width;
            }
        }
    }
}