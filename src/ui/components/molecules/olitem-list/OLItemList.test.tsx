import { render } from '@testing/renderWithTheme';
import OLItemList from './OLItemList';

describe('OLItemList', () => {
  it('renders items with correct values', () => {
    const { getByText } = render(
      <OLItemList
        items={[
          { value: 'A', shape: 'circle', size: 'sm', active: true },
          { value: 'B', shape: 'rounded', size: 'md' },
        ]}
      />,
    );

    expect(getByText('A')).toBeInTheDocument();
    expect(getByText('B')).toBeInTheDocument();
  });

  it('applies active state from data', () => {
    const { getByText } = render(
      <OLItemList
        items={[
          { value: '1', active: true },
          { value: '2', active: false },
        ]}
      />,
    );

    expect(getByText('1')).toHaveAttribute('role', 'listitem');
  });
});
