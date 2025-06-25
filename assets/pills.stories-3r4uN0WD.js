import{j as t}from"./jsx-runtime-BlDnFLNC.js";import{c as g}from"./createSvgIcon-P4Px-9zy.js";import{P as u}from"./pills-BgUBqhmU.js";import"./index-Cu9bd8lq.js";import"./styled-Db3gYmrN.js";import"./identifier-zfncykJ_.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-B34fLoo2.js";import"./extends-CF3RwP-h.js";import"./memoTheme-BXE1gp8d.js";import"./DefaultPropsProvider-15asn56a.js";import"./Box-DS_uUjFP.js";import"./useTheme-DzrtRHuF.js";const x=g(t.jsx("path",{d:"M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2"})),z={title:"Atoms/Pill",component:u,argTypes:{color:{control:"select",options:["neutral-dark","neutral-light","brand-primary","brand-secondary","brand-tertiary","feedback-positive","feedback-negative","feedback-warning","read-only-disabled"]},variant:{control:"select",options:["filled","soft","outlined"]},size:{control:"select",options:["sm","md","lg"]},rounded:{control:"select",options:["r_none","r_md","r_full"]},stroke:{control:"select",options:[void 0,"border-soft","border-strong"]},iconPosition:{control:"select",options:[void 0,"left","right"]},shadow:{control:"boolean"}}},r={args:{text:"Texto",color:"neutral-light",variant:"filled",size:"md",rounded:"r_md",shadow:!1}},e={args:{text:"Texto",color:"brand-secondary",variant:"filled",icon:t.jsx(x,{fontSize:"small"}),iconPosition:"left"}};function o(){const b=["neutral-dark","neutral-light","brand-primary","brand-secondary","brand-tertiary","feedback-positive","feedback-negative","feedback-warning","read-only-disabled"];return t.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:b.map(a=>t.jsx(u,{text:"100",color:a,variant:"filled"},a))})}o.__docgenInfo={description:"",methods:[],displayName:"TodosLosColores"};var n,s,i;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    text: 'Texto',
    color: 'neutral-light',
    variant: 'filled',
    size: 'md',
    rounded: 'r_md',
    shadow: false
  }
}`,...(i=(s=r.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var l,d,c;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    text: 'Texto',
    color: 'brand-secondary',
    variant: 'filled',
    icon: <BookmarkIcon fontSize="small" />,
    iconPosition: 'left'
  }
}`,...(c=(d=e.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var p,m,f;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`function TodosLosColores() {
  const colores: IProps['color'][] = ['neutral-dark', 'neutral-light', 'brand-primary', 'brand-secondary', 'brand-tertiary', 'feedback-positive', 'feedback-negative', 'feedback-warning', 'read-only-disabled'];
  return <div style={{
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap'
  }}>
      {colores.map(color => <Pill key={color} text="100" color={color} variant="filled" />)}
    </div>;
}`,...(f=(m=o.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};const L=["Default","ConIcono","TodosLosColores"];export{e as ConIcono,r as Default,o as TodosLosColores,L as __namedExportsOrder,z as default};
