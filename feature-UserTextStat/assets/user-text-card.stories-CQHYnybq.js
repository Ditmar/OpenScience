import{j as a}from"./jsx-runtime-BlDnFLNC.js";import{r as d}from"./index-Cu9bd8lq.js";import{C as K}from"./check-DPKWULmV.js";import{A as M}from"./Avatar-D1-qHUyW.js";import{T as m}from"./Typography-CMaDmQ-6.js";import"./check-BE8zjXxp.js";import"./generateUtilityClasses-CPRdC64H.js";import"./memoTheme-CoiMSXCT.js";import"./styled-BpwaniR7.js";import"./defaultTheme-CBhoIubE.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-B34fLoo2.js";import"./extends-CF3RwP-h.js";import"./createSvgIcon-WBtNAgIH.js";import"./DefaultPropsProvider-15asn56a.js";import"./composeClasses-CAXbtk_0.js";import"./useSlot-BDqnu5Qn.js";import"./useForkRef-CXZ2Yisc.js";import"./index-CtMj7sh_.js";import"./extendSxProp-B0E1S3My.js";import"./emotion-react.browser.esm-66DkCD4v.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";const P="_card_wb9kz_1",Q="_avatar_wb9kz_25",Y="_checkbox_wb9kz_32",Z="_content_wb9kz_39",ee="_header_wb9kz_45",ae="_verified_wb9kz_57",ne="_timestamp_wb9kz_60",re="_compact_wb9kz_66",te="_expanded_wb9kz_86",se="_info_wb9kz_115",ie="_error_wb9kz_120",ce="_success_wb9kz_125",oe="_warning_wb9kz_130",c={card:P,"card__content-wrapper":"_card__content-wrapper_wb9kz_14","card__text-container":"_card__text-container_wb9kz_20",avatar:Q,checkbox:Y,content:Z,header:ee,"header__user-name":"_header__user-name_wb9kz_52",verified:ae,timestamp:ne,compact:re,"header__user-handle":"_header__user-handle_wb9kz_74",default:"_default_wb9kz_83",expanded:te,"user-text-card__message-text":"_user-text-card__message-text_wb9kz_103",info:se,error:ie,success:ce,warning:oe};function o(e){const{avatar:s,userName:i,userHandle:t,timestamp:n,content:r,variant:f="default",colorVariant:D="default",isVerified:B=!1,onClick:O,className:$,isChecked:F,onCheckChange:g}=e,G=[c.card,c[f],c[D],$].filter(Boolean).join(" ");return a.jsxs("div",{className:G,"data-testid":`user-card-${f}`,children:[a.jsx(K,{checked:F,onChange:J=>{g==null||g(J),O()},className:c.checkbox,variant:"default",shape:"square"}),a.jsxs("div",{className:c["card__content-wrapper"],children:[f!=="compact"&&a.jsx(M,{src:s,alt:"avatar",className:c.avatar,variant:"rounded"}),a.jsxs("div",{className:c.content,children:[a.jsxs("div",{className:c["card__text-container"],children:[a.jsxs("div",{className:c.header,children:[a.jsx(m,{variant:"subtitle1",className:c["header__user-name"],children:i}),B&&a.jsx(m,{variant:"body2",className:c.verified,component:"span",children:"✔️"}),t&&a.jsxs(m,{variant:"body2",className:c["header__user-handle"],children:["@",t]})]}),a.jsx(m,{variant:"body2",className:c["user-text-card__message-text"],children:r})]}),n&&a.jsx("div",{className:c.timestamp,children:typeof n=="string"?n:n.toLocaleString()})]})]})]})}o.__docgenInfo={description:"",methods:[],displayName:"UserTextCard",props:{avatar:{required:!0,tsType:{name:"string"},description:""},userName:{required:!0,tsType:{name:"string"},description:""},userHandle:{required:!1,tsType:{name:"string"},description:""},content:{required:!0,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},timestamp:{required:!1,tsType:{name:"union",raw:"string | Date",elements:[{name:"string"},{name:"Date"}]},description:""},actions:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ label: string; onClick: () => void }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}}]}}],raw:"{ label: string; onClick: () => void }[]"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'compact' | 'expanded'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'compact'"},{name:"literal",value:"'expanded'"}]},description:""},colorVariant:{required:!0,tsType:{name:"union",raw:"'default' | 'info' | 'success' | 'warning' | 'error'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'info'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"}]},description:""},isVerified:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},isChecked:{required:!0,tsType:{name:"boolean"},description:""},onCheckChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""}}};const Te={component:o,title:"ui/components/molecules/user-text-card",argTypes:{onClick:{action:"click"},onCheckChange:{action:"checkboxChanged"}}},u={render:e=>{function s(){const[i,t]=d.useState(!1);return a.jsx(o,{avatar:e.avatar,userName:e.userName,userHandle:e.userHandle,content:e.content,timestamp:e.timestamp,isVerified:e.isVerified,actions:e.actions,isChecked:e.isChecked||i,onClick:e.onClick,onCheckChange:n=>{var r;t(n),(r=e.onCheckChange)==null||r.call(e,n)},colorVariant:"default"})}return a.jsx(s,{})},args:{avatar:"https://i.pravatar.cc/40?img=2",userName:"Christeen Lee",userHandle:"christeen",content:"UI is the canvas, UX the brushstroke; together, they craft an immersive journey where every pixel tells",timestamp:"2 mins ago",isChecked:!1,isVerified:!0,onClick:()=>{},variant:"default"}},l={render:e=>{function s(){const[i,t]=d.useState(!1);return a.jsx(o,{avatar:e.avatar,userName:e.userName,userHandle:e.userHandle,content:e.content,timestamp:e.timestamp,isVerified:e.isVerified,actions:e.actions,isChecked:i,onClick:e.onClick,variant:e.variant,colorVariant:e.colorVariant,onCheckChange:n=>{var r;t(n),(r=e.onCheckChange)==null||r.call(e,n)}})}return a.jsx(s,{})},args:{userName:"Christeen Lee",userHandle:"christeen",content:"UI is the canvas, UX the brushstroke...",timestamp:"2 mins ago",isVerified:!0,onClick:()=>{},variant:"compact"}},p={render:e=>{function s(){const[i,t]=d.useState(!1);return a.jsx(o,{avatar:e.avatar,userName:e.userName,userHandle:e.userHandle,content:e.content,timestamp:e.timestamp,isVerified:e.isVerified,actions:e.actions,isChecked:i,onClick:e.onClick,variant:e.variant,colorVariant:e.colorVariant,onCheckChange:n=>{var r;t(n),(r=e.onCheckChange)==null||r.call(e,n)}})}return a.jsx(s,{})},args:{avatar:"https://i.pravatar.cc/40?img=2",userName:"Christeen Lee",userHandle:"christeen",content:"UI is the canvas, UX the brushstroke...",timestamp:"2 mins ago",isVerified:!0,onClick:()=>{},variant:"expanded"}},h={render:e=>{function s(){const[i,t]=d.useState(!1);return a.jsx(o,{avatar:e.avatar,userName:e.userName,userHandle:e.userHandle,content:e.content,timestamp:e.timestamp,isVerified:e.isVerified,actions:e.actions,isChecked:i,onClick:e.onClick,variant:e.variant,colorVariant:e.colorVariant,onCheckChange:n=>{var r;t(n),(r=e.onCheckChange)==null||r.call(e,n)}})}return a.jsx(s,{})},args:{avatar:"https://i.pravatar.cc/40?img=2",userName:"Christeen Lee",userHandle:"christeen",content:"UI is the canvas, UX the brushstroke...",timestamp:"2 mins ago",isVerified:!0,onClick:()=>{},colorVariant:"info",variant:"default"}},C={render:e=>{function s(){const[i,t]=d.useState(!1);return a.jsx(o,{avatar:e.avatar,userName:e.userName,userHandle:e.userHandle,content:e.content,timestamp:e.timestamp,isVerified:e.isVerified,actions:e.actions,isChecked:i,onClick:e.onClick,variant:e.variant,colorVariant:e.colorVariant,onCheckChange:n=>{var r;t(n),(r=e.onCheckChange)==null||r.call(e,n)}})}return a.jsx(s,{})},args:{avatar:"https://i.pravatar.cc/40?img=2",userName:"Christeen Lee",userHandle:"christeen",content:"UI is the canvas, UX the brushstroke...",timestamp:"2 mins ago",isVerified:!0,onClick:()=>{},colorVariant:"warning",variant:"default"}},k={render:e=>{function s(){const[i,t]=d.useState(!1);return a.jsx(o,{avatar:e.avatar,userName:e.userName,userHandle:e.userHandle,content:e.content,timestamp:e.timestamp,isVerified:e.isVerified,actions:e.actions,isChecked:i,onClick:e.onClick,variant:e.variant,colorVariant:e.colorVariant,onCheckChange:n=>{var r;t(n),(r=e.onCheckChange)==null||r.call(e,n)}})}return a.jsx(s,{})},args:{avatar:"https://i.pravatar.cc/40?img=2",userName:"Christeen Lee",userHandle:"christeen",content:"UI is the canvas, UX the brushstroke...",timestamp:"2 mins ago",isVerified:!0,onClick:()=>{},colorVariant:"success",variant:"default"}},v={render:e=>{function s(){const[i,t]=d.useState(!1);return a.jsx(o,{avatar:e.avatar,userName:e.userName,userHandle:e.userHandle,content:e.content,timestamp:e.timestamp,isVerified:e.isVerified,actions:e.actions,isChecked:i,onClick:e.onClick,variant:e.variant,colorVariant:e.colorVariant,onCheckChange:n=>{var r;t(n),(r=e.onCheckChange)==null||r.call(e,n)}})}return a.jsx(s,{})},args:{avatar:"https://i.pravatar.cc/40?img=2",userName:"Christeen Lee",userHandle:"christeen",content:"UI is the canvas, UX the brushstroke...",timestamp:"2 mins ago",isVerified:!0,onClick:()=>{},colorVariant:"error",variant:"default"}};var V,_,x;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: args => {
    function WrapperComponent() {
      const [checked, setChecked] = useState(false);
      return <UserTextCard avatar={args.avatar} userName={args.userName} userHandle={args.userHandle} content={args.content} timestamp={args.timestamp} isVerified={args.isVerified} actions={args.actions} isChecked={args.isChecked || checked} onClick={args.onClick} onCheckChange={newVal => {
        setChecked(newVal);
        args.onCheckChange?.(newVal);
      }} colorVariant="default" />;
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
}`,...(x=(_=u.parameters)==null?void 0:_.docs)==null?void 0:x.source}}};var N,w,b;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(b=(w=l.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var H,U,y;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(y=(U=p.parameters)==null?void 0:U.docs)==null?void 0:y.source}}};var j,T,S;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(S=(T=h.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var W,z,I;C.parameters={...C.parameters,docs:{...(W=C.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(I=(z=C.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};var q,L,X;k.parameters={...k.parameters,docs:{...(q=k.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(X=(L=k.parameters)==null?void 0:L.docs)==null?void 0:X.source}}};var E,A,R;v.parameters={...v.parameters,docs:{...(E=v.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(R=(A=v.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};const Se=["Normal","Compact","Expanded","Info","Warning","Success","Error"];export{l as Compact,v as Error,p as Expanded,h as Info,u as Normal,k as Success,C as Warning,Se as __namedExportsOrder,Te as default};
