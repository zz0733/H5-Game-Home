/**
 * 选择组合 多选
 */

namespace client {
    export class CheckBoxGroup extends eui.Component {
        /**
         * 构造
         */
        private _title: eui.Label;
        private _scene: any;
        private _items: any[] = [];;
        private _showData: any;
        private _seletedValues: number[] = [];
        private _changeListener: any;
        /**
         * showData {title:"",itemCount: 0,seletedValue: 0,option:["xxx","xxx","xxx"...]}
         */
        constructor(scene, showData, changeHandler) {
            super();
            this._scene = scene;
            this._showData = showData
            this.skinName = skins.RadioGroup;

            // 0未选 1选中
            this._seletedValues = showData.selectedValue;

            this.onInitGroup();

        }

        private onInitGroup() {

            //标题
            this._title.text = this._showData.title;

            //选项
            for (let i = 0; i < this._showData.itemCount; i++) {

                //checkbox
                let checkbox = this.getChildByName(`checkbox_${i + 1}`) as eui.CheckBox;
                checkbox.visible = true;

                if (1 == this._seletedValues[i]) {
                    checkbox.selected = true;

                } else {
                    checkbox.selected = false;
                }

                this._items.push(checkbox);

                checkbox.addEventListener(egret.Event.CHANGE, this.onEventChange, this);

                //选项
                let option = this.getChildByName(`title${i + 1}`) as eui.Label;
                option.visible = true;
                option.text = this._showData.option[i];
            }
        }

        private onEventChange(e: egret.Event) {
            //checkbox_
            let target = e.target as eui.CheckBox;
            const idx = Number(target.name.substr(9, target.name.length)) - 1;
            this._seletedValues[idx] = (target.selected == true) ? 1 : 0;

            if (null != this._changeListener) {
                this._changeListener(idx);
            }
        }

        private onResetView() {
            for (let item of this._items) {
                item.selected = false;
            }

            for (let i = 0; i < this._seletedValues.length; i++) {
                this._seletedValues[i] = -1;
            }
        }

        private setSelectedIndex(index: number,selected: boolean) {
            let checkbox = this._items[index];
            if (checkbox) {
                checkbox.selected = true;
                this._seletedValues[index] = 1;
            }
        }

        private getSelectValue() {
            return this._seletedValues;
        }
    }
}