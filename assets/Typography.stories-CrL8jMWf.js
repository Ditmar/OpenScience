import{j as s}from"./jsx-runtime-BlDnFLNC.js";import{T as k}from"./ThemeProvider-DDNvUqn8.js";import{M as q}from"./ThemeSwitcher-DX6iC7dp.js";import{r as G}from"./index-Cu9bd8lq.js";import{c as K}from"./clsx-B-dksMZM.js";import{i as Q}from"./index-Cplt8kMj.js";import{g as X,a as Y,s as Z,c as rr,m as tr}from"./memoTheme-BeurkDTM.js";import{c as ar}from"./createSimplePaletteValueFilter-bm0fmN_7.js";import{u as er,c as y}from"./DefaultPropsProvider-DcRJznjO.js";import"./Select-6mUUpZXC.js";import"./extends-CF3RwP-h.js";import"./assertThisInitialized-C1KLUksq.js";import"./index-BWPb3MHu.js";import"./createSvgIcon-jWNNoH0x.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-B34fLoo2.js";function or(t){return X("MuiTypography",t)}Y("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const sr={primary:!0,secondary:!0,error:!0,info:!0,success:!0,warning:!0,textPrimary:!0,textSecondary:!0,textDisabled:!0},ir=Q(),nr=t=>{const{align:a,gutterBottom:r,noWrap:e,paragraph:m,variant:g,classes:i}=t,o={root:["root",g,t.align!=="inherit"&&`align${y(a)}`,r&&"gutterBottom",e&&"noWrap",m&&"paragraph"]};return rr(o,or,i)},pr=Z("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:r}=t;return[a.root,r.variant&&a[r.variant],r.align!=="inherit"&&a[`align${y(r.align)}`],r.noWrap&&a.noWrap,r.gutterBottom&&a.gutterBottom,r.paragraph&&a.paragraph]}})(tr(({theme:t})=>{var a;return{margin:0,variants:[{props:{variant:"inherit"},style:{font:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}},...Object.entries(t.typography).filter(([r,e])=>r!=="inherit"&&e&&typeof e=="object").map(([r,e])=>({props:{variant:r},style:e})),...Object.entries(t.palette).filter(ar()).map(([r])=>({props:{color:r},style:{color:(t.vars||t).palette[r].main}})),...Object.entries(((a=t.palette)==null?void 0:a.text)||{}).filter(([,r])=>typeof r=="string").map(([r])=>({props:{color:`text${y(r)}`},style:{color:(t.vars||t).palette.text[r]}})),{props:({ownerState:r})=>r.align!=="inherit",style:{textAlign:"var(--Typography-textAlign)"}},{props:({ownerState:r})=>r.noWrap,style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},{props:({ownerState:r})=>r.gutterBottom,style:{marginBottom:"0.35em"}},{props:({ownerState:r})=>r.paragraph,style:{marginBottom:16}}]}})),B={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},cr=G.forwardRef(function(a,r){const{color:e,...m}=er({props:a,name:"MuiTypography"}),g=!sr[e],i=ir({...m,...g&&{color:e}}),{align:o="inherit",className:f,component:x,gutterBottom:H=!1,noWrap:I=!1,paragraph:v=!1,variant:u="body1",variantMapping:T=B,...b}=i,S={...i,align:o,color:e,className:f,component:x,gutterBottom:H,noWrap:I,paragraph:v,variant:u,variantMapping:T},J=x||(v?"p":T[u]||B[u])||"span",L=nr(S);return s.jsx(pr,{as:J,ref:r,className:K(L.root,f),...b,ownerState:S,style:{...o!=="inherit"&&{"--Typography-textAlign":o},...b.style}})}),Cr={title:"MUI/Typography",component:cr,argTypes:{variant:{control:{type:"select"},options:["h1","h2","h3","body1","body2"]}},parameters:{layout:"centered"},decorators:[t=>s.jsxs(k,{children:[s.jsx(q,{}),s.jsx("div",{style:{padding:"20px"},children:s.jsx(t,{})})]})]},n={args:{variant:"h1",children:"This is a heading 1!"}},p={args:{variant:"h2",children:"This is a heading 2!"}},c={args:{variant:"h3",children:"This is a heading 3!"}},l={args:{variant:"body1",children:"This is body text 1!"}},h={args:{variant:"body2",children:"This is body text 2!"}},d={args:{variant:"h1",children:"This is a custom size heading!",style:{fontSize:"48px"}}};var j,C,M;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    variant: 'h1',
    children: 'This is a heading 1!'
  }
}`,...(M=(C=n.parameters)==null?void 0:C.docs)==null?void 0:M.source}}};var w,W,z;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: 'h2',
    children: 'This is a heading 2!'
  }
}`,...(z=(W=p.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};var O,P,R;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    variant: 'h3',
    children: 'This is a heading 3!'
  }
}`,...(R=(P=c.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var U,D,E;l.parameters={...l.parameters,docs:{...(U=l.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    variant: 'body1',
    children: 'This is body text 1!'
  }
}`,...(E=(D=l.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var A,_,$;h.parameters={...h.parameters,docs:{...(A=h.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    variant: 'body2',
    children: 'This is body text 2!'
  }
}`,...($=(_=h.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};var N,V,F;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    variant: 'h1',
    children: 'This is a custom size heading!',
    style: {
      fontSize: '48px'
    }
  }
}`,...(F=(V=d.parameters)==null?void 0:V.docs)==null?void 0:F.source}}};const Mr=["Default","Outlined","Standard","Body1","Body2","CustomSize"];export{l as Body1,h as Body2,d as CustomSize,n as Default,p as Outlined,c as Standard,Mr as __namedExportsOrder,Cr as default};
