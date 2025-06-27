import{j as f}from"./jsx-runtime-BlDnFLNC.js";import"./index-Cu9bd8lq.js";const j="_regular_1ewjd_114",x="_medium_1ewjd_117",v="_underline_1ewjd_123",T="_dark_1ewjd_129",k="_white_1ewjd_132",q="_sans_1ewjd_136",$="_serif_1ewjd_139",C="_mono_1ewjd_142",D="_italic_1ewjd_145",e={"typography-display":"_typography-display_1ewjd_106","display-xl":"_display-xl_1ewjd_106","display-lg":"_display-lg_1ewjd_110",regular:j,medium:x,"none-line":"_none-line_1ewjd_120",underline:v,"line-through":"_line-through_1ewjd_126",dark:T,white:k,sans:q,serif:$,mono:C,italic:D};function p({text:m,size:a,weight:l,color:s,textDecoration:i,italic:c,fontStyle:t}){const u=a&&e[a]?e[a]:"",y=l&&e[l]?e[l]:"",_=s&&e[s]?e[s]:"",g=i&&e[i]?e[i]:"",w=c?e.italic:"",h=t&&e[t]?e[t]:"";return f.jsx("p",{className:`${e["typography-display"]} 
        ${u} 
        ${y} 
        ${_} 
        ${g} 
        ${w} 
        ${h}`,children:m})}p.__docgenInfo={description:"",methods:[],displayName:"TypographyDisplay",props:{text:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'display-xl' | 'display-lg'",elements:[{name:"literal",value:"'display-xl'"},{name:"literal",value:"'display-lg'"}]},description:""},weight:{required:!1,tsType:{name:"union",raw:"'regular' | 'medium'",elements:[{name:"literal",value:"'regular'"},{name:"literal",value:"'medium'"}]},description:""},color:{required:!1,tsType:{name:"union",raw:"'dark' | 'white'",elements:[{name:"literal",value:"'dark'"},{name:"literal",value:"'white'"}]},description:""},textDecoration:{required:!1,tsType:{name:"union",raw:"'none-line' | 'underline' | 'line-through'",elements:[{name:"literal",value:"'none-line'"},{name:"literal",value:"'underline'"},{name:"literal",value:"'line-through'"}]},description:""},italic:{required:!1,tsType:{name:"boolean"},description:""},fontStyle:{required:!1,tsType:{name:"union",raw:"'sans' | 'serif' | 'mono'",elements:[{name:"literal",value:"'sans'"},{name:"literal",value:"'serif'"},{name:"literal",value:"'mono'"}]},description:""}}};const b={title:"ui/components/atoms/typography-display",component:p,argTypes:{size:{control:{type:"select",options:["display-xl","display-lg"]}},weight:{control:{type:"select",options:["regular","medium"]}},color:{control:{type:"select",options:["dark","white"]}},textDecoration:{control:{type:"select",options:["none-line","underline","line-through"]}},italic:{control:{type:"boolean"}},fontStyle:{control:{type:"select",options:["sans","serif","mono"]}}}},n={args:{text:"Display 0123",size:"display-xl",weight:"medium",color:"dark",fontStyle:"sans"}};var o,r,d;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    text: 'Display 0123',
    size: 'display-xl',
    weight: 'medium',
    color: 'dark',
    fontStyle: 'sans'
  }
}`,...(d=(r=n.parameters)==null?void 0:r.docs)==null?void 0:d.source}}};const E=["display"];export{E as __namedExportsOrder,b as default,n as display};
