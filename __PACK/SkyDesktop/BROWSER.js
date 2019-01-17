SkyDesktop.Button=CLASS({preset:()=>{return UUI.BUTTON_H},params:()=>{return{style:{padding:"11px 15px",backgroundColor:"#e0e1e2",color:"#333",fontWeight:"bold",borderRadius:4},spacing:10,on:{mouseover:(e,t)=>{t.addStyle({backgroundColor:"#cacbcd"})},mouseout:(e,t)=>{t.addStyle({backgroundColor:"#e0e1e2"})}}}},init:(e,t)=>{t.on("show",()=>{DELAY(()=>{t.resize()})})}}),SkyDesktop.LoadingBar=CLASS({init:(e,t,o)=>{let n=DIV({style:{position:"fixed",left:0,bottom:0,height:3,backgroundColor:o,zIndex:999999}}).appendTo(BODY);ANIMATE({node:n,keyframes:{from:{width:"0%"},to:{width:"50%"}},duration:.5});let i=DIV({style:{position:"fixed",left:0,bottom:0,height:3,backgroundColor:o,zIndex:999999}}).appendTo(BODY);t.done=(()=>{ANIMATE({node:i,keyframes:{from:{width:"0%"},to:{width:"100%"}},duration:.5},()=>{n.remove(),ANIMATE({node:i,keyframes:{from:{opacity:1},to:{opacity:0}},duration:.25},()=>{i.remove()})})})}}),SkyDesktop.Noti=METHOD({run:e=>{let t=UUI.PANEL({style:{zIndex:999,position:"fixed",right:10,bottom:10,backgroundColor:"#FFFFCC",color:"#333",borderRadius:5},contentStyle:{padding:"5px 10px"},c:e}).appendTo(BODY);UANI.SHOW_SLIDE_UP({node:t}),DELAY(2,()=>{UANI.HIDE_SLIDE_DOWN({node:t},t.remove)})}}),SkyDesktop.Alert=CLASS({preset:()=>{return UUI.ALERT},params:()=>{return{style:{zIndex:999,backgroundColor:"#fff",color:"#333",textAlign:"center",border:"1px solid #333",borderRadius:5,boxShadow:"0 0 5px rgba(0,0,0,0.3)",onDisplayResize:(e,t)=>{return e>300?{width:280}:{width:"90%"}}},contentStyle:{padding:20},buttonStyle:{borderTop:"1px solid #999",padding:"11px 0",backgroundColor:"#e0e1e2",color:"#333",fontWeight:"bold",borderRadius:"0 0 5px 5px"}}},init:(e,t)=>{t.getButton().on("mouseover",(e,t)=>{t.addStyle({backgroundColor:"#cacbcd"})}),t.getButton().on("mouseout",(e,t)=>{t.addStyle({backgroundColor:"#e0e1e2"})})}}),SkyDesktop.Confirm=CLASS({preset:()=>{return UUI.CONFIRM},params:()=>{return{style:{zIndex:999,backgroundColor:"#fff",color:"#333",textAlign:"center",border:"1px solid #333",borderRadius:5,boxShadow:"0 0 5px rgba(0,0,0,0.3)",onDisplayResize:(e,t)=>{return e>300?{width:280}:{width:"90%"}}},contentStyle:{padding:20},okButtonStyle:{flt:"left",borderTop:"1px solid #999",padding:"11px 0",backgroundColor:"#e0e1e2",color:"#333",fontWeight:"bold",width:"50%",borderRadius:"0 0 0 5px"},cancelButtonStyle:{flt:"right",marginLeft:-1,borderLeft:"1px solid #999",borderTop:"1px solid #999",padding:"11px 0",backgroundColor:"#e0e1e2",color:"#333",fontWeight:"bold",width:"50%",borderRadius:"0 0 5px 0"}}},init:(e,t)=>{t.getOkButton().on("mouseover",(e,t)=>{t.addStyle({backgroundColor:"#cacbcd"})}),t.getOkButton().on("mouseout",(e,t)=>{t.addStyle({backgroundColor:"#e0e1e2"})}),t.getCancelButton().on("mouseover",(e,t)=>{t.addStyle({backgroundColor:"#cacbcd"})}),t.getCancelButton().on("mouseout",(e,t)=>{t.addStyle({backgroundColor:"#e0e1e2"})})}}),SkyDesktop.Prompt=CLASS({preset:()=>{return UUI.PROMPT},params:()=>{return{style:{zIndex:999,backgroundColor:"#fff",color:"#333",textAlign:"center",border:"1px solid #333",borderRadius:5,boxShadow:"0 0 5px rgba(0,0,0,0.3)",onDisplayResize:(e,t)=>{return e>300?{width:280}:{width:"90%"}}},contentStyle:{padding:20,paddingBottom:10},formStyle:{padding:20,paddingTop:0},inputStyle:{borderTop:"1px solid #999",padding:8,border:"1px solid #999",borderRadius:4},okButtonStyle:{flt:"left",borderTop:"1px solid #999",padding:"11px 0",backgroundColor:"#e0e1e2",color:"#333",fontWeight:"bold",width:"50%",borderRadius:"0 0 0 5px"},cancelButtonStyle:{flt:"right",marginLeft:-1,borderLeft:"1px solid #999",borderTop:"1px solid #999",padding:"11px 0",backgroundColor:"#e0e1e2",color:"#333",fontWeight:"bold",width:"50%",borderRadius:"0 0 5px 0"}}},init:(e,t,o)=>{CHECK_IS_DATA(o)!==!0&&t.append(o),t.getOkButton().on("mouseover",(e,t)=>{t.addStyle({backgroundColor:"#cacbcd"})}),t.getOkButton().on("mouseout",(e,t)=>{t.addStyle({backgroundColor:"#e0e1e2"})}),t.getCancelButton().on("mouseover",(e,t)=>{t.addStyle({backgroundColor:"#cacbcd"})}),t.getCancelButton().on("mouseout",(e,t)=>{t.addStyle({backgroundColor:"#e0e1e2"})})}}),SkyDesktop.ContextMenu=CLASS(e=>{let t;return{preset:()=>{return UUI.LIST},params:()=>{return{style:{zIndex:999,position:"fixed",backgroundColor:"#F2F2F2",border:"1px solid #ccc",color:"#000"},on:{tap:e=>{e.stop()}}}},init:(e,o,n)=>{let i=n.e;void 0!==t&&t.remove(),t=o,o.addStyle({left:i.getLeft(),top:i.getTop()}),o.appendTo(BODY);let r=EVENT("tap",()=>{t.remove()}),c=EVENT("keydown",e=>{"Escape"===e.getKey()&&t.remove()});o.on("remove",()=>{r.remove(),c.remove()})},afterInit:(e,t)=>{t.getTop()+t.getHeight()>WIN_HEIGHT()&&t.addStyle({top:WIN_HEIGHT()-t.getHeight()})}}}),SkyDesktop.ContextMenuItem=CLASS({preset:()=>{return DIV},params:()=>{return{style:{padding:"5px 15px",minWidth:200,cursor:"pointer"},on:{mouseover:(e,t)=>{t.addStyle({backgroundColor:"#91C9F7"})},mouseout:(e,t)=>{t.addStyle({backgroundColor:"transparent"})}}}},init:(e,t,o)=>{let n=o.icon,i=o.title;t.append(UUI.BUTTON_H({icon:n,spacing:10,title:i}))}}),SkyDesktop.File=CLASS({preset:()=>{return UUI.BUTTON_H},params:()=>{return{style:{marginLeft:20,padding:"2px 5px",cursor:"default",whiteSpace:"nowrap",userSelect:"none",MozUserSelect:"none"},icon:IMG({src:SkyDesktop.R("file.png")}),spacing:5}},init:(e,t,o)=>{let n;void 0!==o&&(n=o.path);let i;t.getPath=(()=>{return n});t.on("mouseover",(e,t)=>{i!==!0&&t.addStyle({backgroundColor:void 0!==BROWSER_CONFIG.SkyDesktop&&"dark"===BROWSER_CONFIG.SkyDesktop.theme?"#003333":"#AFCEFF"})}),t.on("mouseout",(e,t)=>{i!==!0&&t.addStyle({backgroundColor:"transparent"})});t.select=(()=>{t.addStyle({backgroundColor:void 0!==BROWSER_CONFIG.SkyDesktop&&"dark"===BROWSER_CONFIG.SkyDesktop.theme?"#17344D":"#A2C5FF"}),i=!0}),t.checkInSelected=(()=>{return i}),t.deselect=(()=>{t.addStyle({backgroundColor:"transparent"}),i=!1})}}),SkyDesktop.FileTree=CLASS({preset:()=>{return UUI.LIST},params:()=>{return{style:{paddingBottom:50}}},init:(e,t,o)=>{let n,i=()=>{t.sortItems((e,t)=>{return e.checkIsInstanceOf(SkyDesktop.File)===!0&&t.checkIsInstanceOf(SkyDesktop.Folder)===!0?1:e.checkIsInstanceOf(SkyDesktop.Folder)===!0&&t.checkIsInstanceOf(SkyDesktop.File)===!0?-1:e.checkIsInstanceOf(SkyDesktop.File)!==!0&&e.checkIsInstanceOf(SkyDesktop.Folder)!==!0?1:t.checkIsInstanceOf(SkyDesktop.File)!==!0&&t.checkIsInstanceOf(SkyDesktop.Folder)!==!0?-1:e.getTitle().toLowerCase().localeCompare(t.getTitle().toLowerCase())})};OVERRIDE(t.addItem,e=>{n=t.addItem=(t=>{let n=t.key,r=t.item;void 0!==o&&(r.checkIsInstanceOf(SkyDesktop.File)===!0?r.on("doubletap",()=>{o(n)}):r.checkIsInstanceOf(SkyDesktop.Folder)===!0&&r.setLoad(o)),e(t),i()})});let r;OVERRIDE(t.removeItem,e=>{r=t.removeItem=(t=>{e(t),i()})})}}),SkyDesktop.Folder=CLASS({preset:()=>{return UUI.BUTTON_H},params:()=>{return{style:{position:"relative",marginLeft:20,padding:"2px 5px",cursor:"default",whiteSpace:"nowrap",userSelect:"none",MozUserSelect:"none"},listStyle:{marginLeft:20},icon:IMG({src:SkyDesktop.R("folder.png")}),spacing:5}},init:(e,t,o)=>{let n,i,r;void 0!==o&&(n=o.listStyle,i=o.isOpened,r=o.path);let c,d;t.append(d=UUI.ICON_BUTTON({style:{position:"absolute",left:-12,top:3,color:void 0!==BROWSER_CONFIG.SkyDesktop&&"dark"===BROWSER_CONFIG.SkyDesktop.theme?"#444":"#ccc"},icon:FontAwesome.GetIcon("chevron-right"),on:{mouseover:(e,t)=>{t.addStyle({color:void 0!==BROWSER_CONFIG.SkyDesktop&&"dark"===BROWSER_CONFIG.SkyDesktop.theme?"#666":"#999"})},mouseout:(e,t)=>{t.addStyle({color:void 0!==BROWSER_CONFIG.SkyDesktop&&"dark"===BROWSER_CONFIG.SkyDesktop.theme?"#444":"#ccc"})},tap:e=>{a.checkIsShowing()===!0?s():u()}}}));let a=UUI.LIST({style:n});t.after(a);let u=(t.setLoad=(e=>{c=e}),t.open=(()=>{a.show(),t.setIcon(IMG({src:SkyDesktop.R("folder-opened.png")})),d.setIcon(FontAwesome.GetIcon("chevron-down")),d.addStyle({left:-14,top:1}),t.fireEvent("open")})),s=t.close=(()=>{a.hide(),t.setIcon(IMG({src:SkyDesktop.R("folder.png")})),d.setIcon(FontAwesome.GetIcon("chevron-right")),d.addStyle({left:-12,top:2}),t.fireEvent("close")});i===!0?DELAY(()=>{u()}):a.hide(),t.on("doubletap",()=>{a.checkIsShowing()===!0?s():u()}),t.on("remove",()=>{DELAY(()=>{a.remove()})});let l=()=>{a.sortItems((e,t)=>{return e.checkIsInstanceOf(SkyDesktop.File)===!0&&t.checkIsInstanceOf(SkyDesktop.File)===!0||e.checkIsInstanceOf(SkyDesktop.Folder)===!0&&t.checkIsInstanceOf(SkyDesktop.Folder)===!0?e.getTitle().toLowerCase().localeCompare(t.getTitle().toLowerCase()):e.checkIsInstanceOf(SkyDesktop.File)===!0&&t.checkIsInstanceOf(SkyDesktop.Folder)===!0?1:e.checkIsInstanceOf(SkyDesktop.Folder)===!0&&t.checkIsInstanceOf(SkyDesktop.File)===!0?-1:e.checkIsInstanceOf(SkyDesktop.File)!==!0&&e.checkIsInstanceOf(SkyDesktop.Folder)!==!0?1:t.checkIsInstanceOf(SkyDesktop.File)!==!0&&t.checkIsInstanceOf(SkyDesktop.Folder)!==!0?-1:0})},f=t.addItem=(e=>{let t=e.key,o=e.item;void 0!==c&&(o.checkIsInstanceOf(SkyDesktop.File)===!0?o.on("doubletap",e=>{c(t)}):o.checkIsInstanceOf(SkyDesktop.Folder)===!0&&o.setLoad(c)),a.addItem(e),l()});void 0!==o&&void 0!==o.items&&EACH(o.items,(e,t)=>{f({key:t,item:e})});let p;t.getItems=(()=>{return a.getItems()}),t.getItem=(e=>{return a.getItem(e)}),t.removeItem=(e=>{a.removeItem(e),l()}),t.removeAllItems=(()=>{a.removeAllItems()}),t.getPath=(()=>{return r});t.on("mouseover",(e,t)=>{p!==!0&&t.addStyle({backgroundColor:void 0!==BROWSER_CONFIG.SkyDesktop&&"dark"===BROWSER_CONFIG.SkyDesktop.theme?"#003333":"#AFCEFF"})}),t.on("mouseout",(e,t)=>{p!==!0&&t.addStyle({backgroundColor:"transparent"})});t.select=(()=>{t.addStyle({backgroundColor:void 0!==BROWSER_CONFIG.SkyDesktop&&"dark"===BROWSER_CONFIG.SkyDesktop.theme?"#17344D":"#A2C5FF"}),p=!0}),t.checkInSelected=(()=>{return p}),t.deselect=(()=>{t.addStyle({backgroundColor:"transparent"}),p=!1})}}),SkyDesktop.HorizontalTabList=CLASS({preset:()=>{return DIV},params:()=>{return{style:{height:"100%",backgroundColor:void 0!==BROWSER_CONFIG.SkyDesktop&&"dark"===BROWSER_CONFIG.SkyDesktop.theme?"#333":"#ccc"}}},init:(e,t,o)=>{let n=[],i=[],r=CLEAR_BOTH(),c=()=>{let e=0,o=0;EACH(n,t=>{void 0===t.getSize()?o+=1:e+=t.getSize(),t.addStyle({width:0,height:0})}),EACH(i,e=>{e.addStyle({height:0})});let r=t.getHeight(),c=e/(n.length-o);e+=c*o,EACH(n,o=>{void 0===o.getSize()&&o.setSize(c),o.addStyle({width:(t.getWidth()-8*(n.length-1))*o.getSize()/e,height:r})}),EACH(i,e=>{e.addStyle({height:r})})},d=t.addTab=(e=>{let o;if(n.length>0){let r,c,d=n[n.length-1];t.append(o=DIV({style:{flt:"left",width:8,height:"100%",cursor:"e-resize"},on:{touchstart:t=>{if(d.getSize()>0&&e.getSize()>0){let o=t.getLeft(),n=d.getWidth(),i=e.getWidth();BODY.addStyle({cursor:"e-resize"}),void 0!==r&&r.remove(),r=EVENT("touchmove",t=>{let r=t.getLeft()-o;n+r<100&&(r=100-n),i-r<100&&(r=i-100),d.addStyle({width:n+r}),e.addStyle({width:i-r})}),void 0!==c&&c.remove(),c=EVENT("touchend",()=>{BODY.addStyle({cursor:"auto"}),d.setSize(d.getSize()*d.getWidth()/n),e.setSize(e.getSize()*e.getWidth()/i),r.remove(),r=void 0,c.remove(),c=void 0})}t.stop()}}})),i.push(o)}e.addStyle({flt:"left"}),t.append(e),t.append(r),n.push(e),c(),e.on("remove",()=>{REMOVE({array:n,value:e}),void 0!==o&&(REMOVE({array:i,value:o}),o.remove()),e=void 0,o=void 0,c()})});void 0!==o&&void 0!==o.tabs&&EACH(o.tabs,d),t.on("show",()=>{EACH(n,e=>{e.fireEvent("show")}),c()}),DELAY(c);let a=EVENT("resize",c);t.on("remove",()=>{a.remove(),a=void 0});t.getAllTabs=(()=>{return n})}}),SkyDesktop.Tab=CLASS({preset:()=>{return DIV},params:()=>{return{style:{height:"100%",overflow:"auto",backgroundColor:void 0!==BROWSER_CONFIG.SkyDesktop&&"dark"===BROWSER_CONFIG.SkyDesktop.theme?"#000":"#fff",color:void 0!==BROWSER_CONFIG.SkyDesktop&&"dark"===BROWSER_CONFIG.SkyDesktop.theme?"#fff":"#000"}}},init:(e,t,o)=>{let n,i,r,c;void 0!==o&&(n=o.icon,i=o.title,r=o.size,c=o.isCannotClose);t.setIcon=(e=>{n=e,t.fireEvent("iconchange")}),t.getIcon=(()=>{return n}),t.setTitle=(e=>{i=e,t.fireEvent("titlechange")}),t.getTitle=(()=>{return i}),t.setSize=(e=>{r=e}),t.getSize=(()=>{return r}),t.checkIsCannotClose=(()=>{return c})}}),SkyDesktop.TabGroup=CLASS({preset:()=>{return TABLE},params:()=>{return{style:{height:"100%",backgroundColor:void 0!==BROWSER_CONFIG.SkyDesktop&&"dark"===BROWSER_CONFIG.SkyDesktop.theme?"#333":"#ccc"}}},init:(e,t,o)=>{let n;void 0!==o&&(n=o.homeTab);let i,r=[],c=[],d=[],a=-1,u=CLEAR_BOTH();TR({c:i=TD({style:{height:27,userSelect:"none",MozUserSelect:"none"}})}).appendTo(t);let s;TR({c:s=TD({style:{height:"100%"},c:n})}).appendTo(t);let l=t.activeTab=(e=>{EACH(r,e=>{e.addStyle({backgroundColor:"transparent"})}),EACH(c,(e,t)=>{e.hide(),t===a&&e.fireEvent("deactive")}),a=e,r[e].addStyle({backgroundColor:void 0!==BROWSER_CONFIG.SkyDesktop&&"dark"===BROWSER_CONFIG.SkyDesktop.theme?"#000":"#fff"}),c[e].show(),c[e].fireEvent("active"),d.push(c[e])}),f=(t.getActiveTab=(()=>{return c[a]}),t.getActiveTabIndex=(()=>{return a}),t.getAllTabs=(()=>{return c}),t.removeAllTabs=(()=>{let e=!1;EACH(c,t=>{if(t.fireEvent("close")===!1)return e=!0,!1}),e!==!0&&(EACH(c,e=>{e.remove()}),r=[],c=[],a=-1)})),p=t.addTab=(e=>{let o,n,p;i.append(o=UUI.BUTTON_H({style:{padding:"5px 10px",height:17,flt:"left",cursor:"default"},icon:e.getIcon(),spacing:5,on:{touchstart:e=>{e.stopDefault(),n=EVENT("touchmove",e=>{if(e.getLeft()<o.getLeft()){let t=i.getChildren()[FIND({array:i.getChildren(),value:o})-1];if(void 0!==t&&e.getLeft()<t.getLeft()+t.getWidth()/2){let e=FIND({array:r,value:o}),n=FIND({array:r,value:t});o.insertBefore(t);let i=c[e];c[e]=c[n],c[n]=i,i=r[e],r[e]=r[n],r[n]=i,l(n)}}if(e.getLeft()>o.getLeft()+o.getWidth()){let t=i.getChildren()[FIND({array:i.getChildren(),value:o})+1];if(void 0!==t&&t.checkIsInstanceOf(CLEAR_BOTH)!==!0&&e.getLeft()>t.getLeft()-t.getWidth()/2){let e=FIND({array:r,value:o}),n=FIND({array:r,value:t});o.insertAfter(t);let i=c[e];c[e]=c[n],c[n]=i,i=r[e],r[e]=r[n],r[n]=i,l(n)}}}),p=EVENT("touchend",()=>{void 0!==n&&(n.remove(),n=void 0),void 0!==p&&(p.remove(),p=void 0)})},doubletap:()=>{t.fireEvent("titledoubletap")},mouseover:()=>{a!==FIND({array:c,value:e})&&o.addStyle({backgroundColor:void 0!==BROWSER_CONFIG.SkyDesktop&&"dark"===BROWSER_CONFIG.SkyDesktop.theme?"#003333":"#AFCEFF"})},mouseout:()=>{a!==FIND({array:c,value:e})&&o.addStyle({backgroundColor:"transparent"})},tap:()=>{l(FIND({array:c,value:e}))},contextmenu:t=>{let o=SkyDesktop.ContextMenu({e:t,c:[SkyDesktop.ContextMenuItem({title:"닫기",on:{tap:()=>{e.fireEvent("close")!==!1&&e.remove(),o.remove()}}}),SkyDesktop.ContextMenuItem({title:"나머지 모두 닫기",on:{tap:()=>{let t=e,n=!1;EACH(c,e=>{if(e!==t&&e.fireEvent("close")===!1)return n=!0,!1}),n!==!0&&EACH(c,e=>{e!==t&&e.remove()}),o.remove()}}}),SkyDesktop.ContextMenuItem({title:"전부 닫기",on:{tap:()=>{f(),o.remove()}}})]});t.stop()}}})),i.append(u),r.push(o),e.on("iconchange",()=>{o.setIcon(e.getIcon())}),e.on("titlechange",()=>{o.setTitle(SPAN({c:e.checkIsCannotClose()===!0?e.getTitle():[e.getTitle(),UUI.ICON_BUTTON({style:{marginLeft:10,color:void 0!==BROWSER_CONFIG.SkyDesktop&&"dark"===BROWSER_CONFIG.SkyDesktop.theme?"#444":"#ccc"},icon:FontAwesome.GetIcon("times"),on:{mouseover:(e,t)=>{t.addStyle({color:void 0!==BROWSER_CONFIG.SkyDesktop&&"dark"===BROWSER_CONFIG.SkyDesktop.theme?"#666":"#999"})},mouseout:(e,t)=>{t.addStyle({color:void 0!==BROWSER_CONFIG.SkyDesktop&&"dark"===BROWSER_CONFIG.SkyDesktop.theme?"#444":"#ccc"})},tap:()=>{e.fireEvent("close")!==!1&&e.remove()}}})]}))}),e.fireEvent("titlechange"),s.append(e),c.push(e),l(c.length-1),e.on("remove",()=>{let t=FIND({array:c,value:e});void 0!==t&&(r[t].remove(),r.splice(t,1),c[t].remove(),c.splice(t,1),t===a?(d.pop(),d.length>0&&void 0!==FIND({array:c,value:d[d.length-1]})?l(FIND({array:c,value:d[d.length-1]})):a-1>=0?l(a-1):c.length>0?l(0):a=-1):t<a&&(a-1>=0?l(a-1):c.length>0?l(0):a=-1)),d.splice(FIND({array:d,value:e}),1),e=void 0})});void 0!==o&&(void 0!==o.tabs&&EACH(o.tabs,p),void 0!==o.activeTabIndex&&l(o.activeTabIndex))}}),SkyDesktop.VerticalTabList=CLASS({preset:()=>{return DIV},params:()=>{return{style:{height:"100%",backgroundColor:void 0!==BROWSER_CONFIG.SkyDesktop&&"dark"===BROWSER_CONFIG.SkyDesktop.theme?"#333":"#ccc"}}},init:(e,t,o)=>{let n=[],i=()=>{let e=0,o=0;EACH(n,t=>{void 0===t.getSize()?o+=1:e+=t.getSize(),t.addStyle({height:0})});let i=e/(n.length-o);e+=i*o,EACH(n,o=>{void 0===o.getSize()&&o.setSize(i),o.addStyle({height:(t.getHeight()-10*(n.length-1))*o.getSize()/e})})},r=t.addTab=(e=>{let o;if(n.length>0){let i,r,c=n[n.length-1];t.append(o=DIV({style:{height:8,cursor:"n-resize"},on:{touchstart:t=>{let o=t.getTop(),n=c.getHeight(),d=e.getHeight();BODY.addStyle({cursor:"n-resize"}),void 0!==i&&i.remove(),i=EVENT("touchmove",t=>{let i=t.getTop()-o;n+i<100&&(i=100-n),d-i<100&&(i=d-100),c.addStyle({height:n+i}),e.addStyle({height:d-i})}),void 0!==r&&r.remove(),r=EVENT("touchend",()=>{BODY.addStyle({cursor:"auto"}),c.setSize(c.getSize()*c.getHeight()/n),e.setSize(e.getSize()*e.getHeight()/d),i.remove(),i=void 0,r.remove(),r=void 0}),t.stop()}}}))}t.append(e),n.push(e),i(),e.on("remove",()=>{REMOVE({array:n,value:e}),void 0!==o&&o.remove(),e=void 0,o=void 0,i()})});void 0!==o&&void 0!==o.tabs&&EACH(o.tabs,r),t.on("show",()=>{EACH(n,e=>{e.fireEvent("show")}),i()}),DELAY(i);let c=EVENT("resize",i);t.on("remove",()=>{c.remove(),c=void 0});t.getAllTabs=(()=>{return n})}}),SkyDesktop.Toolbar=CLASS({preset:()=>{return UUI.V_CENTER},params:()=>{return{style:{backgroundColor:void 0!==BROWSER_CONFIG.SkyDesktop&&"dark"===BROWSER_CONFIG.SkyDesktop.theme?"#555":"#ccc",color:void 0!==BROWSER_CONFIG.SkyDesktop&&"dark"===BROWSER_CONFIG.SkyDesktop.theme?"#fff":"#000",height:"100%",borderBottom:"1px solid #999"}}},init:(e,t,o)=>{let n=CLEAR_BOTH(),i=()=>{let e=0;EACH(t.getChildren(),e=>{e.checkIsInstanceOf(SkyDesktop.ToolbarButton)===!0&&e.showTitle()}),EACH(t.getChildren(),t=>{t.checkIsInstanceOf(SkyDesktop.ToolbarButton)===!0&&(e+=t.getWidth())}),t.getWidth()<e&&EACH(t.getChildren(),e=>{e.checkIsInstanceOf(SkyDesktop.ToolbarButton)===!0&&e.hideTitle()})},r=t.addButton=(e=>{t.append(e),t.append(n),i()});t.removeButton=(e=>{e.remove(),i()});void 0!==o&&void 0!==o.buttons&&EACH(o.buttons,r),t.on("show",i),DELAY(i);let c=EVENT("resize",i);t.on("remove",()=>{c.remove(),c=void 0})}}),SkyDesktop.ToolbarButton=CLASS({preset:()=>{return UUI.BUTTON_H},params:()=>{return{style:{flt:"left",padding:"5px 8px"},spacing:5,on:{mouseover:(e,t)=>{t.addStyle({backgroundColor:void 0!==BROWSER_CONFIG.SkyDesktop&&"dark"===BROWSER_CONFIG.SkyDesktop.theme?"#003333":"#AFCEFF"})},mouseout:(e,t)=>{t.addStyle({backgroundColor:"transparent"})}}}}});