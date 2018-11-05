var df;
(function (df) {
    df.URL_TEAHOUSE_SHARE = "http://testwww.foxuc.com/Mobile/WxGroupShare.aspx";
    /////////////////////////////////////////////////////////////////////////////////
    //IM定义
    //更新类型
    df.UPDATE_KIND_WEALTH = 0x01; //财富类型
    df.UPDATE_KIND_PROPERTY = 0x02; //属性类型
    df.UPDATE_KIND_BATTLERULE = 0x04; //规则类型
    //消息类型
    df.APPLY_MSG_TYPE_REQUEST = 1; //请求消息
    df.APPLY_MSG_TYPE_RESPOND = 2; //响应消息
    //申请状态
    df.APPLY_STATUS_NONE = 0; //审核状态
    df.APPLY_STATUS_AGREE = 1; //同意状态
    df.APPLY_STATUS_REFUSE = 2; //拒绝状态
    df.APPLY_STATUS_REPEAL = 3; //撤销状态
    df.GROUP_BATTLE_MASK_GYKF = 0x01; //馆员开房
    //////////////////////////////////////////////////////////////////////////////////
    //命令定义
    //约战服务
    df.MDM_GA_BATTLE_SERVICE = 1; //约战服务
    //桌子操作
    df.SUB_GA_QUERY_TABLE = 110; //查询桌子
    df.SUB_GA_CREATE_TABLE = 111; //创建桌子
    df.SUB_GA_DISMISS_TABLE = 112; //解散桌子
    df.SUB_GA_GET_TABLE_USERLIST = 113; //获取列表
    //操作结果
    df.SUB_GA_TABLE_ITEM = 200; //桌子信息
    df.SUB_GA_TABLE_LIST = 201; //桌子列表
    df.SUB_GA_OPERATE_FAILED = 202; //操作失败
    df.SUB_GA_BATTLE_RECORD = 203; //约战记录
    df.SUB_GA_TABLE_PARAMLIST = 204; //桌子参数
    df.SUB_GA_TABLE_USERLIST = 205; //用户列表
    df.SUB_GA_DISMISS_RESULT = 206; //解散结果
    //消息推送
    df.SUB_GA_USER_SITDOWN = 300; //用户坐下
    df.SUB_GA_USER_STANDUP = 301; //用户起立
    df.SUB_GA_TABLE_PARAM = 302; //桌子参数
    df.SUB_GA_TABLE_DISMISS = 303; //桌子解散
    //////////////////////////////////////////////////////////////////////////////////
    //桌子用户
    function tagTableUserItem() {
        //用户信息
        var struct = {
            wFaceID: 0,
            wChairID: 0,
            dwUserID: 0,
            dwGameID: 0,
            dwCustomID: 0,
            szNickName: "" //用户昵称 80
        };
        return struct;
    }
    df.tagTableUserItem = tagTableUserItem;
    //查询桌子
    function CMD_GA_QueryTable() {
        var struct = {
            wKindID: 0,
            dwUserID: 0,
            cbQueryKind: 0,
            dwQueryArgKey: 0,
        };
        return struct;
    }
    df.CMD_GA_QueryTable = CMD_GA_QueryTable;
    //创建桌子
    function CMD_GA_CreateTable() {
        var struct = {
            //用户信息
            dwUserID: 0,
            dwStationID: 0,
            szPassword: "",
            //群组信息
            dwGroupID: 0,
            dwGroupCreaterID: 0,
            //创建信息
            wKindID: 0,
            wPayType: 0,
            wPlayerCount: 0,
            cbSettleKind: 0,
            cbVideoMode: 0,
            cbCurrencyKind: 0,
            cbForbidSameIP: 0,
            wPlayCount: 0,
            dwPlayTime: 0,
            lBaseScore: 0,
            //客户信息
            szMachineID: "",
        };
        return struct;
    }
    df.CMD_GA_CreateTable = CMD_GA_CreateTable;
    //解散桌子
    function CMD_GA_DismissTable() {
        var struct = {
            wKindID: 0,
            dwMappedNum: 0,
            dwUserID: 0,
            szPassword: "",
        };
        return struct;
    }
    df.CMD_GA_DismissTable = CMD_GA_DismissTable;
    //获取列表
    function CMD_GA_GetTableUserList() {
        var struct = {
            wKindID: 0,
            dwMappedNum: 0,
        };
        return struct;
    }
    df.CMD_GA_GetTableUserList = CMD_GA_GetTableUserList;
    //桌子列表
    function CMD_GA_TableList() {
        var struct = {
            wTableCount: 0,
        };
        return struct;
    }
    df.CMD_GA_TableList = CMD_GA_TableList;
    //用户坐下
    function CMD_GA_UserSitdown() {
        var struct = {
            dwUserID: 0,
            dwMappedNum: 0,
            TableUserItem: tagTableUserItem(),
        };
        return struct;
    }
    df.CMD_GA_UserSitdown = CMD_GA_UserSitdown;
    //用户起立
    function CMD_GA_UserStandup() {
        var struct = {
            wChairID: 0,
            dwUserID: 0,
            dwMappedNum: 0,
        };
        return struct;
    }
    df.CMD_GA_UserStandup = CMD_GA_UserStandup;
    //桌子参数
    function CMD_GA_TableParam() {
        var struct = {
            dwMappedNum: 0,
            dwStartTime: 0,
            wFinishCount: 0,
        };
        return struct;
    }
    df.CMD_GA_TableParam = CMD_GA_TableParam;
    //桌子解散
    function CMD_GA_TableDismiss() {
        var struct = {
            dwGroupID: 0,
            dwMappedNum: 0,
        };
        return struct;
    }
    df.CMD_GA_TableDismiss = CMD_GA_TableDismiss;
    //解散结果
    function CMD_GA_DismissResult() {
        var struct = {
            cbResultCode: 0,
            szDescribeString: "",
        };
        return struct;
    }
    df.CMD_GA_DismissResult = CMD_GA_DismissResult;
    //用户列表
    function CMD_GA_TableUserList() {
        var struct = {
            dwMappedNum: 0,
            wUserCount: 0,
        };
        return struct;
    }
    df.CMD_GA_TableUserList = CMD_GA_TableUserList;
    //////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////
    //逻辑服务
    df.MDM_GA_LOGIC_SERVICE = 2; //逻辑服务
    //请求命令
    df.SUB_GA_ENTER_SERVER = 1; //进入服务
    df.SUB_GA_SEARCH_GROUP = 2; //搜索群组
    df.SUB_GA_CREATE_GROUP = 3; //创建群组
    df.SUB_GA_UPDATE_GROUP = 4; //更新群组
    df.SUB_GA_DELETE_GROUP = 5; //删除群组
    df.SUB_GA_DELETE_MEMBER = 7; //删除成员		
    df.SUB_GA_APPLY_REQUEST = 8; //申请请求
    df.SUB_GA_APPLY_RESPOND = 9; //申请响应
    df.SUB_GA_APPLY_DELETE = 10; //申请删除
    df.SUB_GA_APPLY_REPEAL = 11; //申请撤销
    df.SUB_GA_SETTLE_BATTLE = 12; //约战结算
    df.SUB_GA_LEAVE_SERVER = 19; //离开服务
    //约战玩法
    df.SUB_GA_APPEND_CONFIG = 20; //添加玩法
    df.SUB_GA_MODIFY_CONFIG = 21; //修改玩法
    df.SUB_GA_DELETE_CONFIG = 22; //删除玩法
    //应答操作
    df.SUB_GA_GROUP_OPTION = 100; //群组配置
    df.SUB_GA_APPLY_MESSAGE = 101; //申请消息
    df.SUB_GA_LOGON_FAILURE = 102; //登录失败
    df.SUB_GA_SEARCH_RESULT = 103; //搜索结果
    df.SUB_GA_WEALTH_UPDATE = 104; //财富更新
    df.SUB_GA_APPLY_DEL_RESULT = 105; //删除结果
    //操作结果
    df.SUB_GA_OPERATE_SUCCESS = 200; //操作成功
    df.SUB_GA_OPERATE_FAILURE = 201; //操作失败	
    //系统消息
    df.SUB_GA_SYSTEM_MESSAGE = 300; //系统消息
    //////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////
    //群组服务
    df.MDM_GA_GROUP_SERVICE = 3; //群组服务
    //请求命令
    df.SUB_GA_ENTER_GROUP = 1; //进入群组
    df.SUB_GA_LEAVE_GROUP = 2; //离开群组
    //群组命令
    df.SUB_GA_GROUP_ITEM = 100; //群组信息
    df.SUB_GA_GROUP_PROPERTY = 101; //群组属性
    df.SUB_GA_GROUP_MEMBER = 102; //群组成员
    df.SUB_GA_GROUP_UPDATE = 103; //群组更新
    df.SUB_GA_GROUP_DELETE = 104; //群组移除
    df.SUB_GA_MEMBER_INSERT = 105; //添加成员
    df.SUB_GA_MEMBER_DELETE = 106; //删除成员
    df.SUB_GA_MEMBER_UPDATE = 107; //更新成员
    //约战玩法
    df.SUB_GA_BATTLE_CONFIG = 120; //约战玩法
    df.SUB_GA_CONFIG_APPEND = 121; //玩法添加
    df.SUB_GA_CONFIG_MODIFY = 122; //玩法修改
    df.SUB_GA_CONFIG_DELETE = 123; //玩法删除
    //进入结果
    df.SUB_GA_ENTER_SUCCESS = 200; //进入成功
    df.SUB_GA_ENTER_FAILURE = 201; //进入失败
    //////////////////////////////////////////////////////////////////////////////////
})(df || (df = {}));
