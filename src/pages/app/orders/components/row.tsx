import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Ban, Check, FolderSearch } from 'lucide-react'

import type { Order } from '~/api/orders/types'
import { Button } from '~/components/ui/button'
import { Dialog } from '~/components/ui/dialog'
import { Table } from '~/components/ui/table'
import { Tooltip } from '~/components/ui/tooltip'

import { OrderDetails } from './details'
import { OrderStatus } from './status'

interface TableRowProps {
  order: Order
}

export const TableRow = ({ order }: TableRowProps) => {
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
              <OrderDetails />
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
      <Table.Cell className="font-medium">
        {order.total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
      </Table.Cell>
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
            <Button aria-label="Cancelar pedido" size="icon-xs" variant="outline">
              <Ban className="size-4" />
            </Button>
          </Tooltip.Trigger>
          <Tooltip.Content>Cancelar pedido</Tooltip.Content>
        </Tooltip>
      </Table.Cell>
    </Table.Row>
  )
}
