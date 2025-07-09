import{j as r}from"./jsx-runtime-BlDnFLNC.js";import{c as A}from"./createSvgIcon-BF1AuBJe.js";import{V as B}from"./Visibility-i2kO55Es.js";import{r as $}from"./index-Cu9bd8lq.js";import{s as k}from"./styled-DYqe69MS.js";import{T as P}from"./TextField-CzfIMnFd.js";import{u as U}from"./useTheme-Yy9QpvGT.js";import{I as h}from"./InputAdornment-CpA4Fgx6.js";import"./generateUtilityClasses-CPRdC64H.js";import"./memoTheme-E6j5siMe.js";import"./DefaultPropsProvider-15asn56a.js";import"./createTheme-Wz6RB6Fy.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-B89909lT.js";import"./composeClasses-CAXbtk_0.js";import"./defaultTheme-DGUDAp2c.js";import"./index-nHByv8xN.js";import"./extends-CF3RwP-h.js";import"./useSlot-BDqnu5Qn.js";import"./useForkRef-CXZ2Yisc.js";import"./useId-Cw7oCgN8.js";import"./Select-BxcXViAf.js";import"./index-BaAsS3ug.js";import"./useSlotProps-B3Hw36CH.js";import"./isHostComponent-DVu5iVWx.js";import"./Paper-B1cq0otB.js";import"./ownerWindow-DvT1GKkC.js";import"./utils-BKS3DThN.js";import"./useTimeout-CpWYkyOc.js";import"./useEnhancedEffect-BAizwhs3.js";import"./inheritsLoose-DR8r8Ogv.js";import"./index-BWPb3MHu.js";import"./getReactElementRef-Ch8XQsCo.js";import"./mergeSlotProps-DPdjSIcl.js";import"./Modal-CqNy2sB5.js";import"./List-C7C5KNm6.js";import"./ListContext-D-QT2uLQ.js";import"./InputBase-CJjmY3p4.js";import"./useFormControl-DxQRLcK0.js";import"./index-BDKYfTe2.js";import"./extendSxProp-DZpmlPTG.js";import"./emotion-react.browser.esm-BMvUHC7V.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./isMuiElement-B1vlATT2.js";import"./Typography-CxNfrNL8.js";const G=A(r.jsx("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14H4V8l8 5 8-5zm-8-7L4 6h16z"})),J=k(P)(({theme:e})=>({"& .MuiInputBase-root":{...e.typography.body1,padding:e.spacing(1.5,2),borderRadius:e.shape.borderRadius,"&.Mui-disabled":{backgroundColor:e.palette.action.disabledBackground}},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:e.palette.grey[400]},"&:hover fieldset":{borderColor:e.palette.grey[600]},"&.Mui-focused fieldset":{borderColor:e.palette.primary.main,boxShadow:`${e.palette.primary.main}33 0 0 0 2px`},"&.Mui-error fieldset":{borderColor:e.palette.error.main}},"& .MuiFormHelperText-root":{marginLeft:0,marginRight:0,...e.typography.caption}})),K={"main-input-wrapper":"_main-input-wrapper_15wte_1"},n=$.forwardRef((e,W)=>{const{label:p,value:_,onChange:z,placeholder:D,leftIcon:l,rightIcon:m,hint:L,errorMsg:c,disabled:F=!1,type:O="text",id:V}=e,d=U(),u=!!c,g=c??L,b=V??`input-${p.replace(/\s+/g,"-").toLowerCase()}`,f=g?`${b}-helper`:void 0;return r.jsx("div",{className:K["main-input-wrapper"],children:r.jsx(J,{id:b,label:p,placeholder:D,type:O,value:_,onChange:z,disabled:F,error:u,helperText:g,FormHelperTextProps:{id:f},"aria-describedby":f,"aria-invalid":u||void 0,inputRef:W,fullWidth:!0,variant:"outlined",InputProps:{startAdornment:l&&r.jsx(h,{position:"start",sx:{mr:d.spacing(1)},children:l}),endAdornment:m&&r.jsx(h,{position:"end",sx:{ml:d.spacing(1)},children:m})}})})});n.displayName="MainInput";n.__docgenInfo={description:"",methods:[],displayName:"MainInput",props:{label:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"ChangeEventHandler",elements:[{name:"HTMLInputElement"}],raw:"ChangeEventHandler<HTMLInputElement>"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},leftIcon:{required:!1,tsType:{name:"ReactNode"},description:""},rightIcon:{required:!1,tsType:{name:"ReactNode"},description:""},hint:{required:!1,tsType:{name:"string"},description:""},errorMsg:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},type:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""}},composes:["Omit"]};const Ve={title:"ui/components/atoms/main-input",component:n,args:{value:"",onChange:()=>{}}},o={args:{label:"Nombre",placeholder:"Ingresa tu nombre"}},t={args:{label:"Correo",placeholder:"correo@ejemplo.com",leftIcon:r.jsx(G,{fontSize:"small"}),rightIcon:r.jsx(B,{fontSize:"small"})}},a={args:{label:"Usuario",placeholder:"usuario123",hint:"Debe tener al menos 6 caracteres"}},i={args:{label:"Contraseña",placeholder:"********",errorMsg:"Campo obligatorio"}},s={args:{label:"Solo lectura",value:"Texto fijo",disabled:!0}};var y,I,x;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Nombre',
    placeholder: 'Ingresa tu nombre'
  }
}`,...(x=(I=o.parameters)==null?void 0:I.docs)==null?void 0:x.source}}};var T,M,C;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: 'Correo',
    placeholder: 'correo@ejemplo.com',
    leftIcon: <MailOutlineIcon fontSize="small" />,
    rightIcon: <VisibilityIcon fontSize="small" />
  }
}`,...(C=(M=t.parameters)==null?void 0:M.docs)==null?void 0:C.source}}};var v,S,j;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'Usuario',
    placeholder: 'usuario123',
    hint: 'Debe tener al menos 6 caracteres'
  }
}`,...(j=(S=a.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var q,E,H;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: 'Contraseña',
    placeholder: '********',
    errorMsg: 'Campo obligatorio'
  }
}`,...(H=(E=i.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};var w,R,N;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: 'Solo lectura',
    value: 'Texto fijo',
    disabled: true
  }
}`,...(N=(R=s.parameters)==null?void 0:R.docs)==null?void 0:N.source}}};const Ae=["Default","WithIcons","WithHint","WithError","Disabled"];export{o as Default,s as Disabled,i as WithError,a as WithHint,t as WithIcons,Ae as __namedExportsOrder,Ve as default};
