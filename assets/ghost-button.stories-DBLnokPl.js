import{j as s}from"./jsx-runtime-DRTy3Uxn.js";import{T as ae}from"./ThemeProvider-DhSwMub4.js";import{M as re}from"./ThemeSwitcher-BwF-bp_l.js";import{g as oe}from"./index-BBkUAzwr.js";import{I as P}from"./icons-DNNtq2Yd.js";import"./DefaultPropsProvider-BbFsq1KE.js";import"./memoTheme-DFvTKm-B.js";import"./index-PqR-_bA4.js";import"./createSvgIcon-BLyjB2H9.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./index-YMbfICiA.js";var te={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(n){(function(){var r={}.hasOwnProperty;function o(){for(var t="",a=0;a<arguments.length;a++){var i=arguments[a];i&&(t=u(t,l(i)))}return t}function l(t){if(typeof t=="string"||typeof t=="number")return t;if(typeof t!="object")return"";if(Array.isArray(t))return o.apply(null,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]"))return t.toString();var a="";for(var i in t)r.call(t,i)&&t[i]&&(a=u(a,i));return a}function u(t,a){return a?t?t+" "+a:t+a:t}n.exports?(o.default=o,n.exports=o):window.classNames=o})()})(te);var se=te.exports;const ne=oe(se),e={"ghost-button":"_ghost-button_10bkf_1","ghost-button--primary":"_ghost-button--primary_10bkf_14","ghost-button--small":"_ghost-button--small_10bkf_24","ghost-button--medium":"_ghost-button--medium_10bkf_29","ghost-button--large":"_ghost-button--large_10bkf_34","ghost-button__icon":"_ghost-button__icon_10bkf_40","ghost-button--dark":"_ghost-button--dark_10bkf_63","ghost-button__icon--dark":"_ghost-button__icon--dark_10bkf_67","ghost-button--intenseviolet":"_ghost-button--intenseviolet_10bkf_71","ghost-button__icon--intenseviolet":"_ghost-button__icon--intenseviolet_10bkf_75","ghost-button--violet":"_ghost-button--violet_10bkf_79","ghost-button__icon--violet":"_ghost-button__icon--violet_10bkf_83","ghost-button--teritary":"_ghost-button--teritary_10bkf_87","ghost-button__icon--teritary":"_ghost-button__icon--teritary_10bkf_91","ghost-button--green":"_ghost-button--green_10bkf_95","ghost-button__icon--green":"_ghost-button__icon--green_10bkf_99","ghost-button--red":"_ghost-button--red_10bkf_103","ghost-button__icon--red":"_ghost-button__icon--red_10bkf_107","ghost-button--yellow":"_ghost-button--yellow_10bkf_111","ghost-button__icon--yellow":"_ghost-button__icon--yellow_10bkf_115"},j=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 0C5.373 0 0 5.373 0 12C0 18.627 5.373 24 12 24C18.627 24 24 18.627 24 12C24 5.373 18.627 0 12 0ZM12 2C14.398 2 16.601 2.849 18.325 4.261L12 10.586L5.675 4.261C7.4 2.849 9.603 2 12 2ZM2 12C2 9.602 2.849 7.399 4.261 5.675L10.586 12L4.261 18.325C2.849 16.6 2 14.397 2 12ZM12 22C9.602 22 7.399 21.151 5.675 19.739L12 13.414L18.325 19.739C16.6 21.151 14.397 22 12 22ZM19.739 18.325L13.414 12L19.739 5.675C21.151 7.4 22 9.603 22 12C22 14.397 21.151 16.601 19.739 18.325Z" fill="currentColor"/>
</svg>
`;function ee({ghostbutton:n,variant:r="primary",size:o="medium",disabled:l=!1,onClick:u}){const t=ne(e["ghost-button"],e[`ghost-button--${o}`],{[e.primary]:r==="primary",[e["ghost-button--dark"]]:r==="dark",[e["ghost-button--intenseviolet"]]:r==="intenseviolet",[e["ghost-button--violet"]]:r==="violet",[e["ghost-button--teritary"]]:r==="teritary",[e["ghost-button--green"]]:r==="green",[e["ghost-button--red"]]:r==="red",[e["ghost-button--yellow"]]:r==="yellow"},{[e.small]:o==="small",[e.medium]:o==="medium",[e.large]:o==="large"},{[e["ghost-button--disabled"]]:l});return s.jsxs("button",{"data-testid":"ghost-button",className:t,onClick:l?void 0:u,disabled:l,tabIndex:l?-1:0,children:[s.jsx(P,{src:j,className:e["ghost-button__icon"],size:"24px"})," ",n," ",s.jsx(P,{src:j,className:e["ghost-button__icon"],size:"24px"})]})}ee.__docgenInfo={description:"",methods:[],displayName:"GhostButton",props:{ghostbutton:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:`| 'primary'
| 'dark'
| 'intenseviolet'
| 'violet'
| 'teritary'
| 'green'
| 'red'
| 'yellow'`,elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'dark'"},{name:"literal",value:"'intenseviolet'"},{name:"literal",value:"'violet'"},{name:"literal",value:"'teritary'"},{name:"literal",value:"'green'"},{name:"literal",value:"'red'"},{name:"literal",value:"'yellow'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},withIcon:{required:!1,tsType:{name:"boolean"},description:""}}};const _e={title:"ui/components/atoms/Ghost-Button",component:ee,argTypes:{onClick:{action:"click"},variant:{control:{type:"select",options:["primary"]}},size:{control:{type:"select",options:["small","medium","large"]}},disabled:{control:"boolean"},ghostbutton:{control:"text"}},args:{variant:"primary",size:"medium",disabled:!1,ghostbutton:"Ghost Button"},decorators:[n=>s.jsxs(ae,{children:[s.jsx(re,{}),s.jsx("div",{style:{padding:"20px"},children:s.jsx(n,{})})]})]},m={args:{ghostbutton:"Button_text",variant:"primary",size:"small",disabled:!1},storyName:"ui-components-atoms-ghostbutton--primary"},d={args:{ghostbutton:"Button_text",variant:"primary",size:"medium",disabled:!1},storyName:"ui-components-atoms-ghostbutton--primary"},c={args:{ghostbutton:"Button_text",variant:"primary",size:"large",disabled:!1},storyName:"ui-components-atoms-ghostbutton--primary"},g={args:{ghostbutton:"Button_text",variant:"dark",size:"small",disabled:!1},storyName:"Dark Small Button"},b={args:{ghostbutton:"Button_text",variant:"dark",size:"medium",disabled:!1},storyName:"Dark Small Button"},p={args:{ghostbutton:"Button_text",variant:"dark",size:"large",disabled:!1},storyName:"Dark Small Button"},f={args:{ghostbutton:"Button_text",variant:"intenseviolet",size:"small",disabled:!1},storyName:"intenseviolet Small Button"},y={args:{ghostbutton:"Button_text",variant:"intenseviolet",size:"medium",disabled:!1},storyName:"intenseviolet Small Button"},_={args:{ghostbutton:"Button_text",variant:"intenseviolet",size:"large",disabled:!1},storyName:"intenseviolet Small Button"},h={args:{ghostbutton:"Button_text",variant:"violet",size:"small",disabled:!1},storyName:"violet Small Button"},v={args:{ghostbutton:"Button_text",variant:"violet",size:"medium",disabled:!1},storyName:"violet Small Button"},B={args:{ghostbutton:"Button_text",variant:"violet",size:"large",disabled:!1},storyName:"violet Small Button"},S={args:{ghostbutton:"Button_text",variant:"green",size:"small",disabled:!1},storyName:"green Small Button"},x={args:{ghostbutton:"Button_text",variant:"green",size:"medium",disabled:!1},storyName:"green Small Button"},k={args:{ghostbutton:"Button_text",variant:"green",size:"large",disabled:!1},storyName:"green Small Button"},N={args:{ghostbutton:"Button_text",variant:"red",size:"small",disabled:!1},storyName:"red Small Button"},D={args:{ghostbutton:"Button_text",variant:"red",size:"medium",disabled:!1},storyName:"red Small Button"},z={args:{ghostbutton:"Button_text",variant:"red",size:"large",disabled:!1},storyName:"red Small Button"},w={args:{ghostbutton:"Button_text",variant:"yellow",size:"small",disabled:!1},storyName:"yellow Small Button"},L={args:{ghostbutton:"Button_text",variant:"yellow",size:"medium",disabled:!1},storyName:"yellow Small Button"},M={args:{ghostbutton:"Button_text",variant:"yellow",size:"large",disabled:!1},storyName:"yellow Small Button"},F={args:{ghostbutton:"Button_text",variant:"teritary",size:"small",disabled:!1},storyName:"teritary Small Button"},C={args:{ghostbutton:"Button_text",variant:"teritary",size:"medium",disabled:!1},storyName:"teritary Small Button"},T={args:{ghostbutton:"Button_text",variant:"teritary",size:"large",disabled:!1},storyName:"teritary Small Button"};var O,R,W;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ghostbutton: 'Button_text',
    variant: 'primary',
    size: 'small',
    disabled: false
  },
  storyName: 'ui-components-atoms-ghostbutton--primary'
}`,...(W=(R=m.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var q,I,Z;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    ghostbutton: 'Button_text',
    variant: 'primary',
    size: 'medium',
    disabled: false
  },
  storyName: 'ui-components-atoms-ghostbutton--primary'
}`,...(Z=(I=d.parameters)==null?void 0:I.docs)==null?void 0:Z.source}}};var E,G,V;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ghostbutton: 'Button_text',
    variant: 'primary',
    size: 'large',
    disabled: false
  },
  storyName: 'ui-components-atoms-ghostbutton--primary'
}`,...(V=(G=c.parameters)==null?void 0:G.docs)==null?void 0:V.source}}};var A,$,H;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    ghostbutton: 'Button_text',
    variant: 'dark',
    size: 'small',
    disabled: false
  },
  storyName: 'Dark Small Button'
}`,...(H=($=g.parameters)==null?void 0:$.docs)==null?void 0:H.source}}};var J,K,Q;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    ghostbutton: 'Button_text',
    variant: 'dark',
    size: 'medium',
    disabled: false
  },
  storyName: 'Dark Small Button'
}`,...(Q=(K=b.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,X,Y;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    ghostbutton: 'Button_text',
    variant: 'dark',
    size: 'large',
    disabled: false
  },
  storyName: 'Dark Small Button'
}`,...(Y=(X=p.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var tt,et,at;f.parameters={...f.parameters,docs:{...(tt=f.parameters)==null?void 0:tt.docs,source:{originalSource:`{
  args: {
    ghostbutton: 'Button_text',
    variant: 'intenseviolet',
    size: 'small',
    disabled: false
  },
  storyName: 'intenseviolet Small Button'
}`,...(at=(et=f.parameters)==null?void 0:et.docs)==null?void 0:at.source}}};var rt,ot,st;y.parameters={...y.parameters,docs:{...(rt=y.parameters)==null?void 0:rt.docs,source:{originalSource:`{
  args: {
    ghostbutton: 'Button_text',
    variant: 'intenseviolet',
    size: 'medium',
    disabled: false
  },
  storyName: 'intenseviolet Small Button'
}`,...(st=(ot=y.parameters)==null?void 0:ot.docs)==null?void 0:st.source}}};var nt,lt,it;_.parameters={..._.parameters,docs:{...(nt=_.parameters)==null?void 0:nt.docs,source:{originalSource:`{
  args: {
    ghostbutton: 'Button_text',
    variant: 'intenseviolet',
    size: 'large',
    disabled: false
  },
  storyName: 'intenseviolet Small Button'
}`,...(it=(lt=_.parameters)==null?void 0:lt.docs)==null?void 0:it.source}}};var ut,mt,dt;h.parameters={...h.parameters,docs:{...(ut=h.parameters)==null?void 0:ut.docs,source:{originalSource:`{
  args: {
    ghostbutton: 'Button_text',
    variant: 'violet',
    size: 'small',
    disabled: false
  },
  storyName: 'violet Small Button'
}`,...(dt=(mt=h.parameters)==null?void 0:mt.docs)==null?void 0:dt.source}}};var ct,gt,bt;v.parameters={...v.parameters,docs:{...(ct=v.parameters)==null?void 0:ct.docs,source:{originalSource:`{
  args: {
    ghostbutton: 'Button_text',
    variant: 'violet',
    size: 'medium',
    disabled: false
  },
  storyName: 'violet Small Button'
}`,...(bt=(gt=v.parameters)==null?void 0:gt.docs)==null?void 0:bt.source}}};var pt,ft,yt;B.parameters={...B.parameters,docs:{...(pt=B.parameters)==null?void 0:pt.docs,source:{originalSource:`{
  args: {
    ghostbutton: 'Button_text',
    variant: 'violet',
    size: 'large',
    disabled: false
  },
  storyName: 'violet Small Button'
}`,...(yt=(ft=B.parameters)==null?void 0:ft.docs)==null?void 0:yt.source}}};var _t,ht,vt;S.parameters={...S.parameters,docs:{...(_t=S.parameters)==null?void 0:_t.docs,source:{originalSource:`{
  args: {
    ghostbutton: 'Button_text',
    variant: 'green',
    size: 'small',
    disabled: false
  },
  storyName: 'green Small Button'
}`,...(vt=(ht=S.parameters)==null?void 0:ht.docs)==null?void 0:vt.source}}};var Bt,St,xt;x.parameters={...x.parameters,docs:{...(Bt=x.parameters)==null?void 0:Bt.docs,source:{originalSource:`{
  args: {
    ghostbutton: 'Button_text',
    variant: 'green',
    size: 'medium',
    disabled: false
  },
  storyName: 'green Small Button'
}`,...(xt=(St=x.parameters)==null?void 0:St.docs)==null?void 0:xt.source}}};var kt,Nt,Dt;k.parameters={...k.parameters,docs:{...(kt=k.parameters)==null?void 0:kt.docs,source:{originalSource:`{
  args: {
    ghostbutton: 'Button_text',
    variant: 'green',
    size: 'large',
    disabled: false
  },
  storyName: 'green Small Button'
}`,...(Dt=(Nt=k.parameters)==null?void 0:Nt.docs)==null?void 0:Dt.source}}};var zt,wt,Lt;N.parameters={...N.parameters,docs:{...(zt=N.parameters)==null?void 0:zt.docs,source:{originalSource:`{
  args: {
    ghostbutton: 'Button_text',
    variant: 'red',
    size: 'small',
    disabled: false
  },
  storyName: 'red Small Button'
}`,...(Lt=(wt=N.parameters)==null?void 0:wt.docs)==null?void 0:Lt.source}}};var Mt,Ft,Ct;D.parameters={...D.parameters,docs:{...(Mt=D.parameters)==null?void 0:Mt.docs,source:{originalSource:`{
  args: {
    ghostbutton: 'Button_text',
    variant: 'red',
    size: 'medium',
    disabled: false
  },
  storyName: 'red Small Button'
}`,...(Ct=(Ft=D.parameters)==null?void 0:Ft.docs)==null?void 0:Ct.source}}};var Tt,Pt,jt;z.parameters={...z.parameters,docs:{...(Tt=z.parameters)==null?void 0:Tt.docs,source:{originalSource:`{
  args: {
    ghostbutton: 'Button_text',
    variant: 'red',
    size: 'large',
    disabled: false
  },
  storyName: 'red Small Button'
}`,...(jt=(Pt=z.parameters)==null?void 0:Pt.docs)==null?void 0:jt.source}}};var Ot,Rt,Wt;w.parameters={...w.parameters,docs:{...(Ot=w.parameters)==null?void 0:Ot.docs,source:{originalSource:`{
  args: {
    ghostbutton: 'Button_text',
    variant: 'yellow',
    size: 'small',
    disabled: false
  },
  storyName: 'yellow Small Button'
}`,...(Wt=(Rt=w.parameters)==null?void 0:Rt.docs)==null?void 0:Wt.source}}};var qt,It,Zt;L.parameters={...L.parameters,docs:{...(qt=L.parameters)==null?void 0:qt.docs,source:{originalSource:`{
  args: {
    ghostbutton: 'Button_text',
    variant: 'yellow',
    size: 'medium',
    disabled: false
  },
  storyName: 'yellow Small Button'
}`,...(Zt=(It=L.parameters)==null?void 0:It.docs)==null?void 0:Zt.source}}};var Et,Gt,Vt;M.parameters={...M.parameters,docs:{...(Et=M.parameters)==null?void 0:Et.docs,source:{originalSource:`{
  args: {
    ghostbutton: 'Button_text',
    variant: 'yellow',
    size: 'large',
    disabled: false
  },
  storyName: 'yellow Small Button'
}`,...(Vt=(Gt=M.parameters)==null?void 0:Gt.docs)==null?void 0:Vt.source}}};var At,$t,Ht;F.parameters={...F.parameters,docs:{...(At=F.parameters)==null?void 0:At.docs,source:{originalSource:`{
  args: {
    ghostbutton: 'Button_text',
    variant: 'teritary',
    size: 'small',
    disabled: false
  },
  storyName: 'teritary Small Button'
}`,...(Ht=($t=F.parameters)==null?void 0:$t.docs)==null?void 0:Ht.source}}};var Jt,Kt,Qt;C.parameters={...C.parameters,docs:{...(Jt=C.parameters)==null?void 0:Jt.docs,source:{originalSource:`{
  args: {
    ghostbutton: 'Button_text',
    variant: 'teritary',
    size: 'medium',
    disabled: false
  },
  storyName: 'teritary Small Button'
}`,...(Qt=(Kt=C.parameters)==null?void 0:Kt.docs)==null?void 0:Qt.source}}};var Ut,Xt,Yt;T.parameters={...T.parameters,docs:{...(Ut=T.parameters)==null?void 0:Ut.docs,source:{originalSource:`{
  args: {
    ghostbutton: 'Button_text',
    variant: 'teritary',
    size: 'large',
    disabled: false
  },
  storyName: 'teritary Small Button'
}`,...(Yt=(Xt=T.parameters)==null?void 0:Xt.docs)==null?void 0:Yt.source}}};const he=["ReadOnlineDisambleSmallLocked","ReadOnlineDisambleMediumLocked","ReadOnlineDisambleLargeLocked","NeutalDarkSmallDefaul","NeutalDarkMediumDefaul","NeutalDarkLargeDefaul","BrandPrimarySmallDefaul","BrandPrimaryMediumDefaul","BrandPrimaryLargeDefaul","BrandSecondarySmallDefaul","BrandSecondaryMediumDefaul","BrandSecondaryLargeDefaul","FeedbackPositiveSmallDefaul","FeedbackPositiveMediumDefaul","FeedbackPositiveLargeDefaul","FeedbackNegativeSmallDefaul","FeedbackNegativeyMediumDefaul","FeedbackNegativeLargeDefaul","FeedbackWarningSmallDefaul","FeedbackWarningyMediumDefaul","FeedbackWarningLargeDefaul","BrandTeritarySmallDefaul","BrandTeritaryyMediumDefaul","BrandTeritaryLargeDefaul"];export{_ as BrandPrimaryLargeDefaul,y as BrandPrimaryMediumDefaul,f as BrandPrimarySmallDefaul,B as BrandSecondaryLargeDefaul,v as BrandSecondaryMediumDefaul,h as BrandSecondarySmallDefaul,T as BrandTeritaryLargeDefaul,F as BrandTeritarySmallDefaul,C as BrandTeritaryyMediumDefaul,z as FeedbackNegativeLargeDefaul,N as FeedbackNegativeSmallDefaul,D as FeedbackNegativeyMediumDefaul,k as FeedbackPositiveLargeDefaul,x as FeedbackPositiveMediumDefaul,S as FeedbackPositiveSmallDefaul,M as FeedbackWarningLargeDefaul,w as FeedbackWarningSmallDefaul,L as FeedbackWarningyMediumDefaul,p as NeutalDarkLargeDefaul,b as NeutalDarkMediumDefaul,g as NeutalDarkSmallDefaul,c as ReadOnlineDisambleLargeLocked,d as ReadOnlineDisambleMediumLocked,m as ReadOnlineDisambleSmallLocked,he as __namedExportsOrder,_e as default};
