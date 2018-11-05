namespace utils {
    /**
     * 数字图片标签
     */
    export class LabelAtlas extends egret.Sprite {
        /**
         * 纹理名称
         */
        private _textrueName: string = "";
        private _text: string = "";
        private _charMapString: string = "";
        private _itemWidth: number = 0;
        private _itemHeight: number = 0;
        /**
         * 构造
         */
        constructor() {
            super();
        }

        /**createLabel
         *@param str            目标字符
         *@param charMapFile    数字纹理
         *@param charMapString  数字字符    
         *@param itemWidth      纹理宽度   
         *@param itemHeight     纹理高度   
         */

        public static createLabel(str: string, charMapFile: string, charMapString: string, itemWidth: number, itemHeight: number) {
            var instance = new LabelAtlas();
            if (instance && instance.initWithString(str, charMapFile, charMapString, itemWidth, itemHeight)) {
                return instance;
            }

            return null;
        }

        public initWithString(str: string, charMapFile: string, charMapString: string, itemWidth: number, itemHeight: number): boolean {
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
                        var rect: egret.Rectangle = new egret.Rectangle(pos * itemWidth, 0, itemWidth, itemHeight);
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
        }

        public setText(str: string) {
            if (str.length == 0)
                return ;

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
                        var rect: egret.Rectangle = new egret.Rectangle(pos * this._itemWidth, 0, this._itemWidth, this._itemHeight);
                        var txture = utils.createBitmapByName(this._textrueName, rect);
                        this.addChild(txture);
                        utils.setAnchorLeftTop(txture);
                        txture.x = i * this._itemWidth;
                        txture.y = 0;

                        break;
                    }
                }
            }
        }
        public getText() {
            return this._text;
        }
    }
}