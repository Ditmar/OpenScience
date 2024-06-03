import{j as e}from"./jsx-runtime-_e34SzbC.js";import"./index-DVXBtNgz.js";function v(y){const{color:g="primary",size:_="small",variant:s="solid"}=y;return e.jsx("div",{className:`divider divider--${g} divider--${_} divider--${s}`,children:s==="points"&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"divider__dot"}),e.jsx("span",{className:"divider__dot"}),e.jsx("span",{className:"divider__dot"})]})})}v.__docgenInfo={description:"",methods:[],displayName:"PointsDivider",props:{color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'tertiary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'tertiary'"}]},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:""},variant:{required:!1,tsType:{name:"union",raw:"'solid-line' | 'segmented-line' | 'points'",elements:[{name:"literal",value:"'solid-line'"},{name:"literal",value:"'segmented-line'"},{name:"literal",value:"'points'"}]},description:""}}};const S={title:"ui/components/atoms/points-divider",component:v,argTypes:{color:{control:"select",options:["primary","secondary","tertiary"]},size:{control:"select",options:["small","medium","large"]},variant:{control:"select",options:["solid-line","segmented-line","points"]}}},r={args:{color:"primary",size:"medium",variant:"solid-line"}},a={args:{color:"secondary",size:"large",variant:"segmented-line"}},i={args:{color:"tertiary",size:"small",variant:"points"}};var n,o,t;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    size: 'medium',
    variant: 'solid-line'
  }
}`,...(t=(o=r.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};var l,m,d;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    color: 'secondary',
    size: 'large',
    variant: 'segmented-line'
  }
}`,...(d=(m=a.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var c,p,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    color: 'tertiary',
    size: 'small',
    variant: 'points'
  }
}`,...(u=(p=i.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const f=["PrimarySolidLine","SecondarySegmentedLine","TertiaryPoints"];export{r as PrimarySolidLine,a as SecondarySegmentedLine,i as TertiaryPoints,f as __namedExportsOrder,S as default};
