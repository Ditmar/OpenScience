import{j as n}from"./jsx-runtime-DRTy3Uxn.js";import"./index-BBkUAzwr.js";const Z="_pill_zq13o_2",ee="_pill__icon_zq13o_186",e={pill:Z,"pill--sm":"_pill--sm_zq13o_13","pill--md":"_pill--md_zq13o_20","pill--lg":"_pill--lg_zq13o_27","pill--r-none":"_pill--r-none_zq13o_34","pill--r-md":"_pill--r-md_zq13o_37","pill--r-full":"_pill--r-full_zq13o_40","pill--border-soft-neutral-light":"_pill--border-soft-neutral-light_zq13o_43","pill--border-soft-brand-primary":"_pill--border-soft-brand-primary_zq13o_46","pill--border-soft-brand-secondary":"_pill--border-soft-brand-secondary_zq13o_49","pill--border-soft-brand-tertiary":"_pill--border-soft-brand-tertiary_zq13o_52","pill--border-soft-feedback-positive":"_pill--border-soft-feedback-positive_zq13o_55","pill--border-soft-feedback-negative":"_pill--border-soft-feedback-negative_zq13o_58","pill--border-soft-feedback-warning":"_pill--border-soft-feedback-warning_zq13o_61","pill--border-strong-neutral-light":"_pill--border-strong-neutral-light_zq13o_64","pill--border-strong-brand-primary":"_pill--border-strong-brand-primary_zq13o_67","pill--border-strong-brand-secondary":"_pill--border-strong-brand-secondary_zq13o_70","pill--border-strong-brand-tertiary":"_pill--border-strong-brand-tertiary_zq13o_73","pill--border-strong-feedback-positive":"_pill--border-strong-feedback-positive_zq13o_76","pill--border-strong-feedback-negative":"_pill--border-strong-feedback-negative_zq13o_79","pill--border-strong-feedback-warning":"_pill--border-strong-feedback-warning_zq13o_82","pill--border-strong-read-only-disabled":"_pill--border-strong-read-only-disabled_zq13o_85","pill--shadow":"_pill--shadow_zq13o_88","pill--filled-neutral-dark":"_pill--filled-neutral-dark_zq13o_91","pill--filled-neutral-light":"_pill--filled-neutral-light_zq13o_95","pill--filled-brand-primary":"_pill--filled-brand-primary_zq13o_99","pill--filled-brand-secondary":"_pill--filled-brand-secondary_zq13o_103","pill--filled-brand-tertiary":"_pill--filled-brand-tertiary_zq13o_107","pill--filled-feedback-positive":"_pill--filled-feedback-positive_zq13o_111","pill--filled-feedback-negative":"_pill--filled-feedback-negative_zq13o_115","pill--filled-feedback-warning":"_pill--filled-feedback-warning_zq13o_119","pill--filled-read-only-disabled":"_pill--filled-read-only-disabled_zq13o_123","pill--outline-neutral-light":"_pill--outline-neutral-light_zq13o_127","pill--outline-brand-primary":"_pill--outline-brand-primary_zq13o_130","pill--outline-brand-secondary":"_pill--outline-brand-secondary_zq13o_134","pill--outline-brand-tertiary":"_pill--outline-brand-tertiary_zq13o_138","pill--outline-feedback-positive":"_pill--outline-feedback-positive_zq13o_142","pill--outline-feedback-negative":"_pill--outline-feedback-negative_zq13o_146","pill--outline-feedback-warning":"_pill--outline-feedback-warning_zq13o_150","pill--soft-neutral-dark":"_pill--soft-neutral-dark_zq13o_154","pill--soft-neutral-light":"_pill--soft-neutral-light_zq13o_158","pill--soft-brand-primary":"_pill--soft-brand-primary_zq13o_162","pill--soft-brand-secondary":"_pill--soft-brand-secondary_zq13o_166","pill--soft-brand-tertiary":"_pill--soft-brand-tertiary_zq13o_170","pill--soft-feedback-positive":"_pill--soft-feedback-positive_zq13o_174","pill--soft-feedback-negative":"_pill--soft-feedback-negative_zq13o_178","pill--soft-feedback-warning":"_pill--soft-feedback-warning_zq13o_182",pill__icon:ee};function K(M){const{text:Q,color:r,variant:u,size:f,rounded:b,icon:l,ariaLabel:U,shadow:V,stroke:m}=M,g=u&&r?`${u}-${r}`:null,v=b?`r-${b.split("_")[1]}`:null,X=[e.pill,f&&e[`pill--${f}`],g&&e[`pill--${g}`],v&&e[`pill--${v}`],m&&r&&e[`pill--${m}-${r}`],V&&e["pill--shadow"]].filter(Boolean).join(" "),Y=e.pill__icon;return n.jsx("div",{children:n.jsxs("span",{className:X,role:"status","aria-label":U,children:[l&&n.jsx("span",{className:Y,"aria-hidden":"true","data-testid":"custom-icon",children:typeof l=="string"?n.jsx("img",{src:l,alt:""}):l}),Q]})})}K.__docgenInfo={description:"",methods:[],displayName:"Pill",props:{text:{required:!0,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"union",raw:`| 'neutral-dark'
| 'neutral-light'
| 'brand-primary'
| 'brand-secondary'
| 'brand-tertiary'
| 'feedback-positive'
| 'feedback-negative'
| 'feedback-warning'
| 'read-only-disabled'`,elements:[{name:"literal",value:"'neutral-dark'"},{name:"literal",value:"'neutral-light'"},{name:"literal",value:"'brand-primary'"},{name:"literal",value:"'brand-secondary'"},{name:"literal",value:"'brand-tertiary'"},{name:"literal",value:"'feedback-positive'"},{name:"literal",value:"'feedback-negative'"},{name:"literal",value:"'feedback-warning'"},{name:"literal",value:"'read-only-disabled'"}]},description:""},variant:{required:!1,tsType:{name:"union",raw:"'filled' | 'outline' | 'soft'",elements:[{name:"literal",value:"'filled'"},{name:"literal",value:"'outline'"},{name:"literal",value:"'soft'"}]},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:""},rounded:{required:!1,tsType:{name:"union",raw:"'r_none' | 'r_md' | 'r_full'",elements:[{name:"literal",value:"'r_none'"},{name:"literal",value:"'r_md'"},{name:"literal",value:"'r_full'"}]},description:""},icon:{required:!1,tsType:{name:"string"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""},shadow:{required:!1,tsType:{name:"boolean"},description:""},stroke:{required:!1,tsType:{name:"union",raw:"'border-soft' | 'border-strong'",elements:[{name:"literal",value:"'border-soft'"},{name:"literal",value:"'border-strong'"}]},description:""}}};const ne={title:"ui/components/atoms/pills",component:K,argTypes:{color:{control:"select",options:["neutral-dark","neutral-light","brand-primary","brand-secondary","brand-tertiary","feedback-positive","feedback-negative","feedback-warning","read-only-disabled"]},variant:{control:"select",options:["filled","outline","soft"]},size:{control:"select",options:["sm","md","lg"]},rounded:{control:"select",options:["r_none","r_md","r_full"]},shadow:{control:"boolean"},stroke:{control:"radio",options:["border-soft","border-strong"]},icon:{control:!1}}},i={args:{text:"100",color:"neutral-dark",variant:"filled",size:"sm",rounded:"r_none",icon:void 0}},a={args:{text:"100",color:"neutral-light",variant:"outline",size:"sm",rounded:"r_none",icon:void 0}},o={args:{text:"100",color:"brand-primary",variant:"filled",size:"sm",rounded:"r_none",icon:void 0}},t={args:{text:"100",color:"brand-secondary",variant:"filled",size:"sm",rounded:"r_none",icon:void 0}},d={args:{text:"100",color:"brand-tertiary",variant:"filled",size:"sm",rounded:"r_none",icon:void 0}},s={args:{text:"100",color:"feedback-positive",variant:"filled",size:"sm",rounded:"r_none",icon:void 0}},c={args:{text:"100",color:"feedback-negative",variant:"filled",size:"sm",rounded:"r_none",icon:void 0}},p={args:{text:"100",color:"feedback-warning",variant:"filled",size:"sm",rounded:"r_none",icon:void 0}},_={args:{text:"100",color:"read-only-disabled",variant:"filled",size:"sm",rounded:"r_none",icon:void 0}};var y,z,k;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    text: '100',
    color: 'neutral-dark',
    variant: 'filled',
    size: 'sm',
    rounded: 'r_none',
    icon: undefined
  }
}`,...(k=(z=i.parameters)==null?void 0:z.docs)==null?void 0:k.source}}};var q,h,x;a.parameters={...a.parameters,docs:{...(q=a.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    text: '100',
    color: 'neutral-light',
    variant: 'outline',
    size: 'sm',
    rounded: 'r_none',
    icon: undefined
  }
}`,...(x=(h=a.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var w,P,T;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    text: '100',
    color: 'brand-primary',
    variant: 'filled',
    size: 'sm',
    rounded: 'r_none',
    icon: undefined
  }
}`,...(T=(P=o.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var S,$,j;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
