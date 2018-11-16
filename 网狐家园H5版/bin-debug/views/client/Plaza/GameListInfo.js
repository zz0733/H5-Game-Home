var client;
(function (client) {
    var GameListInfo = (function () {
        function GameListInfo() {
            this._Info = [];
            this._Favourite = [];
            this._FavouriteTimes = 10;
            this._Info = df.GAMELISTINFO;
            if (df.SPECIAL_ID != 0) {
                if (df.SPECIAL_ID == 1029) {
                    this._Info =
                        [
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
                            }
                        ];
                }
                else if (df.SPECIAL_ID == 2011) {
                    //湖湘
                    this._Info =
                        [
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
                            }
                        ];
                }
            }
        }
        /**
         * 本地加载游戏喜好
         */
        GameListInfo.prototype.loadGameFavourite = function () {
        };
        /**
         * 获取游戏喜好
         */
        GameListInfo.prototype.getGameFavourite = function (kind) {
            return 0;
        };
        GameListInfo.prototype.getGameName = function (kind) {
            var info = this._Info;
            var name = "未知";
            for (var _i = 0, info_1 = info; _i < info_1.length; _i++) {
                var list = info_1[_i];
                if (list.id == kind && (list.show == true)) {
                    name = list.cn;
                    break;
                }
            }
            return name;
        };
        /**
         * 设置游戏喜好
         */
        GameListInfo.prototype.setGameFavourite = function (kind, value) {
        };
        /**
         * 是否支持
         */
        GameListInfo.prototype.isGameSupport = function (kind, show) {
            var info = this._Info;
            var list = {
                id: "-1",
                cn: "未知",
                name: "",
                path: "",
                module: null,
                group: "",
                logic: "0",
                res: "0",
                step: false,
                md5: false,
                show: false,
                sort: 0,
                model: true,
                version: 0
            };
            info.forEach(function (element) {
                if (element.id == kind && (element.show || show)) {
                    return list = element;
                }
            });
            return list;
        };
        GameListInfo.prototype.isVideoSupport = function (kind) {
        };
        return GameListInfo;
    }());
    client.GameListInfo = GameListInfo;
})(client || (client = {}));
