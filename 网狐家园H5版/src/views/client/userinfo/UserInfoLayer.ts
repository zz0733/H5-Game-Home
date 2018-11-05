namespace client {
    export class UserInfoLayer extends eui.UILayer {
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

        public onInitLayer() {
            //加载皮肤 
            let componet = new eui.Component();
            this.addChild(componet);
            componet.skinName = skins.UserInfoLayer;

            //用户头像
            const useritem = managers.FrameManager.getInstance().m_GlobalUserItem;
            const head = models.HeadSprite.createSysHeadWithCorner(useritem, 240, 240, 65, 65);
            utils.setAnchorLeftTop(head);
            this.addChild(head);
            head.x = 140;
            head.y = 160;

            //ID
            let ID = componet.getChildByName("ID") as eui.Label;
            ID.text = utils.StringUtils.clipByConfig(`${useritem.dwGameID}`,175,utils.StringUtils.getSystemConfig(26));

            //账号
            let account = componet.getChildByName("account") as eui.Label;
            account.text = utils.StringUtils.clipByConfig(useritem.szAccounts,175,utils.StringUtils.getSystemConfig(26));

            //昵称
            let nick = componet.getChildByName("nick") as eui.Label;
            nick.text = utils.StringUtils.clipByConfig(useritem.szNickName,175,utils.StringUtils.getSystemConfig(26));

            //等级
            let level = componet.getChildByName("level") as eui.Label;
            level.text = utils.StringUtils.clipByConfig(df.getLevelDescribe(useritem.lUserScore),175,utils.StringUtils.getSystemConfig(26));

            //经验
            let exp =  utils.createBitmapByName("userinfo_icon_level_png",new egret.Rectangle(
            (df.getExpImgLevel(useritem.dwExperience,20)-1)*42,0,42,42));
            this.addChild(exp);
            utils.setAnchorLeftMid(exp);
            exp.x = 850;
            exp.y = 362;

            //钻石
            let diam = componet.getChildByName("diam") as eui.Label;
            diam.text = utils.StringUtils.clipByConfig(utils.StringUtils.formatNumberThousands(useritem.lUserIngot),
            175,utils.StringUtils.getSystemConfig(26));

            //奖牌
            let medel = componet.getChildByName("medel") as eui.Label;
            medel.text = utils.StringUtils.clipByConfig(utils.StringUtils.formatNumberThousands(useritem.lUserMedal),
            175,utils.StringUtils.getSystemConfig(26));

            //携带金币
            let takeScore = componet.getChildByName("take") as eui.Label;
            takeScore.text = utils.StringUtils.clipByConfig(utils.StringUtils.formatNumberThousands(useritem.lUserScore),
            175,utils.StringUtils.getSystemConfig(26));

            //银行金币
            let bankScore = componet.getChildByName("save") as eui.Label;
            bankScore.text = utils.StringUtils.clipByConfig(utils.StringUtils.formatNumberThousands(useritem.lUserInsure),
            175,utils.StringUtils.getSystemConfig(26));

            //修改头像
            let btn = componet.getChildByName("modifyHead") as eui.Button;
            btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClickEvent, this);
            //修改密码
            btn = componet.getChildByName("modifyPassword") as eui.Button;
            btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClickEvent, this);
            //修改信息
            btn = componet.getChildByName("modifyInfo") as eui.Button;
            btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClickEvent, this);
            //会员特权
            btn = componet.getChildByName("right") as eui.Button;
            btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClickEvent, this);
            //充值会员
            btn = componet.getChildByName("join") as eui.Button;
            btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClickEvent, this);
            //充值
            btn = componet.getChildByName("purchase") as eui.Button;
            btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClickEvent, this);
            //银行
            btn = componet.getChildByName("bank") as eui.Button;
            btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClickEvent, this);

            //返回按钮
            btn = componet.getChildByName("bt_return") as eui.Button;
            btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClickEvent, this);
        }

        /**
         * 移除舞台
         */
        public onExit() {
 
        }

         /**
         * 按钮事件
         */
        private onButtonClickEvent(e: egret.TouchEvent) {
            var target = e.target;
            if (target instanceof eui.Button) {
                let tw = egret.Tween.get(target)
                    .to({ scaleX: 1.1, scaleY: 1.1 }, 50)
                    .to({ scaleX: 1.0, scaleY: 1.0 }, 50);
            }

            if (target.name == "bt_return") {
                this._scene.onChangeView();
            }else if (target.name == "modifyPassword" || target.name == "modifyInfo" || target.name == "modifyHead") {
                //遮罩
                let mask = new egret.Shape();
                mask.name = "mask";
                mask.graphics.beginFill(0x000000, 1.0);
                mask.graphics.drawRect(0, 0, this.width, this.height);
                mask.graphics.endFill();
                mask.alpha = 0.5;
                utils.setAnchorCenter(mask)
                this.addChild(mask);
                mask.x = this.width / 2;
                mask.y = this.height / 2;
                mask.touchEnabled = true;
                if (target.name == "modifyPassword") {
                    let passwordModify: PasswordModifyLayer= new PasswordModifyLayer(this);
                    this.addChild(passwordModify);
                    passwordModify.x = 0;
                    passwordModify.y = -this.height;
                    passwordModify.transIn();
                }else if (target.name == "modifyInfo") {
                    let InfoModify: InfoModifyLayer= new InfoModifyLayer(this);
                    this.addChild(InfoModify);
                    InfoModify.x = 0;
                    InfoModify.y = -this.height;
                    InfoModify.transIn();
                }else {
                    let faceModify: ModifyFaceLayer= new ModifyFaceLayer(this);
                    this.addChild(faceModify);
                    faceModify.x = 0;
                    faceModify.y = -this.height;
                    faceModify.transIn();
                }
            }else if (target.name == "join" || target.name == "purchase" || target.name == "bank") {
                const nType = (target.name == "bank") ? df.eShopType.Bank : df.eShopType.Ingot;
                this._scene._shopIndex = nType;
                this._scene.onChangeView(df.MODE_SHOP);
            }
        }
    }
}