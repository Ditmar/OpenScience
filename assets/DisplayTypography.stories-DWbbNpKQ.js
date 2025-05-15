import{j as D}from"./jsx-runtime-DRTy3Uxn.js";import"./index-BBkUAzwr.js";const k="_regular_1a3id_74",L="_medium_1a3id_77",q="_underline_1a3id_83",S="_dark_1a3id_89",$="_white_1a3id_92",C="_sans_1a3id_95",z="_serif_1a3id_98",G="_mono_1a3id_101",j="_italic_1a3id_104",e={"display-typography":"_display-typography_1a3id_66","display-xl":"_display-xl_1a3id_66","display-lg":"_display-lg_1a3id_70",regular:k,medium:L,"none-line":"_none-line_1a3id_80",underline:q,"line-through":"_line-through_1a3id_86",dark:S,white:$,sans:C,serif:z,mono:G,italic:j};function y({text:_,size:n,weight:s,color:l,textDecoration:t,italic:g,fontStyle:r}){const h=n&&e[n]?e[n]:"",f=s&&e[s]?e[s]:"",w=l&&e[l]?e[l]:"",x=t&&e[t]?e[t]:"",v=g?e.italic:"",T=r&&e[r]?e[r]:"";return D.jsx("p",{className:`${e["display-typography"]} 
        ${h} 
        ${f} 
        ${w} 
        ${x} 
        ${v} 
        ${T}`,children:_})}y.__docgenInfo={description:"",methods:[],displayName:"DisplayTypography",props:{text:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'display-xl' | 'display-lg'",elements:[{name:"literal",value:"'display-xl'"},{name:"literal",value:"'display-lg'"}]},description:""},weight:{required:!1,tsType:{name:"union",raw:"'regular' | 'medium'",elements:[{name:"literal",value:"'regular'"},{name:"literal",value:"'medium'"}]},description:""},color:{required:!1,tsType:{name:"union",raw:"'dark' | 'white'",elements:[{name:"literal",value:"'dark'"},{name:"literal",value:"'white'"}]},description:""},textDecoration:{required:!1,tsType:{name:"union",raw:"'none-line' | 'underline' | 'line-through'",elements:[{name:"literal",value:"'none-line'"},{name:"literal",value:"'underline'"},{name:"literal",value:"'line-through'"}]},description:""},italic:{required:!1,tsType:{name:"boolean"},description:""},fontStyle:{required:!1,tsType:{name:"union",raw:"'sans' | 'serif' | 'mono'",elements:[{name:"literal",value:"'sans'"},{name:"literal",value:"'serif'"},{name:"literal",value:"'mono'"}]},description:""}}};const N={title:"ui/components/atoms/display-typography",component:y,argTypes:{size:{control:"select",options:["display-xl","display-lg"]},weight:{control:"select",options:["regular","medium"]},color:{control:"select",options:["dark","white"]},textDecoration:{control:"select",options:["none-line","underline","line-through"]},italic:{control:"boolean"},fontStyle:{control:"select",options:["sans","serif","mono"]}}},a={args:{text:"Display 0123456",size:"display-xl",weight:"medium",color:"dark",fontStyle:"sans"}},i={args:{text:"Landing Title LG",size:"display-lg",weight:"regular",color:"white",fontStyle:"serif",italic:!0}};var o,d,p;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    text: 'Display 0123456',
    size: 'display-xl',
    weight: 'medium',
    color: 'dark',
    fontStyle: 'sans'
  }
}`,...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var c,m,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    text: 'Landing Title LG',
    size: 'display-lg',
    weight: 'regular',
    color: 'white',
    fontStyle: 'serif',
    italic: true
  }
}`,...(u=(m=i.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const X=["DisplayXL","DisplayLG"];export{i as DisplayLG,a as DisplayXL,X as __namedExportsOrder,N as default};
