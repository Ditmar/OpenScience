var De=Object.defineProperty;var $e=(e,t,n)=>t in e?De(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var X=(e,t,n)=>$e(e,typeof t!="symbol"?t+"":t,n);import{r as l,a as q}from"./index-Cu9bd8lq.js";import{a as de,g as ee,s as Z,c as y,b as he,m as ke}from"./memoTheme-DNmhNJj8.js";import{T as Le,y as Ne,u as te,b as ae,G as le}from"./DefaultPropsProvider-BIY0F8TN.js";import{u as je,k as ne}from"./index-Dwy9HoVc.js";import{j as V}from"./jsx-runtime-BlDnFLNC.js";import{_ as Ue}from"./extends-CF3RwP-h.js";import{_ as Fe,a as Oe}from"./assertThisInitialized-C1KLUksq.js";import{u as ue}from"./useForkRef-CXZ2Yisc.js";import{u as ze}from"./useEnhancedEffect-BAizwhs3.js";function Ae(){const e=je(Ne);return e[Le]||e}function _(e){const t=l.useRef(e);return ze(()=>{t.current=e}),l.useRef((...n)=>(0,t.current)(...n)).current}function Ye(e,t){if(e==null)return{};var n={};for(var s in e)if({}.hasOwnProperty.call(e,s)){if(t.indexOf(s)!==-1)continue;n[s]=e[s]}return n}const ce=q.createContext(null);function oe(e,t){var n=function(r){return t&&l.isValidElement(r)?t(r):r},s=Object.create(null);return e&&l.Children.map(e,function(o){return o}).forEach(function(o){s[o.key]=n(o)}),s}function Xe(e,t){e=e||{},t=t||{};function n(d){return d in t?t[d]:e[d]}var s=Object.create(null),o=[];for(var r in e)r in t?o.length&&(s[r]=o,o=[]):o.push(r);var i,u={};for(var c in t){if(s[c])for(i=0;i<s[c].length;i++){var f=s[c][i];u[s[c][i]]=n(f)}u[c]=n(c)}for(i=0;i<o.length;i++)u[o[i]]=n(o[i]);return u}function L(e,t,n){return n[t]!=null?n[t]:e.props[t]}function qe(e,t){return oe(e.children,function(n){return l.cloneElement(n,{onExited:t.bind(null,n),in:!0,appear:L(n,"appear",e),enter:L(n,"enter",e),exit:L(n,"exit",e)})})}function He(e,t,n){var s=oe(e.children),o=Xe(t,s);return Object.keys(o).forEach(function(r){var i=o[r];if(l.isValidElement(i)){var u=r in t,c=r in s,f=t[r],d=l.isValidElement(f)&&!f.props.in;c&&(!u||d)?o[r]=l.cloneElement(i,{onExited:n.bind(null,i),in:!0,exit:L(i,"exit",e),enter:L(i,"enter",e)}):!c&&u&&!d?o[r]=l.cloneElement(i,{in:!1}):c&&u&&l.isValidElement(f)&&(o[r]=l.cloneElement(i,{onExited:n.bind(null,i),in:f.props.in,exit:L(i,"exit",e),enter:L(i,"enter",e)}))}}),o}var Ke=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},We={component:"div",childFactory:function(t){return t}},re=function(e){Fe(t,e);function t(s,o){var r;r=e.call(this,s,o)||this;var i=r.handleExited.bind(Oe(r));return r.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},r}var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(o,r){var i=r.children,u=r.handleExited,c=r.firstRender;return{children:c?qe(o,u):He(o,i,u),firstRender:!1}},n.handleExited=function(o,r){var i=oe(this.props.children);o.key in i||(o.props.onExited&&o.props.onExited(r),this.mounted&&this.setState(function(u){var c=Ue({},u.children);return delete c[o.key],{children:c}}))},n.render=function(){var o=this.props,r=o.component,i=o.childFactory,u=Ye(o,["component","childFactory"]),c=this.state.contextValue,f=Ke(this.state.children).map(i);return delete u.appear,delete u.enter,delete u.exit,r===null?q.createElement(ce.Provider,{value:c},f):q.createElement(ce.Provider,{value:c},q.createElement(r,u,f))},t}(q.Component);re.propTypes={};re.defaultProps=We;const pe={};function me(e,t){const n=l.useRef(pe);return n.current===pe&&(n.current=e(t)),n}const _e=[];function Ge(e){l.useEffect(e,_e)}class se{constructor(){X(this,"currentId",null);X(this,"clear",()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)});X(this,"disposeEffect",()=>this.clear)}static create(){return new se}start(t,n){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,n()},t)}}function Ze(){const e=me(se.create).current;return Ge(e.disposeEffect),e}function Je(e){return de("MuiPaper",e)}ee("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const Qe=e=>{const{square:t,elevation:n,variant:s,classes:o}=e,r={root:["root",s,!t&&"rounded",s==="elevation"&&`elevation${n}`]};return he(r,Je,o)},et=Z("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],!n.square&&t.rounded,n.variant==="elevation"&&t[`elevation${n.elevation}`]]}})(ke(({theme:e})=>({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow"),variants:[{props:({ownerState:t})=>!t.square,style:{borderRadius:e.shape.borderRadius}},{props:{variant:"outlined"},style:{border:`1px solid ${(e.vars||e).palette.divider}`}},{props:{variant:"elevation"},style:{boxShadow:"var(--Paper-shadow)",backgroundImage:"var(--Paper-overlay)"}}]}))),Pt=l.forwardRef(function(t,n){var M;const s=te({props:t,name:"MuiPaper"}),o=Ae(),{className:r,component:i="div",elevation:u=1,square:c=!1,variant:f="elevation",...d}=s,h={...s,component:i,elevation:u,square:c,variant:f},b=Qe(h);return V.jsx(et,{as:i,ownerState:h,className:y(b.root,r),ref:n,...d,style:{...f==="elevation"&&{"--Paper-shadow":(o.vars||o).shadows[u],...o.vars&&{"--Paper-overlay":(M=o.vars.overlays)==null?void 0:M[u]},...!o.vars&&o.palette.mode==="dark"&&{"--Paper-overlay":`linear-gradient(${ae("#fff",le(u))}, ${ae("#fff",le(u))})`}},...d.style}})});function fe(e){try{return e.matches(":focus-visible")}catch{}return!1}class G{constructor(){X(this,"mountEffect",()=>{this.shouldMount&&!this.didMount&&this.ref.current!==null&&(this.didMount=!0,this.mounted.resolve())});this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}static create(){return new G}static use(){const t=me(G.create).current,[n,s]=l.useState(!1);return t.shouldMount=n,t.setShouldMount=s,l.useEffect(t.mountEffect,[n]),t}mount(){return this.mounted||(this.mounted=nt(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}start(...t){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.start(...t)})}stop(...t){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.stop(...t)})}pulsate(...t){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.pulsate(...t)})}}function tt(){return G.use()}function nt(){let e,t;const n=new Promise((s,o)=>{e=s,t=o});return n.resolve=e,n.reject=t,n}function ot(e){const{className:t,classes:n,pulsate:s=!1,rippleX:o,rippleY:r,rippleSize:i,in:u,onExited:c,timeout:f}=e,[d,h]=l.useState(!1),b=y(t,n.ripple,n.rippleVisible,s&&n.ripplePulsate),M={width:i,height:i,top:-(i/2)+r,left:-(i/2)+o},g=y(n.child,d&&n.childLeaving,s&&n.childPulsate);return!u&&!d&&h(!0),l.useEffect(()=>{if(!u&&c!=null){const B=setTimeout(c,f);return()=>{clearTimeout(B)}}},[c,u,f]),V.jsx("span",{className:b,style:M,children:V.jsx("span",{className:g})})}const v=ee("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),Q=550,rt=80,st=ne`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,it=ne`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,at=ne`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,lt=Z("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),ut=Z(ot,{name:"MuiTouchRipple",slot:"Ripple"})`
  opacity: 0;
  position: absolute;

  &.${v.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${st};
    animation-duration: ${Q}ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
  }

  &.${v.ripplePulsate} {
    animation-duration: ${({theme:e})=>e.transitions.duration.shorter}ms;
  }

  & .${v.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${v.childLeaving} {
    opacity: 0;
    animation-name: ${it};
    animation-duration: ${Q}ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
  }

  & .${v.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${at};
    animation-duration: 2500ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,ct=l.forwardRef(function(t,n){const s=te({props:t,name:"MuiTouchRipple"}),{center:o=!1,classes:r={},className:i,...u}=s,[c,f]=l.useState([]),d=l.useRef(0),h=l.useRef(null);l.useEffect(()=>{h.current&&(h.current(),h.current=null)},[c]);const b=l.useRef(!1),M=Ze(),g=l.useRef(null),B=l.useRef(null),T=l.useCallback(p=>{const{pulsate:E,rippleX:R,rippleY:U,rippleSize:D,cb:F}=p;f(x=>[...x,V.jsx(ut,{classes:{ripple:y(r.ripple,v.ripple),rippleVisible:y(r.rippleVisible,v.rippleVisible),ripplePulsate:y(r.ripplePulsate,v.ripplePulsate),child:y(r.child,v.child),childLeaving:y(r.childLeaving,v.childLeaving),childPulsate:y(r.childPulsate,v.childPulsate)},timeout:Q,pulsate:E,rippleX:R,rippleY:U,rippleSize:D},d.current)]),d.current+=1,h.current=F},[r]),N=l.useCallback((p={},E={},R=()=>{})=>{const{pulsate:U=!1,center:D=o||E.pulsate,fakeElement:F=!1}=E;if((p==null?void 0:p.type)==="mousedown"&&b.current){b.current=!1;return}(p==null?void 0:p.type)==="touchstart"&&(b.current=!0);const x=F?null:B.current,w=x?x.getBoundingClientRect():{width:0,height:0,left:0,top:0};let I,P,S;if(D||p===void 0||p.clientX===0&&p.clientY===0||!p.clientX&&!p.touches)I=Math.round(w.width/2),P=Math.round(w.height/2);else{const{clientX:O,clientY:$}=p.touches&&p.touches.length>0?p.touches[0]:p;I=Math.round(O-w.left),P=Math.round($-w.top)}if(D)S=Math.sqrt((2*w.width**2+w.height**2)/3),S%2===0&&(S+=1);else{const O=Math.max(Math.abs((x?x.clientWidth:0)-I),I)*2+2,$=Math.max(Math.abs((x?x.clientHeight:0)-P),P)*2+2;S=Math.sqrt(O**2+$**2)}p!=null&&p.touches?g.current===null&&(g.current=()=>{T({pulsate:U,rippleX:I,rippleY:P,rippleSize:S,cb:R})},M.start(rt,()=>{g.current&&(g.current(),g.current=null)})):T({pulsate:U,rippleX:I,rippleY:P,rippleSize:S,cb:R})},[o,T,M]),H=l.useCallback(()=>{N({},{pulsate:!0})},[N]),j=l.useCallback((p,E)=>{if(M.clear(),(p==null?void 0:p.type)==="touchend"&&g.current){g.current(),g.current=null,M.start(0,()=>{j(p,E)});return}g.current=null,f(R=>R.length>0?R.slice(1):R),h.current=E},[M]);return l.useImperativeHandle(n,()=>({pulsate:H,start:N,stop:j}),[H,N,j]),V.jsx(lt,{className:y(v.root,r.root,i),ref:B,...u,children:V.jsx(re,{component:null,exit:!0,children:c})})});function pt(e){return de("MuiButtonBase",e)}const ft=ee("MuiButtonBase",["root","disabled","focusVisible"]),dt=e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:s,classes:o}=e,i=he({root:["root",t&&"disabled",n&&"focusVisible"]},pt,o);return n&&s&&(i.root+=` ${s}`),i},ht=Z("button",{name:"MuiButtonBase",slot:"Root"})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${ft.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),Ct=l.forwardRef(function(t,n){const s=te({props:t,name:"MuiButtonBase"}),{action:o,centerRipple:r=!1,children:i,className:u,component:c="button",disabled:f=!1,disableRipple:d=!1,disableTouchRipple:h=!1,focusRipple:b=!1,focusVisibleClassName:M,LinkComponent:g="a",onBlur:B,onClick:T,onContextMenu:N,onDragLeave:H,onFocus:j,onFocusVisible:p,onKeyDown:E,onKeyUp:R,onMouseDown:U,onMouseLeave:D,onMouseUp:F,onTouchEnd:x,onTouchMove:w,onTouchStart:I,tabIndex:P=0,TouchRippleProps:S,touchRippleRef:O,type:$,...z}=s,A=l.useRef(null),m=tt(),be=ue(m.ref,O),[k,K]=l.useState(!1);f&&k&&K(!1),l.useImperativeHandle(o,()=>({focusVisible:()=>{K(!0),A.current.focus()}}),[]);const ge=m.shouldMount&&!d&&!f;l.useEffect(()=>{k&&b&&!d&&m.pulsate()},[d,b,k,m]);const ve=C(m,"start",U,h),Me=C(m,"stop",N,h),Re=C(m,"stop",H,h),ye=C(m,"stop",F,h),Ee=C(m,"stop",a=>{k&&a.preventDefault(),D&&D(a)},h),xe=C(m,"start",I,h),Te=C(m,"stop",x,h),Pe=C(m,"stop",w,h),Ce=C(m,"stop",a=>{fe(a.target)||K(!1),B&&B(a)},!1),we=_(a=>{A.current||(A.current=a.currentTarget),fe(a.target)&&(K(!0),p&&p(a)),j&&j(a)}),J=()=>{const a=A.current;return c&&c!=="button"&&!(a.tagName==="A"&&a.href)},Ie=_(a=>{b&&!a.repeat&&k&&a.key===" "&&m.stop(a,()=>{m.start(a)}),a.target===a.currentTarget&&J()&&a.key===" "&&a.preventDefault(),E&&E(a),a.target===a.currentTarget&&J()&&a.key==="Enter"&&!f&&(a.preventDefault(),T&&T(a))}),Se=_(a=>{b&&a.key===" "&&k&&!a.defaultPrevented&&m.stop(a,()=>{m.pulsate(a)}),R&&R(a),T&&a.target===a.currentTarget&&J()&&a.key===" "&&!a.defaultPrevented&&T(a)});let W=c;W==="button"&&(z.href||z.to)&&(W=g);const Y={};W==="button"?(Y.type=$===void 0?"button":$,Y.disabled=f):(!z.href&&!z.to&&(Y.role="button"),f&&(Y["aria-disabled"]=f));const Ve=ue(n,A),ie={...s,centerRipple:r,component:c,disabled:f,disableRipple:d,disableTouchRipple:h,focusRipple:b,tabIndex:P,focusVisible:k},Be=dt(ie);return V.jsxs(ht,{as:W,className:y(Be.root,u),ownerState:ie,onBlur:Ce,onClick:T,onContextMenu:Me,onFocus:we,onKeyDown:Ie,onKeyUp:Se,onMouseDown:ve,onMouseLeave:Ee,onMouseUp:ye,onDragLeave:Re,onTouchEnd:Te,onTouchMove:Pe,onTouchStart:xe,ref:Ve,tabIndex:f?-1:P,type:$,...Y,...z,children:[i,ge?V.jsx(ct,{ref:be,center:r,...S}):null]})});function C(e,t,n,s=!1){return _(o=>(n&&n(o),s||e[t](o),!0))}export{Ct as B,Pt as P,ce as T,Ye as _,_ as a,Ze as b,Ae as u};
