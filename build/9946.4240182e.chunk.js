(self.webpackChunkstrapi_project=self.webpackChunkstrapi_project||[]).push([[9946],{94445:z=>{function Y(a,n,m,y){for(var B=-1,P=a==null?0:a.length;++B<P;){var k=a[B];n(y,k,m(k),a)}return y}z.exports=Y},33999:(z,Y,a)=>{var n=a(32193),m=n("length");z.exports=m},7233:(z,Y,a)=>{var n=a(97449);function m(y,B,P,k){return n(y,function(v,S,U){B(k,v,P(v),U)}),k}z.exports=m},97449:(z,Y,a)=>{var n=a(85373),m=a(75821),y=m(n);z.exports=y},41225:(z,Y,a)=>{var n=a(81204),m=a(51646),y="[object RegExp]";function B(P){return m(P)&&n(P)==y}z.exports=B},29884:(z,Y,a)=>{var n=a(97449),m=a(91522);function y(B,P){var k=-1,v=m(B)?Array(B.length):[];return n(B,function(S,U,_){v[++k]=P(S,U,_)}),v}z.exports=y},4191:(z,Y,a)=>{var n=a(87864),m=a(86386),y=a(45353),B=a(29884),P=a(74565),k=a(52689),v=a(48126),S=a(82388),U=a(82261);function _(ne,re,ze){re.length?re=n(re,function(ae){return U(ae)?function(ie){return m(ie,ae.length===1?ae[0]:ae)}:ae}):re=[S];var pe=-1;re=n(re,k(y));var ce=B(ne,function(ae,ie,oe){var Re=n(re,function(Ie){return Ie(ae)});return{criteria:Re,index:++pe,value:ae}});return P(ce,function(ae,ie){return v(ae,ie,ze)})}z.exports=_},74565:z=>{function Y(a,n){var m=a.length;for(a.sort(n);m--;)a[m]=a[m].value;return a}z.exports=Y},64958:(z,Y,a)=>{var n=a(91662);function m(y,B){if(y!==B){var P=y!==void 0,k=y===null,v=y===y,S=n(y),U=B!==void 0,_=B===null,ne=B===B,re=n(B);if(!_&&!re&&!S&&y>B||S&&U&&ne&&!_&&!re||k&&U&&ne||!P&&ne||!v)return 1;if(!k&&!S&&!re&&y<B||re&&P&&v&&!k&&!S||_&&P&&v||!U&&v||!ne)return-1}return 0}z.exports=m},48126:(z,Y,a)=>{var n=a(64958);function m(y,B,P){for(var k=-1,v=y.criteria,S=B.criteria,U=v.length,_=P.length;++k<U;){var ne=n(v[k],S[k]);if(ne){if(k>=_)return ne;var re=P[k];return ne*(re=="desc"?-1:1)}}return y.index-B.index}z.exports=m},88532:(z,Y,a)=>{var n=a(94445),m=a(7233),y=a(45353),B=a(82261);function P(k,v){return function(S,U){var _=B(S)?n:m,ne=v?v():{};return _(S,k,y(U,2),ne)}}z.exports=P},75821:(z,Y,a)=>{var n=a(91522);function m(y,B){return function(P,k){if(P==null)return P;if(!n(P))return y(P,k);for(var v=P.length,S=B?v:-1,U=Object(P);(B?S--:++S<v)&&k(U[S],S,U)!==!1;);return P}}z.exports=m},49605:(z,Y,a)=>{var n=a(33999),m=a(20598),y=a(71387);function B(P){return m(P)?y(P):n(P)}z.exports=B},71387:z=>{var Y="\\ud800-\\udfff",a="\\u0300-\\u036f",n="\\ufe20-\\ufe2f",m="\\u20d0-\\u20ff",y=a+n+m,B="\\ufe0e\\ufe0f",P="["+Y+"]",k="["+y+"]",v="\\ud83c[\\udffb-\\udfff]",S="(?:"+k+"|"+v+")",U="[^"+Y+"]",_="(?:\\ud83c[\\udde6-\\uddff]){2}",ne="[\\ud800-\\udbff][\\udc00-\\udfff]",re="\\u200d",ze=S+"?",pe="["+B+"]?",ce="(?:"+re+"(?:"+[U,_,ne].join("|")+")"+pe+ze+")*",ae=pe+ze+ce,ie="(?:"+[U+k+"?",k,_,ne,P].join("|")+")",oe=RegExp(v+"(?="+v+")|"+ie+ae,"g");function Re(Ie){for(var be=oe.lastIndex=0;oe.test(Ie);)++be;return be}z.exports=Re},94710:(z,Y,a)=>{var n=a(95292),m=a(88532),y=Object.prototype,B=y.hasOwnProperty,P=m(function(k,v,S){B.call(k,S)?k[S].push(v):n(k,S,[v])});z.exports=P},22171:(z,Y,a)=>{var n=a(41225),m=a(52689),y=a(54765),B=y&&y.isRegExp,P=B?m(B):n;z.exports=P},34827:(z,Y,a)=>{var n=a(81204),m=a(82261),y=a(51646),B="[object String]";function P(k){return typeof k=="string"||!m(k)&&y(k)&&n(k)==B}z.exports=P},14311:(z,Y,a)=>{var n=a(32628),m=a(50633),y=a(91522),B=a(34827),P=a(49605),k="[object Map]",v="[object Set]";function S(U){if(U==null)return 0;if(y(U))return B(U)?P(U):U.length;var _=m(U);return _==k||_==v?U.size:n(U).length}z.exports=S},45635:(z,Y,a)=>{var n=a(87212),m=a(4191),y=a(39226),B=a(3956),P=y(function(k,v){if(k==null)return[];var S=v.length;return S>1&&B(k,v[0],v[1])?v=[]:S>2&&B(v[0],v[1],v[2])&&(v=[v[0]]),m(k,n(v,1),[])});z.exports=P},89102:(z,Y,a)=>{var n=a(85306);function m(y){return n(y).toLowerCase()}z.exports=m},35336:(z,Y,a)=>{var n=a(8928),m=a(88974),y=a(20598),B=a(57505),P=a(22171),k=a(49605),v=a(30660),S=a(88765),U=a(85306),_=30,ne="...",re=/\w*$/;function ze(pe,ce){var ae=_,ie=ne;if(B(ce)){var oe="separator"in ce?ce.separator:oe;ae="length"in ce?S(ce.length):ae,ie="omission"in ce?n(ce.omission):ie}pe=U(pe);var Re=pe.length;if(y(pe)){var Ie=v(pe);Re=Ie.length}if(ae>=Re)return pe;var be=ae-k(ie);if(be<1)return ie;var je=Ie?m(Ie,0,be).join(""):pe.slice(0,be);if(oe===void 0)return je+ie;if(Ie&&(be+=je.length-be),P(oe)){if(pe.slice(be).search(oe)){var gt,se=je;for(oe.global||(oe=RegExp(oe.source,U(re.exec(oe))+"g")),oe.lastIndex=0;gt=oe.exec(se);)var ot=gt.index;je=je.slice(0,ot===void 0?be:ot)}}else if(pe.indexOf(n(oe),be)!=be){var ht=je.lastIndexOf(oe);ht>-1&&(je=je.slice(0,ht))}return je+ie}z.exports=ze},71547:(z,Y,a)=>{var n=a(19913);function m(y){return y&&y.length?n(y):[]}z.exports=m},80846:(z,Y,a)=>{"use strict";a.d(Y,{B:()=>B});var n=a(92132),m=a(63891),y=a(5391);const B=({options:k,...v})=>(0,n.jsx)(y.KF,{...v,children:k.map(S=>"children"in S?(0,n.jsx)(y.np,{label:S.label,values:S.children.map(U=>U.value.toString()),children:S.children.map(U=>(0,n.jsx)(P,{value:U.value,children:U.label},U.value))},S.label):(0,n.jsx)(y.fe,{value:S.value,children:S.label},S.value))}),P=(0,m.default)(y.fe)`
  padding-left: ${({theme:k})=>k.spaces[7]};
`},49946:(z,Y,a)=>{"use strict";a.r(Y),a.d(Y,{A:()=>ct,C:()=>zt,a:()=>_e,g:()=>c,i:()=>Ad,u:()=>We});var n=a(92132),m=a(21272),y=a(44370),B=a(43274),P=a(27026),k=a(80846),v=a(43242),S=a(57842),U=a(76106),_=a(57564),ne=a(68065),re=a(93744),ze=a(53900),pe=a(15926),ce=a(44622),ae=a(24122),ie=a(83724),oe=a(45024),Re=a(89787),Ie=a(35089),be=a(12050),je=a(81926),gt=a(5483),se=a(69564),ot=a(6479),ht=a(91894),Es=a(41516),Rs=a(96586),Is=a(17122),Ds=a(18670),an=a(19106),Os=a(42035),Ps=a(71262),ks=a(37373),Bs=a(168),ws=a(50642),zs=a(32161),Us=a(53432),N=a(8769),Ws=a(14718),K=a(54894),on=a(71389),Fe=a(17703),D=a(63891);const De=(e,t,s)=>{if(!t)return;if(typeof t=="object")return(Array.isArray(t)?t:[t?.desktop,t?.tablet,t?.mobile]).reduce((i,d,u)=>{if(d)switch(u){case 0:return`${i}${e}: ${s.spaces[d]};`;case 1:return`${i}${s.mediaQueries.tablet}{${e}: ${s.spaces[d]};}`;case 2:return`${i}${s.mediaQueries.mobile}{${e}: ${s.spaces[d]};}`;default:return i}return i},"");const o=s.spaces[t]??t;return`${e}: ${o};`};function Gs(e,t){return typeof e=="string"?!1:t in e}function zd(e){return e&&typeof e=="object"&&!Array.isArray(e)}function le(e,t,s){return t&&Gs(e,t)?e[t]:s}const Vs={color:!0,cursor:!0,height:!0,width:!0},Q=D.default.div.withConfig({shouldForwardProp:(e,t)=>!Vs[e]&&t(e)})`
  // Font
  font-size: ${({fontSize:e,theme:t})=>le(t.fontSizes,e,e)};

  // Colors
  background: ${({theme:e,background:t})=>le(e.colors,t,t)};
  color: ${({theme:e,color:t})=>le(e.colors,t,void 0)};

  // Spaces
  ${({theme:e,padding:t})=>De("padding",t,e)}
  ${({theme:e,paddingTop:t})=>De("padding-top",t,e)}
  ${({theme:e,paddingRight:t})=>De("padding-right",t,e)}
  ${({theme:e,paddingBottom:t})=>De("padding-bottom",t,e)}
  ${({theme:e,paddingLeft:t})=>De("padding-left",t,e)}
  ${({theme:e,marginLeft:t})=>De("margin-left",t,e)}
  ${({theme:e,marginRight:t})=>De("margin-right",t,e)}
  ${({theme:e,marginTop:t})=>De("margin-top",t,e)}
  ${({theme:e,marginBottom:t})=>De("margin-bottom",t,e)}

  // Responsive hiding
  ${({theme:e,hiddenS:t})=>t?`${e.mediaQueries.tablet} { display: none; }`:void 0}
  ${({theme:e,hiddenXS:t})=>t?`${e.mediaQueries.mobile} { display: none; }`:void 0}
  

  // Borders
  border-radius: ${({theme:e,hasRadius:t,borderRadius:s})=>t?e.borderRadius:s};
  border-style: ${({borderStyle:e})=>e};
  border-width: ${({borderWidth:e})=>e};
  border-color: ${({borderColor:e,theme:t})=>le(t.colors,e,void 0)};
  border: ${({theme:e,borderColor:t,borderStyle:s,borderWidth:o})=>{if(t&&!s&&typeof o>"u")return`1px solid ${e.colors[t]}`}};

  // Shadows
  box-shadow: ${({theme:e,shadow:t})=>le(e.shadows,t,void 0)};

  // Handlers
  pointer-events: ${({pointerEvents:e})=>e};
  &:hover {
    ${({_hover:e,theme:t})=>e?e(t):void 0}
  }

  // Display
  display: ${({display:e})=>e};

  // Position
  position: ${({position:e})=>e};
  left: ${({left:e,theme:t})=>le(t.spaces,e,e)};
  right: ${({right:e,theme:t})=>le(t.spaces,e,e)};
  top: ${({top:e,theme:t})=>le(t.spaces,e,e)};
  bottom: ${({bottom:e,theme:t})=>le(t.spaces,e,e)};
  z-index: ${({zIndex:e})=>e};
  overflow: ${({overflow:e})=>e};

  // Size
  width: ${({width:e,theme:t})=>le(t.spaces,e,e)};
  max-width: ${({maxWidth:e,theme:t})=>le(t.spaces,e,e)};
  min-width: ${({minWidth:e,theme:t})=>le(t.spaces,e,e)};
  height: ${({height:e,theme:t})=>le(t.spaces,e,e)};
  max-height: ${({maxHeight:e,theme:t})=>le(t.spaces,e,e)};
  min-height: ${({minHeight:e,theme:t})=>le(t.spaces,e,e)};

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
  line-height: ${({theme:e,lineHeight:t})=>le(e.lineHeights,t,t)};

  // Cursor
  cursor: ${({cursor:e})=>e};
`,Hs=(0,D.default)(Q)`
  display: grid;
  grid-template-columns: repeat(${({gridCols:e})=>e}, 1fr);
  ${({theme:e,gap:t})=>De("gap",t,e)}
`,Zs=e=>{const{gap:t="0",gridCols:s=12,...o}=e;return(0,n.jsx)(Hs,{gap:t,gridCols:s,...o})},Ys=`${232/16}rem`,Ks=(0,D.default)(Zs)`
  width: ${Ys};
  background: ${({theme:e})=>e.colors.neutral100};
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  border-right: 1px solid ${({theme:e})=>e.colors.neutral200};
  z-index: 1;
`,Qs=({ariaLabel:e,...t})=>(0,n.jsx)(Ks,{"aria-label":e,as:"nav",...t});var yt=a(67067);const Xs={DOWN:"ArrowDown",UP:"ArrowUp",RIGHT:"ArrowRight",LEFT:"ArrowLeft",ESCAPE:"Escape",ENTER:"Enter",SPACE:" ",TAB:"Tab",END:"End",HOME:"Home",DELETE:"Delete",PAGE_UP:"PageUp",PAGE_DOWN:"PageDown",BACKSPACE:"Backspace",CLEAR:"Clear"},Js=m["useId".toString()]||(()=>{});let qs=0;const et=e=>{const[t,s]=(0,m.useState)(Js());return(0,m.useLayoutEffect)(()=>{e||s(o=>o??String(qs++))},[e]),e?.toString()??(t||"")},_s=e=>{const t=(0,m.useRef)();return(0,m.useEffect)(()=>{t.current=e}),t.current},ea=(0,D.default)(Q)`
  height: 1px;
  border: none;
  /* If contained in a Flex parent we want to prevent the Divider to shink */
  flex-shrink: 0;
  ${({unsetMargin:e})=>e?"margin: 0;":""}
`,ta=({unsetMargin:e=!0,...t})=>(0,n.jsx)(ea,{...t,background:"neutral150",as:"hr",unsetMargin:e}),na=e=>(0,n.jsx)("form",{...e,role:"search"});var sa=a(98889);function aa(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function rn(...e){return t=>e.forEach(s=>aa(s,t))}function Ud(...e){return React.useCallback(rn(...e),e)}const Wd=e=>({theme:t,size:s})=>t.sizes[e][s],ln=(e="&")=>({theme:t,hasError:s=!1})=>(0,D.css)`
    outline: none;
    box-shadow: 0;
    transition-property: border-color, box-shadow, fill;
    transition-duration: 0.2s;

    ${e}:focus-within {
      border: 1px solid ${s?t.colors.danger600:t.colors.primary600};
      box-shadow: ${s?t.colors.danger600:t.colors.primary600} 0px 0px 0px 2px;
    }
  `,dn=({theme:e})=>(0,D.css)`
  position: relative;
  outline: none;

  &:after {
    transition-property: all;
    transition-duration: 0.2s;
    border-radius: 8px;
    content: '';
    position: absolute;
    top: -4px;
    bottom: -4px;
    left: -4px;
    right: -4px;
    border: 2px solid transparent;
  }

  &:focus-visible {
    outline: none;
    &:after {
      border-radius: 8px;
      content: '';
      position: absolute;
      top: -5px;
      bottom: -5px;
      left: -5px;
      right: -5px;
      border: 2px solid ${e.colors.primary600};
    }
  }
`,cn=(0,m.createContext)({id:"",required:!1}),un=()=>(0,m.useContext)(cn),oa={direction:!0},ue=(0,D.default)(Q).withConfig({shouldForwardProp:(e,t)=>!oa[e]&&t(e)})`
  align-items: ${({alignItems:e="center"})=>e};
  display: ${({display:e="flex",inline:t})=>t?"inline-flex":e};
  flex-direction: ${({direction:e="row"})=>e};
  flex-shrink: ${({shrink:e})=>e};
  flex-wrap: ${({wrap:e})=>e};
  ${({gap:e,theme:t})=>De("gap",e,t)};
  justify-content: ${({justifyContent:e})=>e};
`,mn={S:6.5,M:10.5},ra=(0,m.forwardRef)(({endAction:e,startAction:t,disabled:s=!1,onChange:o,size:r="M",...l},i)=>{const{id:d,error:u,hint:p,name:g,required:f}=un();let j;u?j=`${d}-error`:p&&(j=`${d}-hint`);const A=Boolean(u),x=$=>{!s&&o&&o($)};return(0,n.jsxs)(Mt,{justifyContent:"space-between",hasError:A,disabled:s,children:[t?(0,n.jsx)(Q,{paddingLeft:3,paddingRight:2,children:t}):null,(0,n.jsx)(ia,{id:d,name:g,ref:i,"aria-describedby":j,"aria-invalid":A,"aria-disabled":s,disabled:s,"data-disabled":s?"":void 0,hasLeftAction:Boolean(t),hasRightAction:Boolean(e),onChange:x,"aria-required":f,$size:r,...l}),e?(0,n.jsx)(Q,{paddingLeft:2,paddingRight:3,children:e}):null]})}),ia=D.default.input`
  border: none;
  border-radius: ${({theme:e})=>e.borderRadius};
  padding-bottom: ${({$size:e})=>`${mn[e]/16}rem`};
  padding-left: ${({theme:e,hasLeftAction:t})=>t?0:e.spaces[4]};
  padding-right: ${({theme:e,hasRightAction:t})=>t?0:e.spaces[4]};
  padding-top: ${({$size:e})=>`${mn[e]/16}rem`};
  cursor: ${e=>e["aria-disabled"]?"not-allowed":void 0};

  color: ${({theme:e})=>e.colors.neutral800};
  font-weight: 400;
  font-size: ${e=>e.theme.fontSizes[2]};
  display: block;
  width: 100%;
  background: inherit;

  ::placeholder {
    color: ${({theme:e})=>e.colors.neutral500};
    opacity: 1;
  }

  &[aria-disabled='true'] {
    color: inherit;
  }

  //focus managed by InputWrapper
  &:focus {
    outline: none;
    box-shadow: none;
  }
`,Mt=(0,D.default)(ue)`
  border: 1px solid ${({theme:e,hasError:t})=>t?e.colors.danger600:e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius};
  background: ${({theme:e})=>e.colors.neutral0};
  ${ln()}

  ${({theme:e,disabled:t})=>t?(0,D.css)`
          color: ${e.colors.neutral600};
          background: ${e.colors.neutral150};
        `:void 0}
`,bt=D.default.div`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`,la=(0,D.default)(ue)`
  font-size: 1.6rem;
  padding: 0;
`,da=(0,m.forwardRef)(({label:e,children:t,...s},o)=>(0,n.jsxs)(la,{justifyContent:"unset",background:"transparent",borderStyle:"none",type:"button",...s,as:"button",ref:o,children:[(0,n.jsx)(bt,{as:"span",children:e}),(0,m.cloneElement)(t,{"aria-hidden":!0,focusable:!1})]})),ca=(0,m.forwardRef)(({children:e,name:t,error:s,hint:o,id:r,required:l=!1,...i},d)=>{const u=et(r),p=(0,m.useMemo)(()=>({name:t,id:u,error:s,hint:o,required:l}),[s,u,o,t,l]);return(0,n.jsx)(Q,{ref:d,...i,children:(0,n.jsx)(cn.Provider,{value:p,children:e})})}),ua="[@strapi/design-system]:",ma=e=>{const t=e;let s=!1;if(typeof t!="function")throw new TypeError(`${ua} once requires a function parameter`);return(...o)=>{s||(t(...o),s=!0)}},pn="alpha",fn="beta",gn="delta",hn="epsilon",St="omega",yn="pi",bn="sigma",Gd=[pn,fn,gn,hn,St,yn,bn],pa=({ellipsis:e=!1})=>e&&`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,fa=({variant:e=St,theme:t})=>{switch(e){case pn:return`
        font-weight: ${t.fontWeights.bold};
        font-size: ${t.fontSizes[5]};
        line-height: ${t.lineHeights[2]};
      `;case fn:return`
        font-weight: ${t.fontWeights.bold};
        font-size: ${t.fontSizes[4]};
        line-height: ${t.lineHeights[1]};
      `;case gn:return`
        font-weight: ${t.fontWeights.semiBold};
        font-size: ${t.fontSizes[3]};
        line-height: ${t.lineHeights[2]};
      `;case hn:return`
        font-size: ${t.fontSizes[3]};
        line-height: ${t.lineHeights[6]};
      `;case St:return`
        font-size: ${t.fontSizes[2]};
        line-height: ${t.lineHeights[4]};
      `;case yn:return`
        font-size: ${t.fontSizes[1]};
        line-height: ${t.lineHeights[3]};
      `;case bn:return`
        font-weight: ${t.fontWeights.bold};
        font-size: ${t.fontSizes[0]};
        line-height: ${t.lineHeights[5]};
        text-transform: uppercase;
      `;default:return`
        font-size: ${t.fontSizes[2]};
      `}},ga={fontSize:!0,fontWeight:!0},q=D.default.span.withConfig({shouldForwardProp:(e,t)=>!ga[e]&&t(e)})`
  ${fa}
  ${pa}

  // These properties need to come after {variantStyle}, because they might
  // overwrite a variant attribute
  font-weight: ${({theme:e,fontWeight:t})=>le(e.fontWeights,t,void 0)};
  font-size: ${({theme:e,fontSize:t})=>le(e.fontSizes,t,void 0)};
  line-height: ${({theme:e,lineHeight:t})=>le(e.lineHeights,t,t)};
  color: ${({theme:e,textColor:t})=>e.colors[t||"neutral800"]};
  text-align: ${({textAlign:e})=>e};
  text-decoration: ${({textDecoration:e})=>e};
  text-transform: ${({textTransform:e})=>e};
`,ha=ma(console.warn),ya=(0,m.forwardRef)(({children:e,action:t,required:s,...o},r)=>{const{id:l,required:i}=un(),d=i||s;return s!==void 0&&ha('Deprecation warning: Usage of "required" prop in FieldLabel component is deprecated. This is discouraged and will be removed in the next major release. Please use the Field component to share the required prop.'),(0,n.jsxs)(ba,{ref:r,variant:"pi",textColor:"neutral800",htmlFor:l,fontWeight:"bold",as:"label",...o,children:[e,d&&(0,n.jsx)(xa,{textColor:"danger600",children:"*"}),t&&(0,n.jsx)(va,{marginLeft:1,children:t})]})}),ba=(0,D.default)(q)`
  display: flex;
  align-items: center;
`,xa=(0,D.default)(q)`
  line-height: 0;
`,va=(0,D.default)(ue)`
  line-height: 0;

  svg path {
    fill: ${({theme:e})=>e.colors.neutral500};
  }
`,Ca=(0,D.default)(sa.A)`
  font-size: 0.5rem;
  path {
    fill: ${({theme:e})=>e.colors.neutral400};
  }
`,xn=(0,D.default)(yt.A)`
  font-size: 0.8rem;
  path {
    fill: ${({theme:e})=>e.colors.neutral800};
  }
`,Aa=D.default.div`
  border-radius: ${({theme:e})=>e.borderRadius};
  box-shadow: ${({theme:e})=>e.shadows.filterShadow};

  &:focus-within {
    ${xn} {
      path {
        fill: ${({theme:e})=>e.colors.primary600};
      }
    }
  }

  ${Mt} {
    border: 1px solid transparent;
  }

  ${ln(Mt)}
`,Ta=(0,m.forwardRef)(({name:e,size:t="M",children:s,value:o="",onClear:r,clearLabel:l,...i},d)=>{const u=(0,m.useRef)(null),p=o.length>0,g=j=>{r(j),u.current.focus()},f=rn(d,u);return(0,n.jsx)(Aa,{children:(0,n.jsxs)(ca,{name:e,children:[(0,n.jsx)(bt,{children:(0,n.jsx)(ya,{children:s})}),(0,n.jsx)(ra,{ref:f,value:o,startAction:(0,n.jsx)(xn,{"aria-hidden":!0}),size:t,endAction:p?(0,n.jsx)(da,{label:l,onClick:g,children:(0,n.jsx)(Ca,{})}):void 0,...i})]})})}),ja=e=>{const[t,s]=(0,m.useState)(!1),o=(0,m.useRef)(null),r=()=>{typeof o.current=="number"&&(clearTimeout(o.current),o.current=null)};return(0,m.useEffect)(()=>()=>{r()},[]),{visible:t,onFocus:()=>{s(!0)},onBlur:()=>{s(!1)},onMouseEnter:()=>{o.current=setTimeout(()=>{s(!0)},e)},onMouseLeave:()=>{r(),s(!1)}}},He=8,$a=(e,t)=>{const s=(e.width-t.width)/2,o=t.left-s,r=t.top+t.height+He+window.pageYOffset;return{left:o,top:r}},Ma=(e,t)=>{const s=(e.height-t.height)/2,o=t.left+t.width+He,r=t.top-s+window.pageYOffset;return{left:o,top:r}},Sa=(e,t)=>{const s=(e.height-t.height)/2,o=t.left-e.width-He,r=t.top-s+window.pageYOffset;return{left:o,top:r}},Na=(e,t)=>{const s=(e.width-t.width)/2;let o=t.left-s,r=t.top-e.height-He+window.pageYOffset;const l=window.innerWidth-t.right;return t.left+e.width-l>window.innerWidth?(o=t.left-e.width-He,r=t.top+window.scrollY-t.height/2):o<0?(o=t.width+t.left+He,r=t.top+window.scrollY-e.height/2+He):r<0&&o>0&&(r=t.top+t.height+He),{left:o,top:r}},Fa=(e,t,s)=>{const o=e.getBoundingClientRect(),r=t.getBoundingClientRect();return s==="bottom"?$a(o,r):s==="right"?Ma(o,r):s==="left"?Sa(o,r):Na(o,r)},La=(e,t)=>{const s=(0,m.useRef)(null),o=(0,m.useRef)(null);return(0,m.useLayoutEffect)(()=>{if(e){const r=s.current,l=o.current;if(r&&l){const i=Fa(r,l,t);r.style.left=`${i.left}px`,r.style.top=`${i.top}px`}}},[t,e]),{tooltipWrapperRef:s,toggleSourceRef:o}};var Ea=a(26509);const vn=m.forwardRef(({container:e=globalThis?.document?.body,...t},s)=>e?(0,Ea.createPortal)((0,n.jsx)(Q,{ref:s,...t}),e):null);vn.displayName="Portal";const Ra=(0,D.default)(Q)`
  /* z-index exist because of its position inside Modals */
  z-index: 4;
  display: ${({visible:e})=>e?"revert":"none"};
`,Ia=({children:e,label:t,description:s,delay:o=500,position:r="top",id:l,...i})=>{const d=et(l),u=et(),{visible:p,...g}=ja(o),{tooltipWrapperRef:f,toggleSourceRef:j}=La(p,r),A=m.cloneElement(e,{tabIndex:0,"aria-labelledby":t?d:void 0,"aria-describedby":s?d:void 0,...g});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(vn,{children:(0,n.jsxs)(Ra,{id:d,background:"neutral900",hasRadius:!0,padding:2,role:"tooltip",ref:f,visible:p,position:"absolute",...i,children:[p&&(0,n.jsx)(bt,{id:u,children:s}),(0,n.jsx)(q,{as:"p",variant:"pi",fontWeight:"bold",textColor:"neutral0",children:t||s})]})}),(0,n.jsx)("span",{ref:j,children:A})]})},Da=(0,D.default)(ue)`
  > svg {
    height: ${({theme:e})=>e.spaces[3]};
    width: ${({theme:e})=>e.spaces[3]};

    > g,
    path {
      fill: ${({theme:e})=>e.colors.neutral0};
    }
  }

  &[aria-disabled='true'] {
    pointer-events: none;
  }

  ${dn}
`,Nt=m.forwardRef(({disabled:e,children:t,background:s="neutral0",...o},r)=>(0,n.jsx)(Da,{ref:r,"aria-disabled":e,as:"button",type:"button",disabled:e,padding:2,hasRadius:!0,background:s,borderColor:"neutral200",cursor:"pointer",...o,children:t}));Nt.displayName="BaseButton";const Oa="tertiary",rt="secondary",Pa=["S","M","L"],ka=[Oa,rt],Ba=m.forwardRef(({label:e,background:t,borderWidth:s,noBorder:o=!1,children:r,icon:l,disabled:i=!1,onClick:d,size:u=Pa[0],"aria-label":p,variant:g=ka[0],...f},j)=>{const A=$=>{!i&&d&&d($)},x=(0,n.jsxs)(Cn,{"aria-disabled":i,background:i?"neutral150":t,borderWidth:o?0:s,justifyContent:"center",...f,ref:j,size:u,onClick:A,variant:g,children:[(0,n.jsx)(bt,{as:"span",children:e??p}),m.cloneElement(l||r,{"aria-hidden":!0,focusable:!1})]});return e?(0,n.jsx)(Ia,{label:e,children:x}):x}),Cn=(0,D.default)(Nt)`
  background-color: ${({theme:e,variant:t})=>{if(t===rt)return e.colors.primary100}};
  border-color: ${({theme:e,variant:t})=>t===rt?e.colors.primary200:e.colors.neutral200};
  height: ${({theme:e,size:t})=>e.sizes.button[t]};
  width: ${({theme:e,size:t})=>e.sizes.button[t]};

  svg {
    g,
    path {
      fill: ${({theme:e,variant:t})=>t===rt?e.colors.primary500:e.colors.neutral500};
    }
  }

  :hover,
  :focus {
    svg {
      g,
      path {
        fill: ${({theme:e,variant:t})=>t===rt?e.colors.primary600:e.colors.neutral600};
      }
    }
  }

  &[aria-disabled='true'] {
    svg {
      path {
        fill: ${({theme:e})=>e.colors.neutral600};
      }
    }
  }
`,Vd=(0,D.default)(ue)`
  & span:first-child button {
    border-left: 1px solid ${({theme:e})=>e.colors.neutral200};
    border-radius: ${({theme:e})=>`${e.borderRadius} 0 0 ${e.borderRadius}`};
  }

  & span:last-child button {
    border-radius: ${({theme:e})=>`0 ${e.borderRadius} ${e.borderRadius} 0`};
  }

  & ${Cn} {
    border-radius: 0;
    border-left: none;

    svg {
      path {
        fill: ${({theme:e})=>e.colors.neutral700};
      }
    }

    &:hover {
      background-color: ${({theme:e})=>e.colors.neutral100};

      svg {
        path {
          fill: ${({theme:e})=>e.colors.neutral800};
        }
      }
    }

    &:active {
      background-color: ${({theme:e})=>e.colors.neutral150};
      svg {
        path {
          fill: ${({theme:e})=>e.colors.neutral900};
        }
      }
    }

    &[aria-disabled='true'] {
      svg {
        path {
          fill: ${({theme:e})=>e.colors.neutral600};
        }
      }
    }
  }
`,An=(0,D.default)(ta)`
  width: ${24/16}rem;
  background-color: ${({theme:e})=>e.colors.neutral200};
`,wa=({as:e="h2",label:t,searchLabel:s="",searchable:o=!1,onChange:r=()=>{},value:l="",onClear:i=()=>{},onSubmit:d=()=>{},id:u})=>{const[p,g]=(0,m.useState)(!1),f=_s(p),j=et(u),A=(0,m.useRef)(void 0),x=(0,m.useRef)(void 0);(0,m.useEffect)(()=>{p&&A.current&&A.current.focus(),f&&!p&&x.current&&x.current.focus()},[p,f]);const $=()=>{g(L=>!L)},W=L=>{i(L),A.current.focus()},M=L=>{L.relatedTarget?.id!==j&&g(!1)},F=L=>{L.key===Xs.ESCAPE&&g(!1)};return p?(0,n.jsxs)(Q,{paddingLeft:4,paddingTop:5,paddingBottom:2,paddingRight:4,children:[(0,n.jsx)(na,{children:(0,n.jsx)(Ta,{name:"searchbar",value:l,onChange:r,placeholder:"e.g: strapi-plugin-abcd",onKeyDown:F,ref:A,onBlur:M,onClear:W,onSubmit:d,clearLabel:"Clear",size:"S",children:s})}),(0,n.jsx)(Q,{paddingLeft:2,paddingTop:4,children:(0,n.jsx)(An,{})})]}):(0,n.jsxs)(Q,{paddingLeft:6,paddingTop:6,paddingBottom:2,paddingRight:4,children:[(0,n.jsxs)(ue,{justifyContent:"space-between",alignItems:"flex-start",children:[(0,n.jsx)(q,{variant:"beta",as:e,children:t}),o&&(0,n.jsx)(Ba,{ref:x,onClick:$,label:s,icon:(0,n.jsx)(yt.A,{})})]}),(0,n.jsx)(Q,{paddingTop:4,children:(0,n.jsx)(An,{})})]})},za=({children:e,spacing:t=2,horizontal:s=!1,...o})=>(0,n.jsx)(Q,{paddingTop:2,paddingBottom:4,children:(0,n.jsx)(ue,{as:"ol",gap:t,direction:s?"row":"column",alignItems:s?"center":"stretch",...o,children:m.Children.map(e,(r,l)=>(0,n.jsx)("li",{children:r},l))})});var Ft=a(28556);const Tn=(0,D.default)(ue)`
  border: none;
  padding: 0;
  background: transparent;
`,Ua=D.default.div`
  display: flex;
  align-items: center;
  transform: rotateX(${({rotated:e})=>e?"0deg":"180deg"});
`,Wa=({collapsable:e=!1,label:t,onClick:s=()=>{},ariaExpanded:o,ariaControls:r})=>e?(0,n.jsxs)(Tn,{as:"button",onClick:s,"aria-expanded":o,"aria-controls":r,textAlign:"left",children:[(0,n.jsx)(Q,{paddingRight:1,children:(0,n.jsx)(q,{variant:"sigma",textColor:"neutral600",children:t})}),e&&(0,n.jsx)(Ua,{rotated:o,children:(0,n.jsx)(Ft.A,{"aria-hidden":!0})})]}):(0,n.jsx)(Tn,{children:(0,n.jsx)(Q,{paddingRight:1,children:(0,n.jsx)(q,{variant:"sigma",textColor:"neutral600",children:t})})}),Ga=(0,D.default)(ue)`
  border-radius: ${({theme:e,size:t})=>t==="S"?"2px":e.borderRadius};
  height: ${({size:e,theme:t})=>t.sizes.badge[e]};
`,Va=({active:e=!1,size:t="M",textColor:s="neutral600",backgroundColor:o="neutral150",children:r,minWidth:l=5,...i})=>{const d=t==="S"?1:2;return(0,n.jsx)(Ga,{inline:!0,alignItem:"center",justifyContent:"center",minWidth:l,paddingLeft:d,paddingRight:d,background:e?"primary200":o,size:t,...i,children:(0,n.jsx)(q,{variant:"sigma",textColor:e?"primary600":s,children:r})})},Ha=(0,D.default)(Q)`
  svg {
    height: ${4/16}rem;
    path {
      fill: ${({theme:e})=>e.colors.neutral500};
    }
  }
`,Za=({collapsable:e=!1,label:t,badgeLabel:s,children:o,id:r})=>{const[l,i]=(0,m.useState)(!0),d=et(r),u=()=>{i(p=>!p)};return(0,n.jsxs)(ue,{direction:"column",alignItems:"stretch",gap:1,children:[(0,n.jsx)(Ha,{paddingLeft:6,paddingTop:2,paddingBottom:2,paddingRight:4,children:(0,n.jsxs)(Q,{position:"relative",paddingRight:s?6:0,children:[(0,n.jsx)(Wa,{onClick:u,ariaExpanded:l,ariaControls:d,collapsable:e,label:t}),s&&(0,n.jsx)(Va,{backgroundColor:"neutral150",textColor:"neutral600",position:"absolute",right:0,top:"50%",transform:"translateY(-50%)",children:s})]})}),(!e||l)&&(0,n.jsx)("ol",{id:d,children:m.Children.map(o,(p,g)=>(0,n.jsx)("li",{children:p},g))})]})},Ya=(0,D.default)(Q)`
  svg {
    height: ${4/16}rem;
    path {
      fill: ${({theme:e})=>e.colors.neutral700};
    }
  }
`,Ka=D.default.button`
  border: none;
  padding: 0;
  background: transparent;
  display: flex;
  align-items: center;
`,Qa=D.default.div`
  display: flex;
  align-items: center;
  width: ${12/16}rem;
  transform: rotateX(${({rotated:e})=>e?"0deg":"180deg"});
`,Xa=({label:e,children:t,id:s})=>{const[o,r]=(0,m.useState)(!0),l=et(s),i=()=>{r(d=>!d)};return(0,n.jsxs)(Q,{children:[(0,n.jsx)(Ya,{paddingLeft:7,paddingTop:2,paddingBottom:2,paddingRight:4,children:(0,n.jsx)(ue,{justifyContent:"space-between",children:(0,n.jsxs)(Ka,{onClick:i,"aria-expanded":o,"aria-controls":l,children:[(0,n.jsx)(Qa,{rotated:o,children:(0,n.jsx)(Ft.A,{"aria-hidden":!0})}),(0,n.jsx)(Q,{paddingLeft:2,children:(0,n.jsx)(q,{as:"span",fontWeight:"semiBold",textColor:"neutral800",children:e})})]})})}),o&&(0,n.jsx)("ul",{id:l,children:m.Children.map(t,(d,u)=>(0,n.jsx)("li",{children:d},u))})]})};var Ja=a(47576);const Lt=m.forwardRef(({href:e,rel:t="noreferrer noopener",target:s="_self",disabled:o=!1,isExternal:r=!1,...l},i)=>(0,n.jsx)(Q,{as:"a",ref:i,target:r?"_blank":s,rel:r?t:void 0,href:o?"#":e,"aria-disabled":o,cursor:"pointer",...l}));Lt.displayName="BaseLink";const qa=(0,D.default)(Q)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: ${({theme:e})=>e.colors.neutral800};
  svg > * {
    fill: ${({theme:e})=>e.colors.neutral600};
  }

  &.active {
    ${({theme:e})=>`
      background-color: ${e.colors.primary100};
      border-right: 2px solid ${e.colors.primary600};
      svg > * {
        fill: ${e.colors.primary700};
      }
      ${q} {
        color: ${e.colors.primary700};
        font-weight: 500;
      }
      `}
  }

  &:focus-visible {
    outline-offset: -2px;
  }
`,jn=(0,D.default)(Ja.A)`
  width: ${12/16}rem;
  height: ${4/16}rem;
  * {
    fill: ${({theme:e,$active:t})=>t?e.colors.primary600:e.colors.neutral600};
  }
`,_a=D.default.div`
  svg {
    height: ${12/16}rem;
    width: ${12/16}rem;
  }
`,$n=m.forwardRef(({children:e,icon:t=null,withBullet:s=!1,as:o=Lt,isSubSectionChild:r=!1,...l},i)=>(0,n.jsxs)(qa,{as:o,icon:t,background:"neutral100",paddingLeft:r?9:7,paddingBottom:2,paddingTop:2,ref:i,...l,children:[(0,n.jsxs)(ue,{children:[t?(0,n.jsx)(_a,{children:t}):(0,n.jsx)(jn,{}),(0,n.jsx)(Q,{paddingLeft:2,children:(0,n.jsx)(q,{as:"span",children:e})})]}),s&&(0,n.jsx)(Q,{as:ue,paddingRight:4,children:(0,n.jsx)(jn,{$active:!0})})]}));var eo=a(44010);const to=(0,D.default)(Lt)`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  gap: ${({theme:e})=>e.spaces[2]};
  pointer-events: ${({disabled:e})=>e?"none":void 0};

  svg {
    font-size: ${10/16}rem;

    path {
      fill: ${({disabled:e,theme:t})=>e?t.colors.neutral600:t.colors.primary600};
    }
  }

  &:hover {
    color: ${({theme:e})=>e.colors.primary500};
  }

  &:active {
    color: ${({theme:e})=>e.colors.primary700};
  }

  ${dn};
`,xt=m.forwardRef(({children:e,href:t,disabled:s=!1,startIcon:o,endIcon:r,isExternal:l=!0,...i},d)=>(0,n.jsxs)(to,{ref:d,href:t,disabled:s,isExternal:l,...i,children:[o,(0,n.jsx)(q,{textColor:s?"neutral600":"primary600",children:e}),r,t&&!r&&l&&(0,n.jsx)(eo.A,{})]}));xt.displayName="Link";const Mn=()=>(0,n.jsx)(Q,{"aria-hidden":!0,paddingLeft:1,paddingRight:1,children:(0,n.jsx)(q,{variant:"pi",textColor:"neutral500",children:"/"})});Mn.displayName="Divider";const no=(0,D.default)(ue)`
  // CrumbLinks do have padding-x, because they need to have a
  // interaction effect, which mis-aligns the breadcrumbs on the left.
  // This normalizes the behavior by moving the first item to left by
  // the same amount it has inner padding
  :first-child {
    margin-left: ${({theme:e})=>`calc(-1*${e.spaces[2]})`};
  }
`,Sn=({label:e,children:t,...s})=>{const o=m.Children.toArray(t);return(0,n.jsx)(Q,{"aria-label":e,...s,children:(0,n.jsx)(no,{as:"ol",children:m.Children.map(o,(r,l)=>{const i=o.length>1&&l+1<o.length;return(0,n.jsxs)(ue,{inline:!0,as:"li",children:[r,i&&(0,n.jsx)(Mn,{})]})})})})};Sn.displayName="Breadcrumbs";const Nn=({children:e,isCurrent:t=!1,...s})=>(0,n.jsx)(Q,{paddingLeft:2,paddingRight:2,paddingTop:1,paddingBottom:1,children:(0,n.jsx)(q,{variant:"pi",textColor:"neutral800",fontWeight:t?"bold":"normal","aria-current":t,...s,children:e})});Nn.displayName="Crumb";var Be=a(96234),so=a(4702),ao=a(16034);const Et="success-light",Rt="danger-light",vt="default",it="tertiary",lt="secondary",Fn="danger",Ln="success",It="ghost",Dt=[Et,Rt],oo=[vt,it,lt,Fn,Ln,It,...Dt],ro=["S","M","L"],$e=e=>e===Et||e===Rt?`${e.substring(0,e.lastIndexOf("-"))}`:e===it?"neutral":e===vt||e===lt||oo.every(t=>t!==e)?"primary":`${e}`,En=({theme:e})=>`
    border: 1px solid ${e.colors.neutral200};
    background: ${e.colors.neutral150};
    ${q} {
      color: ${e.colors.neutral600};
    }
    svg {
      > g, path {
        fill: ${e.colors.neutral600};
      }
    }
  `,io=({theme:e,variant:t})=>[...Dt,lt].includes(t)?`
      background-color: ${e.colors.neutral0};
    `:t===it?`
      background-color: ${e.colors.neutral100};
    `:t===It?`
      background-color: ${e.colors.neutral100};
    `:t===vt?`
      border: 1px solid ${e.colors.buttonPrimary500};
      background: ${e.colors.buttonPrimary500};
    `:`
    border: 1px solid ${e.colors[`${$e(t)}500`]};
    background: ${e.colors[`${$e(t)}500`]};
  `,lo=({theme:e,variant:t})=>[...Dt,lt].includes(t)?`
      background-color: ${e.colors.neutral0};
      border: 1px solid ${e.colors[`${$e(t)}600`]};
      ${q} {
        color: ${e.colors[`${$e(t)}600`]};
      }
      svg {
        > g, path {
          fill: ${e.colors[`${$e(t)}600`]};
        }
      }
    `:t===it?`
      background-color: ${e.colors.neutral150};
    `:`
    border: 1px solid ${e.colors[`${$e(t)}600`]};
    background: ${e.colors[`${$e(t)}600`]};
  `,co=({theme:e,variant:t})=>{switch(t){case Rt:case Et:case lt:return`
          border: 1px solid ${e.colors[`${$e(t)}200`]};
          background: ${e.colors[`${$e(t)}100`]};
          ${q} {
            color: ${e.colors[`${$e(t)}700`]};
          }
          svg {
            > g, path {
              fill: ${e.colors[`${$e(t)}700`]};
            }
          }
        `;case it:return`
          border: 1px solid ${e.colors.neutral200};
          background: ${e.colors.neutral0};
          ${q} {
            color: ${e.colors.neutral800};
          }
          svg {
            > g, path {
              fill: ${e.colors.neutral800};
            }
          }
        `;case It:return`
        border: 1px solid transparent;
        background: transparent;

        ${q} {
          color: ${e.colors.neutral800};
        }

        svg {
          > g, path {
            fill: ${e.colors.neutral500};
          }
        }
      `;case Ln:case Fn:return`
          border: 1px solid ${e.colors[`${$e(t)}600`]};
          background: ${e.colors[`${$e(t)}600`]};
          ${q} {
            color: ${e.colors.neutral0};
          }
        `;default:return`
          svg {
            > g, path {
              fill: ${e.colors.buttonNeutral0};
            }
          }
        `}},uo=(0,D.keyframes)`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,mo=(0,D.default)(ao.A)`
  animation: ${uo} 2s infinite linear;
  will-change: transform;
`,po=(0,D.default)(Nt)`
  height: ${({theme:e,size:t})=>e.sizes.button[t]};

  svg {
    height: ${12/16}rem;
    width: auto;
  }

  &[aria-disabled='true'] {
    ${En}

    &:active {
      ${En}
    }
  }

  &:hover {
    ${io}
  }

  &:active {
    ${lo}
  }

  ${co}
`,Rn=m.forwardRef(({variant:e=vt,startIcon:t,endIcon:s,disabled:o=!1,children:r,onClick:l,size:i=ro[0],loading:d=!1,fullWidth:u=!1,...p},g)=>{const f=o||d,j=A=>{!f&&l&&l(A)};return(0,n.jsxs)(po,{ref:g,"aria-disabled":f,disabled:f,size:i,variant:e,onClick:j,fullWidth:u,alignItems:"center",background:"buttonPrimary600",borderColor:"buttonPrimary600",gap:2,inline:u,justifyContent:u?"center":void 0,paddingLeft:4,paddingRight:4,width:u?"100%":void 0,...p,children:[(t||d)&&(0,n.jsx)(Q,{"aria-hidden":!0,children:d?(0,n.jsx)(mo,{}):t}),(0,n.jsx)(q,{variant:i==="S"?"pi":void 0,fontWeight:"bold",textColor:"buttonNeutral0",children:r}),s&&(0,n.jsx)(ue,{"aria-hidden":!0,children:s})]})});Rn.displayName="Button";const fo=Be.bL,go=(0,m.forwardRef)(({size:e,endIcon:t=(0,n.jsx)(Ft.A,{width:`${6/16}rem`,height:`${4/16}rem`,"aria-hidden":!0}),...s},o)=>(0,n.jsx)(Be.l9,{asChild:!0,children:(0,n.jsx)(Rn,{ref:o,type:"button",variant:"ghost",endIcon:t,paddingTop:e==="S"?1:2,paddingBottom:e==="S"?1:2,paddingLeft:e==="S"?3:4,paddingRight:e==="S"?3:4,...s})})),ho=(0,m.forwardRef)(({children:e,intersectionId:t,popoverPlacement:s="bottom-start",...o},r)=>{const[l,i]=s.split("-");return(0,n.jsx)(Be.ZL,{children:(0,n.jsx)(Be.UC,{align:i,side:l,loop:!0,asChild:!0,children:(0,n.jsxs)(In,{ref:r,direction:"column",borderStyle:"solid",borderWidth:"1px",borderColor:"neutral150",hasRadius:!0,background:"neutral0",shadow:"filterShadow",maxHeight:"15rem",padding:1,alignItems:"flex-start",position:"relative",overflow:"auto",...o,children:[e,(0,n.jsx)(Q,{id:t,width:"100%",height:"1px"})]})})})}),In=(0,D.default)(ue)`
  scrollbar-width: none;
  -ms-overflow-style: none;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }
`,yo=({onSelect:e,disabled:t=!1,...s})=>(0,n.jsx)(Be.q7,{asChild:!0,onSelect:e,disabled:t,children:s.isLink||s.isExternal?(0,n.jsx)(bo,{color:"neutral800",...s,isExternal:s.isExternal??!1,children:(0,n.jsx)(q,{children:s.children})}):(0,n.jsx)(On,{cursor:"pointer",color:"neutral800",background:"transparent",borderStyle:"none",...s,children:(0,n.jsx)(q,{children:s.children})})}),Dn=({theme:e})=>(0,D.css)`
  text-align: left;
  width: 100%;
  border-radius: ${e.borderRadius};
  padding: ${e.spaces[2]} ${e.spaces[4]};

  ${q} {
    color: inherit;
  }

  &[aria-disabled] {
    cursor: not-allowed;

    ${q} {
      color: ${e.colors.neutral500};
    }
  }

  &[data-highlighted] {
    background-color: ${e.colors.primary100};
  }

  &:focus-visible {
    outline: none;

    &:after {
      content: none;
    }
  }
`,On=(0,D.default)(ue)`
  ${Dn}
`,bo=(0,D.default)(xt)`
  /* We include this here again because typically when people use OptionLink they provide an as prop which cancels the Box props */
  color: ${({theme:e,color:t})=>le(e.colors,t,void 0)};
  text-decoration: none;

  &:hover {
    color: unset;
  }

  svg > path,
  &:focus-visible svg > path {
    fill: currentColor;
  }

  ${Dn}
`,Hd=(0,m.forwardRef)((e,t)=>(0,n.jsx)(Be.JU,{asChild:!0,children:(0,n.jsx)(xo,{ref:t,variant:"sigma",textColor:"neutral600",...e})})),xo=(0,D.default)(q)`
  padding: ${({theme:e})=>e.spaces[2]} ${({theme:e})=>e.spaces[4]};
`,Zd=Be.Pb,Yd=(0,m.forwardRef)(({disabled:e=!1,...t},s)=>(0,n.jsx)(Be.ZP,{asChild:!0,disabled:e,children:(0,n.jsxs)(vo,{ref:s,color:"neutral800",as:"button",type:"button",background:"transparent",borderStyle:"none",gap:5,...t,children:[(0,n.jsx)(q,{children:t.children}),(0,n.jsx)(Co,{height:12,width:12})]})})),vo=(0,D.default)(On)`
  &[data-state='open'] {
    background-color: ${({theme:e})=>e.colors.primary100};
  }
`,Co=(0,D.default)(so.A)`
  path {
    fill: ${({theme:e})=>e.colors.neutral500};
  }
`,Kd=(0,m.forwardRef)((e,t)=>(0,n.jsx)(Be.ZL,{children:(0,n.jsx)(Be.G5,{sideOffset:8,asChild:!0,children:(0,n.jsx)(In,{ref:t,direction:"column",borderStyle:"solid",borderWidth:"1px",borderColor:"neutral150",hasRadius:!0,background:"neutral0",shadow:"filterShadow",maxHeight:"15rem",padding:1,alignItems:"flex-start",overflow:"auto",...e})})})),Ao=fo,To=go,jo=ho,$o=yo,Qd=null,Xd=null,Jd=null,qd=null;var Mo=a(75516),So=a(66159),No=a(28763),Fo=a(52230),Pn=a(95065),Lo=a(59148),Eo=a(83461),Ro=a(94744),Io=a(59004),Do=a(13318),Oo=a(18904),Po=a(95289),ko=a(38697),Bo=a(15691),wo=a(83609),zo=a(40339),Uo=a(44030),Wo=a(40463),Go=a(59385),Vo=a(24685),Ho=a(13333),Zo=a(69999),Yo=a(77938),Ko=a(66804),Qo=a(28816),Xo=a(88938),Jo=a(10034),qo=a(73568),_o=a(58241),er=a(90808),tr=a(24304),nr=a(91325),sr=a(44169),ar=a(47213),or=a(2664),rr=a(97219),ir=a(34610),lr=a(56349),dr=a(69840),cr=a(14027),ur=a(2570),mr=a(21291),pr=a(4043),fr=a(8046),gr=a(29468),hr=a(58037),yr=a(90817),br=a(80141),xr=a(94013),vr=a(61983),Cr=a(32598),Ar=a(36005),Tr=a(88706),jr=a(51303),$r=a(99136),Mr=a(97937),Sr=a(4219),Nr=a(79265),Fr=a(29325),Lr=a(70983),Er=a(61271),Rr=a(19404),Ir=a(98266),Dr=a(50350),Or=a(36625),Pr=a(41564),kr=a(423),Br=a(95350),wr=a(43400),kn=a(27060),Bn=a(83551),wn=a(25394),zr=a(32782),Ur=a(50660),Wr=a(6299),Gr=a(79195),Vr=a(15196),Hr=a(94624),zn=a(19143),Un=a(72734),Wn=a(37218),Zr=a(46905),Yr=a(54063),Kr=a(87863),Qr=a(31708),Xr=a(12233),Jr=a(73283),qr=a(26140),_r=a(26190),ei=a(7187),ti=a(47449),Ze=a(31127),ni=a(41670),si=a(40547),ai=a(55087),oi=a(71597),ri=a(25942),ii=a(68110),li=a(84395),di=a(99074),ci=a(47658),ui=a(22019),mi=a(58314),pi=a(83620),fi=a(31317),gi=a(3669),hi=a(86173),yi=a(47605),bi=a(35127),xi=a(71222),vi=a(17304),Ci=a(59267),Ai=a(88719),Ti=a(61857),ji=a(33950),$i=a(17971),Mi=a(70552),Si=a(41686),Ni=a(60261),Fi=a(7138),Li=a(32310),Ei=a(7954),Ri=a(69816),Ii=a(82083),Di=a(50336),dt=a(80868),Oi=a(68861),Pi=a(45673),Gn=a(8019),ki=a(86040),Ct=a(43023),Bi=a(67152),wi=a(48313),Vn=a(35800),Ot=a(26085),Hn=a(3177),zi=a(31900),Ui=a(39915),Wi=a(86920),Gi=a(73019),Zn=a(65414),Vi=a(78519),Hi=a(76706),Zi=a(28312),Yi=a(39423),Ue=a(39404),C=a(51156),Pt=a(56336),O=a(2600),Ki=a(94710),Yn=a(48940),Qi=a(14311),qe=a(82437),Xi=a(412),Kn=a(89102),Ji=a(5409),At=a(21835),Qn=a(35336),qi=a(71547),T=a(12083),_i=a(17024),H=a(58692),kt=a(71210),Xn=a(70653),el=a(5790),Jn=a(35223),tl=a(45635);const c=e=>`${C.p}.${e}`,qn=(0,m.createContext)(),We=()=>(0,m.useContext)(qn),_n=m.createContext(),_e=()=>(0,m.useContext)(_n),nl=()=>{const{components:e,componentsGroupedByCategory:t,contentTypes:s,isInDevelopmentMode:o,sortedContentTypesList:r,modifiedData:l,initialData:i}=We(),d=(0,N.useNotification)(),{trackUsage:u}=(0,N.useTracking)(),[p,g]=(0,m.useState)(""),{onOpenModalCreateSchema:f,onOpenModalEditCategory:j}=_e(),{locale:A}=(0,K.A)(),{startsWith:x}=(0,N.useFilter)(A,{sensitivity:"base"}),$=(0,N.useCollator)(A,{sensitivity:"base"}),W=!Object.keys(s).some(G=>s[G].isTemporary===!0)&&!Object.keys(e).some(G=>e[G].isTemporary===!0)&&Pt(l,i),M=()=>{W?(u("willCreateContentType"),f({modalType:"contentType",kind:"collectionType",actionType:"create",forTarget:"contentType"})):w()},F=()=>{W?(u("willCreateSingleType"),f({modalType:"contentType",kind:"singleType",actionType:"create",forTarget:"contentType"})):w()},L=()=>{W?(u("willCreateComponent"),f({modalType:"component",kind:null,actionType:"create",forTarget:"component"})):w()},w=()=>{d({type:"info",message:{id:c("notification.info.creating.notSaved"),defaultMessage:"Please save your work before creating a new collection type or component"}})},ee=Object.entries(t).map(([G,Te])=>({name:G,title:G,isEditable:o,onClickEdit(te,Se){te.stopPropagation(),W?j(Se.name):w()},links:Te.map(te=>({name:te.uid,to:`/plugins/${C.p}/component-categories/${G}/${te.uid}`,title:te.schema.displayName})).sort((te,Se)=>$.compare(te.title,Se.title))})).sort((G,Te)=>$.compare(G.title,Te.title)),he=r.filter(G=>G.visible);return{menu:[{name:"models",title:{id:`${c("menu.section.models.name")}`,defaultMessage:"Collection Types"},customLink:o&&{id:`${c("button.model.create")}`,defaultMessage:"Create new collection type",onClick:M},links:he.filter(G=>G.kind==="collectionType")},{name:"singleTypes",title:{id:`${c("menu.section.single-types.name")}`,defaultMessage:"Single Types"},customLink:o&&{id:`${c("button.single-types.create")}`,defaultMessage:"Create new single type",onClick:F},links:he.filter(G=>G.kind==="singleType")},{name:"components",title:{id:`${c("menu.section.components.name")}`,defaultMessage:"Components"},customLink:o&&{id:`${c("button.component.create")}`,defaultMessage:"Create a new component",onClick:L},links:ee}].map(G=>G.links.some(te=>Array.isArray(te.links))?{...G,links:G.links.map(te=>{const Se=te.links.filter(xe=>x(xe.title,p));return Se.length===0?null:{...te,links:Se.sort((xe,de)=>$.compare(xe.title,de.title))}}).filter(Boolean)}:{...G,links:G.links.filter(te=>x(te.title,p)).sort((te,Se)=>$.compare(te.title,Se.title))}),searchValue:p,onSearchChange:g}},sl=()=>{const{menu:e,searchValue:t,onSearchChange:s}=nl(),{formatMessage:o}=(0,K.A)();return(0,n.jsxs)(Qs,{ariaLabel:o({id:`${c("plugin.name")}`,defaultMessage:"Content-Types Builder"}),children:[(0,n.jsx)(wa,{searchable:!0,value:t,onClear:()=>s(""),onChange:r=>s(r.target.value),label:o({id:`${c("plugin.name")}`,defaultMessage:"Content-Types Builder"}),searchLabel:o({id:"global.search",defaultMessage:"Search"})}),(0,n.jsx)(za,{children:e.map(r=>(0,n.jsxs)(m.Fragment,{children:[(0,n.jsx)(Za,{label:o({id:r.title.id,defaultMessage:r.title.defaultMessage}),collapsable:!0,badgeLabel:r.links.length.toString(),children:r.links.map(l=>l.links?(0,n.jsx)(Xa,{label:Ue(l.title),children:l.links.map(i=>(0,n.jsx)($n,{as:on.NavLink,to:i.to,active:i.active,isSubSectionChild:!0,children:Ue(o({id:i.name,defaultMessage:i.title}))},i.name))},l.name):(0,n.jsx)($n,{as:on.NavLink,to:l.to,active:l.active,children:Ue(o({id:l.name,defaultMessage:l.title}))},l.name))}),r.customLink&&(0,n.jsx)(y.a,{paddingLeft:7,children:(0,n.jsx)(B.Q,{onClick:r.customLink.onClick,startIcon:(0,n.jsx)(P.I,{as:Ze.A,width:(0,N.pxToRem)(8),height:(0,N.pxToRem)(8)}),marginTop:2,children:o({id:r.customLink.id,defaultMessage:r.customLink.defaultMessage})})})]},r.name))})]})},es=e=>e.kind==="collectionType"&&(e.restrictRelationsTo===null||Array.isArray(e.restrictRelationsTo)&&e.restrictRelationsTo.length>0),Bt=(e,t)=>e.find(({name:s})=>s===t),al=[{label:"All",children:[{label:"images (JPEG, PNG, GIF, SVG, TIFF, ICO, DVU)",value:"images"},{label:"videos (MPEG, MP4, Quicktime, WMV, AVI, FLV)",value:"videos"},{label:"audios (MP3, WAV, OGG)",value:"audios"},{label:"files (CSV, ZIP, PDF, Excel, JSON, ...)",value:"files"}]}],ol=({intlLabel:e,name:t,onChange:s,value:o=null})=>{const{formatMessage:r}=(0,K.A)(),l=o===null||o?.length===0?r({id:"global.none",defaultMessage:"None"}):[...o].sort().map(d=>Ue(d)).join(", "),i=e.id?r({id:e.id,defaultMessage:e.defaultMessage}):t;return(0,n.jsx)(k.B,{id:"select1",label:i,customizeContent:()=>l,onChange:d=>{d.length>0?s({target:{name:t,value:d,type:"allowed-types-select"}}):s({target:{name:t,value:null,type:"allowed-types-select"}})},options:al,value:o||[]})},ts={biginteger:dt.A,blocks:Oi.A,boolean:Pi.A,collectionType:Gn.A,component:ki.A,contentType:Gn.A,date:Ct.A,datetime:Ct.A,decimal:dt.A,dynamiczone:Bi.A,email:wi.A,enum:Vn.A,enumeration:Vn.A,file:Ot.A,files:Ot.A,float:dt.A,integer:dt.A,json:Hn.A,JSON:Hn.A,media:Ot.A,number:dt.A,password:zi.A,relation:Ui.A,richtext:Wi.A,singleType:Gi.A,string:Zn.A,text:Zn.A,time:Ct.A,timestamp:Ct.A,uid:Vi.A},rl=(0,D.default)(y.a)`
  svg {
    height: 100%;
    width: 100%;
  }
`,ct=({type:e,customField:t=null,...s})=>{const o=(0,N.useCustomFields)();let r=ts[e];if(t){const i=o.get(t)?.icon;i&&(r=i)}return ts[e]?(0,n.jsx)(rl,{height:(0,N.pxToRem)(24),width:(0,N.pxToRem)(32),shrink:0,...s,"aria-hidden":!0,children:(0,n.jsx)(y.a,{as:r})}):null},ns=(0,D.default)(y.a)`
  width: 100%;
  height: 100%;
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  text-align: left;
  &:hover {
    background: ${({theme:e})=>e.colors.primary100};
    border: 1px solid ${({theme:e})=>e.colors.primary200};
  }
`,il=[],ll=()=>(0,n.jsx)(v.s,{grow:1,justifyContent:"flex-end",children:(0,n.jsxs)(v.s,{gap:1,hasRadius:!0,background:"alternative100",padding:`${2/16}rem ${4/16}rem`,children:[(0,n.jsx)(P.I,{width:`${10/16}rem`,height:`${10/16}rem`,as:Hi.A,color:"alternative600"}),(0,n.jsx)(S.o,{textColor:"alternative600",variant:"sigma",children:"New"})]})}),dl=({type:e="text"})=>{const{formatMessage:t}=(0,K.A)(),{onClickSelectField:s}=_e(),o=()=>{s({attributeType:e,step:e==="component"?"1":null})};return(0,n.jsx)(ns,{padding:4,as:"button",hasRadius:!0,type:"button",onClick:o,children:(0,n.jsxs)(v.s,{children:[(0,n.jsx)(ct,{type:e}),(0,n.jsxs)(y.a,{paddingLeft:4,width:"100%",children:[(0,n.jsxs)(v.s,{justifyContent:"space-between",children:[(0,n.jsx)(S.o,{fontWeight:"bold",children:t({id:c(`attribute.${e}`),defaultMessage:e})}),il.includes(e)&&(0,n.jsx)(ll,{})]}),(0,n.jsx)(v.s,{children:(0,n.jsx)(S.o,{variant:"pi",textColor:"neutral600",children:t({id:c(`attribute.${e}.description`),defaultMessage:"A type for modeling data"})})})]})]})})},cl=({attributes:e})=>(0,n.jsx)(U.r,{tagName:"button",children:(0,n.jsx)(v.s,{direction:"column",alignItems:"stretch",gap:8,children:e.map((t,s)=>(0,n.jsx)(_.x,{gap:3,children:t.map(o=>(0,n.jsx)(ne.E,{col:6,children:(0,n.jsx)(dl,{type:o})},o))},s))})}),ul=({customFieldUid:e,customField:t})=>{const{type:s,intlLabel:o,intlDescription:r}=t,{formatMessage:l}=(0,K.A)(),{onClickSelectCustomField:i}=_e(),d=()=>{i({attributeType:s,customFieldUid:e})};return(0,n.jsx)(ns,{padding:4,as:"button",hasRadius:!0,type:"button",onClick:d,children:(0,n.jsxs)(v.s,{children:[(0,n.jsx)(ct,{type:s,customField:e}),(0,n.jsxs)(y.a,{paddingLeft:4,children:[(0,n.jsx)(v.s,{children:(0,n.jsx)(S.o,{fontWeight:"bold",children:l(o)})}),(0,n.jsx)(v.s,{children:(0,n.jsx)(S.o,{variant:"pi",textColor:"neutral600",children:l(r)})})]})]})})},ml=(0,D.default)(y.a)`
  background: ${({theme:e})=>`linear-gradient(180deg, rgba(234, 234, 239, 0) 0%, ${e.colors.neutral150} 100%)`};
  opacity: 0.33;
`,pl=()=>(0,n.jsx)(v.s,{wrap:"wrap",gap:4,children:[...Array(4)].map((e,t)=>(0,n.jsx)(ml,{height:"138px",width:"375px",hasRadius:!0},`empty-card-${t}`))}),fl=()=>{const{formatMessage:e}=(0,K.A)();return(0,n.jsxs)(y.a,{position:"relative",children:[(0,n.jsx)(pl,{}),(0,n.jsx)(y.a,{position:"absolute",top:6,width:"100%",children:(0,n.jsxs)(v.s,{alignItems:"center",justifyContent:"center",direction:"column",children:[(0,n.jsx)(P.I,{as:Zi.A,color:"",width:"160px",height:"88px"}),(0,n.jsx)(y.a,{paddingTop:6,paddingBottom:4,children:(0,n.jsxs)(y.a,{textAlign:"center",children:[(0,n.jsx)(S.o,{variant:"delta",as:"p",textColor:"neutral600",children:e({id:c("modalForm.empty.heading"),defaultMessage:"Nothing in here yet."})}),(0,n.jsx)(y.a,{paddingTop:4,children:(0,n.jsx)(S.o,{variant:"delta",as:"p",textColor:"neutral600",children:e({id:c("modalForm.empty.sub-heading"),defaultMessage:"Find what you are looking for through a wide range of extensions."})})})]})}),(0,n.jsx)(re.z,{to:`/marketplace?${Ji.stringify({categories:["Custom fields"]})}`,variant:"secondary",startIcon:(0,n.jsx)(Ze.A,{}),children:e({id:c("modalForm.empty.button"),defaultMessage:"Add custom fields"})})]})})]})},gl=()=>{const{formatMessage:e}=(0,K.A)(),t=(0,N.useCustomFields)(),s=Object.entries(t.getAll());if(!s.length)return(0,n.jsx)(fl,{});const o=s.sort((r,l)=>r[1].name>l[1].name?1:-1);return(0,n.jsx)(U.r,{tagName:"button",children:(0,n.jsxs)(v.s,{direction:"column",alignItems:"stretch",gap:3,children:[(0,n.jsx)(_.x,{gap:3,children:o.map(([r,l])=>(0,n.jsx)(ne.E,{col:6,children:(0,n.jsx)(ul,{customFieldUid:r,customField:l},r)},r))}),(0,n.jsx)(xt,{href:"https://docs.strapi.io/developer-docs/latest/development/custom-fields.html",isExternal:!0,children:e({id:c("modalForm.tabs.custom.howToLink"),defaultMessage:"How to add custom fields"})})]})})},hl=({attributes:e,forTarget:t,kind:s})=>{const{formatMessage:o}=(0,K.A)(),r=c("modalForm.tabs.default"),l=c("modalForm.tabs.custom"),i=t.includes("component")?"component":s,d=c(`modalForm.sub-header.chooseAttribute.${i}`);return(0,n.jsx)(ze.c,{padding:7,children:(0,n.jsxs)(pe.f,{label:o({id:c("modalForm.tabs.label"),defaultMessage:"Default and Custom types tabs"}),id:"attribute-type-tabs",variant:"simple",children:[(0,n.jsxs)(v.s,{justifyContent:"space-between",children:[(0,n.jsx)(S.o,{variant:"beta",as:"h2",children:o({id:d,defaultMessage:"Select a field"})}),(0,n.jsxs)(ce.t,{children:[(0,n.jsx)(ce.o,{children:o({id:r,defaultMessage:"Default"})}),(0,n.jsx)(ce.o,{children:o({id:l,defaultMessage:"Custom"})})]})]}),(0,n.jsx)(y.a,{paddingBottom:6,children:(0,n.jsx)(ae.c,{})}),(0,n.jsxs)(ie.T,{children:[(0,n.jsx)(ie.K,{children:(0,n.jsx)(cl,{attributes:e})}),(0,n.jsx)(ie.K,{children:(0,n.jsx)(gl,{})})]})]})})},yl=({intlLabel:e,name:t,options:s,onChange:o,value:r=null})=>{const{formatMessage:l}=(0,K.A)(),i=e.id?l({id:e.id,defaultMessage:e.defaultMessage},{...e.values}):t,d=u=>{let p="";u==="true"&&(p=!0),u==="false"&&(p=!1),o({target:{name:t,value:p,type:"select-default-boolean"}})};return(0,n.jsx)(oe.l,{label:i,id:t,name:t,onChange:d,value:(r===null?"":r).toString(),children:s.map(({metadatas:{intlLabel:u,disabled:p,hidden:g},key:f,value:j})=>(0,n.jsx)(Re.c,{value:j,disabled:p,hidden:g,children:u.defaultMessage},f))})},bl=(0,D.default)(v.s)`
  position: relative;
  align-items: stretch;

  label {
    border-radius: 4px;
    max-width: 50%;
    cursor: pointer;
    user-select: none;
    flex: 1;
    ${(0,Ie.id)()}
  }

  input {
    position: absolute;
    opacity: 0;
  }

  .option {
    height: 100%;
    border-radius: 4px;
    border: 1px solid ${({theme:e})=>e.colors.neutral200};
    will-change: transform, opacity;
    background: ${({theme:e})=>e.colors.neutral0};

    .checkmark {
      position: relative;
      display: block;
      will-change: transform;
      background: ${({theme:e})=>e.colors.neutral0};
      width: ${({theme:e})=>e.spaces[5]};
      height: ${({theme:e})=>e.spaces[5]};
      border: solid 1px ${({theme:e})=>e.colors.neutral300};
      border-radius: 50%;

      &:before,
      &:after {
        content: '';
        display: block;
        border-radius: 50%;
        width: ${({theme:e})=>e.spaces[3]};
        height: ${({theme:e})=>e.spaces[3]};
        position: absolute;
        top: 3px;
        left: 3px;
      }

      &:after {
        transform: scale(0);
        transition: inherit;
        will-change: transform;
      }
    }
  }

  .container input:checked ~ div {
    background: ${({theme:e})=>e.colors.primary100};
    ${S.o} {
      color: ${({theme:e})=>e.colors.primary600};
    }
    border: 1px solid ${({theme:e})=>e.colors.primary200};
    .checkmark {
      border: solid 1px ${({theme:e})=>e.colors.primary600};
      &::after {
        background: ${({theme:e})=>e.colors.primary600};
        transform: scale(1);
      }
    }
  }
`,wt=({intlLabel:e,name:t,onChange:s,radios:o=[],value:r})=>{const{formatMessage:l}=(0,K.A)();return(0,n.jsxs)(v.s,{direction:"column",alignItems:"stretch",gap:2,children:[(0,n.jsx)(S.o,{variant:"pi",fontWeight:"bold",textColor:"neutral800",htmlFor:t,as:"label",children:l(e)}),(0,n.jsx)(bl,{gap:4,alignItems:"stretch",children:o.map(i=>(0,n.jsxs)("label",{htmlFor:i.value.toString(),className:"container",children:[(0,n.jsx)("input",{id:i.value.toString(),name:t,className:"option-input",checked:i.value===r,value:i.value,onChange:s,type:"radio"},i.value),(0,n.jsx)(y.a,{className:"option",padding:4,children:(0,n.jsxs)(v.s,{children:[(0,n.jsx)(y.a,{paddingRight:4,children:(0,n.jsx)("span",{className:"checkmark"})}),(0,n.jsxs)(v.s,{direction:"column",alignItems:"stretch",gap:2,children:[(0,n.jsx)(S.o,{fontWeight:"bold",children:l(i.title)}),(0,n.jsx)(S.o,{variant:"pi",textColor:"neutral600",children:l(i.description)})]})]})})]},i.value))})]})},xl=({onChange:e,name:t,intlLabel:s,...o})=>{const r=l=>{const i=l.target.value!=="false";e({target:{name:t,value:i,type:"boolean-radio-group"}})};return(0,n.jsx)(wt,{...o,name:t,onChange:r,intlLabel:s})},vl=({error:e,intlLabel:t,modifiedData:s,name:o,onChange:r,value:l=null})=>{const{formatMessage:i}=(0,K.A)(),[d,u]=(0,m.useState)(!!l||l===0),p=t.id?i({id:t.id,defaultMessage:t.defaultMessage},{...t.values}):o,g=s.type==="biginteger"?"text":"number",f=!s.type,j=e?i({id:e,defaultMessage:e}):"";return(0,n.jsxs)(v.s,{direction:"column",alignItems:"stretch",gap:2,children:[(0,n.jsx)(be.S,{id:o,name:o,onValueChange:A=>{r({target:{name:o,value:A?g==="text"?"0":0:null}}),u(W=>!W)},value:d,children:p}),d&&(0,n.jsx)(y.a,{paddingLeft:6,style:{maxWidth:"200px"},children:g==="text"?(0,n.jsx)(je.k,{label:"","aria-label":p,disabled:f,error:j,id:o,name:o,onChange:r,value:l===null?"":l}):(0,n.jsx)(gt.Q,{"aria-label":p,disabled:f,error:j,id:o,name:o,onValueChange:A=>{r({target:{name:o,value:A,type:g}})},value:l||0})})]})},Cl=({onChange:e,...t})=>{const s=(0,N.useNotification)(),o=r=>{s({type:"info",message:{id:c("contentType.kind.change.warning"),defaultMessage:"You just changed the kind of a content type: API will be reset (routes, controllers, and services will be overwritten)."}}),e(r)};return(0,n.jsx)(wt,{...t,onChange:o})},Al=({description:e,disabled:t=!1,intlLabel:s,isCreating:o,name:r,onChange:l,value:i=!1})=>{const{formatMessage:d}=(0,K.A)(),[u,p]=(0,m.useState)(!1),g=s.id?d({id:s.id,defaultMessage:s.defaultMessage},{...s.values}):r,f=e?d({id:e.id,defaultMessage:e.defaultMessage},{...e.values}):"",j=()=>p($=>!$),A=()=>{l({target:{name:r,value:!1}}),j()},x=({target:{checked:$}})=>{if(!$&&!o){j();return}l({target:{name:r,value:$}})};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(be.S,{checked:i,disabled:t,hint:f,name:r,onChange:x,children:g}),(0,n.jsx)(N.ConfirmDialog,{isOpen:u,onToggleDialog:j,onConfirm:A,bodyText:{id:c("popUpWarning.draft-publish.message"),defaultMessage:"If you disable the draft & publish, your drafts will be deleted."},leftButtonText:{id:"components.popUpWarning.button.cancel",defaultMessage:"No, cancel"},rightButtonText:{id:c("popUpWarning.draft-publish.button.confirm"),defaultMessage:"Yes, disable"}})]})},Tl=({categoryName:e,deleteCategory:t,deleteComponent:s,deleteContentType:o,isAttributeModal:r,isCustomFieldModal:l,isComponentAttribute:i,isComponentToDzModal:d,isContentTypeModal:u,isCreatingComponent:p,isCreatingComponentAttribute:g,isCreatingComponentInDz:f,isCreatingComponentWhileAddingAField:j,isCreatingContentType:A,isCreatingDz:x,isComponentModal:$,isDzAttribute:W,isEditingAttribute:M,isEditingCategory:F,isInFirstComponentStep:L,onSubmitAddComponentAttribute:w,onSubmitAddComponentToDz:ee,onSubmitCreateContentType:he,onSubmitCreateComponent:Me,onSubmitCreateDz:G,onSubmitEditAttribute:Te,onSubmitEditCategory:te,onSubmitEditComponent:Se,onSubmitEditContentType:xe,onSubmitEditCustomFieldAttribute:de,onSubmitEditDz:Ge,onClickFinish:ye})=>{const{formatMessage:J}=(0,K.A)();return d?f?(0,n.jsx)(se.$,{variant:"secondary",type:"submit",onClick:E=>{E.preventDefault(),ee(E,!0)},startIcon:(0,n.jsx)(Ze.A,{}),children:J({id:c("form.button.add-first-field-to-created-component"),defaultMessage:"Add first field to the component"})}):(0,n.jsx)(se.$,{variant:"default",type:"submit",onClick:E=>{E.preventDefault(),ee(E,!1)},children:J({id:"global.finish",defaultMessage:"Finish"})}):r&&W&&!x?(0,n.jsx)(se.$,{variant:"default",type:"submit",onClick:E=>{E.preventDefault(),ye(),Ge(E,!1)},children:J({id:"global.finish",defaultMessage:"Finish"})}):r&&W&&x?(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(se.$,{variant:"secondary",type:"submit",onClick:E=>{E.preventDefault(),G(E,!0)},startIcon:(0,n.jsx)(Ze.A,{}),children:J({id:c("form.button.add-components-to-dynamiczone"),defaultMessage:"Add components to the zone"})})}):r&&i?L?(0,n.jsx)(se.$,{variant:"secondary",type:"submit",onClick:E=>{E.preventDefault(),w(E,!0)},children:J(g?{id:c("form.button.configure-component"),defaultMessage:"Configure the component"}:{id:c("form.button.select-component"),defaultMessage:"Configure the component"})}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(se.$,{variant:"secondary",type:"submit",onClick:E=>{E.preventDefault(),w(E,!0)},startIcon:(0,n.jsx)(Ze.A,{}),children:J(j?{id:c("form.button.add-first-field-to-created-component"),defaultMessage:"Add first field to the component"}:{id:c("form.button.add-field"),defaultMessage:"Add another field"})}),(0,n.jsx)(se.$,{variant:"default",type:"button",onClick:E=>{E.preventDefault(),ye(),w(E,!1)},children:J({id:"global.finish",defaultMessage:"Finish"})})]}):r&&!i&&!W?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(se.$,{type:M?"button":"submit",variant:"secondary",onClick:E=>{E.preventDefault(),Te(E,!0)},startIcon:(0,n.jsx)(Ze.A,{}),children:J({id:c("form.button.add-field"),defaultMessage:"Add another field"})}),(0,n.jsx)(se.$,{type:M?"submit":"button",variant:"default",onClick:E=>{E.preventDefault(),ye(),Te(E,!1)},children:J({id:"global.finish",defaultMessage:"Finish"})})]}):u?(0,n.jsxs)(n.Fragment,{children:[!A&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(se.$,{type:"button",variant:"danger",onClick:E=>{E.preventDefault(),o()},children:J({id:"global.delete",defaultMessage:"Delete"})}),(0,n.jsx)(se.$,{type:"submit",variant:"default",onClick:E=>{E.preventDefault(),xe(E,!1)},children:J({id:"global.finish",defaultMessage:"Finish"})})]}),A&&(0,n.jsx)(se.$,{type:"submit",variant:"secondary",onClick:E=>{E.preventDefault(),he(E,!0)},children:J({id:"global.continue",defaultMessage:"Continue"})})]}):$?(0,n.jsxs)(n.Fragment,{children:[!p&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(se.$,{type:"button",variant:"danger",onClick:E=>{E.preventDefault(),s()},children:J({id:"global.delete",defaultMessage:"Delete"})}),(0,n.jsx)(se.$,{type:"submit",variant:"default",onClick:E=>{E.preventDefault(),Se(E,!1)},children:J({id:"global.finish",defaultMessage:"Finish"})})]}),p&&(0,n.jsx)(se.$,{type:"submit",variant:"secondary",onClick:E=>{E.preventDefault(),Me(E,!0)},children:J({id:"global.continue",defaultMessage:"Continue"})})]}):F?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(se.$,{type:"button",variant:"danger",onClick:E=>{E.preventDefault(),e&&t(e)},children:J({id:"global.delete",defaultMessage:"Delete"})}),(0,n.jsx)(se.$,{type:"submit",variant:"default",onClick:E=>{E.preventDefault(),te(E)},children:J({id:"global.finish",defaultMessage:"finish"})})]}):l?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(se.$,{type:M?"button":"submit",variant:"secondary",onClick:E=>{E.preventDefault(),de(E,!0)},startIcon:(0,n.jsx)(Ze.A,{}),children:J({id:c("form.button.add-field"),defaultMessage:"Add another field"})}),(0,n.jsx)(se.$,{type:M?"submit":"button",variant:"default",onClick:E=>{E.preventDefault(),ye(),de(E,!1)},children:J({id:"global.finish",defaultMessage:"Finish"})})]}):null},jl=({actionType:e=null,attributeName:t,attributeType:s,categoryName:o,contentTypeKind:r,dynamicZoneTarget:l,forTarget:i,modalType:d=null,targetUid:u,customFieldUid:p=null,showBackLink:g=!1})=>{const{formatMessage:f}=(0,K.A)(),{modifiedData:j}=We(),{onOpenModalAddField:A}=_e();let x="component",$=[];const W=j?.[i]?.[u]||j?.[i]||null,M=W?.schema.displayName;if(d==="contentType"&&(x=r),["component","editCategory"].includes(d||"")&&(x="component"),["component","contentType"].includes(d||"")){let L=c(`modalForm.component.header-${e}`);return d==="contentType"&&(L=c(`modalForm.${r}.header-create`)),e==="edit"&&(L=c("modalForm.header-edit")),(0,n.jsx)(ot.r,{children:(0,n.jsxs)(v.s,{children:[(0,n.jsx)(y.a,{children:(0,n.jsx)(ct,{type:x})}),(0,n.jsx)(y.a,{paddingLeft:3,children:(0,n.jsx)(S.o,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"title",children:f({id:L},{name:M})})})]})})}return $=[{label:M,info:{category:W?.category||null,name:W?.schema.displayName}}],d==="chooseAttribute"&&(x=["component","components"].includes(i)?"component":W.schema.kind),d==="addComponentToDynamicZone"&&(x="dynamiczone",$.push({label:l})),(d==="attribute"||d==="customField")&&(x=s,$.push({label:t})),d==="editCategory"&&($=[{label:f({id:c("modalForm.header.categories"),defaultMessage:"Categories"})},{label:o}]),(0,n.jsx)(ot.r,{children:(0,n.jsxs)(v.s,{gap:3,children:[g&&(0,n.jsx)(xt,{"aria-label":f({id:c("modalForm.header.back"),defaultMessage:"Back"}),startIcon:(0,n.jsx)(Pn.A,{}),onClick:()=>A({forTarget:i,targetUid:u}),href:"#back",isExternal:!1}),(0,n.jsx)(ct,{type:x,customField:p}),(0,n.jsx)(Sn,{label:$.map(({label:L})=>L).join(","),children:$.map(({label:L,info:w},ee,he)=>{if(L=Ue(L),!L)return null;const Me=`${L}.${ee}`;return w?.category&&(L=`${L} (${Ue(w.category)} - ${Ue(w.name)})`),(0,n.jsx)(Nn,{isCurrent:ee===he.length-1,children:L},Me)})})]})})},$l=({modalType:e,forTarget:t,kind:s,actionType:o,step:r})=>{switch(e){case"chooseAttribute":return c(`modalForm.sub-header.chooseAttribute.${t?.includes("component")?"component":s||"collectionType"}`);case"attribute":return c(`modalForm.sub-header.attribute.${o}${r!=="null"&&r!==null&&o!=="edit"?".step":""}`);case"customField":return c(`modalForm.sub-header.attribute.${o}`);case"addComponentToDynamicZone":return c("modalForm.sub-header.addComponentToDynamicZone");default:return c("configurations")}},Ml=({actionType:e,modalType:t,forTarget:s,kind:o,step:r,attributeType:l,attributeName:i,customField:d})=>{const{formatMessage:u}=(0,K.A)(),p=t==="customField"?d?.intlLabel:{id:c(`attribute.${l}`)};return(0,n.jsxs)(v.s,{direction:"column",alignItems:"flex-start",paddingBottom:2,gap:1,children:[(0,n.jsx)(S.o,{as:"h2",variant:"beta",children:u({id:$l({actionType:e,forTarget:s,kind:o,step:r,modalType:t}),defaultMessage:"Add new field"},{type:p?Ue(u(p)):"",name:Ue(i),step:r})}),(0,n.jsx)(S.o,{variant:"pi",textColor:"neutral600",children:u({id:c(`attribute.${l}.description`),defaultMessage:"A type for modeling data"})})]})},zt={alien:Mo.A,apps:So.A,archive:No.A,arrowDown:Fo.A,arrowLeft:Pn.A,arrowRight:Lo.A,arrowUp:Eo.A,attachment:Ro.A,bell:Io.A,bold:Do.A,book:Oo.A,briefcase:Po.A,brush:ko.A,bulletList:Bo.A,calendar:wo.A,car:zo.A,cast:Uo.A,chartBubble:Wo.A,chartCircle:Go.A,chartPie:Vo.A,check:Ho.A,clock:Zo.A,cloud:Yo.A,code:Ko.A,cog:Qo.A,collapse:Xo.A,command:Jo.A,connector:qo.A,crop:_o.A,crown:er.A,cube:tr.A,cup:nr.A,cursor:sr.A,dashboard:ar.A,database:or.A,discuss:rr.A,doctor:ir.A,earth:lr.A,emotionHappy:dr.A,emotionUnhappy:cr.A,envelop:ur.A,exit:mr.A,expand:pr.A,eye:fr.A,feather:gr.A,file:hr.A,fileError:yr.A,filePdf:br.A,filter:xr.A,folder:vr.A,gate:Cr.A,gift:Ar.A,globe:Tr.A,grid:jr.A,handHeart:$r.A,hashtag:Mr.A,headphone:Sr.A,heart:Nr.A,house:Fr.A,information:Lr.A,italic:Er.A,key:Rr.A,landscape:Ir.A,layer:Dr.A,layout:Or.A,lightbulb:Pr.A,link:kr.A,lock:Br.A,magic:wr.A,manyToMany:kn.A,manyToOne:Bn.A,manyWays:wn.A,medium:zr.A,message:Ur.A,microphone:Wr.A,monitor:Gr.A,moon:Vr.A,music:Hr.A,oneToMany:zn.A,oneToOne:Un.A,oneWay:Wn.A,paint:Zr.A,paintBrush:Yr.A,paperPlane:Kr.A,pencil:Qr.A,phone:Xr.A,picture:Jr.A,pin:qr.A,pinMap:_r.A,plane:ei.A,play:ti.A,plus:Ze.A,priceTag:ni.A,puzzle:si.A,question:ai.A,quote:oi.A,repeat:ri.A,restaurant:ii.A,rocket:li.A,rotate:di.A,scissors:ci.A,search:yt.A,seed:ui.A,server:mi.A,shield:pi.A,shirt:fi.A,shoppingCart:gi.A,slideshow:hi.A,stack:yi.A,star:bi.A,store:xi.A,strikeThrough:vi.A,sun:Ci.A,television:Ai.A,thumbDown:Ti.A,thumbUp:ji.A,train:$i.A,twitter:Mi.A,typhoon:Si.A,underline:Ni.A,user:Fi.A,volumeMute:Li.A,volumeUp:Ei.A,walk:Ri.A,wheelchair:Ii.A,write:Di.A},Sl=(0,D.default)(v.s)`
  label {
    ${(0,Ie.id)()}
    border-radius: ${({theme:e})=>e.borderRadius};
    border: 1px solid ${({theme:e})=>e.colors.neutral100};
  }
`,Nl=({iconKey:e,name:t,onChange:s,isSelected:o,ariaLabel:r})=>(0,n.jsx)(ht.D,{name:t,required:!1,children:(0,n.jsxs)(Es.d,{htmlFor:e,id:`${e}-label`,children:[(0,n.jsxs)(Rs.s,{children:[(0,n.jsx)(Is.T,{type:"radio",id:e,name:t,checked:o,onChange:s,value:e,"aria-checked":o,"aria-labelledby":`${e}-label`}),r]}),(0,n.jsx)(v.s,{padding:2,cursor:"pointer",hasRadius:!0,background:o?"primary200":void 0,children:(0,n.jsx)(P.I,{as:zt[e],color:o?"primary600":"neutral300"})})]})}),Fl=({intlLabel:e,name:t,onChange:s,value:o=""})=>{const{formatMessage:r}=(0,K.A)(),[l,i]=(0,m.useState)(!1),[d,u]=(0,m.useState)(""),p=Object.keys(zt),[g,f]=(0,m.useState)(p),j=(0,m.useRef)(null),A=(0,m.useRef)(null),x=()=>{i(!l)},$=({target:{value:F}})=>{u(F),f(()=>p.filter(L=>L.toLowerCase().includes(F.toLowerCase())))},W=()=>{x(),u(""),f(p)},M=()=>{s({target:{name:t,value:""}})};return(0,m.useEffect)(()=>{l&&A.current?.focus()},[l]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(v.s,{justifyContent:"space-between",paddingBottom:2,children:[(0,n.jsx)(S.o,{variant:"pi",fontWeight:"bold",textColor:"neutral800",as:"label",children:r(e)}),(0,n.jsxs)(v.s,{gap:1,children:[l?(0,n.jsx)(Ds.S,{ref:A,name:"searchbar",size:"S",placeholder:r({id:c("ComponentIconPicker.search.placeholder"),defaultMessage:"Search for an icon"}),onBlur:()=>{d||x()},onChange:$,value:d,onClear:W,clearLabel:r({id:c("IconPicker.search.clear.label"),defaultMessage:"Clear the icon search"}),children:r({id:c("IconPicker.search.placeholder.label"),defaultMessage:"Search for an icon"})}):(0,n.jsx)(an.K,{ref:j,onClick:x,"aria-label":r({id:c("IconPicker.search.button.label"),defaultMessage:"Search icon button"}),icon:(0,n.jsx)(yt.A,{}),noBorder:!0}),o&&(0,n.jsx)(Os.m,{description:r({id:c("IconPicker.remove.tooltip"),defaultMessage:"Remove the selected icon"}),children:(0,n.jsx)(an.K,{onClick:M,"aria-label":r({id:c("IconPicker.remove.button"),defaultMessage:"Remove the selected icon button"}),icon:(0,n.jsx)(Yi.A,{}),noBorder:!0})})]})]}),(0,n.jsx)(Sl,{position:"relative",padding:1,background:"neutral100",hasRadius:!0,wrap:"wrap",gap:2,maxHeight:"126px",overflow:"auto",textAlign:"center",children:g.length>0?g.map(F=>(0,n.jsx)(Nl,{iconKey:F,name:t,onChange:s,isSelected:F===o,ariaLabel:r({id:c("IconPicker.icon.label"),defaultMessage:"Select {icon} icon"},{icon:F})},F)):(0,n.jsx)(y.a,{padding:4,grow:2,children:(0,n.jsx)(S.o,{variant:"delta",textColor:"neutral600",textAlign:"center",children:r({id:c("IconPicker.emptyState.label"),defaultMessage:"No icon found"})})})})]})},Ll=({description:e,error:t,intlLabel:s,modifiedData:o,name:r,onChange:l,value:i})=>{const{formatMessage:d}=(0,K.A)(),u=(0,m.useRef)(l),p=o?.displayName||"";(0,m.useEffect)(()=>{if(p){const A=(0,C.n)(p);try{const x=At(A,2);u.current({target:{name:r,value:x}})}catch{u.current({target:{name:r,value:A}})}}else u.current({target:{name:r,value:""}})},[p,r]);const g=t?d({id:t,defaultMessage:t}):"",f=e?d({id:e.id,defaultMessage:e.defaultMessage},{...e.values}):"",j=d(s);return(0,n.jsx)(je.k,{error:g,label:j,id:r,hint:f,name:r,onChange:l,value:i||""})},El=({oneThatIsCreatingARelationWithAnother:e,target:t})=>{const{contentTypes:s,sortedContentTypesList:o}=We(),r=(0,qe.wA)(),l=o.filter(es),{plugin:i=null,schema:{displayName:d}={displayName:"error"}}=s?.[t]??{},u=({uid:p,plugin:g,title:f,restrictRelationsTo:j})=>()=>{const A=g?`${g}_${f}`:f;r({type:C.O,target:{value:p,oneThatIsCreatingARelationWithAnother:e,selectedContentTypeFriendlyName:A,targetContentTypeAllowedRelations:j}})};return(0,n.jsxs)(Ao,{children:[(0,n.jsx)(Rl,{children:`${d} ${i?`(from: ${i})`:""}`}),(0,n.jsx)(jo,{zIndex:5,children:l.map(({uid:p,title:g,restrictRelationsTo:f,plugin:j})=>(0,n.jsxs)($o,{onSelect:u({uid:p,plugin:j,title:g,restrictRelationsTo:f}),children:[g,"\xA0",j&&(0,n.jsxs)(n.Fragment,{children:["(from: ",j,")"]})]},p))})]})},Rl=(0,D.default)(To)`
  svg {
    width: ${6/16}rem;
    height: ${4/16}rem;
  }
`,ss=({disabled:e=!1,error:t,header:s,isMain:o=!1,name:r,onChange:l,oneThatIsCreatingARelationWithAnother:i="",target:d="",value:u=""})=>(0,n.jsxs)(y.a,{background:"neutral100",hasRadius:!0,borderColor:"neutral200",children:[(0,n.jsx)(v.s,{paddingTop:o?4:1,paddingBottom:o?3:1,justifyContent:"center",children:o?(0,n.jsx)(S.o,{variant:"pi",fontWeight:"bold",textColor:"neutral800",children:s}):(0,n.jsx)(El,{target:d,oneThatIsCreatingARelationWithAnother:i})}),(0,n.jsx)(ae.c,{background:"neutral200"}),(0,n.jsx)(y.a,{padding:4,children:(0,n.jsx)(N.GenericInput,{disabled:e,error:t?.id||null,intlLabel:{id:c("form.attribute.item.defineRelation.fieldName"),defaultMessage:"Field name"},name:r,onChange:l,type:"text",value:u})})]}),Il=(0,D.default)(y.a)`
  position: relative;
  width: 100%;
  &::before {
    content: '';
    position: absolute;
    top: calc(50% - 0px);
    height: 2px;
    width: 100%;
    background-color: ${({theme:e})=>e.colors.primary600};
    z-index: 0;
  }
`,Dl=(0,D.default)(y.a)`
  background: ${({theme:e,isSelected:t})=>e.colors[t?"primary100":"neutral0"]};
  border: 1px solid
    ${({theme:e,isSelected:t})=>e.colors[t?"primary700":"neutral200"]};
  border-radius: ${({theme:e})=>e.borderRadius};
  z-index: 1;
  svg {
    width: 1.5rem;
    height: 100%;
    path {
      fill: ${({theme:e,isSelected:t})=>e.colors[t?"primary700":"neutral500"]};
    }
  }
  &:disabled {
    cursor: not-allowed;
  }
`,Ol=(0,D.default)(v.s)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`,Pl={oneWay:Wn.A,oneToOne:Un.A,oneToMany:zn.A,manyToOne:Bn.A,manyToMany:kn.A,manyWay:wn.A},kl=({naturePickerType:e,oneThatIsCreatingARelationWithAnother:t,relationType:s,target:o})=>{const r=(0,qe.wA)(),{formatMessage:l}=(0,K.A)(),{contentTypes:i,modifiedData:d}=We(),u=["oneWay","oneToOne","oneToMany","manyToOne","manyToMany","manyWay"],p=["oneWay","manyWay"],f=(e==="contentType"?O(d,[e,"schema","kind"],""):e)==="collectionType"?u:p,j=s==="manyToOne",A=O(i,[o,"schema","displayName"],"unknown"),x=j?A:t,$=j?t:A,W=At(x,s==="manyToMany"?2:1),M=O(i,[o,"schema","restrictRelationsTo"],null),F=At($,["manyToMany","oneToMany","manyToOne","manyWay"].includes(s)?2:1);return s?(0,n.jsxs)(v.s,{style:{flex:1},children:[(0,n.jsx)(Il,{children:(0,n.jsx)(v.s,{paddingLeft:9,paddingRight:9,paddingTop:1,justifyContent:"center",children:(0,n.jsx)(U.r,{tagName:"button",children:(0,n.jsx)(v.s,{gap:3,children:f.map(L=>{const w=Pl[L],ee=M===null||M.includes(L);return(0,n.jsx)(Dl,{as:"button",isSelected:s===L,disabled:!ee,onClick:()=>{ee&&r({type:C.a,target:{oneThatIsCreatingARelationWithAnother:t,targetContentType:o,value:L}})},padding:2,type:"button",children:(0,n.jsx)(w,{},L)},L)})})})})}),(0,n.jsxs)(Ol,{justifyContent:"center",children:[(0,n.jsxs)(S.o,{children:[Qn(W,{length:24}),"\xA0"]}),(0,n.jsxs)(S.o,{textColor:"primary600",children:[l({id:c(`relation.${s}`)}),"\xA0"]}),(0,n.jsx)(S.o,{children:Qn(F,{length:24})})]})]}):null},Bl=({formErrors:e,mainBoxHeader:t,modifiedData:s,naturePickerType:o,onChange:r})=>{const l=(0,C.g)(s.relation,s.targetAttribute);return(0,n.jsxs)(v.s,{style:{position:"relative"},children:[(0,n.jsx)(ss,{isMain:!0,header:t,error:e?.name||null,name:"name",onChange:r,value:s?.name||""}),(0,n.jsx)(kl,{naturePickerType:o,oneThatIsCreatingARelationWithAnother:t,relationType:l,target:s.target}),(0,n.jsx)(ss,{disabled:["oneWay","manyWay"].includes(l),error:e?.targetAttribute||null,name:"targetAttribute",onChange:r,oneThatIsCreatingARelationWithAnother:t,target:s.target,value:s?.targetAttribute||""})]})},wl=({error:e=null,intlLabel:t,name:s,onChange:o,value:r=void 0})=>{const{formatMessage:l}=(0,K.A)(),{allComponentsCategories:i}=We(),[d,u]=(0,m.useState)(i),p=e?l({id:e,defaultMessage:e}):"",g=l(t),f=A=>{o({target:{name:s,value:A,type:"select-category"}})},j=A=>{u(x=>[...x,A]),f(A)};return(0,n.jsx)(Ps.nP,{error:p,id:s,label:g,name:s,onChange:f,onCreateOption:j,value:r,children:d.map(A=>(0,n.jsx)(ks.j,{value:A,children:A},A))})},zl=({error:e=null,intlLabel:t,isAddingAComponentToAnotherComponent:s,isCreating:o,isCreatingComponentWhileAddingAField:r,componentToCreate:l,name:i,onChange:d,targetUid:u,forTarget:p,value:g})=>{const{formatMessage:f}=(0,K.A)(),j=e?f({id:e,defaultMessage:e}):"",A=f(t),{componentsGroupedByCategory:x,componentsThatHaveOtherComponentInTheirAttributes:$}=We(),W=["component","components"].includes(p);let M=Object.entries(x).reduce((F,L)=>{const[w,ee]=L,he=ee.map(Me=>({uid:Me.uid,label:Me.schema.displayName,categoryName:w}));return[...F,...he]},[]);return s&&(M=M.filter(F=>!$.includes(F.uid))),W&&(M=M.filter(F=>F.uid!==u)),r&&(M=[{uid:g,label:l?.displayName,categoryName:l?.category}]),(0,n.jsx)(oe.l,{disabled:r||!o,error:j,label:A,id:i,name:i,onChange:F=>{d({target:{name:i,value:F,type:"select-category"}})},value:g||"",children:M.map(F=>(0,n.jsx)(Re.c,{value:F.uid,children:`${F.categoryName} - ${F.label}`},F.uid))})},Ul=({dynamicZoneTarget:e,intlLabel:t,name:s,onChange:o,value:r})=>{const{formatMessage:l}=(0,K.A)(),{componentsGroupedByCategory:i,modifiedData:d}=We(),p=Bt(d.contentType.schema.attributes,e)?.components||[],g=Object.keys(i).reduce((A,x)=>{const $=i[x].filter(({uid:W})=>!p.includes(W));return $.length>0&&(A[x]=$),A},{}),f=Object.entries(g).reduce((A,x)=>{const[$,W]=x,M={label:$,children:W.map(({uid:F,schema:{displayName:L}})=>({label:L,value:F}))};return A.push(M),A},[]),j=l({id:c("components.SelectComponents.displayed-value"),defaultMessage:"{number, plural, =0 {# components} one {# component} other {# components}} selected"},{number:r?.length??0});return(0,n.jsx)(k.B,{id:"select1",label:l(t),customizeContent:()=>j,name:s,onChange:A=>{o({target:{name:s,value:A,type:"select-components"}})},options:f,value:r||[]})},Wl=({intlLabel:e,error:t=void 0,modifiedData:s,name:o,onChange:r,options:l,value:i=""})=>{const{formatMessage:d}=(0,K.A)(),u=d(e),p=t?d({id:t,defaultMessage:t}):"",g=f=>{r({target:{name:o,value:f,type:"select"}}),i&&s.default!==void 0&&s.default!==null&&r({target:{name:"default",value:null}})};return(0,n.jsx)(oe.l,{error:p,label:u,id:o,name:o,onChange:g,value:i||"",children:l.map(({metadatas:{intlLabel:f,disabled:j,hidden:A},key:x,value:$})=>(0,n.jsx)(Re.c,{value:$,disabled:j,hidden:A,children:d({id:f.id,defaultMessage:f.defaultMessage},f.values)},x))})},as=({intlLabel:e,error:t=void 0,modifiedData:s,name:o,onChange:r,options:l,value:i=""})=>{const{formatMessage:d}=(0,K.A)(),u=d(e),p=t?d({id:t,defaultMessage:t}):"",g=f=>{r({target:{name:o,value:f,type:"select"}}),i&&(f==="biginteger"&&i!=="biginteger"&&(s.default!==void 0&&s.default!==null&&r({target:{name:"default",value:null}}),s.max!==void 0&&s.max!==null&&r({target:{name:"max",value:null}}),s.min!==void 0&&s.min!==null&&r({target:{name:"min",value:null}})),typeof f=="string"&&["decimal","float","integer"].includes(f)&&i==="biginteger"&&(s.default!==void 0&&s.default!==null&&r({target:{name:"default",value:null}}),s.max!==void 0&&s.max!==null&&r({target:{name:"max",value:null}}),s.min!==void 0&&s.min!==null&&r({target:{name:"min",value:null}})))};return(0,n.jsx)(oe.l,{error:p,label:u,id:o,name:o,onChange:g,value:i||"",children:l.map(({metadatas:{intlLabel:f,disabled:j,hidden:A},key:x,value:$})=>(0,n.jsx)(Re.c,{value:$,disabled:j,hidden:A,children:d(f)},x))})};as.defaultProps={error:void 0,value:""};const Gl=({description:e=null,error:t=null,intlLabel:s,modifiedData:o,name:r,onChange:l,value:i=null})=>{const{formatMessage:d}=(0,K.A)(),u=(0,m.useRef)(l),p=o?.displayName||"";(0,m.useEffect)(()=>{p?u.current({target:{name:r,value:(0,C.n)(p)}}):u.current({target:{name:r,value:""}})},[p,r]);const g=t?d({id:t,defaultMessage:t}):"",f=e?d({id:e.id,defaultMessage:e.defaultMessage},{...e.values}):"",j=d(s);return(0,n.jsx)(je.k,{error:g,label:j,id:r,hint:f,name:r,onChange:l,value:i||""})},os=({form:e,formErrors:t,genericInputProps:s,modifiedData:o,onChange:r})=>{const{formatMessage:l}=(0,K.A)();return(0,n.jsx)(n.Fragment,{children:e.map((i,d)=>i.items.length===0?null:(0,n.jsxs)(y.a,{children:[i.sectionTitle&&(0,n.jsx)(y.a,{paddingBottom:4,children:(0,n.jsx)(S.o,{variant:"delta",as:"h3",children:l(i.sectionTitle)})}),(0,n.jsx)(_.x,{gap:4,children:i.items.map((u,p)=>{const g=`${d}.${p}`,f=O(o,u.name,void 0),j=Object.keys(t).find(x=>x===u.name),A=j?t[j].id:O(t,[...u.name.split(".").filter(x=>x!=="componentToCreate"),"id"],null);return u.type==="pushRight"?(0,n.jsx)(ne.E,{col:u.size||6,children:(0,n.jsx)("div",{})},u.name||g):(0,n.jsx)(ne.E,{col:u.size||6,children:(0,n.jsx)(N.GenericInput,{...u,...s,error:A,onChange:r,value:f})},u.name||g)})})]},d))})},Vl=({description:e=null,disabled:t=!1,error:s="",intlLabel:o,labelAction:r,name:l,onChange:i,placeholder:d=null,value:u=""})=>{const{formatMessage:p}=(0,K.A)(),g=s?p({id:s,defaultMessage:s}):"",f=e?p({id:e.id,defaultMessage:e.defaultMessage},{...e.values}):"",j=p(o),A=d?p({id:d.id,defaultMessage:d.defaultMessage},{...d.values}):"",x=Array.isArray(u)?u.join(`
`):"",$=W=>{const M=W.target.value.split(`
`);i({target:{name:l,value:M}})};return(0,n.jsx)(Bs.T,{disabled:t,error:g,label:j,labelAction:r,id:l,hint:f,name:l,onChange:$,placeholder:A,value:x,children:x})},we={name:"name",type:"text",intlLabel:{id:"global.name",defaultMessage:"Name"},description:{id:c("modalForm.attribute.form.base.name.description"),defaultMessage:"No space is allowed for the name of the attribute"}},Hl={sections:[{sectionTitle:null,items:[we]}]},tt={base(e=""){return[{sectionTitle:null,items:[{name:`${e}displayName`,type:"text",intlLabel:{id:c("contentType.displayName.label"),defaultMessage:"Display Name"}},{name:`${e}category`,type:"select-category",intlLabel:{id:c("modalForm.components.create-component.category.label"),defaultMessage:"Select a category or enter a name to create a new one"}}]},{sectionTitle:null,items:[{name:`${e}icon`,type:"icon-picker",size:12,intlLabel:{id:c("modalForm.components.icon.label"),defaultMessage:"Icon"}}]}]},advanced(){return[]}},R={default:{name:"default",type:"text",intlLabel:{id:c("form.attribute.settings.default"),defaultMessage:"Default value"}},max:{name:"max",type:"checkbox-with-number-field",intlLabel:{id:c("form.attribute.item.maximum"),defaultMessage:"Maximum value"}},maxLength:{name:"maxLength",type:"checkbox-with-number-field",intlLabel:{id:c("form.attribute.item.maximumLength"),defaultMessage:"Maximum length"}},min:{name:"min",type:"checkbox-with-number-field",intlLabel:{id:c("form.attribute.item.minimum"),defaultMessage:"Minimum value"}},minLength:{name:"minLength",type:"checkbox-with-number-field",intlLabel:{id:c("form.attribute.item.minimumLength"),defaultMessage:"Minimum length"}},private:{name:"private",type:"checkbox",intlLabel:{id:c("form.attribute.item.privateField"),defaultMessage:"Private field"},description:{id:c("form.attribute.item.privateField.description"),defaultMessage:"This field will not show up in the API response"}},regex:{intlLabel:{id:c("form.attribute.item.text.regex"),defaultMessage:"RegExp pattern"},name:"regex",type:"text",description:{id:c("form.attribute.item.text.regex.description"),defaultMessage:"The text of the regular expression"}},required:{name:"required",type:"checkbox",intlLabel:{id:c("form.attribute.item.requiredField"),defaultMessage:"Required field"},description:{id:c("form.attribute.item.requiredField.description"),defaultMessage:"You won't be able to create an entry if this field is empty"}},unique:{name:"unique",type:"checkbox",intlLabel:{id:c("form.attribute.item.uniqueField"),defaultMessage:"Unique field"},description:{id:c("form.attribute.item.uniqueField.description"),defaultMessage:"You won't be able to create an entry if there is an existing entry with identical content"}}},Zl={blocks(){return{sections:[{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[R.required,R.private]}]}},boolean(){return{sections:[{sectionTitle:null,items:[{autoFocus:!0,type:"select-default-boolean",intlLabel:{id:c("form.attribute.settings.default"),defaultMessage:"Default value"},name:"default",options:[{value:"true",key:"true",metadatas:{intlLabel:{id:"true",defaultMessage:"true"}}},{value:"",key:"null",metadatas:{intlLabel:{id:"null",defaultMessage:"null"}}},{value:"false",key:"false",metadatas:{intlLabel:{id:"false",defaultMessage:"false"}}}]}]},{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[R.required,R.private]}]}},component({repeatable:e},t){return t==="1"?{sections:tt.advanced()}:e?{sections:[{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[R.required,R.private,R.max,R.min]}]}:{sections:[{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[R.required,R.private]}]}},date({type:e}){return{sections:[{sectionTitle:null,items:[{...R.default,type:e||"date",value:null,withDefaultValue:!1,disabled:!e,autoFocus:!1}]},{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[R.required,R.unique,R.private]}]}},dynamiczone(){return{sections:[{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[R.required,R.max,R.min]}]}},email(){return{sections:[{sectionTitle:null,items:[{...R.default,type:"email"}]},{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[R.required,R.unique,R.maxLength,R.minLength,R.private]}]}},enumeration(e){return{sections:[{sectionTitle:null,items:[{name:"default",type:"select",intlLabel:{id:c("form.attribute.settings.default"),defaultMessage:"Default value"},validations:{},options:[{key:"__null_reset_value__",value:"",metadatas:{intlLabel:{id:"components.InputSelect.option.placeholder",defaultMessage:"Choose here"}}},...(e.enum||[]).filter((t,s)=>e.enum.indexOf(t)===s&&t).map(t=>({key:t,value:t,metadatas:{intlLabel:{id:`${t}.no-override`,defaultMessage:t}}}))]},{intlLabel:{id:c("form.attribute.item.enumeration.graphql"),defaultMessage:"Name override for GraphQL"},name:"enumName",type:"text",validations:{},description:{id:c("form.attribute.item.enumeration.graphql.description"),defaultMessage:"Allows you to override the default generated name for GraphQL"}}]},{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[R.required,R.private]}]}},json(){return{sections:[{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[R.required,R.private]}]}},media(){return{sections:[{sectionTitle:null,items:[{intlLabel:{id:c("form.attribute.media.allowed-types"),defaultMessage:"Select allowed types of media"},name:"allowedTypes",type:"allowed-types-select",size:7,value:"",validations:{}}]},{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[R.required,R.private]}]}},number(e){const t=e.type==="decimal"||e.type==="float"?"any":1;return{sections:[{sectionTitle:null,items:[{autoFocus:!0,name:"default",type:e.type==="biginteger"?"text":"number",step:t,intlLabel:{id:c("form.attribute.settings.default"),defaultMessage:"Default value"},validations:{}}]},{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[R.required,R.unique,R.max,R.min,R.private]}]}},password(){return{sections:[{sectionTitle:null,items:[R.default]},{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[R.required,R.maxLength,R.minLength,R.private]}]}},relation(){return{sections:[{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[R.private]}]}},richtext(){return{sections:[{sectionTitle:null,items:[R.default]},{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[R.required,R.maxLength,R.minLength,R.private]}]}},text(){return{sections:[{sectionTitle:null,items:[R.default,R.regex]},{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[R.required,R.unique,R.maxLength,R.minLength,R.private]}]}},uid(e){return{sections:[{sectionTitle:null,items:[{...R.default,disabled:Boolean(e.targetField),type:"text"}]},{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[R.required,R.maxLength,R.minLength,R.private]}]}}},Ut={intlLabel:{id:"global.type",defaultMessage:"Type"},name:"createComponent",type:"boolean-radio-group",size:12,radios:[{title:{id:c("form.attribute.component.option.create"),defaultMessage:"Create a new component"},description:{id:c("form.attribute.component.option.create.description"),defaultMessage:"A component is shared across types and components, it will be available and accessible everywhere."},value:!0},{title:{id:c("form.attribute.component.option.reuse-existing"),defaultMessage:"Use an existing component"},description:{id:c("form.attribute.component.option.reuse-existing.description"),defaultMessage:"Reuse a component already created to keep your data consistent across content-types."},value:!1}]},rs={advanced:Zl,base:{component(e,t){if(t==="1"){const s=e.createComponent===!0?tt.base("componentToCreate."):[];return{sections:[{sectionTitle:null,items:[Ut]},...s]}}return{sections:[{sectionTitle:null,items:[we,{name:"component",type:"select-component",intlLabel:{id:c("modalForm.attributes.select-component"),defaultMessage:"Select a component"},isMultiple:!1}]},{sectionTitle:null,items:[{intlLabel:{id:"global.type",defaultMessage:"Type"},name:"repeatable",type:"boolean-radio-group",size:12,radios:[{title:{id:c("form.attribute.component.option.repeatable"),defaultMessage:"Repeatable component"},description:{id:c("form.attribute.component.option.repeatable.description"),defaultMessage:"Best for multiple instances (array) of ingredients, meta tags, etc.."},value:!0},{title:{id:c("form.attribute.component.option.single"),defaultMessage:"Single component"},description:{id:c("form.attribute.component.option.single.description"),defaultMessage:"Best for grouping fields like full address, main information, etc..."},value:!1}]}]}]}},date(){return{sections:[{sectionTitle:null,items:[we,{intlLabel:{id:"global.type",defaultMessage:"Type"},name:"type",type:"select-date",options:[{key:"__null_reset_value__",value:"",metadatas:{intlLabel:{id:"components.InputSelect.option.placeholder",defaultMessage:"Choose here"},hidden:!0}},{key:"date",value:"date",metadatas:{intlLabel:{id:c("form.attribute.item.date.type.date"),defaultMessage:"date (ex: 01/01/{currentYear})",values:{currentYear:new Date().getFullYear()}}}},{key:"datetime",value:"datetime",metadatas:{intlLabel:{id:c("form.attribute.item.date.type.datetime"),defaultMessage:"datetime (ex: 01/01/{currentYear} 00:00 AM)",values:{currentYear:new Date().getFullYear()}}}},{key:"time",value:"time",metadatas:{intlLabel:{id:c("form.attribute.item.date.type.time"),defaultMessage:"time (ex: 00:00 AM)"}}}]}]}]}},enumeration(){return{sections:[{sectionTitle:null,items:[we]},{sectionTitle:null,items:[{name:"enum",type:"textarea-enum",size:6,intlLabel:{id:c("form.attribute.item.enumeration.rules"),defaultMessage:"Values (one line per value)"},placeholder:{id:c("form.attribute.item.enumeration.placeholder"),defaultMessage:`Ex:
morning
noon
evening`},validations:{required:!0}}]}]}},media(){return{sections:[{sectionTitle:null,items:[we]},{sectionTitle:null,items:[{intlLabel:{id:"global.type",defaultMessage:"Type"},name:"multiple",size:12,type:"boolean-radio-group",radios:[{title:{id:c("form.attribute.media.option.multiple"),defaultMessage:"Multiple media"},description:{id:c("form.attribute.media.option.multiple.description"),defaultMessage:"Best for sliders, carousels or multiple files download"},value:!0},{title:{id:c("form.attribute.media.option.single"),defaultMessage:"Single media"},description:{id:c("form.attribute.media.option.single.description"),defaultMessage:"Best for avatar, profile picture or cover"},value:!1}]}]}]}},number(){return{sections:[{sectionTitle:null,items:[we,{intlLabel:{id:c("form.attribute.item.number.type"),defaultMessage:"Number format"},name:"type",type:"select-number",options:[{key:"__null_reset_value__",value:"",metadatas:{intlLabel:{id:"components.InputSelect.option.placeholder",defaultMessage:"Choose here"},hidden:!0}},{key:"integer",value:"integer",metadatas:{intlLabel:{id:c("form.attribute.item.number.type.integer"),defaultMessage:"integer (ex: 10)"}}},{key:"biginteger",value:"biginteger",metadatas:{intlLabel:{id:c("form.attribute.item.number.type.biginteger"),defaultMessage:"biginteger (ex: 123456789)"}}},{key:"decimal",value:"decimal",metadatas:{intlLabel:{id:c("form.attribute.item.number.type.decimal"),defaultMessage:"decimal (ex: 2.22)"}}},{key:"float",value:"float",metadatas:{intlLabel:{id:c("form.attribute.item.number.type.float"),defaultMessage:"decimal (ex: 3.3333333)"}}}]}]}]}},relation(){return{sections:[{sectionTitle:null,items:[{intlLabel:{id:"FIXME",defaultMessage:"FIXME"},name:"relation",size:12,type:"relation"}]}]}},string(){return{sections:[{sectionTitle:null,items:[we]},{sectionTitle:null,items:[{intlLabel:{id:"global.type",defaultMessage:"Type"},name:"type",size:12,type:"radio-group",radios:[{title:{id:c("form.attribute.text.option.short-text"),defaultMessage:"Sort text"},description:{id:c("form.attribute.text.option.short-text.description"),defaultMessage:"Best for titles, names, links (URL). It also enables exact search on the field."},value:"string"},{title:{id:c("form.attribute.text.option.long-text"),defaultMessage:"Long text"},description:{id:c("form.attribute.text.option.long-text.description"),defaultMessage:"Best for descriptions, biography. Exact search is disabled."},value:"text"}]}]}]}},text(){return{sections:[{sectionTitle:null,items:[we]},{sectionTitle:null,items:[{intlLabel:{id:"global.type",defaultMessage:"Type"},name:"type",size:12,type:"radio-group",radios:[{title:{id:c("form.attribute.text.option.short-text"),defaultMessage:"Sort text"},description:{id:c("form.attribute.text.option.short-text.description"),defaultMessage:"Best for titles, names, links (URL). It also enables exact search on the field."},value:"string"},{title:{id:c("form.attribute.text.option.long-text"),defaultMessage:"Long text"},description:{id:c("form.attribute.text.option.long-text.description"),defaultMessage:"Best for descriptions, biography. Exact search is disabled."},value:"text"}]}]}]}},uid(e,t,s){const o=s.filter(({type:r})=>["string","text"].includes(r)).map(({name:r})=>({key:r,value:r,metadatas:{intlLabel:{id:`${r}.no-override`,defaultMessage:r}}}));return{sections:[{sectionTitle:null,items:[{...we,placeholder:{id:c("modalForm.attribute.form.base.name.placeholder"),defaultMessage:"e.g. slug, seoUrl, canonicalUrl"}},{intlLabel:{id:c("modalForm.attribute.target-field"),defaultMessage:"Attached field"},name:"targetField",type:"select",options:[{key:"__null_reset_value__",value:"",metadatas:{intlLabel:{id:"global.none",defaultMessage:"None"}}},...o]}]}]}}}},Wt=e=>e?_i(e,{decamelize:!1,lowercase:!1,separator:"_"}):"",is=/^[A-Za-z][_0-9A-Za-z]*$/,ls=e=>({name:"attributeNameAlreadyUsed",message:N.translatedErrors.unique,test(t){if(!t)return!1;const s=(0,H.snakeCase)(t);return!e.some(o=>o===t?!1:(0,H.snakeCase)(o)===s)}}),Gt=e=>({name:"forbiddenAttributeName",message:c("error.attributeName.reserved-name"),test(t){if(!t)return!1;const s=(0,H.snakeCase)(t);return!e.some(o=>(0,H.snakeCase)(o)===s)}}),b={default:()=>T.string().nullable(),max:()=>T.number().integer().nullable(),min:()=>T.number().integer().when("max",(e,t)=>e?t.max(e,c("error.validation.minSupMax")):t).nullable(),maxLength:()=>T.number().integer().positive(c("error.validation.positive")).nullable(),minLength:()=>T.number().integer().min(0).when("maxLength",(e,t)=>e?t.max(e,c("error.validation.minSupMax")):t).nullable(),name(e,t){return T.string().test(ls(e)).test(Gt(t)).matches(is,N.translatedErrors.regex).required(N.translatedErrors.required)},required:()=>T.boolean(),type:()=>T.string().required(N.translatedErrors.required),unique:()=>T.boolean().nullable()},Vt=(e,t)=>({name:b.name(e,t),type:b.type(),default:b.default(),unique:b.unique(),required:b.required(),maxLength:b.maxLength(),minLength:b.minLength(),regex:T.string().test({name:"isValidRegExpPattern",message:c("error.validation.regex"),test(o){return new RegExp(o||"")!==null}}).nullable()}),Ht=()=>({name:"isMinSuperiorThanMax",message:c("error.validation.minSupMax"),test(e){if(!e)return!0;const{max:t}=this.parent;return!t||Number.isNaN(kt(e))?!0:kt(t)>=kt(e)}}),ut={date(e,t){const s={name:b.name(e,t),type:b.type()};return T.object(s)},datetime(e,t){const s={name:b.name(e,t),type:b.type()};return T.object(s)},time(e,t){const s={name:b.name(e,t),type:b.type()};return T.object(s)},default(e,t){const s={name:b.name(e,t),type:b.type()};return T.object(s)},biginteger(e,t){const s={name:b.name(e,t),type:b.type(),default:T.string().nullable().matches(/^-?\d*$/),unique:b.unique(),required:b.required(),max:T.string().nullable().matches(/^-?\d*$/,N.translatedErrors.regex),min:T.string().nullable().test(Ht()).matches(/^-?\d*$/,N.translatedErrors.regex)};return T.object(s)},boolean(e,t){const s={name:b.name(e,t),default:T.boolean().nullable(),required:b.required(),unique:b.unique()};return T.object(s)},component(e,t){const s={name:b.name(e,t),type:b.type(),required:b.required(),max:b.max(),min:b.min(),component:T.string().required(N.translatedErrors.required)};return T.object(s)},decimal(e,t){const s={name:b.name(e,t),type:b.type(),default:T.number(),required:b.required(),max:T.number(),min:T.number().test(Ht())};return T.object(s)},dynamiczone(e,t){const s={name:b.name(e,t),type:b.type(),required:b.required(),max:b.max(),min:b.min()};return T.object(s)},email(e,t){const s={name:b.name(e,t),type:b.type(),default:T.string().email().nullable(),unique:b.unique(),required:b.required(),maxLength:b.maxLength(),minLength:b.minLength()};return T.object(s)},enumeration(e,t){const s=/^[_A-Za-z][_0-9A-Za-z]*$/,o={name:T.string().test(ls(e)).test(Gt(t)).matches(s,N.translatedErrors.regex).required(N.translatedErrors.required),type:b.type(),default:b.default(),unique:b.unique(),required:b.required(),enum:T.array().of(T.string()).min(1,N.translatedErrors.min).test({name:"areEnumValuesUnique",message:c("error.validation.enum-duplicate"),test(r){return r?!qi(r.map(Wt).filter((i,d,u)=>u.indexOf(i)!==d)).length:!1}}).test({name:"doesNotHaveEmptyValues",message:c("error.validation.enum-empty-string"),test:r=>r?!r.map(Wt).some(l=>l===""):!1}).test({name:"doesMatchRegex",message:c("error.validation.enum-regex"),test:r=>r?r.map(Wt).every(l=>s.test(l)):!1}),enumName:T.string().nullable()};return T.object(o)},float(e,t){const s={name:b.name(e,t),type:b.type(),required:b.required(),default:T.number(),max:T.number(),min:T.number().test(Ht())};return T.object(s)},integer(e,t){const s={name:b.name(e,t),type:b.type(),default:T.number().integer(),unique:b.unique(),required:b.required(),max:b.max(),min:b.min()};return T.object(s)},json(e,t){const s={name:b.name(e,t),type:b.type(),required:b.required(),unique:b.unique()};return T.object(s)},media(e,t){const s={name:b.name(e,t),type:b.type(),multiple:T.boolean(),required:b.required(),allowedTypes:T.array().of(T.string().oneOf(["images","videos","files","audios"])).min(1).nullable()};return T.object(s)},password(e,t){const s={name:b.name(e,t),type:b.type(),default:b.default(),unique:b.unique(),required:b.required(),maxLength:b.maxLength(),minLength:b.minLength()};return T.object(s)},relation(e,t,s,{initialData:o,modifiedData:r}){const l={name:b.name(e,t),target:T.string().required(N.translatedErrors.required),relation:T.string().required(),type:T.string().required(),targetAttribute:T.lazy(()=>{const i=(0,C.g)(r.relation,r.targetAttribute);if(i==="oneWay"||i==="manyWay")return T.string().nullable();const d=T.string().test(Gt(t)),p=[...s.map(({name:g})=>g),r.name].filter(g=>g!==o.targetAttribute);return d.matches(is,N.translatedErrors.regex).test({name:"forbiddenTargetAttributeName",message:c("error.validation.relation.targetAttribute-taken"),test(g){return g?!p.includes(g):!1}}).required(N.translatedErrors.required)})};return T.object(l)},richtext(e,t){const s={name:b.name(e,t),type:b.type(),default:b.default(),unique:b.unique(),required:b.required(),maxLength:b.maxLength(),minLength:b.minLength()};return T.object(s)},blocks(e,t){const s={name:b.name(e,t),type:b.type(),default:b.default(),unique:b.unique(),required:b.required(),maxLength:b.maxLength(),minLength:b.minLength()};return T.object(s)},string(e,t){const s=Vt(e,t);return T.object(s)},text(e,t){const s=Vt(e,t);return T.object(s)},uid(e,t){const s=Vt(e,t);return T.object(s)}},ds=/^[A-Za-z][-_0-9A-Za-z]*$/,Yl=e=>{const t={name:T.string().matches(ds,N.translatedErrors.regex).test({name:"nameNotAllowed",message:N.translatedErrors.unique,test(s){return s?!e.includes(s?.toLowerCase()):!1}}).required(N.translatedErrors.required)};return T.object(t)},Kl={base:{sections:[{sectionTitle:null,items:[{autoFocus:!0,name:"name",type:"text",intlLabel:{id:"global.name",defaultMessage:"Name"},description:{id:c("modalForm.editCategory.base.name.description"),defaultMessage:"No space is allowed for the name of the category"}}]}]}},Ql=(e,t,s,o,r)=>{const l={displayName:T.string().test({name:"nameAlreadyUsed",message:N.translatedErrors.unique,test(i){if(!i)return!1;const d=(0,C.c)(i,s),u=(0,H.snakeCase)(d),p=(0,H.snakeCase)(r);return e.every(g=>(0,H.snakeCase)(g)!==u)&&o.every(g=>(0,H.snakeCase)(g)!==p)}}).test({name:"nameNotAllowed",message:c("error.contentTypeName.reserved-name"),test(i){if(!i)return!1;const d=(0,H.snakeCase)(i);return t.every(u=>(0,H.snakeCase)(u)!==d)}}).required(N.translatedErrors.required),category:T.string().matches(ds,N.translatedErrors.regex).required(N.translatedErrors.required),icon:T.string()};return T.object(l)},cs={name:"displayName",type:"text",intlLabel:{id:c("contentType.displayName.label"),defaultMessage:"Display name"}},Zt={advanced:{default(){return{sections:[{items:[{intlLabel:{id:c("contentType.draftAndPublish.label"),defaultMessage:"Draft & publish"},description:{id:c("contentType.draftAndPublish.description"),defaultMessage:"Allows writing a draft version of an entry, before it is published"},name:"draftAndPublish",type:"toggle-draft-publish",validations:{}}]}]}}},base:{create(){return{sections:[{sectionTitle:null,items:[cs,{description:{id:c("contentType.apiId-singular.description"),defaultMessage:"Used to generate the API routes and databases tables/collections"},intlLabel:{id:c("contentType.apiId-singular.label"),defaultMessage:"API ID (Singular)"},name:"singularName",type:"text-singular"},{type:"pushRight",size:6,intlLabel:{id:"",defaultMessage:""},name:"pushRight"},{description:{id:c("contentType.apiId-plural.description"),defaultMessage:"Pluralized API ID"},intlLabel:{id:c("contentType.apiId-plural.label"),defaultMessage:"API ID (Plural)"},name:"pluralName",type:"text-plural"}]}]}},edit(){return{sections:[{sectionTitle:null,items:[cs,{disabled:!0,description:{id:c("contentType.apiId-singular.description"),defaultMessage:"Used to generate the API routes and databases tables/collections"},intlLabel:{id:c("contentType.apiId-singular.label"),defaultMessage:"API ID (Singular)"},name:"singularName",type:"text"},{type:"pushRight",size:6,intlLabel:{id:"",defaultMessage:""},name:"pushRight"},{disabled:!0,description:{id:c("contentType.apiId-plural.description"),defaultMessage:"Pluralized API ID"},intlLabel:{id:c("contentType.apiId-plural.label"),defaultMessage:"API ID (Plural)"},name:"pluralName",type:"text"},{intlLabel:{id:"global.type",defaultMessage:"Type"},name:"kind",type:"content-type-radio-group",size:12,radios:[{title:{id:c("form.button.collection-type.name"),defaultMessage:"Collection Type"},description:{id:c("form.button.collection-type.description"),defaultMessage:"Best for multiple instances like articles, products, comments, etc."},value:"collectionType"},{title:{id:c("form.button.single-type.name"),defaultMessage:"Single Type"},description:{id:c("form.button.single-type.description"),defaultMessage:"Best for single instance like about us, homepage, etc."},value:"singleType"}]}]}]}}}},Xl=({usedContentTypeNames:e=[],reservedModels:t=[],singularNames:s=[],pluralNames:o=[],collectionNames:r=[]})=>{const l={displayName:T.string().test({name:"nameAlreadyUsed",message:N.translatedErrors.unique,test(i){if(!i)return!1;const d=(0,C.b)(i),u=(0,H.snakeCase)(d);return!e.some(p=>(0,H.snakeCase)(p)===u)}}).test({name:"nameNotAllowed",message:c("error.contentTypeName.reserved-name"),test(i){if(!i)return!1;const d=(0,H.snakeCase)(i);return!t.some(u=>(0,H.snakeCase)(u)===d)}}).required(N.translatedErrors.required),pluralName:T.string().test({name:"pluralNameAlreadyUsed",message:N.translatedErrors.unique,test(i){if(!i)return!1;const d=(0,H.snakeCase)(i);return!o.some(u=>(0,H.snakeCase)(u)===d)}}).test({name:"pluralNameAlreadyUsedAsSingular",message:c("error.contentType.pluralName-equals-singularName"),test(i){if(!i)return!1;const d=(0,H.snakeCase)(i);return!s.some(u=>(0,H.snakeCase)(u)===d)}}).test({name:"pluralAndSingularAreUnique",message:c("error.contentType.pluralName-used"),test(i,d){return i?(0,H.snakeCase)(d.parent.singularName)!==(0,H.snakeCase)(i):!1}}).test({name:"pluralNameNotAllowed",message:c("error.contentTypeName.reserved-name"),test(i){if(!i)return!1;const d=(0,H.snakeCase)(i);return!t.some(u=>(0,H.snakeCase)(u)===d)}}).test({name:"pluralNameNotAlreadyUsedInCollectionName",message:c("error.contentType.pluralName-equals-collectionName"),test(i){if(!i)return!1;const d=(0,H.snakeCase)(i);return!r.some(u=>(0,H.snakeCase)(u)===d)}}).required(N.translatedErrors.required),singularName:T.string().test({name:"singularNameAlreadyUsed",message:N.translatedErrors.unique,test(i){if(!i)return!1;const d=(0,H.snakeCase)(i);return!s.some(u=>(0,H.snakeCase)(u)===d)}}).test({name:"singularNameAlreadyUsedAsPlural",message:c("error.contentType.singularName-equals-pluralName"),test(i){if(!i)return!1;const d=(0,H.snakeCase)(i);return!o.some(u=>(0,H.snakeCase)(u)===d)}}).test({name:"pluralAndSingularAreUnique",message:c("error.contentType.singularName-used"),test(i,d){return i?(0,H.snakeCase)(d.parent.pluralName)!==(0,H.snakeCase)(i):!1}}).test({name:"singularNameNotAllowed",message:c("error.contentTypeName.reserved-name"),test(i){if(!i)return!1;const d=(0,H.snakeCase)(i);return!t.some(u=>(0,H.snakeCase)(u)===d)}}).required(N.translatedErrors.required),draftAndPublish:T.boolean(),kind:T.string().oneOf(["singleType","collectionType"]),reviewWorkflows:T.boolean()};return T.object(l)},Yt={advanced:{default(){return{sections:tt.advanced()}}},base:{createComponent(){return{sections:[{sectionTitle:null,items:[Ut]},...tt.base("componentToCreate.")]}},default(){return{sections:[{sectionTitle:null,items:[Ut]},{sectionTitle:null,items:[{type:"pushRight",size:6,intlLabel:{id:"",defaultMessage:""},name:"pushRight"},{name:"components",type:"select-components",intlLabel:{id:c("modalForm.attributes.select-components"),defaultMessage:"Select the components"},isMultiple:!0}]}]}}}},us=(e,t)=>{e.forEach(s=>{if(!("sectionTitle"in s)){t[0].items?.push(s);return}t.push(s)})},Jl=(e,t)=>`components_${(0,H.snakeCase)(t)}_${At((0,H.snakeCase)(e))}`,ms=(e,t)=>e.filter(({name:s})=>s!==t.initialData.name).map(({name:s})=>s),Ye={customField:{schema({schemaAttributes:e,attributeType:t,customFieldValidator:s,reservedNames:o,schemaData:r,ctbFormsAPI:l}){const i=ms(e,r);ut[t];let d;return t==="relation"?d=ut[t](i,o.attributes,[],{initialData:{},modifiedData:{}}):d=ut[t](i,o.attributes),l.makeCustomFieldValidator(d,s,i,o.attributes,r)},form:{base({customField:e}){const t=[{sectionTitle:null,items:[we]}];return e.options?.base&&us(e.options.base,t),{sections:t}},advanced({customField:e,data:t,step:s,extensions:o,...r}){const l=[{sectionTitle:null,items:[]}],i=o.getAdvancedForm(["attribute",e.type],{data:t,type:e.type,step:s,...r});if(e.options?.advanced&&us(e.options.advanced,l),i){const d={sectionTitle:{id:c("modalForm.custom-fields.advanced.settings.extended"),defaultMessage:"Extended settings"},items:i};l.push(d)}return{sections:l}}}},attribute:{schema(e,t,s,o,r,l){const i=e?.schema?.attributes??[],d=ms(i,r);try{const u=ut[t](d,s.attributes,o,r);return l.makeValidator(["attribute",t],u,d,s.attributes,o,r)}catch(u){return console.error("Error yup build schema",u),ut.default(d,s.attributes)}},form:{advanced({data:e,type:t,step:s,extensions:o,...r}){try{const l=rs.advanced[t](e,s).sections,i=o.getAdvancedForm(["attribute",t],{data:e,type:t,step:s,...r});return{sections:l.reduce((u,p)=>(p.sectionTitle===null?u.push(p):u.push({...p,items:[...p.items,...i]}),u),[])}}catch(l){return console.error(l),{sections:[]}}},base({data:e,type:t,step:s,attributes:o}){try{return rs.base[t](e,s,o)}catch{return Hl}}}},contentType:{schema(e,t,s,o,r,l){const i=Object.values(l).map(x=>x.schema.singularName),d=Object.values(l).map(x=>x?.schema?.pluralName??""),u=t?e.filter(x=>x!==s):e,p=t?i.filter(x=>{const{schema:$}=l[s];return $.singularName!==x}):i,g=t?d.filter(x=>{const{schema:$}=l[s];return $.pluralName!==x}):d,f=Object.values(l).map(x=>x?.schema?.collectionName??""),j=t?f.filter(x=>{const{schema:$}=l[s],W=$.pluralName,M=$.collectionName;return x!==W||x!==M}):f,A=Xl({usedContentTypeNames:u,reservedModels:o.models,singularNames:p,pluralNames:g,collectionNames:j});return r.makeValidator(["contentType"],A,u,o.models,p,g)},form:{base({actionType:e}){return e==="create"?Zt.base.create():Zt.base.edit()},advanced({extensions:e}){const t=Zt.advanced.default().sections.map(o=>o.items).flat(),s=e.getAdvancedForm(["contentType"]);return{sections:[{items:[...t,...s]}]}}}},component:{schema(e,t,s,o=!1,r,l,i=null){const d=o?e.filter(f=>f!==i):e,u=Object.values(r).map(f=>f?.schema?.collectionName),p=Jl(l,t),g=o?u.filter(f=>f!==p):u;return Ql(d,s.models,t,g,p)},form:{advanced(){return{sections:tt.advanced()}},base(){return{sections:tt.base()}}}},addComponentToDynamicZone:{form:{advanced(){return Yt.advanced.default()},base({data:e}){return e?.createComponent??!1?Yt.base.createComponent():Yt.base.default()}}},editCategory:{schema(e,t){const s=e.filter(o=>o!==t.name).map(o=>o.toLowerCase());return Yl(s)},form:{advanced:()=>({sections:[]}),base(){return Kl.base}}}},ql=()=>e=>e[`${C.p}_formModal`]||C.i,_l=()=>(0,Xn.Mz)(ql(),e=>e),ed=(e,t)=>{const s=O(e,["contentType","schema","kind"],"");return s==="singleType"||s===t.kind?!0:O(e,["contentType","schema","attributes"],[]).filter(({relation:l,type:i,targetAttribute:d})=>{const u=(0,C.g)(l,d);return i==="relation"&&!["oneWay","manyWay"].includes(u||"")}).length===0},td=(e="",t,s)=>{const o=["text","boolean","blocks","json","number","email","date","password","media","enumeration","relation","richtext"],r=e==="contentType",l=s.includes(t),i=!r&&!l;return r?[[...o.slice(0,-1),"uid",...o.slice(-1)],["component","dynamiczone"]]:i?[o,["component"]]:[o]},ps=e=>e.reduce((t,s)=>{const o=s.items.reduce((r,l)=>(l.name&&r.push(l.name),r),[]);return[...t,...o]},[]),nd=()=>{const{onCloseModal:e,onNavigateToChooseAttributeModal:t,onNavigateToAddCompoToDZModal:s,onNavigateToCreateComponentStep2:o,actionType:r,attributeName:l,attributeType:i,customFieldUid:d,categoryName:u,dynamicZoneTarget:p,forTarget:g,modalType:f,isOpen:j,kind:A,step:x,targetUid:$,showBackLink:W}=_e(),M=(0,N.useCustomFields)().get(d),F=(0,m.useRef)(),L=(0,m.useMemo)(_l,[]),w=(0,qe.wA)(),ee=(0,N.useNotification)(),he=(0,qe.d4)(Z=>L(Z),qe.bN),{push:Me}=(0,Fe.W6)(),{trackUsage:G}=(0,N.useTracking)(),{formatMessage:Te}=(0,K.A)(),{getPlugin:te}=(0,N.useStrapiApp)(),xe=te(C.p)?.apis.forms,de=xe.components.inputs,{addAttribute:Ge,addCustomFieldAttribute:ye,addCreatedComponentToDynamicZone:J,allComponentsCategories:E,changeDynamicZoneComponents:Kt,contentTypes:nt,components:Ke,createSchema:st,deleteCategory:Qt,deleteData:jt,editCategory:Xt,editCustomFieldAttribute:Jt,submitData:qt,modifiedData:ve,nestedComponents:_t,setModifiedData:en,sortedContentTypesList:tn,updateSchema:$t,reservedNames:Qe}=We(),{componentToCreate:pt,formErrors:Ve,initialData:fe,isCreatingComponentWhileAddingAField:ft,modifiedData:h}=he,I=g==="contentType"||g==="component"?[g]:[g,$];(0,m.useEffect)(()=>{if(j){const Z=tn.filter(es);f==="editCategory"&&en(),r==="edit"&&f==="attribute"&&g==="contentType"&&G("willEditFieldOfContentType");const Ne=[...I,"schema","attributes"],ke=Bt(O(ve,Ne,[]),p)||null;if(f==="editCategory"&&r==="edit"&&w({type:C.S,modalType:f,actionType:r,data:{name:u}}),f==="contentType"&&r==="create"&&w({type:C.S,modalType:f,actionType:r,data:{draftAndPublish:!0},pluginOptions:{}}),f==="contentType"&&r==="edit"){const{displayName:X,draftAndPublish:ge,kind:Ee,pluginOptions:Ae,pluralName:kd,reviewWorkflows:Bd,singularName:wd}=O(ve,[...I,"schema"],{displayName:null,pluginOptions:{},singularName:null,pluralName:null});w({type:C.S,actionType:r,modalType:f,data:{displayName:X,draftAndPublish:ge,kind:Ee,pluginOptions:Ae,pluralName:kd,reviewWorkflows:Bd??!1,singularName:wd}})}if(f==="component"&&r==="edit"){const X=O(ve,I,{});w({type:C.S,actionType:r,modalType:f,data:{displayName:X.schema.displayName,category:X.category,icon:X.schema.icon}})}if(f==="addComponentToDynamicZone"&&r==="edit"){const X={...ke,components:[],name:p,createComponent:!1,componentToCreate:{type:"component"}};w({type:C.d,attributeToEdit:X})}if(i){const ge={...Bt(O(ve,Ne,[]),l),name:l};i==="component"&&r==="edit"&&(ge.repeatable||Yn(ge,"repeatable",!1)),w(f==="customField"?{type:C.e,customField:M,isEditing:r==="edit",modifiedDataToSetForEditing:ge,forTarget:g}:{type:C.f,attributeType:i,nameToSetForRelation:O(Z,["0","title"],"error"),targetUid:O(Z,["0","uid"],"error"),isEditing:r==="edit",modifiedDataToSetForEditing:ge,step:x,forTarget:g})}}else w({type:C.R})},[r,l,i,u,p,g,j,f]);const V=f==="contentType",me=f==="component",Ce=f==="attribute",Oe=f==="customField",Pe=i==="component"&&Ce,Xe=r==="create",Je=O(h,"createComponent",!1)||ft,at=x==="1",Ts=f==="editCategory",js=f==="chooseAttribute",nn=(0,C.b)(h.displayName||""),sn=O(ve,[...I,"schema","attributes"],null),Td=async()=>{let Z;const Ne=Je&&x==="1"?O(h,"componentToCreate",{}):h;if(V)Z=Ye.contentType.schema(Object.keys(nt),r==="edit",O(ve,[...I,"uid"],null),Qe,xe,nt);else if(me)Z=Ye.component.schema(Object.keys(Ke),h.category||"",Qe,r==="edit",Ke,h.displayName||"",O(ve,[...I,"uid"],null));else if(Oe)Z=Ye.customField.schema({schemaAttributes:O(ve,[...I,"schema","attributes"],[]),attributeType:M.type,reservedNames:Qe,schemaData:{modifiedData:h,initialData:fe},ctbFormsAPI:xe,customFieldValidator:M.options?.validator});else if(Pe&&Je&&at)Z=Ye.component.schema(Object.keys(Ke),O(h,"componentToCreate.category",""),Qe,r==="edit",Ke,h.componentToCreate.displayName||"");else if(Ce&&!at){const ke=i==="relation"?"relation":h.type;let X=[];if(ke==="relation"){const ge=O(h,["target"],null);X=O(nt,[ge,"schema","attributes"],[]).filter(({name:Ae})=>r!=="edit"?!0:Ae!==fe.targetAttribute)}Z=Ye.attribute.schema(O(ve,I,{}),ke,Qe,X,{modifiedData:h,initialData:fe},xe)}else if(Ts)Z=Ye.editCategory.schema(E,fe);else if(at&&Je)Z=Ye.component.schema(Object.keys(Ke),O(h,"componentToCreate.category",""),Qe,r==="edit",Ke,h.componentToCreate.displayName||"");else return;await Z.validate(Ne,{abortEarly:!1})},$s=(0,m.useCallback)(({target:{name:Z,value:Ne,type:ke,...X}})=>{const ge=["enumName","max","min","maxLength","minLength","regex","default"];let Ee;ge.includes(Z)&&Ne===""?Ee=null:Ee=Ne;const Ae=Object.assign({},Ve);Z==="max"&&delete Ae.min,Z==="maxLength"&&delete Ae.minLength,delete Ae[Z],w({type:C.h,errors:Ae}),w({type:C.j,keys:Z.split("."),value:Ee,...X})},[w,Ve]),Le=async(Z,Ne=Xe)=>{Z.preventDefault();try{await Td(),Md(Ne);const ke=g==="components"?$:nn;if(V)if(Xe)st({...h,kind:A},f,nn),Me({pathname:`/plugins/${C.p}/content-types/${nn}`}),t({forTarget:g,targetUid:ke});else{ed(ve,h)?(e(),qt(h)):ee({type:"warning",message:{id:"notification.contentType.relations.conflict"}});return}else if(f==="component")if(Xe){const X=(0,C.c)(h.displayName,h.category),{category:ge,...Ee}=h;st(Ee,"component",X,ge),Me({pathname:`/plugins/${C.p}/component-categories/${ge}/${X}`}),t({forTarget:g,targetUid:X})}else{$t(h,f,$),e();return}else if(Ts){if(Kn(fe.name)===Kn(h.name)){e();return}Xt(fe.name,h);return}else if(Oe){const X={attributeToSet:{...h,customField:d},forTarget:g,targetUid:$,initialAttribute:fe};r==="edit"?Jt(X):ye(X),Ne?t({forTarget:g,targetUid:ke}):e();return}else if(Ce&&!Je){if(i==="dynamiczone"){Ge(h,g,$,r==="edit",fe),Xe?(w({type:C.k}),F.current!==void 0&&F.current._handlers.setSelectedTabIndex(0),s({dynamicZoneTarget:h.name})):e();return}if(!Pe){Ge(h,g,$,r==="edit",fe),Ne?t({forTarget:g,targetUid:ke}):e();return}if(at){o(),w({type:C.l,forTarget:g});return}Ge(h,g,$,r==="edit",fe,!0),Ne?t({forTarget:g,targetUid:$}):e()}else if(Ce&&Je){if(at){G("willCreateComponentFromAttributesModal"),w({type:C.m,forTarget:g}),o();return}const{category:X,type:ge,...Ee}=pt,Ae=(0,C.c)(pt.displayName,X);st(Ee,ge,Ae,X,Je),Ge(h,g,$,!1),w({type:C.R}),Ne?t({forTarget:"components",targetUid:Ae}):e();return}else{if(at)if(Je){const{category:X,type:ge,...Ee}=h.componentToCreate,Ae=(0,C.c)(h.componentToCreate.displayName,X);st(Ee,ge,Ae,X,Je),J(p,[Ae]),t({forTarget:"components",targetUid:Ae})}else Kt(p,h.components),e();else console.error("This case is not handled");return}w({type:C.R})}catch(ke){const X=(0,N.getYupInnerErrors)(ke);w({type:C.h,errors:X})}},jd=()=>{window.confirm(Te({id:"window.confirm.close-modal.file",defaultMessage:"Are you sure? Your changes will be lost."}))&&(e(),w({type:C.R}))},Ms=()=>{Pt(h,fe)?(e(),w({type:C.R})):jd()},$d=Z=>{if(Z==="advanced"){if(V){G("didSelectContentTypeSettings");return}g==="contentType"&&G("didSelectContentTypeFieldSettings")}},Md=Z=>{f==="attribute"&&g==="contentType"&&i!=="dynamiczone"&&Z&&G("willAddMoreFieldToContentType")},Sd=()=>!!(f==="editCategory"||f==="component"||Xi(h,"createComponent")),Nd=td(g,$,_t);if(!j||!f)return null;const Ss=O(Ye,[f,"form"],{advanced:()=>({sections:[]}),base:()=>({sections:[]})}),Fd=g==="components"||g==="component",Ns={customInputs:{"allowed-types-select":ol,"boolean-radio-group":xl,"checkbox-with-number-field":vl,"icon-picker":Fl,"content-type-radio-group":Cl,"radio-group":wt,relation:Bl,"select-category":wl,"select-component":zl,"select-components":Ul,"select-default-boolean":yl,"select-number":as,"select-date":Wl,"toggle-draft-publish":Al,"text-plural":Ll,"text-singular":Gl,"textarea-enum":Vl,...de},componentToCreate:pt,dynamicZoneTarget:p,formErrors:Ve,isAddingAComponentToAnotherComponent:Fd,isCreatingComponentWhileAddingAField:ft,mainBoxHeader:O(ve,[...I,"schema","displayName"],""),modifiedData:h,naturePickerType:g,isCreating:Xe,targetUid:$,forTarget:g},Fs=Ss.advanced({data:h,type:i,step:x,actionType:r,attributes:sn,extensions:xe,forTarget:g,contentTypeSchema:ve.contentType||{},customField:M}).sections,Ls=Ss.base({data:h,type:i,step:x,actionType:r,attributes:sn,extensions:xe,forTarget:g,contentTypeSchema:ve.contentType||{},customField:M}).sections,Ld=ps(Ls),Ed=ps(Fs),Rd=Object.keys(Ve).some(Z=>Ld.includes(Z)),Id=Object.keys(Ve).some(Z=>Ed.includes(Z)),Dd=O(nt,[$,"schema","kind"]),Od=()=>r==="edit"&&sn.every(({name:Z})=>Z!==h?.name),Pd=()=>{Od()&&G("didEditFieldNameOnContentType")};return(0,n.jsxs)(ws.k,{onClose:Ms,labelledBy:"title",children:[(0,n.jsx)(jl,{actionType:r,attributeName:l,categoryName:u,contentTypeKind:A,dynamicZoneTarget:p,modalType:f,forTarget:g,targetUid:$,attributeType:i,customFieldUid:d,showBackLink:W}),js&&(0,n.jsx)(hl,{attributes:Nd,forTarget:g,kind:Dd||"collectionType"}),!js&&(0,n.jsxs)("form",{onSubmit:Le,children:[(0,n.jsx)(ze.c,{children:(0,n.jsxs)(pe.f,{label:"todo",id:"tabs",variant:"simple",ref:F,onTabChange:Z=>{Z===1&&$d("advanced")},children:[(0,n.jsxs)(v.s,{justifyContent:"space-between",children:[(0,n.jsx)(Ml,{actionType:r,forTarget:g,kind:A,step:x,modalType:f,attributeType:i,attributeName:l,customField:M}),(0,n.jsxs)(ce.t,{children:[(0,n.jsx)(ce.o,{hasError:Rd,children:Te({id:c("popUpForm.navContainer.base"),defaultMessage:"Basic settings"})}),(0,n.jsx)(ce.o,{hasError:Id,disabled:Sd(),children:Te({id:c("popUpForm.navContainer.advanced"),defaultMessage:"Advanced settings"})})]})]}),(0,n.jsx)(ae.c,{}),(0,n.jsx)(y.a,{paddingTop:6,children:(0,n.jsxs)(ie.T,{children:[(0,n.jsx)(ie.K,{children:(0,n.jsx)(v.s,{direction:"column",alignItems:"stretch",gap:6,children:(0,n.jsx)(os,{form:Ls,formErrors:Ve,genericInputProps:Ns,modifiedData:h,onChange:$s})})}),(0,n.jsx)(ie.K,{children:(0,n.jsx)(v.s,{direction:"column",alignItems:"stretch",gap:6,children:(0,n.jsx)(os,{form:Fs,formErrors:Ve,genericInputProps:Ns,modifiedData:h,onChange:$s})})})]})})]})}),(0,n.jsx)(zs.j,{endActions:(0,n.jsx)(Tl,{deleteCategory:Qt,deleteContentType:jt,deleteComponent:jt,categoryName:fe.name,isAttributeModal:f==="attribute",isCustomFieldModal:f==="customField",isComponentToDzModal:f==="addComponentToDynamicZone",isComponentAttribute:i==="component",isComponentModal:f==="component",isContentTypeModal:f==="contentType",isCreatingComponent:r==="create",isCreatingDz:r==="create",isCreatingComponentAttribute:h.createComponent||!1,isCreatingComponentInDz:h.createComponent||!1,isCreatingComponentWhileAddingAField:ft,isCreatingContentType:r==="create",isEditingAttribute:r==="edit",isDzAttribute:i==="dynamiczone",isEditingCategory:f==="editCategory",isInFirstComponentStep:x==="1",onSubmitAddComponentAttribute:Le,onSubmitAddComponentToDz:Le,onSubmitCreateComponent:Le,onSubmitCreateContentType:Le,onSubmitCreateDz:Le,onSubmitEditAttribute:Le,onSubmitEditCategory:Le,onSubmitEditComponent:Le,onSubmitEditContentType:Le,onSubmitEditCustomFieldAttribute:Le,onSubmitEditDz:Le,onClickFinish:Pd}),startActions:(0,n.jsx)(se.$,{variant:"tertiary",onClick:Ms,children:Te({id:"app.components.Button.cancel",defaultMessage:"Cancel"})})})]})]})},sd=()=>e=>e[`${C.p}_dataManagerProvider`]||C.o,ad=()=>(0,Xn.Mz)(sd(),e=>e),od=(e,t)=>{const s=Object.keys(e).filter(o=>{const r=O(e,o,{}),l=O(t,o,{}),i=O(r,["isTemporary"],!1),d=!Pt(r,l);return i||d});return(0,C.q)(s)},rd=(e,t)=>{const s=gs(O(e,"schema.attributes",[]),t),o=O(e,"isTemporary",!1)?{tmpUID:e.uid}:{uid:e.uid};return Object.assign({},o,{category:e.category},Jn(e.schema,"attributes"),{attributes:s})},fs=(e,t=!1)=>{const s=O(e,"uid",null),o=gs(O(e,"schema.attributes",[]),s),r=t?{category:O(e,"category","")}:{},l=Object.assign(r,Jn(e.schema,"attributes"),{attributes:o});return delete l.uid,delete l.isTemporary,delete l.visible,delete l.restrictRelationsTo,l},gs=(e,t)=>e.reduce((s,{name:o,...r})=>{const l=r,i=l.target===t,d=l.type==="relation",u=O(l,"targetAttribute",null);if(!i)if(d){const p=Object.assign({},l,{targetAttribute:hs(u)});s[o]=Tt(p)}else s[o]=Tt(l);if(i){const p=l.target,g=Object.assign({},l,{target:p,targetAttribute:hs(u)});s[o]=Tt(g)}if(l.customField){const p={...l,type:"customField"};s[o]=Tt(p)}return s},{}),hs=e=>e==="-"?null:e,Tt=e=>Object.keys(e).reduce((t,s)=>(e[s]!==null&&s!=="plugin"&&(t[s]=e[s]),t),{}),id=(e,t,s)=>od(e,t).map(l=>{const i=O(e,l,{});return rd(i,s)}),ld=e=>tl(Object.keys(e).map(t=>({visible:e[t].schema.visible,name:t,title:e[t].schema.displayName,plugin:e[t].plugin||null,uid:t,to:`/plugins/${C.p}/content-types/${t}`,kind:e[t].schema.kind,restrictRelationsTo:e[t].schema.restrictRelationsTo})).filter(t=>t!==null),t=>el(t.title)),ys=e=>e.reduce((t,s)=>(t[s.uid]=s,t),{}),dd=(e,t,s,o)=>{const r=t.reduce((d,u)=>{const p=O(s,u,{});return d[u]=p,d},{});return{[o?"contentType":"component"]:e,components:r}},bs=e=>Object.keys(e).reduce((t,s)=>{const o=e[s].schema;return t[s]={...e[s],schema:{...o,attributes:cd(o.attributes)}},t},{}),cd=e=>Object.keys(e).reduce((t,s)=>(t.push({...e[s],name:s}),t),[]),ud=e=>{const t=Object.keys(e).reduce((s,o)=>{const r=O(e,[o]),l=r.uid;return md(r)&&s.push(l),s},[]);return(0,C.q)(t)},md=e=>O(e,["schema","attributes"],[]).some(s=>{const{type:o}=s;return o==="component"}),xs=e=>{const t=Object.keys(e).reduce((s,o)=>{const r=e?.[o]?.schema?.attributes??[],l=pd(r);return[...s,...l]},[]);return(0,C.q)(t)},pd=e=>e.reduce((t,s)=>{const{type:o,component:r}=s;return o==="component"&&t.push(r),t},[]),fd=(e,t)=>{const s=Object.keys(e).map(o=>O(e,[o,...t],""));return(0,C.q)(s)},vs="did-not-kill-server",gd="server is down";function mt(e,t){return new Promise(s=>{fetch(`${window.strapi.backendURL}/_health`,{method:"HEAD",mode:"no-cors",headers:{"Content-Type":"application/json","Keep-Alive":"false"}}).then(o=>{if(o.status>=400)throw new Error(gd);if(!t)throw new Error(vs);s(e)}).catch(o=>{setTimeout(()=>mt(e,o.message!==vs).then(s),100)})})}const hd=e=>Object.values(e.attributes).filter(s=>s.type==="dynamiczone").every(s=>Array.isArray(s.components)&&s.components.length>0),yd=({children:e})=>{const t=(0,qe.wA)(),{components:s,contentTypes:o,isLoading:r,isLoadingForDataToBeSet:l,initialData:i,modifiedData:d,reservedNames:u}=(0,qe.d4)(ad()),p=(0,N.useNotification)(),{lockAppWithAutoreload:g,unlockAppWithAutoreload:f}=(0,N.useAutoReloadOverlayBlocker)(),{setCurrentStep:j}=(0,N.useGuidedTour)(),{getPlugin:A}=(0,N.useStrapiApp)(),x=A(C.p),{autoReload:$}=(0,N.useAppInfo)(),{formatMessage:W}=(0,K.A)(),{trackUsage:M}=(0,N.useTracking)(),{refetchPermissions:F}=(0,N.useRBACProvider)(),{pathname:L}=(0,Fe.zy)(),{onCloseModal:w}=_e(),ee=(0,Fe.W5)(`/plugins/${C.p}/content-types/:uid`),he=(0,Fe.W5)(`/plugins/${C.p}/component-categories/:categoryUid/:componentUid`),Me=(0,N.useFetchClient)(),{put:G,post:Te,del:te}=Me,Se=(0,m.useRef)();Se.current=W;const xe=$,de=ee!==null,Ge=de?"contentType":"component",ye=de?O(ee,"params.uid",null):O(he,"params.componentUid",null),J=(0,m.useRef)(),E=de?"content-types":"components";J.current=async()=>{try{const[{data:{data:h}},{data:{data:I}},{data:V}]=await Promise.all(["components","content-types","reserved-names"].map(Xe=>Me.get(`/${C.p}/${Xe}`))),me=ys(h),Ce=bs(me),Oe=ys(I),Pe=bs(Oe);t({type:C.G,components:Ce,contentTypes:Pe,reservedNames:V})}catch(h){console.error({err:h}),p({type:"warning",message:{id:"notification.error"}})}},(0,m.useEffect)(()=>(J.current(),()=>{t({type:C.r})}),[]),(0,m.useEffect)(()=>{!r&&ye&&$t()},[r,L,ye]),(0,m.useEffect)(()=>{$||p({type:"info",message:{id:c("notification.info.autoreaload-disable")}})},[$,p]);const Kt=(h,I,V,me=!1,Ce,Oe=!1)=>{const Pe=me?C.x:C.y;t({type:Pe,attributeToSet:h,forTarget:I,targetUid:V,initialAttribute:Ce,shouldAddComponentToData:Oe})},nt=({attributeToSet:h,forTarget:I,targetUid:V,initialAttribute:me})=>{t({type:C.A,attributeToSet:h,forTarget:I,targetUid:V,initialAttribute:me})},Ke=({attributeToSet:h,forTarget:I,targetUid:V,initialAttribute:me})=>{t({type:C.E,attributeToSet:h,forTarget:I,targetUid:V,initialAttribute:me})},st=(h,I)=>{t({type:C.u,dynamicZoneTarget:h,componentsToAdd:I})},Qt=(h,I,V,me,Ce=!1)=>{const Oe=I==="contentType"?C.z:C.B;t({type:Oe,data:h,componentCategory:me,schemaType:I,uid:V,shouldAddComponentToData:Ce})},jt=(h,I)=>{t({type:C.C,dynamicZoneTarget:h,newComponents:I})},Xt=(h,I,V="")=>{const me=h==="components"?C.F:C.H;h==="contentType"&&M("willDeleteFieldOfContentType"),t({type:me,mainDataKey:h,attributeToRemoveName:I,componentUid:V})},Jt=async h=>{try{const I=`/${C.p}/component-categories/${h}`,V=window.confirm(W({id:c("popUpWarning.bodyMessage.category.delete")}));w(),V&&(g?.(),await te(I),await mt(!0),f?.(),await fe())}catch(I){console.error({err:I}),p({type:"warning",message:{id:"notification.error"}})}finally{f?.()}},qt=async()=>{try{const h=`/${C.p}/${E}/${ye}`,I=O(d,[Ge,"isTemporary"],!1),V=window.confirm(W({id:c(`popUpWarning.bodyMessage.${de?"contentType":"component"}.delete`)}));if(w(),V){if(I){t({type:C.D});return}g?.(),await te(h),await mt(!0),await f?.(),await fe()}}catch(h){console.error({err:h}),p({type:"warning",message:{id:"notification.error"}})}finally{f?.()}},ve=async(h,I)=>{try{const V=`/${C.p}/component-categories/${h}`;w(),g?.(),await G(V,I),await mt(!0),await f?.(),await fe()}catch(V){console.error({err:V}),p({type:"warning",message:{id:"notification.error"}})}finally{f?.()}},_t=()=>{const h=Object.assign({},s,d.components);if(!de){const V=O(d,"component",{});Yn(h,O(V,["uid"],""),V)}const I=ud(h);return(0,C.q)(I)},en=()=>{const h=xs(s),I=xs(d.components||{});return(0,C.q)([...I,...h])},tn=(h,I)=>{t({type:C.v,dzName:h,componentToRemoveIndex:I})},$t=()=>{const I=O(de?o:s,ye??"",{schema:{attributes:[]}}),V=(0,C.s)(I.schema.attributes,s),me=dd(I,V,s,de),Ce=O(I,"isTemporary",!1)&&Qi(O(I,"schema.attributes",[]))===0;t({type:C.t,schemaToSet:me,hasJustCreatedSchema:Ce})},Qe=(0,m.useMemo)(()=>{const h=de?o:s;return ye==="create-content-type"?!1:!Object.keys(h).includes(ye||"")&&!r},[s,o,ye,de,r]),pt=(0,m.useMemo)(()=>{const h=Object.keys(o).filter(I=>O(o,[I,"schema","visible"],!0)).sort();return O(h,"0","create-content-type")},[o]);if(Qe)return(0,n.jsx)(Fe.rd,{to:`/plugins/${C.p}/content-types/${pt}`});const Ve=async h=>{try{const I=O(d,[Ge,"isTemporary"],!1),V={components:id(d.components,s,ye)};if(de){const Pe=(x?.apis?.forms).mutateContentTypeSchema({...fs(d.contentType),...h},i.contentType);if(!hd(Pe)){p({type:"warning",message:{id:c("notification.error.dynamiczone-min.validation"),defaultMessage:"At least one component is required in a dynamic zone to be able to save a content type"}});return}V.contentType=Pe,M("willSaveContentType")}else V.component=fs(d.component,!0),M("willSaveComponent");g?.();const me=`/${C.p}/${E}`,Ce=I?me:`${me}/${ye}`;if(I?await Te(Ce,V):await G(Ce,V),await mt(!0),f?.(),I&&(i.contentType?.schema.kind==="collectionType"||i.contentType?.schema.kind==="singleType")&&j("contentTypeBuilder.success"),de){M("didSaveContentType");const Oe=O(V,["contentType","schema","name"],""),Pe=O(i,["contentType","schema","name"],"");!I&&Oe!==Pe&&M("didEditNameOfContentType")}else M("didSaveComponent");await J.current(),t({type:C.U}),await fe()}catch(I){de||M("didNotSaveComponent"),console.error({err:I.response}),p({type:"warning",message:{id:"notification.error"}})}finally{f?.()}},fe=async()=>{await F()},ft=(h,I,V)=>{t({type:C.w,data:h,schemaType:I,uid:V})};return(0,n.jsx)(qn.Provider,{value:{addAttribute:Kt,addCustomFieldAttribute:nt,addCreatedComponentToDynamicZone:st,allComponentsCategories:fd(s,["category"]),changeDynamicZoneComponents:jt,components:s,componentsGroupedByCategory:Ki(s,"category"),componentsThatHaveOtherComponentInTheirAttributes:_t(),contentTypes:o,createSchema:Qt,deleteCategory:Jt,deleteData:qt,editCategory:ve,editCustomFieldAttribute:Ke,isInDevelopmentMode:xe,initialData:i,isInContentTypeView:de,modifiedData:d,nestedComponents:en(),removeAttribute:Xt,removeComponentFromDynamicZone:tn,reservedNames:u,setModifiedData:$t,sortedContentTypesList:ld(o),submitData:Ve,updateSchema:ft},children:l?(0,n.jsx)(N.LoadingIndicatorPage,{}):(0,n.jsxs)(n.Fragment,{children:[e,xe&&(0,n.jsx)(nd,{})]})})},bd=(0,m.memo)(yd),Cs={actionType:null,attributeName:null,attributeType:null,categoryName:null,dynamicZoneTarget:null,forTarget:null,modalType:null,isOpen:!1,showBackLink:!1,kind:null,step:null,targetUid:null,customFieldUid:null},xd=({children:e})=>{const[t,s]=m.useState(Cs),{trackUsage:o}=(0,N.useTracking)(),r=({attributeType:M,customFieldUid:F})=>{s(L=>({...L,actionType:"create",modalType:"customField",attributeType:M,customFieldUid:F}))},l=({attributeType:M,step:F})=>{t.forTarget==="contentType"&&o("didSelectContentTypeFieldType",{type:M}),s(L=>({...L,actionType:"create",modalType:"attribute",step:F,attributeType:M,showBackLink:!0}))},i=({dynamicZoneTarget:M,targetUid:F})=>{s(L=>({...L,dynamicZoneTarget:M,targetUid:F,modalType:"addComponentToDynamicZone",forTarget:"contentType",step:"1",actionType:"edit",isOpen:!0}))},d=({forTarget:M,targetUid:F})=>{s(L=>({...L,actionType:"create",forTarget:M,targetUid:F,modalType:"chooseAttribute",isOpen:!0,showBackLink:!1}))},u=M=>{s(F=>({...F,...M,isOpen:!0}))},p=M=>{s(F=>({...F,categoryName:M,actionType:"edit",modalType:"editCategory",isOpen:!0}))},g=({forTarget:M,targetUid:F,attributeName:L,attributeType:w,customFieldUid:ee})=>{s(he=>({...he,modalType:"customField",customFieldUid:ee,actionType:"edit",forTarget:M,targetUid:F,attributeName:L,attributeType:w,isOpen:!0}))},f=({forTarget:M,targetUid:F,attributeName:L,attributeType:w,step:ee})=>{s(he=>({...he,modalType:"attribute",actionType:"edit",forTarget:M,targetUid:F,attributeName:L,attributeType:w,step:ee,isOpen:!0}))},j=({modalType:M,forTarget:F,targetUid:L,kind:w})=>{s(ee=>({...ee,modalType:M,actionType:"edit",forTarget:F,targetUid:L,kind:w,isOpen:!0}))},A=()=>{s(Cs)},x=({forTarget:M,targetUid:F})=>{s(L=>({...L,forTarget:M,targetUid:F,modalType:"chooseAttribute"}))},$=()=>{s(M=>({...M,attributeType:"component",modalType:"attribute",step:"2"}))},W=({dynamicZoneTarget:M})=>{s(F=>({...F,dynamicZoneTarget:M,modalType:"addComponentToDynamicZone",actionType:"create",step:"1",attributeType:null,attributeName:null}))};return(0,n.jsx)(_n.Provider,{value:{...t,onClickSelectField:l,onClickSelectCustomField:r,onCloseModal:A,onNavigateToChooseAttributeModal:x,onNavigateToAddCompoToDZModal:W,onOpenModalAddComponentsToDZ:i,onNavigateToCreateComponentStep2:$,onOpenModalAddField:d,onOpenModalCreateSchema:u,onOpenModalEditCategory:p,onOpenModalEditField:f,onOpenModalEditCustomField:g,onOpenModalEditSchema:j,setFormModalNavigationState:s},children:e})},vd=(0,m.lazy)(()=>a.e(3358).then(a.bind(a,30977))),Cd=()=>{const{url:e}=(0,Fe.W5)();return(0,n.jsx)(m.Suspense,{fallback:(0,n.jsx)(N.LoadingIndicatorPage,{}),children:(0,n.jsx)(Fe.dO,{children:(0,n.jsx)(Fe.qh,{path:`${e}/:componentUid`,children:(0,n.jsx)(vd,{})})})})},As=(0,m.lazy)(()=>a.e(3358).then(a.bind(a,30977))),Ad=Object.freeze(Object.defineProperty({__proto__:null,default:()=>{const{formatMessage:e}=(0,K.A)(),t=e({id:`${C.p}.plugin.name`,defaultMessage:"Content Types Builder"}),{startSection:s}=(0,N.useGuidedTour)(),o=(0,m.useRef)(s);return(0,m.useEffect)(()=>{o.current&&o.current("contentTypeBuilder")},[]),(0,n.jsxs)(N.CheckPagePermissions,{permissions:C.P.main,children:[(0,n.jsx)(Ws.m,{title:t}),(0,n.jsx)(xd,{children:(0,n.jsx)(bd,{children:(0,n.jsx)(Us.P,{sideNav:(0,n.jsx)(sl,{}),children:(0,n.jsx)(m.Suspense,{fallback:(0,n.jsx)(N.LoadingIndicatorPage,{}),children:(0,n.jsxs)(Fe.dO,{children:[(0,n.jsx)(Fe.qh,{path:`/plugins/${C.p}/content-types/create-content-type`,component:As}),(0,n.jsx)(Fe.qh,{path:`/plugins/${C.p}/content-types/:uid`,component:As}),(0,n.jsx)(Fe.qh,{path:`/plugins/${C.p}/component-categories/:categoryUid`,component:Cd})]})})})})})]})}},Symbol.toStringTag,{value:"Module"}))}}]);
