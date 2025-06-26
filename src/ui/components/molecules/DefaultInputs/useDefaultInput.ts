import { useEffect, useState } from 'react';
import type { ChangeEvent } from 'react';

export function useDefaultInput(
  value: string,
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void,
  onClear?: () => void,
) {
  const [internalValue, setInternalValue] = useState(value);

  useEffect(() => {
    setInternalValue(value);
  }, [value]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInternalValue(e.target.value);
    onChange?.(e);
  };

  const handleClear = () => {
    setInternalValue('');
    onClear?.();
  };

  return { internalValue, handleChange, handleClear };
}
