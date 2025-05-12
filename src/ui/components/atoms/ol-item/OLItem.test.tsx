import { render } from '@testing-library/react';
import OLItem from './OLItem';
import styles from './OLItem.module.scss';
import type { OLItemProps } from './types/IProps';

const setup = (props?: Partial<OLItemProps>) =>
  render(
    <OLItem
      value={props?.value ?? '1'}
      shape={props?.shape ?? 'square'}
      size={props?.size ?? 'md'}
      active={props?.active ?? false}
    />,
  );

describe('OLItem', () => {
  describe('Rendering basic', () => {
    it('must apply the base classes', () => {
      const { container } = setup();
      const item = container.firstChild;

      expect(item).toHaveClass(styles['ol-item']);
      expect(item).toHaveClass(styles['ol-item--square']);
      expect(item).toHaveClass(styles['ol-item--md']);
      expect(item).toHaveTextContent('1');
    });

    it('must display dynamic value', () => {
      const { getByText } = setup({ value: '3' });
      expect(getByText('3')).toBeInTheDocument();
    });
  });

  describe('Shapes', () => {
    it('applies the class "ol-item--rounded"', () => {
      const { container } = setup({ shape: 'rounded' });
      expect(container.firstChild).toHaveClass(styles['ol-item--rounded']);
    });

    it('applies the class "ol-item--circle"', () => {
      const { container } = setup({ shape: 'circle' });
      expect(container.firstChild).toHaveClass(styles['ol-item--circle']);
    });
  });

  describe('Sizes', () => {
    it('apply the size "--sm"', () => {
      const { container } = setup({ size: 'sm' });
      expect(container.firstChild).toHaveClass(styles['ol-item--sm']);
    });

    it('apply the size "--lg"', () => {
      const { container } = setup({ size: 'lg' });
      expect(container.firstChild).toHaveClass(styles['ol-item--lg']);
    });
  });

  describe('Active states', () => {
    it('you must apply the "ol-item-active" class when active={true}', () => {
      const { container } = setup({ active: true });
      expect(container.firstChild).toHaveClass(styles['ol-item--active']);
    });

    it('you should not apply the "ol-item-active" class when active={false}', () => {
      const { container } = setup({ active: false });
      expect(container.firstChild).not.toHaveClass(styles['ol-item--active']);
    });
  });

  describe('Accessibility', () => {
    it('must have the role="listitem"', () => {
      const { container } = setup({});
      expect(container.firstChild).toHaveAttribute('role', 'listitem');
    });
  });
});
