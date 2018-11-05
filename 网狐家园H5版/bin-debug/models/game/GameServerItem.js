/**
 * 房间参数
 */
var models;
(function (models) {
    var GameServerItem = /** @class */ (function () {
        function GameServerItem(buffer) {
            /**
             * 类型
             */
            this.wKindID = 0;
            /**
             * 排序
             */
            this.wSortID = 0;
            /**
             *标识
             */
            this.wServerID = 0;
            /**
             *端口
             */
            this.wServerPort = 0;
            /**
             *类型
             */
            this.wServerType = 0;
            /**
             * 最大人数
             */
            this.dwMaxPlayer = 0;
            /**
             * 在线人数
             */
            this.dwOnLineCount = 0;
            /**
             * 地址
             */
            this.dwServerAddrDX = 0;
            /**
             * 名称
             */
            this.szServerName = "";
            /**
             * 域名
             */
            this.szServerDomain = "";
            /**
             *单元积分
             */
            this.lCellScore = 0;
            /**
             * 最小进入
             */
            this.lMinEnterScore = 0;
            /**
             * 最大进入
             */
            this.lMaxEnterScore = 0;
            this.onInit(buffer);
        }
        GameServerItem.prototype.isYueZhan = function () {
            var result = this.wServerType & df.TABLE_GENRE_CREATE;
            return (result != 0) ? true : false;
        };
        GameServerItem.prototype.onInit = function (buffer) {
            this.wKindID = buffer.Pop_WORD();
            this.wSortID = buffer.Pop_WORD();
            this.wServerID = buffer.Pop_WORD();
            this.wServerPort = buffer.Pop_WORD();
            this.wServerType = buffer.Pop_WORD();
            this.dwMaxPlayer = buffer.Pop_DWORD();
            this.dwOnLineCount = buffer.Pop_DWORD();
            this.dwServerAddrDX = buffer.Pop_DWORD();
            this.szServerName = buffer.Pop_UTF16(df.LEN_SERVER);
            this.szServerDomain = buffer.Pop_UTF16(63);
            this.lCellScore = buffer.Pop_SCORE();
            this.lMinEnterScore = buffer.Pop_SCORE();
            this.lMaxEnterScore = buffer.Pop_SCORE();
            if (df.SPECIAL_LOG) {
                console.log("wKindID:" + this.wKindID);
                console.log("wSortID:" + this.wSortID);
                console.log("wServerID:" + this.wServerID);
                console.log("wServerPort:" + this.wServerPort);
                console.log("wServerType:" + this.wServerType);
                console.log("dwMaxPlayer:" + this.dwMaxPlayer);
                console.log("dwOnLineCount:" + this.dwOnLineCount);
                console.log("dwServerAddrDX:" + this.dwServerAddrDX);
                console.log("szServerName: " + this.szServerName);
                console.log("szServerDomain: " + this.szServerDomain);
                console.log("lCellScore:" + this.lCellScore);
                console.log("lMinEnterScore:" + this.lMinEnterScore);
                console.log("lMaxEnterScore:" + this.lMaxEnterScore);
            }
        };
        return GameServerItem;
    }());
    models.GameServerItem = GameServerItem;
})(models || (models = {}));
