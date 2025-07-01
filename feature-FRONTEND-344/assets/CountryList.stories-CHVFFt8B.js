import{C as D}from"./CountryList-BPvbSCKA.js";import"./jsx-runtime-BlDnFLNC.js";import"./index-Cu9bd8lq.js";import"./countryMock-P7bcK4cg.js";import"./Box-BIQfO08j.js";import"./DefaultPropsProvider-VzuMoIoH.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-B34fLoo2.js";import"./memoTheme-Cfc04StF.js";import"./extends-CF3RwP-h.js";import"./index-BDYjnLYH.js";import"./Avatar-BLedJQw8.js";import"./createSvgIcon-fSewMTSc.js";import"./useSlot-BiIxzy86.js";import"./useForkRef-CXZ2Yisc.js";import"./Typography-uozj9yCg.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./List-CI6D2DmN.js";import"./isHostComponent-DVu5iVWx.js";import"./isMuiElement-B1vlATT2.js";import"./listItemButtonClasses-B-KaB91q.js";const K={title:"ui/Components/Molecules/CountryList",component:D,parameters:{docs:{page:null}},argTypes:{size:{options:["small","medium","large"],control:{type:"radio"},description:"Tamaño de los elementos de la lista"},flagVariant:{options:["circular","rectangular"],control:{type:"radio"},description:"Forma de las banderas",defaultValue:"circular"},containerVariant:{options:["rounded","straight"],control:{type:"radio"},description:"Forma de los bordes del contenedor",defaultValue:"rounded"},maxHeight:{control:{type:"text"},description:"Altura máxima de la lista antes de hacer scroll"},showTitle:{control:{type:"boolean"},description:"Mostrar u ocultar el título"},title:{control:{type:"text"},description:"Texto del título"},titleSize:{options:["small","medium","large"],control:{type:"radio"},description:"Tamaño del título",defaultValue:"medium"},onCountrySelect:{action:"countrySelected",description:"Callback cuando se selecciona un país"}}},e={args:{size:"medium",flagVariant:"circular",containerVariant:"rounded",maxHeight:"300px",showTitle:!0,title:"Select Country",titleSize:"medium"}},r={args:{...e.args,flagVariant:"rectangular"}},a={args:{...e.args,containerVariant:"straight"}},t={args:{...e.args,size:"small",titleSize:"small"}},o={args:{...e.args,size:"large",titleSize:"large"}},s={args:{...e.args,showTitle:!1}};var i,n,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    flagVariant: 'circular',
    containerVariant: 'rounded',
    maxHeight: '300px',
    showTitle: true,
    title: 'Select Country',
    titleSize: 'medium'
  }
}`,...(l=(n=e.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var c,m,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    flagVariant: 'rectangular'
  }
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,d,g;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    containerVariant: 'straight'
  }
}`,...(g=(d=a.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var S,f,h;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    size: 'small',
    titleSize: 'small'
  }
}`,...(h=(f=t.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var y,z,V;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    size: 'large',
    titleSize: 'large'
  }
}`,...(V=(z=o.parameters)==null?void 0:z.docs)==null?void 0:V.source}}};var x,T,C;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showTitle: false
  }
}`,...(C=(T=s.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};const N=["Default","RectangularFlags","StraightContainer","Small","Large","WithoutTitle"];export{e as Default,o as Large,r as RectangularFlags,t as Small,a as StraightContainer,s as WithoutTitle,N as __namedExportsOrder,K as default};
