import{j as n}from"./jsx-runtime-BlDnFLNC.js";import{O as w}from"./OLItem-BxrtXqPi.js";import{s as y}from"./styled-Av0s27nj.js";import"./index-Cu9bd8lq.js";import"./Box-EFjdK6Oe.js";import"./defaultTheme-qdan4ah2.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-B89909lT.js";import"./generateUtilityClasses-CPRdC64H.js";import"./extendSxProp-CecbHQ21.js";import"./extends-CF3RwP-h.js";const A=y("ol")(({direction:e})=>({display:"flex",flexWrap:"wrap",gap:"1rem",listStyle:"none",margin:0,padding:0,flexDirection:e==="column"?"column":"row"}));function f({items:e,direction:r="row"}){return n.jsx(A,{direction:r,children:e.map(t=>n.jsx(w,{value:t.value,shape:t.shape,size:t.size,active:t.active},t.value))})}f.__docgenInfo={description:"",methods:[],displayName:"OLItemList",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"OLItemProps"}],raw:"OLItemProps[]"},description:""},direction:{required:!1,tsType:{name:"union",raw:"'row' | 'column'",elements:[{name:"literal",value:"'row'"},{name:"literal",value:"'column'"}]},description:"",defaultValue:{value:"'row'",computed:!1}}}};const g=Array.from({length:10},(e,r)=>String.fromCharCode(65+r)),q={title:"ui/components/molecules/ol-item-List",component:f,parameters:{docs:{description:{component:"List of OLItems with shape, size, and active state. Responsive and controlled by props."}}},argTypes:{direction:{control:"radio",options:["row","column"],description:"Dirección del layout (horizontal o vertical)"},items:{control:!1}}},s={name:"Active numeric list",args:{direction:"row",items:Array.from({length:10},(e,r)=>({value:r+1,shape:"square",size:"sm",active:!0}))},parameters:{viewport:{defaultViewport:"mobile1"},docs:{description:{story:"All active items. Ideal for numbering or progress."}}}},a={name:"Alphabetical list",args:{direction:"row",items:g.map((e,r)=>({value:e,shape:"rounded",size:"sm",active:r%2===0}))},parameters:{viewport:{defaultViewport:"mobile1"},docs:{description:{story:"Letters A–J with alternating active states."}}}},i={name:"Vertical list",args:{direction:"column",items:g.map(e=>({value:e,shape:"circle",size:"md",active:!1}))},parameters:{docs:{description:{story:"Vertical list with circular shapes."}}}};var o,c,l;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'Active numeric list',
  args: {
    direction: 'row',
    items: Array.from({
      length: 10
    }, (_, i) => ({
      value: i + 1,
      shape: 'square',
      size: 'sm',
      active: true
    }))
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    },
    docs: {
      description: {
        story: 'All active items. Ideal for numbering or progress.'
      }
    }
  }
}`,...(l=(c=s.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var m,p,d;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Alphabetical list',
  args: {
    direction: 'row',
    items: letters.map((letter, i) => ({
      value: letter,
      shape: 'rounded',
      size: 'sm',
      active: i % 2 === 0
    }))
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    },
    docs: {
      description: {
        story: 'Letters A–J with alternating active states.'
      }
    }
  }
}`,...(d=(p=a.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var u,v,h;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Vertical list',
  args: {
    direction: 'column',
    items: letters.map(value => ({
      value,
      shape: 'circle',
      size: 'md',
      active: false
    }))
  },
  parameters: {
    docs: {
      description: {
        story: 'Vertical list with circular shapes.'
      }
    }
  }
}`,...(h=(v=i.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const N=["NumericActive","AlphabeticAlternating","VerticalLayout"];export{a as AlphabeticAlternating,s as NumericActive,i as VerticalLayout,N as __namedExportsOrder,q as default};
