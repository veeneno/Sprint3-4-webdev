function toDate(dateString) {
  return new Date(`${dateString}T00:00:00`)
}

export function formatDate(dateString, options) {
  return toDate(dateString).toLocaleDateString('pt-BR', options)
}

export function daysAgo(dateString) {
  const diffInMs = new Date() - toDate(dateString)
  return Math.floor(diffInMs / (1000 * 60 * 60 * 24))
}
