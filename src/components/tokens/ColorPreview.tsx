import React from 'react';
import { theme } from '../../globals/theme';

type FlatColorTokens = Record<string, string>;

function flattenTokens(obj: Record<string, unknown>, prefix = ''): FlatColorTokens {
  return Object.entries(obj).reduce<FlatColorTokens>((acc, [key, value]) => {
    const newKey = prefix ? `${prefix}.${key}` : key;

    if (typeof value === 'string') {
      acc[newKey] = value;
    } else if (typeof value === 'object' && value !== null) {
      Object.assign(acc, flattenTokens(value as Record<string, unknown>, newKey));
    }

    return acc;
  }, {});
}

export function ColorPreview() {
  const flatColors = flattenTokens(theme.colors);

  return (
    <div
      data-testid="color-preview-container"
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1rem',
      }}
    >
      {Object.entries(flatColors).map(([label, color]) => (
        <div
          key={label}
          style={{
            background: color,
            width: '100px',
            height: '100px',
            color: '#000',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid #ccc',
            fontSize: '10px',
            textAlign: 'center',
          }}
          title={color}
        >
          <span style={{ padding: '4px' }}>{label}</span>
        </div>
      ))}
    </div>
  );
}
