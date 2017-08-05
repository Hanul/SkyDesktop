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
		//OPTIONAL: params.tabs
		
		let tabTitles = [];
		let tabs = [];
		
		let activeTabIndex;
		
		let clearBoth = CLEAR_BOTH();
		
		let tabTitleGroup;
		TR({
			c : tabTitleGroup = TD({
				style : {
					height : 26
				}
			})
		}).appendTo(self);
		
		let content;
		TR({
			c : content = TD()
		}).appendTo(self);
		
		let addTab = self.addTab = (tab) => {
			
			let tabTitle;
			let originColor;
			
			let tabIndex = tabs.length;
			
			tabTitleGroup.append(tabTitle = UUI.BUTTON_H({
				style : {
					padding : '5px 10px',
					flt : 'left',
					cursor : 'default'
				},
				icon : tab.getIcon(),
				spacing : 5,
				title : tab.getTitle(),
				on : {
					mouseover : () => {
						
						if (activeTabIndex !== tabIndex) {
							
							tabTitle.addStyle({
								backgroundColor : BROWSER_CONFIG.SkyDesktop !== undefined && BROWSER_CONFIG.SkyDesktop.theme === 'dark' ? '#003333' : '#AFCEFF'
							});
						}
					},
					mouseout : () => {
						
						if (activeTabIndex !== tabIndex) {
							
							tabTitle.addStyle({
								backgroundColor : 'transparent'
							});
						}
					},
					tap : () => {
						activeTab(tabIndex);
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
			
			tab.hide();
		};
		
		if (params !== undefined && params.tabs !== undefined) {
			EACH(params.tabs, addTab);
		}
		
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
		
		activeTab(0);
	}
});
