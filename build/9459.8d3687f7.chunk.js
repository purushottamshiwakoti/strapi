(self.webpackChunkstrapi_project=self.webpackChunkstrapi_project||[]).push([[9459],{29327:D=>{function x(e,s,l,d){for(var c=l-1,u=e.length;++c<u;)if(d(e[c],s))return c;return-1}D.exports=x},20920:(D,x,e)=>{var s=e(87864),l=e(80151),d=e(29327),c=e(52689),u=e(76299),v=Array.prototype,O=v.splice;function I(i,C,h,z){var w=z?d:l,Q=-1,Z=C.length,E=i;for(i===C&&(C=u(C)),h&&(E=s(i,c(h)));++Q<Z;)for(var W=0,L=C[Q],$=h?h(L):L;(W=w(E,$,W,z))>-1;)E!==i&&O.call(E,W,1),O.call(i,W,1);return i}D.exports=I},34542:(D,x,e)=>{var s=e(87864),l=e(45353),d=e(29884),c=e(82261);function u(v,O){var I=c(v)?s:d;return I(v,l(O,3))}D.exports=u},92173:(D,x,e)=>{var s=e(39226),l=e(76610),d=s(l);D.exports=d},76610:(D,x,e)=>{var s=e(20920);function l(d,c){return d&&d.length&&c&&c.length?s(d,c):d}D.exports=l},61468:(D,x,e)=>{var s=e(52196);function l(d){var c=d==null?0:d.length;return c?s(d,1,c):[]}D.exports=l},29459:(D,x,e)=>{"use strict";e.d(x,{ProtectedEditView:()=>Ke,w:()=>ie});var s=e(92132),l=e(21272),d=e(94061),c=e(83997),u=e(30893),v=e(90151),O=e(68074),I=e(38413),i=e(55356),C=e(85963),h=e(4198),z=e(57237),w=e(60888),Q=e(44604),Z=e(4181),E=e(2291),W=e(61535),L=e(54894),$=e(17703),V=e(93805),q=e(36249),G=e(99831),K=e(5275),le=e(95267),de=e(54514),ce=e(20415),_e=e(34542),Ee=e(61468),J=e(63891),pe=e(24092),Y=e(12083),ue=e(88761),ae=e(92173),He=e(15126),ze=e(63299),Qe=e(67014),Ze=e(59080),Je=e(79275),Xe=e(14718),be=e(82437),we=e(5790),qe=e(35223),es=e(5409),ss=e(74930),ts=e(2600),ns=e(48940),as=e(41286),os=e(51187),is=e(56336),rs=e(39404),ls=e(58692),ds=e(54257),cs=e(501),_s=e(57646),Es=e(23120),ps=e(44414),us=e(25962),gs=e(14664),Ps=e(42588),As=e(90325),hs=e(62785),ms=e(87443),Os=e(41032),Ms=e(22957),Ts=e(93179),Ds=e(73055),Cs=e(15747),Is=e(85306),ys=e(77965),fs=e(26509),xs=e(84624),vs=e(71210),Ls=e(32058),Rs=e(81185),Us=e(82261);const ge=V.n.injectEndpoints({endpoints:n=>({getPermissions:n.query({query:()=>"/admin/content-api/permissions",transformResponse:t=>t.data}),getRoutes:n.query({query:()=>"/admin/content-api/routes",transformResponse:t=>t.data})}),overrideExisting:!1}),{useGetPermissionsQuery:Pe,useGetRoutesQuery:Ae}=ge,[he,me]=(0,le.q)("ApiTokenPermissionsContext"),Oe=({children:n,...t})=>(0,s.jsx)(he,{...t,children:n}),ee=()=>me("useApiTokenPermissions"),Me=({errors:n={},onChange:t,canEditInputs:a,isCreating:_,values:o={},apiToken:g={},onDispatch:r,setHasChangedPermissions:j})=>{const{formatMessage:m}=(0,L.A)(),U=({target:{value:y}})=>{j(!1),y==="full-access"&&r({type:"SELECT_ALL_ACTIONS"}),y==="read-only"&&r({type:"ON_CHANGE_READ_ONLY"})},F=[{value:"read-only",label:{id:"Settings.tokens.types.read-only",defaultMessage:"Read-only"}},{value:"full-access",label:{id:"Settings.tokens.types.full-access",defaultMessage:"Full access"}},{value:"custom",label:{id:"Settings.tokens.types.custom",defaultMessage:"Custom"}}];return(0,s.jsx)(d.a,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:(0,s.jsxs)(c.s,{direction:"column",alignItems:"stretch",gap:4,children:[(0,s.jsx)(u.o,{variant:"delta",as:"h2",children:m({id:"global.details",defaultMessage:"Details"})}),(0,s.jsxs)(v.x,{gap:5,children:[(0,s.jsx)(O.E,{col:6,xs:12,children:(0,s.jsx)(K.T,{error:n.name,value:o.name,canEditInputs:a,onChange:t})},"name"),(0,s.jsx)(O.E,{col:6,xs:12,children:(0,s.jsx)(K.a,{error:n.description,value:o.description,canEditInputs:a,onChange:t})},"description"),(0,s.jsx)(O.E,{col:6,xs:12,children:(0,s.jsx)(K.L,{isCreating:_,error:n.lifespan,value:o.lifespan,onChange:t,token:g})},"lifespan"),(0,s.jsx)(O.E,{col:6,xs:12,children:(0,s.jsx)(K.b,{value:o.type,error:n.type,label:{id:"Settings.tokens.form.type",defaultMessage:"Token type"},onChange:y=>{U({target:{value:y}}),t({target:{name:"type",value:y}})},options:F,canEditInputs:a})},"type")]})]})})},Te=({apiTokenName:n=null})=>{const{formatMessage:t}=(0,L.A)();return(0,E.L4)(),(0,s.jsxs)(I.g,{"aria-busy":"true",children:[(0,s.jsx)(E.x7,{name:"API Tokens"}),(0,s.jsx)(i.Q,{primaryAction:(0,s.jsx)(C.$,{disabled:!0,startIcon:(0,s.jsx)(de.A,{}),type:"button",size:"L",children:t({id:"global.save",defaultMessage:"Save"})}),title:n||t({id:"Settings.apiTokens.createPage.title",defaultMessage:"Create API Token"})}),(0,s.jsx)(h.s,{children:(0,s.jsx)(E.Bl,{})})]})},De=n=>{switch(n){case"POST":return{text:"success600",border:"success200",background:"success100"};case"GET":return{text:"secondary600",border:"secondary200",background:"secondary100"};case"PUT":return{text:"warning600",border:"warning200",background:"warning100"};case"DELETE":return{text:"danger600",border:"danger200",background:"danger100"};default:return{text:"neutral600",border:"neutral200",background:"neutral100"}}},Ce=(0,J.Ay)(d.a)`
  margin: -1px;
  border-radius: ${({theme:n})=>n.spaces[1]} 0 0 ${({theme:n})=>n.spaces[1]};
`,Ie=({route:n={handler:"Nocontroller.error",method:"GET",path:"/there-is-no-path"}})=>{const{formatMessage:t}=(0,L.A)(),{method:a,handler:_,path:o}=n,g=o?Ee(o.split("/")):[],[r="",j=""]=_?_.split("."):[],m=De(n.method);return(0,s.jsxs)(c.s,{direction:"column",alignItems:"stretch",gap:2,children:[(0,s.jsxs)(u.o,{variant:"delta",as:"h3",children:[t({id:"Settings.apiTokens.createPage.BoundRoute.title",defaultMessage:"Bound route to"}),"\xA0",(0,s.jsx)("span",{children:r}),(0,s.jsxs)(u.o,{variant:"delta",textColor:"primary600",children:[".",j]})]}),(0,s.jsxs)(c.s,{hasRadius:!0,background:"neutral0",borderColor:"neutral200",gap:0,children:[(0,s.jsx)(Ce,{background:m.background,borderColor:m.border,padding:2,children:(0,s.jsx)(u.o,{fontWeight:"bold",textColor:m.text,children:a})}),(0,s.jsx)(d.a,{paddingLeft:2,paddingRight:2,children:_e(g,U=>(0,s.jsxs)(u.o,{textColor:U.includes(":")?"neutral600":"neutral900",children:["/",U]},U))})]})]})},ye=()=>{const{value:{selectedAction:n,routes:t}}=ee(),{formatMessage:a}=(0,L.A)(),_=n?.split(".")[0];return(0,s.jsx)(O.E,{col:5,background:"neutral150",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,style:{minHeight:"100%"},children:n?(0,s.jsx)(c.s,{direction:"column",alignItems:"stretch",gap:2,children:_&&_ in t&&t[_].map(o=>o.config.auth?.scope?.includes(n)||o.handler===n?(0,s.jsx)(Ie,{route:o},o.handler):null)}):(0,s.jsxs)(c.s,{direction:"column",alignItems:"stretch",gap:2,children:[(0,s.jsx)(u.o,{variant:"delta",as:"h3",children:a({id:"Settings.apiTokens.createPage.permissions.header.title",defaultMessage:"Advanced settings"})}),(0,s.jsx)(u.o,{as:"p",textColor:"neutral600",children:a({id:"Settings.apiTokens.createPage.permissions.header.hint",defaultMessage:"Select the application's actions or the plugin's actions and click on the cog icon to display the bound route"})})]})})},oe=(0,J.AH)`
  background: ${n=>n.theme.colors.primary100};
  svg {
    opacity: 1;
  }
`,fe=(0,J.Ay)(d.a)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    opacity: 0;
    path {
      fill: ${n=>n.theme.colors.primary600};
    }
  }

  /* Show active style both on hover and when the action is selected */
  ${n=>n.isActive&&oe}
  &:hover {
    ${oe}
  }
`,xe=J.Ay.div`
  flex: 1;
  align-self: center;
  border-top: 1px solid ${({theme:n})=>n.colors.neutral150};
`,ve=({controllers:n=[],label:t,orderNumber:a=0,disabled:_=!1,onExpanded:o=()=>null,indexExpandendCollapsedContent:g=null})=>{const{value:{onChangeSelectAll:r,onChange:j,selectedActions:m,setSelectedAction:U,selectedAction:F}}=ee(),[y,X]=l.useState(!1),{formatMessage:H}=(0,L.A)(),M=()=>{X(A=>!A),o(a)};l.useEffect(()=>{g!==null&&g!==a&&y&&X(!1)},[g,a,y]);const re=A=>A===F;return(0,s.jsxs)(z.n,{expanded:y,onToggle:M,variant:a%2?"primary":"secondary",children:[(0,s.jsx)(w.P,{title:pe(t)}),(0,s.jsx)(Q.u,{children:n?.map(A=>{const f=A.actions.every(T=>m.includes(T.actionId)),R=A.actions.some(T=>m.includes(T.actionId));return(0,s.jsxs)(d.a,{children:[(0,s.jsxs)(c.s,{justifyContent:"space-between",alignItems:"center",padding:4,children:[(0,s.jsx)(d.a,{paddingRight:4,children:(0,s.jsx)(u.o,{variant:"sigma",textColor:"neutral600",children:A?.controller})}),(0,s.jsx)(xe,{}),(0,s.jsx)(d.a,{paddingLeft:4,children:(0,s.jsx)(Z.S,{value:f,indeterminate:!f&&R,onValueChange:()=>{r({target:{value:[...A.actions]}})},disabled:_,children:H({id:"app.utils.select-all",defaultMessage:"Select all"})})})]}),(0,s.jsx)(v.x,{gap:4,padding:4,children:A?.actions&&A?.actions.map(T=>(0,s.jsx)(O.E,{col:6,children:(0,s.jsxs)(fe,{isActive:re(T.actionId),padding:2,hasRadius:!0,children:[(0,s.jsx)(Z.S,{value:m.includes(T.actionId),name:T.actionId,onValueChange:()=>{j({target:{value:T.actionId}})},disabled:_,children:T.action}),(0,s.jsx)("button",{type:"button","data-testid":"action-cog",onClick:()=>U({target:{value:T.actionId}}),style:{display:"inline-flex",alignItems:"center"},children:(0,s.jsx)(ce.A,{})})]})},T.actionId))})]},`${t}.${A?.controller}`)})})]})},Le=({section:n=null,...t})=>{const[a,_]=l.useState(null),o=g=>_(g);return(0,s.jsx)(d.a,{padding:4,background:"neutral0",children:n&&n.map((g,r)=>(0,s.jsx)(ve,{label:g.label,controllers:g.controllers,orderNumber:r,indexExpandendCollapsedContent:a,onExpanded:o,...t},g.apiId))})},Re=({...n})=>{const{value:{data:t}}=ee(),{formatMessage:a}=(0,L.A)();return(0,s.jsxs)(v.x,{gap:0,shadow:"filterShadow",hasRadius:!0,background:"neutral0",children:[(0,s.jsxs)(O.E,{col:7,paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:[(0,s.jsxs)(c.s,{direction:"column",alignItems:"stretch",gap:2,children:[(0,s.jsx)(u.o,{variant:"delta",as:"h2",children:a({id:"Settings.apiTokens.createPage.permissions.title",defaultMessage:"Permissions"})}),(0,s.jsx)(u.o,{as:"p",textColor:"neutral600",children:a({id:"Settings.apiTokens.createPage.permissions.description",defaultMessage:"Only actions bound by a route are listed below."})})]}),t?.permissions&&(0,s.jsx)(Le,{section:t?.permissions,...n})]}),(0,s.jsx)(ye,{})]})},Ue=Y.Ik().shape({name:Y.Yj().max(100).required(E.iW.required),type:Y.Yj().oneOf(["read-only","full-access","custom"]).required(E.iW.required),description:Y.Yj().nullable(),lifespan:Y.ai().integer().min(0).nullable().defined(E.iW.required)}),je=n=>{const t={allActionsIds:[],permissions:[]};return t.permissions=Object.entries(n).map(([a,_])=>({apiId:a,label:a.split("::")[1],controllers:Object.keys(_.controllers).map(o=>({controller:o,actions:o in _.controllers?_.controllers[o].map(g=>{const r=`${a}.${o}.${g}`;return a.includes("api::")&&t.allActionsIds.push(r),{action:g,actionId:r}}).flat():[]})).flat()})),t},Be={data:{allActionsIds:[],permissions:[]},routes:{},selectedAction:"",selectedActions:[]},We=(n,t)=>(0,ue.Ay)(n,a=>{switch(t.type){case"ON_CHANGE":{a.selectedActions.includes(t.value)?ae(a.selectedActions,t.value):a.selectedActions.push(t.value);break}case"SELECT_ALL_IN_PERMISSION":{t.value.every(o=>a.selectedActions.includes(o.actionId))?t.value.forEach(o=>{ae(a.selectedActions,o.actionId)}):t.value.forEach(o=>{a.selectedActions.push(o.actionId)});break}case"SELECT_ALL_ACTIONS":{a.selectedActions=[...a.data.allActionsIds];break}case"ON_CHANGE_READ_ONLY":{const _=a.data.allActionsIds.filter(o=>o.includes("find")||o.includes("findOne"));a.selectedActions=[..._];break}case"UPDATE_PERMISSIONS_LAYOUT":{a.data=je(t.value);break}case"UPDATE_ROUTES":{a.routes={...t.value};break}case"UPDATE_PERMISSIONS":{a.selectedActions=[...t.value];break}case"SET_SELECTED_ACTION":{a.selectedAction=t.value;break}default:return a}}),ie=()=>{(0,E.L4)();const{formatMessage:n}=(0,L.A)(),t=(0,E.hN)(),{lockApp:a,unlockApp:_}=(0,E.MA)(),{state:o}=(0,$.zy)(),g=(0,V.j)(p=>p.admin_app.permissions),[r,j]=l.useState(o?.apiToken?.accessKey?{...o.apiToken}:null),{trackUsage:m}=(0,E.z1)(),{setCurrentStep:U}=(0,E.Cx)(),{allowedActions:{canCreate:F,canUpdate:y,canRegenerate:X}}=(0,E.ec)(g.settings?.["api-tokens"]),[H,M]=l.useReducer(We,Be),A=(0,$.W5)("/settings/api-tokens/:id")?.params?.id,f=A==="create",{_unstableFormatAPIError:R,_unstableFormatValidationErrors:T}=(0,E.wq)(),Se=(0,$.W6)(),S=Pe(),k=Ae();l.useEffect(()=>{S.error&&t({type:"warning",message:R(S.error)})},[S.error,R,t]),l.useEffect(()=>{k.error&&t({type:"warning",message:R(k.error)})},[k.error,R,t]),l.useEffect(()=>{S.data&&M({type:"UPDATE_PERMISSIONS_LAYOUT",value:S.data})},[S.data]),l.useEffect(()=>{k.data&&M({type:"UPDATE_ROUTES",value:k.data})},[k.data]),l.useEffect(()=>{r&&(r.type==="read-only"&&M({type:"ON_CHANGE_READ_ONLY"}),r.type==="full-access"&&M({type:"SELECT_ALL_ACTIONS"}),r.type==="custom"&&M({type:"UPDATE_PERMISSIONS",value:r?.permissions}))},[r]),l.useEffect(()=>{m(f?"didAddTokenFromList":"didEditTokenFromList",{tokenType:G.A})},[f,m]);const{data:B,error:se,isLoading:ke}=(0,q.b)(A,{skip:!A||f||!!r});l.useEffect(()=>{se&&t({type:"warning",message:R(se)})},[se,R,t]),l.useEffect(()=>{B&&(j(B),B.type==="read-only"&&M({type:"ON_CHANGE_READ_ONLY"}),B.type==="full-access"&&M({type:"SELECT_ALL_ACTIONS"}),B.type==="custom"&&M({type:"UPDATE_PERMISSIONS",value:B?.permissions}))},[B]);const[Ne]=(0,q.c)(),[$e]=(0,q.d)(),Ve=async(p,N)=>{m(f?"willCreateToken":"willEditToken",{tokenType:G.A}),a();try{if(f){const P=await Ne({...p,lifespan:p.lifespan==="0"?parseInt(p.lifespan):null,permissions:p.type==="custom"?H.selectedActions:null});if("error"in P){(0,V.x)(P.error)&&P.error.name==="ValidationError"?N.setErrors(T(P.error)):t({type:"warning",message:R(P.error)});return}t({type:"success",message:n({id:"notification.success.apitokencreated",defaultMessage:"API Token successfully created"})}),m("didCreateToken",{type:P.data.type,tokenType:G.A}),Se.replace(`/settings/api-tokens/${P.data.id}`,{apiToken:P.data}),U("apiTokens.success")}else{const P=await $e({id:A,name:p.name,description:p.description,type:p.type,permissions:p.type==="custom"?H.selectedActions:null});if("error"in P){(0,V.x)(P.error)&&P.error.name==="ValidationError"?N.setErrors(T(P.error)):t({type:"warning",message:R(P.error)});return}t({type:"success",message:n({id:"notification.success.apitokenedited",defaultMessage:"API Token successfully edited"})}),m("didEditToken",{type:P.data.type,tokenType:G.A})}}catch{t({type:"warning",message:{id:"notification.error",defaultMessage:"Something went wrong"}})}finally{_()}},[Ge,te]=l.useState(!1),Ye={...H,onChange:({target:{value:p}})=>{te(!0),M({type:"ON_CHANGE",value:p})},onChangeSelectAll:({target:{value:p}})=>{te(!0),M({type:"SELECT_ALL_IN_PERMISSION",value:p})},setSelectedAction:({target:{value:p}})=>{M({type:"SET_SELECTED_ACTION",value:p})}},ne=y&&!f||F&&f;return ke?(0,s.jsx)(Te,{apiTokenName:r?.name}):(0,s.jsx)(Oe,{value:Ye,children:(0,s.jsxs)(I.g,{children:[(0,s.jsx)(E.x7,{name:"API Tokens"}),(0,s.jsx)(W.l1,{validationSchema:Ue,validateOnChange:!1,initialValues:{name:r?.name||"",description:r?.description||"",type:r?.type,lifespan:r?.lifespan?r.lifespan.toString():r?.lifespan},enableReinitialize:!0,onSubmit:(p,N)=>Ve(p,N),children:({errors:p,handleChange:N,isSubmitting:P,values:b,setFieldValue:Fe})=>(Ge&&b?.type!=="custom"&&Fe("type","custom"),(0,s.jsxs)(E.lV,{children:[(0,s.jsx)(K.F,{backUrl:"/settings/api-tokens",title:{id:"Settings.apiTokens.createPage.title",defaultMessage:"Create API Token"},token:r,setToken:j,canEditInputs:ne,canRegenerate:X,isSubmitting:P,regenerateUrl:"/admin/api-tokens/"}),(0,s.jsx)(h.s,{children:(0,s.jsxs)(c.s,{direction:"column",alignItems:"stretch",gap:6,children:[Boolean(r?.name)&&(0,s.jsx)(K.c,{token:r?.accessKey,tokenType:G.A}),(0,s.jsx)(Me,{errors:p,onChange:N,canEditInputs:ne,isCreating:f,values:b,apiToken:r,onDispatch:M,setHasChangedPermissions:te}),(0,s.jsx)(Re,{disabled:!ne||b?.type==="read-only"||b?.type==="full-access"})]})})]}))})]})})},Ke=()=>{const n=(0,V.j)(t=>t.admin_app.permissions.settings?.["api-tokens"].read);return(0,s.jsx)(E.kz,{permissions:n,children:(0,s.jsx)(ie,{})})}},36249:(D,x,e)=>{"use strict";e.d(x,{a:()=>v,b:()=>c,c:()=>u,d:()=>O,u:()=>d});var s=e(93805);const l=s.n.injectEndpoints({endpoints:I=>({getAPITokens:I.query({query:()=>"/admin/api-tokens",transformResponse:i=>i.data,providesTags:(i,C)=>[...i?.map(({id:h})=>({type:"ApiToken",id:h}))??[],{type:"ApiToken",id:"LIST"}]}),getAPIToken:I.query({query:i=>`/admin/api-tokens/${i}`,transformResponse:i=>i.data,providesTags:(i,C,h)=>[{type:"ApiToken",id:h}]}),createAPIToken:I.mutation({query:i=>({url:"/admin/api-tokens",method:"POST",data:i}),transformResponse:i=>i.data,invalidatesTags:[{type:"ApiToken",id:"LIST"}]}),deleteAPIToken:I.mutation({query:i=>({url:`/admin/api-tokens/${i}`,method:"DELETE"}),transformResponse:i=>i.data,invalidatesTags:(i,C,h)=>[{type:"ApiToken",id:h}]}),updateAPIToken:I.mutation({query:({id:i,...C})=>({url:`/admin/api-tokens/${i}`,method:"PUT",data:C}),transformResponse:i=>i.data,invalidatesTags:(i,C,{id:h})=>[{type:"ApiToken",id:h}]})}),overrideExisting:!1}),{useGetAPITokensQuery:d,useGetAPITokenQuery:c,useCreateAPITokenMutation:u,useDeleteAPITokenMutation:v,useUpdateAPITokenMutation:O}=l}}]);
