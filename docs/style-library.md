# 📘 Theme System Usage Guide (MUI)

This guide explains how to customize the application's theme and reuse the `ThemeProvider` in other React applications. The system is built with **Material-UI (MUI)** and uses a **React context** to manage theme state (light or dark).

---

## ✅ 1. Modifying Themes

The default themes are located in the `src/style-library/themes` directory. You can edit the visual appearance of the app there.

### 🔧 Theme Files

* `src/style-library/themes/default.ts` → Light theme
* `src/style-library/themes/dark.ts` → Dark theme

### ✏️ How to Customize a Theme

1. Open the corresponding file (`default.ts` or `dark.ts`).
2. Modify properties like colors, typography, spacing, etc.

```ts
// src/style-library/themes/default.ts
import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#0793bf', // Primary color
    },
    background: {
      default: '#f5f5f5', // Background color
    },
  },
  typography: {
    fontFamily: 'Lato, Roboto, sans-serif', // Font family
  },
});
```

3. Save your changes.

---

## 🌓 2. Switching Between Light and Dark Themes

To allow users to toggle between light and dark modes, use the `ModeSwitcher` component.

### 📥 Instructions

1. **Import the component:**

```ts
import { ModeSwitcher } from 'src/components/ModeSwitcher';
```

2. **Add the switcher to your UI:**

```tsx
<ModeSwitcher />
```

This component renders a toggle for dynamic theme switching.

---

## ♻️ 3. Reusing the `ThemeProvider` in Other Applications

You can integrate the theme provider in any React project.

### 🔁 Steps to Reuse

1. **Copy the `ThemeProvider.tsx` file** to your new application.

2. **Install the required dependencies:**

```bash
npm install @mui/material @emotion/react @emotion/styled
```

3. **Wrap your app with the `ThemeProvider`:**

```tsx
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from './path/to/ThemeProvider';
import App from './App';

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
```

4. **(Optional) Use the `ModeSwitcher`:**

```tsx
import React from 'react';
import { useThemeMode } from './path/to/ThemeProvider';

function ExampleComponent() {
  const { mode, setMode } = useThemeMode();

  return (
    <div>
      <p>Current theme: {mode}</p>
      <button onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}>
        Switch Theme
      </button>
    </div>
  );
}
```

---

## 🎨 4. Advanced Customization

For more specific configurations, you can create and add new themes.

### 🧱 Creating a New Theme

1. Create a new file (e.g. `customTheme.ts`) in the `themes` folder.

```ts
// src/style-library/themes/customTheme.ts
import { createTheme } from '@mui/material/styles';

export const customTheme = createTheme({
  palette: {
    primary: {
      main: $ads-button-main$,
      light: $ads-button-light,
      dark: $ads-button-dark,
      contrastText: $ads-contrastext
    },
    background: {
      default: '#ffffff',
    },
  },
});
```

### 🧩 Extending the `ThemeProvider`

Update the `ThemeProvider` logic to support the new theme:

```ts
const theme = useMemo(() => {
  switch (mode) {
    case 'light':
      return lightTheme;
    case 'dark':
      return darkTheme;
    case 'custom':
      return customTheme;
    default:
      return lightTheme;
  }
}, [mode]);
```


## **🔗 5. Using Theme System in Astro**

To use the theme system in an Astro project, follow these steps:

1. **load `emotioncache`:**
   
  ```ts
  ---
  // @ts-ignore
  const { emotionCache } = Astro.locals;
  ---
  ```

2. **Import the `MuiApp` component:**

```tsx
import App from '../core/MuiApp';
```

3. **Final Integration:**

```ts
---
import App from '../core/MuiApp';

// @ts-ignore
const { emotionCache } = Astro.locals;
---

<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>OpenScience</title>
    <!-- No se necesita incluir los estilos aquí, el middleware se encarga de eso -->
  </head>
  <body>
    <App emotionCache={emotionCache}>
      <!-- here goes the content of your page -->
    </App>
  </body>
</html>
```