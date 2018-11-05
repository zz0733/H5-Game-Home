/**加密模块
 * 1.0 数据加密
 * 2.0 数据解密
 * 3.0 数据映射
 */

namespace network {

    //数据类型
    export const DK_MAPPED = 0x01;						    	//映射类型
    export const DK_ENCRYPT = 0x02;								//加密类型

    export const VER_SOCKET = 1;							    //网络版本

    const g_dwPacketKey = 0xA55AA55A;

    //映射字符
    const m_cbSendByteMap: Array<number> =
        [
            0x70, 0x2F, 0x40, 0x5F, 0x44, 0x8E, 0x6E, 0x45, 0x7E, 0xAB, 0x2C, 0x1F, 0xB4, 0xAC, 0x9D, 0x91,
            0x0D, 0x36, 0x9B, 0x0B, 0xD4, 0xC4, 0x39, 0x74, 0xBF, 0x23, 0x16, 0x14, 0x06, 0xEB, 0x04, 0x3E,
            0x12, 0x5C, 0x8B, 0xBC, 0x61, 0x63, 0xF6, 0xA5, 0xE1, 0x65, 0xD8, 0xF5, 0x5A, 0x07, 0xF0, 0x13,
            0xF2, 0x20, 0x6B, 0x4A, 0x24, 0x59, 0x89, 0x64, 0xD7, 0x42, 0x6A, 0x5E, 0x3D, 0x0A, 0x77, 0xE0,
            0x80, 0x27, 0xB8, 0xC5, 0x8C, 0x0E, 0xFA, 0x8A, 0xD5, 0x29, 0x56, 0x57, 0x6C, 0x53, 0x67, 0x41,
            0xE8, 0x00, 0x1A, 0xCE, 0x86, 0x83, 0xB0, 0x22, 0x28, 0x4D, 0x3F, 0x26, 0x46, 0x4F, 0x6F, 0x2B,
            0x72, 0x3A, 0xF1, 0x8D, 0x97, 0x95, 0x49, 0x84, 0xE5, 0xE3, 0x79, 0x8F, 0x51, 0x10, 0xA8, 0x82,
            0xC6, 0xDD, 0xFF, 0xFC, 0xE4, 0xCF, 0xB3, 0x09, 0x5D, 0xEA, 0x9C, 0x34, 0xF9, 0x17, 0x9F, 0xDA,
            0x87, 0xF8, 0x15, 0x05, 0x3C, 0xD3, 0xA4, 0x85, 0x2E, 0xFB, 0xEE, 0x47, 0x3B, 0xEF, 0x37, 0x7F,
            0x93, 0xAF, 0x69, 0x0C, 0x71, 0x31, 0xDE, 0x21, 0x75, 0xA0, 0xAA, 0xBA, 0x7C, 0x38, 0x02, 0xB7,
            0x81, 0x01, 0xFD, 0xE7, 0x1D, 0xCC, 0xCD, 0xBD, 0x1B, 0x7A, 0x2A, 0xAD, 0x66, 0xBE, 0x55, 0x33,
            0x03, 0xDB, 0x88, 0xB2, 0x1E, 0x4E, 0xB9, 0xE6, 0xC2, 0xF7, 0xCB, 0x7D, 0xC9, 0x62, 0xC3, 0xA6,
            0xDC, 0xA7, 0x50, 0xB5, 0x4B, 0x94, 0xC0, 0x92, 0x4C, 0x11, 0x5B, 0x78, 0xD9, 0xB1, 0xED, 0x19,
            0xE9, 0xA1, 0x1C, 0xB6, 0x32, 0x99, 0xA3, 0x76, 0x9E, 0x7B, 0x6D, 0x9A, 0x30, 0xD6, 0xA9, 0x25,
            0xC7, 0xAE, 0x96, 0x35, 0xD0, 0xBB, 0xD2, 0xC8, 0xA2, 0x08, 0xF3, 0xD1, 0x73, 0xF4, 0x48, 0x2D,
            0x90, 0xCA, 0xE2, 0x58, 0xC1, 0x18, 0x52, 0xFE, 0xDF, 0x68, 0x98, 0x54, 0xEC, 0x60, 0x43, 0x0F
        ];

