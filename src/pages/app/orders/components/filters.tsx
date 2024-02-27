import { Search, X } from 'lucide-react'

import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import { Select } from '~/components/ui/select'
import { Tooltip } from '~/components/ui/tooltip'

const items = [
  {
    value: 'all',
    label: 'Todos',
  },
  {
    value: 'pending',
    label: 'Pendente',
  },
  {
    value: 'canceled',
    label: 'Cancelado',
  },
  {
    value: 'processing',
    label: 'Em preparo',
  },
  {
    value: 'delivering',
    label: 'Em entrega',
  },
  {
    value: 'delivered',
    label: 'Entregue',
  },
]

export const TableFilters = () => {
  return (
    <form className="flex items-center gap-2">
      <Label className="text-sm font-semibold">Filtros:</Label>
      <Input className="h-8 w-64" placeholder="Pesquisar..." type="text" />
      <Select defaultValue="all">
        <Select.Trigger className="h-8 w-40">
          <Select.Value />
        </Select.Trigger>
        <Select.Content>
          {items.map(({ label, value }) => (
            <Select.Item key={value} value={value}>
              {label}
            </Select.Item>
          ))}
        </Select.Content>
      </Select>
      <Tooltip>
        <Tooltip.Trigger asChild>
          <Button aria-label="Pesquisar resultados" size="icon-xs" variant="outline">
            <Search className="size-4" />
          </Button>
        </Tooltip.Trigger>
        <Tooltip.Content>Pesquisar resultados</Tooltip.Content>
      </Tooltip>
      <Tooltip>
        <Tooltip.Trigger asChild>
          <Button aria-label="Limpar filtros" size="icon-xs" variant="outline">
            <X className="size-4" />
          </Button>
        </Tooltip.Trigger>
        <Tooltip.Content>Limpar filtros</Tooltip.Content>
      </Tooltip>
    </form>
  )
}
