import{j as e}from"./jsx-runtime-_e34SzbC.js";import"./index-DVXBtNgz.js";function m(g){const{code:o,title:p,message:u,redirectTo:l,linkText:h,messageinit:T,messagefinish:x}=g,f=o===500;return e.jsxs("div",{className:`error-message ${f?"server-error":""}`,children:[e.jsx("h1",{children:o}),e.jsx("p",{className:"title",children:p}),e.jsx("p",{className:"message",children:u}),e.jsxs("p",{className:"message",children:[T,e.jsx("a",{href:l,children:h}),x]})]})}m.__docgenInfo={description:"",methods:[],displayName:"ErrorMessage",props:{code:{required:!0,tsType:{name:"number"},description:""},title:{required:!0,tsType:{name:"string"},description:""},message:{required:!0,tsType:{name:"string"},description:""},redirectTo:{required:!0,tsType:{name:"string"},description:""},linkText:{required:!0,tsType:{name:"string"},description:""},messageinit:{required:!0,tsType:{name:"string"},description:""},messagefinish:{required:!0,tsType:{name:"string"},description:""}}};const E={titles:"ui/components/atoms/ErrorMessage",component:m},r={args:{code:404,title:"Page not found",message:"The page you are looking for doesn´t or an other error occurred.",redirectTo:"/",linkText:"weebir.com",messageinit:"Go back, or head over ",messagefinish:" to choose a new direction "}},s={args:{code:500,title:"Internal Server Error",message:"An internal server error has occurred.",redirectTo:"/"}};var n,t,i;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    code: 404,
    title: 'Page not found',
    message: 'The page you are looking for doesn´t or an other error occurred.',
    redirectTo: '/',
    linkText: 'weebir.com',
    messageinit: 'Go back, or head over ',
    messagefinish: ' to choose a new direction '
  }
}`,...(i=(t=r.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};var a,c,d;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    code: 500,
    title: 'Internal Server Error',
    message: 'An internal server error has occurred.',
    redirectTo: '/'
  }
}`,...(d=(c=s.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const j=["NotFound","ServerError"];export{r as NotFound,s as ServerError,j as __namedExportsOrder,E as default};
