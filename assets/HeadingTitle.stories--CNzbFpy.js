import{j as m}from"./jsx-runtime-DRTy3Uxn.js";import"./index-BBkUAzwr.js";const t={"heading-title":"_heading-title_p41fx_1","heading-title__text":"_heading-title__text_p41fx_8","heading-title--level-h1":"_heading-title--level-h1_p41fx_13","heading-title--level-h2":"_heading-title--level-h2_p41fx_21","heading-title--level-h3":"_heading-title--level-h3_p41fx_27","heading-title--weight-regular":"_heading-title--weight-regular_p41fx_33","heading-title--weight-medium":"_heading-title--weight-medium_p41fx_37","heading-title--weight-semi-bold":"_heading-title--weight-semi-bold_p41fx_41","heading-title--style-sans":"_heading-title--style-sans_p41fx_45","heading-title--style-serif":"_heading-title--style-serif_p41fx_49","heading-title--style-italic":"_heading-title--style-italic_p41fx_53","heading-title--style-monospace":"_heading-title--style-monospace_p41fx_57"};function a({text:e,Styles:p="monospace",Weight:u="medium",Level:s="h1"}){const c=`${t["heading-title"]} ${t["heading-title__text"]}
  ${t[`heading-title--level-${s}`]}
  ${t[`heading-title--style-${p}`]}
  ${t[`heading-title--weight-${u}`]}`,_=s;return m.jsx(_,{className:c,children:e})}a.__docgenInfo={description:"",methods:[],displayName:"HeadingTitle",props:{text:{required:!1,tsType:{name:"string"},description:""},Weight:{required:!1,tsType:{name:"union",raw:"'regular' | 'medium' | 'semi-bold'",elements:[{name:"literal",value:"'regular'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'semi-bold'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},Styles:{required:!1,tsType:{name:"union",raw:"'sans' | 'serif' | 'italic' | 'monospace'",elements:[{name:"literal",value:"'sans'"},{name:"literal",value:"'serif'"},{name:"literal",value:"'italic'"},{name:"literal",value:"'monospace'"}]},description:"",defaultValue:{value:"'monospace'",computed:!1}},Level:{required:!1,tsType:{name:"union",raw:"'h1' | 'h2' | 'h3'",elements:[{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"}]},description:"",defaultValue:{value:"'h1'",computed:!1}}}};const y={title:"ui/components/atoms/HeadingTitle",component:a,argTypes:{Level:{control:"select",options:["h1","h2","h3"]},Weight:{control:"select",options:["regular","medium","semi-bold"]},Styles:{control:"select",options:["sans","serif","italic","monospace"]}}},i={args:{Weight:"semi-bold",Level:"h1",Styles:"monospace"},render:e=>m.jsx(a,{text:`heading-${e.Level??"h1"}`,Weight:e.Weight,Level:e.Level,Styles:e.Styles})},l={args:{Styles:"sans",Level:"h2",Weight:"medium",text:"Editing headings"}};var n,r,d;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    Weight: 'semi-bold',
    Level: 'h1',
    Styles: 'monospace'
  },
  render: args => <HeadingTitle text={\`heading-\${args.Level ?? 'h1'}\`} Weight={args.Weight} Level={args.Level} Styles={args.Styles} />
}`,...(d=(r=i.parameters)==null?void 0:r.docs)==null?void 0:d.source}}};var o,h,g;l.parameters={...l.parameters,docs:{...(o=l.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    Styles: 'sans',
    Level: 'h2',
    Weight: 'medium',
    text: 'Editing headings'
  }
}`,...(g=(h=l.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};const x=["Weight","Style"];export{l as Style,i as Weight,x as __namedExportsOrder,y as default};
