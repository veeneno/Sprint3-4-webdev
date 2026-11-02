import { useMemo, useState } from 'react'

function usePhotoFilters(photos) {
  const [statusFilter, setStatusFilter] = useState('all')
  const [dateFilter, setDateFilter] = useState('all')
  const [search, setSearch] = useState('')

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

      const matchesSearch = photo.title.toLowerCase().includes(search.trim().toLowerCase())

      return matchesStatus && matchesDate && matchesSearch
    })
  }, [photos, statusFilter, dateFilter, search])

  return {
    statusFilter,
    setStatusFilter,
    dateFilter,
    setDateFilter,
    search,
    setSearch,
    availableDates,
    filteredPhotos,
  }
}

export default usePhotoFilters
