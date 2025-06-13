var Bt=Object.defineProperty;var Lt=(t,e,n)=>e in t?Bt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var K=(t,e,n)=>Lt(t,typeof e!="symbol"?e+"":e,n);import{r as c,a as W}from"./index-Cu9bd8lq.js";import{c as g,a as ct,s as S,g as jt,b as At}from"./memoTheme-DFZ5Ih9v.js";import{j as w}from"./jsx-runtime-BlDnFLNC.js";import{u as lt}from"./DefaultPropsProvider-BwUNytnB.js";import{_ as Dt}from"./extends-CF3RwP-h.js";import{_ as Ft,a as $t}from"./assertThisInitialized-C1KLUksq.js";import{k as tt}from"./useTheme-TkhsyVDe.js";import{a as rt}from"./useSlot-BAlk_gGd.js";import{u as wt}from"./useEnhancedEffect-BAizwhs3.js";function ge(t){const{controlled:e,default:n,name:s,state:r="value"}=t,{current:o}=c.useRef(e!==void 0),[i,u]=c.useState(n),a=o?e:i,f=c.useCallback(d=>{o||u(d)},[]);return[a,f]}function Z(t){const e=c.useRef(t);return wt(()=>{e.current=t}),c.useRef((...n)=>(0,e.current)(...n)).current}function Ut(t,e){const n=t.charCodeAt(2);return t[0]==="o"&&t[1]==="n"&&n>=65&&n<=90&&typeof e=="function"}function Me(t,e){if(!t)return e;function n(i,u){const a={};return Object.keys(u).forEach(f=>{Ut(f,u[f])&&typeof i[f]=="function"&&(a[f]=(...d)=>{i[f](...d),u[f](...d)})}),a}if(typeof t=="function"||typeof e=="function")return i=>{const u=typeof e=="function"?e(i):e,a=typeof t=="function"?t({...i,...u}):t,f=g(i==null?void 0:i.className,u==null?void 0:u.className,a==null?void 0:a.className),d=n(a,u);return{...u,...a,...d,...!!f&&{className:f},...(u==null?void 0:u.style)&&(a==null?void 0:a.style)&&{style:{...u.style,...a.style}},...(u==null?void 0:u.sx)&&(a==null?void 0:a.sx)&&{sx:[...Array.isArray(u.sx)?u.sx:[u.sx],...Array.isArray(a.sx)?a.sx:[a.sx]]}}};const s=e,r=n(t,s),o=g(s==null?void 0:s.className,t==null?void 0:t.className);return{...e,...t,...r,...!!o&&{className:o},...(s==null?void 0:s.style)&&(t==null?void 0:t.style)&&{style:{...s.style,...t.style}},...(s==null?void 0:s.sx)&&(t==null?void 0:t.sx)&&{sx:[...Array.isArray(s.sx)?s.sx:[s.sx],...Array.isArray(t.sx)?t.sx:[t.sx]]}}}function Vt(t,e){if(t==null)return{};var n={};for(var s in t)if({}.hasOwnProperty.call(t,s)){if(e.indexOf(s)!==-1)continue;n[s]=t[s]}return n}const ot=W.createContext(null);function et(t,e){var n=function(o){return e&&c.isValidElement(o)?e(o):o},s=Object.create(null);return t&&c.Children.map(t,function(r){return r}).forEach(function(r){s[r.key]=n(r)}),s}function kt(t,e){t=t||{},e=e||{};function n(d){return d in e?e[d]:t[d]}var s=Object.create(null),r=[];for(var o in t)o in e?r.length&&(s[o]=r,r=[]):r.push(o);var i,u={};for(var a in e){if(s[a])for(i=0;i<s[a].length;i++){var f=s[a][i];u[s[a][i]]=n(f)}u[a]=n(a)}for(i=0;i<r.length;i++)u[r[i]]=n(r[i]);return u}function $(t,e,n){return n[e]!=null?n[e]:t.props[e]}function Ot(t,e){return et(t.children,function(n){return c.cloneElement(n,{onExited:e.bind(null,n),in:!0,appear:$(n,"appear",t),enter:$(n,"enter",t),exit:$(n,"exit",t)})})}function zt(t,e,n){var s=et(t.children),r=kt(e,s);return Object.keys(r).forEach(function(o){var i=r[o];if(c.isValidElement(i)){var u=o in e,a=o in s,f=e[o],d=c.isValidElement(f)&&!f.props.in;a&&(!u||d)?r[o]=c.cloneElement(i,{onExited:n.bind(null,i),in:!0,exit:$(i,"exit",t),enter:$(i,"enter",t)}):!a&&u&&!d?r[o]=c.cloneElement(i,{in:!1}):a&&u&&c.isValidElement(f)&&(r[o]=c.cloneElement(i,{onExited:n.bind(null,i),in:f.props.in,exit:$(i,"exit",t),enter:$(i,"enter",t)}))}}),r}var Yt=Object.values||function(t){return Object.keys(t).map(function(e){return t[e]})},Ht={component:"div",childFactory:function(e){return e}},nt=function(t){Ft(e,t);function e(s,r){var o;o=t.call(this,s,r)||this;var i=o.handleExited.bind($t(o));return o.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},o}var n=e.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},e.getDerivedStateFromProps=function(r,o){var i=o.children,u=o.handleExited,a=o.firstRender;return{children:a?Ot(r,u):zt(r,i,u),firstRender:!1}},n.handleExited=function(r,o){var i=et(this.props.children);r.key in i||(r.props.onExited&&r.props.onExited(o),this.mounted&&this.setState(function(u){var a=Dt({},u.children);return delete a[r.key],{children:a}}))},n.render=function(){var r=this.props,o=r.component,i=r.childFactory,u=Vt(r,["component","childFactory"]),a=this.state.contextValue,f=Yt(this.state.children).map(i);return delete u.appear,delete u.enter,delete u.exit,o===null?W.createElement(ot.Provider,{value:a},f):W.createElement(ot.Provider,{value:a},W.createElement(o,u,f))},e}(W.Component);nt.propTypes={};nt.defaultProps=Ht;const at={};function ft(t,e){const n=c.useRef(at);return n.current===at&&(n.current=t(e)),n}const Xt=[];function Kt(t){c.useEffect(t,Xt)}class st{constructor(){K(this,"currentId",null);K(this,"clear",()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)});K(this,"disposeEffect",()=>this.clear)}static create(){return new st}start(e,n){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,n()},e)}}function Wt(){const t=ft(st.create).current;return Kt(t.disposeEffect),t}function ut(t){try{return t.matches(":focus-visible")}catch{}return!1}class J{constructor(){K(this,"mountEffect",()=>{this.shouldMount&&!this.didMount&&this.ref.current!==null&&(this.didMount=!0,this.mounted.resolve())});this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}static create(){return new J}static use(){const e=ft(J.create).current,[n,s]=c.useState(!1);return e.shouldMount=n,e.setShouldMount=s,c.useEffect(e.mountEffect,[n]),e}mount(){return this.mounted||(this.mounted=Gt(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}start(...e){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.start(...e)})}stop(...e){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.stop(...e)})}pulsate(...e){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.pulsate(...e)})}}function _t(){return J.use()}function Gt(){let t,e;const n=new Promise((s,r)=>{t=s,e=r});return n.resolve=t,n.reject=e,n}function qt(t){const{className:e,classes:n,pulsate:s=!1,rippleX:r,rippleY:o,rippleSize:i,in:u,onExited:a,timeout:f}=t,[d,h]=c.useState(!1),y=g(e,n.ripple,n.rippleVisible,s&&n.ripplePulsate),I={width:i,height:i,top:-(i/2)+o,left:-(i/2)+r},b=g(n.child,d&&n.childLeaving,s&&n.childPulsate);return!u&&!d&&h(!0),c.useEffect(()=>{if(!u&&a!=null){const j=setTimeout(a,f);return()=>{clearTimeout(j)}}},[a,u,f]),w.jsx("span",{className:y,style:I,children:w.jsx("span",{className:b})})}const M=ct("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),P=550,Zt=80,Jt=tt`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,Qt=tt`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,Pt=tt`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,St=S("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),te=S(qt,{name:"MuiTouchRipple",slot:"Ripple"})`
  opacity: 0;
  position: absolute;

  &.${M.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${Jt};
    animation-duration: ${P}ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
  }

  &.${M.ripplePulsate} {
    animation-duration: ${({theme:t})=>t.transitions.duration.shorter}ms;
  }

  & .${M.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${M.childLeaving} {
    opacity: 0;
    animation-name: ${Qt};
    animation-duration: ${P}ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
  }

  & .${M.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${Pt};
    animation-duration: 2500ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,ee=c.forwardRef(function(e,n){const s=lt({props:e,name:"MuiTouchRipple"}),{center:r=!1,classes:o={},className:i,...u}=s,[a,f]=c.useState([]),d=c.useRef(0),h=c.useRef(null);c.useEffect(()=>{h.current&&(h.current(),h.current=null)},[a]);const y=c.useRef(!1),I=Wt(),b=c.useRef(null),j=c.useRef(null),T=c.useCallback(p=>{const{pulsate:R,rippleX:C,rippleY:k,rippleSize:A,cb:O}=p;f(E=>[...E,w.jsx(te,{classes:{ripple:g(o.ripple,M.ripple),rippleVisible:g(o.rippleVisible,M.rippleVisible),ripplePulsate:g(o.ripplePulsate,M.ripplePulsate),child:g(o.child,M.child),childLeaving:g(o.childLeaving,M.childLeaving),childPulsate:g(o.childPulsate,M.childPulsate)},timeout:P,pulsate:R,rippleX:C,rippleY:k,rippleSize:A},d.current)]),d.current+=1,h.current=O},[o]),U=c.useCallback((p={},R={},C=()=>{})=>{const{pulsate:k=!1,center:A=r||R.pulsate,fakeElement:O=!1}=R;if((p==null?void 0:p.type)==="mousedown"&&y.current){y.current=!1;return}(p==null?void 0:p.type)==="touchstart"&&(y.current=!0);const E=O?null:j.current,v=E?E.getBoundingClientRect():{width:0,height:0,left:0,top:0};let B,x,L;if(A||p===void 0||p.clientX===0&&p.clientY===0||!p.clientX&&!p.touches)B=Math.round(v.width/2),x=Math.round(v.height/2);else{const{clientX:z,clientY:D}=p.touches&&p.touches.length>0?p.touches[0]:p;B=Math.round(z-v.left),x=Math.round(D-v.top)}if(A)L=Math.sqrt((2*v.width**2+v.height**2)/3),L%2===0&&(L+=1);else{const z=Math.max(Math.abs((E?E.clientWidth:0)-B),B)*2+2,D=Math.max(Math.abs((E?E.clientHeight:0)-x),x)*2+2;L=Math.sqrt(z**2+D**2)}p!=null&&p.touches?b.current===null&&(b.current=()=>{T({pulsate:k,rippleX:B,rippleY:x,rippleSize:L,cb:C})},I.start(Zt,()=>{b.current&&(b.current(),b.current=null)})):T({pulsate:k,rippleX:B,rippleY:x,rippleSize:L,cb:C})},[r,T,I]),_=c.useCallback(()=>{U({},{pulsate:!0})},[U]),V=c.useCallback((p,R)=>{if(I.clear(),(p==null?void 0:p.type)==="touchend"&&b.current){b.current(),b.current=null,I.start(0,()=>{V(p,R)});return}b.current=null,f(C=>C.length>0?C.slice(1):C),h.current=R},[I]);return c.useImperativeHandle(n,()=>({pulsate:_,start:U,stop:V}),[_,U,V]),w.jsx(St,{className:g(M.root,o.root,i),ref:j,...u,children:w.jsx(nt,{component:null,exit:!0,children:a})})});function ne(t){return jt("MuiButtonBase",t)}const se=ct("MuiButtonBase",["root","disabled","focusVisible"]),ie=t=>{const{disabled:e,focusVisible:n,focusVisibleClassName:s,classes:r}=t,i=At({root:["root",e&&"disabled",n&&"focusVisible"]},ne,r);return n&&s&&(i.root+=` ${s}`),i},re=S("button",{name:"MuiButtonBase",slot:"Root"})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${se.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),ye=c.forwardRef(function(e,n){const s=lt({props:e,name:"MuiButtonBase"}),{action:r,centerRipple:o=!1,children:i,className:u,component:a="button",disabled:f=!1,disableRipple:d=!1,disableTouchRipple:h=!1,focusRipple:y=!1,focusVisibleClassName:I,LinkComponent:b="a",onBlur:j,onClick:T,onContextMenu:U,onDragLeave:_,onFocus:V,onFocusVisible:p,onKeyDown:R,onKeyUp:C,onMouseDown:k,onMouseLeave:A,onMouseUp:O,onTouchEnd:E,onTouchMove:v,onTouchStart:B,tabIndex:x=0,TouchRippleProps:L,touchRippleRef:z,type:D,...Y}=s,H=c.useRef(null),m=_t(),pt=rt(m.ref,z),[F,G]=c.useState(!1);f&&F&&G(!1),c.useImperativeHandle(r,()=>({focusVisible:()=>{G(!0),H.current.focus()}}),[]);const dt=m.shouldMount&&!d&&!f;c.useEffect(()=>{F&&y&&!d&&m.pulsate()},[d,y,F,m]);const ht=N(m,"start",k,h),mt=N(m,"stop",U,h),bt=N(m,"stop",_,h),gt=N(m,"stop",O,h),Mt=N(m,"stop",l=>{F&&l.preventDefault(),A&&A(l)},h),yt=N(m,"start",B,h),Ct=N(m,"stop",E,h),Rt=N(m,"stop",v,h),Et=N(m,"stop",l=>{ut(l.target)||G(!1),j&&j(l)},!1),Tt=Z(l=>{H.current||(H.current=l.currentTarget),ut(l.target)&&(G(!0),p&&p(l)),V&&V(l)}),Q=()=>{const l=H.current;return a&&a!=="button"&&!(l.tagName==="A"&&l.href)},xt=Z(l=>{y&&!l.repeat&&F&&l.key===" "&&m.stop(l,()=>{m.start(l)}),l.target===l.currentTarget&&Q()&&l.key===" "&&l.preventDefault(),R&&R(l),l.target===l.currentTarget&&Q()&&l.key==="Enter"&&!f&&(l.preventDefault(),T&&T(l))}),Nt=Z(l=>{y&&l.key===" "&&F&&!l.defaultPrevented&&m.stop(l,()=>{m.pulsate(l)}),C&&C(l),T&&l.target===l.currentTarget&&Q()&&l.key===" "&&!l.defaultPrevented&&T(l)});let q=a;q==="button"&&(Y.href||Y.to)&&(q=b);const X={};q==="button"?(X.type=D===void 0?"button":D,X.disabled=f):(!Y.href&&!Y.to&&(X.role="button"),f&&(X["aria-disabled"]=f));const It=rt(n,H),it={...s,centerRipple:o,component:a,disabled:f,disableRipple:d,disableTouchRipple:h,focusRipple:y,tabIndex:x,focusVisible:F},vt=ie(it);return w.jsxs(re,{as:q,className:g(vt.root,u),ownerState:it,onBlur:Et,onClick:T,onContextMenu:mt,onFocus:Tt,onKeyDown:xt,onKeyUp:Nt,onMouseDown:ht,onMouseLeave:Mt,onMouseUp:gt,onDragLeave:bt,onTouchEnd:Ct,onTouchMove:Rt,onTouchStart:yt,ref:It,tabIndex:f?-1:x,type:D,...X,...Y,children:[i,dt?w.jsx(ee,{ref:pt,center:o,...L}):null]})});function N(t,e,n,s=!1){return Z(r=>(n&&n(r),s||t[e](r),!0))}const oe=c.createContext(void 0);function Ce(){return c.useContext(oe)}export{ye as B,oe as F,ot as T,Vt as _,Ce as a,Z as b,Wt as c,Me as m,ge as u};
