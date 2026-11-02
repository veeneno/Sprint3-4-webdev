import { formatDate } from '../utils/date'

function GalleryFilters({
  search,
  onSearchChange,
  statusFilter,
  onStatusChange,
  dateFilter,
  onDateChange,
  availableDates,
}) {
  const fieldClass =
    'w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-800'
  const labelClass = 'text-xs text-zinc-500 dark:text-zinc-400'

  return (
    <div className="mb-6 flex flex-col gap-4 md:flex-row md:gap-5">
      <div className="flex flex-col gap-1 md:flex-1">
        <label htmlFor="search" className={labelClass}>
          Buscar
        </label>
        <input
          id="search"
          type="text"
          className={fieldClass}
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Buscar pelo título da foto"
        />
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:gap-5">
        <div className="flex flex-col gap-1 sm:flex-1 md:w-48 md:flex-none">
          <label htmlFor="status-filter" className={labelClass}>
            Status
          </label>
          <select
            id="status-filter"
            className={fieldClass}
            value={statusFilter}
            onChange={(event) => onStatusChange(event.target.value)}
          >
            <option value="all">Todas</option>
            <option value="edited">Editadas</option>
            <option value="raw">Não editadas (RAW)</option>
          </select>
        </div>

        <div className="flex flex-col gap-1 sm:flex-1 md:w-48 md:flex-none">
          <label htmlFor="date-filter" className={labelClass}>
            Data
          </label>
          <select
            id="date-filter"
            className={fieldClass}
            value={dateFilter}
            onChange={(event) => onDateChange(event.target.value)}
          >
            <option value="all">Todas as datas</option>
            {availableDates.map((date) => (
              <option key={date} value={date}>
                {formatDate(date)}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}

export default GalleryFilters
