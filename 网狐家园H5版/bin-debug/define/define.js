var df;
(function (df) {
    /**
     * df  常量定义
     */
    df.INVALID_BYTE = 0xFF;
    df.INVALID_WORD = 0xFFFF;
    df.INVALID_DWORD = 0xFFFFFFFF;
    df.Len_Tcp_Head = 8; //包头固定长度
    df.Len_Tcp_Info = 4; //数据信息长度
    df.SOCKET_TCP_BUFFER = 16384; //网络缓冲
    /**
     * 消息处理单元
     */
    df.MAX_UNIT = 100;
    /**
     * 默认时间
     */
    df.Default_Time_Out = 20000;
    //////////////////////////////////////////////////////////////////////////////////////////////
    //内核命令
    df.MDM_KN_COMMAND = 0; //内核命令
    //内核命令
    df.SUB_KN_DETECT_SOCKET = 1; //检测命令
    df.SUB_KN_SHUT_DOWN_SOCKET = 2; //关闭命令
    //////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////
    //数据长度
    df.LEN_MD5 = 33; //加密密码
    df.LEN_AREA = 16; //地区长度
    df.LEN_CITY = 16; //城市长度
    df.LEN_PROVINCE = 16; //省份长度
    df.LEN_ACCOUNTS = 32; //帐号长度
    df.LEN_PASSWORD = 33; //密码长度
    df.LEN_GROUP_NAME = 32; //社团名字
    df.LEN_UNDER_WRITE = 64; //签名长度
    df.LEN_PROTECT_QUESTION = 32; //密保问题
    df.LEN_PASSPORT_ID = 32; //证件号码
    //数据长度
    df.LEN_QQ = 16; //Q Q 号码
    df.LEN_EMAIL = 33; //电子邮件
    df.LEN_USER_UIN = 33; //UIN长度
    df.LEN_USER_NOTE = 256; //用户备注
    df.LEN_SEAT_PHONE = 33; //固定电话
    df.LEN_MOBILE_PHONE = 16; //移动电话
    df.LEN_COMPELLATION = 16; //真实名字
    df.LEN_DWELLING_PLACE = 128; //联系地址
    //其他数据
    df.LEN_DOMAIN = 63; //域名长度	
    df.LEN_ADDRESS = 16; //地址长度
    df.LEN_VALIDATE = 33; //验证地址
    df.LEN_ACCREDIT_ID = 33; //授权号码
    df.LEN_COMPUTER_ID = 33; //序列长度
    df.LEN_MACHINE_SERIAL = 33; //序列长度
    df.LEN_NETWORK_ID = 13; //序列长度
    df.LEN_GROUP_INTRODUCE = 128; //群组介绍
    //视频定义
    df.LEN_VIDEO_KEY = 33; //秘钥长度
    df.LEN_VIDEO_CHANNEL = 22; //频道长度
    //列表数据
    df.LEN_TYPE = 32; //种类长度
    df.LEN_KIND = 32; //类型长度
    df.LEN_NODE = 32; //节点长度
    df.LEN_SERVER = 32; //房间长度
    df.LEN_CUSTOM = 32; //定制长度
    df.LEN_PROCESS = 32; //进程长度
    ////////////////////////////////////////////////////////////////////////////////////////////////
    /**站点标示
     * 1000 网狐
     * 1008 宿迁
     * 2000 四川
     * 2004 广安
     * 2008 浙江
     */
    df.STATION_ID = 2000;
    df.SPECIAL_ID = 0;
    /**
     * 登记信息
     */
    df.GAMELIST_LV_SCORE = {
        1: [10, 100, 500, 1000, 2000, 5000, 10000, 20000, 50000, 100000],
        7: [10, 100, 500, 1000, 2000, 5000, 10000, 20000, 50000, 100000],
        8: [10, 100, 500, 1000, 2000, 5000, 10000, 20000, 50000, 100000],
        15: [0, 100, 500, 1000, 2000, 5000, 10000, 20000, 50000, 100000],
        20: [10, 100, 500, 1000, 2000, 5000, 10000, 20000, 50000, 100000],
        28: [10, 100, 500, 1000, 2000, 5000, 10000, 20000, 50000, 100000],
        40: [10, 100, 500, 1000, 2000, 5000, 10000, 20000, 50000, 100000],
        46: [10, 100, 500, 1000, 2000, 5000, 10000, 20000, 50000, 100000],
        52: [0, 100, 500, 1000, 2000, 5000, 10000, 20000, 50000, 100000],
        55: [10, 100, 500, 1000, 5000, 10000, 50000, 100000, 200000],
        57: [10, 100, 500, 1000, 5000, 10000, 50000, 100000, 200000],
        60: [10, 100, 500, 1000, 5000, 10000, 50000, 100000, 200000],
        65: [10, 100, 500, 1000, 2000, 5000, 10000, 20000, 50000, 100000],
        67: [10, 100, 500, 1000, 2000, 5000, 10000, 20000, 50000, 100000],
        68: [10, 100, 500, 1000, 2000, 5000, 10000, 20000, 50000, 100000],
        71: [10, 100, 500, 1000, 2000, 5000, 10000, 20000, 50000, 100000],
        72: [10, 100, 500, 1000, 2000, 5000, 10000, 20000, 50000, 100000],
        73: [10, 100, 500, 1000, 2000, 5000, 10000, 20000, 50000, 100000],
        74: [10, 100, 500, 1000, 2000, 5000, 10000, 20000, 50000, 100000],
        75: [10, 100, 500, 1000, 2000, 5000, 10000, 20000, 50000, 100000],
        76: [10, 100, 500, 1000, 2000, 5000, 10000, 20000, 50000, 100000],
        78: [10, 100, 500, 1000, 2000, 5000, 10000, 20000, 50000, 100000],
        79: [10, 100, 500, 1000, 2000, 5000, 10000, 20000, 50000, 100000],
        81: [10, 100, 500, 1000, 5000, 10000, 50000, 100000, 200000],
        82: [10, 100, 500, 1000, 2000, 5000, 10000, 20000, 50000, 100000],
        86: [10, 100, 500, 1000, 2000, 5000, 10000, 20000, 50000, 100000],
        87: [10, 100, 500, 1000, 2000, 5000, 10000, 20000, 50000, 100000],
        88: [10, 100, 500, 1000, 2000, 5000, 10000, 20000, 50000, 100000],
        89: [10, 100, 500, 1000, 2000, 5000, 10000, 20000, 50000, 100000],
        90: [10, 100, 500, 1000, 2000, 5000, 10000, 20000, 50000, 100000],
        91: [10, 100, 500, 1000, 2000, 5000, 10000, 20000, 50000, 100000],
        92: [10, 100, 500, 1000, 2000, 5000, 10000, 20000, 50000, 100000],
        93: [10, 100, 500, 1000, 2000, 5000, 10000, 20000, 50000, 100000],
        94: [10, 100, 500, 1000, 5000, 10000, 50000, 100000, 200000],
        95: [10, 100, 500, 1000, 5000, 10000, 50000, 100000, 200000],
        96: [10, 100, 500, 1000, 5000, 10000, 50000, 100000, 200000],
        99: [10, 100, 500, 1000, 2000, 5000, 10000, 20000, 50000, 100000],
    };
    df.LV_SCORE = [
        2000, 4000, 8000, 20000, 40000, 80000, 150000, 300000, 500000, 1000000, 2000000, 5000000, 10000000, 50000000, 100000000, 500000000, 1000000000
    ];
    df.LV_DESC = [
        "务农", "佃户", "雇工", "作坊主", "农场主", "地主", "大地主", "财主", "富翁", "大富翁", "小财神", "大财神", "赌棍", "赌侠", "赌王", "赌圣", "赌神", "职业赌神"
    ];
    df.MEMBER_FLAG = ["", "info_level_2.png", "info_level_3.png", "info_level_4.png", "info_level_5.png"];
    df.MEMBER_DESC = ["普通玩家", "蓝钻会员", "黄钻会员", "铂钻会员", "红钻会员"];
    function getLevelDescribe(lScore) {
        var desc = "务农";
        for (var i = df.LV_DESC.length - 1; i >= 0; i--) {
            if (lScore >= df.LV_SCORE[i]) {
                return df.LV_DESC[i];
            }
        }
        return desc;
    }
    df.getLevelDescribe = getLevelDescribe;
    function getMemberLv(member) {
        if (member == null) {
            return 1;
        }
        if ((member == null) || (member == 0)) {
            return 1;
        }
        else if (member > 0 && member > 9) {
            return 2;
        }
        else if (member > 8 && member < 12) {
            return 3;
        }
        else if (member > 11 && member < 15) {
            return 4;
        }
        return 5;
    }
    df.getMemberLv = getMemberLv;
    function getMemberDescribe(member) {
        return df.MEMBER_DESC[getMemberLv(member) - 1];
    }
    df.getMemberDescribe = getMemberDescribe;
    function getExperienceLevel(exp) {
        if (exp <= 0)
            return 0;
        var lIncrease = 0;
        var lLevelValue = 0;
        //等级计算
        var wUserLevel = 0;
        for (var i = 1; i < 60; i++) {
            wUserLevel = i;
            lIncrease = lIncrease + i * 30;
            lLevelValue = lLevelValue + lIncrease;
            if (exp < lLevelValue)
                break;
        }
        return wUserLevel;
    }
    df.getExperienceLevel = getExperienceLevel;
    function getExpImgLevel(exp, maxcount) {
        var wUserLevel = df.getExperienceLevel(exp);
        var LevelVaule = [1, 5, 10];
        var lenght = LevelVaule.length;
        var nLevel = 1;
        //设置等级
        for (var i = 0; i < maxcount; i++)
            //终止判断
            if (wUserLevel == 0)
                break;
        //获取索引
        for (var j = 0; j < lenght; j++) {
            if (wUserLevel >= LevelVaule[lenght - 1 - j]) {
                wUserLevel = wUserLevel - LevelVaule[lenght - 1 - j];
                nLevel = (lenght - j + 1);
                break;
            }
        }
        return nLevel = (nLevel <= 3) ? nLevel : 1;
    }
    df.getExpImgLevel = getExpImgLevel;
    /**
     * 站点信息
     */
    df.STATION_INFO = {
        "PLATFORM_NAME": {
            1000: "网狐",
            1008: "西楚",
            1029: "恩施",
            2000: "四川",
            2004: "广安",
            2008: "浙江",
            2009: "梅州",
            2010: "湖北",
            2011: "湖南",
        },
        //低保支持
        "BaseEnsureSupport": {
            1000: true,
            1008: true,
            1029: true,
            2000: true,
            2004: true,
            2008: true,
            2009: true,
            2010: true,
            2011: true,
        },
        //实卡支持
        "RedeemCodeSupport": {
            1000: true,
            1008: true,
            1029: true,
            2000: true,
            2004: true,
            2008: true,
            2010: true,
            2011: true,
        },
        //转盘支持
        "LuckyRollSupport": {
            1000: true,
            2008: true,
            2009: true,
        },
        //微信支持
        "WechatSupport": {
            1000: true,
            1008: true,
            1029: true,
            2000: true,
            2004: true,
            2008: true,
            2009: true,
            2010: true,
            2011: true,
        },
        //注册支持
        "RegistSupport": {
            1000: true,
            1008: true,
            2000: true,
            2009: true,
            2010: true,
            2011: true,
        },
        //账号支持
        "AccountSupport": {
            1000: true,
            1008: true,
            1029: true,
            2000: true,
            2004: true,
            2008: true,
            2009: true,
            2010: true,
            2011: true,
        },
        //实物兑换支持
        "ItemSupport": {
            1000: true,
            1008: true,
            2000: true,
            2004: true,
            2008: true,
            2009: true,
            2010: true,
            2011: true,
        },
        //支付宝
        "AliPaySupport": {
            1000: true,
            1008: true,
            1029: true,
            2000: true,
            2004: true,
            2008: true,
            2009: true,
            2010: true,
            2011: true,
        },
        //微信支付
        "WechatPaySupport": {
            1000: true,
            1008: true,
            1029: true,
            2000: true,
            2004: true,
            2008: true,
            2009: true,
            2010: true,
            2011: true,
        },
        //排行榜支持
        "RankSupport": {
            1000: true,
            1008: true,
            2009: true,
        },
        //查看他人回放
        "OtherVedioSupport": {
            1000: true,
            2009: true,
        },
        //活动支持
        "ActiveSupport": {
            1000: true,
            2000: true,
        },
        //比赛支持
        "MatchSupport": {
            1000: true,
            1008: false,
            1029: false,
            2000: false,
            2004: false,
            2008: false,
            2009: false,
            2010: false,
            2011: false,
        },
        //房卡充值支持
        "RoomCardSupport": {
            1000: true,
            1008: true,
            1029: true,
            2000: true,
            2004: true,
            2008: true,
            2009: true,
            2010: true,
            2011: true,
        },
        //站点支持
        "StationSupport": {
            1000: true,
        }
    };
    /**平台支持游戏列表
     * 客户端游戏添加在此
     * @param id         游戏类型kindid
     * @param cn         游戏名称
     * @param name       游戏名称
     * @param path       游戏目录
     * @param module     游戏模块
     * @param logic      后续微信小游戏支持
     * @param res        后续微信小游戏支持
     * @param step       后续微信小游戏支持
     * @param md5        后续微信小游戏支持
     * @param show       是否显示
     * @param sort       排序索引
     * @param model      待定
     * @param version    后续微信小游戏支持
     */
    df.GAMELISTINFO = [
        {
            id: "1",
            cn: "五张牌",
            name: "showhand",
            path: "recreational",
            module: null,
            logic: "0",
            res: "0",
            step: false,
            md5: false,
            show: false,
            sort: 0,
            model: true,
            version: utils.PROCESS_VERSION(1, 1, 0, 1)
        },
        {
            id: "7",
            cn: "庄十三张",
            name: "thirteen",
            path: "recreational",
            module: null,
            logic: "0",
            res: "0",
            step: false,
            md5: false,
            show: false,
            sort: 0,
            model: true,
            version: utils.PROCESS_VERSION(1, 1, 0, 1)
        },
        {
            id: "8",
            cn: "比十三张",
            name: "thirteenbi",
            path: "recreational",
            module: null,
            logic: "0",
            res: "0",
            step: false,
            md5: false,
            show: false,
            sort: 0,
            model: true,
            video: true,
            version: utils.PROCESS_VERSION(1, 1, 0, 1)
        },
        {
            id: "15",
            cn: "掼蛋",
            name: "guandan",
            path: "chess",
            module: null,
            logic: "0",
            res: "0",
            step: false,
            md5: false,
            show: false,
            sort: 0,
            model: true,
            video: true,
            version: utils.PROCESS_VERSION(1, 1, 0, 1)
        },
        {
            id: "20",
            cn: "小包子麻将",
            name: "sparrowsy",
            path: "chess",
            module: null,
            logic: "0",
            res: "0",
            step: false,
            md5: false,
            show: false,
            sort: 0,
            model: true,
            video: true,
            version: utils.PROCESS_VERSION(1, 1, 0, 1)
        },
        {
            id: "28",
            cn: "拼十",
            name: "ox",
            path: "recreational",
            module: null,
            logic: "0",
            res: "0",
            step: false,
            md5: false,
            show: false,
            sort: 0,
            model: true,
            version: utils.PROCESS_VERSION(1, 1, 0, 1)
        },
        {
            id: "40",
            cn: "德州扑克",
            name: "dzshowhand",
            path: "recreational",
            module: null,
            logic: "0",
            res: "0",
            step: false,
            md5: false,
            show: false,
            sort: 0,
            model: true,
            disableNormal: true,
            disableBattle: false,
            version: utils.PROCESS_VERSION(1, 1, 0, 1)
        },
        {
            id: "46",
            cn: "五张牌",
            name: "showhandex",
            path: "recreational",
            module: null,
            logic: "0",
            res: "0",
            step: false,
            md5: false,
            show: false,
            sort: 0,
            model: true,
            version: utils.PROCESS_VERSION(1, 1, 0, 1)
        },
        {
            id: "52",
            cn: "转蛋",
            name: "zhuandan",
            path: "chess",
            module: null,
            logic: "0",
            res: "0",
            step: false,
            md5: false,
            show: false,
            sort: 0,
            model: true,
            video: true,
            version: utils.PROCESS_VERSION(1, 1, 0, 1)
        },
        {
            id: "57",
            cn: "断勾卡血战麻将",
            name: "Sparrowsclm",
            path: "chess",
            module: game.sparrowsclm.GameClientEngine,
            group: "Sparrowsclm",
            logic: "0",
            res: "0",
            step: false,
            md5: false,
            show: false,
            sort: 0,
            video: true,
            videoname: "GameClientEngineVideo",
            version: utils.PROCESS_VERSION(1, 1, 0, 1)
        },
        {
            id: "60",
            cn: "丁二红",
            name: "chexuan",
            path: "recreational",
            module: null,
            logic: "0",
            res: "0",
            step: false,
            md5: false,
            show: false,
            sort: 0,
            model: true,
            version: utils.PROCESS_VERSION(1, 1, 0, 1)
        },
        {
            id: "65",
            cn: "广安麻将",
            name: "sparrowga",
            path: "chess",
            module: null,
            logic: "0",
            res: "0",
            step: false,
            md5: false,
            show: false,
            sort: 0,
            version: utils.PROCESS_VERSION(1, 1, 0, 1)
        },
        {
            id: "67",
            cn: "衡阳麻将",
            name: "sparrowhy",
            path: "chess",
            module: null,
            logic: "0",
            res: "0",
            step: false,
            md5: false,
            show: false,
            sort: 0,
            model: true,
            video: true,
            version: utils.PROCESS_VERSION(1, 1, 0, 1)
        },
        {
            id: "68",
            cn: "衡阳鬼麻将",
            name: "sparrowhyg",
            path: "chess",
            module: null,
            logic: "0",
            res: "0",
            step: false,
            md5: false,
            show: false,
            sort: 0,
            model: true,
            version: utils.PROCESS_VERSION(1, 1, 0, 1)
        },
        {
            id: "82",
            cn: "血战麻将",
            name: "sparrowxz",
            path: "chess",
            module: null,
            logic: "0",
            res: "0",
            step: false,
            md5: false,
            show: false,
            sort: 0,
            model: true,
            version: utils.PROCESS_VERSION(1, 1, 0, 1)
        },
        {
            id: "86",
            cn: "癞子斗地主",
            name: "landlord",
            path: "chess",
            module: null,
            logic: "0",
            res: "0",
            step: false,
            md5: false,
            show: false,
            sort: 0,
            video: true,
            version: utils.PROCESS_VERSION(1, 1, 0, 1)
        },
        {
            id: "87",
            cn: "绍兴麻将",
            name: "sparrowsx",
            path: "chess",
            module: null,
            logic: "0",
            res: "0",
            step: false,
            md5: false,
            show: false,
            sort: 0,
            model: true,
            video: true,
            version: utils.PROCESS_VERSION(1, 1, 0, 1)
        },
        {
            id: "88",
            cn: "红中宝",
            name: "sparrowhzb",
            path: "chess",
            module: null,
            logic: "0",
            res: "0",
            step: false,
            md5: false,
            show: false,
            sort: 0,
            video: true,
            version: utils.PROCESS_VERSION(1, 1, 0, 1)
        },
        {
            id: "89",
            cn: "血流麻将",
            name: "sparrowxl",
            path: "chess",
            module: null,
            logic: "0",
            res: "0",
            step: false,
            md5: false,
            show: false,
            sort: 0,
            model: true,
            version: utils.PROCESS_VERSION(1, 1, 0, 1)
        },
        {
            id: "91",
            cn: "梅州红中宝",
            name: "sparrowhzb_mz",
            path: "chess",
            module: null,
            logic: "0",
            res: "0",
            step: false,
            md5: false,
            show: false,
            sort: 0,
            model: true,
            video: true,
            version: utils.PROCESS_VERSION(1, 1, 0, 1)
        },
        {
            id: "90",
            cn: "晃晃麻将",
            name: "sparrowhh",
            path: "chess",
            module: null,
            logic: "0",
            res: "0",
            step: false,
            md5: false,
            show: false,
            sort: 0,
            model: true,
            video: true,
            version: utils.PROCESS_VERSION(1, 1, 0, 1)
        },
        {
            id: "92",
            cn: "一痞二癞麻将",
            name: "sparroweslz",
            path: "chess",
            module: null,
            logic: "0",
            res: "0",
            step: false,
            md5: false,
            show: false,
            sort: 0,
            model: true,
            video: true,
            version: utils.PROCESS_VERSION(1, 1, 0, 1)
        },
        {
            id: "94",
            cn: "四人断勾卡",
            name: "sparrowdgk",
            path: "chess",
            module: null,
            logic: "0",
            res: "0",
            step: false,
            md5: false,
            show: false,
            sort: 0,
            model: true,
            video: false,
            version: utils.PROCESS_VERSION(1, 1, 0, 1)
        },
        {
            id: "55",
            cn: "四川斗地主",
            name: "landsc",
            path: "recreational",
            module: null,
            logic: "0",
            res: "0",
            step: false,
            md5: false,
            show: false,
            sort: 0,
            model: true,
            video: false,
            version: utils.PROCESS_VERSION(1, 1, 0, 1)
        },
        {
            id: "71",
            cn: "泗阳麻将",
            name: "sparrowsiyang",
            path: "chess",
            module: null,
            logic: "0",
            res: "0",
            step: false,
            md5: false,
            show: false,
            sort: 0,
            model: true,
            video: false,
            version: utils.PROCESS_VERSION(1, 1, 0, 1)
        },
        {
            id: "95",
            cn: "斗十四",
            name: "platedss",
            path: "recreational",
            module: null,
            logic: "0",
            res: "0",
            step: false,
            md5: false,
            show: false,
            sort: 0,
            model: true,
            video: false,
            version: utils.PROCESS_VERSION(1, 1, 0, 1)
        },
        {
            id: "75",
            cn: "兰州麻将",
            name: "sparrowlz",
            path: "chess",
            module: null,
            logic: "0",
            res: "0",
            step: false,
            md5: false,
            show: false,
            sort: 0,
            model: true,
            video: true,
            version: utils.PROCESS_VERSION(1, 1, 0, 1)
        },
        {
            id: "93",
            cn: "划水麻将",
            name: "sparrowhs",
            path: "chess",
            module: null,
            logic: "0",
            res: "0",
            step: false,
            md5: false,
            show: false,
            sort: 0,
            model: true,
            video: true,
            version: utils.PROCESS_VERSION(1, 1, 0, 1)
        },
        {
            id: "96",
            cn: "捉鸟麻将",
            name: "sparrowzn",
            path: "chess",
            module: null,
            logic: "0",
            res: "0",
            step: false,
            md5: false,
            show: false,
            sort: 0,
            model: true,
            video: true,
            version: utils.PROCESS_VERSION(1, 1, 0, 1)
        },
        {
            id: "72",
            cn: "挖坑",
            name: "wakeng",
            path: "recreational",
            module: null,
            logic: "0",
            res: "0",
            step: false,
            md5: false,
            show: false,
            sort: 0,
            model: true,
            video: false,
            version: utils.PROCESS_VERSION(1, 1, 0, 1)
        },
        {
            id: "73",
            cn: "宿迁麻将",
            name: "sparrowsq",
            path: "chess",
            module: null,
            logic: "0",
            res: "0",
            step: false,
            md5: false,
            show: false,
            sort: 0,
            model: true,
            video: true,
            version: utils.PROCESS_VERSION(1, 1, 0, 1)
        },
        {
            id: "76",
            cn: "跑得快",
            name: "runfast",
            path: "recreational",
            module: game.runfast.GameClientEngine,
            logic: "0",
            group: "RunFast",
            res: "0",
            step: false,
            md5: false,
            show: false,
            sort: 0,
            model: true,
            video: false,
            version: utils.PROCESS_VERSION(1, 1, 0, 1)
        },
        {
            id: "78",
            cn: "双扣",
            name: "shuangkou",
            path: "recreational",
            module: null,
            logic: "0",
            res: "0",
            step: false,
            md5: false,
            show: false,
            sort: 0,
            model: true,
            video: false,
            version: utils.PROCESS_VERSION(1, 1, 0, 1)
        },
        {
            id: "81",
            cn: "昏地主",
            name: "landsch",
            path: "recreational",
            module: null,
            logic: "0",
            res: "0",
            step: false,
            md5: false,
            show: false,
            sort: 0,
            model: true,
            video: true,
            version: utils.PROCESS_VERSION(1, 1, 0, 1)
        },
        {
            id: "98",
            cn: "打旋",
            name: "daxuan",
            path: "recreational",
            module: null,
            logic: "0",
            res: "0",
            step: false,
            md5: false,
            show: false,
            disableNormal: true,
            disableBattle: false,
            sort: 0,
            model: true,
            video: false,
            version: utils.PROCESS_VERSION(1, 1, 0, 1)
        },
        {
            id: "79",
            cn: "牌九",
            name: "paigow",
            path: "recreational",
            module: null,
            logic: "0",
            res: "0",
            step: false,
            md5: false,
            show: false,
            sort: 0,
            model: true,
            video: false,
            version: utils.PROCESS_VERSION(1, 1, 0, 1)
        },
        {
            id: "99",
            cn: "广东麻将",
            name: "sparrowgd",
            path: "chess",
            module: null,
            logic: "0",
            res: "0",
            step: false,
            md5: false,
            show: false,
            sort: 0,
            model: true,
            video: true,
            version: utils.PROCESS_VERSION(1, 1, 0, 1)
        },
        {
            id: "74",
            cn: "泗洪麻将",
            name: "sparrowsihong",
            path: "chess",
            module: null,
            logic: "0",
            res: "0",
            step: false,
            md5: false,
            show: false,
            sort: 0,
            model: true,
            video: false,
            version: utils.PROCESS_VERSION(1, 1, 0, 1)
        },
        {
            id: "97",
            cn: "泸州鬼麻将",
            name: "sparrowlzg",
            path: "chess",
            module: null,
            logic: "0",
            res: "0",
            step: false,
            md5: false,
            show: false,
            sort: 0,
            model: true,
            video: true,
            version: utils.PROCESS_VERSION(1, 1, 0, 1)
        },
        {
            id: "77",
            cn: "泸州大贰",
            name: "platedr",
            path: "recreational",
            module: null,
            logic: "0",
            res: "0",
            step: false,
            md5: false,
            show: false,
            sort: 0,
            model: true,
            video: false,
            version: utils.PROCESS_VERSION(1, 1, 0, 1)
        },
        {
            id: "100",
            cn: "二人麻将",
            name: "sparrower",
            path: "chess",
            module: null,
            logic: "0",
            res: "0",
            step: false,
            md5: false,
            show: false,
            sort: 0,
            disableNormal: true,
            disableBattle: false,
            model: true,
            video: false,
            version: utils.PROCESS_VERSION(1, 1, 0, 1)
        }
    ];
    df.STATION_GAME = {
        1000: { 57: true },
        1008: { 20: true, 28: true, 15: true, 52: true, 71: true },
        1029: { 86: true, 28: true, 92: true },
        2000: { 57: true, 86: true, 94: true, 82: true, 28: true, 60: true, 40: true, 55: true, 95: true, 76: true },
        2004: { 65: true, 82: true, 28: true, 0: true, 86: true },
        2008: { 87: true, 28: true, 40: true, 8: true },
        2009: { 88: true, 86: true, 91: true, 28: true },
        2010: { 90: true },
        2011: { 90: true },
        2013: { 99: true } //惠州
    };
    df.PLATFORM_NAME = df.STATION_INFO.PLATFORM_NAME[df.STATION_ID];
    //低保支持
    df.BaseEnsureSupport = df.STATION_INFO.BaseEnsureSupport[df.STATION_ID];
    //实卡支持
    df.RedeemCodeSupport = df.STATION_INFO.RedeemCodeSupport[df.STATION_ID];
    //转盘支持
    df.LuckyRollSupport = df.STATION_INFO.LuckyRollSupport[df.STATION_ID];
    //排行榜支持
    df.RankSupport = df.STATION_INFO.RankSupport[df.STATION_ID];
    //查看他人回放
    df.OtherVedioSupport = df.STATION_INFO.OtherVedioSupport[df.STATION_ID];
    //微信支持
    df.WechatSupport = true;
    //注册支持
    df.RegistSupport = df.STATION_INFO.RegistSupport[df.STATION_ID];
    //账号支持
    df.AccountSupport = df.STATION_INFO.AccountSupport[df.STATION_ID];
    //实物兑换支持
    df.ItemSupport = df.STATION_INFO.ItemSupport[df.STATION_ID];
    //活动支持
    df.ActiveSupport = df.STATION_INFO.ActiveSupport[df.STATION_ID];
    //比赛支持
    df.MatchSupport = df.STATION_INFO.MatchSupport[df.STATION_ID];
    //购买房卡支持
    df.RoomCardSupport = df.STATION_INFO.RoomCardSupport[df.STATION_ID];
    df.StationSupport = df.STATION_INFO.StationSupport[df.STATION_ID];
    //充值相关
    df.AliPaySupport = true;
    df.WechatPaySupport = true;
    df.IAPurchaseSupport = false;
    //AA约战支持
    df.AABattleSupport = true;
    //更多游戏
    df.MoreGameSupport = true;
    df.MODE_TH_SET = 1; //茶馆约战玩法设置
    df.MODE_TH_MODIFY = 2; //茶馆约战玩法修改
    df.MODE_TH_CREATE = 3; //茶馆约战创建
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    /**
     * 登录信息
     */
    df.DomainGetLogon = "androidwh.foxuc.com";
    df.PortGetLogon = 8100;
    df.WebAddress = "phone.foxuc.com";
    df.GameListSpecial = 2009;
    df.APP_VERSION = "1.14";
    /**
     * 测试开关
     */
    df.TEST_SERVER = false;
    /**日志开关 */
    df.CONSOLE_SWITCH = true;
    /**
     * 比赛支持
     */
    df.MatchVersion = "";
    /**广场版本 */
    df.PLAZA_VERSION = utils.PROCESS_VERSION(1, 1, 0, 0);
    /**
     * 特殊日志
     */
    df.SPECIAL_LOG = false;
    /**
     * 单游戏模式  默认大厅模式
     */
    df.SINGLE_GAME_MODE = false;
    /**
     * 1自营
     * 2用于应用宝；
     */
    df.MARKET_ID = 1;
    /**
     * 设备版本号
     */
    df.DEVICE_TYPE = 0x40;
    /**
     * 设备来源
     */
    df.APP_SOURCE = 0x100103E8;
    df.LUA_VERSION = 1.5;
    /**
     * 平台账号
     */
    df.ACCOUNT_TYPE_SELF = 1;
    /**
     * 微信账号
     */
    df.ACCOUNT_TYPE_WECHAT = 7;
    ////////////////////////////////////////////////////////////////////////////////////////////////
    df.US_NULL = 0x00; //没有状态
    df.US_FREE = 0x01; //站立状态
    df.US_SIT = 0x02; //坐下状态
    df.US_READY = 0x03; //同意状态
    df.US_LOOKON = 0x04; //旁观状态
    df.US_PLAYING = 0x05; //游戏状态
    df.US_OFFLINE = 0x06; //断线状态
    df.FACE_X = 48;
    df.FACE_Y = 48;
    df.INVALID_TABLE = 65535; //无效桌子
    df.INVALID_CHAIR = 65535; //无效椅子
    df.INVALID_ITEM = 65535;
    df.GENDER_FEMALE = 1; //女性性别
    df.GENDER_MANKIND = 2; //男性性别
    df.GENDER_SECRET = 0; //保密
    df.GAME_GENRE_GOLD = 0x0001; //金币类型
    df.GAME_GENRE_SCORE = 0x0002; //点值类型
    df.GAME_GENRE_MATCH = 0x0004; //比赛类型
    df.GAME_GENRE_EDUCATE = 0x0008; //训练类型
    df.TABLE_GENRE_NORMAL = 0X0000; //普通房间
    df.TABLE_GENRE_CREATE = 0X1000; //创建模式
    df.TABLE_GENRE_DISTRIBUTE = 0X2000; //分配模式
    df.LEN_GAME_LIST_ITEM = 142;
    df.LEN_GAME_SERVER_ITEM = 236;
    df.LEN_CREATE_OPTION_ITEM = 93 + 40 + 16 + 2;
    df.LEN_ACCESS_ITEM = 68;
    ////////////////////////////////////////////////////////////////////////////////////////////////
    //对战
    df.RFC_NULL = 0; //无错误
    df.RFC_PASSWORD_INCORRECT = 1; //密码错误
    df.RFC_SCORE_UNENOUGH = 3; //游戏币不足
    df.RFC_CREATE_TABLE_FAILURE = 4; //创建失败
    df.RFC_ENTER_TABLE_FAILURE = 5; //进入失败
    df.QUERY_KIND_NUMBER = 0; //编号类型
    df.QUERY_KIND_USERID = 1; //标识类型
    df.QUERY_KIND_GROUP = 2; //标识类型
    df.SETTLE_KIND_TIME = 0; //时间结算
    df.SETTLE_KIND_COUNT = 1; //局数结算
    df.SETTLE_KIND_NONE = 2;
    //财富掩码
    df.WEALTH_MASK_INGOT = 0x01; //钻石掩码
    df.WEALTH_MASK_MEDAL = 0x02; //奖牌掩码
    df.WEALTH_MASK_SCORE = 0x04; //金币掩码
    df.WEALTH_MASK_ROOMCARD = 0x08; //房卡掩码
    //货币类型
    df.CURRENCY_KIND_INGOT = 0; //货币类型
    df.CURRENCY_KIND_ROOMCARD = 1; //货币类型
    //支付类型
    df.PAY_TYPE_OWNER = 0x01; //房主支付
    df.PAY_TYPE_USER = 0x02; //玩家支付
    //配置掩码
    df.OPTION_MASK_TIME = 0x01; //时间配置
    df.OPTION_MASK_COUNT = 0x02; //局数配置
    df.OPTION_MASK_INGOT = 0x04; //钻石配置
    df.OPTION_MASK_ROOMCARD = 0x08; //房卡配置
    //配置类型
    df.OPTION_TYPE_NONE = 0x00; //无效配置
    df.OPTION_TYPE_SINGLE = 0x01; //单选配置
    df.OPTION_TYPE_MULTIPLE = 0x02; //多选配置
    df.OPTION_TYPE_INPUT = 0x04; //输入配置
    df.FO_FORBID_RECHARGE = 0x00000001; //用户权限
    //解散状态
    df.DISMISS_STATE_START = 1; //发起解散
    df.DISMISS_STATE_OTHER = 2; //解散房间
    df.DISMISS_STATE_WAIT = 3; //等待解散
    df.DISMISS_STATE_OVER = 4; //解散结果
    //用户解散标识
    df.USER_DISMISS_WAIT = 1; //等待
    df.USER_DISMISS_REJECT = 2; //拒绝
    df.USER_DISMISS_AGREE = 3; //同意
    /////////////////////////////////////////////////////////////////////////////////////////////////
    /**
     * 系统时间
     */
    function SYSTEMTIME(buffer) {
        var struct = {
            wYear: buffer.Pop_WORD(),
            wMonth: buffer.Pop_WORD(),
            wDayOfWeek: buffer.Pop_WORD(),
            wDay: buffer.Pop_WORD(),
            wHour: buffer.Pop_WORD(),
            wMinute: buffer.Pop_WORD(),
            wSecond: buffer.Pop_WORD(),
            wMilliseconds: buffer.Pop_WORD()
        };
        return struct;
    }
    df.SYSTEMTIME = SYSTEMTIME;
    /**
     * 接入子项
     */
    function tagAccessItem(buffer) {
        var struct = {
            wAccessID: buffer.Pop_WORD(),
            wServicePort: buffer.Pop_WORD(),
            szServiceAddr: buffer.Pop_UTF16(df.LEN_SERVER) //服务地址
        };
        return struct;
    }
    df.tagAccessItem = tagAccessItem;
    ;
    /**
     * 视图索引
     */
    df.TOP_ZORDER = 1000; //顶层索引
    df.MODE_CHOOSE = 1; //选择登录
    df.MODE_ACCOUNT = 2; //帐号登录
    df.MODE_REGISTER = 3; //注册帐号
    df.MODE_SERVICE = 4; //服务界面
    df.MODE_OPTION = 5; //设置界面
    df.MODE_WECHAT = 6; //微信登陆
    df.MODE_STATION = 7; //站点界面
    df.MODE_NOTICE = 8; //游戏公告
    df.MODE_AGREE = 9; //注册协议  
    df.MODE_PLAZA_OPTION = 10; //大厅设置 
    df.MODE_USER_INFO = 11; //个人信息
    df.MODE_SHOP = 12; //商城界面  
    df.MODE_RANK = 13; //排行界面 
    df.MODE_BATTLE_FIND = 14; //约战查找
    df.MODE_BATTLE_LIST = 15; //约战列表
    df.MODE_BATTLE_RECORD = 16; //约战记录
    df.MODE_BENEFIT = 17; //活动界面
    df.MODE_BATTLE_CREATE = 18; //约战创建
    df.MODE_GAME_HELP = 19; //游戏规则
    df.MODE_ROOM_LIST = 20; //房间列表
    df.MODE_TAE_HOUSE = 21; //茶馆界面
})(df || (df = {}));
