import{j as i}from"./jsx-runtime-BlDnFLNC.js";import{T as y,l as A}from"./default-Dkg6YaNi.js";import{O as _}from"./OLItem-CIy9FW7h.js";import"./index-Cu9bd8lq.js";import"./identifier-DBT_jqBi.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-B34fLoo2.js";import"./index-B_vwO47f.js";import"./styled-DGlJ1-IK.js";import"./extends-CF3RwP-h.js";import"./Box-DEu2tB77.js";const n={"ol-item-list":"_ol-item-list_1e3rw_1","ol-item-list--row":"_ol-item-list--row_1e3rw_9","ol-item-list--column":"_ol-item-list--column_1e3rw_12"};function g({items:e,direction:t="row"}){return i.jsx("ol",{className:`${n["ol-item-list"]} ${n[`ol-item-list--${t}`]}`,children:e.map(r=>i.jsx(_,{value:r.value,shape:r.shape,size:r.size,active:r.active},r.value))})}g.__docgenInfo={description:"",methods:[],displayName:"OLItemList",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"OLItemProps"}],raw:"OLItemProps[]"},description:""},direction:{required:!1,tsType:{name:"union",raw:"'row' | 'column'",elements:[{name:"literal",value:"'row'"},{name:"literal",value:"'column'"}]},description:"",defaultValue:{value:"'row'",computed:!1}}}};const f=Array.from({length:10},(e,t)=>String.fromCharCode(65+t)),N={title:"ui/components/molecules/ol-item-List",component:g,decorators:[e=>i.jsx(y,{theme:A,children:i.jsx("div",{style:{padding:"2rem",maxWidth:600},children:i.jsx(e,{})})})],parameters:{docs:{description:{component:"List of OLItems with shape, size, and active state. Responsive and controlled by props."}}},argTypes:{direction:{control:"radio",options:["row","column"],description:"Dirección del layout (horizontal o vertical)"},items:{control:!1}}},s={name:"Active numeric list",args:{direction:"row",items:Array.from({length:10},(e,t)=>({value:t+1,shape:"square",size:"sm",active:!0}))},parameters:{viewport:{defaultViewport:"mobile1"},docs:{description:{story:"All active items. Ideal for numbering or progress."}}}},a={name:"Alphabetical list",args:{direction:"row",items:f.map((e,t)=>({value:e,shape:"rounded",size:"sm",active:t%2===0}))},parameters:{viewport:{defaultViewport:"mobile1"},docs:{description:{story:"Letters A–J with alternating active states."}}}},o={name:"Vertical list",args:{direction:"column",items:f.map(e=>({value:e,shape:"circle",size:"md",active:!1}))},parameters:{docs:{description:{story:"Vertical list with circular shapes."}}}};var l,c,m;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(m=(c=s.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,d,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(d=a.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var v,h,w;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(w=(h=o.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};const S=["NumericActive","AlphabeticAlternating","VerticalLayout"];export{a as AlphabeticAlternating,s as NumericActive,o as VerticalLayout,S as __namedExportsOrder,N as default};
