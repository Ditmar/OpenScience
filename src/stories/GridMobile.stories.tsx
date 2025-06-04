import React from 'react';
import '../layouts/GridMobile/GridMobile.scss'; 

export default {
  title: 'Layout/GridMobile',
};

export const GridMobileExample = () => (
  <div className="container-mobile">
    <div className="grid-mobile">
      <div className="grid-item-mobile col-mb-2" style={{ background: 'rgb(174, 224, 201)' }}>
        Item 1
      </div>
      <div className="grid-item-mobile col-mb-2" style={{ background: 'rgb(174, 224, 201)' }}>
        Item 2
      </div>
      <div className="grid-item-mobile col-mb-4" style={{ background: 'rgb(174, 224, 201)' }}>
        Item 3
      </div>
    </div>
  </div>
);
