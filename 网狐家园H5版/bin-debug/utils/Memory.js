/**
 * 内存操作
 */
var utils;
(function (utils) {
    var Memory = (function () {
        function Memory() {
        }
        /**拷贝内存*/
        Memory.CopyMemory = function (dst, src, length, dst_offset, src_offset) {
            if (length === void 0) { length = 0; }
            if (dst_offset === void 0) { dst_offset = 0; }
            if (src_offset === void 0) { src_offset = 0; }
            var orignal_pos = src.getByteArray().position;
            src.getByteArray().position = src_offset;
            src.Pop_Bytes(dst.getByteArray(), dst_offset, length);
            src.getByteArray().position = orignal_pos;
        };
        /**设置内存字节流*/
        Memory.memset = function (dst, val, size, pos) {
            if (pos === void 0) { pos = 0; }
            var orignal_pos = dst.getByteArray().position;
            dst.getByteArray().position = pos;
            for (var i = 0; i < size; i++) {
                dst.Append_Byte(val);
            }
            dst.getByteArray().position = orignal_pos;
        };
        /**设置内存字节流通过内存字节流*/
        Memory.memsetByByteArray = function (dst, val, length, dst_offset, val_offset) {
            if (length === void 0) { length = 0; }
            if (dst_offset === void 0) { dst_offset = 0; }
            if (val_offset === void 0) { val_offset = 0; }
            var old_pos = dst.getByteArray().position;
            dst.getByteArray().position = dst_offset;
            var old_pos1 = val.getByteArray().position;
            val.getByteArray().position = val_offset;
            dst.Append_Bytes(val.getByteArray(), val_offset, length);
            val.getByteArray().position = old_pos1;
            dst.getByteArray().position = old_pos;
        };
        /**新建内存字节流*/
        Memory.newLitteEndianByteArray = function (pos) {
            var result = new utils.ByteArray();
            result.getByteArray().endian = egret.Endian.LITTLE_ENDIAN;
            result.position(pos ? pos : 0);
            return result;
        };
        return Memory;
    }());
    utils.Memory = Memory;
})(utils || (utils = {}));
