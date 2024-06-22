export const formatDate = (date: Date): string => {
  const month = date.toLocaleString('es-ES', { month: 'long' });
  const capitalizedMonth = month.charAt(0).toUpperCase() + month.slice(1);
  const day = date.getDate().toString();
  const year = date.getFullYear().toString();
  return `${capitalizedMonth} ${day} | ${year}`;
};
