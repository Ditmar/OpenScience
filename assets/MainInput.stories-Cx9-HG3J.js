import{j as r}from"./jsx-runtime-BlDnFLNC.js";import{c as A}from"./createSvgIcon-A6eV6WRM.js";import{V as B}from"./Visibility-DyWMFHLN.js";import{r as $}from"./index-Cu9bd8lq.js";import{s as k}from"./styled-BuMVIcWp.js";import{T as P}from"./TextField-DUUYW28x.js";import{u as U}from"./useTheme-BaXeX56u.js";import{I as h}from"./InputAdornment-hcO_iZf_.js";import"./memoTheme-BkoIURdx.js";import"./DefaultPropsProvider-15asn56a.js";import"./defaultTheme-DgRkra0M.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-B34fLoo2.js";import"./extends-CF3RwP-h.js";import"./useSlot-D_Yk7QKg.js";import"./useForkRef-CXZ2Yisc.js";import"./useId-Cw7oCgN8.js";import"./Select-DTzJaeMc.js";import"./index-BaAsS3ug.js";import"./Paper-DhYM3ya6.js";import"./useTimeout-BPiCGVvU.js";import"./useEnhancedEffect-BAizwhs3.js";import"./inheritsLoose-DR8r8Ogv.js";import"./index-BWPb3MHu.js";import"./useFormControl-nih90cGA.js";import"./List-DzpRmBbh.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./index-CrgZfTxv.js";import"./extendSxProp-BtvtprHM.js";import"./isMuiElement-B1vlATT2.js";import"./Typography-C7MpjIBe.js";const G=A(r.jsx("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14H4V8l8 5 8-5zm-8-7L4 6h16z"})),J=k(P)(({theme:e})=>({"& .MuiInputBase-root":{...e.typography.body1,padding:e.spacing(1.5,2),borderRadius:e.shape.borderRadius,"&.Mui-disabled":{backgroundColor:e.palette.action.disabledBackground}},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:e.palette.grey[400]},"&:hover fieldset":{borderColor:e.palette.grey[600]},"&.Mui-focused fieldset":{borderColor:e.palette.primary.main,boxShadow:`${e.palette.primary.main}33 0 0 0 2px`},"&.Mui-error fieldset":{borderColor:e.palette.error.main}},"& .MuiFormHelperText-root":{marginLeft:0,marginRight:0,...e.typography.caption}})),K={"main-input-wrapper":"_main-input-wrapper_15wte_1"},n=$.forwardRef((e,W)=>{const{label:p,value:_,onChange:z,placeholder:D,leftIcon:l,rightIcon:c,hint:L,errorMsg:d,disabled:F=!1,type:O="text",id:V}=e,m=U(),u=!!d,g=d??L,b=V??`input-${p.replace(/\s+/g,"-").toLowerCase()}`,f=g?`${b}-helper`:void 0;return r.jsx("div",{className:K["main-input-wrapper"],children:r.jsx(J,{id:b,label:p,placeholder:D,type:O,value:_,onChange:z,disabled:F,error:u,helperText:g,FormHelperTextProps:{id:f},"aria-describedby":f,"aria-invalid":u||void 0,inputRef:W,fullWidth:!0,variant:"outlined",InputProps:{startAdornment:l&&r.jsx(h,{position:"start",sx:{mr:m.spacing(1)},children:l}),endAdornment:c&&r.jsx(h,{position:"end",sx:{ml:m.spacing(1)},children:c})}})})});n.displayName="MainInput";n.__docgenInfo={description:"",methods:[],displayName:"MainInput",props:{label:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"ChangeEventHandler",elements:[{name:"HTMLInputElement"}],raw:"ChangeEventHandler<HTMLInputElement>"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},leftIcon:{required:!1,tsType:{name:"ReactNode"},description:""},rightIcon:{required:!1,tsType:{name:"ReactNode"},description:""},hint:{required:!1,tsType:{name:"string"},description:""},errorMsg:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},type:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""}},composes:["Omit"]};const je={title:"ui/components/atoms/main-input",component:n,args:{value:"",onChange:()=>{}}},o={args:{label:"Nombre",placeholder:"Ingresa tu nombre"}},t={args:{label:"Correo",placeholder:"correo@ejemplo.com",leftIcon:r.jsx(G,{fontSize:"small"}),rightIcon:r.jsx(B,{fontSize:"small"})}},a={args:{label:"Usuario",placeholder:"usuario123",hint:"Debe tener al menos 6 caracteres"}},s={args:{label:"Contraseña",placeholder:"********",errorMsg:"Campo obligatorio"}},i={args:{label:"Solo lectura",value:"Texto fijo",disabled:!0}};var y,I,x;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(j=(S=a.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var q,E,H;s.parameters={...s.parameters,docs:{...(q=s.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: 'Contraseña',
    placeholder: '********',
    errorMsg: 'Campo obligatorio'
  }
}`,...(H=(E=s.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};var w,R,N;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: 'Solo lectura',
    value: 'Texto fijo',
    disabled: true
  }
}`,...(N=(R=i.parameters)==null?void 0:R.docs)==null?void 0:N.source}}};const qe=["Default","WithIcons","WithHint","WithError","Disabled"];export{o as Default,i as Disabled,s as WithError,a as WithHint,t as WithIcons,qe as __namedExportsOrder,je as default};
