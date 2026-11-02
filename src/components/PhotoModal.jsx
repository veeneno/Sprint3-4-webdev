import { daysAgo, formatDate } from '../utils/date'

function PhotoModal({ photo, onClose }) {
  const days = daysAgo(photo.capturedAt)
  const daysLabel = days <= 0 ? 'hoje' : `há ${days} dia${days > 1 ? 's' : ''}`

  return (
    <div
      className="fixed inset-0 z-10 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-md overflow-y-auto rounded-xl border border-zinc-200 bg-white p-5 sm:p-6 dark:border-zinc-700 dark:bg-zinc-800"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="absolute top-3 right-3 cursor-pointer text-lg text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          onClick={onClose}
          aria-label="Fechar"
        >
          ✕
        </button>

        <img
          src={photo.imageUrl}
          alt={photo.title}
          className="mb-4 h-48 w-full rounded-lg bg-zinc-200 object-cover sm:h-56 dark:bg-zinc-700"
        />

        <h2 className="mb-4 text-xl font-semibold">{photo.title}</h2>

        <ul className="mb-4 flex flex-col gap-2 text-sm">
          <li className="flex flex-col justify-between gap-1 sm:flex-row sm:gap-3">
            <span className="text-zinc-500 dark:text-zinc-400">Data</span>
            <strong>
              {formatDate(photo.capturedAt, { day: '2-digit', month: 'long', year: 'numeric' })} ({daysLabel})
            </strong>
          </li>
          <li className="flex flex-col justify-between gap-1 sm:flex-row sm:gap-3">
            <span className="text-zinc-500 dark:text-zinc-400">Status</span>
            <strong>{photo.isEdited ? 'Editada com IA' : 'Modo RAW (sem edição)'}</strong>
          </li>
          <li className="flex flex-col justify-between gap-1 sm:flex-row sm:gap-3">
            <span className="text-zinc-500 dark:text-zinc-400">Tamanho do arquivo</span>
            <strong>{photo.sizeMB} MB</strong>
          </li>
        </ul>

        <div className="flex flex-col gap-1 border-t border-zinc-200 pt-3 dark:border-zinc-700">
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
      </div>
    </div>
  )
}

export default PhotoModal
