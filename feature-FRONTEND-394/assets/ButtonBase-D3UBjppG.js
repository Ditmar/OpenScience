var Bt=Object.defineProperty;var St=(t,e,n)=>e in t?Bt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var X=(t,e,n)=>St(t,typeof e!="symbol"?e+"":e,n);import{r as a,a as K}from"./index-Cu9bd8lq.js";import{c as x,a as lt,s as Q,g as Dt,b as wt}from"./memoTheme-DGz4p7xB.js";import{j}from"./jsx-runtime-BlDnFLNC.js";import{u as ct}from"./DefaultPropsProvider-A3_TUSBw.js";import{_ as Lt}from"./extends-CF3RwP-h.js";import{_ as kt,a as Nt}from"./assertThisInitialized-C1KLUksq.js";import{u as jt,k as tt}from"./useEnhancedEffect-DDdtgC7H.js";function G(t){const e=a.useRef(t);return jt(()=>{e.current=t}),a.useRef((...n)=>(0,e.current)(...n)).current}function it(...t){const e=a.useRef(void 0),n=a.useCallback(i=>{const o=t.map(r=>{if(r==null)return null;if(typeof r=="function"){const s=r,c=s(i);return typeof c=="function"?c:()=>{s(null)}}return r.current=i,()=>{r.current=null}});return()=>{o.forEach(r=>r==null?void 0:r())}},t);return a.useMemo(()=>t.every(i=>i==null)?null:i=>{e.current&&(e.current(),e.current=void 0),i!=null&&(e.current=n(i))},t)}function vt(t,e){if(t==null)return{};var n={};for(var i in t)if({}.hasOwnProperty.call(t,i)){if(e.indexOf(i)!==-1)continue;n[i]=t[i]}return n}const st=K.createContext(null);function et(t,e){var n=function(r){return e&&a.isValidElement(r)?e(r):r},i=Object.create(null);return t&&a.Children.map(t,function(o){return o}).forEach(function(o){i[o.key]=n(o)}),i}function $t(t,e){t=t||{},e=e||{};function n(d){return d in e?e[d]:t[d]}var i=Object.create(null),o=[];for(var r in t)r in e?o.length&&(i[r]=o,o=[]):o.push(r);var s,c={};for(var l in e){if(i[l])for(s=0;s<i[l].length;s++){var f=i[l][s];c[i[l][s]]=n(f)}c[l]=n(l)}for(s=0;s<o.length;s++)c[o[s]]=n(o[s]);return c}function N(t,e,n){return n[e]!=null?n[e]:t.props[e]}function Ft(t,e){return et(t.children,function(n){return a.cloneElement(n,{onExited:e.bind(null,n),in:!0,appear:N(n,"appear",t),enter:N(n,"enter",t),exit:N(n,"exit",t)})})}function Ut(t,e,n){var i=et(t.children),o=$t(e,i);return Object.keys(o).forEach(function(r){var s=o[r];if(a.isValidElement(s)){var c=r in e,l=r in i,f=e[r],d=a.isValidElement(f)&&!f.props.in;l&&(!c||d)?o[r]=a.cloneElement(s,{onExited:n.bind(null,s),in:!0,exit:N(s,"exit",t),enter:N(s,"enter",t)}):!l&&c&&!d?o[r]=a.cloneElement(s,{in:!1}):l&&c&&a.isValidElement(f)&&(o[r]=a.cloneElement(s,{onExited:n.bind(null,s),in:f.props.in,exit:N(s,"exit",t),enter:N(s,"enter",t)}))}}),o}var Ot=Object.values||function(t){return Object.keys(t).map(function(e){return t[e]})},zt={component:"div",childFactory:function(e){return e}},nt=function(t){kt(e,t);function e(i,o){var r;r=t.call(this,i,o)||this;var s=r.handleExited.bind(Nt(r));return r.state={contextValue:{isMounting:!0},handleExited:s,firstRender:!0},r}var n=e.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},e.getDerivedStateFromProps=function(o,r){var s=r.children,c=r.handleExited,l=r.firstRender;return{children:l?Ft(o,c):Ut(o,s,c),firstRender:!1}},n.handleExited=function(o,r){var s=et(this.props.children);o.key in s||(o.props.onExited&&o.props.onExited(r),this.mounted&&this.setState(function(c){var l=Lt({},c.children);return delete l[o.key],{children:l}}))},n.render=function(){var o=this.props,r=o.component,s=o.childFactory,c=vt(o,["component","childFactory"]),l=this.state.contextValue,f=Ot(this.state.children).map(s);return delete c.appear,delete c.enter,delete c.exit,r===null?K.createElement(st.Provider,{value:l},f):K.createElement(st.Provider,{value:l},K.createElement(r,c,f))},e}(K.Component);nt.propTypes={};nt.defaultProps=zt;const ut={};function pt(t,e){const n=a.useRef(ut);return n.current===ut&&(n.current=t(e)),n}const At=[];function Yt(t){a.useEffect(t,At)}class rt{constructor(){X(this,"currentId",null);X(this,"clear",()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)});X(this,"disposeEffect",()=>this.clear)}static create(){return new rt}start(e,n){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,n()},e)}}function Xt(){const t=pt(rt.create).current;return Yt(t.disposeEffect),t}function at(t){try{return t.matches(":focus-visible")}catch{}return!1}class q{constructor(){X(this,"mountEffect",()=>{this.shouldMount&&!this.didMount&&this.ref.current!==null&&(this.didMount=!0,this.mounted.resolve())});this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}static create(){return new q}static use(){const e=pt(q.create).current,[n,i]=a.useState(!1);return e.shouldMount=n,e.setShouldMount=i,a.useEffect(e.mountEffect,[n]),e}mount(){return this.mounted||(this.mounted=Wt(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}start(...e){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.start(...e)})}stop(...e){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.stop(...e)})}pulsate(...e){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.pulsate(...e)})}}function Kt(){return q.use()}function Wt(){let t,e;const n=new Promise((i,o)=>{t=i,e=o});return n.resolve=t,n.reject=e,n}function Ht(t){const{className:e,classes:n,pulsate:i=!1,rippleX:o,rippleY:r,rippleSize:s,in:c,onExited:l,timeout:f}=t,[d,h]=a.useState(!1),M=x(e,n.ripple,n.rippleVisible,i&&n.ripplePulsate),V={width:s,height:s,top:-(s/2)+r,left:-(s/2)+o},b=x(n.child,d&&n.childLeaving,i&&n.childPulsate);return!c&&!d&&h(!0),a.useEffect(()=>{if(!c&&l!=null){const D=setTimeout(l,f);return()=>{clearTimeout(D)}}},[l,c,f]),j.jsx("span",{className:M,style:V,children:j.jsx("span",{className:b})})}const g=lt("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),J=550,_t=80,Gt=tt`
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

  &.${g.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${Gt};
    animation-duration: ${J}ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
  }

  &.${g.ripplePulsate} {
    animation-duration: ${({theme:t})=>t.transitions.duration.shorter}ms;
  }

  & .${g.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${g.childLeaving} {
    opacity: 0;
    animation-name: ${qt};
    animation-duration: ${J}ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
  }

  & .${g.childPulsate} {
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
`,te=a.forwardRef(function(e,n){const i=ct({props:e,name:"MuiTouchRipple"}),{center:o=!1,classes:r={},className:s,...c}=i,[l,f]=a.useState([]),d=a.useRef(0),h=a.useRef(null);a.useEffect(()=>{h.current&&(h.current(),h.current=null)},[l]);const M=a.useRef(!1),V=Xt(),b=a.useRef(null),D=a.useRef(null),T=a.useCallback(p=>{const{pulsate:E,rippleX:R,rippleY:F,rippleSize:w,cb:U}=p;f(y=>[...y,j.jsx(Qt,{classes:{ripple:x(r.ripple,g.ripple),rippleVisible:x(r.rippleVisible,g.rippleVisible),ripplePulsate:x(r.ripplePulsate,g.ripplePulsate),child:x(r.child,g.child),childLeaving:x(r.childLeaving,g.childLeaving),childPulsate:x(r.childPulsate,g.childPulsate)},timeout:J,pulsate:E,rippleX:R,rippleY:F,rippleSize:w},d.current)]),d.current+=1,h.current=U},[r]),v=a.useCallback((p={},E={},R=()=>{})=>{const{pulsate:F=!1,center:w=o||E.pulsate,fakeElement:U=!1}=E;if((p==null?void 0:p.type)==="mousedown"&&M.current){M.current=!1;return}(p==null?void 0:p.type)==="touchstart"&&(M.current=!0);const y=U?null:D.current,I=y?y.getBoundingClientRect():{width:0,height:0,left:0,top:0};let B,C,S;if(w||p===void 0||p.clientX===0&&p.clientY===0||!p.clientX&&!p.touches)B=Math.round(I.width/2),C=Math.round(I.height/2);else{const{clientX:O,clientY:L}=p.touches&&p.touches.length>0?p.touches[0]:p;B=Math.round(O-I.left),C=Math.round(L-I.top)}if(w)S=Math.sqrt((2*I.width**2+I.height**2)/3),S%2===0&&(S+=1);else{const O=Math.max(Math.abs((y?y.clientWidth:0)-B),B)*2+2,L=Math.max(Math.abs((y?y.clientHeight:0)-C),C)*2+2;S=Math.sqrt(O**2+L**2)}p!=null&&p.touches?b.current===null&&(b.current=()=>{T({pulsate:F,rippleX:B,rippleY:C,rippleSize:S,cb:R})},V.start(_t,()=>{b.current&&(b.current(),b.current=null)})):T({pulsate:F,rippleX:B,rippleY:C,rippleSize:S,cb:R})},[o,T,V]),W=a.useCallback(()=>{v({},{pulsate:!0})},[v]),$=a.useCallback((p,E)=>{if(V.clear(),(p==null?void 0:p.type)==="touchend"&&b.current){b.current(),b.current=null,V.start(0,()=>{$(p,E)});return}b.current=null,f(R=>R.length>0?R.slice(1):R),h.current=E},[V]);return a.useImperativeHandle(n,()=>({pulsate:W,start:v,stop:$}),[W,v,$]),j.jsx(Jt,{className:x(g.root,r.root,s),ref:D,...c,children:j.jsx(nt,{component:null,exit:!0,children:l})})});function ee(t){return Dt("MuiButtonBase",t)}const ne=lt("MuiButtonBase",["root","disabled","focusVisible"]),re=t=>{const{disabled:e,focusVisible:n,focusVisibleClassName:i,classes:o}=t,s=wt({root:["root",e&&"disabled",n&&"focusVisible"]},ee,o);return n&&i&&(s.root+=` ${i}`),s},oe=Q("button",{name:"MuiButtonBase",slot:"Root"})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${ne.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),de=a.forwardRef(function(e,n){const i=ct({props:e,name:"MuiButtonBase"}),{action:o,centerRipple:r=!1,children:s,className:c,component:l="button",disabled:f=!1,disableRipple:d=!1,disableTouchRipple:h=!1,focusRipple:M=!1,focusVisibleClassName:V,LinkComponent:b="a",onBlur:D,onClick:T,onContextMenu:v,onDragLeave:W,onFocus:$,onFocusVisible:p,onKeyDown:E,onKeyUp:R,onMouseDown:F,onMouseLeave:w,onMouseUp:U,onTouchEnd:y,onTouchMove:I,onTouchStart:B,tabIndex:C=0,TouchRippleProps:S,touchRippleRef:O,type:L,...z}=i,A=a.useRef(null),m=Kt(),ft=it(m.ref,O),[k,H]=a.useState(!1);f&&k&&H(!1),a.useImperativeHandle(o,()=>({focusVisible:()=>{H(!0),A.current.focus()}}),[]);const dt=m.shouldMount&&!d&&!f;a.useEffect(()=>{k&&M&&!d&&m.pulsate()},[d,M,k,m]);const ht=P(m,"start",F,h),mt=P(m,"stop",v,h),bt=P(m,"stop",W,h),gt=P(m,"stop",U,h),Mt=P(m,"stop",u=>{k&&u.preventDefault(),w&&w(u)},h),Rt=P(m,"start",B,h),Et=P(m,"stop",y,h),yt=P(m,"stop",I,h),xt=P(m,"stop",u=>{at(u.target)||H(!1),D&&D(u)},!1),Tt=G(u=>{A.current||(A.current=u.currentTarget),at(u.target)&&(H(!0),p&&p(u)),$&&$(u)}),Z=()=>{const u=A.current;return l&&l!=="button"&&!(u.tagName==="A"&&u.href)},Ct=G(u=>{M&&!u.repeat&&k&&u.key===" "&&m.stop(u,()=>{m.start(u)}),u.target===u.currentTarget&&Z()&&u.key===" "&&u.preventDefault(),E&&E(u),u.target===u.currentTarget&&Z()&&u.key==="Enter"&&!f&&(u.preventDefault(),T&&T(u))}),Pt=G(u=>{M&&u.key===" "&&k&&!u.defaultPrevented&&m.stop(u,()=>{m.pulsate(u)}),R&&R(u),T&&u.target===u.currentTarget&&Z()&&u.key===" "&&!u.defaultPrevented&&T(u)});let _=l;_==="button"&&(z.href||z.to)&&(_=b);const Y={};_==="button"?(Y.type=L===void 0?"button":L,Y.disabled=f):(!z.href&&!z.to&&(Y.role="button"),f&&(Y["aria-disabled"]=f));const Vt=it(n,A),ot={...i,centerRipple:r,component:l,disabled:f,disableRipple:d,disableTouchRipple:h,focusRipple:M,tabIndex:C,focusVisible:k},It=re(ot);return j.jsxs(oe,{as:_,className:x(It.root,c),ownerState:ot,onBlur:xt,onClick:T,onContextMenu:mt,onFocus:Tt,onKeyDown:Ct,onKeyUp:Pt,onMouseDown:ht,onMouseLeave:Mt,onMouseUp:gt,onDragLeave:bt,onTouchEnd:Et,onTouchMove:yt,onTouchStart:Rt,ref:Vt,tabIndex:f?-1:C,type:L,...Y,...z,children:[s,dt?j.jsx(te,{ref:ft,center:r,...S}):null]})});function P(t,e,n,i=!1){return G(o=>(n&&n(o),i||t[e](o),!0))}export{de as B,st as T,vt as _,G as a,Xt as b,it as u};
