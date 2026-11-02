function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-zinc-200 px-4 py-4 text-center text-sm text-zinc-500 sm:px-6 dark:border-zinc-700 dark:text-zinc-400">
      <p>© {currentYear} Equipe Rocket — Sprint 4</p>
    </footer>
  )
}

export default Footer
