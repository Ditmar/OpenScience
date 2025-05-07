// src/style-library/createEmotionCache.ts
import createCache from '@emotion/cache';

// Prepend: true => MUI styles come first, then user styles.
// This prevents user styles from accidentally overriding MUI styles.
export default function createEmotionCache() {
  return createCache({ key: 'openscience-mui', prepend: true });
}
