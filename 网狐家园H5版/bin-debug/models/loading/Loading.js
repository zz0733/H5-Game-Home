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
 * 进度条
 */
var models;
(function (models) {
    var Loading = (function (_super) {
        __extends(Loading, _super);
        function Loading(finishHandler) {
            var _this = _super.call(this) || this;
            _this._finishHandler = finishHandler;
            return _this;
        }
        /**
         * 结束动画
         */
        Loading.prototype.finishLoading = function (unit) {
            var _this = this;
            if (unit === void 0) { unit = 1; }
            if ((this.value + unit) < this.maximum) {
                this.value = this.value + unit;
                egret.Tween.get(this)
                    .wait(20)
                    .call(function () { _this.finishLoading(unit); });
            }
            else if ((this.value + unit) >= this.maximum) {
                this.value = this.maximum;
                if (this._finishHandler) {
                    this._finishHandler();
                }
            }
        };
        return Loading;
    }(eui.ProgressBar));
    models.Loading = Loading;
})(models || (models = {}));
