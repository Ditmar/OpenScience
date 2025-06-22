import{j as e}from"./jsx-runtime-BlDnFLNC.js";import"./index-Cu9bd8lq.js";import{P as w}from"./pills-BX_XDNuv.js";import me from"./circle-quarters-B2Y1lMV2.js";import pe from"./Close-URL-BaNUiBBY.js";import"./styled-BE-mLrKi.js";import"./identifier-DJrRgG3J.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-B89909lT.js";import"./extends-CF3RwP-h.js";function ee({className:r,style:o}){return e.jsx(me,{className:r,style:o,fill:"currentColor"})}function re({className:r,style:o}){return e.jsx(pe,{className:r,style:o,fill:"currentColor"})}ee.__docgenInfo={description:"",methods:[],displayName:"IconCircleQuarters",props:{className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};re.__docgenInfo={description:"",methods:[],displayName:"IconClose",props:{className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};function oe({variant:r,color:o,customColor:n,icon:C,image:v,shape:te="default",size:ne="md",children:se,leftCount:y,rightCount:x,onClose:s}){const ae="badge",le=`badge--${r}`,ie=`badge--${o}`,ce=te==="rounded"&&"badge--rounded",de=`badge--${ne}`,b=f=>f==="neutral"?"neutral-dark":(["gray","violet","blue"].includes(f),"neutral-light"),S={color:r==="filled"?o==="neutral"||o==="gray"?"black":"white":n||["violet","blue"].includes(o)?"currentColor":"black"},ue=o==="custom"&&n?{backgroundColor:r==="filled"?n:"transparent",borderColor:r==="outline"?n:void 0,color:r==="outline"||r==="soft"?n:void 0}:{};return e.jsxs("span",{className:[ae,le,ie,ce,de].filter(Boolean).join(" "),style:ue,children:[s&&e.jsx("button",{className:"badge__close-button",onClick:s,"aria-label":"Close badge",children:e.jsx(ee,{style:S})}),v&&e.jsx("img",{src:v,alt:"avatar",className:"badge__image"}),C&&e.jsx("span",{className:"badge__icon",children:C}),y!==void 0&&e.jsx(w,{text:String(y),color:b(o),variant:r,size:"sm"}),e.jsx("span",{className:"badge__content",children:se}),x!==void 0&&e.jsx(w,{variant:r,text:String(x),color:b(o),size:"sm"}),s&&e.jsx("button",{className:"badge__close-button",onClick:s,"aria-label":"Close badge",children:e.jsx(re,{style:S})})]})}oe.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{variant:{required:!0,tsType:{name:"union",raw:"'filled' | 'outline' | 'soft'",elements:[{name:"literal",value:"'filled'"},{name:"literal",value:"'outline'"},{name:"literal",value:"'soft'"}]},description:""},color:{required:!0,tsType:{name:"union",raw:"'neutral' | 'gray' | 'violet' | 'blue' | 'custom'",elements:[{name:"literal",value:"'neutral'"},{name:"literal",value:"'gray'"},{name:"literal",value:"'violet'"},{name:"literal",value:"'blue'"},{name:"literal",value:"'custom'"}]},description:""},customColor:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},image:{required:!1,tsType:{name:"string"},description:""},shape:{required:!1,tsType:{name:"union",raw:"'default' | 'rounded'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'rounded'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},leftCount:{required:!1,tsType:{name:"number"},description:""},rightCount:{required:!1,tsType:{name:"number"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const ke={title:"ui/components/atoms/badge",component:oe,argTypes:{variant:{control:{type:"select"},options:["filled","outline","soft"]},color:{control:{type:"select"},options:["neutral","gray","violet","blue","custom"]},shape:{control:{type:"select"},options:["default","rounded"]},size:{control:{type:"select"},options:["sm","md"]},customColor:{control:{type:"color"},if:{arg:"color",eq:"custom"}}}},t=r=>()=>{console.log(r)},a={args:{variant:"filled",color:"custom",customColor:"#6b7280",shape:"rounded",size:"md",image:"https://i.pravatar.cc/24",leftCount:100,rightCount:100,children:"Badge Text",onClose:t("Badge closed")}},l={args:{variant:"filled",color:"neutral",shape:"default",children:"Neutral",onClose:t("Close")}},i={args:{variant:"outline",color:"gray",shape:"default",children:"Gray",leftCount:5,rightCount:10}},c={args:{variant:"soft",color:"violet",shape:"rounded",children:"Violet",onClose:t("Close")}},d={args:{color:"blue",children:"With Icon",shape:"rounded",icon:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"20 6 9 17 4 12"})})}},u={args:{color:"violet",children:"With Icon",shape:"rounded",icon:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})}},m={args:{color:"neutral",children:"User",image:"https://i.pravatar.cc/24",onClose:t("Image badge closed")}},p={args:{color:"custom",customColor:"#ff5722",children:"Custom",shape:"rounded"}},g={args:{variant:"filled",color:"blue",children:"This is a very long badge text that should be truncated",shape:"default",onClose:t("Closed")}},h={args:{size:"sm",children:"Small",color:"gray",leftCount:1,rightCount:2,onClose:t("Small closed")}};var j,k,T;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(T=(k=a.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};var I,N,_;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    variant: 'filled',
    color: 'neutral',
    shape: 'default',
    children: 'Neutral',
    onClose: handleClose('Close')
  }
}`,...(_=(N=l.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var R,q,W;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    variant: 'outline',
    color: 'gray',
    shape: 'default',
    children: 'Gray',
    leftCount: 5,
    rightCount: 10
  }
}`,...(W=(q=i.parameters)==null?void 0:q.docs)==null?void 0:W.source}}};var L,z,B;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    variant: 'soft',
    color: 'violet',
    shape: 'rounded',
    children: 'Violet',
    onClose: handleClose('Close')
  }
}`,...(B=(z=c.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var P,V,E;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    color: 'blue',
    children: 'With Icon',
    shape: 'rounded',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
  }
}`,...(E=(V=d.parameters)==null?void 0:V.docs)==null?void 0:E.source}}};var F,G,O;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    color: 'violet',
    children: 'With Icon',
    shape: 'rounded',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
  }
}`,...(O=(G=u.parameters)==null?void 0:G.docs)==null?void 0:O.source}}};var Q,U,$;m.parameters={...m.parameters,docs:{...(Q=m.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    color: 'neutral',
    children: 'User',
    image: 'https://i.pravatar.cc/24',
    onClose: handleClose('Image badge closed')
  }
}`,...($=(U=m.parameters)==null?void 0:U.docs)==null?void 0:$.source}}};var A,D,H;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    color: 'custom',
    customColor: '#ff5722',
    children: 'Custom',
    shape: 'rounded'
  }
}`,...(H=(D=p.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};var J,K,M;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    variant: 'filled',
    color: 'blue',
    children: 'This is a very long badge text that should be truncated',
    shape: 'default',
    onClose: handleClose('Closed')
  }
}`,...(M=(K=g.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};var X,Y,Z;h.parameters={...h.parameters,docs:{...(X=h.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    children: 'Small',
    color: 'gray',
    leftCount: 1,
    rightCount: 2,
    onClose: handleClose('Small closed')
  }
}`,...(Z=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const Te=["FullExample","NeutralFilled","GrayOutline","VioletSoftRounded","WithLeftIcon","WithRightIcon","WithImage","CustomColor","LongText","SmallSize"];export{p as CustomColor,a as FullExample,i as GrayOutline,g as LongText,l as NeutralFilled,h as SmallSize,c as VioletSoftRounded,m as WithImage,d as WithLeftIcon,u as WithRightIcon,Te as __namedExportsOrder,ke as default};
