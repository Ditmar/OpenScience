import{j as e}from"./jsx-runtime-DRTy3Uxn.js";import{r as h}from"./index-BBkUAzwr.js";const U="_scrollbar_1i7sa_72",t={"country-list__container":"_country-list__container_1i7sa_1","country-list__select-button":"_country-list__select-button_1i7sa_11","country-list__dropdown":"_country-list__dropdown_1i7sa_23","country-list__list":"_country-list__list_1i7sa_32","country-list__item":"_country-list__item_1i7sa_38","country-list__flag":"_country-list__flag_1i7sa_50","country-list__name":"_country-list__name_1i7sa_58","country-list__dial-code":"_country-list__dial-code_1i7sa_68",scrollbar:U};function _({countries:a,selectedCountry:s,onSelectCountry:c,isOpen:r,onClose:o}){const[g,y]=h.useState(-1);return h.useEffect(()=>{const n=d=>{r&&(d.key==="ArrowDown"?y(l=>Math.min(l+1,a.length-1)):d.key==="ArrowUp"?y(l=>Math.max(l-1,0)):d.key==="Enter"&&g!==-1&&(c(a[g].code),o()))};return document.addEventListener("keydown",n),()=>{document.removeEventListener("keydown",n)}},[r,g,a,c,o]),e.jsxs("div",{className:t["country-list__container"],children:[e.jsx("button",{onClick:o,className:t["country-list__select-button"],children:s!=null&&s.trim()?s:"Select Country"}),r&&e.jsx("div",{className:`${t["country-list__dropdown"]} ${t.scrollbar}`,children:e.jsx("ul",{className:t["country-list__list"],children:a.map((n,d)=>e.jsxs("li",{role:"menuitem",tabIndex:0,onClick:()=>{c(n.code),o()},onKeyDown:l=>{l.key==="Enter"&&(c(n.code),o())},className:`${t["country-list__item"]} ${g===d?t.highlighted:""}`,children:[e.jsx("img",{src:n.flag,alt:n.name,className:t["country-list__flag"]}),e.jsx("span",{className:t["country-list__name"],children:n.name}),e.jsxs("span",{className:t["country-list__dial-code"],children:["(",n.dialCode,")"]})]},n.code))})})]})}_.__docgenInfo={description:"",methods:[],displayName:"CountryListDropdown",props:{countries:{required:!0,tsType:{name:"Array",elements:[{name:"Country"}],raw:"Country[]"},description:""},selectedCountry:{required:!1,tsType:{name:"string"},description:""},onSelectCountry:{required:!0,tsType:{name:"signature",type:"function",raw:"(countryCode: string) => void",signature:{arguments:[{type:{name:"string"},name:"countryCode"}],return:{name:"void"}}},description:""},isOpen:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const i=[{code:"AF",name:"Afghanistan",flag:"https://flagcdn.com/w320/af.png",dialCode:"+93"},{code:"AL",name:"Albania",flag:"https://flagcdn.com/w320/al.png",dialCode:"+355"},{code:"DZ",name:"Algeria",flag:"https://flagcdn.com/w320/dz.png",dialCode:"+213"},{code:"AD",name:"Andorra",flag:"https://flagcdn.com/w320/ad.png",dialCode:"+376"},{code:"AO",name:"Angola",flag:"https://flagcdn.com/w320/ao.png",dialCode:"+244"},{code:"AR",name:"Argentina",flag:"https://flagcdn.com/w320/ar.png",dialCode:"+54"},{code:"AM",name:"Armenia",flag:"https://flagcdn.com/w320/am.png",dialCode:"+374"},{code:"AU",name:"Australia",flag:"https://flagcdn.com/w320/au.png",dialCode:"+61"},{code:"AT",name:"Austria",flag:"https://flagcdn.com/w320/at.png",dialCode:"+43"},{code:"AZ",name:"Azerbaijan",flag:"https://flagcdn.com/w320/az.png",dialCode:"+994"},{code:"BD",name:"Bangladesh",flag:"https://flagcdn.com/w320/bd.png",dialCode:"+880"},{code:"BE",name:"Belgium",flag:"https://flagcdn.com/w320/be.png",dialCode:"+32"},{code:"BO",name:"Bolivia",flag:"https://flagcdn.com/w320/bo.png",dialCode:"+591"},{code:"BR",name:"Brazil",flag:"https://flagcdn.com/w320/br.png",dialCode:"+55"},{code:"CA",name:"Canada",flag:"https://flagcdn.com/w320/ca.png",dialCode:"+1"},{code:"CL",name:"Chile",flag:"https://flagcdn.com/w320/cl.png",dialCode:"+56"},{code:"CN",name:"China",flag:"https://flagcdn.com/w320/cn.png",dialCode:"+86"},{code:"CO",name:"Colombia",flag:"https://flagcdn.com/w320/co.png",dialCode:"+57"},{code:"CR",name:"Costa Rica",flag:"https://flagcdn.com/w320/cr.png",dialCode:"+506"},{code:"CU",name:"Cuba",flag:"https://flagcdn.com/w320/cu.png",dialCode:"+53"},{code:"DE",name:"Germany",flag:"https://flagcdn.com/w320/de.png",dialCode:"+49"},{code:"DK",name:"Denmark",flag:"https://flagcdn.com/w320/dk.png",dialCode:"+45"},{code:"DO",name:"Dominican Republic",flag:"https://flagcdn.com/w320/do.png",dialCode:"+1"},{code:"EC",name:"Ecuador",flag:"https://flagcdn.com/w320/ec.png",dialCode:"+593"},{code:"EG",name:"Egypt",flag:"https://flagcdn.com/w320/eg.png",dialCode:"+20"},{code:"ES",name:"Spain",flag:"https://flagcdn.com/w320/es.png",dialCode:"+34"},{code:"FR",name:"France",flag:"https://flagcdn.com/w320/fr.png",dialCode:"+33"},{code:"GB",name:"United Kingdom",flag:"https://flagcdn.com/w320/gb.png",dialCode:"+44"},{code:"IN",name:"India",flag:"https://flagcdn.com/w320/in.png",dialCode:"+91"},{code:"IT",name:"Italy",flag:"https://flagcdn.com/w320/it.png",dialCode:"+39"},{code:"JP",name:"Japan",flag:"https://flagcdn.com/w320/jp.png",dialCode:"+81"},{code:"MX",name:"Mexico",flag:"https://flagcdn.com/w320/mx.png",dialCode:"+52"},{code:"PE",name:"Peru",flag:"https://flagcdn.com/w320/pe.png",dialCode:"+51"},{code:"PT",name:"Portugal",flag:"https://flagcdn.com/w320/pt.png",dialCode:"+351"},{code:"US",name:"United States",flag:"https://flagcdn.com/w320/us.png",dialCode:"+1"},{code:"VE",name:"Venezuela",flag:"https://flagcdn.com/w320/ve.png",dialCode:"+58"}],R={title:"Components/CountryList",component:_,argTypes:{isOpen:{control:"boolean"},selectedCountry:{control:"text"},onSelectCountry:{action:"selected"}}},p={args:{countries:i,selectedCountry:"",isOpen:!0,onSelectCountry:()=>{},onClose:()=>{}}},m={args:{countries:i,selectedCountry:"ES",isOpen:!0,onSelectCountry:()=>{},onClose:()=>{}}},u={args:{countries:i,selectedCountry:"US",isOpen:!0,onSelectCountry:()=>{},onClose:()=>{}}},C={args:{countries:i,selectedCountry:"",isOpen:!0,onSelectCountry:()=>{},onClose:()=>{}}},f={render:({countries:a,selectedCountry:s,isOpen:c,onSelectCountry:r,onClose:o})=>e.jsxs("div",{children:[e.jsx("input",{type:"text",placeholder:"Search Country...",style:{marginBottom:"10px",padding:"5px",width:"100%"}}),e.jsx(_,{countries:a,selectedCountry:s,isOpen:c,onSelectCountry:r,onClose:o})]}),args:{countries:i,selectedCountry:"",isOpen:!0,onSelectCountry:()=>{},onClose:()=>{}}};var w,S,x;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    countries: mockCountries,
    selectedCountry: '',
    isOpen: true,
    onSelectCountry: () => {},
    onClose: () => {}
  }
}`,...(x=(S=p.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var A,b,E;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    countries: mockCountries,
    selectedCountry: 'ES',
    isOpen: true,
    onSelectCountry: () => {},
    onClose: () => {}
  }
}`,...(E=(b=m.parameters)==null?void 0:b.docs)==null?void 0:E.source}}};var O,k,D;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    countries: mockCountries,
    selectedCountry: 'US',
    isOpen: true,
    onSelectCountry: () => {},
    onClose: () => {}
  }
}`,...(D=(k=u.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var j,v,I;C.parameters={...C.parameters,docs:{...(j=C.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    countries: mockCountries,
    selectedCountry: '',
    isOpen: true,
    onSelectCountry: () => {},
    onClose: () => {}
  }
}`,...(I=(v=C.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var B,N,L;f.parameters={...f.parameters,docs:{...(B=f.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: ({
    countries,
    selectedCountry,
    isOpen,
    onSelectCountry,
    onClose
  }) => <div>
      <input type="text" placeholder="Search Country..." style={{
      marginBottom: '10px',
      padding: '5px',
      width: '100%'
    }} />
      <CountryListDropdown countries={countries} selectedCountry={selectedCountry} isOpen={isOpen} onSelectCountry={onSelectCountry} onClose={onClose} />
    </div>,
  args: {
    countries: mockCountries,
    selectedCountry: '',
    isOpen: true,
    onSelectCountry: () => {},
    onClose: () => {}
  }
}`,...(L=(N=f.parameters)==null?void 0:N.docs)==null?void 0:L.source}}};const q=["Default","SpainSelected","UnitedStatesSelected","LargeSize","WithInputIntegration"];export{p as Default,C as LargeSize,m as SpainSelected,u as UnitedStatesSelected,f as WithInputIntegration,q as __namedExportsOrder,R as default};
