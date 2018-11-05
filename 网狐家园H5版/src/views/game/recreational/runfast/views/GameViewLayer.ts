/**
 * 游戏交互
 */

namespace game {
    export namespace runfast {
        //用户头像位置
        import INVALID_CHAIR = df.INVALID_CHAIR;
        const HeadPoint: any[] = [{ x: 67, y: 110 }, { x: 7, y: 50 }, { x: 7, y: 50 }, { x: 7, y: 50 }];
        export class GameViewLayer extends eui.UILayer {
            private _gameEngine: GameClientEngine;
            private _lCellScore: number = 0;
            //托管标识
            // private _bTrustee: boolean = true;
            //游戏配置
            private _customConfig: cmd.runfast.tagCustomConfig;

            /**
             * 构造
             */
            constructor(engine: any) {
                super();
                this._gameEngine = engine;
            }
            protected createChildren(): void {
                super.createChildren();

                this.name = "GameViewLayer";
                //再往下细分各类控制不同组件的类

                this.once(egret.Event.ADDED_TO_STAGE, this.onInitLayer, this);
                this.once(egret.Event.REMOVED_FROM_STAGE, this.onExit, this);

                //注册触摸
                this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegan, this);
                this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
                this.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
            }

            /**初始化 */
            public _companet: eui.Component;
            private _userList: models.UserItem[] = [];
            private onInitLayer(): void {
                let componet = new eui.Component();
                this.addChild(componet);
                this._companet = componet;

                componet.skinName = "resource/eui_skins/game/recreational/runfast/GameLayer.exml";

                this.showMyselfInfo();

                this.initDesk();

                this.initButton();

                this.initHoldContainer();

            }

            //手牌组件
            private _holdContainer:any[] = [];

            private initHoldContainer() {
                for(let i =0; i< cmd.runfast.GAME_PLAYER; i++) {
                    this._holdContainer[i] = new HoldContainer(this._companet["holder_container_" + i]);
                }
            }

            public initDesk() {
                //桌号
                let num = this._gameEngine._gameFrame.getTableID();
                if (num == df.INVALID_TABLE)  return;

                let table_info = this._companet.getChildByName("table_info") as eui.Component;
                console.log("_____________",table_info);
                let table_num = table_info["group_0"].getChildByName("table_num") as eui.Component;
                let label_num = table_num.getChildByName("deskNum") as utils.LabelAtlas;
                if (null != label_num) {
                    let deskNum = table_num.getChildByName("deskNum") as utils.LabelAtlas;
                    deskNum.setText(num + "");
                } else {
                    let deskNum = utils.LabelAtlas.createLabel(num + "", "runfast_game_num_table_png", "0123456789", 20, 30);
                    deskNum.name = "deskNum";
                    utils.setAnchorLeftMid(deskNum);
                    table_num.addChild(deskNum);
                }

                //底分
                let formatStr = utils.StringUtils.formatNumberThousands(this._lCellScore);
                let table_score = table_info["group_1"].getChildByName("cell_number") as eui.Component;
                let deskCell = table_score.getChildByName("deskCell") as utils.LabelAtlas;
                if (null != deskCell) {
                    deskCell.setText(formatStr);
                } else {
                    let newDeskCell = utils.LabelAtlas.createLabel(formatStr, "runfast_game_num_cellscore_png", "0123456789", 20, 26);
                    newDeskCell.name = "deskCell";
                    utils.setAnchorLeftMid(newDeskCell);
                    table_score.addChild(newDeskCell);
                }
            }

