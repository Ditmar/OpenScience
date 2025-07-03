import{j as t}from"./jsx-runtime-BlDnFLNC.js";import"./index-Cu9bd8lq.js";import{s as v}from"./styled-BxzxpRFD.js";import{B as L}from"./Button-BKyMxrR_.js";import{B as C}from"./Box-D3gn0BGf.js";import{S as B}from"./Stack-BlO1_ZlC.js";import"./defaultTheme-JPJ_yUS4.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-B34fLoo2.js";import"./extends-CF3RwP-h.js";import"./memoTheme-CvxkUA_n.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./DefaultPropsProvider-15asn56a.js";import"./useId-Cw7oCgN8.js";import"./ButtonBase-XvhcU8EW.js";import"./useTimeout-BPiCGVvU.js";import"./useEnhancedEffect-BAizwhs3.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-DR8r8Ogv.js";import"./emotion-react.browser.esm-CXfcuTw5.js";import"./useForkRef-CXZ2Yisc.js";import"./CircularProgress-WRdhuHRO.js";import"./extendSxProp-kI-X95xi.js";import"./useThemeProps-BRKBTLOP.js";import"./getThemeProps-OM7c35KT.js";const T=v(L)(({theme:e})=>({minWidth:"180px",height:"48px",fontSize:"0.85rem",fontWeight:"bold",border:`1px solid ${e.palette.common.white}`,color:e.palette.common.white,backgroundColor:"transparent",textTransform:"uppercase","&:hover":{backgroundColor:e.palette.action.hover}}));function k({onClick:e,disabled:o=!1,loading:r=!1}){return t.jsx(T,{onClick:e,disabled:o,"data-testid":"login-button","aria-label":"Iniciar sesión",children:r?"Cargando...":"INICIAR SESIÓN"})}k.__docgenInfo={description:"",methods:[],displayName:"LoginButton",props:{onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const j=v(L)(({theme:e})=>({minWidth:"180px",height:"48px",fontSize:"0.85rem",fontWeight:"bold",backgroundColor:e.palette.success.main,color:e.palette.common.white,textTransform:"uppercase","&:hover":{backgroundColor:e.palette.success.dark}}));function I({onClick:e,disabled:o=!1,loading:r=!1}){return t.jsx(j,{onClick:e,disabled:o,"data-testid":"register-button","aria-label":"Registrarse",children:r?"Cargando...":"REGISTRARSE"})}I.__docgenInfo={description:"",methods:[],displayName:"RegisterButton",props:{onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const q=""+new URL("background-auth-Df6yXHQg.png",import.meta.url).href;function S({onLogin:e,onRegister:o,loading:r=!1,disabled:d=!1}){return t.jsx(C,{sx:{width:"100%",minHeight:"250px",backgroundImage:`url(${q.src})`,backgroundSize:"cover",backgroundPosition:"center",display:"flex",justifyContent:"center",alignItems:"center",padding:2},children:t.jsxs(B,{spacing:4,direction:"row",alignItems:"center",justifyContent:"center",children:[t.jsx(k,{onClick:e,loading:r,disabled:d}),t.jsx(I,{onClick:o,loading:r,disabled:d})]})})}S.__docgenInfo={description:"",methods:[],displayName:"AuthButtons",props:{onLogin:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onRegister:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const re={title:"library/Component/molecules/AuthButtons",component:S,tags:["autodocs"]},n={args:{onLogin:()=>{alert("Iniciar sesión")},onRegister:()=>{alert("Registrarse")},loading:!1,disabled:!1}},a={args:{onLogin:()=>{},onRegister:()=>{},loading:!0,disabled:!1}},s={args:{onLogin:()=>{},onRegister:()=>{},loading:!1,disabled:!0}},i={args:{onLogin:()=>{},onRegister:()=>{},loading:!0,disabled:!0}};var l,u,p;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(p=(u=n.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var c,m,g;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    onLogin: () => {},
    onRegister: () => {},
    loading: true,
    disabled: false
  }
}`,...(g=(m=a.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var f,b,y;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    onLogin: () => {},
    onRegister: () => {},
    loading: false,
    disabled: true
  }
}`,...(y=(b=s.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var h,x,R;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    onLogin: () => {},
    onRegister: () => {},
    loading: true,
    disabled: true
  }
}`,...(R=(x=i.parameters)==null?void 0:x.docs)==null?void 0:R.source}}};const te=["Default","Loading","Disabled","LoadingAndDisabled"];export{n as Default,s as Disabled,a as Loading,i as LoadingAndDisabled,te as __namedExportsOrder,re as default};
