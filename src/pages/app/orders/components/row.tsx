import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Ban, Check, FolderSearch } from 'lucide-react'

import { useOrderCancelMutation } from '~/api/orders'
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
  const { mutateAsync } = useOrderCancelMutation()

  const handleCancel = async () => {
    await mutateAsync({ id: order.orderId })
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
      <Table.Cell className="flex items-center gap-2">
        <Tooltip>
          <Tooltip.Trigger asChild>
            <Button aria-label="Confirmar pedido" size="icon-xs" variant="outline">
              <Check className="size-4" />
            </Button>
          </Tooltip.Trigger>
          <Tooltip.Content>Confirmar pedido</Tooltip.Content>
        </Tooltip>
        <Tooltip>
          <Tooltip.Trigger asChild>
            <Button
              aria-label="Cancelar pedido"
              disabled={!['pending', 'processing'].includes(order.status)}
              onClick={handleCancel}
              size="icon-xs"
              variant="outline"
            >
              <Ban className="size-4" />
            </Button>
          </Tooltip.Trigger>
          <Tooltip.Content>Cancelar pedido</Tooltip.Content>
        </Tooltip>
      </Table.Cell>
    </Table.Row>
  )
}
