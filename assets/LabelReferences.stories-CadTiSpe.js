import{j as s}from"./jsx-runtime-_e34SzbC.js";import"./index-DVXBtNgz.js";function m({text:p="Referencias",colorVariant:a="primary"}){const u=()=>a==="main"?"label-references--main":"label-references--primary",d=()=>a==="main"?"label-references--main-bg":"";return s.jsx("div",{className:`label-references ${u()} ${d()}`,children:s.jsx("span",{className:"label-references__text",children:p})})}m.__docgenInfo={description:"",methods:[],displayName:"LabelReferences",props:{text:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Referencias'",computed:!1}},colorVariant:{required:!1,tsType:{name:"union",raw:"'primary' | 'main'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'main'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}}}};const y={title:"ui/components/atoms/label-references",component:m,argTypes:{text:{control:"text"},colorVariant:{control:{type:"select",options:["primary","main"]}}}},e={args:{text:"Referencias"}},r={args:{colorVariant:"main"}};var n,t,o;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    text: 'Referencias'
  }
}`,...(o=(t=e.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};var i,l,c;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    colorVariant: 'main'
  }
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const x=["Default","Primary"];export{e as Default,r as Primary,x as __namedExportsOrder,y as default};
