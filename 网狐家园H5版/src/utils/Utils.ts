namespace utils {
    //数学库
    export class MathUtils {
        public static getUnsignedByte(byte): number {
            //防止溢出 0-0xFF
            if (byte > 0xFF) {
                byte = byte % 0x0100
            }
            if (byte < 0) {
                //负数转换成无符号BYTE 0-0xFF
                byte = byte % 0x0100 + 0x0100;
            }
            return byte
        }

        public static getUnsignedWORD(word): number {
            //防止溢出 0-0xFFFF
            if (word > 0xFFFF) {
                word = word % 0x00010000
            }
            if (word < 0) {
                // 0-0xFFFF
                word = word % 0x00010000 + 0x00010000;
            }
            return word;
        }

        public static getUnsignedDWORD(dword): number {
            //防止溢出 0-0xFFFFFFFF
            if (dword > 0xFFFFFFFF) {
                dword = dword % 0x100000000
            }
            if (dword < 0) {
                // 0-0xFFFFFFFF
                dword = dword % 0x100000000 + 0x100000000;
            }
            return dword;
        }
    }



    //字符库
    export class StringUtils {
        public static reverse(str: string): string {
            let ret: string = "";
            for (var i = str.length - 1; i >= 0; i--) {
                ret += str[i];
            }
            return ret;
        }

        /**
         * 格式化字串 such as:1,000
         */
        public static formatNumberThousands(num: number): string {
            let numStr: string = `${num}`;
            let result: string = "";
            let times: number = 0;
            for (var i = numStr.length - 1; i >= 0; i--) {
                if (times > 0 && times % 3 == 0) {
                    result += ",";
                }
                result += numStr[i];
                times++;
            }
            result = StringUtils.reverse(result)
            return result;
        }

        /*
        * 生成机器码
        */
        public static getGUID() {
            return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        }

        //ArrayBuffer转字符串
        public static array2string(buffer): string {
            return String.fromCharCode.apply(null, new Uint16Array(buffer));
        }

        //字符串转字符串ArrayBuffer
        public static string2array(str): ArrayBuffer {
            var buf = new ArrayBuffer(str.length * 2); // 每个字符占用2个字节
            var bufView = new Uint16Array(buf);
            for (var i = 0, strLen = str.length; i < strLen; i++) {
                bufView[i] = str.charCodeAt(i);
            }
            return buf;
        }

        /**
         * 获取字符宽度配置
         */
        public static getSystemConfig(fontsize: number) {
            var config =
                {
                    upperEnSize: 0,
                    cnSize: 0,
                    lowerEnSize: 0,
                    numSize: 0

                };

            var tmpEN = new eui.Label("A");
            tmpEN.size = fontsize;

            var tmpCN = new eui.Label("网")
            tmpCN.size = fontsize;

            var tmpen = new eui.Label("a")
            tmpen.size = fontsize;

            var tmpNu = new eui.Label("2")
            tmpNu.size = fontsize;

            config.upperEnSize = tmpEN.width;
            config.cnSize = tmpCN.width;
            config.lowerEnSize = tmpen.width;
            config.numSize = tmpNu.width;

            return config
        }

        public static getConfig(font: string, fontsize: number) {
            var config =
                {
                    upperEnSize: 0,
                    cnSize: 0,
                    lowerEnSize: 0,
                    numSize: 0

                };

            var tmpEN = new eui.Label("A");
            tmpEN.size = fontsize;
            tmpEN.fontFamily = font;

            var tmpCN = new eui.Label("网")
            tmpCN.size = fontsize;
            tmpCN.fontFamily = font;

            var tmpen = new eui.Label("a")
            tmpen.size = fontsize;
            tmpen.fontFamily = font;

            var tmpNu = new eui.Label("2")
            tmpNu.size = fontsize;
            tmpNu.fontFamily = font;

            config.upperEnSize = tmpEN.width;
            config.cnSize = tmpCN.width;
            config.lowerEnSize = tmpen.width;
            config.numSize = tmpNu.width;

            return config
        }

        public static clipByConfig(szText: string, maxWidth, config: any) {
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

                if (byte > 128) //汉字 3字节
                {
                    if (width <= maxWidth - endwidth) {
                        width = width + config.cnSize
                        i += 3
                    } else {
                        bOK = true
                        break
                    }
                } else if (byte != 32) {
                    if (width <= maxWidth - endwidth) {
                        if (Number('A') <= byte && byte <= Number('Z')) {
                            width = width + config.upperEnSize;
                        } else if (Number('a') <= byte && byte <= Number('z')) {
                            width = width + config.lowerEnSize;
                        } else {
                            width = width + config.numSize;
                        }
                        i = i + 1;
                    } else {
                        bOK = true;
                        break;
                    }
                } else {
                    i++;
                }
            }

            if (i != 0) {

                if (bOK) {
                    var sub = szText.substr(0, i);
                    szResult = sub + szResult
                } else {
                    szResult = szText;
                }
            }

            return szResult;
        }
    }



    /*********************************************************************************** *
                                   全局函数
    *********************************************************************************** */

    /**打印日志 */
    export function LOG(message?: any, ...optionalParams: any[]) {
        if (df.CONSOLE_SWITCH) {
            console.log(message, ...optionalParams);
        }
    }

    /**构造对象
     * 泛型
     */
    export function createInstance<T>(c: { new (): T; }): T {
        return new c();
    }

    /**构造泛型数组
     * 一维数组
     */
    export function allocArray<T>(dimension: number, instance: { new (): T; }): T[] {
        let arr: T[] = new Array<T>();
        for (let i = 0; i < dimension; i++) {
            arr[i] = utils.createInstance<T>(instance);
        }
        return arr;
    }

    /**
     * 构造泛型数组
     * 二维数组
     * eg: alloc2Array<Number>(2,4,Number)  [2][4]
     * alloc2Array<tagWeaveItem>(2,4,tagWeaveItem) [2][4]
     */

    export function alloc2Array<T>(dimension: number, count: number, instance: { new (): T; }): T[][] {
        //let arr: T[] = [];
        let arr: Array<Array<T>> = new Array<Array<T>>();

        for (let i = 0; i < dimension; i++) {
            arr[i] = [];
            for (let j = 0; j < count; j++) {
                arr[i][j] = utils.createInstance<T>(instance);
            }
        }

        return arr;
    }

    /** 
     * 构造数组
     * 三维数组
     * eg: alloc2Array<number>(2,4,4)  [2][4][4]
     */
    export function alloc3Array<T>(dimension: number, count: number, count1: number, instance: { new (): T; }): T[][][] {
        let arr: T[][][] = [];
        for (let i = 0; i < dimension; i++) {
            arr[i] = [];
            for (let j = 0; j < count; j++) {
                arr[i][j] = [];
                for (let k = 0; k < count1; k++) {
                    arr[i][j][k] = utils.createInstance<T>(instance);
                }
            }
        }

        return arr;
    }


    /**
    * 版本值
    */
    export function PROCESS_VERSION(PRODUCT_VER, cbMainVer, cbSubVer, cbBuildVer) {
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

    export function removeFromParent(target: egret.DisplayObject) {
        egret.assert(null != target.parent);
        if (null == target.parent) {
            return;
        }

        target.parent.removeChild(target);
    }


    /**基于矩形的碰撞检测*/
    export function hitTest(obj1: egret.DisplayObject, obj2: egret.DisplayObject): boolean {
        let rect1: egret.Rectangle = obj1.getBounds();
        let rect2: egret.Rectangle = obj2.getBounds();
        rect1.x = obj1.x;
        rect1.y = obj1.y;
        rect2.x = obj2.x;
        rect2.y = obj2.y;
        return rect1.intersects(rect2);
    }

    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    export function createBitmapByName(name: string, rect?: egret.Rectangle): egret.Bitmap {
        // console.log("name :"+ name);

        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name);
        if (rect) {
            texture.$bitmapX = rect.x;
            texture.$bitmapY = rect.y;
            texture.$bitmapWidth = rect.width;
            texture.$bitmapHeight = rect.height;
        }
        result.texture = texture;
        return result;
    }

    export function createTextureByName(name: string, rect?: egret.Rectangle): egret.Texture {
        let texture: egret.Texture = RES.getRes(name);

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


    /*
    *设置锚点
    */
    export function setAnchorPoint(object: egret.DisplayObject, x: number, y: number): egret.DisplayObject {
        if ((object != null) && (x >= 0) && (y >= 0)) {
            object.anchorOffsetX = x;
            object.anchorOffsetY = y;
            return object;
        }
        return object;
    }

    /*
    *设置锚点为中心
    */
    export function setAnchorCenter(object: egret.DisplayObject): egret.DisplayObject {
        if (object != null) {
            return this.setAnchorPoint(object, object.width / 2, object.height / 2);
        }

        return null;
    }
    /*
    *设置锚点为左上角
    */
    export function setAnchorLeftTop(object: egret.DisplayObject): egret.DisplayObject {
        if (object != null) {
            return this.setAnchorPoint(object, 0, 0);
        }

        return null;
    }
    /*
    *设置锚点为上中心
    */
    export function setAnchorMidTop(object: egret.DisplayObject): egret.DisplayObject {
        if (object != null) {
            return this.setAnchorPoint(object, object.width / 2, 0);

        }

        return null;
    }

    /**
     * 设置锚点为左中心
     */
    export function setAnchorLeftMid(object: egret.DisplayObject): egret.DisplayObject {
        if (object != null) {
            return this.setAnchorPoint(object, 0, object.height / 2);

        }

        return null;
    }

    /**
     * 设置锚点为右中心
     */
    export function setAnchorRightMid(object: egret.DisplayObject): egret.DisplayObject {
        if (object != null) {
            return this.setAnchorPoint(object, object.width, object.height / 2);

        }

        return null;
    }

    /*
    *设置锚点为下中心
    */
    export function setAnchorMidBottom(object: egret.DisplayObject): egret.DisplayObject {
        if (object != null) {
            return this.setAnchorPoint(object, object.width / 2, object.height);
        }
        return null;
    }

    /*
    *设置锚点为左下角
    */
    export function setAnchorLeftBottom(object: egret.DisplayObject): egret.DisplayObject {
        if (object != null) {
            return this.setAnchorPoint(object, 0, object.height);
        }
        return null;
    }

    /*
    *设置锚点为右上角
    */
    export function setAnchorRightTop(object: egret.DisplayObject): egret.DisplayObject {
        if (object != null) {
            return this.setAnchorPoint(object, object.width, 0);
        }
        return null;
    }

    /*
    *设置锚点为右下角
    */
    export function setAnchorRightBottom(object: egret.DisplayObject): egret.DisplayObject {
        if (object != null) {
            return this.setAnchorPoint(object, object.width, object.height);
        }
        return null;
    }
}