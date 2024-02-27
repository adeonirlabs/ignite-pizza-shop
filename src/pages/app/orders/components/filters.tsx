import { zodResolver } from '@hookform/resolvers/zod'
import { Search, X } from 'lucide-react'
import { useController, useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'

import type { Status } from '~/api/orders/types'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import { Select } from '~/components/ui/select'
import { Tooltip } from '~/components/ui/tooltip'
import type { FiltersSchema } from '~/schemas/filters'
import { filtersSchema } from '~/schemas/filters'

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
  const [params, setParams] = useSearchParams()

  const orderId = params.get('order')
  const customerName = params.get('name')
  const status = params.get('status') as Status | null

  const { control, register, handleSubmit, reset } = useForm<FiltersSchema>({
    resolver: zodResolver(filtersSchema),
    defaultValues: {
      order: orderId ?? '',
      name: customerName ?? '',
      status: status ?? 'all',
    },
  })

  const { field } = useController({
    control,
    name: 'status',
  })

  const handleFilters = handleSubmit((data) => {
    setParams((state) => {
      if (data.order) {
        state.set('order', data.order)
      } else {
        state.delete('order')
      }

      if (data.name) {
        state.set('name', data.name)
      } else {
        state.delete('name')
      }

      if (data.status !== 'all') {
        state.set('status', String(data.status))
      } else {
        state.delete('status')
      }

      state.set('page', '1')

      return state
    })
  })

  const handleClearFilters = () => {
    reset()
    setParams((state) => {
      state.delete('order')
      state.delete('name')
      state.delete('status')
      state.set('page', '1')

      return state
    })
  }

  return (
    <form className="flex items-center gap-2" onSubmit={handleFilters}>
      <Label className="text-sm font-semibold">Filtros:</Label>
      <Input className="h-8 w-64" placeholder="Pesquisar por id" type="text" {...register('order')} />
      <Input className="h-8 w-64" placeholder="Pesquisar por cliente" type="text" {...register('name')} />
      <Select defaultValue="all" onValueChange={field.onChange} value={field.value}>
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
          <Button aria-label="Pesquisar resultados" size="icon-xs" type="submit" variant="outline">
            <Search className="size-4" />
          </Button>
        </Tooltip.Trigger>
        <Tooltip.Content>Pesquisar resultados</Tooltip.Content>
      </Tooltip>
      <Tooltip>
        <Tooltip.Trigger asChild>
          <Button
            aria-label="Limpar filtros"
            onClick={handleClearFilters}
            size="icon-xs"
            type="button"
            variant="outline"
          >
            <X className="size-4" />
          </Button>
        </Tooltip.Trigger>
        <Tooltip.Content>Limpar filtros</Tooltip.Content>
      </Tooltip>
    </form>
  )
}
