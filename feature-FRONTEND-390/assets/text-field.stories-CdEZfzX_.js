import{j as a}from"./jsx-runtime-BlDnFLNC.js";import{r as ye}from"./index-Cu9bd8lq.js";import{c as l}from"./index-C-6Uy6j4.js";import ve from"./search-DumzgwYl.js";import Te from"./error-BgHEfqKV.js";function te({label:s,value:_,onChange:y,placeholder:ne="",error:t=!1,helperText:v,disabled:n=!1,leftIcon:T,rightIcon:I,size:le="medium",className:oe="",type:ie="text",name:r="",required:S=!1,autoComplete:ce}){const[,b]=ye.useState(!1),de=_e=>{y(_e.target.value)},pe=()=>{b(!0)},ue=()=>{b(!1)},me=l("text-field__input",`text-field__input--${le}`,{"text-field__input--error":t,"text-field__input--disabled":n,"text-field__input--with-left-icon":T,"text-field__input--with-right-icon":I},oe),ge=l("text-field__label",{"text-field__label--error":t,"text-field__label--disabled":n}),fe=l("text-field__helper-text",{"text-field__helper-text--error":t,"text-field__helper-text--disabled":n}),he=l("text-field__icon","text-field__icon--left",{"text-field__icon--error":t,"text-field__icon--disabled":n}),xe=l("text-field__icon","text-field__icon--right",{"text-field__icon--error":t,"text-field__icon--disabled":n});return a.jsxs("div",{className:"text-field",children:[s&&a.jsxs("label",{className:ge,htmlFor:r,children:[s,S&&a.jsx("span",{"aria-hidden":"true",children:" *"})]}),a.jsxs("div",{className:"text-field__container",children:[T&&a.jsx("span",{className:he,children:T}),a.jsx("input",{id:r,type:ie,value:_,onChange:de,placeholder:ne,className:me,disabled:n,onFocus:pe,onBlur:ue,name:r,required:S,autoComplete:ce,"aria-invalid":t,"aria-describedby":v&&r?`${r}-helper-text`:void 0}),I&&a.jsx("span",{className:xe,children:I})]}),v&&r&&a.jsx("p",{id:`${r}-helper-text`,className:fe,children:v})]})}te.__docgenInfo={description:"",methods:[],displayName:"TextField",props:{label:{required:!1,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(val: string) => void",signature:{arguments:[{type:{name:"string"},name:"val"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},error:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},helperText:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},leftIcon:{required:!1,tsType:{name:"ReactNode"},description:""},rightIcon:{required:!1,tsType:{name:"ReactNode"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},type:{required:!1,tsType:{name:"union",raw:"'text' | 'email' | 'password' | 'number'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'email'"},{name:"literal",value:"'password'"},{name:"literal",value:"'number'"}]},description:"",defaultValue:{value:"'text'",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},required:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},autoComplete:{required:!1,tsType:{name:"string"},description:""}}};const Ie={search:ve,error:Te};function o({name:s,className:_}){const y=Ie[s];return a.jsx(y,{className:_})}o.__docgenInfo={description:"",methods:[],displayName:"Icon",props:{name:{required:!0,tsType:{name:"union",raw:"keyof typeof icons",elements:[{name:"literal",value:"search"},{name:"literal",value:"error"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const we={title:"ui/components/atoms/TextField",component:te,argTypes:{size:{control:{type:"select",options:["small","medium","large"]}},type:{control:{type:"select",options:["text","email","password","number"]}}}},e={args:{label:"Default Input",placeholder:"Enter text here",value:"",onChange:s=>{console.log(s)}}},i={args:{...e.args,helperText:"This is a helper text"}},c={args:{...e.args,error:!0,helperText:"This is an error message"}},d={args:{...e.args,disabled:!0,value:"Disabled text"}},p={args:{...e.args,leftIcon:a.jsx(o,{name:"search"})}},u={args:{...e.args,rightIcon:a.jsx(o,{name:"error"})}},m={args:{...e.args,leftIcon:a.jsx(o,{name:"search"}),rightIcon:a.jsx(o,{name:"error"})}},g={args:{...e.args,size:"small"}},f={args:{...e.args,size:"large"}},h={args:{...e.args,type:"password",placeholder:"Enter password"}},x={args:{...e.args,type:"email",placeholder:"Enter email"}};var D,q,j;e.parameters={...e.parameters,docs:{...(D=e.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: 'Default Input',
    placeholder: 'Enter text here',
    value: '',
    onChange: val => {
      console.log(val);
    }
  }
}`,...(j=(q=e.parameters)==null?void 0:q.docs)==null?void 0:j.source}}};var w,E,N;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    helperText: 'This is a helper text'
  }
}`,...(N=(E=i.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var C,z,V;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    error: true,
    helperText: 'This is an error message'
  }
}`,...(V=(z=c.parameters)==null?void 0:z.docs)==null?void 0:V.source}}};var W,F,R;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true,
    value: 'Disabled text'
  }
}`,...(R=(F=d.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};var B,L,$;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    leftIcon: <Icon name="search" />
  }
}`,...($=(L=p.parameters)==null?void 0:L.docs)==null?void 0:$.source}}};var H,P,k;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    rightIcon: <Icon name="error" />
  }
}`,...(k=(P=u.parameters)==null?void 0:P.docs)==null?void 0:k.source}}};var O,A,G;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    leftIcon: <Icon name="search" />,
    rightIcon: <Icon name="error" />
  }
}`,...(G=(A=m.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};var J,K,M;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    size: 'small'
  }
}`,...(M=(K=g.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};var Q,U,X;f.parameters={...f.parameters,docs:{...(Q=f.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    size: 'large'
  }
}`,...(X=(U=f.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,ee;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    type: 'password',
    placeholder: 'Enter password'
  }
}`,...(ee=(Z=h.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,re,se;x.parameters={...x.parameters,docs:{...(ae=x.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    type: 'email',
    placeholder: 'Enter email'
  }
}`,...(se=(re=x.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};const Ee=["Default","WithHelperText","ErrorState","Disabled","WithLeftIcon","WithRightIcon","WithBothIcons","SmallSize","LargeSize","PasswordType","EmailType"];export{e as Default,d as Disabled,x as EmailType,c as ErrorState,f as LargeSize,h as PasswordType,g as SmallSize,m as WithBothIcons,i as WithHelperText,p as WithLeftIcon,u as WithRightIcon,Ee as __namedExportsOrder,we as default};