    //映射字符
    const m_cbRecvByteMap: Array<number> =
        [
            0x51, 0xA1, 0x9E, 0xB0, 0x1E, 0x83, 0x1C, 0x2D, 0xE9, 0x77, 0x3D, 0x13, 0x93, 0x10, 0x45, 0xFF,
            0x6D, 0xC9, 0x20, 0x2F, 0x1B, 0x82, 0x1A, 0x7D, 0xF5, 0xCF, 0x52, 0xA8, 0xD2, 0xA4, 0xB4, 0x0B,
            0x31, 0x97, 0x57, 0x19, 0x34, 0xDF, 0x5B, 0x41, 0x58, 0x49, 0xAA, 0x5F, 0x0A, 0xEF, 0x88, 0x01,
            0xDC, 0x95, 0xD4, 0xAF, 0x7B, 0xE3, 0x11, 0x8E, 0x9D, 0x16, 0x61, 0x8C, 0x84, 0x3C, 0x1F, 0x5A,
            0x02, 0x4F, 0x39, 0xFE, 0x04, 0x07, 0x5C, 0x8B, 0xEE, 0x66, 0x33, 0xC4, 0xC8, 0x59, 0xB5, 0x5D,
            0xC2, 0x6C, 0xF6, 0x4D, 0xFB, 0xAE, 0x4A, 0x4B, 0xF3, 0x35, 0x2C, 0xCA, 0x21, 0x78, 0x3B, 0x03,
            0xFD, 0x24, 0xBD, 0x25, 0x37, 0x29, 0xAC, 0x4E, 0xF9, 0x92, 0x3A, 0x32, 0x4C, 0xDA, 0x06, 0x5E,
            0x00, 0x94, 0x60, 0xEC, 0x17, 0x98, 0xD7, 0x3E, 0xCB, 0x6A, 0xA9, 0xD9, 0x9C, 0xBB, 0x08, 0x8F,
            0x40, 0xA0, 0x6F, 0x55, 0x67, 0x87, 0x54, 0x80, 0xB2, 0x36, 0x47, 0x22, 0x44, 0x63, 0x05, 0x6B,
            0xF0, 0x0F, 0xC7, 0x90, 0xC5, 0x65, 0xE2, 0x64, 0xFA, 0xD5, 0xDB, 0x12, 0x7A, 0x0E, 0xD8, 0x7E,
            0x99, 0xD1, 0xE8, 0xD6, 0x86, 0x27, 0xBF, 0xC1, 0x6E, 0xDE, 0x9A, 0x09, 0x0D, 0xAB, 0xE1, 0x91,
            0x56, 0xCD, 0xB3, 0x76, 0x0C, 0xC3, 0xD3, 0x9F, 0x42, 0xB6, 0x9B, 0xE5, 0x23, 0xA7, 0xAD, 0x18,
            0xC6, 0xF4, 0xB8, 0xBE, 0x15, 0x43, 0x70, 0xE0, 0xE7, 0xBC, 0xF1, 0xBA, 0xA5, 0xA6, 0x53, 0x75,
            0xE4, 0xEB, 0xE6, 0x85, 0x14, 0x48, 0xDD, 0x38, 0x2A, 0xCC, 0x7F, 0xB1, 0xC0, 0x71, 0x96, 0xF8,
            0x3F, 0x28, 0xF2, 0x69, 0x74, 0x68, 0xB7, 0xA3, 0x50, 0xD0, 0x79, 0x1D, 0xFC, 0xCE, 0x8A, 0x8D,
            0x2E, 0x62, 0x30, 0xEA, 0xED, 0x2B, 0x26, 0xB9, 0x81, 0x7C, 0x46, 0x89, 0x73, 0xA2, 0xF7, 0x72
        ];

    export class Crypt {
        /**
         * 发送密钥
         */
        private m_dwSendXorKey: number = 0x12345678;

        /**
         *接收密钥
         */
        private m_dwRecvXorKey: number = 0x12345678;

        /**
         * 发送计数
         */
        private m_dwSendPacketCount: number = 0;

        /**
         * 接收计数
         */
        private m_dwRecvPacketCount: number = 0;

        /**
         * 字节映射
         */
        private m_cbSendRound: number = 0;
        private m_cbRecvRound: number = 0;

        /**
         * 加密标志 默认DK_MAPPED
         */
        private m_cbDataFlag: number = DK_MAPPED;

        /**
         * 构造
         */
        constructor() {

        }
        /**
         * 设置加密标识
         */
        public setDataFlag(cbFlag): void {
            this.m_cbDataFlag = cbFlag;
        }

        /**
         * 获取加密标识
         */
        public getDataFlag(): number {
            return this.m_cbDataFlag;
        }

