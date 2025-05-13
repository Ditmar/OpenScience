import{j as n}from"./jsx-runtime-DRTy3Uxn.js";import{r as C}from"./index-BBkUAzwr.js";const S="_card_h52db_1",W="_avatar_h52db_24",I="_content_h52db_34",L="_header_h52db_40",E="_verified_h52db_52",X="_message_h52db_60",R="_timestamp_h52db_67",D="_checkbox_h52db_78",P="_compact_h52db_91",A="_expanded_h52db_132",B="_actions_h52db_165",a={card:S,"card__content-wrapper":"_card__content-wrapper_h52db_17",avatar:W,"card__text-container":"_card__text-container_h52db_28",content:I,header:L,"header__user-name":"_header__user-name_h52db_47",verified:E,"header__user-handle":"_header__user-handle_h52db_56",message:X,timestamp:R,"card__checkbox-container":"_card__checkbox-container_h52db_72",checkbox:D,default:"_default_h52db_82",compact:P,"compact__content-wrapper":"_compact__content-wrapper_h52db_96","compact__text-container":"_compact__text-container_h52db_101",expanded:A,"expanded__content-wrapper":"_expanded__content-wrapper_h52db_137","expanded__text-container":"_expanded__text-container_h52db_143",actions:B};function d(e){const{avatar:s,userName:o,userHandle:c,timestamp:t,content:r,actions:k,variant:u="default",isVerified:w=!1,onClick:m,className:H,isChecked:T=!1,onCheckChange:_}=e;return n.jsxs("div",{className:[a.card,a[u],H].filter(Boolean).join(" "),children:[n.jsx("input",{type:"checkbox",checked:T,onChange:i=>{i.stopPropagation(),_==null||_(i.target.checked)},className:a.checkbox}),n.jsxs("div",{className:a["card__content-wrapper"],children:[u!=="compact"&&n.jsx("div",{className:a.avatar,children:typeof s=="string"?n.jsx("img",{src:s,alt:"avatar"}):s}),n.jsxs("div",{className:a.content,children:[n.jsxs("div",{className:a["card__text-container"],children:[n.jsxs("div",{className:a.header,children:[n.jsx("span",{className:a["header__user-name"],children:o}),w&&n.jsx("span",{className:a.verified,children:"✔️"}),c&&n.jsxs("span",{className:a["header__user-handle"],children:["@",c]})]}),n.jsx("div",{className:a.message,onClick:m,role:"button",tabIndex:0,onKeyDown:i=>{(i.key==="Enter"||i.key===" ")&&(m==null||m())},children:typeof r=="string"?n.jsx("p",{children:r}):r})]}),t&&n.jsx("div",{className:a.timestamp,children:typeof t=="string"?t:t.toLocaleString()}),u==="expanded"&&k&&n.jsx("div",{className:a.actions,children:k.map((i,U)=>n.jsx("button",{onClick:q=>{q.stopPropagation(),i.onClick()},children:i.label},i.label||U))})]})]})]})}d.__docgenInfo={description:"",methods:[],displayName:"UserTextCard",props:{avatar:{required:!0,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},userName:{required:!0,tsType:{name:"string"},description:""},userHandle:{required:!1,tsType:{name:"string"},description:""},content:{required:!0,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},timestamp:{required:!1,tsType:{name:"union",raw:"string | Date",elements:[{name:"string"},{name:"Date"}]},description:""},actions:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ label: string; onClick: () => void }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}}]}}],raw:"{ label: string; onClick: () => void }[]"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'compact' | 'expanded'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'compact'"},{name:"literal",value:"'expanded'"}]},description:""},isVerified:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},isChecked:{required:!1,tsType:{name:"boolean"},description:""},onCheckChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""}}};const z={component:d,title:"ui/components/molecules/user-text-card",argTypes:{onClick:{action:"click"},onCheckChange:{action:"checkboxChanged"}}},p={render:e=>{function s(){const[o,c]=C.useState(!1);return n.jsx(d,{avatar:e.avatar,userName:e.userName,userHandle:e.userHandle,content:e.content,timestamp:e.timestamp,isVerified:e.isVerified,actions:e.actions,isChecked:o,onClick:e.onClick,onCheckChange:t=>{var r;c(t),(r=e.onCheckChange)==null||r.call(e,t)}})}return n.jsx(s,{})},args:{avatar:"https://i.pravatar.cc/40?img=2",userName:"Christeen Lee",userHandle:"christeen",content:"UI is the canvas, UX the brushstroke; together, they craft an immersive journey where every pixel tells",timestamp:"2 mins ago",isVerified:!0,onClick:()=>{},variant:"default"}},l={render:e=>{function s(){const[o,c]=C.useState(!1);return n.jsx(d,{avatar:e.avatar,userName:e.userName,userHandle:e.userHandle,content:e.content,timestamp:e.timestamp,isVerified:e.isVerified,actions:e.actions,isChecked:o,onClick:e.onClick,onCheckChange:t=>{var r;c(t),(r=e.onCheckChange)==null||r.call(e,t)}})}return n.jsx(s,{})},args:{userName:"Christeen Lee",userHandle:"christeen",content:"UI is the canvas, UX the brushstroke...",timestamp:"2 mins ago",isVerified:!0,onClick:()=>{},variant:"compact"}},h={render:e=>{function s(){const[o,c]=C.useState(!1);return n.jsx(d,{avatar:e.avatar,userName:e.userName,userHandle:e.userHandle,content:e.content,timestamp:e.timestamp,isVerified:e.isVerified,actions:e.actions,isChecked:o,onClick:e.onClick,onCheckChange:t=>{var r;c(t),(r=e.onCheckChange)==null||r.call(e,t)}})}return n.jsx(s,{})},args:{avatar:"https://i.pravatar.cc/40?img=2",userName:"Christeen Lee",userHandle:"christeen",content:"UI is the canvas, UX the brushstroke...",timestamp:"2 mins ago",isVerified:!0,onClick:()=>{},variant:"expanded"}};var v,f,g;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(g=(f=p.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var x,b,N;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
    userName: 'Christeen Lee',
    userHandle: 'christeen',
    content: 'UI is the canvas, UX the brushstroke...',
    timestamp: '2 mins ago',
    isVerified: true,
    onClick: () => {},
    variant: 'compact'
  }
}`,...(N=(b=l.parameters)==null?void 0:b.docs)==null?void 0:N.source}}};var y,j,V;h.parameters={...h.parameters,docs:{...(y=h.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
    content: 'UI is the canvas, UX the brushstroke...',
    timestamp: '2 mins ago',
    isVerified: true,
    onClick: () => {},
    variant: 'expanded'
  }
}`,...(V=(j=h.parameters)==null?void 0:j.docs)==null?void 0:V.source}}};const F=["Normal","Compact","Expanded"];export{l as Compact,h as Expanded,p as Normal,F as __namedExportsOrder,z as default};
