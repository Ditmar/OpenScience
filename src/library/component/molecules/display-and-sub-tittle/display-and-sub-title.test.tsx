import { render, screen } from '@testing-library/react';
import DisplayAndSubtitle from './display-and-sub-title';

describe('DisplayAndSubtitle', () => {
  it('renders displayText with default tags', () => {
    render(<DisplayAndSubtitle displayText="Título Principal" subtitle="Subtítulo" />);

    const heading = screen.getByText('Título Principal');
    const subtitle = screen.getByText('Subtítulo');

    expect(heading.tagName).toBe('H1');
    expect(subtitle.tagName).toBe('H2');
  });

  it('renders custom tags', () => {
    render(
      <DisplayAndSubtitle
        displayText="Custom Tag"
        subtitle="Custom Subtitle"
        displayTag="h2"
        subtitleTag="p"
      />,
    );

    const heading = screen.getByText('Custom Tag');
    const subtitle = screen.getByText('Custom Subtitle');

    expect(heading.tagName).toBe('H2');
    expect(subtitle.tagName).toBe('P');
  });

  it('does not render subtitle if not provided', () => {
    render(<DisplayAndSubtitle displayText="Only Title" />);

    const heading = screen.getByText('Only Title');
    expect(heading).toBeInTheDocument();

    const subtitle = screen.queryByText('Subtítulo');
    expect(subtitle).not.toBeInTheDocument();
  });

  it('applies alignment and style classes', () => {
    render(
      <DisplayAndSubtitle
        displayText="Styled Text"
        subtitle="Styled Subtitle"
        alignment="center"
        size="lg"
        weight="regular"
        spacing="default"
      />,
    );

    const heading = screen.getByText('Styled Text');
    const subtitle = screen.getByText('Styled Subtitle');

    expect(heading.className).toContain('lg');
    expect(heading.className).toContain('regular');
    expect(heading.className).toContain('default');
    expect(subtitle.className).toContain('lg');
  });
});
