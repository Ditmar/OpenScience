import React, { useState } from 'react';
import type { Meta } from '@storybook/react';
import type { CheckProps } from './Check';
import { Check } from './Check';

const meta: Meta<typeof Check> = {
  title: 'Components/Check',
  component: Check,
};

export default meta;

function Template({ checked: initialChecked, variant, disabled }: CheckProps): JSX.Element {
  const [checked, setChecked] = useState(initialChecked);
  return <Check checked={checked} onChange={setChecked} variant={variant} disabled={disabled} />;
}

export function Variants(): JSX.Element {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      {(['default', 'success', 'info', 'warning', 'danger'] as CheckProps['variant'][]).map(
        (variant) => (
          <Template key={variant} checked={false} variant={variant} onChange={() => {}} />
        ),
      )}
    </div>
  );
}

export function Disabled(): JSX.Element {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      {(['default', 'success', 'info', 'warning', 'danger'] as CheckProps['variant'][]).map(
        (variant) => (
          <Check key={variant} checked disabled variant={variant} onChange={() => {}} />
        ),
      )}
    </div>
  );
}
