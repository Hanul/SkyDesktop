SkyDesktopShowcase.Home = CLASS({

	preset : () => {
		return VIEW;
	},

	init : (inner, self) => {
		
		let wrapper = TABLE({
			style : {
				position : 'absolute',
				width : '100%',
				height : '100%'
			},
			c : [TR({
				c : TD({
					style : {
						height : 28
					},
					c : SkyDesktop.Toolbar({
						buttons : [SkyDesktop.ToolbarButton({
							icon : IMG({
								src : SkyDesktopShowcase.R('disk.png')
							}),
							title : '저장'
						}), SkyDesktop.ToolbarButton({
							icon : IMG({
								src : SkyDesktopShowcase.R('disk.png')
							}),
							title : '저장'
						}), SkyDesktop.ToolbarButton({
							icon : IMG({
								src : SkyDesktopShowcase.R('disk.png')
							}),
							title : '저장'
						}), SkyDesktop.ToolbarButton({
							icon : IMG({
								src : SkyDesktopShowcase.R('disk.png')
							}),
							title : '저장'
						}), SkyDesktop.ToolbarButton({
							icon : IMG({
								src : SkyDesktopShowcase.R('disk.png')
							}),
							title : '저장'
						})]
					})
				})
			}), TR({
				c : TD({
					c : SkyDesktop.HorizontalTabList({
						tabs : [SkyDesktop.Tab({
							size : 23,
							c : SkyDesktop.FileTree({
								items : {
									1 : SkyDesktop.File({
										icon : IMG({
											src : SkyDesktopShowcase.R('home.png')
										}),
										title : '파일 1'
									}),
									2 : SkyDesktop.Folder({
										title : '폴더 1',
										isOpened : true,
										items : {
											1 : SkyDesktop.File({
												title : '파일 2'
											})
										}
									})
								}
							})
						}), SkyDesktop.Tab({
							size : 77,
							c : SkyDesktop.TabGroup({
								tabs : [SkyDesktop.Tab({
									icon : IMG({
										src : SkyDesktopShowcase.R('home.png')
									}),
									title : 'Test 1',
									c : 'This is Test 1 Tab.'
								}), SkyDesktop.Tab({
									icon : IMG({
										src : SkyDesktopShowcase.R('home.png')
									}),
									title : 'Test 2',
									c : 'This is Test 2 Tab.'
								})]
							})
						})]
					})
				})
			})]
		}).appendTo(BODY);

		inner.on('close', () => {
			wrapper.remove();
		});
	}
});
