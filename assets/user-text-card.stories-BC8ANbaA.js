import{j as a}from"./jsx-runtime-DRTy3Uxn.js";import{r as h}from"./index-BBkUAzwr.js";const U="_card_1gjy6_1",q="_avatar_1gjy6_24",S="_checkbox_1gjy6_31",W="_content_1gjy6_38",I="_header_1gjy6_44",L="_verified_1gjy6_56",X="_message_1gjy6_59",E="_timestamp_1gjy6_70",R="_compact_1gjy6_76",D="_expanded_1gjy6_100",t={card:U,"card__content-wrapper":"_card__content-wrapper_1gjy6_13","card__text-container":"_card__text-container_1gjy6_19",avatar:q,checkbox:S,content:W,header:I,"header__user-name":"_header__user-name_1gjy6_51",verified:L,message:X,timestamp:E,compact:R,"header__user-handle":"_header__user-handle_1gjy6_84",default:"_default_1gjy6_97",expanded:D};function o(e){const{avatar:s,userName:c,userHandle:i,timestamp:n,content:r,variant:p="default",isVerified:V=!1,onClick:b,className:w,isChecked:H=!1,onCheckChange:l}=e,T=[t.card,t[p],w].filter(Boolean).join(" ");return a.jsxs("div",{className:T,"data-testid":`user-card-${p}`,children:[a.jsx("input",{type:"checkbox",checked:H,onChange:C=>{C.stopPropagation(),l==null||l(C.target.checked),b()},className:t.checkbox}),a.jsxs("div",{className:t["card__content-wrapper"],children:[p!=="compact"&&a.jsx("div",{className:t.avatar,children:typeof s=="string"?a.jsx("img",{src:s,alt:"avatar"}):s}),a.jsxs("div",{className:t.content,children:[a.jsxs("div",{className:t["card__text-container"],children:[a.jsxs("div",{className:t.header,children:[a.jsx("span",{className:t["header__user-name"],children:c}),V&&a.jsx("span",{className:t.verified,children:"✔️"}),i&&a.jsxs("span",{className:t["header__user-handle"],children:["@",i]})]}),a.jsx("div",{className:t.message,children:typeof r=="string"?a.jsx("p",{children:r}):r})]}),n&&a.jsx("div",{className:t.timestamp,children:typeof n=="string"?n:n.toLocaleString()})]})]})]})}o.__docgenInfo={description:"",methods:[],displayName:"UserTextCard",props:{avatar:{required:!0,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},userName:{required:!0,tsType:{name:"string"},description:""},userHandle:{required:!1,tsType:{name:"string"},description:""},content:{required:!0,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},timestamp:{required:!1,tsType:{name:"union",raw:"string | Date",elements:[{name:"string"},{name:"Date"}]},description:""},actions:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ label: string; onClick: () => void }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}}]}}],raw:"{ label: string; onClick: () => void }[]"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'compact' | 'expanded'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'compact'"},{name:"literal",value:"'expanded'"}]},description:""},isVerified:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},isChecked:{required:!0,tsType:{name:"boolean"},description:""},onCheckChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""}}};const O={component:o,title:"ui/components/molecules/user-text-card",argTypes:{onClick:{action:"click"},onCheckChange:{action:"checkboxChanged"}}},d={render:e=>{function s(){const[c,i]=h.useState(!1);return a.jsx(o,{avatar:e.avatar,userName:e.userName,userHandle:e.userHandle,content:e.content,timestamp:e.timestamp,isVerified:e.isVerified,actions:e.actions,isChecked:c,onClick:e.onClick,onCheckChange:n=>{var r;i(n),(r=e.onCheckChange)==null||r.call(e,n)}})}return a.jsx(s,{})},args:{avatar:"https://i.pravatar.cc/40?img=2",userName:"Christeen Lee",userHandle:"christeen",content:"UI is the canvas, UX the brushstroke; together, they craft an immersive journey where every pixel tells",timestamp:"2 mins ago",isVerified:!0,onClick:()=>{},variant:"default"}},m={render:e=>{function s(){const[c,i]=h.useState(!1);return a.jsx(o,{avatar:e.avatar,userName:e.userName,userHandle:e.userHandle,content:e.content,timestamp:e.timestamp,isVerified:e.isVerified,actions:e.actions,isChecked:c,onClick:e.onClick,variant:e.variant,onCheckChange:n=>{var r;i(n),(r=e.onCheckChange)==null||r.call(e,n)}})}return a.jsx(s,{})},args:{userName:"Christeen Lee",userHandle:"christeen",content:"UI is the canvas, UX the brushstroke...",timestamp:"2 mins ago",isVerified:!0,onClick:()=>{},variant:"compact"}},u={render:e=>{function s(){const[c,i]=h.useState(!1);return a.jsx(o,{avatar:e.avatar,userName:e.userName,userHandle:e.userHandle,content:e.content,timestamp:e.timestamp,isVerified:e.isVerified,actions:e.actions,isChecked:c,onClick:e.onClick,variant:e.variant,onCheckChange:n=>{var r;i(n),(r=e.onCheckChange)==null||r.call(e,n)}})}return a.jsx(s,{})},args:{avatar:"https://i.pravatar.cc/40?img=2",userName:"Christeen Lee",userHandle:"christeen",content:"UI is the canvas, UX the brushstroke...",timestamp:"2 mins ago",isVerified:!0,onClick:()=>{},variant:"expanded"}};var k,g,v;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => {
    function WrapperComponent() {
      const [checked, setChecked] = useState(false);
      return <UserTextCard avatar={args.avatar} userName={args.userName} userHandle={args.userHandle} content={args.content} timestamp={args.timestamp} isVerified={args.isVerified} actions={args.actions} isChecked={checked} onClick={args.onClick} onCheckChange={newVal => {
        setChecked(newVal);
        args.onCheckChange?.(newVal);
      }} />;
    }
    return <WrapperComponent />;
  },
  args: {
    avatar: 'https://i.pravatar.cc/40?img=2',
    userName: 'Christeen Lee',
    userHandle: 'christeen',
    content: 'UI is the canvas, UX the brushstroke; together, they craft an immersive journey where every pixel tells',
    timestamp: '2 mins ago',
    isVerified: true,
    onClick: () => {},
    variant: 'default'
  }
}`,...(v=(g=d.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var _,f,x;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => {
    function WrapperComponent() {
      const [checked, setChecked] = useState(false);
      return <UserTextCard avatar={args.avatar} userName={args.userName} userHandle={args.userHandle} content={args.content} timestamp={args.timestamp} isVerified={args.isVerified} actions={args.actions} isChecked={checked} onClick={args.onClick} variant={args.variant} onCheckChange={newVal => {
        setChecked(newVal);
        args.onCheckChange?.(newVal);
      }} />;
    }
    return <WrapperComponent />;
  },
  args: {
    userName: 'Christeen Lee',
    userHandle: 'christeen',
    content: 'UI is the canvas, UX the brushstroke...',
    timestamp: '2 mins ago',
    isVerified: true,
    onClick: () => {},
    variant: 'compact'
  }
}`,...(x=(f=m.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var y,j,N;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => {
    function WrapperComponent() {
      const [checked, setChecked] = useState(false);
      return <UserTextCard avatar={args.avatar} userName={args.userName} userHandle={args.userHandle} content={args.content} timestamp={args.timestamp} isVerified={args.isVerified} actions={args.actions} isChecked={checked} onClick={args.onClick} variant={args.variant} onCheckChange={newVal => {
        setChecked(newVal);
        args.onCheckChange?.(newVal);
      }} />;
    }
    return <WrapperComponent />;
  },
  args: {
    avatar: 'https://i.pravatar.cc/40?img=2',
    userName: 'Christeen Lee',
    userHandle: 'christeen',
    content: 'UI is the canvas, UX the brushstroke...',
    timestamp: '2 mins ago',
    isVerified: true,
    onClick: () => {},
    variant: 'expanded'
  }
}`,...(N=(j=u.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};const P=["Normal","Compact","Expanded"];export{m as Compact,u as Expanded,d as Normal,P as __namedExportsOrder,O as default};
