import{j as e}from"./jsx-runtime-BlDnFLNC.js";import"./index-Cu9bd8lq.js";const t={"title-subtitle":"_title-subtitle_1qv2f_106","title-subtitle__title":"_title-subtitle__title_1qv2f_113","title-subtitle__subtitle":"_title-subtitle__subtitle_1qv2f_122","title-subtitle--size-sm":"_title-subtitle--size-sm_1qv2f_131","title-subtitle--size-md":"_title-subtitle--size-md_1qv2f_141","title-subtitle--size-lg":"_title-subtitle--size-lg_1qv2f_151","title-subtitle--alignment-left":"_title-subtitle--alignment-left_1qv2f_161","title-subtitle--alignment-center":"_title-subtitle--alignment-center_1qv2f_165","title-subtitle--alignment-right":"_title-subtitle--alignment-right_1qv2f_169","title-subtitle--variant-default":"_title-subtitle--variant-default_1qv2f_173","title-subtitle--variant-emphasized":"_title-subtitle--variant-emphasized_1qv2f_180","title-subtitle--variant-minimal":"_title-subtitle--variant-minimal_1qv2f_189","title-subtitle__title--h1":"_title-subtitle__title--h1_1qv2f_198","title-subtitle__title--h2":"_title-subtitle__title--h2_1qv2f_203","title-subtitle__title--h3":"_title-subtitle__title--h3_1qv2f_208","title-subtitle__title--h4":"_title-subtitle__title--h4_1qv2f_213","title-subtitle__title--h5":"_title-subtitle__title--h5_1qv2f_219","title-subtitle__subtitle--p":"_title-subtitle__subtitle--p_1qv2f_225","title-subtitle__subtitle--h3":"_title-subtitle__subtitle--h3_1qv2f_230","title-subtitle__subtitle--h4":"_title-subtitle__subtitle--h4_1qv2f_236","title-subtitle__subtitle--h5":"_title-subtitle__subtitle--h5_1qv2f_242","title-subtitle__subtitle--h6":"_title-subtitle__subtitle--h6_1qv2f_248"};function i({title:bt,subtitle:v,size:ft="md",alignment:_t="left",variant:vt="default",titleTag:T="h2",subtitleTag:S="p",className:Tt=""}){const St=`${t["title-subtitle"]} 
    ${t[`title-subtitle--size-${ft}`]} 
    ${t[`title-subtitle--alignment-${_t}`]} 
    ${t[`title-subtitle--variant-${vt}`]} 
    ${Tt}`.trim(),zt=`${t["title-subtitle__title"]} ${t[`title-subtitle__title--${T}`]}`,wt=`${t["title-subtitle__subtitle"]} ${t[`title-subtitle__subtitle--${S}`]}`,yt=T,qt=S;return e.jsxs("div",{className:St,children:[e.jsx(yt,{className:zt,children:bt}),v&&e.jsx(qt,{className:wt,children:v})]})}i.__docgenInfo={description:"",methods:[],displayName:"TitleSubtitle",props:{title:{required:!0,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},subtitle:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},alignment:{required:!1,tsType:{name:"union",raw:"'left' | 'center' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'left'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'emphasized' | 'minimal'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'emphasized'"},{name:"literal",value:"'minimal'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},titleTag:{required:!1,tsType:{name:"union",raw:"'h1' | 'h2' | 'h3' | 'h4' | 'h5'",elements:[{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"},{name:"literal",value:"'h4'"},{name:"literal",value:"'h5'"}]},description:"",defaultValue:{value:"'h2'",computed:!1}},subtitleTag:{required:!1,tsType:{name:"union",raw:"'p' | 'h3' | 'h4' | 'h5' | 'h6'",elements:[{name:"literal",value:"'p'"},{name:"literal",value:"'h3'"},{name:"literal",value:"'h4'"},{name:"literal",value:"'h5'"},{name:"literal",value:"'h6'"}]},description:"",defaultValue:{value:"'p'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const Rt={title:"ui/components/atoms/TitleSubtitle",component:i,parameters:{layout:"padded"},argTypes:{title:{control:"text",description:"Main title content"},subtitle:{control:"text",description:"Optional subtitle content"},size:{control:"select",options:["sm","md","lg"],description:"Size variant for different contexts"},alignment:{control:"select",options:["left","center","right"],description:"Text alignment"},variant:{control:"select",options:["default","emphasized","minimal"],description:"Visual style variant"},titleTag:{control:"select",options:["h1","h2","h3","h4","h5"],description:"HTML semantic tag for title"},subtitleTag:{control:"select",options:["p","h3","h4","h5","h6"],description:"HTML semantic tag for subtitle"},className:{control:"text",description:"Additional CSS classes"}}},a={args:{title:"Welcome to OpenScience",subtitle:"Discover the latest research and scientific breakthroughs from around the world",size:"md",alignment:"left",variant:"default",titleTag:"h2",subtitleTag:"p"}},l={args:{title:"Research Categories",subtitle:"Browse through different scientific fields",size:"sm",alignment:"left",variant:"default",titleTag:"h3",subtitleTag:"p"}},s={args:{title:"Latest Publications",subtitle:"Stay updated with recent scientific publications and papers",size:"md",alignment:"left",variant:"default",titleTag:"h2",subtitleTag:"p"}},n={args:{title:"Open Science Platform",subtitle:"Advancing scientific knowledge through collaboration and open access",size:"lg",alignment:"center",variant:"default",titleTag:"h1",subtitleTag:"p"}},r={args:{title:"Research Dashboard",subtitle:"Manage your research projects and collaborations",size:"md",alignment:"left",variant:"default"}},o={args:{title:"Scientific Community",subtitle:"Connect with researchers worldwide",size:"md",alignment:"center",variant:"default"}},u={args:{title:"Data Analytics",subtitle:"Analyze your research data with advanced tools",size:"md",alignment:"right",variant:"default"}},c={args:{title:"Standard Title",subtitle:"This is the default styling for title and subtitle",size:"md",alignment:"left",variant:"default"}},m={args:{title:"Important Announcement",subtitle:"This content requires special attention",size:"md",alignment:"left",variant:"emphasized"}},d={args:{title:"Subtle Section",subtitle:"For less prominent content areas",size:"md",alignment:"left",variant:"minimal"}},g={args:{title:"Standalone Title",size:"md",alignment:"left",variant:"default",titleTag:"h2"}},p={args:{title:"Title with Description",subtitle:"This subtitle provides additional context and information",size:"md",alignment:"left",variant:"default",titleTag:"h2",subtitleTag:"p"}},h={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsx(i,{title:"H1 Title with P Subtitle",subtitle:"Paragraph subtitle for main page heading",titleTag:"h1",subtitleTag:"p",size:"lg"}),e.jsx(i,{title:"H2 Title with H4 Subtitle",subtitle:"H4 subtitle for section heading",titleTag:"h2",subtitleTag:"h4",size:"md"}),e.jsx(i,{title:"H3 Title with H5 Subtitle",subtitle:"H5 subtitle for subsection",titleTag:"h3",subtitleTag:"h5",size:"sm"})]})},b={args:{title:"Revolutionizing Scientific Research",subtitle:"Join thousands of researchers sharing knowledge and advancing science through our open platform",size:"lg",alignment:"center",variant:"emphasized",titleTag:"h1",subtitleTag:"p"}},f={args:{title:"Recent Papers",subtitle:"Latest submissions this week",size:"sm",alignment:"left",variant:"default",titleTag:"h3",subtitleTag:"p"}},_={args:{title:"Featured Research",subtitle:"Highlighted publications from our community",size:"md",alignment:"center",variant:"minimal",titleTag:"h2",subtitleTag:"p"}};var z,w,y;a.parameters={...a.parameters,docs:{...(z=a.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    title: 'Welcome to OpenScience',
    subtitle: 'Discover the latest research and scientific breakthroughs from around the world',
    size: 'md',
    alignment: 'left',
    variant: 'default',
    titleTag: 'h2',
    subtitleTag: 'p'
  }
}`,...(y=(w=a.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var q,x,H;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    title: 'Research Categories',
    subtitle: 'Browse through different scientific fields',
    size: 'sm',
    alignment: 'left',
    variant: 'default',
    titleTag: 'h3',
    subtitleTag: 'p'
  }
}`,...(H=(x=l.parameters)==null?void 0:x.docs)==null?void 0:H.source}}};var R,D,A;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    title: 'Latest Publications',
    subtitle: 'Stay updated with recent scientific publications and papers',
    size: 'md',
    alignment: 'left',
    variant: 'default',
    titleTag: 'h2',
    subtitleTag: 'p'
  }
}`,...(A=(D=s.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var V,C,$;n.parameters={...n.parameters,docs:{...(V=n.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    title: 'Open Science Platform',
    subtitle: 'Advancing scientific knowledge through collaboration and open access',
    size: 'lg',
    alignment: 'center',
    variant: 'default',
    titleTag: 'h1',
    subtitleTag: 'p'
  }
}`,...($=(C=n.parameters)==null?void 0:C.docs)==null?void 0:$.source}}};var j,L,N;r.parameters={...r.parameters,docs:{...(j=r.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    title: 'Research Dashboard',
    subtitle: 'Manage your research projects and collaborations',
    size: 'md',
    alignment: 'left',
    variant: 'default'
  }
}`,...(N=(L=r.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var P,M,k;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    title: 'Scientific Community',
    subtitle: 'Connect with researchers worldwide',
    size: 'md',
    alignment: 'center',
    variant: 'default'
  }
}`,...(k=(M=o.parameters)==null?void 0:M.docs)==null?void 0:k.source}}};var O,W,E;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    title: 'Data Analytics',
    subtitle: 'Analyze your research data with advanced tools',
    size: 'md',
    alignment: 'right',
    variant: 'default'
  }
}`,...(E=(W=u.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};var F,I,B;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    title: 'Standard Title',
    subtitle: 'This is the default styling for title and subtitle',
    size: 'md',
    alignment: 'left',
    variant: 'default'
  }
}`,...(B=(I=c.parameters)==null?void 0:I.docs)==null?void 0:B.source}}};var J,G,K;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    title: 'Important Announcement',
    subtitle: 'This content requires special attention',
    size: 'md',
    alignment: 'left',
    variant: 'emphasized'
  }
}`,...(K=(G=m.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var Q,U,X;d.parameters={...d.parameters,docs:{...(Q=d.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    title: 'Subtle Section',
    subtitle: 'For less prominent content areas',
    size: 'md',
    alignment: 'left',
    variant: 'minimal'
  }
}`,...(X=(U=d.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,tt;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    title: 'Standalone Title',
    size: 'md',
    alignment: 'left',
    variant: 'default',
    titleTag: 'h2'
  }
}`,...(tt=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:tt.source}}};var et,it,at;p.parameters={...p.parameters,docs:{...(et=p.parameters)==null?void 0:et.docs,source:{originalSource:`{
  args: {
    title: 'Title with Description',
    subtitle: 'This subtitle provides additional context and information',
    size: 'md',
    alignment: 'left',
    variant: 'default',
    titleTag: 'h2',
    subtitleTag: 'p'
  }
}`,...(at=(it=p.parameters)==null?void 0:it.docs)==null?void 0:at.source}}};var lt,st,nt;h.parameters={...h.parameters,docs:{...(lt=h.parameters)==null?void 0:lt.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  }}>
      <TitleSubtitle title="H1 Title with P Subtitle" subtitle="Paragraph subtitle for main page heading" titleTag="h1" subtitleTag="p" size="lg" />
      <TitleSubtitle title="H2 Title with H4 Subtitle" subtitle="H4 subtitle for section heading" titleTag="h2" subtitleTag="h4" size="md" />
      <TitleSubtitle title="H3 Title with H5 Subtitle" subtitle="H5 subtitle for subsection" titleTag="h3" subtitleTag="h5" size="sm" />
    </div>
}`,...(nt=(st=h.parameters)==null?void 0:st.docs)==null?void 0:nt.source}}};var rt,ot,ut;b.parameters={...b.parameters,docs:{...(rt=b.parameters)==null?void 0:rt.docs,source:{originalSource:`{
  args: {
    title: 'Revolutionizing Scientific Research',
    subtitle: 'Join thousands of researchers sharing knowledge and advancing science through our open platform',
    size: 'lg',
    alignment: 'center',
    variant: 'emphasized',
    titleTag: 'h1',
    subtitleTag: 'p'
  }
}`,...(ut=(ot=b.parameters)==null?void 0:ot.docs)==null?void 0:ut.source}}};var ct,mt,dt;f.parameters={...f.parameters,docs:{...(ct=f.parameters)==null?void 0:ct.docs,source:{originalSource:`{
  args: {
    title: 'Recent Papers',
    subtitle: 'Latest submissions this week',
    size: 'sm',
    alignment: 'left',
    variant: 'default',
    titleTag: 'h3',
    subtitleTag: 'p'
  }
}`,...(dt=(mt=f.parameters)==null?void 0:mt.docs)==null?void 0:dt.source}}};var gt,pt,ht;_.parameters={..._.parameters,docs:{...(gt=_.parameters)==null?void 0:gt.docs,source:{originalSource:`{
  args: {
    title: 'Featured Research',
    subtitle: 'Highlighted publications from our community',
    size: 'md',
    alignment: 'center',
    variant: 'minimal',
    titleTag: 'h2',
    subtitleTag: 'p'
  }
}`,...(ht=(pt=_.parameters)==null?void 0:pt.docs)==null?void 0:ht.source}}};const Dt=["Default","SmallSize","MediumSize","LargeSize","LeftAligned","CenterAligned","RightAligned","DefaultVariant","EmphasizedVariant","MinimalVariant","WithoutSubtitle","WithSubtitle","SemanticVariations","HeroSection","CardHeader","SectionDivider"];export{f as CardHeader,o as CenterAligned,a as Default,c as DefaultVariant,m as EmphasizedVariant,b as HeroSection,n as LargeSize,r as LeftAligned,s as MediumSize,d as MinimalVariant,u as RightAligned,_ as SectionDivider,h as SemanticVariations,l as SmallSize,p as WithSubtitle,g as WithoutSubtitle,Dt as __namedExportsOrder,Rt as default};
