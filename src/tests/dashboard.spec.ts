import { expect, test } from '@playwright/test'

test('display month revenue amount', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(await page.getByText('R$ 8,50').isVisible())
  expect(await page.getByText('+7% em relação ao mês passado').isVisible())
})

test('display orders by month amount', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(await page.getByText('35').isVisible())
  expect(await page.getByText('+3% em relação ao mês passado').isVisible())
})

test('display orders by day amount', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(await page.getByText('100').isVisible())
  expect(await page.getByText('-5% em relação a ontem').isVisible())
})

test('display canceled orders amount', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(await page.getByText('300').isVisible())
  expect(await page.getByText('+4% em relação ao mês passado').isVisible())
})
