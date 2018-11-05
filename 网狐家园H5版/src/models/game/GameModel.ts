/**
 * 游戏公用父类 
 */
namespace models {
    export class GameModel extends eui.UILayer {
        public _gameFrame: frame.GameFrame;//游戏框架
        public _gameviewLayer: any;//主游戏视图？
        public _bChangeDesk: boolean = false;
        public _bMatchDesk: boolean = false;
        constructor() {
            super();
            this.once(egret.Event.REMOVED_FROM_STAGE, this.onExit, this);//移除舞台时候触发事件
            this.onInitEngine();

            //倒计时定时器
            managers.TimerCtrl.getInstance().createTimer(this,1000,0,this.onClockUpdateEvent,"clock");

            //帧率刷新
            managers.TimerCtrl.getInstance().createTimer(this,1000/60,0,this.onUpdate,"update");

            //查询用户
            this._gameFrame.queryUserInfo(this._gameFrame.getTableID(),df.INVALID_CHAIR);
        }

        /**
         * 初始化
         * 各游戏子类覆盖此方法
         */
        onInitEngine() {
            this._gameFrame = managers.TcpServiceCtrl.getInstance().getDelegate();
            this._bChangeDesk = false;
            this._bMatchDesk = false;
        }

        /**
         * 重置游戏
         * 各游戏子类覆盖此方法
         */
        onResetEngine() {
            this._bChangeDesk = false;
            this._bMatchDesk = false;
        }

        /**倒计时刷新
         * 各游戏子类覆盖此方法
         */
        public onClockUpdateEvent() {

        }

        /**倒计时事件
         *  各游戏子类覆盖此方法
         */
        public onClockEvent(viewId: number, clockId: number) {

        }

        /**帧率刷新 
         * 各游戏子类覆盖此方法
         */
        public onUpdate() {

        }

        /**游戏人数 
         * 各游戏子类覆盖此方法
         */
        public gamePlayerCount() {
            return 0;
        }

    
        /**获取玩家自己 */
        public getMeUserItem() {
            if (null != this._gameFrame) {
                return this._gameFrame.getMeUserItem();
            }

            return null;
        }
        
        /**获取座位号 */
        public getMeChair() {
            if (null != this.getMeUserItem()) {
                return this.getMeUserItem().wChairID;
            }
            return df.INVALID_CHAIR;
        }
        /**转换玩家视图
         * 返回索引
         * 定义自己索引0
         * 特殊视图需子类重写此方法
         *  */
        public switchViewChairID(chairID: number) {
            if (chairID < 0 || chairID >= this.gamePlayerCount())
                return;

            const myChair = this._gameFrame.getChairID();
            let userIndex: number = -1;
            const playerCount = this.gamePlayerCount();
            userIndex = ((playerCount - this._gameFrame.getChairID()) + chairID) % playerCount;
            return userIndex;
        }

        /**进入桌子 */
        public onEnterTable() {
            if (this._bChangeDesk) {
                //变量重置
                this._bChangeDesk = false;
                this._bMatchDesk = false;

                //消息派发
                managers.TcpServiceCtrl.getInstance()._isAllowDispatch = true;

                //查询用户
                this._gameFrame.queryUserInfo(this._gameFrame.getTableID(),df.INVALID_CHAIR);

                //清空界面
                if (null != this._gameviewLayer && this._gameviewLayer.onRestGameView) {
                    this._gameviewLayer.stopAllAction();
                    this._gameviewLayer.onRestGameView();
                }
            }
        }

        /**退出当前桌子 */
        public onExitTable() {
            if (null != this._gameFrame && this._gameFrame.isMatchMode()) {
                return true;
            }

            if (this._bChangeDesk) {
                //清理数据
                this.onResetEngine();
                if (null != this._gameviewLayer && this._gameviewLayer.onRestGameView) {
                    this._gameviewLayer.stopAllAction();
                    this._gameviewLayer.onRestGameView();
                    return true  
                }
            }

            return false;
        }
   
        /**离开游戏*/
        public onExitGame(szReason?: string) {
            //判断用户状态
            const myself = this._gameFrame.getMeUserItem();
            this._gameFrame.onStandUp(myself.cbUserStatus >= df.US_PLAYING ? true : false);
            
           if (null != szReason && szReason.length > 0) {
               managers.FrameManager.getInstance().showToast(szReason);
           }
        }

        public onExit() {
            //业务代理置空
            if (null != this._gameFrame) {
                this._gameFrame.setDelegate(null);
                this._gameFrame = null;
            }
            //关闭定时器
            managers.TimerCtrl.getInstance().killTimer(this,"clock");
            managers.TimerCtrl.getInstance().killTimer(this,"update");

            //关闭游戏socket服务
            managers.TcpServiceCtrl.getInstance().closeService();
        }
    }
}