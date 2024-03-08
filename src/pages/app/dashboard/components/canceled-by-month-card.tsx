import { LineChart } from 'lucide-react'

import { useMonthCanceledOrdersQuery } from '~/api/metrics'
import { Card } from '~/components/ui/card'

import { ShowDiff } from './show-diff'

export const CancelledByMonthCard = () => {
  const { data } = useMonthCanceledOrdersQuery()

  if (!data) return null

  return (
    <Card>
      <Card.Header className="flex-row items-center justify-between">
        <Card.Title className="text-lg">Cancelamentos (dia)</Card.Title>
        <LineChart className="size-5 text-muted-foreground" />
      </Card.Header>
      <Card.Content className="space-y-2">
        <span className="block text-3xl font-bold">{data.amount}</span>
        <span className="block text-xs text-muted-foreground">
          <ShowDiff value={-data.diffFromLastMonth} /> em relação ao mês passado
        </span>
      </Card.Content>
    </Card>
  )
}
