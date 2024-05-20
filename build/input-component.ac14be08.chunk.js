"use strict";(self.webpackChunkstrapi_project=self.webpackChunkstrapi_project||[]).push([[7443],{91753:(h,t,e)=>{Object.defineProperty(t,Symbol.toStringTag,{value:"Module"});const o=e(92132),l=e(21272),d=e(69106),i=e(41999),c=e(73725),a=l.forwardRef(({children:p,name:C,error:f,hint:g,id:x,required:F=!1,...v},n)=>{const s=i.useId(x),u=l.useMemo(()=>({name:C,id:s,error:f,hint:g,required:F}),[f,s,g,C,F]);return o.jsx(c.Box,{ref:n,...v,children:o.jsx(d.FieldContext.Provider,{value:u,children:p})})});t.Field=a},39859:(h,t,e)=>{Object.defineProperty(t,Symbol.toStringTag,{value:"Module"});const o=e(92132),l=e(21272),d=e(63891),i=e(69909),c=e(19717),C=(g=>g&&g.__esModule?g:{default:g})(d).default(i.Flex)`
  font-size: 1.6rem;
  padding: 0;
`,f=l.forwardRef(({label:g,children:x,...F},v)=>o.jsxs(C,{justifyContent:"unset",background:"transparent",borderStyle:"none",type:"button",...F,as:"button",ref:v,children:[o.jsx(c.VisuallyHidden,{as:"span",children:g}),l.cloneElement(x,{"aria-hidden":!0,focusable:!1})]}));t.FieldAction=f},69106:(h,t,e)=>{Object.defineProperty(t,Symbol.toStringTag,{value:"Module"});const o=e(21272),l=o.createContext({id:"",required:!1}),d=()=>o.useContext(l);t.FieldContext=l,t.useField=d},83215:(h,t,e)=>{Object.defineProperty(t,Symbol.toStringTag,{value:"Module"});const o=e(92132),l=e(69106),d=e(48941),i=()=>{const{id:c,error:a}=l.useField();return!a||typeof a!="string"?null:o.jsx(d.Typography,{variant:"pi",as:"p",id:`${c}-error`,textColor:"danger600","data-strapi-field-error":!0,children:a})};t.FieldError=i},67296:(h,t,e)=>{Object.defineProperty(t,Symbol.toStringTag,{value:"Module"});const o=e(92132),l=e(69106),d=e(48941),i=()=>{const{id:c,hint:a,error:p}=l.useField();return!a||p?null:o.jsx(d.Typography,{variant:"pi",as:"p",id:`${c}-hint`,textColor:"neutral600",children:a})};t.FieldHint=i},80421:(h,t,e)=>{Object.defineProperty(t,Symbol.toStringTag,{value:"Module"});const o=e(92132),l=e(21272),d=e(63891),i=e(69106),c=e(93788),a=e(73725),p=e(69909),f=(n=>n&&n.__esModule?n:{default:n})(d),g={S:6.5,M:10.5},x=l.forwardRef(({endAction:n,startAction:s,disabled:u=!1,onChange:y,size:$="M",...r},j)=>{const{id:S,error:B,hint:z,name:L,required:P}=i.useField();let T;B?T=`${S}-error`:z&&(T=`${S}-hint`);const R=Boolean(B),M=b=>{!u&&y&&y(b)};return o.jsxs(v,{justifyContent:"space-between",hasError:R,disabled:u,children:[s?o.jsx(a.Box,{paddingLeft:3,paddingRight:2,children:s}):null,o.jsx(F,{id:S,name:L,ref:j,"aria-describedby":T,"aria-invalid":R,"aria-disabled":u,disabled:u,"data-disabled":u?"":void 0,hasLeftAction:Boolean(s),hasRightAction:Boolean(n),onChange:M,"aria-required":P,$size:$,...r}),n?o.jsx(a.Box,{paddingLeft:2,paddingRight:3,children:n}):null]})}),F=f.default.input`
  border: none;
  border-radius: ${({theme:n})=>n.borderRadius};
  padding-bottom: ${({$size:n})=>`${g[n]/16}rem`};
  padding-left: ${({theme:n,hasLeftAction:s})=>s?0:n.spaces[4]};
  padding-right: ${({theme:n,hasRightAction:s})=>s?0:n.spaces[4]};
  padding-top: ${({$size:n})=>`${g[n]/16}rem`};
  cursor: ${n=>n["aria-disabled"]?"not-allowed":void 0};

  color: ${({theme:n})=>n.colors.neutral800};
  font-weight: 400;
  font-size: ${n=>n.theme.fontSizes[2]};
  display: block;
  width: 100%;
  background: inherit;

  ::placeholder {
    color: ${({theme:n})=>n.colors.neutral500};
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
`,v=f.default(p.Flex)`
  border: 1px solid ${({theme:n,hasError:s})=>s?n.colors.danger600:n.colors.neutral200};
  border-radius: ${({theme:n})=>n.borderRadius};
  background: ${({theme:n})=>n.colors.neutral0};
  ${c.inputFocusStyle()}

  ${({theme:n,disabled:s})=>s?d.css`
          color: ${n.colors.neutral600};
          background: ${n.colors.neutral150};
        `:void 0}
`;t.FieldInput=x,t.InputWrapper=v},76987:(h,t,e)=>{Object.defineProperty(t,Symbol.toStringTag,{value:"Module"});const o=e(92132),l=e(21272),d=e(63891),i=e(69106),c=e(14053),a=e(48941),p=e(69909),f=(s=>s&&s.__esModule?s:{default:s})(d),g=c.once(console.warn),x=l.forwardRef(({children:s,action:u,required:y,...$},r)=>{const{id:j,required:S}=i.useField(),B=S||y;return y!==void 0&&g('Deprecation warning: Usage of "required" prop in FieldLabel component is deprecated. This is discouraged and will be removed in the next major release. Please use the Field component to share the required prop.'),o.jsxs(F,{ref:r,variant:"pi",textColor:"neutral800",htmlFor:j,fontWeight:"bold",as:"label",...$,children:[s,B&&o.jsx(v,{textColor:"danger600",children:"*"}),u&&o.jsx(n,{marginLeft:1,children:u})]})}),F=f.default(a.Typography)`
  display: flex;
  align-items: center;
`,v=f.default(a.Typography)`
  line-height: 0;
`,n=f.default(p.Flex)`
  line-height: 0;

  svg path {
    fill: ${({theme:s})=>s.colors.neutral500};
  }
`;t.FieldLabel=x},79521:(h,t,e)=>{Object.defineProperty(t,Symbol.toStringTag,{value:"Module"});const o=e(91753),l=e(76987),d=e(80421),i=e(67296),c=e(83215),a=e(69106),p=e(39859);t.Field=o.Field,t.FieldLabel=l.FieldLabel,t.FieldInput=d.FieldInput,t.InputWrapper=d.InputWrapper,t.FieldHint=i.FieldHint,t.FieldError=c.FieldError,t.FieldContext=a.FieldContext,t.useField=a.useField,t.FieldAction=p.FieldAction},14053:(h,t)=>{Object.defineProperty(t,Symbol.toStringTag,{value:"Module"});const e="[@strapi/design-system]:",o=l=>{const d=l;let i=!1;if(typeof d!="function")throw new TypeError(`${e} once requires a function parameter`);return(...c)=>{i||(d(...c),i=!0)}};t.PREFIX=e,t.once=o},59263:(h,t,e)=>{const o=e(92132),l=i=>o.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...i,children:o.jsx("path",{fill:"#212134",fillRule:"evenodd",d:"M15.681 2.804A9.64 9.64 0 0 0 11.818 2C6.398 2 2 6.48 2 12c0 5.521 4.397 10 9.818 10 2.03 0 4.011-.641 5.67-1.835a9.987 9.987 0 0 0 3.589-4.831 1.117 1.117 0 0 0-.664-1.418 1.086 1.086 0 0 0-1.393.676 7.769 7.769 0 0 1-2.792 3.758 7.546 7.546 0 0 1-4.41 1.428V4.222h.002a7.492 7.492 0 0 1 3.003.625 7.61 7.61 0 0 1 2.5 1.762l.464.551-2.986 3.042a.186.186 0 0 0 .129.316H22V3.317a.188.188 0 0 0-.112-.172.179.179 0 0 0-.199.04l-2.355 2.4-.394-.468-.02-.02a9.791 9.791 0 0 0-3.239-2.293Zm-3.863 1.418V2v2.222Zm0 0v15.556c-4.216 0-7.636-3.484-7.636-7.778s3.42-7.777 7.636-7.778Z",clipRule:"evenodd"})}),d=l;h.exports=d},67215:(h,t,e)=>{const o=e(92132),l=i=>o.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...i,children:o.jsx("path",{fill:"#32324D",d:"M16.39 2.17c.68.1 1.17.2 1.46.39.39.2.58.39.78.58.2.3.3.78.39 1.18l.78 3.5h1.95V1H2.84l-.59 6.83H4l.98-3.9a5 5 0 0 1 .39-.98c.2-.2.49-.39.88-.58.39-.1.88-.3 1.56-.3.58 0 1.36-.1 2.34-.1v8.78h-7.8v1.95h7.8v7.41c0 .2.1.3-.1.39-.2.1-.39.2-.88.2l-2.04.39-.1 1.36h9.94l-.1-1.36-2.04-.3c-.49 0-.69-.1-.78-.2-.2-.09-.1-.19-.1-.38V12.7h7.8v-1.95h-7.8V1.97c.98 0 1.85.1 2.44.2Z"})}),d=l;h.exports=d},89330:(h,t,e)=>{e.r(t),e.d(t,{FieldActionWrapper:()=>s,default:()=>n});var o=e(92132),l=e(21272),d=e(8769),i=e(79521),c=e(70505),a=e(59263),p=e.n(a),C=e(67215),f=e.n(C),g=e(63891);function x(u){const y={\u0430:"a",\u0431:"b",\u0432:"v",\u0433:"g",\u0434:"d",\u0435:"e",\u0451:"yo",\u0436:"zh",\u0437:"z",\u0438:"i",\u0439:"y",\u043A:"k",\u043B:"l",\u043C:"m",\u043D:"n",\u043E:"o",\u043F:"p",\u0440:"r",\u0441:"s",\u0442:"t",\u0443:"u",\u0444:"f",\u0445:"kh",\u0446:"ts",\u0447:"ch",\u0448:"sh",\u0449:"sch",\u044A:"",\u044B:"y",\u044C:"",\u044D:"e",\u044E:"yu",\u044F:"ya",\u0456:"i",\u0457:"yi",\u0454:"ye",\u0491:"g",\u045E:"u",\u04D9:"a",\u0456:"i",\u04A3:"n",\u049B:"k",\u04BB:"h",\u04E9:"o",\u04B1:"u",\u04AF:"u",\u04B7:"j",\u0459:"lj",\u045A:"nj",\u045F:"dzh",\u0452:"dj",\u045B:"c",\u0458:"j",\u045E:"u",\u0455:"dz",\u0454:"ye",\u0457:"yi",\u045C:"kj",\u045E:"u",\u04C2:"zh",\u04E9:"o",\u04B1:"u",\u04A3:"n",\u04BB:"h",\u04B3:"h",\u04B7:"j",\u049B:"k",\u0493:"g",\u045E:"u",\u04B3:"h",\u04B7:"j",\u049B:"q",\u0493:"g",\u04E3:"i",\u04EF:"u",\u04B3:"h",\u0451:"yo",\u0452:"dj",\u0458:"j",\u045B:"ch",\u045C:"kj",\u0459:"lj",\u045A:"nj",\u045F:"dzh",\u0455:"dz",\u0401:"Yo",\u0406:"I"},$=new RegExp(Object.keys(y).join("|"),"g");return u.replace($,function(r){return y[r]||r})}const F=x,n=({name:u,value:y,intlLabel:$,attribute:r})=>{const j=new Date;let S=j.getFullYear(),B=("0"+(j.getMonth()+1)).slice(-2),z=("0"+j.getDate()).slice(-2),L=("0"+j.getHours()).slice(-2),P=("0"+j.getMinutes()).slice(-2),T=("0"+j.getSeconds()).slice(-2),R,M=`${S}-${B}-${z}-${L}-${P}-${T}`;r.options?.kw&&r.options?.kw,r.options?.pattern&&r.options?.pattern,r.options?.kw?R=I(r.options?.kw)+"-"+M:R=M;const b=()=>{E({target:{name:u,value:R}})},{modifiedData:m,onChange:E}=(0,d.Cu)();let w,D;function I(A){return A=A.toLowerCase(),F(A).replace(/[^a-zA-Z0-9]/g," ").trim().replaceAll(/\s\s+/g," ").replaceAll(" ","-")}Number(m.id)&&(r.options?.kw?w=I(r.options?.kw)+"-"+m.id:w=m.id);const H=()=>{E({target:{name:u,value:w}})};m.title&&(r.options?.kw?D=I(r.options?.kw+"-"+m.title):D=I(m.title)),console.log("data_title",D);const O=async()=>{E({target:{name:u,value:D,type:"text"}})};y==null&&b(),r.options?.pattern=="title"?(0,l.useEffect)(()=>{m.title&&O()},[m.title]):r.options?.pattern=="id"&&(0,l.useEffect)(()=>{m.id&&H()},[m.id]);const W=()=>{E({target:{name:u,value:""}})};return(0,o.jsxs)(c.Stack,{spacing:1,children:[(0,o.jsx)(i.FieldLabel,{children:$?.defaultMessage}),(0,o.jsx)(i.FieldInput,{label:"slug",name:"slug",value:y||"",onChange:A=>E({target:{name:u,value:I(A.target.value)}}),endAction:(0,o.jsxs)(c.Stack,{horizontal:!0,spacing:2,children:[(0,o.jsx)(s,{onClick:()=>O(),label:"regenerate",children:(0,o.jsx)(f(),{})}),(0,o.jsx)(s,{onClick:()=>b(),children:(0,o.jsx)(p(),{})})]})})]})},s=(0,g.default)(i.FieldAction)`
  svg {
    height: 1rem;
    width: 1rem;
    path {
      fill: ${({theme:u})=>u.colors.neutral400};
    }
  }
  svg:hover {
    path {
      fill: ${({theme:u})=>u.colors.primary600};
    }
  }
`}}]);
