import{j as e}from"./jsx-runtime-DRTy3Uxn.js";import"./index-BBkUAzwr.js";const U="_highlight_1xolc_17",W="_checkbox_1xolc_20",L="_avatar_1xolc_23",R="_content_1xolc_29",M="_user_1xolc_1",O="_text_1xolc_37",B="_timestamp_1xolc_43",a={"user-text-stat-card":"_user-text-stat-card_1xolc_1",highlight:U,checkbox:W,avatar:L,content:R,user:M,text:O,timestamp:B},G={default:a.default,success:a.success,warning:a.warning,error:a.error},H={small:a.small,medium:a.medium,large:a.large},J={default:e.jsx("span",{role:"img","aria-label":"info",children:"ℹ️"}),success:e.jsx("span",{role:"img","aria-label":"check",children:"✅"}),warning:e.jsx("span",{role:"img","aria-label":"warning",children:"⚠️"}),error:e.jsx("span",{role:"img","aria-label":"error",children:"❌"})};function D({title:z,mainValue:F,subValue:o,variant:c="default",size:I="medium",icon:$,description:u,onClick:m,className:k}){const d=`${a.userTextStatCard} ${G[c]} ${H[I]} ${k??""}`,p=e.jsxs("div",{style:{display:"flex",alignItems:"start",gap:"1rem"},children:[e.jsx("div",{children:$??J[c]}),e.jsxs("div",{children:[e.jsx("h3",{className:a.title,children:z}),e.jsx("div",{className:a.mainValue,children:F}),o&&e.jsx("div",{className:a.subValue,children:o}),u&&e.jsx("div",{className:a.description,children:u})]})]});return m?e.jsx("button",{type:"button",onClick:m,className:d,style:{textAlign:"left",background:"none",border:"none",padding:0},children:p}):e.jsx("div",{className:d,children:p})}D.__docgenInfo={description:"",methods:[],displayName:"UserTextStat",props:{title:{required:!0,tsType:{name:"string"},description:""},mainValue:{required:!0,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},subValue:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'success' | 'warning' | 'error'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},icon:{required:!1,tsType:{name:"ReactNode"},description:""},description:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const Q={title:"Components/UserTextStat",component:D},s={args:{title:"Total usuarios",mainValue:1278,subValue:"Últimos 7 días",icon:e.jsx("span",{children:"ℹ️"})}},n={args:{title:"Usuarios activos",mainValue:1032,subValue:"82% activos",variant:"success",icon:e.jsx("span",{children:"✅"})}},r={args:{title:"Cuentas pendientes",mainValue:213,subValue:"Alerta de vencimiento",variant:"warning",icon:e.jsx("span",{children:"⚠️"})}},t={args:{title:"Errores del sistema",mainValue:7,subValue:"Última hora",variant:"error",icon:e.jsx("span",{children:"❌"})}},i={args:{title:"Suscripciones",mainValue:524,subValue:"Activas este mes",description:"Incluye renovaciones automáticas",variant:"success",icon:e.jsx("span",{children:"✅"})}},l={args:{title:"Ingresos totales",mainValue:"$34,920",subValue:"Este trimestre",size:"large",variant:"default",icon:e.jsx("span",{children:"ℹ️"})}};var g,x,v;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    title: 'Total usuarios',
    mainValue: 1278,
    subValue: 'Últimos 7 días',
    icon: <span>ℹ️</span>
  }
}`,...(v=(x=s.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var h,f,V;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    title: 'Usuarios activos',
    mainValue: 1032,
    subValue: '82% activos',
    variant: 'success',
    icon: <span>✅</span>
  }
}`,...(V=(f=n.parameters)==null?void 0:f.docs)==null?void 0:V.source}}};var b,_,j;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    title: 'Cuentas pendientes',
    mainValue: 213,
    subValue: 'Alerta de vencimiento',
    variant: 'warning',
    icon: <span>⚠️</span>
  }
}`,...(j=(_=r.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};var y,S,T;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    title: 'Errores del sistema',
    mainValue: 7,
    subValue: 'Última hora',
    variant: 'error',
    icon: <span>❌</span>
  }
}`,...(T=(S=t.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var w,E,N;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    title: 'Suscripciones',
    mainValue: 524,
    subValue: 'Activas este mes',
    description: 'Incluye renovaciones automáticas',
    variant: 'success',
    icon: <span>✅</span>
  }
}`,...(N=(E=i.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var q,A,C;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    title: 'Ingresos totales',
    mainValue: '$34,920',
    subValue: 'Este trimestre',
    size: 'large',
    variant: 'default',
    icon: <span>ℹ️</span>
  }
}`,...(C=(A=l.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};const X=["Default","Success","Warning","Error","WithDescription","LargeSize"];export{s as Default,t as Error,l as LargeSize,n as Success,r as Warning,i as WithDescription,X as __namedExportsOrder,Q as default};
