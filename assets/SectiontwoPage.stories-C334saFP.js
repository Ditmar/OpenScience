import{j as e}from"./jsx-runtime-DRTy3Uxn.js";import{r as d}from"./index-BBkUAzwr.js";import{T as L}from"./Thumbnail-B7NyhZII.js";import{A as c}from"./ArticleDescription-DzMth-A3.js";import{A as m}from"./ArticleTitle-Brcsvsxf.js";import{L as u}from"./LabelRecentsArticles-Du9oJF-u.js";import{P as t}from"./PointsDivider-BK4avMxH.js";import{V as a}from"./VariableButton-CaGjwcEG.js";import{A as p}from"./AuthorLabel-CV9wumH1.js";import{L as v}from"./LabelDate-CuOO9EjH.js";import{P as f}from"./pdf-CD9LdSfp.js";import{L as A}from"./share-DLYQ_wML.js";import"./icons-DNNtq2Yd.js";import"./index-YMbfICiA.js";const S=""+new URL("twosectiondesktop-B9baZQy0.svg",import.meta.url).href,w=""+new URL("twoonesection-DryC0q9o.svg",import.meta.url).href;function E(N){const{children:h}=N,s=i=>typeof i=="object"&&i!==null&&"default"in i?i.default:i,r=s(S),o=s(w),[x,l]=d.useState(r);return d.useEffect(()=>{const i=()=>{window.innerWidth<=768?l(o):l(r)};return i(),window.addEventListener("resize",i),()=>{window.removeEventListener("resize",i)}},[r,o]),e.jsxs("div",{className:"body",children:[e.jsx("div",{className:"featured-article",children:h}),e.jsx("div",{className:"image",children:e.jsx(L,{pathImage:x})})]})}E.__docgenInfo={description:"",methods:[],displayName:"SectiontwoPage",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},text:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:""},variant:{required:!0,tsType:{name:"union",raw:"'default' | 'primary' | 'secondary ' | 'solid-line' | 'points' | 'main'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary '"},{name:"literal",value:"'solid-line'"},{name:"literal",value:"'points'"},{name:"literal",value:"'main'"}]},description:""},color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'tertiary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'tertiary'"}]},description:""},ColorVariant:{required:!1,tsType:{name:"union",raw:"'main' | 'primary' | 'secondary'",elements:[{name:"literal",value:"'main'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:""},article:{required:!0,tsType:{name:"string"},description:""},date:{required:!0,tsType:{name:"Date"},description:""},pathImage:{required:!0,tsType:{name:"string"},description:""}}};const _={component:E,title:"ui/components/organisms/sectiontwo-page",argTypes:{onClick:{action:"click"}}},n={args:{children:e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"featured__item",children:[e.jsx(u,{text:"ARTICULOS MAS RECIENTES",color:"primary"}),e.jsx(v,{date:new Date(2023,3,15)}),e.jsx(m,{title:"CANOPY-TOP MEASUREMENTS DO NOT ACCURATELY QUANTIFY CANOPY-SCALE LEAF THERMOREGULATION",variant:"default"}),e.jsx(c,{article:`Spectral tuning of visual pigments often facilitates adaptation to new environments,
             and it is intriguing to study the visual ecology of pelagic sharks with secondarily expanded habitats. The`,variant:"default"})]}),e.jsxs("div",{className:"divider",children:[e.jsx(p,{variant:"Marco Antonio Lopez"}),e.jsxs("div",{className:"buttons",children:[e.jsx(a,{icon:f}),e.jsx(a,{icon:A})]})]}),e.jsx(t,{color:"tertiary",size:"medium",variant:"solid-line"}),e.jsx("div",{className:"points-divider",children:e.jsx(t,{color:"tertiary",size:"small",variant:"points"})}),e.jsxs("div",{className:"featured__item",children:[e.jsx(u,{text:"ARTICULOS MAS RECIENTES",color:"primary"}),e.jsx(v,{date:new Date(2023,3,15)}),e.jsx(m,{title:"CANOPY-TOP MEASUREMENTS DO NOT ACCURATELY QUANTIFY CANOPY-SCALE LEAF THERMOREGULATION",variant:"default"}),e.jsx(c,{article:`Spectral tuning of visual pigments often facilitates adaptation to new environments,
             and it is intriguing to study the visual ecology of pelagic sharks with secondarily expanded habitats. The`,variant:"default"})]}),e.jsxs("div",{className:"divider",children:[e.jsx(p,{variant:"Marco Antonio Lopez"}),e.jsxs("div",{className:"buttons",children:[e.jsx(a,{icon:f}),e.jsx(a,{icon:A})]})]}),e.jsx(t,{color:"tertiary",size:"medium",variant:"solid-line"}),e.jsx("div",{className:"points-divider",children:e.jsx(t,{color:"tertiary",size:"small",variant:"points"})})]})}};var T,y,g;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
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
}`,...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};const F=["SectionTwo"];export{n as SectionTwo,F as __namedExportsOrder,_ as default};
