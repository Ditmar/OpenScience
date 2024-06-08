import { render } from '@testing-library/react';
import Container from './ContainerContent.tsx';

test('renders container with initial state', async () => {
  const { container } = render(Container);
  expect(container).toMatchSnapshot();
});
