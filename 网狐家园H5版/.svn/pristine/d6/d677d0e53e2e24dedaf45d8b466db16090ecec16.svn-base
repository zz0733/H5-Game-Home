/**
 * 操作选择 
 * 多个选择
 */
namespace game {
    export namespace sparrowsclm {
        export class OpSelectView extends eui.UILayer {
            private _scene: any;
            //选择背景
            private _opSelectBg: eui.Image;
            //显示容器
            private _container: eui.Panel;
            private _selectCardInfo: any;
            private _showInfo: any[] = [];
            private _gameLogic: GameLogic;
            constructor(scene: any) {
                super();
                this._scene = scene;
                this._gameLogic = new GameLogic();
                this.touchEnabled = false;
                this.once(egret.Event.REMOVED_FROM_STAGE, this.onExit, this);
                this.onInit();
            }

            public onInit() {
                this._opSelectBg = new eui.Image("op_bg_png");
                this._opSelectBg.width = 218;
                this._opSelectBg.height = 118;
                this._opSelectBg.scale9Grid = new egret.Rectangle(24,24,170,70);
                utils.setAnchorCenter(this._opSelectBg);
                this._opSelectBg.x = 667;
                this._opSelectBg.y = 490;
                this.addChild(this._opSelectBg);

                this._container = new eui.Panel();
                this._container.width = 1334;
                this._container.height = 750;
                this.addChild(this._container);
            }

            public onEventUserAction(selectInfo?: any) {
                if (null == selectInfo ) {
                    this.visible = false;
                } else {
                   this.visible = true;
                   this._container.removeChildren();
                   this._showInfo = [];

                   this._selectCardInfo = selectInfo;
                   const count = selectInfo.length;
                   const width = 144*count + 48;
                   const height = 142;

                   this._opSelectBg.width = width;
                   this._opSelectBg.height = height;
                   utils.setAnchorCenter(this._opSelectBg);

                   let  startx = 667 - width/2 - 15
                   for (let i = 0; i < count; i++) {
                      let showInfo: any = {};
                      if ((selectInfo[i].cbActionMask == WIK_GANG) || (selectInfo[i].cbActionMask == WIK_JIA_GANG)) {
                         showInfo.flag = new eui.Image("opflag_gang_png");
                      } else if (selectInfo[i].cbActionMask == WIK_QING_HU) {
                          showInfo.flag = new eui.Image("opflag_qing_png");
                      } else if (selectInfo[i].cbActionMask == WIK_BAO_HU) {
                          showInfo.flag = new eui.Image("opflag_bao_png");
                      } else {
                          egret.assert(false);
                      }
                      showInfo.card = this.getCardSprite(selectInfo[i].cbActionCard);
                      showInfo.card.addEventListener(egret.TouchEvent.TOUCH_END,()=>{this._scene.onOperateSelected(selectInfo[i])},this);
                      showInfo.flag.x = startx+35;
                      showInfo.flag.y = 440;
                      this._container.addChild(showInfo.flag);

                      showInfo.card.x = startx+107;
                      showInfo.card.y = 440;
                      this._container.addChild(showInfo.card);

                      //showInfo.rect = new egret.Rectangle(startx+70,430,74,118);
                      this._showInfo.push(showInfo);

                      startx = startx + 144
                   }
                }
            }
            private getCardSprite(cbCardData: number) {
                if (this._gameLogic.IsValidCard(cbCardData)) {
                    let textureFile = "game_weave_0_png";
                    let params: any = {};
                    params.bSheet = true; //纹理集标识
                    params.src = textureFile;
                    params.key = "weave";
                    params.pos = 1;      //麻将资源从1开始 0代表牌背
                    params.width = 74;
                    params.height = 100;

                    let card: CardSprite = new CardSprite(textureFile, Number(cbCardData), params);
                    return card;
                }

                return null;
            }
            private onExit() {
                //释放引用
                this._opSelectBg = null;
                this._container = null;
                this._selectCardInfo = null;
            }
        }
    }
}
