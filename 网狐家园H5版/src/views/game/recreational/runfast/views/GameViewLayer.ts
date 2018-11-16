/**
 * 游戏交互
 */


namespace game {
    export namespace runfast {
        //用户头像位置
        import INVALID_CHAIR = df.INVALID_CHAIR;
        import HAND_COUNT = cmd.runfast.HAND_COUNT;
        const HeadPoint: any[] = [{x: 67, y: 110}, {x: 7, y: 50}, {x: 7, y: 50}, {x: 7, y: 50}];

        export class GameViewLayer extends eui.UILayer {
            private _gameEngine: GameClientEngine;
            private _lCellScore: number = 0;
            //托管标识
            // private _bTrustee: boolean = true;
            //游戏配置
            private _customConfig: cmd.runfast.tagCustomConfig;

            //游戏组件
            private _outCardBtn: eui.Button;
            private _outTips: eui.Button;
            private _outCardHand : OutCard[] = [];
            private _clockHand: ClockView[] = [];

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
            public _gameView: eui.Component;
            private _userList: models.UserItem[] = [];

            private onInitLayer(): void {
                let gameView = new eui.Component();
                this.addChild(gameView);
                this._gameView = gameView;

                gameView.skinName = "resource/eui_skins/game/recreational/runfast/GameLayer.exml";

                this.showMyselfInfo();
                this.initDesk();
                // this.initHoldContainer();
                this.initComponent();
                this.initButton();

                this.showClock(0, cmd.runfast.TIME_GAME_START);

            }

            private initComponent() {
                this._outCardBtn = this._gameView["btn_out_card"];
                this._outTips = this._gameView["btn_tip"];
                //手牌管理容器
                for (let i = 0; i < cmd.runfast.GAME_PLAYER; i++) {
                    // console.log("%c%s",
                    //     "color: green; background: yellow; font-size: 24px;",
                    //     "是否存在按钮组件：");
                    this._holdContainer[i] = new HoldContainer(this._gameView["holder_container_" + i], this, this._outTips);
                }
                for (let i = 0; i < cmd.runfast.GAME_PLAYER; i++) {
                    this._outCardHand.push(new OutCard(i, this));
                    this._clockHand.push(new ClockView(i, this._gameView["runfast_clock_" + i]));
                }

            }

            //手牌组件
            private _holdContainer: any[] = [];


            public initDesk() {
                //桌号
                let num = this._gameEngine._gameFrame.getTableID();
                if (num == df.INVALID_TABLE) return;

                let table_info = this._gameView.getChildByName("table_info") as eui.Component;
                // console.log("_____________", table_info);
                let table_num = table_info["group_0"].getChildByName("table_num") as eui.Component;
                let label_num = table_num.getChildByName("deskNum") as utils.LabelAtlas;
                if (null != label_num) {
                    table_num.removeChildren();
                }
                let deskNum = utils.LabelAtlas.createLabel(num + "", "runfast_game_num_table_png", "0123456789", 20, 30);
                deskNum.name = "deskNum";
                utils.setAnchorLeftMid(deskNum);
                table_num.addChild(deskNum);

                //底分
                let formatStr = utils.StringUtils.formatNumberThousands(this._lCellScore);
                let table_score = table_info["group_1"].getChildByName("cell_number") as eui.Component;
                let deskCell = table_score.getChildByName("deskCell") as utils.LabelAtlas;
                if (null != deskCell) {
                    table_score.removeChildren();
                }
                let newDeskCell = utils.LabelAtlas.createLabel(formatStr, "runfast_game_num_cellscore_png", "0123456789", 20, 26);
                newDeskCell.name = "deskCell";
                utils.setAnchorLeftMid(newDeskCell);
                table_score.addChild(newDeskCell);
            }

