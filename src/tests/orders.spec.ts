import { expect, test } from '@playwright/test'

test('display orders list', async ({ page }) => {
  await page.goto('/orders')

  await expect(page.getByText('order-1', { exact: true })).toBeVisible()
  await expect(page.getByText('order-10', { exact: true })).toBeVisible()
})

test('display paginated orders', async ({ page }) => {
  await page.goto('/orders')

  await expect(page.getByText('Página 1 de 6', { exact: true })).toBeVisible()

  await page.getByLabel('Próxima página').click()

  await expect(page.getByText('Página 2 de 6', { exact: true })).toBeVisible()

  await page.getByLabel('Última página').click()

  await expect(page.getByText('Página 6 de 6', { exact: true })).toBeVisible()

  await page.getByLabel('Primeira página').click()

  await expect(page.getByText('Página 1 de 6', { exact: true })).toBeVisible()
})

test('filter by order id', async ({ page }) => {
  await page.goto('/orders')

  await expect(page.getByRole('cell', { name: 'order-11' })).toBeHidden()

  await page.getByPlaceholder('Pesquisar por id').fill('order-11')
  await page.getByLabel('Pesquisar resultados').click()

  await expect(page.getByRole('cell', { name: 'order-11' })).toBeVisible()
})

test('filter by customer name', async ({ page }) => {
  await page.goto('/orders')

  await expect(page.getByRole('cell', { name: 'Customer 11' })).toBeHidden()

  await page.getByPlaceholder('Pesquisar por cliente').fill('Customer 11')
  await page.getByLabel('Pesquisar resultados').click()

  await expect(page.getByRole('cell', { name: 'Customer 11' })).toBeVisible()
})

test('filter by status', async ({ page }) => {
  await page.goto('/orders')

  await page.getByRole('combobox').click()
  await page.getByRole('option', { name: 'Entregue' }).click()
  await page.getByLabel('Pesquisar resultados').click()

  await expect(page.getByRole('cell', { name: 'Entregue' })).toHaveCount(10)
})
