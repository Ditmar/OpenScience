import{r as R}from"./index-BBkUAzwr.js";import{g as j,a as w,s as y,m as P,c as N,b as U,d as E}from"./useFormControl-CWljpuZP.js";import{j as f}from"./jsx-runtime-DRTy3Uxn.js";import{k as S,c as $,a as n,u as F}from"./DefaultPropsProvider-C0n_CHeP.js";function I(e){return j("MuiCircularProgress",e)}w("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const t=44,g=S`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,h=S`
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
`,z=typeof g!="string"?$`
        animation: ${g} 1.4s linear infinite;
      `:null,A=typeof h!="string"?$`
        animation: ${h} 1.4s ease-in-out infinite;
      `:null,K=e=>{const{classes:r,variant:s,color:a,disableShrink:c}=e,l={root:["root",s,`color${n(a)}`],svg:["svg"],circle:["circle",`circle${n(s)}`,c&&"circleDisableShrink"]};return E(l,I,r)},V=y("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:s}=e;return[r.root,r[s.variant],r[`color${n(s.color)}`]]}})(P(({theme:e})=>({display:"inline-block",variants:[{props:{variant:"determinate"},style:{transition:e.transitions.create("transform")}},{props:{variant:"indeterminate"},style:z||{animation:`${g} 1.4s linear infinite`}},...Object.entries(e.palette).filter(N()).map(([r])=>({props:{color:r},style:{color:(e.vars||e).palette[r].main}}))]}))),B=y("svg",{name:"MuiCircularProgress",slot:"Svg"})({display:"block"}),G=y("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,r)=>{const{ownerState:s}=e;return[r.circle,r[`circle${n(s.variant)}`],s.disableShrink&&r.circleDisableShrink]}})(P(({theme:e})=>({stroke:"currentColor",variants:[{props:{variant:"determinate"},style:{transition:e.transitions.create("stroke-dashoffset")}},{props:{variant:"indeterminate"},style:{strokeDasharray:"80px, 200px",strokeDashoffset:0}},{props:({ownerState:r})=>r.variant==="indeterminate"&&!r.disableShrink,style:A||{animation:`${h} 1.4s ease-in-out infinite`}}]}))),q=R.forwardRef(function(r,s){const a=F({props:r,name:"MuiCircularProgress"}),{className:c,color:l="primary",disableShrink:b=!1,size:m=40,style:D,thickness:i=3.6,value:p=0,variant:k="indeterminate",...M}=a,o={...a,color:l,disableShrink:b,size:m,thickness:i,value:p,variant:k},u=K(o),d={},v={},x={};if(k==="determinate"){const C=2*Math.PI*((t-i)/2);d.strokeDasharray=C.toFixed(3),x["aria-valuenow"]=Math.round(p),d.strokeDashoffset=`${((100-p)/100*C).toFixed(3)}px`,v.transform="rotate(-90deg)"}return f.jsx(V,{className:U(u.root,c),style:{width:m,height:m,...v,...D},ownerState:o,ref:s,role:"progressbar",...x,...M,children:f.jsx(B,{className:u.svg,ownerState:o,viewBox:`${t/2} ${t/2} ${t} ${t}`,children:f.jsx(G,{className:u.circle,style:d,ownerState:o,cx:t,cy:t,r:(t-i)/2,fill:"none",strokeWidth:i})})})});export{q as C};
