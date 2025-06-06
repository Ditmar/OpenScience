import{j as e}from"./jsx-runtime-BlDnFLNC.js";import"./index-Cu9bd8lq.js";import{B as F}from"./BaseInput-DakY3I4Z.js";import{I as V}from"./InputLabel-0M5vsZqU.js";import{H as N}from"./HintText-D7fPj3jn.js";import{V as P}from"./ValidationIcons-Cl48FtmK.js";import{B as $}from"./Box-CsITdlgt.js";import"./memoTheme-Debse8hP.js";import"./DefaultPropsProvider-DsvfhTCX.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-B34fLoo2.js";import"./extends-CF3RwP-h.js";import"./Select-CVU3TS5e.js";import"./index-rYTj-vD5.js";import"./index-50xOf4uL.js";import"./inheritsLoose-DR8r8Ogv.js";import"./index-BWPb3MHu.js";import"./createSvgIcon-AYufWPVS.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Typography-CoIjpQfn.js";function _({id:n,label:C,value:E,placeholder:q,helperText:i="",type:z="text",error:o=!1,disabled:p=!1,status:l=null,size:u="medium",onChange:I,className:j=""}){return e.jsxs($,{className:`text-field-wrapper text-field-wrapper--${u} ${l?`text-field-wrapper__outlined-input--${l}`:""} ${o?"text-field-wrapper__outlined-input--error":""} ${p?"text-field-wrapper__outlined-input--disabled":""} ${j}`,display:"flex",flexDirection:"column",gap:.5,children:[e.jsx(V,{htmlFor:n,children:C}),e.jsx(F,{id:n,placeholder:q,value:E,onChange:I,type:z,error:o,disabled:p,size:u,endIcon:e.jsx(P,{status:l}),className:"text-field-wrapper__outlined-input",InputProps:{className:"text-field-wrapper__input-base",classes:{focused:"text-field-wrapper__outlined-input--focused",error:"text-field-wrapper__outlined-input--error",disabled:"text-field-wrapper__outlined-input--disabled"}}}),i&&e.jsx(N,{text:i,error:o,id:`${n}-hint`})]})}_.__docgenInfo={description:"",methods:[],displayName:"TextFieldWrapper",props:{id:{required:!0,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},helperText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},type:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'text'",computed:!1}},hint:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},status:{required:!1,tsType:{name:"union",raw:"'success' | 'warning' | 'error' | null",elements:[{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"},{name:"null"}]},description:"",defaultValue:{value:"null",computed:!1}},size:{required:!1,tsType:{name:"TextFieldProps['size']",raw:"TextFieldProps['size']"},description:"",defaultValue:{value:"'medium'",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const ee={title:"ui/components/molecules/TextFieldWrapper",component:_,argTypes:{value:{control:"text"},label:{control:"text"},hint:{control:"text"},placeholder:{control:"text"},status:{control:"select",options:["default","error","success"],mapping:{default:null,error:"error",success:"success"}},type:{control:"select",options:["text","email","password"]},size:{control:"select",options:["small","medium","large"]}}},r={args:{id:"input-default",label:"Nombre",value:"",placeholder:"Juan Pérez",helperText:"Ingresa tu nombre",status:null,type:"text",size:"medium",onChange:()=>{}}},t={args:{id:"input-error",label:"Correo",value:"",placeholder:"correo@ejemplo.com",helperText:"Formato de correo inválido",status:"error",type:"email",size:"medium",onChange:()=>{}}},a={args:{id:"input-success",label:"Usuario",value:"texto válido",helperText:"Todo está correcto",status:"success",type:"text",size:"medium",onChange:()=>{}}},s={args:{id:"input-password",label:"Contraseña",value:"",status:null,type:"password",size:"medium",onChange:()=>{}}};var d,m,c;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    id: 'input-default',
    label: 'Nombre',
    value: '',
    placeholder: 'Juan Pérez',
    helperText: 'Ingresa tu nombre',
    status: null,
    type: 'text',
    size: 'medium',
    onChange: () => {}
  }
}`,...(c=(m=r.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var f,x,g;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    id: 'input-error',
    label: 'Correo',
    value: '',
    placeholder: 'correo@ejemplo.com',
    helperText: 'Formato de correo inválido',
    status: 'error',
    type: 'email',
    size: 'medium',
    onChange: () => {}
  }
}`,...(g=(x=t.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var h,v,T;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    id: 'input-success',
    label: 'Usuario',
    value: 'texto válido',
    helperText: 'Todo está correcto',
    status: 'success',
    type: 'text',
    size: 'medium',
    onChange: () => {}
  }
}`,...(T=(v=a.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var y,w,b;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    id: 'input-password',
    label: 'Contraseña',
    value: '',
    status: null,
    type: 'password',
    size: 'medium',
    onChange: () => {}
  }
}`,...(b=(w=s.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};const re=["Default","Error","Success","Password"];export{r as Default,t as Error,s as Password,a as Success,re as __namedExportsOrder,ee as default};
