/* eslint-disable react/no-array-index-key */

import { Skeleton } from '~/components/ui/skeleton'
import { Table } from '~/components/ui/table'

export const TableSkeleton = () => {
  return Array.from({ length: 10 }).map((_, index) => (
    <Table.Row key={index}>
      <Table.Cell>
        <Skeleton className="size-8" />
      </Table.Cell>
      <Table.Cell>
        <Skeleton className="h-4 w-44" />
      </Table.Cell>
      <Table.Cell>
        <Skeleton className="h-4 w-24" />
      </Table.Cell>
      <Table.Cell>
        <Skeleton className="h-4 w-20" />
      </Table.Cell>
      <Table.Cell>
        <Skeleton className="h-4 w-56" />
      </Table.Cell>
      <Table.Cell>
        <Skeleton className="h-4 w-16" />
      </Table.Cell>
      <Table.Cell className="flex items-center justify-end gap-2">
        <Skeleton className="h-8 w-20" />
        <Skeleton className="h-8 w-20" />
      </Table.Cell>
    </Table.Row>
  ))
}
