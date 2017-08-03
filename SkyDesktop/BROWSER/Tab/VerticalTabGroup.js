SkyDesktop.VerticalTabGroup = CLASS({
	
	preset : () => {
		return DIV;
	},
	
	params : () => {
		return {
			style : {
				height : '100%'
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
