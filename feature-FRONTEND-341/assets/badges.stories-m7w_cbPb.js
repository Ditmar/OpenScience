import{A as E}from"./badges-DB-0z4At.js";import"./jsx-runtime-BlDnFLNC.js";import"./index-Cu9bd8lq.js";import"./AvatarBagde-Ckps64Bw.js";import"./styled-Bt0mFYDl.js";import"./identifier-CbEbAR9K.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-B34fLoo2.js";import"./extends-CF3RwP-h.js";import"./Avatar-DvuSZbyC.js";import"./memoTheme-B79gvi06.js";import"./createSvgIcon-8vP1eH-R.js";import"./DefaultPropsProvider-15asn56a.js";import"./useSlot-BR1c830i.js";import"./Text-IECWBd1C.js";import"./Typography-CoNoFykH.js";import"./index-BEPDM9dZ.js";import"./useTheme-CjnX6HY-.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./pills-BUEpjz6R.js";import"./Box-CsY7UG8k.js";import"./Icon-vIR2O8WS.js";import"./iframe-YzrgXqOU.js";import"../sb-preview/runtime.js";import"./ThemeProvider-0uHrGwZj.js";import"./index-rYTj-vD5.js";import"./CircularProgress-BLYpQYgc.js";import"./useThemeProps-zfQwVMMu.js";const Z={title:"ui/components/molecules/badges",component:E,argTypes:{avatarSrc:{control:"text",description:"URL of the avatar image"},text:{control:"text",description:"Main badge text"},size:{control:"radio",options:["small","medium","large"],defaultValue:"medium",description:"Size of the component"},bold:{control:"boolean",defaultValue:!1,description:"Whether the text should be bold"},showAvatar:{control:"boolean",defaultValue:!0,description:"Show/hide the avatar"},countStart:{control:"number",description:"Number displayed before the text"},countEnd:{control:"number",description:"Number displayed after the text"},variant:{control:"radio",options:["filled","outline","soft"],defaultValue:"filled",description:"Variant of the badge"},color:{control:"radio",options:["neutral","gray","violet","blue","custom"],defaultValue:"neutral",description:"Color of the badge"},customColor:{control:"color",if:{arg:"color",eq:"custom"},description:"Custom color when color is set to custom"},shape:{control:"radio",options:["default","rounded"],defaultValue:"default",description:"Shape of the badge corners"},onRemove:{action:"removed",description:"Callback when remove button is clicked"},onClick:{action:"clicked",description:"Callback when the badge is clicked"}}},r={args:{avatarSrc:"https://i.pravatar.cc/150?img=1"}},t={args:{avatarSrc:"https://i.pravatar.cc/150?img=3",variant:"outline"}},a={args:{avatarSrc:"https://i.pravatar.cc/150?img=5",variant:"soft",color:"violet"}},o={args:{avatarSrc:"https://i.pravatar.cc/150?img=7",shape:"rounded"}},e={args:{avatarSrc:"https://i.pravatar.cc/150?img=9",color:"custom",customColor:"#ffeb3b"}},c={args:{avatarSrc:"https://i.pravatar.cc/150?img=11",countStart:5,countEnd:10}};var s,i,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    avatarSrc: 'https://i.pravatar.cc/150?img=1'
  }
}`,...(n=(i=r.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};var p,m,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    avatarSrc: 'https://i.pravatar.cc/150?img=3',
    variant: 'outline'
  }
}`,...(l=(m=t.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var d,u,g;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    avatarSrc: 'https://i.pravatar.cc/150?img=5',
    variant: 'soft',
    color: 'violet'
  }
}`,...(g=(u=a.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var v,h,f;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    avatarSrc: 'https://i.pravatar.cc/150?img=7',
    shape: 'rounded'
  }
}`,...(f=(h=o.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var S,b,C;e.parameters={...e.parameters,docs:{...(S=e.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    avatarSrc: 'https://i.pravatar.cc/150?img=9',
    color: 'custom',
    customColor: '#ffeb3b'
  }
}`,...(C=(b=e.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var x,V,k;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    avatarSrc: 'https://i.pravatar.cc/150?img=11',
    countStart: 5,
    countEnd: 10
  }
}`,...(k=(V=c.parameters)==null?void 0:V.docs)==null?void 0:k.source}}};const $=["Example","OutlineVariant","SoftViolet","RoundedShape","CustomColor","WithCounters"];export{e as CustomColor,r as Example,t as OutlineVariant,o as RoundedShape,a as SoftViolet,c as WithCounters,$ as __namedExportsOrder,Z as default};
