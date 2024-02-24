import { Helmet } from 'react-helmet-async'

import { Table } from '~/components/ui/table'

import { TableFilters } from './components/filters'
import { TableHead } from './components/head'
import { TableRow } from './components/row'

export const Orders = () => {
  return (
    <>
      <Helmet title="Pedidos" />
      <main className="flex flex-col gap-4 p-6">
        <header className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-primary">Pedidos</h1>
          <div className="space-y-3">
            <TableFilters />
          </div>
        </header>
        <div className="rounded border">
          <Table>
            <Table.Header>
              <TableHead />
            </Table.Header>
            <Table.Body>
              {Array.from({ length: 10 }).map((_, index) => (
                <TableRow key={index} />
              ))}
            </Table.Body>
          </Table>
        </div>
      </main>
    </>
  )
}
