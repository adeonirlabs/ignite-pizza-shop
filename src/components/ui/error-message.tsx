import type { ComponentProps } from 'react'

import { cn } from '~/lib/utils'

type ErrorMessageProps = ComponentProps<'span'>

const ErrorMessage = ({ className, ...props }: ErrorMessageProps) => {
  return <span className={cn('mt-1 text-xs text-destructive', className)} {...props} />
}

export { ErrorMessage }
