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
 * 对话框
 */
var models;
(function (models) {
    var Dialog = (function (_super) {
        __extends(Dialog, _super);
        function Dialog(style, content, okFunc, canCellFunc) {
            var _this = _super.call(this) || this;
            _this.m_eMode = 0 /* OK_ONLY */;
            _this.m_OkFunc = null;
            _this.m_CancellFunc = null;
            _this.m_Content = "";
            _this.initDialog(style, content, okFunc, canCellFunc);
            return _this;
        }
        Dialog.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.name = "Dialog";
            this.once(egret.Event.ADDED_TO_STAGE, this.onInitLayer, this);
            this.once(egret.Event.REMOVED_FROM_STAGE, this.onExit, this);
        };
        Dialog.prototype.onInitLayer = function () {
            var componet = new eui.Component();
            this.addChild(componet);
            componet.skinName = skins.Dialog;
            //内容
            var content = componet.getChildByName("text");
            content.text = this.m_Content;
            //按钮
            var agree = componet.getChildByName("agree");
            agree.addEventListener(egret.TouchEvent.TOUCH_END, this.onButtonClick, this);
            var cancell = componet.getChildByName("cancell");
            cancell.addEventListener(egret.TouchEvent.TOUCH_END, this.onButtonClick, this);
            if (this.m_eMode == 0 /* OK_ONLY */) {
                utils.setAnchorCenter(agree);
                agree.x = this.width / 2;
                cancell.visible = false;
            }
        };
        Dialog.prototype.initDialog = function (style, content, okFunc, canCellFunc) {
            this.m_eMode = style;
            this.m_OkFunc = okFunc;
            this.m_CancellFunc = canCellFunc ? canCellFunc : null;
            this.m_Content = content;
        };
        Dialog.prototype.onButtonClick = function (e) {
            var target = e.target;
            switch (target.name) {
                case "agree":
                    {
                        this.onSure();
                    }
                    break;
                case "cancell":
                    {
                        this.onCancell();
                    }
                    break;
            }
        };
        /**
        *IDialog
        */
        Dialog.prototype.onSure = function () {
            if (null != this.m_OkFunc) {
                this.m_OkFunc();
            }
            this.parent.removeChild(this);
        };
        /**
        *IDialog
        */
        Dialog.prototype.onCancell = function () {
            if (null != this.m_CancellFunc) {
                this.m_CancellFunc();
            }
            this.parent.removeChild(this);
        };
        Dialog.prototype.onExit = function (e) {
        };
        return Dialog;
    }(eui.UILayer));
    models.Dialog = Dialog;
})(models || (models = {}));
