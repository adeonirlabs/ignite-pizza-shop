import { CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'

import { Card } from '~/components/ui/card'

const data = [
  { date: '01/01', revenue: 1000 },
  { date: '01/02', revenue: 560 },
  { date: '01/03', revenue: 820 },
  { date: '01/04', revenue: 760 },
  { date: '01/05', revenue: 1200 },
  { date: '01/06', revenue: 980 },
  { date: '01/07', revenue: 300 },
]

export const RevenueChart = () => {
  return (
    <Card className="col-span-6 space-y-6">
      <Card.Header className="flex-row items-center justify-between">
        <Card.Title className="text-lg">Receitas no período</Card.Title>
        <Card.Description>Receita diária no período</Card.Description>
      </Card.Header>
      <Card.Content>
        <ResponsiveContainer height={240} width="100%">
          <LineChart data={data} style={{ fontSize: 12 }}>
            <YAxis
              axisLine={false}
              tickFormatter={(value: number) => value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
              tickLine={false}
              width={80}
            />
            <XAxis axisLine={false} dataKey="date" dy={16} tickLine={false} />
            <CartesianGrid className="stroke-muted" vertical={false} />
            <Line dataKey="revenue" stroke="#2563eb" strokeWidth={2} type="monotone" />
          </LineChart>
        </ResponsiveContainer>
      </Card.Content>
    </Card>
  )
}
