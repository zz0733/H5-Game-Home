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
var client;
(function (client) {
    var BenefitLayer = /** @class */ (function (_super) {
        __extends(BenefitLayer, _super);
        function BenefitLayer(scene) {
            var _this = _super.call(this) || this;
            _this._datas = [];
            _this._bMoved = false;
            _this._scene = scene;
            return _this;
        }
        BenefitLayer.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.once(egret.Event.ADDED_TO_STAGE, this.onInitLayer, this);
            this.once(egret.Event.REMOVED_FROM_STAGE, this.onExit, this);
            //注册触摸
            this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegan, this);
            this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
            this.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
        };
        BenefitLayer.prototype.onInitLayer = function () {
            //加载皮肤 
            var componet = new eui.Component();
            this.addChild(componet);
            componet.skinName = skins.BenefitLayer;
            //按钮
            var bt = componet.getChildByName("bt_close");
            bt.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClick, this);
            //滑动组件 
            this._scroller = componet.getChildByName("scroller");
            //数据索引
            this._datas = [0, 1, 2, 4, 3];
            this.initBenefit(this._datas);
        };
        BenefitLayer.prototype.initBenefit = function (data) {
            var Group = this._scroller.getChildByName("Group");
            for (var i = 0; i < data.length; i++) {
                var bt = new eui.Button();
                var idx = data[i];
                bt.name = "benefit_" + i;
                bt.skinName = "resource/eui_skins/benefit/Benefit" + idx + ".exml";
                Group.addChild(bt);
                utils.setAnchorCenter(bt);
                bt.x = this._scroller.width / 2;
                bt.y = 60 + i * 120;
                bt.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClick, this);
            }
        };
        BenefitLayer.prototype.onButtonClick = function (e) {
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
                case "benefit_0":
                    {
                        if (this._bMoved == true) {
                            return;
                        }
                    }
                    break;
                case "benefit_1":
                    {
                        if (this._bMoved == true) {
                            return;
                        }
                    }
                    break;
                case "benefit_2":
                    {
                        if (this._bMoved == true) {
                            return;
                        }
                    }
                    break;
                case "benefit_3":
                    {
                        if (this._bMoved == true) {
                            return;
                        }
                    }
                    break;
                case "benefit_4":
                    {
                        if (this._bMoved == true) {
                            return;
                        }
                    }
                    break;
            }
        };
        BenefitLayer.prototype.onExit = function () {
            this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegan, this);
            this.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
            this.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
        };
        /** 触摸事件
        * onTouchBegan
        * onTouchMove
        * onTouchEnd
       */
        BenefitLayer.prototype.onTouchBegan = function (event) {
            //console.log("onTouch Began");
            this._bMoved = false;
        };
        BenefitLayer.prototype.onTouchMove = function (event) {
            //console.log("onTouch move");
            this._bMoved = true;
        };
        BenefitLayer.prototype.onTouchEnd = function (event) {
            //console.log("onTouch end");
        };
        return BenefitLayer;
    }(eui.UILayer));
    client.BenefitLayer = BenefitLayer;
})(client || (client = {}));
