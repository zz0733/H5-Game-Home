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
 * 自定义富文本
 */
var utils;
(function (utils) {
    var RichText = (function (_super) {
        __extends(RichText, _super);
        function RichText(textAreaWidth, width, height) {
            var _this = _super.call(this) || this;
            //富文本内容
            _this.m_CurRichElementText = [];
            //记录边界
            _this.m_curWidth = 0;
            _this.m_widthMax = 0;
            _this.width = textAreaWidth;
            _this.height = height;
            _this.m_widthMax = Math.min(textAreaWidth, width);
            return _this;
        }
        RichText.prototype.removeElement = function (element) {
        };
        RichText.prototype.pushBackElement = function (element) {
            this.m_CurRichElementText.push(element);
        };
        RichText.prototype.clear = function () {
            for (var _i = 0, _a = this.m_CurRichElementText; _i < _a.length; _i++) {
                var child = _a[_i];
                this.removeChild(child);
            }
            this.m_CurRichElementText = [];
            this.m_curWidth = 0;
        };
        RichText.prototype.showRichText = function () {
            //判断长度
            if (this.m_widthMax == 0)
                return;
            //判断边界
            for (var _i = 0, _a = this.m_CurRichElementText; _i < _a.length; _i++) {
                var element = _a[_i];
                if (this.m_curWidth + element.width > this.m_widthMax) {
                    return;
                }
                utils.setAnchorLeftMid(element);
                this.addChild(element);
                element.x = this.m_curWidth;
                element.y = this.height / 2;
                this.m_curWidth += element.width;
            }
        };
        return RichText;
    }(egret.Sprite));
    utils.RichText = RichText;
})(utils || (utils = {}));
