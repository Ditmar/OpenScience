import{j as e}from"./jsx-runtime-_e34SzbC.js";import"./index-DVXBtNgz.js";function m(p){const{code:s,title:u,message:g,redirectTo:l,linkText:R,messageinit:h,messagefinish:N}=p,T=s===500;return e.jsxs("div",{className:`error-message ${T?"server-error":""}`,children:[e.jsx("h1",{children:s}),e.jsx("p",{className:"title",children:u}),e.jsx("p",{className:"message",children:g}),e.jsxs("p",{className:"message",children:[h,e.jsx("a",{href:l,children:R}),N]})]})}m.__docgenInfo={description:"",methods:[],displayName:"ErrorMessage",props:{code:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},title:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},message:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},redirectTo:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},linkText:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},massageinit:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},massagefinish:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const v={titles:"ui/components/atoms/ErrorMessage",component:m},r={args:{code:404,title:"Page not found",message:"The page you are looking for doesn´t or an other error occurred.",redirectTo:"/",linkText:"weebir.com",messageinit:"Go back, or head over ",messagefinish:" to choose a new direction "}},o={args:{code:500,title:"Internal Server Error",message:"An internal server error has occurred.",redirectTo:"/"}};var t,a,c;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    code: 404,
    title: 'Page not found',
    message: 'The page you are looking for doesn´t or an other error occurred.',
    redirectTo: '/',
    linkText: 'weebir.com',
    messageinit: 'Go back, or head over ',
    messagefinish: ' to choose a new direction '
  }
}`,...(c=(a=r.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var n,i,d;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    code: 500,
    title: 'Internal Server Error',
    message: 'An internal server error has occurred.',
    redirectTo: '/'
  }
}`,...(d=(i=o.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const w=["NotFound","ServerError"];export{r as NotFound,o as ServerError,w as __namedExportsOrder,v as default};