        // 生成随机数
        SeedRandMap(wSeed): number {
            var dwHold = utils.MathUtils.getUnsignedDWORD(wSeed);
            return utils.MathUtils.getUnsignedWORD((dwHold = dwHold * 241103 + 2533101) >> 16);
        }

        MapSendByte(byte, cbSendRound): number {
            let index = utils.MathUtils.getUnsignedByte(byte + utils.MathUtils.getUnsignedByte(cbSendRound));
            var cbMap = utils.MathUtils.getUnsignedByte(m_cbSendByteMap[index]);
            return cbMap;
        }

        MapRecvByte(byte, cbRecvRound): number {
            var cbMap = m_cbRecvByteMap[utils.MathUtils.getUnsignedByte(byte)] - cbRecvRound;
            return cbMap = utils.MathUtils.getUnsignedByte(cbMap);
        }

        //加密数据
        EncryptBuffer(buffer: utils.ByteArray, wSize: number) {
            // 变量定义
            let wDataSize = wSize
            let cbCheckCode = 0;

            do {
                //偏移前置
                buffer.position(0);

                // 调整长度(DWORD的整数倍)
                var wEncryptSize = wDataSize - df.Len_Tcp_Info;
                var wSnapCount = 0;

                if (wEncryptSize % 4 != 0) {
                    wSnapCount = 4 - wEncryptSize % 4;
                    utils.Memory.memset(buffer, 0, wSnapCount, df.Len_Tcp_Info + wEncryptSize);
                }

                // 映射字节
                for (var i = df.Len_Tcp_Info; i < wDataSize; i++) {
                    //校验字段
                    cbCheckCode += buffer.getByteArray().bytes[i];
                    //防止字节溢出
                    cbCheckCode = utils.MathUtils.getUnsignedByte(cbCheckCode)

                    //字节操作
                    buffer.getByteArray().bytes[i] = this.MapSendByte(buffer.getByteArray().bytes[i], this.m_cbSendRound);
                    this.m_cbSendRound += 3;
                    this.m_cbSendRound = utils.MathUtils.getUnsignedByte(this.m_cbSendRound);
                }

                cbCheckCode = ~cbCheckCode + 1;
                cbCheckCode = utils.MathUtils.getUnsignedByte(cbCheckCode);

                // 创建密钥
                let dwXorKey = this.m_dwSendXorKey;
                if (this.m_dwSendPacketCount == 0) {
                    dwXorKey = Math.floor(Math.random() * 0xFFFF);

                    // 映射种子
                    dwXorKey = this.SeedRandMap(utils.MathUtils.getUnsignedWORD(dwXorKey));
                    var value = this.SeedRandMap(utils.MathUtils.getUnsignedWORD(dwXorKey >> 16));
                    dwXorKey |= utils.MathUtils.getUnsignedDWORD(value) << 16;
                    dwXorKey = utils.MathUtils.getUnsignedDWORD(dwXorKey)
                    dwXorKey ^= g_dwPacketKey;
                    dwXorKey = utils.MathUtils.getUnsignedDWORD(dwXorKey)
                    this.m_dwSendXorKey = dwXorKey;
                    this.m_dwRecvXorKey = dwXorKey;
                }

                //记录偏移
                buffer.position(df.Len_Tcp_Info);
                let offset0 = df.Len_Tcp_Info;

                //变量定义
                let pdwXor = 0
                let pwSeed = 0;
                var wEncryptCount = (wEncryptSize + wSnapCount) / 4;

                //加密数据
                for (var i = 0; i < wEncryptCount; i++) {
                    buffer.position(offset0);
                    pdwXor = buffer.Pop_DWORD();
                    offset0 += 4;

                    //字节操作
                    pdwXor ^= dwXorKey;
                    pdwXor = utils.MathUtils.getUnsignedDWORD(pdwXor);

                    //加密字节
                    var temp = new utils.ByteArray();
                    temp.Append_INT(pdwXor);
                    utils.Memory.CopyMemory(buffer, temp, 4, offset0 - 4, 0);

                    temp.position(0);
                    pwSeed = temp.Pop_WORD();
                    dwXorKey = this.SeedRandMap(pwSeed);

                    pwSeed = temp.Pop_WORD();
                    dwXorKey |= (this.SeedRandMap(pwSeed)) << 16;
                    dwXorKey = utils.MathUtils.getUnsignedDWORD(dwXorKey);

                    dwXorKey ^= g_dwPacketKey;
                    dwXorKey = utils.MathUtils.getUnsignedDWORD(dwXorKey);
                    //console.log(`dwXorKey ========================${dwXorKey}`);
                    
                }

                //插入密钥
                if (this.m_dwSendPacketCount == 0) {
                    //包头内容
                    let temp = new utils.ByteArray();
                    utils.Memory.CopyMemory(temp, buffer, df.Len_Tcp_Head, 0, 0);

                    //插入秘钥
                    let temp1 = new utils.ByteArray();
                    temp1.Append_DWORD(this.m_dwSendXorKey)
                    utils.Memory.CopyMemory(temp1, buffer, wSize - df.Len_Tcp_Head, 4, df.Len_Tcp_Head);

                    //组合数据
                    buffer.clear();
                    utils.Memory.CopyMemory(buffer, temp, df.Len_Tcp_Head, 0, 0);
                    utils.Memory.CopyMemory(buffer, temp1, temp1.getLength(), df.Len_Tcp_Head, 0);

                    //引用置空
                    temp = null;
                    temp1 = null;

                    //组合长度
                    wDataSize += 4;
                }

                //设置变量
                this.m_dwSendPacketCount++;
                this.m_dwSendXorKey = dwXorKey;
            } while (false)

            return [VER_SOCKET, cbCheckCode, wDataSize];
        }

