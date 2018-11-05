/**
 * 选择组合 单选
 */

namespace client {
    export class RadioGroup extends eui.Component {
        /**
         * 构造
         */
        private _title: eui.Label;
        private _items: any[] = [];
        private _scene: any;
        private _showData: any;
        private _curSeletedIdx: number = -1;
        private _changeListener: any;
        /**
         * _showData {title:"",itemCount: 0,seletedIdx: 0,option:["xxx","xxx","xxx"...]}
         */
        constructor(scene, showData, changeListener?) {
            super();
            this._scene = scene;
            this._showData = showData;
            this.skinName = skins.RadioGroup;
            this._changeListener = changeListener;
            this.touchEnabled = false;

            this._title = this.getChildByName("title") as eui.Label;

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
                if (i == this._showData.seletedIdx) {
                    checkbox.selected = true;
                    this._curSeletedIdx = i;
                    if (null != this._changeListener) {
                        this._changeListener(this._curSeletedIdx);
                    }                  
                   
                }

                checkbox.addEventListener(egret.Event.CHANGE, this.onEventChange, this);

                //选项
                let option = this.getChildByName(`title${i + 1}`) as eui.Label;
                option.visible = true;
                option.text = this._showData.option[i];

                let map = { checkbox: checkbox, option: option, idx: i };
                this._items.push(map);

            }
        }

        private onEventChange(e: egret.Event) {
            let target = e.target as eui.CheckBox;
            for (let item of this._items) {
                if (item.checkbox == target) {
                    target.selected = true;
                    this._curSeletedIdx = item.idx;
                    if (null != this._changeListener) {
                        this._changeListener(this._curSeletedIdx);
                    }
                } else {
                    item.checkbox.selected = false;
                }
            }
        }

        private onResetView() {
            for (let item of this._items) {
                item.checkbox.selected = false;
            }
            this._curSeletedIdx = -1;
        }

        private setSelectedIndex(index: number,selected: boolean = true) {
            this.onResetView();
            let checkbox = this._items[index].checkbox as eui.CheckBox;
            if (checkbox) {
                checkbox.selected = selected;
                if (selected == true) {
                    this._curSeletedIdx = index;
                    if (null != this._changeListener) {
                        this._changeListener(this._curSeletedIdx);
                    }
                }
            }
        }

        private getSelectedIndex() {
            return this._curSeletedIdx
        }
    }
}