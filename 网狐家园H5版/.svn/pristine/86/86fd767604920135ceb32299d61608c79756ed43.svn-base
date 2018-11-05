namespace battle {
    export class BattleUserItem {
        public wFaceID                    = 0;                    //头像标识
        public wChairID                   = 0;                    //椅子标识
        public dwUserID                   = 0;                    //用户标识 
        public dwGameID                   = 0;                    
        public dwCustomID 				  = 0;     
        public szNickName                 = "";                   //用户昵称

        constructor() {
            
        }
        public onInit(buffer: utils.ByteArray){
            this.wFaceID = buffer.Pop_WORD();
            this.wChairID = buffer.Pop_WORD();
            this.dwUserID = buffer.Pop_DWORD();
            this.dwGameID = buffer.Pop_DWORD();
            this.dwCustomID = buffer.Pop_DWORD();
            this.szNickName = buffer.Pop_UTF16(df.LEN_ACCOUNTS);
        }
        public onInitWithData(data: any) {
            this.wFaceID = data.wFaceID ? data.wFaceID : 0;
            this.wChairID = data.wChairID ? data.wChairID : 0;
            this.dwUserID = data.dwUserID ? data.dwUserID : 0;
            this.dwGameID = data.dwGameID ? data.dwGameID : 0;
            this.dwCustomID = data.dwCustomID ? data.dwCustomID : 0;
            this.szNickName = data.szNickName ? data.szNickName : "";
        }
    }
}