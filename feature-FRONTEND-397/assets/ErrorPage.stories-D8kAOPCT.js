import{j as r}from"./jsx-runtime-BlDnFLNC.js";import"./index-Cu9bd8lq.js";import{u as B}from"./useTheme-BaXeX56u.js";import{S as j}from"./Stack-CBeic-EE.js";import{T as i}from"./Typography-C7MpjIBe.js";import"./defaultTheme-DgRkra0M.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-B34fLoo2.js";import"./extendSxProp-BtvtprHM.js";import"./styled-BuMVIcWp.js";import"./extends-CF3RwP-h.js";import"./useThemeProps-Cqo6Up2g.js";import"./getThemeProps-OM7c35KT.js";import"./DefaultPropsProvider-15asn56a.js";import"./memoTheme-BkoIURdx.js";import"./index-CrgZfTxv.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";function T({code:E,title:w,message:c}){const e=B();return r.jsxs(j,{spacing:1.5,alignItems:"center",justifyContent:"center",sx:{minHeight:"100vh",textAlign:"center",backgroundColor:e.palette.background.default,px:2},children:[r.jsx(i,{variant:"h1",sx:{fontSize:{xs:"5rem",sm:"6rem",md:"8rem"},fontWeight:e.typography.fontWeightBold,color:e.palette.olitemPalette.brandBlue,lineHeight:1},children:E}),r.jsx(i,{variant:"h4",sx:{fontWeight:e.typography.fontWeightMedium,color:e.palette.olitemPalette.brandBlue},children:w}),c&&r.jsx(i,{variant:"body1",sx:{color:e.palette.olitemPalette.brandBlue,maxWidth:500},children:c})]})}T.__docgenInfo={description:"",methods:[],displayName:"ErrorPage",props:{code:{required:!0,tsType:{name:"number"},description:""},title:{required:!0,tsType:{name:"string"},description:""},message:{required:!1,tsType:{name:"string"},description:""}}};const G={title:"ui/components/molecules/ErrorPage",component:T},t={args:{code:404,title:"Page Not Found",message:"The page you are looking for might have been removed or is temporarily unavailable"}},o={args:{code:500,title:"Server Error",message:"Something went wrong on our end. Please try again later."}},a={args:{code:403,title:"Forbidden",message:"You don't have the necessary permissions to view this page. Please contact the administrator if you believe this is an error."}},s={args:{code:400,title:"Bad Request",message:"The server cannot process your request due to invalid syntax. Please check your input and try again."}},n={args:{code:401,title:"Unauthorized",message:"Authentication is required to access this resource. Please log in with valid credentials or contact support if you believe this is an error."}};var d,m,l;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    code: 404,
    title: 'Page Not Found',
    message: 'The page you are looking for might have been removed or is temporarily unavailable'
  }
}`,...(l=(m=t.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var p,u,g;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    code: 500,
    title: 'Server Error',
    message: 'Something went wrong on our end. Please try again later.'
  }
}`,...(g=(u=o.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var h,y,v;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(b=(x=s.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var P,S,q;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    code: 401,
    title: 'Unauthorized',
    message: 'Authentication is required to access this resource. Please log in with valid credentials or contact support if you believe this is an error.'
  }
}`,...(q=(S=n.parameters)==null?void 0:S.docs)==null?void 0:q.source}}};const J=["Default","ServerError","NoMessage","BadRequest","Unauthorized"];export{s as BadRequest,t as Default,a as NoMessage,o as ServerError,n as Unauthorized,J as __namedExportsOrder,G as default};
