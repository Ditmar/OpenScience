import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';
import { TextFieldWrapper } from './TextFieldWrapper';
import type { TextFieldWrapperProps } from './types/IProps';

describe('TextFieldWrapper', () => {
  const defaultProps: TextFieldWrapperProps = {
    id: 'test-input',
    label: 'Test Label',
    value: '',
    placeholder: 'Enter text',
    onChange: vi.fn(),
  };

  // 1. Pruebas de renderizado con y sin props opcionales
  describe('Renderizado', () => {
    it('renderiza correctamente con props mínimas', () => {
      render(
        <TextFieldWrapper
          id={defaultProps.id}
          label={defaultProps.label}
          value={defaultProps.value}
          placeholder={defaultProps.placeholder}
          onChange={defaultProps.onChange}
        />,
      );

      expect(screen.getByLabelText('Test Label')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
      expect(screen.queryByTestId('validation-icon')).not.toBeInTheDocument();
      expect(screen.queryByText('helper text')).not.toBeInTheDocument();
    });

    it('renderiza helperText cuando se proporciona', () => {
      render(
        <TextFieldWrapper
          id={defaultProps.id}
          label={defaultProps.label}
          value={defaultProps.value}
          placeholder={defaultProps.placeholder}
          onChange={defaultProps.onChange}
          helperText="Helper text"
        />,
      );
      expect(screen.getByText('Helper text')).toBeInTheDocument();
    });
  });

  // 2. Pruebas de interacción con iconos de acción
  describe('Interacción con iconos de validación', () => {
    it('no muestra iconos de validación cuando status es null', () => {
      render(
        <TextFieldWrapper
          id={defaultProps.id}
          label={defaultProps.label}
          value={defaultProps.value}
          placeholder={defaultProps.placeholder}
          onChange={defaultProps.onChange}
          status={null}
        />,
      );
      expect(screen.queryByTestId('validation-icon')).not.toBeInTheDocument();
    });

    it('muestra icono de éxito cuando status es success', () => {
      render(
        <TextFieldWrapper
          id={defaultProps.id}
          label={defaultProps.label}
          value={defaultProps.value}
          placeholder={defaultProps.placeholder}
          onChange={defaultProps.onChange}
          status="success"
        />,
      );
      expect(screen.getByTestId('success-icon')).toBeInTheDocument();
    });

    it('muestra icono de warning cuando status es warning', () => {
      render(
        <TextFieldWrapper
          id={defaultProps.id}
          label={defaultProps.label}
          value={defaultProps.value}
          placeholder={defaultProps.placeholder}
          onChange={defaultProps.onChange}
          status="warning"
        />,
      );
      expect(screen.getByTestId('warning-icon')).toBeInTheDocument();
    });

    it('muestra icono de error cuando status es error', () => {
      render(
        <TextFieldWrapper
          id={defaultProps.id}
          label={defaultProps.label}
          value={defaultProps.value}
          placeholder={defaultProps.placeholder}
          onChange={defaultProps.onChange}
          status="error"
        />,
      );
      expect(screen.getByTestId('error-icon')).toBeInTheDocument();
    });
  });

  //  Pruebas de accesibilidad
  describe('Accesibilidad', () => {
    it('tiene una etiqueta asociada correctamente', () => {
      render(
        <TextFieldWrapper
          id={defaultProps.id}
          label={defaultProps.label}
          value={defaultProps.value}
          placeholder={defaultProps.placeholder}
          onChange={defaultProps.onChange}
        />,
      );
      const input = screen.getByLabelText('Test Label');
      expect(input).toHaveAttribute('id', 'test-input');
    });

    it('tiene aria-describedby cuando hay helperText', () => {
      render(
        <TextFieldWrapper
          id={defaultProps.id}
          label={defaultProps.label}
          value={defaultProps.value}
          placeholder={defaultProps.placeholder}
          onChange={defaultProps.onChange}
          helperText="Help text"
        />,
      );
      const input = screen.getByLabelText('Test Label');
      expect(input).toHaveAttribute('aria-describedby', 'test-input-hint');
    });

    it('tiene aria-invalid cuando hay error', () => {
      render(
        <TextFieldWrapper
          id={defaultProps.id}
          label={defaultProps.label}
          value={defaultProps.value}
          placeholder={defaultProps.placeholder}
          onChange={defaultProps.onChange}
          error
        />,
      );
      const input = screen.getByLabelText('Test Label');
      expect(input).toHaveAttribute('aria-invalid', 'true');
    });

    it('tiene aria-disabled cuando está deshabilitado', () => {
      render(
        <TextFieldWrapper
          id={defaultProps.id}
          label={defaultProps.label}
          value={defaultProps.value}
          placeholder={defaultProps.placeholder}
          onChange={defaultProps.onChange}
          disabled
        />,
      );
      const input = screen.getByLabelText('Test Label');
      expect(input).toHaveAttribute('aria-disabled', 'true');
    });

    it('iconos de validación tienen aria-labels apropiados', () => {
      render(
        <TextFieldWrapper
          id={defaultProps.id}
          label={defaultProps.label}
          value={defaultProps.value}
          placeholder={defaultProps.placeholder}
          onChange={defaultProps.onChange}
          status="success"
        />,
      );
      expect(screen.getByTestId('success-icon')).toHaveAttribute('aria-label', 'success');
    });
  });
});
