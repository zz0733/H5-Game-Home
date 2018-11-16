namespace game {
    export namespace runfast {
        interface IAction {
            type: string,
            gameEnd?: cmd.runfast.CMD_S_GameEnd
        }

        interface IUserComponent extends eui.Component{
            user_head:eui.Component;
            user_cards:eui.Component;
            user_bomb:eui.Component;
            user_score:eui.Component;
            user_name:eui.Label;
            user_id:eui.Label;
        }

        const POKER_CONFIG = {
            offX: 15,
            scale: 0.5
        };

        export class ResultUi extends eui.Component {

            public user_info:eui.Group;
            public result_user_0:eui.Component;
            public result_user_1:eui.Component;
            public result_user_2:eui.Component;
            public result_user_3:eui.Component;
            public btn_continue:eui.Button;
            public result_label:eui.Image;


            private _main: GameViewLayer;
            private _userList: models.UserItem[] = [];
            private _winnerView: number = df.INVALID_CHAIR;
            private _myself: models.UserItem;

            constructor(main: GameViewLayer, userList: models.UserItem[], winner: number, myself: models.UserItem) {
                super();
                this._main = main;
                this._userList = userList;
                this._winnerView = winner;
                this._myself = myself;
                this._userList.push(myself);
                this.addEventListener(eui.UIEvent.COMPLETE, this.onComplete, this);
            }

            private _actionList: IAction[] = [];
            private _init: boolean = false;

            /**
             * 每个组件都有一个childrenCreated()方法，它会在组件初始化完成后回调，子类通常覆盖这个方法来访问一些延迟实例化的子项。
             * 所有的组件必须在初始化之后才能调用
             * */
            private onComplete() {
                //执行存在队列中的动作
                this._init = true;

                //激活继续游戏按钮事件
                let action:IAction = {
                    type: "active_button",
                };
                this._actionList.push(action);

                this.beginAction();
            }


            //执行存在动作队列中的动作
            private beginAction() {
                let action: IAction;
                if (this._actionList.length != 0) {
                    action = this._actionList[0];
                } else {
                    return;
                }

                switch (action.type) {
                    case "active_button" : {
                        this.removeActive();
                        this.btn_continue.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onContinue, this);
                        break;
                    }
                    case "init_user": {
                        this.initInfo(action.gameEnd);
                        this.removeActive();
                        break;
                    }
                }
            }

            private onContinue(evt: egret.Event) {
                //清理桌面，玩家离开后玩家HoldContainer的清理
                this._main.onRestGameView();
                //继续按钮游戏事件
                this.parent.removeChild(this);
            }

            private removeActive() {
                //移除动作队列中的动作并且继续执行下一个动作
                this._actionList.splice(0,1);
                this.beginAction();
            }

            setInfo(gameEnd: cmd.runfast.CMD_S_GameEnd) {
                //如果已经初始化完成，直接执行，否则保存在动作队列当中
                if (this._init) {
                    this.initInfo(gameEnd);
                } else {
                    let action: IAction = {
                        type: "init_user",
                        gameEnd: gameEnd
                    };
                    this._actionList.push(action);
                }
            }

            private initInfo(gameEnd: cmd.runfast.CMD_S_GameEnd) {
                // this.result_label.texture = RES.getRes("");
                //设置头像
                for (let n = 0; n < cmd.runfast.GAME_PLAYER; n++) {
                    //userInfo是座位号为n的玩家
                    let userInfo;
                    for (let m = 0; m < this._userList.length; m++) {
                        if (this._userList[m].wChairID == n) {
                            userInfo = this._userList[m];
                            break;
                        }
                    }
                    let head = models.HeadSprite.createHead(userInfo, 80, 80, 35, 35);
                    let user = this["result_user_" + n] as IUserComponent;
                    utils.setAnchorLeftTop(head);
                    user.user_head.addChild(head);//添加头像

                    user.user_name.text = userInfo.szNickName;
                    user.user_id.text = "ID:" + userInfo.dwUserID;

                    //牌以及牌的阴影，如果是获胜的玩家则是显示最后一次出牌
                    if (gameEnd.cbHandCardCount[n] == 0) { //获胜
                        this.addPoker(user, gameEnd.cbLastOutCard, true);
                    } else { //失败玩家
                        this.addPoker(user, gameEnd.cbHandCardData[n]);
                    }


                    //炸弹数量
                    // let bombStr = gameEnd.cbBombCount[n] + "";
                    // let bombCount = utils.LabelAtlas.createLabel(bombStr, "", "", 0, 0);
                    // utils.setAnchorCenter(bombCount);
                    // user.user_bomb.removeChildren();
                    // user.user_bomb.addChild(bombCount);
                    // user.user_bomb
                    //积分加减情况
                    // let scoreStr = gameEnd.lGameScore[n] + "";
                    // let scoreCount = utils.LabelAtlas.createLabel(scoreStr, "", "", 0, 0);
                    // utils.setAnchorCenter(scoreCount);
                    // user.user_score.removeChildren();
                    // user.user_score.addChild(scoreCount);

                    if (userInfo == this._myself) {
                        this._myRemainCards = gameEnd.cbHandCardCount[n];
                    }
                }

                if (this._winnerView == cmd.runfast.MY_VIEW) {
                    this.result_label.source = "runfast_game_flag_win_png";
                } else if(this._myRemainCards == 1) {
                    this.result_label.source = "runfast_game_flag_peace_png";
                } else {
                    this.result_label.source = "runfast_game_flag_fail_png";

                }
            }

            private _myRemainCards: Number;

            private addPoker(user: IUserComponent, cards: Number[], win: boolean = false) {
                user.user_cards.removeChildren();
                let startX;
                let showCards = [];
                for (let n = 0; n < cards.length; n++) {
                    if (cards[n] != 0) {
                        showCards.push(cards[n]);
                    } else {
                        break;
                    }
                }
                //win的情况下不需要加遮罩
                for (let n = 0; n < showCards.length; n++) {
                    let poker = new Poker(Number(showCards[n]));
                    poker.x = POKER_CONFIG.offX * this.getIndex(n, showCards.length);
                    poker.scaleY = poker.scaleX = POKER_CONFIG.scale;
                    if (win) {
                        poker.addMask();
                    }
                    utils.setAnchorCenter(poker);
                    user.user_cards.addChild(poker);
                    if (n == 0) startX = poker.x;
                }

            }

            private getIndex(value: number, length: number): number {
                let back = 0;
                back = length % 2 ? value - Math.floor(length / 2) : value - length / 2;
                return back  - 1;
            }

        }
    }
}