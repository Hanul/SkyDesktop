SkyDesktop.File = CLASS({

	preset : () => {
		return UUI.BUTTON_H;
	},

	params : () => {
		
		return {
			style : {
				padding : '5px 8px',
				cursor : 'default'
			},
			icon : IMG({
				src : SkyDesktop.R('file.png')
			}),
			spacing : 5,
			on : {
				mouseover : (e, self) => {
					self.addStyle({
						backgroundColor : '#003333'
					});
				},
				mouseout : (e, self) => {
					self.addStyle({
						backgroundColor : 'transparent'
					});
				}
			}
		};
	}
});
