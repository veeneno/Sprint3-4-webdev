import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'
import useAuth from '../hooks/useAuth'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { logged, login } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (logged) {
      navigate('/dashboard')
    }
  }, [logged, navigate])

  function handleSubmit(event) {
    event.preventDefault()

    const success = login(username, password)

    if (success) {
      setError('')
      navigate('/dashboard')
    } else {
      setError('Usuário ou senha inválidos.')
    }
  }

  const inputClass =
    'rounded-md border border-zinc-200 bg-zinc-50 px-3 py-2.5 focus:border-indigo-600 focus:outline-none dark:border-zinc-700 dark:bg-zinc-900 dark:focus:border-indigo-400'
  const labelClass = 'text-sm text-zinc-500 dark:text-zinc-400'

  return (
    <Layout>
      <div className="flex flex-1 items-center justify-center p-4 sm:p-6">
        <form
          className="flex w-full max-w-sm flex-col gap-2.5 rounded-xl border border-zinc-200 bg-white p-6 sm:p-8 dark:border-zinc-700 dark:bg-zinc-800"
          onSubmit={handleSubmit}
        >
          <h1 className="text-2xl font-bold">Entrar</h1>
          <p className="mb-3 text-sm text-zinc-500 dark:text-zinc-400">
            Acesse sua conta para ver suas fotos
          </p>

          <label htmlFor="username" className={labelClass}>
            Usuário
          </label>
          <input
            id="username"
            type="text"
            className={inputClass}
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            placeholder="Digite seu usuário"
            autoComplete="username"
          />

          <label htmlFor="password" className={labelClass}>
            Senha
          </label>
          <input
            id="password"
            type="password"
            className={inputClass}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Digite sua senha"
            autoComplete="current-password"
          />

          {error && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{error}</p>}

          <button
            type="submit"
            className="mt-3 cursor-pointer rounded-md bg-indigo-600 px-3 py-2.5 font-semibold text-white hover:bg-indigo-700 dark:bg-indigo-400 dark:text-zinc-900 dark:hover:bg-indigo-300"
          >
            Entrar
          </button>

          <div className="mt-4 rounded-md border border-dashed border-zinc-300 bg-zinc-50 px-3 py-2 text-center text-xs text-zinc-500 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-400">
            Login de teste: <strong className="text-zinc-700 dark:text-zinc-200">admin</strong> / senha{' '}
            <strong className="text-zinc-700 dark:text-zinc-200">1234</strong>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default Login
