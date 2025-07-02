import{j as e}from"./jsx-runtime-BlDnFLNC.js";import"./index-Cu9bd8lq.js";import{A as t}from"./AtomText-P3IPfhnx.js";import"./memoTheme-0AXA2cq0.js";import"./DefaultPropsProvider-Dk5VEUHn.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-B34fLoo2.js";import"./extends-CF3RwP-h.js";import"./Typography-DyeyiV7L.js";import"./index-t9-nnUfg.js";import"./emotion-react.browser.esm-4jS8jxUj.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";const I={title:"Atoms/AtomText",component:t,argTypes:{color:{control:{type:"select"},options:["paragraph_dark","icon_text","light"]},size:{control:{type:"select"},options:["sm","md","lg"]},align:{control:{type:"radio"},options:["left","center","right"]},fontWeight:{control:{type:"number"}},gutterBottom:{control:{type:"boolean"}}},args:{children:"Texto de ejemplo",color:"paragraph_dark",size:"md",align:"left",fontWeight:400,gutterBottom:!1}},i={};function o(){return e.jsxs(e.Fragment,{children:[e.jsx(t,{size:"sm",children:"Texto tamaño pequeño (sm)"}),e.jsx(t,{size:"md",children:"Texto tamaño mediano (md)"}),e.jsx(t,{size:"lg",children:"Texto tamaño grande (lg)"})]})}function r(){return e.jsxs(e.Fragment,{children:[e.jsx(t,{color:"paragraph_dark",children:"Color: paragraph_dark"}),e.jsx(t,{color:"icon_text",children:"Color: icon_text"}),e.jsx("div",{style:{backgroundColor:"#333"},children:e.jsx(t,{color:"light",children:"Color: light (sobre fondo oscuro)"})})]})}function n(){return e.jsxs("div",{style:{width:300},children:[e.jsx(t,{align:"left",children:"Alineado a la izquierda"}),e.jsx(t,{align:"center",children:"Alineado al centro"}),e.jsx(t,{align:"right",children:"Alineado a la derecha"})]})}function a(){return e.jsxs(e.Fragment,{children:[e.jsx(t,{fontWeight:300,children:"Peso fuente 300"}),e.jsx(t,{fontWeight:400,children:"Peso fuente 400 (normal)"}),e.jsx(t,{fontWeight:700,children:"Peso fuente 700 (negrita)"})]})}o.__docgenInfo={description:"",methods:[],displayName:"Sizes"};r.__docgenInfo={description:"",methods:[],displayName:"Colors"};n.__docgenInfo={description:"",methods:[],displayName:"Alignment"};a.__docgenInfo={description:"",methods:[],displayName:"FontWeightVariants"};var s,l,m;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(m=(l=i.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var c,d,p;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`function Sizes() {
  return <>
      <AtomText size="sm">Texto tamaño pequeño (sm)</AtomText>
      <AtomText size="md">Texto tamaño mediano (md)</AtomText>
      <AtomText size="lg">Texto tamaño grande (lg)</AtomText>
    </>;
}`,...(p=(d=o.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var g,x,h;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`function Colors() {
  return <>
      <AtomText color="paragraph_dark">Color: paragraph_dark</AtomText>
      <AtomText color="icon_text">Color: icon_text</AtomText>
      <div style={{
      backgroundColor: '#333'
    }}>
        <AtomText color="light">Color: light (sobre fondo oscuro)</AtomText>
      </div>
    </>;
}`,...(h=(x=r.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var u,f,A;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`function Alignment() {
  return <div style={{
    width: 300
  }}>
      <AtomText align="left">Alineado a la izquierda</AtomText>
      <AtomText align="center">Alineado al centro</AtomText>
      <AtomText align="right">Alineado a la derecha</AtomText>
    </div>;
}`,...(A=(f=n.parameters)==null?void 0:f.docs)==null?void 0:A.source}}};var T,_,j;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`function FontWeightVariants() {
  return <>
      <AtomText fontWeight={300}>Peso fuente 300</AtomText>
      <AtomText fontWeight={400}>Peso fuente 400 (normal)</AtomText>
      <AtomText fontWeight={700}>Peso fuente 700 (negrita)</AtomText>
    </>;
}`,...(j=(_=a.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};const N=["Default","Sizes","Colors","Alignment","FontWeightVariants"];export{n as Alignment,r as Colors,i as Default,a as FontWeightVariants,o as Sizes,N as __namedExportsOrder,I as default};
