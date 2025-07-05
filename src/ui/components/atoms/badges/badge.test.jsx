// badge.test.tsx
import { renderWithTheme, screen } from '@testing/renderWithTheme';
import { describe, it, expect } from 'vitest';
import Badge from './badge.tsx';

describe('Badge Component', () => {
  it('renders with default props', () => {
    renderWithTheme(
      <Badge variant="filled" color="neutral" shape="default" size="md">
        Badge Text
      </Badge>,
    );
    expect(screen.getByText('Badge Text')).toBeInTheDocument();
  });

  it('renders with icon', () => {
    renderWithTheme(
      <Badge
        variant="filled"
        color="neutral"
        shape="default"
        size="md"
        icon={
          <svg
            data-testid="icon"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
          </svg>
        }
      >
        Badge Text
      </Badge>,
    );
    expect(screen.getByText('Badge Text')).toBeInTheDocument();
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('renders with image', () => {
    renderWithTheme(
      <Badge
        variant="filled"
        color="neutral"
        shape="default"
        size="md"
        image="https://via.placeholder.com/24"
      >
        Badge Text
      </Badge>,
    );
    expect(screen.getByAltText(/avatar/i)).toBeInTheDocument();
  });

  it('renders with rounded shape', () => {
    renderWithTheme(
      <Badge variant="filled" color="neutral" shape="rounded" size="md">
        Badge Text
      </Badge>,
    );
    const badge = screen.getByText('Badge Text').parentElement;
    expect(badge?.classList.contains('badge--rounded')).toBe(true);
  });

  it('renders with left and right counters', () => {
    renderWithTheme(
      <Badge
        variant="filled"
        color="neutral"
        shape="default"
        size="md"
        leftCount={7}
        rightCount={3}
      >
        Badge Text
      </Badge>,
    );
    expect(screen.getByText('7')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
  });
});
