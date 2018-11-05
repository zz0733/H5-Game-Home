/**
 * 权位操作
 */
namespace game {
    export namespace sparrowsclm {
        export const MASK_CHI_HU_RIGHT = 0x0fffffff
        const MAX_RIGHT_COUNT = 32;
        export class CChiHuRight {
            private m_dwRight = utils.allocArray<Number>(MAX_RIGHT_COUNT, Number);
            private m_data32 = utils.allocArray<Number>(MAX_RIGHT_COUNT, Number);

            //加番变量
            public m_cbGengCount: number = 0;
            public m_cbQiaCount: number = 0;
            
            //构造
            constructor() {
                for (let i = 0; i < MAX_RIGHT_COUNT; i++) {
                    this.m_data32[i] = Math.pow(2,(32-i-1));  
                }
            }

            //位操作
            public d2b(arg: number) {
                let tr = utils.allocArray<Number>(MAX_RIGHT_COUNT, Number);
                for (let i = 0; i < MAX_RIGHT_COUNT; i++) {
                    if (arg >= this.m_data32[i]) {
                        tr[i] = 1;
                        arg = arg - Number(this.m_data32[i]);
                    }  else {
                       tr[i] = 0; 
                    }
                }
                return tr;
            }

            //是否权位为空
            public IsEmpty() {
                for (let i = 0; i < MAX_RIGHT_COUNT; i++)
                    if (this.m_dwRight[i] != 0) return false;
                return true;
            }

            //设置权位为空
            public SetEmpty() {
                this.m_dwRight = null;
                this.m_dwRight = utils.allocArray<Number>(MAX_RIGHT_COUNT, Number);
                this.m_cbGengCount = 0;
                this.m_cbQiaCount = 0;
                return;
            }

            //赋值
            public Assignment(chr: CChiHuRight) {
                for (let i = 0; i < 32; i++) {
                    this.m_dwRight[i] = chr.m_dwRight[i]
                }
                    
	            this.m_cbGengCount = chr.m_cbGengCount
                this.m_cbQiaCount = chr.m_cbQiaCount
            }

            //与等于
            public AndAssignment(dwRight: number) {

                let tmpRight = this.d2b(dwRight);
                for (let i = 0; i < 32; i++) {
                   if (this.m_dwRight[i] ==1 && tmpRight[i] == 1) {
                       this.m_dwRight[i] = 1;
                   } else {
                       this.m_dwRight[i] = 0;
                   }
                }
                return this;
            }

            //或等于
            public OrAssignment(dwRight: number) {
                let tmpRight = this.d2b(dwRight);
                for (let i = 0; i < 32; i++) {
                   if (this.m_dwRight[i] == 1 || tmpRight[i] == 1) {
                       this.m_dwRight[i] = 1;
                   } else {
                       this.m_dwRight[i] = 0;
                   }
                }
                return this;
            }

            //与
            public LogicAnd(dwRight: number) {
                let tmpRight = this.d2b(dwRight);
                for (let i = 0; i < 32; i++) {
                   if (this.m_dwRight[i] ==1 && tmpRight[i] == 1) {
                      return true
                   }
                }
                return false;
            }
        }
    }
}