/**
 * 排行榜
 */
namespace client {
    class RankCell extends eui.Component implements eui.IItemRenderer {

        // ------------- 接口必须实现数据 ----------------
        private _data: models.CellData;
        private bg: eui.Image;
        public set data(data: models.CellData) {
            this._data = data;
            this.skinName = skins.RankCell;
            this.updateView(this._data);
        }
        public get data(): models.CellData {
            return this._data;
        }

        public selected: boolean;
        public itemIndex: number;
        // ------------- 接口必须实现数据 ----------------
        private updateView(data: models.CellData) {
            this.bg.visible = (this.itemIndex % 2 == 0) ? true : false;
        }
    }

    export class RankLayer extends eui.UILayer {
        /**
         * 构造
         */
        private _scene: any;
        constructor(scene: any) {
            super();
            this._scene = scene;
        }
        createChildren() {
            super.createChildren();
            this.once(egret.Event.ADDED_TO_STAGE, this.onInitLayer, this);
            this.once(egret.Event.REMOVED_FROM_STAGE, this.onExit, this);
        }

        /**
         * 初始化
         */
        private _listTotal: models.ListView;

        public onInitLayer() {
            //加载皮肤 
            let componet = new eui.Component();
            this.addChild(componet);
            componet.skinName = skins.RankLayer;

            //总排行面板
            let panel_total = componet.getChildByName("RankTotal") as eui.Panel;

            //ListView
            this._listTotal = new models.ListView();
            panel_total.addChild(this._listTotal);
            this._listTotal.width = panel_total.width;
            this._listTotal.height = panel_total.height;
            this._listTotal.x = 0;
            this._listTotal.y = 0
            this._listTotal.initItemRenderer(RankCell);
            let datas: models.CellData[] = [];

            //数据源测试
            for (let i = 0; i < 10; i++) {
                let data = new models.CellData(this, { bg: "rank_bg_0_png", image: "rank_icon_0_png", nick: "Jack333", id: "ID:23240956", medal: "0" });
                datas.push(data)
            }

            this._listTotal.bindData(datas);

            //返回按钮
            var btn = componet.getChildByName("bt_close");
            btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClickEvent, this);
        }

        private onExit() {

        }

        private onButtonClickEvent(e: egret.Event) {
            const target = e.target as eui.Button;
            switch (target.name) {
                case "bt_close":
                    {
                        this._scene.onChangeView();
                    }
                    break;
            }
        }

    }

}