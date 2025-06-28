import{j as e}from"./jsx-runtime-BlDnFLNC.js";import{I as r}from"./icons-Dqqr9IZ9.js";import"./index-Cu9bd8lq.js";import"./index-gagdKHFB.js";const t={"hint-text":"_hint-text_xylfa_2","hint-text--small":"_hint-text--small_xylfa_9","hint-text__icon":"_hint-text__icon_xylfa_13","hint-text--medium":"_hint-text--medium_xylfa_18","hint-text--large":"_hint-text--large_xylfa_27","hint-text__icon--right":"_hint-text__icon--right_xylfa_41","hint-text__text":"_hint-text__text_xylfa_45"},l=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_19_42727)">
<path d="M12 0C9.62663 0 7.30655 0.703788 5.33316 2.02236C3.35977 3.34094 1.8217 5.21509 0.913451 7.4078C0.00519943 9.60051 -0.232441 12.0133 0.230582 14.3411C0.693605 16.6689 1.83649 18.8071 3.51472 20.4853C5.19295 22.1635 7.33115 23.3064 9.65892 23.7694C11.9867 24.2324 14.3995 23.9948 16.5922 23.0866C18.7849 22.1783 20.6591 20.6402 21.9776 18.6668C23.2962 16.6935 24 14.3734 24 12C23.9966 8.81846 22.7312 5.76821 20.4815 3.51852C18.2318 1.26883 15.1815 0.00344108 12 0ZM12 22C10.0222 22 8.08879 21.4135 6.4443 20.3147C4.79981 19.2159 3.51809 17.6541 2.76121 15.8268C2.00433 13.9996 1.8063 11.9889 2.19215 10.0491C2.578 8.10929 3.53041 6.32746 4.92894 4.92893C6.32746 3.53041 8.10929 2.578 10.0491 2.19215C11.9889 1.8063 13.9996 2.00433 15.8268 2.7612C17.6541 3.51808 19.2159 4.79981 20.3147 6.4443C21.4135 8.08879 22 10.0222 22 12C21.9971 14.6513 20.9426 17.1931 19.0679 19.0679C17.1931 20.9426 14.6513 21.9971 12 22Z" fill="#151A2D"/>
<path d="M12 10H11C10.7348 10 10.4804 10.1054 10.2929 10.2929C10.1054 10.4804 10 10.7348 10 11C10 11.2652 10.1054 11.5196 10.2929 11.7071C10.4804 11.8946 10.7348 12 11 12H12V18C12 18.2652 12.1054 18.5196 12.2929 18.7071C12.4804 18.8946 12.7348 19 13 19C13.2652 19 13.5196 18.8946 13.7071 18.7071C13.8946 18.5196 14 18.2652 14 18V12C14 11.4696 13.7893 10.9609 13.4142 10.5858C13.0391 10.2107 12.5304 10 12 10Z" fill="#151A2D"/>
<path d="M12 8C12.8284 8 13.5 7.32843 13.5 6.5C13.5 5.67157 12.8284 5 12 5C11.1716 5 10.5 5.67157 10.5 6.5C10.5 7.32843 11.1716 8 12 8Z" fill="#151A2D"/>
</g>
<defs>
<clipPath id="clip0_19_42727">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`;function C({text:g,size:f="medium",className:y=""}){const n=t[`hint-text--${f}`];return e.jsxs("div",{"data-testid":"hint-text",className:`${t["hint-text"]} ${n} ${y}`,children:[e.jsx(r,{"data-testid":"hint-icon-left",src:l,className:`${t["hint-text__icon"]} ${n}`}),e.jsx("span",{className:t["hint-text__text"],children:g}),e.jsx(r,{"data-testid":"hint-icon-right",src:l,className:`${t["hint-text__icon"]} ${t["hint-text__icon--right"]} ${n}`})]})}C.__docgenInfo={description:"",methods:[],displayName:"HintText",props:{text:{required:!0,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const z={title:"atoms/HintText",component:C,argTypes:{text:{control:"text"},size:{control:{type:"select"},options:["small","medium","large"]}}},i={args:{text:"Hint Text",size:"small"}},a={args:{text:"Hint Text",size:"medium"}},s={args:{text:"Hint Text",size:"large"}};var o,m,c;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    text: 'Hint Text',
    size: 'small'
  }
}`,...(c=(m=i.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var x,d,_;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    text: 'Hint Text',
    size: 'medium'
  }
}`,...(_=(d=a.parameters)==null?void 0:d.docs)==null?void 0:_.source}}};var p,h,u;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    text: 'Hint Text',
    size: 'large'
  }
}`,...(u=(h=s.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};const $=["Small","Medium","Large"];export{s as Large,a as Medium,i as Small,$ as __namedExportsOrder,z as default};
