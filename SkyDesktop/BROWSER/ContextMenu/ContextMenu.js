SkyDesktop.ContextMenu = CLASS((cls) => {
	
	let menu;
	
	return {
		
		init : (inner, self, params) => {
			//REQUIRED: params
			//REQUIRED: params.e
			//OPTIONAL: params.c
			
			let e = params.e;
			let c = params.c;
			
			let tapEvent;
			
			if (menu !== undefined) {
				menu.remove();
			}
			
			menu = UUI.LIST({
				style : {
					zIndex : 999,
					position : 'fixed',
					left : e.getLeft(),
					top : e.getTop(),
					backgroundColor : '#F2F2F2',
					border : '1px solid #ccc',
					color : '#000'
				},
				c : c,
				on : {
					tap : (e) => {
						e.stop();
					},
					remove : () => {
						tapEvent.remove();
					}
				}
			}).appendTo(BODY);
			
			tapEvent = EVENT('tap', () => {
				menu.remove();
			});
		}
	};
});
