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
						backgroundColor : '#666',
						height : 20
					},
					c : DIV({
						c : 'test'
					})
				})
			}), TR({
				c : TD({
					c : SkyDesktop.HorizontalTabGroup({
						tabs : [SkyDesktop.Tab({
							size : 23,
							c : SkyDesktop.FileTree({
								items : {
									1 : SkyDesktop.File({
										icon : IMG({
											src : SkyDesktopShowcase.R('home.png')
										}),
										title : 'File 1'
									}),
									2 : SkyDesktop.Folder({
										title : 'Folder 1',
										isOpened : true,
										items : {
											1 : SkyDesktop.File({
												title : 'File 2'
											})
										}
									})
								}
							})
						}), SkyDesktop.Tab({
							size : 77,
							c : 'test2'
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
