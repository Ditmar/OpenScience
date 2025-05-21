import{j as l}from"./jsx-runtime-DRTy3Uxn.js";import"./index-BBkUAzwr.js";import{c as O}from"./createSvgIcon-BLyjB2H9.js";import"./memoTheme-DFvTKm-B.js";import"./DefaultPropsProvider-BbFsq1KE.js";const G=O(l.jsx("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})),H="_xs_zgrcf_28",J="_sm_zgrcf_33",K="_md_zgrcf_38",P="_lg_zgrcf_43",Q="_square_zgrcf_48",U="_rounded_zgrcf_52",W="_circle_zgrcf_56",X="_neutral_zgrcf_60",Y="_brand_zgrcf_68",Z="_feedback_zgrcf_76",e={"icon-button":"_icon-button_zgrcf_1",xs:H,sm:J,md:K,lg:P,square:Q,rounded:U,circle:W,neutral:X,brand:Y,feedback:Z};function C({icon:T,ariaLabel:j,size:I="md",shape:N="square",color:V="neutral",className:w,disabled:D=!1,type:F="button",onClick:E}){const M=[e["icon-button"],e[I],e[N],e[V],w].filter(Boolean).join(" ");return l.jsx("button",{type:F,className:M,"aria-label":j,disabled:D,onClick:E,children:T})}C.__docgenInfo={description:"",methods:[],displayName:"IconButton",props:{icon:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},ariaLabel:{required:!0,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},shape:{required:!1,tsType:{name:"union",raw:"'square' | 'rounded' | 'circle'",elements:[{name:"literal",value:"'square'"},{name:"literal",value:"'rounded'"},{name:"literal",value:"'circle'"}]},description:"",defaultValue:{value:"'square'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'neutral' | 'brand' | 'feedback'",elements:[{name:"literal",value:"'neutral'"},{name:"literal",value:"'brand'"},{name:"literal",value:"'feedback'"}]},description:"",defaultValue:{value:"'neutral'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},type:{defaultValue:{value:"'button'",computed:!1},required:!1}}};const ne={title:"Components/IconButton",component:C,parameters:{layout:"padded"},args:{icon:l.jsx(G,{}),ariaLabel:"Action",size:"md",shape:"square",color:"neutral",disabled:!1}},a={args:{color:"brand",ariaLabel:"Brand Action"}},r={args:{color:"feedback",ariaLabel:"Feedback Action"}},s={args:{shape:"rounded",ariaLabel:"Rounded Action"}},n={args:{shape:"circle",color:"brand",ariaLabel:"Circle Action"}},o={args:{size:"sm",ariaLabel:"Small Action"}},t={args:{size:"lg",ariaLabel:"Large Action"}},c={args:{disabled:!0,ariaLabel:"Disabled Action"}};var i,d,u;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    color: 'brand',
    ariaLabel: 'Brand Action'
  }
}`,...(u=(d=a.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var m,p,b;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    color: 'feedback',
    ariaLabel: 'Feedback Action'
  }
}`,...(b=(p=r.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var g,f,_;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    shape: 'rounded',
    ariaLabel: 'Rounded Action'
  }
}`,...(_=(f=s.parameters)==null?void 0:f.docs)==null?void 0:_.source}}};var L,z,q;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    shape: 'circle',
    color: 'brand',
    ariaLabel: 'Circle Action'
  }
}`,...(q=(z=n.parameters)==null?void 0:z.docs)==null?void 0:q.source}}};var v,A,x;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    ariaLabel: 'Small Action'
  }
}`,...(x=(A=o.parameters)==null?void 0:A.docs)==null?void 0:x.source}}};var S,k,y;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    ariaLabel: 'Large Action'
  }
}`,...(y=(k=t.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var h,R,B;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    disabled: true,
    ariaLabel: 'Disabled Action'
  }
}`,...(B=(R=c.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};const oe=["Brand","Feedback","Rounded","Circle","Small","Large","Disabled"];export{a as Brand,n as Circle,c as Disabled,r as Feedback,t as Large,s as Rounded,o as Small,oe as __namedExportsOrder,ne as default};
