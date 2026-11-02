import { Link } from 'react-router-dom'
import StatusBadge from './StatusBadge'
import { formatDate } from '../utils/date'

function PhotoCard({ photo }) {
  return (
    <Link
      to={`/fotos/${photo.id}`}
      className="flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white transition hover:border-indigo-600 hover:shadow-md dark:border-zinc-700 dark:bg-zinc-800 dark:hover:border-indigo-400"
    >
      <img
        src={photo.imageUrl}
        alt={photo.title}
        loading="lazy"
        className="h-40 w-full bg-zinc-200 object-cover dark:bg-zinc-700"
      />
      <div className="flex flex-col gap-1 px-4 py-3">
        <p className="font-semibold">{photo.title}</p>
        <p className="mb-1 text-xs text-zinc-500 dark:text-zinc-400">{formatDate(photo.capturedAt)}</p>
        <StatusBadge isEdited={photo.isEdited} />
      </div>
    </Link>
  )
}

export default PhotoCard
