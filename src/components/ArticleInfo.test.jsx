import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ArticleInfo from './ArticleInfo';

describe('ArticleInfo Component', () => {
  it('displays the correct date and volume', () => {
    const date = '2024-06-13';
    const volume = '42';

    render(<ArticleInfo date={date} volume={volume} />);

    expect(screen.getByText(`Fecha:`)).toBeInTheDocument();
    expect(screen.getByText(date)).toBeInTheDocument();
    expect(screen.getByText(`Volumen:`)).toBeInTheDocument();
    expect(screen.getByText(volume)).toBeInTheDocument();
  });

  it('does not allow editing of date and volume', () => {
    const date = '2024-06-13';
    const volume = '42';

    render(<ArticleInfo date={date} volume={volume} />);

    const dateElement = screen.getByText(date);
    const volumeElement = screen.getByText(volume);

    expect(dateElement).not.toHaveAttribute('contenteditable');
    expect(volumeElement).not.toHaveAttribute('contenteditable');
  });
});
