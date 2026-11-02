function StatusBadge({ isEdited }) {
  return (
    <span
      className={`self-start rounded-full px-2 py-0.5 text-xs font-semibold ${
        isEdited
          ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-300'
          : 'bg-zinc-200 text-zinc-600 dark:bg-zinc-700 dark:text-zinc-300'
      }`}
    >
      {isEdited ? 'Editada com IA' : 'RAW'}
    </span>
  )
}

export default StatusBadge
