/**
 * 设置 
 */
namespace client {

    export class OptionLayer extends eui.UILayer {

        /**
         * constructor
         * @param scene
         * @param mode 0设置 1设置、实名验证、切换账号
         */
        private _scene: any;
        private _mode: number;
        constructor(scene: any, mode: number = 0) {
            super();
            this._scene = scene;
            this._mode = mode;
        }

        createChildren() {
            super.createChildren();
            this.once(egret.Event.ADDED_TO_STAGE, this.onInitLayer, this);
            this.once(egret.Event.REMOVED_FROM_STAGE, this.onExit, this);
        }

        private _bg_normal: eui.Image;
        private _bg_extern: eui.Image;
        private _check_option: eui.CheckBox;
        private _check_confirm: eui.CheckBox;
        private _check_change: eui.CheckBox;

        private _panel_option: eui.Panel;
        private _panel_confirm: eui.Panel;
        private _panel_change: eui.Panel;
        public onInitLayer() {
            //加载皮肤 
            let componet = new eui.Component();
            this.addChild(componet);
            componet.skinName = skins.OptionLayer;

            this.touchEnabled = true;

            this._bg_normal = <eui.Image>componet.getChildByName("bg_normal");
            this._bg_extern = <eui.Image>componet.getChildByName("bg_extern");

            let title_switch0: eui.Panel = <eui.Panel>componet.getChildByName("panel_switch0");
            let title_switch1: eui.Panel = <eui.Panel>componet.getChildByName("panel_switch1");

            this._check_option = <eui.CheckBox>title_switch1.getChildByName("check_option");
            this._check_confirm = <eui.CheckBox>title_switch1.getChildByName("check_confirm");
            this._check_change = <eui.CheckBox>title_switch1.getChildByName("check_change");

            this._panel_option = <eui.Panel>componet.getChildByName("panel_option");
            this._panel_confirm = <eui.Panel>componet.getChildByName("panel_confirm");
            this._panel_change = <eui.Panel>componet.getChildByName("panel_change");

            //添加监听
            this._check_option.addEventListener(eui.UIEvent.CHANGE, this.onEventChange, this)
            this._check_confirm.addEventListener(eui.UIEvent.CHANGE, this.onEventChange, this)
            this._check_change.addEventListener(eui.UIEvent.CHANGE, this.onEventChange, this)

            if (this._mode == 0) {
                title_switch0.visible = true;
                title_switch1.visible = false;
                this._bg_normal.visible = true
                this._bg_extern.visible = false

            } else if (this._mode == 1) {
                title_switch0.visible = false;
                title_switch1.visible = true;
                this._bg_normal.visible = false;
                this._bg_extern.visible = true;
            }


            //设置页面
            this.initOption();
            //实名验证
            this.initCertification();
            //切换账号
            this.initChangeAccount();

            //返回按钮
            var btn = componet.getChildByName("bt_return");
            btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClickEvent, this);

            // var colorMatrix = 
            // [
            //     0.3,0.6,0,0,0,
            //     0.3,0.6,0,0,0,
            //     0.3,0.6,0,0,0,
            //     0,0,0,1,0
            // ];
            // var flilter = new egret.ColorMatrixFilter(colorMatrix);
            // btn.filters = [flilter];
            // btn.filters = null;

            // //语言
            // var radioLan = componet.getChildByName("radio_language_0");
            // radioLan.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onButtonClickEvent,this);

            // //slider
            // var slider_music = <eui.HSlider>componet.getChildByName("slider_music");
            // slider_music.enabled = false;
            // slider_music.trackHighlight.filters = [flilter];
            // slider_music.thumb.filters = [flilter];
        }

        public initOption() {
            
        }

        public initCertification() {

        }

        public initChangeAccount() {
            let bt = this._panel_change.getChildByName("bt_change");
            bt.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClickEvent, this);

        }

        public onExit() {

        }

        private onEventChange(e: eui.UIEvent) {
            var target = <eui.CheckBox>e.target;
            if (target == this._check_option) {
                this._check_confirm.selected = false;
                this._check_change.selected = false;

                this._panel_option.visible = true;
                this._panel_confirm.visible = false;
                this._panel_change.visible = false;
            } else if (target == this._check_confirm) {
                this._check_option.selected = false;
                this._check_change.selected = false;

                this._panel_option.visible = false;
                this._panel_confirm.visible = true;
                this._panel_change.visible = false;
            } else if (target == this._check_change) {
                this._check_option.selected = false;
                this._check_confirm.selected = false;

                this._panel_option.visible = false;
                this._panel_confirm.visible = false;
                this._panel_change.visible = true;
            }
        }

        private onButtonClickEvent(e: egret.TouchEvent) {
            var target = e.target;

            let tw = egret.Tween.get(target)
                .to({ scaleX: 1.1, scaleY: 1.1 }, 50)
                .to({ scaleX: 1.0, scaleY: 1.0 }, 50);

            switch (target.name) {
                case "bt_return":
                    {
                        this._scene.onChangeView();
                    }
                    break;
                case "bt_change":
                    {
                        managers.FrameManager.getInstance().m_IsAuto = false;
                        let loginController = new controller.LoginController();
                        managers.FrameManager.getInstance().replaceScene(loginController, true);
                        
                    }
                    break;
            }
        }
    }
}