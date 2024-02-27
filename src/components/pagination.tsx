import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react'
import { useMemo } from 'react'

import { Button } from './ui/button'
import { Label } from './ui/label'
import { Tooltip } from './ui/tooltip'

interface PaginationProps {
  pageIndex: number
  perPage: number
  totalCount: number
  onPageChange: (page: number) => Promise<void> | void
}

export const Pagination = ({ pageIndex, perPage, totalCount, onPageChange }: PaginationProps) => {
  const totalPages = Math.ceil(totalCount / perPage) || 1
  const currentPage = useMemo(() => pageIndex + 1, [pageIndex])

  const handleFirst = () => onPageChange(0)
  const handleLast = () => onPageChange(totalPages - 1)
  const handlePrevious = () => onPageChange(pageIndex - 1)
  const handleNext = () => onPageChange(pageIndex + 1)

  return (
    <div className="flex items-center justify-between border-t border-muted-foreground/20 px-3 py-2">
      <Label className="text-sm text-muted-foreground">{`Total de ${totalCount} ${totalCount === 1 ? 'item' : 'itens'}`}</Label>
      <div className="flex items-center gap-1">
        <Label className="mr-2 text-sm">{`Página ${currentPage} de ${totalPages}`}</Label>
        <Tooltip>
          <Tooltip.Trigger asChild>
            <Button
              aria-label="Primeira página"
              disabled={currentPage === 1}
              onClick={handleFirst}
              size="icon-sm"
              variant="ghost"
            >
              <ChevronsLeft className="size-4" />
            </Button>
          </Tooltip.Trigger>
          <Tooltip.Content>Primeira página</Tooltip.Content>
        </Tooltip>
        <Tooltip>
          <Tooltip.Trigger asChild>
            <Button
              aria-label="Página anterior"
              disabled={currentPage === 1}
              onClick={handlePrevious}
              size="icon-sm"
              variant="ghost"
            >
              <ChevronLeft className="size-4" />
            </Button>
          </Tooltip.Trigger>
          <Tooltip.Content>Página anterior</Tooltip.Content>
        </Tooltip>
        <Tooltip>
          <Tooltip.Trigger asChild>
            <Button
              aria-label="Próxima página"
              disabled={currentPage === totalPages}
              onClick={handleNext}
              size="icon-sm"
              variant="ghost"
            >
              <ChevronRight className="size-4" />
            </Button>
          </Tooltip.Trigger>
          <Tooltip.Content>Próxima página</Tooltip.Content>
        </Tooltip>
        <Tooltip>
          <Tooltip.Trigger asChild>
            <Button
              aria-label="Última página"
              disabled={currentPage === totalPages}
              onClick={handleLast}
              size="icon-sm"
              variant="ghost"
            >
              <ChevronsRight className="size-4" />
            </Button>
          </Tooltip.Trigger>
          <Tooltip.Content>Última página</Tooltip.Content>
        </Tooltip>
      </div>
    </div>
  )
}
