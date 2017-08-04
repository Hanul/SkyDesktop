SkyDesktop.Folder = CLASS({

	preset : () => {
		return UUI.BUTTON_H;
	},

	params : () => {
		
		return {
			style : {
				padding : 5,
				cursor : 'default'
			},
			listStyle : {
				marginLeft : 10
			},
			icon : IMG({
				src : SkyDesktop.R('folder.png')
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
	},
	
	init : (inner, self, params) => {
		//OPTIONAL: params
		//OPTIONAL: params.listStyle
		//OPTIONAL: params.isOpened
		
		let listStyle;
		let isOpened;
		
		if (params !== undefined) {
			listStyle = params.listStyle;
			isOpened = params.isOpened;
		}

		let list = UUI.LIST({
			style : listStyle
		});
		
		self.after(list);
		
		let open = self.open = () => {
			list.show();
		};
		
		let close = self.close = () => {
			list.hide();
		};
		
		if (isOpened !== true) {
			close();
		}
		
		self.on('tap', () => {
			if (list.checkIsShowing() === true) {
				close();
			} else {
				open();
			}
		});

		let addItem = self.addItem = (params) => {
			//REQUIRED: params
			//REQUIRED: params.key
			//REQUIRED: params.item
			//OPTIONAL: params.isFirst

			list.addItem(params);
		};

		if (params !== undefined && params.items !== undefined) {

			EACH(params.items, (item, key) => {
				addItem({
					key : key,
					item : item
				});
			});
		}

		let removeItem = self.removeItem = (key) => {
			//REQUIRED: key

			list.removeItem(key);
		};

		let removeAllItems = self.removeAllItems = () => {
			list.removeAllItems();
		};
	}
});
