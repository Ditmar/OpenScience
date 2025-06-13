import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { vi } from 'vitest';
import UserTextCard from './user-text-card';

const avatar = 'https://i.pravatar.cc/40?img=1';
const userName = 'Alice Johnson';
const userHandle = 'alicej';
const content = 'Testing user text card content';
const timestamp = 'Just now';
const isVerified = true;
const onClick = vi.fn();
const onCheckChange = vi.fn();
const isChecked = false;

describe('UserTextCard', () => {
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
        isChecked={isChecked}
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

  it('passes basic accessibility checks', () => {
    render(
      <UserTextCard
        avatar={avatar}
        userName={userName}
        userHandle={userHandle}
        content={content}
        timestamp={timestamp}
        isVerified={isVerified}
        onClick={onClick}
        isChecked={isChecked}
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
        isChecked={isChecked}
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
        isChecked={isChecked}
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
        isChecked={isChecked}
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
        isChecked={isChecked}
        onCheckChange={onCheckChange}
        variant="expanded"
      />,
    );

    expect(screen.getByTestId('user-card-expanded')).toBeInTheDocument();
  });

  it('renders content as ReactNode', () => {
    render(
      <UserTextCard
        avatar={avatar}
        userName={userName}
        userHandle={userHandle}
        content={<strong>Bold content</strong>}
        timestamp={timestamp}
        isVerified={isVerified}
        onClick={onClick}
        isChecked={isChecked}
        onCheckChange={onCheckChange}
      />,
    );

    expect(screen.getByText('Bold content')).toBeInTheDocument();
  });

  it('renders timestamp as Date object', () => {
    const date = new Date('2024-06-01T12:00:00');

    render(
      <UserTextCard
        avatar={avatar}
        userName={userName}
        userHandle={userHandle}
        content={content}
        timestamp={date}
        isVerified={isVerified}
        onClick={onClick}
        isChecked={isChecked}
        onCheckChange={onCheckChange}
      />,
    );

    expect(screen.getByText(date.toLocaleString())).toBeInTheDocument();
  });

  it('applies correct colorVariant class', () => {
    render(
      <UserTextCard
        avatar={avatar}
        userName={userName}
        userHandle={userHandle}
        content={content}
        timestamp={timestamp}
        isVerified={isVerified}
        onClick={onClick}
        isChecked={isChecked}
        onCheckChange={onCheckChange}
        variant="default"
        colorVariant="warning"
      />,
    );

    expect(screen.getByTestId('user-card-default').className).toContain('warning');
  });

  it('renders avatar as ReactNode', () => {
    render(
      <UserTextCard
        avatar={<div data-testid="custom-avatar">👤</div>}
        userName={userName}
        userHandle={userHandle}
        content={content}
        timestamp={timestamp}
        isVerified={isVerified}
        onClick={onClick}
        isChecked={isChecked}
        onCheckChange={onCheckChange}
      />,
    );

    expect(screen.getByTestId('custom-avatar')).toBeInTheDocument();
  });
});
