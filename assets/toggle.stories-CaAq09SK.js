import{j as e}from"./jsx-runtime-DRTy3Uxn.js";import{r as c}from"./index-BBkUAzwr.js";const O="_toggle_1hd0g_26",J="_toggle__track_1hd0g_45",L="_toggle__thumb_1hd0g_55",p={toggle:O,"toggle--disabled":"_toggle--disabled_1hd0g_41",toggle__track:J,toggle__thumb:L,"toggle--small":"_toggle--small_1hd0g_64","toggle--medium":"_toggle--medium_1hd0g_78","toggle--large":"_toggle--large_1hd0g_92","toggle--checked":"_toggle--checked_1hd0g_106","toggle--default":"_toggle--default_1hd0g_113","toggle--primary":"_toggle--primary_1hd0g_117","toggle--secondary":"_toggle--secondary_1hd0g_121","toggle--tertiary":"_toggle--tertiary_1hd0g_125","toggle--success":"_toggle--success_1hd0g_129","toggle--error":"_toggle--error_1hd0g_133","toggle--warning":"_toggle--warning_1hd0g_137","toggle--info":"_toggle--info_1hd0g_141","toggle--light":"_toggle--light_1hd0g_145","toggle--dark":"_toggle--dark_1hd0g_149"};function o({checked:s=!1,onChange:l,disabled:t=!1,variant:r="default",size:a="medium",className:i="",style:g,"data-testid":v="toggle"}){const n=c.useRef(null),_=()=>{l&&(l(!s),n.current&&n.current.focus())},U=j=>{[" ","Enter"].includes(j.key)&&(j.preventDefault(),_())},H=[p.toggle,p[`toggle--${r}`],p[`toggle--${a}`],s?p["toggle--checked"]:"",t?p["toggle--disabled"]:"",i].filter(Boolean).join(" ");return e.jsx("button",{ref:n,type:"button",role:"switch","aria-checked":s,"aria-disabled":t,"aria-label":s?"Activado":"Desactivado",className:H,onClick:_,onKeyDown:U,disabled:t,"data-testid":v,style:g,children:e.jsx("span",{className:p.toggle__track,children:e.jsx("span",{className:p.toggle__thumb})})})}o.__docgenInfo={description:"",methods:[],displayName:"Toggle",props:{checked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"value"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:`| 'default'
| 'primary'
| 'secondary'
| 'tertiary'
| 'success'
| 'error'
| 'warning'
| 'info'
| 'light'
| 'dark'`,elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'tertiary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'error'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'info'"},{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},"data-testid":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'toggle'",computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},dimensions:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  width: number;
  height: number;
  padding: number;
  circleSize: number;
}`,signature:{properties:[{key:"width",value:{name:"number",required:!0}},{key:"height",value:{name:"number",required:!0}},{key:"padding",value:{name:"number",required:!0}},{key:"circleSize",value:{name:"number",required:!0}}]}},description:""},id:{required:!1,tsType:{name:"string"},description:""},"aria-label":{required:!1,tsType:{name:"string"},description:""},"aria-labelledby":{required:!1,tsType:{name:"string"},description:""},"aria-checked":{required:!1,tsType:{name:"boolean"},description:""}}};const d=["default","primary","secondary","tertiary","success","error","warning","info","light","dark"],k=["small","medium","large"],ae={title:"ui/components/atoms/Toggle",component:o,tags:["autodocs"],argTypes:{checked:{control:"boolean",description:"Estado activado/desactivado"},onChange:{action:"changed",description:"Callback al cambiar estado"},disabled:{control:"boolean",description:"Estado deshabilitado"},variant:{control:"select",options:d,description:"Variante de color"},size:{control:"radio",options:k,description:"Tamaño del componente"}},args:{checked:!1,disabled:!1,variant:"default",size:"medium"},parameters:{docs:{description:{component:"Componente Toggle que permite al usuario activar o desactivar una opción."}}}},m={args:{checked:!1}},u={args:{checked:!0}},h={args:{disabled:!0}};function Q(){const[s,l]=c.useState(d.reduce((t,r)=>({...t,[r]:!0}),{}));return e.jsx("div",{style:{display:"grid",gap:"24px",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",padding:"16px"},children:d.map(t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",alignItems:"center",padding:"16px",borderRadius:"8px",backgroundColor:"#f9f9f9",boxShadow:"0 1px 3px rgba(0,0,0,0.1)"},children:[e.jsx("div",{style:{fontWeight:"bold",marginBottom:"8px",fontSize:"1rem"},children:t.charAt(0).toUpperCase()+t.slice(1)}),e.jsx("label",{htmlFor:`toggle-variant-${t}`,style:{display:"inline-block"},children:e.jsx(o,{id:`toggle-variant-${t}`,variant:t,checked:s[t],onChange:r=>{l(a=>({...a,[t]:r}))},"aria-label":`${t} toggle`})}),e.jsx("div",{style:{fontSize:"0.85rem",color:"#666",marginTop:"8px"},children:s[t]?"Activado":"Desactivado"})]},t))})}const x={render:()=>e.jsx(Q,{}),parameters:{docs:{description:{story:"Muestra todas las variantes de color disponibles para el Toggle."}}}};function X(){const[s,l]=c.useState({small:!0,medium:!0,large:!0});return e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"32px",padding:"24px",maxWidth:"400px",backgroundColor:"#f9f9f9",borderRadius:"8px"},children:k.map(t=>e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[e.jsx("label",{htmlFor:`toggle-size-${t}`,style:{fontWeight:"bold",fontSize:"1rem"},children:t.charAt(0).toUpperCase()+t.slice(1)}),e.jsx(o,{id:`toggle-size-${t}`,size:t,checked:s[t],onChange:r=>{l(a=>({...a,[t]:r}))},variant:"primary","aria-label":`${t} toggle`})]},t))})}const f={render:()=>e.jsx(X,{}),parameters:{docs:{description:{story:"Muestra los diferentes tamaños disponibles para el Toggle."}}}};function Y(){const s={small:{width:48,height:28,padding:4,circleSize:20},medium:{width:48,height:32,padding:4,circleSize:24}},[l,t]=c.useState(d.reduce((a,i)=>({...a,[`small-${i}-disabled`]:!1,[`small-${i}-enabled`]:!0,[`medium-${i}-disabled`]:!1,[`medium-${i}-enabled`]:!0}),{})),r=(a,i)=>{t(g=>({...g,[a]:i}))};return e.jsxs("div",{style:{padding:"24px",maxWidth:"800px",margin:"0 auto"},children:[e.jsx("h1",{style:{width:"245px",height:"108px",margin:"0 auto 32px 90px",fontSize:"72px",textAlign:"center",color:"#333",fontWeight:"400",fontFamily:"Poppins, sans-serif",lineHeight:"100%",letterSpacing:"0%"},children:"Toggle"}),e.jsx("div",{style:{width:"550px",height:"648px",border:"1px dashed #d1d5db",borderRadius:"8px",padding:"24px",margin:"0 auto",display:"flex",justifyContent:"center",alignItems:"center"},children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gap:"30px",width:"80%",justifyItems:"center"},children:[e.jsx("div",{children:e.jsx("div",{style:{display:"grid",gap:"28px",justifyItems:"center"},children:d.map(a=>e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:e.jsx(o,{id:`small-${a}-disabled`,size:"small",variant:a,checked:l[`small-${a}-disabled`],onChange:i=>{r(`small-${a}-disabled`,i)},disabled:!0,"aria-label":`${a} small disabled toggle`})},`small-${a}-disabled`))})}),e.jsx("div",{children:e.jsx("div",{style:{display:"grid",gap:"28px",justifyItems:"center"},children:d.map(a=>e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:e.jsx(o,{id:`small-${a}-enabled`,size:"small",variant:a,checked:l[`small-${a}-enabled`],onChange:i=>{r(`small-${a}-enabled`,i)},dimensions:s.small,"aria-label":`${a} small enabled toggle`})},`small-${a}-enabled`))})}),e.jsx("div",{children:e.jsx("div",{style:{display:"grid",gap:"24px",justifyItems:"center"},children:d.map(a=>e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:e.jsx(o,{id:`medium-${a}-disabled`,size:"medium",variant:a,checked:l[`medium-${a}-disabled`],onChange:i=>{r(`medium-${a}-disabled`,i)},disabled:!0,dimensions:s.medium,"aria-label":`${a} medium disabled toggle`})},`medium-${a}-disabled`))})}),e.jsx("div",{children:e.jsx("div",{style:{display:"grid",gap:"24px",justifyItems:"center"},children:d.map(a=>e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:e.jsx(o,{id:`medium-${a}-enabled`,size:"medium",variant:a,checked:l[`medium-${a}-enabled`],onChange:i=>{r(`medium-${a}-enabled`,i)},dimensions:s.medium,"aria-label":`${a} medium enabled toggle`})},`medium-${a}-enabled`))})})]})})]})}const b={render:()=>e.jsx(Y,{}),parameters:{docs:{description:{story:"Muestra todas las variantes de Toggle organizadas por estado (habilitado/deshabilitado) y tamaño."}}}},y={render:()=>{const[s,l]=c.useState("primary"),[t,r]=c.useState(!0),[a,i]=c.useState("medium"),[g,v]=c.useState(!1);return e.jsxs("div",{style:{padding:"32px",maxWidth:"600px",backgroundColor:"#f9f9f9",borderRadius:"12px",boxShadow:"0 2px 10px rgba(0,0,0,0.05)"},children:[e.jsx("h2",{style:{marginBottom:"24px",fontSize:"1.5rem"},children:"Panel de control interactivo"}),e.jsx("div",{style:{marginBottom:"32px",padding:"24px",display:"flex",justifyContent:"center",backgroundColor:"#fff",borderRadius:"8px",boxShadow:"inset 0 1px 4px rgba(0,0,0,0.05)"},children:e.jsx(o,{variant:s,size:a,checked:t,disabled:g,onChange:r,"aria-label":"Interactive demo toggle"})}),e.jsxs("div",{style:{display:"grid",gap:"24px"},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"12px",fontSize:"1.2rem"},children:"Variante"}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(90px, 1fr))",gap:"8px"},children:d.map(n=>e.jsx("button",{onClick:()=>{l(n)},style:{padding:"8px",border:n===s?"2px solid #007bff":"1px solid #ccc",borderRadius:"6px",background:n===s?"#e6f2ff":"white",cursor:"pointer",fontWeight:n===s?"bold":"normal"},"aria-label":`Set ${n} variant`,children:n},n))})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"12px",fontSize:"1.2rem"},children:"Tamaño"}),e.jsx("div",{style:{display:"flex",gap:"12px"},children:k.map(n=>e.jsx("button",{onClick:()=>{i(n)},style:{padding:"8px 16px",border:n===a?"2px solid #007bff":"1px solid #ccc",borderRadius:"6px",background:n===a?"#e6f2ff":"white",cursor:"pointer",fontWeight:n===a?"bold":"normal",flex:1},"aria-label":`Set ${n} size`,children:n},n))})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"12px",fontSize:"1.2rem"},children:"Estado"}),e.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center",backgroundColor:"#fff",padding:"16px",borderRadius:"6px"},children:[e.jsxs("label",{htmlFor:"disabled-toggle",style:{display:"flex",alignItems:"center",gap:"8px",cursor:"pointer"},children:[e.jsx("input",{id:"disabled-toggle",type:"checkbox",checked:g,onChange:n=>{v(n.target.checked)},"aria-checked":g}),"Deshabilitado"]}),e.jsxs("label",{htmlFor:"checked-toggle",style:{display:"flex",alignItems:"center",gap:"8px",cursor:"pointer"},children:[e.jsx("input",{id:"checked-toggle",type:"checkbox",checked:t,onChange:n=>{r(n.target.checked)},"aria-checked":t}),"Activado"]})]})]})]})]})},parameters:{docs:{description:{story:"Panel interactivo para probar todas las propiedades del Toggle en tiempo real."}}}};var S,C,T;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    checked: false
  }
}`,...(T=(C=m.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var z,$,w;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    checked: true
  }
}`,...(w=($=u.parameters)==null?void 0:$.docs)==null?void 0:w.source}}};var V,I,D;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(D=(I=h.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};var q,A,R;x.parameters={...x.parameters,docs:{...(q=x.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <ToggleVariantsGrid />,
  parameters: {
    docs: {
      description: {
        story: 'Muestra todas las variantes de color disponibles para el Toggle.'
      }
    }
  }
}`,...(R=(A=x.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var B,W,F;f.parameters={...f.parameters,docs:{...(B=f.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <ToggleSizesDemo />,
  parameters: {
    docs: {
      description: {
        story: 'Muestra los diferentes tamaños disponibles para el Toggle.'
      }
    }
  }
}`,...(F=(W=f.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};var E,P,M;b.parameters={...b.parameters,docs:{...(E=b.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <ToggleStatesByVariantAndSize />,
  parameters: {
    docs: {
      description: {
        story: 'Muestra todas las variantes de Toggle organizadas por estado (habilitado/deshabilitado) y tamaño.'
      }
    }
  }
}`,...(M=(P=b.parameters)==null?void 0:P.docs)==null?void 0:M.source}}};var N,G,K;y.parameters={...y.parameters,docs:{...(N=y.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => {
    const [activeVariant, setActiveVariant] = useState<ToggleVariant>('primary');
    const [checked, setChecked] = useState(true);
    const [size, setSize] = useState<ToggleSize>('medium');
    const [disabled, setDisabled] = useState(false);
    return <div style={{
      padding: '32px',
      maxWidth: '600px',
      backgroundColor: '#f9f9f9',
      borderRadius: '12px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
    }}>
        <h2 style={{
        marginBottom: '24px',
        fontSize: '1.5rem'
      }}>Panel de control interactivo</h2>
        <div style={{
        marginBottom: '32px',
        padding: '24px',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: 'inset 0 1px 4px rgba(0,0,0,0.05)'
      }}>
          <Toggle variant={activeVariant} size={size} checked={checked} disabled={disabled} onChange={setChecked} aria-label="Interactive demo toggle" />
        </div>
        <div style={{
        display: 'grid',
        gap: '24px'
      }}>
          <div>
            <h3 style={{
            marginBottom: '12px',
            fontSize: '1.2rem'
          }}>Variante</h3>
            <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(90px, 1fr))',
            gap: '8px'
          }}>
              {variants.map(variant => <button key={variant} onClick={() => {
              setActiveVariant(variant);
            }} style={{
              padding: '8px',
              border: variant === activeVariant ? '2px solid #007bff' : '1px solid #ccc',
              borderRadius: '6px',
              background: variant === activeVariant ? '#e6f2ff' : 'white',
              cursor: 'pointer',
              fontWeight: variant === activeVariant ? 'bold' : 'normal'
            }} aria-label={\`Set \${variant} variant\`}>
                  {variant}
                </button>)}
            </div>
          </div>
          <div>
            <h3 style={{
            marginBottom: '12px',
            fontSize: '1.2rem'
          }}>Tamaño</h3>
            <div style={{
            display: 'flex',
            gap: '12px'
          }}>
              {sizes.map(s => <button key={s} onClick={() => {
              setSize(s);
            }} style={{
              padding: '8px 16px',
              border: s === size ? '2px solid #007bff' : '1px solid #ccc',
              borderRadius: '6px',
              background: s === size ? '#e6f2ff' : 'white',
              cursor: 'pointer',
              fontWeight: s === size ? 'bold' : 'normal',
              flex: 1
            }} aria-label={\`Set \${s} size\`}>
                  {s}
                </button>)}
            </div>
          </div>

          <div>
            <h3 style={{
            marginBottom: '12px',
            fontSize: '1.2rem'
          }}>Estado</h3>
            <div style={{
            display: 'flex',
            gap: '24px',
            alignItems: 'center',
            backgroundColor: '#fff',
            padding: '16px',
            borderRadius: '6px'
          }}>
              <label htmlFor="disabled-toggle" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              cursor: 'pointer'
            }}>
                <input id="disabled-toggle" type="checkbox" checked={disabled} onChange={e => {
                setDisabled(e.target.checked);
              }} aria-checked={disabled} />
                Deshabilitado
              </label>
              <label htmlFor="checked-toggle" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              cursor: 'pointer'
            }}>
                <input id="checked-toggle" type="checkbox" checked={checked} onChange={e => {
                setChecked(e.target.checked);
              }} aria-checked={checked} />
                Activado
              </label>
            </div>
          </div>
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Panel interactivo para probar todas las propiedades del Toggle en tiempo real.'
      }
    }
  }
}`,...(K=(G=y.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};const te=["Default","Checked","Disabled","AllVariants","AllSizes","TogglesByVariantAndState","InteractiveDemo"];export{f as AllSizes,x as AllVariants,u as Checked,m as Default,h as Disabled,y as InteractiveDemo,b as TogglesByVariantAndState,te as __namedExportsOrder,ae as default};
