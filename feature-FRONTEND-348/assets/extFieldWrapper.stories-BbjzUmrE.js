import{j as e}from"./jsx-runtime-BlDnFLNC.js";import{r as H}from"./index-Cu9bd8lq.js";import{B as L}from"./BaseInput-CoXmgoqH.js";import{I as N}from"./InputLabel-BHnh_Nqp.js";import{H as B}from"./HintText-CPy758sa.js";import{V as P}from"./ValidationIcons-BsRo4DRH.js";import{B as R}from"./Box-p8B8X2jD.js";import"./TextField-iIEoH2gV.js";import"./generateUtilityClasses-CPRdC64H.js";import"./useSlot-BDqnu5Qn.js";import"./useForkRef-CXZ2Yisc.js";import"./DefaultPropsProvider-15asn56a.js";import"./useId-Cw7oCgN8.js";import"./styled-DYqe69MS.js";import"./defaultTheme-DGUDAp2c.js";import"./createTheme-Wz6RB6Fy.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-B89909lT.js";import"./index-nHByv8xN.js";import"./extends-CF3RwP-h.js";import"./Select-Ca69Df13.js";import"./index-BaAsS3ug.js";import"./useSlotProps-B3Hw36CH.js";import"./composeClasses-CAXbtk_0.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-B1cq0otB.js";import"./useTheme-Yy9QpvGT.js";import"./extendSxProp-DZpmlPTG.js";import"./memoTheme-E6j5siMe.js";import"./ownerWindow-DvT1GKkC.js";import"./utils-BKS3DThN.js";import"./useTimeout-CpWYkyOc.js";import"./useEnhancedEffect-BAizwhs3.js";import"./inheritsLoose-DR8r8Ogv.js";import"./index-BWPb3MHu.js";import"./getReactElementRef-Ch8XQsCo.js";import"./mergeSlotProps-DPdjSIcl.js";import"./Modal-CqNy2sB5.js";import"./List-TPzf6IyN.js";import"./InputBase-CJjmY3p4.js";import"./useFormControl-DxQRLcK0.js";import"./index-BDKYfTe2.js";import"./emotion-react.browser.esm-BMvUHC7V.js";import"./createSvgIcon-BF1AuBJe.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./isMuiElement-B1vlATT2.js";import"./InputAdornment-CpA4Fgx6.js";import"./Typography-CxNfrNL8.js";import"./Icon-FGrhg1wm.js";import"./iframe-DodXccCp.js";import"../sb-preview/runtime.js";import"./dynamic-import-helper-BheWnx7M.js";import"./ThemeProvider-3x0qu3Tp.js";import"./default-BPGZ2UbV.js";import"./tokens-ZxnEyZtB.js";import"./ThemeProvider-jJv6Tswn.js";import"./CssBaseline-2LC2uDMg.js";import"./CircularProgress-CA5A_CD-.js";function q({id:s,label:z,placeholder:I,helperText:p="",type:V="email",error:l=!1,disabled:m=!1,status:n=null,size:u="medium",value:_,onChange:i,className:j=""}){const[F,S]=H.useState(_??""),$=d=>{S(d.target.value),i==null||i(d)};return e.jsxs(R,{className:`text-field-wrapper text-field-wrapper--${u} ${n?`text-field-wrapper__outlined-input--${n}`:""} ${l?"text-field-wrapper__outlined-input--error":""} ${m?"text-field-wrapper__outlined-input--disabled":""} ${j}`,display:"flex",flexDirection:"column",gap:.5,children:[e.jsx(N,{htmlFor:s,children:z}),e.jsx(L,{id:s,placeholder:I,value:F,onChange:$,type:V,error:l,disabled:m,size:u,endIcon:e.jsx(P,{status:n})}),p&&e.jsx(B,{text:p,error:l,id:`${s}-hint`})]})}q.__docgenInfo={description:"",methods:[],displayName:"TextFieldWrapper",props:{id:{required:!0,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},helperText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},type:{required:!1,tsType:{name:"union",raw:"'text' | 'email' | 'password'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'email'"},{name:"literal",value:"'password'"}]},description:"",defaultValue:{value:"'email'",computed:!1}},hint:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},status:{required:!1,tsType:{name:"union",raw:"'error' | 'success' | null",elements:[{name:"literal",value:"'error'"},{name:"literal",value:"'success'"},{name:"null"}]},description:"",defaultValue:{value:"null",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const Je={title:"ui/components/molecules/TextFieldWrapper",component:q,argTypes:{value:{control:"text"},label:{control:"text"},hint:{control:"text"},placeholder:{control:"text"},status:{control:"select",options:["default","error","success"],mapping:{default:null,error:"error",success:"success"}},type:{control:"select",options:["text","email","password"]},size:{control:"select",options:["small","medium","large"]}}},r={args:{id:"input-default",label:"Nombre",value:"",placeholder:"Juan Pérez",helperText:"Ingresa tu nombre",status:null,type:"text",size:"medium",onChange:()=>{}}},t={args:{id:"input-error",label:"Correo",value:"",placeholder:"correo@ejemplo.com",helperText:"Formato de correo inválido",status:"error",type:"email",size:"medium",onChange:()=>{}}},a={args:{id:"input-success",label:"Usuario",value:"texto válido",helperText:"Todo está correcto",status:"success",type:"text",size:"medium",onChange:()=>{}}},o={args:{id:"input-password",label:"Contraseña",value:"",status:null,type:"password",size:"medium",onChange:()=>{}}};var c,f,x;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(E=(C=o.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};const Ue=["Default","Error","Success","Password"];export{r as Default,t as Error,o as Password,a as Success,Ue as __namedExportsOrder,Je as default};
