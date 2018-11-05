/**
 * 扑克操作
 */
namespace game {
    export namespace sparrowsclm {
        const CardWidth: number = 88;
        const CardHeight: number = 128;
        const BackValue: number = 0xFF;
        const ZeroValue: number = 0x00;
        const IndexOffset: number = 9;

        export const CARD_STATUS = {
            NORMAL:0,
            GARY:1,
            TING:2
        }
       
        const CardName = {
            0x11: "一条", 
            0x12: "二条",
            0x13: "三条",
            0x14: "四条", 
            0x15: "五条", 
            0x16: "六条", 
            0x17: "七条", 
            0x18: "八条", 
            0x19: "九条",

            0x21: "一筒", 
            0x22: "二筒", 
            0x23: "三筒", 
            0x24: "四筒", 
            0x25: "五筒", 
            0x26: "六筒", 
            0x27: "七筒", 
            0x28: "八筒", 
            0x29: "九筒"

        }
        export class CardSprite extends egret.DisplayObjectContainer {
            public _cbCardData: number = 0;
            public _isTouchEnable: boolean = true;
            public _touchCallback: any;
            public _isShoot: boolean = false;
            public _nShootSpace: number = 20;
            public _nCardIndex: number = 0;
            public _nCardLogicIndex: number = 0;
            public _nNormalPosY: number = 0;
            public _nOffsetPos: number = 0;
            public _sCardName: string = "";
            public _sTextureFile: string = "";
            public _sSheetKey: string = "";
            public _cardSprite: eui.Image;
            private _gameLogic: GameLogic;
            private _cbStatus: number = CARD_STATUS.NORMAL;
            /**
             * 构造
             * @param textureFile 纹理
             * @param cbCardData 扑克数据
             */
            constructor(textureFile?: string,cbCardData ?: number,params?: any) {
                super();
                this.width = params ? params.width : CardWidth;
                this.height = params ? params.width : CardHeight;
                this._sTextureFile = textureFile ? textureFile : "game_handcard_png" ;
                this._gameLogic = new GameLogic();
                this._cbCardData = cbCardData ? cbCardData : 0xFF;
    
                this.once(egret.Event.REMOVED_FROM_STAGE, this.onExit, this);

                if (cbCardData == ZeroValue) return;

                if (cbCardData == BackValue ) {
                    //创建背面
                    this._sCardName = "牌背";
                    this._nCardIndex = 0;
                    let texture: any;
                    if (params && params.bSheet) {
                        this._sSheetKey = params.key;
                        let offset: number =  0; 
                        texture = RES.getRes(params.key+`${(this._nCardIndex+offset)}`)
                    } else {
                        texture = textureFile;
                    }
                    
                    this._cardSprite = new eui.Image(texture);
                    this.addChild(this._cardSprite);
                } else {
                   if (this._gameLogic.IsValidCard(cbCardData)) {
                       this._sCardName = CardName[cbCardData];
                       this._nCardLogicIndex = this._gameLogic.SwitchToCardIndex(cbCardData); 
                       this._nCardIndex = this._gameLogic.SwitchToCardIndex(cbCardData) - IndexOffset;
    
                       //麻将纹理起始位置(若纹理含背面,索引偏移1)
                       let offset: number = params ? params.pos : 0; 
                       this._nOffsetPos = offset;

                       //断勾卡没有万牌 逻辑索引从9开始
                       let texture: any; 
                       if (params && params.bSheet) {
                           this._sSheetKey = params.key;
                           texture = RES.getRes(params.key + `${(this._nCardIndex+offset)}`);
                       } else {
                           texture = textureFile;
                       }
                       
                       this._cardSprite = new eui.Image(texture);
                       this.addChild(this._cardSprite);
                   }
                }
            }

            public setTouchCallBack(callback: any) {
                this._touchCallback = null;
                this._touchCallback = callback;
            }

            private onTouch(e: egret.Event) {
                if (!this._isTouchEnable)
                    return;
               
            //    if (this._touchCallback) {
            //        this._touchCallback();
            //    }
            //    this.setShoot(!this._isShoot);  
            //    console.log("扑克触摸");
               
            }

            /**更新纹理 */
            public updateTexture(cbCardData: number) {
                if (cbCardData == BackValue) {
                    let cardIndex: number = 0;
                    let texture = RES.getRes(this._sSheetKey + `${(cardIndex+0)}`);
                    this._cardSprite.source = texture
                    return;
                }

                if (this._gameLogic.IsValidCard(cbCardData)) {
                    if (null != this._cardSprite) {
                        let cardIndex = this._gameLogic.SwitchToCardIndex(cbCardData) - IndexOffset;
                        let texture = RES.getRes(this._sSheetKey + `${(cardIndex+this._nOffsetPos)}`);
                        this._cardSprite.source = texture
                    }
                }
            }


            /**弹起 */
            public setShoot(isShoot: boolean = false) {
                this._isShoot = isShoot;
                this.y = this._isShoot ? this._nNormalPosY - this._nShootSpace : this._nNormalPosY;
            }

            /**设置原始PosY */
            public setOrignalPosY(y: number) {
                this._nNormalPosY = y;
            }

            public setStatus(cbStatus: number = CARD_STATUS.NORMAL) {
                if (this.getStatus() == cbStatus) return;

                this._cbStatus = cbStatus;
                if (cbStatus == CARD_STATUS.TING) {
                    
                }
            }

            public getStatus() {
                return this._cbStatus;
            }
            /**设置灰色 */
            public setCardGray() {
                if( null != this._cardSprite) {
                    var colorMatrix = 
                    [
                        0.3,0.6,0,0,0,
                        0.3,0.6,0,0,0,
                        0.3,0.6,0,0,0,
                        0,0,0,1,0
                    ];
                    var flilter = new egret.ColorMatrixFilter(colorMatrix);
                    this._cardSprite.filters = [flilter];
                }
            }

            /**设置正常扑克*/
            public setNormalCard() {
                this._cardSprite.filters = null;
            }

            /**移除舞台 */
            private onExit() {
                this._touchCallback = null;
            }
        }
    }
}