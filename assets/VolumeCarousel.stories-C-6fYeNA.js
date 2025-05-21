import{j as e}from"./jsx-runtime-DRTy3Uxn.js";import{L as i}from"./LabelDate-DxzfQWbb.js";import{V as m}from"./LabelVol-SrYWhn_D.js";import{T as c}from"./Thumbnail-B7NyhZII.js";import{V as d,L as u,s as a,R as g}from"./right-arrow-BU-4EXaV.js";import{R as p,a as v,b as h}from"./Rectangle30-DbsUxWac.js";import{R}from"./Rectangle29-qq2plPfP.js";import"./index-BBkUAzwr.js";import"./icons-DNNtq2Yd.js";import"./index-YMbfICiA.js";const L={title:"ui/components/molecules/volume-carousel",component:d},t={args:{leftIcon:u,children:e.jsx("div",{className:a.carousel__list,children:[p,v,R,h].map((o,s)=>e.jsxs("div",{className:a.carousel__item,children:[e.jsx("div",{className:a.thumbnail,children:e.jsx(c,{pathImage:String(o),alt:`Rectangle${String(27+s)}`})}),e.jsx("div",{className:a.labeldate,children:e.jsx(i,{date:new Date(2023,3+s,15+s)})}),e.jsx("div",{className:a.volume,children:e.jsx(m,{volumen:"Vol. ",id:1+s})})]}))}),rightIcon:g}};var l,n,r;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    leftIcon: LeftArrow,
    children: <div className={styles.carousel__list}>
        {[Rectangle27, Rectangle28, Rectangle29, Rectangle30].map((image, index) => <div className={styles.carousel__item}>
            <div className={styles.thumbnail}>
              <Thumbnail pathImage={String(image)} alt={\`Rectangle\${String(27 + index)}\`} />
            </div>
            <div className={styles.labeldate}>
              <LabelDate date={new Date(2023, 3 + index, 15 + index)} />
            </div>
            <div className={styles.volume}>
              <Volumen volumen="Vol. " id={1 + index} />
            </div>
          </div>)}
      </div>,
    rightIcon: RightArrow
  }
}`,...(r=(n=t.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const S=["Carousel"];export{t as Carousel,S as __namedExportsOrder,L as default};
