import { LineChart } from 'lucide-react'

import { Card } from '~/components/ui/card'

export const CancelledByMonthCard = () => {
  return (
    <Card>
      <Card.Header className="flex-row items-center justify-between">
        <Card.Title className="text-lg">Cancelamentos (dia)</Card.Title>
        <LineChart className="size-5 text-muted-foreground" />
      </Card.Header>
      <Card.Content className="space-y-2">
        <span className="block text-3xl font-bold">37</span>
        <span className="block text-xs text-muted-foreground">
          <span className="text-rose-500 dark:text-rose-400">+2%</span> em relação ao mês passado
        </span>
      </Card.Content>
    </Card>
  )
}
