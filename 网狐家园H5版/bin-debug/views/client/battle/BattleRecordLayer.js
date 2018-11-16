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
 * 约战记录
 */
var client;
(function (client) {
    var BattleRecordLayer = (function (_super) {
        __extends(BattleRecordLayer, _super);
        function BattleRecordLayer(scene) {
            var _this = _super.call(this) || this;
            _this._scene = scene;
            return _this;
        }
        BattleRecordLayer.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.once(egret.Event.ADDED_TO_STAGE, this.onInitLayer, this);
            this.once(egret.Event.REMOVED_FROM_STAGE, this.onExit, this);
        };
        BattleRecordLayer.prototype.onInitLayer = function () {
            //加载皮肤 
            var componet = new eui.Component();
            this.addChild(componet);
            componet.skinName = skins.BattleRecordLayer;
            //按钮
            var bt = componet.getChildByName("bt_close");
            bt.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClick, this);
            bt = componet.getChildByName("checkVedio");
            bt.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClick, this);
        };
        BattleRecordLayer.prototype.onButtonClick = function (e) {
            var button = e.target;
            var name = button.name;
            egret.Tween.get(button)
                .to({ scaleX: 1.1, scaleY: 1.1 }, 100)
                .to({ scaleX: 1.0, scaleY: 1.0 }, 100);
            switch (name) {
                case "bt_close":
                    {
                        this._scene.onChangeView();
                    }
                    break;
            }
        };
        BattleRecordLayer.prototype.onExit = function () {
        };
        return BattleRecordLayer;
    }(eui.UILayer));
    client.BattleRecordLayer = BattleRecordLayer;
})(client || (client = {}));
