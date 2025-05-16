import{j as n}from"./jsx-runtime-DRTy3Uxn.js";import{r as U}from"./index-BBkUAzwr.js";const V="_container_s7u70_1",G="_header_s7u70_10",J="_protocol_s7u70_64",K="_divider_s7u70_73",Q="_input_s7u70_45",X="_footer_s7u70_115",Y="_error_s7u70_128",e={container:V,header:G,"label-wrapper":"_label-wrapper_s7u70_16","label-icon":"_label-icon_s7u70_22","label-text":"_label-text_s7u70_27","close-button":"_close-button_s7u70_32","close-icon-url":"_close-icon-url_s7u70_39","input-container":"_input-container_s7u70_45","input-wrapper":"_input-wrapper_s7u70_51","planet-icon":"_planet-icon_s7u70_59",protocol:J,divider:K,"input-group":"_input-group_s7u70_77","input-icon":"_input-icon_s7u70_84",input:Q,"copy-button":"_copy-button_s7u70_98","copy-icon":"_copy-icon_s7u70_109",footer:X,"hint-text":"_hint-text_s7u70_121",error:Y,"info-icon":"_info-icon_s7u70_132","standalone-info-icon":"_standalone-info-icon_s7u70_133","variant--default":"_variant--default_s7u70_139","variant--focus":"_variant--focus_s7u70_143","variant--error":"_variant--error_s7u70_148","variant--disabled":"_variant--disabled_s7u70_152","size--small":"_size--small_s7u70_160","size--medium":"_size--medium_s7u70_164","size--large":"_size--large_s7u70_168","radius--none":"_radius--none_s7u70_173","radius--small":"_radius--small_s7u70_177","radius--full":"_radius--full_s7u70_181"},Z=[{code:"+1",name:"Estados Unidos"},{code:"+54",name:"Argentina"},{code:"+55",name:"Brasil"},{code:"+591",name:"Bolivia"},{code:"+34",name:"España"}],m=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
</svg>`;function r({src:s,className:d}){return n.jsx("span",{className:d,dangerouslySetInnerHTML:{__html:s}})}function z(s){const{value:d,onChange:S,placeholder:F="1234567890",variant:o="default",size:A="medium",borderRadius:$="small",label:B="Phone Number",showCloseIcon:H=!0,onCloseClick:P,onCopyClick:D,showHintText:R=!0,hintText:_="Hint Text",className:M="",countryCode:L="+591",onCountryChange:p}=s,[W]=U.useState(L),O=[e.container,e[`variant--${o}`],e[`size--${A}`],e[`radius--${$}`],M].join(" ");return n.jsxs("div",{className:O,children:[n.jsxs("div",{className:e.header,children:[n.jsxs("div",{className:e["label-wrapper"],children:[n.jsx(r,{src:m,className:e["label-icon"]}),n.jsx("span",{className:e["label-text"],children:B})]}),H&&n.jsx("button",{"aria-label":"Cerrar",className:e["close-button"],onClick:P,type:"button",children:n.jsx(r,{src:ee,className:e["close-icon-url"]})})]}),n.jsx("div",{className:e["input-container"],children:n.jsxs("div",{className:e["input-wrapper"],children:[n.jsx(r,{src:m,className:e["planet-icon"]}),n.jsx("select",{value:W,disabled:o==="disabled",className:e.protocol,onChange:a=>p==null?void 0:p(a.target.value),children:Z.map(a=>n.jsx("option",{value:a.code,children:a.code},a.code))}),n.jsx("span",{className:e.divider,children:"|"}),n.jsxs("div",{className:e["input-group"],children:[n.jsx(r,{src:m,className:e["input-icon"]}),n.jsx("input",{type:"tel",value:d,onChange:a=>{S(a.target.value)},placeholder:F,disabled:o==="disabled",className:e.input})]}),n.jsxs("button",{type:"button",className:e["copy-button"],onClick:D,disabled:o==="disabled","aria-label":"Copy phone number",children:[n.jsx(r,{src:ne,className:e["copy-icon"]}),n.jsx("span",{children:"Copy"})]})]})}),n.jsxs("div",{className:e.footer,children:[R&&_&&n.jsxs("div",{className:`${e["hint-text"]} ${o==="error"?e.error:""}`,children:[n.jsx(r,{src:v,className:e["info-icon"]}),n.jsx("span",{children:_})]}),n.jsx(r,{src:v,className:e["standalone-info-icon"]})]})]})}z.__docgenInfo={description:"",methods:[],displayName:"PhoneInput",props:{value:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'focus' | 'error' | 'disabled'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'focus'"},{name:"literal",value:"'error'"},{name:"literal",value:"'disabled'"}]},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:""},borderRadius:{required:!1,tsType:{name:"union",raw:"'none' | 'small' | 'full'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'small'"},{name:"literal",value:"'full'"}]},description:""},showCloseIcon:{required:!1,tsType:{name:"boolean"},description:""},onCloseClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onCopyClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},showHintText:{required:!1,tsType:{name:"boolean"},description:""},hintText:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},countryCode:{required:!1,tsType:{name:"string"},description:""},onCountryChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(code: string) => void",signature:{arguments:[{type:{name:"string"},name:"code"}],return:{name:"void"}}},description:""}}};const se={title:"Atoms/PhoneInput",component:z,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","focus","error","disabled"]},size:{control:"select",options:["small","medium","large"]},borderRadius:{control:"select",options:["none","small","full"]},countryCode:{control:"text"}}},t={args:{value:"1234567890",variant:"default",label:"Teléfono",hintText:"Ingresa tu número móvil"}},i={args:{value:"1234567890",variant:"focus",label:"Teléfono",hintText:"Ingresa tu número móvil"}},l={args:{value:"",variant:"error",hintText:"Este campo es obligatorio"}},c={args:{value:"1234567890",variant:"disabled"}},u={args:{value:"77778888",countryCode:"+591",onCountryChange:s=>{alert(`Código cambiado a: ${s}`)},label:"Número de teléfono",hintText:"Ej: 77778888",variant:"default"}};var g,x,h;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    value: '1234567890',
    variant: 'default',
    label: 'Teléfono',
    hintText: 'Ingresa tu número móvil'
  }
}`,...(h=(x=t.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var f,y,b;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    value: '1234567890',
    variant: 'focus',
    label: 'Teléfono',
    hintText: 'Ingresa tu número móvil'
  }
}`,...(b=(y=i.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var C,w,j;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    value: '',
    variant: 'error',
    hintText: 'Este campo es obligatorio'
  }
}`,...(j=(w=l.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var T,N,k;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    value: '1234567890',
    variant: 'disabled'
  }
}`,...(k=(N=c.parameters)==null?void 0:N.docs)==null?void 0:k.source}}};var I,q,E;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(E=(q=u.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};const oe=["Default","Focus","ErrorState","Disabled","WithCountryCode"];export{t as Default,c as Disabled,l as ErrorState,i as Focus,u as WithCountryCode,oe as __namedExportsOrder,se as default};
