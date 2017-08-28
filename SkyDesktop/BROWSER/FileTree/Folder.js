SkyDesktop.Folder = CLASS({

	preset : () => {
		return UUI.BUTTON_H;
	},

	params : () => {
		
		return {
			style : {
				position : 'relative',
				marginLeft : 20,
				padding : '2px 5px',
				cursor : 'default'
			},
			listStyle : {
				marginLeft : 20
			},
			icon : IMG({
				src : SkyDesktop.R('folder.png')
			}),
			spacing : 5
		};
	},
	
	init : (inner, self, params) => {
		//OPTIONAL: params
		//OPTIONAL: params.listStyle
		//OPTIONAL: params.isOpened
		//OPTIONAL: params.path
		
		let listStyle;
		let isOpened;
		let path;
		
		if (params !== undefined) {
			listStyle = params.listStyle;
			isOpened = params.isOpened;
			path = params.path;
		}
		
		let load;
		
		let openListButton;
		self.append(openListButton = UUI.ICON_BUTTON({
			style : {
				position : 'absolute',
				left : -12,
				top : 3,
				color : BROWSER_CONFIG.SkyDesktop !== undefined && BROWSER_CONFIG.SkyDesktop.theme === 'dark' ? '#444' : '#ccc'
			},
			icon : FontAwesome.GetIcon('chevron-right'),
			on : {
				mouseover : (e, self) => {
					self.addStyle({
						color : BROWSER_CONFIG.SkyDesktop !== undefined && BROWSER_CONFIG.SkyDesktop.theme === 'dark' ? '#666' : '#999'
					});
					e.stop();
				},
				mouseout : (e, self) => {
					self.addStyle({
						color : BROWSER_CONFIG.SkyDesktop !== undefined && BROWSER_CONFIG.SkyDesktop.theme === 'dark' ? '#444' : '#ccc'
					});
					e.stop();
				},
				tap : (e) => {
					if (list.checkIsShowing() === true) {
						close();
					} else {
						open();
					}
					e.stop();
				}
			}
		}));
		
		let list = UUI.LIST({
			style : listStyle
		});
		
		self.after(list);
		
		let setLoad = self.setLoad = (_load) => {
			load = _load;
		};
		
		let open = self.open = () => {
			
			list.show();
			
			self.setIcon(IMG({
				src : SkyDesktop.R('folder-opened.png')
			}));
			
			openListButton.setIcon(FontAwesome.GetIcon('chevron-down'));
			openListButton.addStyle({
				left : -14,
				top : 1,
			});
			
			self.fireEvent('open');
		};
		
		let close = self.close = () => {
			
			list.hide();
			
			self.setIcon(IMG({
				src : SkyDesktop.R('folder.png')
			}));
			
			openListButton.setIcon(FontAwesome.GetIcon('chevron-right'));
			openListButton.addStyle({
				left : -12,
				top : 2,
			});
			
			self.fireEvent('close');
		};
		
		if (isOpened === true) {
			DELAY(() => {
				open();
			});
		} else {
			list.hide();
		}
		
		self.on('doubletap', () => {
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

			list.addItem(params);
			
			EVENT.fireAll('resize');
		};

		if (params !== undefined && params.items !== undefined) {

			EACH(params.items, (item, key) => {
				addItem({
					key : key,
					item : item
				});
			});
		}

		let getAllItems = self.getAllItems = () => {
			return list.getAllItems();
		};

		let removeItem = self.removeItem = (key) => {
			//REQUIRED: key

			list.removeItem(key);
		};

		let removeAllItems = self.removeAllItems = () => {
			list.removeAllItems();
		};
		
		let getPath = self.getPath = () => {
			return path;
		};
		
		let isSelected;
		
		self.on('mouseover', (e, self) => {
			if (isSelected !== true) {
				self.addStyle({
					backgroundColor : BROWSER_CONFIG.SkyDesktop !== undefined && BROWSER_CONFIG.SkyDesktop.theme === 'dark' ? '#003333' : '#AFCEFF'
				});
			}
		});
		
		self.on('mouseout', (e, self) => {
			if (isSelected !== true) {
				self.addStyle({
					backgroundColor : 'transparent'
				});
			}
		});
		
		let select = self.select = () => {
			self.addStyle({
				backgroundColor : BROWSER_CONFIG.SkyDesktop !== undefined && BROWSER_CONFIG.SkyDesktop.theme === 'dark' ? '#17344D' : '#A2C5FF'
			});
			isSelected = true;
		};
		
		let checkIsSelected = self.checkInSelected = () => {
			return isSelected;
		};
		
		let unselect = self.unselect = () => {
			self.addStyle({
				backgroundColor : 'transparent'
			});
			isSelected = false;
		};
	}
});
