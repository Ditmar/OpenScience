import{j as e}from"./jsx-runtime-DRTy3Uxn.js";import"./index-BBkUAzwr.js";const L="_error_1j2xr_1",M="_hint_1j2xr_10",W="_input_1j2xr_21",H="_label_1j2xr_43",D="_disabled_1j2xr_54",r={error:L,"error-message":"_error-message_1j2xr_5",hint:M,"icon-left":"_icon-left_1j2xr_15","icon-right":"_icon-right_1j2xr_16",input:W,"input-container":"_input-container_1j2xr_30",label:H,"main-input-wrapper":"_main-input-wrapper_1j2xr_48",disabled:D};function N(R){const{label:l,placeholder:T,value:E,onChange:q,leftIcon:p,rightIcon:d,hint:c,error:n,disabled:u}=R,a=`input-${l.replace(/\s+/g,"-").toLowerCase()}`,w=[r["input-container"],n?r.error:"",u?r.disabled:""].join(" ");return e.jsxs("div",{className:r["main-input-wrapper"],children:[e.jsx("label",{htmlFor:a,className:r.label,children:l}),e.jsxs("div",{className:w,children:[p&&e.jsx("div",{className:r["icon-left"],children:p}),e.jsx("input",{id:a,type:"text",className:r.input,placeholder:T,value:E,onChange:q,disabled:u,"aria-describedby":c??n?`${a}-hint`:void 0,"aria-invalid":!!n}),d&&e.jsx("div",{className:r["icon-right"],children:d})]}),(c??n)&&e.jsx("p",{id:`${a}-hint`,className:n?r["error-message"]:r.hint,children:n??c})]})}N.__docgenInfo={description:"",methods:[],displayName:"MainInput",props:{label:{required:!0,tsType:{name:"string"},description:""},placeholder:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""},leftIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},rightIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},hint:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""}}};const O={title:"Components/MainInput",component:N};function S(){return e.jsx("span",{children:"📧"})}function $(){return e.jsx("span",{children:"❌"})}const t={args:{label:"Nombre",placeholder:"Ingresa tu nombre",value:"",onChange:()=>{}}},o={args:{label:"Correo",placeholder:"correo@ejemplo.com",value:"",onChange:()=>{},leftIcon:e.jsx(S,{}),rightIcon:e.jsx($,{})}},s={args:{label:"Usuario",placeholder:"usuario123",value:"",onChange:()=>{},hint:"Debe tener al menos 6 caracteres"}},i={args:{label:"Contraseña",placeholder:"********",value:"",onChange:()=>{},error:"Campo obligatorio"}};var m,h,g;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Nombre',
    placeholder: 'Ingresa tu nombre',
    value: '',
    onChange: () => {}
  }
}`,...(g=(h=t.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var _,b,x;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: 'Correo',
    placeholder: 'correo@ejemplo.com',
    value: '',
    onChange: () => {},
    leftIcon: <LeftIcon />,
    rightIcon: <RightIcon />
  }
}`,...(x=(b=o.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var j,I,f;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: 'Usuario',
    placeholder: 'usuario123',
    value: '',
    onChange: () => {},
    hint: 'Debe tener al menos 6 caracteres'
  }
}`,...(f=(I=s.parameters)==null?void 0:I.docs)==null?void 0:f.source}}};var C,v,y;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: 'Contraseña',
    placeholder: '********',
    value: '',
    onChange: () => {},
    error: 'Campo obligatorio'
  }
}`,...(y=(v=i.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};const k=["Default","WithIcons","WithHint","WithError"];export{t as Default,i as WithError,s as WithHint,o as WithIcons,k as __namedExportsOrder,O as default};
