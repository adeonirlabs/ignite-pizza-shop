import { Helmet } from 'react-helmet-async'
import { useSearchParams } from 'react-router-dom'
import { z } from 'zod'

import { useOrdersQuery } from '~/api/orders'
import { Pagination } from '~/components/pagination'
import { Table } from '~/components/ui/table'

import { TableFilters } from './components/filters'
import { TableHead } from './components/head'
import { TableRow } from './components/row'

export const Orders = () => {
  const [params, setParams] = useSearchParams()

  const pageIndex = z.coerce
    .number()
    .transform((value: number) => value - 1)
    .parse(params.get('page') ?? '1')

  const { data: result } = useOrdersQuery({ pageIndex })

  const handlePageChange = (page: number) => {
    setParams({ page: String(page + 1) })
  }

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
        {result ? (
          <Pagination
            onPageChange={handlePageChange}
            pageIndex={result.meta.pageIndex}
            perPage={result.meta.perPage}
            totalCount={result.meta.totalCount}
          />
        ) : null}
      </section>
    </>
  )
}
