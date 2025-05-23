import{j as e}from"./jsx-runtime-DRTy3Uxn.js";import"./index-BBkUAzwr.js";const v="_title_xzzh4_65",y="_message_xzzh4_87",r={"error-message":"_error-message_xzzh4_1",title:v,message:y,"server-error":"_server-error_xzzh4_116"};function g(l){const{code:t,title:p,message:u,redirectTo:h,linkText:x,messageinit:T,messagefinish:f}=l,_=t===500;return e.jsxs("div",{className:`${r["error-message"]} ${_?r["server-error"]:""}`,children:[e.jsx("h1",{children:t}),e.jsx("p",{className:r.title,children:p}),e.jsx("p",{className:r.message,children:u}),e.jsxs("p",{className:r.message,children:[T,e.jsx("a",{href:h,className:r.a,children:x}),f]})]})}g.__docgenInfo={description:"",methods:[],displayName:"ErrorMessage",props:{code:{required:!0,tsType:{name:"number"},description:""},title:{required:!0,tsType:{name:"string"},description:""},message:{required:!0,tsType:{name:"string"},description:""},redirectTo:{required:!0,tsType:{name:"string"},description:""},linkText:{required:!1,tsType:{name:"string"},description:""},messageinit:{required:!1,tsType:{name:"string"},description:""},messagefinish:{required:!1,tsType:{name:"string"},description:""}}};const k={titles:"ui/components/atoms/error-message",component:g},s={args:{code:404,title:"Page not found",message:"The page you are looking for doesn´t or an other error occurred.",redirectTo:"/",linkText:"weebir.com",messageinit:"Go back, or head over ",messagefinish:" to choose a new direction "}},o={args:{code:500,title:"Internal Server Error",message:"An internal server error has occurred.",redirectTo:"/"}};var n,a,i;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    code: 404,
    title: 'Page not found',
    message: 'The page you are looking for doesn´t or an other error occurred.',
    redirectTo: '/',
    linkText: 'weebir.com',
    messageinit: 'Go back, or head over ',
    messagefinish: ' to choose a new direction '
  }
}`,...(i=(a=s.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var c,d,m;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    code: 500,
    title: 'Internal Server Error',
    message: 'An internal server error has occurred.',
    redirectTo: '/'
  }
}`,...(m=(d=o.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const z=["NotFound","ServerError"];export{s as NotFound,o as ServerError,z as __namedExportsOrder,k as default};
