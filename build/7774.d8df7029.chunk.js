(self.webpackChunkstrapi_project=self.webpackChunkstrapi_project||[]).push([[7774],{60759:(M,T,s)=>{var e=s(48143),d=s(83289),n=s(96685),u=s(87864),l=s(52689),m=s(37879),c=200;function p(O,j,P,y){var z=-1,K=d,$=!0,C=O.length,B=[],H=j.length;if(!C)return B;P&&(j=u(j,l(P))),y?(K=n,$=!1):j.length>=c&&(K=m,$=!1,j=new e(j));e:for(;++z<C;){var b=O[z],I=P==null?b:P(b);if(b=y||b!==0?b:0,$&&I===I){for(var Q=H;Q--;)if(j[Q]===I)continue e;B.push(b)}else K(j,I,y)||B.push(b)}return B}M.exports=p},97449:(M,T,s)=>{var e=s(85373),d=s(75821),n=d(e);M.exports=n},29884:(M,T,s)=>{var e=s(97449),d=s(91522);function n(u,l){var m=-1,c=d(u)?Array(u.length):[];return e(u,function(p,O,j){c[++m]=l(p,O,j)}),c}M.exports=n},4191:(M,T,s)=>{var e=s(87864),d=s(86386),n=s(45353),u=s(29884),l=s(74565),m=s(52689),c=s(48126),p=s(82388),O=s(82261);function j(P,y,z){y.length?y=e(y,function(C){return O(C)?function(B){return d(B,C.length===1?C[0]:C)}:C}):y=[p];var K=-1;y=e(y,m(n));var $=u(P,function(C,B,H){var b=e(y,function(I){return I(C)});return{criteria:b,index:++K,value:C}});return l($,function(C,B){return c(C,B,z)})}M.exports=j},74565:M=>{function T(s,e){var d=s.length;for(s.sort(e);d--;)s[d]=s[d].value;return s}M.exports=T},64958:(M,T,s)=>{var e=s(91662);function d(n,u){if(n!==u){var l=n!==void 0,m=n===null,c=n===n,p=e(n),O=u!==void 0,j=u===null,P=u===u,y=e(u);if(!j&&!y&&!p&&n>u||p&&O&&P&&!j&&!y||m&&O&&P||!l&&P||!c)return 1;if(!m&&!p&&!y&&n<u||y&&l&&c&&!m&&!p||j&&l&&c||!O&&c||!P)return-1}return 0}M.exports=d},48126:(M,T,s)=>{var e=s(64958);function d(n,u,l){for(var m=-1,c=n.criteria,p=u.criteria,O=c.length,j=l.length;++m<O;){var P=e(c[m],p[m]);if(P){if(m>=j)return P;var y=l[m];return P*(y=="desc"?-1:1)}}return n.index-u.index}M.exports=d},75821:(M,T,s)=>{var e=s(91522);function d(n,u){return function(l,m){if(l==null)return l;if(!e(l))return n(l,m);for(var c=l.length,p=u?c:-1,O=Object(l);(u?p--:++p<c)&&m(O[p],p,O)!==!1;);return l}}M.exports=d},34542:(M,T,s)=>{var e=s(87864),d=s(45353),n=s(29884),u=s(82261);function l(m,c){var p=u(m)?e:n;return p(m,d(c,3))}M.exports=l},45635:(M,T,s)=>{var e=s(87212),d=s(4191),n=s(39226),u=s(3956),l=n(function(m,c){if(m==null)return[];var p=c.length;return p>1&&u(m,c[0],c[1])?c=[]:p>2&&u(c[0],c[1],c[2])&&(c=[c[0]]),d(m,e(c,1),[])});M.exports=l},61468:(M,T,s)=>{var e=s(52196);function d(n){var u=n==null?0:n.length;return u?e(n,1,u):[]}M.exports=d},6223:(M,T,s)=>{var e=s(60759),d=s(39226),n=s(56793),u=d(function(l,m){return n(l)?e(l,m):[]});M.exports=u},37774:(M,T,s)=>{"use strict";s.r(T),s.d(T,{default:()=>ds});var e=s(92132),d=s(21272),n=s(2291),u=s(17703),l=s(15824),m=s(94061),c=s(83997),p=s(30893),O=s(4181),j=s(90151),P=s(68074),y=s(98765),z=s(57237),K=s(60888),$=s(44604),C=s(38413),B=s(55356),H=s(85963),b=s(4198),I=s(7537),Q=s(5287),Pe=s(64871),ye=s(25641),ne=s(90361),S=s(33363),De=s(88353),Oe=s(11273),Ae=s(42455),Ce=s(74773),Re=s(35513),ve=s(26127),Le=s(20415),ie=s(54514),Te=s(46270),Be=s(41909),be=s(50612),Ue=s(5194),re=s(61535),W=s(54894),V=s(74930),v=s(33544),Ie=s(39404),ae=s(45635),Y=s(2600),w=s(63891),oe=s(88761),J=s(77965),We=s(6223),Se=s(34542),Ke=s(61468),le=s(48940),$e=s(501),q=s(12083);const de=(0,d.createContext)({}),ce=({children:t,value:i})=>(0,e.jsx)(de.Provider,{value:i,children:t}),ee=()=>(0,d.useContext)(de);ce.propTypes={children:v.node.isRequired,value:v.object.isRequired};function Ne(t){switch(t){case"application":return"Application";case"plugin::content-manager":return"Content manager";case"plugin::content-type-builder":return"Content types builder";case"plugin::documentation":return"Documentation";case"plugin::email":return"Email";case"plugin::i18n":return"i18n";case"plugin::upload":return"Upload";case"plugin::users-permissions":return"Users-permissions";default:return Ie(t.replace("api::","").replace("plugin::",""))}}const Ge=(t,i)=>{const r=Object.keys(i).sort().map(a=>({name:a,isOpen:!1}));return{...t,collapses:r}},ue=(0,w.AH)`
  background: ${t=>t.theme.colors.primary100};
  svg {
    opacity: 1;
  }
`,ze=(0,w.Ay)(m.a)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    opacity: 0;
    path {
      fill: ${t=>t.theme.colors.primary600};
    }
  }

  /* Show active style both on hover and when the action is selected */
  ${t=>t.isActive&&ue}
  &:hover {
    ${ue}
  }
`,Ve=w.Ay.div`
  flex: 1;
  align-self: center;
  border-top: 1px solid ${({theme:t})=>t.colors.neutral150};
`,ge=({subCategory:t})=>{const{formatMessage:i}=(0,W.A)(),{onChange:r,onChangeSelectAll:a,onSelectedAction:h,selectedAction:o,modifiedData:E}=ee(),f=(0,d.useMemo)(()=>Y(E,t.name,{}),[E,t]),x=(0,d.useMemo)(()=>Object.values(f).every(g=>g.enabled===!0),[f]),_=(0,d.useMemo)(()=>Object.values(f).some(g=>g.enabled===!0)&&!x,[f,x]),D=(0,d.useCallback)(({target:{name:g}})=>{a({target:{name:g,value:!x}})},[x,a]),A=(0,d.useCallback)(g=>o===g,[o]);return(0,e.jsxs)(m.a,{children:[(0,e.jsxs)(c.s,{justifyContent:"space-between",alignItems:"center",children:[(0,e.jsx)(m.a,{paddingRight:4,children:(0,e.jsx)(p.o,{variant:"sigma",textColor:"neutral600",children:t.label})}),(0,e.jsx)(Ve,{}),(0,e.jsx)(m.a,{paddingLeft:4,children:(0,e.jsx)(O.S,{name:t.name,value:x,onValueChange:g=>D({target:{name:t.name,value:g}}),indeterminate:_,children:i({id:"app.utils.select-all",defaultMessage:"Select all"})})})]}),(0,e.jsx)(c.s,{paddingTop:6,paddingBottom:6,children:(0,e.jsx)(j.x,{gap:2,style:{flex:1},children:t.actions.map(g=>{const R=`${g.name}.enabled`;return(0,e.jsx)(P.E,{col:6,children:(0,e.jsxs)(ze,{isActive:A(g.name),padding:2,hasRadius:!0,children:[(0,e.jsx)(O.S,{value:Y(E,R,!1),name:R,onValueChange:U=>r({target:{name:R,value:U}}),children:g.label}),(0,e.jsxs)("button",{type:"button",onClick:()=>h(g.name),style:{display:"inline-flex",alignItems:"center"},children:[(0,e.jsx)(y.s,{as:"span",children:i({id:"app.utils.show-bound-route",defaultMessage:"Show bound route for {route}"},{route:g.name})}),(0,e.jsx)(Le.A,{})]})]})},g.name)})})})]})};ge.propTypes={subCategory:v.object.isRequired};const pe=({name:t,permissions:i})=>{const r=(0,d.useMemo)(()=>ae(Object.values(i.controllers).reduce((a,h,o)=>{const E=`${t}.controllers.${Object.keys(i.controllers)[o]}`,f=ae(Object.keys(h).reduce((x,_)=>[...x,{...h[_],label:_,name:`${E}.${_}`}],[]),"label");return[...a,{actions:f,label:Object.keys(i.controllers)[o],name:E}]},[]),"label"),[t,i]);return(0,e.jsx)(m.a,{padding:6,children:r.map(a=>(0,e.jsx)(ge,{subCategory:a},a.name))})};pe.propTypes={name:v.string.isRequired,permissions:v.object.isRequired};const Fe={collapses:[]},ke=(t,i)=>(0,oe.Ay)(t,r=>{switch(i.type){case"TOGGLE_COLLAPSE":{r.collapses=t.collapses.map((a,h)=>h===i.index?{...a,isOpen:!a.isOpen}:{...a,isOpen:!1});break}default:return r}}),He=()=>{const{modifiedData:t}=ee(),{formatMessage:i}=(0,W.A)(),[{collapses:r},a]=(0,d.useReducer)(ke,Fe,o=>Ge(o,t)),h=o=>a({type:"TOGGLE_COLLAPSE",index:o});return(0,e.jsx)(c.s,{direction:"column",alignItems:"stretch",gap:1,children:r.map((o,E)=>(0,e.jsxs)(z.n,{expanded:o.isOpen,onToggle:()=>h(E),variant:E%2===0?"secondary":void 0,children:[(0,e.jsx)(K.P,{title:Ne(o.name),description:i({id:"users-permissions.Plugin.permissions.plugins.description",defaultMessage:"Define all allowed actions for the {name} plugin."},{name:o.name}),variant:E%2?"primary":"secondary"}),(0,e.jsx)($.u,{children:(0,e.jsx)(pe,{permissions:t[o.name],name:o.name})})]},o.name))})},Qe=t=>{switch(t){case"POST":return{text:"success600",border:"success200",background:"success100"};case"GET":return{text:"secondary600",border:"secondary200",background:"secondary100"};case"PUT":return{text:"warning600",border:"warning200",background:"warning100"};case"DELETE":return{text:"danger600",border:"danger200",background:"danger100"};default:return{text:"neutral600",border:"neutral200",background:"neutral100"}}},we=(0,w.Ay)(m.a)`
  margin: -1px;
  border-radius: ${({theme:t})=>t.spaces[1]} 0 0 ${({theme:t})=>t.spaces[1]};
`;function se({route:t}){const{formatMessage:i}=(0,W.A)(),{method:r,handler:a,path:h}=t,o=h?Ke(h.split("/")):[],[E="",f=""]=a?a.split("."):[],x=Qe(t.method);return(0,e.jsxs)(c.s,{direction:"column",alignItems:"stretch",gap:2,children:[(0,e.jsxs)(p.o,{variant:"delta",as:"h3",children:[i({id:"users-permissions.BoundRoute.title",defaultMessage:"Bound route to"}),"\xA0",(0,e.jsx)("span",{children:E}),(0,e.jsxs)(p.o,{variant:"delta",textColor:"primary600",children:[".",f]})]}),(0,e.jsxs)(c.s,{hasRadius:!0,background:"neutral0",borderColor:"neutral200",gap:0,children:[(0,e.jsx)(we,{background:x.background,borderColor:x.border,padding:2,children:(0,e.jsx)(p.o,{fontWeight:"bold",textColor:x.text,children:r})}),(0,e.jsx)(m.a,{paddingLeft:2,paddingRight:2,children:Se(o,_=>(0,e.jsxs)(p.o,{textColor:_.includes(":")?"neutral600":"neutral900",children:["/",_]},_))})]})]})}se.defaultProps={route:{handler:"Nocontroller.error",method:"GET",path:"/there-is-no-path"}},se.propTypes={route:v.shape({handler:v.string,method:v.string,path:v.string})};const Ye=()=>{const{formatMessage:t}=(0,W.A)(),{selectedAction:i,routes:r}=ee(),a=We(i.split("."),"controllers"),h=Y(r,a[0]),o=a.slice(1).join("."),E=J(h)?[]:h.filter(f=>f.handler.endsWith(o));return(0,e.jsx)(P.E,{col:5,background:"neutral150",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,style:{minHeight:"100%"},children:i?(0,e.jsx)(c.s,{direction:"column",alignItems:"stretch",gap:2,children:E.map((f,x)=>(0,e.jsx)(se,{route:f},x))}):(0,e.jsxs)(c.s,{direction:"column",alignItems:"stretch",gap:2,children:[(0,e.jsx)(p.o,{variant:"delta",as:"h3",children:t({id:"users-permissions.Policies.header.title",defaultMessage:"Advanced settings"})}),(0,e.jsx)(p.o,{as:"p",textColor:"neutral600",children:t({id:"users-permissions.Policies.header.hint",defaultMessage:"Select the application's actions or the plugin's actions and click on the cog icon to display the bound route"})})]})})},Xe=(t,i,r)=>({...t,initialData:i,modifiedData:i,routes:r}),Ze={initialData:{},modifiedData:{},routes:{},selectedAction:"",policies:[]},Je=(t,i)=>(0,oe.Ay)(t,r=>{switch(i.type){case"ON_CHANGE":{const a=i.keys.length,h=i.keys[a-1]==="enabled";if(i.value&&h){const o=$e(i.keys,a-1).join(".");r.selectedAction=o}le(r,["modifiedData",...i.keys],i.value);break}case"ON_CHANGE_SELECT_ALL":{const a=["modifiedData",...i.keys],h=Y(t,a,{}),o=Object.keys(h).reduce((E,f)=>(E[f]={...h[f],enabled:i.value},E),{});le(r,a,o);break}case"ON_RESET":{r.modifiedData=t.initialData;break}case"ON_SUBMIT_SUCCEEDED":{r.initialData=t.modifiedData;break}case"SELECT_ACTION":{const{actionToSelect:a}=i;r.selectedAction=a===t.selectedAction?"":a;break}default:return r}}),he=(0,d.forwardRef)(({permissions:t,routes:i},r)=>{const{formatMessage:a}=(0,W.A)(),[h,o]=(0,d.useReducer)(Je,Ze,D=>Xe(D,t,i));(0,d.useImperativeHandle)(r,()=>({getPermissions(){return{permissions:h.modifiedData}},resetForm(){o({type:"ON_RESET"})},setFormAfterSubmit(){o({type:"ON_SUBMIT_SUCCEEDED"})}}));const _={...h,onChange:({target:{name:D,value:A}})=>o({type:"ON_CHANGE",keys:D.split("."),value:A==="empty__string_value"?"":A}),onChangeSelectAll:({target:{name:D,value:A}})=>o({type:"ON_CHANGE_SELECT_ALL",keys:D.split("."),value:A}),onSelectedAction:D=>o({type:"SELECT_ACTION",actionToSelect:D})};return(0,e.jsx)(ce,{value:_,children:(0,e.jsxs)(j.x,{gap:0,shadow:"filterShadow",hasRadius:!0,background:"neutral0",children:[(0,e.jsx)(P.E,{col:7,paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:(0,e.jsxs)(c.s,{direction:"column",alignItems:"stretch",gap:6,children:[(0,e.jsxs)(c.s,{direction:"column",alignItems:"stretch",gap:2,children:[(0,e.jsx)(p.o,{variant:"delta",as:"h2",children:a({id:(0,l.g)("Plugins.header.title"),defaultMessage:"Permissions"})}),(0,e.jsx)(p.o,{as:"p",textColor:"neutral600",children:a({id:(0,l.g)("Plugins.header.description"),defaultMessage:"Only actions bound by a route are listed below."})})]}),(0,e.jsx)(He,{})]})}),(0,e.jsx)(Ye,{})]})})});he.propTypes={permissions:v.object.isRequired,routes:v.object.isRequired};const me=(0,d.memo)(he),Ee=q.Ik().shape({name:q.Yj().required(n.iW.required),description:q.Yj().required(n.iW.required)}),qe=t=>Object.keys(t).reduce((i,r)=>{const a=t[r].controllers,h=Object.keys(a).reduce((o,E)=>(J(a[E])||(o[E]=a[E]),o),{});return J(h)||(i[r]={controllers:h}),i},{}),xe=()=>{const t=(0,n.hN)(),{get:i}=(0,n.ry)(),{formatAPIError:r}=(0,n.wq)(l.g),[{data:a,isLoading:h,error:o,refetch:E},{data:f,isLoading:x,error:_,refetch:D}]=(0,V.useQueries)([{queryKey:["users-permissions","permissions"],async queryFn(){const{data:{permissions:R}}=await i("/users-permissions/permissions");return R}},{queryKey:["users-permissions","routes"],async queryFn(){const{data:{routes:R}}=await i("/users-permissions/routes");return R}}]),A=async()=>{await Promise.all([E(),D()])};(0,d.useEffect)(()=>{o&&t({type:"warning",message:r(o)})},[t,o,r]),(0,d.useEffect)(()=>{_&&t({type:"warning",message:r(_)})},[t,_,r]);const g=h||x;return{permissions:a?qe(a):{},routes:f??{},getData:A,isLoading:g}},es=()=>{const{formatMessage:t}=(0,W.A)(),i=(0,n.hN)(),{goBack:r}=(0,u.W6)(),{lockApp:a,unlockApp:h}=(0,n.MA)(),{isLoading:o,permissions:E,routes:f}=xe(),{trackUsage:x}=(0,n.z1)(),_=d.useRef(),{post:D}=(0,n.ry)(),A=(0,V.useMutation)(R=>D("/users-permissions/roles",R),{onError(){i({type:"warning",message:{id:"notification.error",defaultMessage:"An error occurred"}})},onSuccess(){x("didCreateRole"),i({type:"success",message:{id:(0,l.g)("Settings.roles.created"),defaultMessage:"Role created"}}),r()}}),g=async R=>{a();const U=_.current.getPermissions();await A.mutate({...R,...U,users:[]}),h()};return(0,e.jsxs)(C.g,{children:[(0,e.jsx)(n.x7,{name:"Roles"}),(0,e.jsx)(re.l1,{enableReinitialize:!0,initialValues:{name:"",description:""},onSubmit:g,validationSchema:Ee,children:({handleSubmit:R,values:U,handleChange:F,errors:L})=>(0,e.jsxs)(n.lV,{noValidate:!0,onSubmit:R,children:[(0,e.jsx)(B.Q,{primaryAction:!o&&(0,e.jsx)(H.$,{type:"submit",loading:A.isLoading,startIcon:(0,e.jsx)(ie.A,{}),children:t({id:"global.save",defaultMessage:"Save"})}),title:t({id:"Settings.roles.create.title",defaultMessage:"Create a role"}),subtitle:t({id:"Settings.roles.create.description",defaultMessage:"Define the rights given to the role"})}),(0,e.jsx)(b.s,{children:(0,e.jsxs)(c.s,{background:"neutral0",direction:"column",alignItems:"stretch",gap:7,hasRadius:!0,paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,shadow:"filterShadow",children:[(0,e.jsxs)(c.s,{direction:"column",alignItems:"stretch",children:[(0,e.jsx)(p.o,{variant:"delta",as:"h2",children:t({id:(0,l.g)("EditPage.form.roles"),defaultMessage:"Role details"})}),(0,e.jsxs)(j.x,{gap:4,children:[(0,e.jsx)(P.E,{col:6,children:(0,e.jsx)(I.k,{name:"name",value:U.name||"",onChange:F,label:t({id:"global.name",defaultMessage:"Name"}),error:L?.name?t({id:L.name,defaultMessage:"Name is required"}):!1,required:!0})}),(0,e.jsx)(P.E,{col:6,children:(0,e.jsx)(Q.T,{id:"description",value:U.description||"",onChange:F,label:t({id:"global.description",defaultMessage:"Description"}),error:L?.description?t({id:L.description,defaultMessage:"Description is required"}):!1,required:!0})})]})]}),!o&&(0,e.jsx)(me,{ref:_,permissions:E,routes:f})]})})]})})]})},ss=()=>(0,e.jsx)(n.kz,{permissions:l.P.createRole,children:(0,e.jsx)(es,{})}),ts=()=>{const{formatMessage:t}=(0,W.A)(),i=(0,n.hN)(),{lockApp:r,unlockApp:a}=(0,n.MA)(),{params:{id:h}}=(0,u.W5)("/settings/users-permissions/roles/:id"),{get:o}=(0,n.ry)(),{isLoading:E,routes:f}=xe(),{data:x,isLoading:_,refetch:D}=(0,V.useQuery)(["users-permissions","role",h],async()=>{const{data:{role:L}}=await o(`/users-permissions/roles/${h}`);return L}),A=d.useRef(),{put:g}=(0,n.ry)(),{formatAPIError:R}=(0,n.wq)(),U=(0,V.useMutation)(L=>g(`/users-permissions/roles/${h}`,L),{onError(L){i({type:"warning",message:R(L)})},async onSuccess(){i({type:"success",message:{id:(0,l.g)("Settings.roles.created"),defaultMessage:"Role edited"}}),await D()}}),F=async L=>{r();const N=A.current.getPermissions();await U.mutate({...L,...N,users:[]}),a()};return _?(0,e.jsx)(n.Bl,{}):(0,e.jsxs)(C.g,{children:[(0,e.jsx)(n.x7,{name:"Roles"}),(0,e.jsx)(re.l1,{enableReinitialize:!0,initialValues:{name:x.name,description:x.description},onSubmit:F,validationSchema:Ee,children:({handleSubmit:L,values:N,handleChange:X,errors:k})=>(0,e.jsxs)(n.lV,{noValidate:!0,onSubmit:L,children:[(0,e.jsx)(B.Q,{primaryAction:!E&&(0,e.jsx)(H.$,{disabled:x.code==="strapi-super-admin",type:"submit",loading:U.isLoading,startIcon:(0,e.jsx)(ie.A,{}),children:t({id:"global.save",defaultMessage:"Save"})}),title:x.name,subtitle:x.description,navigationAction:(0,e.jsx)(n.N_,{startIcon:(0,e.jsx)(Te.A,{}),to:"/settings/users-permissions/roles",children:t({id:"global.back",defaultMessage:"Back"})})}),(0,e.jsx)(b.s,{children:(0,e.jsxs)(c.s,{background:"neutral0",direction:"column",alignItems:"stretch",gap:7,hasRadius:!0,paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,shadow:"filterShadow",children:[(0,e.jsxs)(c.s,{direction:"column",alignItems:"stretch",gap:4,children:[(0,e.jsx)(p.o,{variant:"delta",as:"h2",children:t({id:(0,l.g)("EditPage.form.roles"),defaultMessage:"Role details"})}),(0,e.jsxs)(j.x,{gap:4,children:[(0,e.jsx)(P.E,{col:6,children:(0,e.jsx)(I.k,{name:"name",value:N.name||"",onChange:X,label:t({id:"global.name",defaultMessage:"Name"}),error:k?.name?t({id:k.name,defaultMessage:"Name is required"}):!1,required:!0})}),(0,e.jsx)(P.E,{col:6,children:(0,e.jsx)(Q.T,{id:"description",value:N.description||"",onChange:X,label:t({id:"global.description",defaultMessage:"Description"}),error:k?.description?t({id:k.description,defaultMessage:"Description is required"}):!1,required:!0})})]})]}),!E&&(0,e.jsx)(me,{ref:A,permissions:x.permissions,routes:f})]})})]})})]})},ns=()=>(0,e.jsx)(n.kz,{permissions:l.P.updateRole,children:(0,e.jsx)(ts,{})}),is=(0,w.Ay)(Pe.N)`
  align-items: center;
  height: ${(0,n.a8)(32)};
  display: flex;
  justify-content: center;
  padding: ${({theme:t})=>`${t.spaces[2]}}`};
  width: ${(0,n.a8)(32)};

  svg {
    height: ${(0,n.a8)(12)};
    width: ${(0,n.a8)(12)};

    path {
      fill: ${({theme:t})=>t.colors.neutral500};
    }
  }

  &:hover,
  &:focus {
    svg {
      path {
        fill: ${({theme:t})=>t.colors.neutral800};
      }
    }
  }
`,te=({sortedRoles:t,canDelete:i,permissions:r,setRoleToDelete:a,onDelete:h})=>{const{formatMessage:o}=(0,W.A)(),{push:E}=(0,u.W6)(),[f,x]=h,_=g=>i&&!["public","authenticated"].includes(g.type),D=g=>{a(g),x(!f)},A=g=>{E(`/settings/users-permissions/roles/${g}`)};return(0,e.jsx)(ye.N,{children:t?.map(g=>(0,e.jsxs)(ne.Tr,{...(0,n.qM)({fn:()=>A(g.id)}),children:[(0,e.jsx)(S.Td,{width:"20%",children:(0,e.jsx)(p.o,{children:g.name})}),(0,e.jsx)(S.Td,{width:"50%",children:(0,e.jsx)(p.o,{children:g.description})}),(0,e.jsx)(S.Td,{width:"30%",children:(0,e.jsx)(p.o,{children:o({id:"Roles.RoleRow.user-count",defaultMessage:"{number, plural, =0 {# user} one {# user} other {# users}}"},{number:g.nb_users})})}),(0,e.jsx)(S.Td,{children:(0,e.jsxs)(c.s,{justifyContent:"end",...n.dG,children:[(0,e.jsx)(n.d4,{permissions:r.updateRole,children:(0,e.jsx)(is,{to:`/settings/users-permissions/roles/${g.id}`,"aria-label":o({id:"app.component.table.edit",defaultMessage:"Edit {target}"},{target:`${g.name}`}),children:(0,e.jsx)(Be.A,{})})}),_(g)&&(0,e.jsx)(n.d4,{permissions:r.deleteRole,children:(0,e.jsx)(De.K,{onClick:()=>D(g.id),noBorder:!0,icon:(0,e.jsx)(be.A,{}),label:o({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:`${g.name}`})})})]})})]},g.name))})};te.defaultProps={canDelete:!1},te.propTypes={onDelete:v.array.isRequired,permissions:v.object.isRequired,setRoleToDelete:v.func.isRequired,sortedRoles:v.array.isRequired,canDelete:v.bool};const rs=async(t,i)=>{try{const{get:r}=(0,n.GD)(),{data:a}=await r("/users-permissions/roles");return i("The roles have loaded successfully"),a}catch(r){throw t({type:"warning",message:{id:"notification.error"}}),new Error(r)}},as=async(t,i)=>{try{const{del:r}=(0,n.GD)();await r(`/users-permissions/roles/${t}`)}catch{i({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}},os=()=>{const{trackUsage:t}=(0,n.z1)(),{formatMessage:i,locale:r}=(0,W.A)(),a=(0,n.hN)(),{notifyStatus:h}=(0,Oe.W)(),[{query:o}]=(0,n.sq)(),E=o?._q||"",[f,x]=(0,d.useState)(!1),[_,D]=(0,d.useState)(!1),[A,g]=(0,d.useState)();(0,n.L4)();const{isLoading:R,allowedActions:{canRead:U,canDelete:F}}=(0,n.ec)({create:l.P.createRole,read:l.P.readRoles,update:l.P.updateRole,delete:l.P.deleteRole}),{isLoading:L,data:{roles:N},isFetching:X,refetch:k}=(0,V.useQuery)("get-roles",()=>rs(a,h),{initialData:{},enabled:U}),{includes:fe}=(0,n.U2)(r,{sensitivity:"base"}),Me=(0,n.QM)(r,{sensitivity:"base"}),_e=L||X,cs=()=>{x(!f)},us={roles:{id:(0,l.g)("Roles.empty"),defaultMessage:"You don't have any roles yet."},search:{id:(0,l.g)("Roles.empty.search"),defaultMessage:"No roles match the search."}},gs=i({id:"global.roles",defaultMessage:"Roles"}),ps=(0,V.useMutation)(G=>as(G,a),{async onSuccess(){await k()}}),hs=async()=>{D(!0),await ps.mutateAsync(A),x(!f),D(!1)},Z=(N||[]).filter(G=>fe(G.name,E)||fe(G.description,E)).sort((G,je)=>Me.compare(G.name,je.name)||Me.compare(G.description,je.description)),ms=E&&!Z.length?"search":"roles",Es=4,xs=(N?.length||0)+1;return(0,e.jsxs)(Ae.P,{children:[(0,e.jsx)(n.x7,{name:gs}),(0,e.jsxs)(C.g,{"aria-busy":_e,children:[(0,e.jsx)(B.Q,{title:i({id:"global.roles",defaultMessage:"Roles"}),subtitle:i({id:"Settings.roles.list.description",defaultMessage:"List of roles"}),primaryAction:(0,e.jsx)(n.d4,{permissions:l.P.createRole,children:(0,e.jsx)(n.z9,{to:"/settings/users-permissions/roles/new",onClick:()=>t("willCreateRole"),startIcon:(0,e.jsx)(Ue.A,{}),size:"S",children:i({id:(0,l.g)("List.button.roles"),defaultMessage:"Add new role"})})})}),(0,e.jsx)(Ce.B,{startActions:(0,e.jsx)(n.q7,{label:i({id:"app.component.search.label",defaultMessage:"Search"})})}),(0,e.jsxs)(b.s,{children:[!U&&(0,e.jsx)(n.UW,{}),(_e||R)&&(0,e.jsx)(n.Bl,{}),U&&Z&&Z?.length?(0,e.jsxs)(Re.X,{colCount:Es,rowCount:xs,children:[(0,e.jsx)(ve.d,{children:(0,e.jsxs)(ne.Tr,{children:[(0,e.jsx)(S.Th,{children:(0,e.jsx)(p.o,{variant:"sigma",textColor:"neutral600",children:i({id:"global.name",defaultMessage:"Name"})})}),(0,e.jsx)(S.Th,{children:(0,e.jsx)(p.o,{variant:"sigma",textColor:"neutral600",children:i({id:"global.description",defaultMessage:"Description"})})}),(0,e.jsx)(S.Th,{children:(0,e.jsx)(p.o,{variant:"sigma",textColor:"neutral600",children:i({id:"global.users",defaultMessage:"Users"})})}),(0,e.jsx)(S.Th,{children:(0,e.jsx)(y.s,{children:i({id:"global.actions",defaultMessage:"Actions"})})})]})}),(0,e.jsx)(te,{sortedRoles:Z,canDelete:F,permissions:l.P,setRoleToDelete:g,onDelete:[f,x]})]}):(0,e.jsx)(n.pA,{content:us[ms]})]}),(0,e.jsx)(n.TM,{isConfirmButtonLoading:_,onConfirm:hs,onToggleDialog:cs,isOpen:f})]})]})},ls=()=>(0,e.jsx)(n.kz,{permissions:l.P.accessRoles,children:(0,e.jsx)(os,{})}),ds=()=>(0,e.jsx)(n.kz,{permissions:l.P.accessRoles,children:(0,e.jsxs)(u.dO,{children:[(0,e.jsx)(u.qh,{path:"/settings/users-permissions/roles/new",component:ss,exact:!0}),(0,e.jsx)(u.qh,{path:"/settings/users-permissions/roles/:id",component:ns,exact:!0}),(0,e.jsx)(u.qh,{path:"/settings/users-permissions/roles",component:ls,exact:!0}),(0,e.jsx)(u.qh,{path:"",component:n.hH})]})})}}]);
