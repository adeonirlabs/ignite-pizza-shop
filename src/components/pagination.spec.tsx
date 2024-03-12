import { render, screen, userEvent } from '~/lib/tests'

import { Pagination } from './pagination'

describe('Pagination', () => {
  const onPageChange = vi.fn()

  beforeEach(() => {
    onPageChange.mockClear()
  })

  it('should render correctly the amount of pages and results', () => {
    render(<Pagination onPageChange={onPageChange} pageIndex={0} perPage={10} totalCount={100} />)

    expect(screen.getByText('Página 1 de 10')).toBeInTheDocument()
    expect(screen.getByText('Total de 100 itens')).toBeInTheDocument()
  })

  it('should be able to navigate to the first page', async () => {
    render(<Pagination onPageChange={onPageChange} pageIndex={5} perPage={10} totalCount={100} />)

    await userEvent.click(screen.getByLabelText('Primeira página'))
    expect(onPageChange).toHaveBeenCalledWith(0)
  })

  it('should be able to navigate to the previews page', async () => {
    render(<Pagination onPageChange={onPageChange} pageIndex={3} perPage={10} totalCount={100} />)

    await userEvent.click(screen.getByLabelText('Página anterior'))
    expect(onPageChange).toHaveBeenCalledWith(2)
  })

  it('should be able to navigate to the next page', async () => {
    render(<Pagination onPageChange={onPageChange} pageIndex={0} perPage={10} totalCount={100} />)

    await userEvent.click(screen.getByLabelText('Próxima página'))
    expect(onPageChange).toHaveBeenCalledWith(1)
  })

  it('should be able to navigate to the last page', async () => {
    render(<Pagination onPageChange={onPageChange} pageIndex={0} perPage={10} totalCount={100} />)

    await userEvent.click(screen.getByLabelText('Última página'))
    expect(onPageChange).toHaveBeenCalledWith(9)
  })
})
