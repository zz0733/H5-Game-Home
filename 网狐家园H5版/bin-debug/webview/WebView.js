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
var exp;
(function (exp) {
    var WebView = /** @class */ (function (_super) {
        __extends(WebView, _super);
        function WebView() {
            var _this = _super.call(this) || this;
            _this.iframe = document.createElement("iframe");
            _this.bind(_this.iframe);
            return _this;
        }
        Object.defineProperty(WebView.prototype, "src", {
            get: function () {
                return this._src;
            },
            set: function (v) {
                this._src = v;
                this.iframe.src = v;
            },
            enumerable: true,
            configurable: true
        });
        return WebView;
    }(exp.WebNode));
    exp.WebView = WebView;
})(exp || (exp = {}));
