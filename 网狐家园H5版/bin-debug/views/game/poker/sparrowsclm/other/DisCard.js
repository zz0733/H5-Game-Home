/**
 * 倒立的牌
 * 游戏结束显示
 */
var game;
(function (game) {
    var sparrowsclm;
    (function (sparrowsclm) {
        var OUT_POS = [new egret.Point(0, 0), new egret.Point(949, 112), new egret.Point(235, 112)];
        var DisCard = (function () {
            function DisCard(scene) {
                this._scene = scene;
                this.onInit();
            }
            DisCard.prototype.onInit = function () {
                this._gameLogic = new sparrowsclm.GameLogic();
            };
            /**
             * 删除最近一次扑克
             */
            /**回收 */
            DisCard.prototype.dealloc = function () {
                this._dropPanel = null;
                this._gameLogic = null;
            };
            return DisCard;
        }());
        sparrowsclm.DisCard = DisCard;
    })(sparrowsclm = game.sparrowsclm || (game.sparrowsclm = {}));
})(game || (game = {}));
