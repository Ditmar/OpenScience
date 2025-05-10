import { render, fireEvent } from '@testing-library/react';
import Check from './Checkbox';

test('llama a onChange con el nuevo valor', () => {
  const handleChange = jest.fn();
  const { getByRole } = render(<Check checked={false} onChange={handleChange} />);
  fireEvent.click(getByRole('checkbox'));
  expect(handleChange).toHaveBeenCalledWith(true);
});

test('no cambia si está deshabilitado', () => {
  const handleChange = jest.fn();
  const { getByRole } = render(
    <Check checked={false} disabled onChange={handleChange} />
  );
  fireEvent.click(getByRole('checkbox'));
  expect(handleChange).not.toHaveBeenCalled();
});