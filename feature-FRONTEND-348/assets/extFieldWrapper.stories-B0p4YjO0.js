import{j as e}from"./jsx-runtime-BlDnFLNC.js";import{r as H}from"./index-Cu9bd8lq.js";import{B as L}from"./BaseInput-vL13bPae.js";import{I as N}from"./InputLabel-5v5cEfLe.js";import{H as B}from"./HintText-DBSnjzJw.js";import{V as P}from"./ValidationIcons-DGCqs1kJ.js";import{B as R}from"./Box-BmUeQrpG.js";import"./TextField-DUUYW28x.js";import"./styled-BuMVIcWp.js";import"./defaultTheme-DgRkra0M.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-B34fLoo2.js";import"./extends-CF3RwP-h.js";import"./useSlot-D_Yk7QKg.js";import"./useForkRef-CXZ2Yisc.js";import"./DefaultPropsProvider-15asn56a.js";import"./useId-Cw7oCgN8.js";import"./Select-DTzJaeMc.js";import"./index-BaAsS3ug.js";import"./memoTheme-BkoIURdx.js";import"./Paper-DhYM3ya6.js";import"./useTheme-BaXeX56u.js";import"./extendSxProp-BtvtprHM.js";import"./useTimeout-BPiCGVvU.js";import"./useEnhancedEffect-BAizwhs3.js";import"./inheritsLoose-DR8r8Ogv.js";import"./index-BWPb3MHu.js";import"./useFormControl-nih90cGA.js";import"./List-DzpRmBbh.js";import"./createSvgIcon-A6eV6WRM.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./index-CrgZfTxv.js";import"./isMuiElement-B1vlATT2.js";import"./InputAdornment-hcO_iZf_.js";import"./Typography-C7MpjIBe.js";import"./Icon-DS135NKy.js";import"./iframe-DmbaM9NN.js";import"../sb-preview/runtime.js";import"./dynamic-import-helper-BheWnx7M.js";import"./ThemeProvider-C6OyrRCf.js";import"./tokens-jOr_kzcX.js";import"./CircularProgress-sjf4h6BA.js";function q({id:o,label:z,placeholder:I,helperText:u="",type:V="email",error:l=!1,disabled:p=!1,status:n=null,size:m="medium",value:_,onChange:i,className:j=""}){const[F,S]=H.useState(_??""),$=d=>{S(d.target.value),i==null||i(d)};return e.jsxs(R,{className:`text-field-wrapper text-field-wrapper--${m} ${n?`text-field-wrapper__outlined-input--${n}`:""} ${l?"text-field-wrapper__outlined-input--error":""} ${p?"text-field-wrapper__outlined-input--disabled":""} ${j}`,display:"flex",flexDirection:"column",gap:.5,children:[e.jsx(N,{htmlFor:o,children:z}),e.jsx(L,{id:o,placeholder:I,value:F,onChange:$,type:V,error:l,disabled:p,size:m,endIcon:e.jsx(P,{status:n})}),u&&e.jsx(B,{text:u,error:l,id:`${o}-hint`})]})}q.__docgenInfo={description:"",methods:[],displayName:"TextFieldWrapper",props:{id:{required:!0,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},helperText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},type:{required:!1,tsType:{name:"union",raw:"'text' | 'email' | 'password'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'email'"},{name:"literal",value:"'password'"}]},description:"",defaultValue:{value:"'email'",computed:!1}},hint:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},status:{required:!1,tsType:{name:"union",raw:"'error' | 'success' | null",elements:[{name:"literal",value:"'error'"},{name:"literal",value:"'success'"},{name:"null"}]},description:"",defaultValue:{value:"null",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const Ie={title:"ui/components/molecules/TextFieldWrapper",component:q,argTypes:{value:{control:"text"},label:{control:"text"},hint:{control:"text"},placeholder:{control:"text"},status:{control:"select",options:["default","error","success"],mapping:{default:null,error:"error",success:"success"}},type:{control:"select",options:["text","email","password"]},size:{control:"select",options:["small","medium","large"]}}},r={args:{id:"input-default",label:"Nombre",value:"",placeholder:"Juan Pérez",helperText:"Ingresa tu nombre",status:null,type:"text",size:"medium",onChange:()=>{}}},t={args:{id:"input-error",label:"Correo",value:"",placeholder:"correo@ejemplo.com",helperText:"Formato de correo inválido",status:"error",type:"email",size:"medium",onChange:()=>{}}},a={args:{id:"input-success",label:"Usuario",value:"texto válido",helperText:"Todo está correcto",status:"success",type:"text",size:"medium",onChange:()=>{}}},s={args:{id:"input-password",label:"Contraseña",value:"",status:null,type:"password",size:"medium",onChange:()=>{}}};var c,f,x;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(w=(y=a.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var b,C,E;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    id: 'input-password',
    label: 'Contraseña',
    value: '',
    status: null,
    type: 'password',
    size: 'medium',
    onChange: () => {}
  }
}`,...(E=(C=s.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};const Ve=["Default","Error","Success","Password"];export{r as Default,t as Error,s as Password,a as Success,Ve as __namedExportsOrder,Ie as default};
