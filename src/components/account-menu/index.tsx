import { Building, ChevronDown, LogOut, User } from 'lucide-react'

import { useManagedRestaurantQuery } from '~/api/managed-restaurant'
import { useProfileQuery } from '~/api/profile'

import { Button } from '../ui/button'
import { Dialog } from '../ui/dialog'
import { DropdownMenu } from '../ui/dropdown-menu'
import { Skeleton } from '../ui/skeleton'
import { ProfileDialog } from './profile'

export const AccountMenu = () => {
  const { data: profile, isLoading: isProfileLoading } = useProfileQuery()
  const { data: managedRestaurant, isLoading: isManagedRestaurantLoading } = useManagedRestaurantQuery()

  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenu.Trigger asChild>
          <Button className="flex select-none items-center gap-2" variant="outline">
            {isManagedRestaurantLoading ? <Skeleton className="h-4 w-24" /> : managedRestaurant?.name}
            <ChevronDown className="size-4" />
          </Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content align="end" className="min-w-48 max-w-72">
          <DropdownMenu.Label className="flex items-center">
            <User className="mr-2 size-4" />
            {isProfileLoading ? (
              <div className="flex flex-col gap-1.5">
                <Skeleton className="mt-0.5 h-4 w-24" />
                <Skeleton className="h-3 w-32" />
              </div>
            ) : (
              <div className="flex flex-col gap-1">
                <span>{profile?.name}</span>
                <span className="truncate text-xs font-normal text-muted-foreground">{profile?.email}</span>
              </div>
            )}
          </DropdownMenu.Label>
          <DropdownMenu.Separator />
          <Dialog.Trigger asChild>
            <DropdownMenu.Item>
              <Building className="mr-2 size-4" />
              Perfil
            </DropdownMenu.Item>
          </Dialog.Trigger>
          <DropdownMenu.Item className="text-rose-500 dark:text-rose-400">
            <LogOut className="mr-2 size-4" />
            Sair
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu>
      <Dialog.Content>
        <ProfileDialog />
      </Dialog.Content>
    </Dialog>
  )
}
