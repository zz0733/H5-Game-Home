var battle;
(function (battle) {
    var BattleUserItem = (function () {
        function BattleUserItem() {
            this.wFaceID = 0; //头像标识
            this.wChairID = 0; //椅子标识
            this.dwUserID = 0; //用户标识 
            this.dwGameID = 0;
            this.dwCustomID = 0;
            this.szNickName = ""; //用户昵称
        }
        BattleUserItem.prototype.onInit = function (buffer) {
            this.wFaceID = buffer.Pop_WORD();
            this.wChairID = buffer.Pop_WORD();
            this.dwUserID = buffer.Pop_DWORD();
            this.dwGameID = buffer.Pop_DWORD();
            this.dwCustomID = buffer.Pop_DWORD();
            this.szNickName = buffer.Pop_UTF16(df.LEN_ACCOUNTS);
        };
        BattleUserItem.prototype.onInitWithData = function (data) {
            this.wFaceID = data.wFaceID ? data.wFaceID : 0;
            this.wChairID = data.wChairID ? data.wChairID : 0;
            this.dwUserID = data.dwUserID ? data.dwUserID : 0;
            this.dwGameID = data.dwGameID ? data.dwGameID : 0;
            this.dwCustomID = data.dwCustomID ? data.dwCustomID : 0;
            this.szNickName = data.szNickName ? data.szNickName : "";
        };
        return BattleUserItem;
    }());
    battle.BattleUserItem = BattleUserItem;
})(battle || (battle = {}));
