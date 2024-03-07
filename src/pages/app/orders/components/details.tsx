import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { useOrderDetailsQuery } from '~/api/orders'
import { Dialog } from '~/components/ui/dialog'
import { Table } from '~/components/ui/table'
import { convertCurrency } from '~/lib/utils'

import { OrderStatus } from './status'

interface OrderDetailsProps {
  orderId: string
}

export const OrderDetails = ({ orderId }: OrderDetailsProps) => {
  const { data: order } = useOrderDetailsQuery(orderId)

  if (!order) return null

  return (
    <>
      <Dialog.Header>
        <Dialog.Title>Detalhes do pedido</Dialog.Title>
        <Dialog.Description>Nº: {order.id}</Dialog.Description>
      </Dialog.Header>
      <Dialog.Body className="space-y-4">
        <div className="rounded border">
          <Table>
            <Table.Body>
              <Table.Row>
                <Table.Cell className="py-2 text-muted-foreground">Cliente</Table.Cell>
                <Table.Cell className="flex justify-end py-2">{order.customer.name}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell className="py-2 text-muted-foreground">Telefone</Table.Cell>
                <Table.Cell className="flex justify-end py-2">{order.customer.phone ?? 'Não informado'}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell className="py-2 text-muted-foreground">E-mail</Table.Cell>
                <Table.Cell className="flex justify-end py-2">{order.customer.email}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell className="py-2 text-muted-foreground">Realizado</Table.Cell>
                <Table.Cell className="flex justify-end py-2">
                  {formatDistanceToNow(new Date(order.createdAt), { addSuffix: true, locale: ptBR })}
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell className="py-2 text-muted-foreground">Status</Table.Cell>
                <Table.Cell className="flex justify-end py-2">
                  <OrderStatus status={order.status} />
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
        <div className="rounded border">
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.Head>Produto</Table.Head>
                <Table.Head className="w-40 text-right">Qtd.</Table.Head>
                <Table.Head className="w-40 text-right">Preço</Table.Head>
                <Table.Head className="w-40 text-right">Total</Table.Head>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {order.orderItems.map((item) => (
                <Table.Row key={item.id}>
                  <Table.Cell>{item.product.name}</Table.Cell>
                  <Table.Cell className="w-40 text-right">{item.quantity}</Table.Cell>
                  <Table.Cell className="w-40 text-right">{convertCurrency(item.priceInCents)}</Table.Cell>
                  <Table.Cell className="w-40 text-right">
                    {convertCurrency(item.priceInCents * item.quantity)}
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
            <Table.Footer>
              <Table.Row>
                <Table.Cell colSpan={3}>Total do pedido</Table.Cell>
                <Table.Cell className="w-40 text-right font-bold">{convertCurrency(order.totalInCents)}</Table.Cell>
              </Table.Row>
            </Table.Footer>
          </Table>
        </div>
      </Dialog.Body>
    </>
  )
}
