SkyDesktop.Button = CLASS({

	preset : () => {
		return UUI.BUTTON_H;
	},

	params : () => {
		
		return {
			style : {
				flt : 'left',
				padding : '11px 21px',
				backgroundColor : '#e0e1e2',
				color : '#333',
				fontWeight : 'bold',
				borderRadius : 4
			},
			spacing : 10,
			on : {
				mouseover : (e, self) => {
					self.addStyle({
						backgroundColor : '#cacbcd'
					});
				},
				mouseout : (e, self) => {
					self.addStyle({
						backgroundColor : '#e0e1e2'
					});
				}
			}
		};
	}
});
