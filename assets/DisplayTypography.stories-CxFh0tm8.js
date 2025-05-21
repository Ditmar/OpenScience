import{j as v}from"./jsx-runtime-DRTy3Uxn.js";import"./index-BBkUAzwr.js";const T="_regular_qgrbc_114",D="_medium_qgrbc_117",k="_underline_qgrbc_123",L="_dark_qgrbc_129",S="_white_qgrbc_132",$="_sans_qgrbc_135",C="_serif_qgrbc_138",z="_mono_qgrbc_141",G="_italic_qgrbc_144",e={"display-typography":"_display-typography_qgrbc_106","display-xl":"_display-xl_qgrbc_106","display-lg":"_display-lg_qgrbc_110",regular:T,medium:D,"none-line":"_none-line_qgrbc_120",underline:k,"line-through":"_line-through_qgrbc_126",dark:L,white:S,sans:$,serif:C,mono:z,italic:G};function g({text:y,size:s,weight:l,color:r,textDecoration:i,italic:_,fontStyle:t}){const h=s&&e[s]?e[s]:"",f=l&&e[l]?e[l]:"",q=r&&e[r]?e[r]:"",w=i&&e[i]?e[i]:"",x=_?e.italic:"",b=t&&e[t]?e[t]:"";return v.jsx("p",{className:`${e["display-typography"]} 
        ${h} 
        ${f} 
        ${q} 
        ${w} 
        ${x} 
        ${b}`,children:y})}g.__docgenInfo={description:"",methods:[],displayName:"DisplayTypography",props:{text:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'display-xl' | 'display-lg'",elements:[{name:"literal",value:"'display-xl'"},{name:"literal",value:"'display-lg'"}]},description:""},weight:{required:!1,tsType:{name:"union",raw:"'regular' | 'medium'",elements:[{name:"literal",value:"'regular'"},{name:"literal",value:"'medium'"}]},description:""},color:{required:!1,tsType:{name:"union",raw:"'dark' | 'white'",elements:[{name:"literal",value:"'dark'"},{name:"literal",value:"'white'"}]},description:""},textDecoration:{required:!1,tsType:{name:"union",raw:"'none-line' | 'underline' | 'line-through'",elements:[{name:"literal",value:"'none-line'"},{name:"literal",value:"'underline'"},{name:"literal",value:"'line-through'"}]},description:""},italic:{required:!1,tsType:{name:"boolean"},description:""},fontStyle:{required:!1,tsType:{name:"union",raw:"'sans' | 'serif' | 'mono'",elements:[{name:"literal",value:"'sans'"},{name:"literal",value:"'serif'"},{name:"literal",value:"'mono'"}]},description:""}}};const N={title:"ui/components/atoms/display-typography",component:g,argTypes:{size:{control:"select",options:["display-xl","display-lg"]},weight:{control:"select",options:["regular","medium"]},color:{control:"select",options:["dark","white"]},textDecoration:{control:"select",options:["none-line","underline","line-through"]},italic:{control:"boolean"},fontStyle:{control:"select",options:["sans","serif","mono"]}}},a={args:{text:"Display 0123",size:"display-xl",weight:"medium",color:"dark",fontStyle:"sans"}},n={args:{text:"Landing Title LG",size:"display-lg",weight:"regular",color:"white",fontStyle:"serif",italic:!0}};var o,c,p;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    text: 'Display 0123',
    size: 'display-xl',
    weight: 'medium',
    color: 'dark',
    fontStyle: 'sans'
  }
}`,...(p=(c=a.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var d,m,u;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    text: 'Landing Title LG',
    size: 'display-lg',
    weight: 'regular',
    color: 'white',
    fontStyle: 'serif',
    italic: true
  }
}`,...(u=(m=n.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const X=["DisplayXL","DisplayLG"];export{n as DisplayLG,a as DisplayXL,X as __namedExportsOrder,N as default};
