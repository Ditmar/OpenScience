import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import DropdownStats from './dropdown-stats';
import type { DropdownStatsProps } from './types/IProps';

const meta: Meta<typeof DropdownStats> = {
  title: 'ui/components/molecules/DropdownStats',
  component: DropdownStats,
  argTypes: {
    barColor: { control: 'color' },
    displayFormat: {
      options: ['percentage', 'value', 'both'],
      control: { type: 'select' },
    },
  },
};

export default meta;

const Template: StoryObj<DropdownStatsProps> = {
  render: function DropdownStatsTemplate(args: DropdownStatsProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState<string>(args.options[0].value);

    const handleChange = (value: string) => {
      setSelectedValue(value);
      args.onChange(value);
    };

    const handleToggle = () => {
      setIsOpen(!isOpen);
      args.onToggle();
    };

    return (
      <DropdownStats
        options={args.options}
        selectedValue={selectedValue}
        onChange={handleChange}
        isOpen={isOpen}
        onToggle={handleToggle}
        disabled={args.disabled}
        barColor={args.barColor}
        showPercentage={args.showPercentage}
        displayFormat={args.displayFormat}
        maxValue={args.maxValue}
        className={args.className}
      />
    );
  },
};

const sampleOptions: DropdownStatsOption[] = [
  { label: 'Argentina', value: 'arg', code: '+54', stat: 45 },
  { label: 'Brazil', value: 'bra', code: '+55', stat: 78 },
  { label: 'Chile', value: 'chi', code: '+56', stat: 32 },
  { label: 'Colombia', value: 'col', code: '+57', stat: 65 },
  { label: 'Mexico', value: 'mex', code: '+52', stat: 89 },
];

export const Default: StoryObj<DropdownStatsProps> = {
  ...Template,
  args: {
    options: sampleOptions,
    showPercentage: true,
    onChange: () => {},
    onToggle: () => {},
    isOpen: false,
  },
};

export const WithCustomColor: StoryObj<DropdownStatsProps> = {
  ...Template,
  args: {
    options: sampleOptions.slice(0, 3),
    barColor: '#ff5733',
    onChange: () => {},
    onToggle: () => {},
    isOpen: false,
  },
};

export const PercentageOnly: StoryObj<DropdownStatsProps> = {
  ...Template,
  args: {
    options: sampleOptions.slice(0, 3),
    displayFormat: 'percentage',
    onChange: () => {},
    onToggle: () => {},
    isOpen: false,
  },
};

export const ValueOnly: StoryObj<DropdownStatsProps> = {
  ...Template,
  args: {
    options: sampleOptions.slice(0, 3),
    displayFormat: 'value',
    onChange: () => {},
    onToggle: () => {},
    isOpen: false,
  },
};

export const Disabled: StoryObj<DropdownStatsProps> = {
  ...Template,
  args: {
    options: sampleOptions.slice(0, 2),
    disabled: true,
    onChange: () => {},
    onToggle: () => {},
    isOpen: false,
  },
};
