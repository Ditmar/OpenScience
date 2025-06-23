import{j as r}from"./jsx-runtime-BlDnFLNC.js";import{T as xs}from"./ThemeProvider-CTM5XrnG.js";import{M as Ss}from"./ThemeSwitcher-C9qGKRIQ.js";import{r as Cs}from"./index-Cu9bd8lq.js";import{g as As,a as Ts,s as x,c as js,b as Ms,m as Is}from"./memoTheme-DzQN9eaR.js";import{u as i,P as bs}from"./List-YtOLHMU_.js";import{c as C}from"./createSimplePaletteValueFilter-bm0fmN_7.js";import{c}from"./createSvgIcon-BvwasURC.js";import{u as ws,c as A,d as P,l as $}from"./DefaultPropsProvider-BjoYrAZc.js";import{I as zs}from"./IconButton-BSwSmlEu.js";import"./index-BaAsS3ug.js";import"./index-7QysDjNz.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-B34fLoo2.js";import"./Select-C2t4r_0i.js";import"./useTimeout-C04-8nHt.js";import"./inheritsLoose-DR8r8Ogv.js";import"./index-BWPb3MHu.js";import"./useFormControl-DmJLz5sh.js";import"./useId-Cw7oCgN8.js";import"./MenuItem-qdEX911z.js";import"./ButtonBase-CAaNxZL0.js";import"./extends-CF3RwP-h.js";import"./assertThisInitialized-B9jnkVVz.js";import"./listItemIconClasses-CYmAn3w4.js";import"./listItemTextClasses-ChDHmRFy.js";import"./CircularProgress-B89lcUd6.js";function Ps(s){return Ts("MuiAlert",s)}const k=As("MuiAlert",["root","action","icon","message","filled","colorSuccess","colorInfo","colorWarning","colorError","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]),$s=c(r.jsx("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"})),ks=c(r.jsx("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"})),Ls=c(r.jsx("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"})),Es=c(r.jsx("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"})),Fs=c(r.jsx("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})),Rs=s=>{const{variant:t,color:o,severity:e,classes:l}=s,S={root:["root",`color${A(o||e)}`,`${t}${A(o||e)}`,`${t}`],icon:["icon"],message:["message"],action:["action"]};return Ms(S,Ps,l)},Os=x(bs,{name:"MuiAlert",slot:"Root",overridesResolver:(s,t)=>{const{ownerState:o}=s;return[t.root,t[o.variant],t[`${o.variant}${A(o.color||o.severity)}`]]}})(Is(({theme:s})=>{const t=s.palette.mode==="light"?P:$,o=s.palette.mode==="light"?$:P;return{...s.typography.body2,backgroundColor:"transparent",display:"flex",padding:"6px 16px",variants:[...Object.entries(s.palette).filter(C(["light"])).map(([e])=>({props:{colorSeverity:e,variant:"standard"},style:{color:s.vars?s.vars.palette.Alert[`${e}Color`]:t(s.palette[e].light,.6),backgroundColor:s.vars?s.vars.palette.Alert[`${e}StandardBg`]:o(s.palette[e].light,.9),[`& .${k.icon}`]:s.vars?{color:s.vars.palette.Alert[`${e}IconColor`]}:{color:s.palette[e].main}}})),...Object.entries(s.palette).filter(C(["light"])).map(([e])=>({props:{colorSeverity:e,variant:"outlined"},style:{color:s.vars?s.vars.palette.Alert[`${e}Color`]:t(s.palette[e].light,.6),border:`1px solid ${(s.vars||s).palette[e].light}`,[`& .${k.icon}`]:s.vars?{color:s.vars.palette.Alert[`${e}IconColor`]}:{color:s.palette[e].main}}})),...Object.entries(s.palette).filter(C(["dark"])).map(([e])=>({props:{colorSeverity:e,variant:"filled"},style:{fontWeight:s.typography.fontWeightMedium,...s.vars?{color:s.vars.palette.Alert[`${e}FilledColor`],backgroundColor:s.vars.palette.Alert[`${e}FilledBg`]}:{backgroundColor:s.palette.mode==="dark"?s.palette[e].dark:s.palette[e].main,color:s.palette.getContrastText(s.palette[e].main)}}}))]}})),Bs=x("div",{name:"MuiAlert",slot:"Icon"})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),Ds=x("div",{name:"MuiAlert",slot:"Message"})({padding:"8px 0",minWidth:0,overflow:"auto"}),Ws=x("div",{name:"MuiAlert",slot:"Action"})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),L={success:r.jsx($s,{fontSize:"inherit"}),warning:r.jsx(ks,{fontSize:"inherit"}),error:r.jsx(Ls,{fontSize:"inherit"}),info:r.jsx(Es,{fontSize:"inherit"})},Hs=Cs.forwardRef(function(t,o){const e=ws({props:t,name:"MuiAlert"}),{action:l,children:S,className:es,closeText:T="Close",color:j,components:M={},componentsProps:rs={},icon:I,iconMapping:ts=L,onClose:b,role:os="alert",severity:d="success",slotProps:as={},slots:ns={},variant:is="standard",...ls}=e,a={...e,color:j,severity:d,variant:is,colorSeverity:j||d},p=Rs(a),n={slots:{closeButton:M.CloseButton,closeIcon:M.CloseIcon,...ns},slotProps:{...rs,...as}},[cs,ds]=i("root",{ref:o,shouldForwardComponentProp:!0,className:js(p.root,es),elementType:Os,externalForwardedProps:{...n,...ls},ownerState:a,additionalProps:{role:os,elevation:0}}),[ps,us]=i("icon",{className:p.icon,elementType:Bs,externalForwardedProps:n,ownerState:a}),[ms,gs]=i("message",{className:p.message,elementType:Ds,externalForwardedProps:n,ownerState:a}),[w,z]=i("action",{className:p.action,elementType:Ws,externalForwardedProps:n,ownerState:a}),[vs,fs]=i("closeButton",{elementType:zs,externalForwardedProps:n,ownerState:a}),[hs,ys]=i("closeIcon",{elementType:Fs,externalForwardedProps:n,ownerState:a});return r.jsxs(cs,{...ds,children:[I!==!1?r.jsx(ps,{...us,children:I||ts[d]||L[d]}):null,r.jsx(ms,{...gs,children:S}),l!=null?r.jsx(w,{...z,children:l}):null,l==null&&b?r.jsx(w,{...z,children:r.jsx(vs,{size:"small","aria-label":T,title:T,color:"inherit",onClick:b,...fs,children:r.jsx(hs,{fontSize:"small",...ys})})}):null]})}),ge={title:"MUI/Alert",component:Hs,argTypes:{variant:{control:{type:"select"},options:["filled","outlined","standard"]},severity:{control:{type:"select"},options:["success","info","warning","error"]}},parameters:{layout:"centered"},decorators:[s=>r.jsxs(xs,{children:[r.jsx(Ss,{}),r.jsx("div",{style:{padding:"20px"},children:r.jsx(s,{})})]})]},u={args:{variant:"filled",severity:"success",children:"This is a success alert!"}},m={args:{variant:"outlined",severity:"info",children:"This is an info alert!"}},g={args:{variant:"standard",severity:"warning",children:"This is a warning alert!"}},v={args:{variant:"filled",severity:"error",children:"This is an error alert!"}},f={args:{variant:"filled",severity:"success",children:"This is a success alert with a custom icon!",iconMapping:{success:r.jsx("span",{children:"🌟"}),info:r.jsx("span",{children:"ℹ️"}),warning:r.jsx("span",{children:"⚠️"}),error:r.jsx("span",{children:"❌"})}},parameters:{docs:{description:{story:"This story demonstrates a custom icon for each severity level."}}}},h={args:{variant:"filled",severity:"info",children:"This is a dismissible alert!",action:r.jsx("button",{onClick:()=>alert("Alert dismissed!"),children:"Dismiss"})},parameters:{docs:{description:{story:"This story demonstrates a dismissible alert with an action button."}}}},y={args:{variant:"filled",severity:"success",children:"This is a success alert with custom styles!",sx:{backgroundColor:"green",color:"white",padding:"16px",borderRadius:"8px",fontSize:"18px"}},parameters:{docs:{description:{story:"This story demonstrates a success alert with custom styles applied."}}}};var E,F,R;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    variant: 'filled',
    severity: 'success',
    children: 'This is a success alert!'
  }
}`,...(R=(F=u.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};var O,B,D;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    variant: 'outlined',
    severity: 'info',
    children: 'This is an info alert!'
  }
}`,...(D=(B=m.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var W,H,N;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(ss=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:ss.source}}};const ve=["Default","Outlined","Standard","Error","CustomIcon","Dismissible","CustomStyles"];export{f as CustomIcon,y as CustomStyles,u as Default,h as Dismissible,v as Error,m as Outlined,g as Standard,ve as __namedExportsOrder,ge as default};
