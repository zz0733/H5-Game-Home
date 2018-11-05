/**
 * 倒立的牌
 * 游戏结束显示 
 */
namespace game {
    export namespace sparrowsclm {
        const OUT_POS: egret.Point[] = [new egret.Point(0,0),new egret.Point(949,112),new egret.Point(235,112)]
        export class DisCard {
            private _scene: any;
            private _dropPanel: eui.Panel;
            private _gameLogic: GameLogic;
            constructor(scene) {
                this._scene = scene;
                this.onInit();
            }

            private onInit() {
                this._gameLogic = new GameLogic();
            }

           /**
            * 删除最近一次扑克
            */

            /**回收 */
            public dealloc() {
                this._dropPanel = null;
                this._gameLogic = null;
            }
        }
    }
}