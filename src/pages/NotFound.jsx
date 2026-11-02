import { Link } from 'react-router-dom'
import Layout from '../components/Layout'

function NotFound() {
  return (
    <Layout>
      <div className="flex flex-1 flex-col items-center justify-center gap-3 p-6 text-center">
        <span className="text-5xl">📷</span>
        <h1 className="text-4xl font-bold sm:text-5xl">404</h1>
        <p className="text-zinc-500 dark:text-zinc-400">Ops, essa página não existe.</p>
        <Link
          to="/"
          className="mt-2 rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700 dark:bg-indigo-400 dark:text-zinc-900 dark:hover:bg-indigo-300"
        >
          Voltar para o início
        </Link>
      </div>
    </Layout>
  )
}

export default NotFound
