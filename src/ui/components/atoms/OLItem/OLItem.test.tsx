import { render } from '@testing-library/react';
import OLItem from './OLItem';
import type { OLItemProps } from './types/IProps';
import styles from './OLItem.module.scss';

describe('OLItem', () => {
  const defaultProps: OLItemProps = {
    value: 1,
    shape: 'square',
    size: 'sm',
    styleType: 'default',
    active: false,
  };

  it('renders correctly with default props', () => {
    const { getByText } = render(
      <OLItem
        value={defaultProps.value}
        shape={defaultProps.shape}
        size={defaultProps.size}
        styleType={defaultProps.styleType}
        active={defaultProps.active}
      />,
    );
    expect(getByText(String(defaultProps.value))).toBeInTheDocument();
  });

  it('applies active class when active is true', () => {
    const { container } = render(
      <OLItem
        value={defaultProps.value}
        shape={defaultProps.shape}
        size={defaultProps.size}
        styleType={defaultProps.styleType}
        active
      />,
    );
    expect(container.firstChild).toHaveClass(styles['ol-item--active']);
  });

  it('supports different shapes (rounded)', () => {
    const { container } = render(
      <OLItem
        value={defaultProps.value}
        shape="rounded"
        size={defaultProps.size}
        styleType={defaultProps.styleType}
        active={defaultProps.active}
      />,
    );
    expect(container.firstChild).toHaveClass(styles['ol-item--rounded']);
  });

  it('supports different shapes (circle)', () => {
    const { container } = render(
      <OLItem
        value={defaultProps.value}
        shape="circle"
        size={defaultProps.size}
        styleType={defaultProps.styleType}
        active={defaultProps.active}
      />,
    );
    expect(container.firstChild).toHaveClass(styles['ol-item--circle']);
  });

  it('supports different sizes (md)', () => {
    const { container } = render(
      <OLItem
        value={defaultProps.value}
        shape={defaultProps.shape}
        size="md"
        styleType={defaultProps.styleType}
        active={defaultProps.active}
      />,
    );
    expect(container.firstChild).toHaveClass(styles['ol-item--md']);
  });

  it('supports different sizes (lg)', () => {
    const { container } = render(
      <OLItem
        value={defaultProps.value}
        shape={defaultProps.shape}
        size="lg"
        styleType={defaultProps.styleType}
        active={defaultProps.active}
      />,
    );
    expect(container.firstChild).toHaveClass(styles['ol-item--lg']);
  });

  it('supports stroked style', () => {
    const { container } = render(
      <OLItem
        value={defaultProps.value}
        shape={defaultProps.shape}
        size={defaultProps.size}
        styleType="stroked"
        active={defaultProps.active}
      />,
    );
    expect(container.firstChild).toHaveClass(styles['ol-item--stroked']);
  });

  it('has role listitem for accessibility', () => {
    const { container } = render(
      <OLItem
        value={defaultProps.value}
        shape={defaultProps.shape}
        size={defaultProps.size}
        styleType={defaultProps.styleType}
        active={defaultProps.active}
      />,
    );
    expect(container.firstChild).toHaveAttribute('role', 'listitem');
  });
});
