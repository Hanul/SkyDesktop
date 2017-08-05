SkyDesktop.Tab = CLASS({

	preset : () => {
		return DIV;
	},
	
	params : () => {
		return {
			style : {
				height : '100%',
				backgroundColor : BROWSER_CONFIG.SkyDesktop !== undefined && BROWSER_CONFIG.SkyDesktop.theme === 'dark' ? '#000' : '#fff',
				color : BROWSER_CONFIG.SkyDesktop !== undefined && BROWSER_CONFIG.SkyDesktop.theme === 'dark' ? '#fff' : '#000'
			}
		};
	},

	init : (inner, self, params) => {
		//OPTIONAL: params
		//OPTIONAL: params.icon
		//OPTIONAL: params.title
		//OPTIONAL: params.size
		
		let icon;
		let title;
		let size;
		
		if (params !== undefined) {
			icon = params.icon;
			title = params.title;
			size = params.size;
		}
		
		let setIcon = self.setIcon = (_icon) => {
			//REQUIRED: icon
			
			icon = _icon;
			
			self.fireEvent('iconchange');
		};
		
		let getIcon = self.getIcon = () => {
			return icon;
		};
		
		let setTitle = self.setTitle = (_title) => {
			//REQUIRED: title
			
			title = _title;
			
			self.fireEvent('titlechange');
		};
		
		let getTitle = self.getTitle = () => {
			return title;
		};
		
		let setSize = self.setSize = (_size) => {
			//REQUIRED: size
			
			size = _size;
		};
		
		let getSize = self.getSize = () => {
			return size;
		};
	}
});
