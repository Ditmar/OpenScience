import{j as t}from"./jsx-runtime-BlDnFLNC.js";import{r as d}from"./index-Cu9bd8lq.js";import{c as y}from"./createSvgIcon-CF2xXwCG.js";import{s as V}from"./styled-6ifOyR1L.js";import{B as O}from"./Box-D6FQTajw.js";import{I as R}from"./IconButton-CsRQ5ZBh.js";import"./memoTheme-CZevBdZq.js";import"./DefaultPropsProvider-15asn56a.js";import"./defaultTheme-DE093_V4.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-B34fLoo2.js";import"./extends-CF3RwP-h.js";import"./extendSxProp-ynIqH0KL.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useId-Cw7oCgN8.js";import"./ButtonBase-CEtuOlsw.js";import"./useTimeout-BPiCGVvU.js";import"./useEnhancedEffect-BAizwhs3.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-DR8r8Ogv.js";import"./emotion-react.browser.esm-DG_Tg3Qu.js";import"./useForkRef-CXZ2Yisc.js";import"./CircularProgress-CiRrUr3y.js";const K=y(t.jsx("path",{d:"M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"})),N=y(t.jsx("path",{d:"M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"})),W=y(t.jsx("path",{d:"M16.75 13.96c.25.13.41.2.46.3.06.11.04.61-.21 1.18-.2.56-1.24 1.1-1.7 1.12-.46.02-.47.36-2.96-.73-2.49-1.09-3.99-3.75-4.11-3.92-.12-.17-.96-1.38-.92-2.61.05-1.22.69-1.8.95-2.04.24-.26.51-.29.68-.26h.47c.15 0 .36-.06.55.45l.69 1.87c.06.13.1.28.01.44l-.27.41-.39.42c-.12.12-.26.25-.12.5.12.26.62 1.09 1.32 1.78.91.88 1.71 1.17 1.95 1.3.24.14.39.12.54-.04l.81-.94c.19-.25.35-.19.58-.11l1.67.88M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10c-1.97 0-3.8-.57-5.35-1.55L2 22l1.55-4.65A9.969 9.969 0 0 1 2 12 10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8c0 1.72.54 3.31 1.46 4.61L4.5 19.5l2.89-.96A7.95 7.95 0 0 0 12 20a8 8 0 0 0 8-8 8 8 0 0 0-8-8z"})),$=V(O)(({theme:e,orientation:i,backgroundColor:a})=>({display:"flex",flexDirection:i==="vertical"?"column":"row",gap:e.spacing(0),backgroundColor:a??"#0793BF",padding:e.spacing(.5),boxShadow:e.shadows[4],zIndex:e.zIndex.fab,width:"fit-content"})),G=V(R)(({theme:e,socialType:i,size:a,backgroundColor:f})=>{const s={small:32,medium:40,large:48},h={small:32,medium:40,large:48},c=()=>{switch(i){case"whatsapp":return"#25D366";case"telegram":return"#0088cc";case"facebook":return"#1877f2";default:return e.palette.primary.main}},S=f??c(),l=c();return{width:s[a],height:s[a],backgroundColor:S,color:"white",margin:e.spacing(.25),border:"none",transition:e.transitions.create(["transform","box-shadow","background-color"],{duration:e.transitions.duration.short}),"& .MuiSvgIcon-root":{fontSize:h[a],color:"white",transition:e.transitions.create(["color"],{duration:e.transitions.duration.short})},"&:hover":{backgroundColor:l,transform:"scale(1.1)",boxShadow:e.shadows[6],"& .MuiSvgIcon-root":{color:"white"}},"&:focus":{backgroundColor:l,outline:"2px solid white",outlineOffset:"2px","& .MuiSvgIcon-root":{color:"white"}},"&:active":{transform:"scale(0.95)"},"&:focus-visible":{outline:"3px solid white",outlineOffset:"2px"}}});function _({socialLinks:e,orientation:i="vertical",backgroundColor:a="#0891b2",size:f="medium",onSocialClick:s,className:h,testId:c="social-menu"}){const S=d.useCallback(o=>{switch(o){case"whatsapp":return t.jsx(W,{"aria-hidden":!0,role:"img"});case"telegram":return t.jsx(N,{"aria-hidden":!0,role:"img"});case"facebook":return t.jsx(K,{"aria-hidden":!0,role:"img"});default:return null}},[]),l=d.useCallback(o=>{switch(o){case"whatsapp":return"Contactar por WhatsApp";case"telegram":return"Contactar por Telegram";case"facebook":return"Visitar página de Facebook";default:return"Red social"}},[]),b=d.useCallback((o,r)=>{r.preventDefault(),s&&s(o),window.open(o.url,"_blank","noopener,noreferrer")},[s]),E=d.useCallback((o,r)=>{(r.key==="Enter"||r.key===" ")&&(r.preventDefault(),b(o,r))},[b]);return e.length?t.jsx($,{orientation:i,backgroundColor:a,className:h,"data-testid":c,role:"navigation",children:e.map(o=>{const r=S(o.type),H=l(o.type);return t.jsx(G,{socialType:o.type,size:f,backgroundColor:a,onClick:k=>{b(o,k)},onKeyDown:k=>{E(o,k)},"data-testid":`social-link-${o.type}`,tabIndex:0,role:"button","aria-label":H,children:r},o.id)})}):null}_.__docgenInfo={description:"",methods:[],displayName:"SocialMenu",props:{socialLinks:{required:!0,tsType:{name:"Array",elements:[{name:"ISocialLink"}],raw:"ISocialLink[]"},description:""},orientation:{required:!1,tsType:{name:"union",raw:"'vertical' | 'horizontal'",elements:[{name:"literal",value:"'vertical'"},{name:"literal",value:"'horizontal'"}]},description:"",defaultValue:{value:"'vertical'",computed:!1}},backgroundColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#0891b2'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},onSocialClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(socialLink: ISocialLink) => void",signature:{arguments:[{type:{name:"ISocialLink"},name:"socialLink"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},testId:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'social-menu'",computed:!1}}}};const J=[{id:"whatsapp",type:"whatsapp",url:"https://wa.me/1234567890"},{id:"telegram",type:"telegram",url:"https://t.me/username"},{id:"facebook",type:"facebook",url:"https://facebook.com/page"}],he={title:"library/component/molecules/social-menu",component:_,argTypes:{socialLinks:{description:"Array de enlaces sociales a mostrar",control:"object"},orientation:{description:"Orientación del menú",control:"select",options:["vertical","horizontal"]},backgroundColor:{description:"Color de fondo del contenedor (los iconos adoptarán este color)",control:"color"},size:{description:"Tamaño de los iconos",control:"select",options:["small","medium","large"]},onSocialClick:{description:"Callback cuando se hace clic en un enlace social",action:"socialClick"}}},n={args:{socialLinks:J,orientation:"vertical",backgroundColor:"#0793BF",size:"medium",onSocialClick:e=>{console.log("Social click:",e)}}},m={args:{...n.args,orientation:"horizontal"},parameters:{docs:{description:{story:"Menú con orientación horizontal."}}}},p={args:{...n.args,size:"small"},parameters:{docs:{description:{story:"Iconos de tamaño pequeño."}}}},u={args:{...n.args,size:"medium"},parameters:{docs:{description:{story:"Iconos de tamaño medio."}}}},g={args:{...n.args,size:"large"},parameters:{docs:{description:{story:"Iconos de tamaño grande."}}}};var x,v,w;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    socialLinks: defaultSocialLinks,
    orientation: 'vertical',
    backgroundColor: '#0793BF',
    size: 'medium',
    onSocialClick: socialLink => {
      console.log('Social click:', socialLink);
    }
  }
}`,...(w=(v=n.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var z,I,C;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(C=(I=m.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};var M,L,D;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(D=(L=p.parameters)==null?void 0:L.docs)==null?void 0:D.source}}};var T,j,F;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(F=(j=u.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};var q,A,B;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(B=(A=g.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};const Se=["Default","Horizontal","SmallSize","MediumSize","LargeSize"];export{n as Default,m as Horizontal,g as LargeSize,u as MediumSize,p as SmallSize,Se as __namedExportsOrder,he as default};
