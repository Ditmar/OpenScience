import{j as a}from"./jsx-runtime-_e34SzbC.js";import{I as h}from"./icons-CP78o3dy.js";import"./_variables-l0sNRNKZ.js";import{L as l}from"./share-DLYQ_wML.js";import"./index-DVXBtNgz.js";import"./index-CYjD5YP1.js";function p({text:d="Compartir",colorVariant:u="primary",icon:t}){const f=`label-share--${u}`;return a.jsxs("div",{className:`label-share ${f}`,children:[t&&a.jsx(h,{"data-testid":"share-icon",src:t,className:"label-share__icon"}),a.jsx("span",{className:"label-share__text",children:d})]})}p.__docgenInfo={description:"",methods:[],displayName:"Share",props:{text:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Compartir'",computed:!1}},colorVariant:{required:!1,tsType:{name:"union",raw:"'primary' | 'main'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'main'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},icon:{required:!0,tsType:{name:"string"},description:""}}};const j={title:"ui/components/atoms/label-share",component:p,argTypes:{text:{control:"text"},colorVariant:{control:{type:"select",options:["primary","main"]}}}},e={args:{text:"Compatir",icon:l}},r={args:{colorVariant:"main",icon:l}};var o,s,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    text: 'Compatir',
    icon: share
  }
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var i,m,c;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    colorVariant: 'main',
    icon: share
  }
}`,...(c=(m=r.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const v=["Default","Primary"];export{e as Default,r as Primary,v as __namedExportsOrder,j as default};
