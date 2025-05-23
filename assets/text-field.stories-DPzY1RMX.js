import{j as a}from"./jsx-runtime-DRTy3Uxn.js";import{r as _e}from"./index-BBkUAzwr.js";import ye from"./search-CeyavKY6.js";import ve from"./error-CU0YkstH.js";function se({label:s,value:x,onChange:_,placeholder:te="",error:t=!1,helperText:y,disabled:n=!1,leftIcon:v,rightIcon:T,size:ne="medium",className:le="",type:oe="text",name:r="",required:I=!1,autoComplete:ie}){const[,S]=_e.useState(!1),ce=xe=>{_(xe.target.value)},de=()=>{S(!0)},pe=()=>{S(!1)},ue=["text-field__input",`text-field__input--${ne}`,t&&"text-field__input--error",n&&"text-field__input--disabled",v&&"text-field__input--with-left-icon",T&&"text-field__input--with-right-icon",le].filter(Boolean).join(" "),me=["text-field__label",t&&"text-field__label--error",n&&"text-field__label--disabled"].filter(Boolean).join(" "),fe=["text-field__helper-text",t&&"text-field__helper-text--error",n&&"text-field__helper-text--disabled"].filter(Boolean).join(" "),ge=["text-field__icon","text-field__icon--left",t&&"text-field__icon--error",n&&"text-field__icon--disabled"].filter(Boolean).join(" "),he=["text-field__icon","text-field__icon--right",t&&"text-field__icon--error",n&&"text-field__icon--disabled"].filter(Boolean).join(" ");return a.jsxs("div",{className:"text-field",children:[s&&a.jsxs("label",{className:me,htmlFor:r,children:[s,I&&a.jsx("span",{"aria-hidden":"true",children:" *"})]}),a.jsxs("div",{className:"text-field__container",children:[v&&a.jsx("span",{className:ge,children:v}),a.jsx("input",{id:r,type:oe,value:x,onChange:ce,placeholder:te,className:ue,disabled:n,onFocus:de,onBlur:pe,name:r,required:I,autoComplete:ie,"aria-invalid":t,"aria-describedby":y&&r?`${r}-helper-text`:void 0}),T&&a.jsx("span",{className:he,children:T})]}),y&&r&&a.jsx("p",{id:`${r}-helper-text`,className:fe,children:y})]})}se.__docgenInfo={description:"",methods:[],displayName:"TextField",props:{label:{required:!1,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(val: string) => void",signature:{arguments:[{type:{name:"string"},name:"val"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},error:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},helperText:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},leftIcon:{required:!1,tsType:{name:"ReactNode"},description:""},rightIcon:{required:!1,tsType:{name:"ReactNode"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},type:{required:!1,tsType:{name:"union",raw:"'text' | 'email' | 'password' | 'number'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'email'"},{name:"literal",value:"'password'"},{name:"literal",value:"'number'"}]},description:"",defaultValue:{value:"'text'",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},required:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},autoComplete:{required:!1,tsType:{name:"string"},description:""}}};const Te={search:ye,error:ve};function l({name:s,className:x}){const _=Te[s];return a.jsx(_,{className:x})}l.__docgenInfo={description:"",methods:[],displayName:"Icon",props:{name:{required:!0,tsType:{name:"union",raw:"keyof typeof icons",elements:[{name:"literal",value:"search"},{name:"literal",value:"error"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const De={title:"ui/components/atoms/TextField",component:se,argTypes:{size:{control:{type:"select",options:["small","medium","large"]}},type:{control:{type:"select",options:["text","email","password","number"]}}}},e={args:{label:"Default Input",placeholder:"Enter text here",value:"",onChange:s=>{console.log(s)}}},o={args:{...e.args,helperText:"This is a helper text"}},i={args:{...e.args,error:!0,helperText:"This is an error message"}},c={args:{...e.args,disabled:!0,value:"Disabled text"}},d={args:{...e.args,leftIcon:a.jsx(l,{name:"search"})}},p={args:{...e.args,rightIcon:a.jsx(l,{name:"error"})}},u={args:{...e.args,leftIcon:a.jsx(l,{name:"search"}),rightIcon:a.jsx(l,{name:"error"})}},m={args:{...e.args,size:"small"}},f={args:{...e.args,size:"large"}},g={args:{...e.args,type:"password",placeholder:"Enter password"}},h={args:{...e.args,type:"email",placeholder:"Enter email"}};var b,j,D;e.parameters={...e.parameters,docs:{...(b=e.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'Default Input',
    placeholder: 'Enter text here',
    value: '',
    onChange: val => {
      console.log(val);
    }
  }
}`,...(D=(j=e.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var q,w,E;o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    helperText: 'This is a helper text'
  }
}`,...(E=(w=o.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var N,C,z;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    error: true,
    helperText: 'This is an error message'
  }
}`,...(z=(C=i.parameters)==null?void 0:C.docs)==null?void 0:z.source}}};var B,V,W;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true,
    value: 'Disabled text'
  }
}`,...(W=(V=c.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var F,R,L;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    leftIcon: <Icon name="search" />
  }
}`,...(L=(R=d.parameters)==null?void 0:R.docs)==null?void 0:L.source}}};var $,H,P;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    rightIcon: <Icon name="error" />
  }
}`,...(P=(H=p.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var k,O,A;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    leftIcon: <Icon name="search" />,
    rightIcon: <Icon name="error" />
  }
}`,...(A=(O=u.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};var G,J,K;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    size: 'small'
  }
}`,...(K=(J=m.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var M,Q,U;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    size: 'large'
  }
}`,...(U=(Q=f.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    type: 'password',
    placeholder: 'Enter password'
  }
}`,...(Z=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ae,re;h.parameters={...h.parameters,docs:{...(ee=h.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    type: 'email',
    placeholder: 'Enter email'
  }
}`,...(re=(ae=h.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};const qe=["Default","WithHelperText","ErrorState","Disabled","WithLeftIcon","WithRightIcon","WithBothIcons","SmallSize","LargeSize","PasswordType","EmailType"];export{e as Default,c as Disabled,h as EmailType,i as ErrorState,f as LargeSize,g as PasswordType,m as SmallSize,u as WithBothIcons,o as WithHelperText,d as WithLeftIcon,p as WithRightIcon,qe as __namedExportsOrder,De as default};
