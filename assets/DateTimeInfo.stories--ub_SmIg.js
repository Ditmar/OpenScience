import{j as n}from"./jsx-runtime-BlDnFLNC.js";import"./index-Cu9bd8lq.js";import{I as W}from"./Icon-D5j0UpP7.js";import{B as z}from"./Box-BBceZwc3.js";import{T as Y}from"./Typography-D3JxyuuA.js";import"./iframe-DktV80Es.js";import"../sb-preview/runtime.js";import"./dynamic-import-helper-BheWnx7M.js";import"./ThemeProvider-D3ezHYkw.js";import"./tokens-DwDgzOfO.js";import"./defaultTheme-rC0upSna.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-B34fLoo2.js";import"./index-BaAsS3ug.js";import"./extendSxProp-DalUrZEi.js";import"./DefaultPropsProvider-15asn56a.js";import"./useEnhancedEffect-BAizwhs3.js";import"./index-DKv1IMza.js";import"./CircularProgress-DzE2GJp7.js";import"./styled-Cti5eKTv.js";import"./extends-CF3RwP-h.js";import"./memoTheme-mmm0-7lI.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";function Z(c){const u=new Date,o=new Date(c);if(Number.isNaN(o.getTime()))return"Invalid date";const r=Math.floor((u.getTime()-o.getTime())/1e3);if(r<60)return`${r.toString()} second${r===1?"":"s"} ago`;const t=Math.floor(r/60);if(t<60)return`${t.toString()} minute${t===1?"":"s"} ago`;const m=Math.floor(t/60);if(m<24)return`${m.toString()} hour${m===1?"":"s"} ago`;const s=Math.floor(m/24);if(s<30)return`${s.toString()} day${s===1?"":"s"} ago`;const a=Math.floor(s/30);if(a<12)return`${a.toString()} month${a===1?"":"s"} ago`;const l=Math.floor(a/12);return`${l.toString()} year${l===1?"":"s"} ago`}const ee="_container_16mle_124",te="_icon_16mle_130",oe="_text_16mle_147",i={container:ee,icon:te,text:oe,"icon-right":"_icon-right_16mle_160","size--large":"_size--large_16mle_164","size--medium":"_size--medium_16mle_172","size--small":"_size--small_16mle_180"};function X({timestamp:c,showIcon:u=!0,iconPosition:o="left",size:r="large",format:t}){const s=(l=>{if(t)return t(l);const _=new Date(l);return Number.isNaN(_.getTime())?"Invalid date":Z(_)})(c),a=[i.container,i[`size--${r}`],o==="right"?i["icon-right"]:""].filter(Boolean).join(" ");return n.jsxs(z,{className:a,children:[u&&o==="left"&&n.jsx(z,{className:i.icon,component:"span","aria-hidden":"true",children:n.jsx(W,{iconName:"fi-rr-calendar"})}),n.jsx(Y,{className:i.text,component:"span",children:s}),u&&o==="right"&&n.jsx(z,{className:i.icon,component:"span","aria-hidden":"true",children:n.jsx(W,{iconName:"fi-rr-clock-five"})})]})}X.__docgenInfo={description:"",methods:[],displayName:"DateTimeInfo",props:{timestamp:{required:!0,tsType:{name:"union",raw:"string | Date",elements:[{name:"string"},{name:"Date"}]},description:""},showIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},iconPosition:{required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'left'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'large'",computed:!1}},format:{required:!1,tsType:{name:"signature",type:"function",raw:"(ts: string | Date) => string",signature:{arguments:[{type:{name:"union",raw:"string | Date",elements:[{name:"string"},{name:"Date"}]},name:"ts"}],return:{name:"string"}}},description:""}}};const De={title:"ui/components/atoms/date-time-info",component:X,tags:["autodocs"],argTypes:{iconPosition:{control:"select",options:["left","right"]},size:{control:"select",options:["small","medium","large"]},showIcon:{control:"boolean"},timestamp:{control:"text"}}},re=new Date(Date.now()-2*60*1e3),e=c=>({args:{timestamp:re,...c}}),p=e({showIcon:!0,iconPosition:"left",size:"small"}),d=e({showIcon:!0,iconPosition:"left",size:"medium"}),g=e({showIcon:!0,iconPosition:"left",size:"large"}),h=e({showIcon:!0,iconPosition:"right",size:"small"}),f=e({showIcon:!0,iconPosition:"right",size:"medium"}),I=e({showIcon:!0,iconPosition:"right",size:"large"}),S=e({showIcon:!1,size:"small"}),w=e({showIcon:!1,size:"medium"}),y=e({showIcon:!1,size:"large"});var T,x,D;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`createStory({
  showIcon: true,
  iconPosition: 'left',
  size: 'small'
})`,...(D=(x=p.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var N,$,v;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`createStory({
  showIcon: true,
  iconPosition: 'left',
  size: 'medium'
})`,...(v=($=d.parameters)==null?void 0:$.docs)==null?void 0:v.source}}};var L,M,P;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`createStory({
  showIcon: true,
  iconPosition: 'left',
  size: 'large'
})`,...(P=(M=g.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var j,R,b;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:`createStory({
  showIcon: true,
  iconPosition: 'right',
  size: 'small'
})`,...(b=(R=h.parameters)==null?void 0:R.docs)==null?void 0:b.source}}};var q,B,V;f.parameters={...f.parameters,docs:{...(q=f.parameters)==null?void 0:q.docs,source:{originalSource:`createStory({
  showIcon: true,
  iconPosition: 'right',
  size: 'medium'
})`,...(V=(B=f.parameters)==null?void 0:B.docs)==null?void 0:V.source}}};var E,O,k;I.parameters={...I.parameters,docs:{...(E=I.parameters)==null?void 0:E.docs,source:{originalSource:`createStory({
  showIcon: true,
  iconPosition: 'right',
  size: 'large'
})`,...(k=(O=I.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};var C,A,F;S.parameters={...S.parameters,docs:{...(C=S.parameters)==null?void 0:C.docs,source:{originalSource:`createStory({
  showIcon: false,
  size: 'small'
})`,...(F=(A=S.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};var G,H,J;w.parameters={...w.parameters,docs:{...(G=w.parameters)==null?void 0:G.docs,source:{originalSource:`createStory({
  showIcon: false,
  size: 'medium'
})`,...(J=(H=w.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,Q,U;y.parameters={...y.parameters,docs:{...(K=y.parameters)==null?void 0:K.docs,source:{originalSource:`createStory({
  showIcon: false,
  size: 'large'
})`,...(U=(Q=y.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};const Ne=["SmallLeftWithIcon","MediumLeftWithIcon","LargeLeftWithIcon","SmallRightWithIcon","MediumRightWithIcon","LargeRightWithIcon","SmallWithoutIcon","MediumWithoutIcon","LargeWithoutIcon"];export{g as LargeLeftWithIcon,I as LargeRightWithIcon,y as LargeWithoutIcon,d as MediumLeftWithIcon,f as MediumRightWithIcon,w as MediumWithoutIcon,p as SmallLeftWithIcon,h as SmallRightWithIcon,S as SmallWithoutIcon,Ne as __namedExportsOrder,De as default};
