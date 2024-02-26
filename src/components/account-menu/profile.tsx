import { Button } from '../ui/button'
import { Dialog } from '../ui/dialog'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Textarea } from '../ui/textarea'

export const ProfileDialog = () => {
  return (
    <>
      <Dialog.Header>
        <Dialog.Title>Perfil do estabelecimento</Dialog.Title>
        <Dialog.Description>Mantenha suas informações atualizadas</Dialog.Description>
      </Dialog.Header>
      <Dialog.Body>
        <form className="gap-4 space-y-4" id="profile">
          <div className="grid grid-cols-4 gap-4">
            <Label className="mt-2 text-right" htmlFor="name">
              Nome
            </Label>
            <Input className="col-span-3" id="name" />
          </div>
          <div className="grid grid-cols-4 gap-4">
            <Label className="mt-2 text-right" htmlFor="description">
              Descrição
            </Label>
            <Textarea className="col-span-3" id="description" />
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
