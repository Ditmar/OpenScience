import{j as r}from"./jsx-runtime-DRTy3Uxn.js";import{P as n}from"./PrimaryButtons-DGK7pivR.js";import"./index-BBkUAzwr.js";const y={"auth-buttons":"_auth-buttons_171en_1"};function d(u){const{children:p}=u;return r.jsx("div",{className:y["auth-buttons"],children:p})}d.__docgenInfo={description:"",methods:[],displayName:"LoginRegisterButtons",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const P={title:"ui/components/molecules/login-register-buttons",component:d,argTypes:{onClick:{action:"click"}}},e={args:{children:r.jsxs(r.Fragment,{children:[r.jsx(n,{variant:"primary",children:"iniciar sesion"}),r.jsx(n,{variant:"secondary",children:"registrarse"})]})}},t={args:{children:r.jsxs(r.Fragment,{children:[r.jsx(n,{variant:"primary",children:"iniciar sesion"}),r.jsx(n,{variant:"tertiary",children:"registrarse"})]})}};var s,a,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    children: <>
        <PrimaryButtons variant="primary">iniciar sesion</PrimaryButtons>
        <PrimaryButtons variant="secondary">registrarse</PrimaryButtons>
      </>
  }
}`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var o,c,m;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    children: <>
        <PrimaryButtons variant="primary">iniciar sesion</PrimaryButtons>
        <PrimaryButtons variant="tertiary">registrarse</PrimaryButtons>
      </>
  }
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const v=["Primary","Secondary"];export{e as Primary,t as Secondary,v as __namedExportsOrder,P as default};
