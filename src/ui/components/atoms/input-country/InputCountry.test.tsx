import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { InputCountry } from './InputCountry';
import globe from '../../../../assets/icons/globe.svg?raw';
import close_circle from '../../../../assets/icons/close_circle.svg?raw';
import info from '../../../../assets/icons/info.svg?raw';
import ar from '../../../../assets/flags/ar.svg?raw';

type Option = { label: string; value: string };
const countryOptions: Option[] = [
  { label: 'Argentina', value: 'AR' },
  { label: 'Bolivia', value: 'BO' },
  { label: 'Chile', value: 'CL' },
  { label: 'Perú', value: 'PE' },
];

describe('InputCountry', () => {
  it('renders with placeholder', () => {
    render(
      <InputCountry
        iconGlobe={globe}
        iconClose={close_circle}
        iconInfo={info}
        iconFlag={ar}
      />
    );
    expect(screen.getByText('Selecciona un país')).toBeInTheDocument();
  });

  // it('renders label and helper text', () => {
  //   render(
  //     <InputCountry
  //       value=""
  //       onChange={() => {}}
  //       options={mockOptions}
  //       label="País"
  //       helperText="Selecciona tu país"
  //     />
  //   );
  //   expect(screen.getByText('País')).toBeInTheDocument();
  //   expect(screen.getByText('Selecciona tu país')).toBeInTheDocument();
  // });

  // it('displays selected value label', () => {
  //   render(
  //     <InputCountry value="bo" onChange={() => {}} options={mockOptions} />
  //   );
  //   expect(screen.getByText('Bolivia')).toBeInTheDocument();
  // });

  // it('calls onChange when selecting a new country', () => {
  //   const handleChange = vi.fn();
  //   render(
  //     <InputCountry value="" onChange={handleChange} options={mockOptions} />
  //   );

  //   const input = screen.getByRole('combobox');
  //   fireEvent.click(input);

  //   const option = screen.getByText('Argentina');
  //   fireEvent.mouseDown(option);

  //   expect(handleChange).toHaveBeenCalledWith('ar');
  // });

  // it('disables interaction when disabled', () => {
  //   render(
  //     <InputCountry
  //       value=""
  //       onChange={() => {}}
  //       options={mockOptions}
  //       disabled
  //     />
  //   );
  //   const input = screen.getByRole('combobox');
  //   expect(input).toHaveAttribute('aria-disabled', 'true');
  // });
});