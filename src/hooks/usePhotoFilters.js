import { useMemo, useState } from 'react'

function usePhotoFilters(photos) {
  const [statusFilter, setStatusFilter] = useState('all')
  const [dateFilter, setDateFilter] = useState('all')

  const availableDates = useMemo(() => {
    const uniqueDates = [...new Set(photos.map((photo) => photo.capturedAt))]
    return uniqueDates.sort((a, b) => b.localeCompare(a))
  }, [photos])

  const filteredPhotos = useMemo(() => {
    return photos.filter((photo) => {
      const matchesStatus =
        statusFilter === 'all' ||
        (statusFilter === 'edited' && photo.isEdited) ||
        (statusFilter === 'raw' && !photo.isEdited)

      const matchesDate = dateFilter === 'all' || photo.capturedAt === dateFilter

      return matchesStatus && matchesDate
    })
  }, [photos, statusFilter, dateFilter])

  return {
    statusFilter,
    setStatusFilter,
    dateFilter,
    setDateFilter,
    availableDates,
    filteredPhotos,
  }
}

export default usePhotoFilters
