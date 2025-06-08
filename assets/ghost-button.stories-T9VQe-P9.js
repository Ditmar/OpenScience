import{j as a}from"./jsx-runtime-BlDnFLNC.js";import{T as Zt}from"./ThemeProvider-DDNvUqn8.js";import{M as te}from"./ThemeSwitcher-DsyJrYTA.js";import{c as ee}from"./index-C-6Uy6j4.js";import{I as L}from"./icons-Dqqr9IZ9.js";import{c as F}from"./circle-quarters-VszW7wZB.js";import"./index-Cu9bd8lq.js";import"./DefaultPropsProvider-DcRJznjO.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-B34fLoo2.js";import"./index-Cplt8kMj.js";import"./Select-CpEekcHS.js";import"./memoTheme-CPnQs7hc.js";import"./extends-CF3RwP-h.js";import"./assertThisInitialized-C1KLUksq.js";import"./index-BWPb3MHu.js";import"./createSvgIcon-CHPF6Y__.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./index-gagdKHFB.js";const t={"ghost-button":"_ghost-button_1q7y0_1","ghost-button--primary":"_ghost-button--primary_1q7y0_14","ghost-button--small":"_ghost-button--small_1q7y0_24","ghost-button--medium":"_ghost-button--medium_1q7y0_29","ghost-button--large":"_ghost-button--large_1q7y0_34","ghost-button__icon":"_ghost-button__icon_1q7y0_40","ghost-button--dark":"_ghost-button--dark_1q7y0_63","ghost-button__icon--dark":"_ghost-button__icon--dark_1q7y0_67","ghost-button--intenseviolet":"_ghost-button--intenseviolet_1q7y0_71","ghost-button__icon--intenseviolet":"_ghost-button__icon--intenseviolet_1q7y0_75","ghost-button--violet":"_ghost-button--violet_1q7y0_79","ghost-button__icon--violet":"_ghost-button__icon--violet_1q7y0_83","ghost-button--teritary":"_ghost-button--teritary_1q7y0_87","ghost-button__icon--teritary":"_ghost-button__icon--teritary_1q7y0_91","ghost-button--green":"_ghost-button--green_1q7y0_95","ghost-button__icon--green":"_ghost-button__icon--green_1q7y0_99","ghost-button--red":"_ghost-button--red_1q7y0_103","ghost-button__icon--red":"_ghost-button__icon--red_1q7y0_107","ghost-button--yellow":"_ghost-button--yellow_1q7y0_111","ghost-button__icon--yellow":"_ghost-button__icon--yellow_1q7y0_115"};function Ut({ghostbutton:w,variant:e="primary",size:r="medium",disabled:o=!1,onClick:Xt}){const Yt=ee(t["ghost-button"],t[`ghost-button--${r}`],{[t.primary]:e==="primary",[t["ghost-button--dark"]]:e==="dark",[t["ghost-button--intenseviolet"]]:e==="intenseviolet",[t["ghost-button--violet"]]:e==="violet",[t["ghost-button--teritary"]]:e==="teritary",[t["ghost-button--green"]]:e==="green",[t["ghost-button--red"]]:e==="red",[t["ghost-button--yellow"]]:e==="yellow"},{[t.small]:r==="small",[t.medium]:r==="medium",[t.large]:r==="large"},{[t["ghost-button--disabled"]]:o});return a.jsxs("button",{"data-testid":"ghost-button",className:Yt,onClick:o?void 0:Xt,disabled:o,tabIndex:o?-1:0,children:[a.jsx(L,{src:F,className:t["ghost-button__icon"],size:"24px"})," ",w," ",a.jsx(L,{src:F,className:t["ghost-button__icon"],size:"24px"})]})}Ut.__docgenInfo={description:"",methods:[],displayName:"GhostButton",props:{ghostbutton:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:`| 'primary'
| 'dark'
| 'intenseviolet'
| 'violet'
| 'teritary'
| 'green'
| 'red'
| 'yellow'`,elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'dark'"},{name:"literal",value:"'intenseviolet'"},{name:"literal",value:"'violet'"},{name:"literal",value:"'teritary'"},{name:"literal",value:"'green'"},{name:"literal",value:"'red'"},{name:"literal",value:"'yellow'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},withIcon:{required:!1,tsType:{name:"boolean"},description:""}}};const ve={title:"ui/components/atoms/Ghost-Button",component:Ut,argTypes:{onClick:{action:"click"},variant:{control:{type:"select",options:["primary"]}},size:{control:{type:"select",options:["small","medium","large"]}},disabled:{control:"boolean"},ghostbutton:{control:"text"}},args:{variant:"primary",size:"medium",disabled:!1,ghostbutton:"Ghost Button"},decorators:[w=>a.jsxs(Zt,{children:[a.jsx(te,{}),a.jsx("div",{style:{padding:"20px"},children:a.jsx(w,{})})]})]},s={args:{ghostbutton:"Button_text",variant:"primary",size:"small",disabled:!1},storyName:"ui-components-atoms-ghostbutton--primary"},n={args:{ghostbutton:"Button_text",variant:"primary",size:"medium",disabled:!1},storyName:"ui-components-atoms-ghostbutton--primary"},l={args:{ghostbutton:"Button_text",variant:"primary",size:"large",disabled:!1},storyName:"ui-components-atoms-ghostbutton--primary"},i={args:{ghostbutton:"Button_text",variant:"dark",size:"small",disabled:!1},storyName:"Dark Small Button"},u={args:{ghostbutton:"Button_text",variant:"dark",size:"medium",disabled:!1},storyName:"Dark Small Button"},m={args:{ghostbutton:"Button_text",variant:"dark",size:"large",disabled:!1},storyName:"Dark Small Button"},d={args:{ghostbutton:"Button_text",variant:"intenseviolet",size:"small",disabled:!1},storyName:"intenseviolet Small Button"},c={args:{ghostbutton:"Button_text",variant:"intenseviolet",size:"medium",disabled:!1},storyName:"intenseviolet Small Button"},g={args:{ghostbutton:"Button_text",variant:"intenseviolet",size:"large",disabled:!1},storyName:"intenseviolet Small Button"},b={args:{ghostbutton:"Button_text",variant:"violet",size:"small",disabled:!1},storyName:"violet Small Button"},p={args:{ghostbutton:"Button_text",variant:"violet",size:"medium",disabled:!1},storyName:"violet Small Button"},y={args:{ghostbutton:"Button_text",variant:"violet",size:"large",disabled:!1},storyName:"violet Small Button"},_={args:{ghostbutton:"Button_text",variant:"green",size:"small",disabled:!1},storyName:"green Small Button"},h={args:{ghostbutton:"Button_text",variant:"green",size:"medium",disabled:!1},storyName:"green Small Button"},f={args:{ghostbutton:"Button_text",variant:"green",size:"large",disabled:!1},storyName:"green Small Button"},v={args:{ghostbutton:"Button_text",variant:"red",size:"small",disabled:!1},storyName:"red Small Button"},B={args:{ghostbutton:"Button_text",variant:"red",size:"medium",disabled:!1},storyName:"red Small Button"},S={args:{ghostbutton:"Button_text",variant:"red",size:"large",disabled:!1},storyName:"red Small Button"},N={args:{ghostbutton:"Button_text",variant:"yellow",size:"small",disabled:!1},storyName:"yellow Small Button"},x={args:{ghostbutton:"Button_text",variant:"yellow",size:"medium",disabled:!1},storyName:"yellow Small Button"},D={args:{ghostbutton:"Button_text",variant:"yellow",size:"large",disabled:!1},storyName:"yellow Small Button"},k={args:{ghostbutton:"Button_text",variant:"teritary",size:"small",disabled:!1},storyName:"teritary Small Button"},z={args:{ghostbutton:"Button_text",variant:"teritary",size:"medium",disabled:!1},storyName:"teritary Small Button"},q={args:{ghostbutton:"Button_text",variant:"teritary",size:"large",disabled:!1},storyName:"teritary Small Button"};var M,T,P;s.parameters={...s.parameters,docs:{...(M=s.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    ghostbutton: 'Button_text',
    variant: 'primary',
    size: 'small',
    disabled: false
  },
  storyName: 'ui-components-atoms-ghostbutton--primary'
}`,...(P=(T=s.parameters)==null?void 0:T.docs)==null?void 0:P.source}}};var j,O,R;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    ghostbutton: 'Button_text',
    variant: 'primary',
    size: 'medium',
    disabled: false
  },
  storyName: 'ui-components-atoms-ghostbutton--primary'
}`,...(R=(O=n.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var W,I,C;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    ghostbutton: 'Button_text',
    variant: 'primary',
    size: 'large',
    disabled: false
  },
  storyName: 'ui-components-atoms-ghostbutton--primary'
}`,...(C=(I=l.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};var G,V,E;i.parameters={...i.parameters,docs:{...(G=i.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    ghostbutton: 'Button_text',
    variant: 'dark',
    size: 'small',
    disabled: false
  },
  storyName: 'Dark Small Button'
}`,...(E=(V=i.parameters)==null?void 0:V.docs)==null?void 0:E.source}}};var Q,$,A;u.parameters={...u.parameters,docs:{...(Q=u.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    ghostbutton: 'Button_text',
    variant: 'dark',
    size: 'medium',
    disabled: false
  },
  storyName: 'Dark Small Button'
}`,...(A=($=u.parameters)==null?void 0:$.docs)==null?void 0:A.source}}};var H,J,K;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    ghostbutton: 'Button_text',
    variant: 'dark',
    size: 'large',
    disabled: false
  },
  storyName: 'Dark Small Button'
}`,...(K=(J=m.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var U,X,Y;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    ghostbutton: 'Button_text',
    variant: 'intenseviolet',
    size: 'small',
    disabled: false
  },
  storyName: 'intenseviolet Small Button'
}`,...(Y=(X=d.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,tt,et;c.parameters={...c.parameters,docs:{...(Z=c.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    ghostbutton: 'Button_text',
    variant: 'intenseviolet',
    size: 'medium',
    disabled: false
  },
  storyName: 'intenseviolet Small Button'
}`,...(et=(tt=c.parameters)==null?void 0:tt.docs)==null?void 0:et.source}}};var at,rt,ot;g.parameters={...g.parameters,docs:{...(at=g.parameters)==null?void 0:at.docs,source:{originalSource:`{
  args: {
    ghostbutton: 'Button_text',
    variant: 'intenseviolet',
    size: 'large',
    disabled: false
  },
  storyName: 'intenseviolet Small Button'
}`,...(ot=(rt=g.parameters)==null?void 0:rt.docs)==null?void 0:ot.source}}};var st,nt,lt;b.parameters={...b.parameters,docs:{...(st=b.parameters)==null?void 0:st.docs,source:{originalSource:`{
  args: {
    ghostbutton: 'Button_text',
    variant: 'violet',
    size: 'small',
    disabled: false
  },
  storyName: 'violet Small Button'
}`,...(lt=(nt=b.parameters)==null?void 0:nt.docs)==null?void 0:lt.source}}};var it,ut,mt;p.parameters={...p.parameters,docs:{...(it=p.parameters)==null?void 0:it.docs,source:{originalSource:`{
  args: {
    ghostbutton: 'Button_text',
    variant: 'violet',
    size: 'medium',
    disabled: false
  },
  storyName: 'violet Small Button'
}`,...(mt=(ut=p.parameters)==null?void 0:ut.docs)==null?void 0:mt.source}}};var dt,ct,gt;y.parameters={...y.parameters,docs:{...(dt=y.parameters)==null?void 0:dt.docs,source:{originalSource:`{
  args: {
    ghostbutton: 'Button_text',
    variant: 'violet',
    size: 'large',
    disabled: false
  },
  storyName: 'violet Small Button'
}`,...(gt=(ct=y.parameters)==null?void 0:ct.docs)==null?void 0:gt.source}}};var bt,pt,yt;_.parameters={..._.parameters,docs:{...(bt=_.parameters)==null?void 0:bt.docs,source:{originalSource:`{
  args: {
    ghostbutton: 'Button_text',
    variant: 'green',
    size: 'small',
    disabled: false
  },
  storyName: 'green Small Button'
}`,...(yt=(pt=_.parameters)==null?void 0:pt.docs)==null?void 0:yt.source}}};var _t,ht,ft;h.parameters={...h.parameters,docs:{...(_t=h.parameters)==null?void 0:_t.docs,source:{originalSource:`{
  args: {
    ghostbutton: 'Button_text',
    variant: 'green',
    size: 'medium',
    disabled: false
  },
  storyName: 'green Small Button'
}`,...(ft=(ht=h.parameters)==null?void 0:ht.docs)==null?void 0:ft.source}}};var vt,Bt,St;f.parameters={...f.parameters,docs:{...(vt=f.parameters)==null?void 0:vt.docs,source:{originalSource:`{
  args: {
    ghostbutton: 'Button_text',
    variant: 'green',
    size: 'large',
    disabled: false
  },
  storyName: 'green Small Button'
}`,...(St=(Bt=f.parameters)==null?void 0:Bt.docs)==null?void 0:St.source}}};var Nt,xt,Dt;v.parameters={...v.parameters,docs:{...(Nt=v.parameters)==null?void 0:Nt.docs,source:{originalSource:`{
  args: {
    ghostbutton: 'Button_text',
    variant: 'red',
    size: 'small',
    disabled: false
  },
  storyName: 'red Small Button'
}`,...(Dt=(xt=v.parameters)==null?void 0:xt.docs)==null?void 0:Dt.source}}};var kt,zt,qt;B.parameters={...B.parameters,docs:{...(kt=B.parameters)==null?void 0:kt.docs,source:{originalSource:`{
  args: {
    ghostbutton: 'Button_text',
    variant: 'red',
    size: 'medium',
    disabled: false
  },
  storyName: 'red Small Button'
}`,...(qt=(zt=B.parameters)==null?void 0:zt.docs)==null?void 0:qt.source}}};var wt,Lt,Ft;S.parameters={...S.parameters,docs:{...(wt=S.parameters)==null?void 0:wt.docs,source:{originalSource:`{
  args: {
    ghostbutton: 'Button_text',
    variant: 'red',
    size: 'large',
    disabled: false
  },
  storyName: 'red Small Button'
}`,...(Ft=(Lt=S.parameters)==null?void 0:Lt.docs)==null?void 0:Ft.source}}};var Mt,Tt,Pt;N.parameters={...N.parameters,docs:{...(Mt=N.parameters)==null?void 0:Mt.docs,source:{originalSource:`{
  args: {
    ghostbutton: 'Button_text',
    variant: 'yellow',
    size: 'small',
    disabled: false
  },
  storyName: 'yellow Small Button'
}`,...(Pt=(Tt=N.parameters)==null?void 0:Tt.docs)==null?void 0:Pt.source}}};var jt,Ot,Rt;x.parameters={...x.parameters,docs:{...(jt=x.parameters)==null?void 0:jt.docs,source:{originalSource:`{
  args: {
    ghostbutton: 'Button_text',
    variant: 'yellow',
    size: 'medium',
    disabled: false
  },
  storyName: 'yellow Small Button'
}`,...(Rt=(Ot=x.parameters)==null?void 0:Ot.docs)==null?void 0:Rt.source}}};var Wt,It,Ct;D.parameters={...D.parameters,docs:{...(Wt=D.parameters)==null?void 0:Wt.docs,source:{originalSource:`{
  args: {
    ghostbutton: 'Button_text',
    variant: 'yellow',
    size: 'large',
    disabled: false
  },
  storyName: 'yellow Small Button'
}`,...(Ct=(It=D.parameters)==null?void 0:It.docs)==null?void 0:Ct.source}}};var Gt,Vt,Et;k.parameters={...k.parameters,docs:{...(Gt=k.parameters)==null?void 0:Gt.docs,source:{originalSource:`{
  args: {
    ghostbutton: 'Button_text',
    variant: 'teritary',
    size: 'small',
    disabled: false
  },
  storyName: 'teritary Small Button'
}`,...(Et=(Vt=k.parameters)==null?void 0:Vt.docs)==null?void 0:Et.source}}};var Qt,$t,At;z.parameters={...z.parameters,docs:{...(Qt=z.parameters)==null?void 0:Qt.docs,source:{originalSource:`{
  args: {
    ghostbutton: 'Button_text',
    variant: 'teritary',
    size: 'medium',
    disabled: false
  },
  storyName: 'teritary Small Button'
}`,...(At=($t=z.parameters)==null?void 0:$t.docs)==null?void 0:At.source}}};var Ht,Jt,Kt;q.parameters={...q.parameters,docs:{...(Ht=q.parameters)==null?void 0:Ht.docs,source:{originalSource:`{
  args: {
    ghostbutton: 'Button_text',
    variant: 'teritary',
    size: 'large',
    disabled: false
  },
  storyName: 'teritary Small Button'
}`,...(Kt=(Jt=q.parameters)==null?void 0:Jt.docs)==null?void 0:Kt.source}}};const Be=["ReadOnlineDisambleSmallLocked","ReadOnlineDisambleMediumLocked","ReadOnlineDisambleLargeLocked","NeutalDarkSmallDefaul","NeutalDarkMediumDefaul","NeutalDarkLargeDefaul","BrandPrimarySmallDefaul","BrandPrimaryMediumDefaul","BrandPrimaryLargeDefaul","BrandSecondarySmallDefaul","BrandSecondaryMediumDefaul","BrandSecondaryLargeDefaul","FeedbackPositiveSmallDefaul","FeedbackPositiveMediumDefaul","FeedbackPositiveLargeDefaul","FeedbackNegativeSmallDefaul","FeedbackNegativeyMediumDefaul","FeedbackNegativeLargeDefaul","FeedbackWarningSmallDefaul","FeedbackWarningyMediumDefaul","FeedbackWarningLargeDefaul","BrandTeritarySmallDefaul","BrandTeritaryyMediumDefaul","BrandTeritaryLargeDefaul"];export{g as BrandPrimaryLargeDefaul,c as BrandPrimaryMediumDefaul,d as BrandPrimarySmallDefaul,y as BrandSecondaryLargeDefaul,p as BrandSecondaryMediumDefaul,b as BrandSecondarySmallDefaul,q as BrandTeritaryLargeDefaul,k as BrandTeritarySmallDefaul,z as BrandTeritaryyMediumDefaul,S as FeedbackNegativeLargeDefaul,v as FeedbackNegativeSmallDefaul,B as FeedbackNegativeyMediumDefaul,f as FeedbackPositiveLargeDefaul,h as FeedbackPositiveMediumDefaul,_ as FeedbackPositiveSmallDefaul,D as FeedbackWarningLargeDefaul,N as FeedbackWarningSmallDefaul,x as FeedbackWarningyMediumDefaul,m as NeutalDarkLargeDefaul,u as NeutalDarkMediumDefaul,i as NeutalDarkSmallDefaul,l as ReadOnlineDisambleLargeLocked,n as ReadOnlineDisambleMediumLocked,s as ReadOnlineDisambleSmallLocked,Be as __namedExportsOrder,ve as default};
