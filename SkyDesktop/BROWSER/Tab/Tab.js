SkyDesktop.Tab = CLASS({

	preset : () => {
		return UUI.PANEL;
	},
	
	params : () => {
		return {
			style : {
				backgroundColor : '#999'
			}
		};
	},

	init : (inner, self, params) => {
		//OPTIONAL: params
		//OPTIONAL: params.size
		
		let size;
		
		if (params !== undefined) {
			size = params.size;
		}
		
		let setSize = self.setSize = (_size) => {
			//REQUIRED: size
			
			size = _size;
		};
		
		let getSize = self.getSize = () => {
			return size;
		};
	}
});
