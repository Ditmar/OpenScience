import{j as e}from"./jsx-runtime-DRTy3Uxn.js";import"./index-BBkUAzwr.js";function h({variant:o,color:f,customColor:g,icon:v,image:C,shape:X,size:Y,children:Z,leftCount:y,rightCount:x,onClose:n}){const ee="badge",oe=`badge--${o}`,re=`badge--${f}`,ne=X==="rounded"?"badge--rounded":"",ae=`badge--${Y}`,te=f==="custom"?{backgroundColor:o==="filled"?g:"transparent",borderColor:o==="outline"?g:void 0,color:o==="outline"||o==="soft"?g:void 0}:{};return e.jsxs("span",{className:[ee,oe,re,ne,ae].join(" "),style:te,children:[n&&e.jsx("button",{className:"badge__close-button",onClick:n,children:"✕"}),C&&e.jsx("img",{src:C,alt:"avatar",className:"badge__image"}),v&&e.jsx("span",{className:"badge__icon",children:v}),y!==void 0&&e.jsx("span",{className:"badge__counter",children:y}),e.jsx("span",{className:"badge__content",children:Z}),x!==void 0&&e.jsx("span",{className:"badge__counter",children:x}),n&&e.jsx("button",{className:"badge__close-button",onClick:n,children:"✕"})]})}h.defaultProps={customColor:void 0,icon:void 0,image:void 0,children:void 0,leftCount:void 0,rightCount:void 0,onClose:void 0};h.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{variant:{required:!0,tsType:{name:"union",raw:"'filled' | 'outline' | 'soft'",elements:[{name:"literal",value:"'filled'"},{name:"literal",value:"'outline'"},{name:"literal",value:"'soft'"}]},description:""},color:{required:!0,tsType:{name:"union",raw:"'neutral' | 'gray' | 'violet' | 'blue' | 'custom'",elements:[{name:"literal",value:"'neutral'"},{name:"literal",value:"'gray'"},{name:"literal",value:"'violet'"},{name:"literal",value:"'blue'"},{name:"literal",value:"'custom'"}]},description:""},customColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"undefined",computed:!0}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:"undefined",computed:!0}},image:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"undefined",computed:!0}},shape:{required:!0,tsType:{name:"union",raw:"'default' | 'rounded'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'rounded'"}]},description:""},size:{required:!0,tsType:{name:"union",raw:"'sm' | 'md'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"}]},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:"undefined",computed:!0}},leftCount:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"undefined",computed:!0}},rightCount:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"undefined",computed:!0}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"",defaultValue:{value:"undefined",computed:!0}}}};const ie={title:"ui/components/atoms/badge",component:h,argTypes:{variant:{control:{type:"select"},options:["filled","outline","soft"]},color:{control:{type:"select"},options:["neutral","gray","violet","blue","custom"]},shape:{control:{type:"select"},options:["default","rounded"]},size:{control:{type:"select"},options:["sm","md"]},customColor:{control:{type:"color"},if:{arg:"color",eq:"custom"}}}},r=o=>()=>{console.log(o)},a={args:{variant:"filled",color:"custom",customColor:"#6b7280",shape:"rounded",size:"md",image:"https://i.pravatar.cc/24",leftCount:100,rightCount:100,children:"Badge Text",onClose:r("Badge closed")}},t={args:{variant:"filled",color:"neutral",shape:"default",children:"Neutral",onClose:r("Close")}},s={args:{variant:"outline",color:"gray",shape:"default",children:"Gray",leftCount:5,rightCount:10}},l={args:{variant:"soft",color:"violet",shape:"rounded",children:"Violet",onClose:r("Close")}},i={args:{color:"blue",children:"With Icon",shape:"rounded",icon:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"20 6 9 17 4 12"})})}},d={args:{color:"violet",children:"With Icon",shape:"rounded",icon:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})}},c={args:{color:"neutral",children:"User",image:"https://i.pravatar.cc/24",onClose:r("Image badge closed")}},u={args:{color:"custom",customColor:"#ff5722",children:"Custom",shape:"rounded"}},m={args:{variant:"filled",color:"blue",children:"This is a very long badge text that should be truncated",shape:"default",onClose:r("Closed")}},p={args:{size:"sm",children:"Small",color:"gray",leftCount:1,rightCount:2,onClose:r("Small closed")}};var b,w,S;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(S=(w=a.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var j,k,T;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    variant: 'filled',
    color: 'neutral',
    shape: 'default',
    children: 'Neutral',
    onClose: handleClose('Close')
  }
}`,...(T=(k=t.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};var _,N,W;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    variant: 'outline',
    color: 'gray',
    shape: 'default',
    children: 'Gray',
    leftCount: 5,
    rightCount: 10
  }
}`,...(W=(N=s.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};var I,R,q;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    variant: 'soft',
    color: 'violet',
    shape: 'rounded',
    children: 'Violet',
    onClose: handleClose('Close')
  }
}`,...(q=(R=l.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var L,V,B;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    color: 'blue',
    children: 'With Icon',
    shape: 'rounded',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
  }
}`,...(B=(V=i.parameters)==null?void 0:V.docs)==null?void 0:B.source}}};var z,E,F;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    color: 'violet',
    children: 'With Icon',
    shape: 'rounded',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
  }
}`,...(F=(E=d.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var G,O,$;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    color: 'neutral',
    children: 'User',
    image: 'https://i.pravatar.cc/24',
    onClose: handleClose('Image badge closed')
  }
}`,...($=(O=c.parameters)==null?void 0:O.docs)==null?void 0:$.source}}};var U,P,A;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    color: 'custom',
    customColor: '#ff5722',
    children: 'Custom',
    shape: 'rounded'
  }
}`,...(A=(P=u.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var D,H,J;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    variant: 'filled',
    color: 'blue',
    children: 'This is a very long badge text that should be truncated',
    shape: 'default',
    onClose: handleClose('Closed')
  }
}`,...(J=(H=m.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,M,Q;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    children: 'Small',
    color: 'gray',
    leftCount: 1,
    rightCount: 2,
    onClose: handleClose('Small closed')
  }
}`,...(Q=(M=p.parameters)==null?void 0:M.docs)==null?void 0:Q.source}}};const de=["FullExample","NeutralFilled","GrayOutline","VioletSoftRounded","WithLeftIcon","WithRightIcon","WithImage","CustomColor","LongText","SmallSize"];export{u as CustomColor,a as FullExample,s as GrayOutline,m as LongText,t as NeutralFilled,p as SmallSize,l as VioletSoftRounded,c as WithImage,i as WithLeftIcon,d as WithRightIcon,de as __namedExportsOrder,ie as default};
