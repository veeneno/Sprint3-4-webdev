import { formatDate } from '../utils/date'

function GalleryFilters({ statusFilter, onStatusChange, dateFilter, onDateChange, availableDates }) {
  const selectClass =
    'w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm sm:w-48 dark:border-zinc-700 dark:bg-zinc-800'

  return (
    <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:gap-5">
      <div className="flex flex-col gap-1">
        <label htmlFor="status-filter" className="text-xs text-zinc-500 dark:text-zinc-400">
          Status
        </label>
        <select
          id="status-filter"
          className={selectClass}
          value={statusFilter}
          onChange={(event) => onStatusChange(event.target.value)}
        >
          <option value="all">Todas</option>
          <option value="edited">Editadas</option>
          <option value="raw">Não editadas (RAW)</option>
        </select>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="date-filter" className="text-xs text-zinc-500 dark:text-zinc-400">
          Data
        </label>
        <select
          id="date-filter"
          className={selectClass}
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
  )
}

export default GalleryFilters
