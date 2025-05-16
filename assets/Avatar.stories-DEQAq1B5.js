import{j as s}from"./jsx-runtime-BlDnFLNC.js";import{u as Z,T as $}from"./ThemeProvider--mW1tKS8.js";import{c as rr,u as A,M as ar}from"./ThemeSwitcher-CSLQ8H25.js";import{r as w}from"./index-Cu9bd8lq.js";import{g as er,a as or,s as b,c as tr,b as sr,m as nr}from"./createSimplePaletteValueFilter-DhcgjOeQ.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-B89909lT.js";import"./assertThisInitialized-C1KLUksq.js";import"./index-BWPb3MHu.js";import"./extends-CF3RwP-h.js";const cr=rr(s.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}));function lr(r){return er("MuiAvatar",r)}or("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const ir=r=>{const{classes:a,variant:e,colorDefault:o}=r;return sr({root:["root",e,o&&"colorDefault"],img:["img"],fallback:["fallback"]},lr,a)},dr=b("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(r,a)=>{const{ownerState:e}=r;return[a.root,a[e.variant],e.colorDefault&&a.colorDefault]}})(nr(({theme:r})=>({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:r.typography.fontFamily,fontSize:r.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",variants:[{props:{variant:"rounded"},style:{borderRadius:(r.vars||r).shape.borderRadius}},{props:{variant:"square"},style:{borderRadius:0}},{props:{colorDefault:!0},style:{color:(r.vars||r).palette.background.default,...r.vars?{backgroundColor:r.vars.palette.Avatar.defaultBg}:{backgroundColor:r.palette.grey[400],...r.applyStyles("dark",{backgroundColor:r.palette.grey[600]})}}}]}))),pr=b("img",{name:"MuiAvatar",slot:"Img"})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),ur=b(cr,{name:"MuiAvatar",slot:"Fallback"})({width:"75%",height:"75%"});function mr({crossOrigin:r,referrerPolicy:a,src:e,srcSet:o}){const[l,n]=w.useState(!1);return w.useEffect(()=>{if(!e&&!o)return;n(!1);let d=!0;const t=new Image;return t.onload=()=>{d&&n("loaded")},t.onerror=()=>{d&&n("error")},t.crossOrigin=r,t.referrerPolicy=a,t.src=e,o&&(t.srcset=o),()=>{d=!1}},[r,a,e,o]),l}const gr=w.forwardRef(function(a,e){const o=Z({props:a,name:"MuiAvatar"}),{alt:l,children:n,className:d,component:t="div",slots:h={},slotProps:i={},imgProps:k,sizes:_,src:y,srcSet:x,variant:H="circular",...O}=o;let p=null;const c={...o,component:t,variant:H},G=mr({...k,...typeof i.img=="function"?i.img(c):i.img,src:y,srcSet:x}),C=y||x,P=C&&G!=="error";c.colorDefault=!P,delete c.ownerState;const S=ir(c),[J,K]=A("root",{ref:e,className:tr(S.root,d),elementType:dr,externalForwardedProps:{slots:h,slotProps:i,component:t,...O},ownerState:c}),[Q,V]=A("img",{className:S.img,elementType:pr,externalForwardedProps:{slots:h,slotProps:{img:{...k,...i.img}}},additionalProps:{alt:l,src:y,srcSet:x,sizes:_},ownerState:c}),[X,Y]=A("fallback",{className:S.fallback,elementType:ur,externalForwardedProps:{slots:h,slotProps:i},shouldForwardComponentProp:!0,ownerState:c});return P?p=s.jsx(Q,{...V}):n||n===0?p=n:C&&l?p=l[0]:p=s.jsx(X,{...Y}),s.jsx(J,{...K,children:p})}),kr={title:"MUI/Avatar",component:gr,argTypes:{variant:{control:{type:"select"},options:["circle","rounded","square"]},color:{control:{type:"select"},options:["default","inherit","primary","secondary"]}},parameters:{layout:"centered"},decorators:[r=>s.jsxs($,{children:[s.jsx(ar,{}),s.jsx("div",{style:{padding:"20px"},children:s.jsx(r,{})})]})]},u={args:{variant:"circular",color:"default",children:"A"}},m={args:{variant:"rounded",color:"primary",children:"B"}},g={args:{variant:"square",color:"secondary",children:"C"}},f={args:{variant:"circular",color:"default",children:"D",sx:{width:56,height:56}},parameters:{docs:{description:{story:"This story demonstrates a custom-sized Avatar component."}}}},v={args:{variant:"circular",color:"default",src:"https://via.placeholder.com/150",alt:"Avatar with image"},parameters:{docs:{description:{story:"This story demonstrates an Avatar component with an image."}}}};var R,j,D;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    variant: 'circular',
    color: 'default',
    children: 'A'
  }
}`,...(D=(j=u.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var I,T,F;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    variant: 'rounded',
    color: 'primary',
    children: 'B'
  }
}`,...(F=(T=m.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};var M,z,q;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    variant: 'square',
    color: 'secondary',
    children: 'C'
  }
}`,...(q=(z=g.parameters)==null?void 0:z.docs)==null?void 0:q.source}}};var N,U,E;f.parameters={...f.parameters,docs:{...(N=f.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    variant: 'circular',
    color: 'default',
    children: 'D',
    sx: {
      width: 56,
      height: 56
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates a custom-sized Avatar component.'
      }
    }
  }
}`,...(E=(U=f.parameters)==null?void 0:U.docs)==null?void 0:E.source}}};var B,W,L;v.parameters={...v.parameters,docs:{...(B=v.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    variant: 'circular',
    color: 'default',
    src: 'https://via.placeholder.com/150',
    alt: 'Avatar with image'
  },
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates an Avatar component with an image.'
      }
    }
  }
}`,...(L=(W=v.parameters)==null?void 0:W.docs)==null?void 0:L.source}}};const Cr=["Default","Rounded","Square","CustomSize","WithImage"];export{f as CustomSize,u as Default,m as Rounded,g as Square,v as WithImage,Cr as __namedExportsOrder,kr as default};
