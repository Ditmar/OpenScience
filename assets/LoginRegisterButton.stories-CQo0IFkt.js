import{j as r}from"./jsx-runtime-_e34SzbC.js";import{P as a}from"./PrimaryButtons-CVj-t3cb.js";import"./index-DVXBtNgz.js";function d(u){const{children:p}=u;return r.jsx("div",{className:"auth-buttons",children:p})}d.__docgenInfo={description:"",methods:[],displayName:"LoginRegisterButtons",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const h={title:"ui/components/molecules/login-register-buttons",component:d,argTypes:{onClick:{action:"click"}}},e={args:{children:r.jsxs(r.Fragment,{children:[r.jsx(a,{variant:"primary",children:"iniciar sesion"}),r.jsx(a,{variant:"secondary",children:"registrarse"})]})}},n={args:{children:r.jsxs(r.Fragment,{children:[r.jsx(a,{variant:"primary",children:"iniciar sesion"}),r.jsx(a,{variant:"tertiary",children:"registrarse"})]})}};var t,i,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    children: <>
        <PrimaryButtons variant="primary">iniciar sesion</PrimaryButtons>
        <PrimaryButtons variant="secondary">registrarse</PrimaryButtons>
      </>
  }
}`,...(s=(i=e.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};var o,c,m;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    children: <>
        <PrimaryButtons variant="primary">iniciar sesion</PrimaryButtons>
        <PrimaryButtons variant="tertiary">registrarse</PrimaryButtons>
      </>
  }
}`,...(m=(c=n.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const P=["Primary","Secondary"];export{e as Primary,n as Secondary,P as __namedExportsOrder,h as default};
