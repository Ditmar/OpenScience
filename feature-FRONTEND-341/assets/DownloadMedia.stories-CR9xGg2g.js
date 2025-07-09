import{j as n}from"./jsx-runtime-BlDnFLNC.js";import{r as f}from"./index-Cu9bd8lq.js";import{M as r}from"./MediaDownloadIcon-ChjceE8l.js";import{s as e}from"./styled-DYqe69MS.js";import{B as t}from"./Box-p8B8X2jD.js";import{k as p}from"./emotion-react.browser.esm-BMvUHC7V.js";import"./icons-Dqqr9IZ9.js";import"./index-gagdKHFB.js";import"./downloads-Dyv-uEx2.js";import"./defaultTheme-DGUDAp2c.js";import"./createTheme-Wz6RB6Fy.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-B89909lT.js";import"./index-nHByv8xN.js";import"./extends-CF3RwP-h.js";import"./generateUtilityClasses-CPRdC64H.js";import"./extendSxProp-DZpmlPTG.js";const k=p`
  from { transform: translateX(100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`,x=p`
  from { transform: translateX(0); opacity: 1; }
  to { transform: translateX(-100%); opacity: 0; }
`,y=e(t)(({theme:o})=>({display:"flex",flexDirection:"column",alignItems:"center",backgroundColor:o.customColors.primary,width:"100%",maxWidth:o.breakpoints.values.md,padding:o.spacing(2,3.125,3),margin:"0 auto",animation:`${k} 0.3s ease-in-out`,"&.slide-out":{animation:`${x} 0.3s ease-in-out`},[o.breakpoints.down("md")]:{padding:o.spacing(1.5,2,2.5)},[o.breakpoints.down("sm")]:{padding:o.spacing(1.25,1.5,2)}})),b=e(t)(({theme:o})=>({display:"flex",justifyContent:"space-between",width:"100%",padding:o.spacing(0,1),marginBottom:o.spacing(.625),zIndex:2,[o.breakpoints.down("sm")]:{padding:o.spacing(0,.5)}})),h=e(t)(({theme:o})=>({marginLeft:"-13px",[o.breakpoints.down("sm")]:{marginLeft:"-10px"}})),v=e(t)(({theme:o})=>({marginRight:"-30px",marginTop:"-14px",[o.breakpoints.down("sm")]:{marginRight:"-16px",marginTop:"-8px"}})),I=e(t)(({theme:o})=>({width:"100%",aspectRatio:"16 / 9",backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",borderRadius:0,[o.breakpoints.down("sm")]:{aspectRatio:"4 / 3"}}));function c({imageSrc:o,onSlidePrev:m,onDownload:l}){const[g,u]=f.useState(!1),w=()=>{u(!0),setTimeout(()=>{m()},300)};return n.jsxs(y,{className:g?"slide-out":"",children:[n.jsxs(b,{children:[n.jsx(h,{children:n.jsx(r,{type:"slide-left",onClick:w})}),n.jsx(v,{children:n.jsx(r,{type:"download",onClick:()=>{l()}})})]}),n.jsx(I,{style:{backgroundImage:`url(${o})`}})]})}c.__docgenInfo={description:"",methods:[],displayName:"DownloadMedia",props:{imageSrc:{required:!0,tsType:{name:"string"},description:""},onSlidePrev:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onDownload:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const z={title:"ui/components/molecules/download-media",component:c,parameters:{docs:{description:{component:"Component for previewing and downloading an image, with action controls."}}},argTypes:{imageSrc:{control:"text",description:"URL of the image to display as background"},onSlidePrev:{action:"close viewer",description:"Function triggered when clicking the back icon"},onDownload:{action:"download image",description:"Function triggered when clicking the download icon"}}},i={name:"Image viewer with controls",args:{imageSrc:"https://picsum.photos/800/600"},parameters:{viewport:{defaultViewport:"mobile1"},docs:{description:{story:"Dark background viewer component with a centered image and two icons: back and download."}}}};var a,s,d;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: 'Image viewer with controls',
  args: {
    imageSrc: 'https://picsum.photos/800/600'
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    },
    docs: {
      description: {
        story: 'Dark background viewer component with a centered image and two icons: back and download.'
      }
    }
  }
}`,...(d=(s=i.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};const F=["Default"];export{i as Default,F as __namedExportsOrder,z as default};
