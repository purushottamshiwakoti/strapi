"use strict";(self.webpackChunkstrapi_project=self.webpackChunkstrapi_project||[]).push([[5320],{45320:(k,M,s)=>{s.r(M),s.d(M,{default:()=>A});var t=s(92132),c=s(21272),T=s(44370),R=s(57564),O=s(68065),P=s(45024),m=s(89787),B=s(53432),W=s(55794),I=s(43121),U=s(69564),K=s(32559),g=s(8769),j=s(95065),u=s(13333),x=s(56336),_=s(33544),h=s(54894),i=s(90451),S=s(88761),N=s(2600),z=s(48940),w=s(98908),q=s(5409),ss=s(74930),ts=s(61535),as=s(12083),is=s(40495),es=s(50837),ns=s(77965);const f=({sort:n="",pageSize:d=10,onChange:e})=>{const{formatMessage:o}=(0,h.A)();return(0,t.jsx)(T.a,{background:"neutral0",hasRadius:!0,shadow:"tableShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:(0,t.jsxs)(R.x,{gap:4,children:[(0,t.jsx)(O.E,{s:12,col:6,children:(0,t.jsx)(P.l,{label:o({id:(0,i.g)("config.entries.title"),defaultMessage:"Entries per page"}),hint:o({id:(0,i.g)("config.entries.note"),defaultMessage:"Number of assets displayed by default in the Media Library"}),onChange:a=>e({target:{name:"pageSize",value:a}}),name:"pageSize",value:d,children:i.C.map(a=>(0,t.jsx)(m.c,{value:a,children:a},a))})}),(0,t.jsx)(O.E,{s:12,col:6,children:(0,t.jsx)(P.l,{label:o({id:(0,i.g)("config.sort.title"),defaultMessage:"Default sort order"}),hint:o({id:(0,i.g)("config.note"),defaultMessage:"Note: You can override this value in the media library."}),onChange:a=>e({target:{name:"sort",value:a}}),name:"sort",value:n,"test-sort":n,"data-testid":"sort-select",children:i.D.map(a=>(0,t.jsx)(m.c,{"data-testid":`sort-option-${a.value}`,value:a.value,children:o({id:(0,i.g)(a.key),defaultMessage:`${a.value}`})},a.key))})})]})})};f.propTypes={sort:_.string.isRequired,pageSize:_.number.isRequired,onChange:_.func.isRequired};const C=`${i.p}/ON_CHANGE`,v=`${i.p}/SET_LOADED`,$=({name:n,value:d})=>({type:C,keys:n,value:d}),b=()=>({type:v}),r={initialData:{},modifiedData:{}},p=n=>({...r,initialData:n,modifiedData:n}),G=(n=r,d)=>(0,S.default)(n,e=>{switch(d.type){case C:{z(e,["modifiedData",...d.keys.split(".")],d.value);break}case v:{const o=p(N(e,["modifiedData"],{}));e.initialData=o.initialData,e.modifiedData=o.modifiedData;break}default:return e}}),A=({config:n})=>{const{trackUsage:d}=(0,g.useTracking)(),{formatMessage:e}=(0,h.A)(),o=(0,g.useNotification)(),{mutateConfig:a}=(0,i.z)(),{isLoading:L}=a,[F,H]=(0,c.useState)(!1),D=()=>H(E=>!E),[Q,y]=(0,c.useReducer)(G,r,()=>p(n)),{initialData:V,modifiedData:l}=Q,Y=E=>{E.preventDefault(),D()},J=async()=>{d("willEditMediaLibraryConfig"),await a.mutateAsync(l),D(),y(b()),o({type:"success",message:{id:"notification.form.success.fields",defaultMessage:"Changes saved"}})},X=({target:{name:E,value:Z}})=>{y($({name:E,value:Z}))};return(0,g.useFocusWhenNavigate)(),(0,t.jsx)(B.P,{children:(0,t.jsx)(W.g,{"aria-busy":L,children:(0,t.jsxs)("form",{onSubmit:Y,children:[(0,t.jsx)(I.Q,{navigationAction:(0,t.jsx)(g.Link,{startIcon:(0,t.jsx)(j.A,{}),to:`/plugins/${i.p}`,id:"go-back",children:e({id:(0,i.g)("config.back"),defaultMessage:"Back"})}),primaryAction:(0,t.jsx)(U.$,{size:"S",startIcon:(0,t.jsx)(u.A,{}),disabled:x(l,V),type:"submit",children:e({id:"global.save",defaultMessage:"Save"})}),subtitle:e({id:(0,i.g)("config.subtitle"),defaultMessage:"Define the view settings of the media library."}),title:e({id:(0,i.g)("config.title"),defaultMessage:"Configure the view - Media Library"})}),(0,t.jsx)(K.s,{children:(0,t.jsx)(f,{"data-testid":"settings",pageSize:l.pageSize||"",sort:l.sort||"",onChange:X})}),(0,t.jsx)(g.ConfirmDialog,{bodyText:{id:(0,i.g)("config.popUpWarning.warning.updateAllSettings"),defaultMessage:"This will modify all your settings"},iconRightButton:(0,t.jsx)(u.A,{}),isConfirmButtonLoading:L,isOpen:F,onToggleDialog:D,onConfirm:J,variantRightButton:"success-light"})]})})})};A.propTypes={config:_.shape({pageSize:_.number,sort:_.string}).isRequired}}}]);