"use strict";(self.webpackChunkstrapi_project=self.webpackChunkstrapi_project||[]).push([[5687],{26407:($,T,t)=>{t.d(T,{B:()=>k,D:()=>W,H:()=>C,R:()=>N});var r=t(92132),v=t(43242),s=t(57842),y=t(53432),m=t(55794),h=t(32559),M=t(43121),u=t(8769),p=t(28556),P=t(95065),w=t(54894),j=t(57494),I=t(25524),x=t(63891);const A=(0,x.default)(v.s)`
  svg path {
    fill: ${({theme:D})=>D.colors.neutral600};
  }
`,U=({name:D})=>(0,r.jsxs)(v.s,{background:"primary100",borderStyle:"dashed",borderColor:"primary600",borderWidth:"1px",gap:3,hasRadius:!0,padding:3,shadow:"tableShadow",width:(0,u.pxToRem)(300),children:[(0,r.jsx)(A,{alignItems:"center",background:"neutral200",borderRadius:"50%",height:6,justifyContent:"center",width:6,children:(0,r.jsx)(p.A,{width:`${8/16}rem`})}),(0,r.jsx)(s.o,{fontWeight:"bold",children:D})]}),W=()=>(0,r.jsx)(j.P,{renderItem:D=>{if(D.type===I.D.STAGE)return(0,r.jsx)(U,{name:typeof D.item=="string"?D.item:null})}}),N=({children:D})=>(0,r.jsx)(y.P,{children:(0,r.jsx)(m.g,{tabIndex:-1,children:(0,r.jsx)(h.s,{children:D})})}),k=({href:D})=>{const{formatMessage:F}=(0,w.A)();return(0,r.jsx)(u.Link,{startIcon:(0,r.jsx)(P.A,{}),to:D,children:F({id:"global.back",defaultMessage:"Back"})})},C=({title:D,subtitle:F,navigationAction:X,primaryAction:q})=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u.SettingsPageTitle,{name:D}),(0,r.jsx)(M.Q,{navigationAction:X,primaryAction:q,title:D,subtitle:F})]})},35658:($,T,t)=>{t.d(T,{a:()=>y,g:()=>s});var r=t(5538),v=t(25524);function s(m){if(!m)return null;const M=Object.entries(r._.colors).filter(([,u])=>u.toUpperCase()===m.toUpperCase()).reduce((u,[p])=>(v.S?.[p]&&(u=p),u),null);return M?{themeColorName:M,name:v.S[M]}:null}function y(){return Object.entries(v.S).map(([m,h])=>({hex:r._.colors[m].toUpperCase(),name:h}))}},46794:($,T,t)=>{t.d(T,{u:()=>m});var r=t(21272),v=t(8769),s=t(54894),y=t(57494);const m=(h={},M)=>{const{locale:u}=(0,s.A)(),p=(0,v.useCollator)(u,{sensitivity:"base"}),{data:P,error:w,isError:j,isLoading:I,refetch:x}=(0,y.z)(h,M);return{roles:r.useMemo(()=>[...P??[]].sort((U,W)=>p.compare(U.name,W.name)),[P,p]),error:w,isError:j,isLoading:I,refetch:x}}},85063:($,T,t)=>{t.d(T,{u:()=>M});var r=t(21272),v=t(8769),s=t(57494);const y=s.n.injectEndpoints({endpoints:u=>({getComponents:u.query({query:()=>({url:"/content-manager/components",method:"GET"}),transformResponse:p=>p.data}),getContentTypes:u.query({query:()=>({url:"/content-manager/content-types",method:"GET"}),transformResponse:p=>p.data})}),overrideExisting:!1}),{useGetComponentsQuery:m,useGetContentTypesQuery:h}=y;function M(){const{_unstableFormatAPIError:u}=(0,v.useAPIErrorHandler)(),p=(0,v.useNotification)(),P=m(),w=h();r.useEffect(()=>{w.error&&p({type:"warning",message:u(w.error)})},[w.error,u,p]),r.useEffect(()=>{P.error&&p({type:"warning",message:u(P.error)})},[P.error,u,p]);const j=P.isLoading||w.isLoading,I=r.useMemo(()=>(w?.data??[]).filter(A=>A.kind==="collectionType"&&A.isDisplayed),[w?.data]),x=r.useMemo(()=>(w?.data??[]).filter(A=>A.kind!=="collectionType"&&A.isDisplayed),[w?.data]);return{isLoading:j,components:r.useMemo(()=>P?.data??[],[P?.data]),collectionTypes:I,singleTypes:x}}},52319:($,T,t)=>{t.d(T,{u:()=>v});var r=t(9033);function v(s={}){const{id:y="",...m}=s,{data:h,isLoading:M}=(0,r.c)({id:y,populate:"stages",...m}),[u]=(0,r.d)(),[p]=(0,r.e)(),[P]=(0,r.f)(),{workflows:w,meta:j}=h??{};return{meta:j,workflows:w,isLoading:M,createWorkflow:u,updateWorkflow:p,deleteWorkflow:P}}},77688:($,T,t)=>{t.d(T,{S:()=>et,W:()=>ot,a:()=>$e,b:()=>Ee,c:()=>fe,d:()=>xe,e:()=>ke,f:()=>Ie,g:()=>Be,h:()=>ge,i:()=>be,j:()=>ze,k:()=>Ne,l:()=>Te,r:()=>je,s:()=>Fe,u:()=>Se,v:()=>at});var r=t(21272),v=t(57494),s=t(92132),y=t(44370),m=t(57842),h=t(43242),M=t(5391),u=t(19106),p=t(96586),P=t(47098),w=t(96294),j=t(80725),I=t(57564),x=t(68065),A=t(81926),U=t(19448),W=t(8769),N=t(54894),k=t(82437),C=t(63891),D=t(30431),F=t(83016),X=t(22169),q=t(72702),we=t(33544),ce=t(99981),V=t(18111),z=t(61535),De=t(25801),i=t(25524),ee=t(35658),B=t(70653),Pe=t(56336),_e=t(88761),Oe=t(48940),S=t(12083);function Se(e,o){const n=(0,v.Q)();(0,r.useEffect)(()=>{n.injectReducer(e,o)},[n,e,o])}function Ce(e){return{type:i.j,payload:{id:e}}}function Te({workflow:e}){return{type:i.A,payload:e}}function xe({workflows:e}){return{type:i.c,payload:e}}function Ae(e){return{type:i.k,payload:{stageId:e}}}function ge(e){return{type:i.d,payload:e}}function te(e,o){return{type:i.l,payload:{stageId:e,...o}}}function We(e){return{type:i.m,payload:e}}function Re(e,o){return{type:i.n,payload:{newIndex:o,oldIndex:e}}}function ue(e){return{type:i.i,payload:e}}function je(){return{type:i.e}}function ke(e){return{type:i.f,payload:e}}function Ie(e){return{type:i.g,payload:e}}function Be(e){return{type:i.h,payload:e}}const se=(0,C.default)(D.A)`
  > circle {
    fill: ${({theme:e})=>e.colors.neutral150};
  }
  > path {
    fill: ${({theme:e})=>e.colors.neutral600};
  }
`,Le=(0,C.default)(y.a)`
  border-radius: 26px;

  svg {
    height: ${({theme:e})=>e.spaces[6]};
    width: ${({theme:e})=>e.spaces[6]};

    > path {
      fill: ${({theme:e})=>e.colors.neutral600};
    }
  }

  &:hover {
    color: ${({theme:e})=>e.colors.primary600} !important;
    ${m.o} {
      color: ${({theme:e})=>e.colors.primary600} !important;
    }

    ${se} {
      > circle {
        fill: ${({theme:e})=>e.colors.primary600};
      }
      > path {
        fill: ${({theme:e})=>e.colors.neutral100};
      }
    }
  }

  &:active {
    ${m.o} {
      color: ${({theme:e})=>e.colors.primary600};
    }

    ${se} {
      > circle {
        fill: ${({theme:e})=>e.colors.primary600};
      }
      > path {
        fill: ${({theme:e})=>e.colors.neutral100};
      }
    }
  }
`,pe=({children:e,...o})=>(0,s.jsx)(Le,{as:"button",background:"neutral0",border:"neutral150",paddingBottom:3,paddingLeft:4,paddingRight:4,paddingTop:3,shadow:"filterShadow",...o,children:(0,s.jsxs)(h.s,{gap:2,children:[(0,s.jsx)(se,{"aria-hidden":!0}),(0,s.jsx)(m.o,{variant:"pi",fontWeight:"bold",textColor:"neutral500",children:e})]})});pe.propTypes={children:we.node.isRequired};const G={serverState:{contentTypes:{collectionTypes:[],singleTypes:[]},roles:[],workflow:null,workflows:[]},clientState:{currentWorkflow:{data:{name:"",contentTypes:[],stages:[],permissions:void 0}},isLoading:!0}};function be(e=G,o){return(0,_e.produce)(e,n=>{const{payload:c}=o;switch(o.type){case i.f:{n.serverState.contentTypes=c;break}case i.h:{n.clientState.isLoading=c;break}case i.g:{n.serverState.roles=c;break}case i.A:{const a=c;a&&(n.serverState.workflow=a,n.clientState.currentWorkflow.data={...a,stages:a.stages.map(d=>({...d,color:d?.color??i.b}))});break}case i.c:{n.serverState.workflows=c;break}case i.e:{n.clientState=G.clientState,n.serverState=(0,_e.createDraft)(G.serverState);break}case i.k:{const{stageId:a}=c,{currentWorkflow:d}=e.clientState;n.clientState.currentWorkflow.data.stages=d.data.stages?.filter(f=>(f?.id??f.__temp_key__)!==a);break}case i.d:{const{currentWorkflow:a}=e.clientState;a.data||(n.clientState.currentWorkflow.data={stages:[]});const d=me(n.clientState.currentWorkflow.data.stages);n.clientState.currentWorkflow.data.stages?.push({...c,color:c?.color??i.b,__temp_key__:d});break}case i.j:{const{currentWorkflow:a}=e.clientState,{id:d}=c,f=a.data.stages?.findIndex(E=>(E?.id??E?.__temp_key__)===d);if(f!==void 0&&f!==-1){const E=a.data.stages?.[f];n.clientState.currentWorkflow.data.stages?.splice(f+1,0,{...E,id:void 0,__temp_key__:me(n.clientState.currentWorkflow.data.stages)})}break}case i.l:{const{currentWorkflow:a}=e.clientState,{stageId:d,...f}=c;n.clientState.currentWorkflow.data.stages=a.data.stages?.map(E=>(E.id??E.__temp_key__)===d?{...E,...f}:E);break}case i.m:{const{currentWorkflow:a}=e.clientState;n.clientState.currentWorkflow.data.stages=a.data.stages?.map(d=>({...d,...c}));break}case i.n:{const{currentWorkflow:{data:{stages:a}}}=e.clientState,{newIndex:d,oldIndex:f}=c;if(a&&d>=0&&d<a.length){const E=a[f],R=[...a];R.splice(f,1),R.splice(d,0,E),n.clientState.currentWorkflow.data.stages=R}break}case i.i:{n.clientState.currentWorkflow.data={...n.clientState.currentWorkflow.data,...c};break}}})}const me=(e=[])=>{const o=e.map(n=>Number(n.id??n.__temp_key__));return Math.max(...o,-1)+1},L=e=>e[i.R]??G,Ke=(0,B.Mz)(L,({serverState:{contentTypes:e}})=>e),fe=(0,B.Mz)(L,({serverState:{roles:e}})=>e),Ee=(0,B.Mz)(L,({clientState:{currentWorkflow:e}})=>e.data),Ue=(0,B.Mz)(L,({serverState:{workflows:e}})=>e),$e=(0,B.Mz)(L,({serverState:e,clientState:{currentWorkflow:o}})=>!Pe(e.workflow,o.data)),Ne=(0,B.Mz)(L,({serverState:e,clientState:{currentWorkflow:o}})=>!(e.workflow?.stages??[]).every(n=>!!o.data.stages?.find(({id:c})=>c===n.id))),Fe=(0,B.Mz)(L,({clientState:{isLoading:e}})=>e),ze=(0,B.Mz)(L,({serverState:e})=>e),He=(0,C.default)(M.fe)`
  padding-left: ${({theme:e})=>e.spaces[7]};
`,Ve=(0,C.default)(h.s)`
  > * {
    flex-grow: 1;
  }
`,Ge=(0,C.default)(ce.Dr)`
  color: ${({theme:e})=>e.colors.danger600};
`,Je=(0,C.default)(V.l9)`
  :hover,
  :focus {
    background-color: ${({theme:e})=>e.colors.neutral100};
  }

  > span {
    font-size: 0;
  }
`,Qe=(0,C.default)(u.K)`
  align-items: center;
  border-radius: ${({theme:e})=>e.borderRadius};
  display: flex;
  justify-content: center;

  :hover,
  :focus {
    background-color: ${({theme:e})=>e.colors.neutral100};
  }

  svg {
    height: auto;
    width: ${({theme:e})=>e.spaces[3]}};
  }
`,Ye=(0,ee.a)(),Ze=()=>(0,s.jsx)(y.a,{background:"primary100",borderStyle:"dashed",borderColor:"primary600",borderWidth:"1px",display:"block",hasRadius:!0,padding:6,shadow:"tableShadow"}),Xe=({id:e,index:o,canDelete:n,canReorder:c,canUpdate:a,isOpen:d=!1,stagesCount:f})=>{const E=l=>`${l+1} of ${f}`,R=l=>{_(g({id:"dnd.grab-item",defaultMessage:"{item}, grabbed. Current position in list: {position}. Press up and down arrow to change position, Spacebar to drop, Escape to cancel."},{item:b.value,position:E(l)}))},oe=l=>{_(g({id:"dnd.drop-item",defaultMessage:"{item}, dropped. Final position in list: {position}."},{item:b.value,position:E(l)}))},J=()=>{_(g({id:"dnd.cancel-item",defaultMessage:"{item}, dropped. Re-order cancelled."},{item:b.value}))},ae=(l,K)=>{_(g({id:"dnd.reorder",defaultMessage:"{item}, moved. New position in list: {position}."},{item:b.value,position:E(l)})),O(Re(K,l))},ne=()=>{ie(!0)},[Q,_]=r.useState(null),{formatMessage:g}=(0,N.A)(),{trackUsage:re}=(0,W.useTracking)(),O=(0,k.wA)(),nt=(0,W.useNotification)(),[le,rt]=r.useState(d),[lt,ie]=r.useState(!1),[b,he,it]=(0,z.useField)(`stages.${o}.name`),[Y,Me,dt]=(0,z.useField)(`stages.${o}.color`),[H,ve,ct]=(0,z.useField)(`stages.${o}.permissions`),_t=(0,k.d4)(fe),[{handlerId:gt,isDragging:ut,handleKeyDown:pt},mt,ft,Et,ye]=(0,v.T)(c,{index:o,item:{index:o,name:b.value},onGrabItem:R,onDropItem:oe,onMoveItem:ae,onCancel:J,type:i.D.STAGE}),ht=(0,v.V)(mt,ft),Mt=Ye.map(({hex:l,name:K})=>({value:l,label:g({id:"Settings.review-workflows.stage.color.name",defaultMessage:"{name}"},{name:K}),color:l})),{themeColorName:vt}=(0,ee.g)(Y.value)??{},de=_t?.filter(l=>l.code!=="strapi-super-admin");return r.useEffect(()=>{ye((0,De.n)(),{captureDraggingState:!1})},[ye,o]),(0,s.jsxs)(y.a,{ref:l=>ht(l),children:[Q&&(0,s.jsx)(p.s,{"aria-live":"assertive",children:Q}),ut?(0,s.jsx)(Ze,{}):(0,s.jsxs)(P.n,{size:"S",variant:"primary",onToggle:()=>{rt(!le),le||re("willEditStage")},expanded:le,shadow:"tableShadow",error:he.error??Me?.error??ve?.error,hasErrorMessage:!1,children:[(0,s.jsx)(w.P,{title:b.value,togglePosition:"left",action:(n||a)&&(0,s.jsxs)(h.s,{children:[(0,s.jsxs)(V.bL,{children:[(0,s.jsxs)(Je,{size:"S",endIcon:null,paddingLeft:2,paddingRight:2,children:[(0,s.jsx)(F.A,{"aria-hidden":!0,focusable:!1}),(0,s.jsx)(p.s,{as:"span",children:g({id:"[tbdb].components.DynamicZone.more-actions",defaultMessage:"More actions"})})]}),(0,s.jsx)(V.UC,{popoverPlacement:"bottom-end",zIndex:2,children:(0,s.jsxs)(V.x8,{children:[a&&(0,s.jsx)(ce.Dr,{onClick:()=>O(Ce(e)),children:g({id:"Settings.review-workflows.stage.delete",defaultMessage:"Duplicate stage"})}),n&&(0,s.jsx)(Ge,{onClick:()=>O(Ae(e)),children:g({id:"Settings.review-workflows.stage.delete",defaultMessage:"Delete"})})]})})]}),a&&(0,s.jsx)(Qe,{background:"transparent",forwardedAs:"div",hasRadius:!0,role:"button",noBorder:!0,tabIndex:0,"data-handler-id":gt,ref:Et,label:g({id:"Settings.review-workflows.stage.drag",defaultMessage:"Drag"}),onClick:l=>l.stopPropagation(),onKeyDown:pt,children:(0,s.jsx)(X.A,{})})]})}),(0,s.jsx)(j.u,{padding:6,background:"neutral0",hasRadius:!0,children:(0,s.jsxs)(I.x,{gap:4,children:[(0,s.jsx)(x.E,{col:6,children:(0,s.jsx)(A.k,{...b,id:b.name,disabled:!a,label:g({id:"Settings.review-workflows.stage.name.label",defaultMessage:"Stage name"}),error:he.error??!1,onChange:l=>{it.setValue(l.target.value),O(te(e,{name:l.target.value}))},required:!0})}),(0,s.jsx)(x.E,{col:6,children:(0,s.jsx)(U.Z,{disabled:!a,error:Me?.error??!1,id:Y.name,required:!0,label:g({id:"content-manager.reviewWorkflows.stage.color",defaultMessage:"Color"}),onChange:l=>{dt.setValue(l),O(te(e,{color:String(l)}))},value:Y.value.toUpperCase(),startIcon:(0,s.jsx)(h.s,{as:"span",height:2,background:Y.value,borderColor:vt==="neutral0"?"neutral150":"transparent",hasRadius:!0,shrink:0,width:2}),children:Mt.map(({value:l,label:K,color:Z})=>{const{themeColorName:yt}=(0,ee.g)(Z)||{};return(0,s.jsx)(U.eY,{value:l,startIcon:(0,s.jsx)(h.s,{as:"span",height:2,background:Z,borderColor:yt==="neutral0"?"neutral150":"transparent",hasRadius:!0,shrink:0,width:2}),children:K},l)})})}),(0,s.jsx)(x.E,{col:6,children:de?.length===0?(0,s.jsx)(W.NotAllowedInput,{description:{id:"Settings.review-workflows.stage.permissions.noPermissions.description",defaultMessage:"You don\u2019t have the permission to see roles"},intlLabel:{id:"Settings.review-workflows.stage.permissions.label",defaultMessage:"Roles that can change this stage"},name:H.name}):(0,s.jsxs)(h.s,{alignItems:"flex-end",gap:3,children:[(0,s.jsx)(Ve,{grow:1,children:(0,s.jsx)(M.KF,{...H,disabled:!a,error:ve.error??!1,id:H.name,label:g({id:"Settings.review-workflows.stage.permissions.label",defaultMessage:"Roles that can change this stage"}),onChange:l=>{const K=l.map(Z=>({role:parseInt(Z,10),action:"admin::review-workflows.stage.transition"}));ct.setValue(K),O(te(e,{permissions:K}))},placeholder:g({id:"Settings.review-workflows.stage.permissions.placeholder",defaultMessage:"Select a role"}),required:!0,value:(H.value??[]).map(l=>`${l.role}`),withTags:!0,children:(0,s.jsx)(M.np,{label:g({id:"Settings.review-workflows.stage.permissions.allRoles.label",defaultMessage:"All roles"}),values:de?.map(l=>`${l.id}`),children:de?.map(l=>(0,s.jsx)(He,{value:`${l.id}`,children:l.name},l.id))})})}),(0,s.jsx)(u.K,{disabled:!a,icon:(0,s.jsx)(q.A,{}),label:g({id:"Settings.review-workflows.stage.permissions.apply.label",defaultMessage:"Apply to all stages"}),size:"L",variant:"secondary",onClick:()=>ne()})]})})]})})]}),(0,s.jsx)(W.ConfirmDialog.Root,{iconRightButton:null,isOpen:lt,onToggleDialog:()=>ie(!1),onConfirm:()=>{O(We({permissions:H.value})),ie(!1),nt({type:"success",message:g({id:"Settings.review-workflows.page.edit.confirm.stages.permissions.copy.success",defaultMessage:"Applied roles to all other stages of the workflow"})})},variantRightButton:"default",children:(0,s.jsx)(W.ConfirmDialog.Body,{children:(0,s.jsx)(m.o,{textAlign:"center",variant:"omega",children:g({id:"Settings.review-workflows.page.edit.confirm.stages.permissions.copy",defaultMessage:"Roles that can change that stage will be applied to all the other stages."})})})})]})},qe=(0,C.default)(y.a)`
  transform: translateX(-50%);
`,et=({canDelete:e=!0,canUpdate:o=!0,stages:n=[]})=>{const{formatMessage:c}=(0,N.A)(),a=(0,k.wA)(),{trackUsage:d}=(0,W.useTracking)();return(0,s.jsxs)(h.s,{direction:"column",gap:6,width:"100%",children:[(0,s.jsxs)(y.a,{position:"relative",width:"100%",children:[(0,s.jsx)(qe,{background:"neutral200",height:"100%",left:"50%",position:"absolute",top:"0",width:2,zIndex:1}),(0,s.jsx)(h.s,{direction:"column",alignItems:"stretch",gap:6,zIndex:2,position:"relative",as:"ol",children:n.map((f,E)=>{const R=Number(f?.id??f.__temp_key__);return(0,s.jsx)(y.a,{as:"li",children:(0,s.jsx)(Xe,{id:R,index:E,isOpen:!f.id,canDelete:n.length>1&&e,canReorder:n.length>1,canUpdate:o,stagesCount:n.length})},`stage-${R}`)})})]}),o&&(0,s.jsx)(pe,{type:"button",onClick:()=>{a(ge({name:""})),d("willCreateStage")},children:c({id:"Settings.review-workflows.stage.add",defaultMessage:"Add new stage"})})]})},tt=(0,C.default)(M.fe)`
  padding-left: ${({theme:e})=>e.spaces[7]};
`,st=(0,C.default)(m.o)`
  font-style: italic;
`,ot=({canUpdate:e=!0})=>{const{formatMessage:o,locale:n}=(0,N.A)(),c=(0,k.wA)(),a=(0,k.d4)(Ke),d=(0,k.d4)(Ee),f=(0,k.d4)(Ue),[E,R,oe]=(0,z.useField)("name"),[J,ae,ne]=(0,z.useField)("contentTypes"),Q=(0,W.useCollator)(n,{sensitivity:"base"});return(0,s.jsxs)(I.x,{background:"neutral0",hasRadius:!0,gap:4,padding:6,shadow:"tableShadow",children:[(0,s.jsx)(x.E,{col:6,children:(0,s.jsx)(A.k,{...E,id:E.name,disabled:!e,label:o({id:"Settings.review-workflows.workflow.name.label",defaultMessage:"Workflow Name"}),error:R.error??!1,onChange:_=>{c(ue({name:_.target.value})),oe.setValue(_.target.value)},required:!0})}),a&&(0,s.jsx)(x.E,{col:6,children:(0,s.jsx)(M.KF,{...J,customizeContent:_=>o({id:"Settings.review-workflows.workflow.contentTypes.displayValue",defaultMessage:"{count} {count, plural, one {content type} other {content types}} selected"},{count:_?.length}),disabled:!e,error:ae.error??!1,id:J.name,label:o({id:"Settings.review-workflows.workflow.contentTypes.label",defaultMessage:"Associated to"}),onChange:_=>{c(ue({contentTypes:_})),ne.setValue(_)},placeholder:o({id:"Settings.review-workflows.workflow.contentTypes.placeholder",defaultMessage:"Select"}),children:[...a.collectionTypes.length>0?[{label:o({id:"Settings.review-workflows.workflow.contentTypes.collectionTypes.label",defaultMessage:"Collection Types"}),children:[...a.collectionTypes].sort((_,g)=>Q.compare(_.info.displayName,g.info.displayName)).map(_=>({label:_.info.displayName,value:_.uid}))}]:[],...a.singleTypes.length>0?[{label:o({id:"Settings.review-workflows.workflow.contentTypes.singleTypes.label",defaultMessage:"Single Types"}),children:[...a.singleTypes].map(_=>({label:_.info.displayName,value:_.uid}))}]:[]].map(_=>{if("children"in _)return(0,s.jsx)(M.np,{label:_.label,values:_.children.map(g=>g.value.toString()),children:_.children.map(g=>{const{name:re}=f?.find(O=>(d&&O.id!==d.id||!d)&&O.contentTypes.includes(g.value))??{};return(0,s.jsx)(tt,{value:g.value,children:(0,s.jsx)(m.o,{children:o({id:"Settings.review-workflows.workflow.contentTypes.assigned.notice",defaultMessage:"{label} {name, select, undefined {} other {<i>(assigned to <em>{name}</em> workflow)</i>}}"},{label:g.label,name:re,em:(...O)=>(0,s.jsx)(m.o,{as:"em",fontWeight:"bold",children:O}),i:(...O)=>(0,s.jsx)(st,{children:O})})})},g.value)})},_.label)})})})]})};async function at({values:e,formatMessage:o}){const n=S.object({contentTypes:S.array().of(S.string()),name:S.string().max(255,o({id:"Settings.review-workflows.validation.name.max-length",defaultMessage:"Name can not be longer than 255 characters"})).required(),stages:S.array().of(S.object().shape({name:S.string().required(o({id:"Settings.review-workflows.validation.stage.name",defaultMessage:"Name is required"})).max(255,o({id:"Settings.review-workflows.validation.stage.max-length",defaultMessage:"Name can not be longer than 255 characters"})).test("unique-name",o({id:"Settings.review-workflows.validation.stage.duplicate",defaultMessage:"Stage name must be unique"}),function(c){const{options:{context:a}}=this;return a?.stages.filter(d=>d.name===c).length===1}),color:S.string().required(o({id:"Settings.review-workflows.validation.stage.color",defaultMessage:"Color is required"})).matches(/^#(?:[0-9a-fA-F]{3}){1,2}$/i),permissions:S.array(S.object({role:S.number().strict().typeError(o({id:"Settings.review-workflows.validation.stage.permissions.role.number",defaultMessage:"Role must be of type number"})).required(),action:S.string().required({id:"Settings.review-workflows.validation.stage.permissions.action.required",defaultMessage:"Action is a required argument"})})).strict()})).min(1)});try{return await n.validate(e,{abortEarly:!1,context:e}),!0}catch(c){const a={};return c instanceof S.ValidationError&&c.inner.forEach(d=>{d.path&&Oe(a,d.path,d.message)}),a}}}}]);