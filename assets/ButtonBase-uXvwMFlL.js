var Be=Object.defineProperty;var Le=(e,t,n)=>t in e?Be(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var X=(e,t,n)=>Le(e,typeof t!="symbol"?t+"":t,n);import{R as Ne,r as a,a as q}from"./index-Cu9bd8lq.js";import{g as me,a as ee,s as Z,c as y,b as be,m as je}from"./memoTheme-IslZ78gv.js";import{T as Ue,p as Fe,u as te,b as ae,x as le}from"./DefaultPropsProvider-NZtMqZlm.js";import{u as ze,b as Oe,k as ne}from"./index-zQ0N-Mv4.js";import{j as V}from"./jsx-runtime-BlDnFLNC.js";import{_ as Ae}from"./extends-CF3RwP-h.js";import{_ as Ye,a as Xe}from"./assertThisInitialized-C1KLUksq.js";function qe(){const e=ze(Fe);return e[Ue]||e}let ue=0;function He(e){const[t,n]=a.useState(e),s=e||t;return a.useEffect(()=>{t==null&&(ue+=1,n(`mui-${ue}`))},[t]),s}const Ke={...Ne},ce=Ke.useId;function wt(e){if(ce!==void 0){const t=ce();return e??t}return He(e)}function _(e){const t=a.useRef(e);return Oe(()=>{t.current=e}),a.useRef((...n)=>(0,t.current)(...n)).current}function pe(...e){const t=a.useRef(void 0),n=a.useCallback(s=>{const o=e.map(r=>{if(r==null)return null;if(typeof r=="function"){const i=r,u=i(s);return typeof u=="function"?u:()=>{i(null)}}return r.current=s,()=>{r.current=null}});return()=>{o.forEach(r=>r==null?void 0:r())}},e);return a.useMemo(()=>e.every(s=>s==null)?null:s=>{t.current&&(t.current(),t.current=void 0),s!=null&&(t.current=n(s))},e)}function We(e,t){if(e==null)return{};var n={};for(var s in e)if({}.hasOwnProperty.call(e,s)){if(t.indexOf(s)!==-1)continue;n[s]=e[s]}return n}const fe=q.createContext(null);function oe(e,t){var n=function(r){return t&&a.isValidElement(r)?t(r):r},s=Object.create(null);return e&&a.Children.map(e,function(o){return o}).forEach(function(o){s[o.key]=n(o)}),s}function _e(e,t){e=e||{},t=t||{};function n(d){return d in t?t[d]:e[d]}var s=Object.create(null),o=[];for(var r in e)r in t?o.length&&(s[r]=o,o=[]):o.push(r);var i,u={};for(var c in t){if(s[c])for(i=0;i<s[c].length;i++){var f=s[c][i];u[s[c][i]]=n(f)}u[c]=n(c)}for(i=0;i<o.length;i++)u[o[i]]=n(o[i]);return u}function L(e,t,n){return n[t]!=null?n[t]:e.props[t]}function Ge(e,t){return oe(e.children,function(n){return a.cloneElement(n,{onExited:t.bind(null,n),in:!0,appear:L(n,"appear",e),enter:L(n,"enter",e),exit:L(n,"exit",e)})})}function Ze(e,t,n){var s=oe(e.children),o=_e(t,s);return Object.keys(o).forEach(function(r){var i=o[r];if(a.isValidElement(i)){var u=r in t,c=r in s,f=t[r],d=a.isValidElement(f)&&!f.props.in;c&&(!u||d)?o[r]=a.cloneElement(i,{onExited:n.bind(null,i),in:!0,exit:L(i,"exit",e),enter:L(i,"enter",e)}):!c&&u&&!d?o[r]=a.cloneElement(i,{in:!1}):c&&u&&a.isValidElement(f)&&(o[r]=a.cloneElement(i,{onExited:n.bind(null,i),in:f.props.in,exit:L(i,"exit",e),enter:L(i,"enter",e)}))}}),o}var Je=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},Qe={component:"div",childFactory:function(t){return t}},re=function(e){Ye(t,e);function t(s,o){var r;r=e.call(this,s,o)||this;var i=r.handleExited.bind(Xe(r));return r.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},r}var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(o,r){var i=r.children,u=r.handleExited,c=r.firstRender;return{children:c?Ge(o,u):Ze(o,i,u),firstRender:!1}},n.handleExited=function(o,r){var i=oe(this.props.children);o.key in i||(o.props.onExited&&o.props.onExited(r),this.mounted&&this.setState(function(u){var c=Ae({},u.children);return delete c[o.key],{children:c}}))},n.render=function(){var o=this.props,r=o.component,i=o.childFactory,u=We(o,["component","childFactory"]),c=this.state.contextValue,f=Je(this.state.children).map(i);return delete u.appear,delete u.enter,delete u.exit,r===null?q.createElement(fe.Provider,{value:c},f):q.createElement(fe.Provider,{value:c},q.createElement(r,u,f))},t}(q.Component);re.propTypes={};re.defaultProps=Qe;const de={};function ge(e,t){const n=a.useRef(de);return n.current===de&&(n.current=e(t)),n}const et=[];function tt(e){a.useEffect(e,et)}class se{constructor(){X(this,"currentId",null);X(this,"clear",()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)});X(this,"disposeEffect",()=>this.clear)}static create(){return new se}start(t,n){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,n()},t)}}function nt(){const e=ge(se.create).current;return tt(e.disposeEffect),e}function ot(e){return me("MuiPaper",e)}ee("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const rt=e=>{const{square:t,elevation:n,variant:s,classes:o}=e,r={root:["root",s,!t&&"rounded",s==="elevation"&&`elevation${n}`]};return be(r,ot,o)},st=Z("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],!n.square&&t.rounded,n.variant==="elevation"&&t[`elevation${n.elevation}`]]}})(je(({theme:e})=>({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow"),variants:[{props:({ownerState:t})=>!t.square,style:{borderRadius:e.shape.borderRadius}},{props:{variant:"outlined"},style:{border:`1px solid ${(e.vars||e).palette.divider}`}},{props:{variant:"elevation"},style:{boxShadow:"var(--Paper-shadow)",backgroundImage:"var(--Paper-overlay)"}}]}))),St=a.forwardRef(function(t,n){var M;const s=te({props:t,name:"MuiPaper"}),o=qe(),{className:r,component:i="div",elevation:u=1,square:c=!1,variant:f="elevation",...d}=s,h={...s,component:i,elevation:u,square:c,variant:f},b=rt(h);return V.jsx(st,{as:i,ownerState:h,className:y(b.root,r),ref:n,...d,style:{...f==="elevation"&&{"--Paper-shadow":(o.vars||o).shadows[u],...o.vars&&{"--Paper-overlay":(M=o.vars.overlays)==null?void 0:M[u]},...!o.vars&&o.palette.mode==="dark"&&{"--Paper-overlay":`linear-gradient(${ae("#fff",le(u))}, ${ae("#fff",le(u))})`}},...d.style}})});function he(e){try{return e.matches(":focus-visible")}catch{}return!1}class G{constructor(){X(this,"mountEffect",()=>{this.shouldMount&&!this.didMount&&this.ref.current!==null&&(this.didMount=!0,this.mounted.resolve())});this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}static create(){return new G}static use(){const t=ge(G.create).current,[n,s]=a.useState(!1);return t.shouldMount=n,t.setShouldMount=s,a.useEffect(t.mountEffect,[n]),t}mount(){return this.mounted||(this.mounted=at(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}start(...t){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.start(...t)})}stop(...t){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.stop(...t)})}pulsate(...t){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.pulsate(...t)})}}function it(){return G.use()}function at(){let e,t;const n=new Promise((s,o)=>{e=s,t=o});return n.resolve=e,n.reject=t,n}function lt(e){const{className:t,classes:n,pulsate:s=!1,rippleX:o,rippleY:r,rippleSize:i,in:u,onExited:c,timeout:f}=e,[d,h]=a.useState(!1),b=y(t,n.ripple,n.rippleVisible,s&&n.ripplePulsate),M={width:i,height:i,top:-(i/2)+r,left:-(i/2)+o},g=y(n.child,d&&n.childLeaving,s&&n.childPulsate);return!u&&!d&&h(!0),a.useEffect(()=>{if(!u&&c!=null){const $=setTimeout(c,f);return()=>{clearTimeout($)}}},[c,u,f]),V.jsx("span",{className:b,style:M,children:V.jsx("span",{className:g})})}const v=ee("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),Q=550,ut=80,ct=ne`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,pt=ne`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,ft=ne`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,dt=Z("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),ht=Z(lt,{name:"MuiTouchRipple",slot:"Ripple"})`
  opacity: 0;
  position: absolute;

  &.${v.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${ct};
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
    animation-name: ${pt};
    animation-duration: ${Q}ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
  }

  & .${v.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${ft};
    animation-duration: 2500ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,mt=a.forwardRef(function(t,n){const s=te({props:t,name:"MuiTouchRipple"}),{center:o=!1,classes:r={},className:i,...u}=s,[c,f]=a.useState([]),d=a.useRef(0),h=a.useRef(null);a.useEffect(()=>{h.current&&(h.current(),h.current=null)},[c]);const b=a.useRef(!1),M=nt(),g=a.useRef(null),$=a.useRef(null),T=a.useCallback(p=>{const{pulsate:E,rippleX:R,rippleY:U,rippleSize:k,cb:F}=p;f(x=>[...x,V.jsx(ht,{classes:{ripple:y(r.ripple,v.ripple),rippleVisible:y(r.rippleVisible,v.rippleVisible),ripplePulsate:y(r.ripplePulsate,v.ripplePulsate),child:y(r.child,v.child),childLeaving:y(r.childLeaving,v.childLeaving),childPulsate:y(r.childPulsate,v.childPulsate)},timeout:Q,pulsate:E,rippleX:R,rippleY:U,rippleSize:k},d.current)]),d.current+=1,h.current=F},[r]),N=a.useCallback((p={},E={},R=()=>{})=>{const{pulsate:U=!1,center:k=o||E.pulsate,fakeElement:F=!1}=E;if((p==null?void 0:p.type)==="mousedown"&&b.current){b.current=!1;return}(p==null?void 0:p.type)==="touchstart"&&(b.current=!0);const x=F?null:$.current,I=x?x.getBoundingClientRect():{width:0,height:0,left:0,top:0};let w,P,S;if(k||p===void 0||p.clientX===0&&p.clientY===0||!p.clientX&&!p.touches)w=Math.round(I.width/2),P=Math.round(I.height/2);else{const{clientX:z,clientY:D}=p.touches&&p.touches.length>0?p.touches[0]:p;w=Math.round(z-I.left),P=Math.round(D-I.top)}if(k)S=Math.sqrt((2*I.width**2+I.height**2)/3),S%2===0&&(S+=1);else{const z=Math.max(Math.abs((x?x.clientWidth:0)-w),w)*2+2,D=Math.max(Math.abs((x?x.clientHeight:0)-P),P)*2+2;S=Math.sqrt(z**2+D**2)}p!=null&&p.touches?g.current===null&&(g.current=()=>{T({pulsate:U,rippleX:w,rippleY:P,rippleSize:S,cb:R})},M.start(ut,()=>{g.current&&(g.current(),g.current=null)})):T({pulsate:U,rippleX:w,rippleY:P,rippleSize:S,cb:R})},[o,T,M]),H=a.useCallback(()=>{N({},{pulsate:!0})},[N]),j=a.useCallback((p,E)=>{if(M.clear(),(p==null?void 0:p.type)==="touchend"&&g.current){g.current(),g.current=null,M.start(0,()=>{j(p,E)});return}g.current=null,f(R=>R.length>0?R.slice(1):R),h.current=E},[M]);return a.useImperativeHandle(n,()=>({pulsate:H,start:N,stop:j}),[H,N,j]),V.jsx(dt,{className:y(v.root,r.root,i),ref:$,...u,children:V.jsx(re,{component:null,exit:!0,children:c})})});function bt(e){return me("MuiButtonBase",e)}const gt=ee("MuiButtonBase",["root","disabled","focusVisible"]),vt=e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:s,classes:o}=e,i=be({root:["root",t&&"disabled",n&&"focusVisible"]},bt,o);return n&&s&&(i.root+=` ${s}`),i},Mt=Z("button",{name:"MuiButtonBase",slot:"Root"})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${gt.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),Vt=a.forwardRef(function(t,n){const s=te({props:t,name:"MuiButtonBase"}),{action:o,centerRipple:r=!1,children:i,className:u,component:c="button",disabled:f=!1,disableRipple:d=!1,disableTouchRipple:h=!1,focusRipple:b=!1,focusVisibleClassName:M,LinkComponent:g="a",onBlur:$,onClick:T,onContextMenu:N,onDragLeave:H,onFocus:j,onFocusVisible:p,onKeyDown:E,onKeyUp:R,onMouseDown:U,onMouseLeave:k,onMouseUp:F,onTouchEnd:x,onTouchMove:I,onTouchStart:w,tabIndex:P=0,TouchRippleProps:S,touchRippleRef:z,type:D,...O}=s,A=a.useRef(null),m=it(),ve=pe(m.ref,z),[B,K]=a.useState(!1);f&&B&&K(!1),a.useImperativeHandle(o,()=>({focusVisible:()=>{K(!0),A.current.focus()}}),[]);const Me=m.shouldMount&&!d&&!f;a.useEffect(()=>{B&&b&&!d&&m.pulsate()},[d,b,B,m]);const Re=C(m,"start",U,h),ye=C(m,"stop",N,h),Ee=C(m,"stop",H,h),xe=C(m,"stop",F,h),Te=C(m,"stop",l=>{B&&l.preventDefault(),k&&k(l)},h),Pe=C(m,"start",w,h),Ce=C(m,"stop",x,h),Ie=C(m,"stop",I,h),we=C(m,"stop",l=>{he(l.target)||K(!1),$&&$(l)},!1),Se=_(l=>{A.current||(A.current=l.currentTarget),he(l.target)&&(K(!0),p&&p(l)),j&&j(l)}),J=()=>{const l=A.current;return c&&c!=="button"&&!(l.tagName==="A"&&l.href)},Ve=_(l=>{b&&!l.repeat&&B&&l.key===" "&&m.stop(l,()=>{m.start(l)}),l.target===l.currentTarget&&J()&&l.key===" "&&l.preventDefault(),E&&E(l),l.target===l.currentTarget&&J()&&l.key==="Enter"&&!f&&(l.preventDefault(),T&&T(l))}),$e=_(l=>{b&&l.key===" "&&B&&!l.defaultPrevented&&m.stop(l,()=>{m.pulsate(l)}),R&&R(l),T&&l.target===l.currentTarget&&J()&&l.key===" "&&!l.defaultPrevented&&T(l)});let W=c;W==="button"&&(O.href||O.to)&&(W=g);const Y={};W==="button"?(Y.type=D===void 0?"button":D,Y.disabled=f):(!O.href&&!O.to&&(Y.role="button"),f&&(Y["aria-disabled"]=f));const ke=pe(n,A),ie={...s,centerRipple:r,component:c,disabled:f,disableRipple:d,disableTouchRipple:h,focusRipple:b,tabIndex:P,focusVisible:B},De=vt(ie);return V.jsxs(Mt,{as:W,className:y(De.root,u),ownerState:ie,onBlur:we,onClick:T,onContextMenu:ye,onFocus:Se,onKeyDown:Ve,onKeyUp:$e,onMouseDown:Re,onMouseLeave:Te,onMouseUp:xe,onDragLeave:Ee,onTouchEnd:Ce,onTouchMove:Ie,onTouchStart:Pe,ref:ke,tabIndex:f?-1:P,type:D,...Y,...O,children:[i,Me?V.jsx(mt,{ref:ve,center:r,...S}):null]})});function C(e,t,n,s=!1){return _(o=>(n&&n(o),s||e[t](o),!0))}export{Vt as B,St as P,fe as T,We as _,qe as a,pe as b,_ as c,nt as d,wt as u};
