/* eslint-disable no-nested-ternary */
import { format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'
import type { HTMLAttributes } from 'react'
import type { DateRange } from 'react-day-picker'

import { Button } from '~/components/ui/button'
import { Calendar } from '~/components/ui/calendar'
import { Popover } from '~/components/ui/popover'
import { cn } from '~/lib/utils'

interface DateRangePickerProps extends HTMLAttributes<HTMLDivElement> {
  date: DateRange | undefined
  onDateChange: (date: DateRange | undefined) => void
}

export const DateRangePicker = ({ className, date, onDateChange }: DateRangePickerProps) => {
  return (
    <div className={cn('grid gap-2', className)}>
      <Popover>
        <Popover.Trigger asChild>
          <Button
            className={cn('w-[300px] justify-start text-left font-normal', !date && 'text-muted-foreground')}
            id="date"
            variant="outline"
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, 'LLL dd, y')} - {format(date.to, 'LLL dd, y')}
                </>
              ) : (
                format(date.from, 'LLL dd, y')
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </Popover.Trigger>
        <Popover.Content align="start" className="w-auto p-0">
          <Calendar
            defaultMonth={date?.from}
            initialFocus
            mode="range"
            numberOfMonths={2}
            onSelect={onDateChange}
            selected={date}
          />
        </Popover.Content>
      </Popover>
    </div>
  )
}
