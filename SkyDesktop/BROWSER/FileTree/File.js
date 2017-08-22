SkyDesktop.File = CLASS({

	preset : () => {
		return UUI.BUTTON_H;
	},

	params : () => {
		
		return {
			style : {
				marginLeft : 20,
				padding : '2px 5px',
				cursor : 'default'
			},
			icon : IMG({
				src : SkyDesktop.R('file.png')
			}),
			spacing : 5,
			on : {
				mouseover : (e, self) => {
					self.addStyle({
						backgroundColor : BROWSER_CONFIG.SkyDesktop !== undefined && BROWSER_CONFIG.SkyDesktop.theme === 'dark' ? '#003333' : '#AFCEFF'
					});
				},
				mouseout : (e, self) => {
					self.addStyle({
						backgroundColor : 'transparent'
					});
				}
			}
		};
	},
	
	init : (inner, self, params) => {
		//OPTIONAL: params
		//OPTIONAL: params.path
		
		let path;
		
		if (params !== undefined) {
			path = params.path;
		}
		
		let getPath = self.getPath = () => {
			return path;
		};
	}
});
