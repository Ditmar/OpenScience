import{j as e}from"./jsx-runtime-DRTy3Uxn.js";import{r as m}from"./index-BBkUAzwr.js";import{T as j}from"./Thumbnail-B7NyhZII.js";import{A as p}from"./ArticleDescription-DzMth-A3.js";import{A as u}from"./ArticleTitle-Brcsvsxf.js";import{L as v}from"./LabelRecentsArticles-Du9oJF-u.js";import{P as t}from"./PointsDivider-BK4avMxH.js";import{V as i}from"./VariableButton-CaGjwcEG.js";import{A as g}from"./AuthorLabel-CV9wumH1.js";import{L as A}from"./LabelDate-CuOO9EjH.js";import{P as x}from"./pdf-CD9LdSfp.js";import{L as f}from"./share-DLYQ_wML.js";import"./icons-DNNtq2Yd.js";import"./index-YMbfICiA.js";const O="480px",I="768px",y="1024px",C={small:O,"small-mobile":"320px","small-mobile-large":"568px",medium:I,large:y,"large-tablet":"1112px","extra-large":"1280px"};function h({backgroundImageDesktop:n,backgroundImageMobile:l,children:L}){const[S,d]=m.useState(n);return m.useEffect(()=>{const b=C.medium,s=window.matchMedia(`(max-width: ${b})`),o=R=>{R.matches?d(l):d(n)};return o(s),s.addEventListener("change",o),()=>{s.removeEventListener("change",o)}},[n,l]),e.jsxs("div",{className:"body",children:[e.jsx("div",{className:"featured-article",children:L}),e.jsx("div",{className:"image",children:e.jsx(j,{pathImage:S})})]})}h.__docgenInfo={description:"",methods:[],displayName:"SectiontwoPage",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},backgroundImageDesktop:{required:!0,tsType:{name:"string"},description:""},backgroundImageMobile:{required:!0,tsType:{name:"string"},description:""}}};const r=""+new URL("secctiontwo-Cm0hQ2vP.svg",import.meta.url).href,c=""+new URL("secctiontwoone-CDcSNVW3.svg",import.meta.url).href,H={component:h,title:"ui/components/organisms/sectiontwo-page",argTypes:{backgroundImageDesktop:{control:"select",options:[r,c]},backgroundImageMobile:{control:"select",options:[r,c]}}},a={args:{backgroundImageDesktop:String(r),backgroundImageMobile:String(c),children:e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"featured__item",children:[e.jsx(v,{text:"ARTICULOS MAS RECIENTES",color:"primary"}),e.jsx(A,{date:new Date(2023,3,15)}),e.jsx(u,{title:"CANOPY-TOP MEASUREMENTS DO NOT ACCURATELY QUANTIFY CANOPY-SCALE LEAF THERMOREGULATION",variant:"default"}),e.jsx(p,{article:`Spectral tuning of visual pigments often facilitates adaptation to new environments,
             and it is intriguing to study the visual ecology of pelagic sharks with secondarily expanded habitats. The`,variant:"default"})]}),e.jsxs("div",{className:"divider",children:[e.jsx(g,{variant:"Marco Antonio Lopez"}),e.jsxs("div",{className:"buttons",children:[e.jsx(i,{icon:x}),e.jsx(i,{icon:f})]})]}),e.jsx(t,{color:"tertiary",size:"medium",variant:"solid-line"}),e.jsx("div",{className:"points-divider",children:e.jsx(t,{color:"tertiary",size:"small",variant:"points"})}),e.jsxs("div",{className:"featured__item",children:[e.jsx(v,{text:"ARTICULOS MAS RECIENTES",color:"primary"}),e.jsx(A,{date:new Date(2023,3,15)}),e.jsx(u,{title:"CANOPY-TOP MEASUREMENTS DO NOT ACCURATELY QUANTIFY CANOPY-SCALE LEAF THERMOREGULATION",variant:"default"}),e.jsx(p,{article:`Spectral tuning of visual pigments often facilitates adaptation to new environments,
             and it is intriguing to study the visual ecology of pelagic sharks with secondarily expanded habitats. The`,variant:"default"})]}),e.jsxs("div",{className:"divider",children:[e.jsx(g,{variant:"Marco Antonio Lopez"}),e.jsxs("div",{className:"buttons",children:[e.jsx(i,{icon:x}),e.jsx(i,{icon:f})]})]}),e.jsx(t,{color:"tertiary",size:"medium",variant:"solid-line"}),e.jsx("div",{className:"points-divider",children:e.jsx(t,{color:"tertiary",size:"small",variant:"points"})})]})}};var N,T,E;a.parameters={...a.parameters,docs:{...(N=a.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    backgroundImageDesktop: String(secctiontwo),
    backgroundImageMobile: String(secctiontwoone),
    children: <>
        <div className="featured__item">
          <LabelRecentsArticles text="ARTICULOS MAS RECIENTES" color="primary" />
          <LabelDate date={new Date(2023, 3, 15)} />
          <ArticleTitle title="CANOPY-TOP MEASUREMENTS DO NOT ACCURATELY QUANTIFY CANOPY-SCALE LEAF THERMOREGULATION" variant="default" />
          <ArticleDescription article="Spectral tuning of visual pigments often facilitates adaptation to new environments,
             and it is intriguing to study the visual ecology of pelagic sharks with secondarily expanded habitats. The" variant="default" />
        </div>
        <div className="divider">
          <AuthorLabel variant="Marco Antonio Lopez" />
          <div className="buttons">
            <VariableButton icon={PdfIcon} />
            <VariableButton icon={LinkIcon} />
          </div>
        </div>
        <PointsDivider color="tertiary" size="medium" variant="solid-line" />
        <div className="points-divider">
          <PointsDivider color="tertiary" size="small" variant="points" />
        </div>
        <div className="featured__item">
          <LabelRecentsArticles text="ARTICULOS MAS RECIENTES" color="primary" />
          <LabelDate date={new Date(2023, 3, 15)} />
          <ArticleTitle title="CANOPY-TOP MEASUREMENTS DO NOT ACCURATELY QUANTIFY CANOPY-SCALE LEAF THERMOREGULATION" variant="default" />
          <ArticleDescription article="Spectral tuning of visual pigments often facilitates adaptation to new environments,
             and it is intriguing to study the visual ecology of pelagic sharks with secondarily expanded habitats. The" variant="default" />
        </div>
        <div className="divider">
          <AuthorLabel variant="Marco Antonio Lopez" />
          <div className="buttons">
            <VariableButton icon={PdfIcon} />
            <VariableButton icon={LinkIcon} />
          </div>
        </div>
        <PointsDivider color="tertiary" size="medium" variant="solid-line" />
        <div className="points-divider">
          <PointsDivider color="tertiary" size="small" variant="points" />
        </div>
      </>
  }
}`,...(E=(T=a.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};const q=["SectionTwo"];export{a as SectionTwo,q as __namedExportsOrder,H as default};
