import { useEffect, useState } from 'react'
import { deletePhoto, getPhoto, updatePhoto } from '../services/api'

function usePhoto(id) {
  const [photo, setPhoto] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    getPhoto(id)
      .then((data) => setPhoto(data))
      .catch(() => setError('Foto não encontrada.'))
      .finally(() => setLoading(false))
  }, [id])

  async function editWithAI(prompt) {
    setSaving(true)

    try {
      const updated = await updatePhoto(id, { ...photo, isEdited: true, prompt })
      setPhoto(updated)
    } finally {
      setSaving(false)
    }
  }

  async function removePhoto() {
    setSaving(true)

    try {
      await deletePhoto(id)
    } finally {
      setSaving(false)
    }
  }

  return { photo, loading, error, saving, editWithAI, removePhoto }
}

export default usePhoto
