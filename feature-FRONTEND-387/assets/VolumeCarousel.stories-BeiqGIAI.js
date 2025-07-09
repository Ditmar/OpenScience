import{j as e}from"./jsx-runtime-BlDnFLNC.js";import{L as i}from"./LabelDate-BkOOFA1a.js";import{V as m}from"./LabelVol-CGTb_Sts.js";import{T as c}from"./Thumbnail-Bw3AETKB.js";import{V as d,s as a}from"./VolumeCarousel-B4npKm2J.js";import{R as u,a as g,b as p}from"./Rectangle30-DbsUxWac.js";import{R as v}from"./Rectangle29-qq2plPfP.js";import{R as h,L as R}from"./right-arrow-Dz05hw07.js";import"./index-Cu9bd8lq.js";import"./icons-Dqqr9IZ9.js";import"./index-gagdKHFB.js";const S={title:"ui/components/molecules/volume-carousel",component:d},t={args:{leftIcon:R,children:e.jsx("div",{className:a.carousel__list,children:[u,g,v,p].map((o,s)=>e.jsxs("div",{className:a.carousel__item,children:[e.jsx("div",{className:a.thumbnail,children:e.jsx(c,{pathImage:String(o),alt:`Rectangle${String(27+s)}`})}),e.jsx("div",{className:a.labeldate,children:e.jsx(i,{date:new Date(2023,3+s,15+s)})}),e.jsx("div",{className:a.volume,children:e.jsx(m,{volumen:"Vol. ",id:1+s})})]}))}),rightIcon:h}};var l,r,n;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(n=(r=t.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const A=["Carousel"];export{t as Carousel,A as __namedExportsOrder,S as default};
