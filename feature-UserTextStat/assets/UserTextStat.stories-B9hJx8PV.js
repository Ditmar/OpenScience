import{j as e}from"./jsx-runtime-BlDnFLNC.js";import"./index-Cu9bd8lq.js";const re="_white_1c2it_12",ne="_lavender_1c2it_15",ie="_gray_1c2it_18",oe="_checkbox_1c2it_21",ce="_avatar_1c2it_26",le="_content_1c2it_32",ue="_user_1c2it_1",me="_text_1c2it_41",de="_timestamp_1c2it_48",a={"user-text-stat":"_user-text-stat_1c2it_1",white:re,lavender:ne,gray:ie,checkbox:oe,avatar:ce,content:le,user:ue,text:me,timestamp:de},pe={default:a.default,success:a.success,warning:a.warning,error:a.error},he={small:a.small,medium:a.medium,large:a.large};function K({title:P,mainValue:Q,subValue:p,variant:Y="default",size:Z="medium",icon:h,description:g,onClick:v,className:ee,avatarUrl:d,showCheckbox:ae,styleVariant:se="white"}){const te=a[se]??"",f=[a["user-text-stat"],te,pe[Y],he[Z],ee??""].join(" "),y=e.jsxs(e.Fragment,{children:[ae&&e.jsx("input",{type:"checkbox",className:a.checkbox}),d&&e.jsx("img",{src:d,alt:"Avatar",className:a.avatar}),e.jsxs("div",{className:a.content,children:[e.jsxs("div",{className:a.user,children:[h&&!d&&e.jsx("span",{style:{marginRight:"0.5rem"},children:h}),e.jsx("span",{children:P})]}),e.jsx("div",{className:a.text,children:Q}),p&&e.jsx("div",{className:a.timestamp,children:p}),g&&e.jsx("div",{className:a.text,children:g})]})]});return v?e.jsx("button",{type:"button",onClick:v,className:f,style:{textAlign:"left",background:"none",border:"none",padding:0},children:y}):e.jsx("div",{className:f,children:y})}K.__docgenInfo={description:"",methods:[],displayName:"UserTextStat",props:{title:{required:!0,tsType:{name:"string"},description:""},mainValue:{required:!0,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},subValue:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'success' | 'warning' | 'error'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},avatarUrl:{required:!1,tsType:{name:"string"},description:""},showCheckbox:{required:!1,tsType:{name:"boolean"},description:""},styleVariant:{required:!1,tsType:{name:"union",raw:"'white' | 'lavender' | 'gray'",elements:[{name:"literal",value:"'white'"},{name:"literal",value:"'lavender'"},{name:"literal",value:"'gray'"}]},description:"",defaultValue:{value:"'white'",computed:!1}}}};const fe={title:"ui/components/atoms/user-text-stat",component:K},s={args:{title:"Christeen Lee",mainValue:`
    UI is the canvas, UX the brushstroke; together, they craft an immersive journey 
    where every pixel tells a story of elegance, efficiency, and effortless delight. 
    It’s the artistry of design at its finest.
`,subValue:"2 mins ago",avatarUrl:"https://i.pravatar.cc/36?img=5",showCheckbox:!0,styleVariant:"white"}},t={args:{title:"Christeen Lee",mainValue:`
    UI is the canvas, UX the brushstroke; together, they craft an immersive journey 
    where every pixel tells a story of elegance, efficiency, and effortless delight. 
    It’s the artistry of design at its finest.
`,subValue:"2 mins ago",avatarUrl:"https://i.pravatar.cc/36?img=5",showCheckbox:!0,styleVariant:"lavender"}},r={args:{title:"Christeen Lee",mainValue:`
    UI is the canvas, UX the brushstroke; together, they craft an immersive journey 
    where every pixel tells a story of elegance, efficiency, and effortless delight. 
    It’s the artistry of design at its finest.
`,subValue:"2 mins ago",avatarUrl:"https://i.pravatar.cc/36?img=5",showCheckbox:!0,styleVariant:"gray"}},n={args:{title:"Jane Doe",mainValue:"Just joined the platform.",subValue:"1 minute ago",avatarUrl:"https://i.pravatar.cc/36?img=12",showCheckbox:!1,variant:"default"}},i={args:{title:"Total usuarios",mainValue:1278,subValue:"Últimos 7 días",icon:e.jsx("span",{children:"ℹ️"})}},o={args:{title:"Usuarios activos",mainValue:1032,subValue:"82% activos",variant:"success",icon:e.jsx("span",{children:"✅"})}},c={args:{title:"Cuentas pendientes",mainValue:213,subValue:"Alerta de vencimiento",variant:"warning",icon:e.jsx("span",{children:"⚠️"})}},l={args:{title:"Errores del sistema",mainValue:7,subValue:"Última hora",variant:"error",icon:e.jsx("span",{children:"❌"})}},u={args:{title:"Suscripciones",mainValue:524,subValue:"Activas este mes",description:"Incluye renovaciones automáticas",variant:"success",icon:e.jsx("span",{children:"✅"})}},m={args:{title:"Ingresos totales",mainValue:"$34,920",subValue:"Este trimestre",size:"large",variant:"default",icon:e.jsx("span",{children:"ℹ️"})}};var x,V,b;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    title: 'Christeen Lee',
    mainValue: \`
    UI is the canvas, UX the brushstroke; together, they craft an immersive journey 
    where every pixel tells a story of elegance, efficiency, and effortless delight. 
    It’s the artistry of design at its finest.
\`,
    subValue: '2 mins ago',
    avatarUrl: 'https://i.pravatar.cc/36?img=5',
    showCheckbox: true,
    styleVariant: 'white'
  }
}`,...(b=(V=s.parameters)==null?void 0:V.docs)==null?void 0:b.source}}};var w,_,C;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    title: 'Christeen Lee',
    mainValue: \`
    UI is the canvas, UX the brushstroke; together, they craft an immersive journey 
    where every pixel tells a story of elegance, efficiency, and effortless delight. 
    It’s the artistry of design at its finest.
\`,
    subValue: '2 mins ago',
    avatarUrl: 'https://i.pravatar.cc/36?img=5',
    showCheckbox: true,
    styleVariant: 'lavender'
  }
}`,...(C=(_=t.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};var j,U,k;r.parameters={...r.parameters,docs:{...(j=r.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    title: 'Christeen Lee',
    mainValue: \`
    UI is the canvas, UX the brushstroke; together, they craft an immersive journey 
    where every pixel tells a story of elegance, efficiency, and effortless delight. 
    It’s the artistry of design at its finest.
\`,
    subValue: '2 mins ago',
    avatarUrl: 'https://i.pravatar.cc/36?img=5',
    showCheckbox: true,
    styleVariant: 'gray'
  }
}`,...(k=(U=r.parameters)==null?void 0:U.docs)==null?void 0:k.source}}};var S,I,T;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    title: 'Jane Doe',
    mainValue: 'Just joined the platform.',
    subValue: '1 minute ago',
    avatarUrl: 'https://i.pravatar.cc/36?img=12',
    showCheckbox: false,
    variant: 'default'
  }
}`,...(T=(I=n.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var N,E,q;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    title: 'Total usuarios',
    mainValue: 1278,
    subValue: 'Últimos 7 días',
    icon: <span>ℹ️</span>
  }
}`,...(q=(E=i.parameters)==null?void 0:E.docs)==null?void 0:q.source}}};var L,A,D;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    title: 'Usuarios activos',
    mainValue: 1032,
    subValue: '82% activos',
    variant: 'success',
    icon: <span>✅</span>
  }
}`,...(D=(A=o.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var F,z,R;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    title: 'Cuentas pendientes',
    mainValue: 213,
    subValue: 'Alerta de vencimiento',
    variant: 'warning',
    icon: <span>⚠️</span>
  }
}`,...(R=(z=c.parameters)==null?void 0:z.docs)==null?void 0:R.source}}};var W,X,J;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    title: 'Errores del sistema',
    mainValue: 7,
    subValue: 'Última hora',
    variant: 'error',
    icon: <span>❌</span>
  }
}`,...(J=(X=l.parameters)==null?void 0:X.docs)==null?void 0:J.source}}};var G,M,$;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    title: 'Suscripciones',
    mainValue: 524,
    subValue: 'Activas este mes',
    description: 'Incluye renovaciones automáticas',
    variant: 'success',
    icon: <span>✅</span>
  }
}`,...($=(M=u.parameters)==null?void 0:M.docs)==null?void 0:$.source}}};var O,B,H;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    title: 'Ingresos totales',
    mainValue: '$34,920',
    subValue: 'Este trimestre',
    size: 'large',
    variant: 'default',
    icon: <span>ℹ️</span>
  }
}`,...(H=(B=m.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};const ye=["WhiteCard","LavenderCard","GrayCard","MinimalUserCard","Default","Success","Warning","Error","WithDescription","LargeSize"];export{i as Default,l as Error,r as GrayCard,m as LargeSize,t as LavenderCard,n as MinimalUserCard,o as Success,c as Warning,s as WhiteCard,u as WithDescription,ye as __namedExportsOrder,fe as default};
