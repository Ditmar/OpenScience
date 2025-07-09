import{j as t}from"./jsx-runtime-BlDnFLNC.js";import{T as xs}from"./ThemeProvider-CLshrxhf.js";import{M as Ss}from"./ThemeSwitcher-D_qObqov.js";import{r as Cs}from"./index-Cu9bd8lq.js";import{g as As,a as Ts,c as js}from"./generateUtilityClasses-CPRdC64H.js";import{m as Ms}from"./memoTheme-E6j5siMe.js";import{u as i}from"./useSlot-BDqnu5Qn.js";import{c as C}from"./createSimplePaletteValueFilter-bm0fmN_7.js";import{c}from"./createSvgIcon-BF1AuBJe.js";import{u as Is}from"./DefaultPropsProvider-15asn56a.js";import{s as x}from"./styled-DYqe69MS.js";import{I as bs}from"./IconButton-BTLNOvWL.js";import{b as A,A as P,B as $}from"./createTheme-Wz6RB6Fy.js";import{c as ws}from"./composeClasses-CAXbtk_0.js";import{P as zs}from"./Paper-B1cq0otB.js";import"./default-BIRBV4EM.js";import"./tokens-MkZ2rTIJ.js";import"./ThemeProvider-jJv6Tswn.js";import"./index-BaAsS3ug.js";import"./extendSxProp-DZpmlPTG.js";import"./useEnhancedEffect-BAizwhs3.js";import"./index-BDKYfTe2.js";import"./defaultTheme-DGUDAp2c.js";import"./emotion-react.browser.esm-BMvUHC7V.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-B89909lT.js";import"./CssBaseline-2LC2uDMg.js";import"./Select-Ca69Df13.js";import"./useSlotProps-B3Hw36CH.js";import"./useForkRef-CXZ2Yisc.js";import"./isHostComponent-DVu5iVWx.js";import"./ownerWindow-DvT1GKkC.js";import"./useTheme-Yy9QpvGT.js";import"./utils-BKS3DThN.js";import"./useTimeout-CpWYkyOc.js";import"./inheritsLoose-DR8r8Ogv.js";import"./index-BWPb3MHu.js";import"./getReactElementRef-Ch8XQsCo.js";import"./mergeSlotProps-DPdjSIcl.js";import"./Modal-CqNy2sB5.js";import"./List-TPzf6IyN.js";import"./InputBase-CJjmY3p4.js";import"./useFormControl-DxQRLcK0.js";import"./useId-Cw7oCgN8.js";import"./MenuItem-CwSZTgD8.js";import"./ButtonBase-D9d1tA4w.js";import"./extends-CF3RwP-h.js";import"./assertThisInitialized-B9jnkVVz.js";import"./listItemIconClasses-D9KmbCfN.js";import"./listItemTextClasses-B7GF_tSs.js";import"./index-nHByv8xN.js";import"./CircularProgress-CA5A_CD-.js";function Ps(s){return Ts("MuiAlert",s)}const k=As("MuiAlert",["root","action","icon","message","filled","colorSuccess","colorInfo","colorWarning","colorError","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]),$s=c(t.jsx("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"})),ks=c(t.jsx("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"})),Ls=c(t.jsx("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"})),Es=c(t.jsx("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"})),Fs=c(t.jsx("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})),Rs=s=>{const{variant:e,color:o,severity:r,classes:l}=s,S={root:["root",`color${A(o||r)}`,`${e}${A(o||r)}`,`${e}`],icon:["icon"],message:["message"],action:["action"]};return ws(S,Ps,l)},Bs=x(zs,{name:"MuiAlert",slot:"Root",overridesResolver:(s,e)=>{const{ownerState:o}=s;return[e.root,e[o.variant],e[`${o.variant}${A(o.color||o.severity)}`]]}})(Ms(({theme:s})=>{const e=s.palette.mode==="light"?P:$,o=s.palette.mode==="light"?$:P;return{...s.typography.body2,backgroundColor:"transparent",display:"flex",padding:"6px 16px",variants:[...Object.entries(s.palette).filter(C(["light"])).map(([r])=>({props:{colorSeverity:r,variant:"standard"},style:{color:s.vars?s.vars.palette.Alert[`${r}Color`]:e(s.palette[r].light,.6),backgroundColor:s.vars?s.vars.palette.Alert[`${r}StandardBg`]:o(s.palette[r].light,.9),[`& .${k.icon}`]:s.vars?{color:s.vars.palette.Alert[`${r}IconColor`]}:{color:s.palette[r].main}}})),...Object.entries(s.palette).filter(C(["light"])).map(([r])=>({props:{colorSeverity:r,variant:"outlined"},style:{color:s.vars?s.vars.palette.Alert[`${r}Color`]:e(s.palette[r].light,.6),border:`1px solid ${(s.vars||s).palette[r].light}`,[`& .${k.icon}`]:s.vars?{color:s.vars.palette.Alert[`${r}IconColor`]}:{color:s.palette[r].main}}})),...Object.entries(s.palette).filter(C(["dark"])).map(([r])=>({props:{colorSeverity:r,variant:"filled"},style:{fontWeight:s.typography.fontWeightMedium,...s.vars?{color:s.vars.palette.Alert[`${r}FilledColor`],backgroundColor:s.vars.palette.Alert[`${r}FilledBg`]}:{backgroundColor:s.palette.mode==="dark"?s.palette[r].dark:s.palette[r].main,color:s.palette.getContrastText(s.palette[r].main)}}}))]}})),Os=x("div",{name:"MuiAlert",slot:"Icon"})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),Ds=x("div",{name:"MuiAlert",slot:"Message"})({padding:"8px 0",minWidth:0,overflow:"auto"}),Ws=x("div",{name:"MuiAlert",slot:"Action"})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),L={success:t.jsx($s,{fontSize:"inherit"}),warning:t.jsx(ks,{fontSize:"inherit"}),error:t.jsx(Ls,{fontSize:"inherit"}),info:t.jsx(Es,{fontSize:"inherit"})},Hs=Cs.forwardRef(function(e,o){const r=Is({props:e,name:"MuiAlert"}),{action:l,children:S,className:rs,closeText:T="Close",color:j,components:M={},componentsProps:ts={},icon:I,iconMapping:es=L,onClose:b,role:os="alert",severity:p="success",slotProps:as={},slots:ns={},variant:is="standard",...ls}=r,a={...r,color:j,severity:p,variant:is,colorSeverity:j||p},d=Rs(a),n={slots:{closeButton:M.CloseButton,closeIcon:M.CloseIcon,...ns},slotProps:{...ts,...as}},[cs,ps]=i("root",{ref:o,shouldForwardComponentProp:!0,className:js(d.root,rs),elementType:Bs,externalForwardedProps:{...n,...ls},ownerState:a,additionalProps:{role:os,elevation:0}}),[ds,ms]=i("icon",{className:d.icon,elementType:Os,externalForwardedProps:n,ownerState:a}),[us,gs]=i("message",{className:d.message,elementType:Ds,externalForwardedProps:n,ownerState:a}),[w,z]=i("action",{className:d.action,elementType:Ws,externalForwardedProps:n,ownerState:a}),[fs,vs]=i("closeButton",{elementType:bs,externalForwardedProps:n,ownerState:a}),[hs,ys]=i("closeIcon",{elementType:Fs,externalForwardedProps:n,ownerState:a});return t.jsxs(cs,{...ps,children:[I!==!1?t.jsx(ds,{...ms,children:I||es[p]||L[p]}):null,t.jsx(us,{...gs,children:S}),l!=null?t.jsx(w,{...z,children:l}):null,l==null&&b?t.jsx(w,{...z,children:t.jsx(fs,{size:"small","aria-label":T,title:T,color:"inherit",onClick:b,...vs,children:t.jsx(hs,{fontSize:"small",...ys})})}):null]})}),Dr={title:"MUI/Alert",component:Hs,argTypes:{variant:{control:{type:"select"},options:["filled","outlined","standard"]},severity:{control:{type:"select"},options:["success","info","warning","error"]}},parameters:{layout:"centered"},decorators:[s=>t.jsxs(xs,{children:[t.jsx(Ss,{}),t.jsx("div",{style:{padding:"20px"},children:t.jsx(s,{})})]})]},m={args:{variant:"filled",severity:"success",children:"This is a success alert!"}},u={args:{variant:"outlined",severity:"info",children:"This is an info alert!"}},g={args:{variant:"standard",severity:"warning",children:"This is a warning alert!"}},f={args:{variant:"filled",severity:"error",children:"This is an error alert!"}},v={args:{variant:"filled",severity:"success",children:"This is a success alert with a custom icon!",iconMapping:{success:t.jsx("span",{children:"🌟"}),info:t.jsx("span",{children:"ℹ️"}),warning:t.jsx("span",{children:"⚠️"}),error:t.jsx("span",{children:"❌"})}},parameters:{docs:{description:{story:"This story demonstrates a custom icon for each severity level."}}}},h={args:{variant:"filled",severity:"info",children:"This is a dismissible alert!",action:t.jsx("button",{onClick:()=>alert("Alert dismissed!"),children:"Dismiss"})},parameters:{docs:{description:{story:"This story demonstrates a dismissible alert with an action button."}}}},y={args:{variant:"filled",severity:"success",children:"This is a success alert with custom styles!",sx:{backgroundColor:"green",color:"white",padding:"16px",borderRadius:"8px",fontSize:"18px"}},parameters:{docs:{description:{story:"This story demonstrates a success alert with custom styles applied."}}}};var E,F,R;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    variant: 'filled',
    severity: 'success',
    children: 'This is a success alert!'
  }
}`,...(R=(F=m.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};var B,O,D;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    variant: 'outlined',
    severity: 'info',
    children: 'This is an info alert!'
  }
}`,...(D=(O=u.parameters)==null?void 0:O.docs)==null?void 0:D.source}}};var W,H,N;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    variant: 'standard',
    severity: 'warning',
    children: 'This is a warning alert!'
  }
}`,...(N=(H=g.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var U,V,Z;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    variant: 'filled',
    severity: 'error',
    children: 'This is an error alert!'
  }
}`,...(Z=(V=f.parameters)==null?void 0:V.docs)==null?void 0:Z.source}}};var _,q,G;v.parameters={...v.parameters,docs:{...(_=v.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(G=(q=v.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var J,K,Q;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Q=(K=h.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,ss;y.parameters={...y.parameters,docs:{...(X=y.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(ss=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:ss.source}}};const Wr=["Default","Outlined","Standard","Error","CustomIcon","Dismissible","CustomStyles"];export{v as CustomIcon,y as CustomStyles,m as Default,h as Dismissible,f as Error,u as Outlined,g as Standard,Wr as __namedExportsOrder,Dr as default};
