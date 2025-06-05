import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { AvatarItem } from './AvatarBagde.tsx';

describe('AvatarItem Component', () => {
  it('does not render when hidden is true', () => {
    const { container } = render(
      <AvatarItem src="https://i.pravatar.cc/150?img=1" alt="Hidden Avatar" hidden />,
    );

    expect(container.firstChild).toBeNull();
  });
});
