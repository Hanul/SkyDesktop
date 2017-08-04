SkyDesktop.VerticalTabList = CLASS({
	
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
		
		let tabs = [];
		
		let resizeTabsSize = () => {
			
			let totalSize = 0;
			let noSizeCount = 0;
			
			EACH(tabs, (tab) => {
				if (tab.getSize() === undefined) {
					noSizeCount += 1;
				} else {
					totalSize += tab.getSize();
				}
				
				tab.addStyle({
					height : 0
				});
			});
			
			let avgSize = totalSize / (tabs.length - noSizeCount);
			
			totalSize += avgSize * noSizeCount;
			
			EACH(tabs, (tab) => {
				
				if (tab.getSize() === undefined) {
					tab.setSize(avgSize);
				}
				
				tab.addStyle({
					height : (self.getHeight() - (tabs.length - 1) * 10) * tab.getSize() / totalSize
				});
			});
		};
		
		let addTab = self.addTab = (tab) => {
			
			if (tabs.length > 0) {
				
				let beforeTab = tabs[tabs.length - 1];
				
				let touchmoveEvent;
				let touchendEvent;
				
				// create divider.
				self.append(DIV({
					style : {
						height : 8,
						cursor : 'n-resize'
					},
					on : {
						touchstart : (e) => {
							
							let startTop = e.getTop();
							let beforeTabOriginHeight = beforeTab.getHeight();
							let tabOriginHeight = tab.getHeight();
							
							BODY.addStyle({
								cursor : 'n-resize'
							});
							
							if (touchmoveEvent !== undefined) {
								touchmoveEvent.remove();
							}
							
							touchmoveEvent = EVENT('touchmove', (e) => {
								let diff = e.getTop() - startTop;
								
								if (beforeTabOriginHeight + diff < 100) {
									diff = 100 - beforeTabOriginHeight;
								}
								
								if (tabOriginHeight - diff < 100) {
									diff = tabOriginHeight - 100;
								}
								
								beforeTab.addStyle({
									height : beforeTabOriginHeight + diff
								});
								
								tab.addStyle({
									height : tabOriginHeight - diff
								});
							});
							
							if (touchendEvent !== undefined) {
								touchendEvent.remove();
							}
							
							touchendEvent = EVENT('touchend', () => {
								
								BODY.addStyle({
									cursor : 'auto'
								});
								
								beforeTab.setSize(beforeTab.getSize() * beforeTab.getHeight() / beforeTabOriginHeight);
								
								tab.setSize(tab.getSize() * tab.getHeight() / tabOriginHeight);
								
								touchmoveEvent.remove();
								touchmoveEvent = undefined;
								
								touchendEvent.remove();
								touchendEvent = undefined;
							});
							
							e.stop();
						}
					}
				}));
			}
			
			self.append(tab);
			
			tabs.push(tab);
			
			resizeTabsSize();
		};
		
		if (params !== undefined && params.tabs !== undefined) {
			EACH(params.tabs, addTab);
		}
		
		self.on('show', resizeTabsSize);
		
		let resizeEvent = EVENT('resize', resizeTabsSize);
		
		self.on('remove', () => {
			resizeEvent.remove();
			resizeEvent = undefined;
		});
	}
});
