namespace battle {
    export class BattleParam {
        public dwMappedNum: number;						    //映射编号 4
        public wFinishCount: number;                        //完成局数 6
        public dwElapsedTime: number;                       //逝去时间 10
        public wUserCount: number;                          //用户数量 12
        public tableUserList: BattleUserItem[] = [];

        constructor(buffer: utils.ByteArray) {
            this.onInit(buffer);
        }

        onInit(buffer: utils.ByteArray) {
            this.dwMappedNum = buffer.Pop_DWORD();
            this.wFinishCount = buffer.Pop_WORD();
            this.dwElapsedTime = buffer.Pop_DWORD();
            this.wUserCount = buffer.Pop_WORD();

            for (let i = 0; i < this.wUserCount; i++) {
                let useritem = new BattleUserItem();
                useritem.onInit(buffer);
            }
        }
    }
}