import{j as p}from"./jsx-runtime-BlDnFLNC.js";import"./index-Cu9bd8lq.js";const re="_toggle_z1id2_1",ie="_toggle__label_z1id2_107",e={toggle:re,"toggle--disabled":"_toggle--disabled_z1id2_18","toggle--small":"_toggle--small_z1id2_34","toggle--medium":"_toggle--medium_z1id2_39","toggle--large":"_toggle--large_z1id2_44","toggle--checked":"_toggle--checked_z1id2_49","toggle--info":"_toggle--info_z1id2_67","toggle--success":"_toggle--success_z1id2_86","toggle--danger":"_toggle--danger_z1id2_93","toggle--warning":"_toggle--warning_z1id2_100",toggle__label:ie};function U({checked:m,onChange:X,disabled:a=!1,variant:Y="default",size:Z="medium","aria-label":ee,"aria-labelledby":ae}){const b=()=>{a||X(!m)},se=f=>{(f.key===" "||f.key==="Enter")&&(f.preventDefault(),b())},le=[e.toggle,e[`toggle--${Y}`],e[`toggle--${Z}`],m?e["toggle--checked"]:"",a?e["toggle--disabled"]:""].filter(Boolean).join(" ");return p.jsx("div",{className:le,role:"switch","aria-checked":!!m,"aria-disabled":!!a,"aria-label":ee,"aria-labelledby":ae,tabIndex:a?-1:0,onClick:b,onKeyDown:se,"data-testid":"toggle",children:p.jsx("div",{className:e.toggle__slider,"data-testid":"toggle-slider",children:p.jsx("div",{className:e.toggle__thumb,"data-testid":"toggle-thumb"})})})}U.__docgenInfo={description:"",methods:[],displayName:"Toggle",props:{checked:{required:!0,tsType:{name:"boolean"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"value"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'success' | 'info' | 'warning' | 'danger'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'success'"},{name:"literal",value:"'info'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'danger'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},"aria-label":{required:!1,tsType:{name:"string"},description:""},"aria-labelledby":{required:!1,tsType:{name:"string"},description:""}}};const de={title:"ui/components/atoms/Toggle",component:U,tags:["autodocs"],argTypes:{checked:{control:"boolean",description:"Estado del toggle (activado/desactivado)"},disabled:{control:"boolean",description:"Si el toggle está deshabilitado"},variant:{control:"select",options:["default","primary","secondary","success","info","warning","danger"],description:"Variante de color del toggle"},size:{control:"select",options:["small","medium","large"],description:"Tamaño del toggle"},onChange:{action:"onChange",description:"Callback cuando cambia el estado"}},args:{checked:!1,disabled:!1,variant:"default",size:"medium"}},s={args:{checked:!1,disabled:!1,variant:"default",size:"medium","aria-label":"Toggle default"}},l={args:{checked:!0,disabled:!1,variant:"default",size:"medium","aria-label":"Toggle activado"}},r={args:{checked:!1,disabled:!0,variant:"default",size:"medium","aria-label":"Toggle deshabilitado"}},i={args:{checked:!0,disabled:!0,variant:"default",size:"medium","aria-label":"Toggle deshabilitado y activado"}},n={args:{checked:!0,disabled:!1,variant:"success",size:"medium","aria-label":"Toggle success"}},t={args:{checked:!0,disabled:!1,variant:"info",size:"medium","aria-label":"Toggle info"}},d={args:{checked:!0,disabled:!1,variant:"warning",size:"medium","aria-label":"Toggle warning"}},o={args:{checked:!0,disabled:!1,variant:"danger",size:"medium","aria-label":"Toggle danger"}},c={args:{checked:!1,disabled:!1,variant:"default",size:"small","aria-label":"Toggle small"}},g={args:{checked:!1,disabled:!1,variant:"default",size:"medium","aria-label":"Toggle medium"}},u={args:{checked:!1,disabled:!1,variant:"default",size:"large","aria-label":"Toggle large"}};var v,h,_;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: false,
    variant: 'default',
    size: 'medium',
    'aria-label': 'Toggle default'
  }
}`,...(_=(h=s.parameters)==null?void 0:h.docs)==null?void 0:_.source}}};var k,z,T;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: false,
    variant: 'default',
    size: 'medium',
    'aria-label': 'Toggle activado'
  }
}`,...(T=(z=l.parameters)==null?void 0:z.docs)==null?void 0:T.source}}};var y,S,w;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: true,
    variant: 'default',
    size: 'medium',
    'aria-label': 'Toggle deshabilitado'
  }
}`,...(w=(S=r.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var C,D,x;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: true,
    variant: 'default',
    size: 'medium',
    'aria-label': 'Toggle deshabilitado y activado'
  }
}`,...(x=(D=i.parameters)==null?void 0:D.docs)==null?void 0:x.source}}};var q,j,E;n.parameters={...n.parameters,docs:{...(q=n.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: false,
    variant: 'success',
    size: 'medium',
    'aria-label': 'Toggle success'
  }
}`,...(E=(j=n.parameters)==null?void 0:j.docs)==null?void 0:E.source}}};var I,N,V;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: false,
    variant: 'info',
    size: 'medium',
    'aria-label': 'Toggle info'
  }
}`,...(V=(N=t.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var K,L,M;d.parameters={...d.parameters,docs:{...(K=d.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: false,
    variant: 'warning',
    size: 'medium',
    'aria-label': 'Toggle warning'
  }
}`,...(M=(L=d.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var W,$,B;o.parameters={...o.parameters,docs:{...(W=o.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: false,
    variant: 'danger',
    size: 'medium',
    'aria-label': 'Toggle danger'
  }
}`,...(B=($=o.parameters)==null?void 0:$.docs)==null?void 0:B.source}}};var O,R,A;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: false,
    variant: 'default',
    size: 'small',
    'aria-label': 'Toggle small'
  }
}`,...(A=(R=c.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};var F,G,H;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: false,
    variant: 'default',
    size: 'medium',
    'aria-label': 'Toggle medium'
  }
}`,...(H=(G=g.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var J,P,Q;u.parameters={...u.parameters,docs:{...(J=u.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: false,
    variant: 'default',
    size: 'large',
    'aria-label': 'Toggle large'
  }
}`,...(Q=(P=u.parameters)==null?void 0:P.docs)==null?void 0:Q.source}}};const oe=["Default","Checked","Disabled","DisabledChecked","Success","Info","Warning","Danger","Small","Medium","Large"];export{l as Checked,o as Danger,s as Default,r as Disabled,i as DisabledChecked,t as Info,u as Large,g as Medium,c as Small,n as Success,d as Warning,oe as __namedExportsOrder,de as default};
