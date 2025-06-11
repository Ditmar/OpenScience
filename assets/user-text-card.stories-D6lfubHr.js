import{j as a}from"./jsx-runtime-BlDnFLNC.js";import{r as d}from"./index-Cu9bd8lq.js";import{C as K}from"./check-DPKWULmV.js";import{A as M}from"./Avatar-_TB0IWT5.js";import{T as m}from"./Typography-CWv4Zz6J.js";import"./check-BE8zjXxp.js";import"./memoTheme-CPnQs7hc.js";import"./DefaultPropsProvider-DcRJznjO.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-B34fLoo2.js";import"./extends-CF3RwP-h.js";import"./createSvgIcon-CHPF6Y__.js";import"./useSlot-DitqRAVZ.js";import"./index-C1I0bJEX.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";const P="_card_c6kfa_1",Q="_avatar_c6kfa_24",Y="_checkbox_c6kfa_31",Z="_content_c6kfa_38",ee="_header_c6kfa_44",ae="_verified_c6kfa_56",ne="_timestamp_c6kfa_59",re="_compact_c6kfa_65",te="_expanded_c6kfa_85",se="_info_c6kfa_114",ie="_error_c6kfa_119",ce="_success_c6kfa_124",oe="_warning_c6kfa_129",c={card:P,"card__content-wrapper":"_card__content-wrapper_c6kfa_13","card__text-container":"_card__text-container_c6kfa_19",avatar:Q,checkbox:Y,content:Z,header:ee,"header__user-name":"_header__user-name_c6kfa_51",verified:ae,timestamp:ne,compact:re,"header__user-handle":"_header__user-handle_c6kfa_73",default:"_default_c6kfa_82",expanded:te,"user-text-card__message-text":"_user-text-card__message-text_c6kfa_102",info:se,error:ie,success:ce,warning:oe};function o(e){const{avatar:t="https://i.pravatar.cc/40?img=5",userName:i,userHandle:s,timestamp:n,content:r,variant:f="default",colorVariant:B="default",isVerified:O=!1,onClick:$,className:z,isChecked:F,onCheckChange:g}=e,G=[c.card,c[f],c[B],z].filter(Boolean).join(" ");return a.jsxs("div",{className:G,"data-testid":`user-card-${f}`,children:[a.jsx(K,{checked:F,onChange:J=>{g==null||g(J),$()},className:c.checkbox,variant:"default",shape:"square",disabled:!1}),a.jsxs("div",{className:c["card__content-wrapper"],children:[f!=="compact"&&a.jsx("div",{className:c.avatar,children:typeof t=="string"?a.jsx(M,{src:t,alt:"avatar",className:c.avatar,variant:"rounded"}):t}),a.jsxs("div",{className:c.content,children:[a.jsxs("div",{className:c["card__text-container"],children:[a.jsxs("div",{className:c.header,children:[a.jsx(m,{variant:"subtitle1",className:c["header__user-name"],children:i}),O&&a.jsx(m,{variant:"body2",className:c.verified,component:"span",children:"✔️"}),s&&a.jsxs(m,{variant:"body2",className:c["header__user-handle"],children:["@",s]})]}),a.jsx(m,{variant:"body2",className:c["user-text-card__message-text"],children:r})]}),n&&a.jsx("div",{className:c.timestamp,children:typeof n=="string"?n:n.toLocaleString()})]})]})]})}o.__docgenInfo={description:"",methods:[],displayName:"UserTextCard",props:{avatar:{required:!0,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},userName:{required:!0,tsType:{name:"string"},description:""},userHandle:{required:!1,tsType:{name:"string"},description:""},content:{required:!0,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},timestamp:{required:!1,tsType:{name:"union",raw:"string | Date",elements:[{name:"string"},{name:"Date"}]},description:""},actions:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ label: string; onClick: () => void }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}}]}}],raw:"{ label: string; onClick: () => void }[]"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'compact' | 'expanded'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'compact'"},{name:"literal",value:"'expanded'"}]},description:""},colorVariant:{required:!1,tsType:{name:"union",raw:"'default' | 'info' | 'success' | 'warning' | 'error'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'info'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"}]},description:""},isVerified:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},isChecked:{required:!0,tsType:{name:"boolean"},description:""},onCheckChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""}}};const Ne={component:o,title:"ui/components/molecules/user-text-card",argTypes:{onClick:{action:"click"},onCheckChange:{action:"checkboxChanged"}}},u={render:e=>{function t(){const[i,s]=d.useState(!1);return a.jsx(o,{avatar:e.avatar,userName:e.userName,userHandle:e.userHandle,content:e.content,timestamp:e.timestamp,isVerified:e.isVerified,actions:e.actions,isChecked:e.isChecked||i,onClick:e.onClick,onCheckChange:n=>{var r;s(n),(r=e.onCheckChange)==null||r.call(e,n)}})}return a.jsx(t,{})},args:{avatar:"https://i.pravatar.cc/40?img=2",userName:"Christeen Lee",userHandle:"christeen",content:"UI is the canvas, UX the brushstroke; together, they craft an immersive journey where every pixel tells",timestamp:"2 mins ago",isChecked:!1,isVerified:!0,onClick:()=>{},variant:"default"}},l={render:e=>{function t(){const[i,s]=d.useState(!1);return a.jsx(o,{avatar:e.avatar,userName:e.userName,userHandle:e.userHandle,content:e.content,timestamp:e.timestamp,isVerified:e.isVerified,actions:e.actions,isChecked:i,onClick:e.onClick,variant:e.variant,colorVariant:e.colorVariant,onCheckChange:n=>{var r;s(n),(r=e.onCheckChange)==null||r.call(e,n)}})}return a.jsx(t,{})},args:{userName:"Christeen Lee",userHandle:"christeen",content:"UI is the canvas, UX the brushstroke...",timestamp:"2 mins ago",isVerified:!0,onClick:()=>{},variant:"compact"}},p={render:e=>{function t(){const[i,s]=d.useState(!1);return a.jsx(o,{avatar:e.avatar,userName:e.userName,userHandle:e.userHandle,content:e.content,timestamp:e.timestamp,isVerified:e.isVerified,actions:e.actions,isChecked:i,onClick:e.onClick,variant:e.variant,colorVariant:e.colorVariant,onCheckChange:n=>{var r;s(n),(r=e.onCheckChange)==null||r.call(e,n)}})}return a.jsx(t,{})},args:{avatar:"https://i.pravatar.cc/40?img=2",userName:"Christeen Lee",userHandle:"christeen",content:"UI is the canvas, UX the brushstroke...",timestamp:"2 mins ago",isVerified:!0,onClick:()=>{},variant:"expanded"}},h={render:e=>{function t(){const[i,s]=d.useState(!1);return a.jsx(o,{avatar:e.avatar,userName:e.userName,userHandle:e.userHandle,content:e.content,timestamp:e.timestamp,isVerified:e.isVerified,actions:e.actions,isChecked:i,onClick:e.onClick,variant:e.variant,colorVariant:e.colorVariant,onCheckChange:n=>{var r;s(n),(r=e.onCheckChange)==null||r.call(e,n)}})}return a.jsx(t,{})},args:{avatar:"https://i.pravatar.cc/40?img=2",userName:"Christeen Lee",userHandle:"christeen",content:"UI is the canvas, UX the brushstroke...",timestamp:"2 mins ago",isVerified:!0,onClick:()=>{},colorVariant:"info",variant:"default"}},C={render:e=>{function t(){const[i,s]=d.useState(!1);return a.jsx(o,{avatar:e.avatar,userName:e.userName,userHandle:e.userHandle,content:e.content,timestamp:e.timestamp,isVerified:e.isVerified,actions:e.actions,isChecked:i,onClick:e.onClick,variant:e.variant,colorVariant:e.colorVariant,onCheckChange:n=>{var r;s(n),(r=e.onCheckChange)==null||r.call(e,n)}})}return a.jsx(t,{})},args:{avatar:"https://i.pravatar.cc/40?img=2",userName:"Christeen Lee",userHandle:"christeen",content:"UI is the canvas, UX the brushstroke...",timestamp:"2 mins ago",isVerified:!0,onClick:()=>{},colorVariant:"warning",variant:"default"}},k={render:e=>{function t(){const[i,s]=d.useState(!1);return a.jsx(o,{avatar:e.avatar,userName:e.userName,userHandle:e.userHandle,content:e.content,timestamp:e.timestamp,isVerified:e.isVerified,actions:e.actions,isChecked:i,onClick:e.onClick,variant:e.variant,colorVariant:e.colorVariant,onCheckChange:n=>{var r;s(n),(r=e.onCheckChange)==null||r.call(e,n)}})}return a.jsx(t,{})},args:{avatar:"https://i.pravatar.cc/40?img=2",userName:"Christeen Lee",userHandle:"christeen",content:"UI is the canvas, UX the brushstroke...",timestamp:"2 mins ago",isVerified:!0,onClick:()=>{},colorVariant:"success",variant:"default"}},v={render:e=>{function t(){const[i,s]=d.useState(!1);return a.jsx(o,{avatar:e.avatar,userName:e.userName,userHandle:e.userHandle,content:e.content,timestamp:e.timestamp,isVerified:e.isVerified,actions:e.actions,isChecked:i,onClick:e.onClick,variant:e.variant,colorVariant:e.colorVariant,onCheckChange:n=>{var r;s(n),(r=e.onCheckChange)==null||r.call(e,n)}})}return a.jsx(t,{})},args:{avatar:"https://i.pravatar.cc/40?img=2",userName:"Christeen Lee",userHandle:"christeen",content:"UI is the canvas, UX the brushstroke...",timestamp:"2 mins ago",isVerified:!0,onClick:()=>{},colorVariant:"error",variant:"default"}};var V,_,x;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: args => {
    function WrapperComponent() {
      const [checked, setChecked] = useState(false);
      return <UserTextCard avatar={args.avatar} userName={args.userName} userHandle={args.userHandle} content={args.content} timestamp={args.timestamp} isVerified={args.isVerified} actions={args.actions} isChecked={args.isChecked || checked} onClick={args.onClick} onCheckChange={newVal => {
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
    isChecked: false,
    isVerified: true,
    onClick: () => {},
    variant: 'default'
  }
}`,...(x=(_=u.parameters)==null?void 0:_.docs)==null?void 0:x.source}}};var N,H,y;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: args => {
    function WrapperComponent() {
      const [checked, setChecked] = useState(false);
      return <UserTextCard avatar={args.avatar} userName={args.userName} userHandle={args.userHandle} content={args.content} timestamp={args.timestamp} isVerified={args.isVerified} actions={args.actions} isChecked={checked} onClick={args.onClick} variant={args.variant} colorVariant={args.colorVariant} onCheckChange={newVal => {
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
}`,...(y=(H=l.parameters)==null?void 0:H.docs)==null?void 0:y.source}}};var U,w,j;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: args => {
    function WrapperComponent() {
      const [checked, setChecked] = useState(false);
      return <UserTextCard avatar={args.avatar} userName={args.userName} userHandle={args.userHandle} content={args.content} timestamp={args.timestamp} isVerified={args.isVerified} actions={args.actions} isChecked={checked} onClick={args.onClick} variant={args.variant} colorVariant={args.colorVariant} onCheckChange={newVal => {
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
}`,...(j=(w=p.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var b,T,S;h.parameters={...h.parameters,docs:{...(b=h.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => {
    function WrapperComponent() {
      const [checked, setChecked] = useState(false);
      return <UserTextCard avatar={args.avatar} userName={args.userName} userHandle={args.userHandle} content={args.content} timestamp={args.timestamp} isVerified={args.isVerified} actions={args.actions} isChecked={checked} onClick={args.onClick} variant={args.variant} colorVariant={args.colorVariant} onCheckChange={newVal => {
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
    colorVariant: 'info',
    variant: 'default'
  }
}`,...(S=(T=h.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var W,I,q;C.parameters={...C.parameters,docs:{...(W=C.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: args => {
    function WrapperComponent() {
      const [checked, setChecked] = useState(false);
      return <UserTextCard avatar={args.avatar} userName={args.userName} userHandle={args.userHandle} content={args.content} timestamp={args.timestamp} isVerified={args.isVerified} actions={args.actions} isChecked={checked} onClick={args.onClick} variant={args.variant} colorVariant={args.colorVariant} onCheckChange={newVal => {
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
    colorVariant: 'warning',
    variant: 'default'
  }
}`,...(q=(I=C.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};var L,X,E;k.parameters={...k.parameters,docs:{...(L=k.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => {
    function WrapperComponent() {
      const [checked, setChecked] = useState(false);
      return <UserTextCard avatar={args.avatar} userName={args.userName} userHandle={args.userHandle} content={args.content} timestamp={args.timestamp} isVerified={args.isVerified} actions={args.actions} isChecked={checked} onClick={args.onClick} variant={args.variant} colorVariant={args.colorVariant} onCheckChange={newVal => {
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
    colorVariant: 'success',
    variant: 'default'
  }
}`,...(E=(X=k.parameters)==null?void 0:X.docs)==null?void 0:E.source}}};var R,A,D;v.parameters={...v.parameters,docs:{...(R=v.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: args => {
    function WrapperComponent() {
      const [checked, setChecked] = useState(false);
      return <UserTextCard avatar={args.avatar} userName={args.userName} userHandle={args.userHandle} content={args.content} timestamp={args.timestamp} isVerified={args.isVerified} actions={args.actions} isChecked={checked} onClick={args.onClick} variant={args.variant} colorVariant={args.colorVariant} onCheckChange={newVal => {
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
    colorVariant: 'error',
    variant: 'default'
  }
}`,...(D=(A=v.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};const He=["Normal","Compact","Expanded","Info","Warning","Success","Error"];export{l as Compact,v as Error,p as Expanded,h as Info,u as Normal,k as Success,C as Warning,He as __namedExportsOrder,Ne as default};
