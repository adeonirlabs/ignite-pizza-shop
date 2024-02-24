import { Home, Pizza, UtensilsCrossed } from 'lucide-react'
import type { ComponentProps } from 'react'

import { cn } from '~/lib/utils'

import { AccountMenu } from './account-menu'
import { NavLink } from './nav-link'
import { ThemeMenu } from './theme-menu'
import { Separator } from './ui/separator'

const links = [
  {
    href: '/',
    label: 'Início',
    icon: <Home className="size-5" />,
  },
  {
    href: '/orders',
    label: 'Pedidos',
    icon: <UtensilsCrossed className="size-5" />,
  },
]

const Header = ({ className, ...props }: ComponentProps<'header'>) => {
  return (
    <header className={cn('border-b bg-muted-foreground/5', className)} {...props}>
      <div className="flex h-16 items-center gap-6 px-6">
        <Pizza className="size-6" />
        <Separator className="h-8" orientation="vertical" />
        <nav className="flex items-center gap-6">
          {links.map(({ href, label, icon }) => (
            <NavLink key={href} to={href}>
              {icon}
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-4">
          <ThemeMenu />
          <AccountMenu />
        </div>
      </div>
    </header>
  )
}

export { Header }
