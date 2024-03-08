import { Utensils } from 'lucide-react'

import { useMonthOrdersQuery } from '~/api/metrics'
import { Card } from '~/components/ui/card'
import { Skeleton } from '~/components/ui/skeleton'

import { ShowDiff } from './show-diff'

export const OrdersByMonthCard = () => {
  const { data } = useMonthOrdersQuery()

  return (
    <Card>
      <Card.Header className="flex-row items-center justify-between">
        <Card.Title className="text-lg">Pedidos (mês)</Card.Title>
        <Utensils className="size-5 text-muted-foreground" />
      </Card.Header>
      <Card.Content className="space-y-2">
        {data ? (
          <>
            <span className="block text-3xl font-bold">{data.amount}</span>
            <span className="block text-xs text-muted-foreground">
              <ShowDiff value={data.diffFromLastMonth} /> em relação ao mês passado
            </span>
          </>
        ) : (
          <>
            <Skeleton className="mt-2 h-7 w-16" />
            <Skeleton className="h-4 w-52" />
          </>
        )}
      </Card.Content>
    </Card>
  )
}
