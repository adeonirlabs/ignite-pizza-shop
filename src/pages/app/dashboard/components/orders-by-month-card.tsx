import { Utensils } from 'lucide-react'

import { Card } from '~/components/ui/card'

export const OrdersByMonthCard = () => {
  return (
    <Card>
      <Card.Header className="flex-row items-center justify-between">
        <Card.Title className="text-lg">Pedidos (mês)</Card.Title>
        <Utensils className="size-5 text-muted-foreground" />
      </Card.Header>
      <Card.Content className="space-y-2">
        <span className="block text-3xl font-bold">246</span>
        <span className="block text-xs text-muted-foreground">
          <span className="text-emerald-500 dark:text-emerald-400">+6%</span> em relação ao mês passado
        </span>
      </Card.Content>
    </Card>
  )
}
