import{j as e}from"./jsx-runtime-BlDnFLNC.js";import{r as d}from"./index-Cu9bd8lq.js";import{T as N}from"./Thumbnail-Bcc7mY3W.js";import{A as T}from"./ArticleDescription-DgArvPLe.js";import{A as E}from"./ArticleTitle-D1bArUeM.js";import{L}from"./LabelRecentsArticles-kWXFgTRN.js";import{P as m}from"./PointsDivider-BWJ51MlV.js";import{V as l}from"./VariableButton-BTWcxe3l.js";import{A as I}from"./AuthorLabel-D8U4Rqmu.js";import{L as w}from"./LabelDate-BkOOFA1a.js";import{P as S}from"./pdf-CD9LdSfp.js";import{L as b}from"./share-DLYQ_wML.js";import"./icons-Dqqr9IZ9.js";import"./index-gagdKHFB.js";const j="768px",R={medium:j};function g({backgroundImageDesktop:t,backgroundImageMobile:s,children:f}){const[h,c]=d.useState(t);return d.useEffect(()=>{const A=R.medium,a=window.matchMedia(`(max-width: ${A})`),r=x=>{x.matches?c(s):c(t)};return r(a),a.addEventListener("change",r),()=>{a.removeEventListener("change",r)}},[t,s]),e.jsxs("div",{className:"body",children:[e.jsx("div",{className:"featured-article",children:f}),e.jsx("div",{className:"image",children:e.jsx(N,{pathImage:h})})]})}g.__docgenInfo={description:"",methods:[],displayName:"SectiontwoPage",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},backgroundImageDesktop:{required:!0,tsType:{name:"string"},description:""},backgroundImageMobile:{required:!0,tsType:{name:"string"},description:""}}};const n=""+new URL("secctiontwo-Cm0hQ2vP.svg",import.meta.url).href,o=""+new URL("secctiontwoone-CDcSNVW3.svg",import.meta.url).href,y=[{id:"item1",recentArticlesText:"ARTICULOS MAS RECIENTES",date:"2023-04-15",title:"CANOPY-TOP MEASUREMENTS DO NOT ACCURATELY QUANTIFY CANOPY-SCALE LEAF THERMOREGULATION",description:"Spectral tuning of visual pigments often facilitates adaptation to new environments, and it is intriguing to study the visual ecology of pelagic sharks with secondarily expanded habitats.",author:"Marco Antonio Lopez"},{id:"item2",recentArticlesText:"ARTICULOS MAS RECIENTES",date:"2023-04-15",title:"CANOPY-TOP MEASUREMENTS DO NOT ACCURATELY QUANTIFY CANOPY-SCALE LEAF THERMOREGULATION",description:"Spectral tuning of visual pigments often facilitates adaptation to new environments, and it is intriguing to study the visual ecology of pelagic sharks with secondarily expanded habitats.",author:"Marco Antonio Lopez"}],C={featuredItems:y},G={component:g,title:"ui/components/organisms/sectiontwo-page",argTypes:{backgroundImageDesktop:{control:"select",options:[n,o]},backgroundImageMobile:{control:"select",options:[n,o]}}},i={args:{backgroundImageDesktop:String(n),backgroundImageMobile:String(o),children:e.jsx(e.Fragment,{children:C.featuredItems.map(t=>e.jsxs("div",{className:"section-two__item",children:[e.jsxs("div",{className:"featured__item",children:[e.jsx(L,{text:t.recentArticlesText,color:"primary"}),e.jsx(w,{date:new Date(t.date)}),e.jsx(E,{title:t.title,variant:"default"}),e.jsx(T,{article:t.description,variant:"default"})]}),e.jsx("div",{className:"divider-author",children:e.jsxs("div",{className:"divider",children:[e.jsx(I,{variant:t.author}),e.jsxs("div",{className:"buttons",children:[e.jsx(l,{icon:S}),e.jsx(l,{icon:b})]})]})}),e.jsx(m,{color:"tertiary",size:"medium",variant:"solid-line"}),e.jsx("div",{className:"points-divider",children:e.jsx(m,{color:"tertiary",size:"small",variant:"points"})})]},t.id))})}};var p,u,v;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(v=(u=i.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};const H=["SectionTwo"];export{i as SectionTwo,H as __namedExportsOrder,G as default};
