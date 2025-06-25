import{j as n}from"./jsx-runtime-BlDnFLNC.js";import{C as D}from"./CheckCircle-Bbpx-ocd.js";import"./index-Cu9bd8lq.js";import"./createSvgIcon-BvwasURC.js";import"./memoTheme-DzQN9eaR.js";import"./DefaultPropsProvider-BjoYrAZc.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-B34fLoo2.js";import"./extends-CF3RwP-h.js";const t={"button-number":"_button-number_huubz_106","button-number--filled":"_button-number--filled_huubz_121","button-number--outline":"_button-number--outline_huubz_128","button-number--ghost":"_button-number--ghost_huubz_136","button-number--small":"_button-number--small_huubz_143","button-number--medium":"_button-number--medium_huubz_148","button-number--large":"_button-number--large_huubz_153","button-number--rounded":"_button-number--rounded_huubz_158","button-number--circle":"_button-number--circle_huubz_161","button-number--inactive":"_button-number--inactive_huubz_164","button-number__icon":"_button-number__icon_huubz_171"};function a({children:e,variant:F="filled",shape:G="square",size:k="medium",inactive:p=!1,selected:A=!1}){return n.jsxs("button",{className:` 
        ${t["button-number"]}
        ${t[`button-number--${F}`]} 
        ${t[`button-number--${G}`]} 
        ${t[`button-number--${k}`]}
        ${p?t["button-number--inactive"]:""}
      `,disabled:p,children:[A&&n.jsx(D,{"data-testid":"logo_icon",className:`
            ${t["button-number__icon"]}
          `}),e]})}a.__docgenInfo={description:"",methods:[],displayName:"ButtonNumber",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'filled' | 'outline' | 'ghost'",elements:[{name:"literal",value:"'filled'"},{name:"literal",value:"'outline'"},{name:"literal",value:"'ghost'"}]},description:"",defaultValue:{value:"'filled'",computed:!1}},shape:{required:!1,tsType:{name:"union",raw:"'square' | 'rounded' | 'circle'",elements:[{name:"literal",value:"'square'"},{name:"literal",value:"'rounded'"},{name:"literal",value:"'circle'"}]},description:"",defaultValue:{value:"'square'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},inactive:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},selected:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const X={title:"ui/components/atoms/button-number",component:a,argTypes:{variant:{control:"select",options:["filled","outline","ghost"],defaultValue:"filled"},shape:{control:"select",options:["square","rounded","circle"],defaultValue:"square"},size:{control:"select",options:["small","medium","large"],defaultValue:"medium"}}},r="1",i={render:e=>n.jsx("div",{style:{maxWidth:"100px",padding:"30px"},children:n.jsx(a,{size:e.size,shape:e.shape,variant:e.variant,inactive:e.inactive,selected:e.selected,children:e.children})}),args:{children:r,variant:"filled"}},s={render:e=>n.jsx("div",{style:{maxWidth:"100px",padding:"30px"},children:n.jsx(a,{size:e.size,shape:e.shape,variant:e.variant,inactive:e.inactive,selected:e.selected,children:e.children})}),args:{children:r,variant:"outline"}},d={render:e=>n.jsx("div",{style:{maxWidth:"100px",padding:"30px"},children:n.jsx(a,{size:e.size,shape:e.shape,variant:e.variant,inactive:e.inactive,children:e.children})}),args:{children:r,variant:"ghost"}},u={render:e=>n.jsx("div",{style:{maxWidth:"100px",padding:"30px"},children:n.jsx(a,{size:e.size,variant:e.variant,shape:e.shape,inactive:e.inactive,children:e.children})}),args:{children:r,shape:"square"}},l={render:e=>n.jsx("div",{style:{maxWidth:"100px",padding:"30px"},children:n.jsx(a,{size:e.size,variant:e.variant,shape:e.shape,inactive:e.inactive,children:e.children})}),args:{children:r,shape:"rounded"}},c={render:e=>n.jsx("div",{style:{maxWidth:"100px",padding:"30px"},children:n.jsx(a,{size:e.size,variant:e.variant,shape:e.shape,inactive:e.inactive,children:e.children})}),args:{children:r,shape:"circle"}},o={render:e=>n.jsx("div",{style:{maxWidth:"100px",padding:"30px"},children:n.jsx(a,{size:e.size,variant:e.variant,shape:e.shape,inactive:e.inactive,children:e.children})}),args:{children:r,inactive:!0}},m={render:e=>n.jsx("div",{style:{maxWidth:"100px",padding:"30px"},children:n.jsx(a,{size:e.size,variant:e.variant,shape:e.shape,inactive:e.inactive,selected:e.selected,children:e.children})}),args:{children:r,selected:!0}};var h,v,b;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var z,_,y;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(y=(_=d.parameters)==null?void 0:_.docs)==null?void 0:y.source}}};var N,j,B;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(B=(j=u.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var q,T,W;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(W=(T=l.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};var S,$,V;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(V=($=c.parameters)==null?void 0:$.docs)==null?void 0:V.source}}};var R,C,w;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(w=(C=o.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var I,O,E;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(E=(O=m.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};const Y=["Filled","Outline","Ghost","Square","Rounded","Circle","Inactive","Selected"];export{c as Circle,i as Filled,d as Ghost,o as Inactive,s as Outline,l as Rounded,m as Selected,u as Square,Y as __namedExportsOrder,X as default};
