SkyDesktop.ToolbarButton = CLASS({

	preset : () => {
		return UUI.BUTTON_H;
	},

	params : () => {
		
		return {
			style : {
				flt : 'left',
				padding : '5px 8px',
			},
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
		//REQUIRED: params
		//OPTIONAL: params.icon
		//OPTIONAL: params.title
		
		let icon = params.icon;
		let title = params.title;
		
		let hideTitle = self.hideTitle = () => {
			icon.addStyle({
				marginRight : 0
			});
			self.setTitle('');
		};
		
		let showTitle = self.showTitle = () => {
			icon.addStyle({
				marginRight : 5
			});
			self.setTitle(title);
		};
	}
});
