import{j as e}from"./jsx-runtime-DRTy3Uxn.js";import{r as u}from"./index-BBkUAzwr.js";import{V as a}from"./VariableButton-CaGjwcEG.js";import{I as o,W as l,F as f,T as h}from"./telegram-pinA9r2s.js";import{P as x}from"./pdf-CD9LdSfp.js";import{L as g}from"./share-DLYQ_wML.js";import"./icons-DNNtq2Yd.js";import"./index-YMbfICiA.js";function m({onClick:t}){const[s,p]=u.useState(!1),d=()=>{p(!s),t&&t()};return e.jsxs("div",{className:"button-pdf-share","data-testid":"pdf-share-button",children:[e.jsx(a,{icon:x}),e.jsxs("div",{className:"share-container",children:[e.jsx(a,{icon:g,onClick:d}),e.jsxs("div",{className:"share-button",children:[s&&e.jsx(o,{icon:l}),s&&e.jsx(o,{icon:f}),s&&e.jsx(o,{icon:h})]})]})]})}m.__docgenInfo={description:"",methods:[],displayName:"ButtonsPdfShare",props:{icon:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const B={title:"ui/components/molecules/PdfShareButton",component:m,argTypes:{onClick:{action:"clicked"}}},r={args:{}};var n,i,c;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {}
}`,...(c=(i=r.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const T=["Primary"];export{r as Primary,T as __namedExportsOrder,B as default};