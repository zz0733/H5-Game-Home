/**
 * 用户数据
 */
var models;
(function (models) {
    var UserData = /** @class */ (function () {
        /**
         * 构造
         */
        function UserData(data) {
            this.wLockServerID = 65535;
            this.nPlatform = df.ACCOUNT_TYPE_SELF;
            this.szHeadUrl = "";
            this.szHeadUrlEx = "";
            this.dwGameID = 0;
            this.dwUserID = 0;
            this.dwExperience = 0;
            this.dwLoveLiness = 0;
            this.szPassword = "";
            this.szLogonPass = "";
            this.szMachine = "";
            this.szMobilePhone = "";
            this.szAccounts = "";
            this.szNickName = "";
            this.szInsurePass = "";
            this.szDynamicPass = "";
            this.lUserScore = 0.00;
            this.lUserInsure = 0.00;
            this.lUserIngot = 0.00;
            this.lUserMedal = 0.00;
            this.lUserRoomCard = 0.00;
            this.cbGender = 0;
            this.cbMemberOrder = 0;
            this.wFaceID = 0;
            this.dwCustomID = 0;
            this.dwStationID = 0;
            this.dwPayRight = 0;
            //会员信息
            this.MemberOverDate = {
                wYea: 0,
                wMonth: 0,
                wDayOfWeek: 0,
                wDay: 0,
                wHour: 0,
                wMinute: 0,
                wSecond: 0,
                wMilliseconds: 0
            };
            this.bAutoLogon = false; //自动登录
            this.bHasLogon = false; //已登录过
            //基本信息
            this.wFaceID = data.wFaceID; //头像标识
            this.cbGender = data.cbGender; //用户性别
            this.dwCustomID = data.dwCustomID; //自定头像
            this.dwUserID = data.dwUserID; //用户 I D
            this.dwGameID = data.dwGameID; //游戏 I D
            this.dwStationID = data.dwStationID; //站点标识
            this.dwExperience = data.dwExperience; //经验数值
            this.dwLoveLiness = data.dwLoveLiness; //用户魅力
            this.szNickName = data.szNickName; //用户昵称
            this.szAccounts = data.szAccounts; //登录帐号
            this.szLogonPass = data.szLogonPass; //登录密码
            this.szInsurePass = data.szInsurePass; //银行密码
            //财富信息
            this.lUserIngot = data.lUserIngot; //用户钻石
            this.lUserMedal = data.lUserMedal; //用户奖牌
            this.lUserScore = data.lUserScore; //用户游戏币	
            this.lUserInsure = data.lUserInsure; //用户银行	
            //会员资料
            this.cbMemberOrder = data.cbMemberOrder, //会员等级
                this.MemberOverDate = data.MemberOverDate, //到期时间
                //附加信息
                this.wLockServerID = data.wLockServerID; //锁定房间	
        }
        return UserData;
    }());
    models.UserData = UserData;
})(models || (models = {}));
