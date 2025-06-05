import React from 'react';
interface ColorBoxProps {
  name: string;
  color: string;
}

const ColorBox: React.FC<ColorBoxProps> = ({ name, color }) => {
  const boxStyle = {
    backgroundColor: color,
    width: '100px',
    height: '100px',
    borderRadius: '8px',
    marginBottom: '8px',
    border: '1px solid #ccc',
  };
  
  const textStyle: React.CSSProperties = {
  fontSize: '14px',
  color: '#333',
  wordBreak: 'break-word',
};

let cleanName = name.startsWith('ads-') ? name.substring(4) : name;
  cleanName = cleanName.replace('color-', '');

  return (
    <div style={{ margin: '10px', textAlign: 'center' }}>
      <div style={boxStyle} />
      <div style={textStyle}>{cleanName}</div>
    </div>
  );
};

const colors: Record<string, string> = {
  "ads-primary-main": "#7a44ff",
  "ads-secondary-main": "#9a4aff",
  "ads-tertiary-main": "#3994ff",
  "ads-success-main": "#23c965",
  "ads-danger-main": "#ff7066",
  "ads-warning-main": "#ffc14a",
  "ads-primary-twenty-five": "#f8f5ff",
  "ads-secondary-twenty-five": "#f5f5ff",
  "ads-tertiary-twenty-five": "#f5f9ff",
  "ads-success-twenty-five": "#f4fcf7",
  "ads-danger-twenty-five": "#fff8f7",
  "ads-warning-twenty-five": "#fffcf6",
  "ads-icontextstat-color-title": "#0e1223",
  "ads-icontextstat-color-text": "#667085",
  "ads-default-icon-dark": "#151a2d",
  "ads-text-main": "#02322c",
  "ads-text-secondary": "#6c757d",
  "ads-text-main-hover": "#000",
  "ads-background-main": "#f5f5f5",
  "ads-fill-primary": "#7a44ff",
  "ads-primary-soft": "#e4daff",
  "ads-color-main": "#fff",
  "ads-color-black-900": "#000",
  "ads-color-black-800": "#1a1a1a",
  "ads-color-black-700": "#333",
  "ads-color-black-600": "#4d4d4d",
  "ads-color-black-500": "#666",
  "ads-color-black-400": "#808080",
  "ads-color-black-300": "#999",
  "ads-color-black-200": "#b3b3b3",
  "ads-color-black-100": "#ccc",
  "ads-color-black-50": "#e6e6e6",
  "ads-color-black-25": "#f2f2f2",
  "ads-color-gray-strong-25": "#bcc3e3",
  "ads-color-gray-strong-50": "#9da6cb",
  "ads-color-gray-strong-100": "#8791b7",
  "ads-color-gray-strong-200": "#6a749c",
  "ads-color-gray-strong-300": "#475175",
  "ads-color-gray-strong-400": "#384162",
  "ads-color-gray-strong-500": "#2f3757",
  "ads-color-gray-strong-600": "#242a46",
  "ads-color-gray-strong-700": "#1b2037",
  "ads-color-gray-strong-800": "#151a2d",
  "ads-color-gray-strong-900": "#0e1223",
  "ads-color-gray-soft-25": "#fafafa",
  "ads-color-gray-soft-50": "#f0f1f3",
  "ads-color-gray-soft-100": "#e0e2e7",
  "ads-color-gray-soft-200": "#c2c6ce",
  "ads-color-gray-soft-300": "#a3a9b6",
  "ads-color-gray-soft-400": "#858d9d",
  "ads-color-gray-soft-500": "#667085",
  "ads-color-gray-soft-600": "#59647a",
  "ads-color-gray-soft-700": "#525d73",
  "ads-color-gray-soft-800": "#4a556c",
  "ads-color-gray-soft-900": "#404a60",
  "ads-color-brand-primary-25": "#f8f5ff",
  "ads-color-brand-primary-50": "#f2edff",
  "ads-color-brand-primary-100": "#e4daff",
  "ads-color-brand-primary-200": "#cab4ff",
  "ads-color-brand-primary-300": "#af8fff",
  "ads-color-brand-primary-400": "#9569ff",
  "ads-color-brand-primary-500": "#7a44ff",
  "ads-color-brand-primary-600": "#6236cc",
  "ads-color-brand-primary-700": "#492999",
  "ads-color-brand-primary-800": "#301c66",
  "ads-color-brand-primary-900": "#180e33",
  "ads-color-brand-secondary-25": "#f8f5ff",
  "ads-color-brand-secondary-50": "#f2edff",
  "ads-color-brand-secondary-100": "#e4daff",
  "ads-color-brand-secondary-200": "#cab4ff",
  "ads-color-brand-secondary-300": "#af8fff",
  "ads-color-brand-secondary-400": "#9569ff",
  "ads-color-brand-secondary-500": "#7a44ff",
  "ads-color-brand-secondary-600": "#6236cc",
  "ads-color-brand-secondary-700": "#492999",
  "ads-color-brand-secondary-800": "#301c66",
  "ads-color-brand-secondary-900": "#180e33",
  "ads-color-brand-tertiary-25": "#f5f9ff",
  "ads-color-brand-tertiary-50": "#ecf5ff",
  "ads-color-brand-tertiary-100": "#d7eaff",
  "ads-color-brand-tertiary-200": "#b0d4ff",
  "ads-color-brand-tertiary-300": "#88bfff",
  "ads-color-brand-tertiary-400": "#61aaff",
  "ads-color-brand-tertiary-500": "#3994ff",
  "ads-color-brand-tertiary-600": "#1873de",
  "ads-color-brand-tertiary-700": "#0053b5",
  "ads-color-brand-tertiary-800": "#00418e",
  "ads-color-brand-tertiary-900": "#002a5c",
  "ads-color-feedback-positive-25": "#f4fcf7",
  "ads-color-feedback-positive-50": "#e9faf0",
  "ads-color-feedback-positive-100": "#d3f4e0",
  "ads-color-feedback-positive-200": "#a7e9c1",
  "ads-color-feedback-positive-300": "#7bdfa3",
  "ads-color-feedback-positive-400": "#4fd484",
  "ads-color-feedback-positive-500": "#23c965",
  "ads-color-feedback-positive-600": "#08b94e",
  "ads-color-feedback-positive-700": "#02983e",
  "ads-color-feedback-positive-800": "#00732e",
  "ads-color-feedback-positive-900": "#00481d",
  "ads-color-feedback-negative-25": "#fff8f7",
  "ads-color-feedback-negative-50": "#fff1f0",
  "ads-color-feedback-negative-100": "#ffe2e0",
  "ads-color-feedback-negative-200": "#ffc6c2",
  "ads-color-feedback-negative-300": "#ffa9a3",
  "ads-color-feedback-negative-400": "#ff8d85",
  "ads-color-feedback-negative-500": "#ff554a",
  "ads-color-feedback-negative-600": "#ea483d",
  "ads-color-feedback-negative-700": "#d7392e",
  "ads-color-feedback-negative-800": "#c8271c",
  "ads-color-feedback-negative-900": "#b71409",
  "ads-color-feedback-warning-25": "#fffcf6",
  "ads-color-feedback-warning-50": "#fff9ed",
  "ads-color-feedback-warning-100": "#fff3db",
  "ads-color-feedback-warning-200": "#ffe6b7",
  "ads-color-feedback-warning-300": "#ffda92",
  "ads-color-feedback-warning-400": "#ffcd6e",
  "ads-color-feedback-warning-500": "#ffc14a",
  "ads-color-feedback-warning-600": "#eba622",
  "ads-color-feedback-warning-700": "#d18a02",
  "ads-color-feedback-warning-800": "#9f6800",
  "ads-color-feedback-warning-900": "#5a3b00",
  "ads-background-color-black-900": "#000",
  "ads-color-dark": "#151a2d",
  "ads-color-dark-soft": "#f0f1f3",
  "ads-color-disabled": "#bcc3e3",
  "ads-color-light": "#fff",
  "ads-color-negative": "#ff554a",
  "ads-color-negative-soft": "#fff8f7",
  "ads-color-positive": "#23c965",
  "ads-color-positive-soft": "#f4fcf7",
  "ads-color-primary": "#7a44ff",
  "ads-color-primary-soft": "#f8f5ff",
  "ads-color-secondary": "#9a4aff",
  "ads-color-secondary-soft": "#faf6ff",
  "ads-color-tertiary": "#3994ff",
  "ads-color-tertiary-soft": "#f5f9ff",
  "ads-color-warning": "#ffc14a",
  "ads-color-warning-soft": "#fffcf6",

};

const ColorsGrid: React.FC = () => (
  <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill,minmax(120px,1fr))',
    gap: '16px',
    padding: '20px',
    fontFamily: 'sans-serif',
  }}>
    {Object.entries(colors).map(([name, color]) => (
      <ColorBox key={name} name={name} color={color} />
    ))}
  </div>
);

export default {
  title: 'Design System/Colors',
  component: ColorsGrid,
};

export const AllColors = () => <ColorsGrid />;
