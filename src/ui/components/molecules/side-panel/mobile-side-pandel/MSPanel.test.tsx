import React from 'react';
import { render } from '@testing-library/react';
import MSPanel from './MSPanel';

describe('MSPanel Component', () => {
  it('should render SPanel component', () => {
    const { getByTestId } = render(<MSPanel />);
    const panelElement = getByTestId('ms-panel');
    expect(panelElement).toBeInTheDocument();
  });
});
