# Tokens base del sistema de diseño

Estos tokens definen valores base de espaciado en el diseño. Se deben usar para márgenes, paddings, separaciones, bordes, etc.

| Token               | Valor     | Uso recomendado |
|---------------------|-----------|-----------------|
| `--space-minus-one` | `-1px`    | Microajustes negativos |
| `--space-0`         | `0px`     | Reset de espacio |
| `--space-0-5`       | `0.5px`   | Bordes finos |
| `--space-1`         | `1px`     | Bordes, separaciones mínimas |
| `--space-2`         | `2px`     | Componentes compactos |
| `--space-4`         | `4px`     | Unidad base |



# ejemplo para usar Layout como base 

---
// src/pages/index.astro
import BaseLayout from '../layouts/BaseLayout.astro';
---
<BaseLayout>
  <div style="padding: var(--space-4); margin-top: var(--space-minus-one);">
    Hola mundo con tokens
  </div>
</BaseLayout>