import { ThemeProvider } from '@mui/material/styles';
import { render, screen } from '@testing-library/react';
import AddIcon from '@mui/icons-material/Add';
import { lightTheme } from '../../../../style-library/themes/default';
import Pill from './pills';
import type { IProps } from './types/IProps';

describe('Pill Component', () => {
  const renderWithTheme = (props?: Partial<IProps>) =>
    render(
      <ThemeProvider theme={lightTheme}>
        <Pill
          text={props?.text ?? 'Test text'}
          color={props?.color ?? 'neutral-light'}
          variant={props?.variant ?? 'filled'}
          size={props?.size ?? 'md'}
          rounded={props?.rounded ?? 'r_md'}
          shadow={props?.shadow}
          stroke={props?.stroke}
          icon={props?.icon}
          iconPosition={props?.iconPosition}
          ariaLabel={props?.ariaLabel}
        />
      </ThemeProvider>,
    );

  it('should render text correctly', () => {
    renderWithTheme();
    expect(screen.getByText(/Test text/i)).toBeInTheDocument();
  });

  it('should apply variants and colors without errors', () => {
    renderWithTheme({
      text: 'Text',
      color: 'brand-primary',
      variant: 'soft',
      size: 'lg',
      shadow: true,
      stroke: 'border-strong',
    });
    expect(screen.getByText(/Text/i)).toBeInTheDocument();
  });

  it('should display icon on the left', () => {
    const icon = <AddIcon data-testid="icon" />;
    renderWithTheme({ text: 'Text', icon, iconPosition: 'left' });
    expect(screen.getByTestId('icon')).toBeInTheDocument();
    const pillContainer = screen.getByTestId('icon').parentElement;
    expect(pillContainer?.firstChild).toBe(screen.getByTestId('icon'));
  });

  it('should display icon on the right', () => {
    const icon = <AddIcon data-testid="icon" />;
    renderWithTheme({ text: 'Text', icon, iconPosition: 'right' });
    expect(screen.getByTestId('icon')).toBeInTheDocument();
    const pillContainer = screen.getByTestId('icon').parentElement;
    expect(pillContainer?.lastChild).toBe(screen.getByTestId('icon'));
  });

  it('should use ariaLabel if explicitly provided', () => {
    renderWithTheme({ text: 'Text', ariaLabel: 'Custom label' });
    const pill = screen.getByRole('status');
    expect(pill).toHaveAttribute('aria-label', 'Custom label');
  });

  it('should fallback to text as aria-label if not provided', () => {
    renderWithTheme({ text: 'Accessible text' });
    const pill = screen.getByRole('status');
    expect(pill).toHaveAttribute('aria-label', 'Accessible text');
  });

  it('should not render icon if not provided', () => {
    renderWithTheme({ text: 'Text' });
    expect(screen.queryByTestId('icon')).not.toBeInTheDocument();
  });
});
