import{j as n}from"./jsx-runtime-BlDnFLNC.js";import{r as C}from"./index-Cu9bd8lq.js";import{C as t}from"./Check-jW6qeuhr.js";const V={title:"library/component/atoms/Check",component:t};function g({checked:e,variant:x,disabled:h,rounded:v}){const[y,k]=C.useState(e);return n.jsx(t,{checked:y,onChange:k,variant:x,disabled:h,rounded:v})}function a(){return n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:["default","success","info","warning","danger"].map(e=>n.jsx(g,{checked:!1,variant:e,rounded:!0,onChange:()=>{}},e))})}function r(){return n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:["default","success","info","warning","danger"].map(e=>n.jsx(g,{checked:!1,variant:e,rounded:!1,onChange:()=>{}},e))})}function s(){return n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:["default","success","info","warning","danger"].map(e=>n.jsx(t,{checked:!0,disabled:!0,variant:e,onChange:()=>{},rounded:!1},e))})}a.__docgenInfo={description:"",methods:[],displayName:"RoundedVariants"};r.__docgenInfo={description:"",methods:[],displayName:"SquareVariants"};s.__docgenInfo={description:"",methods:[],displayName:"Disabled"};var i,o,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`function RoundedVariants(): JSX.Element {
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  }}>
      {(['default', 'success', 'info', 'warning', 'danger'] as CheckProps['variant'][]).map(variant => <Template key={variant} checked={false} variant={variant} rounded onChange={() => {}} />)}
    </div>;
}`,...(d=(o=a.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};var c,l,u;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`function SquareVariants(): JSX.Element {
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  }}>
      {(['default', 'success', 'info', 'warning', 'danger'] as CheckProps['variant'][]).map(variant => <Template key={variant} checked={false} variant={variant} rounded={false} onChange={() => {}} />)}
    </div>;
}`,...(u=(l=r.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var p,m,f;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`function Disabled(): JSX.Element {
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  }}>
      {(['default', 'success', 'info', 'warning', 'danger'] as CheckProps['variant'][]).map(variant => <Check key={variant} checked disabled variant={variant} onChange={() => {}} rounded={false} />)}
    </div>;
}`,...(f=(m=s.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};const _=["RoundedVariants","SquareVariants","Disabled"];export{s as Disabled,a as RoundedVariants,r as SquareVariants,_ as __namedExportsOrder,V as default};
