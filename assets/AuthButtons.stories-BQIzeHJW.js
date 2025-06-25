import{j as n}from"./jsx-runtime-BlDnFLNC.js";import"./index-Cu9bd8lq.js";import{L as x}from"./LoginRegisterButtons-4S6dSESi.js";import{B as i}from"./Button-hfVpHuuG.js";import"./memoTheme-DGz4p7xB.js";import"./DefaultPropsProvider-A3_TUSBw.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-B34fLoo2.js";import"./extends-CF3RwP-h.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useId-Cw7oCgN8.js";import"./ButtonBase-D3UBjppG.js";import"./assertThisInitialized-C1KLUksq.js";import"./useEnhancedEffect-DDdtgC7H.js";import"./CircularProgress-DbFSb_De.js";function b(R){const{onLogin:h,onRegister:L,loading:a=!1,disabled:s=!1}=R;return n.jsxs(x,{children:[n.jsx(i,{variant:"outlined",color:"inherit",onClick:h,disabled:s,"aria-label":"Iniciar sesión","data-testid":"login-button",sx:{fontWeight:"bold",color:"#ffffff",borderColor:"#ffffff",marginRight:"1rem","&:hover":{backgroundColor:"rgba(255, 255, 255, 0.1)"}},children:a?"Cargando...":"INICIAR SESIÓN"}),n.jsx(i,{variant:"contained",onClick:L,disabled:s,"aria-label":"Registrarse","data-testid":"register-button",sx:{fontWeight:"bold",backgroundColor:"#003c2f",color:"#ffffff","&:hover":{backgroundColor:"#005645"}},children:a?"Cargando...":"REGISTRARSE"})]})}b.__docgenInfo={description:"",methods:[],displayName:"AuthButtons",props:{onLogin:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onRegister:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""}}};const N={title:"Molecules/AuthButtons",component:b,tags:["autodocs"]},e={args:{onLogin:()=>{console.log("Iniciar sesión clickeado")},onRegister:()=>{console.log("Registrarse clickeado")},loading:!1,disabled:!1}},o={args:{onLogin:()=>{},onRegister:()=>{},loading:!0,disabled:!1}},r={args:{onLogin:()=>{},onRegister:()=>{},loading:!1,disabled:!0}};var t,d,l;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(l=(d=e.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var c,g,u;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    onLogin: () => {},
    onRegister: () => {},
    loading: true,
    disabled: false
  }
}`,...(u=(g=o.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var m,p,f;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    onLogin: () => {},
    onRegister: () => {},
    loading: false,
    disabled: true
  }
}`,...(f=(p=r.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};const w=["Default","Loading","Disabled"];export{e as Default,r as Disabled,o as Loading,w as __namedExportsOrder,N as default};
