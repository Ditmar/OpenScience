import type { StoryObj, Meta } from '@storybook/react';
import ErrorMessage from './ErrorMessage';

const meta = {
  titles: 'ui/components/atoms/error-message',
  component: ErrorMessage,
} as Meta<typeof ErrorMessage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const NotFound: Story = {
  args: {
    code: 404,
    title: 'Page not found',
    message: 'The page you are looking for doesn´t or an other error occurred.',
    redirectTo: '/',
    linkText: 'weebir.com',
    messageinit: 'Go back, or head over ',
    messagefinish: ' to choose a new direction ',
  },
};

export const ServerError: Story = {
  args: {
    code: 500,
    title: 'Internal Server Error',
    message: 'An internal server error has occurred.',
    redirectTo: '/',
  },
};
