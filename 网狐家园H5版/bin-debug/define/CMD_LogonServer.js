/**
 * 协议定义
 */
var df;
(function (df) {
    //////////////////////////////////////////////////////////////////////////////////
    df.MDM_MB_LOGON = 100; //广场登录
    df.SUB_MB_LOGON_ACCOUNTS = 2; //帐号登录
    df.SUB_MB_REGISTER_ACCOUNTS = 3; //注册帐号
    df.SUB_MB_LOGON_OTHERPLATFORM = 4; //其他登陆
    df.SUB_MB_LOGON_GAMEID_LUA = 10; //I D 登录
    df.SUB_MB_LOGON_ACCOUNTS_LUA = 11; //帐号登录
    df.SUB_MB_LOGON_OTHERPLATFORM_LUA = 12; //其他登录
    df.SUB_MB_REGISTER_ACCOUNTS_LUA = 13; //注册帐号
    df.SUB_MB_LOGON_SUCCESS = 100; //登录成功
    df.SUB_MB_LOGON_FAILURE = 101; //登录失败
    df.SUB_MB_LOGON_FINISH = 102; //登录完成
    df.SUB_MB_UPDATE_NOTIFY = 200; //升级提示
    //////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////
    //列表命令
    df.MDM_MB_SERVER_LIST = 101; //列表信息
    //获取命令
    df.SUB_MB_GET_LIST = 1; //获取列表
    df.SUB_MB_GET_SERVER = 2; //获取房间
    df.SUB_MB_GET_OPTION = 3; //获取配置
    df.SUB_MB_GET_OPTION_LUA = 4; //获取配置
    df.SUB_MB_GET_SERVER_AGENT = 5; //房间代理
    //列表信息
    df.SUB_MB_LIST_KIND = 100; //种类列表
    df.SUB_MB_LIST_SERVER = 101; //房间列表
    df.SUB_MB_LIST_MATCH = 102; //比赛列表
    df.SUB_MB_GAME_OPTION = 104; //游戏选项
    df.SUB_MB_CREATE_OPTION = 103; //开房选项
    df.SUB_MB_LIST_LOGON = 105; //登录列表
    df.SUB_MB_LIST_AGENT = 106; //代理列表
    df.SUB_MB_SERVER_AGENT = 107; //房间代理
    df.SUB_MB_LIST_ACCESS = 108; //网关服务
    df.SUB_MB_LIST_FINISH = 200; //列表完成
    df.SUB_MB_SERVER_FINISH = 201; //房间完成
    /////////////////////////////////////////////////////////////////////////////////////////////////////
    //帐号登录
    function CMD_MB_LogonAccounts_WEB() {
        var struct = {
            //系统信息
            wModuleID: 0,
            wMarketID: 0,
            cbDeviceType: 0,
            dwAppVersion: 0,
            dwPlazaVersion: 0,
            //登录信息
            dwStationID: 0,
            dwMappedNum: 0,
            szPassword: "",
            szAccounts: "",
            //连接信息
            szMachineID: "",
            szMobilePhone: "" //电话号码
        };
        return struct;
    }
    df.CMD_MB_LogonAccounts_WEB = CMD_MB_LogonAccounts_WEB;
    ;
    /**
     * 账号注册
     */
    function CMD_MB_RegisterAccounts_WEB() {
        var struct = {
            //系统信息
            wModuleID: 0,
            wMarketID: 0,
            cbDeviceType: 0,
            dwAppVersion: 0,
            dwPlazaVersion: 0,
            //密码变量
            dwStationID: 0,
            szLogonPass: "",
            //注册信息
            wFaceID: 0,
            cbGender: 0,
            szAccounts: "",
            szNickName: "",
            //连接信息
            szMachineID: "",
            szMobilePhone: "" //电话号码
        };
        return struct;
    }
    df.CMD_MB_RegisterAccounts_WEB = CMD_MB_RegisterAccounts_WEB;
    ;
    /***
     * 登录成功
     */
    function CMD_MB_LogonSuccess() {
        var struct = {
            wFaceID: 0,
            cbGender: 0,
            dwCustomID: 0,
            dwUserID: 0,
            dwGameID: 0,
            dwStationID: 0,
            dwExperience: 0,
            dwLoveLiness: 0,
            szNickName: "",
            szAccounts: "",
            szLogonPass: "",
            szInsurePass: "",
            //财富信息
            lUserIngot: 0,
            lUserMedal: 0,
            lUserScore: 0,
            lUserInsure: 0,
            //会员资料
            cbMemberOrder: 0,
            MemberOverDate: {},
            //附加信息
            wLockServerID: 0 //锁定房间	
        };
        return struct;
    }
    df.CMD_MB_LogonSuccess = CMD_MB_LogonSuccess;
    ;
    /**
     * 登录失败
     */
    function CMD_MB_LogonFailure() {
        var struct = {
            lResultCode: 0,
            szDescribeString: "" //描述消息
        };
        return struct;
    }
    df.CMD_MB_LogonFailure = CMD_MB_LogonFailure;
    ;
    ///////////////////////////////////////////////////////////////////////////////////////////
    //服务命令
    df.MDM_GP_USER_SERVICE = 3; //用户服务
    ////////////////////////////////////////////////////////////////////////////////////////////
    //账号服务
    df.SUB_GP_MODIFY_ACCOUNTS = 1; //修改帐号
    df.SUB_GP_MODIFY_LOGON_PASS = 2; //修改密码
    df.SUB_GP_MODIFY_INSURE_PASS = 3; //修改密码
    df.SUB_GP_MODIFY_INDIVIDUAL = 4; //修改资料
    df.SUB_MB_MODIFY_INDIVIDUAL = 5; //修改资料
    df.SUB_GP_BIND_MACHINE = 6; //锁定机器
    df.SUB_GP_UN_BIND_MACHINE = 7; //解锁机器
    df.SUB_GP_ACCOUNT_SECURITY = 8; //密保申请
    df.SUB_GP_MODIFY_NICKNAME = 9; //修改昵称
    //查询命令
    df.SUB_GP_QUERY_INDIVIDUAL = 10; //查询信息
    df.SUB_GP_TEST_ACCOUNTS = 11; //检查占用
    df.SUB_GP_TEST_NICKNAME = 12; //检测占用
    df.SUB_GP_QUERY_WEALTH = 13; //查询财富
    df.SUB_GP_QUERY_WEALTH_LUA = 14; //查询财富
    //低保命令
    df.SUB_GP_BASEENSURE_QUERY = 20; //查询低保
    df.SUB_GP_BASEENSURE_TAKE = 21; //领取低保	
    df.SUB_GP_GET_VALIDATECDOE = 22; //获取验证码	
    //////////////////////////////////////////////////////////////////////////
    //操作结果
    df.SUB_GP_OPERATE_SUCCESS = 100; //操作成功
    df.SUB_GP_OPERATE_FAILURE = 101; //操作失败
    //查询结果
    df.SUB_GP_USER_INDIVIDUAL = 200; //个人资料
    df.SUB_GP_USER_WEALTH = 201; //用户财富
    //修改头像
    df.SUB_GP_USER_FACE_INFO = 210; //头像信息
    df.SUB_GP_SYSTEM_FACE_INFO = 211; //系统头像
    df.SUB_GP_CUSTOM_FACE_INFO = 212; //自定头像
    //低保命令
    df.SUB_GP_BASEENSURE_INFO = 300; //低保信息
    df.SUB_GP_BASEENSURE_RESULT = 301; //领取结果
    df.SUB_GP_BASEENSURE_FAILED = 302; //操作失败	
    df.SUB_GP_VALIDATECDOE_INFO = 303; //验证码信息
    //////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////
    //银行
    df.MDM_GP_BANK_OPERATE = 4; //银行操作
    //////////////////////////////////////////////////////////////////////////
    df.SUB_GP_STORAGE = 1; //银行存储
    df.SUB_GP_DRAWOUT = 2; //银行取出
    df.SUB_GP_TRANSFER = 3; //银行转帐
    df.SUB_GP_QUERY = 4; //查询用户
    df.SUB_GP_UPDATE = 5; //更新金币
    function CMD_GP_BANKOPERATE() {
        var struct = {
            dwUserID: 0,
            lOperateScore: 0,
            cbOperateCode: 0,
            dwStationID: 0,
            szInsurePass: ""
        };
        return;
    }
    df.CMD_GP_BANKOPERATE = CMD_GP_BANKOPERATE;
    ///////////////////////////////////////////////////////////////////////////////////////////
})(df || (df = {}));
