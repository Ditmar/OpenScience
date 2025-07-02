import{j as r}from"./jsx-runtime-BlDnFLNC.js";import"./index-Cu9bd8lq.js";import{u as j}from"./useTheme-Byw5slXW.js";import{S as k}from"./Stack-C3pWqW3d.js";import{T as n}from"./Typography-D3JxyuuA.js";import"./defaultTheme-rC0upSna.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-B34fLoo2.js";import"./extendSxProp-DalUrZEi.js";import"./styled-Cti5eKTv.js";import"./extends-CF3RwP-h.js";import"./useThemeProps-DieXT5sA.js";import"./getThemeProps-OM7c35KT.js";import"./DefaultPropsProvider-15asn56a.js";import"./memoTheme-mmm0-7lI.js";import"./index-DKv1IMza.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";function T({code:E,title:w,message:c}){const e=j();return r.jsxs(k,{spacing:1.5,alignItems:"center",justifyContent:"center",sx:{minHeight:"100vh",textAlign:"center",backgroundColor:e.palette.background.default,px:2},children:[r.jsx(n,{variant:"h1",sx:{fontSize:{xs:"5rem",sm:"6rem",md:"8rem"},fontWeight:e.typography.fontWeightBold,color:e.palette.errorPalette.errorPrimary,lineHeight:1},children:E}),r.jsx(n,{variant:"h4",sx:{fontWeight:e.typography.fontWeightMedium,color:e.palette.errorPalette.errorPrimary},children:w}),c&&r.jsx(n,{variant:"body1",sx:{color:e.palette.errorPalette.errorPrimary,maxWidth:500},children:c})]})}T.__docgenInfo={description:"",methods:[],displayName:"ErrorPage",props:{code:{required:!0,tsType:{name:"number"},description:""},title:{required:!0,tsType:{name:"string"},description:""},message:{required:!1,tsType:{name:"string"},description:""}}};const G={title:"ui/components/molecules/ErrorPage",component:T},t={args:{code:404,title:"Page Not Found",message:"The page you are looking for might have been removed or is temporarily unavailable"}},o={args:{code:500,title:"Server Error",message:"Something went wrong on our end. Please try again later."}},a={args:{code:403,title:"Forbidden",message:"You don't have the necessary permissions to view this page. Please contact the administrator if you believe this is an error."}},s={args:{code:400,title:"Bad Request",message:"The server cannot process your request due to invalid syntax. Please check your input and try again."}},i={args:{code:401,title:"Unauthorized",message:"Authentication is required to access this resource. Please log in with valid credentials or contact support if you believe this is an error."}};var m,d,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    code: 404,
    title: 'Page Not Found',
    message: 'The page you are looking for might have been removed or is temporarily unavailable'
  }
}`,...(p=(d=t.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,l,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    code: 500,
    title: 'Server Error',
    message: 'Something went wrong on our end. Please try again later.'
  }
}`,...(g=(l=o.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var h,y,v;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    code: 403,
    title: 'Forbidden',
    message: "You don't have the necessary permissions to view this page. Please contact the administrator if you believe this is an error."
  }
}`,...(v=(y=a.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var f,P,x;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    code: 400,
    title: 'Bad Request',
    message: 'The server cannot process your request due to invalid syntax. Please check your input and try again.'
  }
}`,...(x=(P=s.parameters)==null?void 0:P.docs)==null?void 0:x.source}}};var b,S,q;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    code: 401,
    title: 'Unauthorized',
    message: 'Authentication is required to access this resource. Please log in with valid credentials or contact support if you believe this is an error.'
  }
}`,...(q=(S=i.parameters)==null?void 0:S.docs)==null?void 0:q.source}}};const J=["Default","ServerError","NoMessage","BadRequest","Unauthorized"];export{s as BadRequest,t as Default,a as NoMessage,o as ServerError,i as Unauthorized,J as __namedExportsOrder,G as default};
