// Importa los matchers extendidos específicos para Vitest
import '@testing-library/jest-dom/vitest';

// Opcional: Configuración adicional de testing-library
import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';

// Limpia el DOM después de cada test
afterEach(() => {
  cleanup();
});