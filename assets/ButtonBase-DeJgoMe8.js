var Dt=Object.defineProperty;var wt=(t,e,n)=>e in t?Dt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var X=(t,e,n)=>wt(t,typeof e!="symbol"?e+"":e,n);import{R as Lt,r as u,a as K}from"./index-Cu9bd8lq.js";import{c as x,g as pt,s as Q,a as Nt,b as jt}from"./memoTheme-BFdHFkG0.js";import{j as k}from"./jsx-runtime-BlDnFLNC.js";import{u as ft}from"./DefaultPropsProvider-CHU7PLwy.js";import{_ as kt}from"./extends-CF3RwP-h.js";import{_ as $t,a as vt}from"./assertThisInitialized-C1KLUksq.js";import{k as tt}from"./index-C0U-8-bv.js";import{a as rt}from"./useSlot-DrFBkZw4.js";import{u as Ut}from"./useEnhancedEffect-BAizwhs3.js";let it=0;function Ft(t){const[e,n]=u.useState(t),r=t||e;return u.useEffect(()=>{e==null&&(it+=1,n(`mui-${it}`))},[e]),r}const zt={...Lt},at=zt.useId;function Ee(t){if(at!==void 0){const e=at();return t??e}return Ft(t)}function G(t){const e=u.useRef(t);return Ut(()=>{e.current=t}),u.useRef((...n)=>(0,e.current)(...n)).current}function Ot(t,e){if(t==null)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.indexOf(r)!==-1)continue;n[r]=t[r]}return n}const ut=K.createContext(null);function et(t,e){var n=function(s){return e&&u.isValidElement(s)?e(s):s},r=Object.create(null);return t&&u.Children.map(t,function(o){return o}).forEach(function(o){r[o.key]=n(o)}),r}function At(t,e){t=t||{},e=e||{};function n(d){return d in e?e[d]:t[d]}var r=Object.create(null),o=[];for(var s in t)s in e?o.length&&(r[s]=o,o=[]):o.push(s);var i,p={};for(var l in e){if(r[l])for(i=0;i<r[l].length;i++){var f=r[l][i];p[r[l][i]]=n(f)}p[l]=n(l)}for(i=0;i<o.length;i++)p[o[i]]=n(o[i]);return p}function j(t,e,n){return n[e]!=null?n[e]:t.props[e]}function Yt(t,e){return et(t.children,function(n){return u.cloneElement(n,{onExited:e.bind(null,n),in:!0,appear:j(n,"appear",t),enter:j(n,"enter",t),exit:j(n,"exit",t)})})}function Xt(t,e,n){var r=et(t.children),o=At(e,r);return Object.keys(o).forEach(function(s){var i=o[s];if(u.isValidElement(i)){var p=s in e,l=s in r,f=e[s],d=u.isValidElement(f)&&!f.props.in;l&&(!p||d)?o[s]=u.cloneElement(i,{onExited:n.bind(null,i),in:!0,exit:j(i,"exit",t),enter:j(i,"enter",t)}):!l&&p&&!d?o[s]=u.cloneElement(i,{in:!1}):l&&p&&u.isValidElement(f)&&(o[s]=u.cloneElement(i,{onExited:n.bind(null,i),in:f.props.in,exit:j(i,"exit",t),enter:j(i,"enter",t)}))}}),o}var Kt=Object.values||function(t){return Object.keys(t).map(function(e){return t[e]})},Wt={component:"div",childFactory:function(e){return e}},nt=function(t){$t(e,t);function e(r,o){var s;s=t.call(this,r,o)||this;var i=s.handleExited.bind(vt(s));return s.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},s}var n=e.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},e.getDerivedStateFromProps=function(o,s){var i=s.children,p=s.handleExited,l=s.firstRender;return{children:l?Yt(o,p):Xt(o,i,p),firstRender:!1}},n.handleExited=function(o,s){var i=et(this.props.children);o.key in i||(o.props.onExited&&o.props.onExited(s),this.mounted&&this.setState(function(p){var l=kt({},p.children);return delete l[o.key],{children:l}}))},n.render=function(){var o=this.props,s=o.component,i=o.childFactory,p=Ot(o,["component","childFactory"]),l=this.state.contextValue,f=Kt(this.state.children).map(i);return delete p.appear,delete p.enter,delete p.exit,s===null?K.createElement(ut.Provider,{value:l},f):K.createElement(ut.Provider,{value:l},K.createElement(s,p,f))},e}(K.Component);nt.propTypes={};nt.defaultProps=Wt;const lt={};function dt(t,e){const n=u.useRef(lt);return n.current===lt&&(n.current=t(e)),n}const Ht=[];function _t(t){u.useEffect(t,Ht)}class ot{constructor(){X(this,"currentId",null);X(this,"clear",()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)});X(this,"disposeEffect",()=>this.clear)}static create(){return new ot}start(e,n){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,n()},e)}}function Gt(){const t=dt(ot.create).current;return _t(t.disposeEffect),t}function ct(t){try{return t.matches(":focus-visible")}catch{}return!1}class q{constructor(){X(this,"mountEffect",()=>{this.shouldMount&&!this.didMount&&this.ref.current!==null&&(this.didMount=!0,this.mounted.resolve())});this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}static create(){return new q}static use(){const e=dt(q.create).current,[n,r]=u.useState(!1);return e.shouldMount=n,e.setShouldMount=r,u.useEffect(e.mountEffect,[n]),e}mount(){return this.mounted||(this.mounted=Zt(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}start(...e){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.start(...e)})}stop(...e){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.stop(...e)})}pulsate(...e){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.pulsate(...e)})}}function qt(){return q.use()}function Zt(){let t,e;const n=new Promise((r,o)=>{t=r,e=o});return n.resolve=t,n.reject=e,n}function Jt(t){const{className:e,classes:n,pulsate:r=!1,rippleX:o,rippleY:s,rippleSize:i,in:p,onExited:l,timeout:f}=t,[d,h]=u.useState(!1),M=x(e,n.ripple,n.rippleVisible,r&&n.ripplePulsate),P={width:i,height:i,top:-(i/2)+s,left:-(i/2)+o},b=x(n.child,d&&n.childLeaving,r&&n.childPulsate);return!p&&!d&&h(!0),u.useEffect(()=>{if(!p&&l!=null){const D=setTimeout(l,f);return()=>{clearTimeout(D)}}},[l,p,f]),k.jsx("span",{className:M,style:P,children:k.jsx("span",{className:b})})}const g=pt("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),J=550,Qt=80,te=tt`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,ee=tt`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,ne=tt`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,oe=Q("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),se=Q(Jt,{name:"MuiTouchRipple",slot:"Ripple"})`
  opacity: 0;
  position: absolute;

  &.${g.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${te};
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
    animation-name: ${ee};
    animation-duration: ${J}ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
  }

  & .${g.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${ne};
    animation-duration: 2500ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,re=u.forwardRef(function(e,n){const r=ft({props:e,name:"MuiTouchRipple"}),{center:o=!1,classes:s={},className:i,...p}=r,[l,f]=u.useState([]),d=u.useRef(0),h=u.useRef(null);u.useEffect(()=>{h.current&&(h.current(),h.current=null)},[l]);const M=u.useRef(!1),P=Gt(),b=u.useRef(null),D=u.useRef(null),C=u.useCallback(c=>{const{pulsate:E,rippleX:R,rippleY:U,rippleSize:w,cb:F}=c;f(y=>[...y,k.jsx(se,{classes:{ripple:x(s.ripple,g.ripple),rippleVisible:x(s.rippleVisible,g.rippleVisible),ripplePulsate:x(s.ripplePulsate,g.ripplePulsate),child:x(s.child,g.child),childLeaving:x(s.childLeaving,g.childLeaving),childPulsate:x(s.childPulsate,g.childPulsate)},timeout:J,pulsate:E,rippleX:R,rippleY:U,rippleSize:w},d.current)]),d.current+=1,h.current=F},[s]),$=u.useCallback((c={},E={},R=()=>{})=>{const{pulsate:U=!1,center:w=o||E.pulsate,fakeElement:F=!1}=E;if((c==null?void 0:c.type)==="mousedown"&&M.current){M.current=!1;return}(c==null?void 0:c.type)==="touchstart"&&(M.current=!0);const y=F?null:D.current,V=y?y.getBoundingClientRect():{width:0,height:0,left:0,top:0};let S,T,B;if(w||c===void 0||c.clientX===0&&c.clientY===0||!c.clientX&&!c.touches)S=Math.round(V.width/2),T=Math.round(V.height/2);else{const{clientX:z,clientY:L}=c.touches&&c.touches.length>0?c.touches[0]:c;S=Math.round(z-V.left),T=Math.round(L-V.top)}if(w)B=Math.sqrt((2*V.width**2+V.height**2)/3),B%2===0&&(B+=1);else{const z=Math.max(Math.abs((y?y.clientWidth:0)-S),S)*2+2,L=Math.max(Math.abs((y?y.clientHeight:0)-T),T)*2+2;B=Math.sqrt(z**2+L**2)}c!=null&&c.touches?b.current===null&&(b.current=()=>{C({pulsate:U,rippleX:S,rippleY:T,rippleSize:B,cb:R})},P.start(Qt,()=>{b.current&&(b.current(),b.current=null)})):C({pulsate:U,rippleX:S,rippleY:T,rippleSize:B,cb:R})},[o,C,P]),W=u.useCallback(()=>{$({},{pulsate:!0})},[$]),v=u.useCallback((c,E)=>{if(P.clear(),(c==null?void 0:c.type)==="touchend"&&b.current){b.current(),b.current=null,P.start(0,()=>{v(c,E)});return}b.current=null,f(R=>R.length>0?R.slice(1):R),h.current=E},[P]);return u.useImperativeHandle(n,()=>({pulsate:W,start:$,stop:v}),[W,$,v]),k.jsx(oe,{className:x(g.root,s.root,i),ref:D,...p,children:k.jsx(nt,{component:null,exit:!0,children:l})})});function ie(t){return Nt("MuiButtonBase",t)}const ae=pt("MuiButtonBase",["root","disabled","focusVisible"]),ue=t=>{const{disabled:e,focusVisible:n,focusVisibleClassName:r,classes:o}=t,i=jt({root:["root",e&&"disabled",n&&"focusVisible"]},ie,o);return n&&r&&(i.root+=` ${r}`),i},le=Q("button",{name:"MuiButtonBase",slot:"Root"})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${ae.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),ye=u.forwardRef(function(e,n){const r=ft({props:e,name:"MuiButtonBase"}),{action:o,centerRipple:s=!1,children:i,className:p,component:l="button",disabled:f=!1,disableRipple:d=!1,disableTouchRipple:h=!1,focusRipple:M=!1,focusVisibleClassName:P,LinkComponent:b="a",onBlur:D,onClick:C,onContextMenu:$,onDragLeave:W,onFocus:v,onFocusVisible:c,onKeyDown:E,onKeyUp:R,onMouseDown:U,onMouseLeave:w,onMouseUp:F,onTouchEnd:y,onTouchMove:V,onTouchStart:S,tabIndex:T=0,TouchRippleProps:B,touchRippleRef:z,type:L,...O}=r,A=u.useRef(null),m=qt(),ht=rt(m.ref,z),[N,H]=u.useState(!1);f&&N&&H(!1),u.useImperativeHandle(o,()=>({focusVisible:()=>{H(!0),A.current.focus()}}),[]);const mt=m.shouldMount&&!d&&!f;u.useEffect(()=>{N&&M&&!d&&m.pulsate()},[d,M,N,m]);const bt=I(m,"start",U,h),gt=I(m,"stop",$,h),Mt=I(m,"stop",W,h),Rt=I(m,"stop",F,h),Et=I(m,"stop",a=>{N&&a.preventDefault(),w&&w(a)},h),yt=I(m,"start",S,h),xt=I(m,"stop",y,h),Ct=I(m,"stop",V,h),Tt=I(m,"stop",a=>{ct(a.target)||H(!1),D&&D(a)},!1),It=G(a=>{A.current||(A.current=a.currentTarget),ct(a.target)&&(H(!0),c&&c(a)),v&&v(a)}),Z=()=>{const a=A.current;return l&&l!=="button"&&!(a.tagName==="A"&&a.href)},Pt=G(a=>{M&&!a.repeat&&N&&a.key===" "&&m.stop(a,()=>{m.start(a)}),a.target===a.currentTarget&&Z()&&a.key===" "&&a.preventDefault(),E&&E(a),a.target===a.currentTarget&&Z()&&a.key==="Enter"&&!f&&(a.preventDefault(),C&&C(a))}),Vt=G(a=>{M&&a.key===" "&&N&&!a.defaultPrevented&&m.stop(a,()=>{m.pulsate(a)}),R&&R(a),C&&a.target===a.currentTarget&&Z()&&a.key===" "&&!a.defaultPrevented&&C(a)});let _=l;_==="button"&&(O.href||O.to)&&(_=b);const Y={};_==="button"?(Y.type=L===void 0?"button":L,Y.disabled=f):(!O.href&&!O.to&&(Y.role="button"),f&&(Y["aria-disabled"]=f));const St=rt(n,A),st={...r,centerRipple:s,component:l,disabled:f,disableRipple:d,disableTouchRipple:h,focusRipple:M,tabIndex:T,focusVisible:N},Bt=ue(st);return k.jsxs(le,{as:_,className:x(Bt.root,p),ownerState:st,onBlur:Tt,onClick:C,onContextMenu:gt,onFocus:It,onKeyDown:Pt,onKeyUp:Vt,onMouseDown:bt,onMouseLeave:Et,onMouseUp:Rt,onDragLeave:Mt,onTouchEnd:xt,onTouchMove:Ct,onTouchStart:yt,ref:St,tabIndex:f?-1:T,type:L,...Y,...O,children:[i,mt?k.jsx(re,{ref:ht,center:s,...B}):null]})});function I(t,e,n,r=!1){return G(o=>(n&&n(o),r||t[e](o),!0))}export{ye as B,ut as T,Ot as _,G as a,Gt as b,Ee as u};
