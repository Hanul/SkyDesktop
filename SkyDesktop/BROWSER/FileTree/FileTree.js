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

		let sortItems = () => {
			self.sortItems((a, b) => {
				if (a.checkIsInstanceOf(SkyDesktop.File) === true && b.checkIsInstanceOf(SkyDesktop.Folder) === true) {
					return 1;
				} else if (a.checkIsInstanceOf(SkyDesktop.Folder) === true && b.checkIsInstanceOf(SkyDesktop.File) === true) {
					return -1;
				} else {
					return a.getTitle().toLowerCase().localeCompare(b.getTitle().toLowerCase());
				}
			});
		};
		
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
				sortItems();
				
				EVENT.fireAll('resize');
			};
		});
		
		let removeItem;
		OVERRIDE(self.removeItem, (origin) => {
			
			removeItem = self.removeItem = (key) => {
				//REQUIRED: key
				
				origin(key);
				sortItems();
			};
		});
	}
});
