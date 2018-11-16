/**
 * 用户出牌
 */
var game;
(function (game) {
    var sparrowsclm;
    (function (sparrowsclm) {
        var OUT_POS = [new egret.Point(0, 0), new egret.Point(949, 112), new egret.Point(235, 112)];
        var OutCard = (function () {
            function OutCard(scene) {
                this._scene = scene;
                this.onInit();
            }
            OutCard.prototype.onInit = function () {
                this._outPanel = this._scene._companet.getChildByName("outCard");
                this._gameLogic = new sparrowsclm.GameLogic();
            };
            /**设置出牌 */
            OutCard.prototype.setOutCard = function (viewId, cbCardsData) {
                if (viewId == df.INVALID_ITEM) {
                    if (null != this._outPanel) {
                        var card = this._outPanel.getChildByName("card");
                        if (null != card) {
                            this._outPanel.removeChild(card);
                        }
                        this._outPanel.visible = false;
                    }
                    return;
                }
                this._outPanel.visible = true;
                this._outPanel.x = OUT_POS[viewId].x;
                this._outPanel.y = OUT_POS[viewId].y;
                //创建扑克
                if (this._gameLogic.IsValidCard(cbCardsData)) {
                    var logicIndex = this._gameLogic.SwitchToCardIndex(cbCardsData) - 9;
                    var params = {};
                    params.bSheet = true;
                    params.texture = "game_handcard_png";
                    params.key = "card";
                    params.pos = 0;
                    params.width = 88;
                    params.height = 128;
                    var card = new sparrowsclm.CardSprite("game_handcard_png", cbCardsData, params);
                    card.name = "card";
                    utils.setAnchorCenter(card);
                    card.x = this._outPanel.width / 2;
                    card.y = this._outPanel.height / 2 - 20;
                    this._outPanel.addChild(card);
                }
            };
            /**回收 */
            OutCard.prototype.dealloc = function () {
                this._outPanel = null;
                this._gameLogic = null;
            };
            return OutCard;
        }());
        sparrowsclm.OutCard = OutCard;
    })(sparrowsclm = game.sparrowsclm || (game.sparrowsclm = {}));
})(game || (game = {}));
