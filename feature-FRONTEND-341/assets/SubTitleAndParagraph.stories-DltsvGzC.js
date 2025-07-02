import{j as a}from"./jsx-runtime-BlDnFLNC.js";import"./index-Cu9bd8lq.js";import{B as ae}from"./Box-B598QE70.js";import{T}from"./Typography-DtojbDW_.js";import"./DefaultPropsProvider-DIORAReT.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-B34fLoo2.js";import"./memoTheme-XcmwsCMw.js";import"./extends-CF3RwP-h.js";import"./index-DxYIxQXt.js";import"./emotion-react.browser.esm-aHRbi0Hj.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";function Q({title:U,subtitle:d,size:p="md",alignment:X="left",variant:g="default",titleTag:Y="h3",subtitleTag:Z="p",className:$=""}){const ee=t=>{switch(t){case"sm":return"h4";case"md":return"h3";case"lg":return"h2";default:return"h3"}},te=t=>{switch(t){case"sm":return"body2";case"md":return"body1";case"lg":return"subtitle1";default:return"body1"}},h=t=>{switch(t){case"emphasized":return"text.primary";case"minimal":return"text.secondary";default:return"text.primary"}},f=t=>{switch(t){case"emphasized":return"fontWeightBold";default:return"fontWeightRegular"}};return a.jsxs(ae,{className:$,sx:{textAlign:X},children:[a.jsx(T,{variant:ee(p),component:Y,sx:{color:h(g),fontWeight:f(g),marginBottom:t=>t.spacing(1)},children:U}),d&&a.jsx(T,{variant:te(p),component:Z,sx:{color:h("minimal"),fontWeight:f("default"),marginTop:0},children:d})]})}Q.__docgenInfo={description:"",methods:[],displayName:"SubTitleAndParagraph",props:{title:{required:!0,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},subtitle:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},alignment:{required:!1,tsType:{name:"union",raw:"'left' | 'center' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'left'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'emphasized' | 'minimal'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'emphasized'"},{name:"literal",value:"'minimal'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},titleTag:{required:!1,tsType:{name:"union",raw:"'h1' | 'h2' | 'h3' | 'h4' | 'h5'",elements:[{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"},{name:"literal",value:"'h4'"},{name:"literal",value:"'h5'"}]},description:"",defaultValue:{value:"'h3'",computed:!1}},subtitleTag:{required:!1,tsType:{name:"union",raw:"'p' | 'h3' | 'h4' | 'h5' | 'h6'",elements:[{name:"literal",value:"'p'"},{name:"literal",value:"'h3'"},{name:"literal",value:"'h4'"},{name:"literal",value:"'h5'"},{name:"literal",value:"'h6'"}]},description:"",defaultValue:{value:"'p'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const ge={title:"Atoms/SubTitleAndParagraph",component:Q,tags:["autodocs"],argTypes:{title:{control:"text",description:"El texto del título princip."},subtitle:{control:"text",description:"El texto descriptivo secundario."},size:{control:"select",options:["sm","md","lg"],description:"El tamaño del componente (afecta el tamaño de fuente)."},alignment:{control:"select",options:["left","center","right"],description:"La alineación del texto dentro del componente."},variant:{control:"select",options:["default","emphasized","minimal"],description:"La variante de estilo (afecta color y peso de fuente)."},titleTag:{control:"select",options:["h1","h2","h3","h4","h5"],description:"La etiqueta HTML semántica para el título principal."},subtitleTag:{control:"select",options:["p","h3","h4","h5","h6"],description:"La etiqueta HTML semántica para el subtítulo."},className:{control:"text",description:"Clases CSS adicionales para el componente raíz."}},parameters:{}},e={args:{title:"Título por Defecto",subtitle:"Este es un subtítulo por defecto para el componente.",size:"md",alignment:"left",variant:"default"}},r={args:{...e.args,title:"Título Pequeño",subtitle:"Este es un subtítulo con tamaño pequeño.",size:"sm"}},n={args:{...e.args,title:"Título Grande",subtitle:"Este es un subtítulo con tamaño grande.",size:"lg"}},s={args:{...e.args,title:"Título Centrado",alignment:"center"}},l={args:{...e.args,title:"Título Alineado a la Derecha",alignment:"right"}},o={args:{...e.args,title:"Título Enfatizado",variant:"emphasized"}},i={args:{...e.args,title:"Título Minimalista",variant:"minimal"}},u={args:{...e.args,title:"Solo Título",subtitle:void 0}},c={args:{title:"Título con H1",subtitle:"Párrafo con H5",titleTag:"h1",subtitleTag:"h5",size:"md"}},m={args:{...e.args,title:a.jsxs(a.Fragment,{children:["Título con ",a.jsx("span",{style:{color:"blue"},children:"ReactNode"})]}),subtitle:a.jsxs(a.Fragment,{children:["Subtítulo con un ",a.jsx("strong",{style:{color:"green"},children:"elemento fuerte"}),"."]})}};var x,b,v;e.parameters={...e.parameters,docs:{...(x=e.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    title: 'Título por Defecto',
    subtitle: 'Este es un subtítulo por defecto para el componente.',
    size: 'md',
    alignment: 'left',
    variant: 'default'
  }
}`,...(v=(b=e.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var E,D,S;r.parameters={...r.parameters,docs:{...(E=r.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    title: 'Título Pequeño',
    subtitle: 'Este es un subtítulo con tamaño pequeño.',
    size: 'sm'
  }
}`,...(S=(D=r.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var y,z,q;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    title: 'Título Grande',
    subtitle: 'Este es un subtítulo con tamaño grande.',
    size: 'lg'
  }
}`,...(q=(z=n.parameters)==null?void 0:z.docs)==null?void 0:q.source}}};var R,V,w;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    title: 'Título Centrado',
    alignment: 'center'
  }
}`,...(w=(V=s.parameters)==null?void 0:V.docs)==null?void 0:w.source}}};var A,N,j;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    title: 'Título Alineado a la Derecha',
    alignment: 'right'
  }
}`,...(j=(N=l.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var C,L,F;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    title: 'Título Enfatizado',
    variant: 'emphasized'
  }
}`,...(F=(L=o.parameters)==null?void 0:L.docs)==null?void 0:F.source}}};var P,W,H;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    title: 'Título Minimalista',
    variant: 'minimal'
  }
}`,...(H=(W=i.parameters)==null?void 0:W.docs)==null?void 0:H.source}}};var M,B,_;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    title: 'Solo Título',
    subtitle: undefined // Sin subtítulo
  }
}`,...(_=(B=u.parameters)==null?void 0:B.docs)==null?void 0:_.source}}};var I,O,G;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    title: 'Título con H1',
    subtitle: 'Párrafo con H5',
    titleTag: 'h1',
    subtitleTag: 'h5',
    size: 'md'
  }
}`,...(G=(O=c.parameters)==null?void 0:O.docs)==null?void 0:G.source}}};var k,J,K;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(K=(J=m.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const he=["Default","SmallSize","LargeSize","CenteredAlignment","RightAlignment","EmphasizedVariant","MinimalVariant","OnlyTitle","CustomTags","WithReactNodeInTitle"];export{s as CenteredAlignment,c as CustomTags,e as Default,o as EmphasizedVariant,n as LargeSize,i as MinimalVariant,u as OnlyTitle,l as RightAlignment,r as SmallSize,m as WithReactNodeInTitle,he as __namedExportsOrder,ge as default};
