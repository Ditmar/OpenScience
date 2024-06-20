import { render, fireEvent } from '@testing-library/react';
import InputVariableForm from './InputVariableForm';

describe('InputVariableForm component', () => {
  it('renders correctly', () => {
    const { getByLabelText } = render(
      <InputVariableForm label="Name" type="text" value="" onChange={() => {}} />,
    );
    expect(getByLabelText('Name')).toBeInTheDocument();
  });

  it('calls onChange when input value changes', () => {
    const handleChange = jest.fn();
    const { getByLabelText } = render(
      <InputVariableForm label="Name" type="text" value="" onChange={handleChange} />,
    );
    const input = getByLabelText('Name');
    fireEvent.change(input, { target: { value: 'John' } });
    expect(handleChange).toHaveBeenCalledWith('John');
  });
});
