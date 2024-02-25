import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-2">
      <span className="text-9xl text-blue-700/20 dark:text-blue-300/10">404</span>
      <h1 className="text-3xl font-bold">Página não encontrada</h1>
      <p className="text-accent-foreground">
        Voltar para o{' '}
        <Link className="text-blue-500 dark:text-blue-400" to="/">
          dashboard
        </Link>
        .
      </p>
    </div>
  )
}
