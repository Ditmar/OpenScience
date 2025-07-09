import{j as r}from"./jsx-runtime-BlDnFLNC.js";import{I as b}from"./icons-Dqqr9IZ9.js";import{i as f}from"./downloads-Dyv-uEx2.js";import"./index-Cu9bd8lq.js";import"./index-gagdKHFB.js";const t={"close-download-button":"_close-download-button_rzrex_1","button-icon":"_button-icon_rzrex_36","button-icon--primary":"_button-icon--primary_rzrex_45","button-icon--secondary":"_button-icon--secondary_rzrex_48"};function g(C){const{icon:s,onClick:h,color:_}=C,y=t[_];return r.jsx("button",{className:`${t["close-download-button"]} ${y}`,"aria-label":"Abrir",onClick:h,children:s&&r.jsx(b,{"data-testid":"button-icon",src:s,className:t.buttonIcon})})}g.__docgenInfo={description:"",methods:[],displayName:"CloseDownloadButton",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},icon:{required:!1,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const x=`<svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.72196 10C5.19098 8.36495 2.65955 6.7299 0 5.01177C2.6232 3.31545 5.18735 1.6579 7.75149 0C7.83418 0.0533133 7.91732 0.106627 8 0.159939C6.94827 1.53846 5.93424 2.93499 4.82571 4.28616C4.40139 4.80336 4.3873 5.17483 4.81299 5.69584C5.92061 7.0529 6.93645 8.45323 7.9891 9.83625C7.90005 9.8906 7.81101 9.9453 7.72196 10Z" fill="#FCFCFC"/>
</svg>
`,v=`<svg width="24" height="24" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.50624 6L7.45937 1.63651C7.6279 1.48807 7.62411 1.25065 7.45092 1.10623C7.27772 0.9618 7.00076 0.965055 6.83229 1.11349L1.58227 5.7385C1.41702 5.88405 1.41702 6.11595 1.58227 6.2615L6.83229 10.8865C7.00076 11.035 7.27772 11.0382 7.45092 10.8938C7.62411 10.7494 7.6279 10.5119 7.45937 10.3635L2.50624 6Z" fill="white"/>
</svg>
`,T={title:"ui/components/atoms/close-download-button",component:g,argTypes:{onClick:{action:"click"}}},o={args:{children:"close",icon:x}},e={args:{children:"close_simple",icon:v}},n={args:{children:"downloads",icon:f}};var a,c,i;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    children: 'close',
    icon: close
  }
}`,...(i=(c=o.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var l,d,m;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: 'close_simple',
    icon: close_simple
  }
}`,...(m=(d=e.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,u,w;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: 'downloads',
    icon: downloads
  }
}`,...(w=(u=n.parameters)==null?void 0:u.docs)==null?void 0:w.source}}};const j=["CloseButton","CloseSimpleButton","DownloadButton"];export{o as CloseButton,e as CloseSimpleButton,n as DownloadButton,j as __namedExportsOrder,T as default};
