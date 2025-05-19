import{j as e}from"./jsx-runtime-DRTy3Uxn.js";import"./index-BBkUAzwr.js";import{P as b}from"./pills-C4cqjiWv.js";import de from"./circle-quarters-DV0bs0Sz.js";import ue from"./Close-URL-WBhEU0Hy.js";import"./icons-DNNtq2Yd.js";import"./index-YMbfICiA.js";function Y({className:o,style:r}){return e.jsx(de,{className:o,style:r,fill:"currentColor"})}function Z({className:o,style:r}){return e.jsx(ue,{className:o,style:r,fill:"currentColor"})}Y.__docgenInfo={description:"",methods:[],displayName:"IconCircleQuarters",props:{className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};Z.__docgenInfo={description:"",methods:[],displayName:"IconClose",props:{className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};function ee({variant:o,color:r,customColor:t,icon:f,image:C,shape:oe="default",size:re="md",children:ne,leftCount:v,rightCount:y,onClose:s}){const te="badge",se=`badge--${o}`,ae=`badge--${r}`,le=oe==="rounded"&&"badge--rounded",ie=`badge--${re}`,x={color:o==="filled"?r==="neutral"||r==="gray"?"black":"white":t||["violet","blue"].includes(r)?"currentColor":"black"},ce=r==="custom"&&t?{backgroundColor:o==="filled"?t:"transparent",borderColor:o==="outline"?t:void 0,color:o==="outline"||o==="soft"?t:void 0}:{};return e.jsxs("span",{className:[te,se,ae,le,ie].filter(Boolean).join(" "),style:ce,children:[s&&e.jsx("button",{className:"badge__close-button",onClick:s,"aria-label":"Close badge",children:e.jsx(Y,{style:x})}),C&&e.jsx("img",{src:C,alt:"avatar",className:"badge__image"}),f&&e.jsx("span",{className:"badge__icon",children:f}),v!==void 0&&e.jsx(b,{text:String(v),variant:"filled",color:"neutral-light",size:"sm"}),e.jsx("span",{className:"badge__content",children:ne}),y!==void 0&&e.jsx(b,{text:String(y),color:"neutral-light",variant:"filled",size:"sm"}),s&&e.jsx("button",{className:"badge__close-button",onClick:s,"aria-label":"Close badge",children:e.jsx(Z,{style:x})})]})}ee.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{variant:{required:!0,tsType:{name:"union",raw:"'filled' | 'outline' | 'soft'",elements:[{name:"literal",value:"'filled'"},{name:"literal",value:"'outline'"},{name:"literal",value:"'soft'"}]},description:""},color:{required:!0,tsType:{name:"union",raw:"'neutral' | 'gray' | 'violet' | 'blue' | 'custom'",elements:[{name:"literal",value:"'neutral'"},{name:"literal",value:"'gray'"},{name:"literal",value:"'violet'"},{name:"literal",value:"'blue'"},{name:"literal",value:"'custom'"}]},description:""},customColor:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},image:{required:!1,tsType:{name:"string"},description:""},shape:{required:!1,tsType:{name:"union",raw:"'default' | 'rounded'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'rounded'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},leftCount:{required:!1,tsType:{name:"number"},description:""},rightCount:{required:!1,tsType:{name:"number"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Se={title:"ui/components/atoms/badge",component:ee,argTypes:{variant:{control:{type:"select"},options:["filled","outline","soft"]},color:{control:{type:"select"},options:["neutral","gray","violet","blue","custom"]},shape:{control:{type:"select"},options:["default","rounded"]},size:{control:{type:"select"},options:["sm","md"]},customColor:{control:{type:"color"},if:{arg:"color",eq:"custom"}}}},n=o=>()=>{console.log(o)},a={args:{variant:"filled",color:"custom",customColor:"#6b7280",shape:"rounded",size:"md",image:"https://i.pravatar.cc/24",leftCount:100,rightCount:100,children:"Badge Text",onClose:n("Badge closed")}},l={args:{variant:"filled",color:"neutral",shape:"default",children:"Neutral",onClose:n("Close")}},i={args:{variant:"outline",color:"gray",shape:"default",children:"Gray",leftCount:5,rightCount:10}},c={args:{variant:"soft",color:"violet",shape:"rounded",children:"Violet",onClose:n("Close")}},d={args:{color:"blue",children:"With Icon",shape:"rounded",icon:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"20 6 9 17 4 12"})})}},u={args:{color:"violet",children:"With Icon",shape:"rounded",icon:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})}},m={args:{color:"neutral",children:"User",image:"https://i.pravatar.cc/24",onClose:n("Image badge closed")}},p={args:{color:"custom",customColor:"#ff5722",children:"Custom",shape:"rounded"}},g={args:{variant:"filled",color:"blue",children:"This is a very long badge text that should be truncated",shape:"default",onClose:n("Closed")}},h={args:{size:"sm",children:"Small",color:"gray",leftCount:1,rightCount:2,onClose:n("Small closed")}};var S,w,j;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    variant: 'filled',
    color: 'custom',
    customColor: '#6b7280',
    shape: 'rounded',
    size: 'md',
    image: 'https://i.pravatar.cc/24',
    leftCount: 100,
    rightCount: 100,
    children: 'Badge Text',
    onClose: handleClose('Badge closed')
  }
}`,...(j=(w=a.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var T,k,I;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    variant: 'filled',
    color: 'neutral',
    shape: 'default',
    children: 'Neutral',
    onClose: handleClose('Close')
  }
}`,...(I=(k=l.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};var N,_,R;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    variant: 'outline',
    color: 'gray',
    shape: 'default',
    children: 'Gray',
    leftCount: 5,
    rightCount: 10
  }
}`,...(R=(_=i.parameters)==null?void 0:_.docs)==null?void 0:R.source}}};var q,W,L;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    variant: 'soft',
    color: 'violet',
    shape: 'rounded',
    children: 'Violet',
    onClose: handleClose('Close')
  }
}`,...(L=(W=c.parameters)==null?void 0:W.docs)==null?void 0:L.source}}};var z,B,P;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    color: 'blue',
    children: 'With Icon',
    shape: 'rounded',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
  }
}`,...(P=(B=d.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};var V,E,F;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    color: 'violet',
    children: 'With Icon',
    shape: 'rounded',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
  }
}`,...(F=(E=u.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var G,O,Q;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    color: 'neutral',
    children: 'User',
    image: 'https://i.pravatar.cc/24',
    onClose: handleClose('Image badge closed')
  }
}`,...(Q=(O=m.parameters)==null?void 0:O.docs)==null?void 0:Q.source}}};var U,$,A;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    color: 'custom',
    customColor: '#ff5722',
    children: 'Custom',
    shape: 'rounded'
  }
}`,...(A=($=p.parameters)==null?void 0:$.docs)==null?void 0:A.source}}};var D,H,J;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    variant: 'filled',
    color: 'blue',
    children: 'This is a very long badge text that should be truncated',
    shape: 'default',
    onClose: handleClose('Closed')
  }
}`,...(J=(H=g.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,M,X;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    children: 'Small',
    color: 'gray',
    leftCount: 1,
    rightCount: 2,
    onClose: handleClose('Small closed')
  }
}`,...(X=(M=h.parameters)==null?void 0:M.docs)==null?void 0:X.source}}};const we=["FullExample","NeutralFilled","GrayOutline","VioletSoftRounded","WithLeftIcon","WithRightIcon","WithImage","CustomColor","LongText","SmallSize"];export{p as CustomColor,a as FullExample,i as GrayOutline,g as LongText,l as NeutralFilled,h as SmallSize,c as VioletSoftRounded,m as WithImage,d as WithLeftIcon,u as WithRightIcon,we as __namedExportsOrder,Se as default};
