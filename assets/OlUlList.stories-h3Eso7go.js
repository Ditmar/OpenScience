import{j as t}from"./jsx-runtime-BlDnFLNC.js";import{O as $}from"./OLItem-bP6trOHx.js";import{O as k}from"./OLBullet-l__IFo1r.js";import"./index-Cu9bd8lq.js";const N="_small_1743u_35",M="_medium_1743u_42",V="_large_1743u_49",e={"ol-ul-list":"_ol-ul-list_1743u_1","ol-ul-list__item":"_ol-ul-list__item_1743u_8","ol-ul-list__item-content":"_ol-ul-list__item-content_1743u_13","extra-small":"_extra-small_1743u_28",small:N,medium:M,large:V};function w({type:c,style:u="circle",size:d="medium",items:p=[],count:q=1}){const A=c==="ordered"?e.ordered:e.unordered,D=e[`${u}List`]??e.circleList,y=u,g=["extra-small","small","medium","large"].includes(d)?d:"medium",m=e[g],h={"extra-small":"sm",small:"sm",medium:"md",large:"lg"}[g],O=()=>(p.length>0?p:Array.from({length:q},(r,s)=>({subtitle:`Subtítulo ${String(s+1)}`,paragraph:`Este es el párrafo del elemento ${String(s+1)} de la lista.`}))).map((r,s)=>t.jsxs("div",{className:e["ol-ul-list__item"],children:[c==="ordered"?t.jsx($,{value:String(s+1),active:!0,shape:y,size:h}):t.jsx(k,{active:!0,shape:y,size:h}),t.jsxs("div",{className:e["ol-ul-list__item-content"],children:[r.subtitle&&t.jsx("h3",{className:m,children:r.subtitle}),r.paragraph&&t.jsx("p",{className:m,children:r.paragraph})]})]},r.subtitle??s));return t.jsx("div",{className:`${e["ol-ul-list"]} ${A} ${D} ${m}`,children:O()})}w.__docgenInfo={description:"",methods:[],displayName:"OlUlList",props:{type:{required:!0,tsType:{name:"union",raw:"'ordered' | 'unordered'",elements:[{name:"literal",value:"'ordered'"},{name:"literal",value:"'unordered'"}]},description:""},style:{required:!1,tsType:{name:"union",raw:"'square' | 'rounded' | 'circle'",elements:[{name:"literal",value:"'square'"},{name:"literal",value:"'rounded'"},{name:"literal",value:"'circle'"}]},description:"",defaultValue:{value:"'circle'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'extra-small' | 'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'extra-small'"},{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},items:{required:!1,tsType:{name:"Array",elements:[{name:"IListItem"}],raw:"IListItem[]"},description:"",defaultValue:{value:"[]",computed:!1}},count:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}}}};const K={title:"library/component/molecules/ol-ul-list",component:w,argTypes:{type:{control:{type:"select",options:["ordered","unordered"]}},style:{control:{type:"select",options:["circle","square","rounded"]}},size:{control:{type:"select",options:["extra-small","small","medium","large"]}},count:{control:{type:"number",min:1,max:20}},items:{control:{type:"object"}}}},a={args:{type:"unordered",style:"circle",size:"extra-small",count:3}},i={args:{type:"unordered",style:"circle",size:"small",count:3}},l={args:{type:"unordered",style:"circle",size:"medium",count:3}},n={args:{type:"unordered",style:"circle",size:"large",count:3}},o={args:{type:"ordered",style:"rounded",size:"medium",items:[{id:1,subtitle:"Harmonizing Human Experience: The Artistry of UI-UX Design",paragraph:"UI is the canvas, UX the brushstroke; together, they craft an immersive journey where every pixel tells a story of elegance, efficiency, and effortless delight. Its the artistry of design at its finest."},{id:2,subtitle:"Harmonizing Human Experience: The Artistry of UI-UX Design",paragraph:"UI is the canvas, UX the brushstroke; together, they craft an immersive journey where every pixel tells a story of elegance, efficiency, and effortless delight. Its the artistry of design at its finest."},{id:3,subtitle:"Harmonizing Human Experience: The Artistry of UI-UX Design",paragraph:"UI is the canvas, UX the brushstroke; together, they craft an immersive journey where every pixel tells a story of elegance, efficiency, and effortless delight. Its the artistry of design at its finest."}]}};var f,v,_;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    type: 'unordered',
    style: 'circle',
    size: 'extra-small',
    count: 3
  }
}`,...(_=(v=a.parameters)==null?void 0:v.docs)==null?void 0:_.source}}};var x,I,z;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    type: 'unordered',
    style: 'circle',
    size: 'small',
    count: 3
  }
}`,...(z=(I=i.parameters)==null?void 0:I.docs)==null?void 0:z.source}}};var U,b,L;l.parameters={...l.parameters,docs:{...(U=l.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    type: 'unordered',
    style: 'circle',
    size: 'medium',
    count: 3
  }
}`,...(L=(b=l.parameters)==null?void 0:b.docs)==null?void 0:L.source}}};var S,j,T;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    type: 'unordered',
    style: 'circle',
    size: 'large',
    count: 3
  }
}`,...(T=(j=n.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};var H,X,E;o.parameters={...o.parameters,docs:{...(H=o.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(E=(X=o.parameters)==null?void 0:X.docs)==null?void 0:E.source}}};const P=["ExtraSmallList","SmallList","MediumList","LargeList","WithCustomItems"];export{a as ExtraSmallList,n as LargeList,l as MediumList,i as SmallList,o as WithCustomItems,P as __namedExportsOrder,K as default};
