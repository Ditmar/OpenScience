var ke=Object.defineProperty;var De=(e,t,n)=>t in e?ke(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var X=(e,t,n)=>De(e,typeof t!="symbol"?t+"":t,n);import{r as l,a as q}from"./index-Cu9bd8lq.js";import{g as de,a as ee,s as Z,c as y,b as he,m as $e}from"./memoTheme-BhWKUwB0.js";import{u as Le}from"./useTheme-wjMc3x9H.js";import{j as V}from"./jsx-runtime-BlDnFLNC.js";import{u as te,b as ae,G as le}from"./DefaultPropsProvider-wJS7qxp6.js";import{_ as Ne}from"./extends-CF3RwP-h.js";import{_ as je,a as Ue}from"./assertThisInitialized-C1KLUksq.js";import{k as ne}from"./index-CsexQ1KR.js";import{u as ue}from"./useForkRef-CXZ2Yisc.js";import{u as Fe}from"./useEnhancedEffect-BAizwhs3.js";function _(e){const t=l.useRef(e);return Fe(()=>{t.current=e}),l.useRef((...n)=>(0,t.current)(...n)).current}function Oe(e,t){if(e==null)return{};var n={};for(var i in e)if({}.hasOwnProperty.call(e,i)){if(t.indexOf(i)!==-1)continue;n[i]=e[i]}return n}const ce=q.createContext(null);function oe(e,t){var n=function(r){return t&&l.isValidElement(r)?t(r):r},i=Object.create(null);return e&&l.Children.map(e,function(o){return o}).forEach(function(o){i[o.key]=n(o)}),i}function ze(e,t){e=e||{},t=t||{};function n(d){return d in t?t[d]:e[d]}var i=Object.create(null),o=[];for(var r in e)r in t?o.length&&(i[r]=o,o=[]):o.push(r);var s,u={};for(var c in t){if(i[c])for(s=0;s<i[c].length;s++){var f=i[c][s];u[i[c][s]]=n(f)}u[c]=n(c)}for(s=0;s<o.length;s++)u[o[s]]=n(o[s]);return u}function L(e,t,n){return n[t]!=null?n[t]:e.props[t]}function Ae(e,t){return oe(e.children,function(n){return l.cloneElement(n,{onExited:t.bind(null,n),in:!0,appear:L(n,"appear",e),enter:L(n,"enter",e),exit:L(n,"exit",e)})})}function Ye(e,t,n){var i=oe(e.children),o=ze(t,i);return Object.keys(o).forEach(function(r){var s=o[r];if(l.isValidElement(s)){var u=r in t,c=r in i,f=t[r],d=l.isValidElement(f)&&!f.props.in;c&&(!u||d)?o[r]=l.cloneElement(s,{onExited:n.bind(null,s),in:!0,exit:L(s,"exit",e),enter:L(s,"enter",e)}):!c&&u&&!d?o[r]=l.cloneElement(s,{in:!1}):c&&u&&l.isValidElement(f)&&(o[r]=l.cloneElement(s,{onExited:n.bind(null,s),in:f.props.in,exit:L(s,"exit",e),enter:L(s,"enter",e)}))}}),o}var Xe=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},qe={component:"div",childFactory:function(t){return t}},re=function(e){je(t,e);function t(i,o){var r;r=e.call(this,i,o)||this;var s=r.handleExited.bind(Ue(r));return r.state={contextValue:{isMounting:!0},handleExited:s,firstRender:!0},r}var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(o,r){var s=r.children,u=r.handleExited,c=r.firstRender;return{children:c?Ae(o,u):Ye(o,s,u),firstRender:!1}},n.handleExited=function(o,r){var s=oe(this.props.children);o.key in s||(o.props.onExited&&o.props.onExited(r),this.mounted&&this.setState(function(u){var c=Ne({},u.children);return delete c[o.key],{children:c}}))},n.render=function(){var o=this.props,r=o.component,s=o.childFactory,u=Oe(o,["component","childFactory"]),c=this.state.contextValue,f=Xe(this.state.children).map(s);return delete u.appear,delete u.enter,delete u.exit,r===null?q.createElement(ce.Provider,{value:c},f):q.createElement(ce.Provider,{value:c},q.createElement(r,u,f))},t}(q.Component);re.propTypes={};re.defaultProps=qe;const pe={};function me(e,t){const n=l.useRef(pe);return n.current===pe&&(n.current=e(t)),n}const Ke=[];function We(e){l.useEffect(e,Ke)}class ie{constructor(){X(this,"currentId",null);X(this,"clear",()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)});X(this,"disposeEffect",()=>this.clear)}static create(){return new ie}start(t,n){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,n()},t)}}function He(){const e=me(ie.create).current;return We(e.disposeEffect),e}function _e(e){return de("MuiPaper",e)}ee("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const Ge=e=>{const{square:t,elevation:n,variant:i,classes:o}=e,r={root:["root",i,!t&&"rounded",i==="elevation"&&`elevation${n}`]};return he(r,_e,o)},Ze=Z("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],!n.square&&t.rounded,n.variant==="elevation"&&t[`elevation${n.elevation}`]]}})($e(({theme:e})=>({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow"),variants:[{props:({ownerState:t})=>!t.square,style:{borderRadius:e.shape.borderRadius}},{props:{variant:"outlined"},style:{border:`1px solid ${(e.vars||e).palette.divider}`}},{props:{variant:"elevation"},style:{boxShadow:"var(--Paper-shadow)",backgroundImage:"var(--Paper-overlay)"}}]}))),Et=l.forwardRef(function(t,n){var M;const i=te({props:t,name:"MuiPaper"}),o=Le(),{className:r,component:s="div",elevation:u=1,square:c=!1,variant:f="elevation",...d}=i,h={...i,component:s,elevation:u,square:c,variant:f},b=Ge(h);return V.jsx(Ze,{as:s,ownerState:h,className:y(b.root,r),ref:n,...d,style:{...f==="elevation"&&{"--Paper-shadow":(o.vars||o).shadows[u],...o.vars&&{"--Paper-overlay":(M=o.vars.overlays)==null?void 0:M[u]},...!o.vars&&o.palette.mode==="dark"&&{"--Paper-overlay":`linear-gradient(${ae("#fff",le(u))}, ${ae("#fff",le(u))})`}},...d.style}})});function fe(e){try{return e.matches(":focus-visible")}catch{}return!1}class G{constructor(){X(this,"mountEffect",()=>{this.shouldMount&&!this.didMount&&this.ref.current!==null&&(this.didMount=!0,this.mounted.resolve())});this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}static create(){return new G}static use(){const t=me(G.create).current,[n,i]=l.useState(!1);return t.shouldMount=n,t.setShouldMount=i,l.useEffect(t.mountEffect,[n]),t}mount(){return this.mounted||(this.mounted=Qe(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}start(...t){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.start(...t)})}stop(...t){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.stop(...t)})}pulsate(...t){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.pulsate(...t)})}}function Je(){return G.use()}function Qe(){let e,t;const n=new Promise((i,o)=>{e=i,t=o});return n.resolve=e,n.reject=t,n}function et(e){const{className:t,classes:n,pulsate:i=!1,rippleX:o,rippleY:r,rippleSize:s,in:u,onExited:c,timeout:f}=e,[d,h]=l.useState(!1),b=y(t,n.ripple,n.rippleVisible,i&&n.ripplePulsate),M={width:s,height:s,top:-(s/2)+r,left:-(s/2)+o},g=y(n.child,d&&n.childLeaving,i&&n.childPulsate);return!u&&!d&&h(!0),l.useEffect(()=>{if(!u&&c!=null){const B=setTimeout(c,f);return()=>{clearTimeout(B)}}},[c,u,f]),V.jsx("span",{className:b,style:M,children:V.jsx("span",{className:g})})}const v=ee("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),Q=550,tt=80,nt=ne`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,ot=ne`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,rt=ne`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,it=Z("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),st=Z(et,{name:"MuiTouchRipple",slot:"Ripple"})`
  opacity: 0;
  position: absolute;

  &.${v.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${nt};
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
    animation-name: ${ot};
    animation-duration: ${Q}ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
  }

  & .${v.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${rt};
    animation-duration: 2500ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,at=l.forwardRef(function(t,n){const i=te({props:t,name:"MuiTouchRipple"}),{center:o=!1,classes:r={},className:s,...u}=i,[c,f]=l.useState([]),d=l.useRef(0),h=l.useRef(null);l.useEffect(()=>{h.current&&(h.current(),h.current=null)},[c]);const b=l.useRef(!1),M=He(),g=l.useRef(null),B=l.useRef(null),P=l.useCallback(p=>{const{pulsate:x,rippleX:R,rippleY:U,rippleSize:k,cb:F}=p;f(E=>[...E,V.jsx(st,{classes:{ripple:y(r.ripple,v.ripple),rippleVisible:y(r.rippleVisible,v.rippleVisible),ripplePulsate:y(r.ripplePulsate,v.ripplePulsate),child:y(r.child,v.child),childLeaving:y(r.childLeaving,v.childLeaving),childPulsate:y(r.childPulsate,v.childPulsate)},timeout:Q,pulsate:x,rippleX:R,rippleY:U,rippleSize:k},d.current)]),d.current+=1,h.current=F},[r]),N=l.useCallback((p={},x={},R=()=>{})=>{const{pulsate:U=!1,center:k=o||x.pulsate,fakeElement:F=!1}=x;if((p==null?void 0:p.type)==="mousedown"&&b.current){b.current=!1;return}(p==null?void 0:p.type)==="touchstart"&&(b.current=!0);const E=F?null:B.current,w=E?E.getBoundingClientRect():{width:0,height:0,left:0,top:0};let S,C,I;if(k||p===void 0||p.clientX===0&&p.clientY===0||!p.clientX&&!p.touches)S=Math.round(w.width/2),C=Math.round(w.height/2);else{const{clientX:O,clientY:D}=p.touches&&p.touches.length>0?p.touches[0]:p;S=Math.round(O-w.left),C=Math.round(D-w.top)}if(k)I=Math.sqrt((2*w.width**2+w.height**2)/3),I%2===0&&(I+=1);else{const O=Math.max(Math.abs((E?E.clientWidth:0)-S),S)*2+2,D=Math.max(Math.abs((E?E.clientHeight:0)-C),C)*2+2;I=Math.sqrt(O**2+D**2)}p!=null&&p.touches?g.current===null&&(g.current=()=>{P({pulsate:U,rippleX:S,rippleY:C,rippleSize:I,cb:R})},M.start(tt,()=>{g.current&&(g.current(),g.current=null)})):P({pulsate:U,rippleX:S,rippleY:C,rippleSize:I,cb:R})},[o,P,M]),K=l.useCallback(()=>{N({},{pulsate:!0})},[N]),j=l.useCallback((p,x)=>{if(M.clear(),(p==null?void 0:p.type)==="touchend"&&g.current){g.current(),g.current=null,M.start(0,()=>{j(p,x)});return}g.current=null,f(R=>R.length>0?R.slice(1):R),h.current=x},[M]);return l.useImperativeHandle(n,()=>({pulsate:K,start:N,stop:j}),[K,N,j]),V.jsx(it,{className:y(v.root,r.root,s),ref:B,...u,children:V.jsx(re,{component:null,exit:!0,children:c})})});function lt(e){return de("MuiButtonBase",e)}const ut=ee("MuiButtonBase",["root","disabled","focusVisible"]),ct=e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:i,classes:o}=e,s=he({root:["root",t&&"disabled",n&&"focusVisible"]},lt,o);return n&&i&&(s.root+=` ${i}`),s},pt=Z("button",{name:"MuiButtonBase",slot:"Root"})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${ut.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),Pt=l.forwardRef(function(t,n){const i=te({props:t,name:"MuiButtonBase"}),{action:o,centerRipple:r=!1,children:s,className:u,component:c="button",disabled:f=!1,disableRipple:d=!1,disableTouchRipple:h=!1,focusRipple:b=!1,focusVisibleClassName:M,LinkComponent:g="a",onBlur:B,onClick:P,onContextMenu:N,onDragLeave:K,onFocus:j,onFocusVisible:p,onKeyDown:x,onKeyUp:R,onMouseDown:U,onMouseLeave:k,onMouseUp:F,onTouchEnd:E,onTouchMove:w,onTouchStart:S,tabIndex:C=0,TouchRippleProps:I,touchRippleRef:O,type:D,...z}=i,A=l.useRef(null),m=Je(),be=ue(m.ref,O),[$,W]=l.useState(!1);f&&$&&W(!1),l.useImperativeHandle(o,()=>({focusVisible:()=>{W(!0),A.current.focus()}}),[]);const ge=m.shouldMount&&!d&&!f;l.useEffect(()=>{$&&b&&!d&&m.pulsate()},[d,b,$,m]);const ve=T(m,"start",U,h),Me=T(m,"stop",N,h),Re=T(m,"stop",K,h),ye=T(m,"stop",F,h),xe=T(m,"stop",a=>{$&&a.preventDefault(),k&&k(a)},h),Ee=T(m,"start",S,h),Pe=T(m,"stop",E,h),Ce=T(m,"stop",w,h),Te=T(m,"stop",a=>{fe(a.target)||W(!1),B&&B(a)},!1),we=_(a=>{A.current||(A.current=a.currentTarget),fe(a.target)&&(W(!0),p&&p(a)),j&&j(a)}),J=()=>{const a=A.current;return c&&c!=="button"&&!(a.tagName==="A"&&a.href)},Se=_(a=>{b&&!a.repeat&&$&&a.key===" "&&m.stop(a,()=>{m.start(a)}),a.target===a.currentTarget&&J()&&a.key===" "&&a.preventDefault(),x&&x(a),a.target===a.currentTarget&&J()&&a.key==="Enter"&&!f&&(a.preventDefault(),P&&P(a))}),Ie=_(a=>{b&&a.key===" "&&$&&!a.defaultPrevented&&m.stop(a,()=>{m.pulsate(a)}),R&&R(a),P&&a.target===a.currentTarget&&J()&&a.key===" "&&!a.defaultPrevented&&P(a)});let H=c;H==="button"&&(z.href||z.to)&&(H=g);const Y={};H==="button"?(Y.type=D===void 0?"button":D,Y.disabled=f):(!z.href&&!z.to&&(Y.role="button"),f&&(Y["aria-disabled"]=f));const Ve=ue(n,A),se={...i,centerRipple:r,component:c,disabled:f,disableRipple:d,disableTouchRipple:h,focusRipple:b,tabIndex:C,focusVisible:$},Be=ct(se);return V.jsxs(pt,{as:H,className:y(Be.root,u),ownerState:se,onBlur:Te,onClick:P,onContextMenu:Me,onFocus:we,onKeyDown:Se,onKeyUp:Ie,onMouseDown:ve,onMouseLeave:xe,onMouseUp:ye,onDragLeave:Re,onTouchEnd:Pe,onTouchMove:Ce,onTouchStart:Ee,ref:Ve,tabIndex:f?-1:C,type:D,...Y,...z,children:[s,ge?V.jsx(at,{ref:be,center:r,...I}):null]})});function T(e,t,n,i=!1){return _(o=>(n&&n(o),i||e[t](o),!0))}export{Pt as B,Et as P,ce as T,Oe as _,He as a,_ as u};
