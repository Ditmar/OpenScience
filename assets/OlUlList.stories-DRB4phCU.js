import{j as r}from"./jsx-runtime-BlDnFLNC.js";import{c as u}from"./clsx-B-dksMZM.js";import{O}from"./OLItem-bP6trOHx.js";import{O as k}from"./OLBullet-l__IFo1r.js";import"./index-Cu9bd8lq.js";const N="_small_1743u_35",C="_medium_1743u_42",V="_large_1743u_49",t={"ol-ul-list":"_ol-ul-list_1743u_1","ol-ul-list__item":"_ol-ul-list__item_1743u_8","ol-ul-list__item-content":"_ol-ul-list__item-content_1743u_13","extra-small":"_extra-small_1743u_28",small:N,medium:C,large:V};function q({type:c,style:d="circle",size:e="medium",items:p=[],count:z=1}){const A=u(t["ol-ul-list"],{[t.ordered]:c==="ordered",[t.unordered]:c==="unordered"},t[`${d}List`]||t.circleList,{[t["extra-small"]]:e==="extra-small",[t.small]:e==="small",[t.medium]:e==="medium"||!["extra-small","small","large"].includes(e),[t.large]:e==="large"}),g=u({[t["extra-small"]]:e==="extra-small",[t.small]:e==="small",[t.medium]:e==="medium"||!["extra-small","small","large"].includes(e),[t.large]:e==="large"}),y=u({sm:e==="extra-small"||e==="small",md:e==="medium"||!["extra-small","small","large"].includes(e),lg:e==="large"}),h=d,D=()=>(p.length>0?p:Array.from({length:z},(s,a)=>({subtitle:`Subtítulo ${String(a+1)}`,paragraph:`Este es el párrafo del elemento ${String(a+1)} de la lista.`}))).map((s,a)=>r.jsxs("div",{className:t["ol-ul-list__item"],children:[c==="ordered"?r.jsx(O,{value:String(a+1),active:!0,shape:h,size:y}):r.jsx(k,{active:!0,shape:h,size:y}),r.jsxs("div",{className:t["ol-ul-list__item-content"],children:[s.subtitle&&r.jsx("h3",{className:g,children:s.subtitle}),s.paragraph&&r.jsx("p",{className:g,children:s.paragraph})]})]},s.subtitle??a));return r.jsx("div",{className:A,children:D()})}q.__docgenInfo={description:"",methods:[],displayName:"OlUlList",props:{type:{required:!0,tsType:{name:"union",raw:"'ordered' | 'unordered'",elements:[{name:"literal",value:"'ordered'"},{name:"literal",value:"'unordered'"}]},description:""},style:{required:!1,tsType:{name:"union",raw:"'square' | 'rounded' | 'circle'",elements:[{name:"literal",value:"'square'"},{name:"literal",value:"'rounded'"},{name:"literal",value:"'circle'"}]},description:"",defaultValue:{value:"'circle'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'extra-small' | 'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'extra-small'"},{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},items:{required:!1,tsType:{name:"Array",elements:[{name:"IListItem"}],raw:"IListItem[]"},description:"",defaultValue:{value:"[]",computed:!1}},count:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}}}};const G={title:"library/component/molecules/ol-ul-list",component:q,argTypes:{type:{control:{type:"select",options:["ordered","unordered"]}},style:{control:{type:"select",options:["circle","square","rounded"]}},size:{control:{type:"select",options:["extra-small","small","medium","large"]}},count:{control:{type:"number",min:1,max:20}},items:{control:{type:"object"}}}},l={args:{type:"unordered",style:"circle",size:"extra-small",count:3}},n={args:{type:"unordered",style:"circle",size:"small",count:3}},i={args:{type:"unordered",style:"circle",size:"medium",count:3}},o={args:{type:"unordered",style:"circle",size:"large",count:3}},m={args:{type:"ordered",style:"rounded",size:"medium",items:[{id:1,subtitle:"Harmonizing Human Experience: The Artistry of UI-UX Design",paragraph:"UI is the canvas, UX the brushstroke; together, they craft an immersive journey where every pixel tells a story of elegance, efficiency, and effortless delight. Its the artistry of design at its finest."},{id:2,subtitle:"Harmonizing Human Experience: The Artistry of UI-UX Design",paragraph:"UI is the canvas, UX the brushstroke; together, they craft an immersive journey where every pixel tells a story of elegance, efficiency, and effortless delight. Its the artistry of design at its finest."},{id:3,subtitle:"Harmonizing Human Experience: The Artistry of UI-UX Design",paragraph:"UI is the canvas, UX the brushstroke; together, they craft an immersive journey where every pixel tells a story of elegance, efficiency, and effortless delight. Its the artistry of design at its finest."}]}};var f,x,_;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    type: 'unordered',
    style: 'circle',
    size: 'extra-small',
    count: 3
  }
}`,...(_=(x=l.parameters)==null?void 0:x.docs)==null?void 0:_.source}}};var v,I,U;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    type: 'unordered',
    style: 'circle',
    size: 'small',
    count: 3
  }
}`,...(U=(I=n.parameters)==null?void 0:I.docs)==null?void 0:U.source}}};var b,L,j;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    type: 'unordered',
    style: 'circle',
    size: 'medium',
    count: 3
  }
}`,...(j=(L=i.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};var S,H,T;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    type: 'unordered',
    style: 'circle',
    size: 'large',
    count: 3
  }
}`,...(T=(H=o.parameters)==null?void 0:H.docs)==null?void 0:T.source}}};var X,E,w;m.parameters={...m.parameters,docs:{...(X=m.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(w=(E=m.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};const J=["ExtraSmallList","SmallList","MediumList","LargeList","WithCustomItems"];export{l as ExtraSmallList,o as LargeList,i as MediumList,n as SmallList,m as WithCustomItems,J as __namedExportsOrder,G as default};
