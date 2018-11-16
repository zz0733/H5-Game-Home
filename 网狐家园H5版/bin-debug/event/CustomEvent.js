/**
 * customEvent 自定义事件
 */
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
var customEvent;
(function (customEvent) {
    var CustomEvent = (function (_super) {
        __extends(CustomEvent, _super);
        /**
         * 构造方法
         */
        function CustomEvent(type, bubbles, cancelable, data) {
            return _super.call(this, type, bubbles, cancelable, data) || this;
        }
        /**
        * 进入后台
        */
        CustomEvent.EVENT_ENTER_BACKGROUND = "enterBackGround";
        /**
        * 进入前台
        */
        CustomEvent.EVENT_BECOME_ACTIVE = "becomeActive";
        /**
         * 验证成功
         */
        CustomEvent.EVENT_VALIDATE_SUCCESS = "validateSuccess";
        /**
         * 连接完成
         */
        CustomEvent.EVENT_CONNECT_COMPLETE = "connectComplete";
        /**
         * 消息分发
         */
        CustomEvent.EVENT_MESSAGE_DISPATCH = "messageDispatch";
        /**
         * 连接失败
         */
        CustomEvent.EVENT_CONNECT_FAIlURE = "connectFailure";
        /**
         * 大厅刷新
         */
        CustomEvent.EVENT_PLAZA_REFRESH = "plazaFresh";
        /**
         * 房间刷新
         */
        CustomEvent.EVENT_ROOM_REFRESH = "roomRefresh";
        /**
         * 商城刷新
         */
        CustomEvent.EVENT_SHOP_REFRESH = "shopRefresh";
        /**
         * 约战个人信息刷新
         */
        CustomEvent.EVENT_BATTLE_INFO_REFRESH = "battleInfoRefresh";
        /**
         * 约战消耗刷新
         */
        CustomEvent.EVENT_BATTLE_REFRESH = "battleFresh";
        /**
         * 用戶进入
         */
        CustomEvent.EVENT_USER_ENTER = "userEnter";
        /**
         * 用户状态
         */
        CustomEvent.EVENT_USER_STATUS = "userStatus";
        return CustomEvent;
    }(egret.Event));
    customEvent.CustomEvent = CustomEvent;
})(customEvent || (customEvent = {}));
