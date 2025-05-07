import{j as ie}from"./jsx-runtime-DRTy3Uxn.js";import"./index-BBkUAzwr.js";const e={"ol-item":"_ol-item_147i0_73","ol-item--square":"_ol-item--square_147i0_85","ol-item--rounded":"_ol-item--rounded_147i0_88","ol-item--circle":"_ol-item--circle_147i0_91","ol-item--sm":"_ol-item--sm_147i0_94","ol-item--md":"_ol-item--md_147i0_102","ol-item--lg":"_ol-item--lg_147i0_110","ol-item--stroked":"_ol-item--stroked_147i0_118","ol-item--active":"_ol-item--active_147i0_121"};function Z({value:ee,shape:ae="square",size:se="sm",styleType:re="default",active:te=!1}){const le=e["ol-item"],oe=e[`ol-item--${ae}`]||"",ne=e[`ol-item--${se}`]||"",ce=re==="stroked"?e["ol-item--stroked"]:"",ue=te?e["ol-item--active"]:"";return ie.jsx("div",{className:`${le} ${oe} ${ne} ${ce} ${ue}`,role:"listitem",children:ee})}Z.__docgenInfo={description:"",methods:[],displayName:"OLItem",props:{value:{required:!0,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},shape:{required:!1,tsType:{name:"union",raw:"'square' | 'rounded' | 'circle'",elements:[{name:"literal",value:"'square'"},{name:"literal",value:"'rounded'"},{name:"literal",value:"'circle'"}]},description:"",defaultValue:{value:"'square'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'sm'",computed:!1}},styleType:{required:!1,tsType:{name:"union",raw:"'default' | 'stroked'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'stroked'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const pe={title:"ui/components/atoms/OLItem",component:Z,argTypes:{shape:{control:{type:"select"},options:["square","rounded","circle"]},size:{control:{type:"select"},options:["sm","md","lg"]},styleType:{control:{type:"select"},options:["default","stroked"]},active:{control:"boolean"},value:{control:"text"}}},a={args:{value:1,shape:"square",size:"sm",styleType:"default",active:!1}},s={args:{value:1,shape:"square",size:"md",styleType:"default",active:!1}},r={args:{value:1,shape:"square",size:"lg",styleType:"default",active:!1}},t={args:{value:2,shape:"rounded",size:"sm",styleType:"default",active:!1}},l={args:{value:2,shape:"rounded",size:"md",styleType:"default",active:!1}},o={args:{value:2,shape:"rounded",size:"lg",styleType:"default",active:!1}},n={args:{value:3,shape:"circle",size:"sm",styleType:"default",active:!1}},c={args:{value:3,shape:"circle",size:"md",styleType:"default",active:!1}},u={args:{value:3,shape:"circle",size:"lg",styleType:"default",active:!1}},i={args:{value:1,shape:"square",size:"sm",styleType:"stroked",active:!1}},d={args:{value:1,shape:"rounded",size:"md",styleType:"stroked",active:!1}},m={args:{value:1,shape:"circle",size:"lg",styleType:"stroked",active:!1}},p={args:{value:4,shape:"circle",size:"lg",styleType:"stroked",active:!0}};var f,v,g;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    value: 1,
    shape: 'square',
    size: 'sm',
    styleType: 'default',
    active: false
  }
}`,...(g=(v=a.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var y,S,T;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    value: 1,
    shape: 'square',
    size: 'md',
    styleType: 'default',
    active: false
  }
}`,...(T=(S=s.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var h,_,z;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    value: 1,
    shape: 'square',
    size: 'lg',
    styleType: 'default',
    active: false
  }
}`,...(z=(_=r.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};var q,k,D;t.parameters={...t.parameters,docs:{...(q=t.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    value: 2,
    shape: 'rounded',
    size: 'sm',
    styleType: 'default',
    active: false
  }
}`,...(D=(k=t.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var C,L,R;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    value: 2,
    shape: 'rounded',
    size: 'md',
    styleType: 'default',
    active: false
  }
}`,...(R=(L=l.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};var M,$,x;o.parameters={...o.parameters,docs:{...(M=o.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    value: 2,
    shape: 'rounded',
    size: 'lg',
    styleType: 'default',
    active: false
  }
}`,...(x=($=o.parameters)==null?void 0:$.docs)==null?void 0:x.source}}};var b,w,I;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    value: 3,
    shape: 'circle',
    size: 'sm',
    styleType: 'default',
    active: false
  }
}`,...(I=(w=n.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var O,V,j;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    value: 3,
    shape: 'circle',
    size: 'md',
    styleType: 'default',
    active: false
  }
}`,...(j=(V=c.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};var A,E,N;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    value: 3,
    shape: 'circle',
    size: 'lg',
    styleType: 'default',
    active: false
  }
}`,...(N=(E=u.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var B,F,G;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    value: 1,
    shape: 'square',
    size: 'sm',
    styleType: 'stroked',
    active: false
  }
}`,...(G=(F=i.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var H,J,K;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    value: 1,
    shape: 'rounded',
    size: 'md',
    styleType: 'stroked',
    active: false
  }
}`,...(K=(J=d.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var P,Q,U;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    value: 1,
    shape: 'circle',
    size: 'lg',
    styleType: 'stroked',
    active: false
  }
}`,...(U=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var W,X,Y;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    value: 4,
    shape: 'circle',
    size: 'lg',
    styleType: 'stroked',
    active: true
  }
}`,...(Y=(X=p.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const fe=["DefaultSquareSmall","DefaultSquareMedium","DefaultSquareLarge","DefaultRoundedSmall","DefaultRoundedMedium","DefaultRoundedLarge","DefaultCircleSmall","DefaultCircleMedium","DefaultCircleLarge","StrocketSquareSmall","StrocketRoundedMedium","StrocketCircleLarge","StrokedCircleLargeActive"];export{u as DefaultCircleLarge,c as DefaultCircleMedium,n as DefaultCircleSmall,o as DefaultRoundedLarge,l as DefaultRoundedMedium,t as DefaultRoundedSmall,r as DefaultSquareLarge,s as DefaultSquareMedium,a as DefaultSquareSmall,m as StrocketCircleLarge,d as StrocketRoundedMedium,i as StrocketSquareSmall,p as StrokedCircleLargeActive,fe as __namedExportsOrder,pe as default};
