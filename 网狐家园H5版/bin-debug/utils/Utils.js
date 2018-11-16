var utils;
(function (utils) {
    //数学库
    var MathUtils = (function () {
        function MathUtils() {
        }
        MathUtils.getUnsignedByte = function (byte) {
            //防止溢出 0-0xFF
            if (byte > 0xFF) {
                byte = byte % 0x0100;
            }
            if (byte < 0) {
                //负数转换成无符号BYTE 0-0xFF
                byte = byte % 0x0100 + 0x0100;
            }
            return byte;
        };
        MathUtils.getUnsignedWORD = function (word) {
            //防止溢出 0-0xFFFF
            if (word > 0xFFFF) {
                word = word % 0x00010000;
            }
            if (word < 0) {
                // 0-0xFFFF
                word = word % 0x00010000 + 0x00010000;
            }
            return word;
        };
        MathUtils.getUnsignedDWORD = function (dword) {
            //防止溢出 0-0xFFFFFFFF
            if (dword > 0xFFFFFFFF) {
                dword = dword % 0x100000000;
            }
            if (dword < 0) {
                // 0-0xFFFFFFFF
                dword = dword % 0x100000000 + 0x100000000;
            }
            return dword;
        };
        return MathUtils;
    }());
    utils.MathUtils = MathUtils;
    //字符库
    var StringUtils = (function () {
        function StringUtils() {
        }
        StringUtils.reverse = function (str) {
            var ret = "";
            for (var i = str.length - 1; i >= 0; i--) {
                ret += str[i];
            }
            return ret;
        };
        /**
         * 格式化字串 such as:1,000
         */
        StringUtils.formatNumberThousands = function (num) {
            var numStr = "" + num;
            var result = "";
            var times = 0;
            for (var i = numStr.length - 1; i >= 0; i--) {
                if (times > 0 && times % 3 == 0) {
                    result += ",";
                }
                result += numStr[i];
                times++;
            }
            result = StringUtils.reverse(result);
            return result;
        };
        /*
        * 生成机器码
        */
        StringUtils.getGUID = function () {
            return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        };
        //ArrayBuffer转字符串
        StringUtils.array2string = function (buffer) {
            return String.fromCharCode.apply(null, new Uint16Array(buffer));
        };
        //字符串转字符串ArrayBuffer
        StringUtils.string2array = function (str) {
            var buf = new ArrayBuffer(str.length * 2); // 每个字符占用2个字节
            var bufView = new Uint16Array(buf);
            for (var i = 0, strLen = str.length; i < strLen; i++) {
                bufView[i] = str.charCodeAt(i);
            }
            return buf;
        };
        /**
         * 获取字符宽度配置
         */
        StringUtils.getSystemConfig = function (fontsize) {
            var config = {
                upperEnSize: 0,
                cnSize: 0,
                lowerEnSize: 0,
                numSize: 0
            };
            var tmpEN = new eui.Label("A");
            tmpEN.size = fontsize;
            var tmpCN = new eui.Label("网");
            tmpCN.size = fontsize;
            var tmpen = new eui.Label("a");
            tmpen.size = fontsize;
            var tmpNu = new eui.Label("2");
            tmpNu.size = fontsize;
            config.upperEnSize = tmpEN.width;
            config.cnSize = tmpCN.width;
            config.lowerEnSize = tmpen.width;
            config.numSize = tmpNu.width;
            return config;
        };
        StringUtils.getConfig = function (font, fontsize) {
            var config = {
                upperEnSize: 0,
                cnSize: 0,
                lowerEnSize: 0,
                numSize: 0
            };
            var tmpEN = new eui.Label("A");
            tmpEN.size = fontsize;
            tmpEN.fontFamily = font;
            var tmpCN = new eui.Label("网");
            tmpCN.size = fontsize;
            tmpCN.fontFamily = font;
            var tmpen = new eui.Label("a");
            tmpen.size = fontsize;
            tmpen.fontFamily = font;
            var tmpNu = new eui.Label("2");
            tmpNu.size = fontsize;
            tmpNu.fontFamily = font;
            config.upperEnSize = tmpEN.width;
            config.cnSize = tmpCN.width;
            config.lowerEnSize = tmpen.width;
            config.numSize = tmpNu.width;
            return config;
        };
        StringUtils.clipByConfig = function (szText, maxWidth, config) {
            if ((null == config) || (szText.length == 0) || (maxWidth == 0))
                return szText;
            //当前计算宽度
            var width = 0;
            //截断结果
            var szResult = "...";
            //完成判断
            var bOK = false;
            var i = 0;
            var endwidth = 3 * config.numSize;
            while (true) {
                var byte = szText.charCodeAt(i);
                if (byte == null || isNaN(byte)) {
                    break;
                }
                if (byte > 128) {
                    if (width <= maxWidth - endwidth) {
                        width = width + config.cnSize;
                        i += 3;
                    }
                    else {
                        bOK = true;
                        break;
                    }
                }
                else if (byte != 32) {
                    if (width <= maxWidth - endwidth) {
                        if (Number('A') <= byte && byte <= Number('Z')) {
                            width = width + config.upperEnSize;
                        }
                        else if (Number('a') <= byte && byte <= Number('z')) {
                            width = width + config.lowerEnSize;
                        }
                        else {
                            width = width + config.numSize;
                        }
                        i = i + 1;
                    }
                    else {
                        bOK = true;
                        break;
                    }
                }
                else {
                    i++;
                }
            }
            if (i != 0) {
                if (bOK) {
                    var sub = szText.substr(0, i);
                    szResult = sub + szResult;
                }
                else {
                    szResult = szText;
                }
            }
            return szResult;
        };
        return StringUtils;
    }());
    utils.StringUtils = StringUtils;
    /*********************************************************************************** *
                                   全局函数
    *********************************************************************************** */
    /**打印日志 */
    function LOG(message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        if (df.CONSOLE_SWITCH) {
            console.log.apply(console, [message].concat(optionalParams));
        }
    }
    utils.LOG = LOG;
    /**构造对象
     * 泛型
     */
    function createInstance(c) {
        return new c();
    }
    utils.createInstance = createInstance;
    /**构造泛型数组
     * 一维数组
     */
    function allocArray(dimension, instance) {
        var arr = new Array();
        for (var i = 0; i < dimension; i++) {
            arr[i] = utils.createInstance(instance);
        }
        return arr;
    }
    utils.allocArray = allocArray;
    /**
     * 构造泛型数组
     * 二维数组
     * eg: alloc2Array<Number>(2,4,Number)  [2][4]
     * alloc2Array<tagWeaveItem>(2,4,tagWeaveItem) [2][4]
     */
    function alloc2Array(dimension, count, instance) {
        //let arr: T[] = [];
        var arr = new Array();
        for (var i = 0; i < dimension; i++) {
            arr[i] = [];
            for (var j = 0; j < count; j++) {
                arr[i][j] = utils.createInstance(instance);
            }
        }
        return arr;
    }
    utils.alloc2Array = alloc2Array;
    /**
     * 构造数组
     * 三维数组
     * eg: alloc2Array<number>(2,4,4)  [2][4][4]
     */
    function alloc3Array(dimension, count, count1, instance) {
        var arr = [];
        for (var i = 0; i < dimension; i++) {
            arr[i] = [];
            for (var j = 0; j < count; j++) {
                arr[i][j] = [];
                for (var k = 0; k < count1; k++) {
                    arr[i][j][k] = utils.createInstance(instance);
                }
            }
        }
        return arr;
    }
    utils.alloc3Array = alloc3Array;
    /**
    * 版本值
    */
    function PROCESS_VERSION(PRODUCT_VER, cbMainVer, cbSubVer, cbBuildVer) {
        egret.assert(PRODUCT_VER > 0);
        var version = 0;
        cbMainVer = MathUtils.getUnsignedByte(cbMainVer);
        cbSubVer = MathUtils.getUnsignedByte(cbSubVer);
        cbBuildVer = MathUtils.getUnsignedByte(cbBuildVer);
        version = PRODUCT_VER << 24;
        version += cbMainVer << 16;
        version += cbSubVer << 8;
        version += cbBuildVer;
        version = MathUtils.getUnsignedDWORD(version);
        return version;
    }
    utils.PROCESS_VERSION = PROCESS_VERSION;
    function removeFromParent(target) {
        egret.assert(null != target.parent);
        if (null == target.parent) {
            return;
        }
        target.parent.removeChild(target);
    }
    utils.removeFromParent = removeFromParent;
    /**基于矩形的碰撞检测*/
    function hitTest(obj1, obj2) {
        var rect1 = obj1.getBounds();
        var rect2 = obj2.getBounds();
        rect1.x = obj1.x;
        rect1.y = obj1.y;
        rect2.x = obj2.x;
        rect2.y = obj2.y;
        return rect1.intersects(rect2);
    }
    utils.hitTest = hitTest;
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    function createBitmapByName(name, rect) {
        // console.log("name :"+ name);
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        if (rect) {
            texture.$bitmapX = rect.x;
            texture.$bitmapY = rect.y;
            texture.$bitmapWidth = rect.width;
            texture.$bitmapHeight = rect.height;
        }
        result.texture = texture;
        return result;
    }
    utils.createBitmapByName = createBitmapByName;
    function createTextureByName(name, rect) {
        var texture = RES.getRes(name);
        if (null == texture)
            return null;
        if (rect) {
            texture.$bitmapX = rect.x;
            texture.$bitmapY = rect.y;
            texture.$bitmapWidth = rect.width;
            texture.$bitmapHeight = rect.height;
        }
        return texture;
    }
    utils.createTextureByName = createTextureByName;
    /*
    *设置锚点
    */
    function setAnchorPoint(object, x, y) {
        if ((object != null) && (x >= 0) && (y >= 0)) {
            object.anchorOffsetX = x;
            object.anchorOffsetY = y;
            return object;
        }
        return object;
    }
    utils.setAnchorPoint = setAnchorPoint;
    /*
    *设置锚点为中心
    */
    function setAnchorCenter(object) {
        if (object != null) {
            return this.setAnchorPoint(object, object.width / 2, object.height / 2);
        }
        return null;
    }
    utils.setAnchorCenter = setAnchorCenter;
    /*
    *设置锚点为左上角
    */
    function setAnchorLeftTop(object) {
        if (object != null) {
            return this.setAnchorPoint(object, 0, 0);
        }
        return null;
    }
    utils.setAnchorLeftTop = setAnchorLeftTop;
    /*
    *设置锚点为上中心
    */
    function setAnchorMidTop(object) {
        if (object != null) {
            return this.setAnchorPoint(object, object.width / 2, 0);
        }
        return null;
    }
    utils.setAnchorMidTop = setAnchorMidTop;
    /**
     * 设置锚点为左中心
     */
    function setAnchorLeftMid(object) {
        if (object != null) {
            return this.setAnchorPoint(object, 0, object.height / 2);
        }
        return null;
    }
    utils.setAnchorLeftMid = setAnchorLeftMid;
    /**
     * 设置锚点为右中心
     */
    function setAnchorRightMid(object) {
        if (object != null) {
            return this.setAnchorPoint(object, object.width, object.height / 2);
        }
        return null;
    }
    utils.setAnchorRightMid = setAnchorRightMid;
    /*
    *设置锚点为下中心
    */
    function setAnchorMidBottom(object) {
        if (object != null) {
            return this.setAnchorPoint(object, object.width / 2, object.height);
        }
        return null;
    }
    utils.setAnchorMidBottom = setAnchorMidBottom;
    /*
    *设置锚点为左下角
    */
    function setAnchorLeftBottom(object) {
        if (object != null) {
            return this.setAnchorPoint(object, 0, object.height);
        }
        return null;
    }
    utils.setAnchorLeftBottom = setAnchorLeftBottom;
    /*
    *设置锚点为右上角
    */
    function setAnchorRightTop(object) {
        if (object != null) {
            return this.setAnchorPoint(object, object.width, 0);
        }
        return null;
    }
    utils.setAnchorRightTop = setAnchorRightTop;
    /*
    *设置锚点为右下角
    */
    function setAnchorRightBottom(object) {
        if (object != null) {
            return this.setAnchorPoint(object, object.width, object.height);
        }
        return null;
    }
    utils.setAnchorRightBottom = setAnchorRightBottom;
})(utils || (utils = {}));
