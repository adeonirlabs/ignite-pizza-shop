import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { useRestaurantMutation, useRestaurantQuery } from '~/api/restaurant'
import type { ProfileType } from '~/schemas/profile'
import { profileSchema } from '~/schemas/profile'

import { Button } from '../ui/button'
import { Dialog } from '../ui/dialog'
import { ErrorMessage } from '../ui/error-message'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Textarea } from '../ui/textarea'

export const ProfileDialog = () => {
  const { data: restaurant } = useRestaurantQuery()
  const { mutateAsync: updateRestaurant } = useRestaurantMutation()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileType>({
    resolver: zodResolver(profileSchema),
    values: {
      name: restaurant?.name ?? '',
      description: restaurant?.description ?? '',
    },
  })

  const handleProfile = handleSubmit(async (data) => {
    const { name, description } = data

    try {
      await updateRestaurant({ name, description })
      toast.success('Perfil do estabelecimento atualizado com sucesso!')
    } catch {
      toast.error('Algo deu errado, tente novamente!')
    }
  })

  return (
    <>
      <Dialog.Header>
        <Dialog.Title>{restaurant?.name}</Dialog.Title>
        {restaurant?.description ? <Dialog.Description>{restaurant.description}</Dialog.Description> : null}
      </Dialog.Header>
      <Dialog.Body>
        <form className="gap-4 space-y-4" id="profile" onSubmit={handleProfile}>
          <div className="grid grid-cols-4 gap-4">
            <Label className="mt-2 text-right" htmlFor="name">
              Nome
            </Label>
            <div className="col-span-3">
              <Input {...register('name')} />
              {errors.name ? <ErrorMessage>{errors.name.message}</ErrorMessage> : null}
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <Label className="mt-2 text-right" htmlFor="description">
              Descrição
            </Label>
            <Textarea className="col-span-3" rows={5} {...register('description')} />
          </div>
        </form>
      </Dialog.Body>
      <Dialog.Footer>
        <Dialog.Close asChild>
          <Button type="button" variant="outline">
            Cancelar
          </Button>
        </Dialog.Close>
        <Button form="profile" type="submit" variant="success">
          Salvar
        </Button>
      </Dialog.Footer>
    </>
  )
}
