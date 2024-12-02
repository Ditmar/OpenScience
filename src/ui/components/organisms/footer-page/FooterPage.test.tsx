import React from 'react';
import { render, screen } from '@testing-library/react';
import FooterPage from './FooterPage';

describe('FooterPage Component', () => {
  const props = {
    variant: 'solid',
    children: 'Location Text',
    children1: 'Another Location Text',
  };

  it('renders all sections correctly', () => {
    render(
      <FooterPage variant="solid" children1={props.children1}>
        {props.children}
      </FooterPage>,
    );

    expect(screen.getByText('RECURSOS')).toBeInTheDocument();

    expect(screen.getByText('Location Text')).toBeInTheDocument();
    expect(screen.getByText('Another Location Text')).toBeInTheDocument();

    const buttons = screen.getAllByRole('button');
    buttons.forEach((button) => {
      expect(button).toHaveAttribute('aria-label', 'icon');
    });

    const hr = screen.getByRole('separator');
    expect(hr).toHaveClass('divider--solid');
  });
});
