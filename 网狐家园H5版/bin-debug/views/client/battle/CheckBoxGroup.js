/**
 * 选择组合 多选
 */
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
    var CheckBoxGroup = (function (_super) {
        __extends(CheckBoxGroup, _super);
        /**
         * showData {title:"",itemCount: 0,seletedValue: 0,option:["xxx","xxx","xxx"...]}
         */
        function CheckBoxGroup(scene, showData, changeHandler) {
            var _this = _super.call(this) || this;
            _this._items = [];
            _this._seletedValues = [];
            _this._scene = scene;
            _this._showData = showData;
            _this.skinName = skins.RadioGroup;
            // 0未选 1选中
            _this._seletedValues = showData.selectedValue;
            _this.onInitGroup();
            return _this;
        }
        ;
        CheckBoxGroup.prototype.onInitGroup = function () {
            //标题
            this._title.text = this._showData.title;
            //选项
            for (var i = 0; i < this._showData.itemCount; i++) {
                //checkbox
                var checkbox = this.getChildByName("checkbox_" + (i + 1));
                checkbox.visible = true;
                if (1 == this._seletedValues[i]) {
                    checkbox.selected = true;
                }
                else {
                    checkbox.selected = false;
                }
                this._items.push(checkbox);
                checkbox.addEventListener(egret.Event.CHANGE, this.onEventChange, this);
                //选项
                var option = this.getChildByName("title" + (i + 1));
                option.visible = true;
                option.text = this._showData.option[i];
            }
        };
        CheckBoxGroup.prototype.onEventChange = function (e) {
            //checkbox_
            var target = e.target;
            var idx = Number(target.name.substr(9, target.name.length)) - 1;
            this._seletedValues[idx] = (target.selected == true) ? 1 : 0;
            if (null != this._changeListener) {
                this._changeListener(idx);
            }
        };
        CheckBoxGroup.prototype.onResetView = function () {
            for (var _i = 0, _a = this._items; _i < _a.length; _i++) {
                var item = _a[_i];
                item.selected = false;
            }
            for (var i = 0; i < this._seletedValues.length; i++) {
                this._seletedValues[i] = -1;
            }
        };
        CheckBoxGroup.prototype.setSelectedIndex = function (index, selected) {
            var checkbox = this._items[index];
            if (checkbox) {
                checkbox.selected = true;
                this._seletedValues[index] = 1;
            }
        };
        CheckBoxGroup.prototype.getSelectValue = function () {
            return this._seletedValues;
        };
        return CheckBoxGroup;
    }(eui.Component));
    client.CheckBoxGroup = CheckBoxGroup;
})(client || (client = {}));
