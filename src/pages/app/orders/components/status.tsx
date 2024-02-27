import type { Status } from '~/api/orders/types'
import { cn } from '~/lib/utils'

interface OrderStatusProps {
  status: Status
}

const statusMap: Record<Status, { label: string; color: string }> = {
  pending: { label: 'Pendente', color: 'bg-gray-400' },
  canceled: { label: 'Cancelado', color: 'bg-red-400' },
  processing: { label: 'Em preparo', color: 'bg-yellow-400' },
  delivering: { label: 'Em entrega', color: 'bg-green-400' },
  delivered: { label: 'Entregue', color: 'bg-blue-400' },
}

export const OrderStatus = ({ status }: OrderStatusProps) => {
  return (
    <div className="flex items-center gap-2">
      <span className={cn('size-2 rounded-full', statusMap[status].color)} />
      <span>{statusMap[status].label}</span>
    </div>
  )
}
