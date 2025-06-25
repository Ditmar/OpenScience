import{A as q}from"./badges-C71CCZuU.js";import"./jsx-runtime-BlDnFLNC.js";import"./index-Cu9bd8lq.js";import"./pills-D_xzbIFP.js";import"./icons-Dqqr9IZ9.js";import"./index-gagdKHFB.js";import"./AvatarBagde-DEwOmZsc.js";import"./Avatar-JH12HKhZ.js";import"./memoTheme-DPVYnmKC.js";import"./DefaultPropsProvider-BAhuKGvc.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-B34fLoo2.js";import"./extends-CF3RwP-h.js";import"./createSvgIcon-DIuIFgbQ.js";import"./useSlot-CpDDng4u.js";import"./Text-CRGSqWDh.js";import"./Typography-PGMp3Ct8.js";import"./index-BjLyGQlH.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Icon-D2F3OTyi.js";import"./iframe-CitSSTLU.js";import"../sb-preview/runtime.js";import"./dynamic-import-helper-BheWnx7M.js";import"./ThemeProvider-BMfEqnnn.js";import"./index-BaAsS3ug.js";import"./useEnhancedEffect-BAizwhs3.js";import"./Box-DqwUWDDE.js";import"./CircularProgress-Khqbzs_D.js";import"./useThemeProps-BmNRVt4Z.js";const nr={title:"ui/components/molecules/badges",component:q,argTypes:{avatarSrc:{control:"text",description:"URL de la imagen del avatar. Si se proporciona, el avatar será visible."},text:{control:"text",description:"Texto principal del badge."},size:{control:"radio",options:["small","medium","large"],defaultValue:"medium",description:"Tamaño del componente."},bold:{control:"boolean",defaultValue:!1,description:"Define si el texto debe ser negrita."},showAvatar:{control:"boolean",defaultValue:!0,description:"Muestra/oculta el avatar."},variant:{control:"radio",options:["filled","outline","soft"],defaultValue:"filled",description:"Variante de estilo del badge."},color:{control:"radio",options:["neutral","gray","violet","blue","custom"],defaultValue:"neutral",description:"Color del badge."},customColor:{control:"color",if:{arg:"color",eq:"custom"},description:'Color personalizado cuando la prop `color` se establece en "custom".'},shape:{control:"radio",options:["default","rounded"],defaultValue:"default",description:"Forma de las esquinas del badge."},onRemove:{action:"removed",description:"Callback que se dispara cuando se hace clic en el botón de eliminar."},onClick:{action:"clicked",description:"Callback que se dispara cuando se hace clic en el badge."},showLeadingIcon:{control:"boolean",defaultValue:!1,description:"Controla la visibilidad del icono principal a la izquierda del badge."},leftPillProps:{control:"object",description:"Propiedades para el componente Pill izquierdo."},rightPillProps:{control:"object",description:"Propiedades para el componente Pill derecho."},showRemoveIcon:{control:"boolean",defaultValue:!0,description:'Controla la visibilidad del icono de "cerrar" a la derecha del badge.'}}},r={args:{avatarSrc:"https://i.pravatar.cc/150?img=1",text:"Usuario Activo",showLeadingIcon:!0,leftPillProps:{text:"100",color:"neutral-dark",variant:"filled",size:"sm"},rightPillProps:{text:"100",color:"neutral-dark",variant:"filled",size:"sm"},showRemoveIcon:!0,color:"custom",customColor:"#FFFFFF"}},a={args:{...r.args,avatarSrc:"https://i.pravatar.cc/150?img=3",variant:"outline"}},e={args:{...r.args,avatarSrc:"https://i.pravatar.cc/150?img=5",variant:"soft",color:"violet"}},o={args:{...r.args,avatarSrc:"https://i.pravatar.cc/150?img=7",shape:"rounded"}},t={args:{...r.args,avatarSrc:"https://i.pravatar.cc/150?img=9",color:"custom",customColor:"#ffeb3b"}},i={args:{...r.args,avatarSrc:"https://i.pravatar.cc/150?img=11",text:"Items en Carrito",leftPillProps:{text:"5",color:"brand-tertiary",variant:"filled",size:"sm"},rightPillProps:{text:"10",color:"feedback-positive",variant:"filled",size:"sm"}}},s={args:{...r.args,avatarSrc:void 0,showLeadingIcon:!0,text:"Con Icono"}},n={args:{...r.args,text:"Sin Remover",showRemoveIcon:!1}};var c,l,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    avatarSrc: 'https://i.pravatar.cc/150?img=1',
    text: 'Usuario Activo',
    showLeadingIcon: true,
    leftPillProps: {
      text: '100',
      color: 'neutral-dark',
      variant: 'filled',
      size: 'sm'
    },
    rightPillProps: {
      text: '100',
      color: 'neutral-dark',
      variant: 'filled',
      size: 'sm'
    },
    showRemoveIcon: true,
    color: 'custom',
    customColor: '#FFFFFF'
  }
}`,...(p=(l=r.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var d,m,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    avatarSrc: 'https://i.pravatar.cc/150?img=3',
    variant: 'outline'
  }
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,v,f;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    avatarSrc: 'https://i.pravatar.cc/150?img=5',
    variant: 'soft',
    color: 'violet'
  }
}`,...(f=(v=e.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var h,b,S;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    avatarSrc: 'https://i.pravatar.cc/150?img=7',
    shape: 'rounded'
  }
}`,...(S=(b=o.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var P,x,C;t.parameters={...t.parameters,docs:{...(P=t.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    avatarSrc: 'https://i.pravatar.cc/150?img=9',
    color: 'custom',
    customColor: '#ffeb3b'
  }
}`,...(C=(x=t.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var I,F,R;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    avatarSrc: 'https://i.pravatar.cc/150?img=11',
    text: 'Items en Carrito',
    leftPillProps: {
      text: '5',
      color: 'brand-tertiary',
      variant: 'filled',
      size: 'sm'
    },
    rightPillProps: {
      text: '10',
      color: 'feedback-positive',
      variant: 'filled',
      size: 'sm'
    }
  }
}`,...(R=(F=i.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};var V,z,w;s.parameters={...s.parameters,docs:{...(V=s.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    avatarSrc: undefined,
    showLeadingIcon: true,
    text: 'Con Icono'
  }
}`,...(w=(z=s.parameters)==null?void 0:z.docs)==null?void 0:w.source}}};var k,D,L;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    text: 'Sin Remover',
    showRemoveIcon: false
  }
}`,...(L=(D=n.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};const cr=["Default","OutlineVariant","SoftViolet","RoundedShape","CustomColor","WithPills","WithLeadingIcon","WithoutRemoveIcon"];export{t as CustomColor,r as Default,a as OutlineVariant,o as RoundedShape,e as SoftViolet,s as WithLeadingIcon,i as WithPills,n as WithoutRemoveIcon,cr as __namedExportsOrder,nr as default};
