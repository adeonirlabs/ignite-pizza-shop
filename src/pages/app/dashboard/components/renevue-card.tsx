import { DollarSign } from 'lucide-react'

import { Card } from '~/components/ui/card'

export const RevenueCard = () => {
  return (
    <Card>
      <Card.Header className="flex-row items-center justify-between">
        <Card.Title className="text-lg">Receita total (mês)</Card.Title>
        <DollarSign className="size-5 text-muted-foreground" />
      </Card.Header>
      <Card.Content className="space-y-2">
        <span className="block text-3xl font-bold">R$ 1200,00</span>
        <span className="block text-xs text-muted-foreground">
          <span className="text-emerald-500 dark:text-emerald-400">+2%</span> em relação ao mês passado
        </span>
      </Card.Content>
    </Card>
  )
}
