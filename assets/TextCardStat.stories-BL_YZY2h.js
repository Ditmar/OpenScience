import{j as e}from"./jsx-runtime-BlDnFLNC.js";import{r as X}from"./index-Cu9bd8lq.js";import{T as A}from"./Typography-EroZ-ss1.js";import{C as Y}from"./Checkbox-DMRzl1LW.js";import{B as Z}from"./Badge-CeHY-0nG.js";import{C as $,a as ee}from"./CardContent-B6Lf-SMI.js";import{B as ae}from"./Box-D3gn0BGf.js";import"./Typography-CDIF6Mzu.js";import"./styled-BxzxpRFD.js";import"./defaultTheme-JPJ_yUS4.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-B34fLoo2.js";import"./extends-CF3RwP-h.js";import"./index-wv3Da8iN.js";import"./extendSxProp-kI-X95xi.js";import"./emotion-react.browser.esm-CXfcuTw5.js";import"./memoTheme-CvxkUA_n.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./DefaultPropsProvider-15asn56a.js";import"./createSvgIcon-CPwZcPzn.js";import"./Checkbox-Bb1q4e3b.js";import"./useFormControl-kTKC_WZz.js";import"./useSlot-Sp0AUbRJ.js";import"./useForkRef-CXZ2Yisc.js";import"./ButtonBase-nnpsksTd.js";import"./useTimeout-mVMEPTzm.js";import"./useEnhancedEffect-BAizwhs3.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-DR8r8Ogv.js";import"./Avatar-CRc3lm66.js";import"./Avatar-CTHR9j3t.js";import"./Paper-CwPsYpRH.js";const t={"text-card":"_text-card_zl18z_1","text-card--disabled":"_text-card--disabled_zl18z_11","text-card__header":"_text-card__header_zl18z_15","text-card__content":"_text-card__content_zl18z_20","text-card__title":"_text-card__title_zl18z_23","text-card__description":"_text-card__description_zl18z_26"};function T({label:z,badgeColor:p,badgeNumber:u=0,badgeAvatarUrl:g,badgeAvatarAlt:v="Avatar",title:b,description:f,size:_="medium",onClick:a,elevation:x=1,isDisabled:r=!1,className:C,checked:h=!1,onCheckedChange:y=()=>{}}){const k=[t["text-card"],r?t["text-card--disabled"]:"",C].filter(Boolean).join(" ").trim();return e.jsxs($,{className:k,onClick:r?void 0:a,elevation:x,role:!r&&a?"button":void 0,tabIndex:!r&&a?0:-1,onKeyDown:!r&&a?s=>{(s.key==="Enter"||s.key===" ")&&(s.preventDefault(),a())}:void 0,children:[e.jsxs(ae,{className:t["text-card__header"],children:[e.jsx(Y,{checked:h,onChange:y,"aria-label":"Select card"}),e.jsx(Z,{avatarUrl:g,avatarAlt:v,text:z,number:u,color:p,size:_})]}),e.jsxs(ee,{className:t["text-card__content"],children:[e.jsx(A,{variant:"h6",className:t["text-card__title"],children:b}),e.jsx(A,{variant:"body2",className:t["text-card__description"],children:f})]})]})}T.__docgenInfo={description:"",methods:[],displayName:"TextCardStat",props:{label:{required:!0,tsType:{name:"string"},description:""},badgeColor:{required:!1,tsType:{name:"string"},description:""},badgeNumber:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},badgeAvatarUrl:{required:!1,tsType:{name:"string"},description:""},badgeAvatarAlt:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Avatar'",computed:!1}},title:{required:!0,tsType:{name:"string"},description:""},description:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'success' | 'warning' | 'info'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'info'"}]},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},elevation:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},isDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},checked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onCheckedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLInputElement"}],raw:"ChangeEvent<HTMLInputElement>"},name:"event"}],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}}}};const Ue={title:"Organisms/TextCardStat",component:T,tags:["autodocs"],args:{label:"Users",title:"User Statistics",description:"Detailed stats",badgeColor:"#1976d2",badgeNumber:42,size:"medium",isDisabled:!1,elevation:1}},n={},i={args:{badgeAvatarUrl:"https://example.com/avatar.png"}},o={args:{size:"small"}},l={args:{size:"large"}},d={args:{isDisabled:!0}},c={args:{onClick:()=>{alert("Card clicked")}}},m={render:function(p){const[u,g]=X.useState(!1),{label:v,badgeColor:b,badgeNumber:f,badgeAvatarUrl:_,badgeAvatarAlt:a,title:x,description:r,variant:C,size:h,onClick:y,elevation:k,isDisabled:s,className:P}=p;return e.jsx(T,{label:v,badgeColor:b,badgeNumber:f,badgeAvatarUrl:_,badgeAvatarAlt:a,title:x,description:r,variant:C,size:h,onClick:y,elevation:k,isDisabled:s,className:P,checked:u,onCheckedChange:Q=>{g(Q.target.checked)}})}};var N,S,q;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:"{}",...(q=(S=n.parameters)==null?void 0:S.docs)==null?void 0:q.source}}};var j,D,E;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    badgeAvatarUrl: 'https://example.com/avatar.png'
  }
}`,...(E=(D=i.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var U,I,w;o.parameters={...o.parameters,docs:{...(U=o.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    size: 'small'
  }
}`,...(w=(I=o.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};var V,B,L;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...(L=(B=l.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var H,M,R;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(R=(M=d.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var O,W,K;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    onClick: () => {
      alert('Card clicked');
    }
  }
}`,...(K=(W=c.parameters)==null?void 0:W.docs)==null?void 0:K.source}}};var F,G,J;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: function InteractiveCheckboxRender(args) {
    const [checked, setChecked] = useState(false);
    const {
      label,
      badgeColor,
      badgeNumber,
      badgeAvatarUrl,
      badgeAvatarAlt,
      title,
      description,
      variant,
      size,
      onClick,
      elevation,
      isDisabled,
      className
    } = args;
    return <TextCardStat label={label} badgeColor={badgeColor} badgeNumber={badgeNumber} badgeAvatarUrl={badgeAvatarUrl} badgeAvatarAlt={badgeAvatarAlt} title={title} description={description} variant={variant} size={size} onClick={onClick} elevation={elevation} isDisabled={isDisabled} className={className} checked={checked} onCheckedChange={e => {
      setChecked(e.target.checked);
    }} />;
  }
}`,...(J=(G=m.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};const Ie=["Default","WithAvatar","Small","Large","Disabled","Clickable","InteractiveCheckbox"];export{c as Clickable,n as Default,d as Disabled,m as InteractiveCheckbox,l as Large,o as Small,i as WithAvatar,Ie as __namedExportsOrder,Ue as default};
