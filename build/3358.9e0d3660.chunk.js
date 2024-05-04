"use strict";(self.webpackChunkstrapi_project=self.webpackChunkstrapi_project||[]).push([[3358],{67479:(rt,U,s)=>{s.d(U,{S:()=>B});var t=s(92132),h=s(63891),_=s(44370),X=s(24122),f=s(43242),S=s(57842);const F=(0,h.default)(_.a)`
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
    fill: ${({theme:E})=>E.colors.primary600};
  }
`,k=(0,h.default)(_.a)`
  border-radius: 0 0 ${({theme:E})=>E.borderRadius} ${({theme:E})=>E.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,B=({children:E,icon:G,...N})=>(0,t.jsxs)("div",{children:[(0,t.jsx)(X.c,{}),(0,t.jsx)(k,{as:"button",background:"primary100",padding:5,...N,children:(0,t.jsxs)(f.s,{children:[(0,t.jsx)(F,{"aria-hidden":!0,background:"primary200",children:G}),(0,t.jsx)(_.a,{paddingLeft:3,children:(0,t.jsx)(S.o,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:E})})]})})]})},30977:(rt,U,s)=>{s.r(U),s.d(U,{default:()=>kt});var t=s(92132),h=s(44370),_=s(43242),X=s(27026),f=s(57842),S=s(79318),F=s(70768),k=s(34508),B=s(21270),E=s(69564),G=s(67479),N=s(19106),dt=s(43121),ct=s(32559),d=s(8769),pt=s(98889),I=s(31127),H=s(31708),ht=s(39423),_t=s(95350),gt=s(50350),ut=s(13333),mt=s(95065),C=s(2600),ft=s(412),Y=s(56336),J=s(39404),$=s(54894),w=s(17703),L=s(21272),r=s(49946),x=s(63891),zt=s(14718),Zt=s(51156),Vt=s(48940),Xt=s(77160),Gt=s(21835),wt=s(17024),Qt=s(51187),Ht=s(12083),Yt=s(94710),Jt=s(14311),qt=s(82437),te=s(89102),ee=s(5409),se=s(35336),ne=s(71547),oe=s(58692),ae=s(71210),ie=s(5790),le=s(35223),re=s(45635);const xt=(0,x.default)(h.a)`
  table {
    width: 100%;
    white-space: nowrap;
  }

  thead {
    border-bottom: 1px solid ${({theme:e})=>e.colors.neutral150};

    tr {
      border-top: 0;
    }
  }

  tr {
    border-top: 1px solid ${({theme:e})=>e.colors.neutral150};

    & td,
    & th {
      padding: ${({theme:e})=>e.spaces[4]};
    }

    & td:first-of-type,
    & th:first-of-type {
      padding: 0 ${({theme:e})=>e.spaces[1]};
    }
  }

  th,
  td {
    vertical-align: middle;
    text-align: left;
    color: ${({theme:e})=>e.colors.neutral600};
    outline-offset: -4px;
  }
`,q=x.default.tr`
  &.component-row,
  &.dynamiczone-row {
    position: relative;
    border-top: none !important;

    table tr:first-child {
      border-top: none;
    }

    > td:first-of-type {
      padding: 0 0 0 ${(0,d.pxToRem)(20)};
      position: relative;

      &::before {
        content: '';
        width: ${(0,d.pxToRem)(4)};
        height: calc(100% - 40px);
        position: absolute;
        top: -7px;
        left: 1.625rem;
        border-radius: 4px;

        ${({isFromDynamicZone:e,isChildOfDynamicZone:n,theme:o})=>n?`background-color: ${o.colors.primary200};`:e?`background-color: ${o.colors.primary200};`:`background: ${o.colors.neutral150};`}
      }
    }
  }

  &.dynamiczone-row > td:first-of-type {
    padding: 0;
  }
`,tt=({customRowComponent:e,component:n,isFromDynamicZone:o=!1,isNestedInDZComponent:a=!1,firstLoopComponentUid:c})=>{const{modifiedData:l}=(0,r.u)(),{schema:{attributes:g}}=C(l,["components",n],{schema:{attributes:[]}});return(0,t.jsx)(q,{isChildOfDynamicZone:o,className:"component-row",children:(0,t.jsx)("td",{colSpan:12,children:(0,t.jsx)(st,{customRowComponent:e,items:g,targetUid:n,firstLoopComponentUid:c||n,editTarget:"components",isFromDynamicZone:o,isNestedInDZComponent:a,isSub:!0,secondLoopComponentUid:c?n:null})})})},Et=({isActive:e=!1,icon:n="cube"})=>(0,t.jsx)(_.s,{alignItems:"center",background:e?"primary200":"neutral200",justifyContent:"center",height:8,width:8,borderRadius:"50%",children:(0,t.jsx)(X.I,{as:r.C[n]||r.C.cube,height:5,width:5})}),et=(0,x.default)(h.a)`
  position: absolute;
  display: none;
  top: 5px;
  right: ${(0,d.pxToRem)(8)};

  svg {
    width: ${(0,d.pxToRem)(10)};
    height: ${(0,d.pxToRem)(10)};

    path {
      fill: ${({theme:e})=>e.colors.primary600};
    }
  }
`,Mt=(0,x.default)(_.s)`
  width: ${(0,d.pxToRem)(140)};
  height: ${(0,d.pxToRem)(80)};
  position: relative;
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  background: ${({theme:e})=>e.colors.neutral100};
  border-radius: ${({theme:e})=>e.borderRadius};
  max-width: 100%;

  &.active,
  &:focus,
  &:hover {
    border: 1px solid ${({theme:e})=>e.colors.primary200};
    background: ${({theme:e})=>e.colors.primary100};

    ${et} {
      display: block;
    }

    ${f.o} {
      color: ${({theme:e})=>e.colors.primary600};
    }

    /* > ComponentIcon */
    > div:first-child {
      background: ${({theme:e})=>e.colors.primary200};
      color: ${({theme:e})=>e.colors.primary600};

      svg {
        path {
          fill: ${({theme:e})=>e.colors.primary600};
        }
      }
    }
  }
`,yt=({component:e,dzName:n,index:o,isActive:a=!1,isInDevelopmentMode:c=!1,onClick:l})=>{const{modifiedData:g,removeComponentFromDynamicZone:D}=(0,r.u)(),{schema:{icon:y,displayName:M}}=C(g,["components",e],{schema:{}}),u=i=>{i.stopPropagation(),D(n,o)};return(0,t.jsxs)(Mt,{alignItems:"center",direction:"column",className:a?"active":"",borderRadius:"borderRadius",justifyContent:"center",paddingLeft:4,paddingRight:4,shrink:0,onClick:l,role:"tab",tabIndex:a?0:-1,cursor:"pointer","aria-selected":a,"aria-controls":`dz-${n}-panel-${o}`,id:`dz-${n}-tab-${o}`,children:[(0,t.jsx)(Et,{icon:y,isActive:a}),(0,t.jsx)(h.a,{marginTop:1,maxWidth:"100%",children:(0,t.jsx)(f.o,{variant:"pi",fontWeight:"bold",ellipsis:!0,children:M})}),c&&(0,t.jsx)(et,{as:"button",onClick:u,children:(0,t.jsx)(pt.A,{})})]})},jt=(0,x.default)(I.A)`
  width: ${(0,d.pxToRem)(32)};
  height: ${(0,d.pxToRem)(32)};
  padding: ${(0,d.pxToRem)(9)};
  border-radius: ${(0,d.pxToRem)(64)};
  background: ${({theme:e})=>e.colors.primary100};
  path {
    fill: ${({theme:e})=>e.colors.primary600};
  }
`,Ct=(0,x.default)(h.a)`
  height: ${(0,d.pxToRem)(90)};
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
`,Dt=(0,x.default)(_.s)`
  width: 100%;
  overflow-x: auto;
`,Tt=(0,x.default)(h.a)`
  padding-top: ${(0,d.pxToRem)(90)};
`,Pt=(0,x.default)(_.s)`
  flex-shrink: 0;
  width: ${(0,d.pxToRem)(140)};
  height: ${(0,d.pxToRem)(80)};
  justify-content: center;
  align-items: center;
`,Ot=({customRowComponent:e,components:n=[],addComponent:o,name:a,targetUid:c})=>{const{isInDevelopmentMode:l}=(0,r.u)(),[g,D]=(0,L.useState)(0),{formatMessage:y}=(0,$.A)(),M=i=>{g!==i&&D(i)},u=()=>{o(a)};return(0,t.jsx)(q,{className:"dynamiczone-row",isFromDynamicZone:!0,children:(0,t.jsxs)("td",{colSpan:12,children:[(0,t.jsx)(Ct,{paddingLeft:8,children:(0,t.jsxs)(Dt,{gap:2,children:[l&&(0,t.jsx)("button",{type:"button",onClick:u,children:(0,t.jsxs)(Pt,{direction:"column",alignItems:"stretch",gap:1,children:[(0,t.jsx)(jt,{}),(0,t.jsx)(f.o,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:y({id:(0,r.g)("button.component.add"),defaultMessage:"Add a component"})})]})}),(0,t.jsx)(_.s,{role:"tablist",gap:2,children:n.map((i,p)=>(0,t.jsx)(yt,{dzName:a||"",index:p,component:i,isActive:g===p,isInDevelopmentMode:l,onClick:()=>M(p)},i))})]})}),(0,t.jsx)(Tt,{children:n.map((i,p)=>{const m={customRowComponent:e,component:i};return(0,t.jsx)(h.a,{id:`dz-${a}-panel-${p}`,role:"tabpanel","aria-labelledby":`dz-${a}-tab-${p}`,style:{display:g===p?"block":"none"},children:(0,t.jsx)("table",{children:(0,t.jsx)("tbody",{children:(0,L.createElement)(tt,{...m,isFromDynamicZone:!0,component:c,key:i})})})},i)})})]})})},vt=(0,x.default)(h.a)`
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
    fill: ${({theme:e,color:n})=>e.colors[`${n}600`]};
  }
`,At=(0,x.default)(h.a)`
  border-radius: 0 0 ${({theme:e})=>e.borderRadius} ${({theme:e})=>e.borderRadius};
  display: block;
  width: 100%;
  border: none;
  position: relative;
  left: -0.25rem;
`,Rt=({children:e,icon:n,color:o,...a})=>(0,t.jsx)(At,{paddingBottom:4,paddingTop:4,as:"button",type:"button",...a,children:(0,t.jsxs)(_.s,{children:[(0,t.jsx)(vt,{color:o,"aria-hidden":!0,background:`${o}200`,children:n}),(0,t.jsx)(h.a,{paddingLeft:3,children:(0,t.jsx)(f.o,{variant:"pi",fontWeight:"bold",textColor:`${o}600`,children:e})})]})}),st=({addComponentToDZ:e,customRowComponent:n,editTarget:o,firstLoopComponentUid:a,isFromDynamicZone:c=!1,isMain:l=!1,isNestedInDZComponent:g=!1,isSub:D=!1,items:y=[],secondLoopComponentUid:M,targetUid:u})=>{const{formatMessage:i}=(0,$.A)(),{trackUsage:p}=(0,d.useTracking)(),{isInDevelopmentMode:m,modifiedData:R,isInContentTypeView:P}=(0,r.u)(),{onOpenModalAddField:v}=(0,r.a)(),T=()=>{p("hasClickedCTBAddFieldBanner"),v({forTarget:o,targetUid:u})};return u?y.length===0&&l?(0,t.jsxs)(S.X,{colCount:2,rowCount:2,children:[(0,t.jsx)(F.d,{children:(0,t.jsxs)(k.Tr,{children:[(0,t.jsx)(B.Th,{children:(0,t.jsx)(f.o,{variant:"sigma",textColor:"neutral600",children:i({id:"global.name",defaultMessage:"Name"})})}),(0,t.jsx)(B.Th,{children:(0,t.jsx)(f.o,{variant:"sigma",textColor:"neutral600",children:i({id:"global.type",defaultMessage:"Type"})})})]})}),(0,t.jsx)(d.EmptyBodyTable,{action:(0,t.jsx)(E.$,{onClick:T,size:"L",startIcon:(0,t.jsx)(I.A,{}),variant:"secondary",children:i({id:(0,r.g)("table.button.no-fields"),defaultMessage:"Add new field"})}),colSpan:2,content:P?{id:(0,r.g)("table.content.no-fields.collection-type"),defaultMessage:"Add your first field to this Collection-Type"}:{id:(0,r.g)("table.content.no-fields.component"),defaultMessage:"Add your first field to this component"}})]}):(0,t.jsxs)(xt,{children:[(0,t.jsx)(h.a,{paddingLeft:6,paddingRight:l?6:0,...l&&{style:{overflowX:"auto"}},children:(0,t.jsxs)("table",{children:[l&&(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:(0,t.jsx)(f.o,{variant:"sigma",textColor:"neutral600",children:i({id:"global.name",defaultMessage:"Name"})})}),(0,t.jsx)("th",{colSpan:2,children:(0,t.jsx)(f.o,{variant:"sigma",textColor:"neutral600",children:i({id:"global.type",defaultMessage:"Type"})})})]})}),(0,t.jsx)("tbody",{children:y.map(O=>{const{type:b}=O,W=n;return(0,t.jsxs)(L.Fragment,{children:[(0,t.jsx)(W,{...O,isNestedInDZComponent:g,targetUid:u,editTarget:o,firstLoopComponentUid:a,isFromDynamicZone:c,secondLoopComponentUid:M}),b==="component"&&(0,t.jsx)(tt,{...O,customRowComponent:n,targetUid:u,isNestedInDZComponent:c,editTarget:o,firstLoopComponentUid:a}),b==="dynamiczone"&&(0,t.jsx)(Ot,{...O,customRowComponent:n,addComponent:e,targetUid:u})]},O.name)})})]})}),l&&m&&(0,t.jsx)(G.S,{icon:(0,t.jsx)(I.A,{}),onClick:T,children:i({id:(0,r.g)(`form.button.add.field.to.${R.contentType?R.contentType.schema.kind:o||"collectionType"}`),defaultMessage:"Add another field"})}),D&&m&&!c&&(0,t.jsx)(Rt,{icon:(0,t.jsx)(I.A,{}),onClick:T,color:c?"primary":"neutral",children:i({id:(0,r.g)("form.button.add.field.to.component"),defaultMessage:"Add another field"})})]}):(0,t.jsxs)(S.X,{colCount:2,rowCount:2,children:[(0,t.jsx)(F.d,{children:(0,t.jsxs)(k.Tr,{children:[(0,t.jsx)(B.Th,{children:(0,t.jsx)(f.o,{variant:"sigma",textColor:"neutral600",children:i({id:"global.name",defaultMessage:"Name"})})}),(0,t.jsx)(B.Th,{children:(0,t.jsx)(f.o,{variant:"sigma",textColor:"neutral600",children:i({id:"global.type",defaultMessage:"Type"})})})]})}),(0,t.jsx)(d.EmptyBodyTable,{colSpan:2,content:{id:(0,r.g)("table.content.create-first-content-type"),defaultMessage:"Create your first Collection-Type"}})]})},bt=(0,x.default)(h.a)`
  position: absolute;
  left: -1.125rem;
  top: 0px;

  &:before {
    content: '';
    width: ${4/16}rem;
    height: ${12/16}rem;
    background: ${({theme:e,color:n})=>e.colors[n]};
    display: block;
  }
`,Bt=x.default.svg`
  position: relative;
  flex-shrink: 0;
  transform: translate(-0.5px, -1px);

  * {
    fill: ${({theme:e,color:n})=>e.colors[n]};
  }
`,$t=e=>(0,t.jsx)(bt,{children:(0,t.jsx)(Bt,{width:"20",height:"23",viewBox:"0 0 20 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,t.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.02477 14.7513C8.65865 17.0594 11.6046 18.6059 17.5596 18.8856C18.6836 18.9384 19.5976 19.8435 19.5976 20.9688V20.9688C19.5976 22.0941 18.6841 23.0125 17.5599 22.9643C10.9409 22.6805 6.454 20.9387 3.75496 17.1258C0.937988 13.1464 0.486328 7.39309 0.486328 0.593262H4.50974C4.50974 7.54693 5.06394 11.9813 7.02477 14.7513Z"})})}),It=({type:e,customField:n=null,repeatable:o=!1})=>{const{formatMessage:a}=(0,$.A)();let c=e;return["integer","biginteger","float","decimal"].includes(e)?c="number":["string"].includes(e)&&(c="text"),n?(0,t.jsx)(f.o,{children:a({id:(0,r.g)("attribute.customField"),defaultMessage:"Custom field"})}):(0,t.jsxs)(f.o,{children:[a({id:(0,r.g)(`attribute.${c}`),defaultMessage:e}),"\xA0",o&&a({id:(0,r.g)("component.repeatable"),defaultMessage:"(repeatable)"})]})},Lt=({content:e})=>(0,t.jsx)(t.Fragment,{children:J(e)}),Wt=(0,x.default)(h.a)`
  position: relative;
`,Kt=(0,L.memo)(({configurable:e=!0,customField:n=null,editTarget:o,firstLoopComponentUid:a=null,isFromDynamicZone:c=!1,name:l,onClick:g,relation:D="",repeatable:y=!1,secondLoopComponentUid:M=null,target:u=null,targetUid:i=null,type:p})=>{const{contentTypes:m,isInDevelopmentMode:R,removeAttribute:P}=(0,r.u)(),{formatMessage:v}=(0,$.A)(),T=p==="relation"&&D.includes("morph"),O=["integer","biginteger","float","decimal"].includes(p)?"number":p,b=C(m,[u],{}),W=C(b,["schema","displayName"],""),K=C(b,"plugin"),Q=u?"relation":O,z=()=>{T||e!==!1&&g(o,M||a||i,l,p,n)};let A;return M&&a?A=2:a?A=1:A=0,(0,t.jsxs)(Wt,{as:"tr",...(0,d.onRowClick)({fn:z,condition:R&&e&&!T}),children:[(0,t.jsxs)("td",{style:{position:"relative"},children:[A!==0&&(0,t.jsx)($t,{color:c?"primary200":"neutral150"}),(0,t.jsxs)(_.s,{paddingLeft:2,gap:4,children:[(0,t.jsx)(r.A,{type:Q,customField:n}),(0,t.jsx)(f.o,{fontWeight:"bold",children:l})]})]}),(0,t.jsx)("td",{children:u?(0,t.jsxs)(f.o,{children:[v({id:(0,r.g)(`modelPage.attribute.${T?"relation-polymorphic":"relationWith"}`),defaultMessage:"Relation with"}),"\xA0",(0,t.jsxs)("span",{style:{fontStyle:"italic"},children:[(0,t.jsx)(Lt,{content:W}),"\xA0",K&&`(${v({id:(0,r.g)("from"),defaultMessage:"from"})}: ${K})`]})]}):(0,t.jsx)(It,{type:p,customField:n,repeatable:y})}),(0,t.jsx)("td",{children:R?(0,t.jsx)(_.s,{justifyContent:"flex-end",...d.stopPropagation,children:e?(0,t.jsxs)(_.s,{gap:1,children:[!T&&(0,t.jsx)(N.K,{onClick:z,label:`${v({id:"app.utils.edit",defaultMessage:"Edit"})} ${l}`,noBorder:!0,icon:(0,t.jsx)(H.A,{})}),(0,t.jsx)(N.K,{onClick:Z=>{Z.stopPropagation(),P(o,l,M||a||"")},label:`${v({id:"global.delete",defaultMessage:"Delete"})} ${l}`,noBorder:!0,icon:(0,t.jsx)(ht.A,{})})]}):(0,t.jsx)(_t.A,{})}):(0,t.jsx)(h.a,{height:(0,d.pxToRem)(32)})})]})}),Ut=e=>{let n;switch(e){case"date":case"datetime":case"time":case"timestamp":n="date";break;case"integer":case"biginteger":case"decimal":case"float":n="number";break;case"string":case"text":n="text";break;case"":n="relation";break;default:n=e}return n},St={collectionTypesConfigurations:[{action:"plugin::content-manager.collection-types.configure-view",subject:null}],componentsConfigurations:[{action:"plugin::content-manager.components.configure-layout",subject:null}],singleTypesConfigurations:[{action:"plugin::content-manager.single-types.configure-view",subject:null}]},Ft=(0,L.memo)(({disabled:e,isTemporary:n=!1,isInContentTypeView:o=!0,contentTypeKind:a="collectionType",targetUid:c=""})=>{const{formatMessage:l}=(0,$.A)(),{push:g}=(0,w.W6)(),{collectionTypesConfigurations:D,componentsConfigurations:y,singleTypesConfigurations:M}=St,u=l({id:"content-type-builder.form.button.configure-view",defaultMessage:"Configure the view"});let i=D;const p=()=>(n||g(o?`/content-manager/collection-types/${c}/configurations/edit`:`/content-manager/components/${c}/configurations/edit`),!1);return o&&a==="singleType"&&(i=M),o||(i=y),(0,t.jsx)(d.CheckPermissions,{permissions:i,children:(0,t.jsx)(E.$,{startIcon:(0,t.jsx)(gt.A,{}),variant:"tertiary",onClick:p,disabled:n||e,children:u})})}),kt=()=>{const{initialData:e,modifiedData:n,isInDevelopmentMode:o,isInContentTypeView:a,submitData:c}=(0,r.u)(),{formatMessage:l}=(0,$.A)(),{trackUsage:g}=(0,d.useTracking)(),D=(0,w.W5)("/plugins/content-type-builder/:kind/:currentUID"),{onOpenModalAddComponentsToDZ:y,onOpenModalAddField:M,onOpenModalEditField:u,onOpenModalEditSchema:i,onOpenModalEditCustomField:p}=(0,r.a)(),m=a?"contentType":"component",R=[m,"schema","attributes"],P=C(n,[m,"uid"]),v=C(n,[m,"isTemporary"],!1),T=C(n,[m,"schema","kind"],null),O=C(n,R,[]),b=ft(e,[m,"plugin"]),W=!Y(n,e),K=a?"contentType":"component",Q=j=>{y({dynamicZoneTarget:j,targetUid:P})},z=async(j,nt,ot,at,it)=>{const lt=Ut(at);it?p({forTarget:j,targetUid:nt,attributeName:ot,attributeType:lt,customFieldUid:it}):u({forTarget:j,targetUid:nt,attributeName:ot,attributeType:lt,step:at==="component"?"2":null})};let A=C(n,[m,"schema","displayName"],"");const Z=C(n,[m,"schema","kind"],""),V=D?.params.currentUID==="create-content-type";!A&&V&&(A=l({id:(0,r.g)("button.model.create"),defaultMessage:"Create new collection type"}));const Nt=()=>{const j=Z||m;j==="collectionType"&&g("willEditNameOfContentType"),j==="singleType"&&g("willEditNameOfSingleType"),i({modalType:m,forTarget:m,targetUid:P,kind:j})};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(w.XG,{message:j=>j.hash==="#back"?!1:l({id:(0,r.g)("prompt.unsaved")}),when:W}),(0,t.jsx)(dt.Q,{id:"title",primaryAction:o&&(0,t.jsxs)(_.s,{gap:2,children:[!V&&(0,t.jsx)(E.$,{startIcon:(0,t.jsx)(I.A,{}),variant:"secondary",onClick:()=>{M({forTarget:K,targetUid:P})},children:l({id:(0,r.g)("button.attributes.add.another"),defaultMessage:"Add another field"})}),(0,t.jsx)(E.$,{startIcon:(0,t.jsx)(ut.A,{}),onClick:async()=>await c(),type:"submit",disabled:Y(n,e),children:l({id:"global.save",defaultMessage:"Save"})})]}),secondaryAction:o&&!b&&!V&&(0,t.jsx)(E.$,{startIcon:(0,t.jsx)(H.A,{}),variant:"tertiary",onClick:Nt,children:l({id:"app.utils.edit",defaultMessage:"Edit"})}),title:J(A),subtitle:l({id:(0,r.g)("listView.headerLayout.description"),defaultMessage:"Build the data architecture of your content"}),navigationAction:(0,t.jsx)(d.Link,{startIcon:(0,t.jsx)(mt.A,{}),to:"/plugins/content-type-builder/",children:l({id:"global.back",defaultMessage:"Back"})})}),(0,t.jsx)(ct.s,{children:(0,t.jsxs)(_.s,{direction:"column",alignItems:"stretch",gap:4,children:[(0,t.jsx)(_.s,{justifyContent:"flex-end",children:(0,t.jsx)(_.s,{gap:2,children:(0,t.jsx)(Ft,{targetUid:P,isTemporary:v,isInContentTypeView:a,contentTypeKind:T,disabled:V},"link-to-cm-settings-view")})}),(0,t.jsx)(h.a,{background:"neutral0",shadow:"filterShadow",hasRadius:!0,children:(0,t.jsx)(st,{items:O,customRowComponent:j=>(0,t.jsx)(Kt,{...j,onClick:z}),addComponentToDZ:Q,targetUid:P,editTarget:K,isMain:!0})})]})})]})}}}]);
