import { render, screen } from '@testing-library/react';
import TextCardStat from './TextCardStat';

describe('TextCardStat Component', () => {
  test('render title', () => {
    render(
      <TextCardStat
        label="test label"
        description="Test Description"
        badgeText="Users"
        badgeColor="#1976d2"
        badgeNumber={42}
        badgeAvatarUrl="https://example.com/avatar.png"
        title="User Statistics"
        content="detailed user content"
      />,
    );
    const titleElement = screen.getByText(/User Statistics/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('render the content', () => {
    render(
      <TextCardStat
        label="test label"
        description="Test Description"
        badgeText="Users"
        badgeColor="#1976d2"
        badgeNumber={42}
        badgeAvatarUrl="https://example.com/avatar.png"
        title="Users Statistics"
        content="Detailed user content"
      />,
    );
    const contentElement = screen.getByText(/Detailed user content/i);
    expect(contentElement).toBeInTheDocument();
  });

  test('renders the badge number', () => {
    render(
      <TextCardStat
        label="test label"
        description="Test Description"
        badgeText="Users"
        badgeColor="#1976d2"
        badgeNumber={42}
        badgeAvatarUrl="https://example.com/avatar.png"
        title="User Statistics"
        content="Detailed user content"
      />,
    );
    const badgeNumberElement = screen.getByText('42');
    expect(badgeNumberElement).toBeInTheDocument();
  });

  test('renders the avatar if a URL is provided', () => {
    render(
      <TextCardStat
        label="test label"
        description="Test Description"
        badgeText="Users"
        badgeColor="#1976d2"
        badgeNumber={42}
        badgeAvatarUrl="https://example.com/avatar.png"
        title="User Statistics"
        content="Detailed user content"
      />,
    );
    const avatarElement = screen.getByRole('img', { name: /Avatar/i });
    expect(avatarElement).toBeInTheDocument();
    expect(avatarElement).toHaveAttribute('src', 'https://example.com/avatar.png');
  });

  test('renderiza el checkbox', () => {
    render(
      <TextCardStat
        label="test label"
        description="Test Description"
        badgeText="Users"
        badgeColor="#1976d2"
        badgeNumber={42}
        badgeAvatarUrl="https://example.com/avatar.png"
        title="User Statistics"
        content="Detailed user content"
      />,
    );
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
  });

  test('does not render the avatar if a URL is not provided', () => {
    render(
      <TextCardStat
        label="Tag without avatar"
        description="Description without avatar"
        badgeText="Users"
        badgeColor="#1976d2"
        badgeNumber={42}
        title="Title without avatar"
        content="Content without avatar"
      />,
    );
    const avatarElement = screen.queryByRole('img', { name: /Avatar/i });
    expect(avatarElement).not.toBeInTheDocument();
  });
});
