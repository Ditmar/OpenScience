import React from 'react';
import { render, screen } from '@testing-library/react';
import IconButton from './IconButtons';

test('renders IconButton with correct aria-label'), () => {
  render(<IconButton icon="icon1.svg" ariaLabel="Test button" />)};
  const button = screen.getByLabelText
