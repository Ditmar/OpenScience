import{j as l}from"./jsx-runtime-DRTy3Uxn.js";import"./index-BBkUAzwr.js";const Z="_pill_awri1_2",ee="_pill__icon_awri1_178",e={pill:Z,"pill--sm":"_pill--sm_awri1_10","pill--md":"_pill--md_awri1_14","pill--lg":"_pill--lg_awri1_18","pill--r-none":"_pill--r-none_awri1_22","pill--r-md":"_pill--r-md_awri1_25","pill--r-full":"_pill--r-full_awri1_28","pill--border-soft-neutral-light":"_pill--border-soft-neutral-light_awri1_31","pill--border-soft-brand-primary":"_pill--border-soft-brand-primary_awri1_34","pill--border-soft-brand-secondary":"_pill--border-soft-brand-secondary_awri1_37","pill--border-soft-brand-tertiary":"_pill--border-soft-brand-tertiary_awri1_40","pill--border-soft-feedback-positive":"_pill--border-soft-feedback-positive_awri1_43","pill--border-soft-feedback-negative":"_pill--border-soft-feedback-negative_awri1_46","pill--border-soft-feedback-warning":"_pill--border-soft-feedback-warning_awri1_49","pill--border-strong-neutral-light":"_pill--border-strong-neutral-light_awri1_52","pill--border-strong-brand-primary":"_pill--border-strong-brand-primary_awri1_55","pill--border-strong-brand-secondary":"_pill--border-strong-brand-secondary_awri1_58","pill--border-strong-brand-tertiary":"_pill--border-strong-brand-tertiary_awri1_61","pill--border-strong-feedback-positive":"_pill--border-strong-feedback-positive_awri1_64","pill--border-strong-feedback-negative":"_pill--border-strong-feedback-negative_awri1_67","pill--border-strong-feedback-warning":"_pill--border-strong-feedback-warning_awri1_70","pill--border-strong-read-only-disabled":"_pill--border-strong-read-only-disabled_awri1_73","pill--shadow":"_pill--shadow_awri1_76","pill--filled-neutral-dark":"_pill--filled-neutral-dark_awri1_79","pill--filled-neutral-light":"_pill--filled-neutral-light_awri1_83","pill--filled-brand-primary":"_pill--filled-brand-primary_awri1_87","pill--filled-brand-secondary":"_pill--filled-brand-secondary_awri1_91","pill--filled-brand-tertiary":"_pill--filled-brand-tertiary_awri1_95","pill--filled-feedback-positive":"_pill--filled-feedback-positive_awri1_99","pill--filled-feedback-negative":"_pill--filled-feedback-negative_awri1_103","pill--filled-feedback-warning":"_pill--filled-feedback-warning_awri1_107","pill--filled-read-only-disabled":"_pill--filled-read-only-disabled_awri1_111","pill--outline-neutral-light":"_pill--outline-neutral-light_awri1_115","pill--outline-brand-primary":"_pill--outline-brand-primary_awri1_118","pill--outline-brand-secondary":"_pill--outline-brand-secondary_awri1_122","pill--outline-brand-tertiary":"_pill--outline-brand-tertiary_awri1_126","pill--outline-feedback-positive":"_pill--outline-feedback-positive_awri1_130","pill--outline-feedback-negative":"_pill--outline-feedback-negative_awri1_134","pill--outline-feedback-warning":"_pill--outline-feedback-warning_awri1_138","pill--soft-neutral-dark":"_pill--soft-neutral-dark_awri1_142","pill--soft-neutral-light":"_pill--soft-neutral-light_awri1_146","pill--soft-brand-primary":"_pill--soft-brand-primary_awri1_150","pill--soft-brand-secondary":"_pill--soft-brand-secondary_awri1_154","pill--soft-brand-tertiary":"_pill--soft-brand-tertiary_awri1_158","pill--soft-feedback-positive":"_pill--soft-feedback-positive_awri1_162","pill--soft-feedback-negative":"_pill--soft-feedback-negative_awri1_166","pill--soft-feedback-warning":"_pill--soft-feedback-warning_awri1_170","pill--soft-read-only-disabled":"_pill--soft-read-only-disabled_awri1_174",pill__icon:ee};function K(M){const{text:Q,color:_,variant:u,size:f,rounded:b,icon:r,ariaLabel:U,shadow:V,stroke:m}=M,g=u&&_?`${u}-${_}`:null,v=b?`r-${b.split("_")[1]}`:null,X=[e.pill,f&&e[`pill--${f}`],g&&e[`pill--${g}`],v&&e[`pill--${v}`],m&&e[`pill--${m}-neutral-light`],V&&e["pill--shadow"]].filter(Boolean).join(" "),Y=e.pill__icon;return l.jsx("div",{children:l.jsxs("span",{className:X,role:"status","aria-label":U,children:[r&&l.jsx("span",{className:Y,"aria-hidden":"true","data-testid":"custom-icon",children:typeof r=="string"?l.jsx("img",{src:r,alt:""}):r}),Q]})})}K.__docgenInfo={description:"",methods:[],displayName:"Pill",props:{text:{required:!0,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"union",raw:`| 'neutral-dark'
| 'neutral-light'
| 'brand-primary'
| 'brand-secondary'
| 'brand-tertiary'
| 'feedback-positive'
| 'feedback-negative'
| 'feedback-warning'
| 'read-only-disabled'`,elements:[{name:"literal",value:"'neutral-dark'"},{name:"literal",value:"'neutral-light'"},{name:"literal",value:"'brand-primary'"},{name:"literal",value:"'brand-secondary'"},{name:"literal",value:"'brand-tertiary'"},{name:"literal",value:"'feedback-positive'"},{name:"literal",value:"'feedback-negative'"},{name:"literal",value:"'feedback-warning'"},{name:"literal",value:"'read-only-disabled'"}]},description:""},variant:{required:!1,tsType:{name:"union",raw:"'filled' | 'outline' | 'soft'",elements:[{name:"literal",value:"'filled'"},{name:"literal",value:"'outline'"},{name:"literal",value:"'soft'"}]},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:""},rounded:{required:!1,tsType:{name:"union",raw:"'r_none' | 'r_md' | 'r_full'",elements:[{name:"literal",value:"'r_none'"},{name:"literal",value:"'r_md'"},{name:"literal",value:"'r_full'"}]},description:""},icon:{required:!1,tsType:{name:"string"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""},shadow:{required:!1,tsType:{name:"boolean"},description:""},stroke:{required:!1,tsType:{name:"union",raw:"'border-soft' | 'border-strong'",elements:[{name:"literal",value:"'border-soft'"},{name:"literal",value:"'border-strong'"}]},description:""}}};const ie={title:"ui/components/atoms/Pills",component:K,argTypes:{color:{control:"select",options:["neutral-dark","neutral-light","brand-primary","brand-secondary","brand-tertiary","feedback-positive","feedback-negative","feedback-warning","read-only-disabled"]},variant:{control:"select",options:["filled","outline","soft"]},size:{control:"select",options:["sm","md","lg"]},rounded:{control:"select",options:["r_none","r_md","r_full"]},shadow:{control:"boolean"},stroke:{control:"radio",options:["border-soft","border-strong"]},icon:{control:!1}}},i={args:{text:"100",color:"neutral-dark",variant:"filled",size:"sm",rounded:"r_none",icon:void 0}},a={args:{text:"100",color:"neutral-light",variant:"outline",size:"sm",rounded:"r_none",icon:void 0}},n={args:{text:"100",color:"brand-primary",variant:"filled",size:"sm",rounded:"r_none",icon:void 0}},o={args:{text:"100",color:"brand-secondary",variant:"filled",size:"sm",rounded:"r_none",icon:void 0}},t={args:{text:"100",color:"brand-tertiary",variant:"filled",size:"sm",rounded:"r_none",icon:void 0}},d={args:{text:"100",color:"feedback-positive",variant:"filled",size:"sm",rounded:"r_none",icon:void 0}},s={args:{text:"100",color:"feedback-negative",variant:"filled",size:"sm",rounded:"r_none",icon:void 0}},c={args:{text:"100",color:"feedback-warning",variant:"filled",size:"sm",rounded:"r_none",icon:void 0}},p={args:{text:"100",color:"read-only-disabled",variant:"filled",size:"sm",rounded:"r_none",icon:void 0}};var w,y,k;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    text: '100',
    color: 'neutral-dark',
    variant: 'filled',
    size: 'sm',
    rounded: 'r_none',
    icon: undefined
  }
}`,...(k=(y=i.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var h,x,P;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    text: '100',
    color: 'neutral-light',
    variant: 'outline',
    size: 'sm',
    rounded: 'r_none',
    icon: undefined
  }
}`,...(P=(x=a.parameters)==null?void 0:x.docs)==null?void 0:P.source}}};var z,T,S;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    text: '100',
    color: 'brand-primary',
    variant: 'filled',
    size: 'sm',
    rounded: 'r_none',
    icon: undefined
  }
}`,...(S=(T=n.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var q,j,$;o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    text: '100',
    color: 'brand-secondary',
    variant: 'filled',
    size: 'sm',
    rounded: 'r_none',
    icon: undefined
  }
}`,...($=(j=o.parameters)==null?void 0:j.docs)==null?void 0:$.source}}};var N,C,D;t.parameters={...t.parameters,docs:{...(N=t.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    text: '100',
    color: 'brand-tertiary',
    variant: 'filled',
    size: 'sm',
    rounded: 'r_none',
    icon: undefined
  }
}`,...(D=(C=t.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var L,E,W;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    text: '100',
    color: 'feedback-positive',
    variant: 'filled',
    size: 'sm',
    rounded: 'r_none',
    icon: undefined
  }
}`,...(W=(E=d.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var B,I,O;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    text: '100',
    color: 'feedback-negative',
    variant: 'filled',
    size: 'sm',
    rounded: 'r_none',
    icon: undefined
  }
}`,...(O=(I=s.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var R,A,F;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    text: '100',
    color: 'feedback-warning',
    variant: 'filled',
    size: 'sm',
    rounded: 'r_none',
    icon: undefined
  }
}`,...(F=(A=c.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};var G,H,J;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    text: '100',
    color: 'read-only-disabled',
    variant: 'filled',
    size: 'sm',
    rounded: 'r_none',
    icon: undefined
  }
}`,...(J=(H=p.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};const ae=["PillDark","PillLight","PillPrimary","PillSecondary","PillTertiary","PillPositive","PillNegative","PillWarning","PillDisabled"];export{i as PillDark,p as PillDisabled,a as PillLight,s as PillNegative,d as PillPositive,n as PillPrimary,o as PillSecondary,t as PillTertiary,c as PillWarning,ae as __namedExportsOrder,ie as default};
