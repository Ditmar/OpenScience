import{j as e}from"./jsx-runtime-BlDnFLNC.js";import{r as o}from"./index-Cu9bd8lq.js";const de="_container_pgjz9_123",ue="_icon_pgjz9_131",ge="_tooltip_pgjz9_142",he="_top_pgjz9_173",fe="_bottom_pgjz9_192",Ce="_left_pgjz9_211",_e="_right_pgjz9_230",Te="_medium_pgjz9_249",ye="_large_pgjz9_254",n={container:de,icon:ue,tooltip:ge,top:he,bottom:fe,left:Ce,right:_e,medium:Te,large:ye,"sr-only":"_sr-only_pgjz9_259"};function U(){return e.jsx("span",{className:n.icon,children:e.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:[e.jsxs("g",{clipPath:"url(#clip0_6057_21069)",children:[e.jsx("path",{d:`
              M9 0C7.21997 0 5.47991 0.527841 3.99987 1.51677C2.51983 2.50571
              1.36628 3.91131 0.685088 5.55585C0.00389957 7.20038 -0.17433 9.00998
              0.172937 10.7558C0.520204 12.5016 1.37737 14.1053 2.63604 15.364C3.89472
              16.6226 5.49836 17.4798 7.24419 17.8271C8.99002 18.1743 10.7996 17.9961
              12.4442 17.3149C14.0887 16.6337 15.4943 15.4802 16.4832 14.0001C17.4722
              12.5201 18 10.78 18 9C17.9974 6.61384 17.0484 4.32616 15.3611 2.63889C13.6738
              0.951621 11.3862 0.00258081 9 0ZM9 16.5C7.51664 16.5 6.0666 16.0601 4.83323
              15.236C3.59986 14.4119 2.63856 13.2406 2.07091 11.8701C1.50325 10.4997 1.35473
              8.99168 1.64411 7.53682C1.9335 6.08197 2.64781 4.74559 3.6967 3.6967C4.7456
              2.64781 6.08197 1.9335 7.53683 1.64411C8.99168 1.35472 10.4997 1.50325
              11.8701 2.0709C13.2406 2.63856 14.4119 3.59985 15.236 4.83322C16.0601
              6.06659 16.5 7.51664 16.5 9C16.4978 10.9885 15.7069 12.8948 14.3009
              14.3009C12.8948 15.7069 10.9885 16.4978 9 16.5Z
            `,fill:"#151A2D"}),e.jsx("path",{d:`
              M9 7.5H8.25C8.05109 7.5 7.86032 7.57902 7.71967 7.71967C7.57902
              7.86032 7.5 8.05109 7.5 8.25C7.5 8.44891 7.57902 8.63968 7.71967
              8.78033C7.86032 8.92098 8.05109 9 8.25 9H9V13.5C9 13.6989 9.07902
              13.8897 9.21967 14.0303C9.36032 14.171 9.55109 14.25 9.75 14.25C9.94891
              14.25 10.1397 14.171 10.2803 14.0303C10.421 13.8897 10.5 13.6989
              10.5 13.5V9C10.5 8.60218 10.342 8.22064 10.0607 7.93934C9.77936 7.65804
              9.39782 7.5 9 7.5Z
            `,fill:"#151A2D"}),e.jsx("path",{d:`
              M9 6C9.62132 6 10.125 5.49632 10.125 4.875C10.125 4.25368 9.62132
              3.75 9 3.75C8.37868 3.75 7.875 4.25368 7.875 4.875C7.875 5.49632
              8.37868 6 9 6Z
            `,fill:"#151A2D"})]}),e.jsx("defs",{children:e.jsx("clipPath",{id:"clip0_6057_21069",children:e.jsx("rect",{width:"18",height:"18",fill:"white"})})})]})})}U.__docgenInfo={description:"",methods:[],displayName:"TooltipIcon"};function X({content:f,position:Y="top",size:ee="medium",className:te="",icon:oe,delay:ne=300,children:se}){const[re,C]=o.useState(!1),[t,_]=o.useState(null),ie=o.useRef(null),ae=o.useRef(null),T=()=>{t&&clearTimeout(t);const h=setTimeout(()=>{C(!0)},ne);_(h)},g=()=>{t&&(clearTimeout(t),_(null)),C(!1)},le=h=>{h.key==="Escape"&&g()};o.useEffect(()=>()=>{t&&clearTimeout(t)},[t]);const y=`tooltip-${f.substring(0,5)}`,ce=`${n.container} ${te}`,pe=`${n.tooltip} ${n[Y]} ${n[ee]}`,me=oe??e.jsx(U,{});return e.jsxs("div",{className:ce,onMouseEnter:T,onMouseLeave:g,onFocus:T,onBlur:g,onKeyDown:le,ref:ae,tabIndex:0,role:"button","aria-describedby":y,children:[se??me,re&&e.jsx("div",{id:y,className:pe,ref:ie,role:"tooltip",children:f})]})}X.__docgenInfo={description:"",methods:[],displayName:"InfoTooltip",props:{content:{required:!0,tsType:{name:"string"},description:""},position:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom' | 'left' | 'right'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'top'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},delay:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"300",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const je={title:"ui/components/Molecules/InfoTooltip",component:X,argTypes:{position:{control:{type:"select"},options:["top","bottom","left","right"]},size:{control:{type:"select"},options:["small","medium","large"]},delay:{control:{type:"number"}}}},s={args:{content:"This is additional information about the element"}},r={args:{content:"Tooltip on top",position:"top"}},i={args:{content:"Tooltip at the bottom",position:"bottom"}},a={args:{content:"Tooltip on the left",position:"left"}},l={args:{content:"Tooltip on the right",position:"right"}},c={args:{content:"Small tooltip",size:"small"}},p={args:{content:"Large tooltip",size:"large"}},m={args:{content:"Tooltip with custom icon",icon:e.jsx("span",{style:{fontSize:"18px",fontWeight:"bold"},children:"?"})}},d={args:{content:"Tooltip with 1 second delay",delay:1e3}},u={args:{content:"Tooltip triggered by a child element",children:e.jsx("button",{style:{padding:"8px 16px"},children:"Hover here"})}};var b,x,j;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    content: 'This is additional information about the element'
  }
}`,...(j=(x=s.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var S,z,w;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    content: 'Tooltip on top',
    position: 'top'
  }
}`,...(w=(z=r.parameters)==null?void 0:z.docs)==null?void 0:w.source}}};var v,R,I;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    content: 'Tooltip at the bottom',
    position: 'bottom'
  }
}`,...(I=(R=i.parameters)==null?void 0:R.docs)==null?void 0:I.source}}};var N,P,D;a.parameters={...a.parameters,docs:{...(N=a.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    content: 'Tooltip on the left',
    position: 'left'
  }
}`,...(D=(P=a.parameters)==null?void 0:P.docs)==null?void 0:D.source}}};var V,W,q;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    content: 'Tooltip on the right',
    position: 'right'
  }
}`,...(q=(W=l.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var L,M,E;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    content: 'Small tooltip',
    size: 'small'
  }
}`,...(E=(M=c.parameters)==null?void 0:M.docs)==null?void 0:E.source}}};var $,B,H;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    content: 'Large tooltip',
    size: 'large'
  }
}`,...(H=(B=p.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};var Z,A,K;m.parameters={...m.parameters,docs:{...(Z=m.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    content: 'Tooltip with custom icon',
    icon: <span style={{
      fontSize: '18px',
      fontWeight: 'bold'
    }}>?</span>
  }
}`,...(K=(A=m.parameters)==null?void 0:A.docs)==null?void 0:K.source}}};var k,F,O;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    content: 'Tooltip with 1 second delay',
    delay: 1000
  }
}`,...(O=(F=d.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};var G,J,Q;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    content: 'Tooltip triggered by a child element',
    children: <button style={{
      padding: '8px 16px'
    }}>Hover here</button>
  }
}`,...(Q=(J=u.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};const Se=["Default","TopPosition","BottomPosition","LeftPosition","RightPosition","SmallSize","LargeSize","WithCustomIcon","WithDelay","WithChildren"];export{i as BottomPosition,s as Default,p as LargeSize,a as LeftPosition,l as RightPosition,c as SmallSize,r as TopPosition,u as WithChildren,m as WithCustomIcon,d as WithDelay,Se as __namedExportsOrder,je as default};
