import{j as t}from"./jsx-runtime-DRTy3Uxn.js";import{r as c}from"./index-BBkUAzwr.js";import{L as n}from"./LabelDate-CuOO9EjH.js";import{V as b}from"./LabelVol-SrYWhn_D.js";import{T as g}from"./Thumbnail-B7NyhZII.js";const v=[{id:1,attributes:{title:"clima",date:"2023-04-15",portrait:{data:{id:1,attributes:{url:"https://firebasestorage.googleapis.com/v0/b/seminario-9c7a7.appspot.com/o/jinx.jpg?alt=media&token=0202a015-c2e3-45eb-82dd-a59bf3b7e1e3"}}},year_volume:{data:{id:1,attributes:{Year:"2024",Volumes:"2"}}}}},{id:2,attributes:{title:"estadistica",date:"2023-05-20",portrait:{data:{id:2,attributes:{url:"https://firebasestorage.googleapis.com/v0/b/seminario-9c7a7.appspot.com/o/jinx.jpg?alt=media&token=0202a015-c2e3-45eb-82dd-a59bf3b7e1e3"}}},year_volume:{data:{id:2,attributes:{Year:"2022",Volumes:"1"}}}}},{id:3,attributes:{title:"desinformacion",date:"2023-06-25",portrait:{data:{id:3,attributes:{url:"https://firebasestorage.googleapis.com/v0/b/seminario-9c7a7.appspot.com/o/jinx.jpg?alt=media&token=0202a015-c2e3-45eb-82dd-a59bf3b7e1e3"}}},year_volume:{data:{id:3,attributes:{Year:"2022",Volumes:"1"}}}}},{id:4,attributes:{title:"clima 4",date:"2023-07-30",portrait:{data:{id:4,attributes:{url:"https://firebasestorage.googleapis.com/v0/b/seminario-9c7a7.appspot.com/o/jinx.jpg?alt=media&token=0202a015-c2e3-45eb-82dd-a59bf3b7e1e3"}}},year_volume:{data:{id:4,attributes:{Year:"2024",Volumes:"1"}}}}},{id:5,attributes:{title:"clima 5",date:"2023-08-05",portrait:{data:{id:5,attributes:{url:"https://firebasestorage.googleapis.com/v0/b/seminario-9c7a7.appspot.com/o/jinx.jpg?alt=media&token=0202a015-c2e3-45eb-82dd-a59bf3b7e1e3"}}},year_volume:{data:{id:5,attributes:{Year:"2024",Volumes:"1"}}}}},{id:6,attributes:{title:"clima 6",date:"2023-09-10",portrait:{data:{id:6,attributes:{url:"https://firebasestorage.googleapis.com/v0/b/seminario-9c7a7.appspot.com/o/jinx.jpg?alt=media&token=0202a015-c2e3-45eb-82dd-a59bf3b7e1e3"}}},year_volume:{data:{id:6,attributes:{Year:"2024",Volumes:"1"}}}}}],f={data:v};function r(){const[m]=c.useState(f.data);return t.jsxs("div",{className:"volume-list__container",children:[t.jsx("h1",{className:"volume-list__title",children:"volumenes"}),t.jsx("div",{className:"volume-list",children:m.map(({id:e,attributes:l})=>{const{date:d,portrait:{data:{attributes:{url:u}}},year_volume:{data:{attributes:{Volumes:p}}}}=l;return t.jsxs("div",{className:"volume-list__item",children:[t.jsx("div",{className:"volume-list-thumbnail",children:t.jsx(g,{pathImage:u,alt:`Volume ${p}`})}),t.jsx(n,{date:new Date(d)}),t.jsx(b,{volumen:"Vol.",id:e})]},e)})})]})}r.__docgenInfo={description:"",methods:[],displayName:"VolumeList"};const y={title:"ui/components/molecules/volume-list",component:r},a={};var o,i,s;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:"{}",...(s=(i=a.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const k=["Default"];export{a as Default,k as __namedExportsOrder,y as default};