# 🧩 SVG Icons Integration Guide (SVGR + Astro + React)

This guide documents how to use **SVG files as React components** using the `vite-plugin-svgr` plugin in an **Astro project**. It includes installation, usage examples, and Storybook integration.

---

## 🎯 Goal

Enable SVG imports as React components using `vite-plugin-svgr` in an Astro project to allow **on-demand icon loading**, reduce the initial bundle size, and enhance performance.

---

## ✅ Prerequisites

1. **Plugin installation**
   Ensure `vite-plugin-svgr` is installed:

   ```bash
   npm install -D vite-plugin-svgr
   ```

2. **Plugin registration in `astro.config.mjs`:**

   ```js
   import svgr from 'vite-plugin-svgr';

   export default defineConfig({
     vite: {
       plugins: [svgr()],
     },
   });
   ```

3. **SVG file support**
   SVG icons should be stored in:
   `src/assets/icons/*.svg`

---

## 🛠️ Dynamic SVG Loading System

Icons are dynamically imported as React components using a hook and rendered via a custom `<Icon />` component.

### 📂 Directory Structure

```
src/
├── assets/
│   └── icons/
│       ├── article.svg
│       └── ...
├── ui/
│   └── components/
│       └── Icons/
│           ├── Icon.tsx
│           ├── types/
│           │   └── IProps.ts
│           └── useDynamic.ts
```

---

## 🚀 Usage Example in `.astro`

```astro
---
import Layout from '../layouts/Layout.astro';
import { Icon } from '../ui/components/Icons/Icon';
---

<Layout title="Demo Page">
  <Icon client:only="react" iconName="article" />
</Layout>
```

---

## 📦 Icon Component System

### 1. Type Definitions

```ts
// types/IProps.ts
import type { SVGProps } from 'react';

export interface IconProps extends SVGProps<SVGSVGElement> {
  iconName: IconName;
}

export type IconName =
  | 'article'
  | 'home'
  | 'facebook'
  | 'downloads'
  | 'logo'
  | 'start'
  | 'volume'
  | ...; // Add more as needed
```

---

### 2. Dynamic Import Hook

```ts
// useDynamic.ts
import { useState, useEffect, type FunctionComponent } from 'react';
import type { IconName } from './types/IProps';

export function useDynamic(iconName: IconName) {
  const [DynamicComponent, setDynamicComponent] = useState<FunctionComponent<
    React.SVGProps<SVGSVGElement>
  > | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    import(`../../../assets/icons/${iconName}.svg?react`)
      .then((mod) => setDynamicComponent(() => mod.default))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [iconName]);

  return [DynamicComponent, setDynamicComponent, loading, error] as const;
}
```

---

### 3. Icon Component

```tsx
// Icon.tsx
import { useDynamic } from './useDynamic';
import type { IconProps } from './types/IProps';

function LoadingComponent({ titulo }: { titulo: string }) {
  return <div>Loading {titulo}...</div>;
}

export function Icon({ iconName, ...props }: IconProps) {
  const [DynamicComponent] = useDynamic(iconName);

  return (
    <div>
      {DynamicComponent ? (
        <DynamicComponent width={100} height={100} stroke="red" {...props} />
      ) : (
        <LoadingComponent titulo="icon" />
      )}
    </div>
  );
}
```

---

## 🎨 Styling SVG Icons

The SVGs can be styled via props:

```tsx
<Icon iconName="logo" width="48" height="48" fill="currentColor" />
```

Use `fill`, `stroke`, `width`, `height`, or className to control appearance.

---

## 📖 Storybook Integration

A Storybook section has been added to demonstrate and document icon usage.

### Example Story

```tsx
// Icon.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';

const meta: Meta<typeof Icon> = {
  component: Icon,
  title: 'Components/Icon',
  args: {
    iconName: 'logo',
    width: 48,
    height: 48,
    fill: '#0077cc',
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {};

export const CustomColor: Story = {
  args: {
    fill: '#ff5722',
  },
};

export const Responsive: Story = {
  args: {
    width: '100%',
    height: 'auto',
  },
};
```

---

## 📌 Notes

* Ensure SVGs are **clean**, with no inline styles that override dynamic props.
* Icons support **dynamic theming** via `fill="currentColor"`, enabling theme-based coloring.
* This setup is **framework-agnostic** to some degree and can be reused across projects with Astro + React.