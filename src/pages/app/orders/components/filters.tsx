import { Input } from '~/components/ui/input'

export const TableFilters = () => {
  return (
    <form className="flex items-center gap-2">
      <span className="text-sm font-semibold">Filtros</span>
      <Input className="h-8" placeholder="Pesquisar..." type="text" />
    </form>
  )
}
