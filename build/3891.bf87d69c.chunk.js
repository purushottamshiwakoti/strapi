"use strict";(self.webpackChunkstrapi_project=self.webpackChunkstrapi_project||[]).push([[3891],{26407:(A,D,s)=>{s.d(D,{B:()=>y,D:()=>I,H:()=>K,R:()=>U});var t=s(92132),l=s(43242),d=s(57842),P=s(53432),O=s(55794),g=s(32559),m=s(43121),a=s(8769),e=s(28556),o=s(95065),E=s(54894),c=s(57494),T=s(25524),i=s(63891);const M=(0,i.default)(l.s)`
  svg path {
    fill: ${({theme:r})=>r.colors.neutral600};
  }
`,W=({name:r})=>(0,t.jsxs)(l.s,{background:"primary100",borderStyle:"dashed",borderColor:"primary600",borderWidth:"1px",gap:3,hasRadius:!0,padding:3,shadow:"tableShadow",width:(0,a.pxToRem)(300),children:[(0,t.jsx)(M,{alignItems:"center",background:"neutral200",borderRadius:"50%",height:6,justifyContent:"center",width:6,children:(0,t.jsx)(e.A,{width:`${8/16}rem`})}),(0,t.jsx)(d.o,{fontWeight:"bold",children:r})]}),I=()=>(0,t.jsx)(c.P,{renderItem:r=>{if(r.type===T.D.STAGE)return(0,t.jsx)(W,{name:typeof r.item=="string"?r.item:null})}}),U=({children:r})=>(0,t.jsx)(P.P,{children:(0,t.jsx)(O.g,{tabIndex:-1,children:(0,t.jsx)(g.s,{children:r})})}),y=({href:r})=>{const{formatMessage:C}=(0,E.A)();return(0,t.jsx)(a.Link,{startIcon:(0,t.jsx)(o.A,{}),to:r,children:C({id:"global.back",defaultMessage:"Back"})})},K=({title:r,subtitle:C,navigationAction:L,primaryAction:h})=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.SettingsPageTitle,{name:r}),(0,t.jsx)(m.Q,{navigationAction:L,primaryAction:h,title:r,subtitle:C})]})},53891:(A,D,s)=>{s.d(D,{ProtectedReviewWorkflowsPage:()=>V});var t=s(92132),l=s(21272),d=s(43242),P=s(62228),O=s(79318),g=s(67479),m=s(70768),a=s(34508),e=s(21270),o=s(57842),E=s(96586),c=s(83314),T=s(19106),i=s(8769),M=s(31127),W=s(31708),I=s(39423),U=s(54894),y=s(17703),K=s(63891),r=s(57494),C=s(85063),L=s(26407),h=s(45084),k=s(25524),G=s(52319),ls=s(15126),Es=s(63299),ds=s(67014),Ms=s(59080),Ds=s(79275),Ps=s(14718),Os=s(82437),gs=s(61535),ms=s(5790),cs=s(12083),fs=s(35223),vs=s(5409),Ts=s(74930),Cs=s(2600),hs=s(48940),As=s(41286),Ls=s(56336),Rs=s(13426),Bs=s(84624),Ws=s(77965),Is=s(54257),Us=s(71210),ys=s(51187),Ks=s(39404),js=s(58692),us=s(501),xs=s(57646),ps=s(23120),ws=s(44414),Ss=s(25962),$s=s(14664),Ns=s(42588),Fs=s(90325),Hs=s(62785),Js=s(87443),ks=s(41032),Gs=s(22957),Qs=s(93179),zs=s(73055),Vs=s(15747),Xs=s(85306),Ys=s(26509),Zs=s(32058),bs=s(81185),qs=s(82261),st=s(9033);const Q=(0,K.default)(i.Link)`
  align-items: center;
  height: ${(0,i.pxToRem)(32)};
  display: flex;
  justify-content: center;
  padding: ${({theme:n})=>`${n.spaces[2]}}`};
  width: ${(0,i.pxToRem)(32)};

  svg {
    height: ${(0,i.pxToRem)(12)};
    width: ${(0,i.pxToRem)(12)};

    path {
      fill: ${({theme:n})=>n.colors.neutral500};
    }
  }

  &:hover,
  &:focus {
    svg {
      path {
        fill: ${({theme:n})=>n.colors.neutral800};
      }
    }
  }
`,z=()=>{const{formatMessage:n}=(0,U.A)(),{push:R}=(0,y.W6)(),{trackUsage:w}=(0,i.useTracking)(),[j,u]=l.useState(null),[X,B]=l.useState(!1),{collectionTypes:Y,singleTypes:Z,isLoading:b}=(0,C.u)(),{meta:f,workflows:S,isLoading:x,deleteWorkflow:q}=(0,G.u)(),[ss,$]=l.useState(!1),{_unstableFormatAPIError:ts}=(0,i.useAPIErrorHandler)(),p=(0,i.useNotification)(),{getFeature:os,isLoading:N}=(0,r.m)(),es=(0,r.j)(_=>_.admin_app.permissions.settings?.["review-workflows"]),{allowedActions:{canCreate:F,canDelete:ns}}=(0,i.useRBAC)(es),v=os("review-workflows")?.[k.C],_s=_=>[...Y,...Z].find(J=>J.uid===_)?.info.displayName,as=_=>{u(_)},is=()=>{u(null)},rs=async()=>{if(j)try{$(!0);const _=await q({id:j});if("error"in _){p({type:"warning",message:ts(_.error)});return}u(null),p({type:"success",message:{id:"notification.success.deleted",defaultMessage:"Deleted"}})}catch{p({type:"warning",message:{id:"notification.error.unexpected",defaultMessage:"An error occurred"}})}finally{$(!1)}};return l.useEffect(()=>{!x&&!N&&v&&f&&f?.workflowCount>parseInt(v,10)&&B(!0)},[N,x,f,f?.workflowCount,v]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(L.H,{primaryAction:F&&(0,t.jsx)(i.LinkButton,{startIcon:(0,t.jsx)(M.A,{}),size:"S",to:"/settings/review-workflows/create",onClick:_=>{v&&f&&f?.workflowCount>=parseInt(v,10)?(_.preventDefault(),B(!0)):w("willCreateWorkflow")},children:n({id:"Settings.review-workflows.list.page.create",defaultMessage:"Create new workflow"})}),subtitle:n({id:"Settings.review-workflows.list.page.subtitle",defaultMessage:"Manage your content review process"}),title:n({id:"Settings.review-workflows.list.page.title",defaultMessage:"Review Workflows"})}),(0,t.jsxs)(L.R,{children:[x||b?(0,t.jsx)(d.s,{justifyContent:"center",children:(0,t.jsx)(P.a,{children:n({id:"Settings.review-workflows.page.list.isLoading",defaultMessage:"Workflows are loading"})})}):(0,t.jsxs)(O.X,{colCount:3,footer:F&&(0,t.jsx)(g.S,{icon:(0,t.jsx)(M.A,{}),onClick:()=>{v&&f&&f?.workflowCount>=parseInt(v,10)?B(!0):(R("/settings/review-workflows/create"),w("willCreateWorkflow"))},children:n({id:"Settings.review-workflows.list.page.create",defaultMessage:"Create new workflow"})}),rowCount:1,children:[(0,t.jsx)(m.d,{children:(0,t.jsxs)(a.Tr,{children:[(0,t.jsx)(e.Th,{children:(0,t.jsx)(o.o,{variant:"sigma",children:n({id:"Settings.review-workflows.list.page.list.column.name.title",defaultMessage:"Name"})})}),(0,t.jsx)(e.Th,{children:(0,t.jsx)(o.o,{variant:"sigma",children:n({id:"Settings.review-workflows.list.page.list.column.stages.title",defaultMessage:"Stages"})})}),(0,t.jsx)(e.Th,{children:(0,t.jsx)(o.o,{variant:"sigma",children:n({id:"Settings.review-workflows.list.page.list.column.contentTypes.title",defaultMessage:"Content Types"})})}),(0,t.jsx)(e.Th,{children:(0,t.jsx)(E.s,{children:n({id:"Settings.review-workflows.list.page.list.column.actions.title",defaultMessage:"Actions"})})})]})}),(0,t.jsx)(c.N,{children:S?.map(_=>(0,l.createElement)(a.Tr,{...(0,i.onRowClick)({fn(H){H.target.nodeName!=="BUTTON"&&R(`/settings/review-workflows/${_.id}`)}}),key:`workflow-${_.id}`},(0,t.jsx)(e.Td,{width:(0,i.pxToRem)(250),children:(0,t.jsx)(o.o,{textColor:"neutral800",fontWeight:"bold",ellipsis:!0,children:_.name})}),(0,t.jsx)(e.Td,{children:(0,t.jsx)(o.o,{textColor:"neutral800",children:_.stages.length})}),(0,t.jsx)(e.Td,{children:(0,t.jsx)(o.o,{textColor:"neutral800",children:(_?.contentTypes??[]).map(_s).join(", ")})}),(0,t.jsx)(e.Td,{children:(0,t.jsxs)(d.s,{alignItems:"center",justifyContent:"end",children:[(0,t.jsx)(Q,{to:`/settings/review-workflows/${_.id}`,"aria-label":n({id:"Settings.review-workflows.list.page.list.column.actions.edit.label",defaultMessage:"Edit {name}"},{name:_.name}),children:(0,t.jsx)(W.A,{})}),S.length>1&&ns&&(0,t.jsx)(T.K,{"aria-label":n({id:"Settings.review-workflows.list.page.list.column.actions.delete.label",defaultMessage:"Delete {name}"},{name:"Default workflow"}),icon:(0,t.jsx)(I.A,{}),noBorder:!0,onClick:()=>{as(String(_.id))}})]})})))})]}),(0,t.jsx)(i.ConfirmDialog,{bodyText:{id:"Settings.review-workflows.list.page.delete.confirm.body",defaultMessage:"If you remove this worfklow, all stage-related information will be removed for this content-type. Are you sure you want to remove it?"},isConfirmButtonLoading:ss,isOpen:!!j,onToggleDialog:is,onConfirm:rs}),(0,t.jsxs)(h.L.Root,{isOpen:X,onClose:()=>B(!1),children:[(0,t.jsx)(h.L.Title,{children:n({id:"Settings.review-workflows.list.page.workflows.limit.title",defaultMessage:"You\u2019ve reached the limit of workflows in your plan"})}),(0,t.jsx)(h.L.Body,{children:n({id:"Settings.review-workflows.list.page.workflows.limit.body",defaultMessage:"Delete a workflow or contact Sales to enable more workflows."})})]})]})]})},V=()=>{const n=(0,r.j)(R=>R.admin_app.permissions.settings?.["review-workflows"]?.main);return(0,t.jsx)(i.CheckPagePermissions,{permissions:n,children:(0,t.jsx)(z,{})})}},85063:(A,D,s)=>{s.d(D,{u:()=>m});var t=s(21272),l=s(8769),d=s(57494);const P=d.n.injectEndpoints({endpoints:a=>({getComponents:a.query({query:()=>({url:"/content-manager/components",method:"GET"}),transformResponse:e=>e.data}),getContentTypes:a.query({query:()=>({url:"/content-manager/content-types",method:"GET"}),transformResponse:e=>e.data})}),overrideExisting:!1}),{useGetComponentsQuery:O,useGetContentTypesQuery:g}=P;function m(){const{_unstableFormatAPIError:a}=(0,l.useAPIErrorHandler)(),e=(0,l.useNotification)(),o=O(),E=g();t.useEffect(()=>{E.error&&e({type:"warning",message:a(E.error)})},[E.error,a,e]),t.useEffect(()=>{o.error&&e({type:"warning",message:a(o.error)})},[o.error,a,e]);const c=o.isLoading||E.isLoading,T=t.useMemo(()=>(E?.data??[]).filter(M=>M.kind==="collectionType"&&M.isDisplayed),[E?.data]),i=t.useMemo(()=>(E?.data??[]).filter(M=>M.kind!=="collectionType"&&M.isDisplayed),[E?.data]);return{isLoading:c,components:t.useMemo(()=>o?.data??[],[o?.data]),collectionTypes:T,singleTypes:i}}},52319:(A,D,s)=>{s.d(D,{u:()=>l});var t=s(9033);function l(d={}){const{id:P="",...O}=d,{data:g,isLoading:m}=(0,t.c)({id:P,populate:"stages",...O}),[a]=(0,t.d)(),[e]=(0,t.e)(),[o]=(0,t.f)(),{workflows:E,meta:c}=g??{};return{meta:c,workflows:E,isLoading:m,createWorkflow:a,updateWorkflow:e,deleteWorkflow:o}}},67479:(A,D,s)=>{s.d(D,{S:()=>e});var t=s(92132),l=s(63891),d=s(44370),P=s(24122),O=s(43242),g=s(57842);const m=(0,l.default)(d.a)`
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
`,a=(0,l.default)(d.a)`
  border-radius: 0 0 ${({theme:o})=>o.borderRadius} ${({theme:o})=>o.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,e=({children:o,icon:E,...c})=>(0,t.jsxs)("div",{children:[(0,t.jsx)(P.c,{}),(0,t.jsx)(a,{as:"button",background:"primary100",padding:5,...c,children:(0,t.jsxs)(O.s,{children:[(0,t.jsx)(m,{"aria-hidden":!0,background:"primary200",children:E}),(0,t.jsx)(d.a,{paddingLeft:3,children:(0,t.jsx)(g.o,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:o})})]})})]})}}]);