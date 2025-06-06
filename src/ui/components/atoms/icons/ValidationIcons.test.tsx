import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { ValidationIcons } from './ValidationIcons';

describe('ValidationIcons Component', () => {
  it('matches snapshot for success state', () => {
    const { asFragment } = render(<ValidationIcons status="success" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('matches snapshot for error state', () => {
    const { asFragment } = render(<ValidationIcons status="error" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
