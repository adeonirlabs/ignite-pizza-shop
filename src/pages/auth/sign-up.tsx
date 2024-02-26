import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

import { useSignUpMutation } from '~/api/sign-up'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import type { SignUpType } from '~/schemas/sign-up'
import { signUpSchema } from '~/schemas/sign-up'

export const SignUp = () => {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { isValid, isSubmitting },
  } = useForm<SignUpType>({
    resolver: zodResolver(signUpSchema),
  })

  const { mutateAsync: signUp } = useSignUpMutation()

  const handleSignUp = handleSubmit(async (data) => {
    const { company, email, manager, phone } = data

    try {
      await signUp({ restaurantName: company, email, managerName: manager, phone })
      toast.success('Estabelecimento cadastrado com sucesso!', {
        action: {
          label: 'Login',
          onClick: () => {
            navigate(`/sign-in?email=${email}`)
          },
        },
      })
    } catch {
      toast.error('Erro ao cadastrar estabelecimento!')
    }
  })

  return (
    <>
      <Helmet title="Cadastro" />
      <section className="flex w-full max-w-80 flex-col justify-center gap-6">
        <header className="space-y-2 text-center">
          <h1 className="text-2xl font-semibold">Criar conta</h1>
          <p className="text-sm text-muted-foreground">Seja um parceiro e compartilhe seu negócio!</p>
        </header>
        <form className="space-y-4" onSubmit={handleSignUp}>
          <div className="space-y-2">
            <Label htmlFor="text">Estabelecimento</Label>
            <Input id="text" placeholder="Nome do estabelecimento" type="text" {...register('company')} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="text">Gerente</Label>
            <Input id="text" placeholder="Nome do gerente" type="text" {...register('manager')} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="text">E-mail</Label>
            <Input id="text" placeholder="Seu telefone" type="text" {...register('email')} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Telefone</Label>
            <Input id="phone" placeholder="Seu telefone" type="tel" {...register('phone')} />
          </div>

          <Button className="w-full" disabled={!isValid || isSubmitting} type="submit">
            {isSubmitting ? <Loader2 className="animate-spin" /> : 'Cadastrar'}
          </Button>

          <p className="text-center text-xs text-muted-foreground">
            <span className="block">Ao continuar, você concorda com nossos</span>
            <Link className="hover:underline hover:underline-offset-2" to="">
              Termos de Uso
            </Link>
            <span> e </span>
            <Link className="hover:underline hover:underline-offset-2" to="">
              Política de Privacidade
            </Link>
          </p>
        </form>
      </section>
      <Button asChild className="absolute right-4 top-4" size="sm" variant="ghost">
        <Link to="/sign-in">Fazer login</Link>
      </Button>
    </>
  )
}
