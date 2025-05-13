import{j as t}from"./jsx-runtime-DRTy3Uxn.js";import{g as ps,a as us,s as v,B as Ts,b as n,m as L,o as F,d as S,u as gs,n as $s,e as vs,f as ms,h as b,P as ws,j as g,p as W,q as D,A as Bs,M as Rs}from"./ThemeSwitcher-CJyEVODt.js";import{r as ys}from"./index-BBkUAzwr.js";import{C as Ps}from"./CircularProgress-LtQ5PHq8.js";import"./index-PqR-_bA4.js";function ks(s){return ps("MuiAlert",s)}const Ls=us("MuiAlert",["root","action","icon","message","filled","colorSuccess","colorInfo","colorWarning","colorError","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]),N=Ls;function Os(s){return ps("MuiIconButton",s)}const U=us("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge","loading","loadingIndicator","loadingWrapper"]),Es=s=>{const{classes:r,disabled:o,color:e,edge:a,size:i,loading:m}=s,p={root:["root",m&&"loading",o&&"disabled",e!=="default"&&`color${n(e)}`,a&&`edge${n(a)}`,`size${n(i)}`],loadingIndicator:["loadingIndicator"],loadingWrapper:["loadingWrapper"]};return ms(p,Os,r)},Fs=v(Ts,{name:"MuiIconButton",slot:"Root",overridesResolver:(s,r)=>{const{ownerState:o}=s;return[r.root,o.loading&&r.loading,o.color!=="default"&&r[`color${n(o.color)}`],o.edge&&r[`edge${n(o.edge)}`],r[`size${n(o.size)}`]]}})(L(({theme:s})=>({textAlign:"center",flex:"0 0 auto",fontSize:s.typography.pxToRem(24),padding:8,borderRadius:"50%",color:(s.vars||s).palette.action.active,transition:s.transitions.create("background-color",{duration:s.transitions.duration.shortest}),variants:[{props:r=>!r.disableRipple,style:{"--IconButton-hoverBg":s.vars?`rgba(${s.vars.palette.action.activeChannel} / ${s.vars.palette.action.hoverOpacity})`:F(s.palette.action.active,s.palette.action.hoverOpacity),"&:hover":{backgroundColor:"var(--IconButton-hoverBg)","@media (hover: none)":{backgroundColor:"transparent"}}}},{props:{edge:"start"},style:{marginLeft:-12}},{props:{edge:"start",size:"small"},style:{marginLeft:-3}},{props:{edge:"end"},style:{marginRight:-12}},{props:{edge:"end",size:"small"},style:{marginRight:-3}}]})),L(({theme:s})=>({variants:[{props:{color:"inherit"},style:{color:"inherit"}},...Object.entries(s.palette).filter(S()).map(([r])=>({props:{color:r},style:{color:(s.vars||s).palette[r].main}})),...Object.entries(s.palette).filter(S()).map(([r])=>({props:{color:r},style:{"--IconButton-hoverBg":s.vars?`rgba(${(s.vars||s).palette[r].mainChannel} / ${s.vars.palette.action.hoverOpacity})`:F((s.vars||s).palette[r].main,s.palette.action.hoverOpacity)}})),{props:{size:"small"},style:{padding:5,fontSize:s.typography.pxToRem(18)}},{props:{size:"large"},style:{padding:12,fontSize:s.typography.pxToRem(28)}}],[`&.${U.disabled}`]:{backgroundColor:"transparent",color:(s.vars||s).palette.action.disabled},[`&.${U.loading}`]:{color:"transparent"}}))),Ws=v("span",{name:"MuiIconButton",slot:"LoadingIndicator"})(({theme:s})=>({display:"none",position:"absolute",visibility:"visible",top:"50%",left:"50%",transform:"translate(-50%, -50%)",color:(s.vars||s).palette.action.disabled,variants:[{props:{loading:!0},style:{display:"flex"}}]})),Ds=ys.forwardRef(function(r,o){const e=gs({props:r,name:"MuiIconButton"}),{edge:a=!1,children:i,className:m,color:p="default",disabled:y=!1,disableFocusRipple:f=!1,size:P="medium",id:h,loading:l=null,loadingIndicator:I,...k}=e,c=$s(h),A=I??t.jsx(Ps,{"aria-labelledby":c,color:"inherit",size:16}),x={...e,edge:a,color:p,disabled:y,disableFocusRipple:f,loading:l,loadingIndicator:A,size:P},C=Es(x);return t.jsxs(Fs,{id:l?c:h,className:vs(C.root,m),centerRipple:!0,focusRipple:!f,disabled:y||l,ref:o,...k,ownerState:x,children:[typeof l=="boolean"&&t.jsx("span",{className:C.loadingWrapper,style:{display:"contents"},children:t.jsx(Ws,{className:C.loadingIndicator,ownerState:x,children:l&&A})}),i]})}),Ns=b(t.jsx("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"})),Us=b(t.jsx("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"})),Hs=b(t.jsx("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"})),Vs=b(t.jsx("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"})),Zs=b(t.jsx("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})),_s=s=>{const{variant:r,color:o,severity:e,classes:a}=s,i={root:["root",`color${n(o||e)}`,`${r}${n(o||e)}`,`${r}`],icon:["icon"],message:["message"],action:["action"]};return ms(i,ks,a)},qs=v(ws,{name:"MuiAlert",slot:"Root",overridesResolver:(s,r)=>{const{ownerState:o}=s;return[r.root,r[o.variant],r[`${o.variant}${n(o.color||o.severity)}`]]}})(L(({theme:s})=>{const r=s.palette.mode==="light"?W:D,o=s.palette.mode==="light"?D:W;return{...s.typography.body2,backgroundColor:"transparent",display:"flex",padding:"6px 16px",variants:[...Object.entries(s.palette).filter(S(["light"])).map(([e])=>({props:{colorSeverity:e,variant:"standard"},style:{color:s.vars?s.vars.palette.Alert[`${e}Color`]:r(s.palette[e].light,.6),backgroundColor:s.vars?s.vars.palette.Alert[`${e}StandardBg`]:o(s.palette[e].light,.9),[`& .${N.icon}`]:s.vars?{color:s.vars.palette.Alert[`${e}IconColor`]}:{color:s.palette[e].main}}})),...Object.entries(s.palette).filter(S(["light"])).map(([e])=>({props:{colorSeverity:e,variant:"outlined"},style:{color:s.vars?s.vars.palette.Alert[`${e}Color`]:r(s.palette[e].light,.6),border:`1px solid ${(s.vars||s).palette[e].light}`,[`& .${N.icon}`]:s.vars?{color:s.vars.palette.Alert[`${e}IconColor`]}:{color:s.palette[e].main}}})),...Object.entries(s.palette).filter(S(["dark"])).map(([e])=>({props:{colorSeverity:e,variant:"filled"},style:{fontWeight:s.typography.fontWeightMedium,...s.vars?{color:s.vars.palette.Alert[`${e}FilledColor`],backgroundColor:s.vars.palette.Alert[`${e}FilledBg`]}:{backgroundColor:s.palette.mode==="dark"?s.palette[e].dark:s.palette[e].main,color:s.palette.getContrastText(s.palette[e].main)}}}))]}})),Gs=v("div",{name:"MuiAlert",slot:"Icon"})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),Js=v("div",{name:"MuiAlert",slot:"Message"})({padding:"8px 0",minWidth:0,overflow:"auto"}),Ks=v("div",{name:"MuiAlert",slot:"Action"})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),H={success:t.jsx(Ns,{fontSize:"inherit"}),warning:t.jsx(Us,{fontSize:"inherit"}),error:t.jsx(Hs,{fontSize:"inherit"}),info:t.jsx(Vs,{fontSize:"inherit"})},Qs=ys.forwardRef(function(r,o){const e=gs({props:r,name:"MuiAlert"}),{action:a,children:i,className:m,closeText:p="Close",color:y,components:f={},componentsProps:P={},icon:h,iconMapping:l=H,onClose:I,role:k="alert",severity:c="success",slotProps:A={},slots:x={},variant:C="standard",...fs}=e,d={...e,color:y,severity:c,variant:C,colorSeverity:y||c},j=_s(d),u={slots:{closeButton:f.CloseButton,closeIcon:f.CloseIcon,...x},slotProps:{...P,...A}},[hs,xs]=g("root",{ref:o,shouldForwardComponentProp:!0,className:vs(j.root,m),elementType:qs,externalForwardedProps:{...u,...fs},ownerState:d,additionalProps:{role:k,elevation:0}}),[Cs,Ss]=g("icon",{className:j.icon,elementType:Gs,externalForwardedProps:u,ownerState:d}),[bs,Is]=g("message",{className:j.message,elementType:Js,externalForwardedProps:u,ownerState:d}),[O,E]=g("action",{className:j.action,elementType:Ks,externalForwardedProps:u,ownerState:d}),[As,js]=g("closeButton",{elementType:Ds,externalForwardedProps:u,ownerState:d}),[Ms,zs]=g("closeIcon",{elementType:Zs,externalForwardedProps:u,ownerState:d});return t.jsxs(hs,{...xs,children:[h!==!1?t.jsx(Cs,{...Ss,children:h||l[c]||H[c]}):null,t.jsx(bs,{...Is,children:i}),a!=null?t.jsx(O,{...E,children:a}):null,a==null&&I?t.jsx(O,{...E,children:t.jsx(As,{size:"small","aria-label":p,title:p,color:"inherit",onClick:I,...js,children:t.jsx(Ms,{fontSize:"small",...zs})})}):null]})}),te={title:"MUI/Alert",component:Qs,argTypes:{variant:{control:{type:"select"},options:["filled","outlined","standard"]},severity:{control:{type:"select"},options:["success","info","warning","error"]}},parameters:{layout:"centered"},decorators:[s=>t.jsxs(Bs,{children:[t.jsx(Rs,{}),t.jsx("div",{style:{padding:"20px"},children:t.jsx(s,{})})]})]},M={args:{variant:"filled",severity:"success",children:"This is a success alert!"}},z={args:{variant:"outlined",severity:"info",children:"This is an info alert!"}},T={args:{variant:"standard",severity:"warning",children:"This is a warning alert!"}},$={args:{variant:"filled",severity:"error",children:"This is an error alert!"}},w={args:{variant:"filled",severity:"success",children:"This is a success alert with a custom icon!",iconMapping:{success:t.jsx("span",{children:"🌟"}),info:t.jsx("span",{children:"ℹ️"}),warning:t.jsx("span",{children:"⚠️"}),error:t.jsx("span",{children:"❌"})}},parameters:{docs:{description:{story:"This story demonstrates a custom icon for each severity level."}}}},B={args:{variant:"filled",severity:"info",children:"This is a dismissible alert!",action:t.jsx("button",{onClick:()=>alert("Alert dismissed!"),children:"Dismiss"})},parameters:{docs:{description:{story:"This story demonstrates a dismissible alert with an action button."}}}},R={args:{variant:"filled",severity:"success",children:"This is a success alert with custom styles!",sx:{backgroundColor:"green",color:"white",padding:"16px",borderRadius:"8px",fontSize:"18px"}},parameters:{docs:{description:{story:"This story demonstrates a success alert with custom styles applied."}}}};var V,Z,_;M.parameters={...M.parameters,docs:{...(V=M.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    variant: 'filled',
    severity: 'success',
    children: 'This is a success alert!'
  }
}`,...(_=(Z=M.parameters)==null?void 0:Z.docs)==null?void 0:_.source}}};var q,G,J;z.parameters={...z.parameters,docs:{...(q=z.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    variant: 'outlined',
    severity: 'info',
    children: 'This is an info alert!'
  }
}`,...(J=(G=z.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,X;T.parameters={...T.parameters,docs:{...(K=T.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    variant: 'standard',
    severity: 'warning',
    children: 'This is a warning alert!'
  }
}`,...(X=(Q=T.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,ss,es;$.parameters={...$.parameters,docs:{...(Y=$.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    variant: 'filled',
    severity: 'error',
    children: 'This is an error alert!'
  }
}`,...(es=(ss=$.parameters)==null?void 0:ss.docs)==null?void 0:es.source}}};var rs,ts,os;w.parameters={...w.parameters,docs:{...(rs=w.parameters)==null?void 0:rs.docs,source:{originalSource:`{
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
}`,...(os=(ts=w.parameters)==null?void 0:ts.docs)==null?void 0:os.source}}};var as,ns,is;B.parameters={...B.parameters,docs:{...(as=B.parameters)==null?void 0:as.docs,source:{originalSource:`{
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
}`,...(ds=(cs=R.parameters)==null?void 0:cs.docs)==null?void 0:ds.source}}};const oe=["Default","Outlined","Standard","Error","CustomIcon","Dismissible","CustomStyles"];export{w as CustomIcon,R as CustomStyles,M as Default,B as Dismissible,$ as Error,z as Outlined,T as Standard,oe as __namedExportsOrder,te as default};
