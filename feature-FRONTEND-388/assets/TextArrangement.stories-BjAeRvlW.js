import{j as e}from"./jsx-runtime-BlDnFLNC.js";import{T as D}from"./TextTitle-AMzAmwDp.js";import{T as E}from"./TextContent-CEG7CUHe.js";import{O as L}from"./OLItem-5hKX5PxY.js";import"./index-Cu9bd8lq.js";import"./styled-sFj2yzO3.js";import"./defaultTheme-Cxb1Q9uU.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-B34fLoo2.js";import"./extends-CF3RwP-h.js";import"./Box-lYEEzZe6.js";import"./extendSxProp-BjZT9PeM.js";const O="_container_170uz_1",H="_standard_170uz_47",V="_columns_170uz_53",X="_featured_170uz_58",$="_cards_170uz_77",F="_responsive_170uz_88",t={container:O,"align-left":"_align-left_170uz_8","align-center":"_align-center_170uz_11","align-right":"_align-right_170uz_14","align-justified":"_align-justified_170uz_17","badge-wrapper":"_badge-wrapper_170uz_20","text-wrapper":"_text-wrapper_170uz_23","show-case-container":"_show-case-container_170uz_29","show-case-left":"_show-case-left_170uz_35","show-case-right":"_show-case-right_170uz_39",standard:H,columns:V,featured:X,cards:$,responsive:F,"large-title":"_large-title_170uz_130"};function s(N){const{titleSize:m="md",layout:q="standard",alignment:b="left",titleSpacing:A="default",contentSpacing:k="default",contentSize:I="md",showBadge:R=!1,content:d,responsive:C=!1,className:U="",children:W}=N;return e.jsxs("div",{className:[t.container,t[q],t[`align-${b}`],C?t.responsive:"",m==="lg"?t["large-title"]:"",U].filter(Boolean).join(" "),children:[R&&e.jsx("div",{className:t.badgeWrapper,children:e.jsx(L,{value:1,active:!0,shape:"circle",size:"sm"},1)}),e.jsxs("div",{className:t.textWrapper,children:[e.jsx(D,{text:d.title,size:m,spacing:A}),e.jsx(E,{text:d.text,size:I,spacing:k}),W]})]})}s.__docgenInfo={description:"",methods:[],displayName:"TextArrangement",props:{titleSize:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:""},layout:{required:!1,tsType:{name:"union",raw:"'featured' | 'columns' | 'cards' | 'standard'",elements:[{name:"literal",value:"'featured'"},{name:"literal",value:"'columns'"},{name:"literal",value:"'cards'"},{name:"literal",value:"'standard'"}]},description:""},alignment:{required:!1,tsType:{name:"union",raw:"'left' | 'center' | 'right' | 'justified'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'right'"},{name:"literal",value:"'justified'"}]},description:""},titleSpacing:{required:!1,tsType:{name:"union",raw:"'default' | 'compact' | 'spacious'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'compact'"},{name:"literal",value:"'spacious'"}]},description:""},contentSpacing:{required:!1,tsType:{name:"union",raw:"'default' | 'compact' | 'spacious'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'compact'"},{name:"literal",value:"'spacious'"}]},description:""},contentSize:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:""},showBadge:{required:!1,tsType:{name:"boolean"},description:""},content:{required:!0,tsType:{name:"ContentType"},description:""},responsive:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const ne={title:"library/component/molecules/text-arrangement",component:s,tags:["autodocs"]},n="Harmonizing Human Experience: The Artistry of UI-UX Design",a=`UI is the canvas, UX the brushstroke; together, they craft an immersive journey where
every pixel tells a story of elegance, efficiency, and effortless delight. It’s the artistry of design at its finest.`,i={args:{showBadge:!1,responsive:!1,content:{title:n,text:a},titleSize:"xs",contentSize:"xs"}},r={args:{content:{title:n,text:a},titleSize:"xs",contentSize:"xs",showBadge:!0,responsive:!0}},l={args:{showBadge:!1,responsive:!0,content:{title:"This is a short title",text:"This represents short content."},titleSize:"md",contentSize:"md"}},o={args:{showBadge:!1,responsive:!0,content:{title:"Very long title that takes up several lines and keeps growing to test the wrap",text:`This is a very long text that should span multiple lines and demonstrate that the component 
      scales correctly to different amounts of text without breaking the component's design or layout.`},titleSize:"sm",contentSize:"sm"}},c={render:()=>e.jsxs("div",{className:t["show-case-container"],children:[e.jsx("div",{className:t["show-case-left"],children:e.jsx(s,{showBadge:!1,content:{title:n,text:a},titleSize:"lg",contentSize:"md",layout:"featured",alignment:"left",responsive:!0})}),e.jsxs("div",{className:t["show-case-right"],children:[e.jsx(s,{showBadge:!1,content:{title:n,text:a},titleSize:"sm",contentSize:"md",layout:"cards",alignment:"left",responsive:!0}),e.jsx(s,{showBadge:!0,content:{title:n,text:a},titleSize:"xs",contentSize:"sm",layout:"cards",alignment:"left",responsive:!0}),e.jsx(s,{showBadge:!1,content:{title:n,text:a},titleSize:"xs",contentSize:"sm",layout:"cards",alignment:"left",responsive:!0}),e.jsx(s,{showBadge:!1,content:{title:n,text:a},titleSize:"xs",contentSize:"sm",layout:"cards",alignment:"left",responsive:!0})]})]})};var u,p,g;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    showBadge: false,
    responsive: false,
    content: {
      title: sampleTitle,
      text: sampleText
    },
    titleSize: 'xs',
    contentSize: 'xs'
  }
}`,...(g=(p=i.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var x,h,f;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    content: {
      title: sampleTitle,
      text: sampleText
    },
    titleSize: 'xs',
    contentSize: 'xs',
    showBadge: true,
    responsive: true
  }
}`,...(f=(h=r.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var v,z,S;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    showBadge: false,
    responsive: true,
    content: {
      title: 'This is a short title',
      text: 'This represents short content.'
    },
    titleSize: 'md',
    contentSize: 'md'
  }
}`,...(S=(z=l.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var w,_,T;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    showBadge: false,
    responsive: true,
    content: {
      title: 'Very long title that takes up several lines and keeps growing to test the wrap',
      text: \`This is a very long text that should span multiple lines and demonstrate that the component 
      scales correctly to different amounts of text without breaking the component's design or layout.\`
    },
    titleSize: 'sm',
    contentSize: 'sm'
  }
}`,...(T=(_=o.parameters)==null?void 0:_.docs)==null?void 0:T.source}}};var y,B,j;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div className={styles['show-case-container']}>
      <div className={styles['show-case-left']}>
        <TextArrangement showBadge={false} content={{
        title: sampleTitle,
        text: sampleText
      }} titleSize="lg" contentSize="md" layout="featured" alignment="left" responsive />
      </div>
      <div className={styles['show-case-right']}>
        <TextArrangement showBadge={false} content={{
        title: sampleTitle,
        text: sampleText
      }} titleSize="sm" contentSize="md" layout="cards" alignment="left" responsive />
        <TextArrangement showBadge content={{
        title: sampleTitle,
        text: sampleText
      }} titleSize="xs" contentSize="sm" layout="cards" alignment="left" responsive />
        <TextArrangement showBadge={false} content={{
        title: sampleTitle,
        text: sampleText
      }} titleSize="xs" contentSize="sm" layout="cards" alignment="left" responsive />
        <TextArrangement showBadge={false} content={{
        title: sampleTitle,
        text: sampleText
      }} titleSize="xs" contentSize="sm" layout="cards" alignment="left" responsive />
      </div>
    </div>
}`,...(j=(B=c.parameters)==null?void 0:B.docs)==null?void 0:j.source}}};const ae=["Default","WithBadge","ShortText","LongText","ShowCase"];export{i as Default,o as LongText,l as ShortText,c as ShowCase,r as WithBadge,ae as __namedExportsOrder,ne as default};
