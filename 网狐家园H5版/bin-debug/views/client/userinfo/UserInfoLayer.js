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
var client;
(function (client) {
    var UserInfoLayer = /** @class */ (function (_super) {
        __extends(UserInfoLayer, _super);
        function UserInfoLayer(scene) {
            var _this = _super.call(this) || this;
            _this._scene = scene;
            return _this;
        }
        UserInfoLayer.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.once(egret.Event.ADDED_TO_STAGE, this.onInitLayer, this);
            this.once(egret.Event.REMOVED_FROM_STAGE, this.onExit, this);
        };
        UserInfoLayer.prototype.onInitLayer = function () {
            //加载皮肤 
            var componet = new eui.Component();
            this.addChild(componet);
            componet.skinName = skins.UserInfoLayer;
            //用户头像
            var useritem = managers.FrameManager.getInstance().m_GlobalUserItem;
            var head = models.HeadSprite.createSysHeadWithCorner(useritem, 240, 240, 65, 65);
            utils.setAnchorLeftTop(head);
            this.addChild(head);
            head.x = 140;
            head.y = 160;
            //ID
            var ID = componet.getChildByName("ID");
            ID.text = utils.StringUtils.clipByConfig("" + useritem.dwGameID, 175, utils.StringUtils.getSystemConfig(26));
            //账号
            var account = componet.getChildByName("account");
            account.text = utils.StringUtils.clipByConfig(useritem.szAccounts, 175, utils.StringUtils.getSystemConfig(26));
            //昵称
            var nick = componet.getChildByName("nick");
            nick.text = utils.StringUtils.clipByConfig(useritem.szNickName, 175, utils.StringUtils.getSystemConfig(26));
            //等级
            var level = componet.getChildByName("level");
            level.text = utils.StringUtils.clipByConfig(df.getLevelDescribe(useritem.lUserScore), 175, utils.StringUtils.getSystemConfig(26));
            //经验
            var exp = utils.createBitmapByName("userinfo_icon_level_png", new egret.Rectangle((df.getExpImgLevel(useritem.dwExperience, 20) - 1) * 42, 0, 42, 42));
            this.addChild(exp);
            utils.setAnchorLeftMid(exp);
            exp.x = 850;
            exp.y = 362;
            //钻石
            var diam = componet.getChildByName("diam");
            diam.text = utils.StringUtils.clipByConfig(utils.StringUtils.formatNumberThousands(useritem.lUserIngot), 175, utils.StringUtils.getSystemConfig(26));
            //奖牌
            var medel = componet.getChildByName("medel");
            medel.text = utils.StringUtils.clipByConfig(utils.StringUtils.formatNumberThousands(useritem.lUserMedal), 175, utils.StringUtils.getSystemConfig(26));
            //携带金币
            var takeScore = componet.getChildByName("take");
            takeScore.text = utils.StringUtils.clipByConfig(utils.StringUtils.formatNumberThousands(useritem.lUserScore), 175, utils.StringUtils.getSystemConfig(26));
            //银行金币
            var bankScore = componet.getChildByName("save");
            bankScore.text = utils.StringUtils.clipByConfig(utils.StringUtils.formatNumberThousands(useritem.lUserInsure), 175, utils.StringUtils.getSystemConfig(26));
            //修改头像
            var btn = componet.getChildByName("modifyHead");
            btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClickEvent, this);
            //修改密码
            btn = componet.getChildByName("modifyPassword");
            btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClickEvent, this);
            //修改信息
            btn = componet.getChildByName("modifyInfo");
            btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClickEvent, this);
            //会员特权
            btn = componet.getChildByName("right");
            btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClickEvent, this);
            //充值会员
            btn = componet.getChildByName("join");
            btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClickEvent, this);
            //充值
            btn = componet.getChildByName("purchase");
            btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClickEvent, this);
            //银行
            btn = componet.getChildByName("bank");
            btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClickEvent, this);
            //返回按钮
            btn = componet.getChildByName("bt_return");
            btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onButtonClickEvent, this);
        };
        /**
         * 移除舞台
         */
        UserInfoLayer.prototype.onExit = function () {
        };
        /**
        * 按钮事件
        */
        UserInfoLayer.prototype.onButtonClickEvent = function (e) {
            var target = e.target;
            if (target instanceof eui.Button) {
                var tw = egret.Tween.get(target)
                    .to({ scaleX: 1.1, scaleY: 1.1 }, 50)
                    .to({ scaleX: 1.0, scaleY: 1.0 }, 50);
            }
            if (target.name == "bt_return") {
                this._scene.onChangeView();
            }
            else if (target.name == "modifyPassword" || target.name == "modifyInfo" || target.name == "modifyHead") {
                //遮罩
                var mask = new egret.Shape();
                mask.name = "mask";
                mask.graphics.beginFill(0x000000, 1.0);
                mask.graphics.drawRect(0, 0, this.width, this.height);
                mask.graphics.endFill();
                mask.alpha = 0.5;
                utils.setAnchorCenter(mask);
                this.addChild(mask);
                mask.x = this.width / 2;
                mask.y = this.height / 2;
                mask.touchEnabled = true;
                if (target.name == "modifyPassword") {
                    var passwordModify = new client.PasswordModifyLayer(this);
                    this.addChild(passwordModify);
                    passwordModify.x = 0;
                    passwordModify.y = -this.height;
                    passwordModify.transIn();
                }
                else if (target.name == "modifyInfo") {
                    var InfoModify = new client.InfoModifyLayer(this);
                    this.addChild(InfoModify);
                    InfoModify.x = 0;
                    InfoModify.y = -this.height;
                    InfoModify.transIn();
                }
                else {
                    var faceModify = new client.ModifyFaceLayer(this);
                    this.addChild(faceModify);
                    faceModify.x = 0;
                    faceModify.y = -this.height;
                    faceModify.transIn();
                }
            }
            else if (target.name == "join" || target.name == "purchase" || target.name == "bank") {
                var nType = (target.name == "bank") ? 2 /* Bank */ : 0 /* Ingot */;
                this._scene._shopIndex = nType;
                this._scene.onChangeView(df.MODE_SHOP);
            }
        };
        return UserInfoLayer;
    }(eui.UILayer));
    client.UserInfoLayer = UserInfoLayer;
})(client || (client = {}));
