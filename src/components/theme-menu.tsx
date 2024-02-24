import { Moon, Sun } from 'lucide-react'

import { useTheme } from '~/providers/theme'

import { Button } from './ui/button'
import { DropdownMenu } from './ui/dropdown-menu'

export const ThemeMenu = () => {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild>
        <Button size="icon" variant="outline">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Trocar tema</span>
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item
          onClick={() => {
            setTheme('light')
          }}
        >
          Light
        </DropdownMenu.Item>
        <DropdownMenu.Item
          onClick={() => {
            setTheme('dark')
          }}
        >
          Dark
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu>
  )
}
