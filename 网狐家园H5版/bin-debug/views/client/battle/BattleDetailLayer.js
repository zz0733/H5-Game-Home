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
 * 约战详情
 */
var client;
(function (client) {
    var BattleDetailLayer = (function (_super) {
        __extends(BattleDetailLayer, _super);
        function BattleDetailLayer(scene, param) {
            var _this = _super.call(this) || this;
            _this._scene = scene;
            _this._params = param;
            return _this;
        }
        BattleDetailLayer.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.once(egret.Event.ADDED_TO_STAGE, this.onInitLayer, this);
            this.once(egret.Event.REMOVED_FROM_STAGE, this.onExit, this);
        };
        BattleDetailLayer.prototype.onInitLayer = function () {
            //加载皮肤 
            var componet = new eui.Component();
            this.addChild(componet);
            componet.skinName = skins.BattleDetailLayer;
            //房间信息
            this.onInitBattleInfo(componet);
            //按钮
            var bt = componet.getChildByName("bt_close");
            bt.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClick, this);
            this.touchEnabled = true;
        };
        /**约战信息 */
        BattleDetailLayer.prototype.onInitBattleInfo = function (componet) {
            //房间号
            var iteminfo = this._params.info;
            var roomNumber = componet.getChildByName("roomNumber");
            roomNumber.text = "" + iteminfo.dwMappedNum;
            //游戏类型
            var gamename = managers.TcpServiceCtrl.getInstance().getGameListInfo().getGameName(iteminfo.wKindID);
            var gameKind = componet.getChildByName("KindName");
            gameKind.text = gamename;
            //底分
            var cellScore = componet.getChildByName("CellScore");
            cellScore.text = "" + iteminfo.lBaseScore + "分";
            //结算模式
            var settleKind = componet.getChildByName("SettleKind");
            if (iteminfo.cbSettleKind != df.SETTLE_KIND_NONE) {
                if (iteminfo.cbSettleKind == df.SETTLE_KIND_TIME) {
                    settleKind.text = "" + Math.floor(iteminfo.dwPlayTime / 60) + "分钟";
                }
                else if (iteminfo.cbSettleKind == df.SETTLE_KIND_COUNT) {
                    settleKind.text = "" + iteminfo.wPlayCount + "局";
                }
            }
            //创建时间
            var date = new Date(iteminfo.dwCreateTime * 1000);
            var dataStr = date.toLocaleDateString().replace(/\//g, "/") + " " + date.toTimeString().substr(0, 8);
            var createTime = componet.getChildByName("Time");
            createTime.text = dataStr;
            //解散按钮
            var bt = componet.getChildByName("dissmiss");
            bt.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClick, this);
            //开始游戏
            bt = componet.getChildByName("start");
            bt.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClick, this);
            //分享按钮
            bt = componet.getChildByName("share");
            bt.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClick, this);
        };
        /**切入 */
        BattleDetailLayer.prototype.transIn = function () {
            egret.Tween.get(this)
                .to({ x: 0, y: 0 }, 200);
        };
        /**切出 */
        BattleDetailLayer.prototype.transOut = function () {
            var _this = this;
            egret.Tween.get(this)
                .to({ x: 0, y: -this.height }, 200)
                .call(function () {
                _this._scene.removeChild(_this);
            });
        };
        /**
         * 按钮事件
         */
        BattleDetailLayer.prototype.onButtonClick = function (e) {
            var button = e.target;
            var name = button.name;
            egret.Tween.get(button)
                .to({ scaleX: 1.1, scaleY: 1.1 }, 100)
                .to({ scaleX: 1.0, scaleY: 1.0 }, 100);
            switch (name) {
                case "bt_close":
                    {
                        this.transOut();
                    }
                    break;
                case "dissmiss":
                    {
                        var iteminfo = this._params.info;
                        this._scene.onDismissTable(iteminfo.wKindID, iteminfo.dwMappedNum);
                    }
                    break;
                case "start":
                    {
                        managers.FrameManager.getInstance().showToast("游戏接口未实现");
                    }
                    break;
                case "share":
                    {
                        var controller_1 = managers.FrameManager.getInstance().getRunningController();
                        var sharelayer = new client.ShareLayer(controller_1.getRootLayer(), 0.4);
                        controller_1.addWindow(sharelayer);
                    }
                    break;
            }
        };
        BattleDetailLayer.prototype.onExit = function () {
        };
        return BattleDetailLayer;
    }(eui.UILayer));
    client.BattleDetailLayer = BattleDetailLayer;
})(client || (client = {}));
