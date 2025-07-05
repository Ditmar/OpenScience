import type { Meta, StoryObj } from '@storybook/react';
import { ErrorPage } from './ErrorPage';

const meta: Meta<typeof ErrorPage> = {
  title: 'ui/components/molecules/ErrorPage',
  component: ErrorPage,
};

export default meta;
type Story = StoryObj<typeof ErrorPage>;

export const Default: Story = {
  args: {
    code: 404,
    title: 'Page Not Found',
    message: 'The page you are looking for might have been removed or is temporarily unavailable',
  },
};

export const ServerError: Story = {
  args: {
    code: 500,
    title: 'Server Error',
    message: 'Something went wrong on our end. Please try again later.',
  },
};

export const NoMessage: Story = {
  args: {
    code: 403,
    title: 'Forbidden',
    message:
      "You don't have the necessary permissions to view this page. Please contact the administrator if you believe this is an error.",
  },
};

export const BadRequest: Story = {
  args: {
    code: 400,
    title: 'Bad Request',
    message:
      'The server cannot process your request due to invalid syntax. Please check your input and try again.',
  },
};

export const Unauthorized: Story = {
  args: {
    code: 401,
    title: 'Unauthorized',
    message:
      'Authentication is required to access this resource. Please log in with valid credentials or contact support if you believe this is an error.',
  },
};
