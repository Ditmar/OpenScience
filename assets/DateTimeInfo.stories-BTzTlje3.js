import{j as u}from"./jsx-runtime-BlDnFLNC.js";import"./index-Cu9bd8lq.js";import{I as _}from"./Icon-C71qLVFU.js";import"./iframe-CoHLAvK8.js";import"../sb-preview/runtime.js";import"./ThemeProvider-DDNvUqn8.js";import"./DefaultPropsProvider-DcRJznjO.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-B34fLoo2.js";import"./index-Cplt8kMj.js";import"./memoTheme-CPnQs7hc.js";import"./extends-CF3RwP-h.js";import"./CircularProgress-BGz3szpo.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";const X="_container_16mle_124",Y="_icon_16mle_130",Z="_text_16mle_147",n={container:X,icon:Y,text:Z,"icon-right":"_icon-right_16mle_160","size--large":"_size--large_16mle_164","size--medium":"_size--medium_16mle_172","size--small":"_size--small_16mle_180"};function ee(i){const l=new Date,o=new Date(i);if(Number.isNaN(o.getTime()))return"Invalid date";const r=Math.floor((l.getTime()-o.getTime())/1e3);if(r<60)return`${r.toString()} second${r===1?"":"s"} ago`;const t=Math.floor(r/60);if(t<60)return`${t.toString()} minute${t===1?"":"s"} ago`;const s=Math.floor(t/60);if(s<24)return`${s.toString()} hour${s===1?"":"s"} ago`;const c=Math.floor(s/24);if(c<30)return`${c.toString()} day${c===1?"":"s"} ago`;const a=Math.floor(c/30);if(a<12)return`${a.toString()} month${a===1?"":"s"} ago`;const m=Math.floor(a/12);return`${m.toString()} year${m===1?"":"s"} ago`}function U({timestamp:i,showIcon:l=!0,iconPosition:o="left",size:r="large",format:t}){const s=[n.container,n[`size--${r}`],o==="right"?n["icon-right"]:""].filter(Boolean).join(" "),a=(m=>{if(t)return t(m);const z=new Date(m);return Number.isNaN(z.getTime())?"Invalid date":ee(z)})(i);return u.jsxs("div",{className:s,children:[l&&o==="left"&&u.jsx(_,{iconName:"fi-rr-calendar",className:n.icon,"aria-hidden":"true"}),u.jsx("span",{className:n.text,children:a}),l&&o==="right"&&u.jsx(_,{iconName:"fi-rr-clock-five",className:n.icon,"aria-hidden":"true"})]})}U.__docgenInfo={description:"",methods:[],displayName:"DateTimeInfo",props:{timestamp:{required:!0,tsType:{name:"union",raw:"string | Date",elements:[{name:"string"},{name:"Date"}]},description:""},showIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},iconPosition:{required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'left'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'large'",computed:!1}},format:{required:!1,tsType:{name:"signature",type:"function",raw:"(ts: string | Date) => string",signature:{arguments:[{type:{name:"union",raw:"string | Date",elements:[{name:"string"},{name:"Date"}]},name:"ts"}],return:{name:"string"}}},description:""}}};const he={title:"ui/components/atoms/date-time-info",component:U,tags:["autodocs"],argTypes:{iconPosition:{control:"select",options:["left","right"]},size:{control:"select",options:["small","medium","large"]},showIcon:{control:"boolean"},timestamp:{control:"text"}}},te=new Date(Date.now()-2*60*1e3),e=i=>({args:{timestamp:te,...i}}),d=e({showIcon:!0,iconPosition:"left",size:"small"}),p=e({showIcon:!0,iconPosition:"left",size:"medium"}),g=e({showIcon:!0,iconPosition:"left",size:"large"}),h=e({showIcon:!0,iconPosition:"right",size:"small"}),f=e({showIcon:!0,iconPosition:"right",size:"medium"}),I=e({showIcon:!0,iconPosition:"right",size:"large"}),S=e({showIcon:!1,size:"small"}),w=e({showIcon:!1,size:"medium"}),y=e({showIcon:!1,size:"large"});var W,T,D;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`createStory({
  showIcon: true,
  iconPosition: 'left',
  size: 'small'
})`,...(D=(T=d.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var v,x,N;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`createStory({
  showIcon: true,
  iconPosition: 'left',
  size: 'medium'
})`,...(N=(x=p.parameters)==null?void 0:x.docs)==null?void 0:N.source}}};var $,L,M;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`createStory({
  showIcon: true,
  iconPosition: 'left',
  size: 'large'
})`,...(M=(L=g.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var P,j,R;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`createStory({
  showIcon: true,
  iconPosition: 'right',
  size: 'small'
})`,...(R=(j=h.parameters)==null?void 0:j.docs)==null?void 0:R.source}}};var b,q,V;f.parameters={...f.parameters,docs:{...(b=f.parameters)==null?void 0:b.docs,source:{originalSource:`createStory({
  showIcon: true,
  iconPosition: 'right',
  size: 'medium'
})`,...(V=(q=f.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};var E,O,k;I.parameters={...I.parameters,docs:{...(E=I.parameters)==null?void 0:E.docs,source:{originalSource:`createStory({
  showIcon: true,
  iconPosition: 'right',
  size: 'large'
})`,...(k=(O=I.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};var B,C,A;S.parameters={...S.parameters,docs:{...(B=S.parameters)==null?void 0:B.docs,source:{originalSource:`createStory({
  showIcon: false,
  size: 'small'
})`,...(A=(C=S.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};var F,G,H;w.parameters={...w.parameters,docs:{...(F=w.parameters)==null?void 0:F.docs,source:{originalSource:`createStory({
  showIcon: false,
  size: 'medium'
})`,...(H=(G=w.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var J,K,Q;y.parameters={...y.parameters,docs:{...(J=y.parameters)==null?void 0:J.docs,source:{originalSource:`createStory({
  showIcon: false,
  size: 'large'
})`,...(Q=(K=y.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const fe=["SmallLeftWithIcon","MediumLeftWithIcon","LargeLeftWithIcon","SmallRightWithIcon","MediumRightWithIcon","LargeRightWithIcon","SmallWithoutIcon","MediumWithoutIcon","LargeWithoutIcon"];export{g as LargeLeftWithIcon,I as LargeRightWithIcon,y as LargeWithoutIcon,p as MediumLeftWithIcon,f as MediumRightWithIcon,w as MediumWithoutIcon,d as SmallLeftWithIcon,h as SmallRightWithIcon,S as SmallWithoutIcon,fe as __namedExportsOrder,he as default};
