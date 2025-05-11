import{j as n}from"./jsx-runtime-DRTy3Uxn.js";import{d as M}from"./createSvgIcon-Cb0SSGtn.js";import"./index-BBkUAzwr.js";import"./DefaultPropsProvider-CsXc8Apz.js";const A=M(n.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z"})),t={"button-number":"_button-number_qoqhz_66","button-number--filled":"_button-number--filled_qoqhz_81","button-number--outline":"_button-number--outline_qoqhz_88","button-number--ghost":"_button-number--ghost_qoqhz_96","button-number--small":"_button-number--small_qoqhz_103","button-number--medium":"_button-number--medium_qoqhz_108","button-number--large":"_button-number--large_qoqhz_113","button-number--rounded":"_button-number--rounded_qoqhz_118","button-number--circle":"_button-number--circle_qoqhz_121","button-number--inactive":"_button-number--inactive_qoqhz_124","button-number__icon":"_button-number__icon_qoqhz_131"};function a({children:e,variant:F="filled",shape:G="square",size:L="medium",inactive:p=!1,selected:k=!1}){return n.jsxs("button",{className:` 
        ${t["button-number"]}
        ${t[`button-number--${F}`]} 
        ${t[`button-number--${G}`]} 
        ${t[`button-number--${L}`]}
        ${p?t["button-number--inactive"]:""}
      `,disabled:p,children:[k&&n.jsx(A,{"data-testid":"logo_icon",className:`
            ${t["button-number__icon"]}
          `}),e]})}a.__docgenInfo={description:"",methods:[],displayName:"ButtonNumber",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'filled' | 'outline' | 'ghost'",elements:[{name:"literal",value:"'filled'"},{name:"literal",value:"'outline'"},{name:"literal",value:"'ghost'"}]},description:"",defaultValue:{value:"'filled'",computed:!1}},shape:{required:!1,tsType:{name:"union",raw:"'square' | 'rounded' | 'circle'",elements:[{name:"literal",value:"'square'"},{name:"literal",value:"'rounded'"},{name:"literal",value:"'circle'"}]},description:"",defaultValue:{value:"'square'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},inactive:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},selected:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const P={title:"ui/components/atoms/button-number",component:a,argTypes:{variant:{control:"select",options:["filled","outline","ghost"],defaultValue:"filled"},shape:{control:"select",options:["square","rounded","circle"],defaultValue:"square"},size:{control:"select",options:["small","medium","large"],defaultValue:"medium"}}},r="1",i={render:e=>n.jsx("div",{style:{maxWidth:"100px",padding:"30px"},children:n.jsx(a,{size:e.size,shape:e.shape,variant:e.variant,inactive:e.inactive,selected:e.selected,children:e.children})}),args:{children:r,variant:"filled"}},s={render:e=>n.jsx("div",{style:{maxWidth:"100px",padding:"30px"},children:n.jsx(a,{size:e.size,shape:e.shape,variant:e.variant,inactive:e.inactive,selected:e.selected,children:e.children})}),args:{children:r,variant:"outline"}},d={render:e=>n.jsx("div",{style:{maxWidth:"100px",padding:"30px"},children:n.jsx(a,{size:e.size,shape:e.shape,variant:e.variant,inactive:e.inactive,children:e.children})}),args:{children:r,variant:"ghost"}},l={render:e=>n.jsx("div",{style:{maxWidth:"100px",padding:"30px"},children:n.jsx(a,{size:e.size,variant:e.variant,shape:e.shape,inactive:e.inactive,children:e.children})}),args:{children:r,shape:"square"}},c={render:e=>n.jsx("div",{style:{maxWidth:"100px",padding:"30px"},children:n.jsx(a,{size:e.size,variant:e.variant,shape:e.shape,inactive:e.inactive,children:e.children})}),args:{children:r,shape:"rounded"}},u={render:e=>n.jsx("div",{style:{maxWidth:"100px",padding:"30px"},children:n.jsx(a,{size:e.size,variant:e.variant,shape:e.shape,inactive:e.inactive,children:e.children})}),args:{children:r,shape:"circle"}},o={render:e=>n.jsx("div",{style:{maxWidth:"100px",padding:"30px"},children:n.jsx(a,{size:e.size,variant:e.variant,shape:e.shape,inactive:e.inactive,children:e.children})}),args:{children:r,inactive:!0}},m={render:e=>n.jsx("div",{style:{maxWidth:"100px",padding:"30px"},children:n.jsx(a,{size:e.size,variant:e.variant,shape:e.shape,inactive:e.inactive,selected:e.selected,children:e.children})}),args:{children:r,selected:!0}};var h,v,b;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <div style={{
    maxWidth: '100px',
    padding: '30px'
  }}>
      <ButtonNumber size={args.size} shape={args.shape} variant={args.variant} inactive={args.inactive} selected={args.selected}>
        {args.children}
      </ButtonNumber>
    </div>,
  args: {
    children: defaultText,
    variant: 'filled'
  }
}`,...(b=(v=i.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var x,g,f;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => <div style={{
    maxWidth: '100px',
    padding: '30px'
  }}>
      <ButtonNumber size={args.size} shape={args.shape} variant={args.variant} inactive={args.inactive} selected={args.selected}>
        {args.children}
      </ButtonNumber>
    </div>,
  args: {
    children: defaultText,
    variant: 'outline'
  }
}`,...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var z,_,q;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => <div style={{
    maxWidth: '100px',
    padding: '30px'
  }}>
      <ButtonNumber size={args.size} shape={args.shape} variant={args.variant} inactive={args.inactive}>
        {args.children}
      </ButtonNumber>
    </div>,
  args: {
    children: defaultText,
    variant: 'ghost'
  }
}`,...(q=(_=d.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var y,N,j;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <div style={{
    maxWidth: '100px',
    padding: '30px'
  }}>
      <ButtonNumber size={args.size} variant={args.variant} shape={args.shape} inactive={args.inactive}>
        {args.children}
      </ButtonNumber>
    </div>,
  args: {
    children: defaultText,
    shape: 'square'
  }
}`,...(j=(N=l.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var B,T,W;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => <div style={{
    maxWidth: '100px',
    padding: '30px'
  }}>
      <ButtonNumber size={args.size} variant={args.variant} shape={args.shape} inactive={args.inactive}>
        {args.children}
      </ButtonNumber>
    </div>,
  args: {
    children: defaultText,
    shape: 'rounded'
  }
}`,...(W=(T=c.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};var S,$,V;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <div style={{
    maxWidth: '100px',
    padding: '30px'
  }}>
      <ButtonNumber size={args.size} variant={args.variant} shape={args.shape} inactive={args.inactive}>
        {args.children}
      </ButtonNumber>
    </div>,
  args: {
    children: defaultText,
    shape: 'circle'
  }
}`,...(V=($=u.parameters)==null?void 0:$.docs)==null?void 0:V.source}}};var R,C,I;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: args => <div style={{
    maxWidth: '100px',
    padding: '30px'
  }}>
      <ButtonNumber size={args.size} variant={args.variant} shape={args.shape} inactive={args.inactive}>
        {args.children}
      </ButtonNumber>
    </div>,
  args: {
    children: defaultText,
    inactive: true
  }
}`,...(I=(C=o.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var w,O,E;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => <div style={{
    maxWidth: '100px',
    padding: '30px'
  }}>
      <ButtonNumber size={args.size} variant={args.variant} shape={args.shape} inactive={args.inactive} selected={args.selected}>
        {args.children}
      </ButtonNumber>
    </div>,
  args: {
    children: defaultText,
    selected: true
  }
}`,...(E=(O=m.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};const Q=["Filled","Outline","Ghost","Square","Rounded","Circle","Inactive","Selected"];export{u as Circle,i as Filled,d as Ghost,o as Inactive,s as Outline,c as Rounded,m as Selected,l as Square,Q as __namedExportsOrder,P as default};
