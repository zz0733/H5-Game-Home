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
var models;
(function (models) {
    /**
     * 滑动列表
     */
    var CellData = (function () {
        function CellData(target, datas) {
            this.target = target;
            this.datas = datas;
        }
        return CellData;
    }());
    models.CellData = CellData;
    var ListView = (function (_super) {
        __extends(ListView, _super);
        function ListView() {
            var _this = _super.call(this) || this;
            _this.skinName = skins.CommonListView;
            _this.viewport = _this.dataList;
            return _this;
        }
        /**
         * 通过SkinName 初始化item皮肤
         * @param itemSkin item皮肤
         */
        ListView.prototype.initItemSkin = function (itemSkin) {
            this.dataList.itemRendererSkinName = itemSkin;
        };
        /**
          *  通过itemRenderer 初始化item皮肤
          *  @param itemRenderer 所有item都要继承 eui.ItemRenderer
          */
        ListView.prototype.initItemRenderer = function (itemRenderer) {
            this.dataList.itemRenderer = itemRenderer;
        };
        /** 进行数据绑定 */
        ListView.prototype.bindData = function (data) {
            var arrCollection = new eui.ArrayCollection(data);
            this.dataList.dataProvider = arrCollection;
        };
        return ListView;
    }(eui.Scroller));
    models.ListView = ListView;
})(models || (models = {}));
