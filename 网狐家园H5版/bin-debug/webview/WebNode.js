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
var exp;
(function (exp) {
    /**
     * 显示到 egret 中的 DOM 元件
     */
    var WebNode = (function (_super) {
        __extends(WebNode, _super);
        function WebNode() {
            var _this = _super.call(this) || this;
            _this.domNode = new exp.DOMNode();
            _this.domNode.mapDisplayObject(_this);
            _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.addToStage, _this);
            _this.addEventListener(egret.Event.REMOVED_FROM_STAGE, _this.removeFromStage, _this);
            _this.$renderNode = new egret.sys.RenderNode();
            return _this;
        }
        /**
         * 绑定一个 DOM 元件
         * @element DOM 元件，不要修改此元件的 style 的位置、旋转、缩放、边框等属性
         */
        WebNode.prototype.bind = function (element) {
            this.domNode.bind(element);
        };
        /**
         * 解绑 DOM 元件
         */
        WebNode.prototype.unbind = function () {
            this.domNode.unbind();
        };
        WebNode.prototype.addToStage = function () {
            if (egret.Capabilities.runtimeType == egret.RuntimeType.WEB) {
                this.domNode.show();
                this.domNode.updatePosition();
                this.tempStage = this.stage;
                this.addEventListener(egret.Event.ENTER_FRAME, this.onResize, this);
            }
        };
        WebNode.prototype.removeFromStage = function () {
            this.removeEventListener(egret.Event.ENTER_FRAME, this.onResize, this);
            this.domNode.hide();
            this.tempStage = null;
        };
        WebNode.prototype.onResize = function () {
            if (this.domNode) {
                this.domNode.updatePosition();
            }
        };
        return WebNode;
    }(egret.DisplayObject));
    exp.WebNode = WebNode;
})(exp || (exp = {}));
