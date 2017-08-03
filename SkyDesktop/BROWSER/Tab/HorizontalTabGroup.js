SkyDesktop.HorizontalTabGroup = CLASS({
	
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
		
		let clearBoth = CLEAR_BOTH();
		
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
					width : (self.getWidth() - (tabs.length - 1) * 10) * tab.getSize() / totalSize
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
						flt : 'left',
						width : 8,
						height : '100%',
						cursor : 'e-resize'
					},
					on : {
						touchstart : (e) => {
							
							let startLeft = e.getLeft();
							let beforeTabOriginWidth = beforeTab.getWidth();
							let tabOriginWidth = tab.getWidth();
							
							BODY.addStyle({
								cursor : 'e-resize'
							});
							
							if (touchmoveEvent !== undefined) {
								touchmoveEvent.remove();
							}
							
							touchmoveEvent = EVENT('touchmove', (e) => {
								let diff = e.getLeft() - startLeft;
								
								beforeTab.addStyle({
									width : beforeTabOriginWidth + diff
								});
								
								tab.addStyle({
									width : tabOriginWidth - diff
								});
							});
							
							if (touchendEvent !== undefined) {
								touchendEvent.remove();
							}
							
							touchendEvent = EVENT('touchend', () => {
								
								BODY.addStyle({
									cursor : 'auto'
								});
								
								beforeTab.setSize(beforeTab.getSize() * beforeTab.getWidth() / beforeTabOriginWidth);
								
								tab.setSize(tab.getSize() * tab.getWidth() / tabOriginWidth);
								
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
			
			tab.addStyle({
				flt : 'left',
				height : '100%'
			});
			
			self.append(tab);
			self.append(clearBoth);
			
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
