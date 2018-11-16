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
 * 约战房间查找
 */
var client;
(function (client) {
    var NUMBER = 6;
    var BattleFindLayer = (function (_super) {
        __extends(BattleFindLayer, _super);
        function BattleFindLayer(scene) {
            var _this = _super.call(this) || this;
            _this._numbers = [];
            _this._idx = 0;
            _this._scene = scene;
            return _this;
        }
        BattleFindLayer.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.once(egret.Event.ADDED_TO_STAGE, this.onInitLayer, this);
            this.once(egret.Event.REMOVED_FROM_STAGE, this.onExit, this);
        };
        BattleFindLayer.prototype.onInitLayer = function () {
            //加载皮肤 
            var componet = new eui.Component();
            this.addChild(componet);
            componet.skinName = skins.BattleFindLayer;
            //按钮
            var bt = componet.getChildByName("bt_close");
            bt.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClick, this);
            //数字
            for (var i = 0; i < NUMBER; i++) {
                var labelAtlas = utils.LabelAtlas.createLabel("0", "battle_num_number_png", "0123456789", 46, 71);
                utils.setAnchorCenter(labelAtlas);
                this.addChild(labelAtlas);
                labelAtlas.visible = false;
                labelAtlas.x = 410 + i * 103;
                labelAtlas.y = 221;
                this._numbers.push(labelAtlas);
            }
            //按鈕
            for (var i = 0; i < 12; i++) {
                bt = componet.getChildByName("keybord" + i);
                bt.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClick, this);
                if (i < 9) {
                    var labelAtlas = utils.LabelAtlas.createLabel("" + (i + 1), "battle_num_keyboard_png", "0123456789", 28, 38);
                    utils.setAnchorCenter(labelAtlas);
                    this.addChild(labelAtlas);
                    labelAtlas.x = bt.x;
                    labelAtlas.y = bt.y;
                }
                if (10 == i) {
                    var labelAtlas = utils.LabelAtlas.createLabel("0", "battle_num_keyboard_png", "0123456789", 28, 38);
                    utils.setAnchorCenter(labelAtlas);
                    this.addChild(labelAtlas);
                    labelAtlas.x = bt.x;
                    labelAtlas.y = bt.y;
                }
            }
        };
        BattleFindLayer.prototype.onButtonClick = function (e) {
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
                case "keybord0":
                case "keybord1":
                case "keybord2":
                case "keybord3":
                case "keybord4":
                case "keybord5":
                case "keybord6":
                case "keybord7":
                case "keybord8":
                case "keybord10":
                    {
                        if (this._idx < NUMBER) {
                            this._numbers[this._idx].visible = true;
                            var number = Number(name.substr(7, name.length)) + 1;
                            if (number > 10)
                                number = 0;
                            this._numbers[this._idx].setText("" + number);
                            this._idx++;
                        }
                    }
                    break;
                case "keybord9":
                    {
                        if (this._idx - 1 >= 0) {
                            this._numbers[this._idx - 1].visible = false;
                            this._idx--;
                        }
                    }
                    break;
                case "keybord11":
                    {
                        if (this._idx < NUMBER)
                            return;
                        var str = "";
                        for (var i = 0; i < NUMBER; i++) {
                            str += this._numbers[i].getText();
                        }
                        //发送约战列表查询
                        managers.FrameManager.getInstance().showPopWait("查询中,请稍后");
                        this.onQueryTable(df.QUERY_KIND_NUMBER, Number(str));
                    }
                    break;
            }
        };
        BattleFindLayer.prototype.onQueryTable = function (querykind, queryid, gameid) {
            if (null == this._battleFrame) {
                this._battleFrame = new frame.BattleFrame(this);
            }
            this._battleFrame.onQueryTable(querykind, queryid, gameid);
            //设置约战代理
            if (null != managers.TcpServiceCtrl.getInstance().getGateWayService()) {
                managers.TcpServiceCtrl.getInstance().getGateWayService().setDelegate(this._battleFrame);
            }
        };
        /**约战服务关闭 */
        BattleFindLayer.prototype.onCloseBattleService = function () {
            if (null != managers.TcpServiceCtrl.getInstance().getGateWayService()) {
                managers.TcpServiceCtrl.getInstance().getGateWayService().closeService();
                managers.TcpServiceCtrl.getInstance().m_pGateWayCtrl = null;
            }
            this._battleFrame = null;
        };
        /**启动约战 */
        BattleFindLayer.prototype.onStartBattleGame = function () {
            managers.FrameManager.getInstance().showToast("游戏接口未实现");
        };
        BattleFindLayer.prototype.onExit = function () {
            this.onCloseBattleService();
        };
        return BattleFindLayer;
    }(eui.UILayer));
    client.BattleFindLayer = BattleFindLayer;
})(client || (client = {}));
