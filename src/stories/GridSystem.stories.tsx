import React from 'react';
import '../layouts/gridly/gridzone.scss';

export default {
  title: 'Layout/GridSystem',
};

export const GrillaModelOne = () => (
  <div className="container">
    <div className="auto-grid">
      <div className="col-6 grid-item" style={{ background: 'rgb(174, 224, 201)' }}>
        6 columnas
      </div>
      <div className="col-6 grid-item" style={{ background: 'rgb(174, 224, 201)' }}>
        6 columnas
      </div>
      <div className="col-12 grid-item" style={{ background: 'rgb(174, 224, 201)' }}>
        12 columnas
      </div>
    </div>
  </div>
);

export const GrilaModelTwo = () => (
  <div className="container">
    <div className="auto-grid">
      <div className="col-4 grid-item" style={{ background: 'rgb(174, 224, 201)' }}>
        4 columnas
      </div>
      <div className="col-4 grid-item" style={{ background: 'rgb(174, 224, 201)' }}>
        4 columnas
      </div>
      <div className="col-4 grid-item" style={{ background: 'rgb(174, 224, 201)' }}>
        4 columnas
      </div>
    </div>
  </div>
);

export const GrillaModelThree = () => (
  <div className="container">
    <div className="auto-grid">
      <div className="col-12 col-md-6 col-lg-4 grid-item" style={{ background: 'rgb(174, 224, 201)' }}>
        12 columnas
      </div>
      <div className="col-12 col-md-6 col-lg-4 grid-item" style={{ background: 'rgb(174, 224, 201)' }}>
        12 columnas
      </div>
      <div className="col-12 col-md-12 col-lg-4 grid-item" style={{ background: 'rgb(174, 224, 201)' }}>
        12 columnas
      </div>
    </div>
  </div>
);

export const GrillaModelFive = () => (
  <div className="container">
    <div className="auto-grid">
      <div className="col-8 grid-item" style={{ background: 'rgb(174, 224, 201)' }}>
        8 columnas
      </div>
      <div className="col-4 grid-item" style={{ background: 'rgb(174, 224, 201)' }}>
        4 columnas
      </div>
    </div>
  </div>
);

export const GrillaModelSix = () => (
  <div className="container">
    <div className="auto-grid" style={{ height: '200px', background: 'transparent' }}>
      <div className="col-4 grid-item align-self-start" style={{ background: 'rgb(174, 224, 201)' }}>
        Arriba
      </div>
      <div className="col-4 grid-item align-self-center" style={{ background: 'rgb(174, 224, 201)' }}>
        Centro
      </div>
      <div className="col-4 grid-item align-self-end" style={{ background: 'rgb(174, 224, 201)' }}>
        Abajo
      </div>
    </div>
  </div>
);
