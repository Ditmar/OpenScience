import{j as e}from"./jsx-runtime-BlDnFLNC.js";import"./index-Cu9bd8lq.js";import{L as S}from"./LabelReferences-BwNsIO8v.js";import{R as y}from"./Reference-B22quRFm.js";import{B as s}from"./Box-p8B8X2jD.js";import"./createTheme-Wz6RB6Fy.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-B89909lT.js";import"./generateUtilityClasses-CPRdC64H.js";import"./index-nHByv8xN.js";import"./extends-CF3RwP-h.js";import"./extendSxProp-DZpmlPTG.js";function x({references:g}){return e.jsxs(s,{component:"section",sx:{backgroundColor:"background.paper",borderRadius:"8px",p:2,"& a":{color:"text.primary",textDecoration:"underline"}},children:[e.jsx(S,{text:"REFERENCIAS"}),e.jsx(s,{component:"ol",sx:{color:"text.primary",display:"flex",flexDirection:"column",gap:"10px",listStyle:"none",mt:2,p:0},children:g.map((n,R)=>e.jsx("li",{children:e.jsx(y,{text:n.text})},`${n.text}-${R.toString()}`))})]})}x.__docgenInfo={description:"",methods:[],displayName:"ReferencesSection",props:{references:{required:!0,tsType:{name:"Array",elements:[{name:"ReferenceItem"}],raw:"ReferenceItem[]"},description:""}}};const I={title:"ui/components/organisms/references-section",component:x,argTypes:{references:{control:!1}},parameters:{layout:"padded"}},E=[{text:"A. Gessain, E. Nakoune, Y. Yazdanpanah, Monkeypox. N. Engl. J. Med. 387, 1783–1793 (2022)."},{text:"John Doe, A Study on React Components. Journal of Web Development, 12, 34-56 (2023)."},{text:"Jane Smith, The Art of Atomic Design. Design Systems Monthly, 5(2), 110-125 (2021)."}],r={args:{references:E}},o={args:{references:[E[0]]}},t={args:{references:[]}};var a,c,p;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    references: MOCKED_REFERENCES
  }
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,i,l;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    references: [MOCKED_REFERENCES[0]]
  }
}`,...(l=(i=o.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var d,f,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    references: []
  }
}`,...(u=(f=t.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};const J=["Default","SingleReference","Empty"];export{r as Default,t as Empty,o as SingleReference,J as __namedExportsOrder,I as default};
