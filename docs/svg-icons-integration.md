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
│   └── utils/
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
// loadSvgIcon.ts
import type { DynamicIcon } from './types/IconType';

export async function loadSvgIcon(iconName: string): Promise<DynamicIcon> {
  const module = (await import(`../../../assets/icons/${iconName}.svg?react`)) as {
    default: DynamicIcon;
  };
  return module.default;
}
```

```ts
// useDynamic.ts
import { useEffect, useState } from 'react';
import type { IconName } from '../vite-svgr/types/IProps';
import type { DynamicIcon } from '../vite-svgr/types/IconType';
import { loadSvgIcon } from '../vite-svgr/loadSvgIcon';

export function useDynamicIcon(iconName: IconName) {
  const [IconComponent, setIconComponent] = useState<DynamicIcon>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<unknown>(null);
  useEffect(() => {
    setLoading(true);
    setError(null);

    loadSvgIcon(iconName)
      .then((component) => {
        setIconComponent(() => component);
      })
      .catch((caughtError: unknown) => {
        setError(caughtError);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [iconName]);
  return [IconComponent, setIconComponent, loading, error] as const;
}
```

---

### 3. Icon Component

```tsx
// Icon.tsx
import { useDynamicIcon } from '../hooks/useDynamicIcon';
import type { IconProps } from './types/IProps';
import { Loader } from './Loader';

export function Icon({ iconName, ...props }: IconProps) {
  const [DynamicComponent] = useDynamicIcon(iconName);

  return (
    <div>
      {DynamicComponent ? (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <DynamicComponent {...props} />
      ) : (
        <Loader />
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

Use `fill`, `stroke`, `width`, `height`, className to control appearance.

Reference the [SVG attribute styling documentation](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Attribute) for more details.

---

## More Examples

```astro
<Icon iconName="logo" width="48" height="48" fill="currentColor" />
<Icon iconName="home" width="24" height="24" fill="#000" />
<Icon iconName="facebook" width="32" height="32" fill="#3b5998" />
<Icon iconName="downloads" width="20" height="20" fill="#4CAF50" />
<Icon iconName="start" width="16" height="16" fill="#FF9800" />
<Icon iconName="volume" width="24" height="24" fill="#F44336" />
```

### in react components:

```tsx
import { Icon } from 'path/to/ui/Icon/Component';
export function MyComponent() {
  return (
    <div>
      <Icon iconName="article" width="32" height="32" fill="currentColor" />
      <Icon iconName="home" width="24" height="24" fill="#000" />
    </div>
  );
}
```

```tsx
import { Icon } from 'path/to/ui/Icon/Component';
export function AnotherComponent() {
  return (
    <div>
      <Icon iconName="facebook" width="32" height="32" fill="#3b5998" />
      <Icon iconName="downloads" width="20" height="20" fill="#4CAF50" />
      <Icon iconName="start" width="16" height="16" fill="#FF9800" />
      <Icon iconName="volume" width="24" height="24" fill="#F44336" />
    </div>
  );
}
```
---

## 📌 Notes

* Ensure SVGs are **clean**, with no inline styles that override dynamic props.
* Icons support **dynamic theming** via `fill="currentColor"`, enabling theme-based coloring.
* This setup is **framework-agnostic** to some degree and can be reused across projects with Astro + React.