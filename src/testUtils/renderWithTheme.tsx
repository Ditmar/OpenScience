import type { ReactNode } from 'react';
import { render } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import { useMemo } from 'react';
import { lightTheme } from '../style-library/themes/default';
import { darkTheme } from '../style-library/themes/dark';
import { ThemeContext } from '../style-library/providers/ThemeProvider';

interface RenderWithThemeOptions extends Omit<RenderOptions, 'wrapper'> {
  /**
   * Theme mode to render with.
   * Defaults to 'light'.
   */
  mode?: 'light' | 'dark';
}

/**
 * Renders a component wrapped with MUI ThemeProvider and ThemeContext.
 *
 * @param ui - The React node to render.
 * @param options - Optional render options including theme mode.
 * @returns Render result from React Testing Library.
 */
const renderWithTheme: (
  ui: ReactNode,
  options?: RenderWithThemeOptions,
) => ReturnType<typeof render> = (ui, options = {}) => {
  const { mode = 'light', ...rest } = options;
  const theme = mode === 'dark' ? darkTheme : lightTheme;

  function Wrapper({ children }: { children: ReactNode }) {
    const contextValue = useMemo(
      () => ({
        mode,
        setMode: () => {},
      }),
      [],
    );

    return (
      <ThemeContext.Provider value={contextValue}>
        <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>
      </ThemeContext.Provider>
    );
  }

  return render(ui, { wrapper: Wrapper, ...rest });
};

export * from '@testing-library/react';
export { renderWithTheme };
