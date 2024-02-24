import { Table } from '~/components/ui/table'

export const TableHead = () => {
  return (
    <Table.Row>
      <Table.Head className="w-16" />
      <Table.Head className="w-32">Id</Table.Head>
      <Table.Head className="w-36">Realizado</Table.Head>
      <Table.Head className="w-36">Status</Table.Head>
      <Table.Head className="min-w-48">Cliente</Table.Head>
      <Table.Head className="w-36">Total</Table.Head>
      <Table.Head className="w-28">Actions</Table.Head>
    </Table.Row>
  )
}
