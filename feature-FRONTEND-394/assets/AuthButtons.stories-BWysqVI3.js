import{j as g}from"./jsx-runtime-BlDnFLNC.js";import{r as b}from"./index-Cu9bd8lq.js";import{c as z,b as H,g as J,s as K}from"./memoTheme-BisYSN2M.js";import{s as Q,u as X}from"./useThemeProps-DM56eEc9.js";import{e as Y}from"./useEnhancedEffect-DSVp05nd.js";import{h as x,e as f,f as Z,g as w,m as ee,i as oe,j as C,u as se}from"./DefaultPropsProvider-B10XlDya.js";import{B as S}from"./Button-C22o9-Z_.js";import"./extends-CF3RwP-h.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-B34fLoo2.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useId-Cw7oCgN8.js";import"./ButtonBase-ldU9AnAi.js";import"./assertThisInitialized-C1KLUksq.js";import"./CircularProgress-BmW-s186.js";const re=oe(),ne=Q("div",{name:"MuiStack",slot:"Root"});function te(e){return X({props:e,name:"MuiStack",defaultTheme:re})}function ae(e,s){const r=b.Children.toArray(e).filter(Boolean);return r.reduce((o,i,t)=>(o.push(i),t<r.length-1&&o.push(b.cloneElement(s,{key:`separator-${t}`})),o),[])}const ie=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],ce=({ownerState:e,theme:s})=>{let r={display:"flex",flexDirection:"column",...x({theme:s},f({values:e.direction,breakpoints:s.breakpoints.values}),o=>({flexDirection:o}))};if(e.spacing){const o=Z(s),i=Object.keys(s.breakpoints.values).reduce((n,a)=>((typeof e.spacing=="object"&&e.spacing[a]!=null||typeof e.direction=="object"&&e.direction[a]!=null)&&(n[a]=!0),n),{}),t=f({values:e.direction,base:i}),y=f({values:e.spacing,base:i});typeof t=="object"&&Object.keys(t).forEach((n,a,p)=>{if(!t[n]){const m=a>0?t[p[a-1]]:"column";t[n]=m}}),r=w(r,x({theme:s},y,(n,a)=>e.useFlexGap?{gap:C(o,n)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${ie(a?t[a]:e.direction)}`]:C(o,n)}}))}return r=ee(s.breakpoints,r),r};function le(e={}){const{createStyledComponent:s=ne,useThemeProps:r=te,componentName:o="MuiStack"}=e,i=()=>H({root:["root"]},n=>J(o,n),{}),t=s(ce);return b.forwardRef(function(n,a){const p=r(n),k=Y(p),{component:m="div",direction:q="column",spacing:G=0,divider:R,children:v,className:O,useFlexGap:W=!1,..._}=k,U={direction:q,spacing:G,useFlexGap:W},$=i();return g.jsx(t,{as:m,ownerState:U,ref:a,className:z($.root,O),..._,children:R?ae(v,R):v})})}const de=le({createStyledComponent:K("div",{name:"MuiStack",slot:"Root"}),useThemeProps:e=>se({props:e,name:"MuiStack"})});function M(e){const{onLogin:s,onRegister:r,loading:o=!1,disabled:i=!1}=e;return g.jsxs(de,{spacing:2,direction:{xs:"column",sm:"row"},"aria-label":"Botones de autenticación",children:[g.jsx(S,{variant:"outlined",color:"inherit",onClick:s,disabled:i,"aria-label":"Iniciar sesión","data-testid":"login-button",sx:{fontWeight:"bold",color:"#ffffff",borderColor:"#ffffff","&:hover":{backgroundColor:"rgba(255, 255, 255, 0.1)"}},fullWidth:!0,children:o?"Cargando...":"INICIAR SESIÓN"}),g.jsx(S,{variant:"contained",onClick:r,disabled:i,"aria-label":"Registrarse","data-testid":"register-button",sx:{fontWeight:"bold",backgroundColor:"#003c2f",color:"#ffffff","&:hover":{backgroundColor:"#005645"}},fullWidth:!0,children:o?"Cargando...":"REGISTRARSE"})]})}M.__docgenInfo={description:"",methods:[],displayName:"AuthButtons",props:{onLogin:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onRegister:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""}}};const Le={title:"library/component/molecules/AuthButtons",component:M,tags:["autodocs"]},c={args:{onLogin:()=>{console.log("Iniciar sesión clickeado")},onRegister:()=>{console.log("Registrarse clickeado")},loading:!1,disabled:!1}},l={args:{onLogin:()=>{},onRegister:()=>{},loading:!0,disabled:!1}},d={args:{onLogin:()=>{},onRegister:()=>{},loading:!1,disabled:!0}},u={args:{onLogin:()=>{},onRegister:()=>{},loading:!0,disabled:!0}};var L,j,D;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    onLogin: () => {
      console.log('Iniciar sesión clickeado');
    },
    onRegister: () => {
      console.log('Registrarse clickeado');
    },
    loading: false,
    disabled: false
  }
}`,...(D=(j=c.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var T,B,I;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    onLogin: () => {},
    onRegister: () => {},
    loading: true,
    disabled: false
  }
}`,...(I=(B=l.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var A,P,E;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    onLogin: () => {},
    onRegister: () => {},
    loading: false,
    disabled: true
  }
}`,...(E=(P=d.parameters)==null?void 0:P.docs)==null?void 0:E.source}}};var V,F,N;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    onLogin: () => {},
    onRegister: () => {},
    loading: true,
    disabled: true
  }
}`,...(N=(F=u.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};const je=["Default","Loading","Disabled","LoadingAndDisabled"];export{c as Default,d as Disabled,l as Loading,u as LoadingAndDisabled,je as __namedExportsOrder,Le as default};
