import{j as e}from"./jsx-runtime-BlDnFLNC.js";import{r as h}from"./index-Cu9bd8lq.js";const i=h.forwardRef(({value:a,disabled:n,error:t,id:r,hint:s,className:l,onChange:f,label:T,type:S="text",placeholder:$,required:L,readOnly:M,autoComplete:B,name:O},k)=>{const[z,g]=h.useState(!!a);h.useEffect(()=>{g(!!a)},[a]);const G=E=>{const J=E.target.value.length>0;g(J),f==null||f(E)},I=r?`${r}-message`:void 0;return e.jsxs("div",{className:`default-input ${l??""}`,children:[T&&e.jsx("label",{htmlFor:r,className:"default-input__label",children:T}),e.jsx("div",{className:`
          default-input__container
          ${z?"filled":""}
          ${t?"error":""}
          ${n?"disabled":""}
        `,children:e.jsx("input",{ref:k,id:r,type:S,disabled:n,placeholder:$,required:L,readOnly:M,autoComplete:B,name:O,onChange:G,className:"default-input__field","aria-invalid":!!t,"aria-describedby":I})}),(s??t)&&e.jsx("p",{id:I,className:`default-input__message ${t?"error":""}`,children:t??s})]})});i.displayName="DefaultInput";i.__docgenInfo={description:"",methods:[],displayName:"DefaultInput",props:{label:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""},leftIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},rightIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},hint:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""},type:{defaultValue:{value:"'text'",computed:!1},required:!1}}};const Q={title:"Atoms/DefaultInput",component:i};function d({children:a}){return e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"3px",width:"330px",marginBottom:"16px"},children:a})}const o=({label:a,placeholder:n,hint:t,error:r,value:s,disabled:l})=>e.jsxs(e.Fragment,{children:[e.jsx(i,{label:a,placeholder:n,hint:t,error:r,value:s,disabled:l,className:"sharp-corners"}),e.jsx(i,{label:a,placeholder:n,hint:t,error:r,value:s,disabled:l,className:"rounded-corners"}),e.jsx(i,{label:a,placeholder:n,hint:t,error:r,value:s,disabled:l,className:"pill-shape"})]}),c={render:()=>e.jsx(d,{children:o({label:"Email Address",placeholder:"Input Text",hint:"Hint Text"})})},p={parameters:{pseudo:{focus:!0}},render:()=>e.jsx(d,{children:o({label:"Email Address",placeholder:"Input Text",hint:"Hint Text"})})},u={render:()=>e.jsx(d,{children:o({label:"Email Address",value:"Input Text",placeholder:"Input Text",hint:"Hint Text"})})},m={render:()=>e.jsx(d,{children:o({label:"Email Address",placeholder:"Input Text",error:"Hint Text"})})},x={render:()=>e.jsx(d,{children:o({label:"Email Address",placeholder:"Input Text",disabled:!0,hint:"Hint Text"})})};var V,y,j;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <VariantContainer>
      {createVariants({
      label: 'Email Address',
      placeholder: 'Input Text',
      hint: 'Hint Text'
    })}
    </VariantContainer>
}`,...(j=(y=c.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var b,N,C;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(C=(N=p.parameters)==null?void 0:N.docs)==null?void 0:C.source}}};var H,R,_;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <VariantContainer>
      {createVariants({
      label: 'Email Address',
      value: 'Input Text',
      placeholder: 'Input Text',
      hint: 'Hint Text'
    })}
    </VariantContainer>
}`,...(_=(R=u.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var q,v,A;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <VariantContainer>
      {createVariants({
      label: 'Email Address',
      placeholder: 'Input Text',
      error: 'Hint Text'
    })}
    </VariantContainer>
}`,...(A=(v=m.parameters)==null?void 0:v.docs)==null?void 0:A.source}}};var D,F,w;x.parameters={...x.parameters,docs:{...(D=x.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <VariantContainer>
      {createVariants({
      label: 'Email Address',
      placeholder: 'Input Text',
      disabled: true,
      hint: 'Hint Text'
    })}
    </VariantContainer>
}`,...(w=(F=x.parameters)==null?void 0:F.docs)==null?void 0:w.source}}};const U=["Default","Focus","Filled","Error","Disabled"];export{c as Default,x as Disabled,m as Error,u as Filled,p as Focus,U as __namedExportsOrder,Q as default};
