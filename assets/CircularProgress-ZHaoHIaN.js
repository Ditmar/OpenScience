import{r as M}from"./index-CJ_LmFaV.js";import{g as R,a as j,s as k,c as w,b as E,m as S,d as N}from"./ThemeSwitcher--BWGen-B.js";import{j as g}from"./jsx-runtime-BTJTZTIL.js";import{u as U,c as n,e as c}from"./ThemeProvider-CEXxklF6.js";function F(e){return R("MuiCircularProgress",e)}j("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const t=44,y=c.keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,h=c.keyframes`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`,I=typeof y!="string"?c.css`
        animation: ${y} 1.4s linear infinite;
      `:null,z=typeof h!="string"?c.css`
        animation: ${h} 1.4s ease-in-out infinite;
      `:null,A=e=>{const{classes:r,variant:s,color:a,disableShrink:l}=e,m={root:["root",s,`color${n(a)}`],svg:["svg"],circle:["circle",`circle${n(s)}`,l&&"circleDisableShrink"]};return E(m,F,r)},K=k("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:s}=e;return[r.root,r[s.variant],r[`color${n(s.color)}`]]}})(S(({theme:e})=>({display:"inline-block",variants:[{props:{variant:"determinate"},style:{transition:e.transitions.create("transform")}},{props:{variant:"indeterminate"},style:I||{animation:`${y} 1.4s linear infinite`}},...Object.entries(e.palette).filter(N()).map(([r])=>({props:{color:r},style:{color:(e.vars||e).palette[r].main}}))]}))),V=k("svg",{name:"MuiCircularProgress",slot:"Svg"})({display:"block"}),B=k("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,r)=>{const{ownerState:s}=e;return[r.circle,r[`circle${n(s.variant)}`],s.disableShrink&&r.circleDisableShrink]}})(S(({theme:e})=>({stroke:"currentColor",variants:[{props:{variant:"determinate"},style:{transition:e.transitions.create("stroke-dashoffset")}},{props:{variant:"indeterminate"},style:{strokeDasharray:"80px, 200px",strokeDashoffset:0}},{props:({ownerState:r})=>r.variant==="indeterminate"&&!r.disableShrink,style:z||{animation:`${h} 1.4s ease-in-out infinite`}}]}))),Z=M.forwardRef(function(r,s){const a=U({props:r,name:"MuiCircularProgress"}),{className:l,color:m="primary",disableShrink:$=!1,size:p=40,style:b,thickness:o=3.6,value:u=0,variant:v="indeterminate",...D}=a,i={...a,color:m,disableShrink:$,size:p,thickness:o,value:u,variant:v},d=A(i),f={},x={},C={};if(v==="determinate"){const P=2*Math.PI*((t-o)/2);f.strokeDasharray=P.toFixed(3),C["aria-valuenow"]=Math.round(u),f.strokeDashoffset=`${((100-u)/100*P).toFixed(3)}px`,x.transform="rotate(-90deg)"}return g.jsx(K,{className:w(d.root,l),style:{width:p,height:p,...x,...b},ownerState:i,ref:s,role:"progressbar",...C,...D,children:g.jsx(V,{className:d.svg,ownerState:i,viewBox:`${t/2} ${t/2} ${t} ${t}`,children:g.jsx(B,{className:d.circle,style:f,ownerState:i,cx:t,cy:t,r:(t-o)/2,fill:"none",strokeWidth:o})})})});export{Z as C};
