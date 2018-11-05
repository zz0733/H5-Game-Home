namespace df {

    export const URL_TEAHOUSE_SHARE = "http://testwww.foxuc.com/Mobile/WxGroupShare.aspx";

    /////////////////////////////////////////////////////////////////////////////////

    //IM定义
    //更新类型
    export const UPDATE_KIND_WEALTH = 0x01									//财富类型
    export const UPDATE_KIND_PROPERTY = 0x02							    //属性类型
    export const UPDATE_KIND_BATTLERULE = 0x04								//规则类型

    //消息类型
    export const APPLY_MSG_TYPE_REQUEST = 1								    //请求消息
    export const APPLY_MSG_TYPE_RESPOND = 2									//响应消息

    //申请状态
    export const APPLY_STATUS_NONE = 0										//审核状态
    export const APPLY_STATUS_AGREE = 1										//同意状态
    export const APPLY_STATUS_REFUSE = 2								    //拒绝状态
    export const APPLY_STATUS_REPEAL = 3									//撤销状态

    export const GROUP_BATTLE_MASK_GYKF = 0x01                              //馆员开房

    //////////////////////////////////////////////////////////////////////////////////
    //命令定义

    //约战服务
    export const MDM_GA_BATTLE_SERVICE = 1									//约战服务

    //桌子操作
    export const SUB_GA_QUERY_TABLE = 110									//查询桌子
    export const SUB_GA_CREATE_TABLE = 111									//创建桌子
    export const SUB_GA_DISMISS_TABLE = 112									//解散桌子
    export const SUB_GA_GET_TABLE_USERLIST = 113							//获取列表

    //操作结果
    export const SUB_GA_TABLE_ITEM = 200									//桌子信息
    export const SUB_GA_TABLE_LIST = 201									//桌子列表
    export const SUB_GA_OPERATE_FAILED = 202							    //操作失败
    export const SUB_GA_BATTLE_RECORD = 203									//约战记录
    export const SUB_GA_TABLE_PARAMLIST = 204								//桌子参数
    export const SUB_GA_TABLE_USERLIST = 205								//用户列表
    export const SUB_GA_DISMISS_RESULT = 206								//解散结果

    //消息推送
    export const SUB_GA_USER_SITDOWN = 300									//用户坐下
    export const SUB_GA_USER_STANDUP = 301									//用户起立
    export const SUB_GA_TABLE_PARAM = 302									//桌子参数
    export const SUB_GA_TABLE_DISMISS = 303									//桌子解散

    //////////////////////////////////////////////////////////////////////////////////


    //桌子用户
    export function tagTableUserItem() {
        //用户信息
        let struct = {
            wFaceID: 0,    								//头像标识 2
            wChairID: 0,	  							//用户方位 4
            dwUserID: 0,							    //用户标识 8
            dwGameID: 0, 								//游戏标识 12
            dwCustomID: 0, 								//头像标识 16
            szNickName: "" 							    //用户昵称 80
        }
        return struct
    }

    //查询桌子
    export function CMD_GA_QueryTable() {
        let struct = {
            wKindID: 0,							//类型标识
            dwUserID: 0,						//用户标志
            cbQueryKind: 0,						//查询类型
            dwQueryArgKey: 0,					//查询关键字
        }

        return struct;
    }

    //创建桌子
    export function CMD_GA_CreateTable() {

        let struct = {
            //用户信息
            dwUserID: 0,							//用户标识
            dwStationID: 0,						    //站点标识
            szPassword: "",			                //用户密码

            //群组信息
            dwGroupID: 0,							//群组标识
            dwGroupCreaterID: 0,					//群主标识

            //创建信息
            wKindID: 0,							    //类型标识	
            wPayType: 0,							//支付类型
            wPlayerCount: 0,						//游戏人数
            cbSettleKind: 0,						//结算方式
            cbVideoMode: 0,						    //视频模式
            cbCurrencyKind: 0,						//货币类型
            cbForbidSameIP: 0,						//禁止同IP	
            wPlayCount: 0,							//游戏局数
            dwPlayTime: 0,							//游戏时长
            lBaseScore: 0,							//游戏底分

            //客户信息
            szMachineID: "",		                //机器序列
        }

        return struct;

    }

    //解散桌子
    export function CMD_GA_DismissTable() {
        let struct = {
            wKindID: 0,							//类型标识
            dwMappedNum: 0,						//桌子编号
            dwUserID: 0,						//用户标识
            szPassword: "",			            //用户密码	
        }
        return struct;
    }

    //获取列表
    export function CMD_GA_GetTableUserList() {
        let struct = {
            wKindID: 0,							//类型标识
            dwMappedNum: 0,						//映射编号	
        }
        return struct;
    }

    //桌子列表
    export function CMD_GA_TableList() {
        let struct = {
            wTableCount: 0,						    //桌子数目
        }
        return struct;

    }

    //用户坐下
    export function CMD_GA_UserSitdown() {
        let struct = {
            dwUserID: 0,							//用户标识
            dwMappedNum: 0,						    //映射编号
            TableUserItem: tagTableUserItem(),		//用户信息
        }
        return struct;

    }

    //用户起立
    export function CMD_GA_UserStandup() {
        let struct = {
            wChairID: 0,							//用户椅子
            dwUserID: 0,							//用户标识
            dwMappedNum: 0,						    //映射编号	
        }
        return struct;
    }

    //桌子参数
    export function CMD_GA_TableParam() {
        let struct = {
            dwMappedNum: 0,						    //映射编号
            dwStartTime: 0,						    //开始时间
            wFinishCount: 0,					    //完成局数
        }
        return struct;
    }

    //桌子解散
    export function CMD_GA_TableDismiss() {
        let struct = {
            dwGroupID: 0,					    	//群组标识
            dwMappedNum: 0,						    //映射编号
        }
        return struct;
    }

    //解散结果
    export function CMD_GA_DismissResult() {
        let struct = {
            cbResultCode: 0,					    //结果代码
            szDescribeString: "",				    //描述信息
        }
        return struct;
    }

    //用户列表
    export function CMD_GA_TableUserList() {
        let struct = {
            dwMappedNum: 0,						    //映射编号
            wUserCount: 0,						    //用户数量
        }
        return struct;
    }

    //////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////

    //逻辑服务
    export const MDM_GA_LOGIC_SERVICE = 2								//逻辑服务

    //请求命令
    export const SUB_GA_ENTER_SERVER = 1								//进入服务
    export const SUB_GA_SEARCH_GROUP = 2								//搜索群组
    export const SUB_GA_CREATE_GROUP = 3								//创建群组
    export const SUB_GA_UPDATE_GROUP = 4								//更新群组
    export const SUB_GA_DELETE_GROUP = 5								//删除群组
    export const SUB_GA_DELETE_MEMBER = 7								//删除成员		
    export const SUB_GA_APPLY_REQUEST = 8								//申请请求
    export const SUB_GA_APPLY_RESPOND = 9								//申请响应
    export const SUB_GA_APPLY_DELETE = 10								//申请删除
    export const SUB_GA_APPLY_REPEAL = 11								//申请撤销
    export const SUB_GA_SETTLE_BATTLE = 12								//约战结算
    export const SUB_GA_LEAVE_SERVER = 19								//离开服务

    //约战玩法
    export const SUB_GA_APPEND_CONFIG = 20								//添加玩法
    export const SUB_GA_MODIFY_CONFIG = 21								//修改玩法
    export const SUB_GA_DELETE_CONFIG = 22								//删除玩法

    //应答操作
    export const SUB_GA_GROUP_OPTION = 100								//群组配置
    export const SUB_GA_APPLY_MESSAGE = 101								//申请消息
    export const SUB_GA_LOGON_FAILURE = 102								//登录失败
    export const SUB_GA_SEARCH_RESULT = 103								//搜索结果
    export const SUB_GA_WEALTH_UPDATE = 104								//财富更新
    export const SUB_GA_APPLY_DEL_RESULT = 105							//删除结果

    //操作结果
    export const SUB_GA_OPERATE_SUCCESS = 200							//操作成功
    export const SUB_GA_OPERATE_FAILURE = 201							//操作失败	

    //系统消息
    export const SUB_GA_SYSTEM_MESSAGE = 300						    //系统消息

    //////////////////////////////////////////////////////////////////////////////////

    //////////////////////////////////////////////////////////////////////////////////

    //群组服务
    export const MDM_GA_GROUP_SERVICE = 3									//群组服务

    //请求命令
    export const SUB_GA_ENTER_GROUP = 1								    	//进入群组
    export const SUB_GA_LEAVE_GROUP = 2									    //离开群组

    //群组命令
    export const SUB_GA_GROUP_ITEM = 100									//群组信息
    export const SUB_GA_GROUP_PROPERTY = 101								//群组属性
    export const SUB_GA_GROUP_MEMBER = 102									//群组成员
    export const SUB_GA_GROUP_UPDATE = 103									//群组更新
    export const SUB_GA_GROUP_DELETE = 104									//群组移除
    export const SUB_GA_MEMBER_INSERT = 105									//添加成员
    export const SUB_GA_MEMBER_DELETE = 106									//删除成员
    export const SUB_GA_MEMBER_UPDATE = 107									//更新成员

    //约战玩法
    export const SUB_GA_BATTLE_CONFIG = 120									//约战玩法
    export const SUB_GA_CONFIG_APPEND = 121									//玩法添加
    export const SUB_GA_CONFIG_MODIFY = 122									//玩法修改
    export const SUB_GA_CONFIG_DELETE = 123									//玩法删除

    //进入结果
    export const SUB_GA_ENTER_SUCCESS = 200									//进入成功
    export const SUB_GA_ENTER_FAILURE = 201									//进入失败

    //////////////////////////////////////////////////////////////////////////////////
}