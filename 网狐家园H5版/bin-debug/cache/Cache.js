/**
 * 用于数据缓存
 * http请求缓存
 */
var cache;
(function (cache) {
    var localization = (function () {
        function localization() {
            this._cache = {};
        }
        /**
         * http请求缓存 JSON 不加密
         */
        localization.prototype.saveCache = function (key, value) {
            this._cache[key] = value;
        };
        localization.prototype.updateCache = function (key, value) {
        };
        localization.prototype.removeCacheByKey = function (key) {
        };
        localization.prototype.getCacheByKey = function (key) {
            return this._cache[key];
        };
        return localization;
    }());
    cache.localization = localization;
})(cache || (cache = {}));
