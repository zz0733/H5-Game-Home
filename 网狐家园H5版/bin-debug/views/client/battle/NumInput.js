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
var client;
(function (client) {
    var NumInput = /** @class */ (function (_super) {
        __extends(NumInput, _super);
        function NumInput(scene, showData, changeListener) {
            var _this = _super.call(this) || this;
            _this._orignalData = 1;
            _this._inputValue = 1;
            _this._scene = scene;
            _this._showData = showData;
            _this.skinName = skins.BattleNumInput;
            _this.touchEnabled = false;
            _this._changeListener = changeListener;
            _this.onInitInput();
            return _this;
        }
        NumInput.prototype.onInitInput = function () {
            var btn = this.getChildByName("bt_min");
            btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClick, this);
            btn = this.getChildByName("bt_plus");
            btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClick, this);
            //输入文本
            var textInput = this.getChildByName("numInput");
            textInput.addEventListener(egret.Event.CHANGE, this.onChange, this);
            textInput.text = "" + this._showData.lMinBaseScore;
            textInput.inputType = egret.TextFieldInputType.TEL;
            this._inputText = textInput;
        };
        NumInput.prototype.onChange = function (e) {
            var textInput = e.target;
            if (textInput.text == "")
                return;
            if (!isNaN(Number(textInput.text))) {
                if (Number(textInput.text) < this._showData.lMinBaseScore) {
                    textInput.text = "" + this._showData.lMinBaseScore;
                }
                else if (Number(textInput.text) <= this._showData.lMaxBaseScore) {
                }
                else {
                    textInput.text = "" + this._showData.lMaxBaseScore;
                }
            }
            else {
                textInput.text = "" + this._showData.lMinBaseScore;
            }
            if (null != this._changeListener) {
                this._changeListener(Number(textInput.text));
            }
        };
        NumInput.prototype.onButtonClick = function (e) {
            var button = e.target;
            var name = button.name;
            egret.Tween.get(button)
                .to({ scaleX: 1.1, scaleY: 1.1 }, 100)
                .to({ scaleX: 1.0, scaleY: 1.0 }, 100);
            switch (name) {
                case "bt_plus":
                    {
                        if (Number(this._inputText.text) + 1 <= this._showData.lMaxBaseScore) {
                            this._inputText.text = "" + (Number(this._inputText.text) + 1);
                        }
                    }
                    break;
                case "bt_min":
                    {
                        if (Number(this._inputText.text) - 1 >= this._showData.lMinBaseScore) {
                            this._inputText.text = "" + (Number(this._inputText.text) - 1);
                        }
                    }
                    break;
            }
            if (null != this._changeListener) {
                this._changeListener(this.getInputValue());
            }
        };
        NumInput.prototype.setOrignalCell = function (cellScore) {
            var textInput = this.getChildByName("numInput");
            textInput.text = "" + cellScore;
        };
        NumInput.prototype.getInputValue = function () {
            return this._inputText.text;
        };
        return NumInput;
    }(eui.Component));
    client.NumInput = NumInput;
})(client || (client = {}));
