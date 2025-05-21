import{j as i}from"./jsx-runtime-BlDnFLNC.js";import{I as C}from"./icons-BAAZ7Gvn.js";import"./index-Cu9bd8lq.js";import"./index-gagdKHFB.js";const h="_secondary_11835_17",t={"button-burger":"_button-burger_11835_1",secondary:h,"button-icon":"_button-icon_11835_49"};function u({icon:r,color:o,onClick:m}){const g=o?t[o]:"";return i.jsx("button",{className:`${t["button-burger"]} ${g}`,"aria-label":"Menu",onClick:m,children:r&&i.jsx(C,{"data-testid":"button-icon",src:r,className:t["button-icon"]})})}u.__docgenInfo={description:"",methods:[],displayName:"BurgerButton",props:{variant:{required:!1,tsType:{name:"union",raw:"'main' | 'secondary'",elements:[{name:"literal",value:"'main'"},{name:"literal",value:"'secondary'"}]},description:""},icon:{required:!1,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const f=`<svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_3450_184)">
<path d="M31 62C48.1208 62 62 48.1208 62 31C62 13.8792 48.1208 0 31 0C13.8792 0 0 13.8792 0 31C0 48.1208 13.8792 62 31 62Z" fill="#004369"/>
<path d="M50.7189 17.816H12.172C10.271 17.816 8.72998 19.3569 8.72998 21.2577C8.72998 23.1584 10.271 24.6993 12.172 24.6993H50.7189C52.6199 24.6993 54.161 23.1584 54.161 21.2577C54.161 19.3569 52.6199 17.816 50.7189 17.816Z" fill="white"/>
<path d="M50.7189 26.7241H12.172C10.271 26.7241 8.72998 28.265 8.72998 30.1657C8.72998 32.0665 10.271 33.6074 12.172 33.6074H50.7189C52.6199 33.6074 54.161 32.0665 54.161 30.1657C54.161 28.265 52.6199 26.7241 50.7189 26.7241Z" fill="white"/>
<path d="M50.7189 35.6322H12.172C10.271 35.6322 8.72998 37.1731 8.72998 39.0738C8.72998 40.9746 10.271 42.5154 12.172 42.5154H50.7189C52.6199 42.5154 54.161 40.9746 54.161 39.0738C54.161 37.1731 52.6199 35.6322 50.7189 35.6322Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_3450_184">
<rect width="62" height="62" fill="white"/>
</clipPath>
</defs>
</svg>
`,w=`<svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_3450_184)">
<path d="M31 62C48.1208 62 62 48.1208 62 31C62 13.8792 48.1208 0 31 0C13.8792 0 0 13.8792 0 31C0 48.1208 13.8792 62 31 62Z" fill="#0793BF"/>
<path d="M50.7189 17.816H12.172C10.271 17.816 8.72998 19.3569 8.72998 21.2577C8.72998 23.1584 10.271 24.6993 12.172 24.6993H50.7189C52.6199 24.6993 54.161 23.1584 54.161 21.2577C54.161 19.3569 52.6199 17.816 50.7189 17.816Z" fill="white"/>
<path d="M50.7189 26.7241H12.172C10.271 26.7241 8.72998 28.265 8.72998 30.1657C8.72998 32.0665 10.271 33.6074 12.172 33.6074H50.7189C52.6199 33.6074 54.161 32.0665 54.161 30.1657C54.161 28.265 52.6199 26.7241 50.7189 26.7241Z" fill="white"/>
<path d="M50.7189 35.6322H12.172C10.271 35.6322 8.72998 37.1731 8.72998 39.0738C8.72998 40.9746 10.271 42.5154 12.172 42.5154H50.7189C52.6199 42.5154 54.161 40.9746 54.161 39.0738C54.161 37.1731 52.6199 35.6322 50.7189 35.6322Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_3450_184">
<rect width="62" height="62" fill="white"/>
</clipPath>
</defs>
</svg>
`,b={title:"ui/components/atoms/burger-bsutton",component:u,argTypes:{onClick:{action:"clicked"}}},n={args:{icon:f,variant:"main",color:"primary",onClick:()=>{console.log("Button clicked")}}},e={args:{variant:"secondary",icon:w,onClick:()=>{console.log("Button clicked")}}};var a,s,c;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    icon: IconBurger,
    variant: 'main',
    color: 'primary',
    onClick: () => {
      console.log('Button clicked');
    }
  }
}`,...(c=(s=n.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var l,d,p;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    icon: Burger,
    onClick: () => {
      console.log('Button clicked');
    }
  }
}`,...(p=(d=e.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const H=["Primary","Secondary"];export{n as Primary,e as Secondary,H as __namedExportsOrder,b as default};
