import{j as e}from"./jsx-runtime-BlDnFLNC.js";import"./index-Cu9bd8lq.js";const L="_input_1cvlx_1",M="_disabled_1cvlx_31",W="_error_1cvlx_35",H="_label_1cvlx_52",$="_hint_1cvlx_75",D="_tooltip_1cvlx_81",r={input:L,"input-container":"_input-container_1cvlx_17",disabled:M,error:W,"icon-left":"_icon-left_1cvlx_39","icon-right":"_icon-right_1cvlx_40",label:H,"main-input-wrapper":"_main-input-wrapper_1cvlx_61","error-message":"_error-message_1cvlx_69",hint:$,tooltip:D};function N(R){const{label:p,placeholder:T,value:E,onChange:q,leftIcon:d,rightIcon:u,hint:a,error:n,disabled:l}=R,t=`input-${p.replace(/\s+/g,"-").toLowerCase()}`,w=[r["input-container"],n?r.error:"",l?r.disabled:""].join(" ");return e.jsxs("div",{className:r["main-input-wrapper"],children:[e.jsxs("label",{htmlFor:t,className:r.label,children:[d&&e.jsx("span",{className:r["icon-left"],children:d}),p,a&&!n&&e.jsx("span",{className:r.tooltip,"data-tooltip":a,children:"ℹ️"})]}),e.jsxs("div",{className:w,children:[e.jsx("input",{id:t,type:"text",className:r.input,placeholder:T,value:E,onChange:q,disabled:l,"aria-describedby":a??n?`${t}-hint`:void 0,"aria-invalid":!!n}),u&&e.jsx("span",{className:`${r["icon-right"]} ${l?"":"clickable"}`,children:u})]}),(a??n)&&e.jsx("p",{id:`${t}-hint`,className:n?r["error-message"]:r.hint,children:n??a})]})}N.__docgenInfo={description:"",methods:[],displayName:"MainInput",props:{label:{required:!0,tsType:{name:"string"},description:""},placeholder:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""},leftIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},rightIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},hint:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""}}};const O={title:"Components/MainInput",component:N};function S(){return e.jsx("span",{children:"📧"})}function F(){return e.jsx("span",{children:"❌"})}const o={args:{label:"Nombre",placeholder:"Ingresa tu nombre",value:"",onChange:()=>{}}},s={args:{label:"Correo",placeholder:"correo@ejemplo.com",value:"",onChange:()=>{},leftIcon:e.jsx(S,{}),rightIcon:e.jsx(F,{})}},i={args:{label:"Usuario",placeholder:"usuario123",value:"",onChange:()=>{},hint:"Debe tener al menos 6 caracteres"}},c={args:{label:"Contraseña",placeholder:"********",value:"",onChange:()=>{},error:"Campo obligatorio"}};var m,h,g;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Nombre',
    placeholder: 'Ingresa tu nombre',
    value: '',
    onChange: () => {}
  }
}`,...(g=(h=o.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var _,b,v;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: 'Correo',
    placeholder: 'correo@ejemplo.com',
    value: '',
    onChange: () => {},
    leftIcon: <LeftIcon />,
    rightIcon: <RightIcon />
  }
}`,...(v=(b=s.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var x,I,f;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'Usuario',
    placeholder: 'usuario123',
    value: '',
    onChange: () => {},
    hint: 'Debe tener al menos 6 caracteres'
  }
}`,...(f=(I=i.parameters)==null?void 0:I.docs)==null?void 0:f.source}}};var C,j,y;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: 'Contraseña',
    placeholder: '********',
    value: '',
    onChange: () => {},
    error: 'Campo obligatorio'
  }
}`,...(y=(j=c.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};const z=["Default","WithIcons","WithHint","WithError"];export{o as Default,c as WithError,i as WithHint,s as WithIcons,z as __namedExportsOrder,O as default};
