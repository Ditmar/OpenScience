var Bt=Object.defineProperty;var St=(t,n,e)=>n in t?Bt(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e;var X=(t,n,e)=>St(t,typeof n!="symbol"?n+"":n,e);import{r as u,a as K}from"./index-Cu9bd8lq.js";import{c as y,a as lt,s as Q,g as Dt,b as wt}from"./memoTheme-YdT_3XTA.js";import{j as k}from"./jsx-runtime-BlDnFLNC.js";import{u as ct}from"./DefaultPropsProvider-frsAjLWc.js";import{_ as Lt}from"./extends-CF3RwP-h.js";import{_ as Nt,a as jt}from"./assertThisInitialized-C1KLUksq.js";import{k as tt}from"./extendSxProp-Ct4RPgPj.js";import{u as it}from"./useForkRef-CXZ2Yisc.js";import{u as kt}from"./useEnhancedEffect-BAizwhs3.js";function G(t){const n=u.useRef(t);return kt(()=>{n.current=t}),u.useRef((...e)=>(0,n.current)(...e)).current}function vt(t,n){if(t==null)return{};var e={};for(var s in t)if({}.hasOwnProperty.call(t,s)){if(n.indexOf(s)!==-1)continue;e[s]=t[s]}return e}const st=K.createContext(null);function et(t,n){var e=function(r){return n&&u.isValidElement(r)?n(r):r},s=Object.create(null);return t&&u.Children.map(t,function(o){return o}).forEach(function(o){s[o.key]=e(o)}),s}function $t(t,n){t=t||{},n=n||{};function e(d){return d in n?n[d]:t[d]}var s=Object.create(null),o=[];for(var r in t)r in n?o.length&&(s[r]=o,o=[]):o.push(r);var i,p={};for(var l in n){if(s[l])for(i=0;i<s[l].length;i++){var f=s[l][i];p[s[l][i]]=e(f)}p[l]=e(l)}for(i=0;i<o.length;i++)p[o[i]]=e(o[i]);return p}function j(t,n,e){return e[n]!=null?e[n]:t.props[n]}function Ft(t,n){return et(t.children,function(e){return u.cloneElement(e,{onExited:n.bind(null,e),in:!0,appear:j(e,"appear",t),enter:j(e,"enter",t),exit:j(e,"exit",t)})})}function Ut(t,n,e){var s=et(t.children),o=$t(n,s);return Object.keys(o).forEach(function(r){var i=o[r];if(u.isValidElement(i)){var p=r in n,l=r in s,f=n[r],d=u.isValidElement(f)&&!f.props.in;l&&(!p||d)?o[r]=u.cloneElement(i,{onExited:e.bind(null,i),in:!0,exit:j(i,"exit",t),enter:j(i,"enter",t)}):!l&&p&&!d?o[r]=u.cloneElement(i,{in:!1}):l&&p&&u.isValidElement(f)&&(o[r]=u.cloneElement(i,{onExited:e.bind(null,i),in:f.props.in,exit:j(i,"exit",t),enter:j(i,"enter",t)}))}}),o}var Ot=Object.values||function(t){return Object.keys(t).map(function(n){return t[n]})},zt={component:"div",childFactory:function(n){return n}},nt=function(t){Nt(n,t);function n(s,o){var r;r=t.call(this,s,o)||this;var i=r.handleExited.bind(jt(r));return r.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},r}var e=n.prototype;return e.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},e.componentWillUnmount=function(){this.mounted=!1},n.getDerivedStateFromProps=function(o,r){var i=r.children,p=r.handleExited,l=r.firstRender;return{children:l?Ft(o,p):Ut(o,i,p),firstRender:!1}},e.handleExited=function(o,r){var i=et(this.props.children);o.key in i||(o.props.onExited&&o.props.onExited(r),this.mounted&&this.setState(function(p){var l=Lt({},p.children);return delete l[o.key],{children:l}}))},e.render=function(){var o=this.props,r=o.component,i=o.childFactory,p=vt(o,["component","childFactory"]),l=this.state.contextValue,f=Ot(this.state.children).map(i);return delete p.appear,delete p.enter,delete p.exit,r===null?K.createElement(st.Provider,{value:l},f):K.createElement(st.Provider,{value:l},K.createElement(r,p,f))},n}(K.Component);nt.propTypes={};nt.defaultProps=zt;const at={};function pt(t,n){const e=u.useRef(at);return e.current===at&&(e.current=t(n)),e}const At=[];function Yt(t){u.useEffect(t,At)}class ot{constructor(){X(this,"currentId",null);X(this,"clear",()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)});X(this,"disposeEffect",()=>this.clear)}static create(){return new ot}start(n,e){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,e()},n)}}function Xt(){const t=pt(ot.create).current;return Yt(t.disposeEffect),t}function ut(t){try{return t.matches(":focus-visible")}catch{}return!1}class q{constructor(){X(this,"mountEffect",()=>{this.shouldMount&&!this.didMount&&this.ref.current!==null&&(this.didMount=!0,this.mounted.resolve())});this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}static create(){return new q}static use(){const n=pt(q.create).current,[e,s]=u.useState(!1);return n.shouldMount=e,n.setShouldMount=s,u.useEffect(n.mountEffect,[e]),n}mount(){return this.mounted||(this.mounted=Wt(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}start(...n){this.mount().then(()=>{var e;return(e=this.ref.current)==null?void 0:e.start(...n)})}stop(...n){this.mount().then(()=>{var e;return(e=this.ref.current)==null?void 0:e.stop(...n)})}pulsate(...n){this.mount().then(()=>{var e;return(e=this.ref.current)==null?void 0:e.pulsate(...n)})}}function Kt(){return q.use()}function Wt(){let t,n;const e=new Promise((s,o)=>{t=s,n=o});return e.resolve=t,e.reject=n,e}function Ht(t){const{className:n,classes:e,pulsate:s=!1,rippleX:o,rippleY:r,rippleSize:i,in:p,onExited:l,timeout:f}=t,[d,h]=u.useState(!1),M=y(n,e.ripple,e.rippleVisible,s&&e.ripplePulsate),V={width:i,height:i,top:-(i/2)+r,left:-(i/2)+o},g=y(e.child,d&&e.childLeaving,s&&e.childPulsate);return!p&&!d&&h(!0),u.useEffect(()=>{if(!p&&l!=null){const D=setTimeout(l,f);return()=>{clearTimeout(D)}}},[l,p,f]),k.jsx("span",{className:M,style:V,children:k.jsx("span",{className:g})})}const b=lt("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),J=550,_t=80,Gt=tt`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,qt=tt`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,Zt=tt`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,Jt=Q("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),Qt=Q(Ht,{name:"MuiTouchRipple",slot:"Ripple"})`
  opacity: 0;
  position: absolute;

  &.${b.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${Gt};
    animation-duration: ${J}ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
  }

  &.${b.ripplePulsate} {
    animation-duration: ${({theme:t})=>t.transitions.duration.shorter}ms;
  }

  & .${b.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${b.childLeaving} {
    opacity: 0;
    animation-name: ${qt};
    animation-duration: ${J}ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
  }

  & .${b.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${Zt};
    animation-duration: 2500ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,te=u.forwardRef(function(n,e){const s=ct({props:n,name:"MuiTouchRipple"}),{center:o=!1,classes:r={},className:i,...p}=s,[l,f]=u.useState([]),d=u.useRef(0),h=u.useRef(null);u.useEffect(()=>{h.current&&(h.current(),h.current=null)},[l]);const M=u.useRef(!1),V=Xt(),g=u.useRef(null),D=u.useRef(null),C=u.useCallback(c=>{const{pulsate:E,rippleX:R,rippleY:F,rippleSize:w,cb:U}=c;f(x=>[...x,k.jsx(Qt,{classes:{ripple:y(r.ripple,b.ripple),rippleVisible:y(r.rippleVisible,b.rippleVisible),ripplePulsate:y(r.ripplePulsate,b.ripplePulsate),child:y(r.child,b.child),childLeaving:y(r.childLeaving,b.childLeaving),childPulsate:y(r.childPulsate,b.childPulsate)},timeout:J,pulsate:E,rippleX:R,rippleY:F,rippleSize:w},d.current)]),d.current+=1,h.current=U},[r]),v=u.useCallback((c={},E={},R=()=>{})=>{const{pulsate:F=!1,center:w=o||E.pulsate,fakeElement:U=!1}=E;if((c==null?void 0:c.type)==="mousedown"&&M.current){M.current=!1;return}(c==null?void 0:c.type)==="touchstart"&&(M.current=!0);const x=U?null:D.current,I=x?x.getBoundingClientRect():{width:0,height:0,left:0,top:0};let B,T,S;if(w||c===void 0||c.clientX===0&&c.clientY===0||!c.clientX&&!c.touches)B=Math.round(I.width/2),T=Math.round(I.height/2);else{const{clientX:O,clientY:L}=c.touches&&c.touches.length>0?c.touches[0]:c;B=Math.round(O-I.left),T=Math.round(L-I.top)}if(w)S=Math.sqrt((2*I.width**2+I.height**2)/3),S%2===0&&(S+=1);else{const O=Math.max(Math.abs((x?x.clientWidth:0)-B),B)*2+2,L=Math.max(Math.abs((x?x.clientHeight:0)-T),T)*2+2;S=Math.sqrt(O**2+L**2)}c!=null&&c.touches?g.current===null&&(g.current=()=>{C({pulsate:F,rippleX:B,rippleY:T,rippleSize:S,cb:R})},V.start(_t,()=>{g.current&&(g.current(),g.current=null)})):C({pulsate:F,rippleX:B,rippleY:T,rippleSize:S,cb:R})},[o,C,V]),W=u.useCallback(()=>{v({},{pulsate:!0})},[v]),$=u.useCallback((c,E)=>{if(V.clear(),(c==null?void 0:c.type)==="touchend"&&g.current){g.current(),g.current=null,V.start(0,()=>{$(c,E)});return}g.current=null,f(R=>R.length>0?R.slice(1):R),h.current=E},[V]);return u.useImperativeHandle(e,()=>({pulsate:W,start:v,stop:$}),[W,v,$]),k.jsx(Jt,{className:y(b.root,r.root,i),ref:D,...p,children:k.jsx(nt,{component:null,exit:!0,children:l})})});function ee(t){return Dt("MuiButtonBase",t)}const ne=lt("MuiButtonBase",["root","disabled","focusVisible"]),oe=t=>{const{disabled:n,focusVisible:e,focusVisibleClassName:s,classes:o}=t,i=wt({root:["root",n&&"disabled",e&&"focusVisible"]},ee,o);return e&&s&&(i.root+=` ${s}`),i},re=Q("button",{name:"MuiButtonBase",slot:"Root"})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${ne.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),me=u.forwardRef(function(n,e){const s=ct({props:n,name:"MuiButtonBase"}),{action:o,centerRipple:r=!1,children:i,className:p,component:l="button",disabled:f=!1,disableRipple:d=!1,disableTouchRipple:h=!1,focusRipple:M=!1,focusVisibleClassName:V,LinkComponent:g="a",onBlur:D,onClick:C,onContextMenu:v,onDragLeave:W,onFocus:$,onFocusVisible:c,onKeyDown:E,onKeyUp:R,onMouseDown:F,onMouseLeave:w,onMouseUp:U,onTouchEnd:x,onTouchMove:I,onTouchStart:B,tabIndex:T=0,TouchRippleProps:S,touchRippleRef:O,type:L,...z}=s,A=u.useRef(null),m=Kt(),ft=it(m.ref,O),[N,H]=u.useState(!1);f&&N&&H(!1),u.useImperativeHandle(o,()=>({focusVisible:()=>{H(!0),A.current.focus()}}),[]);const dt=m.shouldMount&&!d&&!f;u.useEffect(()=>{N&&M&&!d&&m.pulsate()},[d,M,N,m]);const ht=P(m,"start",F,h),mt=P(m,"stop",v,h),gt=P(m,"stop",W,h),bt=P(m,"stop",U,h),Mt=P(m,"stop",a=>{N&&a.preventDefault(),w&&w(a)},h),Rt=P(m,"start",B,h),Et=P(m,"stop",x,h),xt=P(m,"stop",I,h),yt=P(m,"stop",a=>{ut(a.target)||H(!1),D&&D(a)},!1),Ct=G(a=>{A.current||(A.current=a.currentTarget),ut(a.target)&&(H(!0),c&&c(a)),$&&$(a)}),Z=()=>{const a=A.current;return l&&l!=="button"&&!(a.tagName==="A"&&a.href)},Tt=G(a=>{M&&!a.repeat&&N&&a.key===" "&&m.stop(a,()=>{m.start(a)}),a.target===a.currentTarget&&Z()&&a.key===" "&&a.preventDefault(),E&&E(a),a.target===a.currentTarget&&Z()&&a.key==="Enter"&&!f&&(a.preventDefault(),C&&C(a))}),Pt=G(a=>{M&&a.key===" "&&N&&!a.defaultPrevented&&m.stop(a,()=>{m.pulsate(a)}),R&&R(a),C&&a.target===a.currentTarget&&Z()&&a.key===" "&&!a.defaultPrevented&&C(a)});let _=l;_==="button"&&(z.href||z.to)&&(_=g);const Y={};_==="button"?(Y.type=L===void 0?"button":L,Y.disabled=f):(!z.href&&!z.to&&(Y.role="button"),f&&(Y["aria-disabled"]=f));const Vt=it(e,A),rt={...s,centerRipple:r,component:l,disabled:f,disableRipple:d,disableTouchRipple:h,focusRipple:M,tabIndex:T,focusVisible:N},It=oe(rt);return k.jsxs(re,{as:_,className:y(It.root,p),ownerState:rt,onBlur:yt,onClick:C,onContextMenu:mt,onFocus:Ct,onKeyDown:Tt,onKeyUp:Pt,onMouseDown:ht,onMouseLeave:Mt,onMouseUp:bt,onDragLeave:gt,onTouchEnd:Et,onTouchMove:xt,onTouchStart:Rt,ref:Vt,tabIndex:f?-1:T,type:L,...Y,...z,children:[i,dt?k.jsx(te,{ref:ft,center:r,...S}):null]})});function P(t,n,e,s=!1){return G(o=>(e&&e(o),s||t[n](o),!0))}export{me as B,st as T,vt as _,Xt as a,G as u};
