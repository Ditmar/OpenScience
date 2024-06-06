import{j as r}from"./jsx-runtime-_e34SzbC.js";import"./_variables-l0sNRNKZ.js";import{S as l}from"./share-ClKaH8Ez.js";import"./index-DVXBtNgz.js";function c({text:p="Compartir",colorVariant:d="primary",icon:u}){const h=()=>d==="main"?"label-share--main":"label-share--primary";return r.jsxs("div",{className:`label-share ${h()}`,children:[r.jsx("span",{className:"label-share__icon","data-testid":"share-icon",dangerouslySetInnerHTML:{__html:u||"<div></div>"}}),r.jsx("span",{className:"label-share__text",children:p})]})}c.__docgenInfo={description:"",methods:[],displayName:"Share",props:{text:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Compartir'",computed:!1}},colorVariant:{required:!1,tsType:{name:"union",raw:"'primary' | 'main'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'main'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},icon:{required:!0,tsType:{name:"string"},description:""}}};const _={title:"ui/components/atoms/label-share",component:c,argTypes:{text:{control:"text"},colorVariant:{control:{type:"select",options:["primary","main"]}}}},e={args:{text:"Compatir",icon:l}},a={args:{colorVariant:"main",icon:l}};var t,s,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    text: 'Compatir',
    icon: share
  }
}`,...(o=(s=e.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};var n,i,m;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    colorVariant: 'main',
    icon: share
  }
}`,...(m=(i=a.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const v=["Default","Primary"];export{e as Default,a as Primary,v as __namedExportsOrder,_ as default};
