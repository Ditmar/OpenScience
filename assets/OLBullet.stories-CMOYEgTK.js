import{j as s}from"./jsx-runtime-BTJTZTIL.js";import"./index-ChsGqxH_.js";const r={"ol-bullet":"_ol-bullet_1b2jx_106","ol-bullet--active":"_ol-bullet--active_1b2jx_111","ol-bullet--circle":"_ol-bullet--circle_1b2jx_115","ol-bullet--rounded":"_ol-bullet--rounded_1b2jx_118","ol-bullet--square":"_ol-bullet--square_1b2jx_121","ol-bullet--sm":"_ol-bullet--sm_1b2jx_124","ol-bullet--md":"_ol-bullet--md_1b2jx_128","ol-bullet--lg":"_ol-bullet--lg_1b2jx_132"};function b(e){const{shape:a="square",size:Ce="md",active:Re=!1}=e,Me=`
    ${r["ol-bullet"]}
    ${r[`ol-bullet--${a}`]}
    ${r[`ol-bullet--${Ce}`]}
    ${Re?r["ol-bullet--active"]:""}
  `.trim();return s.jsx("span",{className:Me,role:"presentation"})}b.__docgenInfo={description:"",methods:[],displayName:"OLBullet",props:{shape:{required:!1,tsType:{name:"union",raw:"'square' | 'rounded' | 'circle'",elements:[{name:"literal",value:"'square'"},{name:"literal",value:"'rounded'"},{name:"literal",value:"'circle'"}]},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:""},active:{required:!1,tsType:{name:"boolean"},description:""}}};const Oe={title:"ui/components/atoms/ol-bullet",component:b,argTypes:{shape:{control:"select",options:["square","rounded","circle"]},size:{control:"select",options:["sm","md","lg"]},active:{control:"boolean"}}},_=["sm","md","lg"],A=["square","rounded","circle"],t={args:{shape:"square",size:"sm",active:!1}},i={args:{shape:"square",size:"sm",active:!0}},c={args:{shape:"square",size:"md",active:!1}},n={args:{shape:"square",size:"md",active:!0}},o={args:{shape:"square",size:"lg",active:!1}},l={args:{shape:"square",size:"lg",active:!0}},d={args:{shape:"rounded",size:"sm",active:!1}},u={args:{shape:"rounded",size:"sm",active:!0}},m={args:{shape:"rounded",size:"md",active:!1}},p={args:{shape:"rounded",size:"md",active:!0}},g={args:{shape:"rounded",size:"lg",active:!1}},v={args:{shape:"rounded",size:"lg",active:!0}},f={args:{shape:"circle",size:"sm",active:!1}},S={args:{shape:"circle",size:"sm",active:!0}},h={args:{shape:"circle",size:"md",active:!1}},y={args:{shape:"circle",size:"md",active:!0}},z={args:{shape:"circle",size:"lg",active:!1}},x={args:{shape:"circle",size:"lg",active:!0}},q={render:()=>s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"5rem",margin:"2rem"},children:[s.jsx("div",{style:{display:"flex",gap:"5rem"},children:A.map(e=>s.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"2rem",alignItems:"flex-start"},children:_.map(a=>s.jsx(b,{shape:e,size:a,active:!1},`${e}-${a}-inactive`))},`inactive-${e}`))}),s.jsx("div",{style:{display:"flex",gap:"5rem"},children:A.map(e=>s.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"2rem",alignItems:"flex-start"},children:_.map(a=>s.jsx(b,{shape:e,size:a,active:!0},`${e}-${a}-active`))},`active-${e}`))})]})};var j,$,L;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    shape: 'square',
    size: 'sm',
    active: false
  }
} satisfies Story`,...(L=($=t.parameters)==null?void 0:$.docs)==null?void 0:L.source}}};var C,R,M;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    shape: 'square',
    size: 'sm',
    active: true
  }
} satisfies Story`,...(M=(R=i.parameters)==null?void 0:R.docs)==null?void 0:M.source}}};var D,I,O;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    shape: 'square',
    size: 'md',
    active: false
  }
} satisfies Story`,...(O=(I=c.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var k,B,T;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    shape: 'square',
    size: 'md',
    active: true
  }
} satisfies Story`,...(T=(B=n.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};var w,E,N;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    shape: 'square',
    size: 'lg',
    active: false
  }
} satisfies Story`,...(N=(E=o.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var V,F,G;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    shape: 'square',
    size: 'lg',
    active: true
  }
} satisfies Story`,...(G=(F=l.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var H,J,K;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    shape: 'rounded',
    size: 'sm',
    active: false
  }
} satisfies Story`,...(K=(J=d.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var P,Q,U;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    shape: 'rounded',
    size: 'sm',
    active: true
  }
} satisfies Story`,...(U=(Q=u.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var W,X,Y;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    shape: 'rounded',
    size: 'md',
    active: false
  }
} satisfies Story`,...(Y=(X=m.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,se;p.parameters={...p.parameters,docs:{...(Z=p.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    shape: 'rounded',
    size: 'md',
    active: true
  }
} satisfies Story`,...(se=(ee=p.parameters)==null?void 0:ee.docs)==null?void 0:se.source}}};var ae,re,te;g.parameters={...g.parameters,docs:{...(ae=g.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    shape: 'rounded',
    size: 'lg',
    active: false
  }
} satisfies Story`,...(te=(re=g.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var ie,ce,ne;v.parameters={...v.parameters,docs:{...(ie=v.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    shape: 'rounded',
    size: 'lg',
    active: true
  }
} satisfies Story`,...(ne=(ce=v.parameters)==null?void 0:ce.docs)==null?void 0:ne.source}}};var oe,le,de;f.parameters={...f.parameters,docs:{...(oe=f.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    shape: 'circle',
    size: 'sm',
    active: false
  }
} satisfies Story`,...(de=(le=f.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var ue,me,pe;S.parameters={...S.parameters,docs:{...(ue=S.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    shape: 'circle',
    size: 'sm',
    active: true
  }
} satisfies Story`,...(pe=(me=S.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var ge,ve,fe;h.parameters={...h.parameters,docs:{...(ge=h.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    shape: 'circle',
    size: 'md',
    active: false
  }
} satisfies Story`,...(fe=(ve=h.parameters)==null?void 0:ve.docs)==null?void 0:fe.source}}};var Se,he,ye;y.parameters={...y.parameters,docs:{...(Se=y.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  args: {
    shape: 'circle',
    size: 'md',
    active: true
  }
} satisfies Story`,...(ye=(he=y.parameters)==null?void 0:he.docs)==null?void 0:ye.source}}};var ze,xe,qe;z.parameters={...z.parameters,docs:{...(ze=z.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  args: {
    shape: 'circle',
    size: 'lg',
    active: false
  }
} satisfies Story`,...(qe=(xe=z.parameters)==null?void 0:xe.docs)==null?void 0:qe.source}}};var be,_e,Ae;x.parameters={...x.parameters,docs:{...(be=x.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    shape: 'circle',
    size: 'lg',
    active: true
  }
} satisfies Story`,...(Ae=(_e=x.parameters)==null?void 0:_e.docs)==null?void 0:Ae.source}}};var je,$e,Le;q.parameters={...q.parameters,docs:{...(je=q.parameters)==null?void 0:je.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '5rem',
    margin: '2rem'
  }}>
      <div style={{
      display: 'flex',
      gap: '5rem'
    }}>
        {shapes.map(shape => <div key={\`inactive-\${shape}\`} style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        alignItems: 'flex-start'
      }}>
            {sizes.map(size => <OLBullet key={\`\${shape}-\${size}-inactive\`} shape={shape} size={size} active={false} />)}
          </div>)}
      </div>
      <div style={{
      display: 'flex',
      gap: '5rem'
    }}>
        {shapes.map(shape => <div key={\`active-\${shape}\`} style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        alignItems: 'flex-start'
      }}>
            {sizes.map(size => <OLBullet key={\`\${shape}-\${size}-active\`} shape={shape} size={size} active />)}
          </div>)}
      </div>
    </div>
}`,...(Le=($e=q.parameters)==null?void 0:$e.docs)==null?void 0:Le.source}}};const ke=["SquareSm","SquareSmActive","SquareMd","SquareMdActive","SquareLg","SquareLgActive","RoundedSm","RoundedSmActive","RoundedMd","RoundedMdActive","RoundedLg","RoundedLgActive","CircleSm","CircleSmActive","CircleMd","CircleMdActive","CircleLg","CircleLgActive","AllVariants"];export{q as AllVariants,z as CircleLg,x as CircleLgActive,h as CircleMd,y as CircleMdActive,f as CircleSm,S as CircleSmActive,g as RoundedLg,v as RoundedLgActive,m as RoundedMd,p as RoundedMdActive,d as RoundedSm,u as RoundedSmActive,o as SquareLg,l as SquareLgActive,c as SquareMd,n as SquareMdActive,t as SquareSm,i as SquareSmActive,ke as __namedExportsOrder,Oe as default};
