/**
 * 权位操作
 */
var game;
(function (game) {
    var sparrowsclm;
    (function (sparrowsclm) {
        sparrowsclm.MASK_CHI_HU_RIGHT = 0x0fffffff;
        var MAX_RIGHT_COUNT = 32;
        var CChiHuRight = /** @class */ (function () {
            //构造
            function CChiHuRight() {
                this.m_dwRight = utils.allocArray(MAX_RIGHT_COUNT, Number);
                this.m_data32 = utils.allocArray(MAX_RIGHT_COUNT, Number);
                //加番变量
                this.m_cbGengCount = 0;
                this.m_cbQiaCount = 0;
                for (var i = 0; i < MAX_RIGHT_COUNT; i++) {
                    this.m_data32[i] = Math.pow(2, (32 - i - 1));
                }
            }
            //位操作
            CChiHuRight.prototype.d2b = function (arg) {
                var tr = utils.allocArray(MAX_RIGHT_COUNT, Number);
                for (var i = 0; i < MAX_RIGHT_COUNT; i++) {
                    if (arg >= this.m_data32[i]) {
                        tr[i] = 1;
                        arg = arg - Number(this.m_data32[i]);
                    }
                    else {
                        tr[i] = 0;
                    }
                }
                return tr;
            };
            //是否权位为空
            CChiHuRight.prototype.IsEmpty = function () {
                for (var i = 0; i < MAX_RIGHT_COUNT; i++)
                    if (this.m_dwRight[i] != 0)
                        return false;
                return true;
            };
            //设置权位为空
            CChiHuRight.prototype.SetEmpty = function () {
                this.m_dwRight = null;
                this.m_dwRight = utils.allocArray(MAX_RIGHT_COUNT, Number);
                this.m_cbGengCount = 0;
                this.m_cbQiaCount = 0;
                return;
            };
            //赋值
            CChiHuRight.prototype.Assignment = function (chr) {
                for (var i = 0; i < 32; i++) {
                    this.m_dwRight[i] = chr.m_dwRight[i];
                }
                this.m_cbGengCount = chr.m_cbGengCount;
                this.m_cbQiaCount = chr.m_cbQiaCount;
            };
            //与等于
            CChiHuRight.prototype.AndAssignment = function (dwRight) {
                var tmpRight = this.d2b(dwRight);
                for (var i = 0; i < 32; i++) {
                    if (this.m_dwRight[i] == 1 && tmpRight[i] == 1) {
                        this.m_dwRight[i] = 1;
                    }
                    else {
                        this.m_dwRight[i] = 0;
                    }
                }
                return this;
            };
            //或等于
            CChiHuRight.prototype.OrAssignment = function (dwRight) {
                var tmpRight = this.d2b(dwRight);
                for (var i = 0; i < 32; i++) {
                    if (this.m_dwRight[i] == 1 || tmpRight[i] == 1) {
                        this.m_dwRight[i] = 1;
                    }
                    else {
                        this.m_dwRight[i] = 0;
                    }
                }
                return this;
            };
            //与
            CChiHuRight.prototype.LogicAnd = function (dwRight) {
                var tmpRight = this.d2b(dwRight);
                for (var i = 0; i < 32; i++) {
                    if (this.m_dwRight[i] == 1 && tmpRight[i] == 1) {
                        return true;
                    }
                }
                return false;
            };
            return CChiHuRight;
        }());
        sparrowsclm.CChiHuRight = CChiHuRight;
    })(sparrowsclm = game.sparrowsclm || (game.sparrowsclm = {}));
})(game || (game = {}));
