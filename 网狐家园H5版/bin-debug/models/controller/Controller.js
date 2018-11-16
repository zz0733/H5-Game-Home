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
 * 视图基类
 */
var models;
(function (models) {
    /**
     * 视图遍历 先入后出
     */
    var ViewWalker = (function () {
        /**
         * 构造
         */
        function ViewWalker() {
            this._viewStack = [];
        }
        //压栈
        ViewWalker.prototype.push = function (node, mode, animate, endPosX, endPosY) {
            if (mode === void 0) { mode = 0 /* LOGON */; }
            //校验重复
            egret.assert(node != this._rootNode);
            egret.assert(node != this._curNode);
            if ((node == this._rootNode) || (node == this._curNode)) {
                return;
            }
            //隐藏当前层
            if ((this._curNode) && (this._curNode != this._rootNode)) {
                var nodeMap = this._viewStack[(this._viewStack.length - 1)];
                var beginPos = nodeMap.begPos;
                this._curNode.x = beginPos.x;
                this._curNode.y = beginPos.y;
                if (mode == 0 /* LOGON */) {
                    this._curNode.visible = false;
                }
                else {
                    egret.Tween.get(this._curNode)
                        .to({ x: -this._curNode.width, y: 0 }, 200);
                }
                if (this._curNode.viewWillDisappear) {
                    this._curNode.viewWillDisappear();
                }
            }
            //保存状态
            var newNodeMap = { node: node, begPos: { x: node.x, y: node.y }, endPos: { x: endPosX ? endPosX : 0, y: endPosY ? endPosY : 0 } };
            //切入目标层
            this._rootNode.addChild(node);
            this._curNode = node;
            if (animate) {
                egret.Tween.get(node)
                    .call(function () {
                    if (node.transAnibegin) {
                        node.transAnibegin();
                    }
                })
                    .to({ x: endPosX ? endPosX : 0, y: endPosY ? endPosY : 0 }, 200)
                    .call(function () {
                    if (node.transFinish) {
                        node.transFinish();
                    }
                });
            }
            else {
                this._curNode.x = 0;
                this._curNode.y = 0;
            }
            //加入栈
            this._viewStack.push(newNodeMap);
        };
        //出栈 
        ViewWalker.prototype.pop = function (mode) {
            var _this = this;
            if (mode === void 0) { mode = 0 /* LOGON */; }
            if (this._viewStack.length < 2) {
                return;
            }
            //移除最上层
            var map = this._viewStack.pop();
            var node = map.node;
            if (mode == 0 /* LOGON */) {
                this._rootNode.removeChild(node);
            }
            else {
                egret.Tween.get(node)
                    .to({ x: -node.width, y: 0 }, 200)
                    .call(function () {
                    _this._rootNode.removeChild(node);
                });
            }
            //弹出层
            map = this._viewStack[this._viewStack.length - 1];
            var pos = map.endPos;
            var node = map.node;
            node.visible = true;
            this._curNode = node;
            egret.Tween.get(node)
                .call(function () {
                if (node.transAnibegin) {
                    node.transAnibegin();
                }
            })
                .to({ x: pos.x, y: pos.y }, 200)
                .call(function () {
                if (node.transFinish) {
                    node.transFinish();
                }
            });
        };
        //栈重置
        ViewWalker.prototype.reSet = function () {
            this._viewStack = [];
        };
        //设置根节点
        ViewWalker.prototype.setRoot = function (node) {
            this._rootNode = node;
        };
        //设置当前节点
        ViewWalker.prototype.setCurNode = function (node) {
            this._curNode = node;
        };
        return ViewWalker;
    }());
    var Controller = (function (_super) {
        __extends(Controller, _super);
        /**
        * 构造
        */
        function Controller() {
            var _this = _super.call(this) || this;
            _this._viewFrame = null;
            _this.createTreeWalker();
            return _this;
        }
        /**
         * 视图遍历
         */
        Controller.prototype.createTreeWalker = function () {
            return this._viewWalker = new ViewWalker();
        };
        /**
         * 设置根节点
        */
        Controller.prototype.setRoot = function (root) {
            this._viewWalker.setRoot(root);
            this._rootLayer = root;
        };
        Controller.prototype.setCurNode = function (node) {
            this._viewWalker.setCurNode(node);
        };
        Controller.prototype.getViewByName = function (name) {
            return this._rootLayer.getChildByName(name);
        };
        Controller.prototype.getRootLayer = function () {
            return this._rootLayer;
        };
        /**
         * 压栈
         */
        Controller.prototype.showView = function (node, mode, animate, endPosX, endPosY) {
            if (mode === void 0) { mode = 0 /* LOGON */; }
            this._viewWalker.push(node, mode, animate, endPosX, endPosY);
        };
        /**
         * 出栈
         */
        Controller.prototype.popView = function (mode) {
            if (mode === void 0) { mode = 0 /* LOGON */; }
            this._viewWalker.pop(mode);
        };
        /**
         * 弹窗
         */
        Controller.prototype.addWindow = function (view) {
            egret.assert(null != this._rootLayer);
            if (null == this._rootLayer) {
                return;
            }
            this._rootLayer.addChild(view);
        };
        return Controller;
    }(egret.DisplayObjectContainer));
    models.Controller = Controller;
})(models || (models = {}));
