var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * 扑克操作
 */
var game;
(function (game) {
    var sparrowsclm;
    (function (sparrowsclm) {
        var CardWidth = 88;
        var CardHeight = 128;
        var BackValue = 0xFF;
        var ZeroValue = 0x00;
        var IndexOffset = 9;
        sparrowsclm.CARD_STATUS = {
            NORMAL: 0,
            GARY: 1,
            TING: 2
        };
        var CardName = {
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
        };
        var CardSprite = /** @class */ (function (_super) {
            __extends(CardSprite, _super);
            /**
             * 构造
             * @param textureFile 纹理
             * @param cbCardData 扑克数据
             */
            function CardSprite(textureFile, cbCardData, params) {
                var _this = _super.call(this) || this;
                _this._cbCardData = 0;
                _this._isTouchEnable = true;
                _this._isShoot = false;
                _this._nShootSpace = 20;
                _this._nCardIndex = 0;
                _this._nCardLogicIndex = 0;
                _this._nNormalPosY = 0;
                _this._nOffsetPos = 0;
                _this._sCardName = "";
                _this._sTextureFile = "";
                _this._sSheetKey = "";
                _this._cbStatus = sparrowsclm.CARD_STATUS.NORMAL;
                _this.width = params ? params.width : CardWidth;
                _this.height = params ? params.width : CardHeight;
                _this._sTextureFile = textureFile ? textureFile : "game_handcard_png";
                _this._gameLogic = new sparrowsclm.GameLogic();
                _this._cbCardData = cbCardData ? cbCardData : 0xFF;
                _this.once(egret.Event.REMOVED_FROM_STAGE, _this.onExit, _this);
                if (cbCardData == ZeroValue)
                    return _this;
                if (cbCardData == BackValue) {
                    //创建背面
                    _this._sCardName = "牌背";
                    _this._nCardIndex = 0;
                    var texture = void 0;
                    if (params && params.bSheet) {
                        _this._sSheetKey = params.key;
                        var offset = 0;
                        texture = RES.getRes(params.key + ("" + (_this._nCardIndex + offset)));
                    }
                    else {
                        texture = textureFile;
                    }
                    _this._cardSprite = new eui.Image(texture);
                    _this.addChild(_this._cardSprite);
                }
                else {
                    if (_this._gameLogic.IsValidCard(cbCardData)) {
                        _this._sCardName = CardName[cbCardData];
                        _this._nCardLogicIndex = _this._gameLogic.SwitchToCardIndex(cbCardData);
                        _this._nCardIndex = _this._gameLogic.SwitchToCardIndex(cbCardData) - IndexOffset;
                        //麻将纹理起始位置(若纹理含背面,索引偏移1)
                        var offset = params ? params.pos : 0;
                        _this._nOffsetPos = offset;
                        //断勾卡没有万牌 逻辑索引从9开始
                        var texture = void 0;
                        if (params && params.bSheet) {
                            _this._sSheetKey = params.key;
                            texture = RES.getRes(params.key + ("" + (_this._nCardIndex + offset)));
                        }
                        else {
                            texture = textureFile;
                        }
                        _this._cardSprite = new eui.Image(texture);
                        _this.addChild(_this._cardSprite);
                    }
                }
                return _this;
            }
            CardSprite.prototype.setTouchCallBack = function (callback) {
                this._touchCallback = null;
                this._touchCallback = callback;
            };
            CardSprite.prototype.onTouch = function (e) {
                if (!this._isTouchEnable)
                    return;
                //    if (this._touchCallback) {
                //        this._touchCallback();
                //    }
                //    this.setShoot(!this._isShoot);  
                //    console.log("扑克触摸");
            };
            /**更新纹理 */
            CardSprite.prototype.updateTexture = function (cbCardData) {
                if (cbCardData == BackValue) {
                    var cardIndex = 0;
                    var texture = RES.getRes(this._sSheetKey + ("" + (cardIndex + 0)));
                    this._cardSprite.source = texture;
                    return;
                }
                if (this._gameLogic.IsValidCard(cbCardData)) {
                    if (null != this._cardSprite) {
                        var cardIndex = this._gameLogic.SwitchToCardIndex(cbCardData) - IndexOffset;
                        var texture = RES.getRes(this._sSheetKey + ("" + (cardIndex + this._nOffsetPos)));
                        this._cardSprite.source = texture;
                    }
                }
            };
            /**弹起 */
            CardSprite.prototype.setShoot = function (isShoot) {
                if (isShoot === void 0) { isShoot = false; }
                this._isShoot = isShoot;
                this.y = this._isShoot ? this._nNormalPosY - this._nShootSpace : this._nNormalPosY;
            };
            /**设置原始PosY */
            CardSprite.prototype.setOrignalPosY = function (y) {
                this._nNormalPosY = y;
            };
            CardSprite.prototype.setStatus = function (cbStatus) {
                if (cbStatus === void 0) { cbStatus = sparrowsclm.CARD_STATUS.NORMAL; }
                if (this.getStatus() == cbStatus)
                    return;
                this._cbStatus = cbStatus;
                if (cbStatus == sparrowsclm.CARD_STATUS.TING) {
                }
            };
            CardSprite.prototype.getStatus = function () {
                return this._cbStatus;
            };
            /**设置灰色 */
            CardSprite.prototype.setCardGray = function () {
                if (null != this._cardSprite) {
                    var colorMatrix = [
                        0.3, 0.6, 0, 0, 0,
                        0.3, 0.6, 0, 0, 0,
                        0.3, 0.6, 0, 0, 0,
                        0, 0, 0, 1, 0
                    ];
                    var flilter = new egret.ColorMatrixFilter(colorMatrix);
                    this._cardSprite.filters = [flilter];
                }
            };
            /**设置正常扑克*/
            CardSprite.prototype.setNormalCard = function () {
                this._cardSprite.filters = null;
            };
            /**移除舞台 */
            CardSprite.prototype.onExit = function () {
                this._touchCallback = null;
            };
            return CardSprite;
        }(egret.DisplayObjectContainer));
        sparrowsclm.CardSprite = CardSprite;
    })(sparrowsclm = game.sparrowsclm || (game.sparrowsclm = {}));
})(game || (game = {}));
