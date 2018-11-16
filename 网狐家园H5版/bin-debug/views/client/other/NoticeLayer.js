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
 * 弹窗公告
 */
var client;
(function (client) {
    //公告
    var NOTIFY_URL = "http://service.foxuc.com/GameNotice.aspx?StationID=" + ("" + df.STATION_ID) + "&TypeID=1&KindID=0";
    //常见问题
    var QUESTION_URL = "http://service.foxuc.com/GameNotice.aspx?StationID=" + ("" + df.STATION_ID) + "&TypeID=2&KindID=1";
    //比赛规则
    var MATCHRULE_URL = "http://service.foxuc.com/GameMatch.aspx?PlazaStation=" + ("" + df.STATION_ID) + "&TypeID=1&MatchID=";
    var NoticeLayer = (function (_super) {
        __extends(NoticeLayer, _super);
        function NoticeLayer(scene, noticetype, kindID) {
            var _this = _super.call(this) || this;
            _this._scene = scene;
            _this._mode = noticetype;
            return _this;
        }
        NoticeLayer.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.once(egret.Event.ADDED_TO_STAGE, this.onInitLayer, this);
            this.once(egret.Event.REMOVED_FROM_STAGE, this.onExit, this);
        };
        /**
         * 初始化
         */
        NoticeLayer.prototype.onInitLayer = function () {
            //加载皮肤 
            var componet = new eui.Component();
            this.addChild(componet);
            componet.skinName = skins.NoticeLayer;
            //返回按钮
            var panel = componet.getChildByName("panel_normal");
            var btn = panel.getChildByName("bt_close");
            btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClickEvent, this);
            var titlePanel = panel.getChildByName("panel_title");
            titlePanel.$children.forEach(function (child) {
                child.visible = false;
            });
            if (this._mode == df.MODE_NOTICE) {
                var title = titlePanel.getChildByName("title_notice");
                title.visible = true;
            }
            else if (this._mode == df.MODE_AGREE) {
                var title = titlePanel.getChildByName("title_agree");
                title.visible = true;
                var webNode = new exp.WebView();
                utils.setAnchorCenter(webNode);
                //webNode.src = "resource/assets/client/info/account_help.html?v=<?=$ver?>";
                webNode.src = "http://developer.egret.com";
                webNode.width = 400;
                webNode.height = 500;
                webNode.x = 200;
                webNode.y = 100;
                this.addChild(webNode);
            }
        };
        /**
         * 按钮事件
         */
        NoticeLayer.prototype.onButtonClickEvent = function (e) {
            var target = e.target;
            if (target.name = "bt_close") {
                this._scene.removeChild(this);
            }
        };
        /**
         * 移除舞台
         */
        NoticeLayer.prototype.onExit = function () {
        };
        return NoticeLayer;
    }(eui.UILayer));
    client.NoticeLayer = NoticeLayer;
})(client || (client = {}));
