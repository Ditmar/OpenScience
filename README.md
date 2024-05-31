# OpenScience

OpenScience is a collaborative project dedicated to creating an open-access scientific journal.

# Set up project

### Documentación

#### Integración y Configuración de Astro SEO

Para integrar y configurar `astro-seo` en tu proyecto Astro, sigue estos pasos:

1. Instala `astro-seo` utilizando npm o yarn:

   ```bash
   yarn add astro-seo
   ```
Importa los componentes necesarios en tus archivos Astro, por ejemplo:

   ```astro
---
import { OpenGraphTags } from 'astro-seo';
---

<html lang="en">
  <head>
    <title>Welcome to my site</title>
    <OpenGraphTags
      title="Título de la página"
      description="Descripción de la página"
      image="URL_de_la_imagen"
    />
  </head>
  <body>
    <!-- Contenido de tu página -->
  </body>
</html>
   ```
Ajusta las props según sea necesario para adaptarlas a tu página.
Ejemplos de Configuraciones Mockeadas:

Se muestran ejemplos de configuraciones mockeadas y cómo se reflejan en el HTML generado:

**Ejemplo 1: Etiquetas Open Graph**

   ```astro
---
import { OpenGraphTags } from 'astro-seo';
---

<html lang="en">
  <head>
    <title>Welcome to my site</title>
    <OpenGraphTags
      title="Título de la página"
      description="Descripción de la página"
      image="URL_de_la_imagen"
    />
  </head>
  <body>
    <!-- Contenido de tu página -->
  </body>
</html>


HTML generado:


```hmtl
<meta property="og:title" content="Título de la página" />
<meta property="og:description" content="Descripción de la página" />
<meta property="og:image" content="URL_de_la_imagen" />
```

**Ejemplo 2: Etiquetas de Twitter**

```markdown
```astro
---
import { TwitterTags } from 'astro-seo';
---

<html lang="en">
  <head>
    <title>Welcome to my site</title>
    <TwitterTags
      title="Título de la página"
      description="Descripción de la página"
      image="URL_de_la_imagen"
    />
  </head>
  <body>
    <!-- Contenido de tu página -->
  </body>
</html>

HTML generado:

```hmtl
<meta name="twitter:title" content="Título de la página" />
<meta name="twitter:description" content="Descripción de la página" />
<meta name="twitter:image" content="URL_de_la_imagen" />
```
