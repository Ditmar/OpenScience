import{j as f}from"./jsx-runtime-DRTy3Uxn.js";import{g as C,r as b}from"./index-BBkUAzwr.js";import{I as w}from"./icons-DNNtq2Yd.js";var k={exports:{}};/* @preserve
    _____ __ _     __                _
   / ___// /(_)___/ /___  ____      (_)___
  / (_ // // // _  // -_)/ __/_    / /(_-<
  \___//_//_/ \_,_/ \__//_/  (_)__/ //___/
                              |___/

  Version: 1.7.4
  Author: Nick Piscitelli (pickykneee)
  Website: https://nickpiscitelli.com
  Documentation: http://nickpiscitelli.github.io/Glider.js
  License: MIT License
  Release Date: October 25th, 2018

*/(function(h,m){(function(c){h.exports=c()})(function(){var c=typeof window<"u"?window:this,p=c.Glider=function(e,i){var t=this;if(e._glider)return e._glider;if(t.ele=e,t.ele.classList.add("glider"),t.ele._glider=t,t.opt=Object.assign({},{slidesToScroll:1,slidesToShow:1,resizeLock:!0,duration:.5,passiveListeners:!1,easing:function(r,o,n,s,a){return s*(o/=a)*o+n}},i),t.animate_id=t.page=t.slide=0,t.arrows={},t._opt=t.opt,t.opt.skipTrack)t.track=t.ele.children[0];else for(t.track=document.createElement("div"),t.ele.appendChild(t.track);t.ele.children.length!==1;)t.track.appendChild(t.ele.children[0]);t.track.classList.add("glider-track"),t.init(),t.resize=t.init.bind(t,!0),t.event(t.ele,"add",{scroll:t.updateControls.bind(t)},{passive:t.opt.passiveListeners}),t.event(c,"add",{resize:t.resize})},l=p.prototype;return l.init=function(e,i){var t=this,r=0,o=0;t.slides=t.track.children,[].forEach.call(t.slides,function(a,u){a.classList.add("glider-slide"),a.setAttribute("data-gslide",u)}),t.containerWidth=t.ele.clientWidth;var n=t.settingsBreakpoint();if(i||(i=n),t.opt.slidesToShow==="auto"||typeof t.opt._autoSlide<"u"){var s=t.containerWidth/t.opt.itemWidth;t.opt._autoSlide=t.opt.slidesToShow=t.opt.exactWidth?s:Math.max(1,Math.floor(s))}t.opt.slidesToScroll==="auto"&&(t.opt.slidesToScroll=Math.floor(t.opt.slidesToShow)),t.itemWidth=t.opt.exactWidth?t.opt.itemWidth:t.containerWidth/t.opt.slidesToShow,[].forEach.call(t.slides,function(a){a.style.height="auto",a.style.width=t.itemWidth+"px",r+=t.itemWidth,o=Math.max(a.offsetHeight,o)}),t.track.style.width=r+"px",t.trackWidth=r,t.isDrag=!1,t.preventClick=!1,t.move=!1,t.opt.resizeLock&&t.scrollTo(t.slide*t.itemWidth,0),(n||i)&&(t.bindArrows(),t.buildDots(),t.bindDrag()),t.updateControls(),t.emit(e?"refresh":"loaded")},l.bindDrag=function(){var e=this;e.mouse=e.mouse||e.handleMouse.bind(e);var i=function(){e.mouseDown=void 0,e.ele.classList.remove("drag"),e.isDrag&&(e.preventClick=!0),e.isDrag=!1};const t=function(){e.move=!0};var r={mouseup:i,mouseleave:i,mousedown:function(o){o.preventDefault(),o.stopPropagation(),e.mouseDown=o.clientX,e.ele.classList.add("drag"),e.move=!1,setTimeout(t,300)},touchstart:function(o){e.ele.classList.add("drag"),e.move=!1,setTimeout(t,300)},mousemove:e.mouse,click:function(o){e.preventClick&&e.move&&(o.preventDefault(),o.stopPropagation()),e.preventClick=!1,e.move=!1}};e.ele.classList.toggle("draggable",e.opt.draggable===!0),e.event(e.ele,"remove",r),e.opt.draggable&&e.event(e.ele,"add",r,{passive:e.opt.passiveListeners})},l.buildDots=function(){var e=this;if(!e.opt.dots){e.dots&&(e.dots.innerHTML="");return}if(typeof e.opt.dots=="string"?e.dots=document.querySelector(e.opt.dots):e.dots=e.opt.dots,!!e.dots){e.dots.innerHTML="",e.dots.setAttribute("role","tablist"),e.dots.classList.add("glider-dots");for(var i=0;i<Math.ceil(e.slides.length/e.opt.slidesToShow);++i){var t=document.createElement("button");t.dataset.index=i,t.setAttribute("aria-label","Page "+(i+1)),t.setAttribute("role","tab"),t.className="glider-dot "+(i?"":"active"),e.event(t,"add",{click:e.scrollItem.bind(e,i,!0)}),e.dots.appendChild(t)}}},l.bindArrows=function(){var e=this;if(!e.opt.arrows){Object.keys(e.arrows).forEach(function(i){var t=e.arrows[i];e.event(t,"remove",{click:t._func})});return}["prev","next"].forEach(function(i){var t=e.opt.arrows[i];t&&(typeof t=="string"&&(t=document.querySelector(t)),t&&(t._func=t._func||e.scrollItem.bind(e,i),e.event(t,"remove",{click:t._func}),e.event(t,"add",{click:t._func}),e.arrows[i]=t))})},l.updateControls=function(e){var i=this;e&&!i.opt.scrollPropagate&&e.stopPropagation();var t=i.containerWidth>=i.trackWidth;i.opt.rewind||(i.arrows.prev&&(i.arrows.prev.classList.toggle("disabled",i.ele.scrollLeft<=0||t),i.arrows.prev.setAttribute("aria-disabled",i.arrows.prev.classList.contains("disabled"))),i.arrows.next&&(i.arrows.next.classList.toggle("disabled",Math.ceil(i.ele.scrollLeft+i.containerWidth)>=Math.floor(i.trackWidth)||t),i.arrows.next.setAttribute("aria-disabled",i.arrows.next.classList.contains("disabled")))),i.slide=Math.round(i.ele.scrollLeft/i.itemWidth),i.page=Math.round(i.ele.scrollLeft/i.containerWidth);var r=i.slide+Math.floor(Math.floor(i.opt.slidesToShow)/2),o=Math.floor(i.opt.slidesToShow)%2?0:r+1;Math.floor(i.opt.slidesToShow)===1&&(o=0),i.ele.scrollLeft+i.containerWidth>=Math.floor(i.trackWidth)&&(i.page=i.dots?i.dots.children.length-1:0),[].forEach.call(i.slides,function(n,s){var a=n.classList,u=a.contains("visible"),L=i.ele.scrollLeft,x=i.ele.scrollLeft+i.containerWidth,_=i.itemWidth*s,T=_+i.itemWidth;[].forEach.call(a,function(g){/^left|right/.test(g)&&a.remove(g)}),a.toggle("active",i.slide===s),r===s||o&&o===s?a.add("center"):(a.remove("center"),a.add([s<r?"left":"right",Math.abs(s-(s<r?r:o||r))].join("-")));var v=Math.ceil(_)>=Math.floor(L)&&Math.floor(T)<=Math.ceil(x);a.toggle("visible",v),v!==u&&i.emit("slide-"+(v?"visible":"hidden"),{slide:s})}),i.dots&&[].forEach.call(i.dots.children,function(n,s){n.classList.toggle("active",i.page===s)}),e&&i.opt.scrollLock&&(clearTimeout(i.scrollLock),i.scrollLock=setTimeout(function(){clearTimeout(i.scrollLock),Math.abs(i.ele.scrollLeft/i.itemWidth-i.slide)>.02&&(i.mouseDown||i.trackWidth>i.containerWidth+i.ele.scrollLeft&&i.scrollItem(i.getCurrentSlide()))},i.opt.scrollLockDelay||250))},l.getCurrentSlide=function(){var e=this;return e.round(e.ele.scrollLeft/e.itemWidth)},l.scrollItem=function(e,i,t){t&&t.preventDefault();var r=this,o=e;++r.animate_id;var n=r.slide,s;if(i===!0)e=Math.round(e*r.containerWidth/r.itemWidth),s=e*r.itemWidth;else{if(typeof e=="string"){var a=e==="prev";if(r.opt.slidesToScroll%1||r.opt.slidesToShow%1?e=r.getCurrentSlide():e=r.slide,a?e-=r.opt.slidesToScroll:e+=r.opt.slidesToScroll,r.opt.rewind){var u=r.ele.scrollLeft;e=a&&!u?r.slides.length:!a&&u+r.containerWidth>=Math.floor(r.trackWidth)?0:e}}e=Math.max(Math.min(e,r.slides.length),0),r.slide=e,s=r.itemWidth*e}return r.emit("scroll-item",{prevSlide:n,slide:e}),r.scrollTo(s,r.opt.duration*Math.abs(r.ele.scrollLeft-s),function(){r.updateControls(),r.emit("animated",{value:o,type:typeof o=="string"?"arrow":i?"dot":"slide"})}),!1},l.settingsBreakpoint=function(){var e=this,i=e._opt.responsive;if(i){i.sort(function(n,s){return s.breakpoint-n.breakpoint});for(var t=0;t<i.length;++t){var r=i[t];if(c.innerWidth>=r.breakpoint)return e.breakpoint!==r.breakpoint?(e.opt=Object.assign({},e._opt,r.settings),e.breakpoint=r.breakpoint,!0):!1}}var o=e.breakpoint!==0;return e.opt=Object.assign({},e._opt),e.breakpoint=0,o},l.scrollTo=function(e,i,t){var r=this,o=new Date().getTime(),n=r.animate_id,s=function(){var a=new Date().getTime()-o;r.ele.scrollLeft=r.ele.scrollLeft+(e-r.ele.scrollLeft)*r.opt.easing(0,a,0,1,i),a<i&&n===r.animate_id?c.requestAnimationFrame(s):(r.ele.scrollLeft=e,t&&t.call(r))};c.requestAnimationFrame(s)},l.removeItem=function(e){var i=this;i.slides.length&&(i.track.removeChild(i.slides[e]),i.refresh(!0),i.emit("remove"))},l.addItem=function(e){var i=this;i.track.appendChild(e),i.refresh(!0),i.emit("add")},l.handleMouse=function(e){var i=this;i.mouseDown&&(i.isDrag=!0,i.ele.scrollLeft+=(i.mouseDown-e.clientX)*(i.opt.dragVelocity||3.3),i.mouseDown=e.clientX)},l.round=function(e){var i=this,t=i.opt.slidesToScroll%1||1,r=1/t;return Math.round(e*r)/r},l.refresh=function(e){var i=this;i.init(!0,e)},l.setOption=function(e,i){var t=this;t.breakpoint&&!i?t._opt.responsive.forEach(function(r){r.breakpoint===t.breakpoint&&(r.settings=Object.assign({},r.settings,e))}):t._opt=Object.assign({},t._opt,e),t.breakpoint=0,t.settingsBreakpoint()},l.destroy=function(){var e=this,i=e.ele.cloneNode(!0),t=function(r){r.removeAttribute("style"),[].forEach.call(r.classList,function(o){/^glider/.test(o)&&r.classList.remove(o)})};e.opt.skipTrack||(i.children[0].outerHTML=i.children[0].innerHTML),t(i),[].forEach.call(i.getElementsByTagName("*"),t),e.ele.parentNode.replaceChild(i,e.ele),e.event(c,"remove",{resize:e.resize}),e.emit("destroy")},l.emit=function(e,i){var t=this,r=new c.CustomEvent("glider-"+e,{bubbles:!t.opt.eventPropagate,detail:i});t.ele.dispatchEvent(r)},l.event=function(e,i,t){var r=e[i+"EventListener"].bind(e);Object.keys(t).forEach(function(o){r(o,t[o])})},p})})(k);var M=k.exports;const W=C(M),y="_carousel__container_12xkc_1",S="_carousel__prev_12xkc_5",E="_carousel__next_12xkc_6",D="_carousel__list_12xkc_63",j="_carousel__item_12xkc_91",A="_thumbnail_12xkc_123",I="_labeldate_12xkc_151",N="_volume_12xkc_165",d={carousel__container:y,carousel__prev:S,carousel__next:E,carousel__list:D,carousel__item:j,thumbnail:A,labeldate:I,volume:N};function P(h){const{children:m,rightIcon:c,leftIcon:p}=h,l=b.useRef(null);return b.useEffect(()=>{l.current&&new W(l.current,{slidesToShow:3,slidesToScroll:3,draggable:!1,arrows:{prev:`.${d.carousel__prev}`,next:`.${d.carousel__next}`}})},[]),f.jsxs("div",{className:d.carousel__container,children:[f.jsx("button",{type:"button",className:d.carousel__prev,"aria-label":"Previous",children:p&&f.jsx(w,{"data-testid":"button-icon",src:p,className:d.button__icon})}),f.jsx("div",{className:d.carousel__list,ref:l,children:m}),f.jsx("button",{type:"button",className:d.carousel__next,"aria-label":"Next",children:c&&f.jsx(w,{"data-testid":"button-icon",src:c,className:d.button__icon})})]})}P.__docgenInfo={description:"",methods:[],displayName:"VolumeCarousel",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},rightIcon:{required:!1,tsType:{name:"string"},description:""},leftIcon:{required:!1,tsType:{name:"string"},description:""}}};const q=`<svg width="39" height="63" viewBox="0 0 39 63" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_805_160)">
<path d="M37.6446 0C25.306 10.3008 12.9653 20.6016 0 31.4258C12.7881 42.1127 25.2883 52.5553 37.7885 63C38.1916 62.6641 38.5969 62.3283 39 61.9924C33.8728 53.3077 28.9294 44.5096 23.5254 35.9972C21.4568 32.7388 21.3881 30.3986 23.4633 27.1162C28.863 18.5667 33.8152 9.74465 38.9468 1.03161C38.5127 0.689192 38.0787 0.344596 37.6446 0Z" fill="#0793BF"/>
</g>
<defs>
<clipPath id="clip0_805_160">
<rect width="39" height="63" fill="white" transform="matrix(-1 0 0 1 39 0)"/>
</clipPath>
</defs>
</svg>
`,H=`<svg width="51" height="63" viewBox="0 0 51 63" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_805_162)">
<path d="M1.7725 0C17.9075 10.3008 34.0454 20.6016 51 31.4258C34.2771 42.1127 17.9307 52.5553 1.58425 63C1.05713 62.6641 0.527117 62.3283 0 61.9924C6.70481 53.3077 13.1692 44.5096 20.2361 35.9972C22.9412 32.7388 23.031 30.3986 20.3172 27.1162C13.2561 18.5667 6.78011 9.74465 0.0695099 1.03161C0.637174 0.689192 1.20484 0.344596 1.7725 0Z" fill="#0793BF"/>
</g>
<defs>
<clipPath id="clip0_805_162">
<rect width="51" height="63" fill="white"/>
</clipPath>
</defs>
</svg>
`;export{q as L,H as R,P as V,d as s};