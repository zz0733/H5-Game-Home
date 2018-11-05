namespace exp {
	export class WebView extends WebNode {

		private iframe:HTMLIFrameElement;
		public constructor() {
			super();

			this.iframe = document.createElement("iframe");

			this.bind(this.iframe);
		}

		private _src : string;
		public get src() : string {
			return this._src;
		}
		public set src(v : string) {
			this._src = v;

			this.iframe.src = v;
		}
		
	}
}