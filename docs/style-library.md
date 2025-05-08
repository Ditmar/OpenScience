# 📘 Guía de Uso del Sistema de Temas (MUI)

Esta guía describe cómo modificar el tema de la aplicación y reutilizar el proveedor de temas (`ThemeProvider`) en otras aplicaciones. El sistema está construido con **Material-UI (MUI)** y utiliza un **contexto de React** para manejar el estado del tema (claro u oscuro).

---

## ✅ 1. Modificar los Temas

Los temas predeterminados se encuentran en la carpeta `src/style-library/themes`. Ahí puedes editar el aspecto visual de la aplicación.

### 🔧 Archivos de tema

* `src/style-library/themes/default.ts` → Tema claro
* `src/style-library/themes/dark.ts` → Tema oscuro

### ✏️ Cómo personalizar un tema

1. Abre el archivo correspondiente (`default.ts` o `dark.ts`).
2. Modifica propiedades como colores, tipografía, espaciado, etc.

```ts
// src/style-library/themes/default.ts
import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#0793bf', // Color principal
    },
    background: {
      default: '#f5f5f5', // Color de fondo
    },
  },
  typography: {
    fontFamily: 'Lato, Roboto, sans-serif', // Fuente
  },
});
```

3. Guarda los cambios.

---

## 🌓 2. Cambiar entre Tema Claro y Oscuro

Para permitir al usuario alternar entre modos claro y oscuro, utiliza el componente `ModeSwitcher`.

### 📥 Instrucciones

1. **Importa el componente:**

```ts
import { ModeSwitcher } from 'src/components/ModeSwitcher';
```

2. **Agrega el switcher a tu UI:**

```tsx
<ModeSwitcher />
```

Este componente muestra un interruptor para cambiar dinámicamente el tema.

---

## ♻️ 3. Reutilizar el `ThemeProvider` en Otras Aplicaciones

Puedes integrar el proveedor de temas en cualquier proyecto React.

### 🔁 Pasos para reutilizarlo

1. **Copia el archivo** `ThemeProvider.tsx` a tu nueva aplicación.

2. **Instala las dependencias necesarias:**

```bash
npm install @mui/material @emotion/react @emotion/styled
```

3. **Envuelve tu aplicación con el `ThemeProvider`:**

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

4. **(Opcional) Usa el `ModeSwitcher`:**

```tsx
import React from 'react';
import { useThemeMode } from './path/to/ThemeProvider';

function ExampleComponent() {
  const { mode, setMode } = useThemeMode();

  return (
    <div>
      <p>Tema actual: {mode}</p>
      <button onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}>
        Cambiar Tema
      </button>
    </div>
  );
}
```

---

## 🎨 4. Personalización Avanzada

Para una configuración más específica, puedes crear y añadir nuevos temas.

### 🧱 Crear un nuevo tema

1. Crea un archivo (por ejemplo: `customTheme.ts`) dentro de la carpeta `themes`.

```ts
// src/style-library/themes/customTheme.ts
import { createTheme } from '@mui/material/styles';

export const customTheme = createTheme({
  palette: {
    primary: {
      main: '#ff5722',
    },
    background: {
      default: '#ffffff',
    },
  },
});
```

### 🧩 Extender el `ThemeProvider`

Modifica el `ThemeProvider` para incluir el nuevo tema:

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