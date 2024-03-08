import { subDays } from 'date-fns'
import { useState } from 'react'
import type { DateRange } from 'react-day-picker'
import { CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'

import { useDayRevenueQuery } from '~/api/metrics'
import { Card } from '~/components/ui/card'
import { DateRangePicker } from '~/components/ui/date-range-picker'
import { convertCurrency } from '~/lib/utils'

export const RevenueChart = () => {
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: subDays(new Date(), 7),
    to: new Date(),
  })

  const { data } = useDayRevenueQuery({
    from: dateRange?.from,
    to: dateRange?.to,
  })

  return (
    <Card className="col-span-6 space-y-6">
      <Card.Header className="flex-row items-center justify-between">
        <div className="space-y-1">
          <Card.Title className="text-lg">Receitas no período</Card.Title>
        </div>
        <DateRangePicker date={dateRange} onDateChange={setDateRange} />
      </Card.Header>
      <Card.Content>
        {data ? (
          <ResponsiveContainer height={240} width="100%">
            <LineChart data={data} style={{ fontSize: 12 }}>
              <XAxis axisLine={false} dataKey="date" dy={16} tickLine={false} />
              <YAxis
                axisLine={false}
                tickFormatter={(value: number) => convertCurrency(value)}
                tickLine={false}
                width={80}
              />
              <CartesianGrid className="stroke-muted" vertical={false} />
              <Line dataKey="receipt" stroke="#2563eb" strokeWidth={2} type="monotone" />
            </LineChart>
          </ResponsiveContainer>
        ) : null}
      </Card.Content>
    </Card>
  )
}
