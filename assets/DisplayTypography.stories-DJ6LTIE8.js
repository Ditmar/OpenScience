import{j as D}from"./jsx-runtime-DRTy3Uxn.js";import"./index-BBkUAzwr.js";const k="_regular_w7g0g_114",L="_medium_w7g0g_117",q="_underline_w7g0g_123",S="_dark_w7g0g_129",$="_white_w7g0g_132",C="_sans_w7g0g_135",z="_serif_w7g0g_138",G="_mono_w7g0g_141",j="_italic_w7g0g_144",e={"display-typography":"_display-typography_w7g0g_106","display-xl":"_display-xl_w7g0g_106","display-lg":"_display-lg_w7g0g_110",regular:k,medium:L,"none-line":"_none-line_w7g0g_120",underline:q,"line-through":"_line-through_w7g0g_126",dark:S,white:$,sans:C,serif:z,mono:G,italic:j};function u({text:y,size:s,weight:l,color:i,textDecoration:t,italic:_,fontStyle:r}){const w=s&&e[s]?e[s]:"",h=l&&e[l]?e[l]:"",f=i&&e[i]?e[i]:"",x=t&&e[t]?e[t]:"",v=_?e.italic:"",T=r&&e[r]?e[r]:"";return D.jsx("p",{className:`${e["display-typography"]} 
        ${w} 
        ${h} 
        ${f} 
        ${x} 
        ${v} 
        ${T}`,children:y})}u.__docgenInfo={description:"",methods:[],displayName:"DisplayTypography",props:{text:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'display-xl' | 'display-lg'",elements:[{name:"literal",value:"'display-xl'"},{name:"literal",value:"'display-lg'"}]},description:""},weight:{required:!1,tsType:{name:"union",raw:"'regular' | 'medium'",elements:[{name:"literal",value:"'regular'"},{name:"literal",value:"'medium'"}]},description:""},color:{required:!1,tsType:{name:"union",raw:"'dark' | 'white'",elements:[{name:"literal",value:"'dark'"},{name:"literal",value:"'white'"}]},description:""},textDecoration:{required:!1,tsType:{name:"union",raw:"'none-line' | 'underline' | 'line-through'",elements:[{name:"literal",value:"'none-line'"},{name:"literal",value:"'underline'"},{name:"literal",value:"'line-through'"}]},description:""},italic:{required:!1,tsType:{name:"boolean"},description:""},fontStyle:{required:!1,tsType:{name:"union",raw:"'sans' | 'serif' | 'mono'",elements:[{name:"literal",value:"'sans'"},{name:"literal",value:"'serif'"},{name:"literal",value:"'mono'"}]},description:""}}};const N={title:"ui/components/atoms/display-typography",component:u,argTypes:{size:{control:"select",options:["display-xl","display-lg"]},weight:{control:"select",options:["regular","medium"]},color:{control:"select",options:["dark","white"]},textDecoration:{control:"select",options:["none-line","underline","line-through"]},italic:{control:"boolean"},fontStyle:{control:"select",options:["sans","serif","mono"]}}},a={args:{text:"Display 0123456",size:"display-xl",weight:"medium",color:"dark",fontStyle:"sans"}},n={args:{text:"Landing Title LG",size:"display-lg",weight:"regular",color:"white",fontStyle:"serif",italic:!0}};var o,p,c;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    text: 'Display 0123456',
    size: 'display-xl',
    weight: 'medium',
    color: 'dark',
    fontStyle: 'sans'
  }
}`,...(c=(p=a.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var d,g,m;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    text: 'Landing Title LG',
    size: 'display-lg',
    weight: 'regular',
    color: 'white',
    fontStyle: 'serif',
    italic: true
  }
}`,...(m=(g=n.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};const X=["DisplayXL","DisplayLG"];export{n as DisplayLG,a as DisplayXL,X as __namedExportsOrder,N as default};
