import{j as e}from"./jsx-runtime-BlDnFLNC.js";import{T as xs}from"./ThemeProvider-BqTApTxB.js";import{M as Ss}from"./ThemeSwitcher-Bmy4T39H.js";import{r as Cs}from"./index-Cu9bd8lq.js";import{g as As,a as Ts,s as x,c as js}from"./styled-Cl3ZjLpO.js";import{c as Ms,m as Is}from"./memoTheme-DZWkp_ug.js";import{u as i}from"./useSlot-CRq1ou0v.js";import{c as C}from"./createSimplePaletteValueFilter-bm0fmN_7.js";import{c}from"./createSvgIcon-BAXP6NQS.js";import{u as bs}from"./DefaultPropsProvider-15asn56a.js";import{I as ws}from"./IconButton-3Lsp9HL8.js";import{c as A,p as P,q as $}from"./defaultTheme-Ba2BoY66.js";import{P as zs}from"./Paper-Cv1Vn8yT.js";import"./tokens-CeZKYa3_.js";import"./index-BaAsS3ug.js";import"./extendSxProp-DJc_Wbty.js";import"./useEnhancedEffect-BAizwhs3.js";import"./index-ycYtN9Nl.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-B34fLoo2.js";import"./Select-CFBh_iNN.js";import"./useForkRef-CXZ2Yisc.js";import"./useTimeout-BPiCGVvU.js";import"./inheritsLoose-DR8r8Ogv.js";import"./index-BWPb3MHu.js";import"./useFormControl-BnIkRmrr.js";import"./List-DFDQ9Jp4.js";import"./useId-Cw7oCgN8.js";import"./MenuItem-B3NeLTE3.js";import"./ButtonBase-BVoX56u4.js";import"./extends-CF3RwP-h.js";import"./assertThisInitialized-B9jnkVVz.js";import"./listItemIconClasses-DCjW-ycJ.js";import"./listItemTextClasses-CijrrMT_.js";import"./CircularProgress-CJTczgOr.js";function Ps(s){return Ts("MuiAlert",s)}const k=As("MuiAlert",["root","action","icon","message","filled","colorSuccess","colorInfo","colorWarning","colorError","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]),$s=c(e.jsx("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"})),ks=c(e.jsx("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"})),Ls=c(e.jsx("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"})),Es=c(e.jsx("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"})),Fs=c(e.jsx("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})),Rs=s=>{const{variant:t,color:o,severity:r,classes:l}=s,S={root:["root",`color${A(o||r)}`,`${t}${A(o||r)}`,`${t}`],icon:["icon"],message:["message"],action:["action"]};return Ms(S,Ps,l)},Os=x(zs,{name:"MuiAlert",slot:"Root",overridesResolver:(s,t)=>{const{ownerState:o}=s;return[t.root,t[o.variant],t[`${o.variant}${A(o.color||o.severity)}`]]}})(Is(({theme:s})=>{const t=s.palette.mode==="light"?P:$,o=s.palette.mode==="light"?$:P;return{...s.typography.body2,backgroundColor:"transparent",display:"flex",padding:"6px 16px",variants:[...Object.entries(s.palette).filter(C(["light"])).map(([r])=>({props:{colorSeverity:r,variant:"standard"},style:{color:s.vars?s.vars.palette.Alert[`${r}Color`]:t(s.palette[r].light,.6),backgroundColor:s.vars?s.vars.palette.Alert[`${r}StandardBg`]:o(s.palette[r].light,.9),[`& .${k.icon}`]:s.vars?{color:s.vars.palette.Alert[`${r}IconColor`]}:{color:s.palette[r].main}}})),...Object.entries(s.palette).filter(C(["light"])).map(([r])=>({props:{colorSeverity:r,variant:"outlined"},style:{color:s.vars?s.vars.palette.Alert[`${r}Color`]:t(s.palette[r].light,.6),border:`1px solid ${(s.vars||s).palette[r].light}`,[`& .${k.icon}`]:s.vars?{color:s.vars.palette.Alert[`${r}IconColor`]}:{color:s.palette[r].main}}})),...Object.entries(s.palette).filter(C(["dark"])).map(([r])=>({props:{colorSeverity:r,variant:"filled"},style:{fontWeight:s.typography.fontWeightMedium,...s.vars?{color:s.vars.palette.Alert[`${r}FilledColor`],backgroundColor:s.vars.palette.Alert[`${r}FilledBg`]}:{backgroundColor:s.palette.mode==="dark"?s.palette[r].dark:s.palette[r].main,color:s.palette.getContrastText(s.palette[r].main)}}}))]}})),Bs=x("div",{name:"MuiAlert",slot:"Icon"})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),Ds=x("div",{name:"MuiAlert",slot:"Message"})({padding:"8px 0",minWidth:0,overflow:"auto"}),Ws=x("div",{name:"MuiAlert",slot:"Action"})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),L={success:e.jsx($s,{fontSize:"inherit"}),warning:e.jsx(ks,{fontSize:"inherit"}),error:e.jsx(Ls,{fontSize:"inherit"}),info:e.jsx(Es,{fontSize:"inherit"})},Hs=Cs.forwardRef(function(t,o){const r=bs({props:t,name:"MuiAlert"}),{action:l,children:S,className:rs,closeText:T="Close",color:j,components:M={},componentsProps:es={},icon:I,iconMapping:ts=L,onClose:b,role:os="alert",severity:p="success",slotProps:as={},slots:ns={},variant:is="standard",...ls}=r,a={...r,color:j,severity:p,variant:is,colorSeverity:j||p},d=Rs(a),n={slots:{closeButton:M.CloseButton,closeIcon:M.CloseIcon,...ns},slotProps:{...es,...as}},[cs,ps]=i("root",{ref:o,shouldForwardComponentProp:!0,className:js(d.root,rs),elementType:Os,externalForwardedProps:{...n,...ls},ownerState:a,additionalProps:{role:os,elevation:0}}),[ds,ms]=i("icon",{className:d.icon,elementType:Bs,externalForwardedProps:n,ownerState:a}),[us,gs]=i("message",{className:d.message,elementType:Ds,externalForwardedProps:n,ownerState:a}),[w,z]=i("action",{className:d.action,elementType:Ws,externalForwardedProps:n,ownerState:a}),[vs,fs]=i("closeButton",{elementType:ws,externalForwardedProps:n,ownerState:a}),[hs,ys]=i("closeIcon",{elementType:Fs,externalForwardedProps:n,ownerState:a});return e.jsxs(cs,{...ps,children:[I!==!1?e.jsx(ds,{...ms,children:I||ts[p]||L[p]}):null,e.jsx(us,{...gs,children:S}),l!=null?e.jsx(w,{...z,children:l}):null,l==null&&b?e.jsx(w,{...z,children:e.jsx(vs,{size:"small","aria-label":T,title:T,color:"inherit",onClick:b,...fs,children:e.jsx(hs,{fontSize:"small",...ys})})}):null]})}),Ar={title:"MUI/Alert",component:Hs,argTypes:{variant:{control:{type:"select"},options:["filled","outlined","standard"]},severity:{control:{type:"select"},options:["success","info","warning","error"]}},parameters:{layout:"centered"},decorators:[s=>e.jsxs(xs,{children:[e.jsx(Ss,{}),e.jsx("div",{style:{padding:"20px"},children:e.jsx(s,{})})]})]},m={args:{variant:"filled",severity:"success",children:"This is a success alert!"}},u={args:{variant:"outlined",severity:"info",children:"This is an info alert!"}},g={args:{variant:"standard",severity:"warning",children:"This is a warning alert!"}},v={args:{variant:"filled",severity:"error",children:"This is an error alert!"}},f={args:{variant:"filled",severity:"success",children:"This is a success alert with a custom icon!",iconMapping:{success:e.jsx("span",{children:"🌟"}),info:e.jsx("span",{children:"ℹ️"}),warning:e.jsx("span",{children:"⚠️"}),error:e.jsx("span",{children:"❌"})}},parameters:{docs:{description:{story:"This story demonstrates a custom icon for each severity level."}}}},h={args:{variant:"filled",severity:"info",children:"This is a dismissible alert!",action:e.jsx("button",{onClick:()=>alert("Alert dismissed!"),children:"Dismiss"})},parameters:{docs:{description:{story:"This story demonstrates a dismissible alert with an action button."}}}},y={args:{variant:"filled",severity:"success",children:"This is a success alert with custom styles!",sx:{backgroundColor:"green",color:"white",padding:"16px",borderRadius:"8px",fontSize:"18px"}},parameters:{docs:{description:{story:"This story demonstrates a success alert with custom styles applied."}}}};var E,F,R;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    variant: 'filled',
    severity: 'success',
    children: 'This is a success alert!'
  }
}`,...(R=(F=m.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};var O,B,D;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    variant: 'outlined',
    severity: 'info',
    children: 'This is an info alert!'
  }
}`,...(D=(B=u.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var W,H,N;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    variant: 'standard',
    severity: 'warning',
    children: 'This is a warning alert!'
  }
}`,...(N=(H=g.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var U,V,Z;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    variant: 'filled',
    severity: 'error',
    children: 'This is an error alert!'
  }
}`,...(Z=(V=v.parameters)==null?void 0:V.docs)==null?void 0:Z.source}}};var _,q,G;f.parameters={...f.parameters,docs:{...(_=f.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(G=(q=f.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var J,K,Q;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(ss=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:ss.source}}};const Tr=["Default","Outlined","Standard","Error","CustomIcon","Dismissible","CustomStyles"];export{f as CustomIcon,y as CustomStyles,m as Default,h as Dismissible,v as Error,u as Outlined,g as Standard,Tr as __namedExportsOrder,Ar as default};
