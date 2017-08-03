SkyDesktopShowcase.Home = CLASS({

	preset : () => {
		return VIEW;
	},

	init : (inner, self) => {

		let wrapper = DIV({
			style : {
				position : 'absolute',
				width : '100%',
				height : '100%'
			},
			c : SkyDesktop.HorizontalTabGroup({
				tabs : [SkyDesktop.Tab({
					size : 100,
					c : 'test1'
				}), SkyDesktop.Tab({
					size : 20,
					c : 'test2'
				})]
			})
		}).appendTo(BODY);

		inner.on('close', () => {
			wrapper.remove();
		});
	}
});
