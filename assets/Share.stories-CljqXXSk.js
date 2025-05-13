import{j as s}from"./jsx-runtime-BlDnFLNC.js";import{I as y}from"./icons-BAAZ7Gvn.js";import"./_variables-l0sNRNKZ.js";import{L as p}from"./share-DLYQ_wML.js";import"./index-Cu9bd8lq.js";import"./index-gagdKHFB.js";const e={"label-share":"_label-share_1yqcw_1","label-share__text":"_label-share__text_1yqcw_8","label-share__icon":"_label-share__icon_1yqcw_18","label-share--main":"_label-share--main_1yqcw_24"};function d({text:u="Compartir",colorVariant:_="primary",icon:t}){const h=_==="main"?e["label-share--main"]:e["label-share--primary"];return s.jsxs("div",{className:`${e["label-share"]} ${h}`,children:[t&&s.jsx(y,{"data-testid":"share-icon",src:t,className:e["label-share__icon"]}),s.jsx("span",{className:e["label-share__text"],children:u})]})}d.__docgenInfo={description:"",methods:[],displayName:"Share",props:{text:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Compartir'",computed:!1}},colorVariant:{required:!1,tsType:{name:"union",raw:"'primary' | 'main'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'main'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},icon:{required:!0,tsType:{name:"string"},description:""}}};const j={title:"ui/components/atoms/label-share",component:d,argTypes:{text:{control:"text"},colorVariant:{control:{type:"select",options:["primary","main"]}}}},a={args:{text:"Compatir",icon:p}},r={args:{colorVariant:"main",icon:p}};var o,n,i;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    text: 'Compatir',
    icon: share
  }
}`,...(i=(n=a.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var l,m,c;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    colorVariant: 'main',
    icon: share
  }
}`,...(c=(m=r.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const v=["Default","Primary"];export{a as Default,r as Primary,v as __namedExportsOrder,j as default};
