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
var game;
(function (game) {
    var runfast;
    (function (runfast) {
        var POKER_CONFIG = {
            offX: 15,
            scale: 0.5
        };
        var ResultUi = (function (_super) {
            __extends(ResultUi, _super);
            function ResultUi(main, userList, winner, myself) {
                var _this = _super.call(this) || this;
                _this._userList = [];
                _this._winnerView = df.INVALID_CHAIR;
                _this._actionList = [];
                _this._init = false;
                _this._main = main;
                _this._userList = userList;
                _this._winnerView = winner;
                _this._myself = myself;
                _this._userList.push(myself);
                _this.addEventListener(eui.UIEvent.COMPLETE, _this.onComplete, _this);
                return _this;
            }
            /**
             * 每个组件都有一个childrenCreated()方法，它会在组件初始化完成后回调，子类通常覆盖这个方法来访问一些延迟实例化的子项。
             * 所有的组件必须在初始化之后才能调用
             * */
            ResultUi.prototype.onComplete = function () {
                //执行存在队列中的动作
                this._init = true;
                //激活继续游戏按钮事件
                var action = {
                    type: "active_button",
                };
                this._actionList.push(action);
                this.beginAction();
            };
            //执行存在动作队列中的动作
            ResultUi.prototype.beginAction = function () {
                var action;
                if (this._actionList.length != 0) {
                    action = this._actionList[0];
                }
                else {
                    return;
                }
                switch (action.type) {
                    case "active_button": {
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
            };
            ResultUi.prototype.onContinue = function (evt) {
                //清理桌面，玩家离开后玩家HoldContainer的清理
                this._main.onRestGameView();
                //继续按钮游戏事件
                this.parent.removeChild(this);
            };
            ResultUi.prototype.removeActive = function () {
                //移除动作队列中的动作并且继续执行下一个动作
                this._actionList.splice(0, 1);
                this.beginAction();
            };
            ResultUi.prototype.setInfo = function (gameEnd) {
                //如果已经初始化完成，直接执行，否则保存在动作队列当中
                if (this._init) {
                    this.initInfo(gameEnd);
                }
                else {
                    var action = {
                        type: "init_user",
                        gameEnd: gameEnd
                    };
                    this._actionList.push(action);
                }
            };
            ResultUi.prototype.initInfo = function (gameEnd) {
                // this.result_label.texture = RES.getRes("");
                //设置头像
                for (var n = 0; n < cmd.runfast.GAME_PLAYER; n++) {
                    //userInfo是座位号为n的玩家
                    var userInfo = void 0;
                    for (var m = 0; m < this._userList.length; m++) {
                        if (this._userList[m].wChairID == n) {
                            userInfo = this._userList[m];
                            break;
                        }
                    }
                    var head = models.HeadSprite.createHead(userInfo, 80, 80, 35, 35);
                    var user = this["result_user_" + n];
                    utils.setAnchorLeftTop(head);
                    user.user_head.addChild(head); //添加头像
                    user.user_name.text = userInfo.szNickName;
                    user.user_id.text = "ID:" + userInfo.dwUserID;
                    //牌以及牌的阴影，如果是获胜的玩家则是显示最后一次出牌
                    if (gameEnd.cbHandCardCount[n] == 0) {
                        this.addPoker(user, gameEnd.cbLastOutCard, true);
                    }
                    else {
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
                }
                else if (this._myRemainCards == 1) {
                    this.result_label.source = "runfast_game_flag_peace_png";
                }
                else {
                    this.result_label.source = "runfast_game_flag_fail_png";
                }
            };
            ResultUi.prototype.addPoker = function (user, cards, win) {
                if (win === void 0) { win = false; }
                user.user_cards.removeChildren();
                var startX;
                var showCards = [];
                for (var n = 0; n < cards.length; n++) {
                    if (cards[n] != 0) {
                        showCards.push(cards[n]);
                    }
                    else {
                        break;
                    }
                }
                //win的情况下不需要加遮罩
                for (var n = 0; n < showCards.length; n++) {
                    var poker = new runfast.Poker(Number(showCards[n]));
                    poker.x = POKER_CONFIG.offX * this.getIndex(n, showCards.length);
                    poker.scaleY = poker.scaleX = POKER_CONFIG.scale;
                    if (win) {
                        poker.addMask();
                    }
                    utils.setAnchorCenter(poker);
                    user.user_cards.addChild(poker);
                    if (n == 0)
                        startX = poker.x;
                }
            };
            ResultUi.prototype.getIndex = function (value, length) {
                var back = 0;
                back = length % 2 ? value - Math.floor(length / 2) : value - length / 2;
                return back - 1;
            };
            return ResultUi;
        }(eui.Component));
        runfast.ResultUi = ResultUi;
    })(runfast = game.runfast || (game.runfast = {}));
})(game || (game = {}));
