import{j as s}from"./jsx-runtime-DRTy3Uxn.js";import{T as ee}from"./ThemeProvider-Bzc8B3h2.js";import{M as ae}from"./ThemeSwitcher-BfPdl6c-.js";import{g as oe}from"./index-BBkUAzwr.js";import"./index-PqR-_bA4.js";var Yt={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(n){(function(){var o={}.hasOwnProperty;function r(){for(var t="",a=0;a<arguments.length;a++){var i=arguments[a];i&&(t=u(t,l(i)))}return t}function l(t){if(typeof t=="string"||typeof t=="number")return t;if(typeof t!="object")return"";if(Array.isArray(t))return r.apply(null,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]"))return t.toString();var a="";for(var i in t)o.call(t,i)&&t[i]&&(a=u(a,i));return a}function u(t,a){return a?t?t+" "+a:t+a:t}n.exports?(r.default=r,n.exports=r):window.classNames=r})()})(Yt);var re=Yt.exports;const se=oe(re),e={"ghost-button":"_ghost-button_zzd3j_1","ghost-button--primary":"_ghost-button--primary_zzd3j_14","ghost-button--small":"_ghost-button--small_zzd3j_24","ghost-button--medium":"_ghost-button--medium_zzd3j_29","ghost-button--large":"_ghost-button--large_zzd3j_34","ghost-button__icon":"_ghost-button__icon_zzd3j_40","ghost-button--dark":"_ghost-button--dark_zzd3j_63","ghost-button__icon--dark":"_ghost-button__icon--dark_zzd3j_67","ghost-button--violetaintenso":"_ghost-button--violetaintenso_zzd3j_71","ghost-button__icon--violetaintenso":"_ghost-button__icon--violetaintenso_zzd3j_75","ghost-button--violeta":"_ghost-button--violeta_zzd3j_71","ghost-button__icon--violeta":"_ghost-button__icon--violeta_zzd3j_75","ghost-button--teritary":"_ghost-button--teritary_zzd3j_87","ghost-button__icon--teritary":"_ghost-button__icon--teritary_zzd3j_91","ghost-button--verde":"_ghost-button--verde_zzd3j_95","ghost-button__icon--verde":"_ghost-button__icon--verde_zzd3j_99","ghost-button--rojo":"_ghost-button--rojo_zzd3j_103","ghost-button__icon--rojo":"_ghost-button__icon--rojo_zzd3j_107","ghost-button--amarillo":"_ghost-button--amarillo_zzd3j_111","ghost-button__icon--amarillo":"_ghost-button__icon--amarillo_zzd3j_115"},w=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 0C5.373 0 0 5.373 0 12C0 18.627 5.373 24 12 24C18.627 24 24 18.627 24 12C24 5.373 18.627 0 12 0ZM12 2C14.398 2 16.601 2.849 18.325 4.261L12 10.586L5.675 4.261C7.4 2.849 9.603 2 12 2ZM2 12C2 9.602 2.849 7.399 4.261 5.675L10.586 12L4.261 18.325C2.849 16.6 2 14.397 2 12ZM12 22C9.602 22 7.399 21.151 5.675 19.739L12 13.414L18.325 19.739C16.6 21.151 14.397 22 12 22ZM19.739 18.325L13.414 12L19.739 5.675C21.151 7.4 22 9.603 22 12C22 14.397 21.151 16.601 19.739 18.325Z" fill="currentColor"/>
</svg>
`;function te({ghostbutton:n,variant:o="primary",size:r="medium",disabled:l=!1,onClick:u}){const t=se(e["ghost-button"],e[`ghost-button--${r}`],{[e.primary]:o==="primary",[e["ghost-button--dark"]]:o==="dark",[e["ghost-button--violetaintenso"]]:o==="violetaintenso",[e["ghost-button--violeta"]]:o==="violeta",[e["ghost-button--teritary"]]:o==="teritary",[e["ghost-button--verde"]]:o==="verde",[e["ghost-button--rojo"]]:o==="rojo",[e["ghost-button--amarillo"]]:o==="amarillo"},{[e.small]:r==="small",[e.medium]:r==="medium",[e.large]:r==="large"},{[e["ghost-button--disabled"]]:l});return s.jsxs("button",{"data-testid":"ghost-button",className:t,onClick:l?void 0:u,disabled:l,tabIndex:l?-1:0,children:[s.jsx("span",{className:e["ghost-button__icon"],dangerouslySetInnerHTML:{__html:w}})," ",n," ",s.jsx("span",{className:e["ghost-button__icon"],dangerouslySetInnerHTML:{__html:w}})]})}te.__docgenInfo={description:"",methods:[],displayName:"GhostButton",props:{ghostbutton:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:`| 'primary'
| 'dark'
| 'violetaintenso'
| 'violeta'
| 'teritary'
| 'verde'
| 'rojo'
| 'amarillo'`,elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'dark'"},{name:"literal",value:"'violetaintenso'"},{name:"literal",value:"'violeta'"},{name:"literal",value:"'teritary'"},{name:"literal",value:"'verde'"},{name:"literal",value:"'rojo'"},{name:"literal",value:"'amarillo'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},withIcon:{required:!1,tsType:{name:"boolean"},description:""}}};const de={title:"ui/components/atoms/Ghost-Button",component:te,argTypes:{onClick:{action:"click"},variant:{control:{type:"select",options:["primary"]}},size:{control:{type:"select",options:["small","medium","large"]}},disabled:{control:"boolean"},ghostbutton:{control:"text"}},args:{variant:"primary",size:"medium",disabled:!1,ghostbutton:"Ghost Button"},decorators:[n=>s.jsxs(ee,{children:[s.jsx(ae,{}),s.jsx("div",{style:{padding:"20px"},children:s.jsx(n,{})})]})]},m={args:{ghostbutton:"Button_text",variant:"primary",size:"small",disabled:!1},storyName:"ui-components-atoms-ghostbutton--primary"},d={args:{ghostbutton:"Button_text",variant:"primary",size:"medium",disabled:!1},storyName:"ui-components-atoms-ghostbutton--primary"},c={args:{ghostbutton:"Button_text",variant:"primary",size:"large",disabled:!1},storyName:"ui-components-atoms-ghostbutton--primary"},g={args:{ghostbutton:"Button_text",variant:"dark",size:"small",disabled:!1},storyName:"Dark Small Button"},b={args:{ghostbutton:"Button_text",variant:"dark",size:"medium",disabled:!1},storyName:"Dark Small Button"},p={args:{ghostbutton:"Button_text",variant:"dark",size:"large",disabled:!1},storyName:"Dark Small Button"},_={args:{ghostbutton:"Button_text",variant:"violetaintenso",size:"small",disabled:!1},storyName:"violetaintenso Small Button"},v={args:{ghostbutton:"Button_text",variant:"violetaintenso",size:"medium",disabled:!1},storyName:"violetaintenso Small Button"},f={args:{ghostbutton:"Button_text",variant:"violetaintenso",size:"large",disabled:!1},storyName:"violetaintenso Small Button"},y={args:{ghostbutton:"Button_text",variant:"violeta",size:"small",disabled:!1},storyName:"violeta Small Button"},h={args:{ghostbutton:"Button_text",variant:"violeta",size:"medium",disabled:!1},storyName:"violeta Small Button"},B={args:{ghostbutton:"Button_text",variant:"violeta",size:"large",disabled:!1},storyName:"violeta Small Button"},S={args:{ghostbutton:"Button_text",variant:"verde",size:"small",disabled:!1},storyName:"verde Small Button"},z={args:{ghostbutton:"Button_text",variant:"verde",size:"medium",disabled:!1},storyName:"verde Small Button"},x={args:{ghostbutton:"Button_text",variant:"verde",size:"large",disabled:!1},storyName:"verde Small Button"},N={args:{ghostbutton:"Button_text",variant:"rojo",size:"small",disabled:!1},storyName:"rojo Small Button"},D={args:{ghostbutton:"Button_text",variant:"rojo",size:"medium",disabled:!1},storyName:"rojo Small Button"},j={args:{ghostbutton:"Button_text",variant:"rojo",size:"large",disabled:!1},storyName:"rojo Small Button"},k={args:{ghostbutton:"Button_text",variant:"amarillo",size:"small",disabled:!1},storyName:"amarillo Small Button"},L={args:{ghostbutton:"Button_text",variant:"amarillo",size:"medium",disabled:!1},storyName:"amarillo Small Button"},M={args:{ghostbutton:"Button_text",variant:"amarillo",size:"large",disabled:!1},storyName:"amarillo   Small Button"},F={args:{ghostbutton:"Button_text",variant:"teritary",size:"small",disabled:!1},storyName:"teritary Small Button"},C={args:{ghostbutton:"Button_text",variant:"teritary",size:"medium",disabled:!1},storyName:"teritary Small Button"},T={args:{ghostbutton:"Button_text",variant:"teritary",size:"large",disabled:!1},storyName:"teritary Small Button"};var P,O,R;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    ghostbutton: 'Button_text',
    variant: 'primary',
    size: 'small',
    disabled: false
  },
  storyName: 'ui-components-atoms-ghostbutton--primary'
}`,...(R=(O=m.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var W,q,I;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    ghostbutton: 'Button_text',
    variant: 'primary',
    size: 'medium',
    disabled: false
  },
  storyName: 'ui-components-atoms-ghostbutton--primary'
}`,...(I=(q=d.parameters)==null?void 0:q.docs)==null?void 0:I.source}}};var Z,E,G;c.parameters={...c.parameters,docs:{...(Z=c.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    ghostbutton: 'Button_text',
    variant: 'primary',
    size: 'large',
    disabled: false
  },
  storyName: 'ui-components-atoms-ghostbutton--primary'
}`,...(G=(E=c.parameters)==null?void 0:E.docs)==null?void 0:G.source}}};var V,A,H;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    ghostbutton: 'Button_text',
    variant: 'dark',
    size: 'small',
    disabled: false
  },
  storyName: 'Dark Small Button'
}`,...(H=(A=g.parameters)==null?void 0:A.docs)==null?void 0:H.source}}};var $,J,K;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    ghostbutton: 'Button_text',
    variant: 'dark',
    size: 'medium',
    disabled: false
  },
  storyName: 'Dark Small Button'
}`,...(K=(J=b.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,X;p.parameters={...p.parameters,docs:{...(Q=p.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    ghostbutton: 'Button_text',
    variant: 'dark',
    size: 'large',
    disabled: false
  },
  storyName: 'Dark Small Button'
}`,...(X=(U=p.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,tt,et;_.parameters={..._.parameters,docs:{...(Y=_.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    ghostbutton: 'Button_text',
    variant: 'violetaintenso',
    size: 'small',
    disabled: false
  },
  storyName: 'violetaintenso Small Button'
}`,...(et=(tt=_.parameters)==null?void 0:tt.docs)==null?void 0:et.source}}};var at,ot,rt;v.parameters={...v.parameters,docs:{...(at=v.parameters)==null?void 0:at.docs,source:{originalSource:`{
  args: {
    ghostbutton: 'Button_text',
    variant: 'violetaintenso',
    size: 'medium',
    disabled: false
  },
  storyName: 'violetaintenso Small Button'
}`,...(rt=(ot=v.parameters)==null?void 0:ot.docs)==null?void 0:rt.source}}};var st,nt,lt;f.parameters={...f.parameters,docs:{...(st=f.parameters)==null?void 0:st.docs,source:{originalSource:`{
  args: {
    ghostbutton: 'Button_text',
    variant: 'violetaintenso',
    size: 'large',
    disabled: false
  },
  storyName: 'violetaintenso Small Button'
}`,...(lt=(nt=f.parameters)==null?void 0:nt.docs)==null?void 0:lt.source}}};var it,ut,mt;y.parameters={...y.parameters,docs:{...(it=y.parameters)==null?void 0:it.docs,source:{originalSource:`{
  args: {
    ghostbutton: 'Button_text',
    variant: 'violeta',
    size: 'small',
    disabled: false
  },
  storyName: 'violeta Small Button'
}`,...(mt=(ut=y.parameters)==null?void 0:ut.docs)==null?void 0:mt.source}}};var dt,ct,gt;h.parameters={...h.parameters,docs:{...(dt=h.parameters)==null?void 0:dt.docs,source:{originalSource:`{
  args: {
    ghostbutton: 'Button_text',
    variant: 'violeta',
    size: 'medium',
    disabled: false
  },
  storyName: 'violeta Small Button'
}`,...(gt=(ct=h.parameters)==null?void 0:ct.docs)==null?void 0:gt.source}}};var bt,pt,_t;B.parameters={...B.parameters,docs:{...(bt=B.parameters)==null?void 0:bt.docs,source:{originalSource:`{
  args: {
    ghostbutton: 'Button_text',
    variant: 'violeta',
    size: 'large',
    disabled: false
  },
  storyName: 'violeta Small Button'
}`,...(_t=(pt=B.parameters)==null?void 0:pt.docs)==null?void 0:_t.source}}};var vt,ft,yt;S.parameters={...S.parameters,docs:{...(vt=S.parameters)==null?void 0:vt.docs,source:{originalSource:`{
  args: {
    ghostbutton: 'Button_text',
    variant: 'verde',
    size: 'small',
    disabled: false
  },
  storyName: 'verde Small Button'
}`,...(yt=(ft=S.parameters)==null?void 0:ft.docs)==null?void 0:yt.source}}};var ht,Bt,St;z.parameters={...z.parameters,docs:{...(ht=z.parameters)==null?void 0:ht.docs,source:{originalSource:`{
  args: {
    ghostbutton: 'Button_text',
    variant: 'verde',
    size: 'medium',
    disabled: false
  },
  storyName: 'verde Small Button'
}`,...(St=(Bt=z.parameters)==null?void 0:Bt.docs)==null?void 0:St.source}}};var zt,xt,Nt;x.parameters={...x.parameters,docs:{...(zt=x.parameters)==null?void 0:zt.docs,source:{originalSource:`{
  args: {
    ghostbutton: 'Button_text',
    variant: 'verde',
    size: 'large',
    disabled: false
  },
  storyName: 'verde Small Button'
}`,...(Nt=(xt=x.parameters)==null?void 0:xt.docs)==null?void 0:Nt.source}}};var Dt,jt,kt;N.parameters={...N.parameters,docs:{...(Dt=N.parameters)==null?void 0:Dt.docs,source:{originalSource:`{
  args: {
    ghostbutton: 'Button_text',
    variant: 'rojo',
    size: 'small',
    disabled: false
  },
  storyName: 'rojo Small Button'
}`,...(kt=(jt=N.parameters)==null?void 0:jt.docs)==null?void 0:kt.source}}};var Lt,Mt,Ft;D.parameters={...D.parameters,docs:{...(Lt=D.parameters)==null?void 0:Lt.docs,source:{originalSource:`{
  args: {
    ghostbutton: 'Button_text',
    variant: 'rojo',
    size: 'medium',
    disabled: false
  },
  storyName: 'rojo Small Button'
}`,...(Ft=(Mt=D.parameters)==null?void 0:Mt.docs)==null?void 0:Ft.source}}};var Ct,Tt,wt;j.parameters={...j.parameters,docs:{...(Ct=j.parameters)==null?void 0:Ct.docs,source:{originalSource:`{
  args: {
    ghostbutton: 'Button_text',
    variant: 'rojo',
    size: 'large',
    disabled: false
  },
  storyName: 'rojo Small Button'
}`,...(wt=(Tt=j.parameters)==null?void 0:Tt.docs)==null?void 0:wt.source}}};var Pt,Ot,Rt;k.parameters={...k.parameters,docs:{...(Pt=k.parameters)==null?void 0:Pt.docs,source:{originalSource:`{
  args: {
    ghostbutton: 'Button_text',
    variant: 'amarillo',
    size: 'small',
    disabled: false
  },
  storyName: 'amarillo Small Button'
}`,...(Rt=(Ot=k.parameters)==null?void 0:Ot.docs)==null?void 0:Rt.source}}};var Wt,qt,It;L.parameters={...L.parameters,docs:{...(Wt=L.parameters)==null?void 0:Wt.docs,source:{originalSource:`{
  args: {
    ghostbutton: 'Button_text',
    variant: 'amarillo',
    size: 'medium',
    disabled: false
  },
  storyName: 'amarillo Small Button'
}`,...(It=(qt=L.parameters)==null?void 0:qt.docs)==null?void 0:It.source}}};var Zt,Et,Gt;M.parameters={...M.parameters,docs:{...(Zt=M.parameters)==null?void 0:Zt.docs,source:{originalSource:`{
  args: {
    ghostbutton: 'Button_text',
    variant: 'amarillo',
    size: 'large',
    disabled: false
  },
  storyName: 'amarillo   Small Button'
}`,...(Gt=(Et=M.parameters)==null?void 0:Et.docs)==null?void 0:Gt.source}}};var Vt,At,Ht;F.parameters={...F.parameters,docs:{...(Vt=F.parameters)==null?void 0:Vt.docs,source:{originalSource:`{
  args: {
    ghostbutton: 'Button_text',
    variant: 'teritary',
    size: 'small',
    disabled: false
  },
  storyName: 'teritary Small Button'
}`,...(Ht=(At=F.parameters)==null?void 0:At.docs)==null?void 0:Ht.source}}};var $t,Jt,Kt;C.parameters={...C.parameters,docs:{...($t=C.parameters)==null?void 0:$t.docs,source:{originalSource:`{
  args: {
    ghostbutton: 'Button_text',
    variant: 'teritary',
    size: 'medium',
    disabled: false
  },
  storyName: 'teritary Small Button'
}`,...(Kt=(Jt=C.parameters)==null?void 0:Jt.docs)==null?void 0:Kt.source}}};var Qt,Ut,Xt;T.parameters={...T.parameters,docs:{...(Qt=T.parameters)==null?void 0:Qt.docs,source:{originalSource:`{
  args: {
    ghostbutton: 'Button_text',
    variant: 'teritary',
    size: 'large',
    disabled: false
  },
  storyName: 'teritary Small Button'
}`,...(Xt=(Ut=T.parameters)==null?void 0:Ut.docs)==null?void 0:Xt.source}}};const ce=["ReadOnlineDisambleSmallLocked","ReadOnlineDisambleMediumLocked","ReadOnlineDisambleLargeLocked","NeutalDarkSmallDefaul","NeutalDarkMediumDefaul","NeutalDarkLargeDefaul","BrandPrimarySmallDefaul","BrandPrimaryMediumDefaul","BrandPrimaryLargeDefaul","BrandSecondarySmallDefaul","BrandSecondaryMediumDefaul","BrandSecondaryLargeDefaul","FeedbackPositiveSmallDefaul","FeedbackPositiveMediumDefaul","FeedbackPositiveLargeDefaul","FeedbackNegativeSmallDefaul","FeedbackNegativeyMediumDefaul","FeedbackNegativeLargeDefaul","FeedbackWarningSmallDefaul","FeedbackWarningyMediumDefaul","FeedbackWarningLargeDefaul","BrandTeritarySmallDefaul","BrandTeritaryyMediumDefaul","BrandTeritaryLargeDefaul"];export{f as BrandPrimaryLargeDefaul,v as BrandPrimaryMediumDefaul,_ as BrandPrimarySmallDefaul,B as BrandSecondaryLargeDefaul,h as BrandSecondaryMediumDefaul,y as BrandSecondarySmallDefaul,T as BrandTeritaryLargeDefaul,F as BrandTeritarySmallDefaul,C as BrandTeritaryyMediumDefaul,j as FeedbackNegativeLargeDefaul,N as FeedbackNegativeSmallDefaul,D as FeedbackNegativeyMediumDefaul,x as FeedbackPositiveLargeDefaul,z as FeedbackPositiveMediumDefaul,S as FeedbackPositiveSmallDefaul,M as FeedbackWarningLargeDefaul,k as FeedbackWarningSmallDefaul,L as FeedbackWarningyMediumDefaul,p as NeutalDarkLargeDefaul,b as NeutalDarkMediumDefaul,g as NeutalDarkSmallDefaul,c as ReadOnlineDisambleLargeLocked,d as ReadOnlineDisambleMediumLocked,m as ReadOnlineDisambleSmallLocked,ce as __namedExportsOrder,de as default};
