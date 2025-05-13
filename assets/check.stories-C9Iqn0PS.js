import{j as r}from"./jsx-runtime-BlDnFLNC.js";import{r as F}from"./index-Cu9bd8lq.js";function k({checked:s=!1,onChange:e,disabled:n=!1,variant:g="default",shape:t="square",className:c=""}){const v=()=>{n||e(!s)},A=f=>{(f.key===" "||f.key==="Enter")&&(f.preventDefault(),v())};return r.jsxs("div",{className:`check ${c} ${n?"disabled":""} check--${t}`,onClick:v,onKeyDown:A,tabIndex:n?-1:0,role:"checkbox","aria-checked":s,"aria-disabled":n,"data-testid":"checkbox",children:[r.jsx("input",{type:"checkbox",checked:s,onChange:()=>{},disabled:n,className:"check__input",tabIndex:-1,"aria-hidden":"true"}),r.jsx("span",{className:`check__box check__box--${g} check__box--${t}`,children:s&&r.jsx("svg",{className:`check__mark check__mark--${t}`,viewBox:"0 0 12 10",fill:"none",xmlns:"http://www.w3.org/2000/svg","data-testid":"checkmark",children:r.jsx("path",{d:"M1 5L4.5 8.5L11 1",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]})}k.__docgenInfo={description:"",methods:[],displayName:"Check",props:{checked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"value"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'success' | 'info' | 'warning' | 'danger'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'success'"},{name:"literal",value:"'info'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'danger'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},shape:{required:!1,tsType:{name:"union",raw:"'circle' | 'square'",elements:[{name:"literal",value:"'circle'"},{name:"literal",value:"'square'"}]},description:"",defaultValue:{value:"'square'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const J={title:"ui/components/atoms/check",component:k,argTypes:{variant:{control:{type:"select",options:["default","success","info","warning","danger"]}},disabled:{control:"boolean"}}},a={render:function(e){const[n,g]=F.useState(e.checked||!1),t=c=>{g(c),e.onChange(c)};return r.jsx(k,{checked:n,onChange:t,disabled:e.disabled,variant:e.variant,shape:e.shape,className:e.className})}},o={...a,args:{checked:!1,onChange:()=>{}}},i={...a,args:{checked:!0,onChange:()=>{}}},l={...a,args:{checked:!1,disabled:!0,onChange:()=>{}}},d={...a,args:{checked:!0,disabled:!0,onChange:()=>{}}},u={...a,args:{checked:!0,variant:"success",onChange:()=>{}}},m={...a,args:{checked:!0,variant:"info",onChange:()=>{}}},p={...a,args:{checked:!0,variant:"warning",onChange:()=>{}}},h={...a,args:{checked:!0,variant:"danger",onChange:()=>{}}};var C,b,x;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  ...Template,
  args: {
    checked: false,
    onChange: () => {}
  }
}`,...(x=(b=o.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var y,T,_;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...Template,
  args: {
    checked: true,
    onChange: () => {}
  }
}`,...(_=(T=i.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var w,V,D;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  ...Template,
  args: {
    checked: false,
    disabled: true,
    onChange: () => {}
  }
}`,...(D=(V=l.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};var S,q,j;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  ...Template,
  args: {
    checked: true,
    disabled: true,
    onChange: () => {}
  }
}`,...(j=(q=d.parameters)==null?void 0:q.docs)==null?void 0:j.source}}};var N,$,I;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  ...Template,
  args: {
    checked: true,
    variant: 'success',
    onChange: () => {}
  }
}`,...(I=($=u.parameters)==null?void 0:$.docs)==null?void 0:I.source}}};var E,L,W;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  ...Template,
  args: {
    checked: true,
    variant: 'info',
    onChange: () => {}
  }
}`,...(W=(L=m.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var K,R,B;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`{
  ...Template,
  args: {
    checked: true,
    variant: 'warning',
    onChange: () => {}
  }
}`,...(B=(R=p.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};var M,O,z;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
  ...Template,
  args: {
    checked: true,
    variant: 'danger',
    onChange: () => {}
  }
}`,...(z=(O=h.parameters)==null?void 0:O.docs)==null?void 0:z.source}}};const P=["Default","Checked","Disabled","CheckedDisabled","SuccessVariant","InfoVariant","WarningVariant","DangerVariant"];export{i as Checked,d as CheckedDisabled,h as DangerVariant,o as Default,l as Disabled,m as InfoVariant,u as SuccessVariant,p as WarningVariant,P as __namedExportsOrder,J as default};
