import { render, screen } from '@testing-library/react';
import ButtonNumber from './ButtonNumber.tsx';

describe('Testing ButtonNumber React Component', () => {
  test('should render correctly', () => {
    render(<ButtonNumber variant="primary">1</ButtonNumber>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('should include an icon when selected', () => {
    render(
      <ButtonNumber variant="primary" selected>
        1
      </ButtonNumber>,
    );
    expect(screen.getByRole('button').querySelector('svg')).toBeInTheDocument();
  });

  test('should not be able to click when inactive', () => {
    render(
      <ButtonNumber variant="primary" inactive>
        1
      </ButtonNumber>,
    );
    expect(screen.getByRole('button')).toBeDisabled();
  });
});
