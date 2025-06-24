import{j as e}from"./jsx-runtime-BlDnFLNC.js";import"./index-Cu9bd8lq.js";const a={"title-subtitle":"_title-subtitle_swtnz_106","title-subtitle__title":"_title-subtitle__title_swtnz_114","title-subtitle__subtitle":"_title-subtitle__subtitle_swtnz_123","title-subtitle--size-sm":"_title-subtitle--size-sm_swtnz_132","title-subtitle--size-md":"_title-subtitle--size-md_swtnz_142","title-subtitle--size-lg":"_title-subtitle--size-lg_swtnz_152","title-subtitle--alignment-left":"_title-subtitle--alignment-left_swtnz_162","title-subtitle--alignment-center":"_title-subtitle--alignment-center_swtnz_171","title-subtitle--alignment-right":"_title-subtitle--alignment-right_swtnz_181","title-subtitle--variant-default":"_title-subtitle--variant-default_swtnz_191","title-subtitle--variant-emphasized":"_title-subtitle--variant-emphasized_swtnz_198","title-subtitle--variant-minimal":"_title-subtitle--variant-minimal_swtnz_207","title-subtitle__title--h1":"_title-subtitle__title--h1_swtnz_216","title-subtitle__title--h2":"_title-subtitle__title--h2_swtnz_221","title-subtitle__title--h3":"_title-subtitle__title--h3_swtnz_226","title-subtitle__title--h4":"_title-subtitle__title--h4_swtnz_231","title-subtitle__title--h5":"_title-subtitle__title--h5_swtnz_237","title-subtitle__subtitle--p":"_title-subtitle__subtitle--p_swtnz_243","title-subtitle__subtitle--h3":"_title-subtitle__subtitle--h3_swtnz_248","title-subtitle__subtitle--h4":"_title-subtitle__subtitle--h4_swtnz_254","title-subtitle__subtitle--h5":"_title-subtitle__subtitle--h5_swtnz_260","title-subtitle__subtitle--h6":"_title-subtitle__subtitle--h6_swtnz_266"};function _e({tag:s,className:t,children:i}){switch(s){case"h1":return e.jsx("h1",{className:t,children:i});case"h2":return e.jsx("h2",{className:t,children:i});case"h3":return e.jsx("h3",{className:t,children:i});case"h4":return e.jsx("h4",{className:t,children:i});case"h5":return e.jsx("h5",{className:t,children:i});default:return e.jsx("h2",{className:t,children:i})}}_e.__docgenInfo={description:"",methods:[],displayName:"TitleTag",props:{tag:{required:!0,tsType:{name:"union",raw:"'h1' | 'h2' | 'h3' | 'h4' | 'h5'",elements:[{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"},{name:"literal",value:"'h4'"},{name:"literal",value:"'h5'"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};function ve({tag:s,className:t,children:i}){switch(s){case"p":return e.jsx("p",{className:t,children:i});case"h3":return e.jsx("h3",{className:t,children:i});case"h4":return e.jsx("h4",{className:t,children:i});case"h5":return e.jsx("h5",{className:t,children:i});case"h6":return e.jsx("h6",{className:t,children:i});default:return e.jsx("p",{className:t,children:i})}}ve.__docgenInfo={description:"",methods:[],displayName:"SubtitleTag",props:{tag:{required:!0,tsType:{name:"union",raw:"'p' | 'h3' | 'h4' | 'h5' | 'h6'",elements:[{name:"literal",value:"'p'"},{name:"literal",value:"'h3'"},{name:"literal",value:"'h4'"},{name:"literal",value:"'h5'"},{name:"literal",value:"'h6'"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};function n({title:s,subtitle:t,size:i="md",alignment:Te="left",variant:ze="default",titleTag:y="h2",subtitleTag:S="p",className:ye=""}){const Se=[a["title-subtitle"],a[`title-subtitle--size-${i}`],a[`title-subtitle--alignment-${Te}`],a[`title-subtitle--variant-${ze}`],ye].join(" "),we=`${a["title-subtitle__title"]} ${a[`title-subtitle__title--${y}`]}`,xe=`${a["title-subtitle__subtitle"]} ${a[`title-subtitle__subtitle--${S}`]}`;return e.jsxs("div",{className:Se,children:[e.jsx(_e,{tag:y,className:we,children:s}),t&&e.jsx(ve,{tag:S,className:xe,children:t})]})}n.__docgenInfo={description:"",methods:[],displayName:"TitleSubtitle",props:{title:{required:!0,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},subtitle:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},alignment:{required:!1,tsType:{name:"union",raw:"'left' | 'center' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'left'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'emphasized' | 'minimal'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'emphasized'"},{name:"literal",value:"'minimal'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},titleTag:{required:!1,tsType:{name:"union",raw:"'h1' | 'h2' | 'h3' | 'h4' | 'h5'",elements:[{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"},{name:"literal",value:"'h4'"},{name:"literal",value:"'h5'"}]},description:"",defaultValue:{value:"'h2'",computed:!1}},subtitleTag:{required:!1,tsType:{name:"union",raw:"'p' | 'h3' | 'h4' | 'h5' | 'h6'",elements:[{name:"literal",value:"'p'"},{name:"literal",value:"'h3'"},{name:"literal",value:"'h4'"},{name:"literal",value:"'h5'"},{name:"literal",value:"'h6'"}]},description:"",defaultValue:{value:"'p'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const Re={title:"ui/components/atoms/TitleSubtitle",component:n,parameters:{layout:"padded"},argTypes:{title:{control:"text",description:"Main title content"},subtitle:{control:"text",description:"Optional subtitle content"},size:{control:"select",options:["sm","md","lg"],description:"Size variant for different contexts"},alignment:{control:"select",options:["left","center","right"],description:"Text alignment"},variant:{control:"select",options:["default","emphasized","minimal"],description:"Visual style variant"},titleTag:{control:"select",options:["h1","h2","h3","h4","h5"],description:"HTML semantic tag for title"},subtitleTag:{control:"select",options:["p","h3","h4","h5","h6"],description:"HTML semantic tag for subtitle"},className:{control:"text",description:"Additional CSS classes"}}},l={args:{title:"Welcome to OpenScience",subtitle:"Discover the latest research and scientific breakthroughs from around the world",size:"md",alignment:"center",variant:"default",titleTag:"h2",subtitleTag:"p"}},r={args:{title:"Harmonizing Human Experience: The Artistry of UI-UX Design",subtitle:"UI is the canvas, UX the brushstroke; together, they craft an immersive journey where every pixel tells a story of elegance, efficiency, and effortless delight. It is the artistry of design at its finest.",size:"sm",alignment:"left",variant:"default",titleTag:"h3",subtitleTag:"p"}},o={args:{title:"Harmonizing Human Experience: The Artistry of UI-UX Design",subtitle:"UI is the canvas, UX the brushstroke; together, they craft an immersive journey where every pixel tells a story of elegance, efficiency, and effortless delight. It is the artistry of design at its finest.",size:"md",alignment:"left",variant:"default",titleTag:"h2",subtitleTag:"p"}},u={args:{title:"Harmonizing Human Experience: The Artistry of UI-UX Design",subtitle:"UI is the canvas, UX the brushstroke; together, they craft an immersive journey where every pixel tells a story of elegance, efficiency, and effortless delight. It is the artistry of design at its finest.",size:"lg",alignment:"center",variant:"default",titleTag:"h1",subtitleTag:"p"}},c={args:{title:"Research Dashboard",subtitle:"Manage your research projects and collaborations",size:"md",alignment:"left",variant:"default"}},m={args:{title:"Scientific Community",subtitle:"Connect with researchers worldwide",size:"md",alignment:"center",variant:"default"}},d={args:{title:"Data Analytics",subtitle:"Analyze your research data with advanced tools",size:"md",alignment:"right",variant:"default"}},h={args:{title:"Standard Title",subtitle:"This is the default styling for title and subtitle",size:"md",alignment:"left",variant:"default"}},g={args:{title:"Important Announcement",subtitle:"This content requires special attention",size:"md",alignment:"left",variant:"emphasized"}},p={args:{title:"Subtle Section",subtitle:"For less prominent content areas",size:"md",alignment:"left",variant:"minimal"}},f={args:{title:"Standalone Title",size:"md",alignment:"left",variant:"default",titleTag:"h2"}},b={args:{title:"Title with Description",subtitle:"This subtitle provides additional context and information",size:"md",alignment:"left",variant:"default",titleTag:"h2",subtitleTag:"p"}},_={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsx(n,{title:"H1 Title with P Subtitle",subtitle:"Paragraph subtitle for main page heading",titleTag:"h1",subtitleTag:"p",size:"lg"}),e.jsx(n,{title:"H2 Title with H4 Subtitle",subtitle:"H4 subtitle for section heading",titleTag:"h2",subtitleTag:"h4",size:"md"}),e.jsx(n,{title:"H3 Title with H5 Subtitle",subtitle:"H5 subtitle for subsection",titleTag:"h3",subtitleTag:"h5",size:"sm"})]})},v={args:{title:"Revolutionizing Scientific Research",subtitle:"Join thousands of researchers sharing knowledge and advancing science through our open platform",size:"lg",alignment:"center",variant:"emphasized",titleTag:"h1",subtitleTag:"p"}},T={args:{title:"Recent Papers",subtitle:"Latest submissions this week",size:"sm",alignment:"left",variant:"default",titleTag:"h3",subtitleTag:"p"}},z={args:{title:"Featured Research",subtitle:"Highlighted publications from our community",size:"md",alignment:"center",variant:"minimal",titleTag:"h2",subtitleTag:"p"}};var w,x,H;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    title: 'Welcome to OpenScience',
    subtitle: 'Discover the latest research and scientific breakthroughs from around the world',
    size: 'md',
    alignment: 'center',
    variant: 'default',
    titleTag: 'h2',
    subtitleTag: 'p'
  }
}`,...(H=(x=l.parameters)==null?void 0:x.docs)==null?void 0:H.source}}};var j,R,U;r.parameters={...r.parameters,docs:{...(j=r.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    title: 'Harmonizing Human Experience: The Artistry of UI-UX Design',
    subtitle: 'UI is the canvas, UX the brushstroke; together, they craft an immersive journey ' + 'where every pixel tells a story of elegance, efficiency, and effortless delight. ' + 'It is the artistry of design at its finest.',
    size: 'sm',
    alignment: 'left',
    variant: 'default',
    titleTag: 'h3',
    subtitleTag: 'p'
  }
}`,...(U=(R=r.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};var I,D,A;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    title: 'Harmonizing Human Experience: The Artistry of UI-UX Design',
    subtitle: 'UI is the canvas, UX the brushstroke; together, they craft an immersive journey ' + 'where every pixel tells a story of elegance, efficiency, and effortless delight. ' + 'It is the artistry of design at its finest.',
    size: 'md',
    alignment: 'left',
    variant: 'default',
    titleTag: 'h2',
    subtitleTag: 'p'
  }
}`,...(A=(D=o.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var q,V,k;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    title: 'Harmonizing Human Experience: The Artistry of UI-UX Design',
    subtitle: 'UI is the canvas, UX the brushstroke; together, they craft an immersive journey ' + 'where every pixel tells a story of elegance, efficiency, and effortless delight. ' + 'It is the artistry of design at its finest.',
    size: 'lg',
    alignment: 'center',
    variant: 'default',
    titleTag: 'h1',
    subtitleTag: 'p'
  }
}`,...(k=(V=u.parameters)==null?void 0:V.docs)==null?void 0:k.source}}};var C,X,E;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    title: 'Research Dashboard',
    subtitle: 'Manage your research projects and collaborations',
    size: 'md',
    alignment: 'left',
    variant: 'default'
  }
}`,...(E=(X=c.parameters)==null?void 0:X.docs)==null?void 0:E.source}}};var M,$,L;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    title: 'Scientific Community',
    subtitle: 'Connect with researchers worldwide',
    size: 'md',
    alignment: 'center',
    variant: 'default'
  }
}`,...(L=($=m.parameters)==null?void 0:$.docs)==null?void 0:L.source}}};var N,P,W;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    title: 'Data Analytics',
    subtitle: 'Analyze your research data with advanced tools',
    size: 'md',
    alignment: 'right',
    variant: 'default'
  }
}`,...(W=(P=d.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};var F,O,J;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    title: 'Standard Title',
    subtitle: 'This is the default styling for title and subtitle',
    size: 'md',
    alignment: 'left',
    variant: 'default'
  }
}`,...(J=(O=h.parameters)==null?void 0:O.docs)==null?void 0:J.source}}};var B,G,K;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    title: 'Important Announcement',
    subtitle: 'This content requires special attention',
    size: 'md',
    alignment: 'left',
    variant: 'emphasized'
  }
}`,...(K=(G=g.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var Q,Y,Z;p.parameters={...p.parameters,docs:{...(Q=p.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    title: 'Subtle Section',
    subtitle: 'For less prominent content areas',
    size: 'md',
    alignment: 'left',
    variant: 'minimal'
  }
}`,...(Z=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,te,ie;f.parameters={...f.parameters,docs:{...(ee=f.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    title: 'Standalone Title',
    size: 'md',
    alignment: 'left',
    variant: 'default',
    titleTag: 'h2'
  }
}`,...(ie=(te=f.parameters)==null?void 0:te.docs)==null?void 0:ie.source}}};var ae,se,ne;b.parameters={...b.parameters,docs:{...(ae=b.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    title: 'Title with Description',
    subtitle: 'This subtitle provides additional context and information',
    size: 'md',
    alignment: 'left',
    variant: 'default',
    titleTag: 'h2',
    subtitleTag: 'p'
  }
}`,...(ne=(se=b.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};var le,re,oe;_.parameters={..._.parameters,docs:{...(le=_.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  }}>
      <TitleSubtitle title="H1 Title with P Subtitle" subtitle="Paragraph subtitle for main page heading" titleTag="h1" subtitleTag="p" size="lg" />
      <TitleSubtitle title="H2 Title with H4 Subtitle" subtitle="H4 subtitle for section heading" titleTag="h2" subtitleTag="h4" size="md" />
      <TitleSubtitle title="H3 Title with H5 Subtitle" subtitle="H5 subtitle for subsection" titleTag="h3" subtitleTag="h5" size="sm" />
    </div>
}`,...(oe=(re=_.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var ue,ce,me;v.parameters={...v.parameters,docs:{...(ue=v.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    title: 'Revolutionizing Scientific Research',
    subtitle: 'Join thousands of researchers sharing knowledge and advancing science through our open platform',
    size: 'lg',
    alignment: 'center',
    variant: 'emphasized',
    titleTag: 'h1',
    subtitleTag: 'p'
  }
}`,...(me=(ce=v.parameters)==null?void 0:ce.docs)==null?void 0:me.source}}};var de,he,ge;T.parameters={...T.parameters,docs:{...(de=T.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    title: 'Recent Papers',
    subtitle: 'Latest submissions this week',
    size: 'sm',
    alignment: 'left',
    variant: 'default',
    titleTag: 'h3',
    subtitleTag: 'p'
  }
}`,...(ge=(he=T.parameters)==null?void 0:he.docs)==null?void 0:ge.source}}};var pe,fe,be;z.parameters={...z.parameters,docs:{...(pe=z.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    title: 'Featured Research',
    subtitle: 'Highlighted publications from our community',
    size: 'md',
    alignment: 'center',
    variant: 'minimal',
    titleTag: 'h2',
    subtitleTag: 'p'
  }
}`,...(be=(fe=z.parameters)==null?void 0:fe.docs)==null?void 0:be.source}}};const Ue=["Default","SmallSize","MediumSize","LargeSize","LeftAligned","CenterAligned","RightAligned","DefaultVariant","EmphasizedVariant","MinimalVariant","WithoutSubtitle","WithSubtitle","SemanticVariations","HeroSection","CardHeader","SectionDivider"];export{T as CardHeader,m as CenterAligned,l as Default,h as DefaultVariant,g as EmphasizedVariant,v as HeroSection,u as LargeSize,c as LeftAligned,o as MediumSize,p as MinimalVariant,d as RightAligned,z as SectionDivider,_ as SemanticVariations,r as SmallSize,b as WithSubtitle,f as WithoutSubtitle,Ue as __namedExportsOrder,Re as default};
