/**
 * 跑得快
 */
namespace game {
    export namespace runfast {
        /**
         * 游戏引擎
         * 游戏协议
         * 场景消息
         * 用户服务
         */
        export class GameClientEngine extends models.GameModel implements df.IGameMessage, df.IUserService {

            /**
             * 构造
             */
            constructor(engine: any) {
                super();
            }

            //动作队列


            protected createChildren(): void {
                super.createChildren();

                this.name = "GameClientEngine";

                this.once(egret.Event.ADDED_TO_STAGE, this.onInitLayer, this);
                this.once(egret.Event.REMOVED_FROM_STAGE, this.onExit, this);

                //设置业务代理
                this._gameFrame.setDelegate(this);

                //注册触摸
                this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegan, this);
                this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
                this.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);

                //注册通知
                this.addEventListener(customEvent.CustomEvent.EVENT_USER_ENTER, this.onUserEnter, this);
                this.addEventListener(customEvent.CustomEvent.EVENT_USER_STATUS, this.onUserStatus, this);
            }

            /**初始化 */
            private onInitLayer(): void {
                this._gameviewLayer = new GameViewLayer(this);
                this.addChild(this._gameviewLayer);
            }
            /**变量初始化 */
            onInitEngine() {
                super.onInitEngine();


            }

            /**变量重置*/
            onResetEngine() {

            }

            /**
             * 游戏层刷新
             */
            onUpdate() {
                this._gameviewLayer.update();
            }
            /**游戏人数 */
            gamePlayerCount() {
                return cmd.runfast.GAME_PLAYER;
            }

            /**
             * 视图转换
             * 玩家逻辑索引
             */
            public switchViewChairID(chairID: number) {
                if (chairID == this.getMeChair()) {
                    return cmd.runfast.MY_VIEW;
                } else if (chairID > this.getMeChair()) {
                    if (chairID == (this.getMeChair() + 1)) {
                        return cmd.runfast.RIGHT_VIEW;
                    } else if (chairID == (this.getMeChair() + 2)) {
                        return cmd.runfast.TOP_VIEW;
                    }else if (chairID == (this.getMeChair() + 3)) {
                        return cmd.runfast.LEFT_VIEW;
                    }
                } else {
                    if ((chairID + 1) == this.getMeChair()) {
                        return cmd.runfast.LEFT_VIEW;
                    } else if ((chairID + 2) == this.getMeChair()) {
                        return cmd.runfast.TOP_VIEW;
                    } else if ((chairID + 3) == this.getMeChair()) {
                        return cmd.runfast.RIGHT_VIEW;
                    }
                }

                return df.INVALID_CHAIR;
            }

            /**倒计时事件 */
            public onClockUpdateEvent() {
                if (this._gameviewLayer && this._gameviewLayer.updateClockView) {
                    this._gameviewLayer.updateClockView();
                }
            }

            /**游戏状态 */
            public _cbGameStatus: number = 0;
            public getGameStatus() {
                return this._cbGameStatus;
            }

            /**用户进入 */
            onUserEnter(object: any): void {
                const data = object.data;
                let user = data.user as models.UserItem;

                if (null != this._gameviewLayer) {
                    this._gameviewLayer.onUpdataUser(user);
                }

            }

