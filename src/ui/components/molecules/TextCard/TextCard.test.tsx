import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme as theme } from '../../../../style-library/themes/default';

import TextCard from './TextCard';

interface MockCheckProps {
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  variant?: string;
  rounded?: boolean;
}

interface MockAvatarBadgeItemProps {
  text: string;
  avatarSrc?: string;
  onClick?: (event: React.MouseEvent) => void;
  size?: string;
  variant?: string;
  color?: string;
  shape?: string;
}

interface MockSubTitleAndParagraphProps {
  title?: string;
  subtitle?: string;
  size?: string;
  alignment?: string;
  variant?: string;
  titleTag?: keyof HTMLElementTagNameMap;
  subtitleTag?: keyof HTMLElementTagNameMap;
}

vi.mock('../../../../library/component/atoms/Check/Check', () => ({
  Check: vi.fn(({ checked, onChange, disabled, variant, rounded }: MockCheckProps) => (
    <input
      type="checkbox"
      data-testid="mock-check"
      checked={checked}
      onChange={onChange}
      disabled={disabled}
      data-variant={variant}
      data-rounded={rounded}
    />
  )),
}));

vi.mock('../badges/badges', () => ({
  AvatarBadgeItem: vi.fn(
    ({ text, avatarSrc, onClick, size, variant, color, shape }: MockAvatarBadgeItemProps) => (
      <button
        data-testid="mock-avatar-badge-item"
        onClick={onClick}
        data-text={text}
        data-avatar-src={avatarSrc}
        data-size={size}
        data-variant={variant}
        data-color={color}
        data-shape={shape}
      >
        {text}
      </button>
    ),
  ),
}));

vi.mock('../../atoms/SubTitleAndParagraph/SubTitleAndParagraph', () => ({
  __esModule: true,
  default: vi.fn(
    ({
      title,
      subtitle,
      size,
      alignment,
      variant,
      titleTag,
      subtitleTag,
    }: MockSubTitleAndParagraphProps) => (
      <div data-testid="mock-subtitle-paragraph">
        <div
          data-title-tag={titleTag}
          data-size={size}
          data-alignment={alignment}
          data-variant={variant}
        >
          {title}
        </div>
        <div data-subtitle-tag={subtitleTag}>{subtitle}</div>
      </div>
    ),
  ),
}));

const renderWithThemeProvider = (ui: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
};

describe('TextCard', () => {
  it('renders TextCard with basic props', () => {
    renderWithThemeProvider(
      <TextCard
        isChecked={false}
        onCheckChange={() => {}}
        cardSubtitle="Test Subtitle"
        cardParagraph="Test Paragraph"
        badgeText="Test Badge"
        badgeAvatarSrc="https://placehold.co/24x24"
      />,
    );

    expect(screen.getByTestId('mock-check')).toBeInTheDocument();
    expect(screen.getByTestId('mock-avatar-badge-item')).toHaveTextContent('Test Badge');
    expect(screen.getByTestId('mock-subtitle-paragraph')).toBeInTheDocument();
    expect(screen.getByText('Test Subtitle')).toBeInTheDocument();
    expect(screen.getByText('Test Paragraph')).toBeInTheDocument();
  });

  it('calls onCheckChange when checkbox is clicked', () => {
    const handleChange = vi.fn();
    renderWithThemeProvider(
      <TextCard
        isChecked={false}
        onCheckChange={handleChange}
        cardSubtitle="Subtitle"
        cardParagraph="Paragraph"
        badgeText="Badge"
      />,
    );

    const checkbox = screen.getByTestId('mock-check');
    fireEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('renders correct badge text', () => {
    const testBadgeText = 'Custom Badge Text';
    renderWithThemeProvider(
      <TextCard
        isChecked={false}
        onCheckChange={() => {}}
        cardSubtitle="Subtitle"
        cardParagraph="Paragraph"
        badgeText={testBadgeText}
      />,
    );
    expect(screen.getByTestId('mock-avatar-badge-item')).toHaveTextContent(testBadgeText);
  });

  it('applies isSelected class when isSelected is true', () => {
    const { container } = renderWithThemeProvider(
      <TextCard
        isChecked={false}
        onCheckChange={() => {}}
        cardSubtitle="Subtitle"
        cardParagraph="Paragraph"
        badgeText="Badge"
        isSelected
      />,
    );
    expect(container.querySelector('.MuiPaper-root')).toBeInTheDocument();
  });
});
