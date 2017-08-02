SkyDesktopShowcase.Home = CLASS({

	preset : () => {
		return VIEW;
	},

	init : (inner, self) => {

		let wrapper = DIV({
			c : SkyDesktop.VerticalTabGroup({
				tabs : [SkyDesktop.Tab({
					c : 'test1'
				}), SkyDesktop.Tab({
					c : 'test2'
				})]
			})
		}).appendTo(BODY);

		inner.on('close', () => {
			wrapper.remove();
		});
	}
});
