import { Helmet } from 'react-helmet-async'
import { useSearchParams } from 'react-router-dom'
import { z } from 'zod'

import { useOrdersQuery } from '~/api/orders'
import type { Status } from '~/api/orders/types'
import { Pagination } from '~/components/pagination'
import { Table } from '~/components/ui/table'

import { TableFilters } from './components/filters'
import { TableHead } from './components/head'
import { TableRow } from './components/row'
import { TableSkeleton } from './components/table-skeleton'

export const Orders = () => {
  const [params, setParams] = useSearchParams()

  const orderId = params.get('orderId') ?? ''
  const customerName = params.get('customerName') ?? ''
  const status = (params.get('status') as Status | null) ?? 'all'

  const pageIndex = z.coerce
    .number()
    .transform((value: number) => value - 1)
    .parse(params.get('page') ?? '1')

  const { data, isLoading } = useOrdersQuery({ pageIndex, orderId, customerName, status })

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
          <Table.Body>
            {isLoading ? <TableSkeleton /> : null}
            {data?.orders.map((order) => <TableRow key={order.orderId} order={order} />)}
          </Table.Body>
        </Table>
        {data ? (
          <Pagination
            onPageChange={handlePageChange}
            pageIndex={data.meta.pageIndex}
            perPage={data.meta.perPage}
            totalCount={data.meta.totalCount}
          />
        ) : null}
      </section>
    </>
  )
}
