export interface DropdownStatsOption {
  label: string;
  value: string;
  code: string;
  stat: number;
}

export interface DropdownStatsProps {
  options: DropdownStatsOption[];
  selectedValue?: string;
  onChange: (value: string) => void;
  maxValue?: number;
  barColor?: string;
  showPercentage?: boolean;
  className?: string;
  disabled?: boolean;
  isOpen: boolean;
  onToggle: () => void;
  displayFormat?: 'percentage' | 'value' | 'both';
}
