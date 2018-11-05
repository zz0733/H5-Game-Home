/**
 * http封装
 */
var utils;
(function (utils) {
    var HttpRequest = /** @class */ (function () {
        /**
         * 构造
         */
        function HttpRequest() {
        }
        /**
         * 静态方法
         */
        HttpRequest.createHttpRequest = function (target, url, param, method, onCompleteHandler, onErrorHandler, onProgressHandler) {
            var instance = new HttpRequest();
            if (instance && instance.initHttpRequest(target, url, param, method, onCompleteHandler, onErrorHandler, onProgressHandler)) {
                return instance;
            }
            return null;
        };
        /**
         * @param url       请求地址
         * @param param     请求参数
         * @param method    请求方法
         * @param target    代理对象
         */
        HttpRequest.prototype.initHttpRequest = function (target, url, param, method, onCompleteHandler, onErrorHandler, onProgressHandler) {
            egret.assert(url.length > 0);
            egret.assert((method == egret.HttpMethod.GET) || (method == egret.HttpMethod.POST));
            if (url.length == 0)
                return false;
            if ((method != egret.HttpMethod.GET) && (method != egret.HttpMethod.POST))
                return false;
            this._onCompleteHandler = onCompleteHandler;
            this._onErrorHandler = onErrorHandler;
            this._onProgressHandler = onProgressHandler;
            this._target = target;
            this.m_Request = new egret.HttpRequest();
            this.m_Request.responseType = egret.HttpResponseType.TEXT;
            this.m_Request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
            if (method == egret.HttpMethod.POST) {
                this.m_Request.open(url, method);
                this.m_Request.send(param);
            }
            else {
                this.m_Request.open(url + param, method);
                this.m_Request.send();
            }
            this.m_Request.once(egret.Event.COMPLETE, onCompleteHandler, target);
            this.m_Request.once(egret.IOErrorEvent.IO_ERROR, onErrorHandler, target);
            if (null != onProgressHandler) {
                this.m_Request.once(egret.ProgressEvent.PROGRESS, onProgressHandler, target);
            }
            return true;
        };
        /**
         * 取消请求
         */
        HttpRequest.prototype.abort = function () {
            //移除监听
            this.m_Request.removeEventListener(egret.Event.COMPLETE, this._onCompleteHandler, this._target);
            this.m_Request.removeEventListener(egret.IOErrorEvent.IO_ERROR, this._onErrorHandler, this._target);
            this.m_Request.removeEventListener(egret.ProgressEvent.PROGRESS, this._onProgressHandler, this._target);
            //引用置空
            this._onCompleteHandler = null;
            this._onErrorHandler = null;
            this._onProgressHandler = null;
            this.m_Request.abort();
        };
        return HttpRequest;
    }());
    utils.HttpRequest = HttpRequest;
})(utils || (utils = {}));
