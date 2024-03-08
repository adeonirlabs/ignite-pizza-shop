import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { FolderSearch } from 'lucide-react'

import {
  useOrderApproveMutation,
  useOrderCancelMutation,
  useOrderDeliverMutation,
  useOrderDispatchMutation,
} from '~/api/orders'
import type { Order } from '~/api/orders/types'
import { Button } from '~/components/ui/button'
import { Dialog } from '~/components/ui/dialog'
import { Table } from '~/components/ui/table'
import { Tooltip } from '~/components/ui/tooltip'
import { convertCurrency } from '~/lib/utils'

import { OrderDetails } from './details'
import { OrderStatus } from './status'

interface TableRowProps {
  order: Order
}

export const TableRow = ({ order }: TableRowProps) => {
  const { mutateAsync: cancel, isPending: isCanceling } = useOrderCancelMutation()
  const { mutateAsync: approve, isPending: isApproving } = useOrderApproveMutation()
  const { mutateAsync: dispatch, isPending: isDispatching } = useOrderDispatchMutation()
  const { mutateAsync: deliver, isPending: isDelivering } = useOrderDeliverMutation()

  const handleCancel = async () => {
    await cancel({ id: order.orderId })
  }

  const handleApprove = async () => {
    await approve({ id: order.orderId })
  }

  const handleDispatch = async () => {
    await dispatch({ id: order.orderId })
  }

  const handleDeliver = async () => {
    await deliver({ id: order.orderId })
  }

  return (
    <Table.Row>
      <Table.Cell>
        <Dialog>
          <Tooltip>
            <Dialog.Trigger asChild>
              <Tooltip.Trigger asChild>
                <Button aria-label="Detalhes do pedido" size="icon-xs" variant="outline">
                  <FolderSearch className="size-4" />
                </Button>
              </Tooltip.Trigger>
            </Dialog.Trigger>
            <Dialog.Content className="max-w-2xl">
              <OrderDetails orderId={order.orderId} />
            </Dialog.Content>
            <Tooltip.Content>Detalhes do pedido</Tooltip.Content>
          </Tooltip>
        </Dialog>
      </Table.Cell>
      <Table.Cell className="w-32 font-mono text-xs">{order.orderId}</Table.Cell>
      <Table.Cell>{formatDistanceToNow(new Date(order.createdAt), { addSuffix: true, locale: ptBR })}</Table.Cell>
      <Table.Cell>
        <OrderStatus status={order.status} />
      </Table.Cell>
      <Table.Cell className="font-medium">{order.customerName}</Table.Cell>
      <Table.Cell className="font-medium">{convertCurrency(order.total)}</Table.Cell>
      <Table.Cell className="flex w-52 items-center justify-end gap-2">
        {order.status === 'pending' && (
          <Button disabled={isApproving} onClick={handleApprove} size="xs" variant="outline">
            Aprovar
          </Button>
        )}
        {order.status === 'processing' && (
          <Button disabled={isDispatching} onClick={handleDispatch} size="xs" variant="outline">
            Entregar
          </Button>
        )}
        {order.status === 'delivering' && (
          <Button disabled={isDelivering} onClick={handleDeliver} size="xs" variant="outline">
            Entregue
          </Button>
        )}
        <Button
          disabled={!['pending', 'processing'].includes(order.status) || isCanceling}
          onClick={handleCancel}
          size="xs"
          variant="outline"
        >
          Cancelar
        </Button>
      </Table.Cell>
    </Table.Row>
  )
}
