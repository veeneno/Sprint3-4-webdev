const API_URL = import.meta.env.VITE_API_URL

async function request(path, options) {
  const response = await fetch(`${API_URL}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  })

  if (!response.ok) {
    throw new Error('Erro ao comunicar com a API')
  }

  return response.json()
}

export function getPhotos() {
  return request('/photos')
}

export function getPhoto(id) {
  return request(`/photos/${id}`)
}

export function updatePhoto(id, data) {
  return request(`/photos/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  })
}

export function deletePhoto(id) {
  return request(`/photos/${id}`, { method: 'DELETE' })
}
