import{j as n}from"./jsx-runtime-DRTy3Uxn.js";import"./index-BBkUAzwr.js";const _="_card_2ddgm_66",g="_selected_2ddgm_120",x="_card__content_2ddgm_125",u="_title_2ddgm_132",m="_description_2ddgm_138",f="_checkbox_2ddgm_144",v="_tag_2ddgm_149",a={"card-list__container":"_card-list__container_2ddgm_66",card:_,selected:g,card__content:x,title:u,description:m,checkbox:f,tag:v,"variant-default":"_variant-default_2ddgm_159","variant-info":"_variant-info_2ddgm_163","variant-warning":"_variant-warning_2ddgm_168"};function l({items:c,className:p}){return n.jsx("div",{className:`${a.cardListContainer} ${p??""}`,children:c.map(e=>n.jsxs("div",{role:"button",tabIndex:0,onClick:()=>{var t;return(t=e.onSelect)==null?void 0:t.call(e,!e.selected)},onKeyDown:t=>{var d;(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),(d=e.onSelect)==null||d.call(e,!e.selected))},className:`${a.card} 
                      ${e.selected?a.selected:""} 
                      ${a[`variant-${e.variant??"default"}`]} 
                      ${e.className??""}`,children:[n.jsx("input",{type:"checkbox",checked:e.selected,readOnly:!0,className:a.checkbox}),n.jsxs("div",{className:a.cardContent,children:[n.jsx("h3",{className:a.title,children:e.title}),e.description&&n.jsx("p",{className:a.description,children:e.description}),e.categoryTag&&n.jsx("span",{className:`${a.tag} ${a[`tag-${e.variant??"default"}`]}`,children:e.categoryTag})]})]},e.id))})}l.__docgenInfo={description:"",methods:[],displayName:"TextCardList",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"TextCardListProps"}],raw:"TextCardListProps[]"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const T={title:"ui/components/atoms/TextCardList",component:l,tags:["autodocs"],argTypes:{className:{control:"text",description:"Clase adicional para el contenedor del componente"}}},s={args:{className:"",items:[{id:"1",title:"Opción 1",description:"Descripción de la opción 1",selected:!1,variant:"default",categoryTag:"Etiqueta 1",className:"",onSelect:c=>{console.log("Opción 1 seleccionada:",c)}},{id:"2",title:"Opción 2",description:"Descripción de la opción 2",selected:!0,variant:"info",categoryTag:"Etiqueta 2",className:"",onSelect:c=>{console.log("Opción 2 seleccionada:",c)}}]}};var o,r,i;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: ({
    className: '',
    items: [{
      id: '1',
      title: 'Opción 1',
      description: 'Descripción de la opción 1',
      selected: false,
      variant: 'default',
      categoryTag: 'Etiqueta 1',
      className: '',
      onSelect: selected => {
        console.log('Opción 1 seleccionada:', selected);
      }
    }, {
      id: '2',
      title: 'Opción 2',
      description: 'Descripción de la opción 2',
      selected: true,
      variant: 'info',
      categoryTag: 'Etiqueta 2',
      className: '',
      onSelect: selected => {
        console.log('Opción 2 seleccionada:', selected);
      }
    }]
  } satisfies TextCardListContainerProps)
}`,...(i=(r=s.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const h=["Default"];export{s as Default,h as __namedExportsOrder,T as default};
