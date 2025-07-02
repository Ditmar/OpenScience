import{j as f}from"./jsx-runtime-BlDnFLNC.js";import{r as M}from"./index-Cu9bd8lq.js";import{P as E}from"./pills-D_xzbIFP.js";import{A as be}from"./AvatarBagde-XSg4ruT2.js";import{T as ye}from"./Text-2mtBCo8y.js";import{I as $}from"./Icon-DoGr0OBa.js";import{c as he,b as xe,g as _e,s as Ce}from"./memoTheme-XcmwsCMw.js";import{s as ke,u as Se}from"./useThemeProps-ByWy5i0S.js";import{e as qe}from"./index-DxYIxQXt.js";import{h as A,e as z,f as Te,g as Ve,m as Ie,i as we,j as N,u as Re}from"./DefaultPropsProvider-DIORAReT.js";import"./icons-Dqqr9IZ9.js";import"./index-gagdKHFB.js";import"./Avatar-CExaWYmZ.js";import"./createSvgIcon-DAWjQAaw.js";import"./useSlot-RVLin6pT.js";import"./Typography-DtojbDW_.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./iframe-QTDNcaaL.js";import"../sb-preview/runtime.js";import"./dynamic-import-helper-BheWnx7M.js";import"./ThemeProvider-CPtElHuU.js";import"./default-BNfX1RYr.js";import"./index-BaAsS3ug.js";import"./useEnhancedEffect-BAizwhs3.js";import"./Box-B598QE70.js";import"./CircularProgress-DO1RgK5Z.js";import"./emotion-react.browser.esm-aHRbi0Hj.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-B34fLoo2.js";import"./extends-CF3RwP-h.js";const Fe=we(),je=ke("div",{name:"MuiStack",slot:"Root"});function De(e){return Se({props:e,name:"MuiStack",defaultTheme:Fe})}function Le(e,n){const t=M.Children.toArray(e).filter(Boolean);return t.reduce((a,m,s)=>(a.push(m),s<t.length-1&&a.push(M.cloneElement(n,{key:`separator-${s}`})),a),[])}const ze=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],Me=({ownerState:e,theme:n})=>{let t={display:"flex",flexDirection:"column",...A({theme:n},z({values:e.direction,breakpoints:n.breakpoints.values}),a=>({flexDirection:a}))};if(e.spacing){const a=Te(n),m=Object.keys(n.breakpoints.values).reduce((r,o)=>((typeof e.spacing=="object"&&e.spacing[o]!=null||typeof e.direction=="object"&&e.direction[o]!=null)&&(r[o]=!0),r),{}),s=z({values:e.direction,base:m}),v=z({values:e.spacing,base:m});typeof s=="object"&&Object.keys(s).forEach((r,o,c)=>{if(!s[r]){const b=o>0?s[c[o-1]]:"column";s[r]=b}}),t=Ve(t,A({theme:n},v,(r,o)=>e.useFlexGap?{gap:N(a,r)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${ze(o?s[o]:e.direction)}`]:N(a,r)}}))}return t=Ie(n.breakpoints,t),t};function Be(e={}){const{createStyledComponent:n=je,useThemeProps:t=De,componentName:a="MuiStack"}=e,m=()=>xe({root:["root"]},r=>_e(a,r),{}),s=n(Me);return M.forwardRef(function(r,o){const c=t(r),g=qe(c),{component:b="div",direction:l="column",spacing:i=0,divider:x,children:_,className:F,useFlexGap:j=!1,...D}=g,L={direction:l,spacing:i,useFlexGap:j},d=m();return f.jsx(s,{as:b,ownerState:L,ref:o,className:he(d.root,F),...D,children:x?Le(_,x):_})})}const Pe=Be({createStyledComponent:Ce("div",{name:"MuiStack",slot:"Root"}),useThemeProps:e=>Re({props:e,name:"MuiStack"})}),Ee="_badge__icon_1goqr_123",$e="_badge__counter_1goqr_135",p={badge__icon:Ee,"badge--filled":"_badge--filled_1goqr_130","badge--violet":"_badge--violet_1goqr_130",badge__counter:$e,"badge--blue":"_badge--blue_1goqr_138","badge--gray":"_badge--gray_1goqr_146","badge--outline":"_badge--outline_1goqr_154","badge--soft":"_badge--soft_1goqr_182","badge__icon--x":"_badge__icon--x_1goqr_195","icon--small":"_icon--small_1goqr_202","icon--medium":"_icon--medium_1goqr_207","icon--large":"_icon--large_1goqr_212"},Ae=e=>{switch(e){case"small":return"0.75rem";case"medium":return"1rem";case"large":return"1.125rem";default:return"1rem"}},Ne=e=>{switch(e){case"small":return"sm";case"medium":return"md";case"large":return"lg";default:return"md"}},U=e=>{switch(e){case"small":return"sm";case"medium":return"md";case"large":return"lg";default:return"md"}},Ue={neutral:"neutral-dark",gray:"neutral-dark",violet:"brand-secondary",blue:"brand-primary",custom:"neutral-dark",primary:"brand-primary",secondary:"neutral-dark",success:"feedback-positive",danger:"feedback-negative",warning:"feedback-warning",info:"brand-tertiary",default:"neutral-dark"},W=(e,n)=>{const t=e;return t==="custom"?"neutral-dark":n==="filled"&&(t==="neutral"||t==="gray")?"neutral-light":Ue[t]},ge={primary:"#0d6efd",secondary:"#6c757d",success:"#198754",danger:"#dc3545",warning:"#ffc107",info:"#0dcaf0",neutral:"#6c757d",gray:"#6c757d",violet:"#9a4aff",blue:"#3994ff",default:"#000",custom:"#6c757d"},B=(e,n,t)=>{const a=n,m=a==="custom"&&t?t:ge[a];return e==="filled"?a==="neutral"||a==="gray"?"#fff":"#000":m},k=(e,n,t)=>B(e,n,t);function ve({avatarSrc:e,text:n="Badge Text",showAvatar:t=!0,size:a="medium",bold:m=!1,onRemove:s,onClick:v,className:h="",variant:r="filled",color:o="neutral",customColor:c,shape:g="default",showLeadingIcon:b=!1,leftPillProps:l,rightPillProps:i,showRemoveIcon:x=!0}){const _=d=>{d.stopPropagation(),s&&s(d)},F=(d="medium")=>p[`icon--${d}`],j=()=>{const d={display:"inline-flex",cursor:v?"pointer":"default",padding:a==="small"?"0.125rem 0.375rem":"0.25rem 0.5rem",borderRadius:g==="rounded"?"8px":"0px",transition:"all 0.2s ease",fontFamily:"Poppins, sans-serif",fontSize:Ae(a),gap:"0.25rem",alignItems:"center"},C=o,y=C==="custom"&&c?c:ge[C];switch(r){case"filled":return{...d,backgroundColor:C==="neutral"?"#000":y,color:C==="neutral"?"#fff":"#000",border:"1px solid transparent"};case"outline":return{...d,backgroundColor:"transparent",color:y,border:`1px solid ${y}`};case"soft":{const P=`${y}20`;return{...d,backgroundColor:P,color:y,border:"1px solid transparent"}}default:return{...d}}},D=Ne(a),L=[p.badge,p[`badge--${r}`],p[`badge--${o}`],g==="rounded"?p["badge--rounded"]:"",p[`badge--${D}`],h].filter(Boolean).join(" ");return f.jsxs(Pe,{"aria-label":`Badge de ${n}`,direction:"row",onClick:v,className:L,sx:{...j(),color:B(r,o,c)},"data-testid":"avatar-badge-item",children:[b&&f.jsx($,{iconName:"circle-quarters",className:`${p.badge__icon} ${F(a)}`,strokeWidth:"0",stroke:k(r,o,c),color:k(r,o,c)}),l&&f.jsx(E,{text:l.text,icon:l.icon,size:l.size??U(a),color:l.color??W(o,r),variant:l.variant,rounded:l.rounded,shadow:l.shadow,stroke:l.stroke,iconPosition:l.iconPosition,ariaLabel:l.ariaLabel}),t&&e&&f.jsx(be,{shape:g,src:e,size:a,"aria-label":"Avatar","data-testid":"avatar"}),f.jsx(ye,{text:n,size:a,bold:m?"bold":"regular",style:{color:B(r,o,c)}}),i&&f.jsx(E,{text:i.text,icon:i.icon,size:i.size??U(a),color:i.color??W(o,r),variant:i.variant,rounded:i.rounded,shadow:i.shadow,stroke:i.stroke,iconPosition:i.iconPosition,ariaLabel:i.ariaLabel}),x&&s&&f.jsx($,{onClick:_,iconName:"Close-URL",className:p["badge__icon--x"],width:"16",height:"16",stroke:k(r,o,c),color:k(r,o,c)})]})}ve.__docgenInfo={description:"",methods:[],displayName:"AvatarBadgeItem",props:{avatarSrc:{required:!1,tsType:{name:"string"},description:""},text:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Badge Text'",computed:!1}},showAvatar:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},bold:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"event"}],return:{name:"void"}}},description:""},onClick:{required:!1,tsType:{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'filled' | 'outline' | 'soft'",elements:[{name:"literal",value:"'filled'"},{name:"literal",value:"'outline'"},{name:"literal",value:"'soft'"}]},description:"",defaultValue:{value:"'filled'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'neutral' | 'gray' | 'violet' | 'blue' | 'custom'",elements:[{name:"literal",value:"'neutral'"},{name:"literal",value:"'gray'"},{name:"literal",value:"'violet'"},{name:"literal",value:"'blue'"},{name:"literal",value:"'custom'"}]},description:"",defaultValue:{value:"'neutral'",computed:!1}},customColor:{required:!1,tsType:{name:"string"},description:""},shape:{required:!1,tsType:{name:"union",raw:"'default' | 'rounded'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'rounded'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},showLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},leftPillProps:{required:!1,tsType:{name:"PillProps"},description:""},rightPillProps:{required:!1,tsType:{name:"PillProps"},description:""},showRemoveIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const xa={title:"ui/components/molecules/badges",component:ve,argTypes:{avatarSrc:{control:"text",description:"URL de la imagen del avatar. Si se proporciona, el avatar será visible."},text:{control:"text",description:"Texto principal del badge."},size:{control:"radio",options:["small","medium","large"],defaultValue:"medium",description:"Tamaño del componente."},bold:{control:"boolean",defaultValue:!1,description:"Define si el texto debe ser negrita."},showAvatar:{control:"boolean",defaultValue:!0,description:"Muestra/oculta el avatar."},variant:{control:"radio",options:["filled","outline","soft"],defaultValue:"filled",description:"Variante de estilo del badge."},color:{control:"radio",options:["neutral","gray","violet","blue","custom"],defaultValue:"neutral",description:"Color del badge."},customColor:{control:"color",if:{arg:"color",eq:"custom"},description:'Color personalizado cuando la prop `color` se establece en "custom".'},shape:{control:"radio",options:["default","rounded"],defaultValue:"default",description:"Forma de las esquinas del badge."},onRemove:{action:"removed",description:"Callback que se dispara cuando se hace clic en el botón de eliminar."},onClick:{action:"clicked",description:"Callback que se dispara cuando se hace clic en el badge."},showLeadingIcon:{control:"boolean",defaultValue:!1,description:"Controla la visibilidad del icono principal a la izquierda del badge."},leftPillProps:{control:"object",description:"Propiedades para el componente Pill izquierdo."},rightPillProps:{control:"object",description:"Propiedades para el componente Pill derecho."},showRemoveIcon:{control:"boolean",defaultValue:!0,description:'Controla la visibilidad del icono de "cerrar" a la derecha del badge.'}}},u={args:{avatarSrc:"https://i.pravatar.cc/150?img=1",text:"Usuario Activo",showLeadingIcon:!0,leftPillProps:{text:"100",color:"neutral-dark",variant:"filled",size:"sm"},rightPillProps:{text:"100",color:"neutral-dark",variant:"filled",size:"sm"},showRemoveIcon:!0,color:"custom",customColor:"#FFFFFF"}},S={args:{...u.args,avatarSrc:"https://i.pravatar.cc/150?img=3",variant:"outline"}},q={args:{...u.args,avatarSrc:"https://i.pravatar.cc/150?img=5",variant:"soft",color:"violet"}},T={args:{...u.args,avatarSrc:"https://i.pravatar.cc/150?img=7",shape:"rounded"}},V={args:{...u.args,avatarSrc:"https://i.pravatar.cc/150?img=9",color:"custom",customColor:"#ffeb3b"}},I={args:{...u.args,avatarSrc:"https://i.pravatar.cc/150?img=11",text:"Items en Carrito",leftPillProps:{text:"5",color:"brand-tertiary",variant:"filled",size:"sm"},rightPillProps:{text:"10",color:"feedback-positive",variant:"filled",size:"sm"}}},w={args:{...u.args,avatarSrc:void 0,showLeadingIcon:!0,text:"Con Icono"}},R={args:{...u.args,text:"Sin Remover",showRemoveIcon:!1}};var O,H,G;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(G=(H=u.parameters)==null?void 0:H.docs)==null?void 0:G.source}}};var K,J,Q;S.parameters={...S.parameters,docs:{...(K=S.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    avatarSrc: 'https://i.pravatar.cc/150?img=3',
    variant: 'outline'
  }
}`,...(Q=(J=S.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Y,Z;q.parameters={...q.parameters,docs:{...(X=q.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    avatarSrc: 'https://i.pravatar.cc/150?img=5',
    variant: 'soft',
    color: 'violet'
  }
}`,...(Z=(Y=q.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ae,re;T.parameters={...T.parameters,docs:{...(ee=T.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    avatarSrc: 'https://i.pravatar.cc/150?img=7',
    shape: 'rounded'
  }
}`,...(re=(ae=T.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var te,oe,ne;V.parameters={...V.parameters,docs:{...(te=V.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    avatarSrc: 'https://i.pravatar.cc/150?img=9',
    color: 'custom',
    customColor: '#ffeb3b'
  }
}`,...(ne=(oe=V.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var se,le,ie;I.parameters={...I.parameters,docs:{...(se=I.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ie=(le=I.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var ce,de,ue;w.parameters={...w.parameters,docs:{...(ce=w.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    avatarSrc: undefined,
    showLeadingIcon: true,
    text: 'Con Icono'
  }
}`,...(ue=(de=w.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var me,pe,fe;R.parameters={...R.parameters,docs:{...(me=R.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    text: 'Sin Remover',
    showRemoveIcon: false
  }
}`,...(fe=(pe=R.parameters)==null?void 0:pe.docs)==null?void 0:fe.source}}};const _a=["Default","OutlineVariant","SoftViolet","RoundedShape","CustomColor","WithPills","WithLeadingIcon","WithoutRemoveIcon"];export{V as CustomColor,u as Default,S as OutlineVariant,T as RoundedShape,q as SoftViolet,w as WithLeadingIcon,I as WithPills,R as WithoutRemoveIcon,_a as __namedExportsOrder,xa as default};
