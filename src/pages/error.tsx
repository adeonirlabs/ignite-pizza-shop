import { Link, useRouteError } from 'react-router-dom'

export const Error = () => {
  const error = useRouteError() as Error

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-2">
      <span className="text-9xl text-red-700/20 dark:text-red-300/10">Error</span>
      <h1 className="text-3xl font-bold">Houston, nós temos um problema!</h1>
      <p className="text-accent-foreground">Aconteceu um erro na aplicação, veja mais detalhes abaixo:</p>

      {/* This error should be sent to Sentry or something like that */}
      <pre className="my-4 w-full max-w-3xl rounded bg-muted p-4 text-accent-foreground">
        <code>{error.message || JSON.stringify(error.message, null, 2)}</code>
      </pre>

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
