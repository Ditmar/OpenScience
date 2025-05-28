import { render, screen } from '@testing-library/react';
import TitleSubtitle from './TitleSubtitle';
import styles from './TitleSubtitle.module.scss';

describe('TitleSubtitle Component', () => {
  test('renders title correctly', () => {
    render(<TitleSubtitle title="Test Title" />);
    const title = screen.getByRole('heading', { level: 2 });
    expect(title.textContent).toBe('Test Title');
  });

  test('renders title and subtitle correctly', () => {
    render(<TitleSubtitle title="Test Title" subtitle="Test Subtitle" />);
    const title = screen.getByRole('heading', { level: 2 });
    const subtitle = screen.getByText('Test Subtitle');

    expect(title.textContent).toBe('Test Title');
    expect(subtitle.textContent).toBe('Test Subtitle');
  });

  test('renders without subtitle when not provided', () => {
    render(<TitleSubtitle title="Only Title" />);
    const title = screen.getByRole('heading', { level: 2 });
    const subtitle = screen.queryByText(/subtitle/i);

    expect(title.textContent).toBe('Only Title');
    expect(subtitle).not.toBeInTheDocument();
  });

  test('renders correct heading level for title', () => {
    render(<TitleSubtitle title="H1 Title" titleTag="h1" />);
    const title = screen.getByRole('heading', { level: 1 });
    expect(title.textContent).toBe('H1 Title');
  });

  test('renders h3 title correctly', () => {
    render(<TitleSubtitle title="H3 Title" titleTag="h3" />);
    const title = screen.getByRole('heading', { level: 3 });
    expect(title.textContent).toBe('H3 Title');
  });

  test('renders h4 title correctly', () => {
    render(<TitleSubtitle title="H4 Title" titleTag="h4" />);
    const title = screen.getByRole('heading', { level: 4 });
    expect(title.textContent).toBe('H4 Title');
  });

  test('renders h5 title correctly', () => {
    render(<TitleSubtitle title="H5 Title" titleTag="h5" />);
    const title = screen.getByRole('heading', { level: 5 });
    expect(title.textContent).toBe('H5 Title');
  });

  test('renders subtitle as paragraph by default', () => {
    render(<TitleSubtitle title="Title" subtitle="Subtitle text" />);
    const subtitle = screen.getByText('Subtitle text');
    expect(subtitle.tagName).toBe('P');
  });

  test('renders subtitle as h3 when specified', () => {
    render(<TitleSubtitle title="Title" subtitle="Subtitle heading" subtitleTag="h3" />);
    const subtitle = screen.getByRole('heading', { level: 3 });
    expect(subtitle.textContent).toBe('Subtitle heading');
  });

  test('renders subtitle as h4 when specified', () => {
    render(<TitleSubtitle title="Title" subtitle="H4 Subtitle" titleTag="h2" subtitleTag="h4" />);
    const subtitle = screen.getByRole('heading', { level: 4 });
    expect(subtitle.textContent).toBe('H4 Subtitle');
  });

  test('renders subtitle as h5 when specified', () => {
    render(<TitleSubtitle title="Title" subtitle="H5 Subtitle" subtitleTag="h5" />);
    const subtitle = screen.getByRole('heading', { level: 5 });
    expect(subtitle.textContent).toBe('H5 Subtitle');
  });

  test('renders subtitle as h6 when specified', () => {
    render(<TitleSubtitle title="Title" subtitle="H6 Subtitle" subtitleTag="h6" />);
    const subtitle = screen.getByRole('heading', { level: 6 });
    expect(subtitle.textContent).toBe('H6 Subtitle');
  });

  test('applies default CSS classes', () => {
    const { container } = render(<TitleSubtitle title="Test" />);
    const component = container.firstChild as HTMLElement;
    expect(component.className).toEqual(expect.stringContaining('title-subtitle'));
    expect(component.className).toEqual(expect.stringContaining('title-subtitle--size-md'));
    expect(component.className).toEqual(expect.stringContaining('title-subtitle--alignment-left'));
    expect(component.className).toEqual(expect.stringContaining('title-subtitle--variant-default'));
  });

  test('applies size classes correctly', () => {
    const { container: smallContainer } = render(<TitleSubtitle title="Small" size="sm" />);
    const { container: largeContainer } = render(<TitleSubtitle title="Large" size="lg" />);
    expect((smallContainer.firstChild as HTMLElement).className).toEqual(
      expect.stringContaining('title-subtitle--size-sm'),
    );
    expect((largeContainer.firstChild as HTMLElement).className).toEqual(
      expect.stringContaining('title-subtitle--size-lg'),
    );
  });

  test('applies alignment classes correctly', () => {
    const { container: centerContainer } = render(
      <TitleSubtitle title="Center" alignment="center" />,
    );
    const { container: rightContainer } = render(<TitleSubtitle title="Right" alignment="right" />);

    expect((centerContainer.firstChild as HTMLElement).className).toEqual(
      expect.stringContaining('title-subtitle--alignment-center'),
    );
    expect((rightContainer.firstChild as HTMLElement).className).toEqual(
      expect.stringContaining('title-subtitle--alignment-right'),
    );
  });

  test('applies variant classes correctly', () => {
    const { container: emphasizedContainer } = render(
      <TitleSubtitle title="Emphasized" variant="emphasized" />,
    );
    const { container: minimalContainer } = render(
      <TitleSubtitle title="Minimal" variant="minimal" />,
    );

    expect((emphasizedContainer.firstChild as HTMLElement).className).toEqual(
      expect.stringContaining('title-subtitle--variant-emphasized'),
    );
    expect((minimalContainer.firstChild as HTMLElement).className).toEqual(
      expect.stringContaining('title-subtitle--variant-minimal'),
    );
  });

  test('applies custom className', () => {
    const { container } = render(<TitleSubtitle title="Custom" className="custom-class" />);
    expect((container.firstChild as HTMLElement).className).toEqual(
      expect.stringContaining('custom-class'),
    );
  });

  test('maintains proper heading hierarchy', () => {
    render(
      <div>
        <TitleSubtitle title="Main Title" subtitle="Main Subtitle" titleTag="h1" subtitleTag="h3" />
        <TitleSubtitle
          title="Section Title"
          subtitle="Section Subtitle"
          titleTag="h2"
          subtitleTag="h3"
        />
      </div>,
    );

    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
    const h3Headings = screen.getAllByRole('heading', { level: 3 });
    expect(h3Headings).toHaveLength(2);
    expect(h3Headings[0]).toHaveTextContent('Main Subtitle');
    expect(h3Headings[1]).toHaveTextContent('Section Subtitle');
  });

  test('has proper semantic structure', () => {
    const { container } = render(
      <TitleSubtitle
        title="Semantic Title"
        subtitle="Semantic Subtitle"
        titleTag="h1"
        subtitleTag="p"
      />,
    );

    const component = container.firstChild as HTMLElement;
    const title = component.querySelector('h1');
    const subtitle = component.querySelector('p');

    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
    expect(title?.textContent).toBe('Semantic Title');
    expect(subtitle?.textContent).toBe('Semantic Subtitle');
  });

  test('renders ReactNode as title', () => {
    const titleNode = <span data-testid="custom-title">Custom Title Node</span>;
    render(<TitleSubtitle title={titleNode} />);

    expect(screen.getByTestId('custom-title')).toBeInTheDocument();
    expect(screen.getByText('Custom Title Node')).toBeInTheDocument();
  });

  test('renders ReactNode as subtitle', () => {
    const subtitleNode = <span data-testid="custom-subtitle">Custom Subtitle Node</span>;
    render(<TitleSubtitle title="Title" subtitle={subtitleNode} />);

    expect(screen.getByTestId('custom-subtitle')).toBeInTheDocument();
    expect(screen.getByText('Custom Subtitle Node')).toBeInTheDocument();
  });

  test('handles empty string title', () => {
    render(<TitleSubtitle title="" />);
    const title = screen.getByRole('heading', { level: 2 });
    expect(title.textContent).toBe('');
  });

  test('handles empty string subtitle', () => {
    const { container } = render(<TitleSubtitle title="Title" subtitle="" />);
    const subtitleElement = container.querySelector(`.${styles['title-subtitle__subtitle']}`);
    expect(subtitleElement).not.toBeInTheDocument();
  });

  test('applies multiple props correctly', () => {
    const { container } = render(
      <TitleSubtitle
        title="Complex Example"
        subtitle="With all props"
        size="lg"
        alignment="center"
        variant="emphasized"
        titleTag="h1"
        subtitleTag="h3"
        className="custom-class"
      />,
    );

    const component = container.firstChild as HTMLElement;
    const title = screen.getByRole('heading', { level: 1 });
    const subtitle = screen.getByRole('heading', { level: 3 });

    expect(component.className).toEqual(expect.stringContaining('title-subtitle--size-lg'));
    expect(component.className).toEqual(
      expect.stringContaining('title-subtitle--alignment-center'),
    );
    expect(component.className).toEqual(
      expect.stringContaining('title-subtitle--variant-emphasized'),
    );
    expect(component.className).toEqual(expect.stringContaining('custom-class'));
    expect(title.textContent).toBe('Complex Example');
    expect(subtitle.textContent).toBe('With all props');
  });
});
