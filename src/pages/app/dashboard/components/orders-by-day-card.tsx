import { Utensils } from 'lucide-react'

import { useDayOrdersQuery } from '~/api/metrics'
import { Card } from '~/components/ui/card'

import { ShowDiff } from './show-diff'

export const OrdersByDayCard = () => {
  const { data } = useDayOrdersQuery()

  if (!data) return null

  return (
    <Card>
      <Card.Header className="flex-row items-center justify-between">
        <Card.Title className="text-lg">Pedidos (dia)</Card.Title>
        <Utensils className="size-5 text-muted-foreground" />
      </Card.Header>
      <Card.Content className="space-y-2">
        <span className="block text-3xl font-bold">{data.amount}</span>
        <span className="block text-xs text-muted-foreground">
          <ShowDiff value={data.diffFromYesterday} /> em relação a ontem
        </span>
      </Card.Content>
    </Card>
  )
}
