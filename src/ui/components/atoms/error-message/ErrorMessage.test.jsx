import { render, screen } from '@testing-library/react';
import ErrorMessage from './ErrorMessage.tsx';

describe('ErrorMessage Component', () => {
  test('renders with given props 404', () => {
    render(
      <ErrorMessage
        code={404}
        title="Page not found"
        message="The page you are looking for doesn´t exist or another error occurred."
        redirectTo="/"
        linkText="weebir.com"
        messageinit="Go back, or head over "
        messagefinish=" to choose a new direction"
      />,
    );
    expect(screen.getByText('404')).toBeInTheDocument();
    expect(screen.getByText('Page not found')).toBeInTheDocument();
    expect(
      screen.getByText('The page you are looking for doesn´t exist or another error occurred.'),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        (content, element) =>
          content.startsWith('Go back, or head over ') && element.tagName.toLowerCase() === 'p',
      ),
    ).toBeTruthy();
    expect(screen.getByRole('link', { name: 'weebir.com' })).toBeTruthy();
    expect(
      screen.getByText(
        (content, element) =>
          content.endsWith(' to choose a new direction') && element.tagName.toLowerCase() === 'p',
      ),
    ).toBeTruthy();
  });

  test('renders with given props 500', () => {
    render(
      <ErrorMessage
        code={500}
        title="Internal Server Error"
        message="An internal server error has occurred."
      />,
    );
    expect(screen.getByText('500')).toBeInTheDocument();
    expect(screen.getByText('Internal Server Error')).toBeInTheDocument();
    expect(screen.getByText('An internal server error has occurred.')).toBeInTheDocument();
  });
});
