import{j as f}from"./jsx-runtime-BlDnFLNC.js";import"./index-Cu9bd8lq.js";const j="_regular_jscqs_114",x="_medium_jscqs_117",w="_underline_jscqs_123",v="_dark_jscqs_129",T="_white_jscqs_132",k="_sans_jscqs_136",$="_serif_jscqs_139",C="_mono_jscqs_142",D="_italic_jscqs_145",e={"typography-display":"_typography-display_jscqs_106","display-xl":"_display-xl_jscqs_106","display-lg":"_display-lg_jscqs_110",regular:j,medium:x,"none-line":"_none-line_jscqs_120",underline:w,"line-through":"_line-through_jscqs_126",dark:v,white:T,sans:k,serif:$,mono:C,italic:D};function c({text:d,size:n,weight:a,color:l,textDecoration:i,italic:m,fontStyle:t}){const u=n&&e[n]?e[n]:"",y=a&&e[a]?e[a]:"",_=l&&e[l]?e[l]:"",g=i&&e[i]?e[i]:"",h=m?e.italic:"",q=t&&e[t]?e[t]:"";return f.jsx("p",{className:`${e["typography-display"]} 
        ${u} 
        ${y} 
        ${_} 
        ${g} 
        ${h} 
        ${q}`,children:d})}c.__docgenInfo={description:"",methods:[],displayName:"TypographyDisplay",props:{text:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'display-xl' | 'display-lg'",elements:[{name:"literal",value:"'display-xl'"},{name:"literal",value:"'display-lg'"}]},description:""},weight:{required:!1,tsType:{name:"union",raw:"'regular' | 'medium'",elements:[{name:"literal",value:"'regular'"},{name:"literal",value:"'medium'"}]},description:""},color:{required:!1,tsType:{name:"union",raw:"'dark' | 'white'",elements:[{name:"literal",value:"'dark'"},{name:"literal",value:"'white'"}]},description:""},textDecoration:{required:!1,tsType:{name:"union",raw:"'none-line' | 'underline' | 'line-through'",elements:[{name:"literal",value:"'none-line'"},{name:"literal",value:"'underline'"},{name:"literal",value:"'line-through'"}]},description:""},italic:{required:!1,tsType:{name:"boolean"},description:""},fontStyle:{required:!1,tsType:{name:"union",raw:"'sans' | 'serif' | 'mono'",elements:[{name:"literal",value:"'sans'"},{name:"literal",value:"'serif'"},{name:"literal",value:"'mono'"}]},description:""}}};const b={title:"ui/components/atoms/typography-display",component:c,argTypes:{size:{control:{type:"select",options:["display-xl","display-lg"]}},weight:{control:{type:"select",options:["regular","medium"]}},color:{control:{type:"select",options:["dark","white"]}},textDecoration:{control:{type:"select",options:["none-line","underline","line-through"]}},italic:{control:{type:"boolean"}},fontStyle:{control:{type:"select",options:["sans","serif","mono"]}}}},s={args:{text:"Display 0123",size:"display-xl",weight:"medium",color:"dark",fontStyle:"sans"}};var o,r,p;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    text: 'Display 0123',
    size: 'display-xl',
    weight: 'medium',
    color: 'dark',
    fontStyle: 'sans'
  }
}`,...(p=(r=s.parameters)==null?void 0:r.docs)==null?void 0:p.source}}};const E=["display"];export{E as __namedExportsOrder,b as default,s as display};
