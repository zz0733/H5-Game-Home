/**
 * 桌面扑克
 */
namespace game {
    export namespace sparrowsclm {
        //右边玩家
        const RIGHT_USER = 2;
        //左边玩家 
        const LEFT_USER = 1;
        //纹理数据
        const TEXTURE_DATA: any[] = [{ width: 46, height: 64 }, { width: 62, height: 50 }, { width: 62, height: 50 }];
        //起始位置
        const TABLE_POS: egret.Point[] = [new egret.Point(0, 0), new egret.Point(0, 270), new egret.Point(252, 0)];
        //一排个数
        const ONE_LINE: number[] = [8, 6, 6];
        //动画位置
        const ANIMATE_POS: egret.Point[] = [new egret.Point(700, 250), new egret.Point(240, 50), new egret.Point(-30, 400)];
        export class TableCard {
            private _scene: any;
            private _cbCardsData: number[][] = []; //玩家桌面扑克数据
            private _cardsPanel: eui.Panel[] = []; //扑克根节点
            private _cards: CardSprite[][] = [];   //扑克精灵数组
            private _cardsCount: number[] = [];  //扑克数目
            constructor(scene) {
                this._scene = scene;
                this.onInit();
            }

            /**初始数据 */
            onInit() {
                for (let i = 0; i < cmd.sparrowsclm.PLAYER_COUNT; i++) {
                    this._cardsCount[i] = 0;

                    if (null == this._cbCardsData[i]) {
                        this._cbCardsData[i] = [];
                    }

                    if (null == this._cards[i]) {
                        this._cards[i] = [];
                    }

                    if (null == this._cardsPanel[i]) {
                        this._cardsPanel[i] = this._scene._companet.getChildByName("table_card_" + i) as eui.Panel;;
                    }
                }
            }

            /**重置数据 */
            onRest() {

                for (let i = 0; i < cmd.sparrowsclm.PLAYER_COUNT; i++) {
                    if (null != this._cbCardsData[i]) {
                        this._cbCardsData[i] = [];
                    }

                    if (null != this._cardsPanel[i]) {
                        this._cardsPanel[i].removeChildren();
                    }

                    if (null != this._cards[i]) {
                        this._cards[i] = [];
                    }

                    if (null != this._cardsCount) {
                        this._cardsCount[i] = 0;
                    }
                }
            }

            /**
             * 搜索提供牌
             * @param wProvideUserIndex 提供者视图索引
             * @param cbProvideData     扑克数据
             * 倒叙搜索
             */
            public searchProvideCard(wProvideUserIndex: number, cbProvideData: number) {
                let card: CardSprite = this._cards[wProvideUserIndex][this._cards[wProvideUserIndex].length - 1] as CardSprite;
                if (card != null && (card._cbCardData == cbProvideData)) {
                    return card;
                }
                egret.assert(false);
                return null;
            }

            /**
             * 删除提供者牌
             */
            public deleteProvideCard(provideUserIndex: number,cbProvideData: number) {
                let card: CardSprite = this.searchProvideCard(provideUserIndex,cbProvideData);
                if (null == card) return;

                this._cardsPanel[provideUserIndex].removeChild(card);
                this._cards[provideUserIndex].shift();
                this._cbCardsData[provideUserIndex].shift();

                //非手牌索引
                this._scene._gameEngine._cbDisCardIndex[card._nCardLogicIndex] = Number(this._scene._gameEngine._cbDisCardIndex[card._nCardLogicIndex]) - 1;

                this.showNearOutIcon(df.INVALID_CHAIR);
            }

            /**
             * 显示最近一次出牌标识
             * 默认显示
             */
            private _outIcon: eui.Image;
            public showNearOutIcon(outViewId: number ,isShow: boolean = true) {
              
                if (null != this._outIcon) {
                    this._outIcon.parent.removeChild(this._outIcon);
                    this._outIcon = null;
                }
                
                if (outViewId == df.INVALID_CHAIR || !isShow) return;
             
                this._outIcon = new eui.Image("game_card_tip_png");
                this._cardsPanel[outViewId].addChild(this._outIcon);
                utils.setAnchorCenter(this._outIcon);
                
                const nIndex: number = this._cards[outViewId].length - 1;
                let card: CardSprite = this._cards[outViewId][nIndex];
                switch (outViewId) {
                    case cmd.sparrowsclm.MY_VIEW:
                        {
                            const posX: number = TABLE_POS[outViewId].x + (nIndex % ONE_LINE[outViewId]) * card.width + card.width/2;
                            const posY: number = TABLE_POS[outViewId].y + Math.floor((nIndex / ONE_LINE[outViewId])) * card.height - 10;

                            this._outIcon.x = posX;
                            this._outIcon.y = posY;
                        }
                        break;
                    case LEFT_USER:
                        {
                            const posX: number = TABLE_POS[outViewId].x + Math.floor((nIndex / ONE_LINE[outViewId])) * card.width + card.width/2;
                            const posY: number = TABLE_POS[outViewId].y - (nIndex % ONE_LINE[outViewId]) * 40 - 80;

                            this._outIcon.x = posX;
                            this._outIcon.y = posY;
                        }   
                        break;
                    case RIGHT_USER:
                        {
                            const posX: number = TABLE_POS[outViewId].x - Math.floor((nIndex / ONE_LINE[outViewId])) * card.width - card.width/2;
                            const posY: number = TABLE_POS[outViewId].y + (nIndex % ONE_LINE[outViewId]) * 40 - 10;

                            this._outIcon.x = posX;
                            this._outIcon.y = posY;
                        }   
                        break;  
                }

                //动作
                const posY = this._outIcon.y;
                egret.Tween.get(this._outIcon,{loop:true})
                .to({y:posY+20},500)
                .to({y:posY},500);
            }

