import { Utensils } from 'lucide-react'

import { Card } from '~/components/ui/card'

export const OrdersByDayCard = () => {
  return (
    <Card>
      <Card.Header className="flex-row items-center justify-between">
        <Card.Title className="text-lg">Pedidos (dia)</Card.Title>
        <Utensils className="size-5 text-muted-foreground" />
      </Card.Header>
      <Card.Content className="space-y-2">
        <span className="block text-3xl font-bold">12</span>
        <span className="block text-xs text-muted-foreground">
          <span className="text-rose-500 dark:text-rose-400">-4%</span> em relação a ontem
        </span>
      </Card.Content>
    </Card>
  )
}
