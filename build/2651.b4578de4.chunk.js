"use strict";(self.webpackChunkstrapi_project=self.webpackChunkstrapi_project||[]).push([[2651],{94061:(A,m,t)=>{t.d(m,{a:()=>_});var i=t(63891),d=t(28672),r=t(5146);const o={color:!0,cursor:!0,height:!0,width:!0},_=i.default.div.withConfig({shouldForwardProp:(e,s)=>!o[e]&&s(e)})`
  // Font
  font-size: ${({fontSize:e,theme:s})=>(0,r.K)(s.fontSizes,e,e)};

  // Colors
  background: ${({theme:e,background:s})=>(0,r.K)(e.colors,s,s)};
  color: ${({theme:e,color:s})=>(0,r.K)(e.colors,s,void 0)};

  // Spaces
  ${({theme:e,padding:s})=>(0,d.A)("padding",s,e)}
  ${({theme:e,paddingTop:s})=>(0,d.A)("padding-top",s,e)}
  ${({theme:e,paddingRight:s})=>(0,d.A)("padding-right",s,e)}
  ${({theme:e,paddingBottom:s})=>(0,d.A)("padding-bottom",s,e)}
  ${({theme:e,paddingLeft:s})=>(0,d.A)("padding-left",s,e)}
  ${({theme:e,marginLeft:s})=>(0,d.A)("margin-left",s,e)}
  ${({theme:e,marginRight:s})=>(0,d.A)("margin-right",s,e)}
  ${({theme:e,marginTop:s})=>(0,d.A)("margin-top",s,e)}
  ${({theme:e,marginBottom:s})=>(0,d.A)("margin-bottom",s,e)}

  // Responsive hiding
  ${({theme:e,hiddenS:s})=>s?`${e.mediaQueries.tablet} { display: none; }`:void 0}
  ${({theme:e,hiddenXS:s})=>s?`${e.mediaQueries.mobile} { display: none; }`:void 0}
  

  // Borders
  border-radius: ${({theme:e,hasRadius:s,borderRadius:f})=>s?e.borderRadius:f};
  border-style: ${({borderStyle:e})=>e};
  border-width: ${({borderWidth:e})=>e};
  border-color: ${({borderColor:e,theme:s})=>(0,r.K)(s.colors,e,void 0)};
  border: ${({theme:e,borderColor:s,borderStyle:f,borderWidth:P})=>{if(s&&!f&&typeof P>"u")return`1px solid ${e.colors[s]}`}};

  // Shadows
  box-shadow: ${({theme:e,shadow:s})=>(0,r.K)(e.shadows,s,void 0)};

  // Handlers
  pointer-events: ${({pointerEvents:e})=>e};
  &:hover {
    ${({_hover:e,theme:s})=>e?e(s):void 0}
  }

  // Display
  display: ${({display:e})=>e};

  // Position
  position: ${({position:e})=>e};
  left: ${({left:e,theme:s})=>(0,r.K)(s.spaces,e,e)};
  right: ${({right:e,theme:s})=>(0,r.K)(s.spaces,e,e)};
  top: ${({top:e,theme:s})=>(0,r.K)(s.spaces,e,e)};
  bottom: ${({bottom:e,theme:s})=>(0,r.K)(s.spaces,e,e)};
  z-index: ${({zIndex:e})=>e};
  overflow: ${({overflow:e})=>e};

  // Size
  width: ${({width:e,theme:s})=>(0,r.K)(s.spaces,e,e)};
  max-width: ${({maxWidth:e,theme:s})=>(0,r.K)(s.spaces,e,e)};
  min-width: ${({minWidth:e,theme:s})=>(0,r.K)(s.spaces,e,e)};
  height: ${({height:e,theme:s})=>(0,r.K)(s.spaces,e,e)};
  max-height: ${({maxHeight:e,theme:s})=>(0,r.K)(s.spaces,e,e)};
  min-height: ${({minHeight:e,theme:s})=>(0,r.K)(s.spaces,e,e)};

  // Animation
  transition: ${({transition:e})=>e};
  transform: ${({transform:e})=>e};
  animation: ${({animation:e})=>e};

  //Flexbox children props
  flex-shrink: ${({shrink:e})=>e};
  flex-grow: ${({grow:e})=>e};
  flex-basis: ${({basis:e})=>e};
  flex: ${({flex:e})=>e};

  // Text
  text-align: ${({textAlign:e})=>e};
  text-transform: ${({textTransform:e})=>e};
  line-height: ${({theme:e,lineHeight:s})=>(0,r.K)(e.lineHeights,s,s)};

  // Cursor
  cursor: ${({cursor:e})=>e};
`},83997:(A,m,t)=>{t.d(m,{s:()=>_});var i=t(63891),d=t(28672),r=t(94061);const o={direction:!0},_=(0,i.default)(r.a).withConfig({shouldForwardProp:(e,s)=>!o[e]&&s(e)})`
  align-items: ${({alignItems:e="center"})=>e};
  display: ${({display:e="flex",inline:s})=>s?"inline-flex":e};
  flex-direction: ${({direction:e="row"})=>e};
  flex-shrink: ${({shrink:e})=>e};
  flex-wrap: ${({wrap:e})=>e};
  ${({gap:e,theme:s})=>(0,d.A)("gap",e,s)};
  justify-content: ${({justifyContent:e})=>e};
`},30893:(A,m,t)=>{t.d(m,{o:()=>W});var i=t(63891);const d="alpha",r="beta",o="delta",_="epsilon",e="omega",s="pi",f="sigma",P=[d,r,o,_,e,s,f],y=({ellipsis:u=!1})=>u&&`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,I=({variant:u=e,theme:a})=>{switch(u){case d:return`
        font-weight: ${a.fontWeights.bold};
        font-size: ${a.fontSizes[5]};
        line-height: ${a.lineHeights[2]};
      `;case r:return`
        font-weight: ${a.fontWeights.bold};
        font-size: ${a.fontSizes[4]};
        line-height: ${a.lineHeights[1]};
      `;case o:return`
        font-weight: ${a.fontWeights.semiBold};
        font-size: ${a.fontSizes[3]};
        line-height: ${a.lineHeights[2]};
      `;case _:return`
        font-size: ${a.fontSizes[3]};
        line-height: ${a.lineHeights[6]};
      `;case e:return`
        font-size: ${a.fontSizes[2]};
        line-height: ${a.lineHeights[4]};
      `;case s:return`
        font-size: ${a.fontSizes[1]};
        line-height: ${a.lineHeights[3]};
      `;case f:return`
        font-weight: ${a.fontWeights.bold};
        font-size: ${a.fontSizes[0]};
        line-height: ${a.lineHeights[5]};
        text-transform: uppercase;
      `;default:return`
        font-size: ${a.fontSizes[2]};
      `}};var $=t(5146);const T={fontSize:!0,fontWeight:!0},W=i.default.span.withConfig({shouldForwardProp:(u,a)=>!T[u]&&a(u)})`
  ${I}
  ${y}

  // These properties need to come after {variantStyle}, because they might
  // overwrite a variant attribute
  font-weight: ${({theme:u,fontWeight:a})=>(0,$.K)(u.fontWeights,a,void 0)};
  font-size: ${({theme:u,fontSize:a})=>(0,$.K)(u.fontSizes,a,void 0)};
  line-height: ${({theme:u,lineHeight:a})=>(0,$.K)(u.lineHeights,a,a)};
  color: ${({theme:u,textColor:a})=>u.colors[a||"neutral800"]};
  text-align: ${({textAlign:u})=>u};
  text-decoration: ${({textDecoration:u})=>u};
  text-transform: ${({textTransform:u})=>u};
`},28672:(A,m,t)=>{t.d(m,{A:()=>i});const i=(d,r,o)=>{if(!r)return;if(typeof r=="object")return(Array.isArray(r)?r:[r?.desktop,r?.tablet,r?.mobile]).reduce((f,P,y)=>{if(P)switch(y){case 0:return`${f}${d}: ${o.spaces[P]};`;case 1:return`${f}${o.mediaQueries.tablet}{${d}: ${o.spaces[P]};}`;case 2:return`${f}${o.mediaQueries.mobile}{${d}: ${o.spaces[P]};}`;default:return f}return f},"");const _=o.spaces[r]??r;return`${d}: ${_};`}},5146:(A,m,t)=>{t.d(m,{K:()=>r});function i(o,_){return typeof o=="string"?!1:_ in o}function d(o){return o&&typeof o=="object"&&!Array.isArray(o)}function r(o,_,e){return _&&i(o,_)?o[_]:e}},37679:(A,m,t)=>{t.d(m,{B:()=>P});var i=t(92132),d=t(21272),r=t(63891),o=t(94061),_=t(30893);const e=()=>(0,i.jsx)(o.a,{"aria-hidden":!0,paddingLeft:1,paddingRight:1,children:(0,i.jsx)(_.o,{variant:"pi",textColor:"neutral500",children:"/"})});e.displayName="Divider";var s=t(83997);const f=(0,r.default)(s.s)`
  // CrumbLinks do have padding-x, because they need to have a
  // interaction effect, which mis-aligns the breadcrumbs on the left.
  // This normalizes the behavior by moving the first item to left by
  // the same amount it has inner padding
  :first-child {
    margin-left: ${({theme:y})=>`calc(-1*${y.spaces[2]})`};
  }
`,P=({label:y,children:I,...$})=>{const T=d.Children.toArray(I);return(0,i.jsx)(o.a,{"aria-label":y,...$,children:(0,i.jsx)(f,{as:"ol",children:d.Children.map(T,(W,u)=>{const a=T.length>1&&u+1<T.length;return(0,i.jsxs)(s.s,{inline:!0,as:"li",children:[W,a&&(0,i.jsx)(e,{})]})})})})};P.displayName="Breadcrumbs"},60043:(A,m,t)=>{t.d(m,{m:()=>o});var i=t(92132),d=t(94061),r=t(30893);const o=({children:_,isCurrent:e=!1,...s})=>(0,i.jsx)(d.a,{paddingLeft:2,paddingRight:2,paddingTop:1,paddingBottom:1,children:(0,i.jsx)(r.o,{variant:"pi",textColor:"neutral800",fontWeight:e?"bold":"normal","aria-current":e,...s,children:_})});o.displayName="Crumb"},42651:(A,m,t)=>{t.r(m),t.d(m,{ProvidersPage:()=>oe,default:()=>be});var i=t(92132),d=t(21272),r=t(44158),o=t(81926),_=t(50642),e=t(6479),s=t(53900),f=t(43242),P=t(57564),y=t(68065),I=t(32161),$=t(69564),T=t(53432),W=t(55794),u=t(43121),a=t(32559),ge=t(79318),_e=t(70768),se=t(34508),R=t(21270),z=t(57842),pe=t(96586),he=t(83314),me=t(19106),g=t(8769),fe=t(31708),Ee=t(39404),H=t(54894),Q=t(74930),ve=t(37679),Pe=t(60043),Me=t(61535),n=t(33544),p=t(15824),Le=t(77965),l=t(12083);const V=({description:E,disabled:K,intlLabel:L,error:x,name:b,onChange:B,placeholder:h,providerToEditName:C,type:D,value:M})=>{const{formatMessage:v}=(0,H.A)(),j=b==="noName"?`${window.strapi.backendURL}/api/connect/${C}/callback`:M,U=v({id:L.id,defaultMessage:L.defaultMessage},{provider:C,...L.values}),O=E?v({id:E.id,defaultMessage:E.defaultMessage},{provider:C,...E.values}):"";if(D==="bool")return(0,i.jsx)(r.l,{"aria-label":b,checked:M,disabled:K,hint:O,label:U,name:b,offLabel:v({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:v({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:w=>{B({target:{name:b,value:w.target.checked}})}});const Y=h?v({id:h.id,defaultMessage:h.defaultMessage},{...h.values}):"",Z=x?v({id:x,defaultMessage:x}):"";return(0,i.jsx)(o.k,{"aria-label":b,disabled:K,error:Z,label:U,name:b,onChange:B,placeholder:Y,type:D,value:j})};V.defaultProps={description:null,disabled:!1,error:"",placeholder:null,value:""},V.propTypes={description:n.shape({id:n.string.isRequired,defaultMessage:n.string.isRequired,values:n.object}),disabled:n.bool,error:n.string,intlLabel:n.shape({id:n.string.isRequired,defaultMessage:n.string.isRequired,values:n.object}).isRequired,name:n.string.isRequired,onChange:n.func.isRequired,placeholder:n.shape({id:n.string.isRequired,defaultMessage:n.string.isRequired,values:n.object}),providerToEditName:n.string.isRequired,type:n.string.isRequired,value:n.oneOfType([n.bool,n.string])};const k=({headerBreadcrumbs:E,initialData:K,isSubmiting:L,layout:x,isOpen:b,onSubmit:B,onToggle:h,providerToEditName:C})=>{const{formatMessage:D}=(0,H.A)();return b?(0,i.jsxs)(_.k,{onClose:h,labelledBy:"title",children:[(0,i.jsx)(e.r,{children:(0,i.jsx)(ve.B,{label:E.join(", "),children:E.map((M,v,j)=>(0,i.jsx)(Pe.m,{isCurrent:v===j.length-1,children:M},M))})}),(0,i.jsx)(Me.Formik,{onSubmit:M=>B(M),initialValues:K,validationSchema:x.schema,validateOnChange:!1,children:({errors:M,handleChange:v,values:j})=>(0,i.jsxs)(g.Form,{children:[(0,i.jsx)(s.c,{children:(0,i.jsx)(f.s,{direction:"column",alignItems:"stretch",gap:1,children:(0,i.jsx)(P.x,{gap:5,children:x.form.map(U=>U.map(O=>(0,i.jsx)(y.E,{col:O.size,xs:12,children:(0,i.jsx)(V,{...O,error:M[O.name],onChange:v,value:j[O.name],providerToEditName:C})},O.name)))})})}),(0,i.jsx)(I.j,{startActions:(0,i.jsx)($.$,{variant:"tertiary",onClick:h,type:"button",children:D({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),endActions:(0,i.jsx)($.$,{type:"submit",loading:L,children:D({id:"global.save",defaultMessage:"Save"})})})]})})]}):null};k.defaultProps={initialData:null,providerToEditName:null},k.propTypes={headerBreadcrumbs:n.arrayOf(n.string).isRequired,initialData:n.object,layout:n.shape({form:n.arrayOf(n.array),schema:n.object}).isRequired,isOpen:n.bool.isRequired,isSubmiting:n.bool.isRequired,onSubmit:n.func.isRequired,onToggle:n.func.isRequired,providerToEditName:n.string};const te={id:(0,p.g)("PopUpForm.Providers.redirectURL.front-end.label"),defaultMessage:"The redirect URL to your front-end app"},ie={id:"http://www.client-app.com",defaultMessage:"http://www.client-app.com"},X={id:(0,p.g)("PopUpForm.Providers.enabled.description"),defaultMessage:"If disabled, users won't be able to use this provider."},G={id:(0,p.g)("PopUpForm.Providers.enabled.label"),defaultMessage:"Enable"},re={id:(0,p.g)("PopUpForm.Providers.key.label"),defaultMessage:"Client ID"},ae={id:(0,p.g)("PopUpForm.Providers.redirectURL.label"),defaultMessage:"The redirect URL to add in your {provider} application configurations"},S={id:(0,p.g)("PopUpForm.Providers.key.placeholder"),defaultMessage:"TEXT"},ne={id:(0,p.g)("PopUpForm.Providers.secret.label"),defaultMessage:"Client Secret"},J={email:{form:[[{intlLabel:G,name:"enabled",type:"bool",description:X,size:6}]],schema:l.object().shape({enabled:l.bool().required(g.translatedErrors.required)})},providers:{form:[[{intlLabel:G,name:"enabled",type:"bool",description:X,size:6,validations:{required:!0}}],[{intlLabel:re,name:"key",type:"text",placeholder:S,size:12,validations:{required:!0}}],[{intlLabel:ne,name:"secret",type:"text",placeholder:S,size:12,validations:{required:!0}}],[{intlLabel:te,placeholder:ie,name:"callback",type:"text",size:12,validations:{required:!0}}],[{intlLabel:ae,name:"noName",type:"text",validations:{},size:12,disabled:!0}]],schema:l.object().shape({enabled:l.bool().required(g.translatedErrors.required),key:l.string().when("enabled",{is:!0,then:l.string().required(g.translatedErrors.required),otherwise:l.string()}),secret:l.string().when("enabled",{is:!0,then:l.string().required(g.translatedErrors.required),otherwise:l.string()}),callback:l.string().when("enabled",{is:!0,then:l.string().required(g.translatedErrors.required),otherwise:l.string()})})},providersWithSubdomain:{form:[[{intlLabel:G,name:"enabled",type:"bool",description:X,size:6,validations:{required:!0}}],[{intlLabel:re,name:"key",type:"text",placeholder:S,size:12,validations:{required:!0}}],[{intlLabel:ne,name:"secret",type:"text",placeholder:S,size:12,validations:{required:!0}}],[{intlLabel:{id:(0,p.g)({id:"PopUpForm.Providers.jwksurl.label"}),defaultMessage:"JWKS URL"},name:"jwksurl",type:"text",placeholder:S,size:12,validations:{required:!1}}],[{intlLabel:{id:(0,p.g)("PopUpForm.Providers.subdomain.label"),defaultMessage:"Host URI (Subdomain)"},name:"subdomain",type:"text",placeholder:{id:(0,p.g)("PopUpForm.Providers.subdomain.placeholder"),defaultMessage:"my.subdomain.com"},size:12,validations:{required:!0}}],[{intlLabel:te,placeholder:ie,name:"callback",type:"text",size:12,validations:{required:!0}}],[{intlLabel:ae,name:"noName",type:"text",validations:{},size:12,disabled:!0}]],schema:l.object().shape({enabled:l.bool().required(g.translatedErrors.required),key:l.string().when("enabled",{is:!0,then:l.string().required(g.translatedErrors.required),otherwise:l.string()}),secret:l.string().when("enabled",{is:!0,then:l.string().required(g.translatedErrors.required),otherwise:l.string()}),subdomain:l.string().when("enabled",{is:!0,then:l.string().required(g.translatedErrors.required),otherwise:l.string()}),callback:l.string().when("enabled",{is:!0,then:l.string().required(g.translatedErrors.required),otherwise:l.string()})})}},oe=()=>{const{formatMessage:E,locale:K}=(0,H.A)(),L=(0,Q.useQueryClient)(),{trackUsage:x}=(0,g.useTracking)(),[b,B]=d.useState(!1),[h,C]=d.useState(null),D=(0,g.useNotification)(),{lockApp:M,unlockApp:v}=(0,g.useOverlayBlocker)(),{get:j,put:U}=(0,g.useFetchClient)(),{formatAPIError:O}=(0,g.useAPIErrorHandler)(),Y=(0,g.useCollator)(K,{sensitivity:"base"});(0,g.useFocusWhenNavigate)();const{isLoading:Z,allowedActions:{canUpdate:w}}=(0,g.useRBAC)({update:p.P.updateProviders}),{isLoading:ye,data:q}=(0,Q.useQuery)(["users-permissions","get-providers"],async()=>{const{data:c}=await j("/users-permissions/providers");return c},{initialData:{}}),de=(0,Q.useMutation)(c=>U("/users-permissions/providers",c),{async onSuccess(){await L.invalidateQueries(["users-permissions","providers"]),D({type:"success",message:{id:(0,p.g)("notification.success.submit")}}),x("didEditAuthenticationProvider"),ee(),v()},onError(c){D({type:"warning",message:O(c)}),v()},refetchActive:!1}),N=Object.entries(q).reduce((c,[F,De])=>{const{icon:ue,enabled:Ae,subdomain:Te}=De;return c.push({name:F,icon:ue==="envelope"?["fas","envelope"]:["fab",ue],enabled:Ae,subdomain:Te}),c},[]).sort((c,F)=>Y.compare(c.name,F.name)),xe=ye||Z,le=d.useMemo(()=>h?!!N.find(F=>F.name===h)?.subdomain:!1,[N,h]),Oe=d.useMemo(()=>h==="email"?J.email:le?J.providersWithSubdomain:J.providers,[h,le]),ee=()=>{B(c=>!c)},ce=c=>{w&&(C(c.name),ee())},$e=async c=>{M(),x("willEditAuthenticationProvider"),de.mutate({providers:{...q,[h]:c}})};return(0,i.jsxs)(T.P,{children:[(0,i.jsx)(g.SettingsPageTitle,{name:E({id:(0,p.g)("HeaderNav.link.providers"),defaultMessage:"Providers"})}),(0,i.jsxs)(W.g,{children:[(0,i.jsx)(u.Q,{title:E({id:(0,p.g)("HeaderNav.link.providers"),defaultMessage:"Providers"})}),xe?(0,i.jsx)(g.LoadingIndicatorPage,{}):(0,i.jsx)(a.s,{children:(0,i.jsxs)(ge.X,{colCount:3,rowCount:N.length+1,children:[(0,i.jsx)(_e.d,{children:(0,i.jsxs)(se.Tr,{children:[(0,i.jsx)(R.Th,{children:(0,i.jsx)(z.o,{variant:"sigma",textColor:"neutral600",children:E({id:"global.name",defaultMessage:"Name"})})}),(0,i.jsx)(R.Th,{children:(0,i.jsx)(z.o,{variant:"sigma",textColor:"neutral600",children:E({id:(0,p.g)("Providers.status"),defaultMessage:"Status"})})}),(0,i.jsx)(R.Th,{children:(0,i.jsx)(z.o,{variant:"sigma",children:(0,i.jsx)(pe.s,{children:E({id:"global.settings",defaultMessage:"Settings"})})})})]})}),(0,i.jsx)(he.N,{children:N.map(c=>(0,i.jsxs)(se.Tr,{...(0,g.onRowClick)({fn:()=>ce(c),condition:w}),children:[(0,i.jsx)(R.Td,{width:"45%",children:(0,i.jsx)(z.o,{fontWeight:"semiBold",textColor:"neutral800",children:c.name})}),(0,i.jsx)(R.Td,{width:"65%",children:(0,i.jsx)(z.o,{textColor:c.enabled?"success600":"danger600","data-testid":`enable-${c.name}`,children:c.enabled?E({id:"global.enabled",defaultMessage:"Enabled"}):E({id:"global.disabled",defaultMessage:"Disabled"})})}),(0,i.jsx)(R.Td,{...g.stopPropagation,children:w&&(0,i.jsx)(me.K,{onClick:()=>ce(c),noBorder:!0,icon:(0,i.jsx)(fe.A,{}),label:"Edit"})})]},c.name))})]})})]}),(0,i.jsx)(k,{initialData:q[h],isOpen:b,isSubmiting:de.isLoading,layout:Oe,headerBreadcrumbs:[E({id:(0,p.g)("PopUpForm.header.edit.providers"),defaultMessage:"Edit Provider"}),Ee(h)],onToggle:ee,onSubmit:$e,providerToEditName:h})]})},be=()=>(0,i.jsx)(g.CheckPagePermissions,{permissions:p.P.readProviders,children:(0,i.jsx)(oe,{})})}}]);