            /**创建桌面牌 */
            public createTableCard(viewId: number, cbCardsData: number[], isAnimate?: boolean) {
                let params: any = {};
                let textureFile = "";
                switch (viewId) {
                    case cmd.sparrowsclm.MY_VIEW:
                        {
                            textureFile = "game_tablecard_v";
                            params.bSheet = true; //纹理集标识
                            params.src = textureFile;
                            params.key = "table_0_";
                            params.pos = 0;      //麻将资源从1开始 0代表牌背
                            params.width = TEXTURE_DATA[viewId].width;
                            params.height = TEXTURE_DATA[viewId].height;
                        }
                        break;
                    case LEFT_USER:
                        {
                            textureFile = "game_tablecard_h_png";
                            params.bSheet = true;   //纹理集标识
                            params.src = textureFile;
                            params.key = "table_1_";
                            params.pos = 1;         //麻将资源从1开始 0代表牌背
                            params.width = TEXTURE_DATA[viewId].width;
                            params.height = TEXTURE_DATA[viewId].height;
                        }
                        break;
                    case RIGHT_USER:
                        {
                            textureFile = "game_tablecard_h2_png";
                            params.bSheet = true;   //纹理集标识
                            params.src = textureFile;
                            params.key = "table_2_";
                            params.pos = 1;         //麻将资源从1开始 0代表牌背
                            params.width = TEXTURE_DATA[viewId].width;
                            params.height = TEXTURE_DATA[viewId].height;
                        }
                        break;
                }

                for (let i = 0; i < cbCardsData.length; i++) {
                    let card: CardSprite = new CardSprite(textureFile, Number(cbCardsData[i]), params);
                    if (viewId == LEFT_USER) {
                        this._cardsPanel[viewId].addChildAt(card, 0);
                    } else {
                        this._cardsPanel[viewId].addChild(card);
                    }

                    if (null != isAnimate && true == isAnimate) {
                        card.x = ANIMATE_POS[viewId].x;
                        card.y = ANIMATE_POS[viewId].y;
                    }

                    this._cards[viewId].push(card);
                    this._cbCardsData[viewId].push(cbCardsData[i]);

                    //调整位置
                    this.sortCardsPos(viewId, this._cards[viewId].length - 1, card, isAnimate);

                    //非手牌索引
                    this._scene._gameEngine._cbDisCardIndex[card._nCardLogicIndex] = Number(this._scene._gameEngine._cbDisCardIndex[card._nCardLogicIndex]) + 1;
                }
            }

            //调整位置
            public sortCardsPos(viewId, nIndex: number, card: CardSprite, isAnimate?: boolean) {
                switch (viewId) {
                    case cmd.sparrowsclm.MY_VIEW:
                        {
                            utils.setAnchorLeftTop(card);

                            const posX: number = TABLE_POS[viewId].x + (nIndex % ONE_LINE[viewId]) * card.width;
                            const posY: number = TABLE_POS[viewId].y + Math.floor((nIndex / ONE_LINE[viewId])) * card.height;

                            if (null != isAnimate && true == isAnimate) {
                                egret.Tween.get(card).to({ x: posX, y: posY }, 200);
                                return;
                            }

                            card.x = posX;
                            card.y = posY;
                        }
                        break;
                    case LEFT_USER:
                        {
                            utils.setAnchorLeftBottom(card);
                            const posX: number = TABLE_POS[viewId].x + Math.floor((nIndex / ONE_LINE[viewId])) * card.width;
                            const posY: number = TABLE_POS[viewId].y - (nIndex % ONE_LINE[viewId]) * 40;

                            if (null != isAnimate && true == isAnimate) {
                                egret.Tween.get(card).to({ x: posX, y: posY }, 200);
                                return;
                            }

                            card.x = posX;
                            card.y = posY;
                        }
                        break;
                    case RIGHT_USER:
                        {
                            utils.setAnchorRightTop(card);
                            const posX: number = TABLE_POS[viewId].x - Math.floor((nIndex / ONE_LINE[viewId])) * card.width;
                            const posY: number = TABLE_POS[viewId].y + (nIndex % ONE_LINE[viewId]) * 40;

                            if (null != isAnimate && true == isAnimate) {
                                egret.Tween.get(card).to({ x: posX, y: posY }, 200);
                                return;
                            }

                            card.x = posX;
                            card.y = posY;
                        }
                        break;
                }
            }

            /**内存回收 */
            public dealloc() {
                for (let i = 0; i < cmd.sparrowsclm.PLAYER_COUNT; i++) {
                    if (null != this._cbCardsData[i]) {
                        this._cbCardsData[i] = null;
                    }

                    if (null != this._cardsPanel[i]) {
                        this._cardsPanel[i].removeChildren();
                        this._cardsPanel[i] = null;
                    }

                    if (null != this._cards[i]) {
                        this._cards[i] = null;
                    }
                }

                if (null != this._cardsCount) {
                    this._cardsCount = null;
                }

                this._cards = null;
                this._cardsPanel = null;
                this._cbCardsData = null;
            }
        }
    }
}