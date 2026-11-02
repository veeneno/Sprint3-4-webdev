import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Layout from '../components/Layout'
import StatusBadge from '../components/StatusBadge'
import usePhoto from '../hooks/usePhoto'
import { daysAgo, formatDate } from '../utils/date'

function PhotoDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { photo, loading, error, saving, editWithAI, removePhoto } = usePhoto(id)
  const [prompt, setPrompt] = useState('')

  async function handleEdit(event) {
    event.preventDefault()

    if (!prompt.trim()) {
      return
    }

    try {
      await editWithAI(prompt.trim())
      setPrompt('')
    } catch {
      alert('Não foi possível editar a foto.')
    }
  }

  async function handleDelete() {
    if (!window.confirm('Tem certeza que deseja excluir esta foto?')) {
      return
    }

    try {
      await removePhoto()
      navigate('/dashboard')
    } catch {
      alert('Não foi possível excluir a foto.')
    }
  }

  function renderContent() {
    if (loading) {
      return <p className="py-10 text-center text-zinc-500 dark:text-zinc-400">Carregando foto...</p>
    }

    if (error) {
      return <p className="py-10 text-center text-red-600 dark:text-red-400">{error}</p>
    }

    const days = daysAgo(photo.capturedAt)
    const daysLabel = days <= 0 ? 'hoje' : `há ${days} dia${days > 1 ? 's' : ''}`

    return (
      <div className="flex flex-col gap-6 lg:flex-row">
        <img
          src={photo.imageUrl}
          alt={photo.title}
          className="h-64 w-full rounded-xl bg-zinc-200 object-cover sm:h-96 lg:h-auto lg:w-3/5 dark:bg-zinc-700"
        />

        <div className="flex flex-col gap-5 lg:w-2/5">
          <div className="flex flex-col gap-2">
            <StatusBadge isEdited={photo.isEdited} />
            <h1 className="text-2xl font-bold sm:text-3xl">{photo.title}</h1>
          </div>

          <ul className="flex flex-col gap-2 text-sm">
            <li className="flex justify-between gap-3">
              <span className="text-zinc-500 dark:text-zinc-400">Data</span>
              <strong className="text-right">
                {formatDate(photo.capturedAt, { day: '2-digit', month: 'long', year: 'numeric' })} ({daysLabel})
              </strong>
            </li>
            <li className="flex justify-between gap-3">
              <span className="text-zinc-500 dark:text-zinc-400">Status</span>
              <strong>{photo.isEdited ? 'Editada com IA' : 'Modo RAW (sem edição)'}</strong>
            </li>
            <li className="flex justify-between gap-3">
              <span className="text-zinc-500 dark:text-zinc-400">Tamanho do arquivo</span>
              <strong>{photo.sizeMB} MB</strong>
            </li>
          </ul>

          <div className="flex flex-col gap-1 border-t border-zinc-200 pt-4 dark:border-zinc-700">
            {photo.isEdited ? (
              <>
                <span className="text-xs text-zinc-500 dark:text-zinc-400">Prompt utilizado na edição</span>
                <p className="italic">"{photo.prompt}"</p>
              </>
            ) : (
              <span className="text-xs text-zinc-500 italic dark:text-zinc-400">
                Nenhum prompt utilizado — arquivo RAW original
              </span>
            )}
          </div>

          <form
            className="flex flex-col gap-2 rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-700 dark:bg-zinc-800"
            onSubmit={handleEdit}
          >
            <label htmlFor="prompt" className="text-sm font-semibold">
              {photo.isEdited ? 'Editar novamente com IA' : 'Editar com IA'}
            </label>
            <textarea
              id="prompt"
              rows="3"
              className="resize-none rounded-md border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm focus:border-indigo-600 focus:outline-none dark:border-zinc-700 dark:bg-zinc-900 dark:focus:border-indigo-400"
              value={prompt}
              onChange={(event) => setPrompt(event.target.value)}
              placeholder="Ex: deixar as cores mais quentes e aumentar o brilho"
            />
            <button
              type="submit"
              disabled={saving || !prompt.trim()}
              className="cursor-pointer rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-indigo-400 dark:text-zinc-900 dark:hover:bg-indigo-300"
            >
              {saving ? 'Salvando...' : 'Aplicar edição'}
            </button>
          </form>

          <button
            type="button"
            onClick={handleDelete}
            disabled={saving}
            className="cursor-pointer self-start rounded-md border border-red-300 px-3 py-2 text-sm font-semibold text-red-600 hover:bg-red-50 disabled:opacity-50 dark:border-red-500/40 dark:text-red-400 dark:hover:bg-red-500/10"
          >
            Excluir foto
          </button>
        </div>
      </div>
    )
  }

  return (
    <Layout>
      <div className="mx-auto w-full max-w-5xl flex-1 p-4 sm:p-6">
        <Link
          to="/dashboard"
          className="mb-5 inline-block text-sm text-indigo-600 hover:underline dark:text-indigo-400"
        >
          ← Voltar para a galeria
        </Link>

        {renderContent()}
      </div>
    </Layout>
  )
}

export default PhotoDetail
