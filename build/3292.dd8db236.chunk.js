"use strict";(self.webpackChunkstrapi_project=self.webpackChunkstrapi_project||[]).push([[3292],{94061:(v,p,i)=>{i.d(p,{a:()=>_});var t=i(63891),r=i(28672),a=i(5146);const o={color:!0,cursor:!0,height:!0,width:!0},_=t.default.div.withConfig({shouldForwardProp:(s,e)=>!o[s]&&e(s)})`
  // Font
  font-size: ${({fontSize:s,theme:e})=>(0,a.K)(e.fontSizes,s,s)};

  // Colors
  background: ${({theme:s,background:e})=>(0,a.K)(s.colors,e,e)};
  color: ${({theme:s,color:e})=>(0,a.K)(s.colors,e,void 0)};

  // Spaces
  ${({theme:s,padding:e})=>(0,r.A)("padding",e,s)}
  ${({theme:s,paddingTop:e})=>(0,r.A)("padding-top",e,s)}
  ${({theme:s,paddingRight:e})=>(0,r.A)("padding-right",e,s)}
  ${({theme:s,paddingBottom:e})=>(0,r.A)("padding-bottom",e,s)}
  ${({theme:s,paddingLeft:e})=>(0,r.A)("padding-left",e,s)}
  ${({theme:s,marginLeft:e})=>(0,r.A)("margin-left",e,s)}
  ${({theme:s,marginRight:e})=>(0,r.A)("margin-right",e,s)}
  ${({theme:s,marginTop:e})=>(0,r.A)("margin-top",e,s)}
  ${({theme:s,marginBottom:e})=>(0,r.A)("margin-bottom",e,s)}

  // Responsive hiding
  ${({theme:s,hiddenS:e})=>e?`${s.mediaQueries.tablet} { display: none; }`:void 0}
  ${({theme:s,hiddenXS:e})=>e?`${s.mediaQueries.mobile} { display: none; }`:void 0}
  

  // Borders
  border-radius: ${({theme:s,hasRadius:e,borderRadius:c})=>e?s.borderRadius:c};
  border-style: ${({borderStyle:s})=>s};
  border-width: ${({borderWidth:s})=>s};
  border-color: ${({borderColor:s,theme:e})=>(0,a.K)(e.colors,s,void 0)};
  border: ${({theme:s,borderColor:e,borderStyle:c,borderWidth:M})=>{if(e&&!c&&typeof M>"u")return`1px solid ${s.colors[e]}`}};

  // Shadows
  box-shadow: ${({theme:s,shadow:e})=>(0,a.K)(s.shadows,e,void 0)};

  // Handlers
  pointer-events: ${({pointerEvents:s})=>s};
  &:hover {
    ${({_hover:s,theme:e})=>s?s(e):void 0}
  }

  // Display
  display: ${({display:s})=>s};

  // Position
  position: ${({position:s})=>s};
  left: ${({left:s,theme:e})=>(0,a.K)(e.spaces,s,s)};
  right: ${({right:s,theme:e})=>(0,a.K)(e.spaces,s,s)};
  top: ${({top:s,theme:e})=>(0,a.K)(e.spaces,s,s)};
  bottom: ${({bottom:s,theme:e})=>(0,a.K)(e.spaces,s,s)};
  z-index: ${({zIndex:s})=>s};
  overflow: ${({overflow:s})=>s};

  // Size
  width: ${({width:s,theme:e})=>(0,a.K)(e.spaces,s,s)};
  max-width: ${({maxWidth:s,theme:e})=>(0,a.K)(e.spaces,s,s)};
  min-width: ${({minWidth:s,theme:e})=>(0,a.K)(e.spaces,s,s)};
  height: ${({height:s,theme:e})=>(0,a.K)(e.spaces,s,s)};
  max-height: ${({maxHeight:s,theme:e})=>(0,a.K)(e.spaces,s,s)};
  min-height: ${({minHeight:s,theme:e})=>(0,a.K)(e.spaces,s,s)};

  // Animation
  transition: ${({transition:s})=>s};
  transform: ${({transform:s})=>s};
  animation: ${({animation:s})=>s};

  //Flexbox children props
  flex-shrink: ${({shrink:s})=>s};
  flex-grow: ${({grow:s})=>s};
  flex-basis: ${({basis:s})=>s};
  flex: ${({flex:s})=>s};

  // Text
  text-align: ${({textAlign:s})=>s};
  text-transform: ${({textTransform:s})=>s};
  line-height: ${({theme:s,lineHeight:e})=>(0,a.K)(s.lineHeights,e,e)};

  // Cursor
  cursor: ${({cursor:s})=>s};
`},83997:(v,p,i)=>{i.d(p,{s:()=>_});var t=i(63891),r=i(28672),a=i(94061);const o={direction:!0},_=(0,t.default)(a.a).withConfig({shouldForwardProp:(s,e)=>!o[s]&&e(s)})`
  align-items: ${({alignItems:s="center"})=>s};
  display: ${({display:s="flex",inline:e})=>e?"inline-flex":s};
  flex-direction: ${({direction:s="row"})=>s};
  flex-shrink: ${({shrink:s})=>s};
  flex-wrap: ${({wrap:s})=>s};
  ${({gap:s,theme:e})=>(0,r.A)("gap",s,e)};
  justify-content: ${({justifyContent:s})=>s};
`},30893:(v,p,i)=>{i.d(p,{o:()=>h});var t=i(63891);const r="alpha",a="beta",o="delta",_="epsilon",s="omega",e="pi",c="sigma",M=[r,a,o,_,s,e,c],x=({ellipsis:d=!1})=>d&&`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,C=({variant:d=s,theme:n})=>{switch(d){case r:return`
        font-weight: ${n.fontWeights.bold};
        font-size: ${n.fontSizes[5]};
        line-height: ${n.lineHeights[2]};
      `;case a:return`
        font-weight: ${n.fontWeights.bold};
        font-size: ${n.fontSizes[4]};
        line-height: ${n.lineHeights[1]};
      `;case o:return`
        font-weight: ${n.fontWeights.semiBold};
        font-size: ${n.fontSizes[3]};
        line-height: ${n.lineHeights[2]};
      `;case _:return`
        font-size: ${n.fontSizes[3]};
        line-height: ${n.lineHeights[6]};
      `;case s:return`
        font-size: ${n.fontSizes[2]};
        line-height: ${n.lineHeights[4]};
      `;case e:return`
        font-size: ${n.fontSizes[1]};
        line-height: ${n.lineHeights[3]};
      `;case c:return`
        font-weight: ${n.fontWeights.bold};
        font-size: ${n.fontSizes[0]};
        line-height: ${n.lineHeights[5]};
        text-transform: uppercase;
      `;default:return`
        font-size: ${n.fontSizes[2]};
      `}};var T=i(5146);const j={fontSize:!0,fontWeight:!0},h=t.default.span.withConfig({shouldForwardProp:(d,n)=>!j[d]&&n(d)})`
  ${C}
  ${x}

  // These properties need to come after {variantStyle}, because they might
  // overwrite a variant attribute
  font-weight: ${({theme:d,fontWeight:n})=>(0,T.K)(d.fontWeights,n,void 0)};
  font-size: ${({theme:d,fontSize:n})=>(0,T.K)(d.fontSizes,n,void 0)};
  line-height: ${({theme:d,lineHeight:n})=>(0,T.K)(d.lineHeights,n,n)};
  color: ${({theme:d,textColor:n})=>d.colors[n||"neutral800"]};
  text-align: ${({textAlign:d})=>d};
  text-decoration: ${({textDecoration:d})=>d};
  text-transform: ${({textTransform:d})=>d};
`},28672:(v,p,i)=>{i.d(p,{A:()=>t});const t=(r,a,o)=>{if(!a)return;if(typeof a=="object")return(Array.isArray(a)?a:[a?.desktop,a?.tablet,a?.mobile]).reduce((c,M,x)=>{if(M)switch(x){case 0:return`${c}${r}: ${o.spaces[M]};`;case 1:return`${c}${o.mediaQueries.tablet}{${r}: ${o.spaces[M]};}`;case 2:return`${c}${o.mediaQueries.mobile}{${r}: ${o.spaces[M]};}`;default:return c}return c},"");const _=o.spaces[a]??a;return`${r}: ${_};`}},5146:(v,p,i)=>{i.d(p,{K:()=>a});function t(o,_){return typeof o=="string"?!1:_ in o}function r(o){return o&&typeof o=="object"&&!Array.isArray(o)}function a(o,_,s){return _&&t(o,_)?o[_]:s}},37679:(v,p,i)=>{i.d(p,{B:()=>M});var t=i(92132),r=i(21272),a=i(63891),o=i(94061),_=i(30893);const s=()=>(0,t.jsx)(o.a,{"aria-hidden":!0,paddingLeft:1,paddingRight:1,children:(0,t.jsx)(_.o,{variant:"pi",textColor:"neutral500",children:"/"})});s.displayName="Divider";var e=i(83997);const c=(0,a.default)(e.s)`
  // CrumbLinks do have padding-x, because they need to have a
  // interaction effect, which mis-aligns the breadcrumbs on the left.
  // This normalizes the behavior by moving the first item to left by
  // the same amount it has inner padding
  :first-child {
    margin-left: ${({theme:x})=>`calc(-1*${x.spaces[2]})`};
  }
`,M=({label:x,children:C,...T})=>{const j=r.Children.toArray(C);return(0,t.jsx)(o.a,{"aria-label":x,...T,children:(0,t.jsx)(c,{as:"ol",children:r.Children.map(j,(h,d)=>{const n=j.length>1&&d+1<j.length;return(0,t.jsxs)(e.s,{inline:!0,as:"li",children:[h,n&&(0,t.jsx)(s,{})]})})})})};M.displayName="Breadcrumbs"},60043:(v,p,i)=>{i.d(p,{m:()=>o});var t=i(92132),r=i(94061),a=i(30893);const o=({children:_,isCurrent:s=!1,...e})=>(0,t.jsx)(r.a,{paddingLeft:2,paddingRight:2,paddingTop:1,paddingBottom:1,children:(0,t.jsx)(a.o,{variant:"pi",textColor:"neutral800",fontWeight:s?"bold":"normal","aria-current":s,...e,children:_})});o.displayName="Crumb"},63292:(v,p,i)=>{i.r(p),i.d(p,{default:()=>es});var t=i(92132),r=i(21272),a=i(50642),o=i(6479),_=i(53900),s=i(57564),e=i(68065),c=i(168),M=i(32161),x=i(69564),C=i(79318),T=i(70768),j=i(34508),h=i(21270),d=i(96586),n=i(57842),X=i(83314),I=i(27026),U=i(19106),J=i(70230),W=i(55794),b=i(43121),S=i(32559),l=i(8769),K=i(54894),R=i(74930),m=i(15824),gs=i(77965),Y=i(37679),z=i(60043),Z=i(61535),E=i(33544),D=i(12083),k=i(4032),F=i(31708),q=i(13333);const ss=D.object().shape({options:D.object().shape({from:D.object().shape({name:D.string().required(l.translatedErrors.required),email:D.string().email(l.translatedErrors.email).required(l.translatedErrors.required)}).required(),response_email:D.string().email(l.translatedErrors.email),object:D.string().required(l.translatedErrors.required),message:D.string().required(l.translatedErrors.required)}).required(l.translatedErrors.required)}),N=({template:g,onToggle:$,onSubmit:u})=>{const{formatMessage:P}=(0,K.A)();return(0,t.jsxs)(a.k,{onClose:$,labelledBy:`${P({id:(0,m.g)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})}, ${P({id:(0,m.g)(g.display),defaultMessage:g.display})}`,children:[(0,t.jsx)(o.r,{children:(0,t.jsxs)(Y.B,{label:`${P({id:(0,m.g)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})}, ${P({id:(0,m.g)(g.display),defaultMessage:g.display})}`,children:[(0,t.jsx)(z.m,{children:P({id:(0,m.g)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})}),(0,t.jsx)(z.m,{isCurrent:!0,children:P({id:(0,m.g)(g.display),defaultMessage:g.display})})]})}),(0,t.jsx)(Z.Formik,{onSubmit:u,initialValues:g,validateOnChange:!1,validationSchema:ss,enableReinitialize:!0,children:({errors:O,values:y,handleChange:A,isSubmitting:B})=>(0,t.jsxs)(l.Form,{children:[(0,t.jsx)(_.c,{children:(0,t.jsxs)(s.x,{gap:5,children:[(0,t.jsx)(e.E,{col:6,s:12,children:(0,t.jsx)(l.GenericInput,{intlLabel:{id:(0,m.g)("PopUpForm.Email.options.from.name.label"),defaultMessage:"Shipper name"},name:"options.from.name",onChange:A,value:y.options.from.name,error:O?.options?.from?.name,type:"text"})}),(0,t.jsx)(e.E,{col:6,s:12,children:(0,t.jsx)(l.GenericInput,{intlLabel:{id:(0,m.g)("PopUpForm.Email.options.from.email.label"),defaultMessage:"Shipper email"},name:"options.from.email",onChange:A,value:y.options.from.email,error:O?.options?.from?.email,type:"text"})}),(0,t.jsx)(e.E,{col:6,s:12,children:(0,t.jsx)(l.GenericInput,{intlLabel:{id:(0,m.g)("PopUpForm.Email.options.response_email.label"),defaultMessage:"Response email"},name:"options.response_email",onChange:A,value:y.options.response_email,error:O?.options?.response_email,type:"text"})}),(0,t.jsx)(e.E,{col:6,s:12,children:(0,t.jsx)(l.GenericInput,{intlLabel:{id:(0,m.g)("PopUpForm.Email.options.object.label"),defaultMessage:"Subject"},name:"options.object",onChange:A,value:y.options.object,error:O?.options?.object,type:"text"})}),(0,t.jsx)(e.E,{col:12,s:12,children:(0,t.jsx)(c.T,{label:P({id:(0,m.g)("PopUpForm.Email.options.message.label"),defaultMessage:"Message"}),id:"options.message",onChange:A,value:y.options.message,error:O?.options?.message&&P({id:O.options.message,defaultMessage:O.options.message})})})]})}),(0,t.jsx)(M.j,{startActions:(0,t.jsx)(x.$,{onClick:$,variant:"tertiary",children:"Cancel"}),endActions:(0,t.jsx)(x.$,{loading:B,type:"submit",children:"Finish"})})]})})]})};N.propTypes={template:E.shape({display:E.string,icon:E.string,options:E.shape({from:E.shape({name:E.string,email:E.string}),message:E.string,object:E.string,response_email:E.string})}).isRequired,onSubmit:E.func.isRequired,onToggle:E.func.isRequired};const w=({canUpdate:g,onEditClick:$})=>{const{formatMessage:u}=(0,K.A)();return(0,t.jsxs)(C.X,{colCount:3,rowCount:3,children:[(0,t.jsx)(T.d,{children:(0,t.jsxs)(j.Tr,{children:[(0,t.jsx)(h.Th,{width:"1%",children:(0,t.jsx)(d.s,{children:u({id:(0,m.g)("Email.template.table.icon.label"),defaultMessage:"icon"})})}),(0,t.jsx)(h.Th,{children:(0,t.jsx)(n.o,{variant:"sigma",textColor:"neutral600",children:u({id:(0,m.g)("Email.template.table.name.label"),defaultMessage:"name"})})}),(0,t.jsx)(h.Th,{width:"1%",children:(0,t.jsx)(d.s,{children:u({id:(0,m.g)("Email.template.table.action.label"),defaultMessage:"action"})})})]})}),(0,t.jsxs)(X.N,{children:[(0,t.jsxs)(j.Tr,{...(0,l.onRowClick)({fn:()=>$("reset_password")}),children:[(0,t.jsx)(h.Td,{children:(0,t.jsx)(I.I,{children:(0,t.jsx)(k.A,{"aria-label":u({id:"global.reset-password",defaultMessage:"Reset password"})})})}),(0,t.jsx)(h.Td,{children:(0,t.jsx)(n.o,{children:u({id:"global.reset-password",defaultMessage:"Reset password"})})}),(0,t.jsx)(h.Td,{...l.stopPropagation,children:(0,t.jsx)(U.K,{onClick:()=>$("reset_password"),label:u({id:(0,m.g)("Email.template.form.edit.label"),defaultMessage:"Edit a template"}),noBorder:!0,icon:g&&(0,t.jsx)(F.A,{})})})]}),(0,t.jsxs)(j.Tr,{...(0,l.onRowClick)({fn:()=>$("email_confirmation")}),children:[(0,t.jsx)(h.Td,{children:(0,t.jsx)(I.I,{children:(0,t.jsx)(q.A,{"aria-label":u({id:(0,m.g)("Email.template.email_confirmation"),defaultMessage:"Email address confirmation"})})})}),(0,t.jsx)(h.Td,{children:(0,t.jsx)(n.o,{children:u({id:(0,m.g)("Email.template.email_confirmation"),defaultMessage:"Email address confirmation"})})}),(0,t.jsx)(h.Td,{...l.stopPropagation,children:(0,t.jsx)(U.K,{onClick:()=>$("email_confirmation"),label:u({id:(0,m.g)("Email.template.form.edit.label"),defaultMessage:"Edit a template"}),noBorder:!0,icon:g&&(0,t.jsx)(F.A,{})})})]})]})]})};w.propTypes={canUpdate:E.bool.isRequired,onEditClick:E.func.isRequired};const es=()=>(0,t.jsx)(l.CheckPagePermissions,{permissions:m.P.readEmailTemplates,children:(0,t.jsx)(ts,{})}),ts=()=>{const{formatMessage:g}=(0,K.A)(),{trackUsage:$}=(0,l.useTracking)(),{notifyStatus:u}=(0,J.W)(),P=(0,l.useNotification)(),{lockApp:O,unlockApp:y}=(0,l.useOverlayBlocker)(),A=(0,R.useQueryClient)(),{get:B,put:is}=(0,l.useFetchClient)(),{formatAPIError:H}=(0,l.useAPIErrorHandler)();(0,l.useFocusWhenNavigate)();const[as,ns]=r.useState(!1),[Q,os]=r.useState(null),{isLoading:rs,allowedActions:{canUpdate:ls}}=(0,l.useRBAC)({update:m.P.updateEmailTemplates}),{isLoading:ds,data:G}=(0,R.useQuery)(["users-permissions","email-templates"],async()=>{const{data:f}=await B("/users-permissions/email-templates");return f},{onSuccess(){u(g({id:(0,m.g)("Email.template.data.loaded"),defaultMessage:"Email templates has been loaded"}))},onError(f){P({type:"warning",message:H(f)})}}),ms=rs||ds,L=()=>{ns(f=>!f)},_s=f=>{os(f),L()},V=(0,R.useMutation)(f=>is("/users-permissions/email-templates",{"email-templates":f}),{async onSuccess(){await A.invalidateQueries(["users-permissions","email-templates"]),P({type:"success",message:{id:"notification.success.saved",defaultMessage:"Saved"}}),$("didEditEmailTemplates"),y(),L()},onError(f){P({type:"warning",message:H(f)}),y()},refetchActive:!0}),ps=f=>{O(),$("willEditEmailTemplates");const cs={...G,[Q]:f};V.mutate(cs)};return ms?(0,t.jsxs)(W.g,{"aria-busy":"true",children:[(0,t.jsx)(l.SettingsPageTitle,{name:g({id:(0,m.g)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),(0,t.jsx)(b.Q,{title:g({id:(0,m.g)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),(0,t.jsx)(S.s,{children:(0,t.jsx)(l.LoadingIndicatorPage,{})})]}):(0,t.jsxs)(W.g,{"aria-busy":V.isLoading,children:[(0,t.jsx)(l.SettingsPageTitle,{name:g({id:(0,m.g)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),(0,t.jsx)(b.Q,{title:g({id:(0,m.g)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),(0,t.jsxs)(S.s,{children:[(0,t.jsx)(w,{onEditClick:_s,canUpdate:ls}),as&&(0,t.jsx)(N,{template:G[Q],onToggle:L,onSubmit:ps})]})]})}}}]);