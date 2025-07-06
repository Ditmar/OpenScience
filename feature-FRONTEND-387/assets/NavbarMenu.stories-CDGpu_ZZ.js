import{j as a}from"./jsx-runtime-BlDnFLNC.js";import{r as b}from"./index-Cu9bd8lq.js";import{H as x}from"./HeroBanner-CMkqHLVf.js";import{R as S}from"./Rectangle17-BnlzZibc.js";import{A as j,S as A,V as T}from"./volumes-CeHHotEp.js";import{C as M}from"./Close-URL-C2pCraUp.js";function v({items:c,footerItem:e,backgroundImage:o,alt:l="Rectangle6",className:d="navbar-hero-banner",onOpen:n,onClose:t,isOpen:r=!0}){const u=b.useCallback(i=>{i&&i()},[]),p=b.useCallback(()=>{u(e==null?void 0:e.onClick),t()},[e,u,t]);return a.jsxs(x,{backgroundImage:o,alt:l,className:d,"aria-label":"Sección del menú de navegación",children:[!r&&a.jsx("button",{className:"open-menu-button",onClick:n,"aria-label":"Abrir menú",type:"button",children:"Abrir menú"}),r&&a.jsxs("nav",{className:"navbar-menu",role:"navigation","aria-label":"Menú de navegación principal",children:[c.map(({children:i,icon:g,onClick:s})=>a.jsxs("button",{onClick:()=>{u(s)},className:"navbar-wrapper","aria-label":typeof i=="string"?i:void 0,type:"button",children:[a.jsx("div",{className:"icon-circle",dangerouslySetInnerHTML:{__html:g}}),a.jsx("div",{className:"label-container",children:a.jsx("span",{className:"label",children:i})})]},String(i))),e&&a.jsx("div",{className:"navbar-menu__footer",children:a.jsxs("button",{onClick:p,className:"navbar-wrapper navbar-wrapper--logout","aria-label":typeof e.children=="string"?e.children:"Botón de cierre de sesión",type:"button",children:[a.jsx("div",{className:"logout-icon",dangerouslySetInnerHTML:{__html:e.icon}}),typeof e.children=="string"&&a.jsx("span",{className:"visually-hidden",children:e.children})]})})]})]})}v.__docgenInfo={description:"",methods:[],displayName:"NavbarMenu",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"NavbarItem"}],raw:"NavbarItem[]"},description:""},footerItem:{required:!1,tsType:{name:"NavbarItem"},description:""},backgroundImage:{required:!0,tsType:{name:"string"},description:""},alt:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Rectangle6'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'navbar-hero-banner'",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onItemClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(label: string) => void",signature:{arguments:[{type:{name:"string"},name:"label"}],return:{name:"void"}}},description:""},isOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onOpen:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const E={title:"Molecules/NavbarMenu",component:v,tags:["autodocs"],argTypes:{onClose:{action:"menu closed"},onOpen:{action:"menu opened"},onItemClick:{action:"item clicked"}}};function R({items:c,footerItem:e,backgroundImage:o,alt:l,className:d,onItemClick:n,onOpen:t,onClose:r}){const[u,p]=b.useState(!0),i=c.map(s=>({...s,onClick:()=>{var h;(h=s.onClick)==null||h.call(s),n==null||n(typeof s.children=="string"?s.children:"item")}})),g=e?{...e,onClick:()=>{var s;(s=e.onClick)==null||s.call(e),n==null||n(typeof e.children=="string"?e.children:"footer"),p(!1),r==null||r()}}:void 0;return a.jsx(v,{items:i,footerItem:g,backgroundImage:o,alt:l,className:d,isOpen:u,onOpen:()=>{p(!0),n==null||n("ABRIR MENÚ"),t==null||t()},onClose:()=>{p(!1),r==null||r()}})}const m={args:{items:[{children:"ARTÍCULOS",icon:j},{children:"INICIO",icon:A},{children:"VOLUMENES",icon:T}],footerItem:{children:"SALIR",icon:M},backgroundImage:String(S),alt:"Fondo navbar",className:"navbar-hero-banner"},render:({items:c,footerItem:e,backgroundImage:o,alt:l,className:d,onItemClick:n,onOpen:t,onClose:r})=>a.jsx(R,{items:c,footerItem:e,backgroundImage:o,alt:l,className:d,onItemClick:n,onOpen:t,onClose:r})};var N,y,f;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    items: [{
      children: 'ARTÍCULOS',
      icon: ArticlesIcon
    }, {
      children: 'INICIO',
      icon: StartIcon
    }, {
      children: 'VOLUMENES',
      icon: VolumesIcon
    }],
    footerItem: {
      children: 'SALIR',
      icon: CloseIcon
    },
    backgroundImage: String(Rectangle17),
    alt: 'Fondo navbar',
    className: 'navbar-hero-banner'
  },
  render: ({
    items,
    footerItem,
    backgroundImage,
    alt,
    className,
    onItemClick,
    onOpen,
    onClose
  }) => <NavbarMenuWithActionWrapper items={items} footerItem={footerItem} backgroundImage={backgroundImage} alt={alt} className={className} onItemClick={onItemClick} onOpen={onOpen} onClose={onClose} />
}`,...(f=(y=m.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};const L=["Default"];export{m as Default,L as __namedExportsOrder,E as default};
