import { expect, test } from '@playwright/test'

test('update profile successfully', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('button', { name: 'Pizza Shop' }).click()
  await page.getByRole('menuitem', { name: 'Perfil' }).click()
  await page.getByLabel('Nome').fill('Rocket Pizza')
  await page.getByLabel('Descrição').fill('The best pizza in town!')
  await page.getByRole('button', { name: 'Salvar' }).click()

  await expect(page.getByText('Perfil do estabelecimento atualizado com sucesso!')).toBeVisible()

  await page.getByRole('button', { name: 'Close' }).click()

  await expect(page.getByRole('button', { name: 'Rocket Pizza' })).toBeVisible()
})
