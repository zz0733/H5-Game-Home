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
var utils;
(function (utils) {
    /**
     * 数字图片标签
     */
    var LabelAtlas = /** @class */ (function (_super) {
        __extends(LabelAtlas, _super);
        /**
         * 构造
         */
        function LabelAtlas() {
            var _this = _super.call(this) || this;
            /**
             * 纹理名称
             */
            _this._textrueName = "";
            _this._text = "";
            _this._charMapString = "";
            _this._itemWidth = 0;
            _this._itemHeight = 0;
            return _this;
        }
        /**createLabel
         *@param str            目标字符
         *@param charMapFile    数字纹理
         *@param charMapString  数字字符
         *@param itemWidth      纹理宽度
         *@param itemHeight     纹理高度
         */
        LabelAtlas.createLabel = function (str, charMapFile, charMapString, itemWidth, itemHeight) {
            var instance = new LabelAtlas();
            if (instance && instance.initWithString(str, charMapFile, charMapString, itemWidth, itemHeight)) {
                return instance;
            }
            return null;
        };
        LabelAtlas.prototype.initWithString = function (str, charMapFile, charMapString, itemWidth, itemHeight) {
            this.removeChildren();
            var length = str.length;
            this.width = length * itemWidth;
            this.height = itemHeight;
            this._textrueName = charMapFile;
            this._charMapString = charMapString;
            this._itemWidth = itemWidth;
            this._itemHeight = itemHeight;
            if (str.length == 0)
                return false;
            this._text = null;
            this._text = str;
            for (var i = 0; i < length; i++) {
                var sub = str[i];
                var pos = 0;
                for (var j = 0; j < charMapString.length; j++) {
                    if (sub == charMapString[j]) {
                        //记录位置
                        pos = j;
                        //创建纹理
                        var rect = new egret.Rectangle(pos * itemWidth, 0, itemWidth, itemHeight);
                        var txture = utils.createBitmapByName(charMapFile, rect);
                        this.addChild(txture);
                        utils.setAnchorLeftTop(txture);
                        txture.x = i * itemWidth;
                        txture.y = 0;
                        break;
                    }
                }
            }
            return true;
        };
        LabelAtlas.prototype.setText = function (str) {
            if (str.length == 0)
                return;
            this.removeChildren();
            this._text = null;
            this._text = str;
            var length = str.length;
            this.width = length * this._itemWidth;
            this.height = this._itemHeight;
            for (var i = 0; i < length; i++) {
                var sub = str[i];
                var pos = 0;
                for (var j = 0; j < this._charMapString.length; j++) {
                    if (sub == this._charMapString[j]) {
                        //记录位置
                        pos = j;
                        //创建纹理
                        var rect = new egret.Rectangle(pos * this._itemWidth, 0, this._itemWidth, this._itemHeight);
                        var txture = utils.createBitmapByName(this._textrueName, rect);
                        this.addChild(txture);
                        utils.setAnchorLeftTop(txture);
                        txture.x = i * this._itemWidth;
                        txture.y = 0;
                        break;
                    }
                }
            }
        };
        LabelAtlas.prototype.getText = function () {
            return this._text;
        };
        return LabelAtlas;
    }(egret.Sprite));
    utils.LabelAtlas = LabelAtlas;
})(utils || (utils = {}));
