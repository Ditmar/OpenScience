import{j as B}from"./jsx-runtime-BlDnFLNC.js";import{r as F}from"./index-Cu9bd8lq.js";import{C as O}from"./check-DPKWULmV.js";import"./check-BE8zjXxp.js";const M={title:"ui/components/atoms/check",component:O,argTypes:{variant:{control:{type:"select",options:["default","success","info","warning","danger"]}},disabled:{control:"boolean"}}},e={render:function(a){const[q,z]=F.useState(a.checked||!1),A=m=>{z(m),a.onChange(m)};return B.jsx(O,{checked:q,onChange:A,disabled:a.disabled,variant:a.variant,shape:a.shape,className:a.className})}},r={...e,args:{checked:!1,onChange:()=>{}}},n={...e,args:{checked:!0,onChange:()=>{}}},s={...e,args:{checked:!1,disabled:!0,onChange:()=>{}}},c={...e,args:{checked:!0,disabled:!0,onChange:()=>{}}},t={...e,args:{checked:!0,variant:"success",onChange:()=>{}}},o={...e,args:{checked:!0,variant:"info",onChange:()=>{}}},d={...e,args:{checked:!0,variant:"warning",onChange:()=>{}}},i={...e,args:{checked:!0,variant:"danger",onChange:()=>{}}};var p,u,g;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...Template,
  args: {
    checked: false,
    onChange: () => {}
  }
}`,...(g=(u=r.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var h,l,C;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...Template,
  args: {
    checked: true,
    onChange: () => {}
  }
}`,...(C=(l=n.parameters)==null?void 0:l.docs)==null?void 0:C.source}}};var k,f,b;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...Template,
  args: {
    checked: false,
    disabled: true,
    onChange: () => {}
  }
}`,...(b=(f=s.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var S,v,T;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  ...Template,
  args: {
    checked: true,
    disabled: true,
    onChange: () => {}
  }
}`,...(T=(v=c.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var D,V,x;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`{
  ...Template,
  args: {
    checked: true,
    variant: 'success',
    onChange: () => {}
  }
}`,...(x=(V=t.parameters)==null?void 0:V.docs)==null?void 0:x.source}}};var j,w,E;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...Template,
  args: {
    checked: true,
    variant: 'info',
    onChange: () => {}
  }
}`,...(E=(w=o.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var y,I,N;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...Template,
  args: {
    checked: true,
    variant: 'warning',
    onChange: () => {}
  }
}`,...(N=(I=d.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var R,W,_;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  ...Template,
  args: {
    checked: true,
    variant: 'danger',
    onChange: () => {}
  }
}`,...(_=(W=i.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};const P=["Default","Checked","Disabled","CheckedDisabled","SuccessVariant","InfoVariant","WarningVariant","DangerVariant"];export{n as Checked,c as CheckedDisabled,i as DangerVariant,r as Default,s as Disabled,o as InfoVariant,t as SuccessVariant,d as WarningVariant,P as __namedExportsOrder,M as default};
