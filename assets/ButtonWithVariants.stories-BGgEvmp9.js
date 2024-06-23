import{j as t}from"./jsx-runtime-_e34SzbC.js";import"./index-DVXBtNgz.js";function u(y){const{children:v,variant:R="primary"}=y,g=`button-variant--${R}`;return t.jsx("button",{className:`button-variant ${g}`,children:t.jsx("span",{className:"button-variant-label",children:v})})}u.__docgenInfo={description:"",methods:[],displayName:"ButtonWithVariants",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'tertiary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'tertiary'"}]},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const A={title:"ui/components/atoms/button-with-variants",component:u,argTypes:{onClick:{action:"click"},variant:{control:"select",options:["primary","secondary","tertiary"]}}},r={args:{children:"ABRIR IMAGEN",variant:"primary"}},a={args:{children:"ABRIR IMAGEN",variant:"secondary"}},e={args:{children:"ABRIR IMAGEN",variant:"tertiary"}};var n,s,i;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    children: 'ABRIR IMAGEN',
    variant: 'primary'
  }
}`,...(i=(s=r.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var o,c,d;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    children: 'ABRIR IMAGEN',
    variant: 'secondary'
  }
}`,...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var m,p,l;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: 'ABRIR IMAGEN',
    variant: 'tertiary'
  }
}`,...(l=(p=e.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const N=["Primary","Secondary","Tertiary"];export{r as Primary,a as Secondary,e as Tertiary,N as __namedExportsOrder,A as default};
