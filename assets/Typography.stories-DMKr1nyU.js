import{j as o}from"./jsx-runtime-BlDnFLNC.js";import{u as k,i as q,c as y,T as G}from"./ThemeProvider-D-bAEgdL.js";import{g as K,a as Q,s as X,c as Y,b as Z,m as rr,d as tr,M as ar}from"./ThemeSwitcher-CK9rJGGj.js";import{r as er}from"./index-Cu9bd8lq.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-B89909lT.js";import"./assertThisInitialized-C1_Uj0Qz.js";import"./index-BWPb3MHu.js";function sr(t){return K("MuiTypography",t)}Q("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const or={primary:!0,secondary:!0,error:!0,info:!0,success:!0,warning:!0,textPrimary:!0,textSecondary:!0,textDisabled:!0},nr=q(),ir=t=>{const{align:a,gutterBottom:r,noWrap:e,paragraph:g,variant:m,classes:n}=t,s={root:["root",m,t.align!=="inherit"&&`align${y(a)}`,r&&"gutterBottom",e&&"noWrap",g&&"paragraph"]};return Z(s,sr,n)},pr=X("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:r}=t;return[a.root,r.variant&&a[r.variant],r.align!=="inherit"&&a[`align${y(r.align)}`],r.noWrap&&a.noWrap,r.gutterBottom&&a.gutterBottom,r.paragraph&&a.paragraph]}})(rr(({theme:t})=>{var a;return{margin:0,variants:[{props:{variant:"inherit"},style:{font:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}},...Object.entries(t.typography).filter(([r,e])=>r!=="inherit"&&e&&typeof e=="object").map(([r,e])=>({props:{variant:r},style:e})),...Object.entries(t.palette).filter(tr()).map(([r])=>({props:{color:r},style:{color:(t.vars||t).palette[r].main}})),...Object.entries(((a=t.palette)==null?void 0:a.text)||{}).filter(([,r])=>typeof r=="string").map(([r])=>({props:{color:`text${y(r)}`},style:{color:(t.vars||t).palette.text[r]}})),{props:({ownerState:r})=>r.align!=="inherit",style:{textAlign:"var(--Typography-textAlign)"}},{props:({ownerState:r})=>r.noWrap,style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},{props:({ownerState:r})=>r.gutterBottom,style:{marginBottom:"0.35em"}},{props:({ownerState:r})=>r.paragraph,style:{marginBottom:16}}]}})),B={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},cr=er.forwardRef(function(a,r){const{color:e,...g}=k({props:a,name:"MuiTypography"}),m=!or[e],n=nr({...g,...m&&{color:e}}),{align:s="inherit",className:x,component:f,gutterBottom:H=!1,noWrap:I=!1,paragraph:v=!1,variant:u="body1",variantMapping:T=B,...b}=n,S={...n,align:s,color:e,className:x,component:f,gutterBottom:H,noWrap:I,paragraph:v,variant:u,variantMapping:T},J=f||(v?"p":T[u]||B[u])||"span",L=ir(S);return o.jsx(pr,{as:J,ref:r,className:Y(L.root,x),...b,ownerState:S,style:{...s!=="inherit"&&{"--Typography-textAlign":s},...b.style}})}),xr={title:"MUI/Typography",component:cr,argTypes:{variant:{control:{type:"select"},options:["h1","h2","h3","body1","body2"]}},parameters:{layout:"centered"},decorators:[t=>o.jsxs(G,{children:[o.jsx(ar,{}),o.jsx("div",{style:{padding:"20px"},children:o.jsx(t,{})})]})]},i={args:{variant:"h1",children:"This is a heading 1!"}},p={args:{variant:"h2",children:"This is a heading 2!"}},c={args:{variant:"h3",children:"This is a heading 3!"}},l={args:{variant:"body1",children:"This is body text 1!"}},h={args:{variant:"body2",children:"This is body text 2!"}},d={args:{variant:"h1",children:"This is a custom size heading!",style:{fontSize:"48px"}}};var j,C,M;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    variant: 'h1',
    children: 'This is a heading 1!'
  }
}`,...(M=(C=i.parameters)==null?void 0:C.docs)==null?void 0:M.source}}};var w,W,z;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(F=(V=d.parameters)==null?void 0:V.docs)==null?void 0:F.source}}};const fr=["Default","Outlined","Standard","Body1","Body2","CustomSize"];export{l as Body1,h as Body2,d as CustomSize,i as Default,p as Outlined,c as Standard,fr as __namedExportsOrder,xr as default};
