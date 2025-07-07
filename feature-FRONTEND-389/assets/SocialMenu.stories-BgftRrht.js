import{j as i}from"./jsx-runtime-BlDnFLNC.js";import{r as S}from"./index-Cu9bd8lq.js";import{c as w}from"./createSvgIcon-WBtNAgIH.js";import{s as E}from"./styled-BpwaniR7.js";import{B as R}from"./Box-CuiKCkbM.js";import{I as $}from"./IconButton-DC4MdV9j.js";import"./generateUtilityClasses-CPRdC64H.js";import"./memoTheme-CoiMSXCT.js";import"./DefaultPropsProvider-15asn56a.js";import"./defaultTheme-CBhoIubE.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-B34fLoo2.js";import"./composeClasses-CAXbtk_0.js";import"./extends-CF3RwP-h.js";import"./extendSxProp-B0E1S3My.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useId-Cw7oCgN8.js";import"./ButtonBase-B2GMcfkj.js";import"./useTimeout-Bdno_bRx.js";import"./useEnhancedEffect-BAizwhs3.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-DR8r8Ogv.js";import"./emotion-react.browser.esm-66DkCD4v.js";import"./useForkRef-CXZ2Yisc.js";import"./CircularProgress-D4Sd_INY.js";const K=w(i.jsx("path",{d:"M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"})),N=w(i.jsx("path",{d:"M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"})),W=w(i.jsx("path",{d:"M16.75 13.96c.25.13.41.2.46.3.06.11.04.61-.21 1.18-.2.56-1.24 1.1-1.7 1.12-.46.02-.47.36-2.96-.73-2.49-1.09-3.99-3.75-4.11-3.92-.12-.17-.96-1.38-.92-2.61.05-1.22.69-1.8.95-2.04.24-.26.51-.29.68-.26h.47c.15 0 .36-.06.55.45l.69 1.87c.06.13.1.28.01.44l-.27.41-.39.42c-.12.12-.26.25-.12.5.12.26.62 1.09 1.32 1.78.91.88 1.71 1.17 1.95 1.3.24.14.39.12.54-.04l.81-.94c.19-.25.35-.19.58-.11l1.67.88M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10c-1.97 0-3.8-.57-5.35-1.55L2 22l1.55-4.65A9.969 9.969 0 0 1 2 12 10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8c0 1.72.54 3.31 1.46 4.61L4.5 19.5l2.89-.96A7.95 7.95 0 0 0 12 20a8 8 0 0 0 8-8 8 8 0 0 0-8-8z"})),c={colors:{main:"#fff",tertiary:"#3994ff",quintary_main:"#0793bf",green_main:"#23c965",brand_bg:"#007bff"}},G=E(R)(({theme:o,orientation:l,backgroundColor:r})=>{var d;return{display:"flex",flexDirection:l==="vertical"?"column":"row",gap:o.spacing(0),backgroundColor:r??((d=c.colors)==null?void 0:d.quintary_main),padding:o.spacing(.5),boxShadow:o.shadows[4],zIndex:o.zIndex.fab,width:"fit-content"}}),J=E($)(({theme:o,socialType:l,size:r,backgroundColor:d})=>{var u,b,e;const n={small:32,medium:40,large:48},g={small:32,medium:40,large:48},f=()=>{var a,h,m;switch(l){case"whatsapp":return(a=c.colors)==null?void 0:a.green_main;case"telegram":return(h=c.colors)==null?void 0:h.tertiary;case"facebook":return(m=c.colors)==null?void 0:m.brand_bg;default:return o.palette.primary.main}},p=d??f(),t=f();return l==="telegram"?{width:n[r],height:n[r],backgroundColor:(u=c.colors)==null?void 0:u.main,color:p,margin:o.spacing(.25),border:"none",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:o.shadows[2],transition:o.transitions.create(["transform","box-shadow","background-color","color"],{duration:o.transitions.duration.short}),"& .MuiSvgIcon-root":{fontSize:g[r],color:p,transition:o.transitions.create(["color"],{duration:o.transitions.duration.short})},"&:hover":{backgroundColor:(b=c.colors)==null?void 0:b.main,transform:"scale(1.1)",boxShadow:o.shadows[6],"& .MuiSvgIcon-root":{color:t}},"&:focus":{backgroundColor:(e=c.colors)==null?void 0:e.main,outline:`2px solid ${t??""}`,outlineOffset:"2px","& .MuiSvgIcon-root":{color:t}},"&:active":{transform:"scale(0.95)"},"&:focus-visible":{outline:`3px solid ${t??""}`,outlineOffset:"2px"}}:{width:n[r],height:n[r],backgroundColor:p,color:"white",margin:o.spacing(.25),border:"none",transition:o.transitions.create(["transform","box-shadow","background-color"],{duration:o.transitions.duration.short}),"& .MuiSvgIcon-root":{fontSize:g[r],color:"white",transition:o.transitions.create(["color"],{duration:o.transitions.duration.short})},"&:hover":{backgroundColor:t,transform:"scale(1.1)",boxShadow:o.shadows[6],"& .MuiSvgIcon-root":{color:"white"}},"&:focus":{backgroundColor:t,outline:"2px solid white",outlineOffset:"2px","& .MuiSvgIcon-root":{color:"white"}},"&:active":{transform:"scale(0.95)"},"&:focus-visible":{outline:"3px solid white",outlineOffset:"2px"}}});function H({socialLinks:o,orientation:l="vertical",backgroundColor:r="#0891b2",size:d="medium",onSocialClick:n,className:g,testId:f="social-menu"}){const p=S.useCallback(e=>{switch(e){case"whatsapp":return i.jsx(W,{"aria-hidden":!0,role:"img"});case"telegram":return i.jsx(N,{"aria-hidden":!0,role:"img"});case"facebook":return i.jsx(K,{"aria-hidden":!0,role:"img"});default:return null}},[]),t=S.useCallback(e=>{switch(e){case"whatsapp":return"Contactar por WhatsApp";case"telegram":return"Contactar por Telegram";case"facebook":return"Visitar página de Facebook";default:return"Red social"}},[]),u=S.useCallback((e,a)=>{a.preventDefault(),n&&n(e),window.open(e.url,"_blank","noopener,noreferrer")},[n]),b=S.useCallback((e,a)=>{(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),u(e,a))},[u]);return o.length?i.jsx(G,{orientation:l,backgroundColor:r,className:g,"data-testid":f,role:"navigation",children:o.map(e=>{const a=p(e.type),h=t(e.type);return i.jsx(J,{socialType:e.type,size:d,backgroundColor:r,onClick:m=>{u(e,m)},onKeyDown:m=>{b(e,m)},"data-testid":`social-link-${e.type}`,tabIndex:0,role:"button","aria-label":h,children:a},e.id)})}):null}H.__docgenInfo={description:"",methods:[],displayName:"SocialMenu",props:{socialLinks:{required:!0,tsType:{name:"Array",elements:[{name:"ISocialLink"}],raw:"ISocialLink[]"},description:""},orientation:{required:!1,tsType:{name:"union",raw:"'vertical' | 'horizontal'",elements:[{name:"literal",value:"'vertical'"},{name:"literal",value:"'horizontal'"}]},description:"",defaultValue:{value:"'vertical'",computed:!1}},backgroundColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#0891b2'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},onSocialClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(socialLink: ISocialLink) => void",signature:{arguments:[{type:{name:"ISocialLink"},name:"socialLink"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},testId:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'social-menu'",computed:!1}}}};const P=[{id:"whatsapp",type:"whatsapp",url:"https://wa.me/1234567890"},{id:"telegram",type:"telegram",url:"https://t.me/username"},{id:"facebook",type:"facebook",url:"https://facebook.com/page"}],yo={title:"library/component/molecules/social-menu",component:H,argTypes:{socialLinks:{description:"Array de enlaces sociales a mostrar",control:"object"},orientation:{description:"Orientación del menú",control:"select",options:["vertical","horizontal"]},backgroundColor:{description:"Color de fondo del contenedor (los iconos adoptarán este color)",control:"color"},size:{description:"Tamaño de los iconos",control:"select",options:["small","medium","large"]},onSocialClick:{description:"Callback cuando se hace clic en un enlace social",action:"socialClick"}}},s={args:{socialLinks:P,orientation:"vertical",backgroundColor:"#0793BF",size:"medium",onSocialClick:o=>{console.log("Social click:",o)}}},k={args:{...s.args,orientation:"horizontal"},parameters:{docs:{description:{story:"Menú con orientación horizontal."}}}},y={args:{...s.args,size:"small"},parameters:{docs:{description:{story:"Iconos de tamaño pequeño."}}}},x={args:{...s.args,size:"medium"},parameters:{docs:{description:{story:"Iconos de tamaño medio."}}}},v={args:{...s.args,size:"large"},parameters:{docs:{description:{story:"Iconos de tamaño grande."}}}};var I,z,C;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    socialLinks: defaultSocialLinks,
    orientation: 'vertical',
    backgroundColor: '#0793BF',
    size: 'medium',
    onSocialClick: socialLink => {
      console.log('Social click:', socialLink);
    }
  }
}`,...(C=(z=s.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};var M,L,j;k.parameters={...k.parameters,docs:{...(M=k.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    orientation: 'horizontal'
  },
  parameters: {
    docs: {
      description: {
        story: 'Menú con orientación horizontal.'
      }
    }
  }
}`,...(j=(L=k.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};var q,D,T;y.parameters={...y.parameters,docs:{...(q=y.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    size: 'small'
  },
  parameters: {
    docs: {
      description: {
        story: 'Iconos de tamaño pequeño.'
      }
    }
  }
}`,...(T=(D=y.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var _,F,A;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    size: 'medium'
  },
  parameters: {
    docs: {
      description: {
        story: 'Iconos de tamaño medio.'
      }
    }
  }
}`,...(A=(F=x.parameters)==null?void 0:F.docs)==null?void 0:A.source}}};var V,B,O;v.parameters={...v.parameters,docs:{...(V=v.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    size: 'large'
  },
  parameters: {
    docs: {
      description: {
        story: 'Iconos de tamaño grande.'
      }
    }
  }
}`,...(O=(B=v.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};const xo=["Default","Horizontal","SmallSize","MediumSize","LargeSize"];export{s as Default,k as Horizontal,v as LargeSize,x as MediumSize,y as SmallSize,xo as __namedExportsOrder,yo as default};
