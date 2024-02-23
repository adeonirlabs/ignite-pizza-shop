import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import { sleep } from '~/lib/utils'
import type { SignInType } from '~/schemas/sign-in'
import { signInSchema } from '~/schemas/sign-in'

export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { isValid, isSubmitting },
  } = useForm<SignInType>({
    resolver: zodResolver(signInSchema),
  })

  const handleSignIn = handleSubmit(async (data) => {
    try {
      await sleep()
      console.info(data)
      toast.success('Enviamos um link de autenticação para seu email!')
    } catch {
      toast.error('Credenciais inválidas, tente novamente!')
    }
  })

  return (
    <>
      <Helmet title="Login" />
      <section className="flex w-full max-w-80 flex-col justify-center gap-6">
        <header className="space-y-2 text-center">
          <h1 className="text-2xl font-semibold">Acessar o painel</h1>
          <p className="text-sm text-muted-foreground">Acompanhe suas vendas pelo painel do parceiro!</p>
        </header>
        <form className="space-y-4" onSubmit={handleSignIn}>
          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <Input id="email" placeholder="Seu e-mail" type="email" {...register('email')} />
          </div>

          <Button className="w-full" disabled={!isValid || isSubmitting} type="submit">
            {isSubmitting ? <Loader2 className="animate-spin" /> : 'Entrar'}
          </Button>
        </form>
      </section>
    </>
  )
}
