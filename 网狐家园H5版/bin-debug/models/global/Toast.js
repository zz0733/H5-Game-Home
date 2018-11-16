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
 * Toast提示
 */
var models;
(function (models) {
    var Toast = (function (_super) {
        __extends(Toast, _super);
        function Toast() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Toast.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.name = "Toast";
            this.once(egret.Event.ADDED_TO_STAGE, this.onInitLayer, this);
        };
        Toast.prototype.onInitLayer = function () {
            this.touchEnabled = false;
            var toast = utils.createBitmapByName("game_horn_bg_png");
            utils.setAnchorMidBottom(toast);
            toast.name = "toast";
            this.addChild(toast);
            toast.x = 667;
            toast.y = 680;
        };
        Toast.prototype.show = function (message, delayTime) {
            var _this = this;
            if (message.length) {
                var content = new eui.Label;
                content.text = message;
                //设置颜色等文本属性
                content.textColor = 0xFF0000;
                content.size = 22;
                content.lineSpacing = 24;
                content.textAlign = egret.HorizontalAlign.JUSTIFY;
                this.addChild(content);
                utils.setAnchorMidBottom(content);
                content.x = 667;
                content.y = 660;
                egret.Tween.get(this)
                    .wait(1000)
                    .to({ x: 0, y: 1400 }, delayTime ? delayTime : 500)
                    .call(function () {
                    managers.FrameManager.getInstance().m_MainStage.removeChild(_this);
                });
            }
        };
        return Toast;
    }(eui.UILayer));
    models.Toast = Toast;
})(models || (models = {}));
