/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/no-array-index-key */
import { Loader2 } from 'lucide-react'
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'
import colors from 'tailwindcss/colors'

import { usePopularProductsQuery } from '~/api/metrics'
import { Card } from '~/components/ui/card'

const COLORS = [colors.cyan[500], colors.yellow[500], colors.violet[500], colors.emerald[500], colors.rose[500]]

export const PopularProductsChart = () => {
  const { data } = usePopularProductsQuery()

  return (
    <Card className="col-span-3 space-y-6">
      <Card.Header className="flex-row items-center justify-between">
        <Card.Title className="text-lg">Produtos populares</Card.Title>
      </Card.Header>
      <Card.Content>
        {data ? (
          <ResponsiveContainer height={240} width="100%">
            <PieChart style={{ fontSize: 12 }}>
              <Pie
                cornerRadius={4}
                cx="50%"
                cy="50%"
                data={data}
                dataKey="amount"
                fill="#8884d8"
                innerRadius={60}
                label={({ cx, cy, midAngle, innerRadius, outerRadius, value, index }) => {
                  const RADIAN = Math.PI / 180
                  const radius = 12 + innerRadius + (outerRadius - innerRadius)
                  const x = cx + radius * Math.cos(-midAngle * RADIAN)
                  const y = cy + radius * Math.sin(-midAngle * RADIAN)

                  return (
                    <text
                      className="fill-muted-foreground text-xs"
                      dominantBaseline="central"
                      textAnchor={x > cx ? 'start' : 'end'}
                      x={x}
                      y={y}
                    >
                      {data[index].product.length > 12
                        ? data[index].product.substring(0, 12).concat('...')
                        : data[index].product}{' '}
                      ({value})
                    </text>
                  )
                }}
                nameKey="product"
                outerRadius={80}
                paddingAngle={4}
                strokeWidth={0}
              >
                {data.map((_, index) => (
                  <Cell fill={COLORS[index]} key={`cell-${index}`} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        ) : (
          <div className="flex h-60 w-full items-center justify-center">
            <Loader2 className="size-16 animate-spin text-muted" />
          </div>
        )}
      </Card.Content>
    </Card>
  )
}
