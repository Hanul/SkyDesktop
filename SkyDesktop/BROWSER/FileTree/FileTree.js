SkyDesktop.FileTree = CLASS({

	preset : () => {
		return UUI.LIST;
	},
	
	init : (inner, self) => {
		
		let addItem;
		OVERRIDE(self.addItem, (origin) => {
			
			addItem = self.addItem = (params) => {
				origin(params);
				
				EVENT.fireAll('resize');
			};
		});
	}
});
