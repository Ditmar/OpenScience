import{j as n}from"./jsx-runtime-DRTy3Uxn.js";import"./index-BBkUAzwr.js";const e={"button-variant":"_button-variant_1aia1_66","button-variant-label":"_button-variant-label_1aia1_77","button-variant--secondary":"_button-variant--secondary_1aia1_83","button-variant--tertiary":"_button-variant--tertiary_1aia1_100"};function y({children:v,variant:R="primary",onClick:b}){const _=e[`button-variant--${R}`];return n.jsx("button",{className:`${e["button-variant"]} ${_}`,onClick:b,children:n.jsx("span",{className:e["button-variant-label"],children:v})})}y.__docgenInfo={description:"",methods:[],displayName:"ButtonWithVariants",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'tertiary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'tertiary'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const h={title:"ui/components/atoms/button-with-variants",component:y,argTypes:{onClick:{action:"click"},variant:{control:"select",options:["primary","secondary","tertiary"]}}},a={args:{children:"ABRIR IMAGEN",variant:"primary"}},r={args:{children:"ABRIR IMAGEN",variant:"secondary"}},t={args:{children:"ABRIR IMAGEN",variant:"tertiary"}};var i,s,o;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: 'ABRIR IMAGEN',
    variant: 'primary'
  }
}`,...(o=(s=a.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};var c,u,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: 'ABRIR IMAGEN',
    variant: 'secondary'
  }
}`,...(d=(u=r.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var l,m,p;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: 'ABRIR IMAGEN',
    variant: 'tertiary'
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const A=["Primary","Secondary","Tertiary"];export{a as Primary,r as Secondary,t as Tertiary,A as __namedExportsOrder,h as default};
