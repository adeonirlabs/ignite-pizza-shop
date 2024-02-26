import { Building, ChevronDown, LogOut, User } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

import { useProfileQuery } from '~/api/profile'
import { useRestaurantQuery } from '~/api/restaurant'
import { useSignOutMutation } from '~/api/sign-out'

import { Button } from '../ui/button'
import { Dialog } from '../ui/dialog'
import { DropdownMenu } from '../ui/dropdown-menu'
import { Skeleton } from '../ui/skeleton'
import { ProfileDialog } from './profile'

export const AccountMenu = () => {
  const navigate = useNavigate()

  const { data: profile, isLoading: isProfileLoading } = useProfileQuery()
  const { data: restaurant, isLoading: isRestaurantLoading } = useRestaurantQuery()
  const { mutateAsync: signOut } = useSignOutMutation()

  const handleSignOut = async () => {
    await signOut().then(() => {
      navigate('/sign-in', { replace: true })
    })
  }

  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenu.Trigger asChild>
          <Button className="flex select-none items-center gap-2" variant="outline">
            {isRestaurantLoading ? <Skeleton className="h-4 w-24" /> : restaurant?.name}
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
          <DropdownMenu.Item asChild className="">
            <button className="w-full !text-destructive" onClick={handleSignOut} type="button">
              <LogOut className="mr-2 size-4" />
              Sair
            </button>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu>
      <Dialog.Content>
        <ProfileDialog />
      </Dialog.Content>
    </Dialog>
  )
}
