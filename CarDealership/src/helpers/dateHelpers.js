export function isExpiringSoon(date) {
  const today = new Date();
  const expirationDate = new Date(date);
  const diffInTime = expirationDate - today;
  const diffInDays = diffInTime / (1000 * 60 * 60 * 24);
  return diffInDays <= 30;
}

export function formatDate(date) {
  const [year, month, day] = date.split("-");
  return `${day}.${month}.${year}`;
}
