import{j as t}from"./jsx-runtime-BlDnFLNC.js";import"./index-Cu9bd8lq.js";const e={"title-subtitle":"_title-subtitle_swtnz_106","title-subtitle__title":"_title-subtitle__title_swtnz_114","title-subtitle__subtitle":"_title-subtitle__subtitle_swtnz_123","title-subtitle--size-sm":"_title-subtitle--size-sm_swtnz_132","title-subtitle--size-md":"_title-subtitle--size-md_swtnz_142","title-subtitle--size-lg":"_title-subtitle--size-lg_swtnz_152","title-subtitle--alignment-left":"_title-subtitle--alignment-left_swtnz_162","title-subtitle--alignment-center":"_title-subtitle--alignment-center_swtnz_171","title-subtitle--alignment-right":"_title-subtitle--alignment-right_swtnz_181","title-subtitle--variant-default":"_title-subtitle--variant-default_swtnz_191","title-subtitle--variant-emphasized":"_title-subtitle--variant-emphasized_swtnz_198","title-subtitle--variant-minimal":"_title-subtitle--variant-minimal_swtnz_207","title-subtitle__title--h1":"_title-subtitle__title--h1_swtnz_216","title-subtitle__title--h2":"_title-subtitle__title--h2_swtnz_221","title-subtitle__title--h3":"_title-subtitle__title--h3_swtnz_226","title-subtitle__title--h4":"_title-subtitle__title--h4_swtnz_231","title-subtitle__title--h5":"_title-subtitle__title--h5_swtnz_237","title-subtitle__subtitle--p":"_title-subtitle__subtitle--p_swtnz_243","title-subtitle__subtitle--h3":"_title-subtitle__subtitle--h3_swtnz_248","title-subtitle__subtitle--h4":"_title-subtitle__subtitle--h4_swtnz_254","title-subtitle__subtitle--h5":"_title-subtitle__subtitle--h5_swtnz_260","title-subtitle__subtitle--h6":"_title-subtitle__subtitle--h6_swtnz_266"};function i({title:be,subtitle:v,size:fe="md",alignment:_e="left",variant:ve="default",titleTag:z="h2",subtitleTag:T="p",className:ze=""}){const Te=[e["title-subtitle"],e[`title-subtitle--size-${fe}`],e[`title-subtitle--alignment-${_e}`],e[`title-subtitle--variant-${ve}`],ze].join(" "),ye=`${e["title-subtitle__title"]} ${e[`title-subtitle__title--${z}`]}`,Se=`${e["title-subtitle__subtitle"]} ${e[`title-subtitle__subtitle--${T}`]}`,we=z,xe=T;return t.jsxs("div",{className:Te,children:[t.jsx(we,{className:ye,children:be}),v&&t.jsx(xe,{className:Se,children:v})]})}i.__docgenInfo={description:"",methods:[],displayName:"TitleSubtitle",props:{title:{required:!0,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},subtitle:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},alignment:{required:!1,tsType:{name:"union",raw:"'left' | 'center' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'left'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'emphasized' | 'minimal'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'emphasized'"},{name:"literal",value:"'minimal'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},titleTag:{required:!1,tsType:{name:"union",raw:"'h1' | 'h2' | 'h3' | 'h4' | 'h5'",elements:[{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"},{name:"literal",value:"'h4'"},{name:"literal",value:"'h5'"}]},description:"",defaultValue:{value:"'h2'",computed:!1}},subtitleTag:{required:!1,tsType:{name:"union",raw:"'p' | 'h3' | 'h4' | 'h5' | 'h6'",elements:[{name:"literal",value:"'p'"},{name:"literal",value:"'h3'"},{name:"literal",value:"'h4'"},{name:"literal",value:"'h5'"},{name:"literal",value:"'h6'"}]},description:"",defaultValue:{value:"'p'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const De={title:"ui/components/atoms/TitleSubtitle",component:i,parameters:{layout:"padded"},argTypes:{title:{control:"text",description:"Main title content"},subtitle:{control:"text",description:"Optional subtitle content"},size:{control:"select",options:["sm","md","lg"],description:"Size variant for different contexts"},alignment:{control:"select",options:["left","center","right"],description:"Text alignment"},variant:{control:"select",options:["default","emphasized","minimal"],description:"Visual style variant"},titleTag:{control:"select",options:["h1","h2","h3","h4","h5"],description:"HTML semantic tag for title"},subtitleTag:{control:"select",options:["p","h3","h4","h5","h6"],description:"HTML semantic tag for subtitle"},className:{control:"text",description:"Additional CSS classes"}}},a={args:{title:"Welcome to OpenScience",subtitle:"Discover the latest research and scientific breakthroughs from around the world",size:"md",alignment:"center",variant:"default",titleTag:"h2",subtitleTag:"p"}},s={args:{title:"Harmonizing Human Experience: The Artistry of UI-UX Design",subtitle:"UI is the canvas, UX the brushstroke; together, they craft an immersive journey where every pixel tells a story of elegance, efficiency, and effortless delight. It is the artistry of design at its finest.",size:"sm",alignment:"left",variant:"default",titleTag:"h3",subtitleTag:"p"}},n={args:{title:"Harmonizing Human Experience: The Artistry of UI-UX Design",subtitle:"UI is the canvas, UX the brushstroke; together, they craft an immersive journey where every pixel tells a story of elegance, efficiency, and effortless delight. It is the artistry of design at its finest.",size:"md",alignment:"left",variant:"default",titleTag:"h2",subtitleTag:"p"}},l={args:{title:"Harmonizing Human Experience: The Artistry of UI-UX Design",subtitle:"UI is the canvas, UX the brushstroke; together, they craft an immersive journey where every pixel tells a story of elegance, efficiency, and effortless delight. It is the artistry of design at its finest.",size:"lg",alignment:"center",variant:"default",titleTag:"h1",subtitleTag:"p"}},r={args:{title:"Research Dashboard",subtitle:"Manage your research projects and collaborations",size:"md",alignment:"left",variant:"default"}},o={args:{title:"Scientific Community",subtitle:"Connect with researchers worldwide",size:"md",alignment:"center",variant:"default"}},u={args:{title:"Data Analytics",subtitle:"Analyze your research data with advanced tools",size:"md",alignment:"right",variant:"default"}},c={args:{title:"Standard Title",subtitle:"This is the default styling for title and subtitle",size:"md",alignment:"left",variant:"default"}},m={args:{title:"Important Announcement",subtitle:"This content requires special attention",size:"md",alignment:"left",variant:"emphasized"}},d={args:{title:"Subtle Section",subtitle:"For less prominent content areas",size:"md",alignment:"left",variant:"minimal"}},g={args:{title:"Standalone Title",size:"md",alignment:"left",variant:"default",titleTag:"h2"}},h={args:{title:"Title with Description",subtitle:"This subtitle provides additional context and information",size:"md",alignment:"left",variant:"default",titleTag:"h2",subtitleTag:"p"}},p={render:()=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[t.jsx(i,{title:"H1 Title with P Subtitle",subtitle:"Paragraph subtitle for main page heading",titleTag:"h1",subtitleTag:"p",size:"lg"}),t.jsx(i,{title:"H2 Title with H4 Subtitle",subtitle:"H4 subtitle for section heading",titleTag:"h2",subtitleTag:"h4",size:"md"}),t.jsx(i,{title:"H3 Title with H5 Subtitle",subtitle:"H5 subtitle for subsection",titleTag:"h3",subtitleTag:"h5",size:"sm"})]})},b={args:{title:"Revolutionizing Scientific Research",subtitle:"Join thousands of researchers sharing knowledge and advancing science through our open platform",size:"lg",alignment:"center",variant:"emphasized",titleTag:"h1",subtitleTag:"p"}},f={args:{title:"Recent Papers",subtitle:"Latest submissions this week",size:"sm",alignment:"left",variant:"default",titleTag:"h3",subtitleTag:"p"}},_={args:{title:"Featured Research",subtitle:"Highlighted publications from our community",size:"md",alignment:"center",variant:"minimal",titleTag:"h2",subtitleTag:"p"}};var y,S,w;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    title: 'Welcome to OpenScience',
    subtitle: 'Discover the latest research and scientific breakthroughs from around the world',
    size: 'md',
    alignment: 'center',
    variant: 'default',
    titleTag: 'h2',
    subtitleTag: 'p'
  }
}`,...(w=(S=a.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var x,H,U;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    title: 'Harmonizing Human Experience: The Artistry of UI-UX Design',
    subtitle: 'UI is the canvas, UX the brushstroke; together, they craft an immersive journey ' + 'where every pixel tells a story of elegance, efficiency, and effortless delight. ' + 'It is the artistry of design at its finest.',
    size: 'sm',
    alignment: 'left',
    variant: 'default',
    titleTag: 'h3',
    subtitleTag: 'p'
  }
}`,...(U=(H=s.parameters)==null?void 0:H.docs)==null?void 0:U.source}}};var D,I,A;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    title: 'Harmonizing Human Experience: The Artistry of UI-UX Design',
    subtitle: 'UI is the canvas, UX the brushstroke; together, they craft an immersive journey ' + 'where every pixel tells a story of elegance, efficiency, and effortless delight. ' + 'It is the artistry of design at its finest.',
    size: 'md',
    alignment: 'left',
    variant: 'default',
    titleTag: 'h2',
    subtitleTag: 'p'
  }
}`,...(A=(I=n.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};var j,R,V;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    title: 'Harmonizing Human Experience: The Artistry of UI-UX Design',
    subtitle: 'UI is the canvas, UX the brushstroke; together, they craft an immersive journey ' + 'where every pixel tells a story of elegance, efficiency, and effortless delight. ' + 'It is the artistry of design at its finest.',
    size: 'lg',
    alignment: 'center',
    variant: 'default',
    titleTag: 'h1',
    subtitleTag: 'p'
  }
}`,...(V=(R=l.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var k,C,X;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    title: 'Research Dashboard',
    subtitle: 'Manage your research projects and collaborations',
    size: 'md',
    alignment: 'left',
    variant: 'default'
  }
}`,...(X=(C=r.parameters)==null?void 0:C.docs)==null?void 0:X.source}}};var q,E,N;o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    title: 'Scientific Community',
    subtitle: 'Connect with researchers worldwide',
    size: 'md',
    alignment: 'center',
    variant: 'default'
  }
}`,...(N=(E=o.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var M,$,L;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    title: 'Data Analytics',
    subtitle: 'Analyze your research data with advanced tools',
    size: 'md',
    alignment: 'right',
    variant: 'default'
  }
}`,...(L=($=u.parameters)==null?void 0:$.docs)==null?void 0:L.source}}};var P,W,F;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    title: 'Standard Title',
    subtitle: 'This is the default styling for title and subtitle',
    size: 'md',
    alignment: 'left',
    variant: 'default'
  }
}`,...(F=(W=c.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};var O,J,B;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    title: 'Important Announcement',
    subtitle: 'This content requires special attention',
    size: 'md',
    alignment: 'left',
    variant: 'emphasized'
  }
}`,...(B=(J=m.parameters)==null?void 0:J.docs)==null?void 0:B.source}}};var G,K,Q;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    title: 'Subtle Section',
    subtitle: 'For less prominent content areas',
    size: 'md',
    alignment: 'left',
    variant: 'minimal'
  }
}`,...(Q=(K=d.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var Y,Z,ee;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    title: 'Standalone Title',
    size: 'md',
    alignment: 'left',
    variant: 'default',
    titleTag: 'h2'
  }
}`,...(ee=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ie,ae;h.parameters={...h.parameters,docs:{...(te=h.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    title: 'Title with Description',
    subtitle: 'This subtitle provides additional context and information',
    size: 'md',
    alignment: 'left',
    variant: 'default',
    titleTag: 'h2',
    subtitleTag: 'p'
  }
}`,...(ae=(ie=h.parameters)==null?void 0:ie.docs)==null?void 0:ae.source}}};var se,ne,le;p.parameters={...p.parameters,docs:{...(se=p.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  }}>
      <TitleSubtitle title="H1 Title with P Subtitle" subtitle="Paragraph subtitle for main page heading" titleTag="h1" subtitleTag="p" size="lg" />
      <TitleSubtitle title="H2 Title with H4 Subtitle" subtitle="H4 subtitle for section heading" titleTag="h2" subtitleTag="h4" size="md" />
      <TitleSubtitle title="H3 Title with H5 Subtitle" subtitle="H5 subtitle for subsection" titleTag="h3" subtitleTag="h5" size="sm" />
    </div>
}`,...(le=(ne=p.parameters)==null?void 0:ne.docs)==null?void 0:le.source}}};var re,oe,ue;b.parameters={...b.parameters,docs:{...(re=b.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    title: 'Revolutionizing Scientific Research',
    subtitle: 'Join thousands of researchers sharing knowledge and advancing science through our open platform',
    size: 'lg',
    alignment: 'center',
    variant: 'emphasized',
    titleTag: 'h1',
    subtitleTag: 'p'
  }
}`,...(ue=(oe=b.parameters)==null?void 0:oe.docs)==null?void 0:ue.source}}};var ce,me,de;f.parameters={...f.parameters,docs:{...(ce=f.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    title: 'Recent Papers',
    subtitle: 'Latest submissions this week',
    size: 'sm',
    alignment: 'left',
    variant: 'default',
    titleTag: 'h3',
    subtitleTag: 'p'
  }
}`,...(de=(me=f.parameters)==null?void 0:me.docs)==null?void 0:de.source}}};var ge,he,pe;_.parameters={..._.parameters,docs:{...(ge=_.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    title: 'Featured Research',
    subtitle: 'Highlighted publications from our community',
    size: 'md',
    alignment: 'center',
    variant: 'minimal',
    titleTag: 'h2',
    subtitleTag: 'p'
  }
}`,...(pe=(he=_.parameters)==null?void 0:he.docs)==null?void 0:pe.source}}};const Ie=["Default","SmallSize","MediumSize","LargeSize","LeftAligned","CenterAligned","RightAligned","DefaultVariant","EmphasizedVariant","MinimalVariant","WithoutSubtitle","WithSubtitle","SemanticVariations","HeroSection","CardHeader","SectionDivider"];export{f as CardHeader,o as CenterAligned,a as Default,c as DefaultVariant,m as EmphasizedVariant,b as HeroSection,l as LargeSize,r as LeftAligned,n as MediumSize,d as MinimalVariant,u as RightAligned,_ as SectionDivider,p as SemanticVariations,s as SmallSize,h as WithSubtitle,g as WithoutSubtitle,Ie as __namedExportsOrder,De as default};
