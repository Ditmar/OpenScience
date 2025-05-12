import{j as a}from"./jsx-runtime-BlDnFLNC.js";import{r as b}from"./index-Cu9bd8lq.js";function _({options:o,selectedValue:s,onChange:r,maxValue:v,barColor:y="#8a2be2",showPercentage:d=!0,className:w="",disabled:p=!1,isOpen:t,onToggle:l,displayFormat:A="both"}){const C=b.useRef(null),x=o.find(e=>e.value===s)??o[0],T=v??Math.max(...o.map(e=>e.stat),1);b.useEffect(function(){function n(S){C.current&&!C.current.contains(S.target)&&l()}return t&&document.addEventListener("mousedown",n),function(){document.removeEventListener("mousedown",n)}},[t,l]);function K(e,n){(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),r(n),l())}function O(e){const n=Math.round(e/T*100);switch(A){case"percentage":return`${n.toString()}%`;case"value":return e.toString();case"both":default:return`${e.toString()} (${n.toString()}%)`}}function z(e){return(e/T*100).toString()}return a.jsxs("div",{className:`dropdown-stats ${w} ${p?"disabled":""}`,ref:C,children:[a.jsx("button",{type:"button",className:"dropdown-stats__toggle",onClick:l,disabled:p,"aria-haspopup":"true","aria-expanded":t?"true":"false",children:a.jsxs("div",{className:"dropdown-stats__selected",children:[a.jsx("span",{className:"dropdown-stats__label",children:x.label}),a.jsxs("span",{className:"dropdown-stats__code",children:["(",x.code,")"]}),d&&a.jsx("span",{className:"dropdown-stats__stat",children:O(x.stat)})]})}),t&&a.jsx("ul",{className:"dropdown-stats__menu",role:"listbox",children:o.map(e=>a.jsxs("li",{className:`dropdown-stats__item ${s===e.value?"selected":""}`,onClick:()=>{r(e.value),l()},onKeyDown:n=>{K(n,e.value)},role:"option","aria-selected":s===e.value,tabIndex:0,children:[a.jsxs("div",{className:"dropdown-stats__item-content",children:[a.jsx("span",{className:"dropdown-stats__label",children:e.label}),a.jsxs("span",{className:"dropdown-stats__code",children:["(",e.code,")"]}),d&&a.jsx("span",{className:"dropdown-stats__stat",children:O(e.stat)})]}),a.jsx("div",{className:"dropdown-stats__progress-container",children:a.jsx("div",{className:"dropdown-stats__progress-bar",style:{width:`${z(e.stat)}%`,backgroundColor:y}})})]},e.value))})]})}_.__docgenInfo={description:"",methods:[],displayName:"DropdownStats",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"DropdownStatsOption"}],raw:"DropdownStatsOption[]"},description:""},selectedValue:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},maxValue:{required:!1,tsType:{name:"number"},description:""},barColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#8a2be2'",computed:!1}},showPercentage:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isOpen:{required:!0,tsType:{name:"boolean"},description:""},onToggle:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},displayFormat:{required:!1,tsType:{name:"union",raw:"'percentage' | 'value' | 'both'",elements:[{name:"literal",value:"'percentage'"},{name:"literal",value:"'value'"},{name:"literal",value:"'both'"}]},description:"",defaultValue:{value:"'both'",computed:!1}}}};const H={title:"ui/components/atoms/DropdownStats",component:_,argTypes:{barColor:{control:"color"},displayFormat:{options:["percentage","value","both"],control:{type:"select"}}}},i={render:function(s){const[r,v]=b.useState(!1),[y,d]=b.useState(s.options[0].value),w=t=>{d(t),s.onChange(t)},p=()=>{v(!r),s.onToggle()};return a.jsx(_,{options:s.options,selectedValue:y,onChange:w,isOpen:r,onToggle:p,disabled:s.disabled,barColor:s.barColor,showPercentage:s.showPercentage,displayFormat:s.displayFormat,maxValue:s.maxValue,className:s.className})}},c=[{label:"Argentina",value:"arg",code:"+54",stat:45},{label:"Brazil",value:"bra",code:"+55",stat:78},{label:"Chile",value:"chi",code:"+56",stat:32},{label:"Colombia",value:"col",code:"+57",stat:65},{label:"Mexico",value:"mex",code:"+52",stat:89}],u={...i,args:{options:c,showPercentage:!0,onChange:()=>{},onToggle:()=>{},isOpen:!1}},m={...i,args:{options:c.slice(0,3),barColor:"#ff5733",onChange:()=>{},onToggle:()=>{},isOpen:!1}},g={...i,args:{options:c.slice(0,3),displayFormat:"percentage",onChange:()=>{},onToggle:()=>{},isOpen:!1}},f={...i,args:{options:c.slice(0,3),displayFormat:"value",onChange:()=>{},onToggle:()=>{},isOpen:!1}},h={...i,args:{options:c.slice(0,2),disabled:!0,onChange:()=>{},onToggle:()=>{},isOpen:!1}};var N,j,D;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  ...Template,
  args: {
    options: sampleOptions,
    showPercentage: true,
    onChange: () => {},
    onToggle: () => {},
    isOpen: false
  }
}`,...(D=(j=u.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var V,q,k;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  ...Template,
  args: {
    options: sampleOptions.slice(0, 3),
    barColor: '#ff5733',
    onChange: () => {},
    onToggle: () => {},
    isOpen: false
  }
}`,...(k=(q=m.parameters)==null?void 0:q.docs)==null?void 0:k.source}}};var F,E,P;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
  ...Template,
  args: {
    options: sampleOptions.slice(0, 3),
    displayFormat: 'percentage',
    onChange: () => {},
    onToggle: () => {},
    isOpen: false
  }
}`,...(P=(E=g.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};var $,L,M;f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:`{
  ...Template,
  args: {
    options: sampleOptions.slice(0, 3),
    displayFormat: 'value',
    onChange: () => {},
    onToggle: () => {},
    isOpen: false
  }
}`,...(M=(L=f.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var I,R,W;h.parameters={...h.parameters,docs:{...(I=h.parameters)==null?void 0:I.docs,source:{originalSource:`{
  ...Template,
  args: {
    options: sampleOptions.slice(0, 2),
    disabled: true,
    onChange: () => {},
    onToggle: () => {},
    isOpen: false
  }
}`,...(W=(R=h.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};const J=["Default","WithCustomColor","PercentageOnly","ValueOnly","Disabled"];export{u as Default,h as Disabled,g as PercentageOnly,f as ValueOnly,m as WithCustomColor,J as __namedExportsOrder,H as default};
