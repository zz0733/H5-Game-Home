/*管理器 单例
1.0 SceneManager    切换场景
2.0 PopuManager     弹窗管理
3.0 EventManager    事件管理
4.0 GlobalData      全局数据
*/
var managers;
(function (managers) {
    var FrameManager = /** @class */ (function () {
        function FrameManager() {
            /**
             * 自动登录
             */
            this.m_IsAuto = true;
        }
        /**
        *获取实例
        */
        FrameManager.getInstance = function () {
            if (this.m_sInstance == null) {
                this.m_sInstance = new FrameManager();
                this.m_sInstance.onInit();
            }
            return this.m_sInstance;
        };
        /**
        * 初始化
        */
        FrameManager.prototype.onInit = function () {
            managers.TcpServiceCtrl.getInstance().init();
            managers.TimerCtrl.getInstance().init();
            this.m_Localization = new cache.localization();
        };
        /**
        *游戏刷新
        */
        FrameManager.prototype.onUpdate = function () {
            managers.TcpServiceCtrl.getInstance().onUpdate();
        };
        /**
        *当前视图
        */
        FrameManager.prototype.setRunningController = function (controller) {
            this.m_RunningController = null;
            this.m_RunningController = controller;
        };
        FrameManager.prototype.getRunningController = function () {
            return this.m_RunningController ? this.m_RunningController : null;
        };
        FrameManager.prototype.isGameController = function () {
            return this.m_RunningController.name == "GameController" ? true : false;
        };
        /**场景切换
        *@param newController 目标视图
        *@param animation     切换过渡
        */
        FrameManager.prototype.replaceScene = function (newController, animation) {
            var _this = this;
            var curController = this.m_RunningController;
            egret.assert(curController != null);
            //egret.assert(curController.name != newController.name)
            //校验是否同一场景
            if (curController.name == newController.name)
                return;
            //保存当前视图
            this.m_RunningController = null;
            this.m_RunningController = newController;
            if (animation) {
                //添加新视图
                newController.alpha = 0;
                this.m_MainStage.addChild(newController);
                //旧视图渐变成透明
                var tw = egret.Tween.get(newController);
                var tw1 = egret.Tween.get(curController);
                tw1.call(function () { curController.viewWillDisappear(animation); }, this);
                tw1.to({ "alpha": 0 }, 1000, egret.Ease.backOut);
                //新视图渐变出现
                tw.call(function () { newController.viewWillAppear(animation); }, this);
                tw.to({ "alpha": 1.0 }, 1000, egret.Ease.backIn);
                tw.call(function () { newController.viewDidAppear(animation); }, this);
                //移除旧视图,回收资源,移除事件注册等
                tw1.call(function () { curController.viewDidDisappear(animation); }, this);
                tw1.call(function () {
                    curController.dealloc();
                    _this.m_MainStage.removeChild(curController);
                    curController = null;
                }, this);
            }
            else {
                //添加新视图
                newController.viewWillAppear(animation);
                this.m_MainStage.addChild(newController);
                newController.viewDidAppear(animation);
                //移除旧视图
                curController.viewWillDisappear(animation);
                curController.viewDidDisappear(animation);
                curController.dealloc();
                this.m_MainStage.removeChild(curController);
            }
        };
        /**
         * 对话框
         */
        FrameManager.prototype.showDailog = function (style, content, okCallfun, cancellCallfun) {
            if (null != this.m_MainStage.getChildByName("Dialog")) {
                var dialog_1 = this.m_MainStage.getChildByName("Dialog");
                this.m_MainStage.removeChild(dialog_1);
            }
            var dialog = new models.Dialog(style, content, okCallfun, cancellCallfun);
            this.m_MainStage.addChildAt(dialog, df.TOP_ZORDER);
        };
        /**
         * 显示Toast
         */
        FrameManager.prototype.showToast = function (message, delaytime) {
            var toast = new models.Toast();
            this.m_MainStage.addChildAt(toast, df.TOP_ZORDER);
            toast.show(message, delaytime);
        };
        /**
         * 等待
         */
        FrameManager.prototype.showPopWait = function (content, timeout, isClose, timeOutHandler, closeHandler) {
            if (timeout === void 0) { timeout = df.Default_Time_Out; }
            if (isClose === void 0) { isClose = false; }
            //检测重复
            if (null != this.m_MainStage.getChildByName("PopWait")) {
                return;
            }
            var popWait = new models.PopWait(content, timeout, isClose, timeOutHandler, closeHandler);
            this.m_MainStage.addChildAt(popWait, df.TOP_ZORDER);
        };
        /**
         * 移除等待
         */
        FrameManager.prototype.dismissPopWait = function () {
            var popWait = this.m_MainStage.getChildByName("PopWait");
            if (null == popWait) {
                return;
            }
            this.m_MainStage.removeChild(popWait);
        };
        return FrameManager;
    }());
    managers.FrameManager = FrameManager;
})(managers || (managers = {}));
