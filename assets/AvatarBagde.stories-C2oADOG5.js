import{j as e}from"./jsx-runtime-BlDnFLNC.js";import{A as a}from"./AvatarBagde-Ckps64Bw.js";import"./index-Cu9bd8lq.js";import"./styled-Bt0mFYDl.js";import"./identifier-CbEbAR9K.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-B34fLoo2.js";import"./extends-CF3RwP-h.js";import"./Avatar-DvuSZbyC.js";import"./memoTheme-B79gvi06.js";import"./createSvgIcon-8vP1eH-R.js";import"./DefaultPropsProvider-15asn56a.js";import"./useSlot-BR1c830i.js";const D='data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="red"/></svg>',C="https://mui.com/static/images/avatar/1.jpg",F={title:"Atoms/AvatarItem",component:a,parameters:{layout:"centered"},argTypes:{src:{control:"text",description:"URL de la imagen del avatar. Si no se provee, se muestran iniciales."},alt:{control:"text",description:"Texto alternativo para la imagen, o usado para las iniciales si no hay imagen."},size:{control:"select",options:["small","medium","large"],defaultValue:"medium",description:"Define el tamaño del avatar (25px, 28px, 31px)."},shape:{control:"select",options:["default","rounded"],defaultValue:"default",description:'Define la forma del avatar ("default" para cuadrado con bordes suaves, "rounded" para circular).'},hidden:{control:"boolean",defaultValue:!1,description:"Si es verdadero, el avatar no se renderiza."}},tags:["autodocs"]},r={args:{alt:"JD",src:void 0,size:"medium",shape:"default"},name:"Iniciales (Default - Medium, Cuadrado - Con Fondo)"},t={args:{src:D,alt:"Círculo Rojo SVG",size:"medium",shape:"default"},name:"Con SVG (Círculo Rojo Opaco)"},o={args:{src:C,alt:"JPG de MUI",size:"medium",shape:"default"},name:"Con JPG (Desde MUI - Sin Fondo Visible)"},n={args:{alt:"Hidden Example",src:D,hidden:!0},name:"Oculto"},d={render:_=>{const{src:s}=_;return e.jsxs("div",{style:{display:"flex",gap:"20px",alignItems:"center"},children:[e.jsx(a,{src:s,size:"small",shape:"default",alt:"S-D"}),e.jsx(a,{src:s,size:"medium",shape:"default",alt:"M-D"}),e.jsx(a,{src:s,size:"large",shape:"default",alt:"L-D"}),e.jsx(a,{src:s,size:"small",shape:"rounded",alt:"S-R"}),e.jsx(a,{src:s,size:"medium",shape:"rounded",alt:"M-R"}),e.jsx(a,{src:s,size:"large",shape:"rounded",alt:"L-R"})]})},args:{src:C},name:"Todos los Tamaños y Formas (con JPG de MUI)"};var i,l,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    alt: 'JD',
    src: undefined,
    size: 'medium',
    shape: 'default'
  },
  name: 'Iniciales (Default - Medium, Cuadrado - Con Fondo)'
}`,...(m=(l=r.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var c,p,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    src: SVG_RED_CIRCLE_DATA_URI,
    alt: 'Círculo Rojo SVG',
    size: 'medium',
    shape: 'default'
  },
  name: 'Con SVG (Círculo Rojo Opaco)'
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,I,f;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    src: MUI_SAMPLE_AVATAR_SRC,
    alt: 'JPG de MUI',
    size: 'medium',
    shape: 'default'
  },
  name: 'Con JPG (Desde MUI - Sin Fondo Visible)'
}`,...(f=(I=o.parameters)==null?void 0:I.docs)==null?void 0:f.source}}};var A,S,x;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    alt: 'Hidden Example',
    src: SVG_RED_CIRCLE_DATA_URI,
    hidden: true
  },
  name: 'Oculto'
}`,...(x=(S=n.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var h,R,v;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => {
    const {
      src
    } = args;
    return <div style={{
      display: 'flex',
      gap: '20px',
      alignItems: 'center'
    }}>
        <AvatarItem src={src} size="small" shape="default" alt="S-D" />
        <AvatarItem src={src} size="medium" shape="default" alt="M-D" />
        <AvatarItem src={src} size="large" shape="default" alt="L-D" />
        <AvatarItem src={src} size="small" shape="rounded" alt="S-R" />
        <AvatarItem src={src} size="medium" shape="rounded" alt="M-R" />
        <AvatarItem src={src} size="large" shape="rounded" alt="L-R" />
      </div>;
  },
  args: {
    src: MUI_SAMPLE_AVATAR_SRC
  },
  name: 'Todos los Tamaños y Formas (con JPG de MUI)'
}`,...(v=(R=d.parameters)==null?void 0:R.docs)==null?void 0:v.source}}};const w=["InitialsDefault","ImageSVGRedCircle","ImageJPGFromMUI","HiddenAvatar","AllSizesAndShapes"];export{d as AllSizesAndShapes,n as HiddenAvatar,o as ImageJPGFromMUI,t as ImageSVGRedCircle,r as InitialsDefault,w as __namedExportsOrder,F as default};
