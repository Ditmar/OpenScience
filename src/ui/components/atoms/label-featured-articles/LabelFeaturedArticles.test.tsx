import { render, screen } from '@testing-library/react';
import LabelFeaturedArticles from './LabelFeaturedArticles';

describe('LabelFeaturedArticles component', () => {
  it('Should be rendered with the default text', () => {
    render(<LabelFeaturedArticles />);
    expect(screen.getByText('artículos destacados')).toBeInTheDocument();
  });

  it('Should render with custom text.', () => {
    render(<LabelFeaturedArticles text="Custom text Referencias" />);
    expect(screen.getByText('Custom text Referencias')).toBeInTheDocument();
  });

  it('Should adjust text size responsively.', () => {
    render(<LabelFeaturedArticles />);
    const LabelElement = screen.getByText('artículos destacados');
    const InitialFontSize = window.getComputedStyle(LabelElement).getPropertyValue('font-size');
    LabelElement.style.fontSize = '20px';
    const UpdatedFontSize = window.getComputedStyle(LabelElement).getPropertyValue('font-size');
    expect(UpdatedFontSize).not.toEqual(InitialFontSize);
  });
});
