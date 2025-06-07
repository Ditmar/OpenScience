import { render, screen } from '@testing-library/react';
import DisplayAndSubtitle from './DisplayAndSubTitle';

describe('DisplayAndSubtitle Component', () => {
  it('renders title and subtitle', () => {
    render(<DisplayAndSubtitle title="Title" subtitle="Subtitle" />);
    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('Subtitle')).toBeInTheDocument();
  });

  it('renders only title if subtitle not provided', () => {
    render(<DisplayAndSubtitle title="Only Title" />);
    expect(screen.getByText('Only Title')).toBeInTheDocument();
    expect(screen.queryByText('Subtitle')).not.toBeInTheDocument();
  });

  it('applies alignment class to container', () => {
    render(<DisplayAndSubtitle title="Aligned" alignment="center" />);
    const container = screen.getByText('Aligned').parentElement;
    expect(container?.className).toMatch(/center/);
  });

  it('passes props to Title and SubTitle', () => {
    render(
      <DisplayAndSubtitle
        title="Styled Title"
        subtitle="Styled Subtitle"
        size="sm"
        weight="regular"
        spacing="default"
      />,
    );
    const title = screen.getByText('Styled Title');
    const subtitle = screen.getByText('Styled Subtitle');

    expect(title.className).toMatch(/sm/);
    expect(title.className).toMatch(/regular/);
    expect(title.className).toMatch(/default/);
    expect(subtitle.className).toMatch(/sm/);
  });
});
