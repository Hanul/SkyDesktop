SkyDesktop.ContextMenuItem = CLASS({

	preset : () => {
		return UUI.BUTTON_H;
	},

	params : () => {
		
		return {
			style : {
				padding : '5px 15px',
				minWidth : 200
			},
			spacing : 10,
			on : {
				mouseover : (e, self) => {
					self.addStyle({
						backgroundColor : '#91C9F7'
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
