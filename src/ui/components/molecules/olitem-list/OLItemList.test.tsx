import { render } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import { lightTheme } from '../../../../style-library/themes/default';
import OLItemList from './OLItemList';

const wrap = (ui: React.ReactElement) => <ThemeProvider theme={lightTheme}>{ui}</ThemeProvider>;

describe('OLItemList', () => {
  it('renders items with correct values', () => {
    const { getByText } = render(
      wrap(
        <OLItemList
          items={[
            { value: 'A', shape: 'circle', size: 'sm', active: true },
            { value: 'B', shape: 'rounded', size: 'md' },
          ]}
        />,
      ),
    );

    expect(getByText('A')).toBeInTheDocument();
    expect(getByText('B')).toBeInTheDocument();
  });

  it('applies active state from data', () => {
    const { getByText } = render(
      wrap(
        <OLItemList
          items={[
            { value: '1', active: true },
            { value: '2', active: false },
          ]}
        />,
      ),
    );

    expect(getByText('1')).toHaveAttribute('role', 'listitem');
  });
});
