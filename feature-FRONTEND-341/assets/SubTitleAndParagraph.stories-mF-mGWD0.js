import{j as t}from"./jsx-runtime-BlDnFLNC.js";import{S as W}from"./SubTitleAndParagraph-DD0Rg9W9.js";import"./index-Cu9bd8lq.js";import"./Box-CsY7UG8k.js";import"./identifier-CbEbAR9K.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-B34fLoo2.js";import"./styled-Bt0mFYDl.js";import"./extends-CF3RwP-h.js";import"./useTheme-CjnX6HY-.js";import"./Typography-CoNoFykH.js";import"./index-BEPDM9dZ.js";import"./memoTheme-B79gvi06.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./DefaultPropsProvider-15asn56a.js";const ae={title:"Atoms/SubTitleAndParagraph",component:W,tags:["autodocs"],argTypes:{title:{control:"text",description:"El texto del título principal."},subtitle:{control:"text",description:"El texto descriptivo secundario."},size:{control:"select",options:["sm","md","lg"],description:"El tamaño del componente (afecta el tamaño de fuente)."},alignment:{control:"select",options:["left","center","right"],description:"La alineación del texto dentro del componente."},variant:{control:"select",options:["default","emphasized","minimal"],description:"La variante de estilo (afecta color y peso de fuente)."},titleTag:{control:"select",options:["h1","h2","h3","h4","h5"],description:"La etiqueta HTML semántica para el título principal."},subtitleTag:{control:"select",options:["p","h3","h4","h5","h6"],description:"La etiqueta HTML semántica para el subtítulo."},className:{control:"text",description:"Clases CSS adicionales para el componente raíz."}},parameters:{}},e={args:{title:"Título por Defecto",subtitle:"Este es un subtítulo por defecto para el componente.",size:"md",alignment:"left",variant:"default"}},a={args:{...e.args,title:"Título Pequeño",subtitle:"Este es un subtítulo con tamaño pequeño.",size:"sm"}},r={args:{...e.args,title:"Título Grande",subtitle:"Este es un subtítulo con tamaño grande.",size:"lg"}},o={args:{...e.args,title:"Título Centrado",alignment:"center"}},s={args:{...e.args,title:"Título Alineado a la Derecha",alignment:"right"}},n={args:{...e.args,title:"Título Enfatizado",variant:"emphasized"}},i={args:{...e.args,title:"Título Minimalista",variant:"minimal"}},l={args:{...e.args,title:"Solo Título",subtitle:void 0}},c={args:{title:"Título con H1",subtitle:"Párrafo con H5",titleTag:"h1",subtitleTag:"h5",size:"md"}},u={args:{...e.args,title:t.jsxs(t.Fragment,{children:["Título con ",t.jsx("span",{style:{color:"blue"},children:"ReactNode"})]}),subtitle:t.jsxs(t.Fragment,{children:["Subtítulo con un ",t.jsx("strong",{style:{color:"green"},children:"elemento fuerte"}),"."]})}};var m,p,d;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    title: 'Título por Defecto',
    subtitle: 'Este es un subtítulo por defecto para el componente.',
    size: 'md',
    alignment: 'left',
    variant: 'default'
  }
}`,...(d=(p=e.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var g,T,f;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    title: 'Título Pequeño',
    subtitle: 'Este es un subtítulo con tamaño pequeño.',
    size: 'sm'
  }
}`,...(f=(T=a.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};var x,h,E;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    title: 'Título Grande',
    subtitle: 'Este es un subtítulo con tamaño grande.',
    size: 'lg'
  }
}`,...(E=(h=r.parameters)==null?void 0:h.docs)==null?void 0:E.source}}};var b,D,S;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    title: 'Título Centrado',
    alignment: 'center'
  }
}`,...(S=(D=o.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var z,v,A;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    title: 'Título Alineado a la Derecha',
    alignment: 'right'
  }
}`,...(A=(v=s.parameters)==null?void 0:v.docs)==null?void 0:A.source}}};var y,C,L;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    title: 'Título Enfatizado',
    variant: 'emphasized'
  }
}`,...(L=(C=n.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var R,j,q;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    title: 'Título Minimalista',
    variant: 'minimal'
  }
}`,...(q=(j=i.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var F,H,M;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    title: 'Solo Título',
    subtitle: undefined // Sin subtítulo
  }
}`,...(M=(H=l.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var P,N,V;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    title: 'Título con H1',
    subtitle: 'Párrafo con H5',
    titleTag: 'h1',
    subtitleTag: 'h5',
    size: 'md'
  }
}`,...(V=(N=c.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var O,G,I;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    title: <>
        Título con <span style={{
        color: 'blue'
      }}>ReactNode</span>
      </>,
    subtitle: <>
        Subtítulo con un <strong style={{
        color: 'green'
      }}>elemento fuerte</strong>.
      </>
  }
}`,...(I=(G=u.parameters)==null?void 0:G.docs)==null?void 0:I.source}}};const re=["Default","SmallSize","LargeSize","CenteredAlignment","RightAlignment","EmphasizedVariant","MinimalVariant","OnlyTitle","CustomTags","WithReactNodeInTitle"];export{o as CenteredAlignment,c as CustomTags,e as Default,n as EmphasizedVariant,r as LargeSize,i as MinimalVariant,l as OnlyTitle,s as RightAlignment,a as SmallSize,u as WithReactNodeInTitle,re as __namedExportsOrder,ae as default};
