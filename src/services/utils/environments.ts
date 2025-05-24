export const getEnvironment = (key: string, defaultValue: string): string => {
  if (typeof process !== 'undefined' && process.env[key]) {
    return process.env[key] ?? defaultValue;
  }
  return defaultValue;
};
