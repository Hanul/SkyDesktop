UUI.ALERT=CLASS({init:(e,t,n)=>{let o,i,d=n.style,r=n.contentStyle,a=n.buttonStyle,l=n.on,c=n.msg,u=UUI.MODAL({style:COMBINE([{textAlign:"center"},d]),on:l,c:[o=P({style:r,c:c}),i=UUI.BUTTON({style:a,title:MSG({en:"Close",ko:"닫기"}),on:{tap:()=>{f()}}})]}),f=(t.getNode=(()=>{return u.getNode()}),t.append=(e=>{o.append(e)}),t.prepend=(e=>{o.prepend(e)}),t.after=(e=>{u.after(e)}),t.before=(e=>{u.before(e)}),t.remove=(()=>{u.remove()}));t.empty=(()=>{o.empty()}),t.getChildren=(()=>{return o.getChildren()}),t.getButton=(()=>{return i}),t.addContentStyle=(e=>{o.addContentStyle(e)}),t.addButtonStyle=(e=>{i.addStyle(e)})}}),UUI.BUTTON=CLASS({preset:()=>{return NODE},init:(e,t,n)=>{let o,i=n.icon,d=n.title,r=void 0===n.spacing?0:n.spacing,a=n.href,l=n.target,c=A({style:{display:"block",textAlign:"center",cursor:"pointer",textDecoration:"none",touchCallout:"none",userSelect:"none",color:"inherit"},href:a,target:l});void 0!==d&&c.prepend(o=DIV({c:void 0===d?"":d}));let u=t.setIcon=(e=>{void 0!==i&&i.remove(),i=e,c.prepend(DIV({style:{marginBottom:void 0!==d?r:0},c:i}))});void 0!==i&&u(i),e.setDom(c);t.setTitle=(e=>{o.empty(),o.append(e)}),t.getIcon=(()=>{return i}),t.tap=(()=>{EVENT.fireAll({node:t,name:"tap"})}),t.hideTitle=(()=>{i.addStyle({marginBottom:0}),o.hide()}),t.showTitle=(()=>{i.addStyle({marginBottom:r}),o.show()})}}),UUI.BUTTON_H=CLASS({preset:()=>{return NODE},init:(e,t,n)=>{let o,i,d=n.icon,r=n.title,a=void 0===n.spacing?0:n.spacing,l=n.href,c=n.target,u=n.isIconRight,f=A({style:{display:"block",cursor:"pointer",textDecoration:"none",touchCallout:"none",userSelect:"none",color:"inherit"},href:l,target:c,c:[o=DIV({style:{flt:"left"},c:void 0===r?"":r}),CLEAR_BOTH()]}),s=t.setIcon=(e=>{void 0!==d&&d.remove(),d=e,d.addStyle({flt:"left"}),void 0===d.getStyle("margin")&&void 0===d.getStyle("marginRight")&&d.addStyle(u!==!0?{marginRight:a}:{marginLeft:a}),u!==!0?f.prepend(d):o.after(d),void 0===i&&(i=EVENT({name:"resize"},e=>{let t=o.getHeight();t>0&&d.getHeight()>0&&o.addStyle({marginTop:(d.getHeight()-o.getHeight())/2})}),t.on("show",()=>{i.fire()}),t.on("remove",()=>{i.remove()}),DELAY(()=>{i.fire()})),EVENT_ONCE({node:d,name:"load"},e=>{i.fire()})});void 0!==d&&s(d),e.setDom(f);t.setTitle=(e=>{o.empty(),o.append(e)}),t.getIcon=(()=>{return d}),t.tap=(()=>{EVENT.fireAll({node:t,name:"tap"})}),t.hideTitle=(()=>{d.addStyle({marginRight:0,marginLeft:0}),o.hide()}),t.showTitle=(()=>{void 0===d.getStyle("margin")&&void 0===d.getStyle("marginRight")&&d.addStyle(u!==!0?{marginRight:a}:{marginLeft:a}),o.show()})}}),UUI.CALENDAR=CLASS({preset:()=>{return UUI.TABLE},init:(e,t,n,o)=>{let i=n.year,d=n.month,r=n.date,a=void 0===n.headerStyle?{}:n.headerStyle,l=n.dayStyle,c=n.dateStyle,u=n.todayDateStyle,f=n.otherMonthDateStyle,s=n.selectedDateStyle,p=n.leftArrowIcon,y=n.rightArrowIcon,g=CALENDAR();void 0!==i&&void 0!==d||(void 0===i&&(i=g.getYear()),void 0===d&&(d=g.getMonth()));let E,m;CHECK_IS_DATA(o)!==!0?E=o:(E=o.selectDate,m=o.each);let v,S;t.append(TR({c:TD({colspan:7,style:COMBINE([a,{textAlign:"center"}]),c:[S=SPAN(),DIV({style:{flt:"left",cursor:"pointer",userSelect:"none"},c:void 0===p?"<":p,on:{tap:()=>{d-=1,A()}}}),DIV({style:{flt:"right",cursor:"pointer",userSelect:"none"},c:void 0===y?">":y,on:{tap:()=>{d+=1,A()}}}),CLEAR_BOTH()]})})),t.append(TR({c:[TD({style:l,c:"일"}),TD({style:l,c:"월"}),TD({style:l,c:"화"}),TD({style:l,c:"수"}),TD({style:l,c:"목"}),TD({style:l,c:"금"}),TD({style:l,c:"토"})]}));let A=(t.getYear=(()=>{return v.getYear()}),t.getMonth=(()=>{return v.getMonth()}),RAR(()=>{let e,n,o,a=CALENDAR(CREATE_DATE({year:i,month:d+1,date:0})),l=0;v=CALENDAR(CREATE_DATE({year:i,month:d,date:1}));let p=CALENDAR(CREATE_DATE({year:i,month:d,date:-(v.getDay()-1)}));S.empty(),S.append(v.getYear()+"년 "+v.getMonth()+"월"),REPEAT(7,e=>{t.removeTR(e)}),REPEAT(v.getDay(),r=>{l%7===0&&t.addTR({key:l/7,tr:e=TR()});let a;e.append(a=TD({style:void 0===f?c:f,c:p.getDate()+r,on:{tap:(e,a)=>{void 0!==o&&n.addStyle(o),n=a,o=void 0===f?c:f,void 0!==s&&a.addStyle(s),void 0!==E&&E(CALENDAR(CREATE_DATE({year:i,month:d-1,date:p.getDate()+r})),t)}}})),void 0!==m&&m(a,CALENDAR(CREATE_DATE({year:i,month:d-1,date:p.getDate()+r})),t),l+=1}),REPEAT({start:v.getDate(),end:a.getDate()},(a,f)=>{l%7===0&&t.addTR({key:l/7,tr:e=TR()});let p;e.append(p=TD({style:COMBINE([c,void 0!==u&&v.getYear()===g.getYear()&&v.getMonth()===g.getMonth()&&a===g.getDate()?u:{}]),c:a,on:{tap:(e,r)=>{void 0!==o&&n.addStyle(o),n=r,o=COMBINE([c,void 0!==u&&v.getYear()===g.getYear()&&v.getMonth()===g.getMonth()&&a===g.getDate()?u:{}]),void 0!==s&&r.addStyle(s),void 0!==E&&E(CALENDAR(CREATE_DATE({year:i,month:d,date:a})),t)}}})),v.getYear()===g.getYear()&&v.getMonth()===g.getMonth()&&a===r&&(void 0!==o&&n.addStyle(o),n=p,o=COMBINE([c,void 0!==u&&v.getYear()===g.getYear()&&v.getMonth()===g.getMonth()&&a===g.getDate()?u:{}]),void 0!==s&&p.addStyle(s)),void 0!==m&&m(p,CALENDAR(CREATE_DATE({year:i,month:d,date:a})),t),l+=1}),REPEAT(42-l,r=>{l%7===0&&t.addTR({key:l/7,tr:e=TR()});let a;e.append(a=TD({style:void 0===f?c:f,c:r+1,on:{tap:(e,a)=>{void 0!==o&&n.addStyle(o),n=a,o=void 0===f?c:f,void 0!==s&&a.addStyle(s),void 0!==E&&E(CALENDAR(CREATE_DATE({year:i,month:d+1,date:r+1})),t)}}})),void 0!==m&&m(a,CALENDAR(CREATE_DATE({year:i,month:d+1,date:r+1})),t),l+=1})}))}}),UUI.CONFIRM=CLASS({init:(e,t,n,o)=>{let i,d,r,a=n.style,l=n.contentStyle,c=n.okButtonStyle,u=n.okButtonTitle,f=n.cancelButtonStyle,s=n.on,p=n.msg,y=UUI.MODAL({style:COMBINE([{textAlign:"center"},a]),on:s,c:[i=P({style:l,c:p}),d=UUI.BUTTON({style:c,title:void 0!==u?u:MSG({en:"Ok",ko:"확인"}),on:{tap:()=>{o(),g()}}}),r=UUI.BUTTON({style:f,title:MSG({en:"Close",ko:"닫기"}),on:{tap:()=>{g()}}}),CLEAR_BOTH()]}),g=(t.getNode=(()=>{return y.getNode()}),t.append=(e=>{i.append(e)}),t.prepend=(e=>{i.prepend(e)}),t.after=(e=>{y.after(e)}),t.before=(e=>{y.before(e)}),t.remove=(()=>{y.remove()}));t.empty=(()=>{i.empty()}),t.getChildren=(()=>{return i.getChildren()}),t.getOkButton=(()=>{return d}),t.getCancelButton=(()=>{return r}),t.addContentStyle=(e=>{i.addContentStyle(e)}),t.addOkButtonStyle=(e=>{d.addStyle(e)}),t.addCancelButtonStyle=(e=>{r.addStyle(e)})}}),UUI.FULL_CHECKBOX=CLASS({preset:()=>{return NODE},init:(e,t,n)=>{let o,i=n.name,d=n.label,r=void 0===n.spacing?0:n.spacing,a=n.value,l=n.inputStyle,c=DIV({style:{position:"relative"},c:[o=INPUT({style:{flt:"left",marginRight:5},name:i,type:"checkbox",value:a}),SPAN({style:{marginLeft:r,flt:"left",cursor:"pointer"},c:d,on:{tap:e=>{o.toggleCheck(),EVENT.fireAll({node:t,name:"change"})}}}),CLEAR_BOTH()]});e.setWrapperDom(c);let u=(t.getName=(()=>{return i}),t.getValue=(()=>{return o.getValue()}),t.setValue=(e=>{let n=o.checkIsChecked();o.setValue(e),e===!0?n!==!0&&EVENT.fireAll({node:t,name:"change"}):n===!0&&EVENT.fireAll({node:t,name:"change"})}),t.select=(()=>{o.select(),EVENT.fireAll({node:t,name:"select"}),EVENT.fireAll({node:t,name:"focus"})}),t.blur=(()=>{o.blur(),EVENT.fireAll({node:t,name:"blur"})}),t.addInputStyle=(e=>{o.addStyle(e)}));void 0!==l&&u(l);t.on=((e,n)=>{"focus"===e||"blur"===e||"change"===e||"keydown"===e||"keypress"===e||"keyup"===e?EVENT({node:t,lowNode:o,name:e},n):EVENT({node:t,lowNode:c,name:e},n)}),t.toggleCheck=(e=>{let n=o.toggleCheck();return EVENT.fireAll({node:t,name:"change"}),n}),t.checkIsChecked=(()=>{return o.checkIsChecked()});EVENT({node:t,lowNode:o,name:"keyup"},e=>{void 0!==e&&" "===e.getKey()&&DELAY(()=>{EVENT.fireAll({node:t,name:"change"})})})}}),UUI.FULL_INPUT=CLASS({preset:()=>{return NODE},init:(e,t,n)=>{let o,i=n.name,d=n.type,r=n.placeholder,a=n.capture,l=n.accept,c=n.value,u=n.inputStyle,f=n.isOffAutocomplete,s=DIV({style:{padding:5,backgroundColor:"#fff"},c:DIV({style:{position:"relative"},c:[SPAN({style:{visibility:"hidden"},c:"."}),o=INPUT({style:{position:"absolute",left:0,top:0,width:"100%",border:"none",background:"date"===d||"datetime"===d||"datetime-local"===d||"month"===d||"time"===d||"week"===d?void 0:"transparent"},name:i,type:d,value:c,capture:a,accept:l,placeholder:r,isOffAutocomplete:f})]}),on:{tap:()=>{o.focus(),EVENT.fireAll({node:t,name:"focus"})}}});e.setWrapperDom(s);let p=(t.getName=(()=>{return i}),t.getValue=(()=>{return o.getValue()}),t.setValue=(e=>{let n=o.getValue();o.setValue(e),n!==e&&EVENT.fireAll({node:t,name:"change"})}),t.select=(()=>{o.select(),EVENT.fireAll({node:t,name:"select"}),EVENT.fireAll({node:t,name:"focus"})}),t.focus=(()=>{o.focus(),EVENT.fireAll({node:t,name:"focus"})}),t.blur=(()=>{o.blur(),EVENT.fireAll({node:t,name:"blur"})}),t.addInputStyle=(e=>{o.addStyle(e)}));void 0!==u&&p(u);t.on=((e,n)=>{"focus"===e||"blur"===e||"change"===e||"keydown"===e||"keypress"===e||"keyup"===e?EVENT({node:t,lowNode:o,name:e},n):EVENT({node:t,lowNode:s,name:e},n)})}}),UUI.FULL_SELECT=CLASS({preset:()=>{return NODE},init:(e,t,n)=>{let o,i=n.name,d=n.value,r=n.options,a=n.selectStyle,l=DIV({style:{padding:5,backgroundColor:"#fff",position:"relative"},c:o=SELECT({style:{width:"100%",border:"none",background:"transparent"},name:i,value:d,c:r})});e.setWrapperDom(l);let c=(t.getName=(()=>{return i}),t.getValue=(()=>{return o.getValue()}),t.setValue=(e=>{let n=o.getValue();o.setValue(e),n!==e&&EVENT.fireAll({node:t,name:"change"})}),t.select=(()=>{o.select()}),t.blur=(()=>{o.blur()}),t.addSelectStyle=(e=>{o.addStyle(e)}));void 0!==a&&c(a);t.addOption=(e=>{o.append(e)}),t.removeAllOptions=(()=>{o.empty()}),t.on=((e,n)=>{"focus"===e||"blur"===e||"change"===e||"select"===e||"keydown"===e||"keypress"===e||"keyup"===e?EVENT({node:t,lowNode:o,name:e},n):EVENT({node:t,lowNode:l,name:e},n)})}}),UUI.FULL_SUBMIT=CLASS({preset:()=>{return NODE},init:(e,t,n)=>{let o=void 0===n?void 0:n.value,i=INPUT({type:"submit",style:{display:"block",border:"none",width:"100%",padding:"10px 0",cursor:"pointer"}});void 0!==o&&i.setValue(o),e.setDom(i);t.getValue=(()=>{return i.getValue()}),t.setValue=(e=>{i.setValue(e)})}}),UUI.FULL_TEXTAREA=CLASS({preset:()=>{return NODE},init:(e,t,n)=>{let o,i=n.name,d=n.placeholder,r=n.value,a=n.textareaStyle,l=DIV({style:{padding:5,backgroundColor:"#fff",position:"relative",height:100},c:o=TEXTAREA({style:{width:"100%",height:"100%",backgroundColor:"transparent",border:"none"},name:i,placeholder:d,value:r})});e.setWrapperDom(l),e.setContentDom(o);let c=(t.getName=(()=>{return i}),t.getValue=(()=>{return o.getValue()}),t.setValue=(e=>{let n=o.getValue();o.setValue(e),n!==e&&EVENT.fireAll({node:t,name:"change"})}),t.select=(()=>{o.select()}),t.focus=(()=>{o.focus()}),t.blur=(()=>{o.blur()}),t.addTextareaStyle=(e=>{o.addStyle(e)}));void 0!==a&&c(a);t.on=((e,n)=>{"focus"===e||"blur"===e||"change"===e||"keydown"===e||"keypress"===e||"keyup"===e?EVENT({node:t,lowNode:o,name:e},n):EVENT({node:t,lowNode:l,name:e},n)})}}),UUI.FULL_UPLOAD_FORM=CLASS({preset:()=>{return NODE},init:(e,t,n,o)=>{let i,d,r=n.box,a=n.accept,l=n.isMultiple,c=void 0!==n.callbackURL?n.callbackURL:(BROWSER_CONFIG.isSecure===!0?"https://":"http://")+BROWSER_CONFIG.host+":"+BROWSER_CONFIG.port+"/__CORS_CALLBACK",u=n.formStyle,f=n.inputStyle,s=n.uploadingStyle;void 0!==o&&(i=o.success,d=o.overSizeFile);let p,y,g,E,m,v,S=DIV({style:{padding:5,background:"#FFF",position:"relative"},c:[E=IFRAME({style:{display:"none"},name:"__UPLOAD_FORM_"+t.id}),m=UUI.V_CENTER({style:{display:"none",position:"absolute",top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",color:"#fff",textAlign:"center"},c:["Uploading...",v=SPAN({style:{marginLeft:10}})]})]});GET({isSecure:BROWSER_CONFIG.isSecure,port:BROWSER_CONFIG.port,uri:"__UPLOAD_SERVER_HOST?defaultHost="+BROWSER_CONFIG.host},e=>{let n=RANDOM_STR(20);E.after(y=FORM({action:(BROWSER_CONFIG.isSecure===!0?"https://":"http://")+e+":"+BROWSER_CONFIG.port+"/__UPLOAD?boxName="+r.boxName+"&callbackURL="+c+"&uploadKey="+n,target:"__UPLOAD_FORM_"+t.id,method:"POST",enctype:"multipart/form-data",style:u,c:[g=INPUT({type:"file",name:"file",accept:a,isMultiple:l,style:COMBINE([{width:"100%",height:"100%",color:"#000",border:"none"},f])}),INPUT({type:"submit",style:{visibility:"hidden",position:"absolute"}})]})),EVENT({node:g,name:"change"},e=>{""!==g.getValue()&&(m.addStyle({width:S.getWidth(),height:S.getHeight()}),m.show(),void 0!==p&&p.exit(),p=r.ROOM("uploadProgressRoom/"+n),p.on("progress",e=>{v.empty(),v.append("("+e.bytesRecieved+"/"+e.bytesExpected+")")}),void 0!==y&&y.submit())})}),EVENT({node:E,name:"load"},e=>{let n,o=global["__UPLOAD_FORM_"+t.id],r=void 0!==o?o.fileDataSetStr:void 0,a=void 0!==o?o.maxUploadFileMB:void 0;if(void 0!==a)void 0!==d&&d(a),n=g.getValue(),g.setValue(""),""!==n&&EVENT.fireAll({node:t,name:"change"});else if(void 0!==r){let e=PARSE_STR(decodeURIComponent(r));EACH(e,(t,n)=>{e[n]=UNPACK_DATA(t)}),void 0!==i&&i(l!==!0?e[0]:e,t),n=g.getValue(),g.setValue(""),""!==n&&EVENT.fireAll({node:t,name:"change"})}m.hide(),void 0!==p&&(p.exit(),p=void 0)}),e.setWrapperDom(S);let A=(t.select=(()=>{void 0!==g&&(g.select(),EVENT.fireAll({node:t,name:"select"}),EVENT.fireAll({node:t,name:"focus"}))}),t.addFormStyle=(e=>{void 0!==y?y.addStyle(e):EXTEND({origin:u,extend:e})}));void 0!==u&&A(u);let T=t.addInputStyle=(e=>{void 0!==g?g.addStyle(e):EXTEND({origin:f,extend:e})});void 0!==f&&T(f);let C=t.addUploadingStyle=(e=>{m.addStyle(e)});void 0!==s&&C(s);t.on=((e,n)=>{"focus"===e||"blur"===e||"change"===e||"keydown"===e||"keypress"===e||"keyup"===e?EVENT({node:t,lowNode:g,name:e},n):EVENT({node:t,lowNode:S,name:e},n)})}}),UUI.ICON_BUTTON=CLASS({preset:()=>{return NODE},init:(e,t,n)=>{let o=n.icon,i=n.href,d=n.target,r=A({style:{cursor:"pointer",textDecoration:"none",touchCallout:"none",userSelect:"none"},href:i,target:d}),a=t.setIcon=(e=>{void 0!==o&&o.remove(),o=e,r.append(o)});void 0!==o&&a(o),e.setDom(r);t.getIcon=(()=>{return o}),t.tap=(()=>{EVENT.fireAll({node:t,name:"tap"})})}}),UUI.LIST=CLASS({preset:()=>{return NODE},init:(e,t,n)=>{let o,i,d,r=void 0===n?void 0:n.isRequiringClearBoth,a=[],l={};void 0===i&&(i={}),e.setDom(o=UL());let c=t.addItem=(e=>{let n=e.key,l=e.item,c=e.isFirst;void 0!==i[n]?(l.insertBefore(i[n]),a[FIND({array:a,value:i[n]})]=l,i[n].remove()):c===!0&&a.length>0?(l.insertBefore(a[0]),a.unshift(l)):(t.append(l),a.push(l)),i[n]=l,r===!0&&(void 0!==d&&d.remove(),d=CLEAR_BOTH().appendTo(o))});void 0!==n&&void 0!==n.items&&EACH(n.items,(e,t)=>{c({key:t,item:e})});t.getAllItems=(()=>{return i}),t.removeItem=(e=>{let t=i[e],n=l[e];void 0!==t&&t.remove(),void 0!==n&&EACH(n,e=>{e()}),REMOVE({array:a,value:t}),REMOVE({data:i,name:e}),REMOVE({data:l,name:e})}),t.addRemoveItemHandler=((e,t)=>{void 0===l[e]&&(l[e]=[]),l[e].push(t)}),t.removeAllItems=(()=>{EACH(i,(e,t)=>{let n=l[t];e.remove(),void 0!==n&&EACH(n,e=>{e()})}),i={},a=[],l={}})}}),UUI.LOADING=CLASS({init:(e,t,n)=>{let o=n.style,i=n.contentStyle,d=n.indicator,r=n.msg,a=n.on,l=UUI.MODAL({style:COMBINE([{textAlign:"center"},o]),contentStyle:i,isCannotClose:!0,c:[void 0===d?"":d,P({style:void 0===d?{}:{marginTop:10},c:r})],on:a});t.getNode=(()=>{return l.getNode()}),t.append=(e=>{l.append(e)}),t.prepend=(e=>{l.prepend(e)}),t.after=(e=>{l.after(e)}),t.before=(e=>{l.before(e)}),t.remove=(()=>{l.remove()}),t.empty=(()=>{l.empty()}),t.getChildren=(()=>{return l.getChildren()}),t.addStyle=(e=>{l.addStyle(e)}),t.addContentStyle=(e=>{l.addContentStyle(e)})}}),UUI.MODAL=CLASS({init:(e,t,n)=>{let o,i=void 0===n?void 0:n.c,d=void 0===n?void 0:n.style,r=void 0===n?void 0:n.contentStyle,a=void 0===n?void 0:n.xStyle,l=void 0===n?void 0:n.xIcon,c=void 0===n?void 0:n.isCannotClose,u=DIV({c:[o=DIV(),void 0===l?"":UUI.ICON_BUTTON({style:COMBINE([{lineHeight:0,position:"absolute"},void 0===a?{top:-10,right:-10}:a]),icon:l,on:{tap:e=>{v()},mouseover:()=>{E({opacity:.8})},mouseout:()=>{E({opacity:1})}}})]}).appendTo(BODY),f=RAR(()=>{let e=(WIN_WIDTH()-u.getWidth())/2,t=(WIN_HEIGHT()-u.getHeight())/2;u.addStyle({position:"fixed",left:e<0?0:e,top:t<0?0:t});let n=e=>{EACH(e,e=>{e.type===IMG&&EVENT({node:e,name:"load"},()=>{f()}),void 0!==e.getChildren&&n(e.getChildren())})};n(u.getChildren())});DELAY(()=>{f()}),u.on("show",f);let s=EVENT({name:"resize"},f),p=EVENT({name:"keydown"},e=>{"Escape"===e.getKey()&&c!==!0&&v()});u.on("remove",()=>{s.remove(),p.remove()});let y=(t.getNode=(()=>{return u}),t.append=(e=>{o.append(e),f()}));void 0!==i&&(CHECK_IS_ARRAY(i)===!0?EACH(i,(e,t)=>{y(e)}):y(i));let g=(t.prepend=(e=>{o.prepend(e),f()}),t.after=(e=>{u.after(e),f()}),t.before=(e=>{u.before(e),f()}),t.remove=(()=>{u.remove()})),E=(t.empty=(()=>{o.empty()}),t.getChildren=(()=>{return o.getChildren()}),t.addStyle=(e=>{u.addStyle(e),f()}));void 0!==d&&E(d);let m=t.addContentStyle=(e=>{o.addStyle(e),f()});void 0!==r&&m(r);let v=(t.on=((e,n)=>{EVENT({node:t,lowNode:u,name:e},n)}),t.close=(()=>{EVENT.fireAll({node:t,name:"close"})!==!1&&g()}));t.getLeft=(()=>{return u.getLeft()}),t.getTop=(()=>{return u.getTop()})},afterInit:(e,t,n)=>{let o;void 0!==n&&CHECK_IS_DATA(n)===!0&&(o=n.on),void 0!==o&&EACH(o,(e,n)=>{t.on(n,e)})}}),UUI.NOTICE=CLASS({init:(e,t,n)=>{let o=n.style,i=n.contentStyle,d=n.isCannotClose,r=n.on,a=n.msg,l=UUI.MODAL({style:COMBINE([{textAlign:"center"},o]),contentStyle:i,isCannotClose:!0,on:r,c:a});t.getNode=(()=>{return l.getNode()}),t.append=(e=>{l.append(e)}),t.prepend=(e=>{l.prepend(e)}),t.after=(e=>{l.after(e)}),t.before=(e=>{l.before(e)}),t.remove=(()=>{l.remove()}),t.empty=(()=>{l.empty()}),t.getChildren=(()=>{return l.getChildren()}),t.addContentStyle=(e=>{l.addContentStyle(e)});d!==!0&&DELAY(2,()=>{l.close()})}}),UUI.PANEL=CLASS({preset:()=>{return NODE},init:(e,t,n)=>{let o,i,d=void 0===n?void 0:n.contentStyle;o=DIV({c:i=DIV()}),e.setWrapperDom(o),e.setContentDom(i);let r=t.addContentStyle=(e=>{i.addStyle(e)});void 0!==d&&r(d)}}),UUI.PROMPT=CLASS({init:(e,t,n,o)=>{let i,d,r,a,l,c=n.style,u=n.contentStyle,f=n.formStyle,s=n.inputStyle,p=n.okButtonStyle,y=n.cancelButtonStyle,g=n.on,E=n.msg,m=n.value,v=UUI.MODAL({style:COMBINE([{textAlign:"center"},c]),on:g,c:[i=P({style:u,c:E}),d=FORM({style:f,c:r=UUI.FULL_INPUT({style:s,value:m}),on:{submit:()=>{o(r.getValue()),S()}}}),a=UUI.BUTTON({style:p,title:MSG({en:"Ok",ko:"확인"}),on:{tap:()=>{d.submit()}}}),l=UUI.BUTTON({style:y,title:MSG({en:"Close",ko:"닫기"}),on:{tap:()=>{S()}}}),CLEAR_BOTH()]});r.focus();let S=(t.getNode=(()=>{return v.getNode()}),t.append=(e=>{i.append(e)}),t.prepend=(e=>{i.prepend(e)}),t.after=(e=>{v.after(e)}),t.before=(e=>{v.before(e)}),t.remove=(()=>{v.remove()}));t.empty=(()=>{i.empty()}),t.getChildren=(()=>{return i.getChildren()}),t.getOkButton=(()=>{return a}),t.getCancelButton=(()=>{return l}),t.addContentStyle=(e=>{i.addContentStyle(e)}),t.addInputStyle=(e=>{r.addStyle(e)}),t.addOkButtonStyle=(e=>{a.addStyle(e)}),t.addCancelButtonStyle=(e=>{l.addStyle(e)})}}),UUI.TABLE=CLASS({preset:()=>{return NODE},init:(e,t,n)=>{let o=void 0===n?void 0:n.trs,i=[],d={};void 0===o&&(o={});let r;e.setDom(r=TABLE());t.addTR=(e=>{let n=e.key,d=e.tr,r=e.isFirst;void 0!==o[n]?(d.insertBefore(o[n]),i[FIND({array:i,value:o[n]})]=d,o[n].remove()):r===!0&&i.length>0?(d.insertBefore(i[0]),i.unshift(d)):(t.append(d),i.push(d)),o[n]=d});EACH(o,(e,n)=>{i.push(e),t.append(e)});t.removeTR=(e=>{let t=o[e],n=d[e];void 0!==t&&t.remove(),void 0!==n&&EACH(n,e=>{e()}),REMOVE({array:i,value:t}),REMOVE({data:o,name:e}),REMOVE({data:d,name:e})}),t.addRemoveTRHandler=((e,t)=>{void 0===d[e]&&(d[e]=[]),d[e].push(t)}),t.removeAllTRs=(()=>{EACH(o,(e,t)=>{let n=d[t];e.remove(),void 0!==n&&EACH(n,e=>{e()})}),o={},i=[],d={}})}}),UUI.TEXT_BUTTON=CLASS({preset:()=>{return NODE},init:(e,t,n)=>{let o,i=n.title,d=n.href,r=n.target,a=A({style:{cursor:"pointer",textDecoration:"none",touchCallout:"none",userSelect:"none"},href:d,target:r,c:o=SPAN({c:void 0===i?void 0===d?"":d:i})});e.setDom(a);t.setTitle=(e=>{o.empty(),o.append(e)}),t.tap=(()=>{EVENT.fireAll({node:t,name:"tap"})})}}),UUI.TITLE=CLASS({preset:()=>{return NODE},init:(e,t,n)=>{let o,i=n.icon,d=n.title,r=void 0===n.spacing?0:n.spacing,a=n.isIconRight,l=DIV({c:[o=DIV({style:{flt:"left"},c:void 0===d?"":d}),CLEAR_BOTH()]});if(void 0!==i){i.addStyle({flt:"left"}),void 0===i.getStyle("margin")&&void 0===i.getStyle("marginRight")&&i.addStyle(a!==!0?{marginRight:r}:{marginLeft:r}),a!==!0?l.prepend(i):o.after(i);let e=EVENT({name:"resize"},e=>{let t=o.getHeight();t>0&&o.addStyle({marginTop:(i.getHeight()-o.getHeight())/2})});EVENT_ONCE({node:i,name:"load"},t=>{e.fire()}),t.on("show",()=>{e.fire()}),t.on("remove",()=>{e.remove()})}e.setDom(l);t.setTitle=(e=>{o.empty(),o.append(e)}),t.getIcon=(()=>{return i})}}),UUI.VALID_FORM=CLASS({preset:()=>{return FORM},init:(e,t,n)=>{let o=void 0===n?void 0:n.errorMsgs,i=void 0===n?void 0:n.errorMsgStyle,d=[];t.on("remove",()=>{EACH(d,e=>{e.remove()})});t.showErrors=(e=>{let n=COPY(e),r=e=>{EACH(e.getChildren(),e=>{if(void 0!==e.getValue&&void 0!==e.getName){let t=e.getName(),r=n[t];if(void 0!==r&&void 0!==o){let a=o[t][r.type];"function"==typeof a&&(a=a(void 0!==r.validParam?r.validParam:r.validParams));let l;e.after(l=P({style:i,c:a})),REMOVE({data:n,name:t}),d.push(DELAY(3,e=>{l.remove(),REMOVE({array:d,value:e})}))}}r(e)})};r(t)}),t.getErrorMsgs=(e=>{let t={};return EACH(e,(e,n)=>{if(void 0!==o){let i=o[n][e.type];"function"==typeof i&&(i=i(void 0!==e.validParam?e.validParam:e.validParams)),t[n]=i}}),t}),t.getErrorMsgStyle=(()=>{return i})}}),UUI.V_CENTER=CLASS({preset:()=>{return NODE},init:(e,t,n)=>{let o,i=void 0===n?void 0:n.contentStyle,d=TABLE({style:{width:"100%",margin:0,padding:0},c:TR({style:{margin:0,padding:0},c:o=TD({style:{margin:0,padding:0}})})});e.setWrapperDom(d),e.setContentDom(o);let r=t.addContentStyle=(e=>{o.addStyle(e)});void 0!==i&&r(i)}});