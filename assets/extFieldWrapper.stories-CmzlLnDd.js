import{j as e}from"./jsx-runtime-BlDnFLNC.js";import"./index-Cu9bd8lq.js";import{B as j}from"./BaseInput-Bsxqtr7E.js";import{I as F}from"./InputLabel-D6nbjr-V.js";import{H as $}from"./HintText-OF84DecB.js";import{V as S}from"./ValidationIcons-BDZvj0Ff.js";import{B as H}from"./Box-3lKle-Yf.js";import"./memoTheme-bqMoNA21.js";import"./DefaultPropsProvider-DcRJznjO.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-B34fLoo2.js";import"./extends-CF3RwP-h.js";import"./List-DiX7YVEd.js";import"./useEnhancedEffect-BAizwhs3.js";import"./index-C1I0bJEX.js";import"./useFormControl-B8j8LVoj.js";import"./Select-DNuoIsbs.js";import"./index-BaAsS3ug.js";import"./inheritsLoose-DR8r8Ogv.js";import"./index-BWPb3MHu.js";import"./createSvgIcon-uzUCMsDg.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./isMuiElement-B1vlATT2.js";import"./Typography-C6vstWy-.js";import"./Icon-DtJjwMDF.js";import"./iframe-Dc6AG2q4.js";import"../sb-preview/runtime.js";import"./dynamic-import-helper-BheWnx7M.js";import"./ThemeProvider-c8RMOMsA.js";import"./CircularProgress-wlGyc7WS.js";function C({id:l,label:E,value:q="text field",placeholder:z,helperText:i="",type:I="email",error:o=!1,disabled:u=!1,status:n=null,size:p="medium",onChange:V=()=>{},className:_=""}){return e.jsxs(H,{className:`text-field-wrapper text-field-wrapper--${p} ${n?`text-field-wrapper__outlined-input--${n}`:""} ${o?"text-field-wrapper__outlined-input--error":""} ${u?"text-field-wrapper__outlined-input--disabled":""} ${_}`,display:"flex",flexDirection:"column",gap:.5,children:[e.jsx(F,{htmlFor:l,children:E}),e.jsx(j,{id:l,placeholder:z,value:q,onChange:V,type:I,error:o,disabled:u,size:p,endIcon:e.jsx(S,{status:n})}),i&&e.jsx($,{text:i,error:o,id:`${l}-hint`})]})}C.__docgenInfo={description:"",methods:[],displayName:"TextFieldWrapper",props:{id:{required:!0,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'text field'",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:""},helperText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},type:{required:!1,tsType:{name:"union",raw:"'text' | 'email' | 'password'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'email'"},{name:"literal",value:"'password'"}]},description:"",defaultValue:{value:"'email'",computed:!1}},hint:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},status:{required:!1,tsType:{name:"union",raw:"'error' | 'success' | null",elements:[{name:"literal",value:"'error'"},{name:"literal",value:"'success'"},{name:"null"}]},description:"",defaultValue:{value:"null",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const pe={title:"ui/components/molecules/TextFieldWrapper",component:C,argTypes:{value:{control:"text"},label:{control:"text"},hint:{control:"text"},placeholder:{control:"text"},status:{control:"select",options:["default","error","success"],mapping:{default:null,error:"error",success:"success"}},type:{control:"select",options:["text","email","password"]},size:{control:"select",options:["small","medium","large"]}}},r={args:{id:"input-default",label:"Nombre",value:"",placeholder:"Juan Pérez",helperText:"Ingresa tu nombre",status:null,type:"text",size:"medium",onChange:()=>{}}},t={args:{id:"input-error",label:"Correo",value:"",placeholder:"correo@ejemplo.com",helperText:"Formato de correo inválido",status:"error",type:"email",size:"medium",onChange:()=>{}}},a={args:{id:"input-success",label:"Usuario",value:"texto válido",helperText:"Todo está correcto",status:"success",type:"text",size:"medium",onChange:()=>{}}},s={args:{id:"input-password",label:"Contraseña",value:"",status:null,type:"password",size:"medium",onChange:()=>{}}};var m,d,c;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(c=(d=r.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var f,x,g;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(g=(x=t.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var v,h,T;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(T=(h=a.parameters)==null?void 0:h.docs)==null?void 0:T.source}}};var y,w,b;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    id: 'input-password',
    label: 'Contraseña',
    value: '',
    status: null,
    type: 'password',
    size: 'medium',
    onChange: () => {}
  }
}`,...(b=(w=s.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};const me=["Default","Error","Success","Password"];export{r as Default,t as Error,s as Password,a as Success,me as __namedExportsOrder,pe as default};
