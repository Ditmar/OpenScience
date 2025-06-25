import{j as n}from"./jsx-runtime-BlDnFLNC.js";import{r as v}from"./index-Cu9bd8lq.js";import{I as j}from"./icons-Dqqr9IZ9.js";import"./index-gagdKHFB.js";const I="_login__field_bguyp_1",M="_invalid__input_bguyp_24",Z="_password__eye_bguyp_27",S="_eye__icon_bguyp_43",s={login__field:I,invalid__input:M,password__eye:Z,eye__icon:S},B=r=>{const[e,t]=v.useState(r);return{form:e,handlerChangeForm:({target:a})=>{t({...e,[a.name]:a.value})},handlerResetForm:()=>{t(r)}}};function x({label:r,type:e,name:t,placeholder:p,isValid:d,eyeIcon:a,onChangeValue:F}){const[m,b]=v.useState(e),{form:E,handlerChangeForm:T}=B({value:""});function q(N){T(N),F(E)}function V(){b(m==="password"?"text":"password")}return n.jsxs("div",{className:s.login__field,children:[n.jsx("span",{children:r}),n.jsx("input",{type:m,name:t,placeholder:p,onChange:q,className:d?"":s.invalid__input}),e==="password"&&n.jsx("button",{type:"button",className:s.password__eye,onClick:V,children:a&&n.jsx(j,{"data-testid":"eye-icon",src:a,className:s.eye__icon})})]})}x.__docgenInfo={description:"",methods:[],displayName:"InputText",props:{id:{required:!0,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},type:{required:!0,tsType:{name:"union",raw:"'email' | 'password' | 'text'",elements:[{name:"literal",value:"'email'"},{name:"literal",value:"'password'"},{name:"literal",value:"'text'"}]},description:""},name:{required:!0,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"string"},description:""},isValid:{required:!0,tsType:{name:"boolean"},description:""},eyeIcon:{required:!1,tsType:{name:"string"},description:""},onChangeValue:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: { value: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ value: string }",signature:{properties:[{key:"value",value:{name:"string",required:!0}}]}},name:"value"}],return:{name:"void"}}},description:""}}};const P=`<svg width="51" height="27" viewBox="0 0 51 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_36_522)">
<path d="M25.466 27.0003C30.492 26.9919 35.0467 25.4134 39.3365 22.9978C43.6406 20.5737 47.4122 17.5014 50.7453 13.9112C50.9617 13.6794 51.1511 13.5253 50.8293 13.1865C45.6368 7.70543 39.7238 3.25865 32.3045 1.02068C25.8946 -0.913244 19.7467 0.0113754 13.8294 2.8602C8.63971 5.35779 4.2274 8.85218 0.300599 12.9644C-0.125113 13.41 -0.0809758 13.6419 0.324803 14.0653C4.99197 18.9369 10.2771 22.9547 16.7197 25.3676C19.5288 26.42 22.439 27.0169 25.466 27.0003ZM30.9476 3.28086C37.4173 5.02459 42.6226 8.74528 47.3354 13.2393C47.5689 13.4614 47.5404 13.5961 47.324 13.7904C46.7488 14.3069 46.2006 14.8511 45.6211 15.362C41.6317 18.8786 37.2607 21.7927 32.0937 23.4323C31.5854 23.5933 31.0828 23.8377 30.5048 23.7585C30.5432 23.7141 30.5646 23.6697 30.6002 23.653C36.1259 21.0652 38.6076 14.5415 36.1715 9.07154C35.0609 6.57951 33.237 4.75109 30.8479 3.41692C30.7468 3.36555 30.5874 3.44052 30.5162 3.24477C30.6771 3.25865 30.8123 3.26976 30.949 3.28225L30.9476 3.28086ZM25.5045 4.19299C30.7383 4.20687 35.0239 8.37738 35.0225 13.4531C35.021 18.6551 30.7653 22.8325 25.476 22.8228C20.1653 22.8131 15.9096 18.6454 15.9181 13.46C15.9266 8.34545 20.2364 4.17772 25.5045 4.19299ZM20.2706 3.26698C16.2086 5.54938 13.8764 8.89661 13.875 13.51C13.875 18.122 16.2143 21.4734 20.2863 23.7502C20.1097 23.7641 19.9702 23.7502 19.8378 23.7127C13.4663 21.919 8.3037 18.2511 3.63083 13.8113C3.31333 13.51 3.47137 13.3712 3.68921 13.1601C7.37681 9.6102 11.456 6.59894 16.2214 4.54146C17.5156 3.98335 18.8426 3.50022 20.2692 3.2642L20.2706 3.26698Z" fill="#979797"/>
<path d="M31.7532 16.4418C30.8292 19.2435 26.9237 21.0024 23.6305 20.15C20.0568 19.2254 17.7916 15.6255 18.5661 12.1047C19.3649 8.47705 22.8859 6.13079 26.6447 6.72221C29.9322 7.24006 32.7613 10.4304 32.4238 13.2418C31.1296 12.4213 30.2298 12.3838 29.4139 13.1168C28.7391 13.7221 28.5568 14.6717 28.9612 15.4658C29.4396 16.403 30.3337 16.7264 31.7532 16.4404V16.4418Z" fill="#FAFAFB"/>
<path d="M30.9474 3.28062C30.8107 3.26951 30.674 3.25702 30.5145 3.24313C30.5857 3.44027 30.7452 3.36392 30.8463 3.41528C30.8804 3.37086 30.9146 3.32504 30.9488 3.28062H30.9474Z" fill="#FBFBFC"/>
</g>
<defs>
<clipPath id="clip0_36_522">
<rect width="51" height="27" fill="white" transform="matrix(1 0 0 -1 0 27)"/>
</clipPath>
</defs>
</svg>
`,L={title:"ui/components/atoms/input-text",component:x,argTypes:{isValid:{control:"boolean"}}},i={args:{label:"Email",type:"email",name:"email",placeholder:"",isValid:!0}},o={args:{label:"Contraseña",type:"password",name:"password",placeholder:"",isValid:!0,eyeIcon:P}},l={args:{label:"Nombre",type:"text",name:"name",placeholder:"",isValid:!0}};var c,u,_;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    type: 'email',
    name: 'email',
    placeholder: '',
    isValid: true
  }
}`,...(_=(u=i.parameters)==null?void 0:u.docs)==null?void 0:_.source}}};var C,y,g;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: 'Contraseña',
    type: 'password',
    name: 'password',
    placeholder: '',
    isValid: true,
    eyeIcon: eye
  }
}`,...(g=(y=o.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var h,w,f;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: 'Nombre',
    type: 'text',
    name: 'name',
    placeholder: '',
    isValid: true
  }
}`,...(f=(w=l.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};const H=["EmptyEmailField","EmptyPasswordField","EmptyNameField"];export{i as EmptyEmailField,l as EmptyNameField,o as EmptyPasswordField,H as __namedExportsOrder,L as default};