        //解密数据
        CrevasseBuffer(buffer: utils.ByteArray, wSize: number, offset: number = 0): boolean {
            // 变量定义
            let wDataSize = wSize;

            do {
                //调整长度(DWORD的整数倍)
                var wSnapCount = 0;
                if (wDataSize % 4 != 0) {
                    wSnapCount = 4 - wDataSize % 4;
                    utils.Memory.memset(buffer, 0, wSnapCount, wDataSize);
                }

                //记录偏移
                let offset0 = df.Len_Tcp_Info;
                let offset1 = df.Len_Tcp_Info;

                //变量定义
                let pdwXor = 0;
                let pwSeed = 0;

                let dwXorKey = this.m_dwRecvXorKey;
                let wEncryptCount = (wDataSize + wSnapCount - 4) / 4;

                //解密数据
                for (var i = 0; i < wEncryptCount; i++) {
                    if ((i == (wEncryptCount - 1)) && (wSnapCount > 0)) {
                        var bytes = new utils.ByteArray();
                        bytes.Append_DWORD(this.m_dwRecvXorKey);
                        bytes.position(0);

                        var offset = 4 - wSnapCount;
                        utils.Memory.CopyMemory(buffer, bytes, wSnapCount, wDataSize, offset)
                    }

                    buffer.position(offset1);
                    pwSeed = buffer.Pop_WORD();
                    offset1 += 2;

                    dwXorKey = this.SeedRandMap(utils.MathUtils.getUnsignedWORD(pwSeed));

                    pwSeed = buffer.Pop_WORD();
                    offset1 += 2;

                    dwXorKey |= (this.SeedRandMap(pwSeed)) << 16;
                    dwXorKey = utils.MathUtils.getUnsignedDWORD(dwXorKey);
                    dwXorKey ^= g_dwPacketKey;
                    dwXorKey = utils.MathUtils.getUnsignedDWORD(dwXorKey);

                    buffer.position(offset0);
                    pdwXor = buffer.Pop_DWORD();
                    offset0 += 4;

                    pdwXor ^= this.m_dwRecvXorKey;
                    pdwXor = utils.MathUtils.getUnsignedDWORD(pdwXor);

                    let temp = new utils.ByteArray();
                    temp.Append_DWORD(pdwXor);
                    utils.Memory.CopyMemory(buffer, temp, 4, offset0 - 4, 0);

                    this.m_dwRecvXorKey = dwXorKey;
                }

                //校验字节
                buffer.position(1);
                var cbCheckCode = utils.MathUtils.getUnsignedByte(buffer.Pop_Byte());
                for (var i = df.Len_Tcp_Info; i < wDataSize; i++) {
                    buffer.getByteArray().bytes[i] = this.MapRecvByte(buffer.getByteArray().bytes[i], this.m_cbRecvRound);
                    this.m_cbRecvRound += 3;
                    this.m_cbRecvRound = utils.MathUtils.getUnsignedByte(this.m_cbRecvRound);
                    cbCheckCode += buffer.getByteArray().bytes[i];
                    cbCheckCode = utils.MathUtils.getUnsignedByte(cbCheckCode);
                }

                egret.assert(cbCheckCode == 0);
                if (cbCheckCode != 0) return false;

            } while (false)

            return true;
        }
    }
}