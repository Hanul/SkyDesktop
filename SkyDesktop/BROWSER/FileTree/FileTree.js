SkyDesktop.FileTree = CLASS({

	preset : () => {
		return UUI.LIST;
	},

	params : () => {
		
		return {
			style : {
				paddingBottom : 50
			}
		};
	},
	
	init : (inner, self, load) => {
		//REQUIRED: load
		
		let addItem;
		OVERRIDE(self.addItem, (origin) => {
			
			addItem = self.addItem = (params) => {
				//REQUIRED: params
				//REQUIRED: params.key
				//REQUIRED: params.item
				//OPTIONAL: params.isFirst
				
				let key = params.key;
				let item = params.item;
				
				if (item.checkIsInstanceOf(SkyDesktop.File) === true) {
					item.on('doubletap', () => {
						load(key);
					});
				}
				
				else if (item.checkIsInstanceOf(SkyDesktop.Folder) === true) {
					item.setLoad(load);
				}
				
				origin(params);
				
				EVENT.fireAll('resize');
			};
		});
	}
});
