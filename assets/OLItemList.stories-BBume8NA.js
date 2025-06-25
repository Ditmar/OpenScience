import{j as o}from"./jsx-runtime-BlDnFLNC.js";import{O as y}from"./OLItem-B6mQBndd.js";import"./index-Cu9bd8lq.js";import"./styled-Db3gYmrN.js";import"./identifier-zfncykJ_.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-B34fLoo2.js";import"./extends-CF3RwP-h.js";import"./Box-DS_uUjFP.js";import"./useTheme-DzrtRHuF.js";const n={"ol-item-list":"_ol-item-list_1e3rw_1","ol-item-list--row":"_ol-item-list--row_1e3rw_9","ol-item-list--column":"_ol-item-list--column_1e3rw_12"};function g({items:e,direction:t="row"}){return o.jsx("ol",{className:`${n["ol-item-list"]} ${n[`ol-item-list--${t}`]}`,children:e.map(r=>o.jsx(y,{value:r.value,shape:r.shape,size:r.size,active:r.active},r.value))})}g.__docgenInfo={description:"",methods:[],displayName:"OLItemList",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"OLItemProps"}],raw:"OLItemProps[]"},description:""},direction:{required:!1,tsType:{name:"union",raw:"'row' | 'column'",elements:[{name:"literal",value:"'row'"},{name:"literal",value:"'column'"}]},description:"",defaultValue:{value:"'row'",computed:!1}}}};const f=Array.from({length:10},(e,t)=>String.fromCharCode(65+t)),j={title:"ui/components/molecules/ol-item-List",component:g,parameters:{docs:{description:{component:"List of OLItems with shape, size, and active state. Responsive and controlled by props."}}},argTypes:{direction:{control:"radio",options:["row","column"],description:"Dirección del layout (horizontal o vertical)"},items:{control:!1}}},i={name:"Active numeric list",args:{direction:"row",items:Array.from({length:10},(e,t)=>({value:t+1,shape:"square",size:"sm",active:!0}))},parameters:{viewport:{defaultViewport:"mobile1"},docs:{description:{story:"All active items. Ideal for numbering or progress."}}}},s={name:"Alphabetical list",args:{direction:"row",items:f.map((e,t)=>({value:e,shape:"rounded",size:"sm",active:t%2===0}))},parameters:{viewport:{defaultViewport:"mobile1"},docs:{description:{story:"Letters A–J with alternating active states."}}}},a={name:"Vertical list",args:{direction:"column",items:f.map(e=>({value:e,shape:"circle",size:"md",active:!1}))},parameters:{docs:{description:{story:"Vertical list with circular shapes."}}}};var l,c,m;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(m=(c=i.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,d,u;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(d=s.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var v,w,h;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(h=(w=a.parameters)==null?void 0:w.docs)==null?void 0:h.source}}};const q=["NumericActive","AlphabeticAlternating","VerticalLayout"];export{s as AlphabeticAlternating,i as NumericActive,a as VerticalLayout,q as __namedExportsOrder,j as default};
