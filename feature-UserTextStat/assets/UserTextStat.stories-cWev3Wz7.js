import{j as t}from"./jsx-runtime-BlDnFLNC.js";import"./index-Cu9bd8lq.js";const S="_white_1t50m_12",X="_lavender_1t50m_15",J="_gray_1t50m_18",z="_checkbox_1t50m_21",A="_avatar_1t50m_26",D="_content_1t50m_32",E="_user_1t50m_1",G="_text_1t50m_41",M="_timestamp_1t50m_48",e={"user-text-stat":"_user-text-stat_1t50m_1",white:S,lavender:X,gray:J,checkbox:z,avatar:A,content:D,user:E,text:G,timestamp:M},W={default:e.default,success:e.success,warning:e.warning,error:e.error},F={small:e.small,medium:e.medium,large:e.large};function C({title:U,mainValue:j,subValue:i,description:l,variant:k="default",size:I="medium",onClick:o,className:T,avatarUrl:c,showCheckbox:N,styleVariant:q="white"}){const L=e[q]??"",m=[e["user-text-stat"],L,W[k],F[I],T??""].join(" "),u=t.jsxs(t.Fragment,{children:[N&&t.jsx("input",{type:"checkbox",className:e.checkbox}),c&&t.jsx("img",{src:c,alt:"Avatar",className:e.avatar}),t.jsxs("div",{className:e.content,children:[t.jsx("div",{className:e.user,children:t.jsx("span",{children:U})}),t.jsx("div",{className:e.text,children:j}),i!==void 0&&t.jsx("div",{className:e.timestamp,children:i}),l&&t.jsx("div",{className:e.text,children:l})]})]});return o?t.jsx("button",{type:"button",onClick:o,className:m,style:{textAlign:"left",background:"none",border:"none",padding:0},children:u}):t.jsx("div",{className:m,children:u})}C.__docgenInfo={description:"",methods:[],displayName:"UserTextStat",props:{title:{required:!0,tsType:{name:"string"},description:""},mainValue:{required:!0,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},subValue:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'success' | 'warning' | 'error'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},avatarUrl:{required:!1,tsType:{name:"string"},description:""},showCheckbox:{required:!1,tsType:{name:"boolean"},description:""},styleVariant:{required:!1,tsType:{name:"union",raw:"'white' | 'lavender' | 'gray'",elements:[{name:"literal",value:"'white'"},{name:"literal",value:"'lavender'"},{name:"literal",value:"'gray'"}]},description:"",defaultValue:{value:"'white'",computed:!1}}}};const B={title:"ui/components/atoms/user-text-stat",component:C},a={args:{title:"Christeen Lee",mainValue:`
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
`,subValue:"2 mins ago",avatarUrl:"https://i.pravatar.cc/36?img=5",showCheckbox:!0,styleVariant:"gray"}},n={args:{title:"Jane Doe",mainValue:"Just joined the platform.",subValue:"1 minute ago",avatarUrl:"https://i.pravatar.cc/36?img=12",showCheckbox:!1,variant:"default"}};var d,h,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(p=(h=a.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};var g,f,v;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(v=(f=s.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var y,x,b;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(b=(x=r.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var _,w,V;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    title: 'Jane Doe',
    mainValue: 'Just joined the platform.',
    subValue: '1 minute ago',
    avatarUrl: 'https://i.pravatar.cc/36?img=12',
    showCheckbox: false,
    variant: 'default'
  }
}`,...(V=(w=n.parameters)==null?void 0:w.docs)==null?void 0:V.source}}};const H=["WhiteCard","LavenderCard","GrayCard","MinimalUserCard"];export{r as GrayCard,s as LavenderCard,n as MinimalUserCard,a as WhiteCard,H as __namedExportsOrder,B as default};