            private showMyselfInfo(): void {
                const myself = this._gameEngine.getMeUserItem();

                if (null == myself) return;

                if (myself.cbUserStatus == df.US_READY) {
                    //准备
                    this.showUserReady(myself);
                }

                let headPanel = this._companet.getChildByName("user_info_0") as eui.Component;
                let head = headPanel.getChildByName("headImg");
                if(null != head) {
                    headPanel.removeChild(head);
                }
                let newHead = models.HeadSprite.createHead(myself, 120, 120, 35, 35);
                newHead.name = "headImg";
                utils.setAnchorCenter(newHead);
                headPanel.addChild(newHead);
                newHead.x = HeadPoint[cmd.runfast.MY_VIEW].x;
                newHead.y = HeadPoint[cmd.runfast.MY_VIEW].y;

                let userid = headPanel.getChildByName("ID") as eui.Label;
                userid.text = "ID:" + myself.dwUserID;

                let nick = headPanel.getChildByName("Nick") as eui.Label;
                nick.text = utils.StringUtils.clipByConfig(myself.szNickName, 150, utils.StringUtils.getSystemConfig(20));
                // nick.text = myself.szNickName;

                let score = headPanel.getChildByName("Score") as eui.Label;
                score.text = utils.StringUtils.clipByConfig(utils.StringUtils.formatNumberThousands(myself.lScore), 150, utils.StringUtils.getSystemConfig(18));
                score.text = "" + myself.lScore;

                let bitMapScore = headPanel.getChildByName("BitScore") as eui.Component;
                let scoreLabel = bitMapScore.getChildByName("scoreLabel") as utils.LabelAtlas;
                if(null != scoreLabel) {
                    scoreLabel.setText(myself.lScore + "");
                } else {
                    let labelAtlas = utils.LabelAtlas.createLabel(myself.lScore + "", "runfast_game_num_cellscore_png", "0123456789", 20, 26);
                    labelAtlas.name = "scoreLabel";
                    utils.setAnchorMidTop(labelAtlas);
                    bitMapScore.addChild(labelAtlas);
                }
            }


            private initButton(): void {
                let back = this._companet["btn_menu_back"];
                back.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onButtonClick,this);

                //换桌
                let change = this._companet["btn_desk"];
                change.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onButtonClick,this);

