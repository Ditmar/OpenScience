import{j as e}from"./jsx-runtime-DRTy3Uxn.js";import{L as m}from"./LabelDate-CuOO9EjH.js";import{V as i}from"./LabelVol-SrYWhn_D.js";import{T as c}from"./Thumbnail-B7NyhZII.js";import{V as d,L as g,s,R as u}from"./right-arrow-DI2z421Z.js";import{R as p,a as h,b as v}from"./Rectangle30-DbsUxWac.js";import{R}from"./Rectangle29-qq2plPfP.js";import"./index-BBkUAzwr.js";import"./icons-DNNtq2Yd.js";import"./index-YMbfICiA.js";const y={title:"ui/components/molecules/volume-carousel",component:d},t={args:{leftIcon:g,children:e.jsx(e.Fragment,{children:[p,h,R,v].map((o,a)=>e.jsxs("div",{className:s.carousel__item,children:[e.jsx("div",{className:s.thumbnail,children:e.jsx(c,{pathImage:String(o),alt:`Rectangle${String(27+a)}`})}),e.jsx("div",{className:s.labeldate,children:e.jsx(m,{date:new Date(2023,3+a,15+a)})}),e.jsx("div",{className:s.volume,children:e.jsx(i,{volumen:"Vol. ",id:1+a})})]}))}),rightIcon:u}};var n,l,r;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    leftIcon: LeftArrow,
    children: <>
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
      </>,
    rightIcon: RightArrow
  }
}`,...(r=(l=t.parameters)==null?void 0:l.docs)==null?void 0:r.source}}};const S=["Carousel"];export{t as Carousel,S as __namedExportsOrder,y as default};
