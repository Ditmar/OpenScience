import{j as e}from"./jsx-runtime-DRTy3Uxn.js";import"./index-BBkUAzwr.js";const L="_input_bxgsp_1",M="_disabled_bxgsp_31",W="_error_bxgsp_35",H="_clickable_bxgsp_47",$="_label_bxgsp_52",k="_hint_bxgsp_75",D="_tooltip_bxgsp_81",n={input:L,"input-container":"_input-container_bxgsp_17",disabled:M,error:W,"icon-left":"_icon-left_bxgsp_39","icon-right":"_icon-right_bxgsp_40",clickable:H,label:$,"main-input-wrapper":"_main-input-wrapper_bxgsp_61","error-message":"_error-message_bxgsp_69",hint:k,tooltip:D};function N(R){const{label:p,placeholder:T,value:E,onChange:q,leftIcon:d,rightIcon:u,hint:a,error:r,disabled:l}=R,t=`input-${p.replace(/\s+/g,"-").toLowerCase()}`,w=[n["input-container"],r?n.error:"",l?n.disabled:""].join(" ");return e.jsxs("div",{className:n["main-input-wrapper"],children:[e.jsxs("label",{htmlFor:t,className:n.label,children:[d&&e.jsx("span",{className:n["icon-left"],children:d}),p,a&&!r&&e.jsx("span",{className:n.tooltip,"data-tooltip":a,children:"ℹ️"})]}),e.jsxs("div",{className:w,children:[e.jsx("input",{id:t,type:"text",className:n.input,placeholder:T,value:E,onChange:q,disabled:l,"aria-describedby":a??r?`${t}-hint`:void 0,"aria-invalid":!!r}),u&&e.jsx("span",{className:`${n["icon-right"]} ${l?"":"clickable"}`,children:u})]}),(a??r)&&e.jsx("p",{id:`${t}-hint`,className:r?n["error-message"]:n.hint,children:r??a})]})}N.__docgenInfo={description:"",methods:[],displayName:"MainInput",props:{label:{required:!0,tsType:{name:"string"},description:""},placeholder:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""},leftIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},rightIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},hint:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""}}};const z={title:"Components/MainInput",component:N};function S(){return e.jsx("span",{children:"📧"})}function F(){return e.jsx("span",{children:"❌"})}const o={args:{label:"Nombre",placeholder:"Ingresa tu nombre",value:"",onChange:()=>{}}},s={args:{label:"Correo",placeholder:"correo@ejemplo.com",value:"",onChange:()=>{},leftIcon:e.jsx(S,{}),rightIcon:e.jsx(F,{})}},i={args:{label:"Usuario",placeholder:"usuario123",value:"",onChange:()=>{},hint:"Debe tener al menos 6 caracteres"}},c={args:{label:"Contraseña",placeholder:"********",value:"",onChange:()=>{},error:"Campo obligatorio"}};var m,g,h;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Nombre',
    placeholder: 'Ingresa tu nombre',
    value: '',
    onChange: () => {}
  }
}`,...(h=(g=o.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var b,_,x;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'Correo',
    placeholder: 'correo@ejemplo.com',
    value: '',
    onChange: () => {},
    leftIcon: <LeftIcon />,
    rightIcon: <RightIcon />
  }
}`,...(x=(_=s.parameters)==null?void 0:_.docs)==null?void 0:x.source}}};var I,f,C;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: 'Usuario',
    placeholder: 'usuario123',
    value: '',
    onChange: () => {},
    hint: 'Debe tener al menos 6 caracteres'
  }
}`,...(C=(f=i.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var v,j,y;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'Contraseña',
    placeholder: '********',
    value: '',
    onChange: () => {},
    error: 'Campo obligatorio'
  }
}`,...(y=(j=c.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};const A=["Default","WithIcons","WithHint","WithError"];export{o as Default,c as WithError,i as WithHint,s as WithIcons,A as __namedExportsOrder,z as default};
