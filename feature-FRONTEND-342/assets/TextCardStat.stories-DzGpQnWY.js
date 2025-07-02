import{j as e}from"./jsx-runtime-BlDnFLNC.js";import{C as Z,a as $}from"./CardContent-B6Lf-SMI.js";import{B as a}from"./Box-D3gn0BGf.js";import{C as ee}from"./Checkbox-Bb1q4e3b.js";import{A as re}from"./Avatar-CTHR9j3t.js";import{T as _}from"./Typography-CDIF6Mzu.js";import"./index-Cu9bd8lq.js";import"./styled-BxzxpRFD.js";import"./defaultTheme-JPJ_yUS4.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-B34fLoo2.js";import"./extends-CF3RwP-h.js";import"./DefaultPropsProvider-15asn56a.js";import"./memoTheme-CvxkUA_n.js";import"./Paper-CwPsYpRH.js";import"./extendSxProp-kI-X95xi.js";import"./useFormControl-kTKC_WZz.js";import"./useSlot-Sp0AUbRJ.js";import"./useForkRef-CXZ2Yisc.js";import"./ButtonBase-nnpsksTd.js";import"./useTimeout-mVMEPTzm.js";import"./useEnhancedEffect-BAizwhs3.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-DR8r8Ogv.js";import"./emotion-react.browser.esm-CXfcuTw5.js";import"./createSvgIcon-CPwZcPzn.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./index-wv3Da8iN.js";const r={"text-card":"_text-card_1ppdt_1","text-card__header":"_text-card__header_1ppdt_6","text-card__checkbox":"_text-card__checkbox_1ppdt_11","text-card__checkbox-icon":"_text-card__checkbox-icon_1ppdt_15","text-card__checkbox-checked-icon":"_text-card__checkbox-checked-icon_1ppdt_21","text-card__badge":"_text-card__badge_1ppdt_27","text-card__badge-avatar":"_text-card__badge-avatar_1ppdt_34","text-card__badge-text":"_text-card__badge-text_1ppdt_40","text-card__badge-number":"_text-card__badge-number_1ppdt_47","text-card__content":"_text-card__content_1ppdt_57","text-card__content-title":"_text-card__content-title_1ppdt_61","text-card__content-text":"_text-card__content-text_1ppdt_65"};function J({badgeText:K,badgeColor:u,badgeNumber:Q=0,badgeAvatarUrl:g,badgeAvatarAlt:U="Avatar",title:X,content:Y}){return e.jsxs(Z,{className:r["text-card"],children:[e.jsxs(a,{className:r["text-card__header"],children:[e.jsx(ee,{disableRipple:!0,icon:e.jsx(a,{className:r["text-card__checkbox-icon"]}),checkedIcon:e.jsx(a,{className:r["text-card__checkbox-checked-icon"]}),className:r["text-card__checkbox"],"aria-label":"Select card"}),e.jsxs(a,{className:r["text-card__badge"],style:{backgroundColor:u},children:[g&&e.jsx(re,{alt:U,src:g,className:r["text-card__badge-avatar"],variant:"rounded"}),e.jsx(_,{className:r["text-card__badge-text"],children:K}),e.jsx(a,{className:r["text-card__badge-number"],style:{color:u},children:Q})]})]}),e.jsxs($,{className:r["text-card__content"],children:[e.jsx(_,{variant:"h6",gutterBottom:!0,className:r["text-card__content-title"],children:X}),e.jsx(_,{variant:"body2",className:r["text-card__content-text"],children:Y})]})]})}J.__docgenInfo={description:"",methods:[],displayName:"TextCardStat",props:{label:{required:!0,tsType:{name:"string"},description:""},badgeColor:{required:!1,tsType:{name:"string"},description:""},badgeNumber:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},badgeAvatarUrl:{required:!1,tsType:{name:"string"},description:""},badgeAvatarAlt:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Avatar'",computed:!1}},title:{required:!0,tsType:{name:"string"},description:""},description:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'success' | 'warning' | 'info'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'info'"}]},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},elevation:{required:!1,tsType:{name:"number"},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""},badgeText:{required:!1,tsType:{name:"string"},description:""},content:{required:!1,tsType:{name:"string"},description:""}}};const we={title:"Components/TextCardStat",component:J,tags:["autodocs"],args:{label:"New",title:"Test Title",description:"This is the card content",variant:"primary",size:"medium",elevation:1,isDisabled:!1}},t={args:{variant:"primary"}},s={args:{variant:"secondary"}},c={args:{variant:"success"}},n={args:{variant:"warning"}},i={args:{variant:"info"}},o={args:{size:"small"}},d={args:{size:"medium"}},m={args:{size:"large"}},p={args:{onClick:()=>{alert("Card clicked")}}},l={args:{isDisabled:!0}};var x,b,v;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: 'primary'
  }
}`,...(v=(b=t.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var y,f,h;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    variant: 'secondary'
  }
}`,...(h=(f=s.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var T,k,S;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    variant: 'success'
  }
}`,...(S=(k=c.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var C,N,q;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    variant: 'warning'
  }
}`,...(q=(N=n.parameters)==null?void 0:N.docs)==null?void 0:q.source}}};var j,w,z;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    variant: 'info'
  }
}`,...(z=(w=i.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var A,D,I;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    size: 'small'
  }
}`,...(I=(D=o.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var B,E,L;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    size: 'medium'
  }
}`,...(L=(E=d.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var M,P,R;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...(R=(P=m.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var V,W,O;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    onClick: () => {
      alert('Card clicked');
    }
  }
}`,...(O=(W=p.parameters)==null?void 0:W.docs)==null?void 0:O.source}}};var F,G,H;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(H=(G=l.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};const ze=["Primary","Secondary","Success","Warning","Info","Small","Medium","Large","Clickable","Disabled"];export{p as Clickable,l as Disabled,i as Info,m as Large,d as Medium,t as Primary,s as Secondary,o as Small,c as Success,n as Warning,ze as __namedExportsOrder,we as default};
