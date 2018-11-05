namespace client {
    export class BenefitLayer extends eui.UILayer {
        private _scene: any;
        constructor(scene: any) {
            super();
            this._scene = scene;
        }
        createChildren() {
            super.createChildren();
            this.once(egret.Event.ADDED_TO_STAGE, this.onInitLayer, this);
            this.once(egret.Event.REMOVED_FROM_STAGE, this.onExit, this);

            //注册触摸
            this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegan, this);
            this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
            this.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
        }

        private _scroller: eui.Scroller;
        private _datas: number[] = [];
        public onInitLayer() {
            //加载皮肤 
            let componet = new eui.Component();
            this.addChild(componet);
            componet.skinName = skins.BenefitLayer;

            //按钮
            let bt = componet.getChildByName("bt_close");
            bt.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClick, this);

            //滑动组件 
            this._scroller = componet.getChildByName("scroller") as eui.Scroller;
            //数据索引
            this._datas = [0, 1, 2, 4, 3];

            this.initBenefit(this._datas);

        }

        private initBenefit(data: any) {
            let Group = this._scroller.getChildByName("Group") as eui.Group;
            for (var i = 0; i < data.length; i++) {
                let bt = new eui.Button();
                let idx = data[i];
                bt.name = `benefit_${i}`;
                bt.skinName = `resource/eui_skins/benefit/Benefit${idx}.exml`;
                Group.addChild(bt);
                utils.setAnchorCenter(bt);
                bt.x = this._scroller.width / 2;
                bt.y = 60 + i * 120;
                bt.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClick, this);
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
                case "benefit_0":
                    {
                        if (this._bMoved == true) {
                            return;
                        }
                    }
                    break;
                case "benefit_1":
                    {
                        if (this._bMoved == true) {
                            return;
                        }
                    }
                    break;
                case "benefit_2":
                    {
                        if (this._bMoved == true) {
                            return;
                        }
                    }
                    break;
                case "benefit_3":
                    {
                        if (this._bMoved == true) {
                            return;
                        }
                    }
                    break;
                case "benefit_4":
                    {
                        if (this._bMoved == true) {
                            return;
                        }
                    }
                    break;
            }
        }


        public onExit() {
            this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegan, this);
            this.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
            this.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
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

    }
}