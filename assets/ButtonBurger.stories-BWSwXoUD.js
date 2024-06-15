import{j as a}from"./jsx-runtime-_e34SzbC.js";import{I as y}from"./icons-CP78o3dy.js";import"./index-DVXBtNgz.js";import"./index-CYjD5YP1.js";function l({icon:n,color:u,onClick:d}){const g=`button-icon--${u}`;return a.jsx("button",{className:`button-burger ${g}`,"aria-label":"Menu",onClick:d,children:n&&a.jsx(y,{"data-testid":"button-icon",src:n,className:"button-icon"})})}l.__docgenInfo={description:"",methods:[],displayName:"ButtonBurger",props:{variant:{required:!1,tsType:{name:"union",raw:"'main' | 'secondary'",elements:[{name:"literal",value:"'main'"},{name:"literal",value:"'secondary'"}]},description:""},icon:{required:!1,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const p=`<?xml version="1.0" ?>
\r<!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg width="800px" height="800px" viewBox="0 0 12 12" enable-background="new 0 0 12 12" id="Слой_1" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
\r<g>
\r<rect fill="#1D1D1B" height="1" width="11" x="0.5" y="5.5"/>
\r<rect fill="#1D1D1B" height="1" width="11" x="0.5" y="2.5"/>
\r<rect fill="#1D1D1B" height="1" width="11" x="0.5" y="8.5"/>
\r</g>
\r</svg>`,b={title:"ui/components/atoms/button-burger",component:l,argTypes:{onClick:{action:"click"}}},e={args:{variant:"main",icon:p}},r={args:{variant:"secondary",icon:p}};var t,o,i;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    variant: 'main',
    icon: burger
  }
}`,...(i=(o=e.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var s,c,m;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    icon: burger
  }
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const f=["Primary","Secondary"];export{e as Primary,r as Secondary,f as __namedExportsOrder,b as default};
