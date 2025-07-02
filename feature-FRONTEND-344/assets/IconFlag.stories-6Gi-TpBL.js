import{j as i}from"./jsx-runtime-BlDnFLNC.js";import{C as S,a as e}from"./countryMock-CIrKiJSh.js";import"./index-Cu9bd8lq.js";import"./Box-BIQfO08j.js";import"./DefaultPropsProvider-VzuMoIoH.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-B34fLoo2.js";import"./memoTheme-Cfc04StF.js";import"./extends-CF3RwP-h.js";import"./index-BDYjnLYH.js";import"./Avatar-BLedJQw8.js";import"./createSvgIcon-fSewMTSc.js";import"./useSlot-BiIxzy86.js";import"./useForkRef-CXZ2Yisc.js";import"./Typography-uozj9yCg.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";const O={title:"ui/Components/Atoms/IconFlag",component:S,parameters:{docs:{page:null}},argTypes:{size:{options:["small","medium","large"],control:{type:"radio"},description:"Tamaño del texto"},variant:{options:["circular","rectangular"],control:{type:"radio"},description:"Forma de la bandera",defaultValue:"circular"}}},a={args:{...e.find(r=>r.code==="AR"),size:"medium",variant:"circular"}},o={args:{...e.find(r=>r.code==="AR"),variant:"rectangular"}},t={args:{...e.find(r=>r.code==="AR"),size:"small"}},n={args:{...e.find(r=>r.code==="AR"),size:"large"}},s={render:()=>i.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(250px, 1fr))",gap:"16px",width:"100%"},children:e.map(r=>i.jsx(S,{src:r.src,alt:r.alt,name:r.name,dialCode:r.dialCode,code:r.code},r.code))}),parameters:{controls:{hideNoControlsWarning:!0},viewport:{defaultViewport:"desktop"}}};var c,l,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...allCountries.find(c => c.code === 'AR'),
    size: 'medium',
    variant: 'circular'
  }
}`,...(d=(l=a.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var m,p,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...allCountries.find(c => c.code === 'AR'),
    variant: 'rectangular'
  }
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,f,C;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...allCountries.find(c => c.code === 'AR'),
    size: 'small'
  }
}`,...(C=(f=t.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var x,y,A;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...allCountries.find(c => c.code === 'AR'),
    size: 'large'
  }
}`,...(A=(y=n.parameters)==null?void 0:y.docs)==null?void 0:A.source}}};var R,v,z;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '16px',
    width: '100%'
  }}>
      {allCountries.map(country => <CountryFlag key={country.code} src={country.src} alt={country.alt} name={country.name} dialCode={country.dialCode} code={country.code} />)}
    </div>,
  parameters: {
    controls: {
      hideNoControlsWarning: true
    },
    viewport: {
      defaultViewport: 'desktop'
    }
  }
}`,...(z=(v=s.parameters)==null?void 0:v.docs)==null?void 0:z.source}}};const q=["Default","Rectangular","Small","Large","AllCountries"];export{s as AllCountries,a as Default,n as Large,o as Rectangular,t as Small,q as __namedExportsOrder,O as default};
