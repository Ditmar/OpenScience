import{j as e}from"./jsx-runtime-BlDnFLNC.js";import{c as z}from"./createSvgIcon-7LE4h9uM.js";import{P as b}from"./pills-BX_XDNuv.js";import"./index-Cu9bd8lq.js";import"./memoTheme-B8az_ZV8.js";import"./styled-BE-mLrKi.js";import"./identifier-DJrRgG3J.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-B89909lT.js";import"./extends-CF3RwP-h.js";import"./DefaultPropsProvider-15asn56a.js";const k=z(e.jsx("path",{d:"M16.59 7.58 10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"})),j=z(e.jsx("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"})),C=["neutral-dark","neutral-light","brand-primary","brand-secondary","brand-tertiary","feedback-positive","feedback-negative","feedback-warning","read-only-disabled"],P=["filled","outline","soft"],I=["sm","md","lg"],w={title:"Atoms/Pill",component:b,parameters:{layout:"centered"},tags:["autodocs"]},i={args:{text:"100",color:"brand-primary",variant:"filled",size:"md",rounded:"r_md",iconPosition:"left"}},t={args:{text:"Con ícono izquierdo",color:"feedback-positive",variant:"filled",size:"md",rounded:"r_full",icon:e.jsx(k,{}),iconPosition:"left"}},a={args:{text:"Con ícono derecho",color:"feedback-negative",variant:"filled",size:"md",rounded:"r_md",icon:e.jsx(j,{}),iconPosition:"right"}},n={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:P.map(r=>e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:4,marginTop:0},children:r.toUpperCase()}),e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"1.5rem"},children:C.map(o=>e.jsxs("div",{children:[e.jsx("div",{style:{display:"flex",gap:"0.5rem",alignItems:"center",marginBottom:4},children:I.map(s=>e.jsx(b,{text:"100",color:o,variant:r,size:s,rounded:"r_md",stroke:r==="outline"?"border-soft":void 0},`${r}-${o}-${s}`))}),e.jsx("small",{style:{fontSize:12,color:"#888"},children:o})]},`${r}-${o}`))})]},r))})};n.storyName="Todas las combinaciones básicas";var d,l,c;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    text: '100',
    color: 'brand-primary',
    variant: 'filled',
    size: 'md',
    rounded: 'r_md',
    iconPosition: 'left'
  }
}`,...(c=(l=i.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var m,p,f;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    text: 'Con ícono izquierdo',
    color: 'feedback-positive',
    variant: 'filled',
    size: 'md',
    rounded: 'r_full',
    icon: <CheckCircleOutlineIcon />,
    iconPosition: 'left'
  }
}`,...(f=(p=t.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var u,g,v;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    text: 'Con ícono derecho',
    color: 'feedback-negative',
    variant: 'filled',
    size: 'md',
    rounded: 'r_md',
    icon: <ErrorOutlineIcon />,
    iconPosition: 'right'
  }
}`,...(v=(g=a.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var x,h,y;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  }}>
      {variantList.map(variant => <div key={variant}>
          <h4 style={{
        marginBottom: 4,
        marginTop: 0
      }}>{variant.toUpperCase()}</h4>
          <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1.5rem'
      }}>
            {colorList.map(color => <div key={\`\${variant}-\${color}\`}>
                <div style={{
            display: 'flex',
            gap: '0.5rem',
            alignItems: 'center',
            marginBottom: 4
          }}>
                  {sizeList.map(size => <Pill key={\`\${variant}-\${color}-\${size}\`} text="100" color={color} variant={variant} size={size} rounded="r_md" stroke={variant === 'outline' ? 'border-soft' : undefined} />)}
                </div>
                <small style={{
            fontSize: 12,
            color: '#888'
          }}>{color}</small>
              </div>)}
          </div>
        </div>)}
    </div>
}`,...(y=(h=n.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};const R=["BasicFilledPrimary","WithIconLeft","WithIconRight","VisualGrid"];export{i as BasicFilledPrimary,n as VisualGrid,t as WithIconLeft,a as WithIconRight,R as __namedExportsOrder,w as default};
