/**
 * 番数提示
 **/
namespace game {
    export namespace sparrowsclm {
        export class FanTipsView extends eui.UILayer {
            private _scene;
            private _gameLogic: GameLogic;
            constructor(scene) {
                super();
    
                this.touchEnabled = false;
                this._scene = scene;
                this._gameLogic = new GameLogic();
                this.once(egret.Event.REMOVED_FROM_STAGE, this.onExit, this);
            }

            public showFanTips(tips: TingCardInfo,posX?: number,posY?: number) {
                if (tips.cbTingCount == 0) {
                    this.visible = false;
                } else {
                    this.visible = true;

                    this.removeChildren();
                    const count = tips.cbTingCount;
                    let itemWidth = 100*count;
                    let allWidth = 115 + itemWidth;

                    let startx = posX;
                    const space = 15;

                    let head = new eui.Image("game_checkting_back_left_png");
                    head.scale9Grid = new egret.Rectangle(75,0,30,130);
                    this.addChild(head);
                    head.width = allWidth/2-space;
                    head.height = 130;
                    utils.setAnchorRightMid(head);
                    head.x = startx-space;
                    head.y = posY;

                    let tail = new eui.Image("game_checkting_back_right_png");
                    tail.scale9Grid = new egret.Rectangle(0,0,30,130);
                    this.addChild(tail);
                    tail.width = allWidth/2-space;
                    tail.height = 130;
                    utils.setAnchorLeftMid(tail);
                    tail.x = startx+space;
                    tail.y = posY;

                    //箭头
                    let arrow = new eui.Image("game_checkting_back_row_png");
                    this.addChild(arrow);
                    utils.setAnchorCenter(arrow);
                    arrow.x = startx;
                    arrow.y = posY;

                    let x = startx - allWidth/2 + 60;
                    for (let i = 0; i < tips.cbTingCount; i++) {
                        let card = this.getCardSprite(tips.cbChiHuCard[i]);
                        if (null !== card) {
                            utils.setAnchorLeftBottom(card);
                            card.x = x + 22;
                            card.y = posY + 10;
                            this.addChild(card);
                            
                            let icon = new eui.Image("game_checkting_text_png");
                            utils.setAnchorLeftBottom(card);
                            icon.x = x + 44 +21+ 25;
                            icon.y = posY-32;
                            this.addChild(icon);

                            let nFan: number = tips.cbChiHuFan[i];
                            utils.setAnchorLeftBottom(card);
                            let num = utils.LabelAtlas.createLabel(`${nFan}`,"game_checkting_num_png","0123456789",21,23);
                            num.x = x + 70 ;
                            num.y = posY-32;
                            this.addChild(num);

                            let remindCount = tips.cbRemindCount[i];
                            num = utils.LabelAtlas.createLabel(`${remindCount}`,"game_checkting_num_png","0123456789",21,23);
                            utils.setAnchorLeftBottom(card);
                            num.x = x + 70 ;
                            num.y = posY+4;
                            this.addChild(num);

                            x = x + 100;
                        }
                    }
                }
            }

            private getCardSprite(cbCardData: number) {
                if (this._gameLogic.IsValidCard(cbCardData)) {
                    let params: any = {};
                    params.bSheet = true;
                    params.texture = "game_handcard_png";
                    params.key = "card"
                    params.pos = 0;
                    params.width = 88;
                    params.height = 128;
                    let texture = "game_handcard_png";
                    let card = new CardSprite(texture, cbCardData, params);
                    card.scaleX = 0.5;
                    card.scaleY = 0.5;
                    return card;
                }
                return null;
            }

            private onExit() {
                this._gameLogic = null;
                this._scene = null;
            }
        }
    }
}