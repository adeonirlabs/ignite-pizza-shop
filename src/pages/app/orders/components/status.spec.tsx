import type { Status } from '~/api/orders/types'
import { render, screen } from '~/lib/tests'

import { OrderStatus } from './status'

describe('Order Status', () => {
  const testCases = [
    { status: 'pending', text: 'Pendente', className: 'bg-gray-400' },
    { status: 'canceled', text: 'Cancelado', className: 'bg-red-400' },
    { status: 'processing', text: 'Em preparo', className: 'bg-yellow-400' },
    { status: 'delivering', text: 'Em entrega', className: 'bg-green-400' },
    { status: 'delivered', text: 'Entregue', className: 'bg-blue-400' },
  ]

  testCases.forEach(({ status, text, className }) => {
    it(`should render correctly for ${status} status`, () => {
      render(<OrderStatus status={status as Status} />)
      expect(screen.getByText(text)).toBeInTheDocument()
      expect(screen.getByRole('presentation')).toHaveClass(className)
    })
  })
})
