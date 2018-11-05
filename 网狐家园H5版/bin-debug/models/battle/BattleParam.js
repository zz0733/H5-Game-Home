var battle;
(function (battle) {
    var BattleParam = /** @class */ (function () {
        function BattleParam(buffer) {
            this.tableUserList = [];
            this.onInit(buffer);
        }
        BattleParam.prototype.onInit = function (buffer) {
            this.dwMappedNum = buffer.Pop_DWORD();
            this.wFinishCount = buffer.Pop_WORD();
            this.dwElapsedTime = buffer.Pop_DWORD();
            this.wUserCount = buffer.Pop_WORD();
            for (var i = 0; i < this.wUserCount; i++) {
                var useritem = new battle.BattleUserItem();
                useritem.onInit(buffer);
            }
        };
        return BattleParam;
    }());
    battle.BattleParam = BattleParam;
})(battle || (battle = {}));
