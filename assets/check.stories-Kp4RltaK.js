import{j as s}from"./jsx-runtime-DRTy3Uxn.js";import{r as J}from"./index-BBkUAzwr.js";import L from"./check-Oo9p-dDu.js";const M={check:L};function G({name:r,className:e}){const a=M[r];return s.jsx(a,{className:e})}G.__docgenInfo={description:"",methods:[],displayName:"Icon",props:{name:{required:!0,tsType:{name:"union",raw:"keyof typeof icons",elements:[{name:"literal",value:"check"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};function k({checked:r=!1,onChange:e,disabled:a=!1,variant:c="default",shape:t="square",className:o=""}){const C=()=>{a||e(!r)},H=f=>{(f.key===" "||f.key==="Enter")&&!a&&(f.preventDefault(),C())};return s.jsxs("div",{className:`check ${o} ${a?"disabled":""} check--${c} check--${t}`,onClick:C,onKeyDown:H,tabIndex:a?-1:0,role:"checkbox","aria-checked":r,"aria-disabled":a,"data-testid":"checkbox",children:[s.jsx("input",{type:"checkbox",checked:r,onChange:()=>{},disabled:a,className:"check__input",tabIndex:-1,"aria-hidden":"true"}),s.jsx("span",{className:`check__box check__box--${c} check__box--${t}`,children:r&&s.jsx(G,{name:"check",className:`check__mark check__mark--${c} check__mark--${t}`,"data-testid":"checkmark"})})]})}k.__docgenInfo={description:"",methods:[],displayName:"Check",props:{checked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"value"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'success' | 'info' | 'warning' | 'danger'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'success'"},{name:"literal",value:"'info'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'danger'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},shape:{required:!1,tsType:{name:"union",raw:"'circle' | 'square'",elements:[{name:"literal",value:"'circle'"},{name:"literal",value:"'square'"}]},description:"",defaultValue:{value:"'square'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const X={title:"ui/components/atoms/check",component:k,argTypes:{variant:{control:{type:"select",options:["default","success","info","warning","danger"]}},disabled:{control:"boolean"}}},n={render:function(e){const[a,c]=J.useState(e.checked||!1),t=o=>{c(o),e.onChange(o)};return s.jsx(k,{checked:a,onChange:t,disabled:e.disabled,variant:e.variant,shape:e.shape,className:e.className})}},i={...n,args:{checked:!1,onChange:()=>{}}},l={...n,args:{checked:!0,onChange:()=>{}}},d={...n,args:{checked:!1,disabled:!0,onChange:()=>{}}},u={...n,args:{checked:!0,disabled:!0,onChange:()=>{}}},m={...n,args:{checked:!0,variant:"success",onChange:()=>{}}},p={...n,args:{checked:!0,variant:"info",onChange:()=>{}}},h={...n,args:{checked:!0,variant:"warning",onChange:()=>{}}},g={...n,args:{checked:!0,variant:"danger",onChange:()=>{}}};var v,b,y;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  ...Template,
  args: {
    checked: false,
    onChange: () => {}
  }
}`,...(y=(b=i.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var _,x,T;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  ...Template,
  args: {
    checked: true,
    onChange: () => {}
  }
}`,...(T=(x=l.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var S,V,q;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  ...Template,
  args: {
    checked: false,
    disabled: true,
    onChange: () => {}
  }
}`,...(q=(V=d.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var w,D,N;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  ...Template,
  args: {
    checked: true,
    disabled: true,
    onChange: () => {}
  }
}`,...(N=(D=u.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var I,j,$;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  ...Template,
  args: {
    checked: true,
    variant: 'success',
    onChange: () => {}
  }
}`,...($=(j=m.parameters)==null?void 0:j.docs)==null?void 0:$.source}}};var E,K,R;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  ...Template,
  args: {
    checked: true,
    variant: 'info',
    onChange: () => {}
  }
}`,...(R=(K=p.parameters)==null?void 0:K.docs)==null?void 0:R.source}}};var W,O,z;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`{
  ...Template,
  args: {
    checked: true,
    variant: 'warning',
    onChange: () => {}
  }
}`,...(z=(O=h.parameters)==null?void 0:O.docs)==null?void 0:z.source}}};var A,B,F;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
  ...Template,
  args: {
    checked: true,
    variant: 'danger',
    onChange: () => {}
  }
}`,...(F=(B=g.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};const Y=["Default","Checked","Disabled","CheckedDisabled","SuccessVariant","InfoVariant","WarningVariant","DangerVariant"];export{l as Checked,u as CheckedDisabled,g as DangerVariant,i as Default,d as Disabled,p as InfoVariant,m as SuccessVariant,h as WarningVariant,Y as __namedExportsOrder,X as default};
