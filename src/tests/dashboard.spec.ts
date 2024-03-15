import { expect, test } from '@playwright/test'

test('display month revenue amount', async ({ page }) => {
  await page.goto('/')

  await expect(page.getByText('R$ 8,50')).toBeVisible()
  await expect(page.getByText('+7% em relação ao mês passado')).toBeVisible()
})

test('display orders by month amount', async ({ page }) => {
  await page.goto('/')

  await expect(page.getByText('35')).toBeVisible()
  await expect(page.getByText('+3% em relação ao mês passado')).toBeVisible()
})

test('display orders by day amount', async ({ page }) => {
  await page.goto('/')

  await expect(page.getByText('100')).toBeVisible()
  await expect(page.getByText('-5% em relação a ontem')).toBeVisible()
})

test('display canceled orders amount', async ({ page }) => {
  await page.goto('/')

  await expect(page.getByText('30')).toBeVisible()
  await expect(page.getByText('+4% em relação ao mês passado')).toBeVisible()
})
