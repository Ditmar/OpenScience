import{j as e}from"./jsx-runtime-BlDnFLNC.js";import"./index-Cu9bd8lq.js";import{c as j}from"./createSvgIcon-B1R5tJFm.js";import{u as N}from"./useTheme-GGd3Hxjm.js";import{B as q}from"./Box-CkejiIQM.js";import{T as C}from"./Typography-DK-u79nW.js";import"./memoTheme-BgjNuGui.js";import"./DefaultPropsProvider-C35kl-Dw.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-B34fLoo2.js";import"./extends-CF3RwP-h.js";import"./index-CfwTURGP.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";const c=j(e.jsx("path",{d:"M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"})),t={"hint-text":"_hint-text_19y3z_2","hint-text--disabled":"_hint-text--disabled_19y3z_8","hint-text__text":"_hint-text__text_19y3z_11","hint-text__text--small":"_hint-text__text--small_19y3z_20","hint-text__text--medium":"_hint-text__text--medium_19y3z_24","hint-text__text--large":"_hint-text__text--large_19y3z_28","hint-text__icon":"_hint-text__icon_19y3z_32","hint-text__icon--small":"_hint-text__icon--small_19y3z_35","hint-text__icon--medium":"_hint-text__icon--medium_19y3z_38","hint-text__icon--large":"_hint-text__icon--large_19y3z_41"};function $({text:H,size:r="medium",disabled:o=!1,className:v=""}){const m=N(),l=o?m.palette.text.disabled:"#151A2D",S=o?m.palette.text.disabled:m.palette.text.secondary;return e.jsxs(q,{"data-testid":"hint-text",className:`${t["hint-text"]} ${o?t["hint-text--disabled"]:""} ${v}`,sx:{transition:"opacity 0.2s ease"},children:[e.jsx(c,{"data-testid":"hint-icon-left",className:`${t["hint-text__icon"]} ${t[`hint-text__icon--${r}`]}`,sx:{color:l}}),e.jsx(C,{variant:"body2",className:`${t["hint-text__text"]} ${t[`hint-text__text--${r}`]}`,sx:{color:S},children:H}),e.jsx(c,{"data-testid":"hint-icon-right",className:`${t["hint-text__icon"]} ${t[`hint-text__icon--${r}`]}`,sx:{color:l}})]})}$.__docgenInfo={description:"",methods:[],displayName:"HintText",props:{text:{required:!0,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const F={title:"ui/Components/Atoms/HintText",component:$,argTypes:{text:{control:"text"},size:{control:{type:"select"},options:["small","medium","large"]},disabled:{control:"boolean"}}},s={args:{text:"Hint Text",size:"small"}},a={args:{text:"Hint Text",size:"medium"}},i={args:{text:"Hint Text",size:"large"}},n={args:{text:"Hint Text",size:"medium",disabled:!0}};var x,_,d;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    text: 'Hint Text',
    size: 'small'
  }
}`,...(d=(_=s.parameters)==null?void 0:_.docs)==null?void 0:d.source}}};var p,u,h;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    text: 'Hint Text',
    size: 'medium'
  }
}`,...(h=(u=a.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var g,y,f;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    text: 'Hint Text',
    size: 'large'
  }
}`,...(f=(y=i.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var z,T,b;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    text: 'Hint Text',
    size: 'medium',
    disabled: true
  }
}`,...(b=(T=n.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};const G=["Small","Medium","Large","Disabled"];export{n as Disabled,i as Large,a as Medium,s as Small,G as __namedExportsOrder,F as default};
