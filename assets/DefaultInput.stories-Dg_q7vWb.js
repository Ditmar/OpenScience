import{j as e}from"./jsx-runtime-DRTy3Uxn.js";import{r as h}from"./index-BBkUAzwr.js";const i=h.forwardRef(({value:a,disabled:n,error:r,id:t,hint:s,className:l,onChange:f,label:T,type:R="text",placeholder:q,required:B,readOnly:O,autoComplete:k,name:z},G)=>{const[J,I]=h.useState(!!a);h.useEffect(()=>{I(!!a)},[a]);const K=j=>{const L=j.target.value.length>0;I(L),f==null||f(j)},V=t?`${t}-message`:void 0;return e.jsxs("div",{className:`default-input ${l??""}`,children:[T&&e.jsx("label",{htmlFor:t,className:"default-input__label",children:T}),e.jsx("div",{className:`
          default-input__container
          ${J?"filled":""}
          ${r?"error":""}
          ${n?"disabled":""}
        `,children:e.jsx("input",{ref:G,id:t,type:R,disabled:n,placeholder:q,required:B,readOnly:O,autoComplete:k,name:z,onChange:K,className:"default-input__field","aria-invalid":!!r,"aria-describedby":V})}),(s??r)&&e.jsx("p",{id:V,className:`default-input__message ${r?"error":""}`,children:r??s})]})});i.displayName="DefaultInput";i.__docgenInfo={description:"",methods:[],displayName:"DefaultInput",props:{type:{defaultValue:{value:"'text'",computed:!1},required:!1}}};const Q={title:"Components/DefaultInput",component:i};function d({children:a}){return e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"3px",width:"330px",marginBottom:"16px"},children:a})}const o=({label:a,placeholder:n,hint:r,error:t,value:s,disabled:l})=>e.jsxs(e.Fragment,{children:[e.jsx(i,{label:a,placeholder:n,hint:r,error:t,value:s,disabled:l,className:"sharp-corners"}),e.jsx(i,{label:a,placeholder:n,hint:r,error:t,value:s,disabled:l,className:"rounded-corners"}),e.jsx(i,{label:a,placeholder:n,hint:r,error:t,value:s,disabled:l,className:"pill-shape"})]}),c={render:()=>e.jsx(d,{children:o({label:"Email Address",placeholder:"Input Text",hint:"Hint Text"})})},p={parameters:{pseudo:{focus:!0}},render:()=>e.jsx(d,{children:o({label:"Email Address",placeholder:"Input Text",hint:"Hint Text"})})},u={render:()=>e.jsx(d,{children:o({label:"Email Address",value:"Input Text",placeholder:"Input Text",hint:"Hint Text"})})},m={render:()=>e.jsx(d,{children:o({label:"Email Address",placeholder:"Input Text",error:"Hint Text"})})},x={render:()=>e.jsx(d,{children:o({label:"Email Address",placeholder:"Input Text",disabled:!0,hint:"Hint Text"})})};var E,b,g;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <VariantContainer>
      {createVariants({
      label: 'Email Address',
      placeholder: 'Input Text',
      hint: 'Hint Text'
    })}
    </VariantContainer>
}`,...(g=(b=c.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var _,A,C;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  parameters: {
    pseudo: {
      focus: true
    }
  },
  render: () => <VariantContainer>
      {createVariants({
      label: 'Email Address',
      placeholder: 'Input Text',
      hint: 'Hint Text'
    })}
    </VariantContainer>
}`,...(C=(A=p.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var H,N,D;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <VariantContainer>
      {createVariants({
      label: 'Email Address',
      value: 'Input Text',
      placeholder: 'Input Text',
      hint: 'Hint Text'
    })}
    </VariantContainer>
}`,...(D=(N=u.parameters)==null?void 0:N.docs)==null?void 0:D.source}}};var F,y,S;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <VariantContainer>
      {createVariants({
      label: 'Email Address',
      placeholder: 'Input Text',
      error: 'Hint Text'
    })}
    </VariantContainer>
}`,...(S=(y=m.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var $,v,w;x.parameters={...x.parameters,docs:{...($=x.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <VariantContainer>
      {createVariants({
      label: 'Email Address',
      placeholder: 'Input Text',
      disabled: true,
      hint: 'Hint Text'
    })}
    </VariantContainer>
}`,...(w=(v=x.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};const U=["Default","Focus","Filled","Error","Disabled"];export{c as Default,x as Disabled,m as Error,u as Filled,p as Focus,U as __namedExportsOrder,Q as default};
