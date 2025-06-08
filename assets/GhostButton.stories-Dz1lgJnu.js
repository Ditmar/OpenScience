import{j as e}from"./jsx-runtime-BlDnFLNC.js";import"./index-Cu9bd8lq.js";import{T as W}from"./ThemeProvider-DDNvUqn8.js";import{M as F}from"./ThemeSwitcher-DsyJrYTA.js";import{c as O}from"./circle-quarters-VszW7wZB.js";import{B as $}from"./Button-DafWJAys.js";import"./DefaultPropsProvider-DcRJznjO.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-B34fLoo2.js";import"./index-Cplt8kMj.js";import"./Select-CpEekcHS.js";import"./memoTheme-CPnQs7hc.js";import"./extends-CF3RwP-h.js";import"./assertThisInitialized-C1KLUksq.js";import"./index-BWPb3MHu.js";import"./createSvgIcon-CHPF6Y__.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./CircularProgress-BGz3szpo.js";function f({size:t=24,className:c,"data-testid":a}){const u=O.replace(/fill="[^"]*"/g,'fill="currentColor"').replace(/(width|height)="[^"]*"/g,"");return e.jsx("span",{className:c,style:{display:"inline-block",width:`${String(t)}px`,height:`${String(t)}px`,verticalAlign:"middle",lineHeight:1},dangerouslySetInnerHTML:{__html:u},"data-testid":a})}f.__docgenInfo={description:"",methods:[],displayName:"Icon",props:{size:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"24",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},"data-testid":{required:!1,tsType:{name:"string"},description:""}}};const Q="_primary_fyepw_16",J="_dark_fyepw_20",K="_intenseviolet_fyepw_24",U="_violet_fyepw_28",X="_teritary_fyepw_32",Y="_green_fyepw_36",Z="_red_fyepw_40",ee="_yellow_fyepw_44",r={"ghost-button":"_ghost-button_fyepw_1",primary:Q,dark:J,intenseviolet:K,violet:U,teritary:X,green:Y,red:Z,yellow:ee,"size-small":"_size-small_fyepw_48","size-medium":"_size-medium_fyepw_53","size-large":"_size-large_fyepw_58"},te={small:18,medium:20,large:24};function n({label:t,variant:c="primary",size:a="medium",iconLeft:u=!1,iconRight:M=!1,disabled:A,className:C="",onClick:E,fullWidth:H=!1,type:N="button",color:P}){const g=te[a];let p=r["size-medium"];a==="small"?p=r["size-small"]:a==="large"&&(p=r["size-large"]);const D=[r.ghostButton,r[c],p,C].filter(Boolean).join(" ");return e.jsx($,{className:D,disabled:A,fullWidth:H,onClick:E,type:N,color:P,startIcon:u?e.jsx("span",{"data-testid":"start-icon",children:e.jsx(f,{size:g})}):void 0,endIcon:M?e.jsx("span",{"data-testid":"end-icon",children:e.jsx(f,{size:g})}):void 0,children:t})}n.__docgenInfo={description:"",methods:[],displayName:"GhostButton",props:{label:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:`| 'primary'
| 'dark'
| 'intenseviolet'
| 'violet'
| 'teritary'
| 'green'
| 'red'
| 'yellow'`,elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'dark'"},{name:"literal",value:"'intenseviolet'"},{name:"literal",value:"'violet'"},{name:"literal",value:"'teritary'"},{name:"literal",value:"'green'"},{name:"literal",value:"'red'"},{name:"literal",value:"'yellow'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},iconLeft:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},iconRight:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},onClick:{required:!1,tsType:{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},type:{required:!1,tsType:{name:"ButtonProps['type']",raw:"ButtonProps['type']"},description:"",defaultValue:{value:"'button'",computed:!1}},color:{required:!1,tsType:{name:"ButtonProps['color']",raw:"ButtonProps['color']"},description:""}},composes:["Omit"]};const _e={title:"Molecules/GhostButton",component:n,decorators:[t=>e.jsx(W,{children:e.jsxs("div",{style:{padding:24},children:[e.jsx("div",{style:{display:"flex",justifyContent:"flex-end",marginBottom:24},children:e.jsx(F,{})}),e.jsx(t,{})]})})],argTypes:{variant:{control:"select",options:["primary","dark","intenseviolet","violet","teritary","green","red","yellow"]},size:{control:"select",options:["small","medium","large"]},disabled:{control:"boolean"},label:{control:"text"},iconLeft:{control:"boolean"},iconRight:{control:"boolean"}}},i={args:{label:"Ghost Button",variant:"teritary",size:"medium",disabled:!1}},s={args:{label:"Ghost Button with Icons",iconLeft:!0,iconRight:!0,variant:"primary",size:"medium"}},o={args:{label:"Disabled Ghost Button",disabled:!0,iconLeft:!0,iconRight:!0,variant:"primary",size:"medium"}},y=["primary","dark","intenseviolet","violet","teritary","green","red","yellow"],l={render:()=>e.jsx(e.Fragment,{children:y.map(t=>e.jsx(n,{variant:t,size:"small",label:"GhostButton variant",iconLeft:!0,iconRight:!0,style:{margin:8}},t))})},m={render:()=>e.jsx(e.Fragment,{children:y.map(t=>e.jsx(n,{variant:t,size:"medium",label:"GhostButton variant",iconLeft:!0,iconRight:!0,style:{margin:8}},t))})},d={render:()=>e.jsx(e.Fragment,{children:y.map(t=>e.jsx(n,{variant:t,size:"large",label:"GhostButton variant",iconLeft:!0,iconRight:!0,style:{margin:8}},t))})};var v,h,_;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'Ghost Button',
    variant: 'teritary',
    size: 'medium',
    disabled: false
  }
}`,...(_=(h=i.parameters)==null?void 0:h.docs)==null?void 0:_.source}}};var b,w,B;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'Ghost Button with Icons',
    iconLeft: true,
    iconRight: true,
    variant: 'primary',
    size: 'medium'
  }
}`,...(B=(w=s.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var x,z,j;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Ghost Button',
    disabled: true,
    iconLeft: true,
    iconRight: true,
    variant: 'primary',
    size: 'medium'
  }
}`,...(j=(z=o.parameters)==null?void 0:z.docs)==null?void 0:j.source}}};var T,G,L;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <>
      {variants.map(variant => <GhostButton key={variant} variant={variant} size="small" label="GhostButton variant" iconLeft iconRight style={{
      margin: 8
    }} />)}
    </>
}`,...(L=(G=l.parameters)==null?void 0:G.docs)==null?void 0:L.source}}};var R,q,V;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <>
      {variants.map(variant => <GhostButton key={variant} variant={variant} size="medium" label="GhostButton variant" iconLeft iconRight style={{
      margin: 8
    }} />)}
    </>
}`,...(V=(q=m.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};var k,S,I;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <>
      {variants.map(variant => <GhostButton key={variant} variant={variant} size="large" label="GhostButton variant" iconLeft iconRight style={{
      margin: 8
    }} />)}
    </>
}`,...(I=(S=d.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};const be=["Primary","WithIcons","Disabled","AllVariantssmall","AllVariantsmedium","AllVariantslarge"];export{d as AllVariantslarge,m as AllVariantsmedium,l as AllVariantssmall,o as Disabled,i as Primary,s as WithIcons,be as __namedExportsOrder,_e as default};
