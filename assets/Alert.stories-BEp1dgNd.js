import{j as o}from"./jsx-runtime-BlDnFLNC.js";import{T as zs}from"./ThemeProvider-CuLKC3iH.js";import{M as $s}from"./ThemeSwitcher-BYdbonWv.js";import{r as ps}from"./index-Cu9bd8lq.js";import{a as us,g as gs,s as m,c as ms,b as vs,m as L}from"./memoTheme-DFZ5Ih9v.js";import{u as g}from"./useSlot-BAlk_gGd.js";import{c as S}from"./createSimplePaletteValueFilter-bm0fmN_7.js";import{c as b}from"./createSvgIcon-DmsryOUZ.js";import{u as fs,c as n,a as F,n as W,o as D}from"./DefaultPropsProvider-BwUNytnB.js";import{u as ws}from"./listItemTextClasses-BG9ApYip.js";import{B as Bs}from"./useFormControl-BUu2lwaQ.js";import{C as Rs}from"./CircularProgress-DFD7u91X.js";import{P as Ps}from"./Paper-DBuoFzES.js";import"./index-BaAsS3ug.js";import"./useTheme-TkhsyVDe.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-B34fLoo2.js";import"./useEnhancedEffect-BAizwhs3.js";import"./index-Da2ble01.js";import"./Select-41flgIMq.js";import"./assertThisInitialized-C1KLUksq.js";import"./index-BWPb3MHu.js";import"./extends-CF3RwP-h.js";function ks(s){return gs("MuiAlert",s)}const N=us("MuiAlert",["root","action","icon","message","filled","colorSuccess","colorInfo","colorWarning","colorError","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]);function Ls(s){return gs("MuiIconButton",s)}const U=us("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge","loading","loadingIndicator","loadingWrapper"]),Os=s=>{const{classes:e,disabled:t,color:r,edge:a,size:i,loading:v}=s,p={root:["root",v&&"loading",t&&"disabled",r!=="default"&&`color${n(r)}`,a&&`edge${n(a)}`,`size${n(i)}`],loadingIndicator:["loadingIndicator"],loadingWrapper:["loadingWrapper"]};return vs(p,Ls,e)},Es=m(Bs,{name:"MuiIconButton",slot:"Root",overridesResolver:(s,e)=>{const{ownerState:t}=s;return[e.root,t.loading&&e.loading,t.color!=="default"&&e[`color${n(t.color)}`],t.edge&&e[`edge${n(t.edge)}`],e[`size${n(t.size)}`]]}})(L(({theme:s})=>({textAlign:"center",flex:"0 0 auto",fontSize:s.typography.pxToRem(24),padding:8,borderRadius:"50%",color:(s.vars||s).palette.action.active,transition:s.transitions.create("background-color",{duration:s.transitions.duration.shortest}),variants:[{props:e=>!e.disableRipple,style:{"--IconButton-hoverBg":s.vars?`rgba(${s.vars.palette.action.activeChannel} / ${s.vars.palette.action.hoverOpacity})`:F(s.palette.action.active,s.palette.action.hoverOpacity),"&:hover":{backgroundColor:"var(--IconButton-hoverBg)","@media (hover: none)":{backgroundColor:"transparent"}}}},{props:{edge:"start"},style:{marginLeft:-12}},{props:{edge:"start",size:"small"},style:{marginLeft:-3}},{props:{edge:"end"},style:{marginRight:-12}},{props:{edge:"end",size:"small"},style:{marginRight:-3}}]})),L(({theme:s})=>({variants:[{props:{color:"inherit"},style:{color:"inherit"}},...Object.entries(s.palette).filter(S()).map(([e])=>({props:{color:e},style:{color:(s.vars||s).palette[e].main}})),...Object.entries(s.palette).filter(S()).map(([e])=>({props:{color:e},style:{"--IconButton-hoverBg":s.vars?`rgba(${(s.vars||s).palette[e].mainChannel} / ${s.vars.palette.action.hoverOpacity})`:F((s.vars||s).palette[e].main,s.palette.action.hoverOpacity)}})),{props:{size:"small"},style:{padding:5,fontSize:s.typography.pxToRem(18)}},{props:{size:"large"},style:{padding:12,fontSize:s.typography.pxToRem(28)}}],[`&.${U.disabled}`]:{backgroundColor:"transparent",color:(s.vars||s).palette.action.disabled},[`&.${U.loading}`]:{color:"transparent"}}))),Fs=m("span",{name:"MuiIconButton",slot:"LoadingIndicator"})(({theme:s})=>({display:"none",position:"absolute",visibility:"visible",top:"50%",left:"50%",transform:"translate(-50%, -50%)",color:(s.vars||s).palette.action.disabled,variants:[{props:{loading:!0},style:{display:"flex"}}]})),Ws=ps.forwardRef(function(e,t){const r=fs({props:e,name:"MuiIconButton"}),{edge:a=!1,children:i,className:v,color:p="default",disabled:f=!1,disableFocusRipple:y=!1,size:P="medium",id:h,loading:l=null,loadingIndicator:I,...k}=r,c=ws(h),A=I??o.jsx(Rs,{"aria-labelledby":c,color:"inherit",size:16}),x={...r,edge:a,color:p,disabled:f,disableFocusRipple:y,loading:l,loadingIndicator:A,size:P},C=Os(x);return o.jsxs(Es,{id:l?c:h,className:ms(C.root,v),centerRipple:!0,focusRipple:!y,disabled:f||l,ref:t,...k,ownerState:x,children:[typeof l=="boolean"&&o.jsx("span",{className:C.loadingWrapper,style:{display:"contents"},children:o.jsx(Fs,{className:C.loadingIndicator,ownerState:x,children:l&&A})}),i]})}),Ds=b(o.jsx("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"})),Ns=b(o.jsx("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"})),Us=b(o.jsx("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"})),Hs=b(o.jsx("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"})),Vs=b(o.jsx("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})),Zs=s=>{const{variant:e,color:t,severity:r,classes:a}=s,i={root:["root",`color${n(t||r)}`,`${e}${n(t||r)}`,`${e}`],icon:["icon"],message:["message"],action:["action"]};return vs(i,ks,a)},_s=m(Ps,{name:"MuiAlert",slot:"Root",overridesResolver:(s,e)=>{const{ownerState:t}=s;return[e.root,e[t.variant],e[`${t.variant}${n(t.color||t.severity)}`]]}})(L(({theme:s})=>{const e=s.palette.mode==="light"?W:D,t=s.palette.mode==="light"?D:W;return{...s.typography.body2,backgroundColor:"transparent",display:"flex",padding:"6px 16px",variants:[...Object.entries(s.palette).filter(S(["light"])).map(([r])=>({props:{colorSeverity:r,variant:"standard"},style:{color:s.vars?s.vars.palette.Alert[`${r}Color`]:e(s.palette[r].light,.6),backgroundColor:s.vars?s.vars.palette.Alert[`${r}StandardBg`]:t(s.palette[r].light,.9),[`& .${N.icon}`]:s.vars?{color:s.vars.palette.Alert[`${r}IconColor`]}:{color:s.palette[r].main}}})),...Object.entries(s.palette).filter(S(["light"])).map(([r])=>({props:{colorSeverity:r,variant:"outlined"},style:{color:s.vars?s.vars.palette.Alert[`${r}Color`]:e(s.palette[r].light,.6),border:`1px solid ${(s.vars||s).palette[r].light}`,[`& .${N.icon}`]:s.vars?{color:s.vars.palette.Alert[`${r}IconColor`]}:{color:s.palette[r].main}}})),...Object.entries(s.palette).filter(S(["dark"])).map(([r])=>({props:{colorSeverity:r,variant:"filled"},style:{fontWeight:s.typography.fontWeightMedium,...s.vars?{color:s.vars.palette.Alert[`${r}FilledColor`],backgroundColor:s.vars.palette.Alert[`${r}FilledBg`]}:{backgroundColor:s.palette.mode==="dark"?s.palette[r].dark:s.palette[r].main,color:s.palette.getContrastText(s.palette[r].main)}}}))]}})),qs=m("div",{name:"MuiAlert",slot:"Icon"})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),Gs=m("div",{name:"MuiAlert",slot:"Message"})({padding:"8px 0",minWidth:0,overflow:"auto"}),Js=m("div",{name:"MuiAlert",slot:"Action"})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),H={success:o.jsx(Ds,{fontSize:"inherit"}),warning:o.jsx(Ns,{fontSize:"inherit"}),error:o.jsx(Us,{fontSize:"inherit"}),info:o.jsx(Hs,{fontSize:"inherit"})},Ks=ps.forwardRef(function(e,t){const r=fs({props:e,name:"MuiAlert"}),{action:a,children:i,className:v,closeText:p="Close",color:f,components:y={},componentsProps:P={},icon:h,iconMapping:l=H,onClose:I,role:k="alert",severity:c="success",slotProps:A={},slots:x={},variant:C="standard",...ys}=r,d={...r,color:f,severity:c,variant:C,colorSeverity:f||c},j=Zs(d),u={slots:{closeButton:y.CloseButton,closeIcon:y.CloseIcon,...x},slotProps:{...P,...A}},[hs,xs]=g("root",{ref:t,shouldForwardComponentProp:!0,className:ms(j.root,v),elementType:_s,externalForwardedProps:{...u,...ys},ownerState:d,additionalProps:{role:k,elevation:0}}),[Cs,Ss]=g("icon",{className:j.icon,elementType:qs,externalForwardedProps:u,ownerState:d}),[bs,Is]=g("message",{className:j.message,elementType:Gs,externalForwardedProps:u,ownerState:d}),[O,E]=g("action",{className:j.action,elementType:Js,externalForwardedProps:u,ownerState:d}),[As,js]=g("closeButton",{elementType:Ws,externalForwardedProps:u,ownerState:d}),[Ms,Ts]=g("closeIcon",{elementType:Vs,externalForwardedProps:u,ownerState:d});return o.jsxs(hs,{...xs,children:[h!==!1?o.jsx(Cs,{...Ss,children:h||l[c]||H[c]}):null,o.jsx(bs,{...Is,children:i}),a!=null?o.jsx(O,{...E,children:a}):null,a==null&&I?o.jsx(O,{...E,children:o.jsx(As,{size:"small","aria-label":p,title:p,color:"inherit",onClick:I,...js,children:o.jsx(Ms,{fontSize:"small",...Ts})})}):null]})}),xr={title:"MUI/Alert",component:Ks,argTypes:{variant:{control:{type:"select"},options:["filled","outlined","standard"]},severity:{control:{type:"select"},options:["success","info","warning","error"]}},parameters:{layout:"centered"},decorators:[s=>o.jsxs(zs,{children:[o.jsx($s,{}),o.jsx("div",{style:{padding:"20px"},children:o.jsx(s,{})})]})]},M={args:{variant:"filled",severity:"success",children:"This is a success alert!"}},T={args:{variant:"outlined",severity:"info",children:"This is an info alert!"}},z={args:{variant:"standard",severity:"warning",children:"This is a warning alert!"}},$={args:{variant:"filled",severity:"error",children:"This is an error alert!"}},w={args:{variant:"filled",severity:"success",children:"This is a success alert with a custom icon!",iconMapping:{success:o.jsx("span",{children:"🌟"}),info:o.jsx("span",{children:"ℹ️"}),warning:o.jsx("span",{children:"⚠️"}),error:o.jsx("span",{children:"❌"})}},parameters:{docs:{description:{story:"This story demonstrates a custom icon for each severity level."}}}},B={args:{variant:"filled",severity:"info",children:"This is a dismissible alert!",action:o.jsx("button",{onClick:()=>alert("Alert dismissed!"),children:"Dismiss"})},parameters:{docs:{description:{story:"This story demonstrates a dismissible alert with an action button."}}}},R={args:{variant:"filled",severity:"success",children:"This is a success alert with custom styles!",sx:{backgroundColor:"green",color:"white",padding:"16px",borderRadius:"8px",fontSize:"18px"}},parameters:{docs:{description:{story:"This story demonstrates a success alert with custom styles applied."}}}};var V,Z,_;M.parameters={...M.parameters,docs:{...(V=M.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    variant: 'filled',
    severity: 'success',
    children: 'This is a success alert!'
  }
}`,...(_=(Z=M.parameters)==null?void 0:Z.docs)==null?void 0:_.source}}};var q,G,J;T.parameters={...T.parameters,docs:{...(q=T.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    variant: 'outlined',
    severity: 'info',
    children: 'This is an info alert!'
  }
}`,...(J=(G=T.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,X;z.parameters={...z.parameters,docs:{...(K=z.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    variant: 'standard',
    severity: 'warning',
    children: 'This is a warning alert!'
  }
}`,...(X=(Q=z.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,ss,rs;$.parameters={...$.parameters,docs:{...(Y=$.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    variant: 'filled',
    severity: 'error',
    children: 'This is an error alert!'
  }
}`,...(rs=(ss=$.parameters)==null?void 0:ss.docs)==null?void 0:rs.source}}};var es,os,ts;w.parameters={...w.parameters,docs:{...(es=w.parameters)==null?void 0:es.docs,source:{originalSource:`{
  args: {
    variant: 'filled',
    severity: 'success',
    children: 'This is a success alert with a custom icon!',
    iconMapping: {
      success: <span>🌟</span>,
      info: <span>ℹ️</span>,
      warning: <span>⚠️</span>,
      error: <span>❌</span>
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates a custom icon for each severity level.'
      }
    }
  }
}`,...(ts=(os=w.parameters)==null?void 0:os.docs)==null?void 0:ts.source}}};var as,ns,is;B.parameters={...B.parameters,docs:{...(as=B.parameters)==null?void 0:as.docs,source:{originalSource:`{
  args: {
    variant: 'filled',
    severity: 'info',
    children: 'This is a dismissible alert!',
    action: <button onClick={() => alert('Alert dismissed!')}>Dismiss</button>
  },
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates a dismissible alert with an action button.'
      }
    }
  }
}`,...(is=(ns=B.parameters)==null?void 0:ns.docs)==null?void 0:is.source}}};var ls,cs,ds;R.parameters={...R.parameters,docs:{...(ls=R.parameters)==null?void 0:ls.docs,source:{originalSource:`{
  args: {
    variant: 'filled',
    severity: 'success',
    children: 'This is a success alert with custom styles!',
    sx: {
      backgroundColor: 'green',
      color: 'white',
      padding: '16px',
      borderRadius: '8px',
      fontSize: '18px'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates a success alert with custom styles applied.'
      }
    }
  }
}`,...(ds=(cs=R.parameters)==null?void 0:cs.docs)==null?void 0:ds.source}}};const Cr=["Default","Outlined","Standard","Error","CustomIcon","Dismissible","CustomStyles"];export{w as CustomIcon,R as CustomStyles,M as Default,B as Dismissible,$ as Error,T as Outlined,z as Standard,Cr as __namedExportsOrder,xr as default};
