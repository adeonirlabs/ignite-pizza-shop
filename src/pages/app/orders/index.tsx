import { Helmet } from 'react-helmet-async'

import { useOrdersQuery } from '~/api/orders'
import { Pagination } from '~/components/pagination'
import { Table } from '~/components/ui/table'

import { TableFilters } from './components/filters'
import { TableHead } from './components/head'
import { TableRow } from './components/row'

export const Orders = () => {
  const { data: result } = useOrdersQuery()

  return (
    <>
      <Helmet title="Pedidos" />
      <header className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Pedidos</h1>
        <div className="space-y-3">
          <TableFilters />
        </div>
      </header>
      <section className="rounded border">
        <Table>
          <Table.Header>
            <TableHead />
          </Table.Header>
          <Table.Body>{result?.orders.map((order) => <TableRow key={order.orderId} order={order} />)}</Table.Body>
        </Table>
        <Pagination currentPage={1} perPage={10} totalCount={100} />
      </section>
    </>
  )
}
