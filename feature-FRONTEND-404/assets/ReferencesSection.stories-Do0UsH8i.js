import{j as e}from"./jsx-runtime-BlDnFLNC.js";import"./index-Cu9bd8lq.js";import{L as h}from"./LabelReferences-BwNsIO8v.js";import{R as y}from"./Reference-B22quRFm.js";import{B as a}from"./Box-CLM-zTBi.js";import"./createTheme-BhqqGhI8.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-B89909lT.js";import"./generateUtilityClasses-BGeLZbGS.js";import"./extends-CF3RwP-h.js";import"./extendSxProp-Bwz5inzR.js";const _="_list_pf4hf_7",c={"references-section":"_references-section_pf4hf_1",list:_};function g({references:n}){return e.jsxs("section",{className:c["references-section"],children:[e.jsx(h,{text:"REFERENCIAS"}),e.jsx("ol",{className:c.list,children:n.map((o,S)=>e.jsx("li",{children:e.jsx(y,{text:o.text,color:"tertiary"})},`${o.text}-${S.toString()}`))})]})}g.__docgenInfo={description:"",methods:[],displayName:"ReferencesSection",props:{references:{required:!0,tsType:{name:"Array",elements:[{name:"ReferenceItem"}],raw:"ReferenceItem[]"},description:""}}};const K={title:"ui/components/organisms/references-section",component:g,argTypes:{references:{control:!1}},parameters:{layout:"fullscreen"},decorators:[n=>e.jsx(a,{sx:{p:2},children:e.jsx(a,{sx:{transform:"scale(0.85)",transformOrigin:"top left"},children:e.jsx(n,{})})})]},R=[{text:"A. Gessain, E. Nakoune, Y. Yazdanpanah, Monkeypox. N. Engl. J. Med. 387, 1783–1793 (2022)."},{text:"John Doe, A Study on React Components. Journal of Web Development, 12, 34-56 (2023)."},{text:"Jane Smith, The Art of Atomic Design. Design Systems Monthly, 5(2), 110-125 (2021)."}],r={args:{references:R}},s={args:{references:[R[0]]}},t={args:{references:[]}};var i,m,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    references: MOCKED_REFERENCES
  }
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var f,l,d;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    references: [MOCKED_REFERENCES[0]]
  }
}`,...(d=(l=s.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var E,u,x;t.parameters={...t.parameters,docs:{...(E=t.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    references: []
  }
}`,...(x=(u=t.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};const T=["Default","SingleReference","Empty"];export{r as Default,t as Empty,s as SingleReference,T as __namedExportsOrder,K as default};
