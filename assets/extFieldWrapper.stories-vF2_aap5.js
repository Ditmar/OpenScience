import{j as e}from"./jsx-runtime-BlDnFLNC.js";import{r as H}from"./index-Cu9bd8lq.js";import{B as L}from"./BaseInput-uErVnT_A.js";import{I as N}from"./InputLabel-C2pdM4RN.js";import{H as B}from"./HintText-DJxJWaIW.js";import{V as P}from"./ValidationIcons-oK8MVv79.js";import{B as R}from"./Box-CuiKCkbM.js";import"./TextField-7Kczcved.js";import"./generateUtilityClasses-CPRdC64H.js";import"./useSlot-BDqnu5Qn.js";import"./useForkRef-CXZ2Yisc.js";import"./DefaultPropsProvider-15asn56a.js";import"./useId-Cw7oCgN8.js";import"./styled-BpwaniR7.js";import"./defaultTheme-CBhoIubE.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-B34fLoo2.js";import"./extends-CF3RwP-h.js";import"./Select-QZXSjygQ.js";import"./index-BaAsS3ug.js";import"./composeClasses-CAXbtk_0.js";import"./Modal-BlSIih_e.js";import"./useFormControl-DxQRLcK0.js";import"./index-CtMj7sh_.js";import"./extendSxProp-B0E1S3My.js";import"./emotion-react.browser.esm-66DkCD4v.js";import"./memoTheme-CoiMSXCT.js";import"./useEnhancedEffect-BAizwhs3.js";import"./useTimeout-Bdno_bRx.js";import"./index-BWPb3MHu.js";import"./useTheme-AW9uxI0V.js";import"./utils-UHxy9mJP.js";import"./inheritsLoose-DR8r8Ogv.js";import"./Paper-DXB_3DYU.js";import"./mergeSlotProps-DPdjSIcl.js";import"./List-Cer2P6Ul.js";import"./createSvgIcon-WBtNAgIH.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./isMuiElement-B1vlATT2.js";import"./InputAdornment-CkOAcdF4.js";import"./Typography-CMaDmQ-6.js";import"./Icon-BjBKMd74.js";import"./iframe-BrudPyHX.js";import"../sb-preview/runtime.js";import"./dynamic-import-helper-BheWnx7M.js";import"./ThemeProvider-DLz_u8RG.js";import"./tokens-DgrxhfY7.js";import"./CssBaseline-BrV4w6kJ.js";import"./CircularProgress-D4Sd_INY.js";function q({id:s,label:z,placeholder:I,helperText:p="",type:V="email",error:l=!1,disabled:m=!1,status:n=null,size:u="medium",value:_,onChange:i,className:j=""}){const[F,S]=H.useState(_??""),$=d=>{S(d.target.value),i==null||i(d)};return e.jsxs(R,{className:`text-field-wrapper text-field-wrapper--${u} ${n?`text-field-wrapper__outlined-input--${n}`:""} ${l?"text-field-wrapper__outlined-input--error":""} ${m?"text-field-wrapper__outlined-input--disabled":""} ${j}`,display:"flex",flexDirection:"column",gap:.5,children:[e.jsx(N,{htmlFor:s,children:z}),e.jsx(L,{id:s,placeholder:I,value:F,onChange:$,type:V,error:l,disabled:m,size:u,endIcon:e.jsx(P,{status:n})}),p&&e.jsx(B,{text:p,error:l,id:`${s}-hint`})]})}q.__docgenInfo={description:"",methods:[],displayName:"TextFieldWrapper",props:{id:{required:!0,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},helperText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},type:{required:!1,tsType:{name:"union",raw:"'text' | 'email' | 'password'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'email'"},{name:"literal",value:"'password'"}]},description:"",defaultValue:{value:"'email'",computed:!1}},hint:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},status:{required:!1,tsType:{name:"union",raw:"'error' | 'success' | null",elements:[{name:"literal",value:"'error'"},{name:"literal",value:"'success'"},{name:"null"}]},description:"",defaultValue:{value:"null",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const He={title:"ui/components/molecules/TextFieldWrapper",component:q,argTypes:{value:{control:"text"},label:{control:"text"},hint:{control:"text"},placeholder:{control:"text"},status:{control:"select",options:["default","error","success"],mapping:{default:null,error:"error",success:"success"}},type:{control:"select",options:["text","email","password"]},size:{control:"select",options:["small","medium","large"]}}},r={args:{id:"input-default",label:"Nombre",value:"",placeholder:"Juan Pérez",helperText:"Ingresa tu nombre",status:null,type:"text",size:"medium",onChange:()=>{}}},t={args:{id:"input-error",label:"Correo",value:"",placeholder:"correo@ejemplo.com",helperText:"Formato de correo inválido",status:"error",type:"email",size:"medium",onChange:()=>{}}},a={args:{id:"input-success",label:"Usuario",value:"texto válido",helperText:"Todo está correcto",status:"success",type:"text",size:"medium",onChange:()=>{}}},o={args:{id:"input-password",label:"Contraseña",value:"",status:null,type:"password",size:"medium",onChange:()=>{}}};var c,f,x;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(x=(f=r.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var g,v,h;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(h=(v=t.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var T,y,w;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(w=(y=a.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var b,C,E;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    id: 'input-password',
    label: 'Contraseña',
    value: '',
    status: null,
    type: 'password',
    size: 'medium',
    onChange: () => {}
  }
}`,...(E=(C=o.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};const Le=["Default","Error","Success","Password"];export{r as Default,t as Error,o as Password,a as Success,Le as __namedExportsOrder,He as default};
