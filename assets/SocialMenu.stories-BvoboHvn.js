import{j as i}from"./jsx-runtime-BlDnFLNC.js";import{r as p}from"./index-Cu9bd8lq.js";import{c as x}from"./createSvgIcon-WBtNAgIH.js";import{s as V}from"./styled-BpwaniR7.js";import{B as H}from"./Box-CuiKCkbM.js";import{I as R}from"./IconButton-DC4MdV9j.js";import"./generateUtilityClasses-CPRdC64H.js";import"./memoTheme-CoiMSXCT.js";import"./DefaultPropsProvider-15asn56a.js";import"./defaultTheme-CBhoIubE.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-B34fLoo2.js";import"./composeClasses-CAXbtk_0.js";import"./extends-CF3RwP-h.js";import"./extendSxProp-B0E1S3My.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useId-Cw7oCgN8.js";import"./ButtonBase-B2GMcfkj.js";import"./useTimeout-Bdno_bRx.js";import"./useEnhancedEffect-BAizwhs3.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-DR8r8Ogv.js";import"./emotion-react.browser.esm-66DkCD4v.js";import"./useForkRef-CXZ2Yisc.js";import"./CircularProgress-D4Sd_INY.js";const $=x(i.jsx("path",{d:"M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"})),K=x(i.jsx("path",{d:"M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"})),N=x(i.jsx("path",{d:"M16.75 13.96c.25.13.41.2.46.3.06.11.04.61-.21 1.18-.2.56-1.24 1.1-1.7 1.12-.46.02-.47.36-2.96-.73-2.49-1.09-3.99-3.75-4.11-3.92-.12-.17-.96-1.38-.92-2.61.05-1.22.69-1.8.95-2.04.24-.26.51-.29.68-.26h.47c.15 0 .36-.06.55.45l.69 1.87c.06.13.1.28.01.44l-.27.41-.39.42c-.12.12-.26.25-.12.5.12.26.62 1.09 1.32 1.78.91.88 1.71 1.17 1.95 1.3.24.14.39.12.54-.04l.81-.94c.19-.25.35-.19.58-.11l1.67.88M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10c-1.97 0-3.8-.57-5.35-1.55L2 22l1.55-4.65A9.969 9.969 0 0 1 2 12 10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8c0 1.72.54 3.31 1.46 4.61L4.5 19.5l2.89-.96A7.95 7.95 0 0 0 12 20a8 8 0 0 0 8-8 8 8 0 0 0-8-8z"})),W=V(H)(({theme:o,orientation:c,backgroundColor:a})=>({display:"flex",flexDirection:c==="vertical"?"column":"row",gap:o.spacing(0),backgroundColor:a??"#0793BF",padding:o.spacing(.5),boxShadow:o.shadows[4],zIndex:o.zIndex.fab,width:"fit-content"})),G=V(R)(({theme:o,socialType:c,size:a,backgroundColor:b})=>{const r={small:32,medium:40,large:48},d={small:32,medium:40,large:48},u=()=>{switch(c){case"whatsapp":return"#25D366";case"telegram":return"#0088cc";case"facebook":return"#1877f2";default:return o.palette.primary.main}},l=b??u(),t=u();return c==="telegram"?{width:r[a],height:r[a],backgroundColor:"#fff",color:l,margin:o.spacing(.25),border:"none",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:o.shadows[2],transition:o.transitions.create(["transform","box-shadow","background-color","color"],{duration:o.transitions.duration.short}),"& .MuiSvgIcon-root":{fontSize:d[a],color:l,transition:o.transitions.create(["color"],{duration:o.transitions.duration.short})},"&:hover":{backgroundColor:"#fff",transform:"scale(1.1)",boxShadow:o.shadows[6],"& .MuiSvgIcon-root":{color:t}},"&:focus":{backgroundColor:"#fff",outline:`2px solid ${t}`,outlineOffset:"2px","& .MuiSvgIcon-root":{color:t}},"&:active":{transform:"scale(0.95)"},"&:focus-visible":{outline:`3px solid ${t}`,outlineOffset:"2px"}}:{width:r[a],height:r[a],backgroundColor:l,color:"white",margin:o.spacing(.25),border:"none",transition:o.transitions.create(["transform","box-shadow","background-color"],{duration:o.transitions.duration.short}),"& .MuiSvgIcon-root":{fontSize:d[a],color:"white",transition:o.transitions.create(["color"],{duration:o.transitions.duration.short})},"&:hover":{backgroundColor:t,transform:"scale(1.1)",boxShadow:o.shadows[6],"& .MuiSvgIcon-root":{color:"white"}},"&:focus":{backgroundColor:t,outline:"2px solid white",outlineOffset:"2px","& .MuiSvgIcon-root":{color:"white"}},"&:active":{transform:"scale(0.95)"},"&:focus-visible":{outline:"3px solid white",outlineOffset:"2px"}}});function O({socialLinks:o,orientation:c="vertical",backgroundColor:a="#0891b2",size:b="medium",onSocialClick:r,className:d,testId:u="social-menu"}){const l=p.useCallback(e=>{switch(e){case"whatsapp":return i.jsx(N,{"aria-hidden":!0,role:"img"});case"telegram":return i.jsx(K,{"aria-hidden":!0,role:"img"});case"facebook":return i.jsx($,{"aria-hidden":!0,role:"img"});default:return null}},[]),t=p.useCallback(e=>{switch(e){case"whatsapp":return"Contactar por WhatsApp";case"telegram":return"Contactar por Telegram";case"facebook":return"Visitar página de Facebook";default:return"Red social"}},[]),S=p.useCallback((e,n)=>{n.preventDefault(),r&&r(e),window.open(e.url,"_blank","noopener,noreferrer")},[r]),_=p.useCallback((e,n)=>{(n.key==="Enter"||n.key===" ")&&(n.preventDefault(),S(e,n))},[S]);return o.length?i.jsx(W,{orientation:c,backgroundColor:a,className:d,"data-testid":u,role:"navigation",children:o.map(e=>{const n=l(e.type),E=t(e.type);return i.jsx(G,{socialType:e.type,size:b,backgroundColor:a,onClick:k=>{S(e,k)},onKeyDown:k=>{_(e,k)},"data-testid":`social-link-${e.type}`,tabIndex:0,role:"button","aria-label":E,children:n},e.id)})}):null}O.__docgenInfo={description:"",methods:[],displayName:"SocialMenu",props:{socialLinks:{required:!0,tsType:{name:"Array",elements:[{name:"ISocialLink"}],raw:"ISocialLink[]"},description:""},orientation:{required:!1,tsType:{name:"union",raw:"'vertical' | 'horizontal'",elements:[{name:"literal",value:"'vertical'"},{name:"literal",value:"'horizontal'"}]},description:"",defaultValue:{value:"'vertical'",computed:!1}},backgroundColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#0891b2'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},onSocialClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(socialLink: ISocialLink) => void",signature:{arguments:[{type:{name:"ISocialLink"},name:"socialLink"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},testId:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'social-menu'",computed:!1}}}};const J=[{id:"whatsapp",type:"whatsapp",url:"https://wa.me/1234567890"},{id:"telegram",type:"telegram",url:"https://t.me/username"},{id:"facebook",type:"facebook",url:"https://facebook.com/page"}],ko={title:"library/component/molecules/social-menu",component:O,argTypes:{socialLinks:{description:"Array de enlaces sociales a mostrar",control:"object"},orientation:{description:"Orientación del menú",control:"select",options:["vertical","horizontal"]},backgroundColor:{description:"Color de fondo del contenedor (los iconos adoptarán este color)",control:"color"},size:{description:"Tamaño de los iconos",control:"select",options:["small","medium","large"]},onSocialClick:{description:"Callback cuando se hace clic en un enlace social",action:"socialClick"}}},s={args:{socialLinks:J,orientation:"vertical",backgroundColor:"#0793BF",size:"medium",onSocialClick:o=>{console.log("Social click:",o)}}},m={args:{...s.args,orientation:"horizontal"},parameters:{docs:{description:{story:"Menú con orientación horizontal."}}}},g={args:{...s.args,size:"small"},parameters:{docs:{description:{story:"Iconos de tamaño pequeño."}}}},f={args:{...s.args,size:"medium"},parameters:{docs:{description:{story:"Iconos de tamaño medio."}}}},h={args:{...s.args,size:"large"},parameters:{docs:{description:{story:"Iconos de tamaño grande."}}}};var y,v,w;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    socialLinks: defaultSocialLinks,
    orientation: 'vertical',
    backgroundColor: '#0793BF',
    size: 'medium',
    onSocialClick: socialLink => {
      console.log('Social click:', socialLink);
    }
  }
}`,...(w=(v=s.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var I,z,C;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(C=(z=m.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};var M,L,j;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(j=(L=g.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};var D,F,T;f.parameters={...f.parameters,docs:{...(D=f.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(T=(F=f.parameters)==null?void 0:F.docs)==null?void 0:T.source}}};var q,A,B;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(B=(A=h.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};const xo=["Default","Horizontal","SmallSize","MediumSize","LargeSize"];export{s as Default,m as Horizontal,h as LargeSize,f as MediumSize,g as SmallSize,xo as __namedExportsOrder,ko as default};
