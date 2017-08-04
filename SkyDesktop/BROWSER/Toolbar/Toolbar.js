SkyDesktop.Toolbar = CLASS({

	preset : () => {
		return UUI.V_CENTER;
	},

	params : () => {
		
		return {
			style : {
				backgroundColor : BROWSER_CONFIG.SkyDesktop !== undefined && BROWSER_CONFIG.SkyDesktop.theme === 'dark' ? '#666' : '#ccc',
				color : BROWSER_CONFIG.SkyDesktop !== undefined && BROWSER_CONFIG.SkyDesktop.theme === 'dark' ? '#fff' : '#000',
				height : '100%',
				borderBottom : '1px solid #999'
			}
		};
	},

	init : (inner, self, params) => {
		//OPTIONAL: params
		//OPTIONAL: params.buttons
		
		let buttons = [];
		
		let clearBoth = CLEAR_BOTH();
		
		let resize = () => {
			
			let totalWidth = 0;
			
			EACH(buttons, (button) => {
				button.showTitle();
			});
			
			EACH(buttons, (button) => {
				totalWidth += button.getWidth();
			});
			
			if (self.getWidth() < totalWidth) {
				EACH(buttons, (button) => {
					button.hideTitle();
				});
			}
		};
		
		let addButton = self.addButton = (button) => {
			
			self.append(button);
			self.append(clearBoth);
			
			buttons.push(button);
			
			resize();
		};
		
		if (params !== undefined && params.buttons !== undefined) {
			EACH(params.buttons, addButton);
		}
		
		self.on('show', resize);
		
		DELAY(resize);
		
		let resizeEvent = EVENT('resize', resize);
		
		self.on('remove', () => {
			resizeEvent.remove();
			resizeEvent = undefined;
		});
	}
});
