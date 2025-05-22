import{j as g}from"./jsx-runtime-DRTy3Uxn.js";import"./index-BBkUAzwr.js";const t={"heading-title":"_heading-title_1fmyc_1","heading-title__text":"_heading-title__text_1fmyc_8","heading-title--level-h1":"_heading-title--level-h1_1fmyc_13","heading-title--level-h2":"_heading-title--level-h2_1fmyc_21","heading-title--level-h3":"_heading-title--level-h3_1fmyc_27","heading-title--weight-regular":"_heading-title--weight-regular_1fmyc_33","heading-title--weight-medium":"_heading-title--weight-medium_1fmyc_37","heading-title--weight-semi-bold":"_heading-title--weight-semi-bold_1fmyc_41","heading-title--style-sans":"_heading-title--style-sans_1fmyc_45","heading-title--style-italic":"_heading-title--style-italic_1fmyc_49","heading-title--style-serif":"_heading-title--style-serif_1fmyc_53","heading-title--style-monospace":"_heading-title--style-monospace_1fmyc_57"};function a({text:e,Styles:c="monospace",Weight:u="semi-bold",Level:s="h1"}){const _=`${t["heading-title"]} ${t["heading-title__text"]}
  ${t[`heading-title--level-${s}`]}
  ${t[`heading-title--style-${c}`]}
  ${t[`heading-title--weight-${u}`]}`,p=s;return g.jsx(p,{className:_,children:e})}a.__docgenInfo={description:"",methods:[],displayName:"HeadingTitle",props:{text:{required:!1,tsType:{name:"string"},description:""},Weight:{required:!1,tsType:{name:"union",raw:"'regular' | 'medium' | 'semi-bold'",elements:[{name:"literal",value:"'regular'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'semi-bold'"}]},description:"",defaultValue:{value:"'semi-bold'",computed:!1}},Styles:{required:!1,tsType:{name:"union",raw:"'sans' | 'italic' | 'serif' | 'monospace'",elements:[{name:"literal",value:"'sans'"},{name:"literal",value:"'italic'"},{name:"literal",value:"'serif'"},{name:"literal",value:"'monospace'"}]},description:"",defaultValue:{value:"'monospace'",computed:!1}},Level:{required:!1,tsType:{name:"union",raw:"'h1' | 'h2' | 'h3'",elements:[{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"}]},description:"",defaultValue:{value:"'h1'",computed:!1}}}};const v={title:"ui/components/atoms/HeadingTitle",component:a,argTypes:{Level:{control:"select",options:["h1","h2","h3"]},Weight:{control:"select",options:["regular","medium","semi-bold"]},Styles:{control:"select",options:["sans","italic","serif","monospace"]}}},i={args:{Weight:"semi-bold",Level:"h1",Styles:"monospace"},render:e=>g.jsx(a,{text:`heading-${e.Level??"h1"}`,Weight:e.Weight,Level:e.Level,Styles:e.Styles})},l={args:{Styles:"italic",Level:"h2",Weight:"medium",text:"Editing headings"}};var n,r,d;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    Weight: 'semi-bold',
    Level: 'h1',
    Styles: 'monospace'
  },
  render: args => <HeadingTitle text={\`heading-\${args.Level ?? 'h1'}\`} Weight={args.Weight} Level={args.Level} Styles={args.Styles} />
}`,...(d=(r=i.parameters)==null?void 0:r.docs)==null?void 0:d.source}}};var o,m,h;l.parameters={...l.parameters,docs:{...(o=l.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    Styles: 'italic',
    Level: 'h2',
    Weight: 'medium',
    text: 'Editing headings'
  }
}`,...(h=(m=l.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};const x=["Weight","Style"];export{l as Style,i as Weight,x as __namedExportsOrder,v as default};
