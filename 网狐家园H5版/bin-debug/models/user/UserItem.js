/**
 * 玩家信息
 */
var models;
(function (models) {
    var UserItem = (function () {
        /**
         * 构造拷贝
         */
        function UserItem(item) {
            /**
             * 玩家数据
             */
            this.dwGameID = 0;
            this.dwUserID = 0;
            this.wFaceID = 0;
            this.dwCustomID = 0;
            this.cbGender = df.GENDER_MANKIND;
            this.cbMemberOrder = 0;
            this.wTableID = df.INVALID_TABLE;
            this.wChairID = df.INVALID_CHAIR;
            this.cbUserStatus = 0;
            this.lScore = 0;
            this.lGrade = 0;
            this.dwWinCount = 0;
            this.dwLostCount = 0;
            this.dwDrawCount = 0;
            this.dwFleeCount = 0;
            this.dwExperience = 0;
            this.szNickName = "";
            /**
             * 用户经纬度
             */
            this.dwGlobalPosLng = 0;
            this.dwGlobalPosLat = 0;
            if (null != item) {
                this.dwGameID = item.dwGameID;
                this.dwUserID = item.dwUserID;
                this.wFaceID = item.wFaceID;
                this.dwCustomID = item.dwCustomID;
                this.cbGender = item.cbGender;
                this.cbMemberOrder = item.cbMemberOrder;
                this.wTableID = item.wTableID;
                this.wChairID = item.wChairID;
                this.cbUserStatus = item.cbUserStatus;
                this.lScore = item.lScore;
                this.lGrade = item.lGrade;
                this.dwWinCount = item.dwWinCount;
                this.dwLostCount = item.dwLostCount;
                this.dwDrawCount = item.dwDrawCount;
                this.dwFleeCount = item.dwFleeCount;
                this.dwExperience = item.dwExperience;
                this.szNickName = item.szNickName;
                /**
                 * 用户经纬度
                 */
                this.dwGlobalPosLng = item.dwGlobalPosLng;
                this.dwGlobalPosLat = item.dwGlobalPosLat;
            }
        }
        return UserItem;
    }());
    models.UserItem = UserItem;
})(models || (models = {}));
