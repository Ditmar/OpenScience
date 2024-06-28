import{j as o}from"./jsx-runtime-_e34SzbC.js";import"./index-DVXBtNgz.js";import{I as b}from"./icons-CP78o3dy.js";import{P as f}from"./pdf-CD9LdSfp.js";import{S as g}from"./share-ClKaH8Ez.js";import"./index-CYjD5YP1.js";const r={"variable-button":"_variable-button_naz18_1","button-icon":"_button-icon_naz18_34"};function m(p){const{icon:e,onClick:l}=p;return o.jsx("button",{className:r["variable-button"],"aria-label":"Abrir",onClick:l,children:e&&o.jsx(b,{"data-testid":"button-icon",src:e,className:r["button-icon"]})})}m.__docgenInfo={description:"",methods:[],displayName:"VariableButton",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},icon:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const v={title:"ui/components/atoms/variable-button",component:m,argTypes:{onClick:{action:"click"}}},n={args:{children:"PDF",icon:f}},t={args:{children:"SHARE",icon:g}};var a,s,i;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    children: 'PDF',
    icon: PdfIcon
  }
}`,...(i=(s=n.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var c,d,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: 'SHARE',
    icon: LinkIcon
  }
}`,...(u=(d=t.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const x=["PdfButton","LinkButton"];export{t as LinkButton,n as PdfButton,x as __namedExportsOrder,v as default};
