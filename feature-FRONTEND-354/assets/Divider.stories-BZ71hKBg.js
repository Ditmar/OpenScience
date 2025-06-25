import{j as _}from"./jsx-runtime-BlDnFLNC.js";import"./index-Cu9bd8lq.js";const h={"divider--solid":"_divider--solid_gxir4_1","divider--dotted":"_divider--dotted_gxir4_11","divider--dashed":"_divider--dashed_gxir4_21"};function p(v){const{variant:u}=v,g=`divider--${u}`;return _.jsx("hr",{className:h[g]})}p.__docgenInfo={description:"",methods:[],displayName:"Divider",props:{variant:{required:!0,tsType:{name:"union",raw:"'solid' | 'dotted' | 'dashed'",elements:[{name:"literal",value:"'solid'"},{name:"literal",value:"'dotted'"},{name:"literal",value:"'dashed'"}]},description:""}}};const y={title:"ui/components/atoms/divider",component:p,argTypes:{variant:{control:{type:"select"},options:["solid","dotted","dashed"]}}},e={args:{variant:"solid"}},r={args:{variant:"dotted"}},a={args:{variant:"dashed"}};var s,d,t;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    variant: 'solid'
  }
}`,...(t=(d=e.parameters)==null?void 0:d.docs)==null?void 0:t.source}}};var o,i,n;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    variant: 'dotted'
  }
}`,...(n=(i=r.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};var c,l,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    variant: 'dashed'
  }
}`,...(m=(l=a.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const S=["Solid","Dotted","Dashed"];export{a as Dashed,r as Dotted,e as Solid,S as __namedExportsOrder,y as default};
