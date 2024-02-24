import { Ban, Check, FolderSearch } from 'lucide-react'

import { Button } from '~/components/ui/button'
import { Table } from '~/components/ui/table'
import { Tooltip } from '~/components/ui/tooltip'

import { OrderStatus } from './status'

export const TableRow = () => {
  return (
    <Table.Row>
      <Table.Cell>
        <Tooltip>
          <Tooltip.Trigger asChild>
            <Button aria-label="Detalhes do pedido" size="icon-xs" variant="outline">
              <FolderSearch className="size-4" />
            </Button>
          </Tooltip.Trigger>
          <Tooltip.Content>Detalhes do pedido</Tooltip.Content>
        </Tooltip>
      </Table.Cell>
      <Table.Cell className="w-32 font-mono text-xs">c029r7k9n0000gn8k4ar70sze</Table.Cell>
      <Table.Cell>há 3 dias</Table.Cell>
      <Table.Cell>
        <OrderStatus />
      </Table.Cell>
      <Table.Cell className="font-medium">João da Silva</Table.Cell>
      <Table.Cell className="font-medium">R$ 123,00</Table.Cell>
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
