export const formatDate = (date: Date, separator = ''): string => {
  const month = date.toLocaleString('es-ES', { month: 'long' });
  const capitalizedMonth = month.charAt(0).toUpperCase() + month.slice(1);
  const day = date.getDate().toString().padStart(2, '0');
  const year = date.getFullYear().toString();
  return `${capitalizedMonth} ${day}. ${year} ${separator}`;
};
