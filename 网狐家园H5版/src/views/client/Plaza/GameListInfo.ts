namespace client {
    export class GameListInfo {
        public _Info: any[] = [];
        public _Favourite: any[] = [];
        public _FavouriteTimes: number = 10;

        constructor() {

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
                        ]

                } else if (df.SPECIAL_ID == 2011) {
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
                        ]
                }
            }
        }

        /**
         * 本地加载游戏喜好
         */
        public loadGameFavourite(): void {

        }

        /**
         * 获取游戏喜好
         */
        public getGameFavourite(kind: number): number {
            return 0;
        }

        public getGameName(kind:number) {
            let info = this._Info;
            let name = "未知";

            for (let list of info) {
                if (list.id == kind && (list.show == true)) {
                    name = list.cn;
                    break;
                }
            }
            return name ;
           
        }
        /**
         * 设置游戏喜好
         */
        public setGameFavourite(kind: number, value: number): void {


        }

        /**
         * 是否支持
         */
        public isGameSupport(kind: number, show?: boolean) {
            let info = this._Info;
            let list = {
                id: "-1",
                cn: "未知",
                name: "",
                path: "",
                module: null,
                group:"",
                logic: "0",
                res: "0",
                step: false,
                md5: false,
                show: false,
                sort: 0,
                model: true,
                version: 0
            };

            info.forEach(element => {
                if (element.id == kind && (element.show || show)) {
                    return list = element;
                }
            });
            return list;
        }

        public isVideoSupport(kind: number) {

        }
    }
}