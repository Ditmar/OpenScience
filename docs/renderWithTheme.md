# 🧪 Test Utilities: `renderWithTheme`

This module provides a centralized utility to simplify testing React components that depend on the application's theme system (light/dark).

---

## 🎯 Why Use `renderWithTheme`?

Material UI requires all components to be rendered inside a `<ThemeProvider>`.  
Additionally, this project defines a `ThemeContext` to handle the active mode (`light` or `dark`).

If you skip these providers in your tests, you will see errors such as:

```
TypeError: Cannot read properties of undefined (reading 'palette')
```

To avoid duplicating setup code in every test and ensure consistency, `renderWithTheme`:

- ✅ Wraps [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) `render`.
- ✅ Allows selecting the theme mode (`light` or `dark`).
- ✅ Re-exports all Testing Library utilities (`fireEvent`, `screen`, `userEvent`, etc.).
- ✅ Defaults to `light` mode when none is specified.

---

## ⚙️ API

```ts
renderWithTheme(ui: ReactNode, options?: {
  mode?: 'light' | 'dark';
  ...RenderOptions
}): RenderResult
```

| Parameter     | Description                                                         |
|---------------|---------------------------------------------------------------------|
| `ui`          | The React component to render.                                     |
| `mode`        | Theme mode to use (`light` or `dark`). Defaults to `light`.        |
| `RenderOptions` | All the standard options from `@testing-library/react`.         |

---

## ✨ Basic Example 

```tsx
import { renderWithTheme } from '@testing/renderWithTheme';
import MyComponent from './MyComponent';

describe('<MyComponent />', () => {
  it('renders correctly in light mode', () => {
    const { getByText } = renderWithTheme(<MyComponent />);
    expect(getByText('Hello world')).toBeInTheDocument();
  });

  it('renders correctly in dark mode', () => {
    const { getByText } = renderWithTheme(<MyComponent />, { mode: 'dark' });
    expect(getByText('Hello world')).toBeInTheDocument();
  });
});
```

---

## 🔍 Example Using `screen`

```tsx
import { renderWithTheme, screen } from '@testing/renderWithTheme';
import MyComponent from './MyComponent';

describe('<MyComponent />', () => {
  it('renders content using screen', () => {
    renderWithTheme(<MyComponent />);
    expect(screen.getByText('Hello world')).toBeInTheDocument();
  });
});
```

---

## 📦 Re-Exported Utilities

You can import all `@testing-library/react` utilities directly from this module:

```ts
import { renderWithTheme, screen, fireEvent, userEvent, waitFor, within } from '@testing/renderWithTheme';
```

This helps keep your imports clean and centralized.

---

## 📝 Recommendations

- ✅ Use `screen` for consistent and accessible queries.
- ✅ If your component depends on dark mode, specify it explicitly:

  ```tsx
  renderWithTheme(<MyComponent />, { mode: 'dark' });
  ```

- ✅ Keep your tests declarative and easy to read.

---

## 🧩 File Location

```
src/testUtils/renderWithTheme.tsx
```

---

## ✅ Full Example

```tsx
import { renderWithTheme, screen, fireEvent } from '@testing/renderWithTheme';
import Button from './Button';

describe('<Button />', () => {
  it('renders with default theme (light)', () => {
    renderWithTheme(<Button>Click me</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Click me');
  });

  it('renders in dark mode', () => {
    renderWithTheme(<Button>Click me</Button>, { mode: 'dark' });
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('handles click events', () => {
    const handleClick = jest.fn();
    renderWithTheme(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalled();
  });
});
```
