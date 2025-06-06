export function formatRelativeTime(timestamp: string | Date): string {
  const now = new Date();
  const time = new Date(timestamp);
  if (Number.isNaN(time.getTime())) return 'Invalid date';

  const diff = Math.floor((now.getTime() - time.getTime()) / 1000);

  if (diff < 60) return `${diff.toString()} second${diff === 1 ? '' : 's'} ago`;
  const minutes = Math.floor(diff / 60);
  if (minutes < 60) return `${minutes.toString()} minute${minutes === 1 ? '' : 's'} ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours.toString()} hour${hours === 1 ? '' : 's'} ago`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days.toString()} day${days === 1 ? '' : 's'} ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months.toString()} month${months === 1 ? '' : 's'} ago`;
  const years = Math.floor(months / 12);
  return `${years.toString()} year${years === 1 ? '' : 's'} ago`;
}
