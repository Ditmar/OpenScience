import{j as r}from"./jsx-runtime-DRTy3Uxn.js";import{I as k}from"./icons-DNNtq2Yd.js";import"./index-BBkUAzwr.js";import"./index-YMbfICiA.js";const le="_pill_l3jc8_106",re="_pill__icon_l3jc8_289",l={pill:le,"pill--sm":"_pill--sm_l3jc8_116","pill--md":"_pill--md_l3jc8_123","pill--lg":"_pill--lg_l3jc8_130","pill--r-none":"_pill--r-none_l3jc8_137","pill--r-md":"_pill--r-md_l3jc8_140","pill--r-full":"_pill--r-full_l3jc8_143","pill--border-soft-neutral-light":"_pill--border-soft-neutral-light_l3jc8_146","pill--border-soft-brand-primary":"_pill--border-soft-brand-primary_l3jc8_149","pill--border-soft-brand-secondary":"_pill--border-soft-brand-secondary_l3jc8_152","pill--border-soft-brand-tertiary":"_pill--border-soft-brand-tertiary_l3jc8_155","pill--border-soft-feedback-positive":"_pill--border-soft-feedback-positive_l3jc8_158","pill--border-soft-feedback-negative":"_pill--border-soft-feedback-negative_l3jc8_161","pill--border-soft-feedback-warning":"_pill--border-soft-feedback-warning_l3jc8_164","pill--border-strong-neutral-light":"_pill--border-strong-neutral-light_l3jc8_167","pill--border-strong-brand-primary":"_pill--border-strong-brand-primary_l3jc8_170","pill--border-strong-brand-secondary":"_pill--border-strong-brand-secondary_l3jc8_173","pill--border-strong-brand-tertiary":"_pill--border-strong-brand-tertiary_l3jc8_176","pill--border-strong-feedback-positive":"_pill--border-strong-feedback-positive_l3jc8_179","pill--border-strong-feedback-negative":"_pill--border-strong-feedback-negative_l3jc8_182","pill--border-strong-feedback-warning":"_pill--border-strong-feedback-warning_l3jc8_185","pill--border-strong-read-only-disabled":"_pill--border-strong-read-only-disabled_l3jc8_188","pill--shadow":"_pill--shadow_l3jc8_191","pill--filled-neutral-dark":"_pill--filled-neutral-dark_l3jc8_194","pill--filled-neutral-light":"_pill--filled-neutral-light_l3jc8_198","pill--filled-brand-primary":"_pill--filled-brand-primary_l3jc8_202","pill--filled-brand-secondary":"_pill--filled-brand-secondary_l3jc8_206","pill--filled-brand-tertiary":"_pill--filled-brand-tertiary_l3jc8_210","pill--filled-feedback-positive":"_pill--filled-feedback-positive_l3jc8_214","pill--filled-feedback-negative":"_pill--filled-feedback-negative_l3jc8_218","pill--filled-feedback-warning":"_pill--filled-feedback-warning_l3jc8_222","pill--filled-read-only-disabled":"_pill--filled-read-only-disabled_l3jc8_226","pill--outline-neutral-light":"_pill--outline-neutral-light_l3jc8_230","pill--outline-brand-primary":"_pill--outline-brand-primary_l3jc8_233","pill--outline-brand-secondary":"_pill--outline-brand-secondary_l3jc8_237","pill--outline-brand-tertiary":"_pill--outline-brand-tertiary_l3jc8_241","pill--outline-feedback-positive":"_pill--outline-feedback-positive_l3jc8_245","pill--outline-feedback-negative":"_pill--outline-feedback-negative_l3jc8_249","pill--outline-feedback-warning":"_pill--outline-feedback-warning_l3jc8_253","pill--soft-neutral-dark":"_pill--soft-neutral-dark_l3jc8_257","pill--soft-neutral-light":"_pill--soft-neutral-light_l3jc8_261","pill--soft-brand-primary":"_pill--soft-brand-primary_l3jc8_265","pill--soft-brand-secondary":"_pill--soft-brand-secondary_l3jc8_269","pill--soft-brand-tertiary":"_pill--soft-brand-tertiary_l3jc8_273","pill--soft-feedback-positive":"_pill--soft-feedback-positive_l3jc8_277","pill--soft-feedback-negative":"_pill--soft-feedback-negative_l3jc8_281","pill--soft-feedback-warning":"_pill--soft-feedback-warning_l3jc8_285",pill__icon:re,"pill--icon-left":"_pill--icon-left_l3jc8_302","pill--icon-right":"_pill--icon-right_l3jc8_306"};function U(V){const{text:X,color:n,variant:m,size:b,rounded:g,icon:e,ariaLabel:Y,shadow:Z,stroke:v,iconPosition:f="left"}=V,y=m&&n?`${m}-${n}`:null,j=g?`r-${g.split("_")[1]}`:null,ee=[l.pill,b&&l[`pill--${b}`],y&&l[`pill--${y}`],j&&l[`pill--${j}`],v&&n&&l[`pill--${v}-${n}`],Z&&l["pill--shadow"],e&&l[`pill--icon-${f}`]].filter(Boolean).join(" "),i=l.pill__icon;return r.jsx("div",{children:r.jsxs("span",{className:ee,role:"status","aria-label":Y,children:[e&&f!=="right"&&r.jsx("span",{className:i,"aria-hidden":"true","data-testid":"custom-icon",children:typeof e=="string"?r.jsx(k,{src:e,size:"1em",className:i}):e}),X,e&&f==="right"&&r.jsx("span",{className:i,"aria-hidden":"true","data-testid":"custom-icon",children:typeof e=="string"?r.jsx(k,{src:e,size:"1em",className:i}):e})]})})}U.__docgenInfo={description:"",methods:[],displayName:"Pill",props:{text:{required:!0,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"union",raw:`| 'neutral-dark'
| 'neutral-light'
| 'brand-primary'
| 'brand-secondary'
| 'brand-tertiary'
| 'feedback-positive'
| 'feedback-negative'
| 'feedback-warning'
| 'read-only-disabled'`,elements:[{name:"literal",value:"'neutral-dark'"},{name:"literal",value:"'neutral-light'"},{name:"literal",value:"'brand-primary'"},{name:"literal",value:"'brand-secondary'"},{name:"literal",value:"'brand-tertiary'"},{name:"literal",value:"'feedback-positive'"},{name:"literal",value:"'feedback-negative'"},{name:"literal",value:"'feedback-warning'"},{name:"literal",value:"'read-only-disabled'"}]},description:""},variant:{required:!1,tsType:{name:"union",raw:"'filled' | 'outline' | 'soft'",elements:[{name:"literal",value:"'filled'"},{name:"literal",value:"'outline'"},{name:"literal",value:"'soft'"}]},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:""},rounded:{required:!1,tsType:{name:"union",raw:"'r_none' | 'r_md' | 'r_full'",elements:[{name:"literal",value:"'r_none'"},{name:"literal",value:"'r_md'"},{name:"literal",value:"'r_full'"}]},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""},shadow:{required:!1,tsType:{name:"boolean"},description:""},stroke:{required:!1,tsType:{name:"union",raw:"'border-soft' | 'border-strong'",elements:[{name:"literal",value:"'border-soft'"},{name:"literal",value:"'border-strong'"}]},description:""},icon:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},iconPosition:{required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:""}}};const te={title:"ui/components/atoms/pills",component:U,argTypes:{color:{control:"select",options:["neutral-dark","neutral-light","brand-primary","brand-secondary","brand-tertiary","feedback-positive","feedback-negative","feedback-warning","read-only-disabled"]},variant:{control:"select",options:["filled","outline","soft"]},size:{control:"select",options:["sm","md","lg"]},rounded:{control:"select",options:["r_none","r_md","r_full"]},shadow:{control:"boolean"},stroke:{control:"radio",options:["border-soft","border-strong"]},icon:{control:!1}}},a={args:{text:"100",color:"neutral-dark",variant:"filled",size:"sm",rounded:"r_none"}},o={args:{text:"100",color:"neutral-light",variant:"outline",size:"sm",rounded:"r_none",icon:void 0}},t={args:{text:"100",color:"brand-primary",variant:"filled",size:"sm",rounded:"r_none",icon:void 0}},s={args:{text:"100",color:"brand-secondary",variant:"filled",size:"sm",rounded:"r_none",icon:void 0}},d={args:{text:"100",color:"brand-tertiary",variant:"filled",size:"sm",rounded:"r_none",icon:void 0}},c={args:{text:"100",color:"feedback-positive",variant:"filled",size:"sm",rounded:"r_none",icon:void 0}},p={args:{text:"100",color:"feedback-negative",variant:"filled",size:"sm",rounded:"r_none",icon:void 0}},_={args:{text:"100",color:"feedback-warning",variant:"filled",size:"sm",rounded:"r_none",icon:void 0}},u={args:{text:"100",color:"read-only-disabled",variant:"filled",size:"sm",rounded:"r_none",icon:void 0}};var h,x,w;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    text: '100',
    color: 'neutral-dark',
    variant: 'filled',
    size: 'sm',
    rounded: 'r_none'
  }
}`,...(w=(x=a.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var P,z,T;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    text: '100',
    color: 'neutral-light',
    variant: 'outline',
    size: 'sm',
    rounded: 'r_none',
    icon: undefined
  }
}`,...(T=(z=o.parameters)==null?void 0:z.docs)==null?void 0:T.source}}};var S,q,N;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    text: '100',
    color: 'brand-primary',
    variant: 'filled',
    size: 'sm',
    rounded: 'r_none',
    icon: undefined
  }
}`,...(N=(q=t.parameters)==null?void 0:q.docs)==null?void 0:N.source}}};var $,C,D;s.parameters={...s.parameters,docs:{...($=s.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    text: '100',
    color: 'brand-secondary',
    variant: 'filled',
    size: 'sm',
    rounded: 'r_none',
    icon: undefined
  }
}`,...(D=(C=s.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var L,I,R;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    text: '100',
    color: 'brand-tertiary',
    variant: 'filled',
    size: 'sm',
    rounded: 'r_none',
    icon: undefined
  }
}`,...(R=(I=d.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var E,W,B;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    text: '100',
    color: 'feedback-positive',
    variant: 'filled',
    size: 'sm',
    rounded: 'r_none',
    icon: undefined
  }
}`,...(B=(W=c.parameters)==null?void 0:W.docs)==null?void 0:B.source}}};var O,A,F;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    text: '100',
    color: 'feedback-negative',
    variant: 'filled',
    size: 'sm',
    rounded: 'r_none',
    icon: undefined
  }
}`,...(F=(A=p.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};var G,H,J;_.parameters={..._.parameters,docs:{...(G=_.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    text: '100',
    color: 'feedback-warning',
    variant: 'filled',
    size: 'sm',
    rounded: 'r_none',
    icon: undefined
  }
}`,...(J=(H=_.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,M,Q;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    text: '100',
    color: 'read-only-disabled',
    variant: 'filled',
    size: 'sm',
    rounded: 'r_none',
    icon: undefined
  }
}`,...(Q=(M=u.parameters)==null?void 0:M.docs)==null?void 0:Q.source}}};const se=["PillDark","PillLight","PillPrimary","PillSecondary","PillTertiary","PillPositive","PillNegative","PillWarning","PillDisabled"];export{a as PillDark,u as PillDisabled,o as PillLight,p as PillNegative,c as PillPositive,t as PillPrimary,s as PillSecondary,d as PillTertiary,_ as PillWarning,se as __namedExportsOrder,te as default};
