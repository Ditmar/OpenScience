import { defineMiddleware } from 'astro:middleware';
import createEmotionCache from 'style-library/createEmotionCache';
// eslint-disable-next-line import/no-extraneous-dependencies
import createEmotionServer from '@emotion/server/create-instance';

export const onRequest = defineMiddleware(async (context, next) => {
  const cache = createEmotionCache();
  const emotionCache = createEmotionServer(cache);

  context.locals.emotionCache = cache;

  const response = await next();

  if (response.headers.get('content-type')?.includes('text/html')) {
    const html = await response.text();
    const { html: extractedHtml, styles } = emotionCache.extractCriticalToChunks(html);

    // Insertar los estilos críticos en el HTML
    const stylesString = styles
      .map((style) => {
        return `<style data-emotion="${style.key} ${style.ids.join(' ')}">${style.css}</style>`;
      })
      .join('');

    const newHtml = html.replace(/<\/head>/, `${stylesString}</head>`);

    return new Response(newHtml, {
      status: response.status,
      headers: response.headers,
    });
  }

  return response;
});
