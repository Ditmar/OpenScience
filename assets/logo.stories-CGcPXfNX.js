import{j as e}from"./jsx-runtime-DRTy3Uxn.js";import"./_variables-l0sNRNKZ.js";import"./index-BBkUAzwr.js";const n={"logo-container":"_logo-container_1ul57_1","logo-container--default":"_logo-container--default_1ul57_40","logo-container--primary":"_logo-container--primary_1ul57_43","logo-container--secondary":"_logo-container--secondary_1ul57_46","logo-image":"_logo-image_1ul57_50"};function y(_){const{src:f,alt:v,variant:x="primary"}=_,h=`logo-container--${x}`;return e.jsxs("header",{className:`${n["logo-container"]}  ${n[h]}`,children:[e.jsx("div",{children:e.jsx("img",{src:f,alt:v,className:n["logo-image"]})}),e.jsx("div",{})]})}y.__docgenInfo={description:"",methods:[],displayName:"Logo",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},src:{required:!1,tsType:{name:"string"},description:""},text:{required:!1,tsType:{name:"string"},description:""},alt:{required:!1,tsType:{name:"string"},description:""},variant:{required:!0,tsType:{name:"union",raw:"'default' | 'primary' | 'secondary'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:""}}};const j=""+new URL("logo-BruTFBu2.svg",import.meta.url).href,s=j,I={title:"ui/components/atoms/logo",component:y},r={args:{src:s,variant:"default"}},a={args:{src:s,variant:"primary"}},o={args:{src:s,variant:"secondary"}};var t,i,c;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    src: logoImage,
    variant: 'default'
  }
}`,...(c=(i=r.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var l,m,d;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    src: logoImage,
    variant: 'primary'
  }
}`,...(d=(m=a.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var g,p,u;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    src: logoImage,
    variant: 'secondary'
  }
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const N=["Default","Primary","Secondary"];export{r as Default,a as Primary,o as Secondary,N as __namedExportsOrder,I as default};
