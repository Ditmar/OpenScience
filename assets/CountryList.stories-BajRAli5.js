import{C as D}from"./CountryList-BxA7aHUm.js";import"./jsx-runtime-BlDnFLNC.js";import"./index-Cu9bd8lq.js";import"./countryMock-CBaWKBa4.js";import"./styled-BcxEKCqu.js";import"./defaultTheme-hVdAcmfr.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-B34fLoo2.js";import"./extends-CF3RwP-h.js";import"./Box-CXMBgiq9.js";import"./generateUtilityClasses-CPRdC64H.js";import"./extendSxProp-DZd722m1.js";import"./Avatar-DSYvAv8b.js";import"./memoTheme-CSqgJ1pS.js";import"./createSvgIcon-B4VxZv1Q.js";import"./DefaultPropsProvider-15asn56a.js";import"./composeClasses-CAXbtk_0.js";import"./useSlot-BDqnu5Qn.js";import"./useForkRef-CXZ2Yisc.js";import"./Typography-D5nR81UF.js";import"./index-Ci7gCmCj.js";import"./emotion-react.browser.esm-Ck68rXrL.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./List-DROm6bfZ.js";import"./isHostComponent-DVu5iVWx.js";import"./isMuiElement-B1vlATT2.js";import"./listItemButtonClasses-CaTLjKP_.js";const Y={title:"ui/Components/Molecules/CountryList",component:D,parameters:{docs:{page:null}},argTypes:{size:{options:["small","medium","large"],control:{type:"radio"},description:"Tamaño de los elementos de la lista"},flagVariant:{options:["circular","rectangular"],control:{type:"radio"},description:"Forma de las banderas",defaultValue:"circular"},containerVariant:{options:["rounded","straight"],control:{type:"radio"},description:"Forma de los bordes del contenedor",defaultValue:"rounded"},maxHeight:{control:{type:"text"},description:"Altura máxima de la lista antes de hacer scroll"},showTitle:{control:{type:"boolean"},description:"Mostrar u ocultar el título"},title:{control:{type:"text"},description:"Texto del título"},titleSize:{options:["small","medium","large"],control:{type:"radio"},description:"Tamaño del título",defaultValue:"medium"},onCountrySelect:{action:"countrySelected",description:"Callback cuando se selecciona un país"}}},r={args:{size:"medium",flagVariant:"circular",containerVariant:"rounded",maxHeight:"300px",showTitle:!0,title:"Select Country",titleSize:"medium"}},e={args:{...r.args,flagVariant:"rectangular"}},t={args:{...r.args,containerVariant:"straight"}},a={args:{...r.args,size:"small",titleSize:"small"}},o={args:{...r.args,size:"large",titleSize:"large"}},s={args:{...r.args,showTitle:!1}};var i,n,l;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    flagVariant: 'circular',
    containerVariant: 'rounded',
    maxHeight: '300px',
    showTitle: true,
    title: 'Select Country',
    titleSize: 'medium'
  }
}`,...(l=(n=r.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var c,m,p;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    flagVariant: 'rectangular'
  }
}`,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,d,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    containerVariant: 'straight'
  }
}`,...(g=(d=t.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var S,f,h;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    size: 'small',
    titleSize: 'small'
  }
}`,...(h=(f=a.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var y,z,V;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(C=(T=s.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};const Z=["Default","RectangularFlags","StraightContainer","Small","Large","WithoutTitle"];export{r as Default,o as Large,e as RectangularFlags,a as Small,t as StraightContainer,s as WithoutTitle,Z as __namedExportsOrder,Y as default};
