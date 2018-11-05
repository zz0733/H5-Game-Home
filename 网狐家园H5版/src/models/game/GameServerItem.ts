/**
 * 房间参数
 */
namespace models {
    export class GameServerItem {
        /**
         * 类型
         */
        public wKindID: number = 0;
        /**
         * 排序
         */
        public wSortID: number = 0;
        /**
         *标识
         */
        public wServerID: number = 0;
        /**
         *端口
         */
        public wServerPort: number = 0;
        /**
         *类型
         */
        public wServerType: number = 0;

        /**
         * 最大人数
         */
        public dwMaxPlayer: number = 0;
        /**
         * 在线人数
         */
        public dwOnLineCount: number = 0;
        /**
         * 地址
         */
        public dwServerAddrDX: number = 0;
        /**
         * 名称
         */
        public szServerName: string = "";
        /**
         * 域名
         */
        public szServerDomain: string = "";
        /**
         *单元积分 
         */
        public lCellScore: number = 0;
        /**
         * 最小进入
         */
        public lMinEnterScore: number = 0;
        /**
         * 最大进入
         */
        public lMaxEnterScore: number = 0;


        public isYueZhan(): boolean {
            var result = this.wServerType & df.TABLE_GENRE_CREATE
            return (result != 0) ? true : false;
        }

        constructor(buffer: utils.ByteArray) {
            this.onInit(buffer);
        }

        public onInit(buffer: utils.ByteArray) {
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
                console.log(`wKindID:${this.wKindID}`);
                console.log(`wSortID:${this.wSortID}`);
                console.log(`wServerID:${this.wServerID}`);
                console.log(`wServerPort:${this.wServerPort}`);
                console.log(`wServerType:${this.wServerType}`);
                console.log(`dwMaxPlayer:${this.dwMaxPlayer}`);
                console.log(`dwOnLineCount:${this.dwOnLineCount}`);
                console.log(`dwServerAddrDX:${this.dwServerAddrDX}`);
                console.log("szServerName: " + this.szServerName);
                console.log("szServerDomain: " + this.szServerDomain);
                console.log(`lCellScore:${this.lCellScore}`);
                console.log(`lMinEnterScore:${this.lMinEnterScore}`);
                console.log(`lMaxEnterScore:${this.lMaxEnterScore}`);
            }
        }
    }
}