import { Ban, Check, Search } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Table } from '~/components/ui/table'
import { Tooltip } from '~/components/ui/tooltip'

export const Orders = () => {
  return (
    <>
      <Helmet title="Pedidos" />
      <main className="flex flex-col gap-4 p-6">
        <header className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-primary">Pedidos</h1>
          <div className="space-y-3">
            <form className="flex items-center gap-2">
              <span className="text-sm font-semibold">Filtros</span>
              <Input className="h-8" placeholder="Pesquisar..." type="text" />
            </form>
          </div>
        </header>
        <div className="rounded border">
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.Head className="w-16" />
                <Table.Head className="w-32">Id</Table.Head>
                <Table.Head className="w-36">Realizado</Table.Head>
                <Table.Head className="w-36">Status</Table.Head>
                <Table.Head className="min-w-48">Cliente</Table.Head>
                <Table.Head className="w-36">Total</Table.Head>
                <Table.Head className="w-28">Actions</Table.Head>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {Array.from({ length: 10 }).map((_, index) => (
                <Table.Row key={index}>
                  <Table.Cell>
                    <Tooltip>
                      <Tooltip.Trigger asChild>
                        <Button aria-label="Detalhes do pedido" size="icon-xs" variant="outline">
                          <Search className="size-4" />
                        </Button>
                      </Tooltip.Trigger>
                      <Tooltip.Content>Detalhes do pedido</Tooltip.Content>
                    </Tooltip>
                  </Table.Cell>
                  <Table.Cell className="w-32 font-mono text-xs">
                    <span className="truncate">c029r7k9n0000gn8k4ar70sze</span>
                  </Table.Cell>
                  <Table.Cell>há 3 dias</Table.Cell>
                  <Table.Cell>
                    <div className="flex items-center gap-2">
                      <span className="size-2 rounded-full bg-zinc-400" />
                      <span>Pendente</span>
                    </div>
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
              ))}
            </Table.Body>
          </Table>
        </div>
      </main>
    </>
  )
}
