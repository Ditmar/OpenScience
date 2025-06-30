import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import ActionMenu from './ActionMenu';

describe('ActionMenu Component', () => {
  it('renders without crashing', () => {
    render(<ActionMenu />);
    expect(screen.getByRole('button', { name: /pdf/i })).toBeInTheDocument();
  });

  it('displays three main buttons', () => {
    render(<ActionMenu />);
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(3);
    expect(screen.getByLabelText(/pdf/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/link/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/image/i)).toBeInTheDocument();
  });

  it('shows PDF options when PDF button is clicked', async () => {
    render(<ActionMenu />);
    const pdfButton = screen.getByLabelText(/pdf/i);
    fireEvent.click(pdfButton);

    expect(await screen.findByText('DESCARGAR')).toBeInTheDocument();
    expect(screen.getByLabelText(/pdf option/i)).toBeInTheDocument();
  });

  it('shows Link options when Link button is clicked', async () => {
    render(<ActionMenu />);
    const linkButton = screen.getByLabelText(/link/i);
    fireEvent.click(linkButton);

    expect(await screen.findByLabelText(/whatsapp/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/telegram/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/facebook/i)).toBeInTheDocument();
  });

  it('shows Image options when Image button is clicked', async () => {
    render(<ActionMenu />);
    const imageButton = screen.getByLabelText(/image/i);
    fireEvent.click(imageButton);

    expect(await screen.findByText('MEDIA')).toBeInTheDocument();
    expect(screen.getByLabelText(/image option/i)).toBeInTheDocument();
  });

  it('closes options when clicking the same button twice', async () => {
    render(<ActionMenu />);
    const pdfButton = screen.getByLabelText(/pdf/i);

    fireEvent.click(pdfButton);
    expect(await screen.findByText('DESCARGAR')).toBeInTheDocument();

    fireEvent.click(pdfButton);
    expect(screen.queryByText('DESCARGAR')).not.toBeInTheDocument();
  });
});
