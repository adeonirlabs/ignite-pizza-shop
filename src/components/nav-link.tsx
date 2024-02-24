import type { LinkProps } from 'react-router-dom'
import { Link, useLocation } from 'react-router-dom'

import { cn } from '~/lib/utils'

export const NavLink = (props: LinkProps) => {
  const { pathname } = useLocation()

  return (
    <Link
      className={cn(
        'flex items-center gap-2 text-muted-foreground transition hover:text-primary data-[active=true]:text-foreground',
      )}
      data-active={pathname === props.to}
      {...props}
    />
  )
}
