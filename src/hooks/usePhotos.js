import { useEffect, useState } from 'react'
import { getPhotos } from '../services/api'

function usePhotos() {
  const [photos, setPhotos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    getPhotos()
      .then((data) => setPhotos(data))
      .catch(() => setError('Não foi possível carregar as fotos.'))
      .finally(() => setLoading(false))
  }, [])

  return { photos, loading, error }
}

export default usePhotos
