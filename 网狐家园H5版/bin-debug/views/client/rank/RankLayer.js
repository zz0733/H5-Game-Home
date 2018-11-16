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
 * 排行榜
 */
var client;
(function (client) {
    var RankCell = (function (_super) {
        __extends(RankCell, _super);
        function RankCell() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(RankCell.prototype, "data", {
            get: function () {
                return this._data;
            },
            set: function (data) {
                this._data = data;
                this.skinName = skins.RankCell;
                this.updateView(this._data);
            },
            enumerable: true,
            configurable: true
        });
        // ------------- 接口必须实现数据 ----------------
        RankCell.prototype.updateView = function (data) {
            this.bg.visible = (this.itemIndex % 2 == 0) ? true : false;
        };
        return RankCell;
    }(eui.Component));
    var RankLayer = (function (_super) {
        __extends(RankLayer, _super);
        function RankLayer(scene) {
            var _this = _super.call(this) || this;
            _this._scene = scene;
            return _this;
        }
        RankLayer.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.once(egret.Event.ADDED_TO_STAGE, this.onInitLayer, this);
            this.once(egret.Event.REMOVED_FROM_STAGE, this.onExit, this);
        };
        RankLayer.prototype.onInitLayer = function () {
            //加载皮肤 
            var componet = new eui.Component();
            this.addChild(componet);
            componet.skinName = skins.RankLayer;
            //总排行面板
            var panel_total = componet.getChildByName("RankTotal");
            //ListView
            this._listTotal = new models.ListView();
            panel_total.addChild(this._listTotal);
            this._listTotal.width = panel_total.width;
            this._listTotal.height = panel_total.height;
            this._listTotal.x = 0;
            this._listTotal.y = 0;
            this._listTotal.initItemRenderer(RankCell);
            var datas = [];
            //数据源测试
            for (var i = 0; i < 10; i++) {
                var data = new models.CellData(this, { bg: "rank_bg_0_png", image: "rank_icon_0_png", nick: "Jack333", id: "ID:23240956", medal: "0" });
                datas.push(data);
            }
            this._listTotal.bindData(datas);
            //返回按钮
            var btn = componet.getChildByName("bt_close");
            btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClickEvent, this);
        };
        RankLayer.prototype.onExit = function () {
        };
        RankLayer.prototype.onButtonClickEvent = function (e) {
            var target = e.target;
            switch (target.name) {
                case "bt_close":
                    {
                        this._scene.onChangeView();
                    }
                    break;
            }
        };
        return RankLayer;
    }(eui.UILayer));
    client.RankLayer = RankLayer;
})(client || (client = {}));
