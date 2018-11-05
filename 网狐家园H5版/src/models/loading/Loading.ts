/**
 * 进度条
 */
namespace models {
    export class Loading extends eui.ProgressBar {
        /**
         * 构造方法
         */
        private _finishHandler: any;
        constructor(finishHandler: any) {
            super();
            this._finishHandler = finishHandler;
        }

        /**
         * 结束动画
         */
        public finishLoading(unit: number = 1): void {
            if ((this.value + unit) < this.maximum) {
                this.value = this.value + unit;
                egret.Tween.get(this)
                    .wait(20)
                    .call(() => { this.finishLoading(unit); });

            } else if ((this.value + unit) >= this.maximum) {
                this.value = this.maximum;
                if (this._finishHandler) {
                    this._finishHandler();
                }
            }
        }
    }
}