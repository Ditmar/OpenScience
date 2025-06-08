import{j as r}from"./jsx-runtime-BlDnFLNC.js";import{P as e}from"./pills-DiL1jZCc.js";import{C as j}from"./CheckCircle-DAualKa-.js";import{W as S,E as h}from"./Warning-DWXS7Wm6.js";import"./index-Cu9bd8lq.js";import"./identifier-hro76Lr8.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-B34fLoo2.js";import"./useTheme-BXyFZF9T.js";import"./default-CHG5Ru87.js";import"./Box-BmvMzRj_.js";import"./generateUtilityClasses-97MfERLa.js";import"./extends-CF3RwP-h.js";import"./createSvgIcon-BLpQMnw7.js";import"./memoTheme-C94SUa2h.js";import"./DefaultPropsProvider-kn5pQE2n.js";const R={title:"Components/Atoms/Pill",component:e,tags:["autodocs"],argTypes:{text:{control:"text",description:"Texto principal del Pill",defaultValue:"Label"},color:{control:"select",options:["neutral-dark","neutral-light","brand-primary","brand-secondary","brand-tertiary","feedback-positive","feedback-negative","feedback-warning","read-only-disabled"],description:"Paleta de colores del sistema"},variant:{control:"radio",options:["filled","outline","soft"],description:"Estilo de variante"},size:{control:"radio",options:["sm","md","lg"],description:"Tamaños disponibles"},rounded:{control:"radio",options:["r_none","r_md","r_full"],description:"Radio de bordes",defaultValue:"r_md"},shadow:{control:"boolean",description:"Agrega sombra al componente"},stroke:{control:"radio",options:["border-soft","border-strong"],description:"Estilo de borde"},iconPosition:{control:"radio",options:["left","right"],if:{arg:"icon",truthy:!0}}}},o={args:{text:"Default Pill",color:"brand-primary",variant:"filled",size:"md"}},a={render:()=>r.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[r.jsx(e,{text:"Neutral Dark",color:"neutral-dark"}),r.jsx(e,{text:"Brand Primary",color:"brand-primary"}),r.jsx(e,{text:"Positive",color:"feedback-positive"}),r.jsx(e,{text:"Warning",color:"feedback-warning"}),r.jsx(e,{text:"Negative",color:"feedback-negative"}),r.jsx(e,{text:"Disabled",color:"read-only-disabled"})]})},t={render:()=>r.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[r.jsx(e,{text:"Filled",variant:"filled",color:"brand-primary"}),r.jsx(e,{text:"Outline",variant:"outline",color:"brand-primary"}),r.jsx(e,{text:"Soft",variant:"soft",color:"brand-primary"})]})},i={render:()=>r.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[r.jsx(e,{text:"Success",color:"feedback-positive",icon:r.jsx(j,{fontSize:"small"})}),r.jsx(e,{text:"Warning",color:"feedback-warning",icon:r.jsx(S,{fontSize:"small"}),iconPosition:"right"}),r.jsx(e,{text:"Error",color:"feedback-negative",icon:r.jsx(h,{fontSize:"small"}),variant:"outline"})]})},n={args:{text:"Custom Pill",color:"brand-primary",variant:"filled",size:"md",rounded:"r_md",shadow:!1,icon:r.jsx(j,{fontSize:"small"}),iconPosition:"left"}};var l,s,d;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    text: 'Default Pill',
    color: 'brand-primary',
    variant: 'filled',
    size: 'md'
  }
}`,...(d=(s=o.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};var c,p,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap'
  }}>
      <Pill text="Neutral Dark" color="neutral-dark" />
      <Pill text="Brand Primary" color="brand-primary" />
      <Pill text="Positive" color="feedback-positive" />
      <Pill text="Warning" color="feedback-warning" />
      <Pill text="Negative" color="feedback-negative" />
      <Pill text="Disabled" color="read-only-disabled" />
    </div>
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var x,f,u;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap'
  }}>
      <Pill text="Filled" variant="filled" color="brand-primary" />
      <Pill text="Outline" variant="outline" color="brand-primary" />
      <Pill text="Soft" variant="soft" color="brand-primary" />
    </div>
}`,...(u=(f=t.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};var g,b,y;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap'
  }}>
      <Pill text="Success" color="feedback-positive" icon={<CheckCircle fontSize="small" />} />
      <Pill text="Warning" color="feedback-warning" icon={<Warning fontSize="small" />} iconPosition="right" />
      <Pill text="Error" color="feedback-negative" icon={<Error fontSize="small" />} variant="outline" />
    </div>
}`,...(y=(b=i.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var v,P,k;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    text: 'Custom Pill',
    color: 'brand-primary',
    variant: 'filled',
    size: 'md',
    rounded: 'r_md',
    shadow: false,
    icon: <CheckCircle fontSize="small" />,
    iconPosition: 'left'
  }
}`,...(k=(P=n.parameters)==null?void 0:P.docs)==null?void 0:k.source}}};const L=["Default","ColorVariants","StyleVariants","WithIcons","Playground"];export{a as ColorVariants,o as Default,n as Playground,t as StyleVariants,i as WithIcons,L as __namedExportsOrder,R as default};
