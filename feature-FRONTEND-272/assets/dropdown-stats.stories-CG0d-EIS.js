import{j as a}from"./jsx-runtime-BlDnFLNC.js";import{r as h}from"./index-Cu9bd8lq.js";const G="_disabled_qw9wg_133",H="_selected_qw9wg_199",s={"dropdown-stats":"_dropdown-stats_qw9wg_127",disabled:G,"dropdown-stats__toggle":"_dropdown-stats__toggle_qw9wg_137","dropdown-stats__selected":"_dropdown-stats__selected_qw9wg_156","dropdown-stats__label":"_dropdown-stats__label_qw9wg_162","dropdown-stats__code":"_dropdown-stats__code_qw9wg_167","dropdown-stats__stat":"_dropdown-stats__stat_qw9wg_171","dropdown-stats__menu":"_dropdown-stats__menu_qw9wg_175","dropdown-stats__item":"_dropdown-stats__item_qw9wg_191",selected:H,"dropdown-stats__item-content":"_dropdown-stats__item-content_qw9wg_212","dropdown-stats__progress-container":"_dropdown-stats__progress-container_qw9wg_218","dropdown-stats__progress-bar":"_dropdown-stats__progress-bar_qw9wg_225"};function T({options:r,selectedValue:t,onChange:l,maxValue:b,barColor:v,showPercentage:p=!0,className:y="",disabled:u=!1,isOpen:o,onToggle:d,displayFormat:K="both"}){const x=h.useRef(null),C=r.find(e=>e.value===t)??r[0],O=b??Math.max(...r.map(e=>e.stat),1);h.useEffect(()=>{function e(n){x.current&&!x.current.contains(n.target)&&d()}return o&&document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[o,d]);function L(e,n){(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),l(n),d())}function q(e){const n=Math.round(e/O*100);switch(K){case"percentage":return`${n.toString()}%`;case"value":return e.toString();case"both":default:return`${e.toString()} (${n.toString()}%)`}}function z(e){return(e/O*100).toString()}return a.jsxs("div",{className:`${s["dropdown-stats"]} ${y} ${u?s.disabled:""}`,ref:x,children:[a.jsx("button",{type:"button",className:s["dropdown-stats__toggle"],onClick:d,disabled:u,"aria-haspopup":"true","aria-expanded":o?"true":"false",children:a.jsxs("div",{className:s["dropdown-stats__selected"],children:[a.jsx("span",{className:s["dropdown-stats__label"],children:C.label}),a.jsxs("span",{className:s["dropdown-stats__code"],children:["(",C.code,")"]}),p&&a.jsx("span",{className:s["dropdown-stats__stat"],children:q(C.stat)})]})}),o&&a.jsx("ul",{className:s["dropdown-stats__menu"],role:"listbox",children:r.map(e=>{const n=t===e.value;return a.jsxs("li",{className:`${s["dropdown-stats__item"]} ${n?s.selected:""}`,onClick:()=>{l(e.value),d()},onKeyDown:B=>{L(B,e.value)},role:"option","aria-selected":n,tabIndex:0,children:[a.jsxs("div",{className:s["dropdown-stats__item-content"],children:[a.jsx("span",{className:s["dropdown-stats__label"],children:e.label}),a.jsxs("span",{className:s["dropdown-stats__code"],children:["(",e.code,")"]}),p&&a.jsx("span",{className:s["dropdown-stats__stat"],children:q(e.stat)})]}),a.jsx("div",{className:s["dropdown-stats__progress-container"],children:a.jsx("div",{className:s["dropdown-stats__progress-bar"],style:{width:`${z(e.stat)}%`,backgroundColor:v??"var(--ads-primary-main)"}})})]},e.value)})})]})}T.__docgenInfo={description:"",methods:[],displayName:"DropdownStats",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"DropdownStatsOption"}],raw:"DropdownStatsOption[]"},description:""},selectedValue:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},maxValue:{required:!1,tsType:{name:"number"},description:""},barColor:{required:!1,tsType:{name:"string"},description:""},showPercentage:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isOpen:{required:!0,tsType:{name:"boolean"},description:""},onToggle:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},displayFormat:{required:!1,tsType:{name:"union",raw:"'percentage' | 'value' | 'both'",elements:[{name:"literal",value:"'percentage'"},{name:"literal",value:"'value'"},{name:"literal",value:"'both'"}]},description:"",defaultValue:{value:"'both'",computed:!1}}}};const U={title:"ui/components/molecules/DropdownStats",component:T,argTypes:{barColor:{control:"color"},displayFormat:{options:["percentage","value","both"],control:{type:"select"}}}},i={render:function(t){const[l,b]=h.useState(!1),[v,p]=h.useState(t.options[0].value),y=o=>{p(o),t.onChange(o)},u=()=>{b(!l),t.onToggle()};return a.jsx(T,{options:t.options,selectedValue:v,onChange:y,isOpen:l,onToggle:u,disabled:t.disabled,barColor:t.barColor,showPercentage:t.showPercentage,displayFormat:t.displayFormat,maxValue:t.maxValue,className:t.className})}},c=[{label:"Argentina",value:"arg",code:"+54",stat:45},{label:"Brazil",value:"bra",code:"+55",stat:78},{label:"Chile",value:"chi",code:"+56",stat:32},{label:"Colombia",value:"col",code:"+57",stat:65},{label:"Mexico",value:"mex",code:"+52",stat:89}],m={...i,args:{options:c,showPercentage:!0,onChange:()=>{},onToggle:()=>{},isOpen:!1}},_={...i,args:{options:c.slice(0,3),barColor:"#ff5733",onChange:()=>{},onToggle:()=>{},isOpen:!1}},g={...i,args:{options:c.slice(0,3),displayFormat:"percentage",onChange:()=>{},onToggle:()=>{},isOpen:!1}},w={...i,args:{options:c.slice(0,3),displayFormat:"value",onChange:()=>{},onToggle:()=>{},isOpen:!1}},f={...i,args:{options:c.slice(0,2),disabled:!0,onChange:()=>{},onToggle:()=>{},isOpen:!1}};var S,N,j;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  ...Template,
  args: {
    options: sampleOptions,
    showPercentage: true,
    onChange: () => {},
    onToggle: () => {},
    isOpen: false
  }
}`,...(j=(N=m.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var D,V,$;_.parameters={..._.parameters,docs:{...(D=_.parameters)==null?void 0:D.docs,source:{originalSource:`{
  ...Template,
  args: {
    options: sampleOptions.slice(0, 3),
    barColor: '#ff5733',
    onChange: () => {},
    onToggle: () => {},
    isOpen: false
  }
}`,...($=(V=_.parameters)==null?void 0:V.docs)==null?void 0:$.source}}};var F,E,P;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
  ...Template,
  args: {
    options: sampleOptions.slice(0, 3),
    displayFormat: 'percentage',
    onChange: () => {},
    onToggle: () => {},
    isOpen: false
  }
}`,...(P=(E=g.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};var k,M,I;w.parameters={...w.parameters,docs:{...(k=w.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...Template,
  args: {
    options: sampleOptions.slice(0, 3),
    displayFormat: 'value',
    onChange: () => {},
    onToggle: () => {},
    isOpen: false
  }
}`,...(I=(M=w.parameters)==null?void 0:M.docs)==null?void 0:I.source}}};var R,W,A;f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:`{
  ...Template,
  args: {
    options: sampleOptions.slice(0, 2),
    disabled: true,
    onChange: () => {},
    onToggle: () => {},
    isOpen: false
  }
}`,...(A=(W=f.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};const X=["Default","WithCustomColor","PercentageOnly","ValueOnly","Disabled"];export{m as Default,f as Disabled,g as PercentageOnly,w as ValueOnly,_ as WithCustomColor,X as __namedExportsOrder,U as default};
