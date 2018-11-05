/**
 * 选择组合 单选
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
    var RadioGroup = /** @class */ (function (_super) {
        __extends(RadioGroup, _super);
        /**
         * _showData {title:"",itemCount: 0,seletedIdx: 0,option:["xxx","xxx","xxx"...]}
         */
        function RadioGroup(scene, showData, changeListener) {
            var _this = _super.call(this) || this;
            _this._items = [];
            _this._curSeletedIdx = -1;
            _this._scene = scene;
            _this._showData = showData;
            _this.skinName = skins.RadioGroup;
            _this._changeListener = changeListener;
            _this.touchEnabled = false;
            _this._title = _this.getChildByName("title");
            _this.onInitGroup();
            return _this;
        }
        RadioGroup.prototype.onInitGroup = function () {
            //标题
            this._title.text = this._showData.title;
            //选项
            for (var i = 0; i < this._showData.itemCount; i++) {
                //checkbox
                var checkbox = this.getChildByName("checkbox_" + (i + 1));
                checkbox.visible = true;
                if (i == this._showData.seletedIdx) {
                    checkbox.selected = true;
                    this._curSeletedIdx = i;
                    if (null != this._changeListener) {
                        this._changeListener(this._curSeletedIdx);
                    }
                }
                checkbox.addEventListener(egret.Event.CHANGE, this.onEventChange, this);
                //选项
                var option = this.getChildByName("title" + (i + 1));
                option.visible = true;
                option.text = this._showData.option[i];
                var map = { checkbox: checkbox, option: option, idx: i };
                this._items.push(map);
            }
        };
        RadioGroup.prototype.onEventChange = function (e) {
            var target = e.target;
            for (var _i = 0, _a = this._items; _i < _a.length; _i++) {
                var item = _a[_i];
                if (item.checkbox == target) {
                    target.selected = true;
                    this._curSeletedIdx = item.idx;
                    if (null != this._changeListener) {
                        this._changeListener(this._curSeletedIdx);
                    }
                }
                else {
                    item.checkbox.selected = false;
                }
            }
        };
        RadioGroup.prototype.onResetView = function () {
            for (var _i = 0, _a = this._items; _i < _a.length; _i++) {
                var item = _a[_i];
                item.checkbox.selected = false;
            }
            this._curSeletedIdx = -1;
        };
        RadioGroup.prototype.setSelectedIndex = function (index, selected) {
            if (selected === void 0) { selected = true; }
            this.onResetView();
            var checkbox = this._items[index].checkbox;
            if (checkbox) {
                checkbox.selected = selected;
                if (selected == true) {
                    this._curSeletedIdx = index;
                    if (null != this._changeListener) {
                        this._changeListener(this._curSeletedIdx);
                    }
                }
            }
        };
        RadioGroup.prototype.getSelectedIndex = function () {
            return this._curSeletedIdx;
        };
        return RadioGroup;
    }(eui.Component));
    client.RadioGroup = RadioGroup;
})(client || (client = {}));
