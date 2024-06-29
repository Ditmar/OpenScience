import React from 'react';
import { render } from '@testing-library/react';
import SPanel from './SPanel';

describe('SPanel Component', () => {
  it('should render SPanel component', () => {
    const { getByTestId } = render(<SPanel />);
    const panelElement = getByTestId('s-panel');
    expect(panelElement).toBeInTheDocument();
  });
});
