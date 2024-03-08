import { CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'

import { useDayRevenueQuery } from '~/api/metrics'
import { Card } from '~/components/ui/card'

export const RevenueChart = () => {
  const { data } = useDayRevenueQuery()

  if (!data) return null

  return (
    <Card className="col-span-6 space-y-6">
      <Card.Header className="flex-row items-center justify-between">
        <Card.Title className="text-lg">Receitas no período</Card.Title>
        <Card.Description>Receita diária no período</Card.Description>
      </Card.Header>
      <Card.Content>
        <ResponsiveContainer height={240} width="100%">
          <LineChart data={data} style={{ fontSize: 12 }}>
            <XAxis axisLine={false} dataKey="date" dy={16} tickLine={false} />
            <YAxis
              axisLine={false}
              tickFormatter={(value: number) => value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
              tickLine={false}
              width={80}
            />
            <CartesianGrid className="stroke-muted" vertical={false} />
            <Line dataKey="receipt" stroke="#2563eb" strokeWidth={2} type="monotone" />
          </LineChart>
        </ResponsiveContainer>
      </Card.Content>
    </Card>
  )
}
