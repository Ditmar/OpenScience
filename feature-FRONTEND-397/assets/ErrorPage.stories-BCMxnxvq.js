import{j as e}from"./jsx-runtime-BlDnFLNC.js";import"./index-Cu9bd8lq.js";import{S as w}from"./Stack-BfpVzPsa.js";import{T as n}from"./Typography-w9HQ2UNn.js";import"./styled-DvEAm1u8.js";import"./defaultTheme-DHkGwdCG.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-B34fLoo2.js";import"./extends-CF3RwP-h.js";import"./useThemeProps-BKcjqAEo.js";import"./getThemeProps-OM7c35KT.js";import"./DefaultPropsProvider-15asn56a.js";import"./extendSxProp-Cj__sDRo.js";import"./memoTheme-CavoCizM.js";import"./index-B_3OuE5h.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";function q({code:E,title:T,message:i}){return e.jsxs(w,{spacing:1.5,alignItems:"center",justifyContent:"center",sx:{minHeight:"100vh",textAlign:"center",backgroundColor:"#f9f9f9",px:2},children:[e.jsx(n,{variant:"h1",sx:{fontSize:{xs:"5rem",sm:"6rem",md:"8rem"},fontWeight:700,color:"#0095cc",lineHeight:1},children:E}),e.jsx(n,{variant:"h4",sx:{fontWeight:600,color:"#0095cc"},children:T}),i&&e.jsx(n,{variant:"body1",sx:{color:"#0095cc",maxWidth:500},children:i})]})}q.__docgenInfo={description:"",methods:[],displayName:"ErrorPage",props:{code:{required:!0,tsType:{name:"number"},description:""},title:{required:!0,tsType:{name:"string"},description:""},message:{required:!1,tsType:{name:"string"},description:""}}};const M={title:"ui/components/molecules/ErrorPage",component:q},r={args:{code:404,title:"Page Not Found",message:"The page you are looking for might have been removed or is temporarily unavailable"}},o={args:{code:500,title:"Server Error",message:"Something went wrong on our end. Please try again later."}},t={args:{code:403,title:"Forbidden",message:"You don't have the necessary permissions to view this page. Please contact the administrator if you believe this is an error."}},s={args:{code:400,title:"Bad Request",message:"The server cannot process your request due to invalid syntax. Please check your input and try again."}},a={args:{code:401,title:"Unauthorized",message:"Authentication is required to access this resource. Please log in with valid credentials or contact support if you believe this is an error."}};var c,d,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    code: 404,
    title: 'Page Not Found',
    message: 'The page you are looking for might have been removed or is temporarily unavailable'
  }
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,p,l;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    code: 500,
    title: 'Server Error',
    message: 'Something went wrong on our end. Please try again later.'
  }
}`,...(l=(p=o.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var g,h,v;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    code: 403,
    title: 'Forbidden',
    message: "You don't have the necessary permissions to view this page. Please contact the administrator if you believe this is an error."
  }
}`,...(v=(h=t.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var y,f,x;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    code: 400,
    title: 'Bad Request',
    message: 'The server cannot process your request due to invalid syntax. Please check your input and try again.'
  }
}`,...(x=(f=s.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var S,b,P;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    code: 401,
    title: 'Unauthorized',
    message: 'Authentication is required to access this resource. Please log in with valid credentials or contact support if you believe this is an error.'
  }
}`,...(P=(b=a.parameters)==null?void 0:b.docs)==null?void 0:P.source}}};const Y=["Default","ServerError","NoMessage","BadRequest","Unauthorized"];export{s as BadRequest,r as Default,t as NoMessage,o as ServerError,a as Unauthorized,Y as __namedExportsOrder,M as default};
