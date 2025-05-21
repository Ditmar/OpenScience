import{j as n}from"./jsx-runtime-DRTy3Uxn.js";import{r as U}from"./index-BBkUAzwr.js";const V="_container_1kz9j_1",G="_header_1kz9j_10",J="_protocol_1kz9j_64",K="_divider_1kz9j_73",Q="_input_1kz9j_45",X="_footer_1kz9j_115",Y="_error_1kz9j_128",e={container:V,header:G,"label-wrapper":"_label-wrapper_1kz9j_16","label-icon":"_label-icon_1kz9j_22","label-text":"_label-text_1kz9j_27","close-button":"_close-button_1kz9j_32","close-icon-url":"_close-icon-url_1kz9j_39","input-container":"_input-container_1kz9j_45","input-wrapper":"_input-wrapper_1kz9j_51","planet-icon":"_planet-icon_1kz9j_59",protocol:J,divider:K,"input-group":"_input-group_1kz9j_77","input-icon":"_input-icon_1kz9j_84",input:Q,"copy-button":"_copy-button_1kz9j_98","copy-icon":"_copy-icon_1kz9j_109",footer:X,"hint-text":"_hint-text_1kz9j_121",error:Y,"info-icon":"_info-icon_1kz9j_132","standalone-info-icon":"_standalone-info-icon_1kz9j_133","variant--default":"_variant--default_1kz9j_139","variant--focus":"_variant--focus_1kz9j_143","variant--error":"_variant--error_1kz9j_148","variant--disabled":"_variant--disabled_1kz9j_152","size--small":"_size--small_1kz9j_160","size--medium":"_size--medium_1kz9j_164","size--large":"_size--large_1kz9j_168","radius--none":"_radius--none_1kz9j_173","radius--small":"_radius--small_1kz9j_177","radius--full":"_radius--full_1kz9j_181"},Z=[{code:"+1",name:"Estados Unidos"},{code:"+54",name:"Argentina"},{code:"+55",name:"Brasil"},{code:"+591",name:"Bolivia"},{code:"+34",name:"España"}],m=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.4 12.4 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L9 9a16 16 0 0 0 6 6l.36-.36a2 2 0 0 1 2.11-.45 12.4 12.4 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
</svg>`,ee=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <line x1="18" y1="6" x2="6" y2="18"/>
  <line x1="6" y1="6" x2="18" y2="18"/>
</svg>`,ne=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
</svg>`,v=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"/>
  <line x1="12" y1="16" x2="12" y2="12"/>
  <line x1="12" y1="8" x2="12.01" y2="8"/>
</svg>`;function r({src:o,className:u}){return n.jsx("span",{className:u,dangerouslySetInnerHTML:{__html:o}})}function E(o){const{value:u,onChange:S,placeholder:F="1234567890",variant:s="default",size:A="medium",borderRadius:$="small",label:B="Phone Number",showCloseIcon:H=!0,onCloseClick:P,onCopyClick:D,showHintText:R=!0,hintText:_="Hint Text",className:M="",countryCode:L="+591",onCountryChange:p}=o,[W]=U.useState(L),O=[e.container,e[`variant--${s}`],e[`size--${A}`],e[`radius--${$}`],M].join(" ");return n.jsxs("div",{className:O,children:[n.jsxs("div",{className:e.header,children:[n.jsxs("div",{className:e["label-wrapper"],children:[n.jsx(r,{src:m,className:e["label-icon"]}),n.jsx("span",{className:e["label-text"],children:B})]}),H&&n.jsx("button",{"aria-label":"Cerrar",className:e["close-button"],onClick:P,type:"button",children:n.jsx(r,{src:ee,className:e["close-icon-url"]})})]}),n.jsx("div",{className:e["input-container"],children:n.jsxs("div",{className:e["input-wrapper"],children:[n.jsx(r,{src:m,className:e["planet-icon"]}),n.jsx("select",{value:W,disabled:s==="disabled",className:e.protocol,onChange:a=>p==null?void 0:p(a.target.value),children:Z.map(a=>n.jsx("option",{value:a.code,children:a.code},a.code))}),n.jsx("span",{className:e.divider,children:"|"}),n.jsxs("div",{className:e["input-group"],children:[n.jsx(r,{src:m,className:e["input-icon"]}),n.jsx("input",{type:"tel",value:u,onChange:a=>{S(a.target.value)},placeholder:F,disabled:s==="disabled",className:e.input})]}),n.jsx("button",{type:"button",className:e["copy-button"],onClick:D,disabled:s==="disabled","aria-label":"Copy phone number",children:n.jsx(r,{src:ne,className:e["copy-icon"]})})]})}),n.jsxs("div",{className:e.footer,children:[R&&_&&n.jsxs("div",{className:`${e["hint-text"]} ${s==="error"?e.error:""}`,children:[n.jsx(r,{src:v,className:e["info-icon"]}),n.jsx("span",{children:_})]}),n.jsx(r,{src:v,className:e["standalone-info-icon"]})]})]})}E.__docgenInfo={description:"",methods:[],displayName:"PhoneInput",props:{value:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'focus' | 'error' | 'disabled'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'focus'"},{name:"literal",value:"'error'"},{name:"literal",value:"'disabled'"}]},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:""},borderRadius:{required:!1,tsType:{name:"union",raw:"'none' | 'small' | 'full'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'small'"},{name:"literal",value:"'full'"}]},description:""},showCloseIcon:{required:!1,tsType:{name:"boolean"},description:""},onCloseClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onCopyClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},showHintText:{required:!1,tsType:{name:"boolean"},description:""},hintText:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},countryCode:{required:!1,tsType:{name:"string"},description:""},onCountryChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(code: string) => void",signature:{arguments:[{type:{name:"string"},name:"code"}],return:{name:"void"}}},description:""}}};const oe={title:"Atoms/PhoneInput",component:E,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","focus","error","disabled"]},size:{control:"select",options:["small","medium","large"]},borderRadius:{control:"select",options:["none","small","full"]},countryCode:{control:"text"}}},t={args:{value:"1234567890",variant:"default",label:"Teléfono",hintText:"Ingresa tu número móvil"}},i={args:{value:"1234567890",variant:"focus",label:"Teléfono",hintText:"Ingresa tu número móvil"}},l={args:{value:"",variant:"error",hintText:"Este campo es obligatorio"}},c={args:{value:"1234567890",variant:"disabled"}},d={args:{value:"77778888",countryCode:"+591",onCountryChange:o=>{alert(`Código cambiado a: ${o}`)},label:"Número de teléfono",hintText:"Ej: 77778888",variant:"default"}};var g,x,h;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    value: '1234567890',
    variant: 'default',
    label: 'Teléfono',
    hintText: 'Ingresa tu número móvil'
  }
}`,...(h=(x=t.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var f,j,y;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    value: '1234567890',
    variant: 'focus',
    label: 'Teléfono',
    hintText: 'Ingresa tu número móvil'
  }
}`,...(y=(j=i.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var b,k,w;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    value: '',
    variant: 'error',
    hintText: 'Este campo es obligatorio'
  }
}`,...(w=(k=l.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var z,C,T;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    value: '1234567890',
    variant: 'disabled'
  }
}`,...(T=(C=c.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var N,I,q;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    value: '77778888',
    countryCode: '+591',
    onCountryChange: code => {
      alert(\`Código cambiado a: \${code}\`);
    },
    label: 'Número de teléfono',
    hintText: 'Ej: 77778888',
    variant: 'default'
  }
}`,...(q=(I=d.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};const se=["Default","Focus","ErrorState","Disabled","WithCountryCode"];export{t as Default,c as Disabled,l as ErrorState,i as Focus,d as WithCountryCode,se as __namedExportsOrder,oe as default};
