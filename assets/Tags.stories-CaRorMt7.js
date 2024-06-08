import{j as l}from"./jsx-runtime-_e34SzbC.js";import{r as T}from"./index-DVXBtNgz.js";function t({labels:x,variant:k="default"}){const[b,s]=T.useState(null);return l.jsx("ul",{className:`tags ${k}`,children:x.map((n,o)=>l.jsx("li",{className:`tag ${b===o?"hovered":""}`,onMouseEnter:()=>{s(o)},onMouseLeave:()=>{s(null)},children:n},n))})}t.defaultProps={variant:"default"};t.__docgenInfo={description:"",methods:[],displayName:"Tags",props:{labels:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'black' | 'large-text'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'black'"},{name:"literal",value:"'large-text'"}]},description:"",defaultValue:{value:"'default'",computed:!1}}}};const P={title:"ui/components/atoms/Tags",component:t,argTypes:{labels:{Control:"array"},variant:{control:"radio",options:["default","black","large-text"]}}},a={args:{labels:["Workings","Optimism","Meaning","Promoting"],variant:"default"}},e={args:{labels:["Workings","Optimism","Meaning","Promoting"],variant:"black"}},r={args:{labels:["Workings","Optimism","Meaning","Promoting"],variant:"large-text"}};var i,m,g;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    labels: ['Workings', 'Optimism', 'Meaning', 'Promoting'],
    variant: 'default'
  }
}`,...(g=(m=a.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var c,u,p;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    labels: ['Workings', 'Optimism', 'Meaning', 'Promoting'],
    variant: 'black'
  }
}`,...(p=(u=e.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var d,f,v;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    labels: ['Workings', 'Optimism', 'Meaning', 'Promoting'],
    variant: 'large-text'
  }
}`,...(v=(f=r.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const y=["Default","BlackTags","LargeTextTags"];export{e as BlackTags,a as Default,r as LargeTextTags,y as __namedExportsOrder,P as default};
