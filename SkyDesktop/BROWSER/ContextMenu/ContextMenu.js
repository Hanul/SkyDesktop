SkyDesktop.ContextMenu = CLASS((cls) => {
	
	let menu;
	
	return {
		
		preset : () => {
			return UUI.LIST;
		},
		
		params : () => {
			
			return {
				style : {
					zIndex : 999,
					position : 'fixed',
					backgroundColor : '#F2F2F2',
					border : '1px solid #ccc',
					color : '#000'
				},
				on : {
					tap : (e) => {
						e.stop();
					}
				}
			};
		},
		
		init : (inner, self, params) => {
			//REQUIRED: params
			//REQUIRED: params.e
			
			let e = params.e;
			
			if (menu !== undefined) {
				menu.remove();
			}
			
			menu = self;
			
			self.addStyle({
				left : e.getLeft(),
				top : e.getTop()
			});
			
			self.appendTo(BODY);
			
			let tapEvent = EVENT('tap', () => {
				menu.remove();
			});
			
			self.on('remove', () => {
				tapEvent.remove();
			});
		}
	};
});