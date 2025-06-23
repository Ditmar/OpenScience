import{j as n}from"./jsx-runtime-BlDnFLNC.js";import{r as b}from"./index-Cu9bd8lq.js";const j="_check_haoxm_1",D="_rounded_haoxm_17",S="_checked_haoxm_25",V="_disabled_haoxm_29",q="_success_haoxm_42",T="_info_haoxm_50",E="_warning_haoxm_58",N="_danger_haoxm_66",I="_icon_haoxm_74",r={check:j,rounded:D,checked:S,disabled:V,default:"_default_haoxm_34",success:q,info:T,warning:E,danger:N,icon:I};function R(...e){return e.filter(Boolean).join(" ")}function c({checked:e,onChange:i,disabled:a=!1,variant:d="default",rounded:l=!0}){const u=()=>{a||i(!e)},w=m=>{!a&&(m.key===" "||m.key==="Enter")&&(m.preventDefault(),i(!e))};return n.jsx("div",{role:"checkbox","aria-checked":e,"aria-disabled":a,tabIndex:a?-1:0,className:R(r.check,r[d],e&&r.checked,a&&r.disabled,l&&r.rounded),onClick:u,onKeyDown:w,children:e&&n.jsx("svg",{className:r.icon,width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",children:n.jsx("polyline",{points:"20 6 9 17 4 12"})})})}c.__docgenInfo={description:"",methods:[],displayName:"Check",props:{checked:{required:!0,tsType:{name:"boolean"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"value"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'success' | 'info' | 'warning' | 'danger'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'success'"},{name:"literal",value:"'info'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'danger'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},rounded:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const X={title:"library/component/atoms/Check",component:c};function C({checked:e,variant:i,disabled:a,rounded:d}){const[l,u]=b.useState(e);return n.jsx(c,{checked:l,onChange:u,variant:i,disabled:a,rounded:d})}function s(){return n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:["default","success","info","warning","danger"].map(e=>n.jsx(C,{checked:!1,variant:e,rounded:!0,onChange:()=>{}},e))})}function o(){return n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:["default","success","info","warning","danger"].map(e=>n.jsx(C,{checked:!1,variant:e,rounded:!1,onChange:()=>{}},e))})}function t(){return n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:["default","success","info","warning","danger"].map(e=>n.jsx(c,{checked:!0,disabled:!0,variant:e,onChange:()=>{},rounded:!1},e))})}s.__docgenInfo={description:"",methods:[],displayName:"RoundedVariants"};o.__docgenInfo={description:"",methods:[],displayName:"SquareVariants"};t.__docgenInfo={description:"",methods:[],displayName:"Disabled"};var p,f,h;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`function RoundedVariants(): JSX.Element {
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  }}>
      {(['default', 'success', 'info', 'warning', 'danger'] as CheckProps['variant'][]).map(variant => <Template key={variant} checked={false} variant={variant} rounded onChange={() => {}} />)}
    </div>;
}`,...(h=(f=s.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var g,x,_;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`function SquareVariants(): JSX.Element {
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  }}>
      {(['default', 'success', 'info', 'warning', 'danger'] as CheckProps['variant'][]).map(variant => <Template key={variant} checked={false} variant={variant} rounded={false} onChange={() => {}} />)}
    </div>;
}`,...(_=(x=o.parameters)==null?void 0:x.docs)==null?void 0:_.source}}};var v,k,y;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`function Disabled(): JSX.Element {
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  }}>
      {(['default', 'success', 'info', 'warning', 'danger'] as CheckProps['variant'][]).map(variant => <Check key={variant} checked disabled variant={variant} onChange={() => {}} rounded={false} />)}
    </div>;
}`,...(y=(k=t.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};const B=["RoundedVariants","SquareVariants","Disabled"];export{t as Disabled,s as RoundedVariants,o as SquareVariants,B as __namedExportsOrder,X as default};
