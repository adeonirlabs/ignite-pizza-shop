import { Helmet } from 'react-helmet-async'

import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'

export function SignIn() {
  return (
    <>
      <Helmet title="Sign In" />
      <section className="flex w-full max-w-80 flex-col justify-center gap-6">
        <header className="space-y-2 text-center">
          <h1 className="text-2xl font-semibold">Acessar o painel</h1>
          <p className="text-sm text-muted-foreground">Acompanhe suas vendas pelo painel do parceiro!</p>
        </header>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <Input id="email" placeholder="Seu e-mail" type="email" />
          </div>

          <Button className="w-full" type="submit">
            Entrar
          </Button>
        </form>
      </section>
    </>
  )
}
