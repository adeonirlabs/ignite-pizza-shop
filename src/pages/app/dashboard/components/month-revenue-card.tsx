import { DollarSign } from 'lucide-react'

import { useMonthRevenueQuery } from '~/api/metrics'
import { Card } from '~/components/ui/card'
import { Skeleton } from '~/components/ui/skeleton'
import { convertCurrency } from '~/lib/utils'

import { ShowDiff } from './show-diff'

export const MonthRevenueCard = () => {
  const { data } = useMonthRevenueQuery()

  return (
    <Card>
      <Card.Header className="flex-row items-center justify-between">
        <Card.Title className="text-lg">Receita total (mês)</Card.Title>
        <DollarSign className="size-5 text-muted-foreground" />
      </Card.Header>
      <Card.Content className="space-y-2">
        {data ? (
          <>
            <span className="block text-3xl font-bold">{convertCurrency(data.receipt)}</span>
            <span className="block text-xs text-muted-foreground">
              <ShowDiff value={data.diffFromLastMonth} /> em relação ao mês passado
            </span>
          </>
        ) : (
          <>
            <Skeleton className="mt-2 h-7 w-32" />
            <Skeleton className="h-4 w-52" />
          </>
        )}
      </Card.Content>
    </Card>
  )
}
