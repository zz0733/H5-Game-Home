/**掷骰子 */
namespace game {
    export namespace sparrowsclm {
        export class SiceView extends eui.UILayer {
            private _sice0: number;
            private _sice1: number;

            constructor(lsice0: number, lsice1: number, callback?: any) {
                super();

                this._sice0 = lsice0;
                this._sice1 = lsice1;

                this.startAction(this._sice0, this._sice1, callback);
            }

            private startAction(lsice0: number, lsice1: number, callback?: any) {
                egret.assert(lsice0>=0&&lsice0<=6);
                egret.assert(lsice1>=0&&lsice1<=6);

                if (lsice0 < 0 || lsice0 > 6) return;
                if (lsice1 < 0 || lsice1 > 6) return;

                let data = RES.getRes(`sice${lsice0}_json`);
                let txtr = RES.getRes(`sice_${lsice0}_png`);

                let mcFactory: egret.MovieClipDataFactory = new egret.MovieClipDataFactory(data, txtr);
                let mc: egret.MovieClip = new egret.MovieClip(mcFactory.generateMovieClipData("SiceAnim"+lsice0));
                this.addChild(mc);
                mc.x = 567;
                mc.y = 250;
            
                mc.gotoAndPlay(1,1);

                data = RES.getRes(`sice${lsice1}_json`);
                txtr = RES.getRes(`sice_${lsice1}_png`);

                mcFactory = new egret.MovieClipDataFactory(data, txtr);
                mc = new egret.MovieClip(mcFactory.generateMovieClipData("SiceAnim"+lsice1));
                this.addChild(mc);
                mc.x = 667;
                mc.y = 330;
                mc.gotoAndPlay(1,1);

                egret.Tween.get(this)
                .wait(3000)
                .call(()=>{
                    if (callback) {
                        callback();
                    }

                   this.parent.removeChild(this);
                })
            }
        }
    }
}