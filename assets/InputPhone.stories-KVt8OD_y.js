import{j as r}from"./jsx-runtime-BlDnFLNC.js";import{r as k}from"./index-Cu9bd8lq.js";import{I as A}from"./IconPhone-CuxIdTSp.js";import{P as F}from"./NumberInput-Lz5ywgUc.js";import{H as G}from"./HintText-Blodu5vP.js";import{B as J}from"./Box-CHmXPhC_.js";import"./useTheme-CQwAfATk.js";import"./DefaultPropsProvider--zJBLwLZ.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-B34fLoo2.js";import"./index-RT4BIXZQ.js";import"./Typography--HJDdM_o.js";import"./memoTheme-BE2zh0Q8.js";import"./extends-CF3RwP-h.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./IconButton-CS_HX1wY.js";import"./useId-Cw7oCgN8.js";import"./ButtonBase-DqIyqkXo.js";import"./assertThisInitialized-C1KLUksq.js";import"./useForkRef-CXZ2Yisc.js";import"./useEnhancedEffect-BAizwhs3.js";import"./CircularProgress-OXKP8wmu.js";import"./createSvgIcon-BkY5K6L4.js";import"./InputBase-xE91-qzh.js";import"./index-BWPb3MHu.js";import"./isHostComponent-DVu5iVWx.js";import"./useFormControl-DxQRLcK0.js";function z({iconText:N="Phone Number",hintText:m="",size:l="medium",disabled:u=!1,borderRadius:R="rounded",state:W="default",initialValue:B="",onClose:H}){const[_,L]=k.useState(B),M=O=>{L(O)};return r.jsxs(J,{"data-testid":"input-phone",sx:{display:"flex",flexDirection:"column",gap:"8px",width:"100%",maxWidth:"371px"},children:[r.jsx(A,{text:N,size:l,disabled:u,onClose:H}),r.jsx(F,{size:l,borderRadius:R,state:u?"disabled":W,value:_,onChange:M}),m&&r.jsx(G,{text:m,size:l,disabled:u})]})}z.__docgenInfo={description:"",methods:[],displayName:"InputPhone",props:{iconText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Phone Number'",computed:!1}},hintText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},borderRadius:{required:!1,tsType:{name:"union",raw:"'rounded' | 'straight'",elements:[{name:"literal",value:"'rounded'"},{name:"literal",value:"'straight'"}]},description:"",defaultValue:{value:"'rounded'",computed:!1}},state:{required:!1,tsType:{name:"union",raw:"'default' | 'hover' | 'focus' | 'error' | 'disabled'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'hover'"},{name:"literal",value:"'focus'"},{name:"literal",value:"'error'"},{name:"literal",value:"'disabled'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},initialValue:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const be={title:"ui/Components/Molecules/InputPhone",component:z,argTypes:{iconText:{control:"text"},hintText:{control:"text"},size:{control:{type:"select"},options:["small","medium","large"]},disabled:{control:"boolean"},borderRadius:{control:{type:"select"},options:["rounded","straight"]},state:{control:{type:"select"},options:["default","hover","focus","error","disabled"]},onClose:{action:"closed"},onChange:{action:"changed"}}},e={args:{iconText:"Phone Number",hintText:"Enter your phone number",size:"medium",borderRadius:"rounded",state:"default"}},a={args:{...e.args,size:"small"}},t={args:{...e.args,size:"large"}},s={args:{...e.args,onClose:()=>{}}},o={args:{...e.args,disabled:!0}},n={args:{...e.args,state:"error",hintText:"Invalid phone number"}},i={args:{...e.args,hintText:""}};var d,p,c;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    iconText: 'Phone Number',
    hintText: 'Enter your phone number',
    size: 'medium',
    borderRadius: 'rounded',
    state: 'default'
  }
}`,...(c=(p=e.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var g,f,h;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    size: 'small'
  }
}`,...(h=(f=a.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,v,b;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    size: 'large'
  }
}`,...(b=(v=t.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var T,y,S;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    onClose: () => {}
  }
}`,...(S=(y=s.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var C,D,P;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true
  }
}`,...(P=(D=o.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};var V,q,I;n.parameters={...n.parameters,docs:{...(V=n.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    state: 'error',
    hintText: 'Invalid phone number'
  }
}`,...(I=(q=n.parameters)==null?void 0:q.docs)==null?void 0:I.source}}};var E,j,w;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    hintText: ''
  }
}`,...(w=(j=i.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};const Te=["Default","Small","Large","WithCloseButton","Disabled","ErrorState","WithoutHint"];export{e as Default,o as Disabled,n as ErrorState,t as Large,a as Small,s as WithCloseButton,i as WithoutHint,Te as __namedExportsOrder,be as default};
