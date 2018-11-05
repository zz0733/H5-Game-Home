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
 * 番数提示
 **/
var game;
(function (game) {
    var sparrowsclm;
    (function (sparrowsclm) {
        var FanTipsView = /** @class */ (function (_super) {
            __extends(FanTipsView, _super);
            function FanTipsView(scene) {
                var _this = _super.call(this) || this;
                _this.touchEnabled = false;
                _this._scene = scene;
                _this._gameLogic = new sparrowsclm.GameLogic();
                _this.once(egret.Event.REMOVED_FROM_STAGE, _this.onExit, _this);
                return _this;
            }
            FanTipsView.prototype.showFanTips = function (tips, posX, posY) {
                if (tips.cbTingCount == 0) {
                    this.visible = false;
                }
                else {
                    this.visible = true;
                    this.removeChildren();
                    var count = tips.cbTingCount;
                    var itemWidth = 100 * count;
                    var allWidth = 115 + itemWidth;
                    var startx = posX;
                    var space = 15;
                    var head = new eui.Image("game_checkting_back_left_png");
                    head.scale9Grid = new egret.Rectangle(75, 0, 30, 130);
                    this.addChild(head);
                    head.width = allWidth / 2 - space;
                    head.height = 130;
                    utils.setAnchorRightMid(head);
                    head.x = startx - space;
                    head.y = posY;
                    var tail = new eui.Image("game_checkting_back_right_png");
                    tail.scale9Grid = new egret.Rectangle(0, 0, 30, 130);
                    this.addChild(tail);
                    tail.width = allWidth / 2 - space;
                    tail.height = 130;
                    utils.setAnchorLeftMid(tail);
                    tail.x = startx + space;
                    tail.y = posY;
                    //箭头
                    var arrow = new eui.Image("game_checkting_back_row_png");
                    this.addChild(arrow);
                    utils.setAnchorCenter(arrow);
                    arrow.x = startx;
                    arrow.y = posY;
                    var x = startx - allWidth / 2 + 60;
                    for (var i = 0; i < tips.cbTingCount; i++) {
                        var card = this.getCardSprite(tips.cbChiHuCard[i]);
                        if (null !== card) {
                            utils.setAnchorLeftBottom(card);
                            card.x = x + 22;
                            card.y = posY + 10;
                            this.addChild(card);
                            var icon = new eui.Image("game_checkting_text_png");
                            utils.setAnchorLeftBottom(card);
                            icon.x = x + 44 + 21 + 25;
                            icon.y = posY - 32;
                            this.addChild(icon);
                            var nFan = tips.cbChiHuFan[i];
                            utils.setAnchorLeftBottom(card);
                            var num = utils.LabelAtlas.createLabel("" + nFan, "game_checkting_num_png", "0123456789", 21, 23);
                            num.x = x + 70;
                            num.y = posY - 32;
                            this.addChild(num);
                            var remindCount = tips.cbRemindCount[i];
                            num = utils.LabelAtlas.createLabel("" + remindCount, "game_checkting_num_png", "0123456789", 21, 23);
                            utils.setAnchorLeftBottom(card);
                            num.x = x + 70;
                            num.y = posY + 4;
                            this.addChild(num);
                            x = x + 100;
                        }
                    }
                }
            };
            FanTipsView.prototype.getCardSprite = function (cbCardData) {
                if (this._gameLogic.IsValidCard(cbCardData)) {
                    var params = {};
                    params.bSheet = true;
                    params.texture = "game_handcard_png";
                    params.key = "card";
                    params.pos = 0;
                    params.width = 88;
                    params.height = 128;
                    var texture = "game_handcard_png";
                    var card = new sparrowsclm.CardSprite(texture, cbCardData, params);
                    card.scaleX = 0.5;
                    card.scaleY = 0.5;
                    return card;
                }
                return null;
            };
            FanTipsView.prototype.onExit = function () {
                this._gameLogic = null;
                this._scene = null;
            };
            return FanTipsView;
        }(eui.UILayer));
        sparrowsclm.FanTipsView = FanTipsView;
    })(sparrowsclm = game.sparrowsclm || (game.sparrowsclm = {}));
})(game || (game = {}));
