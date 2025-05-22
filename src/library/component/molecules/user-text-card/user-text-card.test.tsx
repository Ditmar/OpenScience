import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { vi } from 'vitest';
import UserTextCard from './user-text-card';

describe('UserTextCard', () => {
  const avatar = 'https://i.pravatar.cc/40?img=1';
  const userName = 'Alice Johnson';
  const userHandle = 'alicej';
  const content = 'Testing user text card content';
  const timestamp = 'Just now';
  const isVerified = true;
  const onClick = vi.fn();
  const onCheckChange = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders all user info correctly', () => {
    render(
      <UserTextCard
        avatar={avatar}
        userName={userName}
        userHandle={userHandle}
        content={content}
        timestamp={timestamp}
        isVerified={isVerified}
        onClick={onClick}
        isChecked={false}
        onCheckChange={onCheckChange}
      />,
    );

    expect(screen.getByText('Alice Johnson')).toBeInTheDocument();
    expect(screen.getByText('@alicej')).toBeInTheDocument();
    expect(screen.getByText('Testing user text card content')).toBeInTheDocument();
    expect(screen.getByText('✔️')).toBeInTheDocument();
    expect(screen.getByText('Just now')).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).not.toBeChecked();
    expect(screen.getByAltText('avatar')).toBeInTheDocument();
  });

  it('passes basic accessibility: has name, handle, timestamp, and alt for avatar', () => {
    render(
      <UserTextCard
        avatar={avatar}
        userName={userName}
        userHandle={userHandle}
        content={content}
        timestamp={timestamp}
        isVerified={isVerified}
        onClick={onClick}
        isChecked={false}
        onCheckChange={onCheckChange}
      />,
    );

    expect(screen.getByText(userName)).toBeVisible();
    expect(screen.getByText(`@${userHandle}`)).toBeVisible();
    expect(screen.getByAltText('avatar')).toBeVisible();
    expect(screen.getByText(timestamp)).toBeVisible();
  });

  it('calls onCheckChange and onClick when checkbox is clicked', () => {
    render(
      <UserTextCard
        avatar={avatar}
        userName={userName}
        userHandle={userHandle}
        content={content}
        timestamp={timestamp}
        isVerified={isVerified}
        onClick={onClick}
        isChecked={false}
        onCheckChange={onCheckChange}
      />,
    );

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    expect(onCheckChange).toHaveBeenCalledWith(true);
    expect(onClick).toHaveBeenCalled();
  });

  it('applies correct styles for default variant', () => {
    render(
      <UserTextCard
        avatar={avatar}
        userName={userName}
        userHandle={userHandle}
        content={content}
        timestamp={timestamp}
        isVerified={isVerified}
        onClick={onClick}
        isChecked={false}
        onCheckChange={onCheckChange}
        variant="default"
      />,
    );

    expect(screen.getByTestId('user-card-default')).toBeInTheDocument();
  });

  it('applies correct styles for compact variant', () => {
    render(
      <UserTextCard
        avatar={avatar}
        userName={userName}
        userHandle={userHandle}
        content={content}
        timestamp={timestamp}
        isVerified={isVerified}
        onClick={onClick}
        isChecked={false}
        onCheckChange={onCheckChange}
        variant="compact"
      />,
    );

    expect(screen.getByTestId('user-card-compact')).toBeInTheDocument();
  });

  it('applies correct styles for expanded variant', () => {
    render(
      <UserTextCard
        avatar={avatar}
        userName={userName}
        userHandle={userHandle}
        content={content}
        timestamp={timestamp}
        isVerified={isVerified}
        onClick={onClick}
        isChecked={false}
        onCheckChange={onCheckChange}
        variant="expanded"
      />,
    );

    expect(screen.getByTestId('user-card-expanded')).toBeInTheDocument();
  });

  it('renders content as ReactNode', () => {
    const customContent = <strong>Bold content</strong>;

    render(
      <UserTextCard
        avatar={avatar}
        userName={userName}
        userHandle={userHandle}
        content={customContent}
        timestamp={timestamp}
        isVerified={isVerified}
        onClick={onClick}
        isChecked={false}
        onCheckChange={onCheckChange}
      />,
    );

    expect(screen.getByText('Bold content')).toBeInTheDocument();
  });
});
