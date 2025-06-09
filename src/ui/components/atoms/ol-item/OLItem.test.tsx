import { render } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme } from '../../../../style-library/themes/default';
import OLItem from './OLItem';
import type { OLItemProps } from './types/IProps';

const setup = (props?: Partial<OLItemProps>) =>
  render(
    <ThemeProvider theme={lightTheme}>
      <OLItem
        value={props?.value ?? '1'}
        shape={props?.shape ?? 'square'}
        size={props?.size ?? 'md'}
        active={props?.active ?? false}
      />
    </ThemeProvider>,
  );

describe('OLItem', () => {
  describe('Rendering with different values', () => {
    it('renders with string value', () => {
      const { getByText } = setup({ value: 'A' });
      expect(getByText('A')).toBeInTheDocument();
    });

    it('renders with number value', () => {
      const { getByText } = setup({ value: 42 });
      expect(getByText('42')).toBeInTheDocument();
    });
  });

  describe('Shape variants', () => {
    it('renders with square shape', () => {
      const { getByRole } = setup({ shape: 'square' });
      const item = getByRole('listitem');
      expect(item).toBeInTheDocument();
      expect(item).toHaveTextContent('1');
    });

    it('renders with rounded shape', () => {
      const { getByRole } = setup({ shape: 'rounded' });
      const item = getByRole('listitem');
      expect(item).toBeInTheDocument();
      expect(item).toHaveTextContent('1');
    });

    it('renders with circle shape', () => {
      const { getByRole } = setup({ shape: 'circle' });
      const item = getByRole('listitem');
      expect(item).toBeInTheDocument();
      expect(item).toHaveTextContent('1');
    });
  });

  describe('Size variants', () => {
    it('renders with small size', () => {
      const { getByRole } = setup({ size: 'sm' });
      const item = getByRole('listitem');
      expect(item).toBeInTheDocument();
      expect(item).toHaveTextContent('1');
    });

    it('renders with medium size (default)', () => {
      const { getByRole } = setup({ size: 'md' });
      const item = getByRole('listitem');
      expect(item).toBeInTheDocument();
      expect(item).toHaveTextContent('1');
    });

    it('renders with large size', () => {
      const { getByRole } = setup({ size: 'lg' });
      const item = getByRole('listitem');
      expect(item).toBeInTheDocument();
      expect(item).toHaveTextContent('1');
    });
  });

  describe('Active state', () => {
    it('renders correctly when active is false', () => {
      const { getByRole } = setup({ active: false });
      const item = getByRole('listitem');
      expect(item).toBeInTheDocument();
      expect(item).toHaveTextContent('1');
    });

    it('renders correctly when active is true', () => {
      const { getByRole } = setup({ active: true });
      const item = getByRole('listitem');
      expect(item).toBeInTheDocument();
      expect(item).toHaveTextContent('1');
    });
  });

  describe('Props combinations', () => {
    it('renders with square shape and small size', () => {
      const { getByRole } = setup({ shape: 'square', size: 'sm' });
      const item = getByRole('listitem');
      expect(item).toBeInTheDocument();
      expect(item).toHaveTextContent('1');
    });

    it('renders with circle shape and large size', () => {
      const { getByRole } = setup({ shape: 'circle', size: 'lg' });
      const item = getByRole('listitem');
      expect(item).toBeInTheDocument();
      expect(item).toHaveTextContent('1');
    });

    it('renders with rounded shape, medium size and active state', () => {
      const { getByRole } = setup({
        shape: 'rounded',
        size: 'md',
        active: true,
      });
      const item = getByRole('listitem');
      expect(item).toBeInTheDocument();
      expect(item).toHaveTextContent('1');
    });

    it('renders with all props combined', () => {
      const { getByRole } = setup({
        value: 'X',
        shape: 'circle',
        size: 'lg',
        active: true,
      });
      const item = getByRole('listitem');
      expect(item).toBeInTheDocument();
      expect(item).toHaveTextContent('X');
    });
  });

  describe('Default props', () => {
    it('uses default values when props are not provided', () => {
      const { getByRole } = setup();
      const item = getByRole('listitem');
      expect(item).toBeInTheDocument();
      expect(item).toHaveTextContent('1');
    });
  });

  describe('Accessibility', () => {
    it('has correct role attribute for list item', () => {
      const { getByRole } = setup();
      expect(getByRole('listitem')).toBeInTheDocument();
    });

    it('maintains accessibility with all prop combinations', () => {
      const { getByRole } = setup({
        value: 'A',
        shape: 'rounded',
        size: 'lg',
        active: true,
      });
      expect(getByRole('listitem')).toBeInTheDocument();
    });
  });
});
