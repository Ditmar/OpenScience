import { renderWithTheme, screen } from '@testing/renderWithTheme';
import AddIcon from '@mui/icons-material/Add';
import Pill from './pills';
import type { IProps } from './types/IProps';

describe('Pill Component', () => {
  const setup = (props?: Partial<IProps>) =>
    renderWithTheme(
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
      />,
    );

  it('should render text correctly', () => {
    setup();
    expect(screen.getByText(/Test text/i)).toBeInTheDocument();
  });

  it('should apply variants and colors without errors', () => {
    setup({
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
    setup({ text: 'Text', icon, iconPosition: 'left' });
    expect(screen.getByTestId('icon')).toBeInTheDocument();
    const pillContainer = screen.getByTestId('icon').parentElement;
    expect(pillContainer?.firstChild).toBe(screen.getByTestId('icon'));
  });

  it('should display icon on the right', () => {
    const icon = <AddIcon data-testid="icon" />;
    setup({ text: 'Text', icon, iconPosition: 'right' });
    expect(screen.getByTestId('icon')).toBeInTheDocument();
    const pillContainer = screen.getByTestId('icon').parentElement;
    expect(pillContainer?.lastChild).toBe(screen.getByTestId('icon'));
  });

  it('should use ariaLabel if explicitly provided', () => {
    setup({ text: 'Text', ariaLabel: 'Custom label' });
    const pill = screen.getByRole('status');
    expect(pill).toHaveAttribute('aria-label', 'Custom label');
  });

  it('should fallback to text as aria-label if not provided', () => {
    setup({ text: 'Accessible text' });
    const pill = screen.getByRole('status');
    expect(pill).toHaveAttribute('aria-label', 'Accessible text');
  });

  it('should not render icon if not provided', () => {
    setup({ text: 'Text' });
    expect(screen.queryByTestId('icon')).not.toBeInTheDocument();
  });
});
