import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'

import { useSignInQuery } from '~/api/sign-in'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import type { SignInType } from '~/schemas/sign-in'
import { signInSchema } from '~/schemas/sign-in'

export const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid, isSubmitting },
  } = useForm<SignInType>({
    resolver: zodResolver(signInSchema),
  })

  const { mutateAsync: signIn } = useSignInQuery()

  const handleSignIn = handleSubmit(async (data) => {
    const { email } = data

    try {
      await signIn({ email })
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
      <Button asChild className="absolute right-4 top-4" size="sm" variant="ghost">
        <Link to="/sign-up">Fazer cadastro</Link>
      </Button>
    </>
  )
}
