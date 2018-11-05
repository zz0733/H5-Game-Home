/**
 * 玩家信息
 */
namespace models {
    export class UserItem {
        /**
         * 玩家数据
         */
        public dwGameID = 0;
        public dwUserID = 0;

        public wFaceID = 0;
        public dwCustomID = 0;

        public cbGender = df.GENDER_MANKIND;
        public cbMemberOrder = 0;

        public wTableID = df.INVALID_TABLE;
        public wChairID = df.INVALID_CHAIR;
        public cbUserStatus = 0;

        public lScore = 0;
        public lGrade = 0;

        public dwWinCount = 0;
        public dwLostCount = 0;
        public dwDrawCount = 0;
        public dwFleeCount = 0;
        public dwExperience = 0;

        public szNickName = "";

        /**
         * 用户经纬度
         */
        public dwGlobalPosLng = 0;
        public dwGlobalPosLat = 0;

        /**
         * 构造拷贝
         */
        constructor(item?: UserItem) {
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
    }
}