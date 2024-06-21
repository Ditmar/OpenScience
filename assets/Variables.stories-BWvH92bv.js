import{j as s}from"./jsx-runtime-_e34SzbC.js";import"./_variables-l0sNRNKZ.js";import"./index-DVXBtNgz.js";const t={main:"variables--main",secondary:"variables--secondary",default:"variables--primary"};function V({text:o="ARTICULOS",colorVariant:g="primary",href:n}){const v=t[g]||t.default;return s.jsx("div",{className:`variables ${v}`,children:n?s.jsx("a",{href:n,className:"variables__articulos",children:o}):s.jsx("span",{className:"variables__articulos",children:o})})}V.__docgenInfo={description:"",methods:[],displayName:"Variables",props:{text:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'ARTICULOS'",computed:!1}},colorVariant:{required:!1,tsType:{name:"union",raw:"'primary' | 'main' | 'secondary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'main'"},{name:"literal",value:"'secondary'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},href:{required:!1,tsType:{name:"string"},description:""}}};const N={title:"ui/components/atoms/label-variables",component:V,argTypes:{colorVariant:{control:{type:"select",options:["primary","main","secondary"]}}}},a={args:{}},e={args:{colorVariant:"main",text:"VOLÚMENES"}},r={args:{colorVariant:"secondary",text:"UNIPOL.EDU.BO",href:"https://www.unipol.edu.bo"}};var i,l,c;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {}
}`,...(c=(l=a.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var m,p,d;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    colorVariant: 'main',
    text: 'VOLÚMENES'
  }
}`,...(d=(p=e.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var u,y,f;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    colorVariant: 'secondary',
    text: 'UNIPOL.EDU.BO',
    href: 'https://www.unipol.edu.bo'
  }
}`,...(f=(y=r.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};const O=["Default","Volumenes","Enlace"];export{a as Default,r as Enlace,e as Volumenes,O as __namedExportsOrder,N as default};
