/**
 * 游戏视图控制器
 */
namespace controller {
    export class GameController extends models.Controller implements df.IController {
        //构造
        private _gameModule: any;
        private _gameEngine: any;
        constructor(gameModule: any) {
            super();

            //视图名称
            this.name = "GameController"
            this._gameModule = gameModule;
            this.addEventListener(customEvent.CustomEvent.EVENT_ENTER_BACKGROUND, this.applicationWillEnterForeground, this);
            this.addEventListener(customEvent.CustomEvent.EVENT_BECOME_ACTIVE, this.applicationDidBecomeActive, this);
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
            this._gameEngine = this.createGameClient(this._gameModule);
        }

        viewWillDisappear(animated: boolean): void {


        }

        viewDidDisappear(animated: boolean): void {

        }

        dealloc(): void {
            this.removeEventListener(customEvent.CustomEvent.EVENT_ENTER_BACKGROUND, this.applicationWillEnterForeground, this);
            this.removeEventListener(customEvent.CustomEvent.EVENT_BECOME_ACTIVE, this.applicationDidBecomeActive, this);
        }

        private createGameClient(module: any): any {
            //构造游戏层
            let gameEngine = this.addChild(utils.createInstance<eui.UILayer>(this._gameModule));
            managers.TcpServiceCtrl.getInstance()._isAllowDispatch = true;
            return gameEngine;
        }


        /**进入前台
         * applicationDidBecomeActive
         */
        applicationDidBecomeActive(event: any): void {
            console.log("GameController 激活窗口");
            
            if (this._gameEngine && this._gameEngine.onInitEngine) {
                //this._gameEngine.onInitEngine();
            }


        }

        /**进入后台
        * applicationDidBecomeActive
        */
        applicationWillEnterForeground(event: any): void {
            console.log("GameController 进入后台");
            if (this._gameEngine && this._gameEngine.onResetEngine) {
               // this._gameEngine.onResetEngine();
            }
        }
    }

}