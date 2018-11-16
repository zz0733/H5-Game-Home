namespace game {
    export namespace runfast {

        export const EVT_TIME_OUT = "time_out";

        const OFF = [{
            scale: 1
        },{
            scale: 0.5
        },{
            scale: 0.5
        },{
            scale: 0.5
        }];

        interface IClockRes extends eui.Component {
            label: eui.Component;
        }

        export class ClockView extends egret.EventDispatcher {

            clock: IClockRes;

            private _chairId: number;

            constructor(viewId:number, res:IClockRes) {
                super();
                this._chairId = viewId;
                this.clock = res;
            }

            private _startTime: number;
            private _spent: number;
            private _total: number;

            private _onTicking: boolean = false;
            /**
             * @param maxSec 总时间
             * @param timerSec 已过时间
             * */
            showClock(maxSec: number, timeSec: number = 0) {
                this._startTime = Date.now();
                this._spent = timeSec;
                this._total = maxSec;

                if (!this._onTicking) {
                    this._onTicking = true;
                    this.clock.visible = true;
                    let self = this;
                    this.setTime(maxSec - timeSec);
                    this._tickHandle = setInterval(() => {
                        self.onTick();
                    }, 1000);
                } else {
                    //重置
                    this.stop();
                    this.showClock(maxSec,timeSec);
                }

            }


            private _tickHandle: number;

            private _remainTime: number;

            private onTick() {
                this._spent++;
                this._remainTime = this._total - this._spent;
                this.setTime(this._remainTime);

                if (this._spent >= this._total) {
                    if (this._chairId == cmd.runfast.MY_VIEW) {
                        this.dispatchEvent(new egret.TimerEvent(EVT_TIME_OUT));
                    }
                    this.stop();
                }
            }

            /**
             * 停止计时
             * */
            stop(): void {
                clearInterval(this._tickHandle);
                this._onTicking = false;
                this.clock.visible = false;
            }

            private setTime(value: number) {
                let timeLabel = this.clock.label.getChildByName("") as utils.LabelAtlas;
                let str = value >= 10 ? value + "" : "0" + value;
                if(null != timeLabel) {
                    //改变文字
                    timeLabel.setText(str);
                } else {
                    //构造新文字，并且赋值
                    let timeLabel = utils.LabelAtlas.createLabel(str, "runfast_number_clock_png", "0123456789", 30, 42);
                    utils.setAnchorCenter(timeLabel);
                    timeLabel.scaleX = timeLabel.scaleY = OFF[this._chairId].scale;
                    this.clock.label.addChild(timeLabel);
                }
            }
        }
    }
}