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
/**
 * 操作提示
 */
var game;
(function (game) {
    var sparrowsclm;
    (function (sparrowsclm) {
        var Op_Skins = {
            0x10: "resource/eui_skins/game/poker/sparrowsclm/operate/BaohuButton.exml",
            0x04: "resource/eui_skins/game/poker/sparrowsclm/operate/GangButton.exml",
            0x20: "resource/eui_skins/game/poker/sparrowsclm/operate/QinghuButton.exml",
            0x00: "resource/eui_skins/game/poker/sparrowsclm/operate/PassButton.exml",
            0x02: "resource/eui_skins/game/poker/sparrowsclm/operate/PengButton.exml",
            0x40: "resource/eui_skins/game/poker/sparrowsclm/operate/HuButton.exml"
        };
        var OperateView = /** @class */ (function (_super) {
            __extends(OperateView, _super);
            function OperateView(scene, callback) {
                var _this = _super.call(this) || this;
                _this._scene = scene;
                _this._callback = callback;
                _this.touchEnabled = false;
                return _this;
            }
            OperateView.prototype.setOperateNotify = function (cbActionMask, cbActionData) {
                this.removeChildren();
                if (cbActionMask == cmd.sparrowsclm.WIK_NULL)
                    return;
                var xEnd = this.width - 90;
                var nshowIndex = 1;
                var bt;
                if (cbActionMask & sparrowsclm.WIK_BAO_HU) {
                    bt = new eui.Button();
                    bt.x = xEnd - 275;
                    bt.y = 490;
                    bt.skinName = Op_Skins[sparrowsclm.WIK_BAO_HU];
                    bt.name = "" + sparrowsclm.WIK_BAO_HU;
                    this.addChild(bt);
                    bt.addEventListener(egret.TouchEvent.TOUCH_END, this.onButtonClick, this);
                    nshowIndex++;
                }
                else {
                    if (cbActionMask & sparrowsclm.WIK_CHI_HU) {
                        bt = new eui.Button();
                        bt.x = xEnd - 75 - nshowIndex * 150;
                        bt.y = 490;
                        this.addChild(bt);
                        bt.skinName = Op_Skins[sparrowsclm.WIK_CHI_HU];
                        bt.name = "" + sparrowsclm.WIK_CHI_HU;
                        bt.addEventListener(egret.TouchEvent.TOUCH_END, this.onButtonClick, this);
                        nshowIndex++;
                    }
                    if (cbActionMask & sparrowsclm.WIK_QING_HU) {
                        bt = new eui.Button();
                        bt.x = xEnd - 75 - nshowIndex * 150;
                        bt.y = 490;
                        this.addChild(bt);
                        bt.skinName = Op_Skins[sparrowsclm.WIK_QING_HU];
                        bt.name = "" + sparrowsclm.WIK_QING_HU;
                        bt.addEventListener(egret.TouchEvent.TOUCH_END, this.onButtonClick, this);
                        nshowIndex++;
                    }
                    if (cbActionMask & sparrowsclm.WIK_PENG) {
                        bt = new eui.Button();
                        bt.x = xEnd - 75 - nshowIndex * 150;
                        bt.y = 490;
                        this.addChild(bt);
                        bt.skinName = Op_Skins[sparrowsclm.WIK_PENG];
                        bt.name = "" + sparrowsclm.WIK_PENG;
                        bt.addEventListener(egret.TouchEvent.TOUCH_END, this.onButtonClick, this);
                        nshowIndex++;
                    }
                    //杠
                    var gang = (cbActionMask & sparrowsclm.WIK_GANG) ? true : false;
                    var jgang = (cbActionMask & sparrowsclm.WIK_JIA_GANG) ? true : false;
                    var str = "";
                    if (gang && jgang) {
                        str = "" + 0x0C;
                    }
                    else if (gang) {
                        str = "" + sparrowsclm.WIK_GANG;
                    }
                    else if (jgang) {
                        str = "" + sparrowsclm.WIK_JIA_GANG;
                    }
                    if (str.length > 0) {
                        bt = new eui.Button();
                        bt.x = xEnd - 75 - nshowIndex * 150;
                        bt.y = 490;
                        this.addChild(bt);
                        bt.skinName = Op_Skins[sparrowsclm.WIK_GANG];
                        bt.name = str;
                        bt.addEventListener(egret.TouchEvent.TOUCH_END, this.onButtonClick, this);
                        nshowIndex++;
                    }
                    egret.assert(nshowIndex != 1);
                    if (nshowIndex == 1)
                        return;
                }
                //过
                bt = new eui.Button();
                bt.x = xEnd - 75 - nshowIndex * 150;
                bt.y = 490;
                this.addChild(bt);
                bt.skinName = Op_Skins[sparrowsclm.WIK_NULL];
                bt.name = "" + sparrowsclm.WIK_NULL;
                bt.addEventListener(egret.TouchEvent.TOUCH_END, this.onButtonClick, this);
                nshowIndex++;
            };
            OperateView.prototype.onButtonClick = function (e) {
                var bt = e.target;
                if (null != this._callback) {
                    "";
                    this._callback(Number(bt.name));
                }
            };
            return OperateView;
        }(eui.UILayer));
        sparrowsclm.OperateView = OperateView;
    })(sparrowsclm = game.sparrowsclm || (game.sparrowsclm = {}));
})(game || (game = {}));
