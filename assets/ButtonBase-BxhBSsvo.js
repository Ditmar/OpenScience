var Bt=Object.defineProperty;var Dt=(t,n,e)=>n in t?Bt(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e;var X=(t,n,e)=>Dt(t,typeof n!="symbol"?n+"":n,e);import{r as u,a as H}from"./index-Cu9bd8lq.js";import{T as St,z as wt,u as lt}from"./DefaultPropsProvider-BxfaeOB7.js";import{u as Lt,k as Q}from"./index-DgcOArS0.js";import{c as x,a as ct,s as tt,g as Nt,b as jt}from"./memoTheme-CiPN7tlW.js";import{j as k}from"./jsx-runtime-BlDnFLNC.js";import{_ as kt}from"./extends-CF3RwP-h.js";import{_ as vt,a as $t}from"./assertThisInitialized-C1KLUksq.js";import{u as st}from"./useForkRef-CXZ2Yisc.js";import{u as Ft}from"./useEnhancedEffect-BAizwhs3.js";function Me(){const t=Lt(wt);return t[St]||t}function G(t){const n=u.useRef(t);return Ft(()=>{n.current=t}),u.useRef((...e)=>(0,n.current)(...e)).current}function Ut(t,n){if(t==null)return{};var e={};for(var i in t)if({}.hasOwnProperty.call(t,i)){if(n.indexOf(i)!==-1)continue;e[i]=t[i]}return e}const it=H.createContext(null);function et(t,n){var e=function(r){return n&&u.isValidElement(r)?n(r):r},i=Object.create(null);return t&&u.Children.map(t,function(o){return o}).forEach(function(o){i[o.key]=e(o)}),i}function zt(t,n){t=t||{},n=n||{};function e(d){return d in n?n[d]:t[d]}var i=Object.create(null),o=[];for(var r in t)r in n?o.length&&(i[r]=o,o=[]):o.push(r);var s,p={};for(var l in n){if(i[l])for(s=0;s<i[l].length;s++){var f=i[l][s];p[i[l][s]]=e(f)}p[l]=e(l)}for(s=0;s<o.length;s++)p[o[s]]=e(o[s]);return p}function j(t,n,e){return e[n]!=null?e[n]:t.props[n]}function Ot(t,n){return et(t.children,function(e){return u.cloneElement(e,{onExited:n.bind(null,e),in:!0,appear:j(e,"appear",t),enter:j(e,"enter",t),exit:j(e,"exit",t)})})}function At(t,n,e){var i=et(t.children),o=zt(n,i);return Object.keys(o).forEach(function(r){var s=o[r];if(u.isValidElement(s)){var p=r in n,l=r in i,f=n[r],d=u.isValidElement(f)&&!f.props.in;l&&(!p||d)?o[r]=u.cloneElement(s,{onExited:e.bind(null,s),in:!0,exit:j(s,"exit",t),enter:j(s,"enter",t)}):!l&&p&&!d?o[r]=u.cloneElement(s,{in:!1}):l&&p&&u.isValidElement(f)&&(o[r]=u.cloneElement(s,{onExited:e.bind(null,s),in:f.props.in,exit:j(s,"exit",t),enter:j(s,"enter",t)}))}}),o}var Yt=Object.values||function(t){return Object.keys(t).map(function(n){return t[n]})},Xt={component:"div",childFactory:function(n){return n}},nt=function(t){vt(n,t);function n(i,o){var r;r=t.call(this,i,o)||this;var s=r.handleExited.bind($t(r));return r.state={contextValue:{isMounting:!0},handleExited:s,firstRender:!0},r}var e=n.prototype;return e.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},e.componentWillUnmount=function(){this.mounted=!1},n.getDerivedStateFromProps=function(o,r){var s=r.children,p=r.handleExited,l=r.firstRender;return{children:l?Ot(o,p):At(o,s,p),firstRender:!1}},e.handleExited=function(o,r){var s=et(this.props.children);o.key in s||(o.props.onExited&&o.props.onExited(r),this.mounted&&this.setState(function(p){var l=kt({},p.children);return delete l[o.key],{children:l}}))},e.render=function(){var o=this.props,r=o.component,s=o.childFactory,p=Ut(o,["component","childFactory"]),l=this.state.contextValue,f=Yt(this.state.children).map(s);return delete p.appear,delete p.enter,delete p.exit,r===null?H.createElement(it.Provider,{value:l},f):H.createElement(it.Provider,{value:l},H.createElement(r,p,f))},n}(H.Component);nt.propTypes={};nt.defaultProps=Xt;const at={};function pt(t,n){const e=u.useRef(at);return e.current===at&&(e.current=t(n)),e}const Ht=[];function Kt(t){u.useEffect(t,Ht)}class ot{constructor(){X(this,"currentId",null);X(this,"clear",()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)});X(this,"disposeEffect",()=>this.clear)}static create(){return new ot}start(n,e){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,e()},n)}}function Wt(){const t=pt(ot.create).current;return Kt(t.disposeEffect),t}function ut(t){try{return t.matches(":focus-visible")}catch{}return!1}class q{constructor(){X(this,"mountEffect",()=>{this.shouldMount&&!this.didMount&&this.ref.current!==null&&(this.didMount=!0,this.mounted.resolve())});this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}static create(){return new q}static use(){const n=pt(q.create).current,[e,i]=u.useState(!1);return n.shouldMount=e,n.setShouldMount=i,u.useEffect(n.mountEffect,[e]),n}mount(){return this.mounted||(this.mounted=Gt(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}start(...n){this.mount().then(()=>{var e;return(e=this.ref.current)==null?void 0:e.start(...n)})}stop(...n){this.mount().then(()=>{var e;return(e=this.ref.current)==null?void 0:e.stop(...n)})}pulsate(...n){this.mount().then(()=>{var e;return(e=this.ref.current)==null?void 0:e.pulsate(...n)})}}function _t(){return q.use()}function Gt(){let t,n;const e=new Promise((i,o)=>{t=i,n=o});return e.resolve=t,e.reject=n,e}function qt(t){const{className:n,classes:e,pulsate:i=!1,rippleX:o,rippleY:r,rippleSize:s,in:p,onExited:l,timeout:f}=t,[d,h]=u.useState(!1),M=x(n,e.ripple,e.rippleVisible,i&&e.ripplePulsate),I={width:s,height:s,top:-(s/2)+r,left:-(s/2)+o},g=x(e.child,d&&e.childLeaving,i&&e.childPulsate);return!p&&!d&&h(!0),u.useEffect(()=>{if(!p&&l!=null){const S=setTimeout(l,f);return()=>{clearTimeout(S)}}},[l,p,f]),k.jsx("span",{className:M,style:I,children:k.jsx("span",{className:g})})}const b=ct("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),J=550,Zt=80,Jt=Q`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,Qt=Q`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,te=Q`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,ee=tt("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),ne=tt(qt,{name:"MuiTouchRipple",slot:"Ripple"})`
  opacity: 0;
  position: absolute;

  &.${b.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${Jt};
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
    animation-name: ${Qt};
    animation-duration: ${J}ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
  }

  & .${b.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${te};
    animation-duration: 2500ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,oe=u.forwardRef(function(n,e){const i=lt({props:n,name:"MuiTouchRipple"}),{center:o=!1,classes:r={},className:s,...p}=i,[l,f]=u.useState([]),d=u.useRef(0),h=u.useRef(null);u.useEffect(()=>{h.current&&(h.current(),h.current=null)},[l]);const M=u.useRef(!1),I=Wt(),g=u.useRef(null),S=u.useRef(null),y=u.useCallback(c=>{const{pulsate:R,rippleX:E,rippleY:F,rippleSize:w,cb:U}=c;f(T=>[...T,k.jsx(ne,{classes:{ripple:x(r.ripple,b.ripple),rippleVisible:x(r.rippleVisible,b.rippleVisible),ripplePulsate:x(r.ripplePulsate,b.ripplePulsate),child:x(r.child,b.child),childLeaving:x(r.childLeaving,b.childLeaving),childPulsate:x(r.childPulsate,b.childPulsate)},timeout:J,pulsate:R,rippleX:E,rippleY:F,rippleSize:w},d.current)]),d.current+=1,h.current=U},[r]),v=u.useCallback((c={},R={},E=()=>{})=>{const{pulsate:F=!1,center:w=o||R.pulsate,fakeElement:U=!1}=R;if((c==null?void 0:c.type)==="mousedown"&&M.current){M.current=!1;return}(c==null?void 0:c.type)==="touchstart"&&(M.current=!0);const T=U?null:S.current,V=T?T.getBoundingClientRect():{width:0,height:0,left:0,top:0};let B,C,D;if(w||c===void 0||c.clientX===0&&c.clientY===0||!c.clientX&&!c.touches)B=Math.round(V.width/2),C=Math.round(V.height/2);else{const{clientX:z,clientY:L}=c.touches&&c.touches.length>0?c.touches[0]:c;B=Math.round(z-V.left),C=Math.round(L-V.top)}if(w)D=Math.sqrt((2*V.width**2+V.height**2)/3),D%2===0&&(D+=1);else{const z=Math.max(Math.abs((T?T.clientWidth:0)-B),B)*2+2,L=Math.max(Math.abs((T?T.clientHeight:0)-C),C)*2+2;D=Math.sqrt(z**2+L**2)}c!=null&&c.touches?g.current===null&&(g.current=()=>{y({pulsate:F,rippleX:B,rippleY:C,rippleSize:D,cb:E})},I.start(Zt,()=>{g.current&&(g.current(),g.current=null)})):y({pulsate:F,rippleX:B,rippleY:C,rippleSize:D,cb:E})},[o,y,I]),K=u.useCallback(()=>{v({},{pulsate:!0})},[v]),$=u.useCallback((c,R)=>{if(I.clear(),(c==null?void 0:c.type)==="touchend"&&g.current){g.current(),g.current=null,I.start(0,()=>{$(c,R)});return}g.current=null,f(E=>E.length>0?E.slice(1):E),h.current=R},[I]);return u.useImperativeHandle(e,()=>({pulsate:K,start:v,stop:$}),[K,v,$]),k.jsx(ee,{className:x(b.root,r.root,s),ref:S,...p,children:k.jsx(nt,{component:null,exit:!0,children:l})})});function re(t){return Nt("MuiButtonBase",t)}const se=ct("MuiButtonBase",["root","disabled","focusVisible"]),ie=t=>{const{disabled:n,focusVisible:e,focusVisibleClassName:i,classes:o}=t,s=jt({root:["root",n&&"disabled",e&&"focusVisible"]},re,o);return e&&i&&(s.root+=` ${i}`),s},ae=tt("button",{name:"MuiButtonBase",slot:"Root"})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${se.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),Ee=u.forwardRef(function(n,e){const i=lt({props:n,name:"MuiButtonBase"}),{action:o,centerRipple:r=!1,children:s,className:p,component:l="button",disabled:f=!1,disableRipple:d=!1,disableTouchRipple:h=!1,focusRipple:M=!1,focusVisibleClassName:I,LinkComponent:g="a",onBlur:S,onClick:y,onContextMenu:v,onDragLeave:K,onFocus:$,onFocusVisible:c,onKeyDown:R,onKeyUp:E,onMouseDown:F,onMouseLeave:w,onMouseUp:U,onTouchEnd:T,onTouchMove:V,onTouchStart:B,tabIndex:C=0,TouchRippleProps:D,touchRippleRef:z,type:L,...O}=i,A=u.useRef(null),m=_t(),ft=st(m.ref,z),[N,W]=u.useState(!1);f&&N&&W(!1),u.useImperativeHandle(o,()=>({focusVisible:()=>{W(!0),A.current.focus()}}),[]);const dt=m.shouldMount&&!d&&!f;u.useEffect(()=>{N&&M&&!d&&m.pulsate()},[d,M,N,m]);const ht=P(m,"start",F,h),mt=P(m,"stop",v,h),gt=P(m,"stop",K,h),bt=P(m,"stop",U,h),Mt=P(m,"stop",a=>{N&&a.preventDefault(),w&&w(a)},h),Et=P(m,"start",B,h),Rt=P(m,"stop",T,h),Tt=P(m,"stop",V,h),xt=P(m,"stop",a=>{ut(a.target)||W(!1),S&&S(a)},!1),yt=G(a=>{A.current||(A.current=a.currentTarget),ut(a.target)&&(W(!0),c&&c(a)),$&&$(a)}),Z=()=>{const a=A.current;return l&&l!=="button"&&!(a.tagName==="A"&&a.href)},Ct=G(a=>{M&&!a.repeat&&N&&a.key===" "&&m.stop(a,()=>{m.start(a)}),a.target===a.currentTarget&&Z()&&a.key===" "&&a.preventDefault(),R&&R(a),a.target===a.currentTarget&&Z()&&a.key==="Enter"&&!f&&(a.preventDefault(),y&&y(a))}),Pt=G(a=>{M&&a.key===" "&&N&&!a.defaultPrevented&&m.stop(a,()=>{m.pulsate(a)}),E&&E(a),y&&a.target===a.currentTarget&&Z()&&a.key===" "&&!a.defaultPrevented&&y(a)});let _=l;_==="button"&&(O.href||O.to)&&(_=g);const Y={};_==="button"?(Y.type=L===void 0?"button":L,Y.disabled=f):(!O.href&&!O.to&&(Y.role="button"),f&&(Y["aria-disabled"]=f));const It=st(e,A),rt={...i,centerRipple:r,component:l,disabled:f,disableRipple:d,disableTouchRipple:h,focusRipple:M,tabIndex:C,focusVisible:N},Vt=ie(rt);return k.jsxs(ae,{as:_,className:x(Vt.root,p),ownerState:rt,onBlur:xt,onClick:y,onContextMenu:mt,onFocus:yt,onKeyDown:Ct,onKeyUp:Pt,onMouseDown:ht,onMouseLeave:Mt,onMouseUp:bt,onDragLeave:gt,onTouchEnd:Rt,onTouchMove:Tt,onTouchStart:Et,ref:It,tabIndex:f?-1:C,type:L,...Y,...O,children:[s,dt?k.jsx(oe,{ref:ft,center:r,...D}):null]})});function P(t,n,e,i=!1){return G(o=>(e&&e(o),i||t[n](o),!0))}export{Ee as B,it as T,Ut as _,G as a,Wt as b,Me as u};
