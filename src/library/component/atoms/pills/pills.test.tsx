import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Pill from './pills';

function hasClassContaining(element: HTMLElement, fragment: string): boolean {
  return element.className.split(' ').some((cls) => cls.includes(fragment));
}

describe('Testing Pill React Component', () => {
  test('should render the text "Etiqueta"', () => {
    render(<Pill text="Etiqueta" color="neutral-dark" variant="filled" size="md" />);
    const pillElement = screen.getByText(/Etiqueta/i);
    expect(pillElement).toBeInTheDocument();
  });

  test('should apply correct styles for size, color, variant and rounded', () => {
    render(
      <Pill
        text="Cantidad"
        color="read-only-disabled"
        variant="filled"
        size="md"
        rounded="r_none"
      />,
    );
    const pillElement = screen.getByText(/Cantidad/i);

    expect(hasClassContaining(pillElement, 'pill')).toBe(true);
    expect(hasClassContaining(pillElement, 'pill--md')).toBe(true);
    expect(hasClassContaining(pillElement, 'pill--filled-read-only-disabled')).toBe(true);

    const hasRoundedClass = hasClassContaining(pillElement, 'pill--r_none');

    expect(hasRoundedClass).toBe(false);
  });

  test('should render with no rounded class when rounded is "r_none"', () => {
    render(
      <Pill text="No rounded" rounded="r_none" color="neutral-dark" variant="filled" size="md" />,
    );
    const pillElement = screen.getByText(/No rounded/i);
    expect(pillElement.className).not.toMatch(/pill--r_md/);
    expect(pillElement.className).not.toMatch(/pill--r_full/);
  });

  // TODO: Replace the `icon` text prop with an SVG component using `useDynamic` and `Icon.tsx`.
  /* 
        const svgPath = 'Icon';
        render(
          <Pill
          text="Etiqueta"
          color="neutral-dark"
          variant="filled"
          size="md"
          icon={svgPath} 
          />); */
  test('should include icon element when provided', () => {
    const mockIcon = <svg data-testid="custom-icon" />;
    render(
      <Pill text="Etiqueta" color="neutral-dark" variant="filled" size="md" icon={mockIcon} />,
    );

    const iconElements = screen.getAllByTestId('custom-icon');
    expect(iconElements.length).toBeGreaterThan(0);
  });

  test('should have role and aria-label when provided', () => {
    render(
      <Pill
        text="Accesible"
        ariaLabel="Etiqueta accesible"
        color="neutral-dark"
        variant="filled"
        size="md"
      />,
    );
    const pillElement = screen.getByRole('status');
    expect(pillElement).toHaveAttribute('aria-label', 'Etiqueta accesible');
  });
});
