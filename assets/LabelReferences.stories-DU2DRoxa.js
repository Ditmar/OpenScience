import{j as s}from"./jsx-runtime-_e34SzbC.js";import"./_variables-l0sNRNKZ.js";import"./index-DVXBtNgz.js";const e={"label-references__text":"_label-references__text_1ni5t_1","label-references--primary":"_label-references--primary_1ni5t_36","label-references--main":"_label-references--main_1ni5t_40"};function m({text:p="Referencias",colorVariant:f="primary"}){const u=()=>f==="main"?e["label-references--main"]:e["label-references--primary"];return s.jsx("div",{className:`${e["label-references"]} ${u()}`,children:s.jsx("span",{className:e["label-references__text"],children:p})})}m.__docgenInfo={description:"",methods:[],displayName:"LabelReferences",props:{text:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Referencias'",computed:!1}},colorVariant:{required:!1,tsType:{name:"union",raw:"'primary' | 'main'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'main'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}}}};const x={title:"ui/components/atoms/label-references",component:m,argTypes:{text:{control:"text"},colorVariant:{control:{type:"select",options:["primary","main"]}}}},r={args:{text:"Referencias"}},a={args:{colorVariant:"main"}};var n,t,l;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    text: 'Referencias'
  }
}`,...(l=(t=r.parameters)==null?void 0:t.docs)==null?void 0:l.source}}};var o,i,c;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    colorVariant: 'main'
  }
}`,...(c=(i=a.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const b=["Default","Primary"];export{r as Default,a as Primary,b as __namedExportsOrder,x as default};
