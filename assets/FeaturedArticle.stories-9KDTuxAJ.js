import{j as e}from"./jsx-runtime-DRTy3Uxn.js";import{A as m}from"./ArticleTitle-DmHy1v9k.js";import{A as c}from"./ArticleDescription-DzMth-A3.js";import{V as i}from"./VariableButton-Cqm8pKWu.js";import{P as u}from"./pdf-CD9LdSfp.js";import{S as p}from"./share-ClKaH8Ez.js";import{L as v}from"./LabelFeaturedArticles-NPOKhSwt.js";import{P as t}from"./PointsDivider-CflRIPSo.js";import{L as f}from"./LabelDate-CvEn0a_l.js";import{A}from"./AuthorLabel-CV9wumH1.js";import"./index-BBkUAzwr.js";import"./icons-DNNtq2Yd.js";import"./index-YMbfICiA.js";function l(o){const{children:d}=o;return e.jsx("div",{className:"featured-article",children:d})}l.__docgenInfo={description:"",methods:[],displayName:"FeaturedArticle",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},text:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:""},variant:{required:!0,tsType:{name:"union",raw:"'default' | 'primary' | 'secondary ' | 'solid-line' | 'points' | 'main'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary '"},{name:"literal",value:"'solid-line'"},{name:"literal",value:"'points'"},{name:"literal",value:"'main'"}]},description:""},color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'tertiary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'tertiary'"}]},description:""},ColorVariant:{required:!1,tsType:{name:"union",raw:"'main' | 'primary' | 'secondary'",elements:[{name:"literal",value:"'main'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:""},article:{required:!0,tsType:{name:"string"},description:""},date:{required:!0,tsType:{name:"Date"},description:""}}};const R={component:l,title:"ui/components/molecules/featured-article",argTypes:{onClick:{action:"click"}}},a={args:{children:e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"featured__item",children:[e.jsx(v,{text:"ARTÍCULOS DESTACADOS",ColorVariant:"main"}),e.jsx(f,{date:new Date(2023,3,15)}),e.jsx(m,{title:"CANOPY-TOP MEASUREMENTS DO NOT ACCURATELY QUANTIFY CANOPY-SCALE LEAF THERMOREGULATION",variant:"default"}),e.jsx(c,{article:`Spectral tuning of visual pigments often facilitates adaptation to new environments, 
          and it is intriguing to study the visual ecology of pelagic sharks with secondarily expanded 
          habitats.The`,variant:"default"})]}),e.jsxs("div",{className:"divider",children:[e.jsx(A,{variant:"Marco Antonio Lopez"}),e.jsxs("div",{className:"buttons",children:[e.jsx(i,{icon:u}),e.jsx(i,{icon:p})]})]}),e.jsx(t,{color:"tertiary",size:"medium",variant:"solid-line"}),e.jsx(t,{color:"primary",size:"small",variant:"points"})]})}};var r,n,s;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    children: <>
        <div className="featured__item">
          <LabelFeaturedArticles text="ARTÍCULOS DESTACADOS" ColorVariant="main" />
          <LabelDate date={new Date(2023, 3, 15)} />
          <ArticleTitle title="CANOPY-TOP MEASUREMENTS DO NOT ACCURATELY QUANTIFY CANOPY-SCALE LEAF THERMOREGULATION" variant="default" />
          <ArticleDescription article="Spectral tuning of visual pigments often facilitates adaptation to new environments, 
          and it is intriguing to study the visual ecology of pelagic sharks with secondarily expanded 
          habitats.The" variant="default" />
        </div>
        <div className="divider">
          <AuthorLabel variant="Marco Antonio Lopez" />
          <div className="buttons">
            <VariableButton icon={PdfIcon} />
            <VariableButton icon={LinkIcon} />
          </div>
        </div>
        <PointsDivider color="tertiary" size="medium" variant="solid-line" />
        <PointsDivider color="primary" size="small" variant="points" />
      </>
  }
}`,...(s=(n=a.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const b=["Featured"];export{a as Featured,b as __namedExportsOrder,R as default};
