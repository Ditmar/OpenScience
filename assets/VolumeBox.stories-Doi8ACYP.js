import{j as e}from"./jsx-runtime-DRTy3Uxn.js";import{R as c}from"./index-BBkUAzwr.js";import{L as l,f as L}from"./LabelDate-CuOO9EjH.js";import{V as s}from"./LabelVol-SrYWhn_D.js";function o({children:f,className:D=""}){const h=a=>L(a).replace(" | ",". "),v=c.Children.map(f,a=>{if(c.isValidElement(a)&&c.isValidElement(a)&&a.type===l){const m=a.props.date,g=h(m);return e.jsx("span",{className:"custom-labeldate",children:g})}return a});return e.jsx("div",{className:`volume-box ${D}`,children:e.jsx("div",{className:"content",children:v})})}o.__docgenInfo={description:"",methods:[],displayName:"VolumeBox",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const E={title:"ui/components/molecules/volume-box",component:o},r={args:{children:e.jsxs(o,{className:"custom-label-date-color",children:[e.jsx(l,{date:new Date(2023,3,16)}),e.jsx("span",{className:"separator",children:"│"}),e.jsx(s,{volumen:"Vol.",id:1}),e.jsx("span",{className:"separator",children:"│"}),e.jsx(s,{volumen:"Nu.",id:1})]})}},n={args:{children:e.jsxs(o,{className:"custom-label-date-color",children:[e.jsx(l,{date:new Date(2023,3,16)}),e.jsx("span",{className:"separator",children:"│"}),e.jsx(s,{volumen:"Tome.",id:2}),e.jsx("span",{className:"separator",children:"│"}),e.jsx(s,{volumen:"Nu.",id:2})]})}},t={args:{children:e.jsxs(o,{className:"custom-label-date-color",children:[e.jsx(l,{date:new Date(2023,11,19)}),e.jsx("span",{className:"separator",children:"│"}),e.jsx(s,{volumen:"Part.",id:3}),e.jsx("span",{className:"separator",children:"│"}),e.jsx(s,{volumen:"Nu.",id:3})]})}};var d,u,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: <VolumeBox className="custom-label-date-color">
        <LabelDate date={new Date(2023, 3, 16)} />
        <span className="separator">│</span>
        <LabelVol volumen="Vol." id={1} />
        <span className="separator">│</span>
        <LabelVol volumen="Nu." id={1} />
      </VolumeBox>
  }
}`,...(p=(u=r.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var i,x,N;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: <VolumeBox className="custom-label-date-color">
        <LabelDate date={new Date(2023, 3, 16)} />
        <span className="separator">│</span>
        <LabelVol volumen="Tome." id={2} />
        <span className="separator">│</span>
        <LabelVol volumen="Nu." id={2} />
      </VolumeBox>
  }
}`,...(N=(x=n.parameters)==null?void 0:x.docs)==null?void 0:N.source}}};var V,j,b;t.parameters={...t.parameters,docs:{...(V=t.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    children: <VolumeBox className="custom-label-date-color">
        <LabelDate date={new Date(2023, 11, 19)} />
        <span className="separator">│</span>
        <LabelVol volumen="Part." id={3} />
        <span className="separator">│</span>
        <LabelVol volumen="Nu." id={3} />
      </VolumeBox>
  }
}`,...(b=(j=t.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};const T=["Default","LargeVolume","RecentDate"];export{r as Default,n as LargeVolume,t as RecentDate,T as __namedExportsOrder,E as default};
