import{j as r}from"./jsx-runtime-BlDnFLNC.js";import{c as W}from"./createSvgIcon-DzLnRzg4.js";import{r as B}from"./index-Cu9bd8lq.js";import{s as $}from"./memoTheme-CkStY4N4.js";import{T as k,I as f}from"./TextField-DigTKZJT.js";import{u as P}from"./Paper-DBl2mNhW.js";import"./DefaultPropsProvider-DtgmapXO.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-B34fLoo2.js";import"./extends-CF3RwP-h.js";import"./useFormControl-Lm-hbpgD.js";import"./Typography-CFzFlkr3.js";import"./index-CUQ7daY9.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useSlot-CkxMInMc.js";import"./useForkRef-CXZ2Yisc.js";import"./useId-Cw7oCgN8.js";import"./Select-B-yO5t8g.js";import"./index-BaAsS3ug.js";import"./inheritsLoose-DR8r8Ogv.js";import"./index-BWPb3MHu.js";import"./useEnhancedEffect-BAizwhs3.js";import"./List-BXN3_bSl.js";import"./isMuiElement-B1vlATT2.js";const U=W(r.jsx("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14H4V8l8 5 8-5zm-8-7L4 6h16z"})),G=W(r.jsx("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3"})),J=$(k)(({theme:e})=>({"& .MuiInputBase-root":{...e.typography.body1,padding:e.spacing(1.5,2),borderRadius:e.shape.borderRadius,"&.Mui-disabled":{backgroundColor:e.palette.action.disabledBackground}},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:e.palette.grey[400]},"&:hover fieldset":{borderColor:e.palette.grey[600]},"&.Mui-focused fieldset":{borderColor:e.palette.primary.main,boxShadow:`${e.palette.primary.main}33 0 0 0 2px`},"&.Mui-error fieldset":{borderColor:e.palette.error.main}},"& .MuiFormHelperText-root":{marginLeft:0,marginRight:0,...e.typography.caption}})),K={"main-input-wrapper":"_main-input-wrapper_15wte_1"},i=B.forwardRef((e,_)=>{const{label:l,value:z,onChange:D,placeholder:L,leftIcon:p,rightIcon:c,hint:F,errorMsg:d,disabled:O=!1,type:V="text",id:A}=e,m=P(),u=!!d,g=d??F,b=A??`input-${l.replace(/\s+/g,"-").toLowerCase()}`,h=g?`${b}-helper`:void 0;return r.jsx("div",{className:K["main-input-wrapper"],children:r.jsx(J,{id:b,label:l,placeholder:L,type:V,value:z,onChange:D,disabled:O,error:u,helperText:g,FormHelperTextProps:{id:h},"aria-describedby":h,"aria-invalid":u||void 0,inputRef:_,fullWidth:!0,variant:"outlined",InputProps:{startAdornment:p&&r.jsx(f,{position:"start",sx:{mr:m.spacing(1)},children:p}),endAdornment:c&&r.jsx(f,{position:"end",sx:{ml:m.spacing(1)},children:c})}})})});i.displayName="MainInput";i.__docgenInfo={description:"",methods:[],displayName:"MainInput",props:{label:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"ChangeEventHandler",elements:[{name:"HTMLInputElement"}],raw:"ChangeEventHandler<HTMLInputElement>"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},leftIcon:{required:!1,tsType:{name:"ReactNode"},description:""},rightIcon:{required:!1,tsType:{name:"ReactNode"},description:""},hint:{required:!1,tsType:{name:"string"},description:""},errorMsg:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},type:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""}},composes:["Omit"]};const Ie={title:"ui/components/atoms/main-input",component:i,args:{value:"",onChange:()=>{}}},o={args:{label:"Nombre",placeholder:"Ingresa tu nombre"}},a={args:{label:"Correo",placeholder:"correo@ejemplo.com",leftIcon:r.jsx(U,{fontSize:"small"}),rightIcon:r.jsx(G,{fontSize:"small"})}},t={args:{label:"Usuario",placeholder:"usuario123",hint:"Debe tener al menos 6 caracteres"}},s={args:{label:"Contraseña",placeholder:"********",errorMsg:"Campo obligatorio"}},n={args:{label:"Solo lectura",value:"Texto fijo",disabled:!0}};var y,I,x;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Nombre',
    placeholder: 'Ingresa tu nombre'
  }
}`,...(x=(I=o.parameters)==null?void 0:I.docs)==null?void 0:x.source}}};var T,M,C;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: 'Correo',
    placeholder: 'correo@ejemplo.com',
    leftIcon: <MailOutlineIcon fontSize="small" />,
    rightIcon: <VisibilityIcon fontSize="small" />
  }
}`,...(C=(M=a.parameters)==null?void 0:M.docs)==null?void 0:C.source}}};var j,v,S;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: 'Usuario',
    placeholder: 'usuario123',
    hint: 'Debe tener al menos 6 caracteres'
  }
}`,...(S=(v=t.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var q,E,H;s.parameters={...s.parameters,docs:{...(q=s.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: 'Contraseña',
    placeholder: '********',
    errorMsg: 'Campo obligatorio'
  }
}`,...(H=(E=s.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};var w,R,N;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: 'Solo lectura',
    value: 'Texto fijo',
    disabled: true
  }
}`,...(N=(R=n.parameters)==null?void 0:R.docs)==null?void 0:N.source}}};const xe=["Default","WithIcons","WithHint","WithError","Disabled"];export{o as Default,n as Disabled,s as WithError,t as WithHint,a as WithIcons,xe as __namedExportsOrder,Ie as default};
