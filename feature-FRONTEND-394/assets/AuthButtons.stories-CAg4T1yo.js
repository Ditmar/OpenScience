import{j as r}from"./jsx-runtime-BlDnFLNC.js";import"./index-Cu9bd8lq.js";import{B as v}from"./Button-BKyMxrR_.js";import{B as k}from"./Box-D3gn0BGf.js";import{S}from"./Stack-BlO1_ZlC.js";import"./styled-BxzxpRFD.js";import"./defaultTheme-JPJ_yUS4.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-B34fLoo2.js";import"./extends-CF3RwP-h.js";import"./memoTheme-CvxkUA_n.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./DefaultPropsProvider-15asn56a.js";import"./useId-Cw7oCgN8.js";import"./ButtonBase-XvhcU8EW.js";import"./useTimeout-BPiCGVvU.js";import"./useEnhancedEffect-BAizwhs3.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-DR8r8Ogv.js";import"./emotion-react.browser.esm-CXfcuTw5.js";import"./useForkRef-CXZ2Yisc.js";import"./CircularProgress-WRdhuHRO.js";import"./extendSxProp-kI-X95xi.js";import"./useThemeProps-BRKBTLOP.js";import"./getThemeProps-OM7c35KT.js";function L({onClick:n,disabled:o=!1,loading:e=!1}){return r.jsx(v,{variant:"outlined",onClick:n,disabled:o,"data-testid":"login-button","aria-label":"Iniciar sesión",fullWidth:!0,sx:{color:"#ffffff",borderColor:"#ffffff",minWidth:"180px",height:"48px",fontSize:"0.85rem",fontWeight:"bold",paddingY:1.5,"&:hover":{backgroundColor:"rgba(255,255,255,0.1)"}},children:e?"Cargando...":"INICIAR SESIÓN"})}L.__docgenInfo={description:"",methods:[],displayName:"LoginButton",props:{onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};function I({onClick:n,disabled:o=!1,loading:e=!1}){return r.jsx(v,{variant:"contained",onClick:n,disabled:o,"data-testid":"register-button","aria-label":"Registrarse",fullWidth:!0,sx:{backgroundColor:"#003c2f",color:"#ffffff",minWidth:"180px",height:"48px",fontSize:"0.85rem",fontWeight:"bold",paddingY:1.5,"&:hover":{backgroundColor:"#005645"}},children:e?"Cargando...":"REGISTRARSE"})}I.__docgenInfo={description:"",methods:[],displayName:"RegisterButton",props:{onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const B=""+new URL("background-auth-Df6yXHQg.png",import.meta.url).href;function C({onLogin:n,onRegister:o,loading:e=!1,disabled:d=!1}){return r.jsx(k,{sx:{width:"100%",minHeight:"250px",backgroundImage:`url(${B.src})`,backgroundSize:"cover",backgroundPosition:"center",display:"flex",justifyContent:"center",alignItems:"center",padding:2},children:r.jsxs(S,{spacing:4,direction:"row",alignItems:"center",justifyContent:"center",children:[r.jsx(L,{onClick:n,loading:e,disabled:d}),r.jsx(I,{onClick:o,loading:e,disabled:d})]})})}C.__docgenInfo={description:"",methods:[],displayName:"AuthButtons",props:{onLogin:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onRegister:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const M={title:"library/Component/molecules/AuthButtons",component:C,tags:["autodocs"]},t={args:{onLogin:()=>{alert("Iniciar sesión")},onRegister:()=>{alert("Registrarse")},loading:!1,disabled:!1}},a={args:{onLogin:()=>{},onRegister:()=>{},loading:!0,disabled:!1}},i={args:{onLogin:()=>{},onRegister:()=>{},loading:!1,disabled:!0}},s={args:{onLogin:()=>{},onRegister:()=>{},loading:!0,disabled:!0}};var l,u,p;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    onLogin: () => {
      alert('Iniciar sesión');
    },
    onRegister: () => {
      alert('Registrarse');
    },
    loading: false,
    disabled: false
  }
}`,...(p=(u=t.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var c,g,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    onLogin: () => {},
    onRegister: () => {},
    loading: true,
    disabled: false
  }
}`,...(m=(g=a.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var f,b,h;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    onLogin: () => {},
    onRegister: () => {},
    loading: false,
    disabled: true
  }
}`,...(h=(b=i.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var y,x,R;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    onLogin: () => {},
    onRegister: () => {},
    loading: true,
    disabled: true
  }
}`,...(R=(x=s.parameters)==null?void 0:x.docs)==null?void 0:R.source}}};const Z=["Default","Loading","Disabled","LoadingAndDisabled"];export{t as Default,i as Disabled,a as Loading,s as LoadingAndDisabled,Z as __namedExportsOrder,M as default};
