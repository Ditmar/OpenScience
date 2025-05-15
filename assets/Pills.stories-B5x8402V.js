import{j as n}from"./jsx-runtime-DRTy3Uxn.js";import"./index-BBkUAzwr.js";const Z="_pill_gxhm3_2",ee="_pill__icon_gxhm3_186",e={pill:Z,"pill--sm":"_pill--sm_gxhm3_13","pill--md":"_pill--md_gxhm3_20","pill--lg":"_pill--lg_gxhm3_27","pill--r-none":"_pill--r-none_gxhm3_34","pill--r-md":"_pill--r-md_gxhm3_37","pill--r-full":"_pill--r-full_gxhm3_40","pill--border-soft-neutral-light":"_pill--border-soft-neutral-light_gxhm3_43","pill--border-soft-brand-primary":"_pill--border-soft-brand-primary_gxhm3_46","pill--border-soft-brand-secondary":"_pill--border-soft-brand-secondary_gxhm3_49","pill--border-soft-brand-tertiary":"_pill--border-soft-brand-tertiary_gxhm3_52","pill--border-soft-feedback-positive":"_pill--border-soft-feedback-positive_gxhm3_55","pill--border-soft-feedback-negative":"_pill--border-soft-feedback-negative_gxhm3_58","pill--border-soft-feedback-warning":"_pill--border-soft-feedback-warning_gxhm3_61","pill--border-strong-neutral-light":"_pill--border-strong-neutral-light_gxhm3_64","pill--border-strong-brand-primary":"_pill--border-strong-brand-primary_gxhm3_67","pill--border-strong-brand-secondary":"_pill--border-strong-brand-secondary_gxhm3_70","pill--border-strong-brand-tertiary":"_pill--border-strong-brand-tertiary_gxhm3_73","pill--border-strong-feedback-positive":"_pill--border-strong-feedback-positive_gxhm3_76","pill--border-strong-feedback-negative":"_pill--border-strong-feedback-negative_gxhm3_79","pill--border-strong-feedback-warning":"_pill--border-strong-feedback-warning_gxhm3_82","pill--border-strong-read-only-disabled":"_pill--border-strong-read-only-disabled_gxhm3_85","pill--shadow":"_pill--shadow_gxhm3_88","pill--filled-neutral-dark":"_pill--filled-neutral-dark_gxhm3_91","pill--filled-neutral-light":"_pill--filled-neutral-light_gxhm3_95","pill--filled-brand-primary":"_pill--filled-brand-primary_gxhm3_99","pill--filled-brand-secondary":"_pill--filled-brand-secondary_gxhm3_103","pill--filled-brand-tertiary":"_pill--filled-brand-tertiary_gxhm3_107","pill--filled-feedback-positive":"_pill--filled-feedback-positive_gxhm3_111","pill--filled-feedback-negative":"_pill--filled-feedback-negative_gxhm3_115","pill--filled-feedback-warning":"_pill--filled-feedback-warning_gxhm3_119","pill--filled-read-only-disabled":"_pill--filled-read-only-disabled_gxhm3_123","pill--outline-neutral-light":"_pill--outline-neutral-light_gxhm3_127","pill--outline-brand-primary":"_pill--outline-brand-primary_gxhm3_130","pill--outline-brand-secondary":"_pill--outline-brand-secondary_gxhm3_134","pill--outline-brand-tertiary":"_pill--outline-brand-tertiary_gxhm3_138","pill--outline-feedback-positive":"_pill--outline-feedback-positive_gxhm3_142","pill--outline-feedback-negative":"_pill--outline-feedback-negative_gxhm3_146","pill--outline-feedback-warning":"_pill--outline-feedback-warning_gxhm3_150","pill--soft-neutral-dark":"_pill--soft-neutral-dark_gxhm3_154","pill--soft-neutral-light":"_pill--soft-neutral-light_gxhm3_158","pill--soft-brand-primary":"_pill--soft-brand-primary_gxhm3_162","pill--soft-brand-secondary":"_pill--soft-brand-secondary_gxhm3_166","pill--soft-brand-tertiary":"_pill--soft-brand-tertiary_gxhm3_170","pill--soft-feedback-positive":"_pill--soft-feedback-positive_gxhm3_174","pill--soft-feedback-negative":"_pill--soft-feedback-negative_gxhm3_178","pill--soft-feedback-warning":"_pill--soft-feedback-warning_gxhm3_182",pill__icon:ee};function K(M){const{text:Q,color:r,variant:m,size:g,rounded:u,icon:l,ariaLabel:U,shadow:V,stroke:f}=M,b=m&&r?`${m}-${r}`:null,v=u?`r-${u.split("_")[1]}`:null,X=[e.pill,g&&e[`pill--${g}`],b&&e[`pill--${b}`],v&&e[`pill--${v}`],f&&r&&e[`pill--${f}-${r}`],V&&e["pill--shadow"]].filter(Boolean).join(" "),Y=e.pill__icon;return n.jsx("div",{children:n.jsxs("span",{className:X,role:"status","aria-label":U,children:[l&&n.jsx("span",{className:Y,"aria-hidden":"true","data-testid":"custom-icon",children:typeof l=="string"?n.jsx("img",{src:l,alt:""}):l}),Q]})})}K.__docgenInfo={description:"",methods:[],displayName:"Pill",props:{text:{required:!0,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"union",raw:`| 'neutral-dark'
| 'neutral-light'
| 'brand-primary'
| 'brand-secondary'
| 'brand-tertiary'
| 'feedback-positive'
| 'feedback-negative'
| 'feedback-warning'
| 'read-only-disabled'`,elements:[{name:"literal",value:"'neutral-dark'"},{name:"literal",value:"'neutral-light'"},{name:"literal",value:"'brand-primary'"},{name:"literal",value:"'brand-secondary'"},{name:"literal",value:"'brand-tertiary'"},{name:"literal",value:"'feedback-positive'"},{name:"literal",value:"'feedback-negative'"},{name:"literal",value:"'feedback-warning'"},{name:"literal",value:"'read-only-disabled'"}]},description:""},variant:{required:!1,tsType:{name:"union",raw:"'filled' | 'outline' | 'soft'",elements:[{name:"literal",value:"'filled'"},{name:"literal",value:"'outline'"},{name:"literal",value:"'soft'"}]},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:""},rounded:{required:!1,tsType:{name:"union",raw:"'r_none' | 'r_md' | 'r_full'",elements:[{name:"literal",value:"'r_none'"},{name:"literal",value:"'r_md'"},{name:"literal",value:"'r_full'"}]},description:""},icon:{required:!1,tsType:{name:"string"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""},shadow:{required:!1,tsType:{name:"boolean"},description:""},stroke:{required:!1,tsType:{name:"union",raw:"'border-soft' | 'border-strong'",elements:[{name:"literal",value:"'border-soft'"},{name:"literal",value:"'border-strong'"}]},description:""}}};const ne={title:"ui/components/atoms/Pills",component:K,argTypes:{color:{control:"select",options:["neutral-dark","neutral-light","brand-primary","brand-secondary","brand-tertiary","feedback-positive","feedback-negative","feedback-warning","read-only-disabled"]},variant:{control:"select",options:["filled","outline","soft"]},size:{control:"select",options:["sm","md","lg"]},rounded:{control:"select",options:["r_none","r_md","r_full"]},shadow:{control:"boolean"},stroke:{control:"radio",options:["border-soft","border-strong"]},icon:{control:!1}}},i={args:{text:"100",color:"neutral-dark",variant:"filled",size:"sm",rounded:"r_none",icon:void 0}},a={args:{text:"100",color:"neutral-light",variant:"outline",size:"sm",rounded:"r_none",icon:void 0}},o={args:{text:"100",color:"brand-primary",variant:"filled",size:"sm",rounded:"r_none",icon:void 0}},t={args:{text:"100",color:"brand-secondary",variant:"filled",size:"sm",rounded:"r_none",icon:void 0}},d={args:{text:"100",color:"brand-tertiary",variant:"filled",size:"sm",rounded:"r_none",icon:void 0}},s={args:{text:"100",color:"feedback-positive",variant:"filled",size:"sm",rounded:"r_none",icon:void 0}},c={args:{text:"100",color:"feedback-negative",variant:"filled",size:"sm",rounded:"r_none",icon:void 0}},p={args:{text:"100",color:"feedback-warning",variant:"filled",size:"sm",rounded:"r_none",icon:void 0}},_={args:{text:"100",color:"read-only-disabled",variant:"filled",size:"sm",rounded:"r_none",icon:void 0}};var h,x,y;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    text: '100',
    color: 'neutral-dark',
    variant: 'filled',
    size: 'sm',
    rounded: 'r_none',
    icon: undefined
  }
}`,...(y=(x=i.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var k,w,P;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    text: '100',
    color: 'neutral-light',
    variant: 'outline',
    size: 'sm',
    rounded: 'r_none',
    icon: undefined
  }
}`,...(P=(w=a.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var z,T,S;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    text: '100',
    color: 'brand-primary',
    variant: 'filled',
    size: 'sm',
    rounded: 'r_none',
    icon: undefined
  }
}`,...(S=(T=o.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var q,$,j;t.parameters={...t.parameters,docs:{...(q=t.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    text: '100',
    color: 'brand-secondary',
    variant: 'filled',
    size: 'sm',
    rounded: 'r_none',
    icon: undefined
  }
}`,...(j=($=t.parameters)==null?void 0:$.docs)==null?void 0:j.source}}};var N,C,D;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    text: '100',
    color: 'brand-tertiary',
    variant: 'filled',
    size: 'sm',
    rounded: 'r_none',
    icon: undefined
  }
}`,...(D=(C=d.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var L,E,W;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    text: '100',
    color: 'feedback-positive',
    variant: 'filled',
    size: 'sm',
    rounded: 'r_none',
    icon: undefined
  }
}`,...(W=(E=s.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var B,I,O;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    text: '100',
    color: 'feedback-negative',
    variant: 'filled',
    size: 'sm',
    rounded: 'r_none',
    icon: undefined
  }
}`,...(O=(I=c.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var R,A,F;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    text: '100',
    color: 'feedback-warning',
    variant: 'filled',
    size: 'sm',
    rounded: 'r_none',
    icon: undefined
  }
}`,...(F=(A=p.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};var G,H,J;_.parameters={..._.parameters,docs:{...(G=_.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    text: '100',
    color: 'read-only-disabled',
    variant: 'filled',
    size: 'sm',
    rounded: 'r_none',
    icon: undefined
  }
}`,...(J=(H=_.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};const ie=["PillDark","PillLight","PillPrimary","PillSecondary","PillTertiary","PillPositive","PillNegative","PillWarning","PillDisabled"];export{i as PillDark,_ as PillDisabled,a as PillLight,c as PillNegative,s as PillPositive,o as PillPrimary,t as PillSecondary,d as PillTertiary,p as PillWarning,ie as __namedExportsOrder,ne as default};
