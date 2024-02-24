import { Building, ChevronDown, LogOut, User } from 'lucide-react'

import { Button } from './ui/button'
import { DropdownMenu } from './ui/dropdown-menu'

export const AccountMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild>
        <Button className="flex select-none items-center gap-2" variant="outline">
          Pizza Shop
          <ChevronDown className="size-4" />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content align="end" className="min-w-48 max-w-72">
        <DropdownMenu.Label className="flex items-center">
          <User className="mr-2 size-4" />
          <div className="flex flex-col">
            <span>Adeonir Kohl</span>
            <span className="truncate text-xs font-normal text-muted-foreground">adeonir@gmail.com</span>
          </div>
        </DropdownMenu.Label>
        <DropdownMenu.Separator />
        <DropdownMenu.Item>
          <Building className="mr-2 size-4" />
          Perfil
        </DropdownMenu.Item>
        <DropdownMenu.Item className="text-rose-500 dark:text-rose-400">
          <LogOut className="mr-2 size-4" />
          Sair
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu>
  )
}
