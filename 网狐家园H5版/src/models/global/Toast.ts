/**
 * Toast提示
 */
namespace models
{
    export class Toast extends eui.UILayer{
         protected createChildren(): void {
             super.createChildren();

             this.name = "Toast";
             this.once(egret.Event.ADDED_TO_STAGE,this.onInitLayer,this);
         }

         private onInitLayer():void
         {
             this.touchEnabled = false;

             let toast = utils.createBitmapByName("game_horn_bg_png");
             utils.setAnchorMidBottom(toast);
             toast.name = "toast"
             this.addChild(toast);
             toast.x = 667;
             toast.y = 680;
         }

         public show(message:string,delayTime?:number):void
         {
             if (message.length)
             {
                let content = new eui.Label;
                content.text = message;
                //设置颜色等文本属性
                content.textColor = 0xFF0000;
                content.size = 22;
                content.lineSpacing = 24;
                content.textAlign = egret.HorizontalAlign.JUSTIFY;
                this.addChild(content);
                utils.setAnchorMidBottom(content);
                content.x = 667;
                content.y = 660;

                egret.Tween.get(this)
                .wait(1000)
                .to({x:0,y:1400},delayTime?delayTime:500)
                .call(()=>{
                    managers.FrameManager.getInstance().m_MainStage.removeChild(this);
                })
             }
         }
    }
}