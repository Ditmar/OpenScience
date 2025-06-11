import{j as e}from"./jsx-runtime-BlDnFLNC.js";import"./index-Cu9bd8lq.js";import{T as Q}from"./ThemeProvider-DDNvUqn8.js";import{M as J}from"./ThemeSwitcher-DsyJrYTA.js";import{c as K}from"./circle-quarters-DZ5eiePA.js";import{B as U}from"./Button-DafWJAys.js";import"./DefaultPropsProvider-DcRJznjO.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-B34fLoo2.js";import"./index-Cplt8kMj.js";import"./Select-CpEekcHS.js";import"./memoTheme-CPnQs7hc.js";import"./extends-CF3RwP-h.js";import"./assertThisInitialized-C1KLUksq.js";import"./index-BWPb3MHu.js";import"./createSvgIcon-CHPF6Y__.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./CircularProgress-BGz3szpo.js";function g({size:t=24,className:u,"data-testid":r}){return e.jsx("span",{className:u,style:{display:"inline-block",width:t,height:t,verticalAlign:"middle",lineHeight:1},dangerouslySetInnerHTML:{__html:K},"data-testid":r})}g.__docgenInfo={description:"",methods:[],displayName:"Icon",props:{size:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"24",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},"data-testid":{required:!1,tsType:{name:"string"},description:""}}};const X="_primary_njjo5_16",Y="_dark_njjo5_20",Z="_intenseviolet_njjo5_24",ee="_violet_njjo5_28",te="_tertiary_njjo5_32",ae="_green_njjo5_36",re="_red_njjo5_40",ne="_yellow_njjo5_44",n={"ghost-button":"_ghost-button_njjo5_1",primary:X,dark:Y,intenseviolet:Z,violet:ee,tertiary:te,green:ae,red:re,yellow:ne,"size-small":"_size-small_njjo5_48","size-medium":"_size-medium_njjo5_53","size-large":"_size-large_njjo5_58"},ie={small:18,medium:20,large:24};function a({label:t,variant:u="primary",size:r="medium",iconLeft:H=!1,iconRight:N=!1,disabled:P,className:W="",onClick:C,fullWidth:D=!1,type:F="button",color:O}){const v=ie[r];let p=n["size-medium"];r==="small"?p=n["size-small"]:r==="large"&&(p=n["size-large"]);const $=[n.ghostButton,n[u],p,W].filter(Boolean).join(" ");return e.jsx(U,{className:$,disabled:P,fullWidth:D,onClick:C,type:F,color:O,startIcon:H?e.jsx("span",{"data-testid":"start-icon",children:e.jsx(g,{size:v})}):void 0,endIcon:N?e.jsx("span",{"data-testid":"end-icon",children:e.jsx(g,{size:v})}):void 0,children:t})}a.__docgenInfo={description:"",methods:[],displayName:"GhostButton",props:{label:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:`| 'primary'
| 'dark'
| 'intenseviolet'
| 'violet'
| 'tertiary'
| 'green'
| 'red'
| 'yellow'`,elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'dark'"},{name:"literal",value:"'intenseviolet'"},{name:"literal",value:"'violet'"},{name:"literal",value:"'tertiary'"},{name:"literal",value:"'green'"},{name:"literal",value:"'red'"},{name:"literal",value:"'yellow'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},iconLeft:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},iconRight:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},onClick:{required:!1,tsType:{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},type:{required:!1,tsType:{name:"ButtonProps['type']",raw:"ButtonProps['type']"},description:"",defaultValue:{value:"'button'",computed:!1}},color:{required:!1,tsType:{name:"ButtonProps['color']",raw:"ButtonProps['color']"},description:""}},composes:["Omit"]};const Be={title:"Molecules/GhostButton",component:a,decorators:[t=>e.jsx(Q,{children:e.jsxs("div",{style:{padding:24},children:[e.jsx("div",{style:{display:"flex",justifyContent:"flex-end",marginBottom:24},children:e.jsx(J,{})}),e.jsx(t,{})]})})],argTypes:{variant:{control:"select",options:["primary","dark","intenseviolet","violet","tertiary","green","red","yellow"]},size:{control:"select",options:["small","medium","large"]},disabled:{control:"boolean"},label:{control:"text"},iconLeft:{control:"boolean"},iconRight:{control:"boolean"}}},i={args:{label:"Ghost Button",variant:"tertiary",size:"medium",disabled:!1}},s={args:{label:"Ghost Button with Icons",iconLeft:!0,iconRight:!0,variant:"primary",size:"medium"}},o={args:{label:"Disabled Ghost Button",disabled:!0,iconLeft:!0,iconRight:!0,variant:"primary",size:"medium"}},y=["primary","dark","intenseviolet","violet","tertiary","green","red","yellow"],l={render:()=>e.jsx(e.Fragment,{children:y.map(t=>e.jsx(a,{variant:t,size:"small",label:"GhostButton variant",iconLeft:!0,iconRight:!0,style:{margin:8}},t))})},m={render:()=>e.jsx(e.Fragment,{children:y.map(t=>e.jsx(a,{variant:t,size:"medium",label:"GhostButton variant",iconLeft:!0,iconRight:!0,style:{margin:8}},t))})},d={render:()=>e.jsx(e.Fragment,{children:y.map(t=>e.jsx(a,{variant:t,size:"large",label:"GhostButton variant",iconLeft:!0,iconRight:!0,style:{margin:8}},t))})},c={render:()=>e.jsx(e.Fragment,{children:["small","medium","large"].map(t=>e.jsx(a,{label:`Size ${t}`,variant:"primary",size:t,iconLeft:!0,iconRight:!0,style:{margin:8}},t))})};var f,h,j;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'Ghost Button',
    variant: 'tertiary',
    size: 'medium',
    disabled: false
  }
}`,...(j=(h=i.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};var _,b,z;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: 'Ghost Button with Icons',
    iconLeft: true,
    iconRight: true,
    variant: 'primary',
    size: 'medium'
  }
}`,...(z=(b=s.parameters)==null?void 0:b.docs)==null?void 0:z.source}}};var B,x,T;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Ghost Button',
    disabled: true,
    iconLeft: true,
    iconRight: true,
    variant: 'primary',
    size: 'medium'
  }
}`,...(T=(x=o.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var G,L,R;l.parameters={...l.parameters,docs:{...(G=l.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <>
      {variants.map(variant => <GhostButton key={variant} variant={variant} size="small" label="GhostButton variant" iconLeft iconRight style={{
      margin: 8
    }} />)}
    </>
}`,...(R=(L=l.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};var w,S,q;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <>
      {variants.map(variant => <GhostButton key={variant} variant={variant} size="medium" label="GhostButton variant" iconLeft iconRight style={{
      margin: 8
    }} />)}
    </>
}`,...(q=(S=m.parameters)==null?void 0:S.docs)==null?void 0:q.source}}};var V,k,I;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <>
      {variants.map(variant => <GhostButton key={variant} variant={variant} size="large" label="GhostButton variant" iconLeft iconRight style={{
      margin: 8
    }} />)}
    </>
}`,...(I=(k=d.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};var M,A,E;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <>
      {(['small', 'medium', 'large'] as const).map(size => <GhostButton key={size} label={\`Size \${size}\`} variant="primary" size={size} iconLeft iconRight style={{
      margin: 8
    }} />)}
    </>
}`,...(E=(A=c.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};const xe=["Primary","WithIcons","Disabled","AllVariantssmall","AllVariantsmedium","AllVariantslarge","SizesWithIcons"];export{d as AllVariantslarge,m as AllVariantsmedium,l as AllVariantssmall,o as Disabled,i as Primary,c as SizesWithIcons,s as WithIcons,xe as __namedExportsOrder,Be as default};
