import{j as e}from"./jsx-runtime-BlDnFLNC.js";import"./index-Cu9bd8lq.js";import{L as S}from"./LabelReferences-BwNsIO8v.js";import{R as _}from"./Reference-B22quRFm.js";const y="_list_161qk_11",o={"references-section":"_references-section_161qk_1",list:y};function u({references:g}){return e.jsxs("section",{className:o["references-section"],children:[e.jsx(S,{text:"REFERENCIAS"}),e.jsx("ol",{className:o.list,children:g.map((t,x)=>e.jsx("li",{children:e.jsx(_,{text:t.text})},`${t.text}-${x.toString()}`))})]})}u.__docgenInfo={description:"",methods:[],displayName:"ReferencesSection",props:{references:{required:!0,tsType:{name:"Array",elements:[{name:"ReferenceItem"}],raw:"ReferenceItem[]"},description:""}}};const C={title:"ui/components/organisms/references-section",component:u,argTypes:{references:{control:!1}},parameters:{layout:"padded"}},R=[{text:"A. Gessain, E. Nakoune, Y. Yazdanpanah, Monkeypox. N. Engl. J. Med. 387, 1783–1793 (2022)."},{text:"John Doe, A Study on React Components. Journal of Web Development, 12, 34-56 (2023)."},{text:"Jane Smith, The Art of Atomic Design. Design Systems Monthly, 5(2), 110-125 (2021)."}],r={args:{references:R}},s={args:{references:[R[0]]}},n={args:{references:[]}};var a,c,i;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    references: MOCKED_REFERENCES
  }
}`,...(i=(c=r.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var m,p,f;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    references: [MOCKED_REFERENCES[0]]
  }
}`,...(f=(p=s.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var l,d,E;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    references: []
  }
}`,...(E=(d=n.parameters)==null?void 0:d.docs)==null?void 0:E.source}}};const j=["Default","SingleReference","Empty"];export{r as Default,n as Empty,s as SingleReference,j as __namedExportsOrder,C as default};
