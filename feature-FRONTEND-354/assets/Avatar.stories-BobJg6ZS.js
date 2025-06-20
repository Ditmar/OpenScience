import{j as s}from"./jsx-runtime-BlDnFLNC.js";import{T as Z}from"./ThemeProvider-DZVeGOiK.js";import{M as $}from"./ThemeSwitcher-DqSU-K5c.js";import{r as w}from"./index-Cu9bd8lq.js";import{g as rr,a as ar,s as b,c as er,b as or,m as tr}from"./memoTheme-IslZ78gv.js";import{c as sr}from"./createSvgIcon-BPFlyPO5.js";import{u as A}from"./listItemTextClasses-B7JFNeHy.js";import{u as nr}from"./DefaultPropsProvider-NZtMqZlm.js";import"./CssBaseline-DUiEL-9x.js";import"./index-zQ0N-Mv4.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-B34fLoo2.js";import"./Select-5ZtnjRK0.js";import"./ButtonBase-uXvwMFlL.js";import"./extends-CF3RwP-h.js";import"./assertThisInitialized-C1KLUksq.js";import"./index-BWPb3MHu.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";const ir=sr(s.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}));function cr(r){return rr("MuiAvatar",r)}ar("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const lr=r=>{const{classes:a,variant:e,colorDefault:o}=r;return or({root:["root",e,o&&"colorDefault"],img:["img"],fallback:["fallback"]},cr,a)},dr=b("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(r,a)=>{const{ownerState:e}=r;return[a.root,a[e.variant],e.colorDefault&&a.colorDefault]}})(tr(({theme:r})=>({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:r.typography.fontFamily,fontSize:r.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",variants:[{props:{variant:"rounded"},style:{borderRadius:(r.vars||r).shape.borderRadius}},{props:{variant:"square"},style:{borderRadius:0}},{props:{colorDefault:!0},style:{color:(r.vars||r).palette.background.default,...r.vars?{backgroundColor:r.vars.palette.Avatar.defaultBg}:{backgroundColor:r.palette.grey[400],...r.applyStyles("dark",{backgroundColor:r.palette.grey[600]})}}}]}))),pr=b("img",{name:"MuiAvatar",slot:"Img"})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),mr=b(ir,{name:"MuiAvatar",slot:"Fallback"})({width:"75%",height:"75%"});function ur({crossOrigin:r,referrerPolicy:a,src:e,srcSet:o}){const[c,n]=w.useState(!1);return w.useEffect(()=>{if(!e&&!o)return;n(!1);let d=!0;const t=new Image;return t.onload=()=>{d&&n("loaded")},t.onerror=()=>{d&&n("error")},t.crossOrigin=r,t.referrerPolicy=a,t.src=e,o&&(t.srcset=o),()=>{d=!1}},[r,a,e,o]),c}const gr=w.forwardRef(function(a,e){const o=nr({props:a,name:"MuiAvatar"}),{alt:c,children:n,className:d,component:t="div",slots:h={},slotProps:l={},imgProps:k,sizes:_,src:y,srcSet:x,variant:H="circular",...O}=o;let p=null;const i={...o,component:t,variant:H},G=ur({...k,...typeof l.img=="function"?l.img(i):l.img,src:y,srcSet:x}),C=y||x,P=C&&G!=="error";i.colorDefault=!P,delete i.ownerState;const S=lr(i),[J,K]=A("root",{ref:e,className:er(S.root,d),elementType:dr,externalForwardedProps:{slots:h,slotProps:l,component:t,...O},ownerState:i}),[Q,V]=A("img",{className:S.img,elementType:pr,externalForwardedProps:{slots:h,slotProps:{img:{...k,...l.img}}},additionalProps:{alt:c,src:y,srcSet:x,sizes:_},ownerState:i}),[X,Y]=A("fallback",{className:S.fallback,elementType:mr,externalForwardedProps:{slots:h,slotProps:l},shouldForwardComponentProp:!0,ownerState:i});return P?p=s.jsx(Q,{...V}):n||n===0?p=n:C&&c?p=c[0]:p=s.jsx(X,{...Y}),s.jsx(J,{...K,children:p})}),Fr={title:"MUI/Avatar",component:gr,argTypes:{variant:{control:{type:"select"},options:["circle","rounded","square"]},color:{control:{type:"select"},options:["default","inherit","primary","secondary"]}},parameters:{layout:"centered"},decorators:[r=>s.jsxs(Z,{children:[s.jsx($,{}),s.jsx("div",{style:{padding:"20px"},children:s.jsx(r,{})})]})]},m={args:{variant:"circular",color:"default",children:"A"}},u={args:{variant:"rounded",color:"primary",children:"B"}},g={args:{variant:"square",color:"secondary",children:"C"}},f={args:{variant:"circular",color:"default",children:"D",sx:{width:56,height:56}},parameters:{docs:{description:{story:"This story demonstrates a custom-sized Avatar component."}}}},v={args:{variant:"circular",color:"default",src:"https://via.placeholder.com/150",alt:"Avatar with image"},parameters:{docs:{description:{story:"This story demonstrates an Avatar component with an image."}}}};var R,j,D;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    variant: 'circular',
    color: 'default',
    children: 'A'
  }
}`,...(D=(j=m.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var I,T,F;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    variant: 'rounded',
    color: 'primary',
    children: 'B'
  }
}`,...(F=(T=u.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};var M,z,q;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(L=(W=v.parameters)==null?void 0:W.docs)==null?void 0:L.source}}};const Mr=["Default","Rounded","Square","CustomSize","WithImage"];export{f as CustomSize,m as Default,u as Rounded,g as Square,v as WithImage,Mr as __namedExportsOrder,Fr as default};
