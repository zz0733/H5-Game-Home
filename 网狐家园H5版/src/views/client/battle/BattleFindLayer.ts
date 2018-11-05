/**
 * 约战房间查找
 */
namespace client {
    const NUMBER = 6;
    export class BattleFindLayer extends eui.UILayer {
        private _scene: any;
        constructor(scene: any) {
            super();
            this._scene = scene;
        }
        createChildren() {
            super.createChildren();
            this.once(egret.Event.ADDED_TO_STAGE, this.onInitLayer, this);
            this.once(egret.Event.REMOVED_FROM_STAGE, this.onExit, this);
        }

        private _numbers: utils.LabelAtlas[] = [];
        private _idx: number = 0;
        public onInitLayer() {
            //加载皮肤 
            let componet = new eui.Component();
            this.addChild(componet);
            componet.skinName = skins.BattleFindLayer;

            //按钮
            let bt = componet.getChildByName("bt_close");
            bt.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClick, this);

            //数字
            for (let i = 0; i < NUMBER; i++) {
                let labelAtlas = utils.LabelAtlas.createLabel("0", "battle_num_number_png", "0123456789", 46, 71);
                utils.setAnchorCenter(labelAtlas);
                this.addChild(labelAtlas);
                labelAtlas.visible = false;
                labelAtlas.x = 410 + i * 103;
                labelAtlas.y = 221;
                this._numbers.push(labelAtlas);
            }

            //按鈕
            for (let i = 0; i < 12; i++) {
                bt = componet.getChildByName(`keybord${i}`);
                bt.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClick, this);

                if (i < 9) {
                    let labelAtlas = utils.LabelAtlas.createLabel(`${i + 1}`, "battle_num_keyboard_png", "0123456789", 28, 38);
                    utils.setAnchorCenter(labelAtlas);
                    this.addChild(labelAtlas);
                    labelAtlas.x = bt.x;
                    labelAtlas.y = bt.y;
                }
                if (10 == i) {
                    let labelAtlas = utils.LabelAtlas.createLabel("0", "battle_num_keyboard_png", "0123456789", 28, 38);
                    utils.setAnchorCenter(labelAtlas);
                    this.addChild(labelAtlas);
                    labelAtlas.x = bt.x;
                    labelAtlas.y = bt.y;
                }
            }
        }

        private onButtonClick(e: egret.Event) {
            let button = <eui.Button>e.target;
            let name = button.name;

            egret.Tween.get(button)
                .to({ scaleX: 1.1, scaleY: 1.1 }, 100)
                .to({ scaleX: 1.0, scaleY: 1.0 }, 100);

            switch (name) {
                case "bt_close":
                    {
                        this._scene.onChangeView();
                    }
                    break;
                case "keybord0":
                case "keybord1":
                case "keybord2":
                case "keybord3":
                case "keybord4":
                case "keybord5":
                case "keybord6":
                case "keybord7":
                case "keybord8":
                case "keybord10":
                    {
                        if (this._idx < NUMBER) {

                            this._numbers[this._idx].visible = true;
                            let number = Number(name.substr(7, name.length)) + 1;

                            if (number > 10)
                                number = 0

                            this._numbers[this._idx].setText(`${number}`);
                            this._idx++;
                        }
                    }
                    break;
                case "keybord9":
                    {
                        if (this._idx - 1 >= 0) {
                            this._numbers[this._idx - 1].visible = false;
                            this._idx--;
                        }
                    }
                    break;
                case "keybord11":
                    {
                        if (this._idx < NUMBER) return;

                        let str = "";
                        for (let i = 0; i < NUMBER; i++) {
                            str += this._numbers[i].getText();
                        }

                        //发送约战列表查询
                        managers.FrameManager.getInstance().showPopWait("查询中,请稍后");
                        this.onQueryTable(df.QUERY_KIND_NUMBER,Number(str));
                    }
                    break;
            }
        }

        private _battleFrame: frame.BattleFrame;
        private onQueryTable(querykind: number, queryid: number, gameid?: number) {
            if (null == this._battleFrame) {
                this._battleFrame = new frame.BattleFrame(this);
            }
            this._battleFrame.onQueryTable(querykind, queryid, gameid);

            //设置约战代理
            if (null != managers.TcpServiceCtrl.getInstance().getGateWayService()) {
                managers.TcpServiceCtrl.getInstance().getGateWayService().setDelegate(this._battleFrame);
            }
        }

        /**约战服务关闭 */
        public onCloseBattleService() {

            if (null != managers.TcpServiceCtrl.getInstance().getGateWayService()) {
                managers.TcpServiceCtrl.getInstance().getGateWayService().closeService();
                managers.TcpServiceCtrl.getInstance().m_pGateWayCtrl = null;
            }

            this._battleFrame = null;
        }

        /**启动约战 */

        public onStartBattleGame() {
            managers.FrameManager.getInstance().showToast("游戏接口未实现");
        }
        
        public onExit() {
            this.onCloseBattleService();
        }
    }
}