import{j as e}from"./jsx-runtime-BlDnFLNC.js";import{r as g}from"./index-Cu9bd8lq.js";import{S as v}from"./SPanel-Bq9teWc0.js";import{B as x,m as S}from"./burger-menu-CUCCNEmY.js";import"./LogoFooter-DPLdcGQy.js";import"./icons-Dqqr9IZ9.js";import"./index-gagdKHFB.js";import"./Tags-S2dYF3Ma.js";import"./logo-E-0lPbQQ.js";function m({variant:c="default"}){const d=()=>c==="default"?"open-panel--default":"open-panel--color",[o,u]=g.useState(!1),f=()=>{u(!o)};return e.jsxs("div",{"data-testid":"ms-panel",children:[e.jsx(x,{onClick:f,icon:S}),e.jsx("div",{className:`open-panel ${d()}`,children:o&&e.jsx(v,{})})]})}m.__docgenInfo={description:"",methods:[],displayName:"MSPanel",props:{variant:{required:!1,tsType:{name:"union",raw:"'default' | 'color'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'color'"}]},description:"",defaultValue:{value:"'default'",computed:!1}}}};const N={title:"ui/components/molecules/side-panel/Mobile-side-panel",component:m,argTypes:{}},a={args:{variant:"default"}},r={args:{variant:"color"}};var t,s,n;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    variant: 'default'
  }
}`,...(n=(s=a.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var l,i,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: 'color'
  }
}`,...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const O=["Primary","Secondary"];export{a as Primary,r as Secondary,O as __namedExportsOrder,N as default};
