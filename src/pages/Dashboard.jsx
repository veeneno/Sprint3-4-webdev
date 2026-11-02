import { useState } from 'react'
import Layout from '../components/Layout'
import PhotoCard from '../components/PhotoCard'
import PhotoModal from '../components/PhotoModal'
import GalleryFilters from '../components/GalleryFilters'
import usePhotos from '../hooks/usePhotos'
import usePhotoFilters from '../hooks/usePhotoFilters'

function Dashboard() {
  const { photos, loading, error } = usePhotos()
  const {
    statusFilter,
    setStatusFilter,
    dateFilter,
    setDateFilter,
    availableDates,
    filteredPhotos,
  } = usePhotoFilters(photos)
  const [selectedPhoto, setSelectedPhoto] = useState(null)

  function renderContent() {
    if (loading) {
      return <p className="py-10 text-center text-zinc-500 dark:text-zinc-400">Carregando fotos...</p>
    }

    if (error) {
      return <p className="py-10 text-center text-red-600 dark:text-red-400">{error}</p>
    }

    if (filteredPhotos.length === 0) {
      return (
        <p className="py-10 text-center text-zinc-500 dark:text-zinc-400">
          Nenhuma foto encontrada com esses filtros.
        </p>
      )
    }

    return (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
        {filteredPhotos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} onSelect={() => setSelectedPhoto(photo)} />
        ))}
      </div>
    )
  }

  return (
    <Layout>
      <div className="mx-auto w-full max-w-5xl flex-1 p-4 sm:p-6">
        <div className="mb-5 flex flex-wrap items-baseline justify-between gap-2">
          <h1 className="text-2xl font-bold sm:text-3xl">Minhas Fotos</h1>
          {!loading && !error && (
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              {filteredPhotos.length} de {photos.length} fotos
            </p>
          )}
        </div>

        <GalleryFilters
          statusFilter={statusFilter}
          onStatusChange={setStatusFilter}
          dateFilter={dateFilter}
          onDateChange={setDateFilter}
          availableDates={availableDates}
        />

        {renderContent()}
      </div>

      {selectedPhoto && (
        <PhotoModal photo={selectedPhoto} onClose={() => setSelectedPhoto(null)} />
      )}
    </Layout>
  )
}

export default Dashboard
