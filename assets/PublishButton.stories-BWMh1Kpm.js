import{j as s}from"./jsx-runtime-_e34SzbC.js";import"./index-DVXBtNgz.js";function C(O){const{children:I,variant:A,onClick:L}=O;return s.jsx("div",{className:"button-publish",children:s.jsx("button",{className:`button-publish__button button-publish__button--${A}`,onClick:L,children:s.jsx("span",{className:"button-publish__label ",children:I})})})}C.__docgenInfo={description:"",methods:[],displayName:"PublishButton",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},variant:{required:!0,tsType:{name:"union",raw:"'primary' | 'secondary' | 'tertiary' | 'warning' | 'danger'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'tertiary'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'danger'"}]},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const f={title:"ui/components/atoms/publish-button",component:C,argTypes:{onClick:{action:"click"},variant:{control:"select",options:["primary","secondary","tertiary","warning","danger"]}}},r={args:{children:"PUBLICAR ARTICULO",variant:"primary"}},e={args:{children:"PUBLICAR ARTICULO",variant:"secondary"}},a={args:{children:"PUBLICAR ARTICULO",variant:"tertiary"}},n={args:{children:"TODO: until the implementation of the task [SEM - 209]",variant:"warning"}},t={args:{children:"TODO: until the implementation of the task [SEM - 209]",variant:"danger"}};var i,o,c;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: 'PUBLICAR ARTICULO',
    variant: 'primary'
  }
}`,...(c=(o=r.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var l,m,d;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: 'PUBLICAR ARTICULO',
    variant: 'secondary'
  }
}`,...(d=(m=e.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,p,g;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: 'PUBLICAR ARTICULO',
    variant: 'tertiary'
  }
}`,...(g=(p=a.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var h,y,v;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: 'TODO: until the implementation of the task [SEM - 209]',
    variant: 'warning'
  }
}`,...(v=(y=n.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var R,b,T;t.parameters={...t.parameters,docs:{...(R=t.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    children: 'TODO: until the implementation of the task [SEM - 209]',
    variant: 'danger'
  }
}`,...(T=(b=t.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};const P=["Primary","Secondary","Tertiary","Warning","Danger"];export{t as Danger,r as Primary,e as Secondary,a as Tertiary,n as Warning,P as __namedExportsOrder,f as default};
