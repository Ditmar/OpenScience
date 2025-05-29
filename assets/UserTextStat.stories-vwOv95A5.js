import{j as e}from"./jsx-runtime-DRTy3Uxn.js";import"./index-BBkUAzwr.js";const H="_highlight_s5r4c_19",K="_checkbox_s5r4c_23",P="_avatar_s5r4c_27",Q="_content_s5r4c_35",Y="_user_s5r4c_1",Z="_text_s5r4c_48",ee="_timestamp_s5r4c_56",a={"user-text-stat-card":"_user-text-stat-card_s5r4c_1",highlight:H,checkbox:K,avatar:P,content:Q,user:Y,text:Z,timestamp:ee},ae={default:a.default,success:a.success,warning:a.warning,error:a.error},se={small:a.small,medium:a.medium,large:a.large},re={default:e.jsx("span",{role:"img","aria-label":"info",children:"ℹ️"}),success:e.jsx("span",{role:"img","aria-label":"check",children:"✅"}),warning:e.jsx("span",{role:"img","aria-label":"warning",children:"⚠️"}),error:e.jsx("span",{role:"img","aria-label":"error",children:"❌"})};function J({title:M,mainValue:X,subValue:m,variant:d="default",size:$="medium",icon:O,description:p,onClick:g,className:B,avatarUrl:s,showCheckbox:G}){const h=[a.userTextStatCard,ae[d],se[$],B??""].join(" "),v=e.jsxs("div",{className:a.userTextStatCard,children:[G&&e.jsx("input",{type:"checkbox",className:a.checkbox}),s&&e.jsx("img",{src:s,alt:"Avatar",className:a.avatar}),e.jsxs("div",{className:a.content,children:[e.jsxs("div",{className:a.user,children:[!s&&(O??re[d]),e.jsx("span",{style:{marginLeft:s?"0":"0.5rem"},children:M})]}),e.jsx("div",{className:a.text,children:X}),m!=null&&e.jsx("div",{className:a.timestamp,children:m}),p&&e.jsx("div",{className:a.text,children:p})]})]});return g?e.jsx("button",{type:"button",onClick:g,className:h,style:{textAlign:"left",background:"none",border:"none",padding:0},children:v}):e.jsx("div",{className:h,children:v})}J.__docgenInfo={description:"",methods:[],displayName:"UserTextStat",props:{title:{required:!0,tsType:{name:"string"},description:""},mainValue:{required:!0,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},subValue:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"string"},description:""},avatarUrl:{required:!1,tsType:{name:"string"},description:""},showCheckbox:{required:!1,tsType:{name:"boolean"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'success' | 'warning' | 'error'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const ie={title:"Components/UserTextStat",component:J},r={args:{title:"Christeen Lee",mainValue:"UI is the canvas, UX the brushstroke; together, they craft an immersive journey where every pixel tells a story of elegance, efficiency, and effortless delight. It's the artistry of design at its finest.",subValue:"2 mins ago",variant:"default",icon:null,avatarUrl:"https://i.pravatar.cc/36?img=5",showCheckbox:!0}},t={args:{title:"Jane Doe",mainValue:"Just joined the platform.",subValue:"1 minute ago",avatarUrl:"https://i.pravatar.cc/36?img=12",showCheckbox:!1,variant:"default"}},n={args:{title:"Total usuarios",mainValue:1278,subValue:"Últimos 7 días",icon:e.jsx("span",{children:"ℹ️"})}},i={args:{title:"Usuarios activos",mainValue:1032,subValue:"82% activos",variant:"success",icon:e.jsx("span",{children:"✅"})}},c={args:{title:"Cuentas pendientes",mainValue:213,subValue:"Alerta de vencimiento",variant:"warning",icon:e.jsx("span",{children:"⚠️"})}},o={args:{title:"Errores del sistema",mainValue:7,subValue:"Última hora",variant:"error",icon:e.jsx("span",{children:"❌"})}},l={args:{title:"Suscripciones",mainValue:524,subValue:"Activas este mes",description:"Incluye renovaciones automáticas",variant:"success",icon:e.jsx("span",{children:"✅"})}},u={args:{title:"Ingresos totales",mainValue:"$34,920",subValue:"Este trimestre",size:"large",variant:"default",icon:e.jsx("span",{children:"ℹ️"})}};var f,x,b;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    title: 'Christeen Lee',
    mainValue: 'UI is the canvas, UX the brushstroke; together, they craft an immersive journey where every pixel tells a story of elegance, ' + "efficiency, and effortless delight. It's the artistry of design at its finest.",
    subValue: '2 mins ago',
    variant: 'default',
    icon: null,
    avatarUrl: 'https://i.pravatar.cc/36?img=5',
    showCheckbox: true
  }
}`,...(b=(x=r.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var V,y,j;t.parameters={...t.parameters,docs:{...(V=t.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    title: 'Jane Doe',
    mainValue: 'Just joined the platform.',
    subValue: '1 minute ago',
    avatarUrl: 'https://i.pravatar.cc/36?img=12',
    showCheckbox: false,
    variant: 'default'
  }
}`,...(j=(y=t.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var _,w,C;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    title: 'Total usuarios',
    mainValue: 1278,
    subValue: 'Últimos 7 días',
    icon: <span>ℹ️</span>
  }
}`,...(C=(w=n.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var S,T,k;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    title: 'Usuarios activos',
    mainValue: 1032,
    subValue: '82% activos',
    variant: 'success',
    icon: <span>✅</span>
  }
}`,...(k=(T=i.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var N,A,E;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    title: 'Cuentas pendientes',
    mainValue: 213,
    subValue: 'Alerta de vencimiento',
    variant: 'warning',
    icon: <span>⚠️</span>
  }
}`,...(E=(A=c.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var U,q,D;o.parameters={...o.parameters,docs:{...(U=o.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    title: 'Errores del sistema',
    mainValue: 7,
    subValue: 'Última hora',
    variant: 'error',
    icon: <span>❌</span>
  }
}`,...(D=(q=o.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};var I,z,F;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    title: 'Suscripciones',
    mainValue: 524,
    subValue: 'Activas este mes',
    description: 'Incluye renovaciones automáticas',
    variant: 'success',
    icon: <span>✅</span>
  }
}`,...(F=(z=l.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var W,L,R;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    title: 'Ingresos totales',
    mainValue: '$34,920',
    subValue: 'Este trimestre',
    size: 'large',
    variant: 'default',
    icon: <span>ℹ️</span>
  }
}`,...(R=(L=u.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};const ce=["WithAvatarAndCheckbox","MinimalUserCard","Default","Success","Warning","Error","WithDescription","LargeSize"];export{n as Default,o as Error,u as LargeSize,t as MinimalUserCard,i as Success,c as Warning,r as WithAvatarAndCheckbox,l as WithDescription,ce as __namedExportsOrder,ie as default};
