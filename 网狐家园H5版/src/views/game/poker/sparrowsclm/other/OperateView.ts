/**
 * 操作提示
 */
namespace game {
    export namespace sparrowsclm {
        const Op_Skins = {
            0x10: "resource/eui_skins/game/poker/sparrowsclm/operate/BaohuButton.exml",
            0x04: "resource/eui_skins/game/poker/sparrowsclm/operate/GangButton.exml",
            0x20: "resource/eui_skins/game/poker/sparrowsclm/operate/QinghuButton.exml",
            0x00: "resource/eui_skins/game/poker/sparrowsclm/operate/PassButton.exml",
            0x02: "resource/eui_skins/game/poker/sparrowsclm/operate/PengButton.exml",
            0x40: "resource/eui_skins/game/poker/sparrowsclm/operate/HuButton.exml"
        }
        export class OperateView extends eui.UILayer {
            public _scene: any;
            private _callback: any;
            constructor(scene, callback) {
                super();
                this._scene = scene;
                this._callback = callback;
                this.touchEnabled = false;
            }

            public setOperateNotify(cbActionMask: number, cbActionData?: number) {
                this.removeChildren();

                if (cbActionMask == cmd.sparrowsclm.WIK_NULL) return;

                const xEnd = this.width - 90;
                let nshowIndex: number = 1;

                let bt: eui.Button;
                if (cbActionMask & WIK_BAO_HU) { //报胡
                    bt = new eui.Button();
                    bt.x = xEnd - 275;
                    bt.y = 490;
                    bt.skinName = Op_Skins[WIK_BAO_HU];
                    bt.name = `${WIK_BAO_HU}`;
                    this.addChild(bt);
                    bt.addEventListener(egret.TouchEvent.TOUCH_END, this.onButtonClick, this);
                    nshowIndex ++;
                } else {
                    if (cbActionMask & WIK_CHI_HU) { //吃胡
                        bt = new eui.Button();
                        bt.x = xEnd - 75 - nshowIndex*150;
                        bt.y = 490;
                        this.addChild(bt);
                        bt.skinName = Op_Skins[WIK_CHI_HU];
                        bt.name = `${WIK_CHI_HU}`;
                        bt.addEventListener(egret.TouchEvent.TOUCH_END, this.onButtonClick, this);
                        nshowIndex ++;
                    }

                    if (cbActionMask & WIK_QING_HU) { //请胡
                        bt = new eui.Button();
                        bt.x = xEnd - 75 - nshowIndex*150;
                        bt.y = 490;
                        this.addChild(bt);
                        bt.skinName = Op_Skins[WIK_QING_HU];
                        bt.name = `${WIK_QING_HU}`;
                        bt.addEventListener(egret.TouchEvent.TOUCH_END, this.onButtonClick, this);
                        nshowIndex ++;
                    }

                    if (cbActionMask & WIK_PENG) { //碰
                        bt = new eui.Button();
                        bt.x = xEnd - 75 - nshowIndex*150;
                        bt.y = 490;
                        this.addChild(bt);
                        bt.skinName = Op_Skins[WIK_PENG];
                        bt.name = `${WIK_PENG}`;
                        bt.addEventListener(egret.TouchEvent.TOUCH_END, this.onButtonClick, this);
                        nshowIndex ++;
                    }

                    //杠
                    const gang: boolean = (cbActionMask & WIK_GANG) ? true : false;
                    const jgang: boolean = (cbActionMask & WIK_JIA_GANG) ? true : false;
                    let str: string = ""
                    if (gang && jgang) {
                        str = "" + 0x0C;
                    } else if (gang) {
                        str = "" + WIK_GANG;
                    } else if (jgang) {
                        str = "" + WIK_JIA_GANG;
                    }

                    if (str.length > 0) {
                        bt = new eui.Button();
                        bt.x = xEnd - 75 - nshowIndex*150;
                        bt.y = 490;
                        this.addChild(bt);
                        bt.skinName = Op_Skins[WIK_GANG];
                        bt.name = str;
                        bt.addEventListener(egret.TouchEvent.TOUCH_END, this.onButtonClick, this);
                        nshowIndex ++;
                    }

                    egret.assert(nshowIndex != 1);
                    if (nshowIndex == 1) return;
                }

                //过
                bt = new eui.Button();
                bt.x = xEnd - 75 - nshowIndex*150;
                bt.y = 490;
                this.addChild(bt);
                bt.skinName = Op_Skins[WIK_NULL];
                bt.name = ""+WIK_NULL;
                bt.addEventListener(egret.TouchEvent.TOUCH_END, this.onButtonClick, this);
                nshowIndex ++;
            }

            private onButtonClick(e: egret.Event) {
                let bt = e.target as eui.Button;
                if (null != this._callback) {``
                    this._callback(Number(bt.name));
                }
            }
        }
    }
}