            private showMyselfInfo(): void {
                const myself = this._gameEngine.getMeUserItem();

                if (null == myself) return;

                if (myself.cbUserStatus == df.US_READY) {
                    //准备
                    this.showUserReady(myself);
                }

                let headPanel = this._gameView.getChildByName("user_info_0") as eui.Component;
                let head = headPanel.getChildByName("headImg");
                if (null != head) {
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
                if (null != scoreLabel) {
                    bitMapScore.removeChildren();
                }
                let labelAtlas = utils.LabelAtlas.createLabel(myself.lScore + "", "runfast_game_num_cellscore_png", "0123456789", 20, 26);
                labelAtlas.name = "scoreLabel";
                utils.setAnchorMidTop(labelAtlas);
                bitMapScore.addChild(labelAtlas);
            }


            private initButton(): void {
                let back = this._gameView["btn_menu_back"];
                back.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);

                //换桌
                let change = this._gameView["btn_desk"];
                change.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);

                //准备
                let ready = this._gameView["btn_ready"];
                ready.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);

                this._outCardBtn.name = "btn_out_card";
                this._outCardBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);
            }

            //每次新一轮出牌的时候，先清空
            private _cbOutCards: number[] = [];

            activeOutButton(ifOut: boolean, outCards: number[]): void {
                this._outCardBtn.enabled = ifOut;
                if (ifOut) {
                    this._cbOutCards = outCards;
                }
            }

            /**按钮事件 */
            private _changeRecord: number = egret.getTimer();

            private onButtonClick(e: egret.Event) {
                let target = e.target as eui.Button;
                switch (target.name) {
                    case "btn_menu_back" : {
                        this._gameEngine.onQueryExitGame();
                        break;
                    }
                    case "btn_change_desk" : {
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
                        this.showClock(0,cmd.runfast.TIME_GAME_START);
                        target.visible = false;
                        break;
                    }
                    case "btn_ready" : {
                        const userItem = this._gameEngine.getMeUserItem();
                        if (userItem.cbUserStatus >= df.US_READY)
                            return;

                        //发送准备
                        this._gameEngine._gameFrame.onUserReady();
                        this._clockHand[0].stop();

                        target.visible = false;
                        break;
                    }
                    case "btn_out_card" : {
                        this._outCardHand[0].setOutCard(0, this._cbOutCards);
                        this._gameEngine.requestOutCard(this._cbOutCards);
                        this._holdContainer[0].lastPresent = [];
                        this._holdContainer[0].m_firstOut = false;
                        this._clockHand[0].stop();

                        //桌面按钮隐藏
                        this._gameView["button_play"].visible = false;

                        //手牌减少，重新生成
                        this._holdContainer[0].removeChooseCards();
                        this._holdContainer[0].spliceHold(this._cbOutCards);
                        break;
                    }
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
                console.log("%c玩家离开:", "color: green;font-size: 5em");
                console.log(user);
                let userIndex = this.removeUserCache(user);
                if (userIndex == df.INVALID_ITEM) return;

                let target = this._gameView.getChildByName("user_info_" + userIndex) as eui.Component;
                target.visible = false;
                let readyIcon = this._gameView.getChildByName("runfast_ready_label_" + userIndex) as eui.Image;
                readyIcon.visible = false;

                this._gameView["holder_container_" + userIndex].visible = false;

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
                // let userPanel = this._gameView.getChildByName("userinfo" + userIndex) as eui.Panel;
                if (userIndex == INVALID_CHAIR) return;
                let readyIcon = this._gameView.getChildByName("runfast_ready_label_" + userIndex);
                readyIcon.visible = isshow;

                if (!isshow || userIndex != cmd.runfast.MY_VIEW) return;

                //隐藏开始按钮
                let startBt = this._gameView["button_start"].getChildByName("btn_ready") as eui.Button;
                startBt.visible = false;

                //调整换桌按钮位置
                let changeDesk = this._gameView["button_start"].getChildByName("btn_change_desk") as eui.Button;
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
                if (userIndex == INVALID_CHAIR) return;
                // console.log(userIndex);

                //用户信息
                let userPanel = this._gameView.getChildByName("user_info_" + userIndex) as eui.Component;
                userPanel.visible = true;

                //校验重复
                if (null != userPanel.getChildByName("userHead"))
                    userPanel.removeChild(userPanel.getChildByName("userHead"));

                if (userIndex != cmd.runfast.MY_VIEW) {
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
                if (null != bitMapScore.getChildByName("scoreLabel")) {
                    // let label = bitMapScore.getChildByName("scoreLabel") as utils.LabelAtlas;
                    // label.setText(user.lScore + "");
                    bitMapScore.removeChildren();
                }
                let labelAtlas = utils.LabelAtlas.createLabel(user.lScore + "", "runfast_game_num_cellscore_png", "0123456789", 20, 26);
                labelAtlas.name = "scoreLabel";
                utils.setAnchorMidTop(labelAtlas);
                bitMapScore.addChild(labelAtlas);
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

                let bt = this._gameView["button_start"].getChildByName("btn_ready");
                bt.visible = true;

                //换桌
                let change = this._gameView["button_start"].getChildByName("btn_change_desk") as eui.Button;
                change.x = -183;
                change.visible = true;

                //隐藏
                for (let i = 0; i < cmd.runfast.GAME_PLAYER; i++) {
                    //将所有准备去掉
                    let userPanel = this._gameView.getChildByName("user_info_" + i) as eui.Component;
                    let readyIcon = this._gameView.getChildByName("runfast_ready_label_" + i);
                    readyIcon.visible = false;
                    // const readyIcon = userPanel.getChildByName("ready");
                    // readyIcon.visible = false;


                    //
                    this._outCardHand[i].setOutCard(df.INVALID_ITEM);
                    this._gameView["holder_container_" + i].visible = false;
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
                //显示操作倒计时
                // this.setGameClock(cmd.runfast.TIME_GAME_START, cmd.sparrowsclm.IDI_GAME_START);

                //数据解析
                let dataBuffer = data as network.Message;
                let sceneFree = new cmd.runfast.CMD_S_StatusFree(dataBuffer.cbBuffer);

                console.log(sceneFree);

                this._lCellScore = sceneFree.lCellScore;
                this._customConfig = sceneFree.CustomConfig;
                //还有两个历史积分，不知道有何作用

                //更新底分
                this.initDesk();

                //重置
            }

            private setGameClock(nTime: number, clockId: number = 0, viewId: number = 0) {

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
                let startBt = this._gameView["button_start"].getChildByName("btn_ready");
                startBt.visible = false;

                //隐藏换桌按钮
                let changeDesk = this._gameView["button_start"].getChildByName("btn_change_desk");
                changeDesk.visible = false;

                //隐藏等待提示
                // this.showWaitTips(0, false);

                //隐藏准备标识
                for (let i = 0; i < cmd.runfast.GAME_PLAYER; i++) {
                    let readyIcon = this._gameView.getChildByName("runfast_ready_label_" + i);
                    readyIcon.visible = false;
                }

                // this._customConfig = start.CustomConfig
                //给各个玩家分发手牌
                this._gameView["holder_container_0"].visible = true;
                this._holdContainer[0].setHold(start.cbCardData);
                for (let n = 1; n < cmd.runfast.GAME_PLAYER; n++) {
                    this._holdContainer[n].setHoldNumber(start.cbCardCount[n]);
                }
                //首出牌玩家
                let index = this._gameEngine.switchViewChairID(start.wCurrentUser);
                console.log(index + "号座位玩家出牌");
                //该玩家出牌
                if (index == cmd.runfast.MY_VIEW) {
                    this._holdContainer[0].chooseCards();
                    this._gameView["button_play"].visible = true;
                    this._outCardBtn.enabled = false;
                }
                //显示相应玩家的倒计时
                this.showClock(index);
            }

            showOutCards(outCards: cmd.runfast.CMD_S_OutCard) {
                let viewId = this._gameEngine.switchViewChairID(outCards.wOutCardUser);
                let cbCardData = [];
                for (let n = 0; n < outCards.cbCardCount; n++) {
                    if(outCards.cbCardData[n] == 0) break;
                    cbCardData.push(outCards.cbCardData[n]);
                }
                this._holdContainer[0].lastPresent = cbCardData;
                this._outCardHand[viewId].setOutCard(viewId, cbCardData);
                this._clockHand[viewId].stop();
                if (viewId == cmd.runfast.MY_VIEW) {
                    this._gameView["button_play"].visible = false;
                    this._holdContainer[0].removeChooseCards();
                    this._holdContainer[0].spliceHold(cbCardData);
                } else {
                    this._holdContainer[viewId].reduceHoldNum(cbCardData.length);
                }
                //报单
                if (outCards.bReportSingle) { //提示下家报单
                    this._holdContainer[(viewId + 3) % 4].reportSingle();
                }
            }

            showPass(pass: cmd.runfast.CMD_S_PassCard) {
                //
                let viewId = this._gameEngine.switchViewChairID(pass.wPassCardUser);
                console.log(viewId + "要不起");
                this._outCardHand[viewId].setLabel(0);
            }

            showStartCard(startCard: cmd.runfast.CMD_S_StartCard) {
                let viewId = this._gameEngine.switchViewChairID(startCard.wCurrentUser);
                let turnOver = startCard.bTurnOver;
                if (turnOver) {
                    //一轮结束的时候，过去出去为空
                    this._cbOutCards = [];
                }
                // console.log(viewId + "开始出牌");
                this._outCardHand[viewId].setOutCard(df.INVALID_ITEM);
                this.showClock(viewId);
                if (viewId == cmd.runfast.MY_VIEW) {
                    this._cbOutCards = [];
                    this._gameView["button_play"].visible = true;
                    this._outCardBtn.enabled = false;
                    this._holdContainer[0].chooseCards(turnOver);
                    this._holdContainer[0].m_firstOut = false;
                }


                //提示按钮,如何获知上家是否报单

            }

            private _resultUi: ResultUi;

            showGameEnd(gameEnd: cmd.runfast.CMD_S_GameEnd) {
                console.log("%c游戏结束：", "color: green;font-size: 5em;");
                console.log(gameEnd);
                //游戏结束以后的状态变更，返回大厅或者其他，需要继续按钮
                //如何保存背景页面进入暂停界面，点击继续游戏以后，弹窗关闭，然后页面重新激活
                //然后再清理桌面，恢复到刚进入房间的画面
                let chairID = this._gameEngine.switchViewChairID(gameEnd.wWinPlayer);
                let myself = this._gameEngine.getMeUserItem();
                this._resultUi = new ResultUi(this, this._userList, chairID, myself);
                this._resultUi.skinName = "resource/eui_skins/game/recreational/runfast/ResultSkin.exml";
                this._resultUi.setInfo(gameEnd);
                this.addChild(this._resultUi);

                //关于游戏动画的制作
                //序列帧动画的实现，MovieClip制作
            }


            // private _currentClock: number;
            /**
             * 显示相应玩家倒计时
             * */
            private showClock(index: number, time: number = cmd.runfast.TIME_GAME_OPERATE) {
                // this._currentClock = index;
                this._clockHand[index].showClock(time);
                if(index == cmd.runfast.MY_VIEW) {
                    this.addEventListener(EVT_TIME_OUT,this.onTimeOut,this);
                }
            }

            private onTimeOut(evt: egret.Event) {
                // this._currentClock = df.INVALID_ITEM;
                //玩家倒计时完以后发生的事件,将按钮隐藏

                this._gameView["button_play"].visible = false;
                this.removeEventListener(EVT_TIME_OUT,this.onTimeOut,this);
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