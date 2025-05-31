import{j as e}from"./jsx-runtime-DRTy3Uxn.js";import{r as d}from"./index-BBkUAzwr.js";import{T as N}from"./Thumbnail-DpSAko2V.js";import{A as T}from"./ArticleDescription-CVWRmM6X.js";import{A as E}from"./ArticleTitle-DoW1EcQU.js";import{L as b}from"./LabelRecentsArticles-rzfsxOfO.js";import{P as l}from"./PointsDivider-BQoymrf3.js";import{V as m}from"./VariableButton-Dn340v-_.js";import{A as L}from"./AuthorLabel-xel2NJbp.js";import{L as I}from"./LabelDate-DxzfQWbb.js";import{P as w}from"./pdf-CD9LdSfp.js";import{L as S}from"./share-DLYQ_wML.js";import"./icons-DNNtq2Yd.js";import"./index-YMbfICiA.js";const j="480px",R="768px",y="1024px",C={small:j,"small-mobile":"320px","small-mobile-large":"568px",medium:R,large:y,"large-tablet":"1112px","extra-large":"1280px"};function v({backgroundImageDesktop:t,backgroundImageMobile:s,children:x}){const[f,c]=d.useState(t);return d.useEffect(()=>{const h=C.medium,a=window.matchMedia(`(max-width: ${h})`),r=A=>{A.matches?c(s):c(t)};return r(a),a.addEventListener("change",r),()=>{a.removeEventListener("change",r)}},[t,s]),e.jsxs("div",{className:"body",children:[e.jsx("div",{className:"featured-article",children:x}),e.jsx("div",{className:"image",children:e.jsx(N,{pathImage:f})})]})}v.__docgenInfo={description:"",methods:[],displayName:"SectiontwoPage",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},backgroundImageDesktop:{required:!0,tsType:{name:"string"},description:""},backgroundImageMobile:{required:!0,tsType:{name:"string"},description:""}}};const n=""+new URL("secctiontwo-Cm0hQ2vP.svg",import.meta.url).href,o=""+new URL("secctiontwoone-CDcSNVW3.svg",import.meta.url).href,O=[{id:"item1",recentArticlesText:"ARTICULOS MAS RECIENTES",date:"2023-04-15",title:"CANOPY-TOP MEASUREMENTS DO NOT ACCURATELY QUANTIFY CANOPY-SCALE LEAF THERMOREGULATION",description:"Spectral tuning of visual pigments often facilitates adaptation to new environments, and it is intriguing to study the visual ecology of pelagic sharks with secondarily expanded habitats.",author:"Marco Antonio Lopez"},{id:"item2",recentArticlesText:"ARTICULOS MAS RECIENTES",date:"2023-04-15",title:"CANOPY-TOP MEASUREMENTS DO NOT ACCURATELY QUANTIFY CANOPY-SCALE LEAF THERMOREGULATION",description:"Spectral tuning of visual pigments often facilitates adaptation to new environments, and it is intriguing to study the visual ecology of pelagic sharks with secondarily expanded habitats.",author:"Marco Antonio Lopez"}],P={featuredItems:O},W={component:v,title:"ui/components/organisms/sectiontwo-page",argTypes:{backgroundImageDesktop:{control:"select",options:[n,o]},backgroundImageMobile:{control:"select",options:[n,o]}}},i={args:{backgroundImageDesktop:String(n),backgroundImageMobile:String(o),children:e.jsx(e.Fragment,{children:P.featuredItems.map(t=>e.jsxs("div",{className:"section-two__item",children:[e.jsxs("div",{className:"featured__item",children:[e.jsx(b,{text:t.recentArticlesText,color:"primary"}),e.jsx(I,{date:new Date(t.date)}),e.jsx(E,{title:t.title,variant:"default"}),e.jsx(T,{article:t.description,variant:"default"})]}),e.jsx("div",{className:"divider-author",children:e.jsxs("div",{className:"divider",children:[e.jsx(L,{variant:t.author}),e.jsxs("div",{className:"buttons",children:[e.jsx(m,{icon:w}),e.jsx(m,{icon:S})]})]})}),e.jsx(l,{color:"tertiary",size:"medium",variant:"solid-line"}),e.jsx("div",{className:"points-divider",children:e.jsx(l,{color:"tertiary",size:"small",variant:"points"})})]},t.id))})}};var p,u,g;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    backgroundImageDesktop: String(secctiontwo),
    backgroundImageMobile: String(secctiontwoone),
    children: <>
        {data.featuredItems.map(item => <div key={item.id} className="section-two__item">
            <div className="featured__item">
              <LabelRecentsArticles text={item.recentArticlesText} color="primary" />
              <LabelDate date={new Date(item.date)} />
              <ArticleTitle title={item.title} variant="default" />
              <ArticleDescription article={item.description} variant="default" />
            </div>
            <div className="divider-author">
              <div className="divider">
                <AuthorLabel variant={item.author} />
                <div className="buttons">
                  <VariableButton icon={PdfIcon} />
                  <VariableButton icon={LinkIcon} />
                </div>
              </div>
            </div>
            <PointsDivider color="tertiary" size="medium" variant="solid-line" />
            <div className="points-divider">
              <PointsDivider color="tertiary" size="small" variant="points" />
            </div>
          </div>)}
      </>
  }
}`,...(g=(u=i.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const $=["SectionTwo"];export{i as SectionTwo,$ as __namedExportsOrder,W as default};