                //准备
                let ready = this._companet["btn_ready"];
                ready.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onButtonClick,this);
            }

            /**按钮事件 */
            private _changeRecord: number = egret.getTimer();
            private onButtonClick(e: egret.Event) {
                let target = e.target as eui.Button;
                switch (target.name) {
                    case "btn_menu_back" :
                        this._gameEngine.onQueryExitGame();
                        break;
                    case "btn_change_desk" :
                        //频繁过滤
                        let curTime = egret.getTimer();
                        if (curTime - this._changeRecord < 1000) {
                            managers.FrameManager.getInstance().showToast("亲,换的太频繁了!");
                            this._changeRecord = egret.getTimer();
                            return;
                        }

                        //发送换桌
                        managers.FrameManager.getInstance().showPopWait("");
                        this._gameEngine._bChangeDesk = true;
                        this._gameEngine._gameFrame.onChangeDesk();
                        this._changeRecord = egret.getTimer();

                        target.visible = false;
                        break;
                    case "btn_ready" :
                        const userItem = this._gameEngine.getMeUserItem();
                        if (userItem.cbUserStatus >= df.US_READY)
                            return;

                        //发送准备
                        this._gameEngine._gameFrame.onUserReady();

                        target.visible = false;
                        break;
                    case "" :
                        break;
                }
            }

            public onUpdataUser(user: models.UserItem, newStatus?: any, oldStatus?: any) {
                // console.log("玩家进入:_______________", user);
                if (null == user) return;
                if (user.cbUserStatus >= df.US_SIT && user.cbUserStatus != df.US_LOOKON) {
                    if (user.dwUserID != managers.FrameManager.getInstance().m_GlobalUserItem.dwUserID) {
                        this.showUser(user, true);
                    }

                    //用户准备
                    if (user.cbUserStatus == df.US_READY) {
                        this.showUserReady(user);
                    }

                    //用户断线
                    if (user.cbUserStatus == df.US_OFFLINE) {
                        // this.showUserOffLine(user);
                    }
                }

                //用户起立或离开
                if (user.cbUserStatus <= df.US_FREE) {
                    this.removeUser(user);
                }
            }

            private removeUser(user: models.UserItem) {
                let userIndex = this.removeUserCache(user);
                if(userIndex == df.INVALID_ITEM) return;

                let target = this._companet.getChildByName("user_info_" + userIndex) as eui.Component;
                target.visible = false;
            }

            /**移除缓存 */
            private removeUserCache(user: models.UserItem): number {
                if (this._userList.length == 0)
                    return df.INVALID_ITEM;

                let bSuccess: boolean = false;
                let deleteIndex: number = df.INVALID_ITEM;
                for (let i = 0; i < this._userList.length; i++) {
                    let target: models.UserItem = this._userList[i];
                    if (target.dwUserID == user.dwUserID) {
                        this._userList.splice(i, 1);
                        bSuccess = true;
                        deleteIndex = this._gameEngine.switchViewChairID(target.wChairID);
                        break;
                    }
                }
                egret.assert(bSuccess);
                return deleteIndex;
            }

            private showUserReady(user: models.UserItem, isshow: boolean = true) {
                const userIndex = this._gameEngine.switchViewChairID(user.wChairID);
                // let userPanel = this._companet.getChildByName("userinfo" + userIndex) as eui.Panel;
                if(userIndex == INVALID_CHAIR) return;
                let readyIcon = this._companet.getChildByName("runfast_ready_label_" + userIndex);
                readyIcon.visible = isshow;

                if (!isshow || userIndex != cmd.sparrowsclm.MY_VIEW) return;

                //隐藏开始按钮
                let startBt = this._companet["button_start"].getChildByName("btn_ready") as eui.Button;
                startBt.visible = false;

                //调整换桌按钮位置
                let changeDesk = this._companet["button_start"].getChildByName("btn_change_desk") as eui.Button;
                changeDesk.x = 2;

                //显示等待提示
                // this.showWaitTips(0, true);
            }

            private showUser(user: models.UserItem, isShow: boolean): void {

                //加入缓存
                if (null != user) {
                    this.cacheUser(user);
                }

                //视图索引
                let userIndex = this._gameEngine.switchViewChairID(user.wChairID);
                if(userIndex == INVALID_CHAIR) return;
                console.log(userIndex);

                //用户信息
                let userPanel = this._companet.getChildByName("user_info_" + userIndex) as eui.Component;
                userPanel.visible = true;

                //校验重复
                if (null != userPanel.getChildByName("userHead"))
                    userPanel.removeChild(userPanel.getChildByName("userHead"));

                if (userIndex != cmd.sparrowsclm.MY_VIEW) {
                    // let orignalBg = userPanel.getChildByName("head") as eui.Image;
                    // orignalBg.visible = false;
                    //
                    // let normalBg = userPanel.getChildByName("head_normal") as eui.Image;
                    // normalBg.visible = true;
                }

                //头像
                let head = models.HeadSprite.createHead(user, 120, 120, 35, 35);
                utils.setAnchorLeftTop(head);
                head.name = "userHead";
                userPanel.addChild(head);
                head.x = HeadPoint[userIndex].x;
                head.y = HeadPoint[userIndex].y;

                //id
                let userid = userPanel.getChildByName("ID") as eui.Label;
                userid.text = "ID:" + user.dwUserID;

                //昵称
                let nick = userPanel.getChildByName("Nick") as eui.Label;
                nick.text = user.szNickName;

                let bitMapScore = userPanel.getChildByName("BitScore") as eui.Component;
                if(null != bitMapScore.getChildByName("scoreLabel")) {
                    bitMapScore.removeChild(bitMapScore.getChildByName("scoreLabel"));
                } else {
                    let labelAtlas = utils.LabelAtlas.createLabel(user.lScore + "", "runfast_game_num_cellscore_png", "0123456789", 20, 26);
                    labelAtlas.name = "scoreLabel";
                    utils.setAnchorMidTop(labelAtlas);
                    bitMapScore.addChild(labelAtlas);
                }
            }

            /**加入缓存 */
            private cacheUser(user: models.UserItem) {

                //判断重复
                for (let i = 0; i < this._userList.length; i++) {
                    let target: models.UserItem = this._userList[i];
                    if (target.dwUserID == user.dwUserID) {
                        this._userList.splice(i, 1);
                        break;
                    }
                }

                //拷贝对象
                let copy = new models.UserItem(user);
                this._userList.push(copy);
            }

            /**清理桌面 */
            public onRestGameView() {
                this._lCellScore = 0;

                let bt = this._companet["button_start"].getChildByName("btn_ready");
                bt.visible = true;

                //换桌
                let change = this._companet["button_start"].getChildByName("btn_change_desk") as eui.Button;
                change.x = -183;
                change.visible = true;

                //隐藏
                for (let i = 0; i < cmd.runfast.GAME_PLAYER; i++) {
                    //将所有准备去掉
                    let userPanel = this._companet.getChildByName("user_info_" + i) as eui.Component;
                    let readyIcon = this._companet.getChildByName("runfast_ready_label_" + i);
                    readyIcon.visible = false;
                    // const readyIcon = userPanel.getChildByName("ready");
                    // readyIcon.visible = false;

                    //去掉多余的用户信息
                    if (i != cmd.sparrowsclm.MY_VIEW) {
                        // this.onInitUser(i);
                        userPanel.visible = false;
                    } else {

                    }
                }

                //初始化桌面
                this.initDesk();
            }

            /**帧率刷新 */
            private _lCurTime = egret.getTimer();
            private _nDotIndex: number = 0;
            public update() {
               
            }

            /**停止动画 */
            public stopAllAction() {
               
            }



            /**刷新倒计时 */
            public updateClockView() {
               
            }


            /**显示场景* */
            public showSceneFree(data: any) {
                //数据解析
                let dataBuffer = data as network.Message;
                let sceneFree = new cmd.runfast.CMD_S_StatusFree(dataBuffer.cbBuffer);

                console.log(sceneFree);

                this._lCellScore = sceneFree.lCellScore;
                this._customConfig = sceneFree.CustomConfig;
                //还有两个历史积分，不知道有何作用

                //更新底分
                this.initDesk();
            }

            /**游戏开始
             * @param start:
             lCellScore;//底分
             lTurnScore: number[] = [0, 0, 0, 0];
             lCollectScore: number[] = [0, 0, 0, 0];
             CustomConfig: tagCustomConfig;//配置信息
             * */
            public showGameStart(start: cmd.runfast.CMD_S_GameStart) {
                //隐藏开始按钮
                let startBt = this._companet["button_start"].getChildByName("btn_ready");
                startBt.visible = false;

                //隐藏换桌按钮
                let changeDesk = this._companet["button_start"].getChildByName("btn_change_desk");
                changeDesk.visible = false;

                //隐藏等待提示
                // this.showWaitTips(0, false);

                //隐藏准备标识
                for (let i = 0; i < cmd.runfast.GAME_PLAYER; i++) {
                    let readyIcon = this._companet.getChildByName("runfast_ready_label_" + i);
                    readyIcon.visible = false;
                }

                // this._customConfig = start.CustomConfig
                //给各个玩家分发手牌
                this._holdContainer[0].setHold(start.cbCardData);
            }

          
            /** 触摸事件
            * onTouchBegan
            * onTouchMove
            * onTouchEnd
            */
            private onTouchBegan(event: egret.TouchEvent) {
                //console.log("GameViewLayer onTouch Began");
                this._bMoved = false;
            }

            private _bMoved = false;
            private onTouchMove(event: egret.TouchEvent) {
                // console.log("GameViewLayer onTouch move");
                this._bMoved = true;
            }

            private onTouchEnd(event: egret.TouchEvent) {
                // console.log("GameViewLayer onTouch end");

            }

            /**
             * 移除舞台 
             */
            private onExit() {
                //移除触摸
                this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegan, this);
                this.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
                this.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);


            }
        }
    }
}