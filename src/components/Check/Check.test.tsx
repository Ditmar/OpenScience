import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Check } from './Check';

describe('Check component', () => {
  it('calls onChange with true when clicked', () => {
    const onChange = jest.fn();
    const { getByRole } = render(<Check checked={false} onChange={onChange} />);
    const checkbox = getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(onChange).toHaveBeenCalledWith(true);
  });

  it('does not call onChange when disabled', () => {
    const onChange = jest.fn();
    const { getByRole } = render(<Check checked={false} disabled onChange={onChange} />);
    const checkbox = getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(onChange).not.toHaveBeenCalled();
  });

  it('handles keyboard Enter key', () => {
    const onChange = jest.fn();
    const { getByRole } = render(<Check checked={false} onChange={onChange} />);
    const checkbox = getByRole('checkbox');
    fireEvent.keyDown(checkbox, { key: 'Enter' });
    expect(onChange).toHaveBeenCalledWith(true);
  });

  it('handles keyboard Space key', () => {
    const onChange = jest.fn();
    const { getByRole } = render(<Check checked={false} onChange={onChange} />);
    const checkbox = getByRole('checkbox');
    fireEvent.keyDown(checkbox, { key: ' ' });
    expect(onChange).toHaveBeenCalledWith(true);
  });
});
