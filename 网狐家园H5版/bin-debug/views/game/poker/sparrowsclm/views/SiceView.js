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
/**掷骰子 */
var game;
(function (game) {
    var sparrowsclm;
    (function (sparrowsclm) {
        var SiceView = (function (_super) {
            __extends(SiceView, _super);
            function SiceView(lsice0, lsice1, callback) {
                var _this = _super.call(this) || this;
                _this._sice0 = lsice0;
                _this._sice1 = lsice1;
                _this.startAction(_this._sice0, _this._sice1, callback);
                return _this;
            }
            SiceView.prototype.startAction = function (lsice0, lsice1, callback) {
                var _this = this;
                egret.assert(lsice0 >= 0 && lsice0 <= 6);
                egret.assert(lsice1 >= 0 && lsice1 <= 6);
                if (lsice0 < 0 || lsice0 > 6)
                    return;
                if (lsice1 < 0 || lsice1 > 6)
                    return;
                var data = RES.getRes("sice" + lsice0 + "_json");
                var txtr = RES.getRes("sice_" + lsice0 + "_png");
                var mcFactory = new egret.MovieClipDataFactory(data, txtr);
                var mc = new egret.MovieClip(mcFactory.generateMovieClipData("SiceAnim" + lsice0));
                this.addChild(mc);
                mc.x = 567;
                mc.y = 250;
                mc.gotoAndPlay(1, 1);
                data = RES.getRes("sice" + lsice1 + "_json");
                txtr = RES.getRes("sice_" + lsice1 + "_png");
                mcFactory = new egret.MovieClipDataFactory(data, txtr);
                mc = new egret.MovieClip(mcFactory.generateMovieClipData("SiceAnim" + lsice1));
                this.addChild(mc);
                mc.x = 667;
                mc.y = 330;
                mc.gotoAndPlay(1, 1);
                egret.Tween.get(this)
                    .wait(3000)
                    .call(function () {
                    if (callback) {
                        callback();
                    }
                    _this.parent.removeChild(_this);
                });
            };
            return SiceView;
        }(eui.UILayer));
        sparrowsclm.SiceView = SiceView;
    })(sparrowsclm = game.sparrowsclm || (game.sparrowsclm = {}));
})(game || (game = {}));
