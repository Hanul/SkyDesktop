SkyDesktop.TabGroup = CLASS({
	
	preset : () => {
		return TABLE;
	},
	
	params : () => {
		return {
			style : {
				height : '100%',
				backgroundColor : BROWSER_CONFIG.SkyDesktop !== undefined && BROWSER_CONFIG.SkyDesktop.theme === 'dark' ? '#333' : '#ccc'
			}
		};
	},

	init : (inner, self, params) => {
		//OPTIONAL: params
		//OPTIONAL: params.homeTab
		//OPTIONAL: params.tabs
		
		let homeTab;
		
		if (params !== undefined) {
			homeTab = params.homeTab;
		}
		
		let tabTitles = [];
		let tabs = [];
		
		let activeTabIndex = -1;
		
		let clearBoth = CLEAR_BOTH();
		
		let tabTitleGroup;
		TR({
			c : tabTitleGroup = TD({
				style : {
					height : 27
				}
			})
		}).appendTo(self);
		
		let content;
		TR({
			c : content = TD({
				c : homeTab
			})
		}).appendTo(self);
		
		let activeTab = self.activeTab = (tabIndex) => {
			
			activeTabIndex = tabIndex;
			
			EACH(tabTitles, (tabTitle) => {
				tabTitle.addStyle({
					backgroundColor : 'transparent'
				});
			});
			
			EACH(tabs, (tab) => {
				tab.hide();
			});
			
			tabTitles[tabIndex].addStyle({
				backgroundColor : BROWSER_CONFIG.SkyDesktop !== undefined && BROWSER_CONFIG.SkyDesktop.theme === 'dark' ? '#000' : '#fff'
			});
			
			tabs[tabIndex].show();
		};
		
		let removeTab = self.removeTab = (tabIndex) => {
			
			tabTitles[tabIndex].remove();
			tabTitles.splice(tabIndex, 1);
			
			tabs[tabIndex].remove();
			tabs.splice(tabIndex, 1);
			
			if (tabIndex <= activeTabIndex) {
				
				if (activeTabIndex - 1 >= 0) {
					activeTab(activeTabIndex - 1);
				} else if (tabs.length > 0) {
					activeTab(0);
				} else {
					activeTabIndex = -1;
				}
			}
		};
		
		let addTab = self.addTab = (tab) => {
			
			let tabTitle;
			let originColor;
			
			tabTitleGroup.append(tabTitle = UUI.BUTTON_H({
				style : {
					padding : '5px 10px',
					flt : 'left',
					cursor : 'default'
				},
				icon : tab.getIcon(),
				spacing : 5,
				title : [tab.getTitle(), UUI.ICON_BUTTON({
					style : {
						marginLeft : 10,
						color : BROWSER_CONFIG.SkyDesktop !== undefined && BROWSER_CONFIG.SkyDesktop.theme === 'dark' ? '#444' : '#ccc'
					},
					icon : FontAwesome.GetIcon('times'),
					on : {
						mouseover : (e, self) => {
							self.addStyle({
								color : BROWSER_CONFIG.SkyDesktop !== undefined && BROWSER_CONFIG.SkyDesktop.theme === 'dark' ? '#666' : '#999'
							});
						},
						mouseout : (e, self) => {
							self.addStyle({
								color : BROWSER_CONFIG.SkyDesktop !== undefined && BROWSER_CONFIG.SkyDesktop.theme === 'dark' ? '#444' : '#ccc'
							});
						},
						tap : () => {
							removeTab(FIND({
								array : tabs,
								value : tab
							}));
						}
					}
				})],
				on : {
					mouseover : () => {
						
						if (activeTabIndex !== FIND({
							array : tabs,
							value : tab
						})) {
							
							tabTitle.addStyle({
								backgroundColor : BROWSER_CONFIG.SkyDesktop !== undefined && BROWSER_CONFIG.SkyDesktop.theme === 'dark' ? '#003333' : '#AFCEFF'
							});
						}
					},
					mouseout : () => {
						
						if (activeTabIndex !== FIND({
							array : tabs,
							value : tab
						})) {
							
							tabTitle.addStyle({
								backgroundColor : 'transparent'
							});
						}
					},
					tap : () => {
						activeTab(FIND({
							array : tabs,
							value : tab
						}));
					}
				}
			}));
			
			tabTitleGroup.append(clearBoth);
			
			tabTitles.push(tabTitle);
			
			tab.on('iconchange', () => {
				tabTitle.setIcon(tab.getIcon());
			});
			
			tab.on('titlechange', () => {
				tabTitle.setTitle(tab.getTitle());
			});
			
			content.append(tab);
			
			tabs.push(tab);
			
			activeTab(tabs.length - 1);
		};
		
		if (params !== undefined && params.tabs !== undefined) {
			EACH(params.tabs, addTab);
		}
	}
});
