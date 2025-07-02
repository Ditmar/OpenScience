import{j as e}from"./jsx-runtime-BlDnFLNC.js";import{r as Z}from"./index-Cu9bd8lq.js";import{a as ee,g as ae,s as re,c as te}from"./styled-u2LHWWxt.js";import{u as se}from"./DefaultPropsProvider-15asn56a.js";import{c as oe}from"./memoTheme-Bhj18WeB.js";import{P as ce}from"./Paper-D_mtzxnm.js";import{B as l}from"./Box-DHwlWu9m.js";import{C as ie}from"./Checkbox-Ckd_o5tw.js";import{A as de}from"./Avatar-Cnyir_bM.js";import{T as h}from"./Typography-BVlBb-Vs.js";import"./defaultTheme-TICkppHd.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-B34fLoo2.js";import"./extends-CF3RwP-h.js";import"./useTimeout-BkDeGct8.js";import"./extendSxProp-DDLkRBTp.js";import"./useEnhancedEffect-BAizwhs3.js";import"./useFormControl-DeDlG-ML.js";import"./useSlot-CWFXREjS.js";import"./useForkRef-CXZ2Yisc.js";import"./ButtonBase-B4kdWokL.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-DR8r8Ogv.js";import"./index-CL680KoJ.js";import"./createSvgIcon-DFpG2Re_.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";function le(r){return ee("MuiCard",r)}ae("MuiCard",["root"]);const me=r=>{const{classes:t}=r;return oe({root:["root"]},le,t)},pe=re(ce,{name:"MuiCard",slot:"Root"})({overflow:"hidden"}),ue=Z.forwardRef(function(t,o){const s=se({props:t,name:"MuiCard"}),{className:c,raised:n=!1,...i}=s,d={...s,raised:n},v=me(d);return e.jsx(pe,{className:te(v.root,c),elevation:n?8:void 0,ref:o,ownerState:d,...i})});function _e(r){return ee("MuiCardContent",r)}ae("MuiCardContent",["root"]);const ge=r=>{const{classes:t}=r;return oe({root:["root"]},_e,t)},xe=re("div",{name:"MuiCardContent",slot:"Root"})({padding:16,"&:last-child":{paddingBottom:24}}),fe=Z.forwardRef(function(t,o){const s=se({props:t,name:"MuiCardContent"}),{className:c,component:n="div",...i}=s,d={...s,component:n},v=ge(d);return e.jsx(xe,{as:n,className:te(v.root,c),ownerState:d,ref:o,...i})}),a={"text-card":"_text-card_1ppdt_1","text-card__header":"_text-card__header_1ppdt_6","text-card__checkbox":"_text-card__checkbox_1ppdt_11","text-card__checkbox-icon":"_text-card__checkbox-icon_1ppdt_15","text-card__checkbox-checked-icon":"_text-card__checkbox-checked-icon_1ppdt_21","text-card__badge":"_text-card__badge_1ppdt_27","text-card__badge-avatar":"_text-card__badge-avatar_1ppdt_34","text-card__badge-text":"_text-card__badge-text_1ppdt_40","text-card__badge-number":"_text-card__badge-number_1ppdt_47","text-card__content":"_text-card__content_1ppdt_57","text-card__content-title":"_text-card__content-title_1ppdt_61","text-card__content-text":"_text-card__content-text_1ppdt_65"};function ne({badgeText:r,badgeColor:t,badgeNumber:o=0,badgeAvatarUrl:s,badgeAvatarAlt:c="Avatar",title:n,content:i}){return e.jsxs(ue,{className:a["text-card"],children:[e.jsxs(l,{className:a["text-card__header"],children:[e.jsx(ie,{disableRipple:!0,icon:e.jsx(l,{className:a["text-card__checkbox-icon"]}),checkedIcon:e.jsx(l,{className:a["text-card__checkbox-checked-icon"]}),className:a["text-card__checkbox"],"aria-label":"Select card"}),e.jsxs(l,{className:a["text-card__badge"],style:{backgroundColor:t},children:[s&&e.jsx(de,{alt:c,src:s,className:a["text-card__badge-avatar"],variant:"rounded"}),e.jsx(h,{className:a["text-card__badge-text"],children:r}),e.jsx(l,{className:a["text-card__badge-number"],style:{color:t},children:o})]})]}),e.jsxs(fe,{className:a["text-card__content"],children:[e.jsx(h,{variant:"h6",gutterBottom:!0,className:a["text-card__content-title"],children:n}),e.jsx(h,{variant:"body2",className:a["text-card__content-text"],children:i})]})]})}ne.__docgenInfo={description:"",methods:[],displayName:"TextCardStat",props:{label:{required:!0,tsType:{name:"string"},description:""},badgeColor:{required:!1,tsType:{name:"string"},description:""},badgeNumber:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},badgeAvatarUrl:{required:!1,tsType:{name:"string"},description:""},badgeAvatarAlt:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Avatar'",computed:!1}},title:{required:!0,tsType:{name:"string"},description:""},description:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'success' | 'warning' | 'info'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'info'"}]},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},elevation:{required:!1,tsType:{name:"number"},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""},badgeText:{required:!1,tsType:{name:"string"},description:""},content:{required:!1,tsType:{name:"string"},description:""}}};const Oe={title:"Components/TextCardStat",component:ne,tags:["autodocs"],args:{label:"New",title:"Test Title",description:"This is the card content",variant:"primary",size:"medium",elevation:1,isDisabled:!1}},m={args:{variant:"primary"}},p={args:{variant:"secondary"}},u={args:{variant:"success"}},_={args:{variant:"warning"}},g={args:{variant:"info"}},x={args:{size:"small"}},f={args:{size:"medium"}},b={args:{size:"large"}},C={args:{onClick:()=>{alert("Card clicked")}}},y={args:{isDisabled:!0}};var T,k,S;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    variant: 'primary'
  }
}`,...(S=(k=m.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var N,j,q;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    variant: 'secondary'
  }
}`,...(q=(j=p.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var w,M,z;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: 'success'
  }
}`,...(z=(M=u.parameters)==null?void 0:M.docs)==null?void 0:z.source}}};var R,D,A;_.parameters={..._.parameters,docs:{...(R=_.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    variant: 'warning'
  }
}`,...(A=(D=_.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var U,P,B;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    variant: 'info'
  }
}`,...(B=(P=g.parameters)==null?void 0:P.docs)==null?void 0:B.source}}};var I,E,L;x.parameters={...x.parameters,docs:{...(I=x.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    size: 'small'
  }
}`,...(L=(E=x.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var V,W,O;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    size: 'medium'
  }
}`,...(O=(W=f.parameters)==null?void 0:W.docs)==null?void 0:O.source}}};var $,F,G;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...(G=(F=b.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var H,J,K;C.parameters={...C.parameters,docs:{...(H=C.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    onClick: () => {
      alert('Card clicked');
    }
  }
}`,...(K=(J=C.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Y;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(Y=(X=y.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const $e=["Primary","Secondary","Success","Warning","Info","Small","Medium","Large","Clickable","Disabled"];export{C as Clickable,y as Disabled,g as Info,b as Large,f as Medium,m as Primary,p as Secondary,x as Small,u as Success,_ as Warning,$e as __namedExportsOrder,Oe as default};
