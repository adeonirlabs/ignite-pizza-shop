/* eslint-disable react/no-array-index-key */
import { Skeleton } from '~/components/ui/skeleton'
import { Table } from '~/components/ui/table'

export const DetailsSkeleton = () => {
  return (
    <>
      <div className="rounded border">
        <Table>
          <Table.Body>
            <Table.Row>
              <Table.Cell className="py-2 text-muted-foreground">Cliente</Table.Cell>
              <Table.Cell className="flex justify-end py-2">
                <Skeleton className="h-4 w-44" />
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell className="py-2 text-muted-foreground">Telefone</Table.Cell>
              <Table.Cell className="flex justify-end py-2">
                <Skeleton className="h-4 w-32" />
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell className="py-2 text-muted-foreground">E-mail</Table.Cell>
              <Table.Cell className="flex justify-end py-2">
                <Skeleton className="h-4 w-48" />
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell className="py-2 text-muted-foreground">Realizado</Table.Cell>
              <Table.Cell className="flex justify-end py-2">
                <Skeleton className="h-4 w-40" />
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell className="py-2 text-muted-foreground">Status</Table.Cell>
              <Table.Cell className="flex justify-end py-2">
                <Skeleton className="h-4 w-20" />
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
      <div className="rounded border">
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.Head className="w-full">Produto</Table.Head>
              <Table.Head className="w-28 text-right">Qtd.</Table.Head>
              <Table.Head className="w-28 text-right">Preço</Table.Head>
              <Table.Head className="w-28 text-right">Total</Table.Head>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {Array.from({ length: 2 }).map((_, index) => (
              <Table.Row key={index}>
                <Table.Cell>
                  <Skeleton className="h-4 w-48" />
                </Table.Cell>
                <Table.Cell>
                  <Skeleton className="ml-auto h-4 w-4" />
                </Table.Cell>
                <Table.Cell>
                  <Skeleton className="ml-auto h-4 w-12" />
                </Table.Cell>
                <Table.Cell>
                  <Skeleton className="ml-auto h-4 w-12" />
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
          <Table.Footer>
            <Table.Row>
              <Table.Cell colSpan={3}>Total do pedido</Table.Cell>
              <Table.Cell>
                <Skeleton className="ml-auto h-4 w-20" />
              </Table.Cell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </div>
    </>
  )
}
