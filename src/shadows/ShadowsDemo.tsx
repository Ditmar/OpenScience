// scripts/src/shadows/ShadowsDemo.tsx
import * as React from 'react';
import './Shadows.scss';

const shadowLevels = ['xs', 'sm', 'md', 'lg', 'xl', '3xl'];

function ShadowsDemo() {
  return (
    <div style={{
      padding: '2rem',
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '1.5rem'
    }}>
      {shadowLevels.map((level) => (
        <div
          key={level}
          className={`shadow-demo shadow-${level}`}
        >
          <p style={{ margin: 0, fontSize: '1rem' }}>
            Sombra {level.toUpperCase()}
          </p>
        </div>
      ))}
    </div>
  );
}

export default ShadowsDemo;
