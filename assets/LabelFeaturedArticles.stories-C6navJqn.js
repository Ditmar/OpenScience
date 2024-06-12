import{j as o}from"./jsx-runtime-_e34SzbC.js";import"./_variables-l0sNRNKZ.js";import"./index-DVXBtNgz.js";function u({text:p="artículos destacados",ColorVariant:t="main"}){let e="",s="";return t==="main"?(e="label-featured-articles--main",s="label-featured-articles--main-bg"):t==="primary"?e="label-featured-articles--primary":e="label-featured-articles--secondary",o.jsx("div",{className:`label-featured-articles ${e} ${s}`,children:o.jsx("span",{className:"label-featured-articles__text",children:p})})}u.__docgenInfo={description:"",methods:[],displayName:"LabelFeaturedArticles",props:{text:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'artículos destacados'",computed:!1}},ColorVariant:{required:!1,tsType:{name:"union",raw:"'main' | 'primary' | 'secondary'",elements:[{name:"literal",value:"'main'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:"",defaultValue:{value:"'main'",computed:!1}}}};const b={title:"ui/components/atoms/label-featured-articles",component:u,argTypes:{text:{control:"text"},ColorVariant:{control:{type:"select",options:["main","primary","secondary"]}}}},a={args:{text:"artículos destacados",ColorVariant:"main"}},r={args:{text:"artículos destacados",ColorVariant:"secondary"}};var l,n,c;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    text: 'artículos destacados',
    ColorVariant: 'main'
  }
}`,...(c=(n=a.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var i,d,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    text: 'artículos destacados',
    ColorVariant: 'secondary'
  }
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const g=["Primary","Secondary"];export{a as Primary,r as Secondary,g as __namedExportsOrder,b as default};
