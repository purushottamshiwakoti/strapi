"use strict";(self.webpackChunkstrapi_project=self.webpackChunkstrapi_project||[]).push([[6556],{46556:(J,T,t)=>{t.d(T,{ProtectedListPage:()=>gt});var s=t(92132),g=t(21272),f=t(70230),M=t(53432),C=t(55794),W=t(43121),b=t(44494),c=t(57842),d=t(69564),o=t(32559),h=t(44370),i=t(79318),x=t(67479),$=t(70768),L=t(34508),l=t(21270),D=t(72182),_=t(96586),tt=t(83314),O=t(43242),G=t(63891);const I=G.default.div`
  background: ${({theme:n})=>n.colors.danger500};
  border: none;
  border-radius: 16px;
  position: relative;
  height: ${24/16}rem;
  width: ${40/16}rem;

  & span {
    font-size: ${({visibleLabels:n})=>n?"1rem":0};
  }

  &:before {
    content: '';
    background: ${({theme:n})=>n.colors.neutral0};
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    position: absolute;
    transition: all 0.5s;
    left: ${({theme:n})=>n.spaces[1]};
    top: ${({theme:n})=>n.spaces[1]};
  }

  @media (prefers-reduced-motion: reduce) {
    &:before {
      transition: none;
    }
  }
`,st=G.default.button`
  background: transparent;
  padding: 0;
  border: none;

  &[aria-checked='true'] ${I} {
    background: ${({theme:n})=>n.colors.success500};
  }

  &[aria-checked='true'] ${I}:before {
    transform: translateX(1rem);
  }
`,ot=g.forwardRef(({label:n,onChange:u,onLabel:A="On",offLabel:S="Off",selected:j,visibleLabels:m=!1,...k},a)=>(0,s.jsx)(st,{ref:a,role:"switch","aria-checked":j,"aria-label":n,onClick:u,visibleLabels:m,type:"button",...k,children:(0,s.jsxs)(O.s,{children:[(0,s.jsxs)(I,{children:[(0,s.jsx)("span",{children:A}),(0,s.jsx)("span",{children:S})]}),m&&(0,s.jsx)(h.a,{as:"span","aria-hidden":!0,paddingLeft:2,color:j?"success600":"danger600",children:j?A:S})]})}));var V=t(19106),et=t(17840),at=t(43459),v=t(8769),R=t(31127),Q=t(39423),nt=t(31708),rt=t(28312),it=t(54894),X=t(17703),dt=t(71389),Y=t(57494),lt=t(39952),Ct=t(15126),Wt=t(63299),bt=t(67014),St=t(59080),Et=t(79275),Pt=t(14718),Lt=t(82437),Dt=t(61535),At=t(5790),Bt=t(12083),pt=t(35223),$t=t(5409),Ot=t(74930),It=t(2600),Rt=t(48940),kt=t(41286),Ut=t(56336),Ft=t(13426),Nt=t(84624),Kt=t(77965),zt=t(54257),Ht=t(71210),Jt=t(51187),Gt=t(39404),Vt=t(58692),Qt=t(501),Xt=t(57646),Yt=t(23120),Zt=t(44414),wt=t(25962),qt=t(14664),_t=t(42588),ts=t(90325),ss=t(62785),os=t(87443),es=t(41032),as=t(22957),ns=t(93179),rs=t(73055),is=t(15747),ds=t(85306),ls=t(26509),hs=t(32058),gs=t(81185),cs=t(82261);const ht=()=>{const[n,u]=g.useState(!1),[A,S]=g.useState(!1),[j,m]=g.useState([]),k=(0,Y.j)(e=>e.admin_app.permissions.settings?.webhooks),{formatMessage:a}=(0,it.A)(),{_unstableFormatAPIError:B}=(0,v.useAPIErrorHandler)(),y=(0,v.useNotification)();(0,v.useFocusWhenNavigate)();const{push:ct}=(0,X.W6)(),{pathname:Z}=(0,X.zy)(),{isLoading:mt,allowedActions:{canCreate:U,canUpdate:F,canDelete:w}}=(0,v.useRBAC)(k),{notifyStatus:q}=(0,f.W)(),{isLoading:vt,webhooks:E,error:N,updateWebhook:ut,deleteManyWebhooks:ft}=(0,lt.u)();g.useEffect(()=>{if(N){y({type:"warning",message:B(N)});return}E&&q(a({id:"Settings.webhooks.list.loading.success",defaultMessage:"Webhooks have been loaded"}))},[E,N,y,a,q,B]);const xt=async e=>{try{const r=await ut(e);"error"in r&&y({type:"warning",message:B(r.error)})}catch{y({type:"warning",message:{id:"notification.error",defaultMessage:"An error occurred"}})}},jt=async()=>{try{S(!0);const e=await ft({ids:j});if("error"in e){y({type:"warning",message:B(e.error)});return}m([])}catch{y({type:"warning",message:{id:"notification.error",defaultMessage:"An error occurred"}})}finally{S(!1),u(!1)}},yt=e=>m(e?E?.map(r=>r.id)??[]:[]),Tt=(e,r)=>m(e?H=>[...H,r]:H=>H.filter(Mt=>Mt!==r)),K=e=>()=>ct(`${Z}/${e}`),z=mt||vt,p=E?.length??0,P=j.length;return(0,s.jsxs)(M.P,{children:[(0,s.jsx)(v.SettingsPageTitle,{name:"Webhooks"}),(0,s.jsxs)(C.g,{"aria-busy":z,children:[(0,s.jsx)(W.Q,{title:a({id:"Settings.webhooks.title",defaultMessage:"Webhooks"}),subtitle:a({id:"Settings.webhooks.list.description",defaultMessage:"Get POST changes notifications"}),primaryAction:U&&!z&&(0,s.jsx)(at.z,{as:dt.NavLink,startIcon:(0,s.jsx)(R.A,{}),variant:"default",to:`${Z}/create`,size:"S",children:a({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"})})}),P>0&&w&&(0,s.jsx)(b.B,{startActions:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c.o,{variant:"epsilon",textColor:"neutral600",children:a({id:"Settings.webhooks.to.delete",defaultMessage:"{webhooksToDeleteLength, plural, one {# webhook} other {# webhooks}} selected"},{webhooksToDeleteLength:P})}),(0,s.jsx)(d.$,{onClick:()=>u(!0),startIcon:(0,s.jsx)(Q.A,{}),size:"L",variant:"danger-light",children:a({id:"global.delete",defaultMessage:"Delete"})})]})}),(0,s.jsx)(o.s,{children:z?(0,s.jsx)(h.a,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:(0,s.jsx)(v.LoadingIndicatorPage,{})}):p>0?(0,s.jsxs)(i.X,{colCount:5,rowCount:p+1,footer:(0,s.jsx)(x.S,{onClick:K("create"),icon:(0,s.jsx)(R.A,{}),children:a({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"})}),children:[(0,s.jsx)($.d,{children:(0,s.jsxs)(L.Tr,{children:[(0,s.jsx)(l.Th,{children:(0,s.jsx)(D.J,{"aria-label":a({id:"global.select-all-entries",defaultMessage:"Select all entries"}),indeterminate:P>0&&P<p,value:P===p,onValueChange:yt})}),(0,s.jsx)(l.Th,{width:"20%",children:(0,s.jsx)(c.o,{variant:"sigma",textColor:"neutral600",children:a({id:"global.name",defaultMessage:"Name"})})}),(0,s.jsx)(l.Th,{width:"60%",children:(0,s.jsx)(c.o,{variant:"sigma",textColor:"neutral600",children:a({id:"Settings.webhooks.form.url",defaultMessage:"URL"})})}),(0,s.jsx)(l.Th,{width:"20%",children:(0,s.jsx)(c.o,{variant:"sigma",textColor:"neutral600",children:a({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"})})}),(0,s.jsx)(l.Th,{children:(0,s.jsx)(_.s,{children:a({id:"Settings.webhooks.list.th.actions",defaultMessage:"Actions"})})})]})}),(0,s.jsx)(tt.N,{children:E?.map(e=>(0,s.jsxs)(L.Tr,{onClick:F?K(e.id):void 0,style:{cursor:F?"pointer":"default"},children:[(0,s.jsx)(l.Td,{onClick:r=>r.stopPropagation(),children:(0,s.jsx)(D.J,{"aria-label":`${a({id:"global.select",defaultMessage:"Select"})} ${e.name}`,value:j?.includes(e.id),onValueChange:r=>Tt(r,e.id),name:"select"})}),(0,s.jsx)(l.Td,{children:(0,s.jsx)(c.o,{fontWeight:"semiBold",textColor:"neutral800",children:e.name})}),(0,s.jsx)(l.Td,{children:(0,s.jsx)(c.o,{textColor:"neutral800",children:e.url})}),(0,s.jsx)(l.Td,{children:(0,s.jsx)(O.s,{children:(0,s.jsx)(ot,{onLabel:a({id:"global.enabled",defaultMessage:"Enabled"}),offLabel:a({id:"global.disabled",defaultMessage:"Disabled"}),label:`${e.name} ${a({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"})}`,selected:e.isEnabled,onChange:r=>{r.stopPropagation(),xt({...e,isEnabled:!e.isEnabled})},visibleLabels:!0})})}),(0,s.jsx)(l.Td,{children:(0,s.jsxs)(O.s,{gap:1,children:[F&&(0,s.jsx)(V.K,{label:a({id:"Settings.webhooks.events.update",defaultMessage:"Update"}),icon:(0,s.jsx)(nt.A,{}),noBorder:!0}),w&&(0,s.jsx)(V.K,{onClick:r=>{r.stopPropagation(),m([e.id]),u(!0)},label:a({id:"Settings.webhooks.events.delete",defaultMessage:"Delete webhook"}),icon:(0,s.jsx)(Q.A,{}),noBorder:!0})]})})]},e.id))})]}):(0,s.jsx)(et.p,{icon:(0,s.jsx)(rt.A,{width:"160px"}),content:a({id:"Settings.webhooks.list.empty.description",defaultMessage:"No webhooks found"}),action:(0,s.jsx)(d.$,{variant:"secondary",startIcon:(0,s.jsx)(R.A,{}),disabled:!U,onClick:U?K("create"):void 0,children:a({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"})})})})]}),(0,s.jsx)(v.ConfirmDialog,{isOpen:n,onToggleDialog:()=>u(e=>!e),onConfirm:jt,isConfirmButtonLoading:A})]})},gt=()=>{const n=(0,Y.j)(u=>u.admin_app.permissions.settings?.webhooks.main);return(0,s.jsx)(v.CheckPagePermissions,{permissions:n,children:(0,s.jsx)(ht,{})})}},39952:(J,T,t)=>{t.d(T,{u:()=>c});var s=t(57494);const g=s.n.injectEndpoints({endpoints:d=>({getWebhooks:d.query({query:o=>({url:`/admin/webhooks/${o?.id??""}`,method:"GET"}),transformResponse:o=>Array.isArray(o.data)?o.data:[o.data],providesTags:(o,h,i)=>typeof i=="object"&&"id"in i?[{type:"Webhook",id:i.id}]:[...o?.map(({id:x})=>({type:"Webhook",id:x}))??[],{type:"Webhook",id:"LIST"}]}),createWebhook:d.mutation({query:o=>({url:"/admin/webhooks",method:"POST",data:o}),transformResponse:o=>o.data,invalidatesTags:[{type:"Webhook",id:"LIST"}]}),updateWebhook:d.mutation({query:({id:o,...h})=>({url:`/admin/webhooks/${o}`,method:"PUT",data:h}),transformResponse:o=>o.data,invalidatesTags:(o,h,{id:i})=>[{type:"Webhook",id:i}]}),triggerWebhook:d.mutation({query:o=>({url:`/admin/webhooks/${o}/trigger`,method:"POST"}),transformResponse:o=>o.data}),deleteManyWebhooks:d.mutation({query:o=>({url:"/admin/webhooks/batch-delete",method:"POST",data:o}),transformResponse:o=>o.data,invalidatesTags:(o,h,{ids:i})=>i.map(x=>({type:"Webhook",id:x}))})}),overrideExisting:!1}),{useGetWebhooksQuery:f,useCreateWebhookMutation:M,useUpdateWebhookMutation:C,useTriggerWebhookMutation:W,useDeleteManyWebhooksMutation:b}=g,c=(d=void 0,o)=>{const{data:h,isLoading:i,error:x}=f(d,o),[$]=M(),[L]=C(),[l]=W(),[D]=b();return{webhooks:h,isLoading:i,error:x,createWebhook:$,updateWebhook:L,triggerWebhook:l,deleteManyWebhooks:D}}},67479:(J,T,t)=>{t.d(T,{S:()=>d});var s=t(92132),g=t(63891),f=t(44370),M=t(24122),C=t(43242),W=t(57842);const b=(0,g.default)(f.a)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:o})=>o.colors.primary600};
  }
`,c=(0,g.default)(f.a)`
  border-radius: 0 0 ${({theme:o})=>o.borderRadius} ${({theme:o})=>o.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,d=({children:o,icon:h,...i})=>(0,s.jsxs)("div",{children:[(0,s.jsx)(M.c,{}),(0,s.jsx)(c,{as:"button",background:"primary100",padding:5,...i,children:(0,s.jsxs)(C.s,{children:[(0,s.jsx)(b,{"aria-hidden":!0,background:"primary200",children:h}),(0,s.jsx)(f.a,{paddingLeft:3,children:(0,s.jsx)(W.o,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:o})})]})})]})}}]);
