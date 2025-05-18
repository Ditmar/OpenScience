import React from 'react';
import '../styles/grid.scss';

export default {
  title: 'Layout/Grid CSS Test',
};

export const GrillaBasica = () => (
  <div className="container">
    <div className="grid">
      <div className="col-6" style={{ background: '#DDEEFF', padding: '16px' }}>
        Mitad
      </div>
      <div className="col-6" style={{ background: '#FFDDEE', padding: '16px' }}>
        Mitad
      </div>
    </div>
  </div>
);

export const TresColumnas = () => (
  <div className="container">
    <div className="grid">
      <div className="col-4" style={{ background: '#E0F7FA', padding: '16px' }}>
        1/3
      </div>
      <div className="col-4" style={{ background: '#E1BEE7', padding: '16px' }}>
        1/3
      </div>
      <div className="col-4" style={{ background: '#FFECB3', padding: '16px' }}>
        1/3
      </div>
    </div>
  </div>
);
