import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react'

import { Button } from './ui/button'
import { Label } from './ui/label'
import { Tooltip } from './ui/tooltip'

interface PaginationProps {
  currentPage: number
  perPage: number
  totalCount: number
}

export const Pagination = ({ currentPage, perPage, totalCount }: PaginationProps) => {
  const pages = Math.ceil(totalCount / perPage) || 1

  return (
    <div className="flex items-center justify-between border-t border-muted-foreground/20 px-3 py-2">
      <Label className="text-sm text-muted-foreground">{`Total de ${totalCount} ${totalCount === 1 ? 'item' : 'itens'}`}</Label>
      <div className="flex items-center gap-1">
        <Label className="mr-2 text-sm">{`Página ${currentPage} de ${pages}`}</Label>
        <Tooltip>
          <Tooltip.Trigger asChild>
            <Button aria-label="Primeira página" size="icon-sm" variant="ghost">
              <ChevronsLeft className="size-4" />
            </Button>
          </Tooltip.Trigger>
          <Tooltip.Content>Primeira página</Tooltip.Content>
        </Tooltip>
        <Tooltip>
          <Tooltip.Trigger asChild>
            <Button aria-label="Página anterior" size="icon-sm" variant="ghost">
              <ChevronLeft className="size-4" />
            </Button>
          </Tooltip.Trigger>
          <Tooltip.Content>Página anterior</Tooltip.Content>
        </Tooltip>
        <Tooltip>
          <Tooltip.Trigger asChild>
            <Button aria-label="Próxima página" size="icon-sm" variant="ghost">
              <ChevronRight className="size-4" />
            </Button>
          </Tooltip.Trigger>
          <Tooltip.Content>Próxima página</Tooltip.Content>
        </Tooltip>
        <Tooltip>
          <Tooltip.Trigger asChild>
            <Button aria-label="Última página" size="icon-sm" variant="ghost">
              <ChevronsRight className="size-4" />
            </Button>
          </Tooltip.Trigger>
          <Tooltip.Content>Última página</Tooltip.Content>
        </Tooltip>
      </div>
    </div>
  )
}
