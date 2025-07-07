import{j as r}from"./jsx-runtime-BlDnFLNC.js";import{c as y}from"./index-C-6Uy6j4.js";import{O as N}from"./OLItem-5-Gkmovv.js";import{O as k}from"./OLBullet-l__IFo1r.js";import"./index-Cu9bd8lq.js";import"./styled-BH5AFfth.js";import"./defaultTheme-DBYISBzf.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-B89909lT.js";import"./extends-CF3RwP-h.js";import"./Box-VKKrm30L.js";import"./generateUtilityClasses-CPRdC64H.js";import"./extendSxProp-BT_4I2sC.js";const C="_small_1igsx_35",$="_medium_1igsx_42",V="_large_1igsx_49",t={"ol-ul-list":"_ol-ul-list_1igsx_1","ol-ul-list__item":"_ol-ul-list__item_1igsx_8","ol-ul-list__item-content":"_ol-ul-list__item-content_1igsx_13","extra-small":"_extra-small_1igsx_28",small:C,medium:$,large:V},f=e=>({[t["extra-small"]]:e==="extra-small",[t.small]:e==="small",[t.medium]:e==="medium"||!["extra-small","small","large"].includes(e),[t.large]:e==="large"}),M=e=>e==="extra-small"||e==="small"?"sm":e==="large"?"lg":"md";function w({type:e,style:c="circle",size:u="medium",items:d=[],count:q=1}){const A=y(t["ol-ul-list"],{[t.ordered]:e==="ordered",[t.unordered]:e==="unordered"},t[`${c}List`]||t.circleList,f(u)),p=y(f(u)),g=M(u),D=()=>(d.length>0?d:Array.from({length:q},(s,a)=>({subtitle:`Subtítulo ${String(a+1)}`,paragraph:`Este es el párrafo del elemento ${String(a+1)} de la lista.`}))).map((s,a)=>{const O=`${s.subtitle??"item"}-${String(a)}`;return r.jsxs("div",{className:t["ol-ul-list__item"],children:[e==="ordered"?r.jsx(N,{value:String(a+1),active:!0,shape:c,size:g}):r.jsx(k,{active:!0,shape:c,size:g}),r.jsxs("div",{className:t["ol-ul-list__item-content"],children:[s.subtitle&&r.jsx("h3",{className:p,children:s.subtitle}),s.paragraph&&r.jsx("p",{className:p,children:s.paragraph})]})]},O)});return r.jsx("div",{className:A,children:D()})}w.__docgenInfo={description:"",methods:[],displayName:"OlUlList",props:{type:{required:!0,tsType:{name:"union",raw:"'ordered' | 'unordered'",elements:[{name:"literal",value:"'ordered'"},{name:"literal",value:"'unordered'"}]},description:""},style:{required:!1,tsType:{name:"union",raw:"'square' | 'rounded' | 'circle'",elements:[{name:"literal",value:"'square'"},{name:"literal",value:"'rounded'"},{name:"literal",value:"'circle'"}]},description:"",defaultValue:{value:"'circle'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'extra-small' | 'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'extra-small'"},{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},items:{required:!1,tsType:{name:"Array",elements:[{name:"IListItem"}],raw:"IListItem[]"},description:"",defaultValue:{value:"[]",computed:!1}},count:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}}}};const re={title:"library/component/molecules/ol-ul-list",component:w,argTypes:{type:{control:{type:"select",options:["ordered","unordered"]}},style:{control:{type:"select",options:["circle","square","rounded"]}},size:{control:{type:"select",options:["extra-small","small","medium","large"]}},count:{control:{type:"number",min:1,max:20}},items:{control:{type:"object"}}}},i={args:{type:"unordered",style:"circle",size:"extra-small",count:3}},l={args:{type:"unordered",style:"circle",size:"small",count:3}},n={args:{type:"unordered",style:"circle",size:"medium",count:3}},o={args:{type:"unordered",style:"circle",size:"large",count:3}},m={args:{type:"ordered",style:"rounded",size:"medium",items:[{id:1,subtitle:"Harmonizing Human Experience: The Artistry of UI-UX Design",paragraph:"UI is the canvas, UX the brushstroke; together, they craft an immersive journey where every pixel tells a story of elegance, efficiency, and effortless delight. Its the artistry of design at its finest."},{id:2,subtitle:"Harmonizing Human Experience: The Artistry of UI-UX Design",paragraph:"UI is the canvas, UX the brushstroke; together, they craft an immersive journey where every pixel tells a story of elegance, efficiency, and effortless delight. Its the artistry of design at its finest."},{id:3,subtitle:"Harmonizing Human Experience: The Artistry of UI-UX Design",paragraph:"UI is the canvas, UX the brushstroke; together, they craft an immersive journey where every pixel tells a story of elegance, efficiency, and effortless delight. Its the artistry of design at its finest."}]}};var h,x,_;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    type: 'unordered',
    style: 'circle',
    size: 'extra-small',
    count: 3
  }
}`,...(_=(x=i.parameters)==null?void 0:x.docs)==null?void 0:_.source}}};var v,I,U;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    type: 'unordered',
    style: 'circle',
    size: 'small',
    count: 3
  }
}`,...(U=(I=l.parameters)==null?void 0:I.docs)==null?void 0:U.source}}};var b,L,S;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    type: 'unordered',
    style: 'circle',
    size: 'medium',
    count: 3
  }
}`,...(S=(L=n.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};var j,z,H;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    type: 'unordered',
    style: 'circle',
    size: 'large',
    count: 3
  }
}`,...(H=(z=o.parameters)==null?void 0:z.docs)==null?void 0:H.source}}};var T,X,E;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    type: 'ordered',
    style: 'rounded',
    size: 'medium',
    items: [{
      id: 1,
      subtitle: 'Harmonizing Human Experience: The Artistry of UI-UX Design',
      paragraph: 'UI is the canvas, UX the brushstroke; together, they craft an immersive journey where every pixel tells a story of ' + 'elegance, efficiency, and effortless delight. Its the artistry of design at its finest.'
    }, {
      id: 2,
      subtitle: 'Harmonizing Human Experience: The Artistry of UI-UX Design',
      paragraph: 'UI is the canvas, UX the brushstroke; together, they craft an immersive journey where every pixel tells a story of ' + 'elegance, efficiency, and effortless delight. Its the artistry of design at its finest.'
    }, {
      id: 3,
      subtitle: 'Harmonizing Human Experience: The Artistry of UI-UX Design',
      paragraph: 'UI is the canvas, UX the brushstroke; together, they craft an immersive journey where every pixel tells a story of ' + 'elegance, efficiency, and effortless delight. Its the artistry of design at its finest.'
    }]
  }
}`,...(E=(X=m.parameters)==null?void 0:X.docs)==null?void 0:E.source}}};const se=["ExtraSmallList","SmallList","MediumList","LargeList","WithCustomItems"];export{i as ExtraSmallList,o as LargeList,n as MediumList,l as SmallList,m as WithCustomItems,se as __namedExportsOrder,re as default};
