/* eslint-disable jsx-a11y/heading-has-content */
import type { HTMLAttributes } from 'react'
import { forwardRef } from 'react'

import { cn } from '~/lib/utils'

const Root = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div className={cn('rounded-lg border bg-card text-card-foreground shadow-sm', className)} ref={ref} {...props} />
))

Root.displayName = 'Card'

const Header = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div className={cn('flex flex-col p-4', className)} ref={ref} {...props} />
))

Header.displayName = 'CardHeader'

const Title = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLHeadingElement>>(({ className, ...props }, ref) => (
  <h3 className={cn('text-2xl font-semibold leading-none tracking-tight', className)} ref={ref} {...props} />
))

Title.displayName = 'CardTitle'

const Description = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p className={cn('text-sm text-muted-foreground', className)} ref={ref} {...props} />
  ),
)

Description.displayName = 'CardDescription'

const Content = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div className={cn('p-4 pt-0', className)} ref={ref} {...props} />
))

Content.displayName = 'CardContent'

const Footer = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div className={cn('flex items-center p-4 pt-0', className)} ref={ref} {...props} />
))

Footer.displayName = 'CardFooter'

export const Card = Object.assign(Root, {
  Header,
  Title,
  Description,
  Content,
  Footer,
})
