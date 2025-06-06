import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { HintText } from './HintText';

describe('HintText Component', () => {
  it('includes the provided id attribute', () => {
    render(<HintText text="Test hint" id="custom-id" />);
    expect(screen.getByText('Test hint')).toHaveAttribute('id', 'custom-id');
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<HintText text="Snapshot test" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
