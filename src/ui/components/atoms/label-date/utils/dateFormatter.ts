export const formatDate = (date: Date): string => {
  const month = date.toLocaleString('es-ES', { month: 'long' });
  const day = date.getDate().toString();
  const year = date.getFullYear().toString();
  return `${month} ${day} | ${year}`;
};
