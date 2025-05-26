export const getEnvironment = (key: string): string => {
  return import.meta.env[key] as string;
};
