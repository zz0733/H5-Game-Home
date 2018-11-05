/*
*欢迎界面
*预加载大厅资源
*加载服务信息
*进入登录场景
*/
namespace controller {
    export class WelComeController extends models.Controller implements df.IController, RES.PromiseTaskReporter {

        //构造
        public constructor() {
            super();

            //视图名称
            this.name = "WelComeController"

            //设置当前视图
            managers.FrameManager.getInstance().setRunningController(this);

            //初始场景
            this.createWelComeView();

            //注册触摸
            this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegan, this);
            this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
            this.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
        }

        /* controller生命周期
        *  viewWillAppear
        *  viewDidAppear 
        *  viewWillDisappear 
        *  viewDidDisappear
        *  dealloc 回收资源
        */
        viewWillAppear(animated: boolean): void {


        }

        viewDidAppear(animated: boolean): void {


        }

        viewWillDisappear(animated: boolean): void {


        }

        viewDidDisappear(animated: boolean): void {

        }

        dealloc(): void {
            this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegan, this);
            this.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
            this.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);

        }

        /**进入前台
        * applicationDidBecomeActive
        */
        applicationDidBecomeActive(event: any): void {


        }

        /**进入后台
        * applicationDidBecomeActive
        */
        applicationWillEnterForeground(event: any): void {


        }

        /**
         * 初始场景
         */
        private async createWelComeView() {
            //背景
            let sky = utils.createBitmapByName("background_png");
            this.addChild(sky);

            //Logo
            let logo = utils.createBitmapByName("logo_name_00_png");
            this.addChild(logo);
            utils.setAnchorCenter(logo)
            logo.x = 667;
            logo.y = 330;

            egret.Tween.get(logo, { loop: true })
                .to({ "alpha": 0.2 }, 2000)
                .to({ "alpha": 1.0 }, 2000)

            //copyright
            let copyright = utils.createBitmapByName("copyright_png");
            this.addChild(copyright);
            utils.setAnchorMidBottom(copyright)
            copyright.x = 667;
            copyright.y = 700;

            //加载提示
            let tips = new egret.TextField();
            tips.textColor = 0xffffff;
            tips.name = "tips";
            tips.textAlign = "center";
            tips.text = "资源加载中,请稍后...";
            tips.size = 24;
            utils.setAnchorCenter(tips)
            tips.x = 667;
            tips.y = 540;
            this.addChild(tips);

            let callback = () => {
                //切换场景
                managers.FrameManager.getInstance().replaceScene(new controller.LoginController(), true)
            }
            //loadingbar
            let loadingbar = new models.Loading(callback)
            loadingbar.direction = eui.Direction.LTR;
            loadingbar.skinName = skins.ProgressBarSkin_1;
            loadingbar.maximum = 1000;
            loadingbar.minimum = 0;
            loadingbar.name = "loading";
            loadingbar.value = 10;
            // loadingbar.labelDisplay.text = `${loadingbar.value}/${ loadingbar.maximum}`;
            // loadingbar.labelDisplay.textColor = 0xffffff
            // loadingbar.labelDisplay.size = 24;
            loadingbar.labelDisplay.visible = false;
            this.addChild(loadingbar)
            utils.setAnchorCenter(loadingbar);
            loadingbar.x = 667;
            loadingbar.y = 580;

            //加载大厅资源
            await this.loadPlazaResource();

            //获取登录信息
            this.httpGetLogonInfo().then(() => {
                loadingbar.finishLoading();
            });
        }

        /**
         * 预加载资源
         */
        private async loadPlazaResource() {
            try {
                await RES.loadGroup("preload", 0);
                await RES.loadGroup("Active", 0, this);
                await RES.loadGroup("Battle", 0, this);
                await RES.loadGroup("Benefit", 0, this);
                await RES.loadGroup("Chat", 0, this);
                await RES.loadGroup("CopyRight", 0, this);
                await RES.loadGroup("Dismiss", 0, this);
                await RES.loadGroup("GameList", 0, this);
                await RES.loadGroup("General", 0, this);
                await RES.loadGroup("GPS", 0, this);
                await RES.loadGroup("Head", 0, this);
                await RES.loadGroup("Logon", 0, this);
                await RES.loadGroup("MoreSub", 0, this);
                await RES.loadGroup("NewChat", 0, this);
                await RES.loadGroup("Option", 0, this);
                await RES.loadGroup("PlazaShare", 0, this);
                await RES.loadGroup("Rank", 0, this);
                await RES.loadGroup("Regist", 0, this);
                await RES.loadGroup("Reward", 0, this);
                await RES.loadGroup("RoomList", 0, this)
                await RES.loadGroup("Shop", 0, this)
                await RES.loadGroup("UserInfo", 0, this);
                await RES.loadGroup("Video", 0, this);
                await RES.loadGroup("GameInfo", 0, this);
            }
            catch (e) {
                console.error(e);
            }
        }

        /**
         * 进度回调
         */
        onProgress(current: number, total: number): void {
            //console.log(`current is ${current},total is ${total}`);
            var loadingbar = this.getChildByName("loading") as eui.ProgressBar;
            if (loadingbar.value + 1 <= loadingbar.maximum) {
                loadingbar.value += 1;
            }
        }

        /** 触摸事件
        * onTouchBegan
        * onTouchMove
        * onTouchEnd
       */
        private onTouchBegan(event: egret.TouchEvent) {
            console.log("onTouch Began");
        }

        private onTouchMove(event: egret.TouchEvent) {
            console.log("onTouch move");
        }

        private onTouchEnd(event: egret.TouchEvent) {
            console.log("onTouch end");
        }

        /**
         * 获取登录信息
         */
        public httpGetLogonInfo() {
            var tips = this.getChildByName("tips") as egret.TextField;
            tips.text = "加载登录信息中...";

            var loadingbar = this.getChildByName("loading") as eui.ProgressBar;

            return new Promise((resolve) => {
                this.ReLoadHttpInfo().then(() => {
                    //保存服务器信息
                    resolve();

                }).catch((err) => {
                    //获取本地信息
                    const localStoraget = JSON.parse(localStorage.getItem('LogonAccess'));
                    if (localStoraget.domin && localStoraget.port && localStoraget.webAddr) {
                        //保存最近登录信息
                        managers.TcpServiceCtrl.getInstance().m_DefaultServerInfo.domain = localStoraget.domin;
                        managers.TcpServiceCtrl.getInstance().m_DefaultServerInfo.port = localStoraget.port;
                        managers.TcpServiceCtrl.getInstance().m_DefaultServerInfo.webAddr = localStoraget.webAddr
                    } else {
                        managers.FrameManager.getInstance().showToast("登录信息获取失败");
                    }
                });
            });
        }

        /**
         * 获取登录信息
         */
        public ReLoadHttpInfo() {
            return new Promise((resolve, reject) => {

                const url = "http://service.foxuc.com/GetAppService.ashx?action=GetLogonServer";
                const params = "BaseVersion="+df.APP_VERSION+"&AppSource="+df.APP_SOURCE;

                let onCompleteHandler = (e: egret.Event) => {
                    console.log("请求成功");
                    //保存信息
                    let jsonData = JSON.parse(e.target.response);
                    if (null == jsonData){
                       console.log("json Error") ;
                    }else
                    {
                        jsonData = jsonData.Data;

                        if (!(jsonData.DomainGetLogon && jsonData.PortGetLogon && jsonData.WebAddress)) {
                             resolve();
                        }

                        managers.TcpServiceCtrl.getInstance().m_DefaultServerInfo.domain = jsonData.DomainGetLogon;
                        managers.TcpServiceCtrl.getInstance().m_DefaultServerInfo.port = Number(jsonData.PortGetLogon);
                        managers.TcpServiceCtrl.getInstance().m_DefaultServerInfo.webAddr = jsonData.WebAddress;

                        managers.TcpServiceCtrl.getInstance().URL_RECHARGE_CARD = jsonData.WebAddress+"/Ashx/ProService.ashx";
						managers.TcpServiceCtrl.getInstance().ZFB_CALLBACK_URL= jsonData.WebAddress+"/ZFB/App/notify_url.aspx";

                        //本地缓存
                        var session = {
                            'domin': "",  //域名
                            'port' : 0,   //端口
                            'webAddr':""  //web
                        };

                        session.domin = jsonData.DomainGetLogon;
                        session.port = Number(jsonData.PortGetLogon);
                        session.webAddr = jsonData.WebAddress;
                        localStorage.setItem('LogonAccess', JSON.stringify(session));
                    }
                    resolve();
                };

                let onErrorHandler = (e: egret.Event) => {
                    console.log("请求失败");
                    resolve();
                    //reject("获取接口失败！");
                }
                utils.HttpRequest.createHttpRequest(this, url, params, egret.HttpMethod.POST, onCompleteHandler, onErrorHandler);
            });
        }
    }
}