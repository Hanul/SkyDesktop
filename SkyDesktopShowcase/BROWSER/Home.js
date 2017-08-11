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
							title : '저장',
							on : {
								tap : () => {
									SkyDesktop.Noti('저장하였습니다.');
								}
							}
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
									2 : SkyDesktop.File({
										icon : IMG({
											src : SkyDesktopShowcase.R('home.png')
										}),
										title : '파일 1'
									}),
									3 : SkyDesktop.File({
										icon : IMG({
											src : SkyDesktopShowcase.R('home.png')
										}),
										title : '파일 1'
									}),
									4 : SkyDesktop.File({
										icon : IMG({
											src : SkyDesktopShowcase.R('home.png')
										}),
										title : '파일 1'
									}),
									5 : SkyDesktop.File({
										icon : IMG({
											src : SkyDesktopShowcase.R('home.png')
										}),
										title : '파일 1'
									}),
									6 : SkyDesktop.File({
										icon : IMG({
											src : SkyDesktopShowcase.R('home.png')
										}),
										title : '파일 1'
									}),
									7 : SkyDesktop.File({
										icon : IMG({
											src : SkyDesktopShowcase.R('home.png')
										}),
										title : '파일 1'
									}),
									8 : SkyDesktop.File({
										icon : IMG({
											src : SkyDesktopShowcase.R('home.png')
										}),
										title : '파일 1'
									}),
									9 : SkyDesktop.Folder({
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
									title : '탭 1',
									c : 'This is Test 1 Tab.'
								}), SkyDesktop.Tab({
									icon : IMG({
										src : SkyDesktopShowcase.R('buttons.png')
									}),
									title : '버튼들',
									c : [SkyDesktop.Button({
										title : '확인',
										on : {
											tap : () => {
												SkyDesktop.Confirm('확인하시겠습니까?', () => {
													SkyDesktop.Alert('확인하였습니다.');
												});
											}
										}
									}), SkyDesktop.Button({
										title : '취소',
										on : {
											tap : () => {
												SkyDesktop.Alert('취소하였습니다.');
											}
										}
									})]
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
