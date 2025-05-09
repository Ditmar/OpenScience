import{j as e}from"./jsx-runtime-DRTy3Uxn.js";import{r as t}from"./index-BBkUAzwr.js";const ue="_container_16pir_1",de="_icon_16pir_9",ge="_tooltip_16pir_20",fe="_top_16pir_50",he="_bottom_16pir_69",_e="_left_16pir_88",Te="_right_16pir_107",ye="_small_16pir_126",xe="_medium_16pir_131",be="_large_16pir_136",n={container:ue,icon:de,tooltip:ge,top:fe,bottom:he,left:_e,right:Te,small:ye,medium:xe,large:be,"sr-only":"_sr-only_16pir_141"};function U(){return e.jsx("span",{className:n.icon,children:e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:[e.jsx("path",{d:`
          M8 1C4.13401 1 1 4.13401 1 8
          C1 11.866 4.13401 15 8 15
          C11.866 15 15 11.866 15 8
          C15 4.13401 11.866 1 8 1ZM8 13.5
          C4.96243 13.5 2.5 11.0376 2.5 8
          C2.5 4.96243 4.96243 2.5 8 2.5
          C11.0376 2.5 13.5 4.96243 13.5 8
          C13.5 11.0376 11.0376 13.5 8 13.5Z
        `,fill:"currentColor"}),e.jsx("path",{d:`
          M7.25 5.25
          C7.25 5.66421 7.58579 6 8 6
          C8.41421 6 8.75 5.66421 8.75 5.25
          C8.75 4.83579 8.41421 4.5 8 4.5
          C7.58579 4.5 7.25 4.83579 7.25 5.25Z
        `,fill:"currentColor"}),e.jsx("path",{d:`
          M8.75 7.75
          C8.75 7.33579 8.41421 7 8 7
          C7.58579 7 7.25 7.33579 7.25 7.75
          V11.25
          C7.25 11.6642 7.58579 12 8 12
          C8.41421 12 8.75 11.6642 8.75 11.25
          V7.75Z
        `,fill:"currentColor"})]})})}U.__docgenInfo={description:"",methods:[],displayName:"TooltipIcon"};function X({content:h,position:Y="top",size:ee="medium",className:oe="",icon:te,delay:ne=300,children:se}){const[re,_]=t.useState(!1),[o,T]=t.useState(null),ae=t.useRef(null),ie=t.useRef(null),y=()=>{o&&clearTimeout(o);const f=setTimeout(()=>{_(!0)},ne);T(f)},g=()=>{o&&(clearTimeout(o),T(null)),_(!1)},le=f=>{f.key==="Escape"&&g()};t.useEffect(()=>()=>{o&&clearTimeout(o)},[o]);const x=`tooltip-${h.substring(0,5)}`,ce=`${n.container} ${oe}`,pe=`${n.tooltip} ${n[Y]} ${n[ee]}`,me=te??e.jsx(U,{});return e.jsxs("div",{className:ce,onMouseEnter:y,onMouseLeave:g,onFocus:y,onBlur:g,onKeyDown:le,ref:ie,tabIndex:0,role:"button","aria-describedby":x,children:[se??me,re&&e.jsx("div",{id:x,className:pe,ref:ae,role:"tooltip",children:h})]})}X.__docgenInfo={description:"",methods:[],displayName:"InfoTooltip",props:{content:{required:!0,tsType:{name:"string"},description:""},position:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom' | 'left' | 'right'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'top'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},delay:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"300",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const ve={title:"ui/components/atoms/InfoTooltip",component:X,argTypes:{position:{control:{type:"select"},options:["top","bottom","left","right"]},size:{control:{type:"select"},options:["small","medium","large"]},delay:{control:{type:"number"}}}},s={args:{content:"Esta es una información adicional sobre el elemento"}},r={args:{content:"position top",position:"top"}},a={args:{content:"position bottom",position:"bottom"}},i={args:{content:"position left",position:"left"}},l={args:{content:"position right",position:"right"}},c={args:{content:"Tooltip pequeño",size:"small"}},p={args:{content:"Tooltip grande",size:"large"}},m={args:{content:"Tooltip con ícono personalizado",icon:e.jsx("span",{style:{fontSize:"18px",fontWeight:"bold"},children:"?"})}},u={args:{content:"Tooltip con retardo de 1 segundo",delay:1e3}},d={args:{content:"Tooltip activado por un elemento hijo",children:e.jsx("button",{style:{padding:"8px 16px"},children:"Pasa el cursor aquí"})}};var b,C,S;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    content: 'Esta es una información adicional sobre el elemento'
  }
}`,...(S=(C=s.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var v,w,R;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    content: 'position top',
    position: 'top'
  }
}`,...(R=(w=r.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};var j,z,I;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    content: 'position bottom',
    position: 'bottom'
  }
}`,...(I=(z=a.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};var q,E,N;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    content: 'position left',
    position: 'left'
  }
}`,...(N=(E=i.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var P,D,V;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    content: 'position right',
    position: 'right'
  }
}`,...(V=(D=l.parameters)==null?void 0:D.docs)==null?void 0:V.source}}};var W,M,$;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    content: 'Tooltip pequeño',
    size: 'small'
  }
}`,...($=(M=c.parameters)==null?void 0:M.docs)==null?void 0:$.source}}};var L,B,Z;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    content: 'Tooltip grande',
    size: 'large'
  }
}`,...(Z=(B=p.parameters)==null?void 0:B.docs)==null?void 0:Z.source}}};var F,K,k;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    content: 'Tooltip con ícono personalizado',
    icon: <span style={{
      fontSize: '18px',
      fontWeight: 'bold'
    }}>?</span>
  }
}`,...(k=(K=m.parameters)==null?void 0:K.docs)==null?void 0:k.source}}};var O,A,G;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    content: 'Tooltip con retardo de 1 segundo',
    delay: 1000
  }
}`,...(G=(A=u.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};var H,J,Q;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    content: 'Tooltip activado por un elemento hijo',
    children: <button style={{
      padding: '8px 16px'
    }}>Pasa el cursor aquí</button>
  }
}`,...(Q=(J=d.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};const we=["Default","TopPosition","BottomPosition","LeftPosition","RightPosition","SmallSize","LargeSize","WithCustomIcon","WithDelay","WithChildren"];export{a as BottomPosition,s as Default,p as LargeSize,i as LeftPosition,l as RightPosition,c as SmallSize,r as TopPosition,d as WithChildren,m as WithCustomIcon,u as WithDelay,we as __namedExportsOrder,ve as default};
