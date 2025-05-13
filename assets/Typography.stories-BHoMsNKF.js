import{j as o}from"./jsx-runtime-DRTy3Uxn.js";import{g as k,a as q,s as G,b as y,m as K,u as Q,e as X,i as Y,f as Z,d as rr,A as tr,M as ar}from"./ThemeSwitcher-CJyEVODt.js";import{r as er}from"./index-BBkUAzwr.js";import"./index-PqR-_bA4.js";function sr(t){return k("MuiTypography",t)}q("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const or={primary:!0,secondary:!0,error:!0,info:!0,success:!0,warning:!0,textPrimary:!0,textSecondary:!0,textDisabled:!0},nr=Y(),ir=t=>{const{align:a,gutterBottom:r,noWrap:e,paragraph:g,variant:u,classes:n}=t,s={root:["root",u,t.align!=="inherit"&&`align${y(a)}`,r&&"gutterBottom",e&&"noWrap",g&&"paragraph"]};return Z(s,sr,n)},pr=G("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:r}=t;return[a.root,r.variant&&a[r.variant],r.align!=="inherit"&&a[`align${y(r.align)}`],r.noWrap&&a.noWrap,r.gutterBottom&&a.gutterBottom,r.paragraph&&a.paragraph]}})(K(({theme:t})=>{var a;return{margin:0,variants:[{props:{variant:"inherit"},style:{font:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}},...Object.entries(t.typography).filter(([r,e])=>r!=="inherit"&&e&&typeof e=="object").map(([r,e])=>({props:{variant:r},style:e})),...Object.entries(t.palette).filter(rr()).map(([r])=>({props:{color:r},style:{color:(t.vars||t).palette[r].main}})),...Object.entries(((a=t.palette)==null?void 0:a.text)||{}).filter(([,r])=>typeof r=="string").map(([r])=>({props:{color:`text${y(r)}`},style:{color:(t.vars||t).palette.text[r]}})),{props:({ownerState:r})=>r.align!=="inherit",style:{textAlign:"var(--Typography-textAlign)"}},{props:({ownerState:r})=>r.noWrap,style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},{props:({ownerState:r})=>r.gutterBottom,style:{marginBottom:"0.35em"}},{props:({ownerState:r})=>r.paragraph,style:{marginBottom:16}}]}})),B={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},cr=er.forwardRef(function(a,r){const{color:e,...g}=Q({props:a,name:"MuiTypography"}),u=!or[e],n=nr({...g,...u&&{color:e}}),{align:s="inherit",className:x,component:f,gutterBottom:H=!1,noWrap:I=!1,paragraph:v=!1,variant:m="body1",variantMapping:b=B,...T}=n,S={...n,align:s,color:e,className:x,component:f,gutterBottom:H,noWrap:I,paragraph:v,variant:m,variantMapping:b},J=f||(v?"p":b[m]||B[m])||"span",L=ir(S);return o.jsx(pr,{as:J,ref:r,className:X(L.root,x),...T,ownerState:S,style:{...s!=="inherit"&&{"--Typography-textAlign":s},...T.style}})}),ur={title:"MUI/Typography",component:cr,argTypes:{variant:{control:{type:"select"},options:["h1","h2","h3","body1","body2"]}},parameters:{layout:"centered"},decorators:[t=>o.jsxs(tr,{children:[o.jsx(ar,{}),o.jsx("div",{style:{padding:"20px"},children:o.jsx(t,{})})]})]},i={args:{variant:"h1",children:"This is a heading 1!"}},p={args:{variant:"h2",children:"This is a heading 2!"}},c={args:{variant:"h3",children:"This is a heading 3!"}},l={args:{variant:"body1",children:"This is body text 1!"}},h={args:{variant:"body2",children:"This is body text 2!"}},d={args:{variant:"h1",children:"This is a custom size heading!",style:{fontSize:"48px"}}};var j,C,M;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    variant: 'h1',
    children: 'This is a heading 1!'
  }
}`,...(M=(C=i.parameters)==null?void 0:C.docs)==null?void 0:M.source}}};var w,z,O;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: 'h2',
    children: 'This is a heading 2!'
  }
}`,...(O=(z=p.parameters)==null?void 0:z.docs)==null?void 0:O.source}}};var W,P,R;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    variant: 'h3',
    children: 'This is a heading 3!'
  }
}`,...(R=(P=c.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var A,U,D;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    variant: 'body1',
    children: 'This is body text 1!'
  }
}`,...(D=(U=l.parameters)==null?void 0:U.docs)==null?void 0:D.source}}};var E,_,$;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(F=(V=d.parameters)==null?void 0:V.docs)==null?void 0:F.source}}};const mr=["Default","Outlined","Standard","Body1","Body2","CustomSize"];export{l as Body1,h as Body2,d as CustomSize,i as Default,p as Outlined,c as Standard,mr as __namedExportsOrder,ur as default};
