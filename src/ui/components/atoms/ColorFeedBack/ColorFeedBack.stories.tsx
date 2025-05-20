import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const feedbackColorData = {
  positive: {
    '25': '#F4FCF7',
    '50': '#E9FAF0',
    '100': '#D3F4E0',
    '200': '#A7E9C1',
    '300': '#7BDFA3',
    '400': '#4FD484',
    '500': '#23C965',
    '600': '#08B94E',
    '700': '#02983E',
    '800': '#00732E',
    '900': '#00481D',
  },
  negative: {
    '25': '#FFF8F7',
    '50': '#FFF1F0',
    '100': '#FFE2E0',
    '200': '#FFC6C2',
    '300': '#FFA9A3',
    '400': '#FF8D85',
    '500': '#FF554A',
    '600': '#EA483D',
    '700': '#D7392E',
    '800': '#C8271C',
    '900': '#B71409',
  },
  warning: {
    '25': '#FFFCF6',
    '50': '#FFF9ED',
    '100': '#FFF3DB',
    '200': '#FFE6B7',
    '300': '#FFDA92',
    '400': '#FFCD6E',
    '500': '#FFC14A',
    '600': '#EBA622',
    '700': '#D18A02',
    '800': '#9F6800',
    '900': '#5A3B00',
  },
};

interface ColorSwatchProps {
  name: string;
  hex: string;
  scssVarName: string;
}

const ColorSwatch: React.FC<ColorSwatchProps> = ({ name, hex, scssVarName }) => (
  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px', fontFamily: 'sans-serif' }}>
    <div
      style={{
        width: '60px',
        height: '60px',
        backgroundColor: hex,
        border: '1px solid #E0E2E7',
        borderRadius: '4px',
        marginRight: '16px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      }}
    />
    <div>
      <div style={{ fontWeight: 'bold', fontSize: '1rem' }}>{name}</div>
      <div style={{ fontSize: '0.875rem', color: '#667085' }}>{hex.toUpperCase()}</div>
      <div style={{ fontSize: '0.75rem', color: '#858D9D', marginTop: '2px' }}>
        {scssVarName}
      </div>
    </div>
  </div>
);

interface ColorGroupProps {
  groupTitle: string;
  colors: Record<string, string>;
  scssVarPrefix: string;
  namePrefix: string;
}

const ColorGroupDisplay: React.FC<ColorGroupProps> = ({ groupTitle, colors, scssVarPrefix, namePrefix }) => (
  <div style={{ marginBottom: '40px' }}>
    <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', borderBottom: '1px solid #E0E2E7', paddingBottom: '10px' }}>
      {groupTitle}
    </h2>
    {Object.entries(colors).map(([shade, hexValue]) => (
      <ColorSwatch
        key={`${namePrefix}-${shade}`}
        name={`${namePrefix} ${shade}`}
        hex={hexValue}
        scssVarName={`${scssVarPrefix}${shade}`}
      />
    ))}
  </div>
);

const meta: Meta<typeof ColorGroupDisplay> = {
  title: 'Design System/Foundations/Feedback Colors',
  component: ColorGroupDisplay,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Positive: Story = {
  args: {
    groupTitle: 'Positive Feedback Colors',
    colors: feedbackColorData.positive,
    scssVarPrefix: '$ads-color-feedback-positive-',
    namePrefix: 'Positive',
  },
};

export const Negative: Story = {
  args: {
    groupTitle: 'Negative Feedback Colors',
    colors: feedbackColorData.negative,
    scssVarPrefix: '$ads-color-feedback-negative-',
    namePrefix: 'Negative',
  },
};

export const Warning: Story = {
  args: {
    groupTitle: 'Warning Feedback Colors',
    colors: feedbackColorData.warning,
    scssVarPrefix: '$ads-color-feedback-warning-',
    namePrefix: 'Warning',
  },
};

export const AllFeedback: Story = {
  name: 'All Feedback Colors (Overview)',
  render: () => (
    <div style={{ padding: '20px' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '30px' }}>Feedback Color Palette</h1>
      <ColorGroupDisplay
        groupTitle="Positive Feedback"
        colors={feedbackColorData.positive}
        scssVarPrefix="$ads-color-feedback-positive-"
        namePrefix="Positive"
      />
      <ColorGroupDisplay
        groupTitle="Negative Feedback"
        colors={feedbackColorData.negative}
        scssVarPrefix="$ads-color-feedback-negative-"
        namePrefix="Negative"
      />
      <ColorGroupDisplay
        groupTitle="Warning Feedback"
        colors={feedbackColorData.warning}
        scssVarPrefix="$ads-color-feedback-warning-"
        namePrefix="Warning"
      />
    </div>
  ),
};