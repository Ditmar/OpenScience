import{j as e}from"./jsx-runtime-_e34SzbC.js";import{r as g}from"./index-DVXBtNgz.js";import{S as v}from"./SPanel-DE0FuxAu.js";import{B as x,m as S}from"./burger-menu-DQ0I7ubG.js";import"./LogoFooter-B6JMcwFo.js";import"./icons-CP78o3dy.js";import"./index-CYjD5YP1.js";import"./Tags-uwwQWnWX.js";function c({variant:m="default"}){const d=()=>m==="default"?"open-panel--default":"open-panel--color",[o,u]=g.useState(!1),f=()=>{u(!o)};return e.jsxs("div",{"data-testid":"ms-panel",children:[e.jsx(x,{onClick:f,icon:S}),e.jsx("div",{className:`open-panel ${d()}`,children:o&&e.jsx(v,{})})]})}c.__docgenInfo={description:"",methods:[],displayName:"MSPanel",props:{variant:{required:!1,tsType:{name:"union",raw:"'default' | 'color'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'color'"}]},description:"",defaultValue:{value:"'default'",computed:!1}}}};const M={title:"ui/components/molecules/side-panel/Mobile-side-panel",component:c,argTypes:{}},a={args:{variant:"default"}},r={args:{variant:"color"}};var t,s,n;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    variant: 'default'
  }
}`,...(n=(s=a.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var l,i,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: 'color'
  }
}`,...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const N=["Primary","Secondary"];export{a as Primary,r as Secondary,N as __namedExportsOrder,M as default};