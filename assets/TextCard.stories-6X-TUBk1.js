import{j as o}from"./jsx-runtime-BlDnFLNC.js";import{r as fa}from"./index-Cu9bd8lq.js";import{C as qa}from"./Check-jW6qeuhr.js";import{S as za,A as Ea}from"./badges-C71CCZuU.js";import{S as Ma}from"./SubTitleAndParagraph-GdtzUmez.js";import{g as ha,a as ba,s as A,c as Ca,b as Sa}from"./memoTheme-DPVYnmKC.js";import{u as Pa}from"./DefaultPropsProvider-BAhuKGvc.js";import{P as Ba}from"./Paper-ClryFIAI.js";import{B as w}from"./Box-DqwUWDDE.js";import"./pills-D_xzbIFP.js";import"./icons-Dqqr9IZ9.js";import"./index-gagdKHFB.js";import"./AvatarBagde-DEwOmZsc.js";import"./Avatar-JH12HKhZ.js";import"./createSvgIcon-DIuIFgbQ.js";import"./useSlot-CpDDng4u.js";import"./Text-CRGSqWDh.js";import"./Typography-PGMp3Ct8.js";import"./index-BjLyGQlH.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-B34fLoo2.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Icon-D2F3OTyi.js";import"./iframe-CitSSTLU.js";import"../sb-preview/runtime.js";import"./dynamic-import-helper-BheWnx7M.js";import"./ThemeProvider-BMfEqnnn.js";import"./index-BaAsS3ug.js";import"./useEnhancedEffect-BAizwhs3.js";import"./CircularProgress-Khqbzs_D.js";import"./useThemeProps-BmNRVt4Z.js";import"./extends-CF3RwP-h.js";function Fa(a){return ha("MuiCard",a)}ba("MuiCard",["root"]);const Ia=a=>{const{classes:e}=a;return Sa({root:["root"]},Fa,e)},Ra=A(Ba,{name:"MuiCard",slot:"Root"})({overflow:"hidden"}),Ua=fa.forwardRef(function(e,r){const s=Pa({props:e,name:"MuiCard"}),{className:l,raised:i=!1,...d}=s,n={...s,raised:i},c=Ia(n);return o.jsx(Ra,{className:Ca(c.root,l),elevation:i?8:void 0,ref:r,ownerState:n,...d})});function Na(a){return ha("MuiCardContent",a)}ba("MuiCardContent",["root"]);const Ga=a=>{const{classes:e}=a;return Sa({root:["root"]},Na,e)},La=A("div",{name:"MuiCardContent",slot:"Root"})({padding:16,"&:last-child":{paddingBottom:24}}),_a=fa.forwardRef(function(e,r){const s=Pa({props:e,name:"MuiCardContent"}),{className:l,component:i="div",...d}=s,n={...s,component:i},c=Ga(n);return o.jsx(La,{as:i,className:Ca(c.root,l),ownerState:n,ref:r,...d})}),Wa=(a,e,r)=>e?a.palette.primary.main:r==="default"||!r?a.palette.grey[300]:a.palette[r].main,$a=(a,e)=>e?a.palette.action.selected:a.palette.background.paper,Ha=(a,e,r)=>e?a.palette.primary.dark:r==="default"||!r?a.palette.grey[500]:a.palette[r].dark,Oa=A(Ua)(({theme:a,isSelected:e,cardVariantColor:r,sizeVariant:s,shapeVariant:l})=>{const i=Wa(a,e,r),d=$a(a,e),n=Ha(a,e,r);return{display:"flex",flexDirection:"row",alignItems:"flex-start",border:`1px solid ${i}`,backgroundColor:d,boxShadow:e?a.shadows[3]:a.shadows[1],transition:a.transitions.create(["border-color","background-color","box-shadow"],{duration:a.transitions.duration.standard}),cursor:"pointer","&:hover":{borderColor:n,boxShadow:a.shadows[6]},maxWidth:400,width:"100%",...(()=>{switch(s){case"large":return{padding:a.spacing(4)};case"small":return{padding:a.spacing(1)};case"medium":default:return{padding:a.spacing(2)}}})(),...(()=>{switch(l){case"sharp":return{borderRadius:0};case"soft":default:return{borderRadius:a.shape.borderRadius}}})()}}),Ja=a=>{switch(a){case"large":return"lg";case"medium":return"md";case"small":return"sm";default:return"md"}};function va({isChecked:a,onCheckChange:e,isCheckDisabled:r,badgeText:s,badgeAvatarSrc:l,onBadgeClick:i,cardSubtitle:d,subtitleSize:n,subtitleAlignment:c,subtitleVariant:xa,subtitleTitleTag:Ta,cardParagraph:ya,paragraphSubtitleTag:Aa,className:ja="",isSelected:ka=!1,cardVariantColor:Va="default",sizeVariant:j="medium",shapeVariant:wa="soft",showLeadingIcon:k=!1,showLeadingPill:V=!1,cardRightPillProps:Da}){const y=Ja(j);let p;switch(y){case"lg":p="large";break;case"sm":p="small";break;case"md":default:p="medium";break}return o.jsxs(Oa,{className:ja,isSelected:ka,cardVariantColor:Va,sizeVariant:j,shapeVariant:wa,children:[o.jsx(w,{sx:{mr:2,pt:.5,flexShrink:0},children:o.jsx(qa,{checked:a,onChange:e,disabled:r,variant:"default",rounded:!1})}),o.jsxs(_a,{sx:{flexGrow:1,p:0,"&:last-child":{pb:0},display:"flex",flexDirection:"column"},children:[o.jsx(za,{direction:"row",alignItems:"center",spacing:1,sx:{mb:1},children:o.jsx(Ea,{text:s,showAvatar:!k&&!V&&!!l,avatarSrc:l,showLeadingIcon:k,leftPillProps:V?{text:"Pill",variant:"soft",color:"neutral-dark",size:y}:void 0,onClick:i,size:p,variant:"filled",color:"neutral",shape:"default",showRemoveIcon:!1,rightPillProps:Da})}),o.jsx(w,{children:o.jsx(Ma,{title:d,subtitle:ya,size:n??y,alignment:c??"left",variant:xa??"default",titleTag:Ta??"h3",subtitleTag:Aa??"p"})})]})]})}va.__docgenInfo={description:"",methods:[],displayName:"TextCard",props:{isChecked:{required:!0,tsType:{name:"CheckProps['checked']",raw:"CheckProps['checked']"},description:""},onCheckChange:{required:!0,tsType:{name:"CheckProps['onChange']",raw:"CheckProps['onChange']"},description:""},isCheckDisabled:{required:!1,tsType:{name:"CheckProps['disabled']",raw:"CheckProps['disabled']"},description:""},badgeText:{required:!0,tsType:{name:"AvatarBadgeItemProps['text']",raw:"AvatarBadgeItemProps['text']"},description:""},badgeAvatarSrc:{required:!1,tsType:{name:"AvatarBadgeItemProps['avatarSrc']",raw:"AvatarBadgeItemProps['avatarSrc']"},description:""},onBadgeClick:{required:!1,tsType:{name:"AvatarBadgeItemProps['onClick']",raw:"AvatarBadgeItemProps['onClick']"},description:""},cardSubtitle:{required:!0,tsType:{name:"SubTitleAndParagraphProps['title']",raw:"SubTitleAndParagraphProps['title']"},description:""},subtitleSize:{required:!1,tsType:{name:"SubTitleAndParagraphProps['size']",raw:"SubTitleAndParagraphProps['size']"},description:""},subtitleAlignment:{required:!1,tsType:{name:"SubTitleAndParagraphProps['alignment']",raw:"SubTitleAndParagraphProps['alignment']"},description:""},subtitleVariant:{required:!1,tsType:{name:"SubTitleAndParagraphProps['variant']",raw:"SubTitleAndParagraphProps['variant']"},description:""},subtitleTitleTag:{required:!1,tsType:{name:"SubTitleAndParagraphProps['titleTag']",raw:"SubTitleAndParagraphProps['titleTag']"},description:""},cardParagraph:{required:!1,tsType:{name:"SubTitleAndParagraphProps['subtitle']",raw:"SubTitleAndParagraphProps['subtitle']"},description:""},paragraphSubtitleTag:{required:!1,tsType:{name:"SubTitleAndParagraphProps['subtitleTag']",raw:"SubTitleAndParagraphProps['subtitleTag']"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},isSelected:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},cardVariantColor:{required:!1,tsType:{name:"union",raw:"'default' | 'info' | 'warning' | 'success' | 'error' | 'primary' | 'secondary'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'info'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'success'"},{name:"literal",value:"'error'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},sizeVariant:{required:!1,tsType:{name:"union",raw:"'large' | 'medium' | 'small'",elements:[{name:"literal",value:"'large'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'small'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},shapeVariant:{required:!1,tsType:{name:"union",raw:"'soft' | 'sharp'",elements:[{name:"literal",value:"'soft'"},{name:"literal",value:"'sharp'"}]},description:"",defaultValue:{value:"'soft'",computed:!1}},showLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},leadingIcon:{required:!1,tsType:{name:"ReactNode"},description:""},showLeadingPill:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},cardRightPillProps:{required:!1,tsType:{name:"PillProps"},description:""}}};const je={title:"Molecules/TextCard",component:va,parameters:{layout:"centered"},argTypes:{isChecked:{control:"boolean",description:"Determina si el checkbox de la tarjeta está marcado."},onCheckChange:{action:"checkedChange",description:"Callback que se dispara al cambiar el estado del checkbox."},isCheckDisabled:{control:"boolean",description:"Deshabilita el checkbox de la tarjeta."},badgeText:{control:"text",description:"Texto principal que se muestra en el badge."},badgeAvatarSrc:{control:"text",description:"URL de la imagen para el avatar dentro del badge. Si no se provee, no se muestra."},onBadgeClick:{action:"badgeClick",description:"Callback que se dispara al hacer clic en el badge."},cardSubtitle:{control:"text",description:"El subtítulo principal (título del SubTitleAndParagraph)."},cardParagraph:{control:"text",description:"El contenido del párrafo principal (subtítulo del SubTitleAndParagraph)."},className:{control:"text",description:"Clases CSS adicionales para el componente raíz de la tarjeta."},isSelected:{control:"boolean",description:"Aplica un estilo visual distintivo si la tarjeta está seleccionada."},cardVariantColor:{control:"select",options:["default","primary","secondary","error","warning","info","success"],description:"Define la variante de color para el borde de la tarjeta cuando no está seleccionada."},sizeVariant:{control:"select",options:["large","medium","small"],description:"Define el tamaño predefinido de la tarjeta (afecta padding y tamaño de átomos)."},shapeVariant:{control:"select",options:["soft","sharp"],description:"Define la forma de los bordes de la tarjeta."},cardRightPillProps:{control:"object",description:"Propiedades para el Pill que se mostrará a la derecha del badge. Debe ser un objeto con `text`, `variant`, `color`, `size`."}},args:{isChecked:!1,badgeText:"Nombre de Usuario",cardSubtitle:"Título de la Tarjeta",cardParagraph:"Este es el contenido de la descripción de la tarjeta.",isCheckDisabled:!1,isSelected:!1,cardVariantColor:"default",badgeAvatarSrc:"https://via.placeholder.com/24",sizeVariant:"medium",shapeVariant:"soft",cardRightPillProps:{text:"100",variant:"filled",color:"brand-primary",size:"sm"}}},t={},u={args:{...t.args,isChecked:!0}},m={args:{...t.args,isSelected:!0,cardVariantColor:"default"}},g={args:{...t.args,badgeAvatarSrc:"https://via.placeholder.com/24/007bff/ffffff?text=User",badgeText:"Usuario con Avatar Específico"}},f={args:{...t.args,isCheckDisabled:!0}},h={args:{...t.args,cardVariantColor:"info",cardSubtitle:"Alerta Imp",cardParagraph:"Esta tarjeta utiliza la variante de color para información."}},b={args:{...t.args,cardVariantColor:"error",cardSubtitle:"Mensaje de Error",cardParagraph:"Algo salió mal, revisa esta información urgente."}},C={args:{...t.args,sizeVariant:"large",shapeVariant:"soft",cardSubtitle:"Tarjeta Grande y Suave",cardParagraph:"El tamaño y los bordes se ajustan según la variante."}},S={args:{...t.args,sizeVariant:"medium",shapeVariant:"soft",cardSubtitle:"Tarjeta Mediana y Suave",cardParagraph:"El tamaño y los bordes se ajustan según la variante."}},P={args:{...t.args,sizeVariant:"small",shapeVariant:"soft",cardSubtitle:"Tarjeta Pequeña y Suave",cardParagraph:"El tamaño y los bordes se ajustan según la variante."}},v={args:{...t.args,sizeVariant:"large",shapeVariant:"sharp",cardSubtitle:"Tarjeta Grande y Afilada",cardParagraph:"El tamaño y los bordes se ajustan según la variante."}},x={args:{...t.args,sizeVariant:"medium",shapeVariant:"sharp",cardSubtitle:"Tarjeta Mediana y Afilada",cardParagraph:"El tamaño y los bordes se ajustan según la variante."}},T={args:{...t.args,sizeVariant:"small",shapeVariant:"sharp",cardSubtitle:"Tarjeta Pequeña y Afilada",cardParagraph:"El tamaño y los bordes se ajustan según la variante."}};var D,q,z;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:"{}",...(z=(q=t.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var E,M,B;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isChecked: true
  }
}`,...(B=(M=u.parameters)==null?void 0:M.docs)==null?void 0:B.source}}};var F,I,R;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isSelected: true,
    cardVariantColor: 'default'
  }
}`,...(R=(I=m.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var U,N,G;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    badgeAvatarSrc: 'https://via.placeholder.com/24/007bff/ffffff?text=User',
    badgeText: 'Usuario con Avatar Específico'
  }
}`,...(G=(N=g.parameters)==null?void 0:N.docs)==null?void 0:G.source}}};var L,_,W;f.parameters={...f.parameters,docs:{...(L=f.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isCheckDisabled: true
  }
}`,...(W=(_=f.parameters)==null?void 0:_.docs)==null?void 0:W.source}}};var $,H,O;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    cardVariantColor: 'info',
    cardSubtitle: 'Alerta Imp',
    cardParagraph: 'Esta tarjeta utiliza la variante de color para información.'
  }
}`,...(O=(H=h.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};var J,K,Q;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    cardVariantColor: 'error',
    cardSubtitle: 'Mensaje de Error',
    cardParagraph: 'Algo salió mal, revisa esta información urgente.'
  }
}`,...(Q=(K=b.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,Z;C.parameters={...C.parameters,docs:{...(X=C.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    sizeVariant: 'large',
    shapeVariant: 'soft',
    cardSubtitle: 'Tarjeta Grande y Suave',
    cardParagraph: 'El tamaño y los bordes se ajustan según la variante.'
  }
}`,...(Z=(Y=C.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var aa,ea,ra;S.parameters={...S.parameters,docs:{...(aa=S.parameters)==null?void 0:aa.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    sizeVariant: 'medium',
    shapeVariant: 'soft',
    cardSubtitle: 'Tarjeta Mediana y Suave',
    cardParagraph: 'El tamaño y los bordes se ajustan según la variante.'
  }
}`,...(ra=(ea=S.parameters)==null?void 0:ea.docs)==null?void 0:ra.source}}};var ta,sa,oa;P.parameters={...P.parameters,docs:{...(ta=P.parameters)==null?void 0:ta.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    sizeVariant: 'small',
    shapeVariant: 'soft',
    cardSubtitle: 'Tarjeta Pequeña y Suave',
    cardParagraph: 'El tamaño y los bordes se ajustan según la variante.'
  }
}`,...(oa=(sa=P.parameters)==null?void 0:sa.docs)==null?void 0:oa.source}}};var ia,na,la;v.parameters={...v.parameters,docs:{...(ia=v.parameters)==null?void 0:ia.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    sizeVariant: 'large',
    shapeVariant: 'sharp',
    cardSubtitle: 'Tarjeta Grande y Afilada',
    cardParagraph: 'El tamaño y los bordes se ajustan según la variante.'
  }
}`,...(la=(na=v.parameters)==null?void 0:na.docs)==null?void 0:la.source}}};var da,ca,pa;x.parameters={...x.parameters,docs:{...(da=x.parameters)==null?void 0:da.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    sizeVariant: 'medium',
    shapeVariant: 'sharp',
    cardSubtitle: 'Tarjeta Mediana y Afilada',
    cardParagraph: 'El tamaño y los bordes se ajustan según la variante.'
  }
}`,...(pa=(ca=x.parameters)==null?void 0:ca.docs)==null?void 0:pa.source}}};var ua,ma,ga;T.parameters={...T.parameters,docs:{...(ua=T.parameters)==null?void 0:ua.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    sizeVariant: 'small',
    shapeVariant: 'sharp',
    cardSubtitle: 'Tarjeta Pequeña y Afilada',
    cardParagraph: 'El tamaño y los bordes se ajustan según la variante.'
  }
}`,...(ga=(ma=T.parameters)==null?void 0:ma.docs)==null?void 0:ga.source}}};const ke=["Default","CheckedState","SelectedState","WithSpecificAvatar","CheckboxDisabledState","InfoVariantCard","ErrorVariantCard","LargeSoftCard","MediumSoftCard","SmallSoftCard","LargeSharpCard","MediumSharpCard","SmallSharpCard"];export{f as CheckboxDisabledState,u as CheckedState,t as Default,b as ErrorVariantCard,h as InfoVariantCard,v as LargeSharpCard,C as LargeSoftCard,x as MediumSharpCard,S as MediumSoftCard,m as SelectedState,T as SmallSharpCard,P as SmallSoftCard,g as WithSpecificAvatar,ke as __namedExportsOrder,je as default};
