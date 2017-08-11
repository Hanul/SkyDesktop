SkyDesktop.Folder = CLASS({

	preset : () => {
		return UUI.BUTTON_H;
	},

	params : () => {
		
		return {
			style : {
				padding : '2px 5px',
				cursor : 'default'
			},
			listStyle : {
				marginLeft : 20
			},
			icon : IMG({
				src : SkyDesktop.R('folder.png')
			}),
			spacing : 5,
			on : {
				mouseover : (e, self) => {
					self.addStyle({
						backgroundColor : BROWSER_CONFIG.SkyDesktop !== undefined && BROWSER_CONFIG.SkyDesktop.theme === 'dark' ? '#003333' : '#AFCEFF'
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
			
			self.setIcon(IMG({
				src : SkyDesktop.R('folder-opened.png')
			}));
			
			self.fireEvent('open');
		};
		
		let close = self.close = () => {
			
			list.hide();
			
			self.setIcon(IMG({
				src : SkyDesktop.R('folder.png')
			}));
			
			self.fireEvent('close');
		};
		
		if (isOpened === true) {
			DELAY(() => {
				open();
			});
		} else {
			list.hide();
		}
		
		self.on('tap', () => {
			if (list.checkIsShowing() === true) {
				close();
			} else {
				open();
			}
		});
		
		self.on('remove', () => {
			DELAY(() => {
				list.remove();
			});
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
