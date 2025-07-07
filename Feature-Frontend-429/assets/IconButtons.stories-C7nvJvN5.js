import{j as C}from"./jsx-runtime-BlDnFLNC.js";import"./index-Cu9bd8lq.js";import{C as G}from"./Close-eWTstJOu.js";import"./createSvgIcon-BprFioPX.js";import"./generateUtilityClasses-CPRdC64H.js";import"./memoTheme-BfjzflY8.js";import"./styled-Av0s27nj.js";import"./defaultTheme-qdan4ah2.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-B89909lT.js";import"./extends-CF3RwP-h.js";import"./DefaultPropsProvider-15asn56a.js";const H="_xs_1bd3l_28",J="_sm_1bd3l_33",K="_md_1bd3l_38",M="_lg_1bd3l_43",P="_square_1bd3l_48",Q="_rounded_1bd3l_52",U="_circle_1bd3l_56",W="_neutral_1bd3l_60",X="_brand_1bd3l_68",Y="_feedback_1bd3l_76",e={"icon-button":"_icon-button_1bd3l_1",xs:H,sm:J,md:K,lg:M,square:P,rounded:Q,circle:U,neutral:W,brand:X,feedback:Y};function T({icon:z,ariaLabel:j,size:N="md",shape:V="square",color:w="neutral",className:D,disabled:F=!1,type:I="button",onClick:E}){const O=[e["icon-button"],e[N],e[V],e[w],D].filter(Boolean).join(" ");return C.jsx("button",{type:I,className:O,"aria-label":j,disabled:F,onClick:E,children:z})}T.__docgenInfo={description:"",methods:[],displayName:"IconButton",props:{icon:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},ariaLabel:{required:!0,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},shape:{required:!1,tsType:{name:"union",raw:"'square' | 'rounded' | 'circle'",elements:[{name:"literal",value:"'square'"},{name:"literal",value:"'rounded'"},{name:"literal",value:"'circle'"}]},description:"",defaultValue:{value:"'square'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'neutral' | 'brand' | 'feedback'",elements:[{name:"literal",value:"'neutral'"},{name:"literal",value:"'brand'"},{name:"literal",value:"'feedback'"}]},description:"",defaultValue:{value:"'neutral'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},type:{defaultValue:{value:"'button'",computed:!1},required:!1}}};const de={title:"Components/IconButton",component:T,parameters:{layout:"padded"},args:{icon:C.jsx(G,{}),ariaLabel:"Action",size:"md",shape:"square",color:"neutral",disabled:!1}},a={args:{color:"brand",ariaLabel:"Brand Action"}},r={args:{color:"feedback",ariaLabel:"Feedback Action"}},s={args:{shape:"rounded",ariaLabel:"Rounded Action"}},n={args:{shape:"circle",color:"brand",ariaLabel:"Circle Action"}},o={args:{size:"sm",ariaLabel:"Small Action"}},t={args:{size:"lg",ariaLabel:"Large Action"}},l={args:{disabled:!0,ariaLabel:"Disabled Action"}};var c,d,i;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    color: 'brand',
    ariaLabel: 'Brand Action'
  }
}`,...(i=(d=a.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var u,m,p;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    color: 'feedback',
    ariaLabel: 'Feedback Action'
  }
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var b,_,g;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    shape: 'rounded',
    ariaLabel: 'Rounded Action'
  }
}`,...(g=(_=s.parameters)==null?void 0:_.docs)==null?void 0:g.source}}};var f,L,q;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    shape: 'circle',
    color: 'brand',
    ariaLabel: 'Circle Action'
  }
}`,...(q=(L=n.parameters)==null?void 0:L.docs)==null?void 0:q.source}}};var v,A,k;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    ariaLabel: 'Small Action'
  }
}`,...(k=(A=o.parameters)==null?void 0:A.docs)==null?void 0:k.source}}};var x,y,S;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    ariaLabel: 'Large Action'
  }
}`,...(S=(y=t.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var R,h,B;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    disabled: true,
    ariaLabel: 'Disabled Action'
  }
}`,...(B=(h=l.parameters)==null?void 0:h.docs)==null?void 0:B.source}}};const ie=["Brand","Feedback","Rounded","Circle","Small","Large","Disabled"];export{a as Brand,n as Circle,l as Disabled,r as Feedback,t as Large,s as Rounded,o as Small,ie as __namedExportsOrder,de as default};
