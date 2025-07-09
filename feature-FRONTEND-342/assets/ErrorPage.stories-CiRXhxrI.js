import{j as r}from"./jsx-runtime-BlDnFLNC.js";import"./index-Cu9bd8lq.js";import{u as B}from"./useTheme-Yy9QpvGT.js";import{S as j}from"./Stack-DNeSHKzy.js";import{T as n}from"./Typography-CxNfrNL8.js";import"./defaultTheme-DGUDAp2c.js";import"./createTheme-Wz6RB6Fy.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-B89909lT.js";import"./extendSxProp-DZpmlPTG.js";import"./styled-DYqe69MS.js";import"./index-nHByv8xN.js";import"./extends-CF3RwP-h.js";import"./generateUtilityClasses-CPRdC64H.js";import"./useThemeProps-C8eWFVkY.js";import"./getThemeProps-OM7c35KT.js";import"./DefaultPropsProvider-15asn56a.js";import"./composeClasses-CAXbtk_0.js";import"./index-BDKYfTe2.js";import"./emotion-react.browser.esm-BMvUHC7V.js";import"./memoTheme-E6j5siMe.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";function q({code:T,title:w,message:c}){const e=B();return r.jsxs(j,{spacing:1.5,alignItems:"center",justifyContent:"center",sx:{minHeight:"100vh",textAlign:"center",backgroundColor:e.palette.background.default,px:2},children:[r.jsx(n,{variant:"h1",sx:{fontSize:{xs:"5rem",sm:"6rem",md:"8rem"},fontWeight:e.typography.fontWeightBold,color:e.paletteErrorPage.brandBlue,lineHeight:1},children:T}),r.jsx(n,{variant:"h4",sx:{fontWeight:e.typography.fontWeightMedium,color:e.paletteErrorPage.brandBlue},children:w}),c&&r.jsx(n,{variant:"body1",sx:{color:e.paletteErrorPage.brandBlue,maxWidth:500},children:c})]})}q.__docgenInfo={description:"",methods:[],displayName:"ErrorPage",props:{code:{required:!0,tsType:{name:"number"},description:""},title:{required:!0,tsType:{name:"string"},description:""},message:{required:!1,tsType:{name:"string"},description:""}}};const V={title:"ui/components/molecules/ErrorPage",component:q},t={args:{code:404,title:"Page Not Found",message:"The page you are looking for might have been removed or is temporarily unavailable"}},o={args:{code:500,title:"Server Error",message:"Something went wrong on our end. Please try again later."}},a={args:{code:403,title:"Forbidden",message:"You don't have the necessary permissions to view this page. Please contact the administrator if you believe this is an error."}},s={args:{code:400,title:"Bad Request",message:"The server cannot process your request due to invalid syntax. Please check your input and try again."}},i={args:{code:401,title:"Unauthorized",message:"Authentication is required to access this resource. Please log in with valid credentials or contact support if you believe this is an error."}};var m,d,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(v=(y=a.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var f,x,b;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    code: 400,
    title: 'Bad Request',
    message: 'The server cannot process your request due to invalid syntax. Please check your input and try again.'
  }
}`,...(b=(x=s.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var P,S,E;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    code: 401,
    title: 'Unauthorized',
    message: 'Authentication is required to access this resource. Please log in with valid credentials or contact support if you believe this is an error.'
  }
}`,...(E=(S=i.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};const X=["Default","ServerError","NoMessage","BadRequest","Unauthorized"];export{s as BadRequest,t as Default,a as NoMessage,o as ServerError,i as Unauthorized,X as __namedExportsOrder,V as default};
