window.skins={};
window.skins.sparrowsclm={};
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {"skins.ProgressBarSkin_1":"resource/eui_skins/welcome/ProgressBarSkin.exml","skins.LogonLayer":"resource/eui_skins/logon/LogonLayer.exml","skins.LogonModeView":"resource/eui_skins/logon/LogonModeView.exml","skins.LogonView":"resource/eui_skins/logon/LogonView.exml","skins.RegistView":"resource/eui_skins/logon/RegistView.exml","skins.TextInputLogon":"resource/eui_skins/logon/TextInputLogon.exml","skins.TextInputRegist":"resource/eui_skins/logon/TextInputRegist.exml","skins.ModifyInput":"resource/eui_skins/other/ModifyInput.exml","skins.NoticeLayer":"resource/eui_skins/other/NoticeLayer.exml","skins.OptionLayer":"resource/eui_skins/other/OptionLayer.exml","skins.OptionSlider":"resource/eui_skins/other/OptionSlider.exml","skins.UserInfoLayer":"resource/eui_skins/other/UserInfoLayer.exml","skins.GameHelpLayer":"resource/eui_skins/other/GameHelpLayer.exml","skins.ServiceLayer":"resource/eui_skins/other/ServiceLayer.exml","skins.InfoModify":"resource/eui_skins/other/InfoModify.exml","skins.ShareLayer":"resource/eui_skins/other/ShareLayer.exml","skins.CommonListView":"resource/eui_skins/common/CommonListView.exml","skins.GeneralButton":"resource/eui_skins/common/GeneralButton.exml","skins.Plaza":"resource/eui_skins/client/Plaza.exml","skins.RoomListLayer":"resource/eui_skins/roomlist/RoomListLayer.exml","skins.GameListItem":"resource/eui_skins/client/GameListItem.exml","skins.PasswordModify":"resource/eui_skins/other/PasswordModify.exml","skins.ShopLayer":"resource/eui_skins/shop/ShopLayer.exml","skins.Diamond":"resource/eui_skins/shop/Diamond.exml","skins.Gold":"resource/eui_skins/shop/Gold.exml","skins.RealItem":"resource/eui_skins/shop/RealItem.exml","skins.RankLayer":"resource/eui_skins/rank/RankLayer.exml","skins.RankCell":"resource/eui_skins/rank/RankCell.exml","skins.BattleFindLayer":"resource/eui_skins/battle/BattleFindLayer.exml","skins.BattleListLayer":"resource/eui_skins/battle/BattleListLayer.exml","skins.BattleRecordLayer":"resource/eui_skins/battle/BattleRecordLayer.exml","skins.BattleCreateLayer":"resource/eui_skins/battle/BattleCreateLayer.exml","skins.BattleNumInput":"resource/eui_skins/battle/BattleNumInput.exml","skins.BattleDetailLayer":"resource/eui_skins/battle/BattleDetailLayer.exml","skins.RadioGroup":"resource/eui_skins/battle/RadioGroup.exml","skins.BenefitLayer":"resource/eui_skins/benefit/BenefitLayer.exml","skins.sparrowsclm.GameLayer":"resource/eui_skins/game/poker/sparrowsclm/GameLayer.exml","skins.Dialog":"resource/eui_skins/global/Dialog.exml"};generateEUI.paths['resource/eui_skins/battle/BattleCreateLayer.exml'] = window.skins.BattleCreateLayer = (function (_super) {
	__extends(BattleCreateLayer, _super);
	var BattleCreateLayer$Skin1 = 	(function (_super) {
		__extends(BattleCreateLayer$Skin1, _super);
		function BattleCreateLayer$Skin1() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","general_bt_return_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BattleCreateLayer$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "general_bt_return_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return BattleCreateLayer$Skin1;
	})(eui.Skin);

	var BattleCreateLayer$Skin2 = 	(function (_super) {
		__extends(BattleCreateLayer$Skin2, _super);
		function BattleCreateLayer$Skin2() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","battle_bt_create_0_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BattleCreateLayer$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "battle_bt_create_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return BattleCreateLayer$Skin2;
	})(eui.Skin);

	var BattleCreateLayer$Skin3 = 	(function (_super) {
		__extends(BattleCreateLayer$Skin3, _super);
		function BattleCreateLayer$Skin3() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","battle_bt_set_confirm_0_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BattleCreateLayer$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "battle_bt_set_confirm_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return BattleCreateLayer$Skin3;
	})(eui.Skin);

	var BattleCreateLayer$Skin4 = 	(function (_super) {
		__extends(BattleCreateLayer$Skin4, _super);
		function BattleCreateLayer$Skin4() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","battle_bt_rule_0_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BattleCreateLayer$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "battle_bt_rule_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return BattleCreateLayer$Skin4;
	})(eui.Skin);

	var BattleCreateLayer$Skin5 = 	(function (_super) {
		__extends(BattleCreateLayer$Skin5, _super);
		function BattleCreateLayer$Skin5() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","battle_bt_list_0_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BattleCreateLayer$Skin5.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "battle_bt_list_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return BattleCreateLayer$Skin5;
	})(eui.Skin);

	function BattleCreateLayer() {
		_super.call(this);
		this.skinParts = ["BG","Scrolller","Tips","Config","PageUp","PageDown"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.BG_i(),this._Button1_i(),this.Scrolller_i(),this.Tips_i(),this._Button2_i(),this._Button3_i(),this._Button4_i(),this._Button5_i(),this.Config_i(),this.PageUp_i(),this.PageDown_i()];
	}
	var _proto = BattleCreateLayer.prototype;

	_proto.BG_i = function () {
		var t = new eui.Image();
		this.BG = t;
		t.anchorOffsetX = 656;
		t.anchorOffsetY = 347;
		t.fillMode = "clip";
		t.height = 694;
		t.source = "battle_frame_new_png";
		t.width = 1312;
		t.x = 667;
		t.y = 375;
		return t;
	};
	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.name = "bt_close";
		t.x = 5;
		t.y = -5;
		t.skinName = BattleCreateLayer$Skin1;
		return t;
	};
	_proto.Scrolller_i = function () {
		var t = new eui.Scroller();
		this.Scrolller = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 561.57;
		t.name = "GameListScorll";
		t.scrollPolicyH = "off";
		t.width = 340;
		t.x = 32;
		t.y = 90;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 555.51;
		t.name = "Group";
		t.width = 338;
		t.x = 0;
		t.y = 40;
		return t;
	};
	_proto.Tips_i = function () {
		var t = new eui.Label();
		this.Tips = t;
		t.size = 20;
		t.text = "平台仅供休闲娱乐！请健康游戏，严禁赌博！";
		t.textColor = 0xffbf7b;
		t.x = 903;
		t.y = 7;
		return t;
	};
	_proto._Button2_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 138;
		t.anchorOffsetY = 49;
		t.label = "";
		t.name = "battleCreate";
		t.x = 1125;
		t.y = 694;
		t.skinName = BattleCreateLayer$Skin2;
		return t;
	};
	_proto._Button3_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 138;
		t.anchorOffsetY = 49;
		t.label = "";
		t.name = "battle_confirm";
		t.visible = false;
		t.x = 1125;
		t.y = 694;
		t.skinName = BattleCreateLayer$Skin3;
		return t;
	};
	_proto._Button4_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 94;
		t.anchorOffsetY = 36;
		t.label = "";
		t.name = "gameRule";
		t.x = 803;
		t.y = 694;
		t.skinName = BattleCreateLayer$Skin4;
		return t;
	};
	_proto._Button5_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 94;
		t.anchorOffsetY = 36;
		t.label = "";
		t.name = "battleList";
		t.x = 518;
		t.y = 694;
		t.skinName = BattleCreateLayer$Skin5;
		return t;
	};
	_proto.Config_i = function () {
		var t = new eui.Scroller();
		this.Config = t;
		t.bounces = true;
		t.enabled = true;
		t.height = 530;
		t.name = "battleConfig";
		t.scrollPolicyH = "off";
		t.scrollPolicyV = "on";
		t.touchEnabled = true;
		t.width = 910;
		t.x = 385;
		t.y = 57;
		t.viewport = this._Group2_i();
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.name = "Group";
		t.touchEnabled = true;
		return t;
	};
	_proto.PageUp_i = function () {
		var t = new eui.Image();
		this.PageUp = t;
		t.anchorOffsetX = 27.5;
		t.anchorOffsetY = 18.5;
		t.fillMode = "clip";
		t.height = 37;
		t.name = "PageUp";
		t.source = "battle_page_up_png";
		t.width = 55;
		t.x = 203;
		t.y = 62;
		return t;
	};
	_proto.PageDown_i = function () {
		var t = new eui.Image();
		this.PageDown = t;
		t.anchorOffsetX = 27.5;
		t.anchorOffsetY = 18.5;
		t.fillMode = "clip";
		t.height = 37;
		t.name = "PageDown";
		t.source = "battle_page_down_png";
		t.width = 55;
		t.x = 203;
		t.y = 682;
		return t;
	};
	return BattleCreateLayer;
})(eui.Skin);generateEUI.paths['resource/eui_skins/battle/BattleDetailLayer.exml'] = window.skins.BattleDetailLayer = (function (_super) {
	__extends(BattleDetailLayer, _super);
	var BattleDetailLayer$Skin6 = 	(function (_super) {
		__extends(BattleDetailLayer$Skin6, _super);
		function BattleDetailLayer$Skin6() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","general_bt_close_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","general_bt_close_png")
					])
			];
		}
		var _proto = BattleDetailLayer$Skin6.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "general_bt_close_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return BattleDetailLayer$Skin6;
	})(eui.Skin);

	var BattleDetailLayer$Skin7 = 	(function (_super) {
		__extends(BattleDetailLayer$Skin7, _super);
		function BattleDetailLayer$Skin7() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","battle_bt_dismiss_0_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BattleDetailLayer$Skin7.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "battle_bt_dismiss_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return BattleDetailLayer$Skin7;
	})(eui.Skin);

	var BattleDetailLayer$Skin8 = 	(function (_super) {
		__extends(BattleDetailLayer$Skin8, _super);
		function BattleDetailLayer$Skin8() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","battle_bt_startgame_0_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BattleDetailLayer$Skin8.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "battle_bt_startgame_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return BattleDetailLayer$Skin8;
	})(eui.Skin);

	var BattleDetailLayer$Skin9 = 	(function (_super) {
		__extends(BattleDetailLayer$Skin9, _super);
		function BattleDetailLayer$Skin9() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","battle_bt_share_0_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BattleDetailLayer$Skin9.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "battle_bt_share_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return BattleDetailLayer$Skin9;
	})(eui.Skin);

	function BattleDetailLayer() {
		_super.call(this);
		this.skinParts = ["Mask","Bg","Title","Close","Kind","Settle","Create","Time","SettleKind","Cell","CellNum","KindName","InfoBG","Tips","Start"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.Mask_i(),this.Bg_i(),this.Title_i(),this.Close_i(),this._Image1_i(),this._Image2_i(),this._Button1_i(),this.Kind_i(),this.Settle_i(),this.Create_i(),this.Time_i(),this.SettleKind_i(),this.Cell_i(),this.CellNum_i(),this.KindName_i(),this.InfoBG_i(),this.Tips_i(),this.Start_i(),this._Button2_i(),this._Label1_i()];
	}
	var _proto = BattleDetailLayer.prototype;

	_proto.Mask_i = function () {
		var t = new eui.Image();
		this.Mask = t;
		t.fillMode = "clip";
		t.height = 750;
		t.source = "general_back_frame_0_png";
		t.width = 1334;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.Bg_i = function () {
		var t = new eui.Image();
		this.Bg = t;
		t.anchorOffsetX = 398;
		t.anchorOffsetY = 279.5;
		t.fillMode = "clip";
		t.height = 559;
		t.source = "general_back_frame_1_png";
		t.width = 796;
		t.x = 667;
		t.y = 375;
		return t;
	};
	_proto.Title_i = function () {
		var t = new eui.Image();
		this.Title = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "clip";
		t.height = 38.18;
		t.source = "battle_title_detail_png";
		t.width = 142.73;
		t.x = 595.64;
		t.y = 112.42;
		return t;
	};
	_proto.Close_i = function () {
		var t = new eui.Button();
		this.Close = t;
		t.label = "";
		t.name = "bt_close";
		t.x = 1001;
		t.y = 100.51;
		t.skinName = BattleDetailLayer$Skin6;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 212;
		t.anchorOffsetY = 24;
		t.fillMode = "clip";
		t.height = 48;
		t.source = "battle_number_frame_png";
		t.width = 424;
		t.x = 667;
		t.y = 204.18;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "clip";
		t.height = 38.19;
		t.source = "battle_text_detail_0_png";
		t.width = 100.3;
		t.x = 470.34;
		t.y = 183.09;
		return t;
	};
	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 68.5;
		t.anchorOffsetY = 0;
		t.label = "";
		t.name = "dissmiss";
		t.x = 796;
		t.y = 185;
		t.skinName = BattleDetailLayer$Skin7;
		return t;
	};
	_proto.Kind_i = function () {
		var t = new eui.Label();
		this.Kind = t;
		t.size = 22;
		t.text = "游戏类型 :";
		t.textColor = 0x000000;
		t.x = 354;
		t.y = 245;
		return t;
	};
	_proto.Settle_i = function () {
		var t = new eui.Label();
		this.Settle = t;
		t.size = 22;
		t.text = "结算类型 :";
		t.textColor = 0x000000;
		t.x = 354;
		t.y = 280;
		return t;
	};
	_proto.Create_i = function () {
		var t = new eui.Label();
		this.Create = t;
		t.size = 22;
		t.text = "创建 :";
		t.textColor = 0x000000;
		t.x = 705.5;
		t.y = 280;
		return t;
	};
	_proto.Time_i = function () {
		var t = new eui.Label();
		this.Time = t;
		t.name = "Time";
		t.size = 22;
		t.text = "2018/09/19  23:59:59";
		t.textColor = 0x000000;
		t.x = 770;
		t.y = 280;
		return t;
	};
	_proto.SettleKind_i = function () {
		var t = new eui.Label();
		this.SettleKind = t;
		t.name = "SettleKind";
		t.size = 22;
		t.text = "----";
		t.textColor = 0x000000;
		t.x = 460;
		t.y = 280;
		return t;
	};
	_proto.Cell_i = function () {
		var t = new eui.Label();
		this.Cell = t;
		t.size = 22;
		t.text = "底分 :";
		t.textColor = 0x000000;
		t.x = 705.5;
		t.y = 245;
		return t;
	};
	_proto.CellNum_i = function () {
		var t = new eui.Label();
		this.CellNum = t;
		t.name = "CellScore";
		t.size = 22;
		t.text = "1分";
		t.textColor = 0x000000;
		t.x = 770;
		t.y = 245;
		return t;
	};
	_proto.KindName_i = function () {
		var t = new eui.Label();
		this.KindName = t;
		t.name = "KindName";
		t.size = 22;
		t.text = "断钩卡麻将";
		t.textColor = 0x000000;
		t.x = 460;
		t.y = 245;
		return t;
	};
	_proto.InfoBG_i = function () {
		var t = new eui.Image();
		this.InfoBG = t;
		t.anchorOffsetX = 319.5;
		t.fillMode = "clip";
		t.height = 193;
		t.source = "battle_detail_frame_1_png";
		t.width = 639;
		t.x = 667;
		t.y = 308;
		return t;
	};
	_proto.Tips_i = function () {
		var t = new eui.Label();
		this.Tips = t;
		t.anchorOffsetX = 250;
		t.anchorOffsetY = 15;
		t.horizontalCenter = 0;
		t.name = "Tips";
		t.size = 24;
		t.text = "游戏尚未开始，暂无用户信息";
		t.textAlign = "center";
		t.textColor = 0xb67747;
		t.width = 500;
		t.y = 404.5;
		return t;
	};
	_proto.Start_i = function () {
		var t = new eui.Button();
		this.Start = t;
		t.anchorOffsetX = 103;
		t.anchorOffsetY = 42;
		t.label = "";
		t.name = "start";
		t.x = 547;
		t.y = 560;
		t.skinName = BattleDetailLayer$Skin8;
		return t;
	};
	_proto._Button2_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 103;
		t.anchorOffsetY = 42;
		t.label = "";
		t.name = "share";
		t.x = 787;
		t.y = 560;
		t.skinName = BattleDetailLayer$Skin9;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.name = "roomNumber";
		t.size = 24;
		t.text = "140504";
		t.textColor = 0xffd482;
		t.x = 581;
		t.y = 194;
		return t;
	};
	return BattleDetailLayer;
})(eui.Skin);generateEUI.paths['resource/eui_skins/battle/BattleFindLayer.exml'] = window.skins.BattleFindLayer = (function (_super) {
	__extends(BattleFindLayer, _super);
	var BattleFindLayer$Skin10 = 	(function (_super) {
		__extends(BattleFindLayer$Skin10, _super);
		function BattleFindLayer$Skin10() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","general_bt_return_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BattleFindLayer$Skin10.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "general_bt_return_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return BattleFindLayer$Skin10;
	})(eui.Skin);

	var BattleFindLayer$Skin11 = 	(function (_super) {
		__extends(BattleFindLayer$Skin11, _super);
		function BattleFindLayer$Skin11() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","battle_bt_keyboard_0_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BattleFindLayer$Skin11.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "battle_bt_keyboard_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return BattleFindLayer$Skin11;
	})(eui.Skin);

	var BattleFindLayer$Skin12 = 	(function (_super) {
		__extends(BattleFindLayer$Skin12, _super);
		function BattleFindLayer$Skin12() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","battle_bt_keyboard_0_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BattleFindLayer$Skin12.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "battle_bt_keyboard_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return BattleFindLayer$Skin12;
	})(eui.Skin);

	var BattleFindLayer$Skin13 = 	(function (_super) {
		__extends(BattleFindLayer$Skin13, _super);
		function BattleFindLayer$Skin13() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","battle_bt_keyboard_0_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BattleFindLayer$Skin13.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "battle_bt_keyboard_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return BattleFindLayer$Skin13;
	})(eui.Skin);

	var BattleFindLayer$Skin14 = 	(function (_super) {
		__extends(BattleFindLayer$Skin14, _super);
		function BattleFindLayer$Skin14() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","battle_bt_keyboard_0_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BattleFindLayer$Skin14.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "battle_bt_keyboard_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return BattleFindLayer$Skin14;
	})(eui.Skin);

	var BattleFindLayer$Skin15 = 	(function (_super) {
		__extends(BattleFindLayer$Skin15, _super);
		function BattleFindLayer$Skin15() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","battle_bt_keyboard_0_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BattleFindLayer$Skin15.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "battle_bt_keyboard_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return BattleFindLayer$Skin15;
	})(eui.Skin);

	var BattleFindLayer$Skin16 = 	(function (_super) {
		__extends(BattleFindLayer$Skin16, _super);
		function BattleFindLayer$Skin16() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","battle_bt_delete_0_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BattleFindLayer$Skin16.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "battle_bt_delete_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return BattleFindLayer$Skin16;
	})(eui.Skin);

	var BattleFindLayer$Skin17 = 	(function (_super) {
		__extends(BattleFindLayer$Skin17, _super);
		function BattleFindLayer$Skin17() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","battle_bt_keyboard_0_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BattleFindLayer$Skin17.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "battle_bt_keyboard_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return BattleFindLayer$Skin17;
	})(eui.Skin);

	var BattleFindLayer$Skin18 = 	(function (_super) {
		__extends(BattleFindLayer$Skin18, _super);
		function BattleFindLayer$Skin18() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","battle_bt_confirm_0_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BattleFindLayer$Skin18.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "battle_bt_confirm_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return BattleFindLayer$Skin18;
	})(eui.Skin);

	var BattleFindLayer$Skin19 = 	(function (_super) {
		__extends(BattleFindLayer$Skin19, _super);
		function BattleFindLayer$Skin19() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","battle_bt_keyboard_0_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BattleFindLayer$Skin19.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "battle_bt_keyboard_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return BattleFindLayer$Skin19;
	})(eui.Skin);

	var BattleFindLayer$Skin20 = 	(function (_super) {
		__extends(BattleFindLayer$Skin20, _super);
		function BattleFindLayer$Skin20() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","battle_bt_keyboard_0_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BattleFindLayer$Skin20.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "battle_bt_keyboard_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return BattleFindLayer$Skin20;
	})(eui.Skin);

	var BattleFindLayer$Skin21 = 	(function (_super) {
		__extends(BattleFindLayer$Skin21, _super);
		function BattleFindLayer$Skin21() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","battle_bt_keyboard_0_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BattleFindLayer$Skin21.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "battle_bt_keyboard_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return BattleFindLayer$Skin21;
	})(eui.Skin);

	var BattleFindLayer$Skin22 = 	(function (_super) {
		__extends(BattleFindLayer$Skin22, _super);
		function BattleFindLayer$Skin22() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","battle_bt_keyboard_0_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BattleFindLayer$Skin22.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "battle_bt_keyboard_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return BattleFindLayer$Skin22;
	})(eui.Skin);

	function BattleFindLayer() {
		_super.call(this);
		this.skinParts = ["Return","keyBord0","keybord3","keybord6","keybord7","keybord8","keybord9","keybord10","keybord11","keybord4","keybord5","keybord1","keybord2"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Label1_i(),this.Return_i(),this._Image4_i(),this._Image5_i(),this.keyBord0_i(),this.keybord3_i(),this.keybord6_i(),this.keybord7_i(),this.keybord8_i(),this.keybord9_i(),this.keybord10_i(),this.keybord11_i(),this.keybord4_i(),this.keybord5_i(),this.keybord1_i(),this.keybord2_i()];
	}
	var _proto = BattleFindLayer.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "clip";
		t.height = 750;
		t.source = "general_background3_png";
		t.width = 1334;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "clip";
		t.height = 174;
		t.source = "battle_frame_2_png";
		t.width = 398;
		t.x = 468;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "clip";
		t.height = 78;
		t.source = "battle_title_battle_png";
		t.width = 268;
		t.x = 533;
		t.y = 23;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 26;
		t.text = "加入房间";
		t.textColor = 0xffeb8b;
		t.x = 615;
		t.y = 117;
		return t;
	};
	_proto.Return_i = function () {
		var t = new eui.Button();
		this.Return = t;
		t.anchorOffsetX = 50.5;
		t.anchorOffsetY = 50.5;
		t.label = "";
		t.name = "bt_close";
		t.x = 50.5;
		t.y = 56.5;
		t.skinName = BattleFindLayer$Skin10;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "clip";
		t.height = 128;
		t.source = "battle_num_frame_png";
		t.width = 650;
		t.x = 342;
		t.y = 157;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "clip";
		t.height = 706;
		t.source = "general_bt_lora_png";
		t.touchEnabled = false;
		t.width = 402;
		t.x = 0;
		t.y = 43;
		return t;
	};
	_proto.keyBord0_i = function () {
		var t = new eui.Button();
		this.keyBord0 = t;
		t.anchorOffsetX = 100;
		t.anchorOffsetY = 54.5;
		t.label = "";
		t.name = "keybord0";
		t.x = 450;
		t.y = 340;
		t.skinName = BattleFindLayer$Skin11;
		return t;
	};
	_proto.keybord3_i = function () {
		var t = new eui.Button();
		this.keybord3 = t;
		t.anchorOffsetX = 100;
		t.anchorOffsetY = 54.5;
		t.label = "";
		t.name = "keybord3";
		t.x = 450;
		t.y = 450;
		t.skinName = BattleFindLayer$Skin12;
		return t;
	};
	_proto.keybord6_i = function () {
		var t = new eui.Button();
		this.keybord6 = t;
		t.anchorOffsetX = 100;
		t.anchorOffsetY = 54.5;
		t.label = "";
		t.name = "keybord6";
		t.x = 450;
		t.y = 560;
		t.skinName = BattleFindLayer$Skin13;
		return t;
	};
	_proto.keybord7_i = function () {
		var t = new eui.Button();
		this.keybord7 = t;
		t.anchorOffsetX = 100;
		t.anchorOffsetY = 54.5;
		t.label = "";
		t.name = "keybord7";
		t.x = 667;
		t.y = 560;
		t.skinName = BattleFindLayer$Skin14;
		return t;
	};
	_proto.keybord8_i = function () {
		var t = new eui.Button();
		this.keybord8 = t;
		t.anchorOffsetX = 100;
		t.anchorOffsetY = 54.5;
		t.label = "";
		t.name = "keybord8";
		t.x = 881;
		t.y = 560;
		t.skinName = BattleFindLayer$Skin15;
		return t;
	};
	_proto.keybord9_i = function () {
		var t = new eui.Button();
		this.keybord9 = t;
		t.anchorOffsetX = 100;
		t.anchorOffsetY = 54.5;
		t.label = "";
		t.name = "keybord9";
		t.x = 450;
		t.y = 670;
		t.skinName = BattleFindLayer$Skin16;
		return t;
	};
	_proto.keybord10_i = function () {
		var t = new eui.Button();
		this.keybord10 = t;
		t.anchorOffsetX = 100;
		t.anchorOffsetY = 54.5;
		t.label = "";
		t.name = "keybord10";
		t.x = 667;
		t.y = 670;
		t.skinName = BattleFindLayer$Skin17;
		return t;
	};
	_proto.keybord11_i = function () {
		var t = new eui.Button();
		this.keybord11 = t;
		t.anchorOffsetX = 100;
		t.anchorOffsetY = 54.5;
		t.label = "";
		t.name = "keybord11";
		t.x = 881;
		t.y = 670;
		t.skinName = BattleFindLayer$Skin18;
		return t;
	};
	_proto.keybord4_i = function () {
		var t = new eui.Button();
		this.keybord4 = t;
		t.anchorOffsetX = 100;
		t.anchorOffsetY = 54.5;
		t.label = "";
		t.name = "keybord4";
		t.x = 667;
		t.y = 450;
		t.skinName = BattleFindLayer$Skin19;
		return t;
	};
	_proto.keybord5_i = function () {
		var t = new eui.Button();
		this.keybord5 = t;
		t.anchorOffsetX = 100;
		t.anchorOffsetY = 54.5;
		t.label = "";
		t.name = "keybord5";
		t.x = 881;
		t.y = 450;
		t.skinName = BattleFindLayer$Skin20;
		return t;
	};
	_proto.keybord1_i = function () {
		var t = new eui.Button();
		this.keybord1 = t;
		t.anchorOffsetX = 100;
		t.anchorOffsetY = 54.5;
		t.label = "";
		t.name = "keybord1";
		t.x = 667;
		t.y = 340;
		t.skinName = BattleFindLayer$Skin21;
		return t;
	};
	_proto.keybord2_i = function () {
		var t = new eui.Button();
		this.keybord2 = t;
		t.anchorOffsetX = 100;
		t.anchorOffsetY = 54.5;
		t.label = "";
		t.name = "keybord2";
		t.x = 881;
		t.y = 340;
		t.skinName = BattleFindLayer$Skin22;
		return t;
	};
	return BattleFindLayer;
})(eui.Skin);generateEUI.paths['resource/eui_skins/battle/BattleListLayer.exml'] = window.skins.BattleListLayer = (function (_super) {
	__extends(BattleListLayer, _super);
	var BattleListLayer$Skin23 = 	(function (_super) {
		__extends(BattleListLayer$Skin23, _super);
		function BattleListLayer$Skin23() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","general_bt_return_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BattleListLayer$Skin23.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "general_bt_return_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return BattleListLayer$Skin23;
	})(eui.Skin);

	var BattleListLayer$Skin24 = 	(function (_super) {
		__extends(BattleListLayer$Skin24, _super);
		function BattleListLayer$Skin24() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","battle_bt_record_0_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BattleListLayer$Skin24.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "battle_bt_record_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return BattleListLayer$Skin24;
	})(eui.Skin);

	var BattleListLayer$Skin25 = 	(function (_super) {
		__extends(BattleListLayer$Skin25, _super);
		function BattleListLayer$Skin25() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","general_bt_list_recharge_0_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BattleListLayer$Skin25.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "general_bt_list_recharge_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return BattleListLayer$Skin25;
	})(eui.Skin);

	var BattleListLayer$Skin26 = 	(function (_super) {
		__extends(BattleListLayer$Skin26, _super);
		function BattleListLayer$Skin26() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","general_bt_list_bank_0_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BattleListLayer$Skin26.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "general_bt_list_bank_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return BattleListLayer$Skin26;
	})(eui.Skin);

	var BattleListLayer$Skin27 = 	(function (_super) {
		__extends(BattleListLayer$Skin27, _super);
		function BattleListLayer$Skin27() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","battle_bt_create_room_0_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BattleListLayer$Skin27.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "battle_bt_create_room_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return BattleListLayer$Skin27;
	})(eui.Skin);

	function BattleListLayer() {
		_super.call(this);
		this.skinParts = ["BG","Return","Record","Shop0","Shop1","Create"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.BG_i(),this.Return_i(),this.Record_i(),this.Shop0_i(),this.Shop1_i(),this.Create_i(),this._Image1_i(),this._Image2_i(),this._Label1_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Scroller1_i()];
	}
	var _proto = BattleListLayer.prototype;

	_proto.BG_i = function () {
		var t = new eui.Image();
		this.BG = t;
		t.fillMode = "clip";
		t.height = 750;
		t.name = "record";
		t.source = "general_background3_png";
		t.width = 1334;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.Return_i = function () {
		var t = new eui.Button();
		this.Return = t;
		t.label = "";
		t.name = "bt_close";
		t.x = 0;
		t.y = 13;
		t.skinName = BattleListLayer$Skin23;
		return t;
	};
	_proto.Record_i = function () {
		var t = new eui.Button();
		this.Record = t;
		t.anchorOffsetX = 102;
		t.anchorOffsetY = 41.5;
		t.enabled = true;
		t.label = "";
		t.name = "battleRecord";
		t.touchEnabled = true;
		t.x = 1198;
		t.y = 72.5;
		t.skinName = BattleListLayer$Skin24;
		return t;
	};
	_proto.Shop0_i = function () {
		var t = new eui.Button();
		this.Shop0 = t;
		t.anchorOffsetX = 81.5;
		t.anchorOffsetY = 61;
		t.label = "";
		t.name = "diamond";
		t.x = 1053;
		t.y = 640;
		t.skinName = BattleListLayer$Skin25;
		return t;
	};
	_proto.Shop1_i = function () {
		var t = new eui.Button();
		this.Shop1 = t;
		t.anchorOffsetX = 81.5;
		t.anchorOffsetY = 61;
		t.label = "";
		t.name = "shop";
		t.x = 1218.5;
		t.y = 640;
		t.skinName = BattleListLayer$Skin26;
		return t;
	};
	_proto.Create_i = function () {
		var t = new eui.Button();
		this.Create = t;
		t.anchorOffsetX = 183;
		t.anchorOffsetY = 60;
		t.label = "";
		t.name = "createBattle";
		t.x = 667;
		t.y = 640;
		t.skinName = BattleListLayer$Skin27;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.fillMode = "clip";
		t.height = 174;
		t.source = "battle_frame_2_png";
		t.width = 398;
		t.x = 459;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "clip";
		t.height = 80;
		t.source = "battle_title_battle_png";
		t.width = 308;
		t.x = 510;
		t.y = 21;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 52;
		t.anchorOffsetY = 13;
		t.size = 26;
		t.text = "约战房间";
		t.textColor = 0xffeb8b;
		t.x = 667;
		t.y = 127;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 346;
		t.anchorOffsetY = 101;
		t.fillMode = "clip";
		t.height = 202;
		t.name = "battle_no_room";
		t.source = "battle_non_room_tip_png";
		t.width = 692;
		t.x = 667;
		t.y = 447;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "clip";
		t.height = 154;
		t.source = "info_frame_png";
		t.width = 266;
		t.x = 24;
		t.y = 542;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "clip";
		t.height = 32;
		t.source = "room_title_info_png";
		t.width = 116;
		t.x = 101;
		t.y = 554;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "clip";
		t.height = 25.34;
		t.source = "battle_text_ingot_png";
		t.width = 65.33;
		t.x = 42.5;
		t.y = 606.33;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "clip";
		t.height = 25.34;
		t.source = "battle_text_gold_png";
		t.width = 65.33;
		t.x = 42.5;
		t.y = 640;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 519;
		t.anchorOffsetY = 208;
		t.bounces = true;
		t.height = 416;
		t.name = "scroller";
		t.scrollPolicyH = "on";
		t.scrollPolicyV = "off";
		t.width = 1038;
		t.x = 668;
		t.y = 332;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 412;
		t.name = "group";
		t.width = 1034;
		t.x = -20;
		t.y = 0;
		return t;
	};
	return BattleListLayer;
})(eui.Skin);generateEUI.paths['resource/eui_skins/battle/NumInput.exml'] = window.skins.NumInput = (function (_super) {
	__extends(NumInput, _super);
	function NumInput() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.currentState = "normal";
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
					new eui.SetProperty("_Image1","visible",true),
					new eui.SetProperty("_Image1","anchorOffsetY",0),
					new eui.SetProperty("_Image1","percentHeight",100),
					new eui.SetProperty("_Rect1","fillColor",0xffffff),
					new eui.SetProperty("_Rect1","fillAlpha",0.0),
					new eui.SetProperty("textDisplay","backgroundColor",0xffffff),
					new eui.SetProperty("textDisplay","borderColor",0x000000),
					new eui.SetProperty("textDisplay","anchorOffsetY",0),
					new eui.SetProperty("textDisplay","percentHeight",100),
					new eui.SetProperty("textDisplay","size",28),
					new eui.SetProperty("textDisplay","anchorOffsetX",0),
					new eui.SetProperty("textDisplay","textColor",0xffffff),
					new eui.SetProperty("textDisplay","x",12),
					new eui.SetProperty("textDisplay","y",0),
					new eui.SetProperty("textDisplay","verticalAlign","middle"),
					new eui.SetProperty("textDisplay","promptColor",0xffffff),
					new eui.SetProperty("textDisplay","width",436),
					new eui.SetProperty("promptDisplay","verticalCenter",0),
					new eui.SetProperty("promptDisplay","left",10),
					new eui.SetProperty("promptDisplay","right",10),
					new eui.SetProperty("","height",60)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Rect1","alpha",0.0),
					new eui.SetProperty("textDisplay","verticalCenter","0"),
					new eui.SetProperty("textDisplay","left","10"),
					new eui.SetProperty("textDisplay","right","10"),
					new eui.SetProperty("textDisplay","textColor",0xff0000),
					new eui.SetProperty("promptDisplay","verticalCenter",0),
					new eui.SetProperty("promptDisplay","left",10),
					new eui.SetProperty("promptDisplay","right",10)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,""),
					new eui.SetProperty("_Image1","alpha",1.0),
					new eui.SetProperty("_Image1","anchorOffsetY",0),
					new eui.SetProperty("_Image1","percentHeight",100),
					new eui.SetProperty("_Image1","scale9Grid",new egret.Rectangle(1,0,1,3)),
					new eui.SetProperty("_Rect1","alpha",0),
					new eui.SetProperty("textDisplay","anchorOffsetY",0),
					new eui.SetProperty("textDisplay","percentHeight",100),
					new eui.SetProperty("textDisplay","anchorOffsetX",0),
					new eui.SetProperty("textDisplay","size",28),
					new eui.SetProperty("textDisplay","textColor",0xffffff),
					new eui.SetProperty("textDisplay","y",0),
					new eui.SetProperty("textDisplay","x",0),
					new eui.SetProperty("promptDisplay","anchorOffsetY",0),
					new eui.SetProperty("promptDisplay","percentHeight",100),
					new eui.SetProperty("promptDisplay","anchorOffsetX",0),
					new eui.SetProperty("promptDisplay","backgroundColor",0xffffff),
					new eui.SetProperty("promptDisplay","size",32),
					new eui.SetProperty("promptDisplay","y",0),
					new eui.SetProperty("promptDisplay","percentWidth",100),
					new eui.SetProperty("promptDisplay","bold",true),
					new eui.SetProperty("promptDisplay","textAlign","left"),
					new eui.SetProperty("promptDisplay","verticalAlign","middle"),
					new eui.SetProperty("promptDisplay","x",0),
					new eui.SetProperty("","width",448),
					new eui.SetProperty("","height",60)
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,""),
					new eui.SetProperty("_Rect1","alpha",0),
					new eui.SetProperty("textDisplay","verticalCenter","0"),
					new eui.SetProperty("textDisplay","left","10"),
					new eui.SetProperty("textDisplay","right","10"),
					new eui.SetProperty("promptDisplay","verticalCenter",0),
					new eui.SetProperty("promptDisplay","left",10),
					new eui.SetProperty("promptDisplay","right",10)
				])
		];
	}
	var _proto = NumInput.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.fillMode = "clip";
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "battle_textfield_frame_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		this._Rect1 = t;
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.visible = false;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.size = 20;
		t.textColor = 0x000000;
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.percentWidth = 100;
		return t;
	};
	return NumInput;
})(eui.Skin);generateEUI.paths['resource/eui_skins/battle/BattleNumInput.exml'] = window.skins.BattleNumInput = (function (_super) {
	__extends(BattleNumInput, _super);
	var BattleNumInput$Skin28 = 	(function (_super) {
		__extends(BattleNumInput$Skin28, _super);
		function BattleNumInput$Skin28() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","option_bt_minus_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BattleNumInput$Skin28.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "option_bt_minus_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return BattleNumInput$Skin28;
	})(eui.Skin);

	var BattleNumInput$Skin29 = 	(function (_super) {
		__extends(BattleNumInput$Skin29, _super);
		function BattleNumInput$Skin29() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","option_bt_plus_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BattleNumInput$Skin29.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "option_bt_plus_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return BattleNumInput$Skin29;
	})(eui.Skin);

	function BattleNumInput() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 75;
		this.width = 910;
		this.elementsContent = [this._Label1_i(),this._Button1_i(),this._Button2_i(),this._Image1_i(),this._TextInput1_i()];
	}
	var _proto = BattleNumInput.prototype;

	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 28;
		t.text = "游戏底分 :";
		t.textColor = 0xffdb97;
		t.x = 8;
		t.y = 24;
		return t;
	};
	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 40;
		t.label = "";
		t.name = "bt_min";
		t.x = 231;
		t.y = 37.5;
		t.skinName = BattleNumInput$Skin28;
		return t;
	};
	_proto._Button2_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 40;
		t.label = "";
		t.name = "bt_plus";
		t.width = 79;
		t.x = 780;
		t.y = 37.5;
		t.skinName = BattleNumInput$Skin29;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "clip";
		t.height = 60;
		t.source = "battle_textfield_frame_png";
		t.width = 448;
		t.x = 286;
		t.y = 10;
		return t;
	};
	_proto._TextInput1_i = function () {
		var t = new eui.TextInput();
		t.height = 60;
		t.name = "numInput";
		t.skinName = "skins.NumInput";
		t.text = "1";
		t.width = 448;
		t.x = 286;
		t.y = 10;
		return t;
	};
	return BattleNumInput;
})(eui.Skin);generateEUI.paths['resource/eui_skins/battle/BattleRecordLayer.exml'] = window.skins.BattleRecordLayer = (function (_super) {
	__extends(BattleRecordLayer, _super);
	var BattleRecordLayer$Skin30 = 	(function (_super) {
		__extends(BattleRecordLayer$Skin30, _super);
		function BattleRecordLayer$Skin30() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BattleRecordLayer$Skin30.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "general_bt_return_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return BattleRecordLayer$Skin30;
	})(eui.Skin);

	var BattleRecordLayer$Skin31 = 	(function (_super) {
		__extends(BattleRecordLayer$Skin31, _super);
		function BattleRecordLayer$Skin31() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","battle_bt_other_video_0_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BattleRecordLayer$Skin31.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "battle_bt_other_video_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return BattleRecordLayer$Skin31;
	})(eui.Skin);

	function BattleRecordLayer() {
		_super.call(this);
		this.skinParts = ["BG","Return","CheckVedio","IconBG","Icon","Record","NoRoom","Tips","List"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.BG_i(),this.Return_i(),this.CheckVedio_i(),this.IconBG_i(),this.Icon_i(),this.Record_i(),this.NoRoom_i(),this.Tips_i(),this.List_i()];
	}
	var _proto = BattleRecordLayer.prototype;

	_proto.BG_i = function () {
		var t = new eui.Image();
		this.BG = t;
		t.fillMode = "clip";
		t.height = 750;
		t.source = "general_background3_png";
		t.width = 1334;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.Return_i = function () {
		var t = new eui.Button();
		this.Return = t;
		t.label = "";
		t.name = "bt_close";
		t.x = 0;
		t.y = 13;
		t.skinName = BattleRecordLayer$Skin30;
		return t;
	};
	_proto.CheckVedio_i = function () {
		var t = new eui.Button();
		this.CheckVedio = t;
		t.anchorOffsetX = 102;
		t.anchorOffsetY = 41.5;
		t.label = "";
		t.name = "checkVedio";
		t.x = 1198;
		t.y = 72.5;
		t.skinName = BattleRecordLayer$Skin31;
		return t;
	};
	_proto.IconBG_i = function () {
		var t = new eui.Image();
		this.IconBG = t;
		t.fillMode = "clip";
		t.height = 174;
		t.source = "battle_frame_2_png";
		t.width = 398;
		t.x = 459;
		t.y = 0;
		return t;
	};
	_proto.Icon_i = function () {
		var t = new eui.Image();
		this.Icon = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "clip";
		t.height = 80;
		t.source = "battle_title_battle_png";
		t.width = 308;
		t.x = 510;
		t.y = 21;
		return t;
	};
	_proto.Record_i = function () {
		var t = new eui.Label();
		this.Record = t;
		t.anchorOffsetX = 52;
		t.anchorOffsetY = 13;
		t.size = 26;
		t.text = "约战记录";
		t.textColor = 0xffeb8b;
		t.x = 667;
		t.y = 127;
		return t;
	};
	_proto.NoRoom_i = function () {
		var t = new eui.Image();
		this.NoRoom = t;
		t.anchorOffsetX = 346;
		t.anchorOffsetY = 101;
		t.fillMode = "clip";
		t.height = 202;
		t.name = "battle_no_room";
		t.source = "battle_non_room_tip_png";
		t.width = 692;
		t.x = 667;
		t.y = 447;
		return t;
	};
	_proto.Tips_i = function () {
		var t = new eui.Label();
		this.Tips = t;
		t.text = "只保存最近10条记录";
		t.x = 1049;
		t.y = 707;
		return t;
	};
	_proto.List_i = function () {
		var t = new eui.Scroller();
		this.List = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bounces = true;
		t.height = 428;
		t.name = "listScroller";
		t.scrollPolicyH = "on";
		t.scrollPolicyV = "off";
		t.width = 1024;
		t.x = 158;
		t.y = 226;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 430;
		t.width = 1024;
		return t;
	};
	return BattleRecordLayer;
})(eui.Skin);generateEUI.paths['resource/eui_skins/battle/RadioGroup.exml'] = window.skins.RadioGroup = (function (_super) {
	__extends(RadioGroup, _super);
	var RadioGroup$Skin32 = 	(function (_super) {
		__extends(RadioGroup$Skin32, _super);
		function RadioGroup$Skin32() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","battle_cbt_new_1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = RadioGroup$Skin32.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "battle_cbt_new_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return RadioGroup$Skin32;
	})(eui.Skin);

	var RadioGroup$Skin33 = 	(function (_super) {
		__extends(RadioGroup$Skin33, _super);
		function RadioGroup$Skin33() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","battle_cbt_new_1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = RadioGroup$Skin33.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "battle_cbt_new_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return RadioGroup$Skin33;
	})(eui.Skin);

	var RadioGroup$Skin34 = 	(function (_super) {
		__extends(RadioGroup$Skin34, _super);
		function RadioGroup$Skin34() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","battle_cbt_new_1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = RadioGroup$Skin34.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "battle_cbt_new_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return RadioGroup$Skin34;
	})(eui.Skin);

	function RadioGroup() {
		_super.call(this);
		this.skinParts = ["title","title1","title2","title3","Item1","item2","item3"];
		
		this.height = 75;
		this.width = 910;
		this.elementsContent = [this.title_i(),this.title1_i(),this.title2_i(),this.title3_i(),this.Item1_i(),this.item2_i(),this.item3_i()];
	}
	var _proto = RadioGroup.prototype;

	_proto.title_i = function () {
		var t = new eui.Label();
		this.title = t;
		t.name = "title";
		t.size = 28;
		t.text = "Label";
		t.textColor = 0xfddb97;
		t.x = 8;
		t.y = 24;
		return t;
	};
	_proto.title1_i = function () {
		var t = new eui.Label();
		this.title1 = t;
		t.name = "title1";
		t.size = 28;
		t.text = "Label";
		t.textColor = 0xFDDB97;
		t.x = 263.33;
		t.y = 27;
		return t;
	};
	_proto.title2_i = function () {
		var t = new eui.Label();
		this.title2 = t;
		t.name = "title2";
		t.size = 28;
		t.text = "Label";
		t.textColor = 0xFDDB97;
		t.x = 505.33;
		t.y = 27;
		return t;
	};
	_proto.title3_i = function () {
		var t = new eui.Label();
		this.title3 = t;
		t.name = "title3";
		t.size = 28;
		t.text = "Label";
		t.textColor = 0xFDDB97;
		t.visible = false;
		t.x = 744;
		t.y = 26;
		return t;
	};
	_proto.Item1_i = function () {
		var t = new eui.CheckBox();
		this.Item1 = t;
		t.label = "";
		t.name = "checkbox_1";
		t.x = 200;
		t.y = 11;
		t.skinName = RadioGroup$Skin32;
		return t;
	};
	_proto.item2_i = function () {
		var t = new eui.CheckBox();
		this.item2 = t;
		t.label = "";
		t.name = "checkbox_2";
		t.x = 440;
		t.y = 11;
		t.skinName = RadioGroup$Skin33;
		return t;
	};
	_proto.item3_i = function () {
		var t = new eui.CheckBox();
		this.item3 = t;
		t.label = "";
		t.name = "checkbox_3";
		t.visible = false;
		t.x = 680;
		t.y = 11;
		t.skinName = RadioGroup$Skin34;
		return t;
	};
	return RadioGroup;
})(eui.Skin);generateEUI.paths['resource/eui_skins/benefit/Benefit0.exml'] = window.Benefit0 = (function (_super) {
	__extends(Benefit0, _super);
	var Benefit0$Skin35 = 	(function (_super) {
		__extends(Benefit0$Skin35, _super);
		function Benefit0$Skin35() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","benefit_frame_4_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Benefit0$Skin35.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "benefit_frame_4_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return Benefit0$Skin35;
	})(eui.Skin);

	var Benefit0$Skin36 = 	(function (_super) {
		__extends(Benefit0$Skin36, _super);
		function Benefit0$Skin36() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","benefit_bt_4_0_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Benefit0$Skin36.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "benefit_bt_4_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return Benefit0$Skin36;
	})(eui.Skin);

	function Benefit0() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 118;
		this.width = 658;
		this.elementsContent = [this._Button1_i(),this._Image1_i(),this._Image2_i(),this._Button2_i()];
	}
	var _proto = Benefit0.prototype;

	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 329.5;
		t.anchorOffsetY = 59;
		t.label = "";
		t.x = 329.5;
		t.y = 58;
		t.skinName = Benefit0$Skin35;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "clip";
		t.height = 104;
		t.source = "benefit_icon_4_png";
		t.width = 118;
		t.x = 39;
		t.y = 6;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "clip";
		t.height = 69;
		t.source = "benefit_text_4_png";
		t.width = 209;
		t.x = 157;
		t.y = 24.5;
		return t;
	};
	_proto._Button2_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 40;
		t.label = "";
		t.x = 600;
		t.y = 58;
		t.skinName = Benefit0$Skin36;
		return t;
	};
	return Benefit0;
})(eui.Skin);generateEUI.paths['resource/eui_skins/benefit/Benefit1.exml'] = window.Benefit0 = (function (_super) {
	__extends(Benefit0, _super);
	var Benefit0$Skin37 = 	(function (_super) {
		__extends(Benefit0$Skin37, _super);
		function Benefit0$Skin37() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","benefit_frame_0_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Benefit0$Skin37.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "benefit_frame_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return Benefit0$Skin37;
	})(eui.Skin);

	var Benefit0$Skin38 = 	(function (_super) {
		__extends(Benefit0$Skin38, _super);
		function Benefit0$Skin38() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","benefit_bt_0_0_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Benefit0$Skin38.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "benefit_bt_0_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return Benefit0$Skin38;
	})(eui.Skin);

	function Benefit0() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 118;
		this.width = 658;
		this.elementsContent = [this._Button1_i(),this._Image1_i(),this._Image2_i(),this._Button2_i()];
	}
	var _proto = Benefit0.prototype;

	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 329.5;
		t.anchorOffsetY = 59;
		t.label = "";
		t.x = 329;
		t.y = 60;
		t.skinName = Benefit0$Skin37;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "scale";
		t.height = 114;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "benefit_icon_0_png";
		t.width = 114;
		t.x = 25;
		t.y = 10.4;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "clip";
		t.height = 69;
		t.source = "benefit_text_0_png";
		t.width = 259;
		t.x = 154;
		t.y = 24.5;
		return t;
	};
	_proto._Button2_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 40;
		t.label = "";
		t.x = 602;
		t.y = 61.5;
		t.skinName = Benefit0$Skin38;
		return t;
	};
	return Benefit0;
})(eui.Skin);generateEUI.paths['resource/eui_skins/benefit/Benefit2.exml'] = window.Benefit0 = (function (_super) {
	__extends(Benefit0, _super);
	var Benefit0$Skin39 = 	(function (_super) {
		__extends(Benefit0$Skin39, _super);
		function Benefit0$Skin39() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","benefit_frame_1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Benefit0$Skin39.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "benefit_frame_1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return Benefit0$Skin39;
	})(eui.Skin);

	var Benefit0$Skin40 = 	(function (_super) {
		__extends(Benefit0$Skin40, _super);
		function Benefit0$Skin40() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","benefit_bt_1_0_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Benefit0$Skin40.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "benefit_bt_1_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return Benefit0$Skin40;
	})(eui.Skin);

	function Benefit0() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 118;
		this.width = 658;
		this.elementsContent = [this._Button1_i(),this._Image1_i(),this._Image2_i(),this._Button2_i()];
	}
	var _proto = Benefit0.prototype;

	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 329.5;
		t.anchorOffsetY = 59;
		t.label = "";
		t.x = 329;
		t.y = 60;
		t.skinName = Benefit0$Skin39;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "scale";
		t.height = 114;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "benefit_icon_1_png";
		t.width = 114;
		t.x = 25;
		t.y = 10.4;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "clip";
		t.height = 69;
		t.source = "benefit_text_1_png";
		t.width = 228;
		t.x = 157;
		t.y = 24.5;
		return t;
	};
	_proto._Button2_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 40;
		t.label = "";
		t.x = 602;
		t.y = 61.5;
		t.skinName = Benefit0$Skin40;
		return t;
	};
	return Benefit0;
})(eui.Skin);generateEUI.paths['resource/eui_skins/benefit/Benefit3.exml'] = window.Benefit0 = (function (_super) {
	__extends(Benefit0, _super);
	var Benefit0$Skin41 = 	(function (_super) {
		__extends(Benefit0$Skin41, _super);
		function Benefit0$Skin41() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","benefit_frame_3_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Benefit0$Skin41.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "benefit_frame_3_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return Benefit0$Skin41;
	})(eui.Skin);

	function Benefit0() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 118;
		this.width = 658;
		this.elementsContent = [this._Button1_i(),this._Image1_i(),this._Image2_i()];
	}
	var _proto = Benefit0.prototype;

	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 329.5;
		t.anchorOffsetY = 59;
		t.label = "";
		t.x = 329;
		t.y = 60;
		t.skinName = Benefit0$Skin41;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "scale";
		t.height = 114;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "benefit_icon_3_png";
		t.width = 114;
		t.x = 25;
		t.y = 10.4;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "clip";
		t.height = 69;
		t.source = "benefit_text_3_png";
		t.width = 254;
		t.x = 157;
		t.y = 24.5;
		return t;
	};
	return Benefit0;
})(eui.Skin);generateEUI.paths['resource/eui_skins/benefit/Benefit4.exml'] = window.Benefit0 = (function (_super) {
	__extends(Benefit0, _super);
	var Benefit0$Skin42 = 	(function (_super) {
		__extends(Benefit0$Skin42, _super);
		function Benefit0$Skin42() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","benefit_frame_2_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Benefit0$Skin42.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "benefit_frame_2_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return Benefit0$Skin42;
	})(eui.Skin);

	var Benefit0$Skin43 = 	(function (_super) {
		__extends(Benefit0$Skin43, _super);
		function Benefit0$Skin43() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Benefit0$Skin43.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "benefit_bt_2_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return Benefit0$Skin43;
	})(eui.Skin);

	function Benefit0() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 118;
		this.width = 658;
		this.elementsContent = [this._Button1_i(),this._Image1_i(),this._Image2_i(),this._Button2_i()];
	}
	var _proto = Benefit0.prototype;

	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 329.5;
		t.anchorOffsetY = 59;
		t.label = "";
		t.x = 329;
		t.y = 60;
		t.skinName = Benefit0$Skin42;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "scale";
		t.height = 114;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "benefit_icon_2_png";
		t.width = 114;
		t.x = 25;
		t.y = 10.4;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "clip";
		t.height = 69;
		t.source = "benefit_text_2_png";
		t.width = 209;
		t.x = 157;
		t.y = 24.5;
		return t;
	};
	_proto._Button2_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 38;
		t.anchorOffsetY = 38;
		t.label = "";
		t.x = 598.5;
		t.y = 60;
		t.skinName = Benefit0$Skin43;
		return t;
	};
	return Benefit0;
})(eui.Skin);generateEUI.paths['resource/eui_skins/benefit/BenefitLayer.exml'] = window.skins.BenefitLayer = (function (_super) {
	__extends(BenefitLayer, _super);
	var BenefitLayer$Skin44 = 	(function (_super) {
		__extends(BenefitLayer$Skin44, _super);
		function BenefitLayer$Skin44() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","general_bt_return_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BenefitLayer$Skin44.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "general_bt_return_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return BenefitLayer$Skin44;
	})(eui.Skin);

	function BenefitLayer() {
		_super.call(this);
		this.skinParts = ["Scroll","Return"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this.Scroll_i(),this.Return_i()];
	}
	var _proto = BenefitLayer.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.fillMode = "clip";
		t.height = 152;
		t.source = "benefit_frame_up_png";
		t.width = 1334;
		t.x = 0;
		t.y = 45;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "clip";
		t.height = 628;
		t.source = "general_bt_lora_png";
		t.width = 392;
		t.x = 0;
		t.y = 121;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "clip";
		t.height = 158;
		t.source = "benefit_frame_top_png";
		t.width = 368;
		t.x = 483;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "clip";
		t.height = 60;
		t.source = "benefit_title_main_png";
		t.width = 224;
		t.x = 555;
		t.y = 37;
		return t;
	};
	_proto.Scroll_i = function () {
		var t = new eui.Scroller();
		this.Scroll = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bounces = true;
		t.height = 584;
		t.name = "scroller";
		t.scrollPolicyH = "off";
		t.width = 722;
		t.x = 328;
		t.y = 144;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 582;
		t.name = "Group";
		t.width = 722;
		t.x = 0;
		t.y = -68;
		return t;
	};
	_proto.Return_i = function () {
		var t = new eui.Button();
		this.Return = t;
		t.anchorOffsetX = 50.5;
		t.anchorOffsetY = 50.5;
		t.label = "";
		t.name = "bt_close";
		t.x = 50.5;
		t.y = 50.5;
		t.skinName = BenefitLayer$Skin44;
		return t;
	};
	return BenefitLayer;
})(eui.Skin);generateEUI.paths['resource/eui_skins/client/Plaza.exml'] = window.skins.Plaza = (function (_super) {
	__extends(Plaza, _super);
	var Plaza$Skin45 = 	(function (_super) {
		__extends(Plaza$Skin45, _super);
		function Plaza$Skin45() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","rank_btn_0_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","rank_btn_0_png")
					])
			];
		}
		var _proto = Plaza$Skin45.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "rank_btn_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return Plaza$Skin45;
	})(eui.Skin);

	var Plaza$Skin46 = 	(function (_super) {
		__extends(Plaza$Skin46, _super);
		function Plaza$Skin46() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","gamelist_bt_list_1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Plaza$Skin46.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "gamelist_bt_list_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return Plaza$Skin46;
	})(eui.Skin);

	var Plaza$Skin47 = 	(function (_super) {
		__extends(Plaza$Skin47, _super);
		function Plaza$Skin47() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Plaza$Skin47.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "gamelist_bt_shop_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return Plaza$Skin47;
	})(eui.Skin);

	var Plaza$Skin48 = 	(function (_super) {
		__extends(Plaza$Skin48, _super);
		function Plaza$Skin48() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","gamelist_battle_enter_1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Plaza$Skin48.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "gamelist_battle_enter_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return Plaza$Skin48;
	})(eui.Skin);

	var Plaza$Skin49 = 	(function (_super) {
		__extends(Plaza$Skin49, _super);
		function Plaza$Skin49() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","general_menu_option_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Plaza$Skin49.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "general_menu_option_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return Plaza$Skin49;
	})(eui.Skin);

	var Plaza$Skin50 = 	(function (_super) {
		__extends(Plaza$Skin50, _super);
		function Plaza$Skin50() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","general_menu_share_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Plaza$Skin50.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "general_menu_share_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return Plaza$Skin50;
	})(eui.Skin);

	var Plaza$Skin51 = 	(function (_super) {
		__extends(Plaza$Skin51, _super);
		function Plaza$Skin51() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","general_menu_service_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Plaza$Skin51.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "general_menu_service_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return Plaza$Skin51;
	})(eui.Skin);

	var Plaza$Skin52 = 	(function (_super) {
		__extends(Plaza$Skin52, _super);
		function Plaza$Skin52() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","gamelist_battle_create_1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Plaza$Skin52.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "gamelist_battle_create_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return Plaza$Skin52;
	})(eui.Skin);

	var Plaza$Skin53 = 	(function (_super) {
		__extends(Plaza$Skin53, _super);
		function Plaza$Skin53() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","gamelist_bt_exchange_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Plaza$Skin53.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "gamelist_bt_exchange_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return Plaza$Skin53;
	})(eui.Skin);

	var Plaza$Skin54 = 	(function (_super) {
		__extends(Plaza$Skin54, _super);
		function Plaza$Skin54() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","gamelist_bt_active_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Plaza$Skin54.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "gamelist_bt_active_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return Plaza$Skin54;
	})(eui.Skin);

	var Plaza$Skin55 = 	(function (_super) {
		__extends(Plaza$Skin55, _super);
		function Plaza$Skin55() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Plaza$Skin55.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "gamelist_bt_battle_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return Plaza$Skin55;
	})(eui.Skin);

	var Plaza$Skin56 = 	(function (_super) {
		__extends(Plaza$Skin56, _super);
		function Plaza$Skin56() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","gamelist_bt_teahouse_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Plaza$Skin56.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "gamelist_bt_teahouse_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return Plaza$Skin56;
	})(eui.Skin);

	var Plaza$Skin57 = 	(function (_super) {
		__extends(Plaza$Skin57, _super);
		function Plaza$Skin57() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Plaza$Skin57.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "gamelist_bt_match_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return Plaza$Skin57;
	})(eui.Skin);

	var Plaza$Skin58 = 	(function (_super) {
		__extends(Plaza$Skin58, _super);
		function Plaza$Skin58() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Plaza$Skin58.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "general_bt_player_shop_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return Plaza$Skin58;
	})(eui.Skin);

	var Plaza$Skin59 = 	(function (_super) {
		__extends(Plaza$Skin59, _super);
		function Plaza$Skin59() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Plaza$Skin59.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "general_bt_player_shop_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return Plaza$Skin59;
	})(eui.Skin);

	function Plaza() {
		_super.call(this);
		this.skinParts = ["Rank","BattleManage","Purchase","EnterRoom","Option","Share","Share0","CreateRoom","Exchange","Activity","Archive","TeaHouse","Match","ScrollMatch","Head","Group","PageUp","PageDown"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.Rank_i(),this.BattleManage_i(),this._Image1_i(),this._Image2_i(),this.Purchase_i(),this.EnterRoom_i(),this.Option_i(),this.Share_i(),this.Share0_i(),this.CreateRoom_i(),this.Exchange_i(),this.Activity_i(),this.Archive_i(),this.TeaHouse_i(),this.Match_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this.ScrollMatch_i(),this.Head_i(),this._Image12_i(),this._Image13_i(),this._Image14_i(),this._Image15_i(),this._Button1_i(),this._Button2_i(),this._Label1_i(),this._Label2_i(),this._Image16_i(),this._Scroller1_i(),this.PageUp_i(),this.PageDown_i()];
	}
	var _proto = Plaza.prototype;

	_proto.Rank_i = function () {
		var t = new eui.Button();
		this.Rank = t;
		t.anchorOffsetX = 37;
		t.anchorOffsetY = 100;
		t.name = "bt_rank";
		t.x = 37;
		t.y = 260;
		t.skinName = Plaza$Skin45;
		return t;
	};
	_proto.BattleManage_i = function () {
		var t = new eui.Button();
		this.BattleManage = t;
		t.name = "battleList";
		t.x = 0;
		t.y = 391.79;
		t.skinName = Plaza$Skin46;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "clip";
		t.height = 632;
		t.source = "general_bt_lora_png";
		t.width = 380;
		t.x = 468;
		t.y = 118;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.fillMode = "clip";
		t.height = 109;
		t.source = "gamelist_menu_back_png";
		t.width = 1334;
		t.x = 0;
		t.y = 641;
		return t;
	};
	_proto.Purchase_i = function () {
		var t = new eui.Button();
		this.Purchase = t;
		t.anchorOffsetX = 98.5;
		t.anchorOffsetY = 58;
		t.name = "bt_shop";
		t.x = 135;
		t.y = 681;
		t.skinName = Plaza$Skin47;
		return t;
	};
	_proto.EnterRoom_i = function () {
		var t = new eui.Button();
		this.EnterRoom = t;
		t.name = "findBattle";
		t.x = 92.86;
		t.y = 150;
		t.skinName = Plaza$Skin48;
		return t;
	};
	_proto.Option_i = function () {
		var t = new eui.Button();
		this.Option = t;
		t.anchorOffsetX = 36;
		t.anchorOffsetY = 47;
		t.name = "bt_option";
		t.x = 1303;
		t.y = 62;
		t.skinName = Plaza$Skin49;
		return t;
	};
	_proto.Share_i = function () {
		var t = new eui.Button();
		this.Share = t;
		t.anchorOffsetX = 36;
		t.anchorOffsetY = 47;
		t.name = "bt_share";
		t.x = 1137;
		t.y = 62;
		t.skinName = Plaza$Skin50;
		return t;
	};
	_proto.Share0_i = function () {
		var t = new eui.Button();
		this.Share0 = t;
		t.anchorOffsetX = 36;
		t.anchorOffsetY = 47;
		t.name = "bt_service";
		t.x = 1224.5;
		t.y = 62;
		t.skinName = Plaza$Skin51;
		return t;
	};
	_proto.CreateRoom_i = function () {
		var t = new eui.Button();
		this.CreateRoom = t;
		t.name = "battleCreate";
		t.x = 92.86;
		t.y = 391.79;
		t.skinName = Plaza$Skin52;
		return t;
	};
	_proto.Exchange_i = function () {
		var t = new eui.Button();
		this.Exchange = t;
		t.anchorOffsetX = 98.5;
		t.anchorOffsetY = 58;
		t.name = "bt_exchange";
		t.x = 340;
		t.y = 681;
		t.skinName = Plaza$Skin53;
		return t;
	};
	_proto.Activity_i = function () {
		var t = new eui.Button();
		this.Activity = t;
		t.anchorOffsetX = 98.5;
		t.anchorOffsetY = 58;
		t.name = "bt_activity";
		t.x = 540;
		t.y = 681;
		t.skinName = Plaza$Skin54;
		return t;
	};
	_proto.Archive_i = function () {
		var t = new eui.Button();
		this.Archive = t;
		t.anchorOffsetX = 98.5;
		t.anchorOffsetY = 58;
		t.name = "battleRecord";
		t.x = 743;
		t.y = 681;
		t.skinName = Plaza$Skin55;
		return t;
	};
	_proto.TeaHouse_i = function () {
		var t = new eui.Button();
		this.TeaHouse = t;
		t.anchorOffsetX = 98.5;
		t.anchorOffsetY = 58;
		t.height = 116;
		t.name = "bt_teaHouse";
		t.width = 197;
		t.x = 971.5;
		t.y = 682.67;
		t.skinName = Plaza$Skin56;
		return t;
	};
	_proto.Match_i = function () {
		var t = new eui.Button();
		this.Match = t;
		t.anchorOffsetX = 60.5;
		t.anchorOffsetY = 45;
		t.name = "bt_match";
		t.touchEnabled = true;
		t.x = 1140;
		t.y = 681;
		t.skinName = Plaza$Skin57;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.fillMode = "clip";
		t.height = 36;
		t.source = "gamelist_btmatch_word_png";
		t.touchEnabled = false;
		t.width = 71;
		t.x = 1159;
		t.y = 685;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 23;
		t.anchorOffsetY = 18.5;
		t.fillMode = "clip";
		t.height = 37;
		t.name = "active_icon";
		t.source = "gamelist_active_ico_png";
		t.touchEnabled = false;
		t.width = 46;
		t.x = 579.5;
		t.y = 659.53;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.alpha = 1;
		t.anchorOffsetX = 13.5;
		t.anchorOffsetY = 13.5;
		t.fillMode = "clip";
		t.height = 27;
		t.name = "star1";
		t.source = "gamelist_btmatch_star_png";
		t.touchEnabled = false;
		t.width = 27;
		t.x = 1145.5;
		t.y = 725.5;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.alpha = 1;
		t.anchorOffsetX = 13.5;
		t.anchorOffsetY = 13.5;
		t.fillMode = "clip";
		t.height = 27;
		t.name = "star3";
		t.source = "gamelist_btmatch_star_png";
		t.touchEnabled = false;
		t.width = 27;
		t.x = 1106.03;
		t.y = 646.03;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.alpha = 1;
		t.anchorOffsetX = 13.5;
		t.anchorOffsetY = 13.5;
		t.fillMode = "clip";
		t.height = 27;
		t.name = "star4";
		t.source = "gamelist_btmatch_star_png";
		t.touchEnabled = false;
		t.width = 27;
		t.x = 1181;
		t.y = 646.03;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.alpha = 1;
		t.anchorOffsetX = 13.5;
		t.anchorOffsetY = 13.5;
		t.fillMode = "clip";
		t.height = 27;
		t.name = "star2";
		t.source = "gamelist_btmatch_star_png";
		t.touchEnabled = false;
		t.width = 27;
		t.x = 1096.04;
		t.y = 671.5;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.alpha = 1;
		t.anchorOffsetX = 13.5;
		t.anchorOffsetY = 13.5;
		t.fillMode = "clip";
		t.height = 27;
		t.name = "star5";
		t.source = "gamelist_btmatch_star_png";
		t.touchEnabled = false;
		t.width = 27;
		t.x = 1180;
		t.y = 678.03;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.alpha = 1;
		t.anchorOffsetX = 67;
		t.anchorOffsetY = 19;
		t.fillMode = "clip";
		t.height = 38;
		t.name = "Invite_image";
		t.source = "gamelist_ani_createroom_png";
		t.width = 134;
		t.x = 359.86;
		t.y = 535;
		return t;
	};
	_proto.ScrollMatch_i = function () {
		var t = new eui.Scroller();
		this.ScrollMatch = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 89.66;
		t.name = "lightScroll";
		t.touchEnabled = false;
		t.width = 112.01;
		t.x = 1087.33;
		t.y = 637.67;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 85.33;
		t.name = "lightGroup";
		t.touchEnabled = false;
		t.width = 104.01;
		t.x = 0;
		t.y = 9.33;
		t.elementsContent = [this._Image11_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.fillMode = "clip";
		t.height = 132;
		t.name = "light";
		t.source = "gamelist_btmatch_light_png";
		t.touchEnabled = false;
		t.width = 140;
		t.x = -15;
		t.y = -87;
		return t;
	};
	_proto.Head_i = function () {
		var t = new eui.Image();
		this.Head = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "clip";
		t.height = 120;
		t.name = "head_frame";
		t.source = "general_head_frame_0_png";
		t.width = 122;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "clip";
		t.height = 54;
		t.source = "general_player_frame_gold_png";
		t.width = 338;
		t.x = 683;
		t.y = 4;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "clip";
		t.height = 54;
		t.source = "general_player_frame_ingot_png";
		t.width = 298;
		t.x = 359.86;
		t.y = 4;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "clip";
		t.height = 50;
		t.source = "general_player_frame_idornick_png";
		t.width = 234;
		t.x = 122;
		t.y = 8;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "clip";
		t.height = 50;
		t.source = "general_player_frame_idornick_png";
		t.width = 234;
		t.x = 122;
		t.y = 61;
		return t;
	};
	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.name = "bt_Ingot_shop";
		t.x = 600.5;
		t.y = 11;
		t.skinName = Plaza$Skin58;
		return t;
	};
	_proto._Button2_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.name = "bt_gold_shop";
		t.x = 961.78;
		t.y = 12;
		t.skinName = Plaza$Skin59;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.name = "nick";
		t.size = 24;
		t.text = "Label";
		t.textColor = 0xf1ca8e;
		t.x = 135;
		t.y = 17;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.name = "gameid";
		t.size = 24;
		t.text = "Label";
		t.textColor = 0x93cc15;
		t.x = 135;
		t.y = 71;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "clip";
		t.height = 32.67;
		t.source = "general_general_tip_plaza_png";
		t.touchEnabled = false;
		t.width = 30;
		t.x = 1136.5;
		t.y = 11;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 460;
		t.name = "GameListScorll";
		t.touchEnabled = true;
		t.width = 506.82;
		t.x = 816.18;
		t.y = 138;
		t.viewport = this.Group_i();
		return t;
	};
	_proto.Group_i = function () {
		var t = new eui.Group();
		this.Group = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 456;
		t.name = "Group";
		t.touchEnabled = true;
		t.width = 505.3;
		t.x = -19.7;
		t.y = 0;
		return t;
	};
	_proto.PageUp_i = function () {
		var t = new eui.Image();
		this.PageUp = t;
		t.anchorOffsetX = 31;
		t.anchorOffsetY = 18;
		t.fillMode = "clip";
		t.height = 36;
		t.name = "PageUp";
		t.source = "gamelist_arrow_up_png";
		t.width = 62;
		t.x = 1075;
		t.y = 102;
		return t;
	};
	_proto.PageDown_i = function () {
		var t = new eui.Image();
		this.PageDown = t;
		t.anchorOffsetX = 31;
		t.anchorOffsetY = 18;
		t.fillMode = "clip";
		t.height = 36;
		t.name = "PageDown";
		t.source = "gamelist_arrow_down_png";
		t.width = 62;
		t.x = 1075;
		t.y = 632.64;
		return t;
	};
	return Plaza;
})(eui.Skin);generateEUI.paths['resource/eui_skins/common/CommonListView.exml'] = window.skins.CommonListView = (function (_super) {
	__extends(CommonListView, _super);
	function CommonListView() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar","dataList"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i(),this.dataList_i()];
	}
	var _proto = CommonListView.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.autoVisibility = false;
		t.bottom = 0;
		t.visible = false;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.autoVisibility = false;
		t.percentHeight = 100;
		t.right = 0;
		t.visible = false;
		return t;
	};
	_proto.dataList_i = function () {
		var t = new eui.List();
		this.dataList = t;
		t.percentHeight = 100;
		t.name = "dataList";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	return CommonListView;
})(eui.Skin);generateEUI.paths['resource/eui_skins/common/GeneralButton.exml'] = window.skins.GeneralButton = (function (_super) {
	__extends(GeneralButton, _super);
	var GeneralButton$Skin60 = 	(function (_super) {
		__extends(GeneralButton$Skin60, _super);
		function GeneralButton$Skin60() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","general_bt_closepop_0_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","general_bt_closepop_0_png")
					])
			];
		}
		var _proto = GeneralButton$Skin60.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "general_bt_closepop_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GeneralButton$Skin60;
	})(eui.Skin);

	function GeneralButton() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 46;
		this.width = 44;
		this.elementsContent = [this._Button1_i()];
	}
	var _proto = GeneralButton.prototype;

	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.name = "general_close";
		t.x = 0;
		t.y = 0;
		t.skinName = GeneralButton$Skin60;
		return t;
	};
	return GeneralButton;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/poker/sparrowsclm/GameLayer.exml'] = window.skins.sparrowsclm.GameLayer = (function (_super) {
	__extends(GameLayer, _super);
	var GameLayer$Skin61 = 	(function (_super) {
		__extends(GameLayer$Skin61, _super);
		function GameLayer$Skin61() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","game_menu_talk_1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameLayer$Skin61.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "game_menu_talk_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameLayer$Skin61;
	})(eui.Skin);

	var GameLayer$Skin62 = 	(function (_super) {
		__extends(GameLayer$Skin62, _super);
		function GameLayer$Skin62() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","bt_chat_1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameLayer$Skin62.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "bt_chat_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameLayer$Skin62;
	})(eui.Skin);

	var GameLayer$Skin63 = 	(function (_super) {
		__extends(GameLayer$Skin63, _super);
		function GameLayer$Skin63() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","bt_speak_1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameLayer$Skin63.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "bt_speak_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameLayer$Skin63;
	})(eui.Skin);

	var GameLayer$Skin64 = 	(function (_super) {
		__extends(GameLayer$Skin64, _super);
		function GameLayer$Skin64() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","game_menu_auto_1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameLayer$Skin64.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "game_menu_auto_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameLayer$Skin64;
	})(eui.Skin);

	var GameLayer$Skin65 = 	(function (_super) {
		__extends(GameLayer$Skin65, _super);
		function GameLayer$Skin65() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","game_menu_menu_1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameLayer$Skin65.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "game_menu_menu_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameLayer$Skin65;
	})(eui.Skin);

	var GameLayer$Skin66 = 	(function (_super) {
		__extends(GameLayer$Skin66, _super);
		function GameLayer$Skin66() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","game_menu_back_1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameLayer$Skin66.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "game_menu_back_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameLayer$Skin66;
	})(eui.Skin);

	var GameLayer$Skin67 = 	(function (_super) {
		__extends(GameLayer$Skin67, _super);
		function GameLayer$Skin67() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","bt_startgame_1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameLayer$Skin67.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "bt_startgame_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameLayer$Skin67;
	})(eui.Skin);

	var GameLayer$Skin68 = 	(function (_super) {
		__extends(GameLayer$Skin68, _super);
		function GameLayer$Skin68() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","bt_changedesk_4_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameLayer$Skin68.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "bt_changedesk_3_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameLayer$Skin68;
	})(eui.Skin);

	function GameLayer() {
		_super.call(this);
		this.skinParts = ["BG","Logo","MenuBg","TableNum","CellNum","LastCards","Chat","Chat0","Chat1","Auto","Option","Back","Ready","ChangeDesk","Tips","Head1","Head2","Head0","Nick","Nick1","Nick2","ID","ID1","ID2","Score","Score1","Score2","Ready0","Ready1","Ready2"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.BG_i(),this.Logo_i(),this.MenuBg_i(),this.TableNum_i(),this.CellNum_i(),this.LastCards_i(),this.Chat_i(),this.Chat0_i(),this.Chat1_i(),this.Auto_i(),this.Option_i(),this.Back_i(),this.Ready_i(),this.ChangeDesk_i(),this.Tips_i(),this.Head1_i(),this.Head2_i(),this.Head0_i(),this.Nick_i(),this.Nick1_i(),this.Nick2_i(),this.ID_i(),this.ID1_i(),this.ID2_i(),this.Score_i(),this.Score1_i(),this.Score2_i(),this.Ready0_i(),this.Ready1_i(),this.Ready2_i()];
	}
	var _proto = GameLayer.prototype;

	_proto.BG_i = function () {
		var t = new eui.Image();
		this.BG = t;
		t.fillMode = "clip";
		t.height = 750;
		t.source = "game_back_0_png";
		t.width = 1334;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.Logo_i = function () {
		var t = new eui.Image();
		this.Logo = t;
		t.anchorOffsetX = 152;
		t.anchorOffsetY = 33;
		t.fillMode = "clip";
		t.height = 66;
		t.source = "game_back_logo_png";
		t.width = 304;
		t.x = 667;
		t.y = 191;
		return t;
	};
	_proto.MenuBg_i = function () {
		var t = new eui.Image();
		this.MenuBg = t;
		t.anchorOffsetX = 525;
		t.anchorOffsetY = 0;
		t.fillMode = "clip";
		t.height = 100;
		t.source = "bg_top_menu_png";
		t.width = 1050;
		t.x = 665;
		t.y = 0;
		return t;
	};
	_proto.TableNum_i = function () {
		var t = new eui.Image();
		this.TableNum = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "clip";
		t.height = 40;
		t.source = "word_yz_desk_png";
		t.width = 88;
		t.x = 481;
		t.y = 100;
		return t;
	};
	_proto.CellNum_i = function () {
		var t = new eui.Image();
		this.CellNum = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "clip";
		t.height = 40;
		t.source = "game_flag_cellscore_png";
		t.width = 88;
		t.x = 731;
		t.y = 100;
		return t;
	};
	_proto.LastCards_i = function () {
		var t = new eui.Image();
		this.LastCards = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "clip";
		t.height = 60;
		t.source = "game_last_card_png";
		t.width = 52;
		t.x = 0;
		t.y = 6;
		return t;
	};
	_proto.Chat_i = function () {
		var t = new eui.Button();
		this.Chat = t;
		t.anchorOffsetX = 30;
		t.anchorOffsetY = 30;
		t.label = "";
		t.x = 520;
		t.y = 38;
		t.skinName = GameLayer$Skin61;
		return t;
	};
	_proto.Chat0_i = function () {
		var t = new eui.Button();
		this.Chat0 = t;
		t.anchorOffsetX = 48;
		t.anchorOffsetY = 48;
		t.label = "";
		t.x = 1274;
		t.y = 588;
		t.skinName = GameLayer$Skin62;
		return t;
	};
	_proto.Chat1_i = function () {
		var t = new eui.Button();
		this.Chat1 = t;
		t.anchorOffsetX = 48;
		t.anchorOffsetY = 48;
		t.label = "";
		t.x = 1274;
		t.y = 692;
		t.skinName = GameLayer$Skin63;
		return t;
	};
	_proto.Auto_i = function () {
		var t = new eui.Button();
		this.Auto = t;
		t.anchorOffsetX = 30;
		t.anchorOffsetY = 30;
		t.label = "";
		t.x = 620;
		t.y = 38;
		t.skinName = GameLayer$Skin64;
		return t;
	};
	_proto.Option_i = function () {
		var t = new eui.Button();
		this.Option = t;
		t.anchorOffsetX = 30;
		t.anchorOffsetY = 30;
		t.label = "";
		t.x = 720;
		t.y = 38;
		t.skinName = GameLayer$Skin65;
		return t;
	};
	_proto.Back_i = function () {
		var t = new eui.Button();
		this.Back = t;
		t.anchorOffsetX = 30;
		t.anchorOffsetY = 30;
		t.label = "";
		t.name = "back";
		t.x = 820;
		t.y = 38;
		t.skinName = GameLayer$Skin66;
		return t;
	};
	_proto.Ready_i = function () {
		var t = new eui.Button();
		this.Ready = t;
		t.anchorOffsetX = 150;
		t.anchorOffsetY = 63;
		t.label = "";
		t.name = "start";
		t.x = 840;
		t.y = 389;
		t.skinName = GameLayer$Skin67;
		return t;
	};
	_proto.ChangeDesk_i = function () {
		var t = new eui.Button();
		this.ChangeDesk = t;
		t.anchorOffsetX = 150;
		t.anchorOffsetY = 63;
		t.label = "";
		t.name = "changeDesk";
		t.x = 494;
		t.y = 389;
		t.skinName = GameLayer$Skin68;
		return t;
	};
	_proto.Tips_i = function () {
		var t = new eui.Image();
		this.Tips = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "clip";
		t.height = 74;
		t.name = "waitImg";
		t.source = "game_ready_text_wait_png";
		t.visible = false;
		t.width = 422;
		t.x = 456;
		t.y = 432;
		return t;
	};
	_proto.Head1_i = function () {
		var t = new eui.Image();
		this.Head1 = t;
		t.anchorOffsetX = 114;
		t.anchorOffsetY = 0;
		t.fillMode = "clip";
		t.height = 168;
		t.name = "head1";
		t.source = "flag_downuser_png";
		t.width = 114;
		t.x = 1282;
		t.y = 173;
		return t;
	};
	_proto.Head2_i = function () {
		var t = new eui.Image();
		this.Head2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "clip";
		t.height = 168;
		t.name = "head2";
		t.source = "flag_upuser_png";
		t.width = 114;
		t.x = 52;
		t.y = 173;
		return t;
	};
	_proto.Head0_i = function () {
		var t = new eui.Image();
		this.Head0 = t;
		t.anchorOffsetX = 118;
		t.anchorOffsetY = 124;
		t.fillMode = "clip";
		t.height = 236;
		t.name = "head0";
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "flag_face_normal_png";
		t.width = 236;
		t.x = 667;
		t.y = 601;
		return t;
	};
	_proto.Nick_i = function () {
		var t = new eui.Label();
		this.Nick = t;
		t.anchorOffsetX = 75;
		t.multiline = false;
		t.name = "userNick";
		t.size = 24;
		t.text = "Kobe24";
		t.textAlign = "center";
		t.width = 150;
		t.x = 667;
		t.y = 665;
		return t;
	};
	_proto.Nick1_i = function () {
		var t = new eui.Label();
		this.Nick1 = t;
		t.anchorOffsetX = 75;
		t.multiline = false;
		t.name = "userNick1";
		t.size = 24;
		t.text = "Kobe24";
		t.textAlign = "center";
		t.visible = false;
		t.width = 150;
		t.x = 1233;
		t.y = 293;
		return t;
	};
	_proto.Nick2_i = function () {
		var t = new eui.Label();
		this.Nick2 = t;
		t.anchorOffsetX = 75;
		t.multiline = false;
		t.name = "userNick2";
		t.size = 24;
		t.text = "Kobe24";
		t.textAlign = "center";
		t.visible = false;
		t.width = 150;
		t.x = 109;
		t.y = 293;
		return t;
	};
	_proto.ID_i = function () {
		var t = new eui.Label();
		this.ID = t;
		t.anchorOffsetX = 80;
		t.multiline = false;
		t.name = "userID";
		t.size = 24;
		t.text = "ID:20603040";
		t.textAlign = "center";
		t.textColor = 0x8cffc8;
		t.width = 160;
		t.x = 667;
		t.y = 514;
		return t;
	};
	_proto.ID1_i = function () {
		var t = new eui.Label();
		this.ID1 = t;
		t.anchorOffsetX = 80;
		t.multiline = false;
		t.name = "userID1";
		t.size = 24;
		t.text = "ID:20603040";
		t.textAlign = "center";
		t.textColor = 0x8CFFC8;
		t.visible = false;
		t.width = 160;
		t.x = 1231;
		t.y = 146;
		return t;
	};
	_proto.ID2_i = function () {
		var t = new eui.Label();
		this.ID2 = t;
		t.anchorOffsetX = 80;
		t.multiline = false;
		t.name = "userID2";
		t.size = 24;
		t.text = "ID:20603040";
		t.textAlign = "center";
		t.textColor = 0x8CFFC8;
		t.visible = false;
		t.width = 160;
		t.x = 111;
		t.y = 146;
		return t;
	};
	_proto.Score_i = function () {
		var t = new eui.Label();
		this.Score = t;
		t.anchorOffsetX = 75;
		t.multiline = false;
		t.name = "userScore";
		t.size = 24;
		t.text = "654000";
		t.textAlign = "center";
		t.textColor = 0xf0f000;
		t.width = 150;
		t.x = 667;
		t.y = 693;
		return t;
	};
	_proto.Score1_i = function () {
		var t = new eui.Label();
		this.Score1 = t;
		t.anchorOffsetX = 75;
		t.multiline = false;
		t.name = "userScore1";
		t.size = 24;
		t.text = "654000";
		t.textAlign = "center";
		t.textColor = 0xF0F000;
		t.visible = false;
		t.width = 150;
		t.x = 1233;
		t.y = 323;
		return t;
	};
	_proto.Score2_i = function () {
		var t = new eui.Label();
		this.Score2 = t;
		t.anchorOffsetX = 75;
		t.multiline = false;
		t.name = "userScore2";
		t.size = 24;
		t.text = "654000";
		t.textAlign = "center";
		t.textColor = 0xF0F000;
		t.visible = false;
		t.width = 150;
		t.x = 109;
		t.y = 323;
		return t;
	};
	_proto.Ready0_i = function () {
		var t = new eui.Image();
		this.Ready0 = t;
		t.fillMode = "clip";
		t.height = 62;
		t.name = "ready0";
		t.source = "ready_png";
		t.visible = false;
		t.width = 54;
		t.x = 554;
		t.y = 567;
		return t;
	};
	_proto.Ready1_i = function () {
		var t = new eui.Image();
		this.Ready1 = t;
		t.fillMode = "clip";
		t.height = 62;
		t.name = "ready1";
		t.source = "ready_png";
		t.visible = false;
		t.width = 54;
		t.x = 1002;
		t.y = 195;
		return t;
	};
	_proto.Ready2_i = function () {
		var t = new eui.Image();
		this.Ready2 = t;
		t.fillMode = "clip";
		t.height = 62;
		t.name = "ready2";
		t.source = "ready_png";
		t.visible = false;
		t.width = 54;
		t.x = 166;
		t.y = 195;
		return t;
	};
	return GameLayer;
})(eui.Skin);generateEUI.paths['resource/eui_skins/global/Dialog.exml'] = window.skins.Dialog = (function (_super) {
	__extends(Dialog, _super);
	var Dialog$Skin69 = 	(function (_super) {
		__extends(Dialog$Skin69, _super);
		function Dialog$Skin69() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","bt_query_confirm_1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Dialog$Skin69.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "bt_query_confirm_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return Dialog$Skin69;
	})(eui.Skin);

	var Dialog$Skin70 = 	(function (_super) {
		__extends(Dialog$Skin70, _super);
		function Dialog$Skin70() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","bt_query_cancel_1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Dialog$Skin70.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "bt_query_cancel_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return Dialog$Skin70;
	})(eui.Skin);

	function Dialog() {
		_super.call(this);
		this.skinParts = ["BG","Text","Title","Agree","Cancell"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.BG_i(),this.Text_i(),this.Title_i(),this.Agree_i(),this.Cancell_i()];
	}
	var _proto = Dialog.prototype;

	_proto.BG_i = function () {
		var t = new eui.Image();
		this.BG = t;
		t.anchorOffsetX = 334;
		t.anchorOffsetY = 216.5;
		t.fillMode = "clip";
		t.height = 433;
		t.source = "query_bg_def_png";
		t.width = 668;
		t.x = 667;
		t.y = 375;
		return t;
	};
	_proto.Text_i = function () {
		var t = new eui.Label();
		this.Text = t;
		t.anchorOffsetX = 275.33;
		t.anchorOffsetY = 111.34;
		t.height = 222.66;
		t.multiline = true;
		t.name = "text";
		t.size = 32;
		t.text = "系统提示";
		t.textAlign = "center";
		t.textColor = 0x451f0b;
		t.verticalAlign = "middle";
		t.width = 550.67;
		t.x = 667;
		t.y = 344;
		return t;
	};
	_proto.Title_i = function () {
		var t = new eui.Image();
		this.Title = t;
		t.anchorOffsetX = 70;
		t.anchorOffsetY = 0;
		t.fillMode = "clip";
		t.height = 37;
		t.source = "title_system_png";
		t.width = 140;
		t.x = 667;
		t.y = 170;
		return t;
	};
	_proto.Agree_i = function () {
		var t = new eui.Button();
		this.Agree = t;
		t.anchorOffsetX = 202;
		t.anchorOffsetY = 42;
		t.label = "";
		t.name = "agree";
		t.x = 637;
		t.y = 505;
		t.skinName = Dialog$Skin69;
		return t;
	};
	_proto.Cancell_i = function () {
		var t = new eui.Button();
		this.Cancell = t;
		t.anchorOffsetY = 42;
		t.label = "";
		t.name = "cancell";
		t.x = 697;
		t.y = 505;
		t.skinName = Dialog$Skin70;
		return t;
	};
	return Dialog;
})(eui.Skin);generateEUI.paths['resource/eui_skins/list/battle_list_1.exml'] = window.skins.battle_list_1 = (function (_super) {
	__extends(battle_list_1, _super);
	var battle_list_1$Skin71 = 	(function (_super) {
		__extends(battle_list_1$Skin71, _super);
		function battle_list_1$Skin71() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","bt_game_1_1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = battle_list_1$Skin71.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "bt_game_1_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return battle_list_1$Skin71;
	})(eui.Skin);

	function battle_list_1() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 150;
		this.width = 446;
		this.elementsContent = [this._Button1_i()];
	}
	var _proto = battle_list_1.prototype;

	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 223;
		t.anchorOffsetY = 75;
		t.currentState = "up";
		t.enabled = true;
		t.label = "";
		t.touchEnabled = true;
		t.x = 223;
		t.y = 75;
		t.skinName = battle_list_1$Skin71;
		return t;
	};
	return battle_list_1;
})(eui.Skin);generateEUI.paths['resource/eui_skins/list/battle_list_100.exml'] = window.skins.battle_list_1 = (function (_super) {
	__extends(battle_list_1, _super);
	var battle_list_1$Skin72 = 	(function (_super) {
		__extends(battle_list_1$Skin72, _super);
		function battle_list_1$Skin72() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","bt_game_100_1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = battle_list_1$Skin72.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "bt_game_100_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return battle_list_1$Skin72;
	})(eui.Skin);

	function battle_list_1() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 150;
		this.width = 446;
		this.elementsContent = [this._Button1_i()];
	}
	var _proto = battle_list_1.prototype;

	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 223;
		t.anchorOffsetY = 75;
		t.label = "";
		t.x = 223;
		t.y = 75;
		t.skinName = battle_list_1$Skin72;
		return t;
	};
	return battle_list_1;
})(eui.Skin);generateEUI.paths['resource/eui_skins/list/battle_list_15.exml'] = window.skins.battle_list_1 = (function (_super) {
	__extends(battle_list_1, _super);
	var battle_list_1$Skin73 = 	(function (_super) {
		__extends(battle_list_1$Skin73, _super);
		function battle_list_1$Skin73() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","bt_game_15_1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = battle_list_1$Skin73.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "bt_game_15_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return battle_list_1$Skin73;
	})(eui.Skin);

	function battle_list_1() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 150;
		this.width = 446;
		this.elementsContent = [this._Button1_i()];
	}
	var _proto = battle_list_1.prototype;

	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 223;
		t.anchorOffsetY = 75;
		t.label = "";
		t.x = 223;
		t.y = 75;
		t.skinName = battle_list_1$Skin73;
		return t;
	};
	return battle_list_1;
})(eui.Skin);generateEUI.paths['resource/eui_skins/list/battle_list_20.exml'] = window.skins.battle_list_1 = (function (_super) {
	__extends(battle_list_1, _super);
	var battle_list_1$Skin74 = 	(function (_super) {
		__extends(battle_list_1$Skin74, _super);
		function battle_list_1$Skin74() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","bt_game_20_1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = battle_list_1$Skin74.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "bt_game_20_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return battle_list_1$Skin74;
	})(eui.Skin);

	function battle_list_1() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 150;
		this.width = 446;
		this.elementsContent = [this._Button1_i()];
	}
	var _proto = battle_list_1.prototype;

	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 223;
		t.anchorOffsetY = 75;
		t.label = "";
		t.x = 223;
		t.y = 75;
		t.skinName = battle_list_1$Skin74;
		return t;
	};
	return battle_list_1;
})(eui.Skin);generateEUI.paths['resource/eui_skins/list/battle_list_28.exml'] = window.skins.battle_list_28 = (function (_super) {
	__extends(battle_list_28, _super);
	var battle_list_28$Skin75 = 	(function (_super) {
		__extends(battle_list_28$Skin75, _super);
		function battle_list_28$Skin75() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","bt_game_28_1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = battle_list_28$Skin75.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.fillMode = "clip";
			t.percentHeight = 100;
			t.source = "bt_game_28_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return battle_list_28$Skin75;
	})(eui.Skin);

	function battle_list_28() {
		_super.call(this);
		this.skinParts = [];
		
		this.currentState = "up";
		this.height = 150;
		this.width = 446;
		this.elementsContent = [this._Button1_i()];
	}
	var _proto = battle_list_28.prototype;

	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 223;
		t.anchorOffsetY = 75;
		t.enabled = true;
		t.label = "";
		t.touchEnabled = true;
		t.x = 223;
		t.y = 75;
		t.skinName = battle_list_28$Skin75;
		return t;
	};
	return battle_list_28;
})(eui.Skin);generateEUI.paths['resource/eui_skins/list/battle_list_40.exml'] = window.skins.battle_list_1 = (function (_super) {
	__extends(battle_list_1, _super);
	var battle_list_1$Skin76 = 	(function (_super) {
		__extends(battle_list_1$Skin76, _super);
		function battle_list_1$Skin76() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","bt_game_40_1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = battle_list_1$Skin76.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "bt_game_40_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return battle_list_1$Skin76;
	})(eui.Skin);

	function battle_list_1() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 150;
		this.width = 446;
		this.elementsContent = [this._Button1_i()];
	}
	var _proto = battle_list_1.prototype;

	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 223;
		t.anchorOffsetY = 75;
		t.enabled = true;
		t.label = "";
		t.x = 223;
		t.y = 75;
		t.skinName = battle_list_1$Skin76;
		return t;
	};
	return battle_list_1;
})(eui.Skin);generateEUI.paths['resource/eui_skins/list/battle_list_46.exml'] = window.skins.battle_list_1 = (function (_super) {
	__extends(battle_list_1, _super);
	var battle_list_1$Skin77 = 	(function (_super) {
		__extends(battle_list_1$Skin77, _super);
		function battle_list_1$Skin77() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","bt_game_46_1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = battle_list_1$Skin77.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "bt_game_46_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return battle_list_1$Skin77;
	})(eui.Skin);

	function battle_list_1() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 150;
		this.width = 446;
		this.elementsContent = [this._Button1_i()];
	}
	var _proto = battle_list_1.prototype;

	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 223;
		t.anchorOffsetY = 75;
		t.label = "";
		t.x = 223;
		t.y = 75;
		t.skinName = battle_list_1$Skin77;
		return t;
	};
	return battle_list_1;
})(eui.Skin);generateEUI.paths['resource/eui_skins/list/battle_list_52.exml'] = window.skins.battle_list_1 = (function (_super) {
	__extends(battle_list_1, _super);
	var battle_list_1$Skin78 = 	(function (_super) {
		__extends(battle_list_1$Skin78, _super);
		function battle_list_1$Skin78() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","bt_game_52_1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = battle_list_1$Skin78.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "bt_game_52_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return battle_list_1$Skin78;
	})(eui.Skin);

	function battle_list_1() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 150;
		this.width = 446;
		this.elementsContent = [this._Button1_i()];
	}
	var _proto = battle_list_1.prototype;

	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 223;
		t.anchorOffsetY = 75;
		t.label = "";
		t.x = 223;
		t.y = 75;
		t.skinName = battle_list_1$Skin78;
		return t;
	};
	return battle_list_1;
})(eui.Skin);generateEUI.paths['resource/eui_skins/list/battle_list_55.exml'] = window.skins.battle_list_1 = (function (_super) {
	__extends(battle_list_1, _super);
	var battle_list_1$Skin79 = 	(function (_super) {
		__extends(battle_list_1$Skin79, _super);
		function battle_list_1$Skin79() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","bt_game_55_1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = battle_list_1$Skin79.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "bt_game_55_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return battle_list_1$Skin79;
	})(eui.Skin);

	function battle_list_1() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 150;
		this.width = 446;
		this.elementsContent = [this._Button1_i()];
	}
	var _proto = battle_list_1.prototype;

	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 223;
		t.anchorOffsetY = 75;
		t.label = "";
		t.x = 223;
		t.y = 75;
		t.skinName = battle_list_1$Skin79;
		return t;
	};
	return battle_list_1;
})(eui.Skin);generateEUI.paths['resource/eui_skins/list/battle_list_57.exml'] = window.skins.List_Button_28 = (function (_super) {
	__extends(List_Button_28, _super);
	var List_Button_28$Skin80 = 	(function (_super) {
		__extends(List_Button_28$Skin80, _super);
		function List_Button_28$Skin80() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","gamelist_bt_game_57_1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = List_Button_28$Skin80.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "gamelist_bt_game_57_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return List_Button_28$Skin80;
	})(eui.Skin);

	function List_Button_28() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 150;
		this.width = 445;
		this.elementsContent = [this._Button1_i()];
	}
	var _proto = List_Button_28.prototype;

	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.x = 0;
		t.y = 0;
		t.skinName = List_Button_28$Skin80;
		return t;
	};
	return List_Button_28;
})(eui.Skin);generateEUI.paths['resource/eui_skins/list/battle_list_60.exml'] = window.skins.battle_list_1 = (function (_super) {
	__extends(battle_list_1, _super);
	var battle_list_1$Skin81 = 	(function (_super) {
		__extends(battle_list_1$Skin81, _super);
		function battle_list_1$Skin81() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","bt_game_60_1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = battle_list_1$Skin81.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "bt_game_60_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return battle_list_1$Skin81;
	})(eui.Skin);

	function battle_list_1() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 150;
		this.width = 446;
		this.elementsContent = [this._Button1_i()];
	}
	var _proto = battle_list_1.prototype;

	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 223;
		t.anchorOffsetY = 75;
		t.label = "";
		t.x = 223;
		t.y = 75;
		t.skinName = battle_list_1$Skin81;
		return t;
	};
	return battle_list_1;
})(eui.Skin);generateEUI.paths['resource/eui_skins/list/battle_list_65.exml'] = window.skins.List_Button_28 = (function (_super) {
	__extends(List_Button_28, _super);
	var List_Button_28$Skin82 = 	(function (_super) {
		__extends(List_Button_28$Skin82, _super);
		function List_Button_28$Skin82() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","gamelist_bt_game_65_1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = List_Button_28$Skin82.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "gamelist_bt_game_65_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return List_Button_28$Skin82;
	})(eui.Skin);

	function List_Button_28() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 150;
		this.width = 445;
		this.elementsContent = [this._Button1_i()];
	}
	var _proto = List_Button_28.prototype;

	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.x = 0;
		t.y = 0;
		t.skinName = List_Button_28$Skin82;
		return t;
	};
	return List_Button_28;
})(eui.Skin);generateEUI.paths['resource/eui_skins/list/battle_list_67.exml'] = window.skins.battle_list_1 = (function (_super) {
	__extends(battle_list_1, _super);
	var battle_list_1$Skin83 = 	(function (_super) {
		__extends(battle_list_1$Skin83, _super);
		function battle_list_1$Skin83() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","bt_game_67_1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = battle_list_1$Skin83.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "bt_game_67_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return battle_list_1$Skin83;
	})(eui.Skin);

	function battle_list_1() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 150;
		this.width = 446;
		this.elementsContent = [this._Button1_i()];
	}
	var _proto = battle_list_1.prototype;

	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 223;
		t.anchorOffsetY = 75;
		t.label = "";
		t.x = 223;
		t.y = 75;
		t.skinName = battle_list_1$Skin83;
		return t;
	};
	return battle_list_1;
})(eui.Skin);generateEUI.paths['resource/eui_skins/list/battle_list_68.exml'] = window.skins.battle_list_1 = (function (_super) {
	__extends(battle_list_1, _super);
	var battle_list_1$Skin84 = 	(function (_super) {
		__extends(battle_list_1$Skin84, _super);
		function battle_list_1$Skin84() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","bt_game_68_1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = battle_list_1$Skin84.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "bt_game_68_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return battle_list_1$Skin84;
	})(eui.Skin);

	function battle_list_1() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 150;
		this.width = 446;
		this.elementsContent = [this._Button1_i()];
	}
	var _proto = battle_list_1.prototype;

	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 223;
		t.anchorOffsetY = 75;
		t.label = "";
		t.x = 223;
		t.y = 75;
		t.skinName = battle_list_1$Skin84;
		return t;
	};
	return battle_list_1;
})(eui.Skin);generateEUI.paths['resource/eui_skins/list/battle_list_7.exml'] = window.skins.battle_list_1 = (function (_super) {
	__extends(battle_list_1, _super);
	var battle_list_1$Skin85 = 	(function (_super) {
		__extends(battle_list_1$Skin85, _super);
		function battle_list_1$Skin85() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","bt_game_7_1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = battle_list_1$Skin85.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "bt_game_7_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return battle_list_1$Skin85;
	})(eui.Skin);

	function battle_list_1() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 150;
		this.width = 446;
		this.elementsContent = [this._Button1_i()];
	}
	var _proto = battle_list_1.prototype;

	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 223;
		t.anchorOffsetY = 75;
		t.label = "";
		t.x = 223;
		t.y = 75;
		t.skinName = battle_list_1$Skin85;
		return t;
	};
	return battle_list_1;
})(eui.Skin);generateEUI.paths['resource/eui_skins/list/battle_list_71.exml'] = window.skins.battle_list_1 = (function (_super) {
	__extends(battle_list_1, _super);
	var battle_list_1$Skin86 = 	(function (_super) {
		__extends(battle_list_1$Skin86, _super);
		function battle_list_1$Skin86() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","bt_game_71_1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = battle_list_1$Skin86.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "bt_game_71_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return battle_list_1$Skin86;
	})(eui.Skin);

	function battle_list_1() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 150;
		this.width = 446;
		this.elementsContent = [this._Button1_i()];
	}
	var _proto = battle_list_1.prototype;

	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 223;
		t.anchorOffsetY = 75;
		t.label = "";
		t.x = 223;
		t.y = 75;
		t.skinName = battle_list_1$Skin86;
		return t;
	};
	return battle_list_1;
})(eui.Skin);generateEUI.paths['resource/eui_skins/list/battle_list_72.exml'] = window.skins.battle_list_1 = (function (_super) {
	__extends(battle_list_1, _super);
	var battle_list_1$Skin87 = 	(function (_super) {
		__extends(battle_list_1$Skin87, _super);
		function battle_list_1$Skin87() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","bt_game_72_1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = battle_list_1$Skin87.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "bt_game_72_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return battle_list_1$Skin87;
	})(eui.Skin);

	function battle_list_1() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 150;
		this.width = 446;
		this.elementsContent = [this._Button1_i()];
	}
	var _proto = battle_list_1.prototype;

	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 223;
		t.anchorOffsetY = 75;
		t.label = "";
		t.x = 223;
		t.y = 75;
		t.skinName = battle_list_1$Skin87;
		return t;
	};
	return battle_list_1;
})(eui.Skin);generateEUI.paths['resource/eui_skins/list/battle_list_73.exml'] = window.skins.battle_list_1 = (function (_super) {
	__extends(battle_list_1, _super);
	var battle_list_1$Skin88 = 	(function (_super) {
		__extends(battle_list_1$Skin88, _super);
		function battle_list_1$Skin88() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","bt_game_73_1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = battle_list_1$Skin88.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "bt_game_73_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return battle_list_1$Skin88;
	})(eui.Skin);

	function battle_list_1() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 150;
		this.width = 446;
		this.elementsContent = [this._Button1_i()];
	}
	var _proto = battle_list_1.prototype;

	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 223;
		t.anchorOffsetY = 75;
		t.label = "";
		t.x = 223;
		t.y = 75;
		t.skinName = battle_list_1$Skin88;
		return t;
	};
	return battle_list_1;
})(eui.Skin);generateEUI.paths['resource/eui_skins/list/battle_list_74.exml'] = window.skins.battle_list_1 = (function (_super) {
	__extends(battle_list_1, _super);
	var battle_list_1$Skin89 = 	(function (_super) {
		__extends(battle_list_1$Skin89, _super);
		function battle_list_1$Skin89() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","bt_game_74_1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = battle_list_1$Skin89.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "bt_game_74_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return battle_list_1$Skin89;
	})(eui.Skin);

	function battle_list_1() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 150;
		this.width = 446;
		this.elementsContent = [this._Button1_i()];
	}
	var _proto = battle_list_1.prototype;

	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 223;
		t.anchorOffsetY = 75;
		t.label = "";
		t.x = 223;
		t.y = 75;
		t.skinName = battle_list_1$Skin89;
		return t;
	};
	return battle_list_1;
})(eui.Skin);generateEUI.paths['resource/eui_skins/list/battle_list_75.exml'] = window.skins.battle_list_1 = (function (_super) {
	__extends(battle_list_1, _super);
	var battle_list_1$Skin90 = 	(function (_super) {
		__extends(battle_list_1$Skin90, _super);
		function battle_list_1$Skin90() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","bt_game_75_1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = battle_list_1$Skin90.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "bt_game_75_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return battle_list_1$Skin90;
	})(eui.Skin);

	function battle_list_1() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 150;
		this.width = 446;
		this.elementsContent = [this._Button1_i()];
	}
	var _proto = battle_list_1.prototype;

	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 223;
		t.anchorOffsetY = 75;
		t.label = "";
		t.x = 223;
		t.y = 75;
		t.skinName = battle_list_1$Skin90;
		return t;
	};
	return battle_list_1;
})(eui.Skin);generateEUI.paths['resource/eui_skins/list/battle_list_76.exml'] = window.skins.battle_list_1 = (function (_super) {
	__extends(battle_list_1, _super);
	var battle_list_1$Skin91 = 	(function (_super) {
		__extends(battle_list_1$Skin91, _super);
		function battle_list_1$Skin91() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","bt_game_76_1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = battle_list_1$Skin91.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "bt_game_76_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return battle_list_1$Skin91;
	})(eui.Skin);

	function battle_list_1() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 150;
		this.width = 446;
		this.elementsContent = [this._Button1_i()];
	}
	var _proto = battle_list_1.prototype;

	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 223;
		t.anchorOffsetY = 75;
		t.label = "";
		t.x = 223;
		t.y = 75;
		t.skinName = battle_list_1$Skin91;
		return t;
	};
	return battle_list_1;
})(eui.Skin);generateEUI.paths['resource/eui_skins/list/battle_list_78.exml'] = window.skins.battle_list_1 = (function (_super) {
	__extends(battle_list_1, _super);
	var battle_list_1$Skin92 = 	(function (_super) {
		__extends(battle_list_1$Skin92, _super);
		function battle_list_1$Skin92() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","bt_game_78_1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = battle_list_1$Skin92.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "bt_game_78_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return battle_list_1$Skin92;
	})(eui.Skin);

	function battle_list_1() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 150;
		this.width = 446;
		this.elementsContent = [this._Button1_i()];
	}
	var _proto = battle_list_1.prototype;

	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 223;
		t.anchorOffsetY = 75;
		t.label = "";
		t.x = 223;
		t.y = 75;
		t.skinName = battle_list_1$Skin92;
		return t;
	};
	return battle_list_1;
})(eui.Skin);generateEUI.paths['resource/eui_skins/list/battle_list_79.exml'] = window.skins.battle_list_1 = (function (_super) {
	__extends(battle_list_1, _super);
	var battle_list_1$Skin93 = 	(function (_super) {
		__extends(battle_list_1$Skin93, _super);
		function battle_list_1$Skin93() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","bt_game_79_1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = battle_list_1$Skin93.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "bt_game_79_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return battle_list_1$Skin93;
	})(eui.Skin);

	function battle_list_1() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 150;
		this.width = 446;
		this.elementsContent = [this._Button1_i()];
	}
	var _proto = battle_list_1.prototype;

	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 223;
		t.anchorOffsetY = 75;
		t.label = "";
		t.x = 223;
		t.y = 75;
		t.skinName = battle_list_1$Skin93;
		return t;
	};
	return battle_list_1;
})(eui.Skin);generateEUI.paths['resource/eui_skins/list/battle_list_8.exml'] = window.skins.battle_list_1 = (function (_super) {
	__extends(battle_list_1, _super);
	var battle_list_1$Skin94 = 	(function (_super) {
		__extends(battle_list_1$Skin94, _super);
		function battle_list_1$Skin94() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","bt_game_8_1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = battle_list_1$Skin94.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "bt_game_8_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return battle_list_1$Skin94;
	})(eui.Skin);

	function battle_list_1() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 150;
		this.width = 446;
		this.elementsContent = [this._Button1_i()];
	}
	var _proto = battle_list_1.prototype;

	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 223;
		t.anchorOffsetY = 75;
		t.label = "";
		t.x = 223;
		t.y = 75;
		t.skinName = battle_list_1$Skin94;
		return t;
	};
	return battle_list_1;
})(eui.Skin);generateEUI.paths['resource/eui_skins/list/battle_list_81.exml'] = window.skins.battle_list_1 = (function (_super) {
	__extends(battle_list_1, _super);
	var battle_list_1$Skin95 = 	(function (_super) {
		__extends(battle_list_1$Skin95, _super);
		function battle_list_1$Skin95() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","bt_game_81_1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = battle_list_1$Skin95.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "bt_game_81_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return battle_list_1$Skin95;
	})(eui.Skin);

	function battle_list_1() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 150;
		this.width = 446;
		this.elementsContent = [this._Button1_i()];
	}
	var _proto = battle_list_1.prototype;

	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 223;
		t.anchorOffsetY = 75;
		t.label = "";
		t.x = 223;
		t.y = 75;
		t.skinName = battle_list_1$Skin95;
		return t;
	};
	return battle_list_1;
})(eui.Skin);generateEUI.paths['resource/eui_skins/list/battle_list_82.exml'] = window.skins.battle_list_1 = (function (_super) {
	__extends(battle_list_1, _super);
	var battle_list_1$Skin96 = 	(function (_super) {
		__extends(battle_list_1$Skin96, _super);
		function battle_list_1$Skin96() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","bt_game_82_1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = battle_list_1$Skin96.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "bt_game_82_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return battle_list_1$Skin96;
	})(eui.Skin);

	function battle_list_1() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 150;
		this.width = 446;
		this.elementsContent = [this._Button1_i()];
	}
	var _proto = battle_list_1.prototype;

	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 223;
		t.anchorOffsetY = 75;
		t.label = "";
		t.x = 223;
		t.y = 75;
		t.skinName = battle_list_1$Skin96;
		return t;
	};
	return battle_list_1;
})(eui.Skin);generateEUI.paths['resource/eui_skins/list/battle_list_86.exml'] = window.skins.List_Button_28 = (function (_super) {
	__extends(List_Button_28, _super);
	var List_Button_28$Skin97 = 	(function (_super) {
		__extends(List_Button_28$Skin97, _super);
		function List_Button_28$Skin97() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","gamelist_bt_game_86_1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = List_Button_28$Skin97.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "gamelist_bt_game_86_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return List_Button_28$Skin97;
	})(eui.Skin);

	function List_Button_28() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 150;
		this.width = 445;
		this.elementsContent = [this._Button1_i()];
	}
	var _proto = List_Button_28.prototype;

	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.x = 0;
		t.y = 0;
		t.skinName = List_Button_28$Skin97;
		return t;
	};
	return List_Button_28;
})(eui.Skin);generateEUI.paths['resource/eui_skins/list/battle_list_87.exml'] = window.skins.battle_list_1 = (function (_super) {
	__extends(battle_list_1, _super);
	var battle_list_1$Skin98 = 	(function (_super) {
		__extends(battle_list_1$Skin98, _super);
		function battle_list_1$Skin98() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","bt_game_87_1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = battle_list_1$Skin98.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "bt_game_87_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return battle_list_1$Skin98;
	})(eui.Skin);

	function battle_list_1() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 150;
		this.width = 446;
		this.elementsContent = [this._Button1_i()];
	}
	var _proto = battle_list_1.prototype;

	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 223;
		t.anchorOffsetY = 75;
		t.label = "";
		t.x = 223;
		t.y = 75;
		t.skinName = battle_list_1$Skin98;
		return t;
	};
	return battle_list_1;
})(eui.Skin);generateEUI.paths['resource/eui_skins/list/battle_list_88.exml'] = window.skins.List_Button_28 = (function (_super) {
	__extends(List_Button_28, _super);
	var List_Button_28$Skin99 = 	(function (_super) {
		__extends(List_Button_28$Skin99, _super);
		function List_Button_28$Skin99() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","gamelist_bt_game_88_1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = List_Button_28$Skin99.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "gamelist_bt_game_88_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return List_Button_28$Skin99;
	})(eui.Skin);

	function List_Button_28() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 150;
		this.width = 445;
		this.elementsContent = [this._Button1_i()];
	}
	var _proto = List_Button_28.prototype;

	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.x = 0;
		t.y = 0;
		t.skinName = List_Button_28$Skin99;
		return t;
	};
	return List_Button_28;
})(eui.Skin);generateEUI.paths['resource/eui_skins/list/battle_list_89.exml'] = window.skins.battle_list_1 = (function (_super) {
	__extends(battle_list_1, _super);
	var battle_list_1$Skin100 = 	(function (_super) {
		__extends(battle_list_1$Skin100, _super);
		function battle_list_1$Skin100() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","bt_game_89_1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = battle_list_1$Skin100.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "bt_game_89_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return battle_list_1$Skin100;
	})(eui.Skin);

	function battle_list_1() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 150;
		this.width = 446;
		this.elementsContent = [this._Button1_i()];
	}
	var _proto = battle_list_1.prototype;

	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 223;
		t.anchorOffsetY = 75;
		t.label = "";
		t.x = 223;
		t.y = 75;
		t.skinName = battle_list_1$Skin100;
		return t;
	};
	return battle_list_1;
})(eui.Skin);generateEUI.paths['resource/eui_skins/list/battle_list_90.exml'] = window.skins.battle_list_1 = (function (_super) {
	__extends(battle_list_1, _super);
	var battle_list_1$Skin101 = 	(function (_super) {
		__extends(battle_list_1$Skin101, _super);
		function battle_list_1$Skin101() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","bt_game_90_1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = battle_list_1$Skin101.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "bt_game_90_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return battle_list_1$Skin101;
	})(eui.Skin);

	function battle_list_1() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 150;
		this.width = 446;
		this.elementsContent = [this._Button1_i()];
	}
	var _proto = battle_list_1.prototype;

	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 223;
		t.anchorOffsetY = 75;
		t.label = "";
		t.x = 223;
		t.y = 75;
		t.skinName = battle_list_1$Skin101;
		return t;
	};
	return battle_list_1;
})(eui.Skin);generateEUI.paths['resource/eui_skins/list/battle_list_91.exml'] = window.skins.battle_list_1 = (function (_super) {
	__extends(battle_list_1, _super);
	var battle_list_1$Skin102 = 	(function (_super) {
		__extends(battle_list_1$Skin102, _super);
		function battle_list_1$Skin102() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","bt_game_91_1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = battle_list_1$Skin102.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "bt_game_91_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return battle_list_1$Skin102;
	})(eui.Skin);

	function battle_list_1() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 150;
		this.width = 446;
		this.elementsContent = [this._Button1_i()];
	}
	var _proto = battle_list_1.prototype;

	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 223;
		t.anchorOffsetY = 75;
		t.label = "";
		t.x = 223;
		t.y = 75;
		t.skinName = battle_list_1$Skin102;
		return t;
	};
	return battle_list_1;
})(eui.Skin);generateEUI.paths['resource/eui_skins/list/battle_list_92.exml'] = window.skins.battle_list_1 = (function (_super) {
	__extends(battle_list_1, _super);
	var battle_list_1$Skin103 = 	(function (_super) {
		__extends(battle_list_1$Skin103, _super);
		function battle_list_1$Skin103() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","bt_game_92_1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = battle_list_1$Skin103.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "bt_game_92_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return battle_list_1$Skin103;
	})(eui.Skin);

	function battle_list_1() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 150;
		this.width = 446;
		this.elementsContent = [this._Button1_i()];
	}
	var _proto = battle_list_1.prototype;

	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 223;
		t.anchorOffsetY = 75;
		t.label = "";
		t.x = 223;
		t.y = 75;
		t.skinName = battle_list_1$Skin103;
		return t;
	};
	return battle_list_1;
})(eui.Skin);generateEUI.paths['resource/eui_skins/list/battle_list_93.exml'] = window.skins.battle_list_1 = (function (_super) {
	__extends(battle_list_1, _super);
	var battle_list_1$Skin104 = 	(function (_super) {
		__extends(battle_list_1$Skin104, _super);
		function battle_list_1$Skin104() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","bt_game_93_1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = battle_list_1$Skin104.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "bt_game_93_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return battle_list_1$Skin104;
	})(eui.Skin);

	function battle_list_1() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 150;
		this.width = 446;
		this.elementsContent = [this._Button1_i()];
	}
	var _proto = battle_list_1.prototype;

	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 223;
		t.anchorOffsetY = 75;
		t.label = "";
		t.x = 223;
		t.y = 75;
		t.skinName = battle_list_1$Skin104;
		return t;
	};
	return battle_list_1;
})(eui.Skin);generateEUI.paths['resource/eui_skins/list/battle_list_94.exml'] = window.skins.battle_list_1 = (function (_super) {
	__extends(battle_list_1, _super);
	var battle_list_1$Skin105 = 	(function (_super) {
		__extends(battle_list_1$Skin105, _super);
		function battle_list_1$Skin105() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","bt_game_94_1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = battle_list_1$Skin105.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "bt_game_94_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return battle_list_1$Skin105;
	})(eui.Skin);

	function battle_list_1() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 150;
		this.width = 446;
		this.elementsContent = [this._Button1_i()];
	}
	var _proto = battle_list_1.prototype;

	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 223;
		t.anchorOffsetY = 75;
		t.label = "";
		t.x = 223;
		t.y = 75;
		t.skinName = battle_list_1$Skin105;
		return t;
	};
	return battle_list_1;
})(eui.Skin);generateEUI.paths['resource/eui_skins/list/battle_list_95.exml'] = window.skins.battle_list_1 = (function (_super) {
	__extends(battle_list_1, _super);
	var battle_list_1$Skin106 = 	(function (_super) {
		__extends(battle_list_1$Skin106, _super);
		function battle_list_1$Skin106() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","bt_game_95_1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = battle_list_1$Skin106.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "bt_game_95_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return battle_list_1$Skin106;
	})(eui.Skin);

	function battle_list_1() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 150;
		this.width = 446;
		this.elementsContent = [this._Button1_i()];
	}
	var _proto = battle_list_1.prototype;

	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 223;
		t.anchorOffsetY = 75;
		t.label = "";
		t.x = 223;
		t.y = 75;
		t.skinName = battle_list_1$Skin106;
		return t;
	};
	return battle_list_1;
})(eui.Skin);generateEUI.paths['resource/eui_skins/list/battle_list_96.exml'] = window.skins.battle_list_1 = (function (_super) {
	__extends(battle_list_1, _super);
	var battle_list_1$Skin107 = 	(function (_super) {
		__extends(battle_list_1$Skin107, _super);
		function battle_list_1$Skin107() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","bt_game_96_1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = battle_list_1$Skin107.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "bt_game_96_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return battle_list_1$Skin107;
	})(eui.Skin);

	function battle_list_1() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 150;
		this.width = 446;
		this.elementsContent = [this._Button1_i()];
	}
	var _proto = battle_list_1.prototype;

	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 223;
		t.anchorOffsetY = 75;
		t.label = "";
		t.x = 223;
		t.y = 75;
		t.skinName = battle_list_1$Skin107;
		return t;
	};
	return battle_list_1;
})(eui.Skin);generateEUI.paths['resource/eui_skins/list/battle_list_98.exml'] = window.skins.battle_list_1 = (function (_super) {
	__extends(battle_list_1, _super);
	var battle_list_1$Skin108 = 	(function (_super) {
		__extends(battle_list_1$Skin108, _super);
		function battle_list_1$Skin108() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","bt_game_98_1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = battle_list_1$Skin108.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "bt_game_98_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return battle_list_1$Skin108;
	})(eui.Skin);

	function battle_list_1() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 150;
		this.width = 446;
		this.elementsContent = [this._Button1_i()];
	}
	var _proto = battle_list_1.prototype;

	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 223;
		t.anchorOffsetY = 75;
		t.label = "";
		t.x = 223;
		t.y = 75;
		t.skinName = battle_list_1$Skin108;
		return t;
	};
	return battle_list_1;
})(eui.Skin);generateEUI.paths['resource/eui_skins/list/battle_list_99.exml'] = window.skins.battle_list_1 = (function (_super) {
	__extends(battle_list_1, _super);
	var battle_list_1$Skin109 = 	(function (_super) {
		__extends(battle_list_1$Skin109, _super);
		function battle_list_1$Skin109() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","bt_game_99_1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = battle_list_1$Skin109.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "bt_game_99_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return battle_list_1$Skin109;
	})(eui.Skin);

	function battle_list_1() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 150;
		this.width = 446;
		this.elementsContent = [this._Button1_i()];
	}
	var _proto = battle_list_1.prototype;

	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 223;
		t.anchorOffsetY = 75;
		t.label = "";
		t.x = 223;
		t.y = 75;
		t.skinName = battle_list_1$Skin109;
		return t;
	};
	return battle_list_1;
})(eui.Skin);generateEUI.paths['resource/eui_skins/logon/LogonLayer.exml'] = window.skins.LogonLayer = (function (_super) {
	__extends(LogonLayer, _super);
	var LogonLayer$Skin110 = 	(function (_super) {
		__extends(LogonLayer$Skin110, _super);
		function LogonLayer$Skin110() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","general_bt_lora_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","general_bt_lora_png")
					])
			];
		}
		var _proto = LogonLayer$Skin110.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "general_bt_lora_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LogonLayer$Skin110;
	})(eui.Skin);

	var LogonLayer$Skin111 = 	(function (_super) {
		__extends(LogonLayer$Skin111, _super);
		function LogonLayer$Skin111() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","general_menu_service_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","general_menu_service_png")
					])
			];
		}
		var _proto = LogonLayer$Skin111.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "general_menu_service_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LogonLayer$Skin111;
	})(eui.Skin);

	var LogonLayer$Skin112 = 	(function (_super) {
		__extends(LogonLayer$Skin112, _super);
		function LogonLayer$Skin112() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","general_menu_option_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","general_menu_option_png")
					])
			];
		}
		var _proto = LogonLayer$Skin112.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "general_menu_option_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LogonLayer$Skin112;
	})(eui.Skin);

	function LogonLayer() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Button1_i(),this._Image1_i(),this._Button2_i(),this._Button3_i(),this._Label1_i()];
	}
	var _proto = LogonLayer.prototype;

	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.enabled = true;
		t.label = "";
		t.name = "bt_lora";
		t.x = 0;
		t.y = 53.38;
		t.skinName = LogonLayer$Skin110;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 99;
		t.fillMode = "clip";
		t.height = 99;
		t.name = "tips_bg";
		t.scale9Grid = new egret.Rectangle(16,21,72,37);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "general_frame_model_png";
		t.width = 104;
		t.x = 188;
		t.y = 228;
		return t;
	};
	_proto._Button2_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 32;
		t.anchorOffsetY = 47;
		t.enabled = true;
		t.label = "";
		t.name = "btn_service";
		t.x = 1170;
		t.y = 53;
		t.skinName = LogonLayer$Skin111;
		return t;
	};
	_proto._Button3_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 31;
		t.anchorOffsetY = 47;
		t.enabled = true;
		t.label = "";
		t.name = "btn_set";
		t.x = 1271.63;
		t.y = 53;
		t.skinName = LogonLayer$Skin112;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 90;
		t.anchorOffsetY = 97;
		t.fontFamily = "Arial";
		t.lineSpacing = 10;
		t.maxWidth = 1000008;
		t.multiline = true;
		t.name = "tips_label";
		t.size = 24;
		t.text = "我是劳拉我是劳拉我是劳拉我是劳拉我是劳拉我是劳拉我是劳拉我是劳拉我是劳拉";
		t.textColor = 0xffcd6d;
		t.width = 180;
		t.x = 300;
		t.y = 183;
		return t;
	};
	return LogonLayer;
})(eui.Skin);generateEUI.paths['resource/eui_skins/logon/LogonModeView.exml'] = window.skins.LogonModeView = (function (_super) {
	__extends(LogonModeView, _super);
	var LogonModeView$Skin113 = 	(function (_super) {
		__extends(LogonModeView$Skin113, _super);
		function LogonModeView$Skin113() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","general_bt_account_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","general_bt_account_png")
					])
			];
		}
		var _proto = LogonModeView$Skin113.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "general_bt_account_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LogonModeView$Skin113;
	})(eui.Skin);

	var LogonModeView$Skin114 = 	(function (_super) {
		__extends(LogonModeView$Skin114, _super);
		function LogonModeView$Skin114() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","bt_wechat_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","bt_wechat_png")
					])
			];
		}
		var _proto = LogonModeView$Skin114.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "bt_wechat_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LogonModeView$Skin114;
	})(eui.Skin);

	var LogonModeView$Skin115 = 	(function (_super) {
		__extends(LogonModeView$Skin115, _super);
		function LogonModeView$Skin115() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","bt_regist_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","bt_regist_png")
					])
			];
		}
		var _proto = LogonModeView$Skin115.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "bt_regist_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LogonModeView$Skin115;
	})(eui.Skin);

	function LogonModeView() {
		_super.call(this);
		this.skinParts = ["Logon","Wechat","Regist","Logo","CopyRight","CopyRight1","CopyRight2"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.Logon_i(),this.Wechat_i(),this.Regist_i(),this.Logo_i(),this.CopyRight_i(),this.CopyRight1_i(),this.CopyRight2_i()];
	}
	var _proto = LogonModeView.prototype;

	_proto.Logon_i = function () {
		var t = new eui.Button();
		this.Logon = t;
		t.anchorOffsetX = 226;
		t.anchorOffsetY = 79;
		t.label = "";
		t.name = "bt_account_logon";
		t.x = 667;
		t.y = 204;
		t.skinName = LogonModeView$Skin113;
		return t;
	};
	_proto.Wechat_i = function () {
		var t = new eui.Button();
		this.Wechat = t;
		t.anchorOffsetX = 226;
		t.anchorOffsetY = 79;
		t.label = "";
		t.name = "bt_wechat_logon";
		t.x = 667;
		t.y = 364;
		t.skinName = LogonModeView$Skin114;
		return t;
	};
	_proto.Regist_i = function () {
		var t = new eui.Button();
		this.Regist = t;
		t.anchorOffsetX = 226;
		t.anchorOffsetY = 79;
		t.label = "";
		t.name = "bt_regist_account";
		t.x = 667;
		t.y = 524;
		t.skinName = LogonModeView$Skin115;
		return t;
	};
	_proto.Logo_i = function () {
		var t = new eui.Image();
		this.Logo = t;
		t.fillMode = "clip";
		t.height = 305;
		t.name = "logo";
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "general_general_logo_png";
		t.width = 608;
		t.x = 955;
		t.y = 445;
		return t;
	};
	_proto.CopyRight_i = function () {
		var t = new eui.Image();
		this.CopyRight = t;
		t.anchorOffsetX = 288;
		t.anchorOffsetY = 14;
		t.fillMode = "clip";
		t.height = 28;
		t.source = "CopyRight_1_png";
		t.width = 576;
		t.x = 667;
		t.y = 630.5;
		return t;
	};
	_proto.CopyRight1_i = function () {
		var t = new eui.Image();
		this.CopyRight1 = t;
		t.anchorOffsetX = 390.5;
		t.anchorOffsetY = 10.5;
		t.fillMode = "clip";
		t.height = 21;
		t.source = "CopyRight_2_png";
		t.width = 781;
		t.x = 667;
		t.y = 658.5;
		return t;
	};
	_proto.CopyRight2_i = function () {
		var t = new eui.Image();
		this.CopyRight2 = t;
		t.anchorOffsetX = 500;
		t.anchorOffsetY = 10.5;
		t.fillMode = "clip";
		t.height = 21;
		t.source = "CopyRight_3_png";
		t.width = 1000;
		t.x = 667;
		t.y = 686.5;
		return t;
	};
	return LogonModeView;
})(eui.Skin);generateEUI.paths['resource/eui_skins/logon/TextInputLogon.exml'] = window.skins.TextInputLogon = (function (_super) {
	__extends(TextInputLogon, _super);
	function TextInputLogon() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
					new eui.SetProperty("_Image1","visible",true),
					new eui.SetProperty("_Rect1","fillColor",0xffffff),
					new eui.SetProperty("_Rect1","fillAlpha",0.0),
					new eui.SetProperty("textDisplay","backgroundColor",0xffffff),
					new eui.SetProperty("textDisplay","borderColor",0x000000),
					new eui.SetProperty("textDisplay","anchorOffsetY",0),
					new eui.SetProperty("textDisplay","left","139"),
					new eui.SetProperty("textDisplay","right","52"),
					new eui.SetProperty("textDisplay","verticalCenter","0.5"),
					new eui.SetProperty("textDisplay","height",91),
					new eui.SetProperty("textDisplay","size",28),
					new eui.SetProperty("textDisplay","anchorOffsetX",0),
					new eui.SetProperty("textDisplay","textColor",0xffffff),
					new eui.SetProperty("textDisplay","x",60),
					new eui.SetProperty("textDisplay","y",10),
					new eui.SetProperty("textDisplay","verticalAlign","middle"),
					new eui.SetProperty("promptDisplay","left",10),
					new eui.SetProperty("promptDisplay","right",10)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Rect1","alpha",0.0),
					new eui.SetProperty("textDisplay","textColor",0xff0000),
					new eui.SetProperty("promptDisplay","left",10),
					new eui.SetProperty("promptDisplay","right",10)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,""),
					new eui.SetProperty("_Image1","alpha",1.0),
					new eui.SetProperty("_Rect1","alpha",0),
					new eui.SetProperty("textDisplay","anchorOffsetY",0),
					new eui.SetProperty("textDisplay","left","124"),
					new eui.SetProperty("textDisplay","right","61"),
					new eui.SetProperty("textDisplay","verticalCenter","-2"),
					new eui.SetProperty("textDisplay","height",92),
					new eui.SetProperty("textDisplay","anchorOffsetX",0),
					new eui.SetProperty("textDisplay","size",28),
					new eui.SetProperty("textDisplay","textColor",0xffffff),
					new eui.SetProperty("promptDisplay","anchorOffsetY",0),
					new eui.SetProperty("promptDisplay","verticalCenter",-1.5),
					new eui.SetProperty("promptDisplay","height",91),
					new eui.SetProperty("promptDisplay","anchorOffsetX",0),
					new eui.SetProperty("promptDisplay","backgroundColor",0xffffff),
					new eui.SetProperty("promptDisplay","size",32),
					new eui.SetProperty("promptDisplay","y",60),
					new eui.SetProperty("promptDisplay","width",430),
					new eui.SetProperty("promptDisplay","bold",true),
					new eui.SetProperty("promptDisplay","textAlign","left"),
					new eui.SetProperty("promptDisplay","verticalAlign","middle"),
					new eui.SetProperty("promptDisplay","x",138)
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,""),
					new eui.SetProperty("_Rect1","alpha",0),
					new eui.SetProperty("promptDisplay","left",10),
					new eui.SetProperty("promptDisplay","right",10)
				])
		];
	}
	var _proto = TextInputLogon.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.fillMode = "clip";
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "textfield_frame_logon_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		this._Rect1 = t;
		t.anchorOffsetX = 0;
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.width = 518;
		t.x = 139;
		t.y = 0;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.anchorOffsetX = 0;
		t.height = 24;
		t.left = "132";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.anchorOffsetX = 0;
		t.height = 24;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.width = 513;
		t.x = 138;
		return t;
	};
	return TextInputLogon;
})(eui.Skin);generateEUI.paths['resource/eui_skins/logon/LogonView.exml'] = window.skins.LogonView = (function (_super) {
	__extends(LogonView, _super);
	var LogonView$Skin116 = 	(function (_super) {
		__extends(LogonView$Skin116, _super);
		function LogonView$Skin116() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LogonView$Skin116.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "bt_logon_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LogonView$Skin116;
	})(eui.Skin);

	var LogonView$Skin117 = 	(function (_super) {
		__extends(LogonView$Skin117, _super);
		function LogonView$Skin117() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","bt_regist_2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","bt_regist_2_png")
					])
			];
		}
		var _proto = LogonView$Skin117.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "bt_regist_2_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LogonView$Skin117;
	})(eui.Skin);

	var LogonView$Skin118 = 	(function (_super) {
		__extends(LogonView$Skin118, _super);
		function LogonView$Skin118() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","general_bt_return_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","general_bt_return_png")
					])
			];
		}
		var _proto = LogonView$Skin118.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "general_bt_return_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LogonView$Skin118;
	})(eui.Skin);

	var LogonView$Skin119 = 	(function (_super) {
		__extends(LogonView$Skin119, _super);
		function LogonView$Skin119() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","general_choose_pass_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LogonView$Skin119.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "general_choose_bg_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LogonView$Skin119;
	})(eui.Skin);

	function LogonView() {
		_super.call(this);
		this.skinParts = ["InputAccount","InputPassword","Input_ICON","Input_ICON1","Logon","Regist","Return","Image","Tips"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.InputAccount_i(),this.InputPassword_i(),this.Input_ICON_i(),this.Input_ICON1_i(),this.Logon_i(),this.Regist_i(),this.Return_i(),this.Image_i(),this._CheckBox1_i(),this.Tips_i()];
	}
	var _proto = LogonView.prototype;

	_proto.InputAccount_i = function () {
		var t = new eui.TextInput();
		this.InputAccount = t;
		t.anchorOffsetX = 328.5;
		t.anchorOffsetY = 63;
		t.enabled = true;
		t.height = 126;
		t.name = "input_account";
		t.skinName = "skins.TextInputLogon";
		t.width = 657;
		t.x = 667;
		t.y = 220;
		return t;
	};
	_proto.InputPassword_i = function () {
		var t = new eui.TextInput();
		this.InputPassword = t;
		t.anchorOffsetX = 328.5;
		t.anchorOffsetY = 63;
		t.displayAsPassword = true;
		t.height = 126;
		t.name = "input_password";
		t.skinName = "skins.TextInputLogon";
		t.width = 657;
		t.x = 667;
		t.y = 357;
		return t;
	};
	_proto.Input_ICON_i = function () {
		var t = new eui.Image();
		this.Input_ICON = t;
		t.fillMode = "clip";
		t.height = 87;
		t.source = "icon_account_png";
		t.touchEnabled = false;
		t.width = 87;
		t.x = 354;
		t.y = 171.5;
		return t;
	};
	_proto.Input_ICON1_i = function () {
		var t = new eui.Image();
		this.Input_ICON1 = t;
		t.fillMode = "clip";
		t.height = 87;
		t.source = "icon_password_png";
		t.touchEnabled = false;
		t.width = 87;
		t.x = 354;
		t.y = 310.5;
		return t;
	};
	_proto.Logon_i = function () {
		var t = new eui.Button();
		this.Logon = t;
		t.anchorOffsetX = 163.5;
		t.anchorOffsetY = 76;
		t.label = "";
		t.name = "bt_logon";
		t.x = 832;
		t.y = 520;
		t.skinName = LogonView$Skin116;
		return t;
	};
	_proto.Regist_i = function () {
		var t = new eui.Button();
		this.Regist = t;
		t.anchorOffsetX = 163.5;
		t.anchorOffsetY = 76;
		t.enabled = true;
		t.label = "";
		t.name = "bt_regist";
		t.x = 502;
		t.y = 520;
		t.skinName = LogonView$Skin117;
		return t;
	};
	_proto.Return_i = function () {
		var t = new eui.Button();
		this.Return = t;
		t.anchorOffsetX = 50.5;
		t.anchorOffsetY = 50.5;
		t.label = "";
		t.name = "bt_return";
		t.x = 50.5;
		t.y = 50.5;
		t.skinName = LogonView$Skin118;
		return t;
	};
	_proto.Image_i = function () {
		var t = new eui.Image();
		this.Image = t;
		t.fillMode = "clip";
		t.height = 87;
		t.source = "general_choose_bg_png";
		t.width = 87;
		t.x = 482;
		t.y = 596;
		return t;
	};
	_proto._CheckBox1_i = function () {
		var t = new eui.CheckBox();
		t.label = "";
		t.name = "auot_checkbox";
		t.x = 482;
		t.y = 596;
		t.skinName = LogonView$Skin119;
		return t;
	};
	_proto.Tips_i = function () {
		var t = new eui.Label();
		this.Tips = t;
		t.fontFamily = "Arial";
		t.text = "下次自动登录";
		t.textColor = 0x000000;
		t.x = 575.5;
		t.y = 629.5;
		return t;
	};
	return LogonView;
})(eui.Skin);generateEUI.paths['resource/eui_skins/logon/TextInputRegist.exml'] = window.skins.TextInputRegist = (function (_super) {
	__extends(TextInputRegist, _super);
	function TextInputRegist() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
					new eui.SetProperty("_Image1","visible",true),
					new eui.SetProperty("_Rect1","fillColor",0xffffff),
					new eui.SetProperty("_Rect1","fillAlpha",0.0),
					new eui.SetProperty("textDisplay","backgroundColor",0xffffff),
					new eui.SetProperty("textDisplay","borderColor",0x000000),
					new eui.SetProperty("textDisplay","anchorOffsetY",0),
					new eui.SetProperty("textDisplay","left","52"),
					new eui.SetProperty("textDisplay","right","52"),
					new eui.SetProperty("textDisplay","verticalCenter","0.5"),
					new eui.SetProperty("textDisplay","height",91),
					new eui.SetProperty("textDisplay","size",28),
					new eui.SetProperty("textDisplay","anchorOffsetX",0),
					new eui.SetProperty("textDisplay","textColor",0xffffff),
					new eui.SetProperty("textDisplay","x",60),
					new eui.SetProperty("textDisplay","y",10),
					new eui.SetProperty("textDisplay","verticalAlign","middle"),
					new eui.SetProperty("promptDisplay","left",10),
					new eui.SetProperty("promptDisplay","right",10)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Rect1","alpha",0.0),
					new eui.SetProperty("textDisplay","textColor",0xff0000),
					new eui.SetProperty("promptDisplay","left",10),
					new eui.SetProperty("promptDisplay","right",10)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,""),
					new eui.SetProperty("_Image1","alpha",1.0),
					new eui.SetProperty("_Rect1","alpha",0),
					new eui.SetProperty("textDisplay","anchorOffsetY",0),
					new eui.SetProperty("textDisplay","left","61"),
					new eui.SetProperty("textDisplay","right","61"),
					new eui.SetProperty("textDisplay","verticalCenter","-2"),
					new eui.SetProperty("textDisplay","height",92),
					new eui.SetProperty("textDisplay","anchorOffsetX",0),
					new eui.SetProperty("textDisplay","size",28),
					new eui.SetProperty("textDisplay","textColor",0xffffff),
					new eui.SetProperty("promptDisplay","anchorOffsetY",0),
					new eui.SetProperty("promptDisplay","verticalCenter",0.5),
					new eui.SetProperty("promptDisplay","height",91),
					new eui.SetProperty("promptDisplay","anchorOffsetX",0),
					new eui.SetProperty("promptDisplay","backgroundColor",0xffffff),
					new eui.SetProperty("promptDisplay","size",32),
					new eui.SetProperty("promptDisplay","y",60),
					new eui.SetProperty("promptDisplay","width",430),
					new eui.SetProperty("promptDisplay","bold",true),
					new eui.SetProperty("promptDisplay","textAlign","left"),
					new eui.SetProperty("promptDisplay","verticalAlign","middle"),
					new eui.SetProperty("promptDisplay","x",60)
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,""),
					new eui.SetProperty("_Rect1","alpha",0),
					new eui.SetProperty("promptDisplay","left",10),
					new eui.SetProperty("promptDisplay","right",10)
				])
		];
	}
	var _proto = TextInputRegist.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.fillMode = "clip";
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "textfield_frame_regist_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		this._Rect1 = t;
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.visible = false;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputRegist;
})(eui.Skin);generateEUI.paths['resource/eui_skins/logon/RegistView.exml'] = window.skins.RegistView = (function (_super) {
	__extends(RegistView, _super);
	var RegistView$Skin120 = 	(function (_super) {
		__extends(RegistView$Skin120, _super);
		function RegistView$Skin120() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","general_bt_return_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","general_bt_return_png")
					])
			];
		}
		var _proto = RegistView$Skin120.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "general_bt_return_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return RegistView$Skin120;
	})(eui.Skin);

	var RegistView$Skin121 = 	(function (_super) {
		__extends(RegistView$Skin121, _super);
		function RegistView$Skin121() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","general_choose_pass_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","general_choose_bg_png")
					])
			];
		}
		var _proto = RegistView$Skin121.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "general_choose_bg_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return RegistView$Skin121;
	})(eui.Skin);

	var RegistView$Skin122 = 	(function (_super) {
		__extends(RegistView$Skin122, _super);
		function RegistView$Skin122() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","bt_regist_agree_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","bt_regist_agree_png")
					])
			];
		}
		var _proto = RegistView$Skin122.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "bt_regist_agree_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return RegistView$Skin122;
	})(eui.Skin);

	var RegistView$Skin123 = 	(function (_super) {
		__extends(RegistView$Skin123, _super);
		function RegistView$Skin123() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","bt_regist_confirm_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","bt_regist_confirm_png")
					])
			];
		}
		var _proto = RegistView$Skin123.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "bt_regist_confirm_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return RegistView$Skin123;
	})(eui.Skin);

	function RegistView() {
		_super.call(this);
		this.skinParts = ["Return","Account","Password","Input_Account","Input_Password","Tips","AgreeMent","Regist"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.Return_i(),this.Account_i(),this.Password_i(),this.Input_Account_i(),this.Input_Password_i(),this._Image1_i(),this._CheckBox1_i(),this.Tips_i(),this.AgreeMent_i(),this.Regist_i()];
	}
	var _proto = RegistView.prototype;

	_proto.Return_i = function () {
		var t = new eui.Button();
		this.Return = t;
		t.anchorOffsetX = 50.5;
		t.anchorOffsetY = 50.5;
		t.label = "";
		t.name = "bt_return";
		t.x = 71;
		t.y = 50.5;
		t.skinName = RegistView$Skin120;
		return t;
	};
	_proto.Account_i = function () {
		var t = new eui.Image();
		this.Account = t;
		t.fillMode = "clip";
		t.height = 59;
		t.source = "text_regist_account_png";
		t.width = 133;
		t.x = 316;
		t.y = 218;
		return t;
	};
	_proto.Password_i = function () {
		var t = new eui.Image();
		this.Password = t;
		t.fillMode = "clip";
		t.height = 59;
		t.source = "text_regist_password_png";
		t.width = 126;
		t.x = 316;
		t.y = 347.5;
		return t;
	};
	_proto.Input_Account_i = function () {
		var t = new eui.TextInput();
		this.Input_Account = t;
		t.anchorOffsetX = 0;
		t.enabled = true;
		t.height = 126;
		t.name = "input_account";
		t.skinName = "skins.TextInputRegist";
		t.width = 536;
		t.x = 469;
		t.y = 184.5;
		return t;
	};
	_proto.Input_Password_i = function () {
		var t = new eui.TextInput();
		this.Input_Password = t;
		t.anchorOffsetX = 0;
		t.displayAsPassword = true;
		t.height = 126;
		t.name = "input_password";
		t.skinName = "skins.TextInputRegist";
		t.width = 536;
		t.x = 469;
		t.y = 314;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.fillMode = "clip";
		t.height = 87;
		t.source = "general_choose_bg_png";
		t.width = 87;
		t.x = 448;
		t.y = 472;
		return t;
	};
	_proto._CheckBox1_i = function () {
		var t = new eui.CheckBox();
		t.label = "";
		t.name = "agree_checkbox";
		t.x = 448;
		t.y = 472;
		t.skinName = RegistView$Skin121;
		return t;
	};
	_proto.Tips_i = function () {
		var t = new eui.Label();
		this.Tips = t;
		t.fontFamily = "Arial";
		t.size = 28;
		t.text = "我已同意,并接受";
		t.textColor = 0x070707;
		t.x = 544;
		t.y = 501.5;
		return t;
	};
	_proto.AgreeMent_i = function () {
		var t = new eui.Button();
		this.AgreeMent = t;
		t.height = 80;
		t.label = "";
		t.name = "bt_service";
		t.x = 763;
		t.y = 476;
		t.skinName = RegistView$Skin122;
		return t;
	};
	_proto.Regist_i = function () {
		var t = new eui.Button();
		this.Regist = t;
		t.anchorOffsetX = 274.5;
		t.anchorOffsetY = 78;
		t.label = "";
		t.name = "bt_confirm";
		t.x = 727;
		t.y = 645;
		t.skinName = RegistView$Skin123;
		return t;
	};
	return RegistView;
})(eui.Skin);generateEUI.paths['resource/eui_skins/other/GameHelpLayer.exml'] = window.skins.GameHelpLayer = (function (_super) {
	__extends(GameHelpLayer, _super);
	var GameHelpLayer$Skin124 = 	(function (_super) {
		__extends(GameHelpLayer$Skin124, _super);
		function GameHelpLayer$Skin124() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","general_bt_close_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameHelpLayer$Skin124.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "general_bt_close_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameHelpLayer$Skin124;
	})(eui.Skin);

	function GameHelpLayer() {
		_super.call(this);
		this.skinParts = ["bg","close"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.bg_i(),this.close_i(),this._Image1_i()];
	}
	var _proto = GameHelpLayer.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.anchorOffsetX = 555;
		t.anchorOffsetY = 346;
		t.fillMode = "clip";
		t.height = 692;
		t.source = "general_notice_frame_png";
		t.touchEnabled = true;
		t.width = 1110;
		t.x = 667;
		t.y = 375;
		return t;
	};
	_proto.close_i = function () {
		var t = new eui.Button();
		this.close = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.enabled = true;
		t.height = 74;
		t.label = "";
		t.name = "bt_close";
		t.width = 74;
		t.x = 1138;
		t.y = 40;
		t.skinName = GameHelpLayer$Skin124;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 71.5;
		t.anchorOffsetY = 20.5;
		t.fillMode = "clip";
		t.height = 41;
		t.source = "general_text_rule_png";
		t.width = 143;
		t.x = 667;
		t.y = 65.58;
		return t;
	};
	return GameHelpLayer;
})(eui.Skin);generateEUI.paths['resource/eui_skins/other/HeadModify.exml'] = window.skins.HeadModify = (function (_super) {
	__extends(HeadModify, _super);
	var HeadModify$Skin125 = 	(function (_super) {
		__extends(HeadModify$Skin125, _super);
		function HeadModify$Skin125() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","general_bt_close_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HeadModify$Skin125.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "general_bt_close_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return HeadModify$Skin125;
	})(eui.Skin);

	var HeadModify$Skin126 = 	(function (_super) {
		__extends(HeadModify$Skin126, _super);
		function HeadModify$Skin126() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","userinfo_bt_modify_0_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HeadModify$Skin126.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "userinfo_bt_modify_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return HeadModify$Skin126;
	})(eui.Skin);

	var HeadModify$Skin127 = 	(function (_super) {
		__extends(HeadModify$Skin127, _super);
		function HeadModify$Skin127() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","userinfo_head_modify_1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HeadModify$Skin127.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "userinfo_head_modify_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return HeadModify$Skin127;
	})(eui.Skin);

	var HeadModify$Skin128 = 	(function (_super) {
		__extends(HeadModify$Skin128, _super);
		function HeadModify$Skin128() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","userinfo_head_modify_1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HeadModify$Skin128.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "userinfo_head_modify_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return HeadModify$Skin128;
	})(eui.Skin);

	var HeadModify$Skin129 = 	(function (_super) {
		__extends(HeadModify$Skin129, _super);
		function HeadModify$Skin129() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","userinfo_head_modify_1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HeadModify$Skin129.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "userinfo_head_modify_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return HeadModify$Skin129;
	})(eui.Skin);

	var HeadModify$Skin130 = 	(function (_super) {
		__extends(HeadModify$Skin130, _super);
		function HeadModify$Skin130() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","userinfo_head_modify_1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HeadModify$Skin130.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "userinfo_head_modify_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return HeadModify$Skin130;
	})(eui.Skin);

	var HeadModify$Skin131 = 	(function (_super) {
		__extends(HeadModify$Skin131, _super);
		function HeadModify$Skin131() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","userinfo_head_modify_1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HeadModify$Skin131.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "userinfo_head_modify_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return HeadModify$Skin131;
	})(eui.Skin);

	var HeadModify$Skin132 = 	(function (_super) {
		__extends(HeadModify$Skin132, _super);
		function HeadModify$Skin132() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","userinfo_head_modify_1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HeadModify$Skin132.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "userinfo_head_modify_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return HeadModify$Skin132;
	})(eui.Skin);

	var HeadModify$Skin133 = 	(function (_super) {
		__extends(HeadModify$Skin133, _super);
		function HeadModify$Skin133() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","userinfo_head_modify_1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HeadModify$Skin133.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "userinfo_head_modify_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return HeadModify$Skin133;
	})(eui.Skin);

	var HeadModify$Skin134 = 	(function (_super) {
		__extends(HeadModify$Skin134, _super);
		function HeadModify$Skin134() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","userinfo_head_modify_1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HeadModify$Skin134.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "userinfo_head_modify_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return HeadModify$Skin134;
	})(eui.Skin);

	var HeadModify$Skin135 = 	(function (_super) {
		__extends(HeadModify$Skin135, _super);
		function HeadModify$Skin135() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","userinfo_head_modify_1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HeadModify$Skin135.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "userinfo_head_modify_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return HeadModify$Skin135;
	})(eui.Skin);

	var HeadModify$Skin136 = 	(function (_super) {
		__extends(HeadModify$Skin136, _super);
		function HeadModify$Skin136() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","userinfo_head_modify_1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HeadModify$Skin136.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "userinfo_head_modify_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return HeadModify$Skin136;
	})(eui.Skin);

	function HeadModify() {
		_super.call(this);
		this.skinParts = ["BG","HeadBG","Close","Modify","Title","Head"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.BG_i(),this.HeadBG_i(),this.Close_i(),this.Modify_i(),this.Title_i(),this.Head_i()];
	}
	var _proto = HeadModify.prototype;

	_proto.BG_i = function () {
		var t = new eui.Image();
		this.BG = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "clip";
		t.height = 553.34;
		t.source = "general_back_frame_1_png";
		t.width = 792.73;
		t.x = 288;
		t.y = 94.09;
		return t;
	};
	_proto.HeadBG_i = function () {
		var t = new eui.Image();
		this.HeadBG = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "clip";
		t.height = 350.31;
		t.source = "userinfo_back_frame_3_png";
		t.width = 732.12;
		t.x = 320.24;
		t.y = 185.91;
		return t;
	};
	_proto.Close_i = function () {
		var t = new eui.Button();
		this.Close = t;
		t.anchorOffsetX = 37;
		t.anchorOffsetY = 37;
		t.label = "";
		t.name = "bt_close";
		t.width = 74;
		t.x = 1049.61;
		t.y = 142.54;
		t.skinName = HeadModify$Skin125;
		return t;
	};
	_proto.Modify_i = function () {
		var t = new eui.Button();
		this.Modify = t;
		t.anchorOffsetX = 103;
		t.anchorOffsetY = 42;
		t.label = "";
		t.name = "bt_modify";
		t.x = 667;
		t.y = 578.9;
		t.skinName = HeadModify$Skin126;
		return t;
	};
	_proto.Title_i = function () {
		var t = new eui.Image();
		this.Title = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "clip";
		t.height = 38.19;
		t.source = "userinfo_text_modifyhead_png";
		t.width = 142.73;
		t.x = 616.84;
		t.y = 113.97;
		return t;
	};
	_proto.Head_i = function () {
		var t = new eui.Panel();
		this.Head = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 324.54;
		t.name = "panel_head";
		t.width = 718.48;
		t.x = 323.82;
		t.y = 193.64;
		t.elementsContent = [this._RadioButton1_i(),this._RadioButton2_i(),this._RadioButton3_i(),this._RadioButton4_i(),this._RadioButton5_i(),this._RadioButton6_i(),this._RadioButton7_i(),this._RadioButton8_i(),this._RadioButton9_i(),this._RadioButton10_i()];
		return t;
	};
	_proto._RadioButton1_i = function () {
		var t = new eui.RadioButton();
		t.height = 100;
		t.label = "";
		t.name = "radio_0";
		t.width = 100;
		t.x = 10;
		t.y = 15;
		t.skinName = HeadModify$Skin127;
		return t;
	};
	_proto._RadioButton2_i = function () {
		var t = new eui.RadioButton();
		t.height = 100;
		t.label = "";
		t.name = "radio_6";
		t.width = 100;
		t.x = 10;
		t.y = 145;
		t.skinName = HeadModify$Skin128;
		return t;
	};
	_proto._RadioButton3_i = function () {
		var t = new eui.RadioButton();
		t.height = 100;
		t.label = "";
		t.name = "radio_7";
		t.width = 100;
		t.x = 130;
		t.y = 145;
		t.skinName = HeadModify$Skin129;
		return t;
	};
	_proto._RadioButton4_i = function () {
		var t = new eui.RadioButton();
		t.height = 100;
		t.label = "";
		t.name = "radio_8";
		t.width = 100;
		t.x = 250;
		t.y = 145;
		t.skinName = HeadModify$Skin130;
		return t;
	};
	_proto._RadioButton5_i = function () {
		var t = new eui.RadioButton();
		t.height = 100;
		t.label = "";
		t.name = "radio_9";
		t.width = 100;
		t.x = 370;
		t.y = 144.39;
		t.skinName = HeadModify$Skin131;
		return t;
	};
	_proto._RadioButton6_i = function () {
		var t = new eui.RadioButton();
		t.height = 100;
		t.label = "";
		t.name = "radio_1";
		t.width = 100;
		t.x = 130;
		t.y = 15;
		t.skinName = HeadModify$Skin132;
		return t;
	};
	_proto._RadioButton7_i = function () {
		var t = new eui.RadioButton();
		t.height = 100;
		t.label = "";
		t.name = "radio_2";
		t.width = 100;
		t.x = 250;
		t.y = 15;
		t.skinName = HeadModify$Skin133;
		return t;
	};
	_proto._RadioButton8_i = function () {
		var t = new eui.RadioButton();
		t.height = 100;
		t.label = "";
		t.name = "radio_3";
		t.width = 100;
		t.x = 370;
		t.y = 15;
		t.skinName = HeadModify$Skin134;
		return t;
	};
	_proto._RadioButton9_i = function () {
		var t = new eui.RadioButton();
		t.height = 100;
		t.label = "";
		t.name = "radio_4";
		t.width = 100;
		t.x = 490;
		t.y = 15;
		t.skinName = HeadModify$Skin135;
		return t;
	};
	_proto._RadioButton10_i = function () {
		var t = new eui.RadioButton();
		t.height = 100;
		t.label = "";
		t.name = "radio_5";
		t.width = 100;
		t.x = 610;
		t.y = 15;
		t.skinName = HeadModify$Skin136;
		return t;
	};
	return HeadModify;
})(eui.Skin);generateEUI.paths['resource/eui_skins/other/InfoModify.exml'] = window.skins.InfoModify = (function (_super) {
	__extends(InfoModify, _super);
	var InfoModify$Skin137 = 	(function (_super) {
		__extends(InfoModify$Skin137, _super);
		function InfoModify$Skin137() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","general_bt_close_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = InfoModify$Skin137.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "general_bt_close_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return InfoModify$Skin137;
	})(eui.Skin);

	var InfoModify$Skin138 = 	(function (_super) {
		__extends(InfoModify$Skin138, _super);
		function InfoModify$Skin138() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","general_bt_confirm_1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = InfoModify$Skin138.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "general_bt_confirm_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return InfoModify$Skin138;
	})(eui.Skin);

	var InfoModify$Skin139 = 	(function (_super) {
		__extends(InfoModify$Skin139, _super);
		function InfoModify$Skin139() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","userinfo_bt_choose_1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = InfoModify$Skin139.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "userinfo_bt_choose_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return InfoModify$Skin139;
	})(eui.Skin);

	var InfoModify$Skin140 = 	(function (_super) {
		__extends(InfoModify$Skin140, _super);
		function InfoModify$Skin140() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","userinfo_bt_choose_1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = InfoModify$Skin140.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "userinfo_bt_choose_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return InfoModify$Skin140;
	})(eui.Skin);

	var InfoModify$Skin141 = 	(function (_super) {
		__extends(InfoModify$Skin141, _super);
		function InfoModify$Skin141() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","userinfo_bt_choose_1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = InfoModify$Skin141.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "userinfo_bt_choose_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return InfoModify$Skin141;
	})(eui.Skin);

	function InfoModify() {
		_super.call(this);
		this.skinParts = ["BG","Close","Modify","Title","Nick","Gender","Gender0","Gender2","Gender1","Rect","NickName","Radio"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.BG_i(),this.Close_i(),this.Modify_i(),this.Title_i(),this.Nick_i(),this.Gender_i(),this.Gender0_i(),this.Gender2_i(),this.Gender1_i(),this.Rect_i(),this.NickName_i(),this._Image1_i(),this._Image2_i(),this._Image3_i(),this.Radio_i(),this._RadioButton1_i(),this._RadioButton2_i()];
	}
	var _proto = InfoModify.prototype;

	_proto.BG_i = function () {
		var t = new eui.Image();
		this.BG = t;
		t.anchorOffsetX = 406;
		t.anchorOffsetY = 276.5;
		t.fillMode = "clip";
		t.height = 553;
		t.source = "general_back_frame_1_png";
		t.width = 812;
		t.x = 677;
		t.y = 375;
		return t;
	};
	_proto.Close_i = function () {
		var t = new eui.Button();
		this.Close = t;
		t.anchorOffsetX = 37;
		t.anchorOffsetY = 37;
		t.label = "";
		t.name = "bt_close";
		t.width = 74;
		t.x = 1049.61;
		t.y = 142.54;
		t.skinName = InfoModify$Skin137;
		return t;
	};
	_proto.Modify_i = function () {
		var t = new eui.Button();
		this.Modify = t;
		t.anchorOffsetX = 101;
		t.anchorOffsetY = 42;
		t.label = "";
		t.name = "bt_modify";
		t.x = 665.67;
		t.y = 545.9;
		t.skinName = InfoModify$Skin138;
		return t;
	};
	_proto.Title_i = function () {
		var t = new eui.Image();
		this.Title = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "clip";
		t.height = 38.19;
		t.source = "userinfo_text_modifyinfo_png";
		t.width = 142.73;
		t.x = 594.84;
		t.y = 117.97;
		return t;
	};
	_proto.Nick_i = function () {
		var t = new eui.Label();
		this.Nick = t;
		t.size = 24;
		t.text = "昵称:";
		t.textColor = 0x000000;
		t.x = 397.33;
		t.y = 240;
		return t;
	};
	_proto.Gender_i = function () {
		var t = new eui.Label();
		this.Gender = t;
		t.size = 24;
		t.text = "性别:";
		t.textColor = 0x000000;
		t.x = 397.33;
		t.y = 328.67;
		return t;
	};
	_proto.Gender0_i = function () {
		var t = new eui.Label();
		this.Gender0 = t;
		t.size = 24;
		t.text = "男";
		t.textColor = 0x000000;
		t.x = 526;
		t.y = 330.67;
		return t;
	};
	_proto.Gender2_i = function () {
		var t = new eui.Label();
		this.Gender2 = t;
		t.size = 24;
		t.text = "保密";
		t.textColor = 0x000000;
		t.x = 867;
		t.y = 330.67;
		return t;
	};
	_proto.Gender1_i = function () {
		var t = new eui.Label();
		this.Gender1 = t;
		t.size = 24;
		t.text = "女";
		t.textColor = 0x000000;
		t.x = 697.33;
		t.y = 330.67;
		return t;
	};
	_proto.Rect_i = function () {
		var t = new eui.Image();
		this.Rect = t;
		t.fillMode = "clip";
		t.height = 49;
		t.source = "userinfo_textfield_frame_png";
		t.width = 457;
		t.x = 472;
		t.y = 229;
		return t;
	};
	_proto.NickName_i = function () {
		var t = new eui.Label();
		this.NickName = t;
		t.name = "nick";
		t.size = 24;
		t.text = "JACK333";
		t.textColor = 0xffe4bb;
		t.x = 487.67;
		t.y = 239.67;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "clip";
		t.height = 52;
		t.source = "userinfo_bt_choose_0_png";
		t.width = 52;
		t.x = 475;
		t.y = 315;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "clip";
		t.height = 52;
		t.source = "userinfo_bt_choose_0_png";
		t.width = 52;
		t.x = 645;
		t.y = 315;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "clip";
		t.height = 52;
		t.smoothing = true;
		t.source = "userinfo_bt_choose_0_png";
		t.width = 52;
		t.x = 815;
		t.y = 315;
		return t;
	};
	_proto.Radio_i = function () {
		var t = new eui.RadioButton();
		this.Radio = t;
		t.label = "";
		t.name = "radio_man";
		t.x = 475;
		t.y = 315;
		t.skinName = InfoModify$Skin139;
		return t;
	};
	_proto._RadioButton1_i = function () {
		var t = new eui.RadioButton();
		t.label = "";
		t.name = "radio_woman";
		t.x = 645;
		t.y = 315;
		t.skinName = InfoModify$Skin140;
		return t;
	};
	_proto._RadioButton2_i = function () {
		var t = new eui.RadioButton();
		t.label = "";
		t.name = "radio_secret";
		t.x = 815;
		t.y = 315;
		t.skinName = InfoModify$Skin141;
		return t;
	};
	return InfoModify;
})(eui.Skin);generateEUI.paths['resource/eui_skins/other/ModifyInput.exml'] = window.skins.ModifyInput = (function (_super) {
	__extends(ModifyInput, _super);
	function ModifyInput() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.currentState = "normal";
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
					new eui.SetProperty("_Image1","visible",true),
					new eui.SetProperty("_Image1","anchorOffsetY",0),
					new eui.SetProperty("_Image1","percentHeight",100),
					new eui.SetProperty("_Rect1","fillColor",0xffffff),
					new eui.SetProperty("_Rect1","fillAlpha",0.0),
					new eui.SetProperty("textDisplay","backgroundColor",0xffffff),
					new eui.SetProperty("textDisplay","borderColor",0x000000),
					new eui.SetProperty("textDisplay","anchorOffsetY",0),
					new eui.SetProperty("textDisplay","percentHeight",100),
					new eui.SetProperty("textDisplay","size",28),
					new eui.SetProperty("textDisplay","anchorOffsetX",0),
					new eui.SetProperty("textDisplay","textColor",0xffffff),
					new eui.SetProperty("textDisplay","x",-1.33),
					new eui.SetProperty("textDisplay","y",0),
					new eui.SetProperty("textDisplay","verticalAlign","middle"),
					new eui.SetProperty("promptDisplay","verticalCenter",0),
					new eui.SetProperty("promptDisplay","left",10),
					new eui.SetProperty("promptDisplay","right",10),
					new eui.SetProperty("","height",49)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Rect1","alpha",0.0),
					new eui.SetProperty("textDisplay","verticalCenter","0"),
					new eui.SetProperty("textDisplay","left","10"),
					new eui.SetProperty("textDisplay","right","10"),
					new eui.SetProperty("textDisplay","textColor",0xff0000),
					new eui.SetProperty("promptDisplay","verticalCenter",0),
					new eui.SetProperty("promptDisplay","left",10),
					new eui.SetProperty("promptDisplay","right",10)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,""),
					new eui.SetProperty("_Image1","alpha",1.0),
					new eui.SetProperty("_Image1","anchorOffsetY",0),
					new eui.SetProperty("_Image1","percentHeight",100),
					new eui.SetProperty("_Rect1","alpha",0),
					new eui.SetProperty("textDisplay","anchorOffsetY",0),
					new eui.SetProperty("textDisplay","percentHeight",100),
					new eui.SetProperty("textDisplay","anchorOffsetX",0),
					new eui.SetProperty("textDisplay","size",28),
					new eui.SetProperty("textDisplay","textColor",0xffffff),
					new eui.SetProperty("textDisplay","y",0),
					new eui.SetProperty("textDisplay","x",0),
					new eui.SetProperty("promptDisplay","anchorOffsetY",0),
					new eui.SetProperty("promptDisplay","percentHeight",100),
					new eui.SetProperty("promptDisplay","anchorOffsetX",0),
					new eui.SetProperty("promptDisplay","backgroundColor",0xffffff),
					new eui.SetProperty("promptDisplay","size",32),
					new eui.SetProperty("promptDisplay","y",0),
					new eui.SetProperty("promptDisplay","percentWidth",100),
					new eui.SetProperty("promptDisplay","bold",true),
					new eui.SetProperty("promptDisplay","textAlign","left"),
					new eui.SetProperty("promptDisplay","verticalAlign","middle"),
					new eui.SetProperty("promptDisplay","x",0),
					new eui.SetProperty("","width",457),
					new eui.SetProperty("","height",49)
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,""),
					new eui.SetProperty("_Rect1","alpha",0),
					new eui.SetProperty("textDisplay","verticalCenter","0"),
					new eui.SetProperty("textDisplay","left","10"),
					new eui.SetProperty("textDisplay","right","10"),
					new eui.SetProperty("promptDisplay","verticalCenter",0),
					new eui.SetProperty("promptDisplay","left",10),
					new eui.SetProperty("promptDisplay","right",10)
				])
		];
	}
	var _proto = ModifyInput.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.fillMode = "clip";
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "userinfo_textfield_frame_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		this._Rect1 = t;
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.visible = false;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.size = 20;
		t.textColor = 0x000000;
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.percentWidth = 100;
		return t;
	};
	return ModifyInput;
})(eui.Skin);generateEUI.paths['resource/eui_skins/other/NoticeLayer.exml'] = window.skins.NoticeLayer = (function (_super) {
	__extends(NoticeLayer, _super);
	var NoticeLayer$Skin142 = 	(function (_super) {
		__extends(NoticeLayer$Skin142, _super);
		function NoticeLayer$Skin142() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","general_bt_close_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = NoticeLayer$Skin142.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "general_bt_close_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return NoticeLayer$Skin142;
	})(eui.Skin);

	function NoticeLayer() {
		_super.call(this);
		this.skinParts = ["bg","close","title","title1","Title","Normal","Special"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.Normal_i(),this.Special_i()];
	}
	var _proto = NoticeLayer.prototype;

	_proto.Normal_i = function () {
		var t = new eui.Panel();
		this.Normal = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 750;
		t.name = "panel_normal";
		t.touchEnabled = false;
		t.width = 1334;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.bg_i(),this.close_i(),this.Title_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.anchorOffsetX = 555;
		t.anchorOffsetY = 346;
		t.fillMode = "clip";
		t.height = 692;
		t.source = "general_notice_frame_png";
		t.touchEnabled = true;
		t.width = 1110;
		t.x = 667;
		t.y = 375;
		return t;
	};
	_proto.close_i = function () {
		var t = new eui.Button();
		this.close = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.enabled = true;
		t.height = 74;
		t.label = "";
		t.name = "bt_close";
		t.width = 74;
		t.x = 1138;
		t.y = 40;
		t.skinName = NoticeLayer$Skin142;
		return t;
	};
	_proto.Title_i = function () {
		var t = new eui.Panel();
		this.Title = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 46;
		t.name = "panel_title";
		t.width = 240;
		t.x = 552;
		t.y = 42;
		t.elementsContent = [this.title_i(),this.title1_i()];
		return t;
	};
	_proto.title_i = function () {
		var t = new eui.Image();
		this.title = t;
		t.anchorOffsetX = 72;
		t.anchorOffsetY = 20;
		t.fillMode = "clip";
		t.height = 40;
		t.name = "title_notice";
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "general_text_notice_png";
		t.width = 144;
		t.x = 120;
		t.y = 23;
		return t;
	};
	_proto.title1_i = function () {
		var t = new eui.Image();
		this.title1 = t;
		t.anchorOffsetX = 72;
		t.anchorOffsetY = 20;
		t.fillMode = "clip";
		t.height = 40;
		t.name = "title_agree";
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "general_title_agreement_png";
		t.width = 144;
		t.x = 120;
		t.y = 23;
		return t;
	};
	_proto.Special_i = function () {
		var t = new eui.Panel();
		this.Special = t;
		t.height = 20;
		t.visible = false;
		t.width = 20;
		t.x = 520;
		t.y = 494;
		return t;
	};
	return NoticeLayer;
})(eui.Skin);generateEUI.paths['resource/eui_skins/other/OptionSlider.exml'] = window.skins.OptionSlider = (function (_super) {
	__extends(OptionSlider, _super);
	function OptionSlider() {
		_super.call(this);
		this.skinParts = ["track","trackHighlight","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.trackHighlight_i(),this.thumb_i()];
	}
	var _proto = OptionSlider.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.anchorOffsetX = 0;
		t.fillMode = "clip";
		t.height = 21;
		t.scale9Grid = new egret.Rectangle(8,7,20,8);
		t.smoothing = true;
		t.source = "option_progress_2_png";
		t.touchEnabled = true;
		t.verticalCenter = 0;
		t.width = 300;
		t.x = 0;
		return t;
	};
	_proto.trackHighlight_i = function () {
		var t = new eui.Image();
		this.trackHighlight = t;
		t.anchorOffsetX = 0;
		t.fillMode = "clip";
		t.height = 21;
		t.scale9Grid = new egret.Rectangle(8,7,20,8);
		t.source = "option_progress_1_png";
		t.touchEnabled = true;
		t.verticalCenter = 0;
		t.width = 298;
		t.x = 1;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "scale";
		t.height = 68;
		t.source = "option_bt_move_png";
		t.touchEnabled = true;
		t.verticalCenter = 2.5;
		t.width = 40.5;
		t.x = 27;
		return t;
	};
	return OptionSlider;
})(eui.Skin);generateEUI.paths['resource/eui_skins/other/OptionLayer.exml'] = window.skins.OptionLayer = (function (_super) {
	__extends(OptionLayer, _super);
	var OptionLayer$Skin143 = 	(function (_super) {
		__extends(OptionLayer$Skin143, _super);
		function OptionLayer$Skin143() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","userinfo_bt_choose_1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = OptionLayer$Skin143.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "userinfo_bt_choose_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return OptionLayer$Skin143;
	})(eui.Skin);

	var OptionLayer$Skin144 = 	(function (_super) {
		__extends(OptionLayer$Skin144, _super);
		function OptionLayer$Skin144() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","userinfo_bt_choose_1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = OptionLayer$Skin144.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "userinfo_bt_choose_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return OptionLayer$Skin144;
	})(eui.Skin);

	var OptionLayer$Skin145 = 	(function (_super) {
		__extends(OptionLayer$Skin145, _super);
		function OptionLayer$Skin145() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","option_cbt_opener_1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = OptionLayer$Skin145.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "option_cbt_opener_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return OptionLayer$Skin145;
	})(eui.Skin);

	var OptionLayer$Skin146 = 	(function (_super) {
		__extends(OptionLayer$Skin146, _super);
		function OptionLayer$Skin146() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","option_cbt_opener_1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = OptionLayer$Skin146.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "option_cbt_opener_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return OptionLayer$Skin146;
	})(eui.Skin);

	var OptionLayer$Skin147 = 	(function (_super) {
		__extends(OptionLayer$Skin147, _super);
		function OptionLayer$Skin147() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","option_cbt_opener_1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = OptionLayer$Skin147.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "option_cbt_opener_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return OptionLayer$Skin147;
	})(eui.Skin);

	var OptionLayer$Skin148 = 	(function (_super) {
		__extends(OptionLayer$Skin148, _super);
		function OptionLayer$Skin148() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","userinfo_choose_1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = OptionLayer$Skin148.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "userinfo_choose_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return OptionLayer$Skin148;
	})(eui.Skin);

	var OptionLayer$Skin149 = 	(function (_super) {
		__extends(OptionLayer$Skin149, _super);
		function OptionLayer$Skin149() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","userinfo_choose_1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = OptionLayer$Skin149.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "userinfo_choose_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return OptionLayer$Skin149;
	})(eui.Skin);

	var OptionLayer$Skin150 = 	(function (_super) {
		__extends(OptionLayer$Skin150, _super);
		function OptionLayer$Skin150() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","userinfo_choose_1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = OptionLayer$Skin150.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "userinfo_choose_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return OptionLayer$Skin150;
	})(eui.Skin);

	var OptionLayer$Skin151 = 	(function (_super) {
		__extends(OptionLayer$Skin151, _super);
		function OptionLayer$Skin151() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","option_certificate_bt_1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = OptionLayer$Skin151.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "option_certificate_bt_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return OptionLayer$Skin151;
	})(eui.Skin);

	var OptionLayer$Skin152 = 	(function (_super) {
		__extends(OptionLayer$Skin152, _super);
		function OptionLayer$Skin152() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","option_bt_exit_1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = OptionLayer$Skin152.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "option_bt_exit_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return OptionLayer$Skin152;
	})(eui.Skin);

	var OptionLayer$Skin153 = 	(function (_super) {
		__extends(OptionLayer$Skin153, _super);
		function OptionLayer$Skin153() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","general_bt_return_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = OptionLayer$Skin153.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "general_bt_return_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return OptionLayer$Skin153;
	})(eui.Skin);

	function OptionLayer() {
		_super.call(this);
		this.skinParts = ["Bg","Bg1","Option","Switch","Switch1","Confirm","tips","change","Change","Back"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.Bg_i(),this.Bg1_i(),this.Option_i(),this.Switch_i(),this.Switch1_i(),this.Confirm_i(),this.Change_i(),this.Back_i()];
	}
	var _proto = OptionLayer.prototype;

	_proto.Bg_i = function () {
		var t = new eui.Image();
		this.Bg = t;
		t.fillMode = "clip";
		t.height = 750;
		t.name = "bg_normal";
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "general_back_frame_0_png";
		t.width = 1332;
		t.x = 1;
		t.y = 0;
		return t;
	};
	_proto.Bg1_i = function () {
		var t = new eui.Image();
		this.Bg1 = t;
		t.fillMode = "clip";
		t.height = 750;
		t.name = "bg_extern";
		t.source = "userinfo_back_frame_2_png";
		t.visible = false;
		t.width = 1334;
		t.x = -1;
		t.y = 96;
		return t;
	};
	_proto.Option_i = function () {
		var t = new eui.Panel();
		this.Option = t;
		t.height = 750;
		t.name = "panel_option";
		t.width = 1334;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._RadioButton1_i(),this._Label1_i(),this._Label2_i(),this._Label3_i(),this._Label4_i(),this._Label5_i(),this._Label6_i(),this._Label7_i(),this._Label8_i(),this._RadioButton2_i(),this._CheckBox1_i(),this._CheckBox2_i(),this._CheckBox3_i(),this._HSlider1_i(),this._HSlider2_i(),this._HSlider3_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "clip";
		t.height = 52;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "option_game_language_png";
		t.width = 116;
		t.x = 266;
		t.y = 280;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "clip";
		t.height = 52;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "option_text_music_png";
		t.width = 116;
		t.x = 266;
		t.y = 380;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "clip";
		t.height = 52;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "option_text_sound_png";
		t.width = 116;
		t.x = 266;
		t.y = 480;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "clip";
		t.height = 52;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "option_text_voice_png";
		t.width = 116;
		t.x = 266;
		t.y = 580;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "clip";
		t.height = 50.67;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "userinfo_bt_choose_0_png";
		t.width = 49.34;
		t.x = 404.67;
		t.y = 286;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "clip";
		t.height = 50.67;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "userinfo_bt_choose_0_png";
		t.width = 49.34;
		t.x = 670.66;
		t.y = 286;
		return t;
	};
	_proto._RadioButton1_i = function () {
		var t = new eui.RadioButton();
		t.anchorOffsetX = 26;
		t.anchorOffsetY = 26;
		t.enabled = true;
		t.label = "";
		t.name = "radio_language_0";
		t.scaleX = 1;
		t.scaleY = 1;
		t.selected = true;
		t.x = 430.67;
		t.y = 313;
		t.skinName = OptionLayer$Skin143;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 34;
		t.text = "方言";
		t.textColor = 0xf6d292;
		t.x = 469.67;
		t.y = 296;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 34;
		t.text = "低";
		t.textColor = 0xF6D292;
		t.x = 671;
		t.y = 389;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 34;
		t.text = "高";
		t.textColor = 0xF6D292;
		t.x = 1034.33;
		t.y = 389;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 34;
		t.text = "高";
		t.textColor = 0xF6D292;
		t.x = 1034.33;
		t.y = 472;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 34;
		t.text = "高";
		t.textColor = 0xF6D292;
		t.x = 1034.33;
		t.y = 589;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 34;
		t.text = "低";
		t.textColor = 0xF6D292;
		t.x = 671;
		t.y = 489;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 34;
		t.text = "低";
		t.textColor = 0xF6D292;
		t.x = 671;
		t.y = 589;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 34;
		t.text = "普通话";
		t.textColor = 0xF6D292;
		t.x = 738;
		t.y = 296;
		return t;
	};
	_proto._RadioButton2_i = function () {
		var t = new eui.RadioButton();
		t.label = "";
		t.name = "radio_language_1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.selected = false;
		t.x = 671;
		t.y = 286;
		t.skinName = OptionLayer$Skin144;
		return t;
	};
	_proto._CheckBox1_i = function () {
		var t = new eui.CheckBox();
		t.anchorOffsetX = 85;
		t.anchorOffsetY = 29;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.selected = true;
		t.x = 472;
		t.y = 410.19;
		t.skinName = OptionLayer$Skin145;
		return t;
	};
	_proto._CheckBox2_i = function () {
		var t = new eui.CheckBox();
		t.anchorOffsetX = 85;
		t.anchorOffsetY = 29;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.selected = true;
		t.x = 472;
		t.y = 509;
		t.skinName = OptionLayer$Skin146;
		return t;
	};
	_proto._CheckBox3_i = function () {
		var t = new eui.CheckBox();
		t.anchorOffsetX = 85;
		t.anchorOffsetY = 29;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.selected = true;
		t.x = 472;
		t.y = 610;
		t.skinName = OptionLayer$Skin147;
		return t;
	};
	_proto._HSlider1_i = function () {
		var t = new eui.HSlider();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.enabled = true;
		t.height = 72;
		t.maximum = 100;
		t.minimum = 0;
		t.name = "slider_music";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "skins.OptionSlider";
		t.touchEnabled = true;
		t.width = 163.67;
		t.x = 720;
		t.y = 367.19;
		return t;
	};
	_proto._HSlider2_i = function () {
		var t = new eui.HSlider();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.enabled = true;
		t.height = 72;
		t.maximum = 100;
		t.minimum = 0;
		t.name = "slider_sound";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "skins.OptionSlider";
		t.touchEnabled = true;
		t.width = 163.67;
		t.x = 720;
		t.y = 471.13;
		return t;
	};
	_proto._HSlider3_i = function () {
		var t = new eui.HSlider();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.enabled = true;
		t.height = 72;
		t.maximum = 100;
		t.minimum = 0;
		t.name = "slider_language";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "skins.OptionSlider";
		t.touchEnabled = true;
		t.width = 163.67;
		t.x = 720;
		t.y = 572.63;
		return t;
	};
	_proto.Switch_i = function () {
		var t = new eui.Panel();
		this.Switch = t;
		t.anchorOffsetY = 0;
		t.height = 244;
		t.name = "panel_switch0";
		t.width = 1334;
		t.x = 0;
		t.y = 3;
		t.elementsContent = [this._Image7_i(),this._Image8_i(),this._Image9_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 126;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "benefit_frame_up_png";
		t.width = 1334;
		t.x = 0;
		t.y = 119;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 183;
		t.anchorOffsetY = 73;
		t.height = 146;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "benefit_frame_top_png";
		t.width = 366;
		t.x = 670.66;
		t.y = 131;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "clip";
		t.height = 40;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "option_text_option_png";
		t.width = 142;
		t.x = 595;
		t.y = 111;
		return t;
	};
	_proto.Switch1_i = function () {
		var t = new eui.Panel();
		this.Switch1 = t;
		t.anchorOffsetY = 0;
		t.height = 150;
		t.name = "panel_switch1";
		t.visible = false;
		t.width = 1334;
		t.x = -2;
		t.y = 71;
		t.elementsContent = [this._CheckBox4_i(),this._CheckBox5_i(),this._CheckBox6_i(),this._Image10_i(),this._Image11_i(),this._Image12_i()];
		return t;
	};
	_proto._CheckBox4_i = function () {
		var t = new eui.CheckBox();
		t.anchorOffsetX = 252;
		t.anchorOffsetY = 54;
		t.label = "";
		t.name = "check_option";
		t.selected = true;
		t.touchEnabled = true;
		t.x = 517;
		t.y = 47;
		t.skinName = OptionLayer$Skin148;
		return t;
	};
	_proto._CheckBox5_i = function () {
		var t = new eui.CheckBox();
		t.anchorOffsetY = 54;
		t.label = "";
		t.name = "check_change";
		t.selected = false;
		t.touchEnabled = true;
		t.x = 817;
		t.y = 47;
		t.skinName = OptionLayer$Skin149;
		return t;
	};
	_proto._CheckBox6_i = function () {
		var t = new eui.CheckBox();
		t.anchorOffsetX = 126;
		t.anchorOffsetY = 54;
		t.label = "";
		t.name = "check_confirm";
		t.selected = false;
		t.touchEnabled = true;
		t.x = 667;
		t.y = 47;
		t.skinName = OptionLayer$Skin150;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "clip";
		t.height = 48;
		t.name = "check_option";
		t.source = "option_text_option_png";
		t.touchEnabled = false;
		t.width = 142;
		t.x = 320;
		t.y = 20;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "clip";
		t.height = 48;
		t.source = "option_title_binding_png";
		t.touchEnabled = false;
		t.width = 154;
		t.x = 596;
		t.y = 20;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "clip";
		t.height = 48;
		t.name = "check_change";
		t.source = "option_title_exchange_png";
		t.touchEnabled = false;
		t.width = 150;
		t.x = 872;
		t.y = 20;
		return t;
	};
	_proto.Confirm_i = function () {
		var t = new eui.Panel();
		this.Confirm = t;
		t.height = 750;
		t.name = "panel_confirm";
		t.visible = false;
		t.width = 1334;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image13_i(),this._Image14_i(),this._TextInput1_i(),this._TextInput2_i(),this._Label9_i(),this._Label10_i(),this._Button1_i()];
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "clip";
		t.height = 58;
		t.source = "option_certificate_text_4_png";
		t.width = 264;
		t.x = 248;
		t.y = 244;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "clip";
		t.height = 58;
		t.source = "option_certificate_text_6_png";
		t.width = 264;
		t.x = 248;
		t.y = 380;
		return t;
	};
	_proto._TextInput1_i = function () {
		var t = new eui.TextInput();
		t.height = 126;
		t.prompt = "请输入您的姓名";
		t.skinName = "skins.TextInputRegist";
		t.width = 536;
		t.x = 480;
		t.y = 209;
		return t;
	};
	_proto._TextInput2_i = function () {
		var t = new eui.TextInput();
		t.height = 126;
		t.prompt = "请输入您的证件号码";
		t.skinName = "skins.TextInputRegist";
		t.width = 536;
		t.x = 480;
		t.y = 345;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 353;
		t.anchorOffsetY = 12;
		t.size = 24;
		t.text = "*根据《网络游戏管理暂行办法》的要求，请您尽快完成实名认证。";
		t.textColor = 0xffe4bb;
		t.x = 667;
		t.y = 486;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 293;
		t.anchorOffsetY = 12;
		t.size = 24;
		t.text = "*身份信息只能提交一次，不能随意修改，请慎重填写！";
		t.textColor = 0xFFE4BB;
		t.x = 607;
		t.y = 519.13;
		return t;
	};
	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 225;
		t.anchorOffsetY = 77;
		t.label = "";
		t.x = 667;
		t.y = 645;
		t.skinName = OptionLayer$Skin151;
		return t;
	};
	_proto.Change_i = function () {
		var t = new eui.Panel();
		this.Change = t;
		t.height = 750;
		t.name = "panel_change";
		t.visible = false;
		t.width = 1334;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.tips_i(),this.change_i()];
		return t;
	};
	_proto.tips_i = function () {
		var t = new eui.Image();
		this.tips = t;
		t.anchorOffsetX = 370;
		t.anchorOffsetY = 150;
		t.fillMode = "clip";
		t.height = 300;
		t.source = "option_text_exchange_png";
		t.width = 740;
		t.x = 667;
		t.y = 439;
		return t;
	};
	_proto.change_i = function () {
		var t = new eui.Button();
		this.change = t;
		t.anchorOffsetX = 224.5;
		t.anchorOffsetY = 79;
		t.enabled = true;
		t.label = "";
		t.name = "bt_change";
		t.x = 667;
		t.y = 568;
		t.skinName = OptionLayer$Skin152;
		return t;
	};
	_proto.Back_i = function () {
		var t = new eui.Button();
		this.Back = t;
		t.anchorOffsetX = 50.5;
		t.anchorOffsetY = 50.5;
		t.label = "";
		t.name = "bt_return";
		t.x = 50.5;
		t.y = 50.5;
		t.skinName = OptionLayer$Skin153;
		return t;
	};
	return OptionLayer;
})(eui.Skin);generateEUI.paths['resource/eui_skins/other/PasswordModify.exml'] = window.skins.PasswordModify = (function (_super) {
	__extends(PasswordModify, _super);
	var PasswordModify$Skin154 = 	(function (_super) {
		__extends(PasswordModify$Skin154, _super);
		function PasswordModify$Skin154() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","general_bt_close_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = PasswordModify$Skin154.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "general_bt_close_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return PasswordModify$Skin154;
	})(eui.Skin);

	var PasswordModify$Skin155 = 	(function (_super) {
		__extends(PasswordModify$Skin155, _super);
		function PasswordModify$Skin155() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","general_bt_confirm_1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = PasswordModify$Skin155.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "general_bt_confirm_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return PasswordModify$Skin155;
	})(eui.Skin);

	function PasswordModify() {
		_super.call(this);
		this.skinParts = ["BG","Close","Modify","Title","OldPass","NewPass","ConfirmPass"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.BG_i(),this.Close_i(),this.Modify_i(),this.Title_i(),this.OldPass_i(),this.NewPass_i(),this.ConfirmPass_i(),this._TextInput1_i(),this._TextInput2_i(),this._TextInput3_i()];
	}
	var _proto = PasswordModify.prototype;

	_proto.BG_i = function () {
		var t = new eui.Image();
		this.BG = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "clip";
		t.height = 553.34;
		t.source = "general_back_frame_1_png";
		t.width = 792.73;
		t.x = 288;
		t.y = 94.09;
		return t;
	};
	_proto.Close_i = function () {
		var t = new eui.Button();
		this.Close = t;
		t.anchorOffsetX = 37;
		t.anchorOffsetY = 37;
		t.label = "";
		t.name = "bt_close";
		t.width = 74;
		t.x = 1049.61;
		t.y = 142.54;
		t.skinName = PasswordModify$Skin154;
		return t;
	};
	_proto.Modify_i = function () {
		var t = new eui.Button();
		this.Modify = t;
		t.anchorOffsetX = 103;
		t.anchorOffsetY = 42;
		t.label = "";
		t.name = "bt_modify";
		t.x = 667;
		t.y = 504.9;
		t.skinName = PasswordModify$Skin155;
		return t;
	};
	_proto.Title_i = function () {
		var t = new eui.Image();
		this.Title = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "clip";
		t.height = 38.19;
		t.source = "userinfo_text_modifypass_png";
		t.width = 142.73;
		t.x = 616.84;
		t.y = 113.97;
		return t;
	};
	_proto.OldPass_i = function () {
		var t = new eui.Label();
		this.OldPass = t;
		t.anchorOffsetX = 79;
		t.anchorOffsetY = 12;
		t.size = 24;
		t.text = "旧密码:";
		t.textColor = 0x000000;
		t.x = 500;
		t.y = 270;
		return t;
	};
	_proto.NewPass_i = function () {
		var t = new eui.Label();
		this.NewPass = t;
		t.anchorOffsetX = 79;
		t.anchorOffsetY = 12;
		t.size = 24;
		t.text = "新密码:";
		t.textColor = 0x000000;
		t.x = 500;
		t.y = 330;
		return t;
	};
	_proto.ConfirmPass_i = function () {
		var t = new eui.Label();
		this.ConfirmPass = t;
		t.anchorOffsetX = 103;
		t.anchorOffsetY = 12;
		t.size = 24;
		t.text = "确认密码:";
		t.textColor = 0x000000;
		t.x = 500;
		t.y = 390;
		return t;
	};
	_proto._TextInput1_i = function () {
		var t = new eui.TextInput();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 49;
		t.prompt = "请输入原密码";
		t.skinName = "skins.ModifyInput";
		t.width = 457;
		t.x = 515;
		t.y = 245.36;
		return t;
	};
	_proto._TextInput2_i = function () {
		var t = new eui.TextInput();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 49;
		t.prompt = "请输入新密码";
		t.skinName = "skins.ModifyInput";
		t.width = 457;
		t.x = 515;
		t.y = 306.88;
		return t;
	};
	_proto._TextInput3_i = function () {
		var t = new eui.TextInput();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 49;
		t.prompt = "请确认新密码";
		t.skinName = "skins.ModifyInput";
		t.width = 457;
		t.x = 515;
		t.y = 364.88;
		return t;
	};
	return PasswordModify;
})(eui.Skin);generateEUI.paths['resource/eui_skins/other/ServiceLayer.exml'] = window.skins.ServiceLayer = (function (_super) {
	__extends(ServiceLayer, _super);
	var ServiceLayer$Skin156 = 	(function (_super) {
		__extends(ServiceLayer$Skin156, _super);
		function ServiceLayer$Skin156() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","general_bt_return_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","general_bt_return_png")
					])
			];
		}
		var _proto = ServiceLayer$Skin156.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "general_bt_return_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ServiceLayer$Skin156;
	})(eui.Skin);

	var ServiceLayer$Skin157 = 	(function (_super) {
		__extends(ServiceLayer$Skin157, _super);
		function ServiceLayer$Skin157() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","userinfo_choose_1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ServiceLayer$Skin157.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "userinfo_choose_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ServiceLayer$Skin157;
	})(eui.Skin);

	var ServiceLayer$Skin158 = 	(function (_super) {
		__extends(ServiceLayer$Skin158, _super);
		function ServiceLayer$Skin158() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","userinfo_choose_1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ServiceLayer$Skin158.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "userinfo_choose_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ServiceLayer$Skin158;
	})(eui.Skin);

	var ServiceLayer$Skin159 = 	(function (_super) {
		__extends(ServiceLayer$Skin159, _super);
		function ServiceLayer$Skin159() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","userinfo_choose_1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ServiceLayer$Skin159.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "userinfo_choose_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ServiceLayer$Skin159;
	})(eui.Skin);

	var ServiceLayer$Skin160 = 	(function (_super) {
		__extends(ServiceLayer$Skin160, _super);
		function ServiceLayer$Skin160() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","userinfo_choose_1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ServiceLayer$Skin160.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "userinfo_choose_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ServiceLayer$Skin160;
	})(eui.Skin);

	function ServiceLayer() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this._Button1_i(),this._CheckBox1_i(),this._CheckBox2_i(),this._CheckBox3_i(),this._CheckBox4_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Panel1_i(),this._Panel2_i(),this._Panel3_i(),this._Panel4_i()];
	}
	var _proto = ServiceLayer.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 750;
		t.fillMode = "clip";
		t.height = 750;
		t.source = "userinfo_back_frame_2_png";
		t.width = 1334;
		t.x = 0;
		t.y = 838;
		return t;
	};
	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 50.5;
		t.anchorOffsetY = 50.5;
		t.label = "";
		t.name = "bt_return";
		t.x = 50.5;
		t.y = 50.5;
		t.skinName = ServiceLayer$Skin156;
		return t;
	};
	_proto._CheckBox1_i = function () {
		var t = new eui.CheckBox();
		t.label = "";
		t.name = "check_0";
		t.x = 155;
		t.y = 49;
		t.skinName = ServiceLayer$Skin157;
		return t;
	};
	_proto._CheckBox2_i = function () {
		var t = new eui.CheckBox();
		t.label = "";
		t.name = "check_1";
		t.x = 415;
		t.y = 49;
		t.skinName = ServiceLayer$Skin158;
		return t;
	};
	_proto._CheckBox3_i = function () {
		var t = new eui.CheckBox();
		t.enabled = true;
		t.label = "";
		t.name = "check_2";
		t.selected = true;
		t.x = 675;
		t.y = 49;
		t.skinName = ServiceLayer$Skin159;
		return t;
	};
	_proto._CheckBox4_i = function () {
		var t = new eui.CheckBox();
		t.label = "";
		t.name = "check_3";
		t.x = 935;
		t.y = 49;
		t.skinName = ServiceLayer$Skin160;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.fillMode = "clip";
		t.height = 39;
		t.name = "common_check";
		t.source = "option_text_question_png";
		t.touchEnabled = false;
		t.width = 157;
		t.x = 203.5;
		t.y = 80;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.fillMode = "clip";
		t.height = 39;
		t.name = "notice_check";
		t.source = "option_text_notice_png";
		t.touchEnabled = false;
		t.width = 157;
		t.x = 462.5;
		t.y = 80;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.fillMode = "clip";
		t.height = 39;
		t.source = "option_text_service_png";
		t.touchEnabled = false;
		t.width = 157;
		t.x = 722.5;
		t.y = 80;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.fillMode = "clip";
		t.height = 39;
		t.name = "about_check";
		t.source = "option_text_about_png";
		t.touchEnabled = false;
		t.width = 157;
		t.x = 982.5;
		t.y = 80;
		return t;
	};
	_proto._Panel1_i = function () {
		var t = new eui.Panel();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 592;
		t.name = "panel_2";
		t.width = 1329;
		t.x = 2;
		t.y = 154;
		t.elementsContent = [this._Image6_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "clip";
		t.height = 598;
		t.source = "general_image_service_png";
		t.width = 1324;
		t.x = 3;
		t.y = 3;
		return t;
	};
	_proto._Panel2_i = function () {
		var t = new eui.Panel();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 583.64;
		t.name = "panel_3";
		t.visible = false;
		t.width = 1324.02;
		t.x = 2.55;
		t.y = 160.97;
		t.elementsContent = [this._Image7_i(),this._Image8_i(),this._Label1_i(),this._Label2_i(),this._Label3_i(),this._Label4_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "clip";
		t.height = 304.85;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "general_general_logo_png";
		t.width = 538.17;
		t.x = 465.06;
		t.y = 52.89;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "clip";
		t.height = 29.21;
		t.source = "copyright_png";
		t.width = 521.15;
		t.x = 418.57;
		t.y = 520.61;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.size = 24;
		t.text = "游戏家园是由深圳市网狐科技有限公司运营的大型综合网络休闲娱乐游戏平台";
		t.textColor = 0xffe4bb;
		t.x = 254.09;
		t.y = 277.25;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.size = 24;
		t.text = "致力于为全球广大玩家提供轻松娱乐，休闲放松的网络休闲娱乐游戏平台";
		t.textColor = 0xFFE4BB;
		t.x = 280.75;
		t.y = 310.46;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.size = 24;
		t.text = "凭借十余年来积累沉淀的丰厚的运营经验及雄厚的技术优势，网狐科技将全力专注于";
		t.textColor = 0xFFE4BB;
		t.x = 206.45;
		t.y = 342.77;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.size = 24;
		t.text = "互联网游戏平台的经营，努力追求“让虚拟世界连接真实世界，让网络娱乐深入民心”的目标";
		t.textColor = 0xFFE4BB;
		t.x = 172.45;
		t.y = 376.65;
		return t;
	};
	_proto._Panel3_i = function () {
		var t = new eui.Panel();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 576.64;
		t.name = "panel_1";
		t.visible = false;
		t.width = 1321.02;
		t.x = 7.55;
		t.y = 164.97;
		return t;
	};
	_proto._Panel4_i = function () {
		var t = new eui.Panel();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 583.64;
		t.name = "panel_0";
		t.visible = false;
		t.width = 1314.11;
		t.x = 8.55;
		t.y = 167.97;
		return t;
	};
	return ServiceLayer;
})(eui.Skin);generateEUI.paths['resource/eui_skins/other/ShareLayer.exml'] = window.skins.ShareLayer = (function (_super) {
	__extends(ShareLayer, _super);
	var ShareLayer$Skin161 = 	(function (_super) {
		__extends(ShareLayer$Skin161, _super);
		function ShareLayer$Skin161() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ShareLayer$Skin161.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "bt_shareWechat_1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ShareLayer$Skin161;
	})(eui.Skin);

	var ShareLayer$Skin162 = 	(function (_super) {
		__extends(ShareLayer$Skin162, _super);
		function ShareLayer$Skin162() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ShareLayer$Skin162.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "bt_shareSession_1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ShareLayer$Skin162;
	})(eui.Skin);

	var ShareLayer$Skin163 = 	(function (_super) {
		__extends(ShareLayer$Skin163, _super);
		function ShareLayer$Skin163() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ShareLayer$Skin163.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "bt_shareClose_1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ShareLayer$Skin163;
	})(eui.Skin);

	function ShareLayer() {
		_super.call(this);
		this.skinParts = ["Bg","Title","Wechat","Session","Tips","Close"];
		
		this.height = 565;
		this.width = 998;
		this.elementsContent = [this.Bg_i(),this.Title_i(),this.Wechat_i(),this.Session_i(),this.Tips_i(),this.Close_i()];
	}
	var _proto = ShareLayer.prototype;

	_proto.Bg_i = function () {
		var t = new eui.Image();
		this.Bg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "clip";
		t.height = 565;
		t.source = "share_background_png";
		t.touchEnabled = true;
		t.width = 970;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.Title_i = function () {
		var t = new eui.Image();
		this.Title = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "clip";
		t.height = 60;
		t.source = "share_title_png";
		t.width = 270;
		t.x = 350;
		t.y = 15;
		return t;
	};
	_proto.Wechat_i = function () {
		var t = new eui.Button();
		this.Wechat = t;
		t.anchorOffsetX = 94;
		t.anchorOffsetY = 104;
		t.label = "";
		t.name = "bt_wechat";
		t.x = 295;
		t.y = 240;
		t.skinName = ShareLayer$Skin161;
		return t;
	};
	_proto.Session_i = function () {
		var t = new eui.Button();
		this.Session = t;
		t.anchorOffsetX = 94;
		t.anchorOffsetY = 104;
		t.label = "";
		t.name = "bt_circle";
		t.x = 685;
		t.y = 240;
		t.skinName = ShareLayer$Skin162;
		return t;
	};
	_proto.Tips_i = function () {
		var t = new eui.Image();
		this.Tips = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "clip";
		t.height = 90;
		t.source = "share_tip_content_png";
		t.width = 640;
		t.x = 165;
		t.y = 441;
		return t;
	};
	_proto.Close_i = function () {
		var t = new eui.Button();
		this.Close = t;
		t.anchorOffsetX = 49;
		t.anchorOffsetY = 50.5;
		t.label = "";
		t.name = "bt_close";
		t.x = 949;
		t.y = 45;
		t.skinName = ShareLayer$Skin163;
		return t;
	};
	return ShareLayer;
})(eui.Skin);generateEUI.paths['resource/eui_skins/other/UserInfoLayer.exml'] = window.skins.UserInfoLayer = (function (_super) {
	__extends(UserInfoLayer, _super);
	var UserInfoLayer$Skin164 = 	(function (_super) {
		__extends(UserInfoLayer$Skin164, _super);
		function UserInfoLayer$Skin164() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","general_bt_return_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = UserInfoLayer$Skin164.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "general_bt_return_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return UserInfoLayer$Skin164;
	})(eui.Skin);

	var UserInfoLayer$Skin165 = 	(function (_super) {
		__extends(UserInfoLayer$Skin165, _super);
		function UserInfoLayer$Skin165() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","userinfo_choose_1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = UserInfoLayer$Skin165.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "userinfo_choose_1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return UserInfoLayer$Skin165;
	})(eui.Skin);

	var UserInfoLayer$Skin166 = 	(function (_super) {
		__extends(UserInfoLayer$Skin166, _super);
		function UserInfoLayer$Skin166() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","userinfo_bt_modify_head_0_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = UserInfoLayer$Skin166.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "userinfo_bt_modify_head_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return UserInfoLayer$Skin166;
	})(eui.Skin);

	var UserInfoLayer$Skin167 = 	(function (_super) {
		__extends(UserInfoLayer$Skin167, _super);
		function UserInfoLayer$Skin167() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","userinfo_bt_modify_password_0_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = UserInfoLayer$Skin167.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "userinfo_bt_modify_password_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return UserInfoLayer$Skin167;
	})(eui.Skin);

	var UserInfoLayer$Skin168 = 	(function (_super) {
		__extends(UserInfoLayer$Skin168, _super);
		function UserInfoLayer$Skin168() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","userinfo_bt_modify_info_0_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = UserInfoLayer$Skin168.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "userinfo_bt_modify_info_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return UserInfoLayer$Skin168;
	})(eui.Skin);

	var UserInfoLayer$Skin169 = 	(function (_super) {
		__extends(UserInfoLayer$Skin169, _super);
		function UserInfoLayer$Skin169() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","userinfo_bt_vip_0_0_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","userinfo_bt_vip_0_0_png")
					])
			];
		}
		var _proto = UserInfoLayer$Skin169.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "userinfo_bt_vip_0_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return UserInfoLayer$Skin169;
	})(eui.Skin);

	var UserInfoLayer$Skin170 = 	(function (_super) {
		__extends(UserInfoLayer$Skin170, _super);
		function UserInfoLayer$Skin170() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","userinfo_bt_vip_1_0_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","userinfo_bt_vip_1_0_png")
					])
			];
		}
		var _proto = UserInfoLayer$Skin170.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "userinfo_bt_vip_1_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return UserInfoLayer$Skin170;
	})(eui.Skin);

	var UserInfoLayer$Skin171 = 	(function (_super) {
		__extends(UserInfoLayer$Skin171, _super);
		function UserInfoLayer$Skin171() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","userinfo_bt_recharge_0_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","userinfo_bt_recharge_0_png")
					])
			];
		}
		var _proto = UserInfoLayer$Skin171.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "userinfo_bt_recharge_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return UserInfoLayer$Skin171;
	})(eui.Skin);

	var UserInfoLayer$Skin172 = 	(function (_super) {
		__extends(UserInfoLayer$Skin172, _super);
		function UserInfoLayer$Skin172() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","userinfo_bt_bank_0_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","userinfo_bt_bank_0_png")
					])
			];
		}
		var _proto = UserInfoLayer$Skin172.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "userinfo_bt_bank_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return UserInfoLayer$Skin172;
	})(eui.Skin);

	function UserInfoLayer() {
		_super.call(this);
		this.skinParts = ["Bg","Return","CheckBox","Title","InfoBg","HeadBg","Modify_Head","Modify_Password","Modify_Info","VIP","Join","Purchase","Bank","ID","Nick","Account","Level","Sex","Order","diam","Medel","Take","Save","Vip"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.Bg_i(),this.Return_i(),this.CheckBox_i(),this.Title_i(),this.InfoBg_i(),this.HeadBg_i(),this.Modify_Head_i(),this.Modify_Password_i(),this.Modify_Info_i(),this.VIP_i(),this.Join_i(),this.Purchase_i(),this.Bank_i(),this.ID_i(),this.Nick_i(),this.Account_i(),this.Level_i(),this.Sex_i(),this.Order_i(),this.diam_i(),this.Medel_i(),this.Take_i(),this.Save_i(),this.Vip_i()];
	}
	var _proto = UserInfoLayer.prototype;

	_proto.Bg_i = function () {
		var t = new eui.Image();
		this.Bg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "clip";
		t.height = 689.69;
		t.source = "userinfo_back_frame_2_png";
		t.width = 1329.1;
		t.x = 0;
		t.y = 82.63;
		return t;
	};
	_proto.Return_i = function () {
		var t = new eui.Button();
		this.Return = t;
		t.anchorOffsetX = 50.5;
		t.anchorOffsetY = 50.5;
		t.label = "";
		t.name = "bt_return";
		t.x = 58;
		t.y = 47;
		t.skinName = UserInfoLayer$Skin164;
		return t;
	};
	_proto.CheckBox_i = function () {
		var t = new eui.CheckBox();
		this.CheckBox = t;
		t.anchorOffsetX = 126;
		t.enabled = true;
		t.label = "";
		t.touchEnabled = false;
		t.x = 667;
		t.y = 49;
		t.skinName = UserInfoLayer$Skin165;
		return t;
	};
	_proto.Title_i = function () {
		var t = new eui.Image();
		this.Title = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "clip";
		t.height = 47.28;
		t.source = "userinfo_text_info_png";
		t.width = 156.36;
		t.x = 593.51;
		t.y = 76.12;
		return t;
	};
	_proto.InfoBg_i = function () {
		var t = new eui.Image();
		this.InfoBg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "clip";
		t.height = 564;
		t.source = "userinfo_back_frame_0_png";
		t.width = 766;
		t.x = 361;
		t.y = 166;
		return t;
	};
	_proto.HeadBg_i = function () {
		var t = new eui.Image();
		this.HeadBg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "clip";
		t.height = 228;
		t.name = "headBg";
		t.source = "userinfo_head_frame_0_png";
		t.width = 322;
		t.x = 144;
		t.y = 161;
		return t;
	};
	_proto.Modify_Head_i = function () {
		var t = new eui.Button();
		this.Modify_Head = t;
		t.anchorOffsetX = 100;
		t.anchorOffsetY = 42;
		t.label = "";
		t.name = "modifyHead";
		t.x = 260;
		t.y = 452;
		t.skinName = UserInfoLayer$Skin166;
		return t;
	};
	_proto.Modify_Password_i = function () {
		var t = new eui.Button();
		this.Modify_Password = t;
		t.anchorOffsetX = 100;
		t.anchorOffsetY = 42;
		t.label = "";
		t.name = "modifyPassword";
		t.x = 258;
		t.y = 552;
		t.skinName = UserInfoLayer$Skin167;
		return t;
	};
	_proto.Modify_Info_i = function () {
		var t = new eui.Button();
		this.Modify_Info = t;
		t.anchorOffsetX = 100;
		t.anchorOffsetY = 42;
		t.label = "";
		t.name = "modifyInfo";
		t.x = 258;
		t.y = 652;
		t.skinName = UserInfoLayer$Skin168;
		return t;
	};
	_proto.VIP_i = function () {
		var t = new eui.Button();
		this.VIP = t;
		t.anchorOffsetX = 69;
		t.anchorOffsetY = 26.5;
		t.label = "";
		t.name = "right";
		t.x = 822;
		t.y = 420;
		t.skinName = UserInfoLayer$Skin169;
		return t;
	};
	_proto.Join_i = function () {
		var t = new eui.Button();
		this.Join = t;
		t.anchorOffsetX = 69;
		t.anchorOffsetY = 26.5;
		t.label = "";
		t.name = "join";
		t.x = 972;
		t.y = 420;
		t.skinName = UserInfoLayer$Skin170;
		return t;
	};
	_proto.Purchase_i = function () {
		var t = new eui.Button();
		this.Purchase = t;
		t.anchorOffsetX = 69;
		t.anchorOffsetY = 26.5;
		t.label = "";
		t.name = "purchase";
		t.x = 972;
		t.y = 476;
		t.skinName = UserInfoLayer$Skin171;
		return t;
	};
	_proto.Bank_i = function () {
		var t = new eui.Button();
		this.Bank = t;
		t.anchorOffsetX = 69;
		t.anchorOffsetY = 26.5;
		t.label = "";
		t.name = "bank";
		t.x = 978;
		t.y = 638;
		t.skinName = UserInfoLayer$Skin172;
		return t;
	};
	_proto.ID_i = function () {
		var t = new eui.Label();
		this.ID = t;
		t.name = "ID";
		t.size = 26;
		t.text = "Label";
		t.textColor = 0xffe4bb;
		t.x = 553;
		t.y = 240;
		return t;
	};
	_proto.Nick_i = function () {
		var t = new eui.Label();
		this.Nick = t;
		t.name = "nick";
		t.size = 26;
		t.text = "JACKZOE0504";
		t.textColor = 0xFFE4BB;
		t.x = 553;
		t.y = 298;
		return t;
	};
	_proto.Account_i = function () {
		var t = new eui.Label();
		this.Account = t;
		t.name = "account";
		t.size = 26;
		t.text = "JackZoe0504";
		t.textColor = 0xFFE4BB;
		t.x = 856;
		t.y = 243;
		return t;
	};
	_proto.Level_i = function () {
		var t = new eui.Label();
		this.Level = t;
		t.name = "level";
		t.size = 26;
		t.text = "务农";
		t.textColor = 0xFFE4BB;
		t.x = 557;
		t.y = 352;
		return t;
	};
	_proto.Sex_i = function () {
		var t = new eui.Label();
		this.Sex = t;
		t.name = "sex";
		t.size = 26;
		t.text = "保密";
		t.textColor = 0xFFE4BB;
		t.x = 857;
		t.y = 298;
		return t;
	};
	_proto.Order_i = function () {
		var t = new eui.Label();
		this.Order = t;
		t.name = "order";
		t.size = 26;
		t.text = "普通玩家";
		t.textColor = 0xFFE4BB;
		t.x = 553;
		t.y = 408;
		return t;
	};
	_proto.diam_i = function () {
		var t = new eui.Label();
		this.diam = t;
		t.name = "diam";
		t.size = 26;
		t.text = "0";
		t.textColor = 0x4bd2ea;
		t.x = 553;
		t.y = 463.45;
		return t;
	};
	_proto.Medel_i = function () {
		var t = new eui.Label();
		this.Medel = t;
		t.name = "medel";
		t.size = 26;
		t.text = "0";
		t.textColor = 0xff492e;
		t.x = 553;
		t.y = 518.12;
		return t;
	};
	_proto.Take_i = function () {
		var t = new eui.Label();
		this.Take = t;
		t.name = "take";
		t.size = 26;
		t.text = "0";
		t.textColor = 0xffc600;
		t.x = 552.33;
		t.y = 572.79;
		return t;
	};
	_proto.Save_i = function () {
		var t = new eui.Label();
		this.Save = t;
		t.name = "save";
		t.size = 26;
		t.text = "0";
		t.textColor = 0xFFC600;
		t.x = 553;
		t.y = 626.79;
		return t;
	};
	_proto.Vip_i = function () {
		var t = new eui.Image();
		this.Vip = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "clip";
		t.height = 26.67;
		t.source = "benefit_diamond_type_6_png";
		t.visible = false;
		t.width = 33.33;
		t.x = 556.48;
		t.y = 408.18;
		return t;
	};
	return UserInfoLayer;
})(eui.Skin);generateEUI.paths['resource/eui_skins/rank/RankCell.exml'] = window.skins.RankCell = (function (_super) {
	__extends(RankCell, _super);
	function RankCell() {
		_super.call(this);
		this.skinParts = ["bg","Image","Nick","ID","Medal"];
		
		this.height = 80;
		this.width = 834;
		this.elementsContent = [this.bg_i(),this.Image_i(),this.Nick_i(),this.ID_i(),this.Medal_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.datas.bg"],[0],this.bg,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.datas.image"],[0],this.Image,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.datas.nick"],[0],this.Nick,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.datas.id"],[0],this.ID,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.datas.medal"],[0],this.Medal,"text");
	}
	var _proto = RankCell.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.anchorOffsetX = 417;
		t.anchorOffsetY = 40;
		t.fillMode = "clip";
		t.height = 80;
		t.width = 782;
		t.x = 445;
		t.y = 40.67;
		return t;
	};
	_proto.Image_i = function () {
		var t = new eui.Image();
		this.Image = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "clip";
		t.height = 60;
		t.width = 116;
		t.x = 70;
		t.y = 8.66;
		return t;
	};
	_proto.Nick_i = function () {
		var t = new eui.Label();
		this.Nick = t;
		t.size = 26;
		t.x = 290;
		t.y = 13.33;
		return t;
	};
	_proto.ID_i = function () {
		var t = new eui.Label();
		this.ID = t;
		t.size = 22;
		t.textColor = 0x7bff00;
		t.x = 290;
		t.y = 42;
		return t;
	};
	_proto.Medal_i = function () {
		var t = new eui.Label();
		this.Medal = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.size = 24;
		t.x = 635;
		t.y = 29.33;
		return t;
	};
	return RankCell;
})(eui.Skin);generateEUI.paths['resource/eui_skins/rank/RankLayer.exml'] = window.skins.RankLayer = (function (_super) {
	__extends(RankLayer, _super);
	var RankLayer$Skin173 = 	(function (_super) {
		__extends(RankLayer$Skin173, _super);
		function RankLayer$Skin173() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","rank_total_cbt_1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = RankLayer$Skin173.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "rank_total_cbt_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return RankLayer$Skin173;
	})(eui.Skin);

	var RankLayer$Skin174 = 	(function (_super) {
		__extends(RankLayer$Skin174, _super);
		function RankLayer$Skin174() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","general_bt_return_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = RankLayer$Skin174.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "general_bt_return_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return RankLayer$Skin174;
	})(eui.Skin);

	function RankLayer() {
		_super.call(this);
		this.skinParts = ["TotalRank","RankBg","Text","PanelTotal","Rank","Tips","Return"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.TotalRank_i(),this.RankBg_i(),this.Text_i(),this.PanelTotal_i(),this.Rank_i(),this.Tips_i(),this.Return_i()];
	}
	var _proto = RankLayer.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "clip";
		t.height = 118;
		t.source = "benefit_frame_up_png";
		t.width = 1322;
		t.x = 0;
		t.y = 45;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 183;
		t.anchorOffsetY = 68;
		t.fillMode = "clip";
		t.height = 136;
		t.source = "benefit_frame_top_png";
		t.width = 366;
		t.x = 667;
		t.y = 79;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "clip";
		t.height = 54;
		t.source = "rank_title_png";
		t.width = 220;
		t.x = 556;
		t.y = 46;
		return t;
	};
	_proto.TotalRank_i = function () {
		var t = new eui.CheckBox();
		this.TotalRank = t;
		t.label = "";
		t.selected = true;
		t.x = 114;
		t.y = 154;
		t.skinName = RankLayer$Skin173;
		return t;
	};
	_proto.RankBg_i = function () {
		var t = new eui.Image();
		this.RankBg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "clip";
		t.height = 602;
		t.source = "rank_frame_png";
		t.width = 898;
		t.x = 246;
		t.y = 144;
		return t;
	};
	_proto.Text_i = function () {
		var t = new eui.Image();
		this.Text = t;
		t.anchorOffsetX = 301;
		t.anchorOffsetY = 16;
		t.fillMode = "clip";
		t.height = 32;
		t.source = "rank_text_png";
		t.width = 602;
		t.x = 667;
		t.y = 200;
		return t;
	};
	_proto.PanelTotal_i = function () {
		var t = new eui.Panel();
		this.PanelTotal = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 448;
		t.name = "RankTotal";
		t.width = 834;
		t.x = 282;
		t.y = 216;
		return t;
	};
	_proto.Rank_i = function () {
		var t = new eui.Panel();
		this.Rank = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 448;
		t.width = 834;
		t.x = 282;
		t.y = 216;
		return t;
	};
	_proto.Tips_i = function () {
		var t = new eui.Label();
		this.Tips = t;
		t.size = 24;
		t.text = "记录前10名,排名每天0点刷新";
		t.textColor = 0xc14d00;
		t.x = 801.52;
		t.y = 689.09;
		return t;
	};
	_proto.Return_i = function () {
		var t = new eui.Button();
		this.Return = t;
		t.anchorOffsetX = 50.5;
		t.anchorOffsetY = 50.5;
		t.label = "";
		t.name = "bt_close";
		t.x = 52;
		t.y = 50;
		t.skinName = RankLayer$Skin174;
		return t;
	};
	return RankLayer;
})(eui.Skin);generateEUI.paths['resource/eui_skins/roomlist/RoomListLayer.exml'] = window.skins.RoomListLayer = (function (_super) {
	__extends(RoomListLayer, _super);
	var RoomListLayer$Skin175 = 	(function (_super) {
		__extends(RoomListLayer$Skin175, _super);
		function RoomListLayer$Skin175() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","general_bt_return_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = RoomListLayer$Skin175.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "general_bt_return_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return RoomListLayer$Skin175;
	})(eui.Skin);

	var RoomListLayer$Skin176 = 	(function (_super) {
		__extends(RoomListLayer$Skin176, _super);
		function RoomListLayer$Skin176() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","room_bt_rule_0_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = RoomListLayer$Skin176.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "room_bt_rule_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return RoomListLayer$Skin176;
	})(eui.Skin);

	var RoomListLayer$Skin177 = 	(function (_super) {
		__extends(RoomListLayer$Skin177, _super);
		function RoomListLayer$Skin177() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","general_bt_list_recharge_0_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = RoomListLayer$Skin177.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "general_bt_list_recharge_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return RoomListLayer$Skin177;
	})(eui.Skin);

	var RoomListLayer$Skin178 = 	(function (_super) {
		__extends(RoomListLayer$Skin178, _super);
		function RoomListLayer$Skin178() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","general_bt_list_bank_0_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = RoomListLayer$Skin178.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "general_bt_list_bank_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return RoomListLayer$Skin178;
	})(eui.Skin);

	var RoomListLayer$Skin179 = 	(function (_super) {
		__extends(RoomListLayer$Skin179, _super);
		function RoomListLayer$Skin179() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","general_bt_quick_start_0_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = RoomListLayer$Skin179.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "general_bt_quick_start_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return RoomListLayer$Skin179;
	})(eui.Skin);

	function RoomListLayer() {
		_super.call(this);
		this.skinParts = ["BG","Return","Rule","Shop0","Shop1","QuickStart"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.BG_i(),this.Return_i(),this.Rule_i(),this.Shop0_i(),this.Shop1_i(),this.QuickStart_i(),this._Image1_i(),this._Label1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Scroller1_i(),this._Image7_i(),this._Image8_i()];
	}
	var _proto = RoomListLayer.prototype;

	_proto.BG_i = function () {
		var t = new eui.Image();
		this.BG = t;
		t.fillMode = "clip";
		t.height = 750;
		t.name = "record";
		t.source = "general_background3_png";
		t.width = 1334;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.Return_i = function () {
		var t = new eui.Button();
		this.Return = t;
		t.label = "";
		t.name = "bt_close";
		t.x = 0;
		t.y = 13;
		t.skinName = RoomListLayer$Skin175;
		return t;
	};
	_proto.Rule_i = function () {
		var t = new eui.Button();
		this.Rule = t;
		t.anchorOffsetX = 102;
		t.anchorOffsetY = 41.5;
		t.enabled = true;
		t.label = "";
		t.name = "gameRule";
		t.touchEnabled = true;
		t.x = 1198;
		t.y = 72.5;
		t.skinName = RoomListLayer$Skin176;
		return t;
	};
	_proto.Shop0_i = function () {
		var t = new eui.Button();
		this.Shop0 = t;
		t.anchorOffsetX = 81.5;
		t.anchorOffsetY = 61;
		t.label = "";
		t.name = "diamond";
		t.x = 1053;
		t.y = 640;
		t.skinName = RoomListLayer$Skin177;
		return t;
	};
	_proto.Shop1_i = function () {
		var t = new eui.Button();
		this.Shop1 = t;
		t.anchorOffsetX = 81.5;
		t.anchorOffsetY = 61;
		t.label = "";
		t.name = "shop";
		t.x = 1218.5;
		t.y = 640;
		t.skinName = RoomListLayer$Skin178;
		return t;
	};
	_proto.QuickStart_i = function () {
		var t = new eui.Button();
		this.QuickStart = t;
		t.anchorOffsetX = 183;
		t.anchorOffsetY = 60;
		t.label = "";
		t.name = "QuickStart";
		t.x = 667;
		t.y = 640;
		t.skinName = RoomListLayer$Skin179;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.fillMode = "clip";
		t.height = 174;
		t.source = "battle_frame_2_png";
		t.width = 398;
		t.x = 459;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 52;
		t.anchorOffsetY = 13;
		t.size = 26;
		t.text = "房间列表";
		t.textColor = 0xffeb8b;
		t.x = 667;
		t.y = 127;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "clip";
		t.height = 154;
		t.source = "info_frame_png";
		t.width = 266;
		t.x = 24;
		t.y = 582;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "clip";
		t.height = 32;
		t.source = "room_title_info_png";
		t.width = 116;
		t.x = 101;
		t.y = 592;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "clip";
		t.height = 25.34;
		t.source = "battle_text_ingot_png";
		t.width = 65.33;
		t.x = 42.5;
		t.y = 642.33;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "clip";
		t.height = 25.34;
		t.source = "battle_text_gold_png";
		t.width = 65.33;
		t.x = 42.5;
		t.y = 681;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.fillMode = "clip";
		t.height = 157;
		t.name = "ListIcon";
		t.source = "gamelogo_28_png";
		t.width = 447;
		t.x = 388.5;
		t.y = -13;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bounces = true;
		t.height = 408;
		t.name = "RoomScroller";
		t.scrollPolicyH = "on";
		t.scrollPolicyV = "off";
		t.width = 1044;
		t.x = 166;
		t.y = 127;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 404;
		t.name = "Group";
		t.width = 1044;
		t.x = 0;
		t.y = 10;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.fillMode = "clip";
		t.height = 81;
		t.source = "page_0_png";
		t.visible = false;
		t.width = 46;
		t.x = 94;
		t.y = 290;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.fillMode = "clip";
		t.height = 81;
		t.source = "page_1_png";
		t.visible = false;
		t.width = 46;
		t.x = 1249;
		t.y = 290;
		return t;
	};
	return RoomListLayer;
})(eui.Skin);generateEUI.paths['resource/eui_skins/shop/BankInput.exml'] = window.skins.BankInput = (function (_super) {
	__extends(BankInput, _super);
	function BankInput() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.currentState = "normal";
		this.height = 120;
		this.minHeight = 40;
		this.minWidth = 300;
		this.width = 660;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
					new eui.SetProperty("_Image1","visible",true),
					new eui.SetProperty("_Image1","anchorOffsetY",0),
					new eui.SetProperty("_Image1","percentHeight",100),
					new eui.SetProperty("_Image1","source","shop_textfield_frame_png"),
					new eui.SetProperty("_Rect1","fillColor",0xffffff),
					new eui.SetProperty("_Rect1","fillAlpha",0.0),
					new eui.SetProperty("textDisplay","backgroundColor",0xffffff),
					new eui.SetProperty("textDisplay","borderColor",0x000000),
					new eui.SetProperty("textDisplay","anchorOffsetY",0),
					new eui.SetProperty("textDisplay","percentHeight",100),
					new eui.SetProperty("textDisplay","size",28),
					new eui.SetProperty("textDisplay","anchorOffsetX",0),
					new eui.SetProperty("textDisplay","textColor",0xffffff),
					new eui.SetProperty("textDisplay","x",54),
					new eui.SetProperty("textDisplay","y",0.5),
					new eui.SetProperty("textDisplay","verticalAlign","middle"),
					new eui.SetProperty("textDisplay","promptColor",0xffffff),
					new eui.SetProperty("textDisplay","width",549),
					new eui.SetProperty("promptDisplay","verticalCenter",0),
					new eui.SetProperty("promptDisplay","left",10),
					new eui.SetProperty("promptDisplay","right",10),
					new eui.SetProperty("","height",121)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","shop_textfield_frame_png"),
					new eui.SetProperty("_Rect1","alpha",0.0),
					new eui.SetProperty("textDisplay","verticalCenter","-1.5"),
					new eui.SetProperty("textDisplay","left","40"),
					new eui.SetProperty("textDisplay","right","10"),
					new eui.SetProperty("textDisplay","textColor",0xff0000),
					new eui.SetProperty("textDisplay","anchorOffsetX",0),
					new eui.SetProperty("textDisplay","height",97),
					new eui.SetProperty("promptDisplay","verticalCenter",0),
					new eui.SetProperty("promptDisplay","left",10),
					new eui.SetProperty("promptDisplay","right",10)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,""),
					new eui.SetProperty("_Image1","alpha",1.0),
					new eui.SetProperty("_Image1","anchorOffsetY",0),
					new eui.SetProperty("_Image1","percentHeight",100),
					new eui.SetProperty("_Image1","scale9Grid",new egret.Rectangle(1,0,1,3)),
					new eui.SetProperty("_Image1","source","shop_textfield_frame_png"),
					new eui.SetProperty("_Rect1","alpha",0),
					new eui.SetProperty("textDisplay","anchorOffsetY",0),
					new eui.SetProperty("textDisplay","percentHeight",100),
					new eui.SetProperty("textDisplay","anchorOffsetX",0),
					new eui.SetProperty("textDisplay","size",28),
					new eui.SetProperty("textDisplay","textColor",0xffffff),
					new eui.SetProperty("textDisplay","y",0),
					new eui.SetProperty("textDisplay","x",61),
					new eui.SetProperty("textDisplay","width",599),
					new eui.SetProperty("promptDisplay","anchorOffsetY",0),
					new eui.SetProperty("promptDisplay","percentHeight",100),
					new eui.SetProperty("promptDisplay","anchorOffsetX",0),
					new eui.SetProperty("promptDisplay","backgroundColor",0xffffff),
					new eui.SetProperty("promptDisplay","size",32),
					new eui.SetProperty("promptDisplay","y",0),
					new eui.SetProperty("promptDisplay","width",610),
					new eui.SetProperty("promptDisplay","bold",true),
					new eui.SetProperty("promptDisplay","textAlign","left"),
					new eui.SetProperty("promptDisplay","verticalAlign","middle"),
					new eui.SetProperty("promptDisplay","x",50),
					new eui.SetProperty("","width",660),
					new eui.SetProperty("","height",121)
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,""),
					new eui.SetProperty("_Image1","source","shop_textfield_frame_png"),
					new eui.SetProperty("_Rect1","alpha",0),
					new eui.SetProperty("textDisplay","verticalCenter","-2.5"),
					new eui.SetProperty("textDisplay","left","10"),
					new eui.SetProperty("textDisplay","right","10"),
					new eui.SetProperty("textDisplay","height",103),
					new eui.SetProperty("promptDisplay","verticalCenter",0),
					new eui.SetProperty("promptDisplay","left",10),
					new eui.SetProperty("promptDisplay","right",10)
				])
		];
	}
	var _proto = BankInput.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.fillMode = "clip";
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "battle_textfield_frame_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		this._Rect1 = t;
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.visible = false;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.size = 20;
		t.textColor = 0x000000;
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.percentWidth = 100;
		return t;
	};
	return BankInput;
})(eui.Skin);generateEUI.paths['resource/eui_skins/shop/Diamond.exml'] = window.skins.Diamond = (function (_super) {
	__extends(Diamond, _super);
	var Diamond$Skin180 = 	(function (_super) {
		__extends(Diamond$Skin180, _super);
		function Diamond$Skin180() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","bt_buy_buy_0_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Diamond$Skin180.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "bt_buy_buy_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return Diamond$Skin180;
	})(eui.Skin);

	function Diamond() {
		_super.call(this);
		this.skinParts = ["Icon"];
		
		this.height = 215;
		this.width = 260;
		this.elementsContent = [this._Image1_i(),this._Button1_i(),this.Icon_i(),this._Image2_i(),this._Image3_i()];
	}
	var _proto = Diamond.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.fillMode = "clip";
		t.height = 215;
		t.source = "bt_frame_buy_png";
		t.width = 260;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 105;
		t.anchorOffsetY = 29;
		t.label = "";
		t.name = "purchase";
		t.x = 130;
		t.y = 168;
		t.skinName = Diamond$Skin180;
		return t;
	};
	_proto.Icon_i = function () {
		var t = new eui.Image();
		this.Icon = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "clip";
		t.height = 120;
		t.name = "Icon";
		t.source = "shop_icon_ingot_1_png";
		t.width = 143;
		t.x = 104;
		t.y = 12;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.fillMode = "clip";
		t.height = 80;
		t.name = "corner";
		t.source = "icon_recharge_1_png";
		t.width = 80;
		t.x = 180;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.fillMode = "clip";
		t.height = 42;
		t.source = "icon_rmb_png";
		t.touchEnabled = false;
		t.width = 42;
		t.x = 60;
		t.y = 144;
		return t;
	};
	return Diamond;
})(eui.Skin);generateEUI.paths['resource/eui_skins/shop/Gold.exml'] = window.skins.Gold = (function (_super) {
	__extends(Gold, _super);
	var Gold$Skin181 = 	(function (_super) {
		__extends(Gold$Skin181, _super);
		function Gold$Skin181() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","bt_buy_gold_0_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Gold$Skin181.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "bt_buy_gold_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return Gold$Skin181;
	})(eui.Skin);

	function Gold() {
		_super.call(this);
		this.skinParts = ["Icon"];
		
		this.height = 215;
		this.width = 260;
		this.elementsContent = [this._Image1_i(),this.Icon_i(),this._Button1_i(),this._Image2_i()];
	}
	var _proto = Gold.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.fillMode = "clip";
		t.height = 215;
		t.source = "shop_frame_exchange_png";
		t.width = 260;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.Icon_i = function () {
		var t = new eui.Image();
		this.Icon = t;
		t.fillMode = "clip";
		t.height = 126;
		t.name = "icon";
		t.source = "shop_icon_gold_1_png";
		t.width = 207;
		t.x = 26.5;
		t.y = 9;
		return t;
	};
	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 105;
		t.anchorOffsetY = 29;
		t.label = "";
		t.name = "purchase";
		t.x = 131.5;
		t.y = 161;
		t.skinName = Gold$Skin181;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.fillMode = "clip";
		t.height = 42;
		t.source = "icon_ingot_png";
		t.touchEnabled = false;
		t.width = 42;
		t.x = 179;
		t.y = 134;
		return t;
	};
	return Gold;
})(eui.Skin);generateEUI.paths['resource/eui_skins/shop/RealItem.exml'] = window.skins.RealItem = (function (_super) {
	__extends(RealItem, _super);
	var RealItem$Skin182 = 	(function (_super) {
		__extends(RealItem$Skin182, _super);
		function RealItem$Skin182() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","bt_buy_item_0_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = RealItem$Skin182.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "bt_buy_item_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return RealItem$Skin182;
	})(eui.Skin);

	function RealItem() {
		_super.call(this);
		this.skinParts = ["BG","Icon","Name","Exchange","Medal"];
		
		this.height = 227;
		this.width = 280;
		this.elementsContent = [this.BG_i(),this.Icon_i(),this.Name_i(),this.Exchange_i(),this.Medal_i()];
	}
	var _proto = RealItem.prototype;

	_proto.BG_i = function () {
		var t = new eui.Image();
		this.BG = t;
		t.fillMode = "clip";
		t.height = 200;
		t.source = "bt_frame_item_png";
		t.width = 280;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.Icon_i = function () {
		var t = new eui.Image();
		this.Icon = t;
		t.anchorOffsetX = 76;
		t.anchorOffsetY = 76;
		t.fillMode = "clip";
		t.height = 152;
		t.name = "icon";
		t.source = "item_default_png";
		t.width = 152;
		t.x = 140;
		t.y = 100;
		return t;
	};
	_proto.Name_i = function () {
		var t = new eui.Label();
		this.Name = t;
		t.anchorOffsetX = 100;
		t.anchorOffsetY = 11;
		t.name = "name";
		t.size = 22;
		t.text = "IPHONE7S";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.width = 200;
		t.x = 140;
		t.y = 28;
		return t;
	};
	_proto.Exchange_i = function () {
		var t = new eui.Button();
		this.Exchange = t;
		t.anchorOffsetX = 105;
		t.anchorOffsetY = 29;
		t.label = "";
		t.name = "exchange";
		t.x = 140;
		t.y = 193;
		t.skinName = RealItem$Skin182;
		return t;
	};
	_proto.Medal_i = function () {
		var t = new eui.Image();
		this.Medal = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "clip";
		t.height = 44;
		t.source = "icon_medal_png";
		t.touchEnabled = false;
		t.width = 49;
		t.x = 191;
		t.y = 168;
		return t;
	};
	return RealItem;
})(eui.Skin);generateEUI.paths['resource/eui_skins/shop/ShopLayer.exml'] = window.skins.ShopLayer = (function (_super) {
	__extends(ShopLayer, _super);
	var ShopLayer$Skin183 = 	(function (_super) {
		__extends(ShopLayer$Skin183, _super);
		function ShopLayer$Skin183() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","general_bt_return_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ShopLayer$Skin183.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "general_bt_return_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ShopLayer$Skin183;
	})(eui.Skin);

	var ShopLayer$Skin184 = 	(function (_super) {
		__extends(ShopLayer$Skin184, _super);
		function ShopLayer$Skin184() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ShopLayer$Skin184.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "bt_flushscore_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ShopLayer$Skin184;
	})(eui.Skin);

	var ShopLayer$Skin185 = 	(function (_super) {
		__extends(ShopLayer$Skin185, _super);
		function ShopLayer$Skin185() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ShopLayer$Skin185.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "bt_flushscore_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ShopLayer$Skin185;
	})(eui.Skin);

	var ShopLayer$Skin186 = 	(function (_super) {
		__extends(ShopLayer$Skin186, _super);
		function ShopLayer$Skin186() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","cbt_recharge_1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ShopLayer$Skin186.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "cbt_recharge_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ShopLayer$Skin186;
	})(eui.Skin);

	var ShopLayer$Skin187 = 	(function (_super) {
		__extends(ShopLayer$Skin187, _super);
		function ShopLayer$Skin187() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","cbt_excharge_1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ShopLayer$Skin187.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "cbt_excharge_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ShopLayer$Skin187;
	})(eui.Skin);

	var ShopLayer$Skin188 = 	(function (_super) {
		__extends(ShopLayer$Skin188, _super);
		function ShopLayer$Skin188() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","cbt_bank_1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ShopLayer$Skin188.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "cbt_bank_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ShopLayer$Skin188;
	})(eui.Skin);

	var ShopLayer$Skin189 = 	(function (_super) {
		__extends(ShopLayer$Skin189, _super);
		function ShopLayer$Skin189() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","cbt_item_1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ShopLayer$Skin189.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "cbt_item_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ShopLayer$Skin189;
	})(eui.Skin);

	var ShopLayer$Skin190 = 	(function (_super) {
		__extends(ShopLayer$Skin190, _super);
		function ShopLayer$Skin190() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","cbt_recharge_card_1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ShopLayer$Skin190.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "cbt_recharge_card_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ShopLayer$Skin190;
	})(eui.Skin);

	var ShopLayer$Skin191 = 	(function (_super) {
		__extends(ShopLayer$Skin191, _super);
		function ShopLayer$Skin191() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","bt_save_0_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ShopLayer$Skin191.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "bt_save_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ShopLayer$Skin191;
	})(eui.Skin);

	var ShopLayer$Skin192 = 	(function (_super) {
		__extends(ShopLayer$Skin192, _super);
		function ShopLayer$Skin192() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","bt_take_0_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ShopLayer$Skin192.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "bt_take_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ShopLayer$Skin192;
	})(eui.Skin);

	var ShopLayer$Skin193 = 	(function (_super) {
		__extends(ShopLayer$Skin193, _super);
		function ShopLayer$Skin193() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","choose_buy_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ShopLayer$Skin193.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "choose_wechat_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ShopLayer$Skin193;
	})(eui.Skin);

	var ShopLayer$Skin194 = 	(function (_super) {
		__extends(ShopLayer$Skin194, _super);
		function ShopLayer$Skin194() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","choose_buy_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ShopLayer$Skin194.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "choose_alipay_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ShopLayer$Skin194;
	})(eui.Skin);

	function ShopLayer() {
		_super.call(this);
		this.skinParts = ["Bg","Top","Return","Refresh","Ingot","Gold","Label_Ingot","Label_Gold","Info","Refresh0","Gold0","Medal","IngotCheck","GoldCheck","BankCheck","ExchangeCheck","RoomCardCheck","Tips","TipsContent","PurchaseIngot","PurchaseGold","Save","Take","Bank","Exchange","init","RoomCard","Wechat","ZFB","PurChaseType"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.Bg_i(),this.Top_i(),this.Return_i(),this.Info_i(),this.Medal_i(),this.IngotCheck_i(),this.GoldCheck_i(),this.BankCheck_i(),this.ExchangeCheck_i(),this.RoomCardCheck_i(),this.Tips_i(),this.TipsContent_i(),this.PurchaseIngot_i(),this.PurchaseGold_i(),this.Bank_i(),this.Exchange_i(),this.RoomCard_i(),this.PurChaseType_i()];
	}
	var _proto = ShopLayer.prototype;

	_proto.Bg_i = function () {
		var t = new eui.Image();
		this.Bg = t;
		t.anchorOffsetX = 619;
		t.anchorOffsetY = 322;
		t.height = 644;
		t.source = "shop_background_png";
		t.width = 1238;
		t.x = 667;
		t.y = 431;
		return t;
	};
	_proto.Top_i = function () {
		var t = new eui.Image();
		this.Top = t;
		t.fillMode = "clip";
		t.height = 161;
		t.source = "shop_top_png";
		t.width = 1334;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.Return_i = function () {
		var t = new eui.Button();
		this.Return = t;
		t.label = "";
		t.name = "bt_close";
		t.x = 0;
		t.y = 0;
		t.skinName = ShopLayer$Skin183;
		return t;
	};
	_proto.Info_i = function () {
		var t = new eui.Panel();
		this.Info = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 94;
		t.name = "panel_info";
		t.width = 946;
		t.x = 384;
		t.y = 0;
		t.elementsContent = [this.Refresh_i(),this.Ingot_i(),this.Gold_i(),this.Label_Ingot_i(),this.Label_Gold_i()];
		return t;
	};
	_proto.Refresh_i = function () {
		var t = new eui.Button();
		this.Refresh = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 40;
		t.label = "";
		t.name = "info_refresh";
		t.x = 190;
		t.y = 47;
		t.skinName = ShopLayer$Skin184;
		return t;
	};
	_proto.Ingot_i = function () {
		var t = new eui.Image();
		this.Ingot = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "clip";
		t.height = 78;
		t.source = "ingot_frame_png";
		t.width = 340;
		t.x = 234;
		t.y = 8;
		return t;
	};
	_proto.Gold_i = function () {
		var t = new eui.Image();
		this.Gold = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "clip";
		t.height = 78;
		t.source = "gold_frame_png";
		t.width = 340;
		t.x = 588;
		t.y = 10;
		return t;
	};
	_proto.Label_Ingot_i = function () {
		var t = new eui.Label();
		this.Label_Ingot = t;
		t.name = "label_ingot";
		t.size = 30;
		t.text = "1000000000";
		t.textColor = 0x74eaff;
		t.x = 326;
		t.y = 30;
		return t;
	};
	_proto.Label_Gold_i = function () {
		var t = new eui.Label();
		this.Label_Gold = t;
		t.name = "label_gold";
		t.size = 30;
		t.text = "1000000000";
		t.textColor = 0xf2c203;
		t.x = 684;
		t.y = 32;
		return t;
	};
	_proto.Medal_i = function () {
		var t = new eui.Panel();
		this.Medal = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 94;
		t.name = "panel_medal";
		t.visible = false;
		t.width = 946;
		t.x = 385;
		t.y = 0;
		t.elementsContent = [this.Refresh0_i(),this.Gold0_i(),this._Label1_i()];
		return t;
	};
	_proto.Refresh0_i = function () {
		var t = new eui.Button();
		this.Refresh0 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 40;
		t.label = "";
		t.name = "medal_refresh";
		t.x = 523;
		t.y = 53;
		t.skinName = ShopLayer$Skin185;
		return t;
	};
	_proto.Gold0_i = function () {
		var t = new eui.Image();
		this.Gold0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "clip";
		t.height = 78;
		t.source = "metal_frame_png";
		t.width = 340;
		t.x = 559;
		t.y = 10;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.name = "label_madal";
		t.text = "88888";
		t.textColor = 0xf2c203;
		t.x = 637.85;
		t.y = 34.61;
		return t;
	};
	_proto.IngotCheck_i = function () {
		var t = new eui.CheckBox();
		this.IngotCheck = t;
		t.label = "";
		t.name = "check_0";
		t.selected = true;
		t.x = 80;
		t.y = 190;
		t.skinName = ShopLayer$Skin186;
		return t;
	};
	_proto.GoldCheck_i = function () {
		var t = new eui.CheckBox();
		this.GoldCheck = t;
		t.label = "";
		t.name = "check_1";
		t.x = 80;
		t.y = 295;
		t.skinName = ShopLayer$Skin187;
		return t;
	};
	_proto.BankCheck_i = function () {
		var t = new eui.CheckBox();
		this.BankCheck = t;
		t.label = "";
		t.name = "check_2";
		t.x = 80;
		t.y = 400;
		t.skinName = ShopLayer$Skin188;
		return t;
	};
	_proto.ExchangeCheck_i = function () {
		var t = new eui.CheckBox();
		this.ExchangeCheck = t;
		t.label = "";
		t.name = "check_3";
		t.x = 80;
		t.y = 505;
		t.skinName = ShopLayer$Skin189;
		return t;
	};
	_proto.RoomCardCheck_i = function () {
		var t = new eui.CheckBox();
		this.RoomCardCheck = t;
		t.label = "";
		t.name = "check_4";
		t.x = 80;
		t.y = 610;
		t.skinName = ShopLayer$Skin190;
		return t;
	};
	_proto.Tips_i = function () {
		var t = new eui.Label();
		this.Tips = t;
		t.name = "tips";
		t.size = 24;
		t.text = "温馨提示：";
		t.textColor = 0xc14d00;
		t.x = 820;
		t.y = 160;
		return t;
	};
	_proto.TipsContent_i = function () {
		var t = new eui.Label();
		this.TipsContent = t;
		t.name = "content";
		t.size = 24;
		t.text = "钻石用于约战开房记录战绩";
		t.textColor = 0x9e0b05;
		t.x = 942;
		t.y = 160;
		return t;
	};
	_proto.PurchaseIngot_i = function () {
		var t = new eui.Panel();
		this.PurchaseIngot = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 494;
		t.name = "PurchaseIngot";
		t.width = 878;
		t.x = 362;
		t.y = 204;
		t.elementsContent = [this._Label2_i(),this._Scroller1_i()];
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.size = 34;
		t.text = "商品为空,敬请期待!";
		t.visible = false;
		t.x = 276;
		t.y = 196;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bounces = true;
		t.height = 474;
		t.name = "scroller";
		t.scrollPolicyH = "off";
		t.scrollPolicyV = "on";
		t.width = 858;
		t.x = 8;
		t.y = 8;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 470;
		t.name = "Group";
		t.width = 854;
		return t;
	};
	_proto.PurchaseGold_i = function () {
		var t = new eui.Panel();
		this.PurchaseGold = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 494;
		t.name = "PurchaseGold";
		t.visible = false;
		t.width = 878;
		t.x = 362;
		t.y = 202;
		t.elementsContent = [this._Scroller2_i()];
		return t;
	};
	_proto._Scroller2_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bounces = true;
		t.height = 482;
		t.name = "scroller";
		t.scrollPolicyH = "off";
		t.scrollPolicyV = "on";
		t.width = 870;
		t.x = 4;
		t.y = 8;
		t.viewport = this._Group2_i();
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 484;
		t.name = "Group";
		t.width = 870;
		return t;
	};
	_proto.Bank_i = function () {
		var t = new eui.Panel();
		this.Bank = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 494;
		t.name = "Bank";
		t.visible = false;
		t.width = 878;
		t.x = 362;
		t.y = 202;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._TextInput1_i(),this.Save_i(),this.Take_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "clip";
		t.height = 54;
		t.source = "shop_text_gold_png";
		t.width = 136;
		t.x = 153;
		t.y = 33;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "clip";
		t.height = 54;
		t.source = "shop_text_insure_png";
		t.width = 136;
		t.x = 153;
		t.y = 114;
		return t;
	};
	_proto._TextInput1_i = function () {
		var t = new eui.TextInput();
		t.height = 121;
		t.name = "textInput";
		t.prompt = "请输入操作金额";
		t.skinName = "skins.BankInput";
		t.width = 660;
		t.x = 128;
		t.y = 173;
		return t;
	};
	_proto.Save_i = function () {
		var t = new eui.Button();
		this.Save = t;
		t.anchorOffsetX = 163;
		t.anchorOffsetY = 74;
		t.label = "";
		t.name = "save";
		t.x = 293.5;
		t.y = 379;
		t.skinName = ShopLayer$Skin191;
		return t;
	};
	_proto.Take_i = function () {
		var t = new eui.Button();
		this.Take = t;
		t.anchorOffsetX = 163;
		t.anchorOffsetY = 74;
		t.label = "";
		t.name = "take";
		t.x = 629;
		t.y = 379;
		t.skinName = ShopLayer$Skin192;
		return t;
	};
	_proto.Exchange_i = function () {
		var t = new eui.Panel();
		this.Exchange = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 494;
		t.name = "Exchange";
		t.visible = false;
		t.width = 878;
		t.x = 362;
		t.y = 202;
		t.elementsContent = [this._Label3_i(),this._Scroller3_i()];
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.name = "tips";
		t.size = 34;
		t.text = "道具为空,敬请期待!";
		t.visible = false;
		t.x = 294;
		t.y = 206;
		return t;
	};
	_proto._Scroller3_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 490;
		t.name = "scroller";
		t.width = 870;
		t.x = 6;
		t.y = 8;
		t.viewport = this._Group3_i();
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 490;
		t.name = "Group";
		t.width = 870;
		return t;
	};
	_proto.RoomCard_i = function () {
		var t = new eui.Panel();
		this.RoomCard = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 494;
		t.name = "RoomCard";
		t.visible = false;
		t.width = 878;
		t.x = 362;
		t.y = 202;
		t.elementsContent = [this.init_i()];
		return t;
	};
	_proto.init_i = function () {
		var t = new eui.Label();
		this.init = t;
		t.size = 34;
		t.text = "道具为空,敬请期待！";
		t.x = 276;
		t.y = 204;
		return t;
	};
	_proto.PurChaseType_i = function () {
		var t = new eui.Panel();
		this.PurChaseType = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 78;
		t.name = "panel_purchaseType";
		t.width = 468;
		t.x = 349;
		t.y = 122;
		t.elementsContent = [this._Image3_i(),this._Image4_i(),this.Wechat_i(),this.ZFB_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "clip";
		t.height = 78;
		t.source = "choose_wechat_png";
		t.width = 228;
		t.x = 240;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillMode = "clip";
		t.height = 78;
		t.source = "choose_alipay_png";
		t.width = 228;
		t.x = 6;
		t.y = 0;
		return t;
	};
	_proto.Wechat_i = function () {
		var t = new eui.CheckBox();
		this.Wechat = t;
		t.label = "";
		t.name = "Wechat";
		t.selected = true;
		t.x = 240;
		t.y = 0;
		t.skinName = ShopLayer$Skin193;
		return t;
	};
	_proto.ZFB_i = function () {
		var t = new eui.CheckBox();
		this.ZFB = t;
		t.label = "";
		t.name = "ZFB";
		t.x = 6;
		t.y = 0;
		t.skinName = ShopLayer$Skin194;
		return t;
	};
	return ShopLayer;
})(eui.Skin);generateEUI.paths['resource/eui_skins/welcome/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin_1 = (function (_super) {
	__extends(ProgressBarSkin_1, _super);
	function ProgressBarSkin_1() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 30;
		this.minWidth = 663;
		this._TweenGroup1_i();
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin_1.prototype;

	_proto._TweenGroup1_i = function () {
		var t = new egret.tween.TweenGroup();
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "progress_frame_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "progress_image_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin_1;
})(eui.Skin);