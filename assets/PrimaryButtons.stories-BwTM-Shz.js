import{j as t}from"./jsx-runtime-_e34SzbC.js";import"./index-DVXBtNgz.js";function u(y){const{children:R,variant:S,onClick:v}=y;return t.jsx("div",{children:t.jsx("button",{className:`buttons-primary__button buttons-primary__button--${S}`,onClick:v,children:t.jsx("span",{className:"buttons-primary__label ",children:R})})})}u.__docgenInfo={description:"",methods:[],displayName:"PrimaryButtons",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},variant:{required:!0,tsType:{name:"union",raw:"'primary' | 'secondary' | 'tertiary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'tertiary'"}]},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const E={title:"ui/components/atoms/PrimaryButtons",component:u,argTypes:{onClick:{action:"click"},variant:{control:"select",options:["primary","secondary","tertiary"]}}},r={args:{children:"INICIAR SESION",variant:"primary"}},e={args:{children:"REGISTRARSE",variant:"secondary"}},a={args:{children:"REGISTRARSE",variant:"tertiary"}};var n,s,i;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    children: 'INICIAR SESION',
    variant: 'primary'
  }
}`,...(i=(s=r.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var o,c,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    children: 'REGISTRARSE',
    variant: 'secondary'
  }
}`,...(m=(c=e.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var d,p,l;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: 'REGISTRARSE',
    variant: 'tertiary'
  }
}`,...(l=(p=a.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const h=["Primary","Secondary","Tertiary"];export{r as Primary,e as Secondary,a as Tertiary,h as __namedExportsOrder,E as default};
