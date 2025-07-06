import{j as i}from"./jsx-runtime-BlDnFLNC.js";import{a as Te}from"./index-Cu9bd8lq.js";const e={"title-subtitle":"_title-subtitle_swtnz_106","title-subtitle__title":"_title-subtitle__title_swtnz_114","title-subtitle__subtitle":"_title-subtitle__subtitle_swtnz_123","title-subtitle--size-sm":"_title-subtitle--size-sm_swtnz_132","title-subtitle--size-md":"_title-subtitle--size-md_swtnz_142","title-subtitle--size-lg":"_title-subtitle--size-lg_swtnz_152","title-subtitle--alignment-left":"_title-subtitle--alignment-left_swtnz_162","title-subtitle--alignment-center":"_title-subtitle--alignment-center_swtnz_171","title-subtitle--alignment-right":"_title-subtitle--alignment-right_swtnz_181","title-subtitle--variant-default":"_title-subtitle--variant-default_swtnz_191","title-subtitle--variant-emphasized":"_title-subtitle--variant-emphasized_swtnz_198","title-subtitle--variant-minimal":"_title-subtitle--variant-minimal_swtnz_207","title-subtitle__title--h1":"_title-subtitle__title--h1_swtnz_216","title-subtitle__title--h2":"_title-subtitle__title--h2_swtnz_221","title-subtitle__title--h3":"_title-subtitle__title--h3_swtnz_226","title-subtitle__title--h4":"_title-subtitle__title--h4_swtnz_231","title-subtitle__title--h5":"_title-subtitle__title--h5_swtnz_237","title-subtitle__subtitle--p":"_title-subtitle__subtitle--p_swtnz_243","title-subtitle__subtitle--h3":"_title-subtitle__subtitle--h3_swtnz_248","title-subtitle__subtitle--h4":"_title-subtitle__subtitle--h4_swtnz_254","title-subtitle__subtitle--h5":"_title-subtitle__subtitle--h5_swtnz_260","title-subtitle__subtitle--h6":"_title-subtitle__subtitle--h6_swtnz_266"};function ze({tag:t,className:a,children:s}){const n=["h1","h2","h3","h4","h5"].includes(t)?t:"h2";return Te.createElement(n,{className:a},s)}ze.__docgenInfo={description:"",methods:[],displayName:"TitleTag",props:{tag:{required:!0,tsType:{name:"union",raw:"'h1' | 'h2' | 'h3' | 'h4' | 'h5'",elements:[{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"},{name:"literal",value:"'h4'"},{name:"literal",value:"'h5'"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};function ye({tag:t,className:a,children:s}){const n=["p","h3","h4","h5","h6"].includes(t)?t:"p";return Te.createElement(n,{className:a},s)}ye.__docgenInfo={description:"",methods:[],displayName:"SubtitleTag",props:{tag:{required:!0,tsType:{name:"union",raw:"'p' | 'h3' | 'h4' | 'h5' | 'h6'",elements:[{name:"literal",value:"'p'"},{name:"literal",value:"'h3'"},{name:"literal",value:"'h4'"},{name:"literal",value:"'h5'"},{name:"literal",value:"'h6'"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};function l({title:t,subtitle:a,size:s="md",alignment:S="left",variant:n="default",titleTag:w="h2",subtitleTag:x="p",className:Se=""}){const we=[e["title-subtitle"],e[`title-subtitle--size-${s}`],e[`title-subtitle--alignment-${S}`],e[`title-subtitle--variant-${n}`],Se].join(" "),xe=`${e["title-subtitle__title"]} ${e[`title-subtitle__title--${w}`]}`,He=`${e["title-subtitle__subtitle"]} ${e[`title-subtitle__subtitle--${x}`]}`;return i.jsxs("div",{className:we,children:[i.jsx(ze,{tag:w,className:xe,children:t}),a&&i.jsx(ye,{tag:x,className:He,children:a})]})}l.__docgenInfo={description:"",methods:[],displayName:"TitleSubtitle",props:{title:{required:!0,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},subtitle:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},alignment:{required:!1,tsType:{name:"union",raw:"'left' | 'center' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'left'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'emphasized' | 'minimal'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'emphasized'"},{name:"literal",value:"'minimal'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},titleTag:{required:!1,tsType:{name:"union",raw:"'h1' | 'h2' | 'h3' | 'h4' | 'h5'",elements:[{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"},{name:"literal",value:"'h4'"},{name:"literal",value:"'h5'"}]},description:"",defaultValue:{value:"'h2'",computed:!1}},subtitleTag:{required:!1,tsType:{name:"union",raw:"'p' | 'h3' | 'h4' | 'h5' | 'h6'",elements:[{name:"literal",value:"'p'"},{name:"literal",value:"'h3'"},{name:"literal",value:"'h4'"},{name:"literal",value:"'h5'"},{name:"literal",value:"'h6'"}]},description:"",defaultValue:{value:"'p'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const Ie={title:"ui/components/atoms/TitleSubtitle",component:l,parameters:{layout:"padded"},argTypes:{title:{control:"text",description:"Main title content"},subtitle:{control:"text",description:"Optional subtitle content"},size:{control:"select",options:["sm","md","lg"],description:"Size variant for different contexts"},alignment:{control:"select",options:["left","center","right"],description:"Text alignment"},variant:{control:"select",options:["default","emphasized","minimal"],description:"Visual style variant"},titleTag:{control:"select",options:["h1","h2","h3","h4","h5"],description:"HTML semantic tag for title"},subtitleTag:{control:"select",options:["p","h3","h4","h5","h6"],description:"HTML semantic tag for subtitle"},className:{control:"text",description:"Additional CSS classes"}}},r={args:{title:"Welcome to OpenScience",subtitle:"Discover the latest research and scientific breakthroughs from around the world",size:"md",alignment:"center",variant:"default",titleTag:"h2",subtitleTag:"p"}},o={args:{title:"Harmonizing Human Experience: The Artistry of UI-UX Design",subtitle:"UI is the canvas, UX the brushstroke; together, they craft an immersive journey where every pixel tells a story of elegance, efficiency, and effortless delight. It is the artistry of design at its finest.",size:"sm",alignment:"left",variant:"default",titleTag:"h3",subtitleTag:"p"}},u={args:{title:"Harmonizing Human Experience: The Artistry of UI-UX Design",subtitle:"UI is the canvas, UX the brushstroke; together, they craft an immersive journey where every pixel tells a story of elegance, efficiency, and effortless delight. It is the artistry of design at its finest.",size:"md",alignment:"left",variant:"default",titleTag:"h2",subtitleTag:"p"}},c={args:{title:"Harmonizing Human Experience: The Artistry of UI-UX Design",subtitle:"UI is the canvas, UX the brushstroke; together, they craft an immersive journey where every pixel tells a story of elegance, efficiency, and effortless delight. It is the artistry of design at its finest.",size:"lg",alignment:"center",variant:"default",titleTag:"h1",subtitleTag:"p"}},m={args:{title:"Research Dashboard",subtitle:"Manage your research projects and collaborations",size:"md",alignment:"left",variant:"default"}},d={args:{title:"Scientific Community",subtitle:"Connect with researchers worldwide",size:"md",alignment:"center",variant:"default"}},h={args:{title:"Data Analytics",subtitle:"Analyze your research data with advanced tools",size:"md",alignment:"right",variant:"default"}},g={args:{title:"Standard Title",subtitle:"This is the default styling for title and subtitle",size:"md",alignment:"left",variant:"default"}},p={args:{title:"Important Announcement",subtitle:"This content requires special attention",size:"md",alignment:"left",variant:"emphasized"}},f={args:{title:"Subtle Section",subtitle:"For less prominent content areas",size:"md",alignment:"left",variant:"minimal"}},b={args:{title:"Standalone Title",size:"md",alignment:"left",variant:"default",titleTag:"h2"}},_={args:{title:"Title with Description",subtitle:"This subtitle provides additional context and information",size:"md",alignment:"left",variant:"default",titleTag:"h2",subtitleTag:"p"}},v={render:()=>i.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[i.jsx(l,{title:"H1 Title with P Subtitle",subtitle:"Paragraph subtitle for main page heading",titleTag:"h1",subtitleTag:"p",size:"lg"}),i.jsx(l,{title:"H2 Title with H4 Subtitle",subtitle:"H4 subtitle for section heading",titleTag:"h2",subtitleTag:"h4",size:"md"}),i.jsx(l,{title:"H3 Title with H5 Subtitle",subtitle:"H5 subtitle for subsection",titleTag:"h3",subtitleTag:"h5",size:"sm"})]})},T={args:{title:"Revolutionizing Scientific Research",subtitle:"Join thousands of researchers sharing knowledge and advancing science through our open platform",size:"lg",alignment:"center",variant:"emphasized",titleTag:"h1",subtitleTag:"p"}},z={args:{title:"Recent Papers",subtitle:"Latest submissions this week",size:"sm",alignment:"left",variant:"default",titleTag:"h3",subtitleTag:"p"}},y={args:{title:"Featured Research",subtitle:"Highlighted publications from our community",size:"md",alignment:"center",variant:"minimal",titleTag:"h2",subtitleTag:"p"}};var H,R,U;r.parameters={...r.parameters,docs:{...(H=r.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    title: 'Welcome to OpenScience',
    subtitle: 'Discover the latest research and scientific breakthroughs from around the world',
    size: 'md',
    alignment: 'center',
    variant: 'default',
    titleTag: 'h2',
    subtitleTag: 'p'
  }
}`,...(U=(R=r.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};var I,D,A;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    title: 'Harmonizing Human Experience: The Artistry of UI-UX Design',
    subtitle: 'UI is the canvas, UX the brushstroke; together, they craft an immersive journey ' + 'where every pixel tells a story of elegance, efficiency, and effortless delight. ' + 'It is the artistry of design at its finest.',
    size: 'sm',
    alignment: 'left',
    variant: 'default',
    titleTag: 'h3',
    subtitleTag: 'p'
  }
}`,...(A=(D=o.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var j,N,q;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    title: 'Harmonizing Human Experience: The Artistry of UI-UX Design',
    subtitle: 'UI is the canvas, UX the brushstroke; together, they craft an immersive journey ' + 'where every pixel tells a story of elegance, efficiency, and effortless delight. ' + 'It is the artistry of design at its finest.',
    size: 'md',
    alignment: 'left',
    variant: 'default',
    titleTag: 'h2',
    subtitleTag: 'p'
  }
}`,...(q=(N=u.parameters)==null?void 0:N.docs)==null?void 0:q.source}}};var V,k,C;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    title: 'Harmonizing Human Experience: The Artistry of UI-UX Design',
    subtitle: 'UI is the canvas, UX the brushstroke; together, they craft an immersive journey ' + 'where every pixel tells a story of elegance, efficiency, and effortless delight. ' + 'It is the artistry of design at its finest.',
    size: 'lg',
    alignment: 'center',
    variant: 'default',
    titleTag: 'h1',
    subtitleTag: 'p'
  }
}`,...(C=(k=c.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var E,X,M;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    title: 'Research Dashboard',
    subtitle: 'Manage your research projects and collaborations',
    size: 'md',
    alignment: 'left',
    variant: 'default'
  }
}`,...(M=(X=m.parameters)==null?void 0:X.docs)==null?void 0:M.source}}};var $,L,P;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    title: 'Scientific Community',
    subtitle: 'Connect with researchers worldwide',
    size: 'md',
    alignment: 'center',
    variant: 'default'
  }
}`,...(P=(L=d.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var W,F,O;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    title: 'Data Analytics',
    subtitle: 'Analyze your research data with advanced tools',
    size: 'md',
    alignment: 'right',
    variant: 'default'
  }
}`,...(O=(F=h.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};var J,B,G;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    title: 'Standard Title',
    subtitle: 'This is the default styling for title and subtitle',
    size: 'md',
    alignment: 'left',
    variant: 'default'
  }
}`,...(G=(B=g.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};var K,Q,Y;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    title: 'Important Announcement',
    subtitle: 'This content requires special attention',
    size: 'md',
    alignment: 'left',
    variant: 'emphasized'
  }
}`,...(Y=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var Z,ee,te;f.parameters={...f.parameters,docs:{...(Z=f.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    title: 'Subtle Section',
    subtitle: 'For less prominent content areas',
    size: 'md',
    alignment: 'left',
    variant: 'minimal'
  }
}`,...(te=(ee=f.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ie,ae,se;b.parameters={...b.parameters,docs:{...(ie=b.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    title: 'Standalone Title',
    size: 'md',
    alignment: 'left',
    variant: 'default',
    titleTag: 'h2'
  }
}`,...(se=(ae=b.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var ne,le,re;_.parameters={..._.parameters,docs:{...(ne=_.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    title: 'Title with Description',
    subtitle: 'This subtitle provides additional context and information',
    size: 'md',
    alignment: 'left',
    variant: 'default',
    titleTag: 'h2',
    subtitleTag: 'p'
  }
}`,...(re=(le=_.parameters)==null?void 0:le.docs)==null?void 0:re.source}}};var oe,ue,ce;v.parameters={...v.parameters,docs:{...(oe=v.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  }}>
      <TitleSubtitle title="H1 Title with P Subtitle" subtitle="Paragraph subtitle for main page heading" titleTag="h1" subtitleTag="p" size="lg" />
      <TitleSubtitle title="H2 Title with H4 Subtitle" subtitle="H4 subtitle for section heading" titleTag="h2" subtitleTag="h4" size="md" />
      <TitleSubtitle title="H3 Title with H5 Subtitle" subtitle="H5 subtitle for subsection" titleTag="h3" subtitleTag="h5" size="sm" />
    </div>
}`,...(ce=(ue=v.parameters)==null?void 0:ue.docs)==null?void 0:ce.source}}};var me,de,he;T.parameters={...T.parameters,docs:{...(me=T.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    title: 'Revolutionizing Scientific Research',
    subtitle: 'Join thousands of researchers sharing knowledge and advancing science through our open platform',
    size: 'lg',
    alignment: 'center',
    variant: 'emphasized',
    titleTag: 'h1',
    subtitleTag: 'p'
  }
}`,...(he=(de=T.parameters)==null?void 0:de.docs)==null?void 0:he.source}}};var ge,pe,fe;z.parameters={...z.parameters,docs:{...(ge=z.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    title: 'Recent Papers',
    subtitle: 'Latest submissions this week',
    size: 'sm',
    alignment: 'left',
    variant: 'default',
    titleTag: 'h3',
    subtitleTag: 'p'
  }
}`,...(fe=(pe=z.parameters)==null?void 0:pe.docs)==null?void 0:fe.source}}};var be,_e,ve;y.parameters={...y.parameters,docs:{...(be=y.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    title: 'Featured Research',
    subtitle: 'Highlighted publications from our community',
    size: 'md',
    alignment: 'center',
    variant: 'minimal',
    titleTag: 'h2',
    subtitleTag: 'p'
  }
}`,...(ve=(_e=y.parameters)==null?void 0:_e.docs)==null?void 0:ve.source}}};const De=["Default","SmallSize","MediumSize","LargeSize","LeftAligned","CenterAligned","RightAligned","DefaultVariant","EmphasizedVariant","MinimalVariant","WithoutSubtitle","WithSubtitle","SemanticVariations","HeroSection","CardHeader","SectionDivider"];export{z as CardHeader,d as CenterAligned,r as Default,g as DefaultVariant,p as EmphasizedVariant,T as HeroSection,c as LargeSize,m as LeftAligned,u as MediumSize,f as MinimalVariant,h as RightAligned,y as SectionDivider,v as SemanticVariations,o as SmallSize,_ as WithSubtitle,b as WithoutSubtitle,De as __namedExportsOrder,Ie as default};
