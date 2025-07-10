import{j as e}from"./jsx-runtime-BlDnFLNC.js";import"./index-Cu9bd8lq.js";import ae from"./Info-Tooltip-C7inAbXW.js";import te from"./error-BgHEfqKV.js";import se from"./circle-quarters-B2Y1lMV2.js";import O from"./check-BE8zjXxp.js";const re="_white_15m7h_12",ne="_lavender_15m7h_15",ie="_gray_15m7h_18",oe="_checkbox_15m7h_21",ce="_avatar_15m7h_26",le="_content_15m7h_32",ue="_user_15m7h_1",me="_text_15m7h_41",de="_timestamp_15m7h_48",a={"user-text-stat":"_user-text-stat_15m7h_1",white:re,lavender:ne,gray:ie,checkbox:oe,avatar:ce,content:le,user:ue,text:me,timestamp:de,"icon-wrapper":"_icon-wrapper_15m7h_53"},pe={default:a.default,success:a.success,warning:a.warning,error:a.error},he={small:a.small,medium:a.medium,large:a.large};function Q({title:B,mainValue:H,subValue:d,description:p,variant:K="default",icon:h,size:P="medium",onClick:g,className:Y,avatarUrl:m,showCheckbox:Z,styleVariant:$="white"}){const ee=a[$]??"",v=[a["user-text-stat"],ee,pe[K],he[P],Y??""].join(" "),f=e.jsxs(e.Fragment,{children:[Z&&e.jsx("input",{type:"checkbox",className:a.checkbox}),m&&e.jsx("img",{src:m,alt:"Avatar",className:a.avatar}),e.jsxs("div",{className:a.content,children:[e.jsxs("div",{className:a.user,children:[h&&!m&&e.jsx("span",{className:a["icon-wrapper"],children:h}),e.jsx("span",{children:B})]}),e.jsx("div",{className:a.text,children:H}),d!==void 0&&e.jsx("div",{className:a.timestamp,children:d}),p&&e.jsx("div",{className:a.text,children:p})]})]});return g?e.jsx("button",{type:"button",onClick:g,className:v,style:{textAlign:"left",background:"none",border:"none",padding:0},children:f}):e.jsx("div",{className:v,children:f})}Q.__docgenInfo={description:"",methods:[],displayName:"UserTextStat",props:{title:{required:!0,tsType:{name:"string"},description:""},mainValue:{required:!0,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},subValue:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'success' | 'warning' | 'error'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},avatarUrl:{required:!1,tsType:{name:"string"},description:""},showCheckbox:{required:!1,tsType:{name:"boolean"},description:""},styleVariant:{required:!1,tsType:{name:"union",raw:"'white' | 'lavender' | 'gray'",elements:[{name:"literal",value:"'white'"},{name:"literal",value:"'lavender'"},{name:"literal",value:"'gray'"}]},description:"",defaultValue:{value:"'white'",computed:!1}}}};const be={title:"ui/components/atoms/user-text-stat",component:Q},t={args:{title:"Christeen Lee",mainValue:`
    UI is the canvas, UX the brushstroke; together, they craft an immersive journey 
    where every pixel tells a story of elegance, efficiency, and effortless delight. 
    It’s the artistry of design at its finest.
`,subValue:"2 mins ago",avatarUrl:"https://i.pravatar.cc/36?img=5",showCheckbox:!0,styleVariant:"white"}},s={args:{title:"Christeen Lee",mainValue:`
    UI is the canvas, UX the brushstroke; together, they craft an immersive journey 
    where every pixel tells a story of elegance, efficiency, and effortless delight. 
    It’s the artistry of design at its finest.
`,subValue:"2 mins ago",avatarUrl:"https://i.pravatar.cc/36?img=5",showCheckbox:!0,styleVariant:"lavender"}},r={args:{title:"Christeen Lee",mainValue:`
    UI is the canvas, UX the brushstroke; together, they craft an immersive journey 
    where every pixel tells a story of elegance, efficiency, and effortless delight. 
    It’s the artistry of design at its finest.
`,subValue:"2 mins ago",avatarUrl:"https://i.pravatar.cc/36?img=5",showCheckbox:!0,styleVariant:"gray"}},n={args:{title:"Jane Doe",mainValue:"Just joined the platform.",subValue:"1 minute ago",avatarUrl:"https://i.pravatar.cc/36?img=12",showCheckbox:!1,variant:"default"}},i={args:{title:"Total usuarios",mainValue:1278,subValue:"Últimos 7 días",icon:e.jsx(ae,{})}},o={args:{title:"Usuarios activos",mainValue:1032,subValue:"82% activos",variant:"success",icon:e.jsx(O,{})}},c={args:{title:"Cuentas pendientes",mainValue:213,subValue:"Alerta de vencimiento",variant:"warning",icon:e.jsx(te,{})}},l={args:{title:"Errores del sistema",mainValue:7,subValue:"Última hora",variant:"error",icon:e.jsx(se,{})}},u={args:{title:"Suscripciones",mainValue:524,subValue:"Activas este mes",description:"Incluye renovaciones automáticas",variant:"success",icon:e.jsx(O,{})}};var y,x,V;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(V=(x=t.parameters)==null?void 0:x.docs)==null?void 0:V.source}}};var b,w,_;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(_=(w=s.parameters)==null?void 0:w.docs)==null?void 0:_.source}}};var C,j,U;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(U=(j=r.parameters)==null?void 0:j.docs)==null?void 0:U.source}}};var k,I,S;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    title: 'Jane Doe',
    mainValue: 'Just joined the platform.',
    subValue: '1 minute ago',
    avatarUrl: 'https://i.pravatar.cc/36?img=12',
    showCheckbox: false,
    variant: 'default'
  }
}`,...(S=(I=n.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var T,N,q;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    title: 'Total usuarios',
    mainValue: 1278,
    subValue: 'Últimos 7 días',
    icon: <InfoIcon />
  }
}`,...(q=(N=i.parameters)==null?void 0:N.docs)==null?void 0:q.source}}};var E,D,A;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    title: 'Usuarios activos',
    mainValue: 1032,
    subValue: '82% activos',
    variant: 'success',
    icon: <CheckIcon />
  }
}`,...(A=(D=o.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var L,W,X;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    title: 'Cuentas pendientes',
    mainValue: 213,
    subValue: 'Alerta de vencimiento',
    variant: 'warning',
    icon: <WarningIcon />
  }
}`,...(X=(W=c.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var R,J,z;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    title: 'Errores del sistema',
    mainValue: 7,
    subValue: 'Última hora',
    variant: 'error',
    icon: <ErrorIcon />
  }
}`,...(z=(J=l.parameters)==null?void 0:J.docs)==null?void 0:z.source}}};var G,M,F;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    title: 'Suscripciones',
    mainValue: 524,
    subValue: 'Activas este mes',
    description: 'Incluye renovaciones automáticas',
    variant: 'success',
    icon: <CheckIcon />
  }
}`,...(F=(M=u.parameters)==null?void 0:M.docs)==null?void 0:F.source}}};const we=["WhiteCard","LavenderCard","GrayCard","MinimalUserCard","Default","Success","Warning","Error","WithDescription"];export{i as Default,l as Error,r as GrayCard,s as LavenderCard,n as MinimalUserCard,o as Success,c as Warning,t as WhiteCard,u as WithDescription,we as __namedExportsOrder,be as default};
