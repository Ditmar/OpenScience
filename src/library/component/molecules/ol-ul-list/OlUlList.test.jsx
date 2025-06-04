import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { vi } from 'vitest';

import OlUlList from './OlUlList.tsx';

vi.mock('../../../../ui/components/atoms/ol-item/OLItem', () => ({
  default: ({ value, ...otherProps }) => (
    <div data-testid="ol-item" data-value={value} data-props={JSON.stringify(otherProps)}>
      OLItem {value}
    </div>
  ),
}));

vi.mock('../../../../ui/components/atoms/ol-bullet/OLBullet', () => ({
  default: (props) => (
    <div data-testid="ol-bullet" data-props={JSON.stringify(props)}>
      OLBullet
    </div>
  ),
}));

describe('OlUlList', () => {
  it('renders the correct number of items when count is used and items is empty', () => {
    render(<OlUlList type="unordered" count={3} />);
    const items = screen.getAllByText(/Este es el párrafo del elemento/i);
    expect(items).toHaveLength(3);
  });

  it('renders custom items when items are provided', () => {
    const items = [
      { subtitle: 'Título 1', paragraph: 'Texto 1' },
      { subtitle: 'Título 2', paragraph: 'Texto 2' },
    ];
    render(<OlUlList type="unordered" items={items} />);
    expect(screen.getByText('Título 1')).toBeInTheDocument();
    expect(screen.getByText('Texto 2')).toBeInTheDocument();
  });

  it('renders OLItem for ordered lists', () => {
    render(<OlUlList type="ordered" count={2} />);
    expect(screen.getAllByTestId('ol-item')).toHaveLength(2);
  });

  it('renders OLBullet for unordered lists', () => {
    render(<OlUlList type="unordered" count={2} />);
    expect(screen.getAllByTestId('ol-bullet')).toHaveLength(2);
  });

  it('applies the correct size class based on props', () => {
    const { container } = render(<OlUlList type="unordered" size="large" count={1} />);
    expect(container.firstChild?.className).toMatch(/large/);
  });

  it('falls back to medium size if unknown size is provided', () => {
    const { container } = render(<OlUlList type="unordered" size="invalid" count={1} />);

    const element = container.firstChild;
    const classNames = element?.className || '';
    expect(classNames).toMatch(/medium/);
    expect(classNames).not.toMatch(/invalid/);
    expect(classNames).toMatch(/ol-ul-list/);
    expect(classNames).toMatch(/unordered/);
  });

  it('applies the correct classes for type and style', () => {
    const { container } = render(<OlUlList type="ordered" count={1} />);
    expect(container.firstChild?.className).toMatch(/ordered/);
  });

  it('renders default content if subtitle or paragraph is missing', () => {
    const items = [{ subtitle: undefined, paragraph: undefined }];
    render(<OlUlList type="unordered" items={items} />);
    expect(screen.queryByRole('heading')).not.toBeInTheDocument();
    expect(screen.queryByText(/Este es el párrafo/i)).not.toBeInTheDocument();
  });
});
