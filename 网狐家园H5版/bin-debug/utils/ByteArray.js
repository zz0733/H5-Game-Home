var utils;
(function (utils) {
    var TWO_PWR_16_DBL = 1 << 16;
    var TWO_PWR_24_DBL = 1 << 24;
    var TWO_PWR_32_DBL = TWO_PWR_16_DBL * TWO_PWR_16_DBL;
    /**
     * 自定义二进制数组
     * 读取和写入方法命名请根据服务器类型来
     */
    var ByteArray = (function () {
        function ByteArray() {
            this.bytearray = new egret.ByteArray();
            this.bytearray.endian = egret.Endian.LITTLE_ENDIAN;
        }
        ByteArray.prototype.getLength = function () {
            return this.bytearray ? this.bytearray.length : 0;
        };
        ByteArray.prototype.Append_DOUBLE = function (value) {
            if (this.bytearray)
                this.bytearray.writeDouble(value);
        };
        ByteArray.prototype.Append_BOOL = function (value) {
            if (this.bytearray)
                this.bytearray.writeBoolean(value);
        };
        ByteArray.prototype.Append_WORD = function (value) {
            if (this.bytearray)
                this.bytearray.writeUnsignedShort(value);
        };
        ByteArray.prototype.Append_Byte = function (value) {
            if (this.bytearray)
                this.bytearray.writeByte(value);
        };
        ByteArray.prototype.Append_Bytes = function (value, offset, len) {
            if (offset === void 0) { offset = 0; }
            if (len === void 0) { len = 0; }
            if (this.bytearray)
                this.bytearray.writeBytes(value, offset, len);
        };
        ByteArray.prototype.Append_DWORD = function (value) {
            if (this.bytearray)
                this.bytearray.writeUnsignedInt(value);
        };
        //strLength 字符数组长度，根据服务端给的头文件定义赋值
        //TCHAR 和 WCHAR 都是宽字节
        ByteArray.prototype.Append_UTF16 = function (value, strLength) {
            var buf = new ArrayBuffer(value.length * 2);
            var bufView = new Uint16Array(buf);
            for (var i = 0, strLen = value.length; i < strLen; i++) {
                bufView[i] = value.charCodeAt(i);
            }
            var newByte = new egret.ByteArray(bufView.buffer);
            this.Append_Bytes(newByte);
            for (var i = 0; i < (strLength - value.length) * 2; i++) {
                this.Append_Byte(0);
            }
        };
        // SCORE 和 LONGLONG 都是int64
        ByteArray.prototype.Append_SCORE = function (value) {
            var list = this.numberToInt64(value);
            for (var i = list.length - 1; i >= 0; i--) {
                if (this.bytearray)
                    this.bytearray.writeByte(list[i]);
            }
        };
        ByteArray.prototype.Append_LONGLONG = function (value) {
            var list = this.numberToInt64(value);
            for (var i = list.length - 1; i >= 0; i--) {
                if (this.bytearray)
                    this.bytearray.writeByte(list[i]);
            }
        };
        ByteArray.prototype.Append_LONG = function (value) {
            if (this.bytearray)
                this.bytearray.writeInt(value);
        };
        ByteArray.prototype.Append_INT = function (value) {
            if (this.bytearray)
                this.bytearray.writeInt(value);
        };
        ByteArray.prototype.getByteArray = function () {
            return this.bytearray;
        };
        ByteArray.prototype.Pop_DOUBLE = function () {
            return this.bytearray ? this.bytearray.readDouble() : 0;
        };
        ByteArray.prototype.Pop_BOOL = function () {
            return this.bytearray ? this.bytearray.readBoolean() : false;
        };
        ByteArray.prototype.Pop_WORD = function () {
            return this.bytearray ? this.bytearray.readUnsignedShort() : 0;
        };
        ByteArray.prototype.Pop_Byte = function () {
            return this.bytearray ? this.bytearray.readByte() : 0;
        };
        ByteArray.prototype.Pop_Bytes = function (value, offset, len) {
            if (offset === void 0) { offset = 0; }
            if (len === void 0) { len = 0; }
            this.bytearray ? this.bytearray.readBytes(value, offset, len) : 0;
        };
        ByteArray.prototype.Pop_DWORD = function () {
            return this.bytearray ? this.bytearray.readUnsignedInt() : 0;
        };
        //strLength 字符数组长度，根据服务端给的头文件定义赋值
        //TCHAR 和 WCHAR 宽字节 
        ByteArray.prototype.Pop_UTF16 = function (strLength) {
            if (this.bytearray) {
                var newbuffer = utils.Memory.newLitteEndianByteArray();
                utils.Memory.CopyMemory(newbuffer, this, strLength * 2, 0, this.bytearray.position);
                this.bytearray.position += strLength * 2;
                var byteArr = newbuffer.getByteArray();
                var str = String.fromCharCode.apply(null, new Uint16Array(byteArr.buffer));
                var strByte = utils.Memory.newLitteEndianByteArray();
                strByte.Append_Byte(0);
                strByte.Append_Byte(0);
                var strk = String.fromCharCode.apply(null, new Uint16Array(strByte.getByteArray().buffer));
                var strlength = str.length * 2;
                for (var i = 0; i < strlength; i++) {
                    str = str.replace(strk, "");
                }
                return str;
            }
            return "";
        };
        ByteArray.prototype.Pop_SCORE = function () {
            if (this.bytearray) {
                var low = this.bytearray.readInt();
                var high = this.bytearray.readInt();
                var num = high * TWO_PWR_32_DBL + low;
                if (num < 0) {
                    var div = 4294967296;
                    num = (div + num);
                }
                return num;
            }
            return 0;
        };
        ByteArray.prototype.Pop_LONGLONG = function () {
            if (this.bytearray) {
                var low = this.bytearray.readInt();
                var high = this.bytearray.readInt();
                var num = high * TWO_PWR_32_DBL + low;
                if (num < 0) {
                    var div = 4294967296;
                    num = (div + num);
                }
                return num;
            }
            return 0;
        };
        ByteArray.prototype.Pop_LONG = function () {
            return this.bytearray ? this.bytearray.readInt() : 0;
        };
        ByteArray.prototype.Pop_INT = function () {
            return this.bytearray ? this.bytearray.readInt() : 0;
        };
        ByteArray.prototype.clear = function () {
            if (this.bytearray) {
                this.bytearray.clear();
            }
        };
        ByteArray.prototype.position = function (offst) {
            if (this.bytearray) {
                this.bytearray.position = offst;
            }
        };
        ByteArray.prototype.getPosition = function () {
            return this.bytearray.position;
        };
        ByteArray.prototype.int64toNumber = function (bytes) {
            var sign = bytes[0] >> 7;
            var sum = 0;
            var digits = 1;
            for (var i = 0; i < 8; i++) {
                var value = bytes[7 - i];
                sum += (sign ? value ^ 0xFF : value) * digits;
                digits *= 0x100;
            }
            return sign ? -1 - sum : sum;
        };
        ByteArray.prototype.numberToInt64 = function (number) {
            var result = [];
            var sign = number < 0;
            if (sign)
                number = -1 - number;
            for (var i = 0; i < 8; i++) {
                var mod = number % 0x100;
                number = (number - mod) / 0x100;
                result[7 - i] = sign ? mod ^ 0xFF : mod;
            }
            return result;
        };
        return ByteArray;
    }());
    utils.ByteArray = ByteArray;
})(utils || (utils = {}));
