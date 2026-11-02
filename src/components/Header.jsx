import { useNavigate } from 'react-router-dom'
import useTheme from '../hooks/useTheme'
import useAuth from '../hooks/useAuth'

function Header() {
  const { theme, toggleTheme } = useTheme()
  const { logged, logout } = useAuth()
  const navigate = useNavigate()

  function handleLogout() {
    logout()
    navigate('/login')
  }

  const buttonClass =
    'rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm cursor-pointer hover:border-indigo-600 dark:border-zinc-700 dark:bg-zinc-800 dark:hover:border-indigo-400'

  return (
    <header className="flex items-center justify-between border-b border-zinc-200 bg-white px-4 py-3 sm:px-6 sm:py-4 dark:border-zinc-700 dark:bg-zinc-800">
      <div className="flex items-center gap-2 text-base font-semibold sm:text-lg">
        <span className="text-xl sm:text-2xl">📷</span>
        <span>Equipe Rocket</span>
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        <button
          type="button"
          className={buttonClass}
          onClick={toggleTheme}
          aria-label="Alternar tema claro/escuro"
        >
          {theme === 'light' ? '🌙' : '☀️'}
          <span className="ml-1 hidden sm:inline">{theme === 'light' ? 'Escuro' : 'Claro'}</span>
        </button>

        {logged && (
          <button type="button" className={buttonClass} onClick={handleLogout}>
            Sair
          </button>
        )}
      </div>
    </header>
  )
}

export default Header
