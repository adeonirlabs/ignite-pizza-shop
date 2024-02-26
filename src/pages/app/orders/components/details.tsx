import { Dialog } from '~/components/ui/dialog'
import { Table } from '~/components/ui/table'

import { OrderStatus } from './status'

export const OrderDetails = () => {
  return (
    <>
      <Dialog.Header>
        <Dialog.Title>Detalhes do pedido</Dialog.Title>
        <Dialog.Description>Nº: c029r7k9n0000gn8k4ar70sze</Dialog.Description>
      </Dialog.Header>
      <Dialog.Body className="space-y-4">
        <div className="rounded border">
          <Table>
            <Table.Body>
              <Table.Row>
                <Table.Cell className="py-2 text-muted-foreground">Cliente</Table.Cell>
                <Table.Cell className="flex justify-end py-2">Adeonir Kohl</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell className="py-2 text-muted-foreground">Telefone</Table.Cell>
                <Table.Cell className="flex justify-end py-2">(00) 00000-0000</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell className="py-2 text-muted-foreground">E-mail</Table.Cell>
                <Table.Cell className="flex justify-end py-2">adeonir@gmail.com</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell className="py-2 text-muted-foreground">Status</Table.Cell>
                <Table.Cell className="flex justify-end py-2">
                  <OrderStatus />
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
              <Table.Row>
                <Table.Cell>Pizza</Table.Cell>
                <Table.Cell className="w-40 text-right">5</Table.Cell>
                <Table.Cell className="w-40 text-right">R$ 25,00</Table.Cell>
                <Table.Cell className="w-40 text-right">R$ 125,00</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Pizza</Table.Cell>
                <Table.Cell className="w-40 text-right">5</Table.Cell>
                <Table.Cell className="w-40 text-right">R$ 25,00</Table.Cell>
                <Table.Cell className="w-40 text-right">R$ 125,00</Table.Cell>
              </Table.Row>
            </Table.Body>
            <Table.Footer>
              <Table.Row>
                <Table.Cell colSpan={3}>Total do pedido</Table.Cell>
                <Table.Cell className="w-40 text-right font-bold">R$ 250,00</Table.Cell>
              </Table.Row>
            </Table.Footer>
          </Table>
        </div>
      </Dialog.Body>
    </>
  )
}
