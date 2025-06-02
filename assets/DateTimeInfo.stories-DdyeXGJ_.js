import{j as g}from"./jsx-runtime-DRTy3Uxn.js";import{r as X}from"./index-BBkUAzwr.js";import{I as y}from"./Icon-BsgWFPDy.js";import"./iframe-d3-HLBI_.js";import"../sb-preview/runtime.js";import"./ThemeProvider-B8gfTc28.js";import"./DefaultPropsProvider-fl398NSV.js";import"./memoTheme-CfhylS2v.js";import"./CircularProgress-Bbqgy-uw.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";const ee="_container_16mle_124",te="_icon_16mle_130",oe="_text_16mle_147",l={container:ee,icon:te,text:oe,"icon-right":"_icon-right_16mle_160","size--large":"_size--large_16mle_164","size--medium":"_size--medium_16mle_172","size--small":"_size--small_16mle_180"};function se(e){const t=new Date,n=new Date(e);if(Number.isNaN(n.getTime()))return"Invalid date";const r=Math.floor((t.getTime()-n.getTime())/1e3);if(r<60)return`${String(r)} second${r===1?"":"s"} ago`;const o=Math.floor(r/60);if(o<60)return`${String(o)} minute${o===1?"":"s"} ago`;const a=Math.floor(o/60);if(a<24)return`${String(a)} hour${a===1?"":"s"} ago`;const i=Math.floor(a/24);if(i<30)return`${String(i)} day${i===1?"":"s"} ago`;const c=Math.floor(i/30);if(c<12)return`${String(c)} month${c===1?"":"s"} ago`;const u=Math.floor(c/12);return`${String(u)} year${u===1?"":"s"} ago`}function ne(e){const t=u=>u.toString().padStart(2,"0"),n=e.getFullYear(),r=t(e.getMonth()+1),o=t(e.getDate()),a=t(e.getHours()),i=t(e.getMinutes()),c=t(e.getSeconds());return`${String(n)}-${r}-${o} ${a}:${i}:${c}`}function Q({timestamp:e,showIcon:t=!0,iconPosition:n="left",size:r="large",format:o}){const[a,i]=X.useState(!1),c=[l.container,l[`size--${r}`],n==="right"?l["icon-right"]:""].filter(Boolean).join(" "),U=(m=>{if(o)return o(m);if(typeof m=="string"||m instanceof Date){if(a){const M=new Date(m);return Number.isNaN(M.getTime())?"Invalid date":ne(M)}return se(m)}return String(m)})(e);return g.jsxs("div",{className:c,children:[t&&n==="left"&&g.jsx(y,{iconName:"fi-rr-calendar",className:l.icon,"data-testid":"date-icon","aria-hidden":"true"}),g.jsx("button",{type:"button",className:l.text,onClick:()=>{i(m=>!m)},title:"Click to toggle relative/exact date",children:U}),t&&n==="right"&&g.jsx(y,{iconName:"fi-rr-clock-five",className:l.icon,"data-testid":"date-icon","aria-hidden":"true"})]})}Q.__docgenInfo={description:"",methods:[],displayName:"DateTimeInfo",props:{timestamp:{required:!0,tsType:{name:"union",raw:"string | Date",elements:[{name:"string"},{name:"Date"}]},description:""},showIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},iconPosition:{required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'left'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'large'",computed:!1}},format:{required:!1,tsType:{name:"signature",type:"function",raw:"(ts: string | Date) => string",signature:{arguments:[{type:{name:"union",raw:"string | Date",elements:[{name:"string"},{name:"Date"}]},name:"ts"}],return:{name:"string"}}},description:""}}};const he={title:"DateTimeInfo",component:Q,tags:["autodocs"],argTypes:{iconPosition:{control:"select",options:["left","right"]},size:{control:"select",options:["small","medium","large"]},showIcon:{control:"boolean"},timestamp:{control:"text"}}},s=new Date(Date.now()-2*60*1e3),d={args:{timestamp:s,showIcon:!0,iconPosition:"left",size:"small"}},p={args:{timestamp:s,showIcon:!0,iconPosition:"left",size:"medium"}},h={args:{timestamp:s,showIcon:!0,iconPosition:"left",size:"large"}},f={args:{timestamp:s,showIcon:!0,iconPosition:"right",size:"small"}},I={args:{timestamp:s,showIcon:!0,iconPosition:"right",size:"medium"}},w={args:{timestamp:s,showIcon:!0,iconPosition:"right",size:"large"}},S={args:{timestamp:s,showIcon:!1,size:"small"}},z={args:{timestamp:s,showIcon:!1,size:"medium"}},_={args:{timestamp:s,showIcon:!1,size:"large"}};var W,$,x;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    timestamp: twoMinutesAgo,
    showIcon: true,
    iconPosition: 'left',
    size: 'small'
  }
}`,...(x=($=d.parameters)==null?void 0:$.docs)==null?void 0:x.source}}};var D,v,N;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    timestamp: twoMinutesAgo,
    showIcon: true,
    iconPosition: 'left',
    size: 'medium'
  }
}`,...(N=(v=p.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};var T,L,P;h.parameters={...h.parameters,docs:{...(T=h.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    timestamp: twoMinutesAgo,
    showIcon: true,
    iconPosition: 'left',
    size: 'large'
  }
}`,...(P=(L=h.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var A,j,R;f.parameters={...f.parameters,docs:{...(A=f.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    timestamp: twoMinutesAgo,
    showIcon: true,
    iconPosition: 'right',
    size: 'small'
  }
}`,...(R=(j=f.parameters)==null?void 0:j.docs)==null?void 0:R.source}}};var b,q,E;I.parameters={...I.parameters,docs:{...(b=I.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    timestamp: twoMinutesAgo,
    showIcon: true,
    iconPosition: 'right',
    size: 'medium'
  }
}`,...(E=(q=I.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};var k,C,O;w.parameters={...w.parameters,docs:{...(k=w.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    timestamp: twoMinutesAgo,
    showIcon: true,
    iconPosition: 'right',
    size: 'large'
  }
}`,...(O=(C=w.parameters)==null?void 0:C.docs)==null?void 0:O.source}}};var V,B,F;S.parameters={...S.parameters,docs:{...(V=S.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    timestamp: twoMinutesAgo,
    showIcon: false,
    size: 'small'
  }
}`,...(F=(B=S.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var H,Y,Z;z.parameters={...z.parameters,docs:{...(H=z.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    timestamp: twoMinutesAgo,
    showIcon: false,
    size: 'medium'
  }
}`,...(Z=(Y=z.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var G,J,K;_.parameters={..._.parameters,docs:{...(G=_.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    timestamp: twoMinutesAgo,
    showIcon: false,
    size: 'large'
  }
}`,...(K=(J=_.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const fe=["SmallLeftWithIcon","MediumLeftWithIcon","LargeLeftWithIcon","SmallRightWithIcon","MediumRightWithIcon","LargeRightWithIcon","SmallWithoutIcon","MediumWithoutIcon","LargeWithoutIcon"];export{h as LargeLeftWithIcon,w as LargeRightWithIcon,_ as LargeWithoutIcon,p as MediumLeftWithIcon,I as MediumRightWithIcon,z as MediumWithoutIcon,d as SmallLeftWithIcon,f as SmallRightWithIcon,S as SmallWithoutIcon,fe as __namedExportsOrder,he as default};
