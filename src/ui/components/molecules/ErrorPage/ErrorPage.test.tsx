import { render, screen } from '@testing-library/react';
import { ErrorPage } from './ErrorPage';
import '@testing-library/jest-dom';

describe('ErrorPage Component', () => {
  it('renders error code, title, and message', () => {
    render(<ErrorPage code={404} title="Page not found" message="This page does not exist." />);

    expect(screen.getByText('404')).toBeInTheDocument();
    expect(screen.getByText('Page not found')).toBeInTheDocument();
    expect(screen.getByText('This page does not exist.')).toBeInTheDocument();
  });

  it('renders without message', () => {
    render(<ErrorPage code={500} title="Internal Server Error" />);

    expect(screen.getByText('500')).toBeInTheDocument();
    expect(screen.getByText('Internal Server Error')).toBeInTheDocument();
    expect(screen.queryByText(/does not exist/i)).not.toBeInTheDocument();
  });

  it('applies correct styles for code', () => {
    render(<ErrorPage code={403} title="Forbidden" message="You don't have access." />);
    const codeElement = screen.getByText('403');

    expect(codeElement).toHaveStyle('color: #0095cc');
    expect(codeElement).toHaveStyle('font-weight: 700');
  });

  it('matches snapshot', () => {
    const { container } = render(
      <ErrorPage code={401} title="Unauthorized" message="Login required." />,
    );
    expect(container).toMatchSnapshot();
  });
});
