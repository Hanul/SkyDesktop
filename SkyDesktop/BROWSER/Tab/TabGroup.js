SkyDesktop.TabGroup = CLASS({
	
	preset : () => {
		return DIV;
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
		
		let tabTitleGroup = DIV().appendTo(self);
		
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
								backgroundColor : '#003333'
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
			
			tab.on('titlechange', () => {
				tabTitle.empty();
				tabTitle.append(tab.getTitle());
			});
			
			self.append(tab);
			
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
