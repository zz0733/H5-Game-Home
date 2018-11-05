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
 * 操作选择
 * 多个选择
 */
var game;
(function (game) {
    var sparrowsclm;
    (function (sparrowsclm) {
        var OpSelectView = /** @class */ (function (_super) {
            __extends(OpSelectView, _super);
            function OpSelectView(scene) {
                var _this = _super.call(this) || this;
                _this._showInfo = [];
                _this._scene = scene;
                _this._gameLogic = new sparrowsclm.GameLogic();
                _this.touchEnabled = false;
                _this.once(egret.Event.REMOVED_FROM_STAGE, _this.onExit, _this);
                _this.onInit();
                return _this;
            }
            OpSelectView.prototype.onInit = function () {
                this._opSelectBg = new eui.Image("op_bg_png");
                this._opSelectBg.width = 218;
                this._opSelectBg.height = 118;
                this._opSelectBg.scale9Grid = new egret.Rectangle(24, 24, 170, 70);
                utils.setAnchorCenter(this._opSelectBg);
                this._opSelectBg.x = 667;
                this._opSelectBg.y = 490;
                this.addChild(this._opSelectBg);
                this._container = new eui.Panel();
                this._container.width = 1334;
                this._container.height = 750;
                this.addChild(this._container);
            };
            OpSelectView.prototype.onEventUserAction = function (selectInfo) {
                var _this = this;
                if (null == selectInfo) {
                    this.visible = false;
                }
                else {
                    this.visible = true;
                    this._container.removeChildren();
                    this._showInfo = [];
                    this._selectCardInfo = selectInfo;
                    var count = selectInfo.length;
                    var width = 144 * count + 48;
                    var height = 142;
                    this._opSelectBg.width = width;
                    this._opSelectBg.height = height;
                    utils.setAnchorCenter(this._opSelectBg);
                    var startx = 667 - width / 2 - 15;
                    var _loop_1 = function (i) {
                        var showInfo = {};
                        if ((selectInfo[i].cbActionMask == sparrowsclm.WIK_GANG) || (selectInfo[i].cbActionMask == sparrowsclm.WIK_JIA_GANG)) {
                            showInfo.flag = new eui.Image("opflag_gang_png");
                        }
                        else if (selectInfo[i].cbActionMask == sparrowsclm.WIK_QING_HU) {
                            showInfo.flag = new eui.Image("opflag_qing_png");
                        }
                        else if (selectInfo[i].cbActionMask == sparrowsclm.WIK_BAO_HU) {
                            showInfo.flag = new eui.Image("opflag_bao_png");
                        }
                        else {
                            egret.assert(false);
                        }
                        showInfo.card = this_1.getCardSprite(selectInfo[i].cbActionCard);
                        showInfo.card.addEventListener(egret.TouchEvent.TOUCH_END, function () { _this._scene.onOperateSelected(selectInfo[i]); }, this_1);
                        showInfo.flag.x = startx + 35;
                        showInfo.flag.y = 440;
                        this_1._container.addChild(showInfo.flag);
                        showInfo.card.x = startx + 107;
                        showInfo.card.y = 440;
                        this_1._container.addChild(showInfo.card);
                        //showInfo.rect = new egret.Rectangle(startx+70,430,74,118);
                        this_1._showInfo.push(showInfo);
                        startx = startx + 144;
                    };
                    var this_1 = this;
                    for (var i = 0; i < count; i++) {
                        _loop_1(i);
                    }
                }
            };
            OpSelectView.prototype.getCardSprite = function (cbCardData) {
                if (this._gameLogic.IsValidCard(cbCardData)) {
                    var textureFile = "game_weave_0_png";
                    var params = {};
                    params.bSheet = true; //纹理集标识
                    params.src = textureFile;
                    params.key = "weave";
                    params.pos = 1; //麻将资源从1开始 0代表牌背
                    params.width = 74;
                    params.height = 100;
                    var card = new sparrowsclm.CardSprite(textureFile, Number(cbCardData), params);
                    return card;
                }
                return null;
            };
            OpSelectView.prototype.onExit = function () {
                //释放引用
                this._opSelectBg = null;
                this._container = null;
                this._selectCardInfo = null;
            };
            return OpSelectView;
        }(eui.UILayer));
        sparrowsclm.OpSelectView = OpSelectView;
    })(sparrowsclm = game.sparrowsclm || (game.sparrowsclm = {}));
})(game || (game = {}));
