import { render, screen } from '@testing-library/react';
import TextArrangement from './TextArrangement';
import styles from './TextArrangement.module.scss';

const baseProps = {
  content: {
    title: 'Título de prueba',
    text: 'Texto de prueba',
  },
};

describe('TextArrangement - layouts', () => {
  it('renders correctly in standard layout', () => {
    render(<TextArrangement content={baseProps.content} layout="standard" />);
    expect(screen.getByText('Título de prueba')).toBeInTheDocument();
    expect(screen.getByText('Texto de prueba')).toBeInTheDocument();
  });

  it('renders correctly in layout columns', () => {
    render(<TextArrangement content={baseProps.content} layout="columns" />);
    expect(screen.getByText('Título de prueba')).toBeInTheDocument();
  });

  it('renders correctly in layout featured', () => {
    render(<TextArrangement content={baseProps.content} layout="featured" />);
    expect(screen.getByText('Título de prueba')).toBeInTheDocument();
  });

  it('renders correctly in layout cards', () => {
    render(<TextArrangement content={baseProps.content} layout="cards" />);
    expect(screen.getByText('Título de prueba')).toBeInTheDocument();
  });
});

describe('TextArrangement - accesibilidad', () => {
  it('use semantic elements for the title and text', () => {
    render(<TextArrangement content={baseProps.content} layout="standard" />);
    const heading = screen.getByText('Título de prueba');
    expect(heading.tagName).toMatch(/^H[1-6]$/);
    const paragraph = screen.getByText('Texto de prueba');
    expect(['P', 'H2']).toContain(paragraph.tagName);
  });
});

describe('TextArrangement - responsivo', () => {
  it('apply the columns layout class', () => {
    const { container } = render(<TextArrangement content={baseProps.content} layout="columns" />);
    expect(container.firstChild).toHaveClass(styles.columns);
  });
});