            /**用户状态 */
            onUserStatus(object: any): void {
                const data = object.data;
                let user = data.user as models.UserItem;
                let newstatus = data.newstatus;
                let oldstatus = data.oldstatus;

                if (null != this._gameviewLayer) {
                    this._gameviewLayer.onUpdataUser(user, newstatus, oldstatus)
                }
            }
            /**用户聊天 */
            onUserChat(object: any): void {

            }
            /**用户分数 */
            onUserScore(object: any): void {

            }
            /**游戏场景 */
            onGameScene(status: number, object: any): void {
                utils.LOG("GameClientEngine: 游戏场景");
                this._cbGameStatus = status;

                managers.FrameManager.getInstance().dismissPopWait();//移除等待界面

                switch (this._cbGameStatus) {
                    case cmd.runfast.GAME_SCENE_FREE:
                    {
                        this.onSceneFree(object);//进入游戏
                    }
                        break;
                    case cmd.runfast.GAME_SCENE_PLAY:
                    {
                        this.onScenePlaying(object); //断线重连
                    }
                        break;
                }


            }
            /**游戏协议 */
            onGameMessage(object: any): void {

                let msg = object as network.Message;
                switch (msg.wSubCmd) {
                    case cmd.runfast.SUB_S_GAME_START:
                        this.onSubGameStart(msg.cbBuffer);
                        break;
                    case cmd.runfast.SUB_S_OUT_CARD://出牌
                        break;
                    case cmd.runfast.SUB_S_PASS_CARD://
                        break;
                    case cmd.runfast.SUB_S_SHUT_CARD://
                        break;
                    case cmd.runfast.SUB_S_START_CARD://
                        break;
                    case cmd.runfast.SUB_S_GAME_END://
                        break;
                    case cmd.runfast.SUB_S_PHRASE://
                        break;
                    case cmd.runfast.SUB_S_TRUSTEE://
                        break;
                    case cmd.runfast.SUB_S_TOTAL_SCORE://
                        break;
                }

            }

            /**
         * 系统消息
         */
            onGameSystemMessage(buffer: any): void {

            }

            private onSubGameStart(buffer: utils.ByteArray) {
                let start = new cmd.runfast.CMD_S_GameStart();
                start.onInit(buffer);
                console.log("GameStart:", start);

                //服务器发送游戏开始需要的数据，开始玩家

                //开始显示
                if (this._gameviewLayer && this._gameviewLayer.showGameStart) {
                    this._gameviewLayer.showGameStart(start);
                }

                //玩家个人的数据都以及动画


            }

            /**空闲场景 */
            private onSceneFree(data: any) {
                // let a = "background: rgb(248, 177, 173); color: rgb(63, 172, 203)";
                // console.log("%c%o", a ,data);
                if (this._gameviewLayer && this._gameviewLayer.showSceneFree) {
                    this._gameviewLayer.showSceneFree(data);
                    // this._gameviewLayer.setRemaindNum(this._cbRemindCardCount);
                }
            }

            /**游戏场景 */
            private onScenePlaying(data: any) {

            }

            /**倒计时处理 */
            public onClockEvent(viewId: number, clockId: number) {

            }


            /** 触摸事件
            * onTouchBegan
            * onTouchMove
            * onTouchEnd
            */
            private onTouchBegan(event: egret.TouchEvent) {
                //console.log("onTouch Began");
                this._bMoved = false;
            }

            private _bMoved = false;
            private onTouchMove(event: egret.TouchEvent) {
                //console.log("onTouch move");
                this._bMoved = true;
            }

            private onTouchEnd(event: egret.TouchEvent) {
                //console.log("onTouch end");

            }

            /**返回大厅 */
            public onQueryExitGame() {
                //游戏状态判断
                const msg = this.getGameStatus() == cmd.sparrowsclm.GAME_SCENE_FREE ? "是否确定退出游戏？" : "游戏已经开始，退出将由憨憨机器人代打哦！\n 是否确定退出游戏？"

                managers.FrameManager.getInstance().showDailog(df.eDialogMode.OK_CANCELL, msg, () => {
                    managers.FrameManager.getInstance().showPopWait("", 3000);
                    this.onExitGame();
                });

            }

            /**移除舞台 */
            public onExit() {
                super.onExit();
                //移除触摸
                this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegan, this);
                this.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
                this.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);

                //移除通知
                this.removeEventListener(customEvent.CustomEvent.EVENT_USER_ENTER, this.onUserEnter, this);
                this.removeEventListener(customEvent.CustomEvent.EVENT_USER_STATUS, this.onUserStatus, this);
            }
        }
    }
}